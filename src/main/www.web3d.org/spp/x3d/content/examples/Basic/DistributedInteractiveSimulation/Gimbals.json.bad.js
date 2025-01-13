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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING'] = function() {
	this.set_roll = function (value) {
		try {
			this.proxy.roll = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting roll '+e);
			console.error('Problems setting roll',e);
		}
	};
	this.roll_changed = function () {
		var value = this.roll;
		return value;
	};
	try {
		this.roll = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting roll '+e);
		console.error('Problems setting roll',e);
	}
	this.set_elevation = function (value) {
		try {
			this.proxy.elevation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting elevation '+e);
			console.error('Problems setting elevation',e);
		}
	};
	this.elevation_changed = function () {
		var value = this.elevation;
		return value;
	};
	try {
		this.elevation = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting elevation '+e);
		console.error('Problems setting elevation',e);
	}
	this.set_azimuth = function (value) {
		try {
			this.proxy.azimuth = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting azimuth '+e);
			console.error('Problems setting azimuth',e);
		}
	};
	this.azimuth_changed = function () {
		var value = this.azimuth;
		return value;
	};
	try {
		this.azimuth = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting azimuth '+e);
		console.error('Problems setting azimuth',e);
	}
	this.set_azimuth2 = function (value) {
		try {
			this.proxy.azimuth2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting azimuth2 '+e);
			console.error('Problems setting azimuth2',e);
		}
	};
	this.azimuth2_changed = function () {
		var value = this.azimuth2;
		return value;
	};
	try {
		this.azimuth2 = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting azimuth2 '+e);
		console.error('Problems setting azimuth2',e);
	}
	this.set_newRotation = function (value) {
		try {
			this.proxy.newRotation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting newRotation '+e);
			console.error('Problems setting newRotation',e);
		}
	};
	this.newRotation_changed = function () {
		var value = this.newRotation;
		return value;
	};
	try {
		this.newRotation = new SFRotation(0,1,0,0);
	} catch (e) {
		console.log('Problems setting newRotation '+e);
		console.error('Problems setting newRotation',e);
	}
	this.set_newRotationString = function (value) {
		try {
			this.proxy.newRotationString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting newRotationString '+e);
			console.error('Problems setting newRotationString',e);
		}
	};
	this.newRotationString_changed = function () {
		var value = this.newRotationString;
		return value;
	};
	try {
		this.newRotationString = new SFString();
	} catch (e) {
		console.log('Problems setting newRotationString '+e);
		console.error('Problems setting newRotationString',e);
	}
	this.set_rollRotation = function (value) {
		try {
			this.proxy.rollRotation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rollRotation '+e);
			console.error('Problems setting rollRotation',e);
		}
	};
	this.rollRotation_changed = function () {
		var value = this.rollRotation;
		return value;
	};
	try {
		this.rollRotation = undefined;
	} catch (e) {
		console.log('Problems setting rollRotation '+e);
		console.error('Problems setting rollRotation',e);
	}
	this.set_elevationRotation = function (value) {
		try {
			this.proxy.elevationRotation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting elevationRotation '+e);
			console.error('Problems setting elevationRotation',e);
		}
	};
	this.elevationRotation_changed = function () {
		var value = this.elevationRotation;
		return value;
	};
	try {
		this.elevationRotation = undefined;
	} catch (e) {
		console.log('Problems setting elevationRotation '+e);
		console.error('Problems setting elevationRotation',e);
	}
	this.set_azimuthRotation = function (value) {
		try {
			this.proxy.azimuthRotation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting azimuthRotation '+e);
			console.error('Problems setting azimuthRotation',e);
		}
	};
	this.azimuthRotation_changed = function () {
		var value = this.azimuthRotation;
		return value;
	};
	try {
		this.azimuthRotation = undefined;
	} catch (e) {
		console.log('Problems setting azimuthRotation '+e);
		console.error('Problems setting azimuthRotation',e);
	}
	this.set_rotationMessage = function (value) {
		try {
			this.proxy.rotationMessage = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rotationMessage '+e);
			console.error('Problems setting rotationMessage',e);
		}
	};
	this.rotationMessage_changed = function () {
		var value = this.rotationMessage;
		return value;
	};
	try {
		this.rotationMessage = undefined;
	} catch (e) {
		console.log('Problems setting rotationMessage '+e);
		console.error('Problems setting rotationMessage',e);
	}
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING'].initialize();
    if (X3DJSON.nodeUtil("Scene","ROLL_SENSOR")) {
X3DJSON.nodeUtil("Scene","ROLL_SENSOR").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ELEVATION_SENSOR")) {
X3DJSON.nodeUtil("Scene","ELEVATION_SENSOR").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","AZIMUTH_SENSOR")) {
X3DJSON.nodeUtil("Scene","AZIMUTH_SENSOR").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ROLL_SENSOR")) {
X3DJSON.nodeUtil("Scene","ROLL_SENSOR").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING'].set_rollRotation(X3DJSON.nodeUtil("Scene","ROLL_SENSOR","rotation"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING'].set_rollRotation(X3DJSON.nodeUtil("Scene","ROLL_SENSOR","rotation"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","ELEVATION_SENSOR")) {
X3DJSON.nodeUtil("Scene","ELEVATION_SENSOR").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING'].set_elevationRotation(X3DJSON.nodeUtil("Scene","ELEVATION_SENSOR","rotation"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING'].set_elevationRotation(X3DJSON.nodeUtil("Scene","ELEVATION_SENSOR","rotation"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","AZIMUTH_SENSOR")) {
X3DJSON.nodeUtil("Scene","AZIMUTH_SENSOR").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING'].set_azimuthRotation(X3DJSON.nodeUtil("Scene","AZIMUTH_SENSOR","rotation"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING'].set_azimuthRotation(X3DJSON.nodeUtil("Scene","AZIMUTH_SENSOR","rotation"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING']['ACTION']['rotationMessage'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING']['ACTION']['rotationMessage'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING']['ACTION']['rotationMessage'].push(function(property, value) {
		if (property === 'rotationMessage') {
			X3DJSON.nodeUtil("Scene","TRACE_STRING","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING'].rotationMessage_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING'].rotationMessage_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING'].rotationMessage, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TRACE_STRING","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING'].rotationMessage_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING'].rotationMessage_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING'].rotationMessage, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING'].set_rollRotation(X3DJSON.nodeUtil("Scene","ROLL_SENSOR","rotation"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING'].set_elevationRotation(X3DJSON.nodeUtil("Scene","ELEVATION_SENSOR","rotation"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING'].set_azimuthRotation(X3DJSON.nodeUtil("Scene","AZIMUTH_SENSOR","rotation"), __eventTime);
			X3DJSON.nodeUtil("Scene","TRACE_STRING","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING'].rotationMessage_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING'].rotationMessage_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/Gimbals.json']['CONSTRUCT_TRACE_STRING'].rotationMessage, __eventTime);