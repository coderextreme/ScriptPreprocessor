"use strict";

var fs = require('fs');
var mkdirp = require('node-mkdirp');
var mapToMethod = require('./mapToMethod.js');
var config = require('./config.js');
var mapToMethod2 = require('./mapToMethod2.js');
var fieldTypes = require('./fieldTypes.js');
var X3DJSONLD = require('./X3DJSONLD.js');
var Script = require('./Script');
var loadValidate = require("./loadValidate.js");
const { DOMParser, XMLSerializer, DOMImplementation } = require('@xmldom/xmldom')

var replaceX3DJSON = loadValidate.replaceX3DJSON;
var loadSchema = loadValidate.loadSchema;
var loadX3DJS = loadValidate.loadX3DJS;
var doValidate = loadValidate.doValidate;
//console.error("DOM", DOMImplementation);
var domImpl = new DOMImplementation();
//console.error("DOM Impl", domImpl);

var LOG = Script.LOG;
X3DJSONLD = Object.assign(X3DJSONLD, { processURLs : function(urls) { return urls; }});
var selectObjectFromJSObj = X3DJSONLD.selectObjectFromJSObj;

if (typeof mapToMethod2 !== 'undefined') {
	for (var map in mapToMethod2) {
		Object.assign(mapToMethod[map], mapToMethod2[map]);
	}
}
/*
for (var par in mapToMethod2) {
	for (var child in mapToMethod2[par]) {
		mapToMethod[par][child] = mapToMethod2[par][child];
	}
}
*/

function convertJSON(options) {

	var files = process.argv;
	for (var f in files) {
		var file = files[f];
		if (file.match(/node_modules|package.json|JSONSchema/)) {
			continue;
		}
		var basefile = file.substr(0, file.lastIndexOf("."));
		var file = basefile+".json";
		// console.error("Reading", file, domImpl);
		var str = fs.readFileSync(file).toString();
		if (typeof str === 'undefined') {
			throw("Read nothing, or possbile error");
		}
		var json = null;
		try {  
			json = JSON.parse(str);
		} catch (e) {
			console.error("================================================================================");
			console.error("File:", file);
			console.error("Error:", e);
			continue;
		}
		var NS = "https://www.web3d.org/specifications/x3d";
		// console.error("loading", file);
		loadX3DJS(domImpl, json, file, NS, function(element, xml) {
			if (typeof element === undefined) {
				throw ("Undefined element returned from loadX3DJS()")
			}
			if (typeof element === null) {
				throw ("Null element returned from loadX3DJS()")
			}
			// filename conversion goes here.
			/*
			var x3dcodeind = basefile.indexOf(config.x3dcode);
			if (x3dcodeind === 0) {
				basefile = basefile.substring(config.x3dcode.length);
			}
			*/
			// console.error("basefile0", basefile);
			basefile = basefile.replace(/^C:\//, "")
			basefile = basefile.replace(/^\.\.\//, "")
			basefile = basefile.replace(/-| /g, "_")
			// handle filenames with leading zeros and java keywords
			basefile = basefile.replace(/^(.*[\\\/])([0-9].*|default|switch|for)$/, "$1_$2")
			// console.error(basefile);

			for (var ser in options) {
				var serializer = require(options[ser].serializer);
				var co = options[ser].codeOutput+basefile;
				try {
					str = new serializer().serializeToString(json, element, co, mapToMethod, fieldTypes)
				} catch (e) {
					console.error(e);
				}
				if (typeof str !== 'undefined') {
					var outfile = options[ser].folder+basefile+options[ser].extension
					if (options[ser].extension === ".clj") {
						outfile = options[ser].folder+basefile+"/"+basefile+options[ser].extension
					}
					try {
						mkdirp(outfile.substr(0, outfile.lastIndexOf("/")));
						fs.writeFileSync(outfile, str);
					} catch (e) {
						console.error("Problems creating folder or writing file for", outfile);
					}
				} else {
					throw("Wrote nothing, serializer returned nothing");
				}
			}
		});
	}
}

if (typeof module === 'object')  {
	module.exports = {
		convertJSON: convertJSON,
		loadSchema: loadSchema,
		loadX3DJS: loadX3DJS,
		doValidate: doValidate
	};
}
