var x3dom;
async function fetch_import(module) {
  x3dom = await import(module);
  return x3dom;
}
if (typeof x3dom === 'undefined') {
  x3dom = fetch_import('../node/fields.mjs');
}
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
    var SFVec3f = function() { var that = Array.prototype.slice.call(arguments, 0); that.x  = that[0]; that.y = that[1]; that.z = that[2]; return that; };
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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'] = function() {
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
	this.set_changedText = function (value) {
		try {
			this.proxy.changedText = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting changedText '+e);
			console.error('Problems setting changedText',e);
		}
	};
	this.changedText_changed = function () {
		var value = this.changedText;
		return value;
	};
	try {
		this.changedText = new MFString();
	} catch (e) {
		console.log('Problems setting changedText '+e);
		console.error('Problems setting changedText',e);
	}
	this.set_changedPosition = function (value) {
		try {
			this.proxy.changedPosition = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting changedPosition '+e);
			console.error('Problems setting changedPosition',e);
		}
	};
	this.changedPosition_changed = function () {
		var value = this.changedPosition;
		return value;
	};
	try {
		this.changedPosition = new SFVec3f();
	} catch (e) {
		console.log('Problems setting changedPosition '+e);
		console.error('Problems setting changedPosition',e);
	}
	this.set_changedColor = function (value) {
		try {
			this.proxy.changedColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting changedColor '+e);
			console.error('Problems setting changedColor',e);
		}
	};
	this.changedColor_changed = function () {
		var value = this.changedColor;
		return value;
	};
	try {
		this.changedColor = new SFColor();
	} catch (e) {
		console.log('Problems setting changedColor '+e);
		console.error('Problems setting changedColor',e);
	}


ecmascript:

	this.initialize = function ()
{
	DEBUG = true;
	mode  = 1;
	if (DEBUG) console.error ('this.initialize ():');

	this.proxy.changedText = new MFString (
	'EcmaScript this.initialize () with eventOut control',
 	'has reinitialized the this.proxy.changedText node.',
 	'',
 	'Please click text for additional results.');
	this.proxy.changedPosition = new SFVec3f ( 0, 3, 0 );
	this.proxy.changedColor    = new SFColor ( 0.8, 0.8, 0.2 );
	if (DEBUG) console.error ('this.proxy.changedText =' + this.proxy.changedText);
	if (DEBUG) console.error ('this.proxy.changedPosition =' + this.proxy.changedPosition);
	if (DEBUG) console.error ('this.proxy.changedColor =' + this.proxy.changedColor);
};

	this.startTime = function (value, timestamp)
{
	if (DEBUG) console.error ('==============================');
	if (DEBUG) console.error ('touchEvent this.proxy.startTime =' + value);

	mode = (mode + 1) % 3;
	if (DEBUG) console.error ('mode =' + mode);
	switch (mode)
	{
	  case 0:	// pre-this.initialize error messsage
		this.proxy.changedText = new MFString (
		'Default text in X3D scene will be replaced by',
 		'EcmaScript this.initialize() in Script using EventOut control.',
 		'This text appears first, if EcmaScript initialization fails.',
 		'');
 		this.proxy.changedPosition = new SFVec3f ( 0, 1, 0 );
		this.proxy.changedColor    = new SFColor ( 0.8, 0.2, 0.2 ); 
	  	break;

	  case 1:	// post-this.initialize ready-to-click message
		this.initialize ();
		break;

	  case 2:	// post-click all-done message
		this.proxy.changedText = new MFString (
		'User click on text seen by EcmaScript',
 		'function via Script node eventIn.',
 		'Text & position successfully changed',
 		'via EventOut control.  Test passed.');
	 	this.proxy.changedPosition = new SFVec3f ( 0, -1, 0 );
	 	this.proxy.changedColor    = new SFColor ( 0.2, 0.8, 0.2 );
		break;
	}
		
	if (mode != 1)
	{
	 	if (DEBUG) console.error ('this.proxy.changedText     =' + this.proxy.changedText);
	 	if (DEBUG) console.error ('this.proxy.changedPosition =' + this.proxy.changedPosition);
	 	if (DEBUG) console.error ('this.proxy.changedColor    =' + this.proxy.changedColor);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].initialize();
    if (X3DJSON.nodeUtil("Scene","ClickTextToTest")) {
X3DJSON.nodeUtil("Scene","ClickTextToTest").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].startTime(X3DJSON.nodeUtil("Scene","ClickTextToTest","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].startTime(X3DJSON.nodeUtil("Scene","ClickTextToTest","touchTime"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode']['ACTION']['changedText'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode']['ACTION']['changedText'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode']['ACTION']['changedText'].push(function(property, value) {
		if (property === 'changedText') {
			X3DJSON.nodeUtil("Scene","MessageToUser","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].changedText === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].changedText() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].changedText, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","MessageToUser","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].changedText === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].changedText() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].changedText, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode']['ACTION']['changedPosition'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode']['ACTION']['changedPosition'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode']['ACTION']['changedPosition'].push(function(property, value) {
		if (property === 'changedPosition') {
			X3DJSON.nodeUtil("Scene","TextPosition","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].changedPosition === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].changedPosition() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].changedPosition, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TextPosition","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].changedPosition === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].changedPosition() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].changedPosition, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode']['ACTION']['changedColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode']['ACTION']['changedColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode']['ACTION']['changedColor'].push(function(property, value) {
		if (property === 'changedColor') {
			X3DJSON.nodeUtil("Scene","TextMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].changedColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].changedColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].changedColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TextMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].changedColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].changedColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].changedColor, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].startTime(X3DJSON.nodeUtil("Scene","ClickTextToTest","touchTime"), __eventTime);
			X3DJSON.nodeUtil("Scene","MessageToUser","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].changedText === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].changedText() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].changedText, __eventTime);
			X3DJSON.nodeUtil("Scene","TextPosition","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].changedPosition === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].changedPosition() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].changedPosition, __eventTime);
			X3DJSON.nodeUtil("Scene","TextMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].changedColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].changedColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptNodeEventOutControlEcmaScript.json']['InterfaceScriptNode'].changedColor, __eventTime);