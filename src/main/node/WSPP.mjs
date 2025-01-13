// X3D JSON Script preprocessor

import fs from 'fs';
import mkdirp from 'node-mkdirp';
import { Scripts, LOG } from './Script.mjs';
import { x3dom } from './fields.mjs';

const scripts = new Scripts();

function ProcessJSON(json, file) {
    console.debug("Processing JSON for file:", file);
    let outfile = file.replace(/data/, "spp");
    outfile = outfile.replace(/.*www.web3d.org/, "../www.web3d.org/spp");
    let dir = outfile.substring(0, outfile.lastIndexOf("/"));

    try {
        console.debug("Output directory:", dir);
        if (!fs.existsSync(dir)) {
            console.debug("Creating directory:", dir);
            mkdirp.sync(dir);
        }
    } catch (e) {
        console.error("Error creating directory:", dir, e);
        return;
    }

    let classes = new LOG();
    let routecode = new LOG();
    let loopItems = new LOG();

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

    try {
        scripts.processScripts(json, classes, undefined, routecode, loopItems, "Scene", file);
    } catch (e) {
        console.error("Error processing scripts for file:", file, e);
        return;
    }

    let code = classes.join('\n')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>');

    let route = routecode.join('\n');
    let loop = loopItems.join('\n');
    let totalcode = code + "\n" + route + "\n" + loop;

    try {
        console.debug("Evaluating generated code for file:", file);
        eval(totalcode);
        fs.writeFileSync(outfile + ".good.js", totalcode);
        console.error("OUTPUTTED", outfile + ".good.mjs");
    } catch (e) {
        console.error("ERROR Saving as "+outfile + ".bad.mjs:", e);
        fs.writeFileSync(outfile + ".bad.js", totalcode);
    }
}

process.argv.shift();
process.argv.shift();

let files = process.argv;

try {
    console.debug("Files passed to the script:", files);
    let file = files[0].replace(/\\/g, "/");
    let content = fs.readFileSync(file, 'utf8');

    // Strip BOM if present
    if (content.charCodeAt(0) === 0xFEFF) {
        console.warn("BOM detected and removed from file:", file);
        content = content.slice(1);
    }

    fs.writeFileSync(file, content, 'utf8');
    content = fs.readFileSync(file, 'utf8');

    console.debug("File content after normalization:", content);
    console.debug("Processing file:", file);

    files = JSON.parse(content);

    for (let f in files) {
    	file = files[f];
    	console.debug("Processing file to replace \\:", f, file);
	file = file.replace(/\\/g, "/");
        console.debug("Processing individual file:", file);
        try {
            let content = fs.readFileSync(file, 'utf8');

            // Strip BOM if present in individual files
            if (content.charCodeAt(0) === 0xFEFF) {
                console.warn("BOM detected and removed from file:", file);
                content = content.slice(1);
            }

            let json = JSON.parse(content);
            ProcessJSON(json, file);
        } catch (e) {
            console.error("Error reading or parsing file:", file, e);
        }
    }
} catch (e) {
    console.error("Critical error while initializing script:", e);
}
