var x3dom = require('../node/fields.js');
if (typeof X3DJSON === 'undefined') {
	var X3DJSON = {};
}
if (typeof __eventTime === 'undefined') {
	var __eventTime = 0;
}
if (typeof x3dom !== 'undefined') {
    var MFBool = x3dom.fields.MFBoolean;
    var MFColor = x3dom.fields.MFColor;
    var MFColorRGBA = x3dom.fields.MFColorRGBA;
    var MFFloat = x3dom.fields.MFFloat;
    var MFInt32 = x3dom.fields.MFInt32;
    var MFNode = x3dom.fields.MFNode;
    var MFRotation = x3dom.fields.MFRotation;
    var MFString = x3dom.fields.MFString;
    var MFVec2f = x3dom.fields.MFVec2f;
    var MFVec3f = x3dom.fields.MFVec3f;
    var Quaternion = x3dom.fields.Quaternion;
    var SFColor = x3dom.fields.SFColor;
    var SFColorRGBA = x3dom.fields.SFColorRGBA;
    var SFImage = x3dom.fields.SFImage;
    var SFMatrix4f = x3dom.fields.SFMatrix4f;
    var SFNode = x3dom.fields.SFNode;
    var SFRotation = x3dom.fields.SFRotation;
    var SFVec2f = x3dom.fields.SFVec2f;
    var SFVec3f = x3dom.fields.SFVec3f;
    var SFVec4f = x3dom.fields.SFVec4f;
} else {
    var SFVec3f = function() { return Array.prototype.slice.call(arguments, 0); };
}
var SFString = String;
var SFTime = Number;
var SFDouble = Number;
var SFFloat = Number;
var SFInt32 = Number;
var SFBool = Boolean;
var MFDouble = function() { return Array.prototype.slice.call(arguments, 0); };
var MFImage = function() { return Array.prototype.slice.call(arguments, 0); };
var MFMatrix3d = function() { return Array.prototype.slice.call(arguments, 0); };
var MFMatrix3f = function() { return Array.prototype.slice.call(arguments, 0); };
var MFMatrix4d = function() { return Array.prototype.slice.call(arguments, 0); };
var MFMatrix4f = function() { return Array.prototype.slice.call(arguments, 0); };
var MFTime = function() { return Array.prototype.slice.call(arguments, 0); };
var MFVec2d = function() { return Array.prototype.slice.call(arguments, 0); };
var MFVec3d = function() { return Array.prototype.slice.call(arguments, 0); };
var MFVec4d = function() { return Array.prototype.slice.call(arguments, 0); };
var MFVec4f = function() { return Array.prototype.slice.call(arguments, 0); };
var SFMatrix3d = function() { return Array.prototype.slice.call(arguments, 0); };
var SFMatrix3f = function() { return Array.prototype.slice.call(arguments, 0); };
var SFMatrix4d = function() { return Array.prototype.slice.call(arguments, 0); };
var SFVec2d = function() { return Array.prototype.slice.call(arguments, 0); };
var SFVec3d = function() { return Array.prototype.slice.call(arguments, 0); };
var SFVec4d = function() { return Array.prototype.slice.call(arguments, 0); };
if (typeof document === 'undefined') {
	document = { querySelector : function() {;
		return {
			setAttribute : function(field, value) {
				this[field] = value;
				console.log('set '+ field+ '='+ value);
			},
			getAttribute : function(field) {
				var value = this[field];
				console.log('get '+ field+ '='+ value);
			}
		};
	}};
}
if (typeof $ !== 'function') {
	$ = function() { return { attr : function() {}, 0 : null }; };
}
X3DJSON.nodeUtil = function(selector, node, field, value) {
		if (typeof selector === 'undefined') {
			selector = "";
		} else {
			selector = selector+" ";
		}
		selector = selector+"[DEF='"+node+"']";
		var element = document.querySelector(selector);
		if (element === null) {
			console.error('unDEFed node', node, selector);
		} else if (arguments.length > 3) {
			/*
			if (value && typeof value.toString === 'function') {
				value = value.toString();
			}
			$(selector).attr(field, value);
			// console.log('set', node, '.', field, '=', value);
			*/
			try {
				if (typeof element.setFieldValue === 'function') {
					element.setFieldValue(field, value);
				} else {
					element.setAttribute(field, value);
				}
			} catch (e) {
				console.log(e);
			}
			return element;
		} else if (arguments.length > 2) {
			if (typeof element.getFieldValue === 'function') {
				value = element.getFieldValue(field);
			} else {
				value = element.getAttribute(field);
			}
			/*
			if (element &&
				element._x3domNode &&
				element._x3domNode._vf &&
				element._x3domNode._vf[field] &&
				element._x3domNode._vf[field].setValueByStr) {
				value = element._x3domNode._vf[field].setValueByStr(value);
			}
			*/
			// console.log('get', node, '.', field,'=',value);
			return value;
		} else if (arguments.length > 0) {
			return $(selector)[0];
		} else {
			return;
		}
};
X3DJSON.createProxy = function(action, scriptObject) {
	var proxy = new Proxy(scriptObject, {
		get: function(target, property, receiver) {
			return Reflect.get(target, property, receiver);
		},
		set: function(target, property, value, receiver) {
                 if (typeof action[property] === 'object') {
                        for (var route in action[property]) {
                                if (typeof action[property][route] === 'function') {
                                        action[property][route](property, value);
   		                     // console.log('Set',property,'to', value);
                                }
                        }
                 }
		      return Reflect.set(target, property, value, receiver);
		}
	});
	return proxy;
};
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json'] = {};
}

if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript'] = function() {
	this.set_newInputValue = function (value) {
		try {
			this.proxy.newInputValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting newInputValue '+e);
			console.error('Problems setting newInputValue',e);
		}
	};
	this.newInputValue_changed = function () {
		var value = this.newInputValue;
		return value;
	};
	try {
		this.newInputValue = new SFFloat();
	} catch (e) {
		console.log('Problems setting newInputValue '+e);
		console.error('Problems setting newInputValue',e);
	}
	this.set_gridOutput = function (value) {
		try {
			this.proxy.gridOutput = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting gridOutput '+e);
			console.error('Problems setting gridOutput',e);
		}
	};
	this.gridOutput_changed = function () {
		var value = this.gridOutput;
		return value;
	};
	try {
		this.gridOutput = new MFFloat();
	} catch (e) {
		console.log('Problems setting gridOutput '+e);
		console.error('Problems setting gridOutput',e);
	}
	this.set_waveStep = function (value) {
		try {
			this.proxy.waveStep = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting waveStep '+e);
			console.error('Problems setting waveStep',e);
		}
	};
	this.waveStep_changed = function () {
		var value = this.waveStep;
		return value;
	};
	try {
		this.waveStep = new SFTime(0.1);
	} catch (e) {
		console.log('Problems setting waveStep '+e);
		console.error('Problems setting waveStep',e);
	}


ecmascript:

	this.newInputValue = function (eventValue)
{
   fraction = eventValue; // connected by ROUTE, receives values from TimeSensor Clock fraction_changed

   value0 = 0.2 * Math.sin (2 * Math.PI * (fraction - 4*this.proxy.waveStep));
   value1 = 0.2 * Math.sin (2 * Math.PI * (fraction - 3*this.proxy.waveStep));
   value2 = 0.2 * Math.sin (2 * Math.PI * (fraction - 2*this.proxy.waveStep));
   value3 = 0.2 * Math.sin (2 * Math.PI * (fraction -   this.proxy.waveStep));
   value4 = 0.2 * Math.sin (2 * Math.PI * (fraction             ));
   value5 = 0.2 * Math.sin (2 * Math.PI * (fraction +   this.proxy.waveStep));
   value6 = 0.2 * Math.sin (2 * Math.PI * (fraction + 2*this.proxy.waveStep));
   value7 = 0.2 * Math.sin (2 * Math.PI * (fraction + 3*this.proxy.waveStep));
   value8 = 0.2 * Math.sin (2 * Math.PI * (fraction + 4*this.proxy.waveStep));

   // setting the this.proxy.gridOutput value creates an output event that is connected via ROUTE to the ElevationGrid set_height field.
   // note that types match (MFFloat) and accessTypes also match (output_only connects to inputOnly).
   this.proxy.gridOutput = new MFFloat (
		value0, value1, value2, value3, value4, value5, value6, value7, value8,
		value0, value1, value2, value3, value4, value5, value6, value7, value8,
		value0, value1, value2, value3, value4, value5, value6, value7, value8 );
}

;

};
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript'].initialize();
    if (X3DJSON.nodeUtil("Scene","Clock")) {
X3DJSON.nodeUtil("Scene","Clock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript'].newInputValue(X3DJSON.nodeUtil("Scene","Clock","fraction"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript'].newInputValue(X3DJSON.nodeUtil("Scene","Clock","fraction"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript']['ACTION']['gridOutput'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript']['ACTION']['gridOutput'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript']['ACTION']['gridOutput'].push(function(property, value) {
		if (property === 'gridOutput') {
			X3DJSON.nodeUtil("Scene","GridSurface","height",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript'].gridOutput === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript'].gridOutput() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript'].gridOutput, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","GridSurface","height",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript'].gridOutput === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript'].gridOutput() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript'].gridOutput, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript'].newInputValue(X3DJSON.nodeUtil("Scene","Clock","fraction"), __eventTime);
			X3DJSON.nodeUtil("Scene","GridSurface","height",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript'].gridOutput === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript'].gridOutput() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ElevationGridSimpleWaveAnimation.json']['WaveGenerationScript'].gridOutput, __eventTime);