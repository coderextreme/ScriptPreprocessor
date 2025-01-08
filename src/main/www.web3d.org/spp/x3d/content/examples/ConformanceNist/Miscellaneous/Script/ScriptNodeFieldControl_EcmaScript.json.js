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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Miscellaneous/Script/ScriptNodeFieldControl_EcmaScript.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Miscellaneous/Script/ScriptNodeFieldControl_EcmaScript.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Miscellaneous/Script/ScriptNodeFieldControl_EcmaScript.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Miscellaneous/Script/ScriptNodeFieldControl_EcmaScript.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Miscellaneous/Script/ScriptNodeFieldControl_EcmaScript.json']['InterfaceScriptNode'] = function() {
	this.set_startTime = function (value) {
		try {
			this.proxy.startTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startTime '+e);
			console.error('Problems setting startTime',e);
		}
	};
	this.startTime_changed = function () {
		var value = this.startTime;
		return value;
	};
	try {
		this.startTime = new SFTime();
	} catch (e) {
		console.log('Problems setting startTime '+e);
		console.error('Problems setting startTime',e);
	}
	this.set_sceneText = function (value) {
		try {
			this.proxy.sceneText = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sceneText '+e);
			console.error('Problems setting sceneText',e);
		}
	};
	this.sceneText_changed = function () {
		var value = this.sceneText;
		return value;
	};
	try {
		this.sceneText = X3DJSON.nodeUtil("Scene","MessageToUser");
	} catch (e) {
		console.log('Problems setting sceneText '+e);
		console.error('Problems setting sceneText',e);
	}
	this.set_sceneTransform = function (value) {
		try {
			this.proxy.sceneTransform = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sceneTransform '+e);
			console.error('Problems setting sceneTransform',e);
		}
	};
	this.sceneTransform_changed = function () {
		var value = this.sceneTransform;
		return value;
	};
	try {
		this.sceneTransform = X3DJSON.nodeUtil("Scene","TextPosition");
	} catch (e) {
		console.log('Problems setting sceneTransform '+e);
		console.error('Problems setting sceneTransform',e);
	}
	this.set_sceneMaterial = function (value) {
		try {
			this.proxy.sceneMaterial = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sceneMaterial '+e);
			console.error('Problems setting sceneMaterial',e);
		}
	};
	this.sceneMaterial_changed = function () {
		var value = this.sceneMaterial;
		return value;
	};
	try {
		this.sceneMaterial = X3DJSON.nodeUtil("Scene","TextMaterial");
	} catch (e) {
		console.log('Problems setting sceneMaterial '+e);
		console.error('Problems setting sceneMaterial',e);
	}


ecmascript:

	this.initialize = function ()
{
	DEBUG = true;
	mode  = 1;
	if (DEBUG) console.error ('this.initialize ():');

	X3DJSON.nodeUtil("Scene","MessageToUser", "string",  new MFString (
	  'EcmaScript this.initialize () with field control',
 	  'has reinitialized the changedText node.',
 	  '',
 	  'Please click text for additional results.'));
	X3DJSON.nodeUtil("Scene","TextPosition", "translation",  new SFVec3f ( 0, 3, 0 ));
	X3DJSON.nodeUtil("Scene","TextMaterial", "diffuseColor",  new SFColor ( 0.8, 0.8, 0.2 ));
	if (DEBUG) console.error ('X3DJSON.nodeUtil("Scene","MessageToUser", "string", ' + X3DJSON.nodeUtil("Scene","MessageToUser", "string")));
	if (DEBUG) console.error ('X3DJSON.nodeUtil("Scene","TextPosition", "translation", ' + X3DJSON.nodeUtil("Scene","TextPosition", "translation")));
	if (DEBUG) console.error ('X3DJSON.nodeUtil("Scene","TextMaterial", "diffuseColor", ' + X3DJSON.nodeUtil("Scene","TextMaterial", "diffuseColor")));
};

	this.startTime = function (value, timestamp)
{
	if (DEBUG) console.error ('==============================');
	if (DEBUG) console.error ('touchEvent this.proxy.startTime = ' + value);

	mode = (mode + 1) % 3;
	if (DEBUG) console.error ('mode = ' + mode);
	switch (mode)
	{
	  case 0:	// pre-this.initialize error messsage
		X3DJSON.nodeUtil("Scene","MessageToUser", "string",  new MFString (
		  'Default text in VRML scene will be replaced by',
 		  'EcmaScript this.initialize() in Script using field control.',
 		  'This text appears first, if EcmaScript initialization fails.',
 		  ''));
 		X3DJSON.nodeUtil("Scene","TextPosition", "translation",  new SFVec3f ( 0, 1, 0 ));
		X3DJSON.nodeUtil("Scene","TextMaterial", "diffuseColor",  new SFColor ( 0.8, 0.2, 0.2 )); 
	  	break;

	  case 1:	// post-this.initialize ready-to-click message
		this.initialize ();
		break;

	  case 2:	// post-click all-done message
		X3DJSON.nodeUtil("Scene","MessageToUser", "string",  new MFString (
		  'User click on text seen by EcmaScript',
 		  'function via Script node eventIn.',
 		  'Text & position successfully changed',
 		  'via field control.  Test passed.'));
	 	X3DJSON.nodeUtil("Scene","TextPosition", "translation",  new SFVec3f ( 0, -1, 0 ));
	 	X3DJSON.nodeUtil("Scene","TextMaterial", "diffuseColor",  new SFColor ( 0.2, 0.8, 0.2 ));
		break;
	}
		
	if (mode != 1)
	{
	 	if (DEBUG) console.error ('X3DJSON.nodeUtil("Scene","MessageToUser", "string",  ' + X3DJSON.nodeUtil("Scene","MessageToUser", "string")));
	 	if (DEBUG) console.error ('X3DJSON.nodeUtil("Scene","TextPosition", "translation",  ' + X3DJSON.nodeUtil("Scene","TextPosition", "translation")));
	 	if (DEBUG) console.error ('X3DJSON.nodeUtil("Scene","TextMaterial", "diffuseColor",  ' + X3DJSON.nodeUtil("Scene","TextMaterial", "diffuseColor")));
	 	if (DEBUG) console.error ();
 	}
};

	this.shutdown = function ()
{
	if (DEBUG) console.error ('==============================');
  	if (DEBUG) console.error ('script this.shutdown.');
	if (DEBUG) console.error ('==============================');
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Miscellaneous/Script/ScriptNodeFieldControl_EcmaScript.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Miscellaneous/Script/ScriptNodeFieldControl_EcmaScript.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Miscellaneous/Script/ScriptNodeFieldControl_EcmaScript.json']['InterfaceScriptNode'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Miscellaneous/Script/ScriptNodeFieldControl_EcmaScript.json']['InterfaceScriptNode']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Miscellaneous/Script/ScriptNodeFieldControl_EcmaScript.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Miscellaneous/Script/ScriptNodeFieldControl_EcmaScript.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Miscellaneous/Script/ScriptNodeFieldControl_EcmaScript.json']['InterfaceScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Miscellaneous/Script/ScriptNodeFieldControl_EcmaScript.json']['InterfaceScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Miscellaneous/Script/ScriptNodeFieldControl_EcmaScript.json']['InterfaceScriptNode']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Miscellaneous/Script/ScriptNodeFieldControl_EcmaScript.json']['InterfaceScriptNode']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Miscellaneous/Script/ScriptNodeFieldControl_EcmaScript.json']['InterfaceScriptNode'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Miscellaneous/Script/ScriptNodeFieldControl_EcmaScript.json']['InterfaceScriptNode']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Miscellaneous/Script/ScriptNodeFieldControl_EcmaScript.json']['InterfaceScriptNode']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Miscellaneous/Script/ScriptNodeFieldControl_EcmaScript.json']['InterfaceScriptNode'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Miscellaneous/Script/ScriptNodeFieldControl_EcmaScript.json']['InterfaceScriptNode'].initialize();
    if (X3DJSON.nodeUtil("Scene","ClickTextToTest")) {
X3DJSON.nodeUtil("Scene","ClickTextToTest").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Miscellaneous/Script/ScriptNodeFieldControl_EcmaScript.json']['InterfaceScriptNode'].startTime(X3DJSON.nodeUtil("Scene","ClickTextToTest","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Miscellaneous/Script/ScriptNodeFieldControl_EcmaScript.json']['InterfaceScriptNode'].startTime(X3DJSON.nodeUtil("Scene","ClickTextToTest","touchTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Miscellaneous/Script/ScriptNodeFieldControl_EcmaScript.json']['InterfaceScriptNode'].startTime(X3DJSON.nodeUtil("Scene","ClickTextToTest","touchTime"), __eventTime);