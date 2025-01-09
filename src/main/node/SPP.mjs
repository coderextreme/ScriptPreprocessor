// X3D JSON Script preprocessor

import fs from 'fs';
import mkdirp from 'node-mkdirp';
import { Scripts, LOG } from './Script.mjs';
import { x3dom } from './fields.mjs';

const scripts = new Scripts();

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

	classes.push("var x3dom;");
	classes.push("async function fetch_import(module) {");
	classes.push("  x3dom = await import(module);");
	classes.push("  return x3dom;");
	classes.push("}");
	classes.push("if (typeof x3dom === 'undefined') {");
	classes.push("  x3dom = fetch_import('../node/fields.mjs');");
	classes.push("}");
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
		fs.writeFileSync(outfile+".good.mjs", totalcode);
		console.error("OUTPUTTED", outfile+".good.mjs");
	} catch (e) {
		fs.writeFileSync(outfile+".bad.mjs", totalcode);
		console.error("See src/main/shell/"+outfile+".bad.mjs for bad code", e);
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
