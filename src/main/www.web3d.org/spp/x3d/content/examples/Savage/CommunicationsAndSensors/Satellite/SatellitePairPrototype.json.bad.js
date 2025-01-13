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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['TransmitScript'] = function() {
	this.set_transState = function (value) {
		try {
			this.proxy.transState = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transState '+e);
			console.error('Problems setting transState',e);
		}
	};
	this.transState_changed = function () {
		var value = this.transState;
		return value;
	};
	try {
		this.transState = new SFInt32();
	} catch (e) {
		console.log('Problems setting transState '+e);
		console.error('Problems setting transState',e);
	}
	this.set_size = function (value) {
		try {
			this.proxy.size = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting size '+e);
			console.error('Problems setting size',e);
		}
	};
	this.size_changed = function () {
		var value = this.size;
		return value;
	};
	try {
		this.size = new SFVec3f();
	} catch (e) {
		console.log('Problems setting size '+e);
		console.error('Problems setting size',e);
	}


ecmascript:

	this.initialize = function ()
{
	this.proxy.size = new SFVec3f(100, 100, 100) ;
	console.error ('TransmitScript this.initialize() complete') ;
}

// functi;

	this.transState = function (newValue, timestamp)
{
	transmitState = newValue ;
	if (transmitState == 3) {
		this.proxy.size = new SFVec3f(10, 10, 10) ;
	}
	else {
		this.proxy.size = new SFVec3f(100, 100, 100) ;
	}
	console.error ('this.proxy.size	= ' + this.proxy.size) ;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['TransmitScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['TransmitScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['TransmitScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['TransmitScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['TransmitScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['TransmitScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['TransmitScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['TransmitScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['TransmitScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['TransmitScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['TransmitScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['TransmitScript2'] = function() {
	this.set_transState = function (value) {
		try {
			this.proxy.transState = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transState '+e);
			console.error('Problems setting transState',e);
		}
	};
	this.transState_changed = function () {
		var value = this.transState;
		return value;
	};
	try {
		this.transState = new SFInt32();
	} catch (e) {
		console.log('Problems setting transState '+e);
		console.error('Problems setting transState',e);
	}
	this.set_size = function (value) {
		try {
			this.proxy.size = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting size '+e);
			console.error('Problems setting size',e);
		}
	};
	this.size_changed = function () {
		var value = this.size;
		return value;
	};
	try {
		this.size = new SFVec3f();
	} catch (e) {
		console.log('Problems setting size '+e);
		console.error('Problems setting size',e);
	}


ecmascript:

	this.initialize = function ()
{
	this.proxy.size = new SFVec3f(100, 100, 100) ;
	console.error ('TransmitScript this.initialize() complete') ;
}

// functi;

	this.transState = function (newValue, timestamp)
{
	transmitState = newValue ;
	if (transmitState == 3) {
		this.proxy.size = new SFVec3f(10, 10, 10) ;
	}
	else {
		this.proxy.size = new SFVec3f(100, 100, 100) ;
	}
	console.error ('this.proxy.size	= ' + this.proxy.size) ;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['TransmitScript2'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['TransmitScript2']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['TransmitScript2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['TransmitScript2'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['TransmitScript2']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['TransmitScript2']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['TransmitScript2'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['TransmitScript2']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['TransmitScript2']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['TransmitScript2'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['TransmitScript2'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'] = function() {
	this.set_GroundLocation = function (value) {
		try {
			this.proxy.GroundLocation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting GroundLocation '+e);
			console.error('Problems setting GroundLocation',e);
		}
	};
	this.GroundLocation_changed = function () {
		var value = this.GroundLocation;
		return value;
	};
	try {
		this.GroundLocation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting GroundLocation '+e);
		console.error('Problems setting GroundLocation',e);
	}
	this.set_SatelliteLocation = function (value) {
		try {
			this.proxy.SatelliteLocation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SatelliteLocation '+e);
			console.error('Problems setting SatelliteLocation',e);
		}
	};
	this.SatelliteLocation_changed = function () {
		var value = this.SatelliteLocation;
		return value;
	};
	try {
		this.SatelliteLocation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting SatelliteLocation '+e);
		console.error('Problems setting SatelliteLocation',e);
	}
	this.set_Ground_XZangle = function (value) {
		try {
			this.proxy.Ground_XZangle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Ground_XZangle '+e);
			console.error('Problems setting Ground_XZangle',e);
		}
	};
	this.Ground_XZangle_changed = function () {
		var value = this.Ground_XZangle;
		return value;
	};
	try {
		this.Ground_XZangle = new SFRotation();
	} catch (e) {
		console.log('Problems setting Ground_XZangle '+e);
		console.error('Problems setting Ground_XZangle',e);
	}
	this.set_Satellite_XZangle = function (value) {
		try {
			this.proxy.Satellite_XZangle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Satellite_XZangle '+e);
			console.error('Problems setting Satellite_XZangle',e);
		}
	};
	this.Satellite_XZangle_changed = function () {
		var value = this.Satellite_XZangle;
		return value;
	};
	try {
		this.Satellite_XZangle = new SFRotation();
	} catch (e) {
		console.log('Problems setting Satellite_XZangle '+e);
		console.error('Problems setting Satellite_XZangle',e);
	}
	this.set_beamScale = function (value) {
		try {
			this.proxy.beamScale = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting beamScale '+e);
			console.error('Problems setting beamScale',e);
		}
	};
	this.beamScale_changed = function () {
		var value = this.beamScale;
		return value;
	};
	try {
		this.beamScale = new SFVec3f();
	} catch (e) {
		console.log('Problems setting beamScale '+e);
		console.error('Problems setting beamScale',e);
	}
	this.set_Ground_beamLength = function (value) {
		try {
			this.proxy.Ground_beamLength = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Ground_beamLength '+e);
			console.error('Problems setting Ground_beamLength',e);
		}
	};
	this.Ground_beamLength_changed = function () {
		var value = this.Ground_beamLength;
		return value;
	};
	try {
		this.Ground_beamLength = new SFFloat();
	} catch (e) {
		console.log('Problems setting Ground_beamLength '+e);
		console.error('Problems setting Ground_beamLength',e);
	}
	this.set_Satellite_beamLength = function (value) {
		try {
			this.proxy.Satellite_beamLength = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Satellite_beamLength '+e);
			console.error('Problems setting Satellite_beamLength',e);
		}
	};
	this.Satellite_beamLength_changed = function () {
		var value = this.Satellite_beamLength;
		return value;
	};
	try {
		this.Satellite_beamLength = new SFFloat();
	} catch (e) {
		console.log('Problems setting Satellite_beamLength '+e);
		console.error('Problems setting Satellite_beamLength',e);
	}
	this.set_Ground_XYangle = function (value) {
		try {
			this.proxy.Ground_XYangle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Ground_XYangle '+e);
			console.error('Problems setting Ground_XYangle',e);
		}
	};
	this.Ground_XYangle_changed = function () {
		var value = this.Ground_XYangle;
		return value;
	};
	try {
		this.Ground_XYangle = new SFRotation();
	} catch (e) {
		console.log('Problems setting Ground_XYangle '+e);
		console.error('Problems setting Ground_XYangle',e);
	}
	this.set_Satellite_XYangle = function (value) {
		try {
			this.proxy.Satellite_XYangle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Satellite_XYangle '+e);
			console.error('Problems setting Satellite_XYangle',e);
		}
	};
	this.Satellite_XYangle_changed = function () {
		var value = this.Satellite_XYangle;
		return value;
	};
	try {
		this.Satellite_XYangle = new SFRotation();
	} catch (e) {
		console.log('Problems setting Satellite_XYangle '+e);
		console.error('Problems setting Satellite_XYangle',e);
	}
	this.set_LinkEstablished = function (value) {
		try {
			this.proxy.LinkEstablished = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting LinkEstablished '+e);
			console.error('Problems setting LinkEstablished',e);
		}
	};
	this.LinkEstablished_changed = function () {
		var value = this.LinkEstablished;
		return value;
	};
	try {
		this.LinkEstablished = new SFBool();
	} catch (e) {
		console.log('Problems setting LinkEstablished '+e);
		console.error('Problems setting LinkEstablished',e);
	}
	this.set_Ground_Viewpoint = function (value) {
		try {
			this.proxy.Ground_Viewpoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Ground_Viewpoint '+e);
			console.error('Problems setting Ground_Viewpoint',e);
		}
	};
	this.Ground_Viewpoint_changed = function () {
		var value = this.Ground_Viewpoint;
		return value;
	};
	try {
		this.Ground_Viewpoint = new SFVec3f();
	} catch (e) {
		console.log('Problems setting Ground_Viewpoint '+e);
		console.error('Problems setting Ground_Viewpoint',e);
	}
	this.set_Satellite_Viewpoint = function (value) {
		try {
			this.proxy.Satellite_Viewpoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Satellite_Viewpoint '+e);
			console.error('Problems setting Satellite_Viewpoint',e);
		}
	};
	this.Satellite_Viewpoint_changed = function () {
		var value = this.Satellite_Viewpoint;
		return value;
	};
	try {
		this.Satellite_Viewpoint = new SFVec3f();
	} catch (e) {
		console.log('Problems setting Satellite_Viewpoint '+e);
		console.error('Problems setting Satellite_Viewpoint',e);
	}
	this.set_Ground_ViewpointAngle = function (value) {
		try {
			this.proxy.Ground_ViewpointAngle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Ground_ViewpointAngle '+e);
			console.error('Problems setting Ground_ViewpointAngle',e);
		}
	};
	this.Ground_ViewpointAngle_changed = function () {
		var value = this.Ground_ViewpointAngle;
		return value;
	};
	try {
		this.Ground_ViewpointAngle = new SFRotation();
	} catch (e) {
		console.log('Problems setting Ground_ViewpointAngle '+e);
		console.error('Problems setting Ground_ViewpointAngle',e);
	}
	this.set_Satellite_ViewpointAngle = function (value) {
		try {
			this.proxy.Satellite_ViewpointAngle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Satellite_ViewpointAngle '+e);
			console.error('Problems setting Satellite_ViewpointAngle',e);
		}
	};
	this.Satellite_ViewpointAngle_changed = function () {
		var value = this.Satellite_ViewpointAngle;
		return value;
	};
	try {
		this.Satellite_ViewpointAngle = new SFRotation();
	} catch (e) {
		console.log('Problems setting Satellite_ViewpointAngle '+e);
		console.error('Problems setting Satellite_ViewpointAngle',e);
	}


ecmascript:

	this.initialize = function ()
{
	console.error ('GroundStation	=' + this.proxy.GroundLocation) ;
	console.error ('Satellite		=' + this.proxy.SatelliteLocation) ;
	console.error ('TransmitScript this.initialize() complete') ;
	active = true ;
	this.proxy.Ground_XZangle	= new SFRotation(0, 1, 0, 0) ;
	this.proxy.Satellite_XZangle	= new SFRotation(0, 1, 0, 0) ;
	this.proxy.Ground_XYangle	= new SFRotation(0, 0, 1, 0) ;
	this.proxy.Satellite_XYangle	= new SFRotation(0, 0, 1, 0) ;
	XZangle	= new SFRotation(0, 1, 0, 0) ;
	XYangle	= new SFRotation(0, 0, 1, 0) ;
	this.proxy.Ground_ViewpointAngle	= new SFRotation(0, 1, 0, 0) ;
	this.proxy.Satellite_ViewpointAngle	= new SFRotation(1, 0, 0, 0) ;
	HighAboveViewpointAngle	= new SFRotation(1, 0, 0, 0) ;	
	HighAboveTranslationAngle	= new SFRotation(0, 1, 0, 0) ;

	this.proxy.beamScale		= new SFVec3f ( ) ;
	center		= new SFVec3f ( ) ;
	this.proxy.Ground_Viewpoint	= new SFVec3f ( ) ;
	this.proxy.Satellite_Viewpoint	= new SFVec3f ( ) ;
	HighAboveViewpoint	= new SFVec3f ( ) ;
	this.proxy.LinkEstablished	= true;
		
	this.compute(active) ;
}

;

	this.compute = function ( )
{
		this.computeDistance( ) ;
		this.computeXZangle( );
		this.computeXYangle( ) ;

	this.proxy.Ground_Viewpoint[0]	= this.proxy.GroundLocation[0] + Math.sin(this.proxy.Ground_XZangle[3] - 1.57)*40;
	this.proxy.Ground_Viewpoint[1]	= this.proxy.GroundLocation[1] + 10;
	this.proxy.Ground_Viewpoint[2]	= this.proxy.GroundLocation[2] +Math.cos(this.proxy.Ground_XZangle[3] - 1.57)*40;
print ('this.proxy.Ground_Viewpoint	'+ this.proxy.Ground_Viewpoint) ;
	this.proxy.Ground_ViewpointAngle[3]	= this.proxy.Ground_XZangle[3] - 1.57 ;

	this.proxy.Satellite_Viewpoint[0]	= this.proxy.SatelliteLocation[0] ;
	this.proxy.Satellite_Viewpoint[1]	= this.proxy.SatelliteLocation[1] + 200;
	this.proxy.Satellite_Viewpoint[2]	= this.proxy.SatelliteLocation[2] ;
	this.proxy.Satellite_ViewpointAngle[3]	=  -1.57 ;
print ('this.proxy.Satellite_Viewpoint	'+ this.proxy.Satellite_Viewpoint) ;
	
}


;

	this.computeDistance = function ( ) 
{
	console.error ('Ground	=' + this.proxy.GroundLocation) ;
	console.error ('Satellite	=' + this.proxy.SatelliteLocation) ;
	deltaX 	= (this.proxy.SatelliteLocation[0] - this.proxy.GroundLocation[0]) ;
	deltaY 	= (this.proxy.SatelliteLocation[1] - this.proxy.GroundLocation[1]) ;
	deltaZ 	= (this.proxy.SatelliteLocation[2] - this.proxy.GroundLocation[2]) ;
	distanceSquared	= deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ ;
	console.error ('Distance Squared	=' + distanceSquared) ;
	distance 	= Math.sqrt(distanceSquared) ;
	console.error ('Distance	=' + distance) ;

	this.proxy.beamScale[0] 	= distance/10;
	this.proxy.beamScale[1]	= 10;
	this.proxy.beamScale[2]	= 10;	
	console.error ('BeamScale	=' + this.proxy.beamScale) ;
	this.proxy.Ground_beamLength 	= distance -2;	
	this.proxy.Satellite_beamLength 	= 2000;
	if (distance > 60000/.6*1000) {
		this.proxy.LinkEstablished = false;
		this.proxy.Ground_beamLength = 5000/.6 ;	
		this.proxy.Satellite_beamLength = 5000/.6 ;
	}
}
;

	this.computeXZangle = function ( ) 
{
	if (deltaZ == 0) {
		deltaZ = .00000001 ;
	}
	
	angle 	= Math.atan(deltaX/deltaZ) ;
	if (deltaZ < 0) {
		this.proxy.Ground_XZangle[3] = angle + Math.PI/2;
	}
	else {
		this.proxy.Ground_XZangle[3] = angle -  Math.PI/2;
	}
	this.proxy.Satellite_XZangle[3]  = 1.57;
	
	console.error ('Angle	=' + this.proxy.Ground_XZangle[3]) ;
	console.error ('Angle2	=' + this.proxy.Satellite_XZangle[3]) ;
}	
		

;

	this.computeXYangle = function ( ) 
{
	angle 	= Math.asin(deltaY/distance) ;
	this.proxy.Ground_XYangle[3] = angle ;
	this.proxy.Satellite_XYangle[3]  = -1.57;
	
	console.error ('AngleXY	=' + this.proxy.Ground_XYangle[3]) ;
	console.error ('Angle2XY	=' + this.proxy.Satellite_XYangle[3]) ;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['Ground_XZangle'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['Ground_XZangle'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['Ground_XZangle'].push(function(property, value) {
		if (property === 'Ground_XZangle') {
			X3DJSON.nodeUtil("Scene","GROUND_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_XZangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_XZangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_XZangle, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","GROUND_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_XZangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_XZangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_XZangle, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['Satellite_XZangle'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['Satellite_XZangle'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['Satellite_XZangle'].push(function(property, value) {
		if (property === 'Satellite_XZangle') {
			X3DJSON.nodeUtil("Scene","Satellite_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_XZangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_XZangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_XZangle, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Satellite_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_XZangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_XZangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_XZangle, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['Ground_beamLength'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['Ground_beamLength'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['Ground_beamLength'].push(function(property, value) {
		if (property === 'Ground_beamLength') {
			X3DJSON.nodeUtil("Scene","GROUND_BEAMCONE","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_beamLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_beamLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_beamLength, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","GROUND_BEAMCONE","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_beamLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_beamLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_beamLength, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['Ground_XYangle'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['Ground_XYangle'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['Ground_XYangle'].push(function(property, value) {
		if (property === 'Ground_XYangle') {
			X3DJSON.nodeUtil("Scene","Ground_XY_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_XYangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_XYangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_XYangle, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Ground_XY_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_XYangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_XYangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_XYangle, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['Satellite_XYangle'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['Satellite_XYangle'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['Satellite_XYangle'].push(function(property, value) {
		if (property === 'Satellite_XYangle') {
			X3DJSON.nodeUtil("Scene","Satellite_XY_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_XYangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_XYangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_XYangle, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Satellite_XY_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_XYangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_XYangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_XYangle, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['LinkEstablished'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['LinkEstablished'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['LinkEstablished'].push(function(property, value) {
		if (property === 'LinkEstablished') {
			X3DJSON.nodeUtil("Scene","GROUND_BEAMCONE","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].LinkEstablished === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].LinkEstablished() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].LinkEstablished, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","GROUND_BEAMCONE","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].LinkEstablished === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].LinkEstablished() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].LinkEstablished, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['LinkEstablished'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['LinkEstablished'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['LinkEstablished'].push(function(property, value) {
		if (property === 'LinkEstablished') {
			X3DJSON.nodeUtil("Scene","Satellite_BEAMCONE","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].LinkEstablished === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].LinkEstablished() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].LinkEstablished, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Satellite_BEAMCONE","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].LinkEstablished === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].LinkEstablished() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].LinkEstablished, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['Ground_Viewpoint'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['Ground_Viewpoint'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['Ground_Viewpoint'].push(function(property, value) {
		if (property === 'Ground_Viewpoint') {
			X3DJSON.nodeUtil("Scene","GroundViewpoint","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_Viewpoint === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_Viewpoint() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_Viewpoint, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","GroundViewpoint","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_Viewpoint === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_Viewpoint() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_Viewpoint, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['Satellite_Viewpoint'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['Satellite_Viewpoint'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['Satellite_Viewpoint'].push(function(property, value) {
		if (property === 'Satellite_Viewpoint') {
			X3DJSON.nodeUtil("Scene","SatelliteViewpoint","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_Viewpoint === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_Viewpoint() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_Viewpoint, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SatelliteViewpoint","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_Viewpoint === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_Viewpoint() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_Viewpoint, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['Ground_ViewpointAngle'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['Ground_ViewpointAngle'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['Ground_ViewpointAngle'].push(function(property, value) {
		if (property === 'Ground_ViewpointAngle') {
			X3DJSON.nodeUtil("Scene","GroundViewpoint","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_ViewpointAngle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_ViewpointAngle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_ViewpointAngle, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","GroundViewpoint","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_ViewpointAngle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_ViewpointAngle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_ViewpointAngle, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['Satellite_ViewpointAngle'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['Satellite_ViewpointAngle'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript']['ACTION']['Satellite_ViewpointAngle'].push(function(property, value) {
		if (property === 'Satellite_ViewpointAngle') {
			X3DJSON.nodeUtil("Scene","SatelliteViewpoint","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_ViewpointAngle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_ViewpointAngle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_ViewpointAngle, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SatelliteViewpoint","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_ViewpointAngle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_ViewpointAngle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_ViewpointAngle, __eventTime);
			X3DJSON.nodeUtil("Scene","GROUND_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_XZangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_XZangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_XZangle, __eventTime);
			X3DJSON.nodeUtil("Scene","Satellite_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_XZangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_XZangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_XZangle, __eventTime);
			X3DJSON.nodeUtil("Scene","GROUND_BEAMCONE","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_beamLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_beamLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_beamLength, __eventTime);
			X3DJSON.nodeUtil("Scene","Ground_XY_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_XYangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_XYangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_XYangle, __eventTime);
			X3DJSON.nodeUtil("Scene","Satellite_XY_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_XYangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_XYangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_XYangle, __eventTime);
			X3DJSON.nodeUtil("Scene","GROUND_BEAMCONE","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].LinkEstablished === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].LinkEstablished() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].LinkEstablished, __eventTime);
			X3DJSON.nodeUtil("Scene","Satellite_BEAMCONE","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].LinkEstablished === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].LinkEstablished() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].LinkEstablished, __eventTime);
			X3DJSON.nodeUtil("Scene","GroundViewpoint","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_Viewpoint === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_Viewpoint() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_Viewpoint, __eventTime);
			X3DJSON.nodeUtil("Scene","SatelliteViewpoint","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_Viewpoint === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_Viewpoint() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_Viewpoint, __eventTime);
			X3DJSON.nodeUtil("Scene","GroundViewpoint","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_ViewpointAngle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_ViewpointAngle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Ground_ViewpointAngle, __eventTime);
			X3DJSON.nodeUtil("Scene","SatelliteViewpoint","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_ViewpointAngle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_ViewpointAngle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Satellite/SatellitePairPrototype.json']['CalculateAngleScript'].Satellite_ViewpointAngle, __eventTime);