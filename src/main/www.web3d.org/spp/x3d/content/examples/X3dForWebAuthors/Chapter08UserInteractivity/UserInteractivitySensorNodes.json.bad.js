var x3dom = require('../node/fields.js');
if (typeof X3DJSON === 'undefined') {
	var X3DJSON = {};
}
if (typeof __eventTime === 'undefined') {
	var __eventTime = 0;
}
if (typeof x3dom !== 'undefined' && typeof x3dom.fields !== 'undefined') {
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
    var MFVec3f = function() { return Array.prototype.slice.call(arguments, 0); };
    var MFInt32 = function() { return Array.prototype.slice.call(arguments, 0); };
    var MFFloat = function() { return Array.prototype.slice.call(arguments, 0); };
    var MFString = function() { return Array.prototype.slice.call(arguments, 0); };
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
	var document = { querySelector : function(selector) {;
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
X3DJSON.nodeUtil = function(selector, node, field, value) {
		if (typeof selector === 'undefined') {
			selector = "";
		} else {
			selector = selector+" ";
		}
		selector = selector+"[DEF='"+node+"']";
		var element = (document ? document.querySelector(selector) : null);
		if (element === null) {
			console.error('unDEFed node', node, selector);
		} else if (arguments.length > 3) {
			/*
			if (value && typeof value.toString === 'function') {
				value = value.toString();
			}
			document ? document.querySelector(selector).attr(field, value) : console.error('No document');
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
			return document.querySelector(selector)[0];
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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'] = function() {
	this.set_keyInput = function (value) {
		try {
			this.proxy.keyInput = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting keyInput '+e);
			console.error('Problems setting keyInput',e);
		}
	};
	this.keyInput_changed = function () {
		var value = this.keyInput;
		return value;
	};
	try {
		this.keyInput = new SFString();
	} catch (e) {
		console.log('Problems setting keyInput '+e);
		console.error('Problems setting keyInput',e);
	}
	this.set_finalTextInput = function (value) {
		try {
			this.proxy.finalTextInput = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting finalTextInput '+e);
			console.error('Problems setting finalTextInput',e);
		}
	};
	this.finalTextInput_changed = function () {
		var value = this.finalTextInput;
		return value;
	};
	try {
		this.finalTextInput = new SFString();
	} catch (e) {
		console.log('Problems setting finalTextInput '+e);
		console.error('Problems setting finalTextInput',e);
	}
	this.set_enteredTextInput = function (value) {
		try {
			this.proxy.enteredTextInput = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting enteredTextInput '+e);
			console.error('Problems setting enteredTextInput',e);
		}
	};
	this.enteredTextInput_changed = function () {
		var value = this.enteredTextInput;
		return value;
	};
	try {
		this.enteredTextInput = new SFString();
	} catch (e) {
		console.log('Problems setting enteredTextInput '+e);
		console.error('Problems setting enteredTextInput',e);
	}
	this.set_keyOutput = function (value) {
		try {
			this.proxy.keyOutput = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting keyOutput '+e);
			console.error('Problems setting keyOutput',e);
		}
	};
	this.keyOutput_changed = function () {
		var value = this.keyOutput;
		return value;
	};
	try {
		this.keyOutput = new MFString();
	} catch (e) {
		console.log('Problems setting keyOutput '+e);
		console.error('Problems setting keyOutput',e);
	}
	this.set_stringOutput = function (value) {
		try {
			this.proxy.stringOutput = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting stringOutput '+e);
			console.error('Problems setting stringOutput',e);
		}
	};
	this.stringOutput_changed = function () {
		var value = this.stringOutput;
		return value;
	};
	try {
		this.stringOutput = new MFString();
	} catch (e) {
		console.log('Problems setting stringOutput '+e);
		console.error('Problems setting stringOutput',e);
	}


ecmascript:

	this.keyInput = function (inputValue)
{
//  console.error ('this.proxy.keyInput=' + inputValue + ''); // console output
    this.proxy.keyOutput = new MFString (inputValue); // type conversion
};

	this.finalTextInput = function (inputValue)
{
//  console.error ('finalText=' + inputValue + ''); // console output
    this.proxy.stringOutput = new MFString (inputValue); // type conversion
};

	this.enteredTextInput = function (inputValue)
{
    console.error ('enteredText=' + inputValue + ''); // console output
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].initialize();
    if (X3DJSON.nodeUtil("Scene","DefaultTouchSensor")) {
X3DJSON.nodeUtil("Scene","DefaultTouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","DefaultPlaneSensor")) {
X3DJSON.nodeUtil("Scene","DefaultPlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","DefaultCylinderSensor")) {
X3DJSON.nodeUtil("Scene","DefaultCylinderSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","DefaultSphereSensor")) {
X3DJSON.nodeUtil("Scene","DefaultSphereSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","DefaultKeySensor")) {
X3DJSON.nodeUtil("Scene","DefaultKeySensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].keyInput(X3DJSON.nodeUtil("Scene","DefaultKeySensor","keyPress"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].keyInput(X3DJSON.nodeUtil("Scene","DefaultKeySensor","keyPress"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","DefaultStringSensor")) {
X3DJSON.nodeUtil("Scene","DefaultStringSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].finalTextInput(X3DJSON.nodeUtil("Scene","DefaultStringSensor","finalText"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].finalTextInput(X3DJSON.nodeUtil("Scene","DefaultStringSensor","finalText"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","DefaultStringSensor")) {
X3DJSON.nodeUtil("Scene","DefaultStringSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].enteredTextInput(X3DJSON.nodeUtil("Scene","DefaultStringSensor","enteredText"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].enteredTextInput(X3DJSON.nodeUtil("Scene","DefaultStringSensor","enteredText"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor']['ACTION']['keyOutput'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor']['ACTION']['keyOutput'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor']['ACTION']['keyOutput'].push(function(property, value) {
		if (property === 'keyOutput') {
			X3DJSON.nodeUtil("Scene","KeyText","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].keyOutput === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].keyOutput() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].keyOutput, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","KeyText","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].keyOutput === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].keyOutput() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].keyOutput, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor']['ACTION']['stringOutput'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor']['ACTION']['stringOutput'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor']['ACTION']['stringOutput'].push(function(property, value) {
		if (property === 'stringOutput') {
			X3DJSON.nodeUtil("Scene","StringText","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].stringOutput === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].stringOutput() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].stringOutput, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","StringText","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].stringOutput === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].stringOutput() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].stringOutput, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].keyInput(X3DJSON.nodeUtil("Scene","DefaultKeySensor","keyPress"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].finalTextInput(X3DJSON.nodeUtil("Scene","DefaultStringSensor","finalText"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].enteredTextInput(X3DJSON.nodeUtil("Scene","DefaultStringSensor","enteredText"), __eventTime);
			X3DJSON.nodeUtil("Scene","KeyText","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].keyOutput === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].keyOutput() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].keyOutput, __eventTime);
			X3DJSON.nodeUtil("Scene","StringText","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].stringOutput === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].stringOutput() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter08UserInteractivity/UserInteractivitySensorNodes.json']['KeyboardProcessor'].stringOutput, __eventTime);