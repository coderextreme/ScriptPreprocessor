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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'] = function() {
	this.set_setFraction = function (value) {
		try {
			this.proxy.setFraction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setFraction '+e);
			console.error('Problems setting setFraction',e);
		}
	};
	this.setFraction_changed = function () {
		var value = this.setFraction;
		return value;
	};
	try {
		this.setFraction = new SFFloat();
	} catch (e) {
		console.log('Problems setting setFraction '+e);
		console.error('Problems setting setFraction',e);
	}
	this.set_setFrontUpViewBind = function (value) {
		try {
			this.proxy.setFrontUpViewBind = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setFrontUpViewBind '+e);
			console.error('Problems setting setFrontUpViewBind',e);
		}
	};
	this.setFrontUpViewBind_changed = function () {
		var value = this.setFrontUpViewBind;
		return value;
	};
	try {
		this.setFrontUpViewBind = new SFBool();
	} catch (e) {
		console.log('Problems setting setFrontUpViewBind '+e);
		console.error('Problems setting setFrontUpViewBind',e);
	}
	this.set_setLeftViewBind = function (value) {
		try {
			this.proxy.setLeftViewBind = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setLeftViewBind '+e);
			console.error('Problems setting setLeftViewBind',e);
		}
	};
	this.setLeftViewBind_changed = function () {
		var value = this.setLeftViewBind;
		return value;
	};
	try {
		this.setLeftViewBind = new SFBool();
	} catch (e) {
		console.log('Problems setting setLeftViewBind '+e);
		console.error('Problems setting setLeftViewBind',e);
	}
	this.set_setBackViewBind = function (value) {
		try {
			this.proxy.setBackViewBind = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setBackViewBind '+e);
			console.error('Problems setting setBackViewBind',e);
		}
	};
	this.setBackViewBind_changed = function () {
		var value = this.setBackViewBind;
		return value;
	};
	try {
		this.setBackViewBind = new SFBool();
	} catch (e) {
		console.log('Problems setting setBackViewBind '+e);
		console.error('Problems setting setBackViewBind',e);
	}
	this.set_setRightViewBind = function (value) {
		try {
			this.proxy.setRightViewBind = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setRightViewBind '+e);
			console.error('Problems setting setRightViewBind',e);
		}
	};
	this.setRightViewBind_changed = function () {
		var value = this.setRightViewBind;
		return value;
	};
	try {
		this.setRightViewBind = new SFBool();
	} catch (e) {
		console.log('Problems setting setRightViewBind '+e);
		console.error('Problems setting setRightViewBind',e);
	}
	this.set_setTopViewBind = function (value) {
		try {
			this.proxy.setTopViewBind = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setTopViewBind '+e);
			console.error('Problems setting setTopViewBind',e);
		}
	};
	this.setTopViewBind_changed = function () {
		var value = this.setTopViewBind;
		return value;
	};
	try {
		this.setTopViewBind = new SFBool();
	} catch (e) {
		console.log('Problems setting setTopViewBind '+e);
		console.error('Problems setting setTopViewBind',e);
	}
	this.set_setFrontDownViewBind = function (value) {
		try {
			this.proxy.setFrontDownViewBind = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setFrontDownViewBind '+e);
			console.error('Problems setting setFrontDownViewBind',e);
		}
	};
	this.setFrontDownViewBind_changed = function () {
		var value = this.setFrontDownViewBind;
		return value;
	};
	try {
		this.setFrontDownViewBind = new SFBool();
	} catch (e) {
		console.log('Problems setting setFrontDownViewBind '+e);
		console.error('Problems setting setFrontDownViewBind',e);
	}
	this.set_setBottomViewBind = function (value) {
		try {
			this.proxy.setBottomViewBind = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setBottomViewBind '+e);
			console.error('Problems setting setBottomViewBind',e);
		}
	};
	this.setBottomViewBind_changed = function () {
		var value = this.setBottomViewBind;
		return value;
	};
	try {
		this.setBottomViewBind = new SFBool();
	} catch (e) {
		console.log('Problems setting setBottomViewBind '+e);
		console.error('Problems setting setBottomViewBind',e);
	}
	this.set_setFrontUpBSOutput = function (value) {
		try {
			this.proxy.setFrontUpBSOutput = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setFrontUpBSOutput '+e);
			console.error('Problems setting setFrontUpBSOutput',e);
		}
	};
	this.setFrontUpBSOutput_changed = function () {
		var value = this.setFrontUpBSOutput;
		return value;
	};
	try {
		this.setFrontUpBSOutput = new SFBool();
	} catch (e) {
		console.log('Problems setting setFrontUpBSOutput '+e);
		console.error('Problems setting setFrontUpBSOutput',e);
	}
	this.set_setLeftBSOutput = function (value) {
		try {
			this.proxy.setLeftBSOutput = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setLeftBSOutput '+e);
			console.error('Problems setting setLeftBSOutput',e);
		}
	};
	this.setLeftBSOutput_changed = function () {
		var value = this.setLeftBSOutput;
		return value;
	};
	try {
		this.setLeftBSOutput = new SFBool();
	} catch (e) {
		console.log('Problems setting setLeftBSOutput '+e);
		console.error('Problems setting setLeftBSOutput',e);
	}
	this.set_setBackBSOutput = function (value) {
		try {
			this.proxy.setBackBSOutput = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setBackBSOutput '+e);
			console.error('Problems setting setBackBSOutput',e);
		}
	};
	this.setBackBSOutput_changed = function () {
		var value = this.setBackBSOutput;
		return value;
	};
	try {
		this.setBackBSOutput = new SFBool();
	} catch (e) {
		console.log('Problems setting setBackBSOutput '+e);
		console.error('Problems setting setBackBSOutput',e);
	}
	this.set_setRightBSOutput = function (value) {
		try {
			this.proxy.setRightBSOutput = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setRightBSOutput '+e);
			console.error('Problems setting setRightBSOutput',e);
		}
	};
	this.setRightBSOutput_changed = function () {
		var value = this.setRightBSOutput;
		return value;
	};
	try {
		this.setRightBSOutput = new SFBool();
	} catch (e) {
		console.log('Problems setting setRightBSOutput '+e);
		console.error('Problems setting setRightBSOutput',e);
	}
	this.set_setTopBSOutput = function (value) {
		try {
			this.proxy.setTopBSOutput = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setTopBSOutput '+e);
			console.error('Problems setting setTopBSOutput',e);
		}
	};
	this.setTopBSOutput_changed = function () {
		var value = this.setTopBSOutput;
		return value;
	};
	try {
		this.setTopBSOutput = new SFBool();
	} catch (e) {
		console.log('Problems setting setTopBSOutput '+e);
		console.error('Problems setting setTopBSOutput',e);
	}
	this.set_setFrontDownBSOutput = function (value) {
		try {
			this.proxy.setFrontDownBSOutput = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setFrontDownBSOutput '+e);
			console.error('Problems setting setFrontDownBSOutput',e);
		}
	};
	this.setFrontDownBSOutput_changed = function () {
		var value = this.setFrontDownBSOutput;
		return value;
	};
	try {
		this.setFrontDownBSOutput = new SFBool();
	} catch (e) {
		console.log('Problems setting setFrontDownBSOutput '+e);
		console.error('Problems setting setFrontDownBSOutput',e);
	}
	this.set_setBottomBSOutput = function (value) {
		try {
			this.proxy.setBottomBSOutput = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setBottomBSOutput '+e);
			console.error('Problems setting setBottomBSOutput',e);
		}
	};
	this.setBottomBSOutput_changed = function () {
		var value = this.setBottomBSOutput;
		return value;
	};
	try {
		this.setBottomBSOutput = new SFBool();
	} catch (e) {
		console.log('Problems setting setBottomBSOutput '+e);
		console.error('Problems setting setBottomBSOutput',e);
	}


ecmascript:

	this.setFraction = function (value, timeStamp)
{
	console.error ('fraction =' + value);
}
;

	this.setFrontUpViewBind = function (value, timeStamp)
{
	console.error ('FrontUpView bind:' + value);
}
;

	this.setLeftViewBind = function (value, timeStamp)
{
	console.error ('LeftView bind:' + value);
}
;

	this.setBackViewBind = function (value, timeStamp)
{
	console.error ('BackView bind:' + value);
}
;

	this.setRightViewBind = function (value, timeStamp)
{
	console.error ('RightView bind:' + value);
}
;

	this.setTopViewBind = function (value, timeStamp)
{
	console.error ('TopView bind:' + value);
}
;

	this.setFrontDownViewBind = function (value, timeStamp)
{
	console.error ('FrontDownView bind:' + value);
}
;

	this.setBottomViewBind = function (value, timeStamp)
{
	console.error ('BottomView bind:' + value);
}
;

	this.setFrontUpBSOutput = function (value, timeStamp)
{
	console.error ('BooleanSequencer output for FrontUpViewpoint:' + value);
}
;

	this.setLeftBSOutput = function (value, timeStamp)
{
	console.error ('BooleanSequencer output for LeftViewpoint:' + value);
}
;

	this.setBackBSOutput = function (value, timeStamp)
{
	console.error ('BooleanSequencer output for BackViewpoint:' + value);
}
;

	this.setRightBSOutput = function (value, timeStamp)
{
	console.error ('BooleanSequencer output for RightViewpoint:' + value);
}
;

	this.setTopBSOutput = function (value, timeStamp)
{
	console.error ('BooleanSequencer output for TopViewpoint:' + value);
}
;

	this.setFrontDownBSOutput = function (value, timeStamp)
{
	console.error ('BooleanSequencer output for FrontDownViewpoint:' + value);
}
;

	this.setBottomBSOutput = function (value, timeStamp)
{
	console.error ('BooleanSequencer output for BottomViewpoint:' + value);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].initialize();
    if (X3DJSON.nodeUtil("Scene","WhereSensor")) {
X3DJSON.nodeUtil("Scene","WhereSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","WhereSensor")) {
X3DJSON.nodeUtil("Scene","WhereSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Toucher")) {
X3DJSON.nodeUtil("Scene","Toucher").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Clock")) {
X3DJSON.nodeUtil("Scene","Clock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","LeftViewBinder")) {
X3DJSON.nodeUtil("Scene","LeftViewBinder").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Clock")) {
X3DJSON.nodeUtil("Scene","Clock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BackViewBinder")) {
X3DJSON.nodeUtil("Scene","BackViewBinder").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Clock")) {
X3DJSON.nodeUtil("Scene","Clock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RightViewBinder")) {
X3DJSON.nodeUtil("Scene","RightViewBinder").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Clock")) {
X3DJSON.nodeUtil("Scene","Clock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TopViewBinder")) {
X3DJSON.nodeUtil("Scene","TopViewBinder").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Clock")) {
X3DJSON.nodeUtil("Scene","Clock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrontDownViewBinder")) {
X3DJSON.nodeUtil("Scene","FrontDownViewBinder").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Clock")) {
X3DJSON.nodeUtil("Scene","Clock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BottomViewBinder")) {
X3DJSON.nodeUtil("Scene","BottomViewBinder").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Clock")) {
X3DJSON.nodeUtil("Scene","Clock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setFraction(X3DJSON.nodeUtil("Scene","Clock","fraction"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setFraction(X3DJSON.nodeUtil("Scene","Clock","fraction"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","FrontUpViewpoint")) {
X3DJSON.nodeUtil("Scene","FrontUpViewpoint").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setFrontUpViewBind(X3DJSON.nodeUtil("Scene","FrontUpViewpoint","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setFrontUpViewBind(X3DJSON.nodeUtil("Scene","FrontUpViewpoint","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","LeftViewpoint")) {
X3DJSON.nodeUtil("Scene","LeftViewpoint").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setLeftViewBind(X3DJSON.nodeUtil("Scene","LeftViewpoint","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setLeftViewBind(X3DJSON.nodeUtil("Scene","LeftViewpoint","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","BackViewpoint")) {
X3DJSON.nodeUtil("Scene","BackViewpoint").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setBackViewBind(X3DJSON.nodeUtil("Scene","BackViewpoint","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setBackViewBind(X3DJSON.nodeUtil("Scene","BackViewpoint","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","RightViewpoint")) {
X3DJSON.nodeUtil("Scene","RightViewpoint").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setRightViewBind(X3DJSON.nodeUtil("Scene","RightViewpoint","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setRightViewBind(X3DJSON.nodeUtil("Scene","RightViewpoint","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TopViewpoint")) {
X3DJSON.nodeUtil("Scene","TopViewpoint").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setTopViewBind(X3DJSON.nodeUtil("Scene","TopViewpoint","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setTopViewBind(X3DJSON.nodeUtil("Scene","TopViewpoint","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","FrontDownViewpoint")) {
X3DJSON.nodeUtil("Scene","FrontDownViewpoint").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setFrontDownViewBind(X3DJSON.nodeUtil("Scene","FrontDownViewpoint","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setFrontDownViewBind(X3DJSON.nodeUtil("Scene","FrontDownViewpoint","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","BottomViewpoint")) {
X3DJSON.nodeUtil("Scene","BottomViewpoint").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setBottomViewBind(X3DJSON.nodeUtil("Scene","BottomViewpoint","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setBottomViewBind(X3DJSON.nodeUtil("Scene","BottomViewpoint","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","LeftViewBinder")) {
X3DJSON.nodeUtil("Scene","LeftViewBinder").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setLeftBSOutput(X3DJSON.nodeUtil("Scene","LeftViewBinder","value"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setLeftBSOutput(X3DJSON.nodeUtil("Scene","LeftViewBinder","value"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","BackViewBinder")) {
X3DJSON.nodeUtil("Scene","BackViewBinder").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setBackBSOutput(X3DJSON.nodeUtil("Scene","BackViewBinder","value"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setBackBSOutput(X3DJSON.nodeUtil("Scene","BackViewBinder","value"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","RightViewBinder")) {
X3DJSON.nodeUtil("Scene","RightViewBinder").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setRightBSOutput(X3DJSON.nodeUtil("Scene","RightViewBinder","value"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setRightBSOutput(X3DJSON.nodeUtil("Scene","RightViewBinder","value"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TopViewBinder")) {
X3DJSON.nodeUtil("Scene","TopViewBinder").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setTopBSOutput(X3DJSON.nodeUtil("Scene","TopViewBinder","value"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setTopBSOutput(X3DJSON.nodeUtil("Scene","TopViewBinder","value"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","FrontDownViewBinder")) {
X3DJSON.nodeUtil("Scene","FrontDownViewBinder").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setFrontDownBSOutput(X3DJSON.nodeUtil("Scene","FrontDownViewBinder","value"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setFrontDownBSOutput(X3DJSON.nodeUtil("Scene","FrontDownViewBinder","value"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","BottomViewBinder")) {
X3DJSON.nodeUtil("Scene","BottomViewBinder").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setBottomBSOutput(X3DJSON.nodeUtil("Scene","BottomViewBinder","value"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setBottomBSOutput(X3DJSON.nodeUtil("Scene","BottomViewBinder","value"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setFraction(X3DJSON.nodeUtil("Scene","Clock","fraction"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setFrontUpViewBind(X3DJSON.nodeUtil("Scene","FrontUpViewpoint","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setLeftViewBind(X3DJSON.nodeUtil("Scene","LeftViewpoint","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setBackViewBind(X3DJSON.nodeUtil("Scene","BackViewpoint","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setRightViewBind(X3DJSON.nodeUtil("Scene","RightViewpoint","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setTopViewBind(X3DJSON.nodeUtil("Scene","TopViewpoint","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setFrontDownViewBind(X3DJSON.nodeUtil("Scene","FrontDownViewpoint","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setBottomViewBind(X3DJSON.nodeUtil("Scene","BottomViewpoint","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setLeftBSOutput(X3DJSON.nodeUtil("Scene","LeftViewBinder","value"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setBackBSOutput(X3DJSON.nodeUtil("Scene","BackViewBinder","value"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setRightBSOutput(X3DJSON.nodeUtil("Scene","RightViewBinder","value"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setTopBSOutput(X3DJSON.nodeUtil("Scene","TopViewBinder","value"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setFrontDownBSOutput(X3DJSON.nodeUtil("Scene","FrontDownViewBinder","value"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerExample.json']['Debug'].setBottomBSOutput(X3DJSON.nodeUtil("Scene","BottomViewBinder","value"), __eventTime);