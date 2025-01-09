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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'] = function() {
	this.set_articulationParameters = function (value) {
		try {
			this.proxy.articulationParameters = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting articulationParameters '+e);
			console.error('Problems setting articulationParameters',e);
		}
	};
	this.articulationParameters_changed = function () {
		var value = this.articulationParameters;
		return value;
	};
	try {
		this.articulationParameters = undefined;
	} catch (e) {
		console.log('Problems setting articulationParameters '+e);
		console.error('Problems setting articulationParameters',e);
	}
	this.set_rpm = function (value) {
		try {
			this.proxy.rpm = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rpm '+e);
			console.error('Problems setting rpm',e);
		}
	};
	this.rpm_changed = function () {
		var value = this.rpm;
		return value;
	};
	try {
		this.rpm = new SFFloat();
	} catch (e) {
		console.log('Problems setting rpm '+e);
		console.error('Problems setting rpm',e);
	}
	this.set_topRudder = function (value) {
		try {
			this.proxy.topRudder = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting topRudder '+e);
			console.error('Problems setting topRudder',e);
		}
	};
	this.topRudder_changed = function () {
		var value = this.topRudder;
		return value;
	};
	try {
		this.topRudder = new SFRotation();
	} catch (e) {
		console.log('Problems setting topRudder '+e);
		console.error('Problems setting topRudder',e);
	}
	this.set_bottomRudder = function (value) {
		try {
			this.proxy.bottomRudder = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting bottomRudder '+e);
			console.error('Problems setting bottomRudder',e);
		}
	};
	this.bottomRudder_changed = function () {
		var value = this.bottomRudder;
		return value;
	};
	try {
		this.bottomRudder = new SFRotation();
	} catch (e) {
		console.log('Problems setting bottomRudder '+e);
		console.error('Problems setting bottomRudder',e);
	}
	this.set_stbdPlane = function (value) {
		try {
			this.proxy.stbdPlane = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting stbdPlane '+e);
			console.error('Problems setting stbdPlane',e);
		}
	};
	this.stbdPlane_changed = function () {
		var value = this.stbdPlane;
		return value;
	};
	try {
		this.stbdPlane = new SFRotation();
	} catch (e) {
		console.log('Problems setting stbdPlane '+e);
		console.error('Problems setting stbdPlane',e);
	}
	this.set_portPlane = function (value) {
		try {
			this.proxy.portPlane = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting portPlane '+e);
			console.error('Problems setting portPlane',e);
		}
	};
	this.portPlane_changed = function () {
		var value = this.portPlane;
		return value;
	};
	try {
		this.portPlane = new SFRotation();
	} catch (e) {
		console.log('Problems setting portPlane '+e);
		console.error('Problems setting portPlane',e);
	}


ecmascript:

	this.initialize = function ()
{
   this.proxy.rpm     = 0;
   rudder  = new SFRotation (0, 1, 0, 0);
   planes  = new SFRotation (1, 0, 0, 0);
}
;

	this.set_articulationParameters = function ( value, timestamp )
{
   this.proxy.rpm          = value[1] * 3.0;
   this.proxy.topRudder    = new SFRotation (1, 0, 0,  value[4]);
   this.proxy.bottomRudder = new SFRotation (1, 0, 0, -value[4]);
   this.proxy.stbdPlane    = new SFRotation (1, 0, 0,  value[6]);
   this.proxy.portPlane    = new SFRotation (1, 0, 0, -value[6]);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].initialize();
    if (X3DJSON.nodeUtil("Scene","Clock")) {
X3DJSON.nodeUtil("Scene","Clock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PropSpin")) {
X3DJSON.nodeUtil("Scene","PropSpin").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","AUVTRANSFORM")) {
X3DJSON.nodeUtil("Scene","AUVTRANSFORM").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].set_articulationParameters(X3DJSON.nodeUtil("Scene","AUVTRANSFORM","articulationParameterArray"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].set_articulationParameters(X3DJSON.nodeUtil("Scene","AUVTRANSFORM","articulationParameterArray"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl']['ACTION']['rpm'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl']['ACTION']['rpm'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl']['ACTION']['rpm'].push(function(property, value) {
		if (property === 'rpm') {
			X3DJSON.nodeUtil("Scene","ScrewBeamCone","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].rpm === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].rpm() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].rpm, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ScrewBeamCone","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].rpm === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].rpm() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].rpm, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl']['ACTION']['topRudder'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl']['ACTION']['topRudder'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl']['ACTION']['topRudder'].push(function(property, value) {
		if (property === 'topRudder') {
			X3DJSON.nodeUtil("Scene","Deflector1","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].topRudder === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].topRudder() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].topRudder, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Deflector1","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].topRudder === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].topRudder() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].topRudder, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl']['ACTION']['bottomRudder'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl']['ACTION']['bottomRudder'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl']['ACTION']['bottomRudder'].push(function(property, value) {
		if (property === 'bottomRudder') {
			X3DJSON.nodeUtil("Scene","Deflector2","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].bottomRudder === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].bottomRudder() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].bottomRudder, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Deflector2","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].bottomRudder === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].bottomRudder() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].bottomRudder, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl']['ACTION']['portPlane'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl']['ACTION']['portPlane'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl']['ACTION']['portPlane'].push(function(property, value) {
		if (property === 'portPlane') {
			X3DJSON.nodeUtil("Scene","Deflector3","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].portPlane === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].portPlane() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].portPlane, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Deflector3","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].portPlane === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].portPlane() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].portPlane, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl']['ACTION']['stbdPlane'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl']['ACTION']['stbdPlane'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl']['ACTION']['stbdPlane'].push(function(property, value) {
		if (property === 'stbdPlane') {
			X3DJSON.nodeUtil("Scene","Deflector4","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].stbdPlane === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].stbdPlane() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].stbdPlane, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Deflector4","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].stbdPlane === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].stbdPlane() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].stbdPlane, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].set_articulationParameters(X3DJSON.nodeUtil("Scene","AUVTRANSFORM","articulationParameterArray"), __eventTime);
			X3DJSON.nodeUtil("Scene","ScrewBeamCone","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].rpm === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].rpm() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].rpm, __eventTime);
			X3DJSON.nodeUtil("Scene","Deflector1","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].topRudder === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].topRudder() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].topRudder, __eventTime);
			X3DJSON.nodeUtil("Scene","Deflector2","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].bottomRudder === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].bottomRudder() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].bottomRudder, __eventTime);
			X3DJSON.nodeUtil("Scene","Deflector3","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].portPlane === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].portPlane() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].portPlane, __eventTime);
			X3DJSON.nodeUtil("Scene","Deflector4","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].stbdPlane === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].stbdPlane() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/RemusEspdu.json']['ArticulationParameterControl'].stbdPlane, __eventTime);