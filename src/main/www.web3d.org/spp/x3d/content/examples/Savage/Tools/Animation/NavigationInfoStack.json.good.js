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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json']['NavSpeedMonitorScript'] = function() {
	this.set_speed1Bound = function (value) {
		try {
			this.proxy.speed1Bound = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting speed1Bound '+e);
			console.error('Problems setting speed1Bound',e);
		}
	};
	this.speed1Bound_changed = function () {
		var value = this.speed1Bound;
		return value;
	};
	try {
		this.speed1Bound = new SFBool();
	} catch (e) {
		console.log('Problems setting speed1Bound '+e);
		console.error('Problems setting speed1Bound',e);
	}
	this.set_speed10Bound = function (value) {
		try {
			this.proxy.speed10Bound = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting speed10Bound '+e);
			console.error('Problems setting speed10Bound',e);
		}
	};
	this.speed10Bound_changed = function () {
		var value = this.speed10Bound;
		return value;
	};
	try {
		this.speed10Bound = new SFBool();
	} catch (e) {
		console.log('Problems setting speed10Bound '+e);
		console.error('Problems setting speed10Bound',e);
	}
	this.set_speed100Bound = function (value) {
		try {
			this.proxy.speed100Bound = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting speed100Bound '+e);
			console.error('Problems setting speed100Bound',e);
		}
	};
	this.speed100Bound_changed = function () {
		var value = this.speed100Bound;
		return value;
	};
	try {
		this.speed100Bound = new SFBool();
	} catch (e) {
		console.log('Problems setting speed100Bound '+e);
		console.error('Problems setting speed100Bound',e);
	}
	this.set_speed1000Bound = function (value) {
		try {
			this.proxy.speed1000Bound = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting speed1000Bound '+e);
			console.error('Problems setting speed1000Bound',e);
		}
	};
	this.speed1000Bound_changed = function () {
		var value = this.speed1000Bound;
		return value;
	};
	try {
		this.speed1000Bound = new SFBool();
	} catch (e) {
		console.log('Problems setting speed1000Bound '+e);
		console.error('Problems setting speed1000Bound',e);
	}
	this.set_traceEnabled = function (value) {
		try {
			this.proxy.traceEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting traceEnabled '+e);
			console.error('Problems setting traceEnabled',e);
		}
	};
	this.traceEnabled_changed = function () {
		var value = this.traceEnabled;
		return value;
	};
	try {
		this.traceEnabled = new SFBool(true);
	} catch (e) {
		console.log('Problems setting traceEnabled '+e);
		console.error('Problems setting traceEnabled',e);
	}


ecmascript:

	this.speed1Bound = function (value, timestamp)
{
	this.tracePrint ('NavInfoDefault (1 mps) bound');
};

	this.speed10Bound = function (value, timestamp)
{
	this.tracePrint ('NavInfo10mps bound');
};

	this.speed100Bound = function (value, timestamp)
{
	this.tracePrint ('NavInfo100mps bound');
};

	this.speed1000Bound = function (value, timestamp)
{
	this.tracePrint ('NavInfo1000mps bound');
};

	this.alwaysPrint = function (text)
{
	console.error ('[NavSpeedMonitorScript] ' + text);
};

	this.tracePrint = function (text)
{
	if (this.proxy.traceEnabled) console.error ('[NavSpeedMonitorScript] ' + text);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json']['NavSpeedMonitorScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json']['NavSpeedMonitorScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json']['NavSpeedMonitorScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json']['NavSpeedMonitorScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json']['NavSpeedMonitorScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json']['NavSpeedMonitorScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json']['NavSpeedMonitorScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json']['NavSpeedMonitorScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json']['NavSpeedMonitorScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json']['NavSpeedMonitorScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json']['NavSpeedMonitorScript'].initialize();
    if (X3DJSON.nodeUtil("Scene","NavSpeed10BooleanTrigger")) {
X3DJSON.nodeUtil("Scene","NavSpeed10BooleanTrigger").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","NavSpeed10ProximitySensor")) {
X3DJSON.nodeUtil("Scene","NavSpeed10ProximitySensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","NavSpeed100BooleanTrigger")) {
X3DJSON.nodeUtil("Scene","NavSpeed100BooleanTrigger").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","NavSpeed100ProximitySensor")) {
X3DJSON.nodeUtil("Scene","NavSpeed100ProximitySensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","NavSpeed1000BooleanTrigger")) {
X3DJSON.nodeUtil("Scene","NavSpeed1000BooleanTrigger").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","NavSpeed1000ProximitySensor")) {
X3DJSON.nodeUtil("Scene","NavSpeed1000ProximitySensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","NavInfoDefault")) {
X3DJSON.nodeUtil("Scene","NavInfoDefault").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json']['NavSpeedMonitorScript'].speed1Bound(X3DJSON.nodeUtil("Scene","NavInfoDefault","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json']['NavSpeedMonitorScript'].speed1Bound(X3DJSON.nodeUtil("Scene","NavInfoDefault","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","NavInfo10mps")) {
X3DJSON.nodeUtil("Scene","NavInfo10mps").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json']['NavSpeedMonitorScript'].speed10Bound(X3DJSON.nodeUtil("Scene","NavInfo10mps","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json']['NavSpeedMonitorScript'].speed10Bound(X3DJSON.nodeUtil("Scene","NavInfo10mps","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","NavInfo100mps")) {
X3DJSON.nodeUtil("Scene","NavInfo100mps").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json']['NavSpeedMonitorScript'].speed100Bound(X3DJSON.nodeUtil("Scene","NavInfo100mps","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json']['NavSpeedMonitorScript'].speed100Bound(X3DJSON.nodeUtil("Scene","NavInfo100mps","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","NavInfo1000mps")) {
X3DJSON.nodeUtil("Scene","NavInfo1000mps").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json']['NavSpeedMonitorScript'].speed1000Bound(X3DJSON.nodeUtil("Scene","NavInfo1000mps","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json']['NavSpeedMonitorScript'].speed1000Bound(X3DJSON.nodeUtil("Scene","NavInfo1000mps","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json']['NavSpeedMonitorScript'].speed1Bound(X3DJSON.nodeUtil("Scene","NavInfoDefault","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json']['NavSpeedMonitorScript'].speed10Bound(X3DJSON.nodeUtil("Scene","NavInfo10mps","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json']['NavSpeedMonitorScript'].speed100Bound(X3DJSON.nodeUtil("Scene","NavInfo100mps","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/NavigationInfoStack.json']['NavSpeedMonitorScript'].speed1000Bound(X3DJSON.nodeUtil("Scene","NavInfo1000mps","isBound"), __eventTime);