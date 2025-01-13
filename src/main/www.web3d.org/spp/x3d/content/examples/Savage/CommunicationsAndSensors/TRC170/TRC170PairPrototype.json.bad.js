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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['TransmitScript'] = function() {
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
	console.error ('TransmitScript this.initialize() complete' + '') ;
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
	console.error ('this.proxy.size	= ' + this.proxy.size + '') ;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['TransmitScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['TransmitScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['TransmitScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['TransmitScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['TransmitScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['TransmitScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['TransmitScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['TransmitScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['TransmitScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['TransmitScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['TransmitScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['TransmitScript2'] = function() {
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
	console.error ('TransmitScript this.initialize() complete' + '') ;
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
	console.error ('this.proxy.size	= ' + this.proxy.size + '') ;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['TransmitScript2'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['TransmitScript2']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['TransmitScript2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['TransmitScript2'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['TransmitScript2']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['TransmitScript2']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['TransmitScript2'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['TransmitScript2']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['TransmitScript2']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['TransmitScript2'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['TransmitScript2'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] = function() {
	this.set_TRC1Location = function (value) {
		try {
			this.proxy.TRC1Location = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TRC1Location '+e);
			console.error('Problems setting TRC1Location',e);
		}
	};
	this.TRC1Location_changed = function () {
		var value = this.TRC1Location;
		return value;
	};
	try {
		this.TRC1Location = new SFVec3f();
	} catch (e) {
		console.log('Problems setting TRC1Location '+e);
		console.error('Problems setting TRC1Location',e);
	}
	this.set_TRC2Location = function (value) {
		try {
			this.proxy.TRC2Location = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TRC2Location '+e);
			console.error('Problems setting TRC2Location',e);
		}
	};
	this.TRC2Location_changed = function () {
		var value = this.TRC2Location;
		return value;
	};
	try {
		this.TRC2Location = new SFVec3f();
	} catch (e) {
		console.log('Problems setting TRC2Location '+e);
		console.error('Problems setting TRC2Location',e);
	}
	this.set_OperatingMode = function (value) {
		try {
			this.proxy.OperatingMode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting OperatingMode '+e);
			console.error('Problems setting OperatingMode',e);
		}
	};
	this.OperatingMode_changed = function () {
		var value = this.OperatingMode;
		return value;
	};
	try {
		this.OperatingMode = new SFString();
	} catch (e) {
		console.log('Problems setting OperatingMode '+e);
		console.error('Problems setting OperatingMode',e);
	}
	this.set_TRC1_XZangle = function (value) {
		try {
			this.proxy.TRC1_XZangle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TRC1_XZangle '+e);
			console.error('Problems setting TRC1_XZangle',e);
		}
	};
	this.TRC1_XZangle_changed = function () {
		var value = this.TRC1_XZangle;
		return value;
	};
	try {
		this.TRC1_XZangle = new SFRotation();
	} catch (e) {
		console.log('Problems setting TRC1_XZangle '+e);
		console.error('Problems setting TRC1_XZangle',e);
	}
	this.set_TRC2_XZangle = function (value) {
		try {
			this.proxy.TRC2_XZangle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TRC2_XZangle '+e);
			console.error('Problems setting TRC2_XZangle',e);
		}
	};
	this.TRC2_XZangle_changed = function () {
		var value = this.TRC2_XZangle;
		return value;
	};
	try {
		this.TRC2_XZangle = new SFRotation();
	} catch (e) {
		console.log('Problems setting TRC2_XZangle '+e);
		console.error('Problems setting TRC2_XZangle',e);
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
	this.set_TRC1_beamLength = function (value) {
		try {
			this.proxy.TRC1_beamLength = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TRC1_beamLength '+e);
			console.error('Problems setting TRC1_beamLength',e);
		}
	};
	this.TRC1_beamLength_changed = function () {
		var value = this.TRC1_beamLength;
		return value;
	};
	try {
		this.TRC1_beamLength = new SFFloat();
	} catch (e) {
		console.log('Problems setting TRC1_beamLength '+e);
		console.error('Problems setting TRC1_beamLength',e);
	}
	this.set_TRC2_beamLength = function (value) {
		try {
			this.proxy.TRC2_beamLength = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TRC2_beamLength '+e);
			console.error('Problems setting TRC2_beamLength',e);
		}
	};
	this.TRC2_beamLength_changed = function () {
		var value = this.TRC2_beamLength;
		return value;
	};
	try {
		this.TRC2_beamLength = new SFFloat();
	} catch (e) {
		console.log('Problems setting TRC2_beamLength '+e);
		console.error('Problems setting TRC2_beamLength',e);
	}
	this.set_TRC1_XYangle = function (value) {
		try {
			this.proxy.TRC1_XYangle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TRC1_XYangle '+e);
			console.error('Problems setting TRC1_XYangle',e);
		}
	};
	this.TRC1_XYangle_changed = function () {
		var value = this.TRC1_XYangle;
		return value;
	};
	try {
		this.TRC1_XYangle = new SFRotation();
	} catch (e) {
		console.log('Problems setting TRC1_XYangle '+e);
		console.error('Problems setting TRC1_XYangle',e);
	}
	this.set_TRC2_XYangle = function (value) {
		try {
			this.proxy.TRC2_XYangle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TRC2_XYangle '+e);
			console.error('Problems setting TRC2_XYangle',e);
		}
	};
	this.TRC2_XYangle_changed = function () {
		var value = this.TRC2_XYangle;
		return value;
	};
	try {
		this.TRC2_XYangle = new SFRotation();
	} catch (e) {
		console.log('Problems setting TRC2_XYangle '+e);
		console.error('Problems setting TRC2_XYangle',e);
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
	this.set_TRC1_Viewpoint = function (value) {
		try {
			this.proxy.TRC1_Viewpoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TRC1_Viewpoint '+e);
			console.error('Problems setting TRC1_Viewpoint',e);
		}
	};
	this.TRC1_Viewpoint_changed = function () {
		var value = this.TRC1_Viewpoint;
		return value;
	};
	try {
		this.TRC1_Viewpoint = new SFVec3f();
	} catch (e) {
		console.log('Problems setting TRC1_Viewpoint '+e);
		console.error('Problems setting TRC1_Viewpoint',e);
	}
	this.set_TRC2_Viewpoint = function (value) {
		try {
			this.proxy.TRC2_Viewpoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TRC2_Viewpoint '+e);
			console.error('Problems setting TRC2_Viewpoint',e);
		}
	};
	this.TRC2_Viewpoint_changed = function () {
		var value = this.TRC2_Viewpoint;
		return value;
	};
	try {
		this.TRC2_Viewpoint = new SFVec3f();
	} catch (e) {
		console.log('Problems setting TRC2_Viewpoint '+e);
		console.error('Problems setting TRC2_Viewpoint',e);
	}
	this.set_TRC1_ViewpointAngle = function (value) {
		try {
			this.proxy.TRC1_ViewpointAngle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TRC1_ViewpointAngle '+e);
			console.error('Problems setting TRC1_ViewpointAngle',e);
		}
	};
	this.TRC1_ViewpointAngle_changed = function () {
		var value = this.TRC1_ViewpointAngle;
		return value;
	};
	try {
		this.TRC1_ViewpointAngle = new SFRotation();
	} catch (e) {
		console.log('Problems setting TRC1_ViewpointAngle '+e);
		console.error('Problems setting TRC1_ViewpointAngle',e);
	}
	this.set_TRC2_ViewpointAngle = function (value) {
		try {
			this.proxy.TRC2_ViewpointAngle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TRC2_ViewpointAngle '+e);
			console.error('Problems setting TRC2_ViewpointAngle',e);
		}
	};
	this.TRC2_ViewpointAngle_changed = function () {
		var value = this.TRC2_ViewpointAngle;
		return value;
	};
	try {
		this.TRC2_ViewpointAngle = new SFRotation();
	} catch (e) {
		console.log('Problems setting TRC2_ViewpointAngle '+e);
		console.error('Problems setting TRC2_ViewpointAngle',e);
	}
	this.set_HighAboveViewpoint = function (value) {
		try {
			this.proxy.HighAboveViewpoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting HighAboveViewpoint '+e);
			console.error('Problems setting HighAboveViewpoint',e);
		}
	};
	this.HighAboveViewpoint_changed = function () {
		var value = this.HighAboveViewpoint;
		return value;
	};
	try {
		this.HighAboveViewpoint = new SFVec3f();
	} catch (e) {
		console.log('Problems setting HighAboveViewpoint '+e);
		console.error('Problems setting HighAboveViewpoint',e);
	}
	this.set_HighAboveTranslationAngle = function (value) {
		try {
			this.proxy.HighAboveTranslationAngle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting HighAboveTranslationAngle '+e);
			console.error('Problems setting HighAboveTranslationAngle',e);
		}
	};
	this.HighAboveTranslationAngle_changed = function () {
		var value = this.HighAboveTranslationAngle;
		return value;
	};
	try {
		this.HighAboveTranslationAngle = new SFRotation();
	} catch (e) {
		console.log('Problems setting HighAboveTranslationAngle '+e);
		console.error('Problems setting HighAboveTranslationAngle',e);
	}
	this.set_WhichBeam = function (value) {
		try {
			this.proxy.WhichBeam = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting WhichBeam '+e);
			console.error('Problems setting WhichBeam',e);
		}
	};
	this.WhichBeam_changed = function () {
		var value = this.WhichBeam;
		return value;
	};
	try {
		this.WhichBeam = new SFInt32();
	} catch (e) {
		console.log('Problems setting WhichBeam '+e);
		console.error('Problems setting WhichBeam',e);
	}


ecmascript:

	this.initialize = function ()
{
	console.error ('TRC1	=' + this.proxy.TRC1Location + '') ;
	console.error ('TRC2	=' + this.proxy.TRC2Location + '') ;
	console.error ('TransmitScript this.initialize() complete' + '') ;
	active = true ;
	this.proxy.TRC1_XZangle	= new SFRotation(0, 1, 0, 0) ;
	this.proxy.TRC2_XZangle	= new SFRotation(0, 1, 0, 0) ;
	this.proxy.TRC1_XYangle	= new SFRotation(0, 0, 1, 0) ;
	this.proxy.TRC2_XYangle	= new SFRotation(0, 0, 1, 0) ;
	XZangle	= new SFRotation(0, 1, 0, 0) ;
	XYangle	= new SFRotation(0, 0, 1, 0) ;
	this.proxy.TRC1_ViewpointAngle	= new SFRotation(0, 1, 0, 0) ;
	this.proxy.TRC2_ViewpointAngle	= new SFRotation(0, 1, 0, 0) ;
	HighAboveViewpointAngle	= new SFRotation(1, 0, 0, 0) ;
	this.proxy.HighAboveTranslationAngle	= new SFRotation(0, 1, 0, 0) ;

	this.proxy.beamScale		= new SFVec3f ( ) ;
	center		= new SFVec3f ( ) ;
	this.proxy.TRC1_Viewpoint	= new SFVec3f ( ) ;
	this.proxy.TRC2_Viewpoint	= new SFVec3f ( ) ;
	this.proxy.HighAboveViewpoint	= new SFVec3f ( ) ;
	this.proxy.LinkEstablished	= true;
	console.error ('this.proxy.OperatingMode	=' + this.proxy.OperatingMode + '') ;

	this.compute(active) ;
}

;

	this.compute = function ( )
{
	if (this.proxy.OperatingMode == 'DIRECT') {
		this.proxy.WhichBeam = 0 ;
		this.computeDistance( ) ;
		this.computeXZangle( );
		this.computeXYangle( ) ;

	}

	if (this.proxy.OperatingMode == 'TROPOSCATTER') {
		this.proxy.WhichBeam = 1 ;
		centerX 	= (this.proxy.TRC2Location[0] - this.proxy.TRC1Location[0])/2 ;
		centerZ 	= (this.proxy.TRC2Location[2] - this.proxy.TRC1Location[2])/2 ;
		XZDistance	= Math.sqrt(centerX * centerX + centerZ * centerZ);
		center[0]	= this.proxy.TRC1Location[0] + centerX;
		center[1]	= 15000 ;  // vertical height of troposphere
		center[2]	= this.proxy.TRC1Location[2] + centerZ;
                console.error ('TRC1	= ' + this.proxy.TRC1Location + '') ;
                console.error ('center	= ' + center + '') ;
                console.error ('TRC2	= ' + this.proxy.TRC2Location + '') ;

		this.computeTropoDistance(this.proxy.TRC1Location, center) ;
		this.computeTropoXZangle( );
		this.computeTropoXYangle( ) ;
		this.proxy.TRC1_beamLength 	= tropoDistance-2;
		this.proxy.TRC1_XZangle		= XZangle;
		this.proxy.TRC1_XYangle		= XYangle;

		this.computeTropoDistance(this.proxy.TRC2Location, center) ;
		this.computeTropoXZangle( );
		this.computeTropoXYangle( ) ;
		this.proxy.TRC2_beamLength 	= tropoDistance-2;
		this.proxy.TRC2_XZangle		= XZangle;
		this.proxy.TRC2_XYangle		= XYangle;
	}

	this.proxy.TRC1_Viewpoint[0]	= this.proxy.TRC1Location[0] + Math.sin(this.proxy.TRC1_XZangle[3] - 1.57)*40;
	this.proxy.TRC1_Viewpoint[1]	= this.proxy.TRC1Location[1] + 10;
	this.proxy.TRC1_Viewpoint[2]	= this.proxy.TRC1Location[2] +Math.cos(this.proxy.TRC1_XZangle[3] - 1.57)*40;
	console.error ('this.proxy.TRC1_Viewpoint	'+ this.proxy.TRC1_Viewpoint + '') ;
	this.proxy.TRC1_ViewpointAngle[3]	= this.proxy.TRC1_XZangle[3] - 1.57 ;

	this.proxy.TRC2_Viewpoint[0]	= this.proxy.TRC2Location[0] + Math.sin(this.proxy.TRC2_XZangle[3] - 1.57)*40 ;
	this.proxy.TRC2_Viewpoint[1]	= this.proxy.TRC2Location[1] + 10;
	this.proxy.TRC2_Viewpoint[2]	= this.proxy.TRC2Location[2] + Math.cos(this.proxy.TRC2_XZangle[3] - 1.57)*40;
	this.proxy.TRC2_ViewpointAngle[3]	= this.proxy.TRC2_XZangle[3] - 1.57 ;
	console.error ('this.proxy.TRC2_Viewpoint	'+ this.proxy.TRC2_Viewpoint + '') ;

	this.proxy.HighAboveViewpoint[0]	= center[0] + Math.sin(this.proxy.TRC1_XZangle[3])*3000 ;
	this.proxy.HighAboveViewpoint[1]	= center[1]  + 5000;
	this.proxy.HighAboveViewpoint[2]	= center[2] + Math.cos(this.proxy.TRC1_XZangle[3])*3000 ;
	console.error ('this.proxy.HighAboveViewpoint	'+ this.proxy.HighAboveViewpoint + '') ;
//	HighAboveViewpointAngle[3]	= Math.cos(this.proxy.TRC1_XZangle[3]) ;
	this.proxy.HighAboveTranslationAngle[3]	= this.proxy.TRC1_XZangle[3] ;
//	console.error ('HighAboveTranslationle		'+ HighAboveViewpointAngle + '') ;
	console.error ('HighAboveXZTranslationAngle	'+this.proxy.HighAboveTranslationAngle + '') ;



}
;

	this.computeTropoDistance = function (loc1, loc2 )
{
	tropoDeltaX 	= (loc2[0] - loc1[0]) ;
	tropoDeltaY 	= (loc2[1] - loc1[1]) ;
	tropoDeltaZ 	= (loc2[2] - loc1[2]) ;
	tropoDistanceSquared	= tropoDeltaX * tropoDeltaX + tropoDeltaY * tropoDeltaY + tropoDeltaZ * tropoDeltaZ ;
	console.error ('Distance Squared	=' + tropoDistanceSquared + '') ;
	tropoDistance 	= Math.sqrt(tropoDistanceSquared) ;
	console.error ('Distance	=' + tropoDistance + '') ;

	if (XZDistance > 100/.6*1000) {
		this.proxy.LinkEstablished = false;
		//this.proxy.TRC1_beamLength = 5000 ;
		//this.proxy.TRC2_beamLength = 5000 ;
	}
}
;

	this.computeTropoXZangle = function ( )
{
	if (tropoDeltaZ == 0) {
		tropoDeltaZ = .00000001 ;
	}

	angle 	= Math.atan(tropoDeltaX/tropoDeltaZ) ;
	if (tropoDeltaZ < 0) {
		XZangle[3] = angle + Math.PI/2;
	}
	else {
		XZangle[3] = angle -  Math.PI/2;
	}
	console.error ('Angle	=' + XZangle[3] + '') ;
//	console.error ('Angle2	=' + this.proxy.TRC2_XZangle[3] + '') ;
}

;

	this.computeTropoXYangle = function ( )
{
	console.error ('tropoDeltaY	=' + tropoDeltaY + '');
	angle 	= Math.asin(tropoDeltaY/tropoDistance) ;
	XYangle[3] = angle ;
	//XYangle[3]  = - this.proxy.TRC1_XYangle[3];

	console.error ('AngleXY	=' +XYangle[3] + '') ;
//	console.error ('Angle2XY	=' + this.proxy.TRC2_XYangle[3] + '') ;
}
;

	this.computeDistance = function ( )
{
	console.error ('TRC1	=' + this.proxy.TRC1Location + '') ;
	console.error ('TRC2	=' + this.proxy.TRC2Location + '') ;
	deltaX 	= (this.proxy.TRC2Location[0] - this.proxy.TRC1Location[0]) ;
	deltaY 	= (this.proxy.TRC2Location[1] - this.proxy.TRC1Location[1]) ;
	deltaZ 	= (this.proxy.TRC2Location[2] - this.proxy.TRC1Location[2]) ;
	distanceSquared	= deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ ;
	console.error ('Distance Squared	=' + distanceSquared + '') ;
	distance 	= Math.sqrt(distanceSquared) ;
	console.error ('Distance	=' + distance + '') ;

	this.proxy.beamScale[0] 	= distance/10;
	this.proxy.beamScale[1]	= 10;
	this.proxy.beamScale[2]	= 10;
	console.error ('BeamScale	=' + this.proxy.beamScale + '') ;
	this.proxy.TRC1_beamLength 	= distance -2;
	this.proxy.TRC2_beamLength 	= distance -2;
	if (distance > 5/.6*1000) {
		this.proxy.LinkEstablished = false;
		this.proxy.TRC1_beamLength = 5000/.6 ;
		this.proxy.TRC2_beamLength = 5000/.6 ;
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
		this.proxy.TRC1_XZangle[3] = angle + Math.PI/2;
	}
	else {
		this.proxy.TRC1_XZangle[3] = angle -  Math.PI/2;
	}
	this.proxy.TRC2_XZangle[3]  = this.proxy.TRC1_XZangle[3] +  Math.PI;

	console.error ('Angle	=' + this.proxy.TRC1_XZangle[3] + '') ;
	console.error ('Angle2	=' + this.proxy.TRC2_XZangle[3] + '') ;
}


;

	this.computeXYangle = function ( )
{
	angle 	= Math.asin(deltaY/distance) ;
	this.proxy.TRC1_XYangle[3] = angle ;
	this.proxy.TRC2_XYangle[3]  = - this.proxy.TRC1_XYangle[3];

	console.error ('AngleXY	=' + this.proxy.TRC1_XYangle[3] + '') ;
	console.error ('Angle2XY	=' + this.proxy.TRC2_XYangle[3] + '') ;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC1_XZangle'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC1_XZangle'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC1_XZangle'].push(function(property, value) {
		if (property === 'TRC1_XZangle') {
			X3DJSON.nodeUtil("Scene","TRC1_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_XZangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_XZangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_XZangle, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TRC1_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_XZangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_XZangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_XZangle, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC2_XZangle'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC2_XZangle'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC2_XZangle'].push(function(property, value) {
		if (property === 'TRC2_XZangle') {
			X3DJSON.nodeUtil("Scene","TRC2_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_XZangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_XZangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_XZangle, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TRC2_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_XZangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_XZangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_XZangle, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC1_beamLength'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC1_beamLength'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC1_beamLength'].push(function(property, value) {
		if (property === 'TRC1_beamLength') {
			X3DJSON.nodeUtil("Scene","TRC1_BEAMCYLINDER","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_beamLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_beamLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_beamLength, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TRC1_BEAMCYLINDER","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_beamLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_beamLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_beamLength, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC1_beamLength'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC1_beamLength'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC1_beamLength'].push(function(property, value) {
		if (property === 'TRC1_beamLength') {
			X3DJSON.nodeUtil("Scene","TRC1_BEAMCONE","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_beamLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_beamLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_beamLength, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TRC1_BEAMCONE","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_beamLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_beamLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_beamLength, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC2_beamLength'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC2_beamLength'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC2_beamLength'].push(function(property, value) {
		if (property === 'TRC2_beamLength') {
			X3DJSON.nodeUtil("Scene","TRC2_BEAMCYLINDER","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_beamLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_beamLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_beamLength, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TRC2_BEAMCYLINDER","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_beamLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_beamLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_beamLength, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC1_beamLength'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC1_beamLength'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC1_beamLength'].push(function(property, value) {
		if (property === 'TRC1_beamLength') {
			X3DJSON.nodeUtil("Scene","TRC2_BEAMCONE","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_beamLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_beamLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_beamLength, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TRC2_BEAMCONE","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_beamLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_beamLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_beamLength, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC1_XYangle'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC1_XYangle'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC1_XYangle'].push(function(property, value) {
		if (property === 'TRC1_XYangle') {
			X3DJSON.nodeUtil("Scene","TRC1_XY_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_XYangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_XYangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_XYangle, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TRC1_XY_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_XYangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_XYangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_XYangle, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC2_XYangle'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC2_XYangle'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC2_XYangle'].push(function(property, value) {
		if (property === 'TRC2_XYangle') {
			X3DJSON.nodeUtil("Scene","TRC2_XY_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_XYangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_XYangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_XYangle, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TRC2_XY_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_XYangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_XYangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_XYangle, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['LinkEstablished'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['LinkEstablished'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['LinkEstablished'].push(function(property, value) {
		if (property === 'LinkEstablished') {
			X3DJSON.nodeUtil("Scene","TRC1_BEAMCYLINDER","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TRC1_BEAMCYLINDER","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['LinkEstablished'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['LinkEstablished'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['LinkEstablished'].push(function(property, value) {
		if (property === 'LinkEstablished') {
			X3DJSON.nodeUtil("Scene","TRC1_BEAMCONE","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TRC1_BEAMCONE","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['LinkEstablished'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['LinkEstablished'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['LinkEstablished'].push(function(property, value) {
		if (property === 'LinkEstablished') {
			X3DJSON.nodeUtil("Scene","TRC2_BEAMCYLINDER","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TRC2_BEAMCYLINDER","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['LinkEstablished'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['LinkEstablished'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['LinkEstablished'].push(function(property, value) {
		if (property === 'LinkEstablished') {
			X3DJSON.nodeUtil("Scene","TRC2_BEAMCONE","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TRC2_BEAMCONE","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC1_Viewpoint'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC1_Viewpoint'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC1_Viewpoint'].push(function(property, value) {
		if (property === 'TRC1_Viewpoint') {
			X3DJSON.nodeUtil("Scene","TRC1Viewpoint","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_Viewpoint === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_Viewpoint() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_Viewpoint, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TRC1Viewpoint","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_Viewpoint === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_Viewpoint() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_Viewpoint, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC2_Viewpoint'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC2_Viewpoint'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC2_Viewpoint'].push(function(property, value) {
		if (property === 'TRC2_Viewpoint') {
			X3DJSON.nodeUtil("Scene","TRC2Viewpoint","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_Viewpoint === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_Viewpoint() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_Viewpoint, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TRC2Viewpoint","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_Viewpoint === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_Viewpoint() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_Viewpoint, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC1_ViewpointAngle'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC1_ViewpointAngle'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC1_ViewpointAngle'].push(function(property, value) {
		if (property === 'TRC1_ViewpointAngle') {
			X3DJSON.nodeUtil("Scene","TRC1Viewpoint","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_ViewpointAngle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_ViewpointAngle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_ViewpointAngle, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TRC1Viewpoint","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_ViewpointAngle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_ViewpointAngle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_ViewpointAngle, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC2_ViewpointAngle'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC2_ViewpointAngle'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['TRC2_ViewpointAngle'].push(function(property, value) {
		if (property === 'TRC2_ViewpointAngle') {
			X3DJSON.nodeUtil("Scene","TRC2Viewpoint","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_ViewpointAngle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_ViewpointAngle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_ViewpointAngle, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TRC2Viewpoint","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_ViewpointAngle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_ViewpointAngle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_ViewpointAngle, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['HighAboveViewpoint'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['HighAboveViewpoint'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['HighAboveViewpoint'].push(function(property, value) {
		if (property === 'HighAboveViewpoint') {
			X3DJSON.nodeUtil("Scene","HighAboveXZTranslation","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].HighAboveViewpoint === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].HighAboveViewpoint() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].HighAboveViewpoint, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","HighAboveXZTranslation","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].HighAboveViewpoint === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].HighAboveViewpoint() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].HighAboveViewpoint, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['HighAboveTranslationAngle'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['HighAboveTranslationAngle'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['HighAboveTranslationAngle'].push(function(property, value) {
		if (property === 'HighAboveTranslationAngle') {
			X3DJSON.nodeUtil("Scene","HighAboveXZTranslation","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].HighAboveTranslationAngle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].HighAboveTranslationAngle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].HighAboveTranslationAngle, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","HighAboveXZTranslation","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].HighAboveTranslationAngle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].HighAboveTranslationAngle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].HighAboveTranslationAngle, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['WhichBeam'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['WhichBeam'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['WhichBeam'].push(function(property, value) {
		if (property === 'WhichBeam') {
			X3DJSON.nodeUtil("Scene","BeamSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].WhichBeam === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].WhichBeam() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].WhichBeam, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BeamSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].WhichBeam === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].WhichBeam() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].WhichBeam, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['WhichBeam'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['WhichBeam'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript']['ACTION']['WhichBeam'].push(function(property, value) {
		if (property === 'WhichBeam') {
			X3DJSON.nodeUtil("Scene","BeamSwitch2","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].WhichBeam === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].WhichBeam() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].WhichBeam, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BeamSwitch2","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].WhichBeam === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].WhichBeam() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].WhichBeam, __eventTime);
			X3DJSON.nodeUtil("Scene","TRC1_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_XZangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_XZangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_XZangle, __eventTime);
			X3DJSON.nodeUtil("Scene","TRC2_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_XZangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_XZangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_XZangle, __eventTime);
			X3DJSON.nodeUtil("Scene","TRC1_BEAMCYLINDER","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_beamLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_beamLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_beamLength, __eventTime);
			X3DJSON.nodeUtil("Scene","TRC1_BEAMCONE","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_beamLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_beamLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_beamLength, __eventTime);
			X3DJSON.nodeUtil("Scene","TRC2_BEAMCYLINDER","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_beamLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_beamLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_beamLength, __eventTime);
			X3DJSON.nodeUtil("Scene","TRC2_BEAMCONE","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_beamLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_beamLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_beamLength, __eventTime);
			X3DJSON.nodeUtil("Scene","TRC1_XY_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_XYangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_XYangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_XYangle, __eventTime);
			X3DJSON.nodeUtil("Scene","TRC2_XY_TRANSFORM","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_XYangle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_XYangle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_XYangle, __eventTime);
			X3DJSON.nodeUtil("Scene","TRC1_BEAMCYLINDER","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished, __eventTime);
			X3DJSON.nodeUtil("Scene","TRC1_BEAMCONE","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished, __eventTime);
			X3DJSON.nodeUtil("Scene","TRC2_BEAMCYLINDER","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished, __eventTime);
			X3DJSON.nodeUtil("Scene","TRC2_BEAMCONE","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].LinkEstablished, __eventTime);
			X3DJSON.nodeUtil("Scene","TRC1Viewpoint","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_Viewpoint === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_Viewpoint() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_Viewpoint, __eventTime);
			X3DJSON.nodeUtil("Scene","TRC2Viewpoint","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_Viewpoint === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_Viewpoint() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_Viewpoint, __eventTime);
			X3DJSON.nodeUtil("Scene","TRC1Viewpoint","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_ViewpointAngle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_ViewpointAngle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC1_ViewpointAngle, __eventTime);
			X3DJSON.nodeUtil("Scene","TRC2Viewpoint","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_ViewpointAngle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_ViewpointAngle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].TRC2_ViewpointAngle, __eventTime);
			X3DJSON.nodeUtil("Scene","HighAboveXZTranslation","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].HighAboveViewpoint === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].HighAboveViewpoint() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].HighAboveViewpoint, __eventTime);
			X3DJSON.nodeUtil("Scene","HighAboveXZTranslation","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].HighAboveTranslationAngle === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].HighAboveTranslationAngle() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].HighAboveTranslationAngle, __eventTime);
			X3DJSON.nodeUtil("Scene","BeamSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].WhichBeam === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].WhichBeam() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].WhichBeam, __eventTime);
			X3DJSON.nodeUtil("Scene","BeamSwitch2","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].WhichBeam === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].WhichBeam() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/TRC170/TRC170PairPrototype.json']['CalculateAngleScript'].WhichBeam, __eventTime);