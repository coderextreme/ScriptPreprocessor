// X3D JSON Script preprocessor

const fs = require('fs');
const mkdirp = require('node-mkdirp');
const Scripts = require('./Script.js');
const x3dom = require('./fields.js');

const LOG = Scripts.LOG;
const scripts = new Scripts.Scripts();
const processScripts = Scripts.processScripts;

function ProcessJSON(json, file) {
	var outfile = file.replace(/data/, "spp");
	outfile = outfile.replace(/.*www.web3d.org/, "../www.web3d.org/spp");
	var dir = outfile.substring(0, outfile.lastIndexOf("/"));
	try {
		if (!fs.existsSync(dir)) {
			mkdirp(dir);
		}
	} catch (e) {
		console.error("Error creating", dir);
	}
	var classes = new LOG();
	var routecode = new LOG();
	var loopItems = new LOG();

	classes.push("var x3dom = require('../node/fields.js');");
	classes.push("if (typeof X3DJSON === 'undefined') {");
	classes.push("	var X3DJSON = {};");
	classes.push("}");
	classes.push("if (typeof __eventTime === 'undefined') {");
	classes.push("	var __eventTime = 0;");
	classes.push("}");
	scripts.processScripts(json, classes, undefined, routecode, loopItems, "Scene", file); // selector is Scene
	var code = classes.join('\n')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')

	var route = routecode.join('\n');
	var loop = loopItems.join('\n');
	var totalcode = code+"\n"+route+"\n"+loop;
	try {
		eval(totalcode);
		fs.writeFileSync(outfile+".good.js", totalcode);
		console.error("OUTPUTTED", outfile+".good.js");
	} catch (e) {
		fs.writeFileSync(outfile+".js", totalcode);
		console.error("See "+outfile+".js for bad code", e);
	}
}

process.argv.shift();
process.argv.shift();

var files = process.argv;
for (var f in files) {
	var file = files[f];
	try {
		var content = fs.readFileSync(file).toString();
		var json = JSON.parse(content);
		ProcessJSON(json, file);
	} catch (e) {
		console.error(e);
	}
}
