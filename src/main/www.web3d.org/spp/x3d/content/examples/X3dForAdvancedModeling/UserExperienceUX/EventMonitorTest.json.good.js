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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'] = function() {
	this.set_input = function (value) {
		try {
			this.proxy.input = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting input '+e);
			console.error('Problems setting input',e);
		}
	};
	this.input_changed = function () {
		var value = this.input;
		return value;
	};
	try {
		this.input = new SFBool();
	} catch (e) {
		console.log('Problems setting input '+e);
		console.error('Problems setting input',e);
	}
	this.set_eventIsTrue = function (value) {
		try {
			this.proxy.eventIsTrue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting eventIsTrue '+e);
			console.error('Problems setting eventIsTrue',e);
		}
	};
	this.eventIsTrue_changed = function () {
		var value = this.eventIsTrue;
		return value;
	};
	try {
		this.eventIsTrue = new SFBool();
	} catch (e) {
		console.log('Problems setting eventIsTrue '+e);
		console.error('Problems setting eventIsTrue',e);
	}
	this.set_eventIsFalse = function (value) {
		try {
			this.proxy.eventIsFalse = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting eventIsFalse '+e);
			console.error('Problems setting eventIsFalse',e);
		}
	};
	this.eventIsFalse_changed = function () {
		var value = this.eventIsFalse;
		return value;
	};
	try {
		this.eventIsFalse = new SFBool();
	} catch (e) {
		console.log('Problems setting eventIsFalse '+e);
		console.error('Problems setting eventIsFalse',e);
	}


ecmascript:

	this.input = function (eventValue) // this.proxy.input eventValue received for inputOnly field
{
   if (eventValue) this.proxy.eventIsTrue  = true;
   else            this.proxy.eventIsFalse = true;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'].initialize();
    if (X3DJSON.nodeUtil("Scene","EventTrueTrigger")) {
X3DJSON.nodeUtil("Scene","EventTrueTrigger").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","EventFalseTrigger")) {
X3DJSON.nodeUtil("Scene","EventFalseTrigger").addEventListener('outputchange', function(event) {
}, false);
}
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript']['ACTION']['eventIsTrue'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript']['ACTION']['eventIsTrue'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript']['ACTION']['eventIsTrue'].push(function(property, value) {
		if (property === 'eventIsTrue') {
			X3DJSON.nodeUtil("Scene","EventTrueTrigger","boolean",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'].eventIsTrue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'].eventIsTrue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'].eventIsTrue, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","EventTrueTrigger","boolean",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'].eventIsTrue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'].eventIsTrue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'].eventIsTrue, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript']['ACTION']['eventIsFalse'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript']['ACTION']['eventIsFalse'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript']['ACTION']['eventIsFalse'].push(function(property, value) {
		if (property === 'eventIsFalse') {
			X3DJSON.nodeUtil("Scene","EventFalseTrigger","boolean",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'].eventIsFalse === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'].eventIsFalse() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'].eventIsFalse, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","EventFalseTrigger","boolean",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'].eventIsFalse === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'].eventIsFalse() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'].eventIsFalse, __eventTime);
    if (X3DJSON.nodeUtil("Scene","BooleanSwitcher")) {
X3DJSON.nodeUtil("Scene","BooleanSwitcher").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'].input(X3DJSON.nodeUtil("Scene","BooleanSwitcher","value"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'].input(X3DJSON.nodeUtil("Scene","BooleanSwitcher","value"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","SwitchTestClock")) {
X3DJSON.nodeUtil("Scene","SwitchTestClock").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON.nodeUtil("Scene","EventTrueTrigger","boolean",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'].eventIsTrue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'].eventIsTrue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'].eventIsTrue, __eventTime);
			X3DJSON.nodeUtil("Scene","EventFalseTrigger","boolean",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'].eventIsFalse === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'].eventIsFalse() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'].eventIsFalse, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/UserExperienceUX/EventMonitorTest.json']['EventReceiverScript'].input(X3DJSON.nodeUtil("Scene","BooleanSwitcher","value"), __eventTime);