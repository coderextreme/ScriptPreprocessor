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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['TransmitScript'] = function() {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['TransmitScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['TransmitScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['TransmitScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['TransmitScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['TransmitScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['TransmitScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['TransmitScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['TransmitScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['TransmitScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['TransmitScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['TransmitScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['TransmitScript2'] = function() {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['TransmitScript2'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['TransmitScript2']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['TransmitScript2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['TransmitScript2'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['TransmitScript2']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['TransmitScript2']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['TransmitScript2'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['TransmitScript2']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['TransmitScript2']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['TransmitScript2'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['TransmitScript2'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'] = function() {
	this.set_TSSR1Location = function (value) {
		try {
			this.proxy.TSSR1Location = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TSSR1Location '+e);
			console.error('Problems setting TSSR1Location',e);
		}
	};
	this.TSSR1Location_changed = function () {
		var value = this.TSSR1Location;
		return value;
	};
	try {
		this.TSSR1Location = new SFVec3f();
	} catch (e) {
		console.log('Problems setting TSSR1Location '+e);
		console.error('Problems setting TSSR1Location',e);
	}
	this.set_TSSR2Location = function (value) {
		try {
			this.proxy.TSSR2Location = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TSSR2Location '+e);
			console.error('Problems setting TSSR2Location',e);
		}
	};
	this.TSSR2Location_changed = function () {
		var value = this.TSSR2Location;
		return value;
	};
	try {
		this.TSSR2Location = new SFVec3f();
	} catch (e) {
		console.log('Problems setting TSSR2Location '+e);
		console.error('Problems setting TSSR2Location',e);
	}
	this.set_TSSR1_XZangle = function (value) {
		try {
			this.proxy.TSSR1_XZangle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TSSR1_XZangle '+e);
			console.error('Problems setting TSSR1_XZangle',e);
		}
	};
	this.TSSR1_XZangle_changed = function () {
		var value = this.TSSR1_XZangle;
		return value;
	};
	try {
		this.TSSR1_XZangle = new SFRotation();
	} catch (e) {
		console.log('Problems setting TSSR1_XZangle '+e);
		console.error('Problems setting TSSR1_XZangle',e);
	}
	this.set_TSSR2_XZangle = function (value) {
		try {
			this.proxy.TSSR2_XZangle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TSSR2_XZangle '+e);
			console.error('Problems setting TSSR2_XZangle',e);
		}
	};
	this.TSSR2_XZangle_changed = function () {
		var value = this.TSSR2_XZangle;
		return value;
	};
	try {
		this.TSSR2_XZangle = new SFRotation();
	} catch (e) {
		console.log('Problems setting TSSR2_XZangle '+e);
		console.error('Problems setting TSSR2_XZangle',e);
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
	this.set_beamLength = function (value) {
		try {
			this.proxy.beamLength = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting beamLength '+e);
			console.error('Problems setting beamLength',e);
		}
	};
	this.beamLength_changed = function () {
		var value = this.beamLength;
		return value;
	};
	try {
		this.beamLength = new SFFloat();
	} catch (e) {
		console.log('Problems setting beamLength '+e);
		console.error('Problems setting beamLength',e);
	}
	this.set_TSSR1_XYangle = function (value) {
		try {
			this.proxy.TSSR1_XYangle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TSSR1_XYangle '+e);
			console.error('Problems setting TSSR1_XYangle',e);
		}
	};
	this.TSSR1_XYangle_changed = function () {
		var value = this.TSSR1_XYangle;
		return value;
	};
	try {
		this.TSSR1_XYangle = new SFRotation();
	} catch (e) {
		console.log('Problems setting TSSR1_XYangle '+e);
		console.error('Problems setting TSSR1_XYangle',e);
	}
	this.set_TSSR2_XYangle = function (value) {
		try {
			this.proxy.TSSR2_XYangle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TSSR2_XYangle '+e);
			console.error('Problems setting TSSR2_XYangle',e);
		}
	};
	this.TSSR2_XYangle_changed = function () {
		var value = this.TSSR2_XYangle;
		return value;
	};
	try {
		this.TSSR2_XYangle = new SFRotation();
	} catch (e) {
		console.log('Problems setting TSSR2_XYangle '+e);
		console.error('Problems setting TSSR2_XYangle',e);
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
	this.set_ViewpointLocation = function (value) {
		try {
			this.proxy.ViewpointLocation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ViewpointLocation '+e);
			console.error('Problems setting ViewpointLocation',e);
		}
	};
	this.ViewpointLocation_changed = function () {
		var value = this.ViewpointLocation;
		return value;
	};
	try {
		this.ViewpointLocation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting ViewpointLocation '+e);
		console.error('Problems setting ViewpointLocation',e);
	}
	this.set_ViewpointAngle = function (value) {
		try {
			this.proxy.ViewpointAngle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ViewpointAngle '+e);
			console.error('Problems setting ViewpointAngle',e);
		}
	};
	this.ViewpointAngle_changed = function () {
		var value = this.ViewpointAngle;
		return value;
	};
	try {
		this.ViewpointAngle = new SFRotation();
	} catch (e) {
		console.log('Problems setting ViewpointAngle '+e);
		console.error('Problems setting ViewpointAngle',e);
	}


ecmascript:

	this.initialize = function ()
{
	console.error ('TSSR1	=' + this.proxy.TSSR1Location) ;
	console.error ('TSSR2	=' + this.proxy.TSSR2Location) ;
	console.error ('TransmitScript this.initialize() complete') ;
	active = true ;
	this.proxy.TSSR1_XZangle	= new SFRotation(0, 1, 0, 0) ;
	this.proxy.TSSR2_XZangle	= new SFRotation(0, 1, 0, 0) ;
	this.proxy.TSSR1_XYangle	= new SFRotation(0, 0, 1, 0) ;
	this.proxy.TSSR2_XYangle	= new SFRotation(0, 0, 1, 0) ;
	
	this.proxy.beamScale		= new SFVec3f ( ) ;
	this.proxy.ViewpointLocation	= new SFVec3f ( ) ;
	this.proxy.ViewpointAngle		= new SFRotation(0, 1, 0, 0) ;
	this.proxy.LinkEstablished	= true;
	
	this.compute(active) ;
}

;

	this.compute = function ( )
{
	this.computeDistance( ) ;
	this.computeXZangle( );
	this.proxy.ViewpointLocation[0] = this.proxy.TSSR1Location[0] ;
	this.proxy.ViewpointLocation[1] = this.proxy.TSSR1Location[1] + 4;
	this.proxy.ViewpointLocation[2] = this.proxy.TSSR1Location[2] ;
	console.error ('this.proxy.ViewpointLocation	=' + this.proxy.ViewpointLocation) ;
	this.proxy.ViewpointAngle[3] = this.proxy.TSSR1_XZangle[3] - Math.PI/2;
	console.error ('this.proxy.ViewpointAngle	=' + this.proxy.ViewpointAngle) ;
	this.computeXYangle( ) ;
	
}
	;

	this.computeDistance = function ( ) 
{
	console.error ('TSSR1	=' + this.proxy.TSSR1Location) ;
	console.error ('TSSR2	=' + this.proxy.TSSR2Location) ;
	deltaX 	= (this.proxy.TSSR2Location[0] - this.proxy.TSSR1Location[0]) ;
	deltaY 	= (this.proxy.TSSR2Location[1] - this.proxy.TSSR1Location[1]) ;
	deltaZ 	= (this.proxy.TSSR2Location[2] - this.proxy.TSSR1Location[2]) ;
	distanceSquared	= deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ ;
	console.error ('Distance Squared	=' + distanceSquared) ;
	distance 	= Math.sqrt(distanceSquared) ;
	console.error ('Distance	=' + distance) ;


	this.proxy.beamScale[0] 	= distance/10;
	this.proxy.beamScale[1]	= 5;
	this.proxy.beamScale[2]	= 5;	
	console.error ('BeamScale	=' + this.proxy.beamScale) ;
	this.proxy.beamLength 	= distance - 2 ;
	if (distance > 5000/.6) {
		this.proxy.LinkEstablished = false;
		this.proxy.beamLength = 5000;
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
		this.proxy.TSSR1_XZangle[3] = angle + Math.PI/2;
	}
	else {
		this.proxy.TSSR1_XZangle[3] = angle -  Math.PI/2;
	}
	this.proxy.TSSR2_XZangle[3]  = this.proxy.TSSR1_XZangle[3] +  Math.PI;
	
	console.error ('Angle	=' + this.proxy.TSSR1_XZangle[3]) ;
	console.error ('Angle2	=' + this.proxy.TSSR2_XZangle[3]) ;
}	
		

;

	this.computeXYangle = function ( ) 
{
	angle 	= Math.asin(deltaY/distance) ;
	this.proxy.TSSR1_XYangle[3] = angle ;
	this.proxy.TSSR2_XYangle[3]  = - this.proxy.TSSR1_XYangle[3];
	
	console.error ('AngleXY	=' + this.proxy.TSSR1_XYangle[3]) ;
	console.error ('Angle2XY	=' + this.proxy.TSSR2_XYangle[3]) ;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['TSSR1_XZangle'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['TSSR1_XZangle'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['TSSR1_XZangle'].push(function(property, value) {
		if (property === 'TSSR1_XZangle') {
			X3DJSON.nodeUtil("Scene","TSSR1_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR1_XZangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR1_XZangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR1_XZangle, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TSSR1_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR1_XZangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR1_XZangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR1_XZangle, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['TSSR2_XZangle'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['TSSR2_XZangle'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['TSSR2_XZangle'].push(function(property, value) {
		if (property === 'TSSR2_XZangle') {
			X3DJSON.nodeUtil("Scene","TSSR2_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR2_XZangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR2_XZangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR2_XZangle, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TSSR2_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR2_XZangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR2_XZangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR2_XZangle, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['beamLength'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['beamLength'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['beamLength'].push(function(property, value) {
		if (property === 'beamLength') {
			X3DJSON.nodeUtil("Scene","TSSR1_BEAMCYLINDER","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].beamLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].beamLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].beamLength, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TSSR1_BEAMCYLINDER","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].beamLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].beamLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].beamLength, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['beamLength'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['beamLength'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['beamLength'].push(function(property, value) {
		if (property === 'beamLength') {
			X3DJSON.nodeUtil("Scene","TSSR2_BEAMCYLINDER","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].beamLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].beamLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].beamLength, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TSSR2_BEAMCYLINDER","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].beamLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].beamLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].beamLength, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['TSSR1_XYangle'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['TSSR1_XYangle'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['TSSR1_XYangle'].push(function(property, value) {
		if (property === 'TSSR1_XYangle') {
			X3DJSON.nodeUtil("Scene","TSSR1_XY_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR1_XYangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR1_XYangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR1_XYangle, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TSSR1_XY_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR1_XYangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR1_XYangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR1_XYangle, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['TSSR2_XYangle'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['TSSR2_XYangle'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['TSSR2_XYangle'].push(function(property, value) {
		if (property === 'TSSR2_XYangle') {
			X3DJSON.nodeUtil("Scene","TSSR2_XY_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR2_XYangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR2_XYangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR2_XYangle, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TSSR2_XY_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR2_XYangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR2_XYangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR2_XYangle, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['LinkEstablished'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['LinkEstablished'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['LinkEstablished'].push(function(property, value) {
		if (property === 'LinkEstablished') {
			X3DJSON.nodeUtil("Scene","TSSR1_BEAMCYLINDER","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].LinkEstablished === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].LinkEstablished() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].LinkEstablished, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TSSR1_BEAMCYLINDER","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].LinkEstablished === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].LinkEstablished() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].LinkEstablished, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['LinkEstablished'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['LinkEstablished'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['LinkEstablished'].push(function(property, value) {
		if (property === 'LinkEstablished') {
			X3DJSON.nodeUtil("Scene","TSSR2_BEAMCYLINDER","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].LinkEstablished === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].LinkEstablished() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].LinkEstablished, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TSSR2_BEAMCYLINDER","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].LinkEstablished === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].LinkEstablished() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].LinkEstablished, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['ViewpointLocation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['ViewpointLocation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['ViewpointLocation'].push(function(property, value) {
		if (property === 'ViewpointLocation') {
			X3DJSON.nodeUtil("Scene","TSSRPairViewpoint","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].ViewpointLocation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].ViewpointLocation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].ViewpointLocation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TSSRPairViewpoint","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].ViewpointLocation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].ViewpointLocation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].ViewpointLocation, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['ViewpointAngle'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['ViewpointAngle'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript']['ACTION']['ViewpointAngle'].push(function(property, value) {
		if (property === 'ViewpointAngle') {
			X3DJSON.nodeUtil("Scene","TSSRPairViewpoint","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].ViewpointAngle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].ViewpointAngle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].ViewpointAngle, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TSSRPairViewpoint","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].ViewpointAngle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].ViewpointAngle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].ViewpointAngle, __eventTime);
			X3DJSON.nodeUtil("Scene","TSSR1_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR1_XZangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR1_XZangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR1_XZangle, __eventTime);
			X3DJSON.nodeUtil("Scene","TSSR2_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR2_XZangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR2_XZangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR2_XZangle, __eventTime);
			X3DJSON.nodeUtil("Scene","TSSR1_BEAMCYLINDER","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].beamLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].beamLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].beamLength, __eventTime);
			X3DJSON.nodeUtil("Scene","TSSR2_BEAMCYLINDER","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].beamLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].beamLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].beamLength, __eventTime);
			X3DJSON.nodeUtil("Scene","TSSR1_XY_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR1_XYangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR1_XYangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR1_XYangle, __eventTime);
			X3DJSON.nodeUtil("Scene","TSSR2_XY_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR2_XYangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR2_XYangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].TSSR2_XYangle, __eventTime);
			X3DJSON.nodeUtil("Scene","TSSR1_BEAMCYLINDER","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].LinkEstablished === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].LinkEstablished() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].LinkEstablished, __eventTime);
			X3DJSON.nodeUtil("Scene","TSSR2_BEAMCYLINDER","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].LinkEstablished === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].LinkEstablished() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].LinkEstablished, __eventTime);
			X3DJSON.nodeUtil("Scene","TSSRPairViewpoint","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].ViewpointLocation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].ViewpointLocation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].ViewpointLocation, __eventTime);
			X3DJSON.nodeUtil("Scene","TSSRPairViewpoint","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].ViewpointAngle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].ViewpointAngle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TSSR/TSSRPairPrototype.json']['CalculateAngleScript'].ViewpointAngle, __eventTime);