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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] = function() {
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
	this.set_portRpm = function (value) {
		try {
			this.proxy.portRpm = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting portRpm '+e);
			console.error('Problems setting portRpm',e);
		}
	};
	this.portRpm_changed = function () {
		var value = this.portRpm;
		return value;
	};
	try {
		this.portRpm = new SFFloat();
	} catch (e) {
		console.log('Problems setting portRpm '+e);
		console.error('Problems setting portRpm',e);
	}
	this.set_stbdRpm = function (value) {
		try {
			this.proxy.stbdRpm = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting stbdRpm '+e);
			console.error('Problems setting stbdRpm',e);
		}
	};
	this.stbdRpm_changed = function () {
		var value = this.stbdRpm;
		return value;
	};
	try {
		this.stbdRpm = new SFFloat();
	} catch (e) {
		console.log('Problems setting stbdRpm '+e);
		console.error('Problems setting stbdRpm',e);
	}
	this.set_forwardVerticalThruster = function (value) {
		try {
			this.proxy.forwardVerticalThruster = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting forwardVerticalThruster '+e);
			console.error('Problems setting forwardVerticalThruster',e);
		}
	};
	this.forwardVerticalThruster_changed = function () {
		var value = this.forwardVerticalThruster;
		return value;
	};
	try {
		this.forwardVerticalThruster = new SFFloat();
	} catch (e) {
		console.log('Problems setting forwardVerticalThruster '+e);
		console.error('Problems setting forwardVerticalThruster',e);
	}
	this.set_afterVerticalThruster = function (value) {
		try {
			this.proxy.afterVerticalThruster = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting afterVerticalThruster '+e);
			console.error('Problems setting afterVerticalThruster',e);
		}
	};
	this.afterVerticalThruster_changed = function () {
		var value = this.afterVerticalThruster;
		return value;
	};
	try {
		this.afterVerticalThruster = new SFFloat();
	} catch (e) {
		console.log('Problems setting afterVerticalThruster '+e);
		console.error('Problems setting afterVerticalThruster',e);
	}
	this.set_forwardLateralThruster = function (value) {
		try {
			this.proxy.forwardLateralThruster = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting forwardLateralThruster '+e);
			console.error('Problems setting forwardLateralThruster',e);
		}
	};
	this.forwardLateralThruster_changed = function () {
		var value = this.forwardLateralThruster;
		return value;
	};
	try {
		this.forwardLateralThruster = new SFFloat();
	} catch (e) {
		console.log('Problems setting forwardLateralThruster '+e);
		console.error('Problems setting forwardLateralThruster',e);
	}
	this.set_afterLateralThruster = function (value) {
		try {
			this.proxy.afterLateralThruster = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting afterLateralThruster '+e);
			console.error('Problems setting afterLateralThruster',e);
		}
	};
	this.afterLateralThruster_changed = function () {
		var value = this.afterLateralThruster;
		return value;
	};
	try {
		this.afterLateralThruster = new SFFloat();
	} catch (e) {
		console.log('Problems setting afterLateralThruster '+e);
		console.error('Problems setting afterLateralThruster',e);
	}
	this.set_forwardRudders = function (value) {
		try {
			this.proxy.forwardRudders = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting forwardRudders '+e);
			console.error('Problems setting forwardRudders',e);
		}
	};
	this.forwardRudders_changed = function () {
		var value = this.forwardRudders;
		return value;
	};
	try {
		this.forwardRudders = new SFFloat();
	} catch (e) {
		console.log('Problems setting forwardRudders '+e);
		console.error('Problems setting forwardRudders',e);
	}
	this.set_afterRudders = function (value) {
		try {
			this.proxy.afterRudders = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting afterRudders '+e);
			console.error('Problems setting afterRudders',e);
		}
	};
	this.afterRudders_changed = function () {
		var value = this.afterRudders;
		return value;
	};
	try {
		this.afterRudders = new SFFloat();
	} catch (e) {
		console.log('Problems setting afterRudders '+e);
		console.error('Problems setting afterRudders',e);
	}
	this.set_forwardPlanes = function (value) {
		try {
			this.proxy.forwardPlanes = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting forwardPlanes '+e);
			console.error('Problems setting forwardPlanes',e);
		}
	};
	this.forwardPlanes_changed = function () {
		var value = this.forwardPlanes;
		return value;
	};
	try {
		this.forwardPlanes = new SFFloat();
	} catch (e) {
		console.log('Problems setting forwardPlanes '+e);
		console.error('Problems setting forwardPlanes',e);
	}
	this.set_afterPlanes = function (value) {
		try {
			this.proxy.afterPlanes = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting afterPlanes '+e);
			console.error('Problems setting afterPlanes',e);
		}
	};
	this.afterPlanes_changed = function () {
		var value = this.afterPlanes;
		return value;
	};
	try {
		this.afterPlanes = new SFFloat();
	} catch (e) {
		console.log('Problems setting afterPlanes '+e);
		console.error('Problems setting afterPlanes',e);
	}
	this.set_ST725Range = function (value) {
		try {
			this.proxy.ST725Range = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ST725Range '+e);
			console.error('Problems setting ST725Range',e);
		}
	};
	this.ST725Range_changed = function () {
		var value = this.ST725Range;
		return value;
	};
	try {
		this.ST725Range = new SFFloat();
	} catch (e) {
		console.log('Problems setting ST725Range '+e);
		console.error('Problems setting ST725Range',e);
	}
	this.set_ST725Bearing = function (value) {
		try {
			this.proxy.ST725Bearing = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ST725Bearing '+e);
			console.error('Problems setting ST725Bearing',e);
		}
	};
	this.ST725Bearing_changed = function () {
		var value = this.ST725Bearing;
		return value;
	};
	try {
		this.ST725Bearing = new SFFloat();
	} catch (e) {
		console.log('Problems setting ST725Bearing '+e);
		console.error('Problems setting ST725Bearing',e);
	}
	this.set_ST1000Range = function (value) {
		try {
			this.proxy.ST1000Range = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ST1000Range '+e);
			console.error('Problems setting ST1000Range',e);
		}
	};
	this.ST1000Range_changed = function () {
		var value = this.ST1000Range;
		return value;
	};
	try {
		this.ST1000Range = new SFFloat();
	} catch (e) {
		console.log('Problems setting ST1000Range '+e);
		console.error('Problems setting ST1000Range',e);
	}
	this.set_ST1000Bearing = function (value) {
		try {
			this.proxy.ST1000Bearing = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ST1000Bearing '+e);
			console.error('Problems setting ST1000Bearing',e);
		}
	};
	this.ST1000Bearing_changed = function () {
		var value = this.ST1000Bearing;
		return value;
	};
	try {
		this.ST1000Bearing = new SFFloat();
	} catch (e) {
		console.log('Problems setting ST1000Bearing '+e);
		console.error('Problems setting ST1000Bearing',e);
	}


ecmascript:

MAXRPM        = 700;
MAXTHRUSTER   = 24;
MAXSONARRANGE = 30;

	this.initialize = function ()
{
   this.proxy.forwardRudders          = 0;
   this.proxy.afterRudders            = 0;
   this.proxy.forwardPlanes           = 0;
   this.proxy.afterPlanes             = 0;
   this.proxy.portRpm                 = 0;
   this.proxy.stbdRpm                 = 0;
   this.proxy.forwardVerticalThruster = 0;
   this.proxy.afterVerticalThruster   = 0;
   this.proxy.forwardLateralThruster  = 0;
   this.proxy.afterLateralThruster    = 0;
   this.proxy.ST1000Bearing           = 0;
   this.proxy.ST1000Range             = 0; // MAXSONARRANGE;
   this.proxy.ST725Bearing            = 0;
   this.proxy.ST725Range              = 0; // MAXSONARRANGE;
}
;

	this.set_articulationParameters = function ( value, timestamp )
{
   this.proxy.forwardRudders          =  value[0];
   this.proxy.afterRudders            = -value[0];
   this.proxy.forwardPlanes           = -value[1];
   this.proxy.afterPlanes             =  value[1];
   this.proxy.portRpm                 =  value[2] / MAXRPM;
   this.proxy.stbdRpm                 =  value[3] / MAXRPM;
   this.proxy.forwardVerticalThruster =  value[4] / MAXTHRUSTER;
   this.proxy.afterVerticalThruster   =  value[5] / MAXTHRUSTER;
   this.proxy.forwardLateralThruster  =  value[6] / MAXTHRUSTER;
   this.proxy.afterLateralThruster    =  value[7] / MAXTHRUSTER;
   this.proxy.ST1000Bearing           =  value[8];   
   this.proxy.ST1000Range             =  value[9];
   if      (this.proxy.ST1000Range <= 0)
            this.proxy.ST1000Range = 0;
   else if (this.proxy.ST1000Range > MAXSONARRANGE)
            this.proxy.ST1000Range = 0; // MAXSONARRANGE;
   this.proxy.ST725Bearing            =  value[11];
   this.proxy.ST725Range              =  value[12];
   if      (this.proxy.ST725Range <= 0)
            this.proxy.ST725Range = 0;
   else if (this.proxy.ST725Range > MAXSONARRANGE)
            this.proxy.ST725Range = 0; // MAXSONARRANGE;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].initialize();
    if (X3DJSON.nodeUtil("Scene","ET")) {
X3DJSON.nodeUtil("Scene","ET").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].set_articulationParameters(X3DJSON.nodeUtil("Scene","ET","articulationParameterArray"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].set_articulationParameters(X3DJSON.nodeUtil("Scene","ET","articulationParameterArray"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['portRpm'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['portRpm'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['portRpm'].push(function(property, value) {
		if (property === 'portRpm') {
			X3DJSON.nodeUtil("Scene","AriesAUV","portRpm",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].portRpm === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].portRpm() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].portRpm, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AriesAUV","portRpm",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].portRpm === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].portRpm() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].portRpm, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['stbdRpm'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['stbdRpm'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['stbdRpm'].push(function(property, value) {
		if (property === 'stbdRpm') {
			X3DJSON.nodeUtil("Scene","AriesAUV","stbdRpm",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].stbdRpm === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].stbdRpm() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].stbdRpm, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AriesAUV","stbdRpm",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].stbdRpm === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].stbdRpm() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].stbdRpm, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['forwardVerticalThruster'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['forwardVerticalThruster'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['forwardVerticalThruster'].push(function(property, value) {
		if (property === 'forwardVerticalThruster') {
			X3DJSON.nodeUtil("Scene","AriesAUV","forwardVerticalThruster",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardVerticalThruster === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardVerticalThruster() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardVerticalThruster, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AriesAUV","forwardVerticalThruster",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardVerticalThruster === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardVerticalThruster() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardVerticalThruster, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['afterVerticalThruster'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['afterVerticalThruster'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['afterVerticalThruster'].push(function(property, value) {
		if (property === 'afterVerticalThruster') {
			X3DJSON.nodeUtil("Scene","AriesAUV","afterVerticalThruster",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterVerticalThruster === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterVerticalThruster() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterVerticalThruster, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AriesAUV","afterVerticalThruster",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterVerticalThruster === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterVerticalThruster() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterVerticalThruster, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['forwardLateralThruster'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['forwardLateralThruster'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['forwardLateralThruster'].push(function(property, value) {
		if (property === 'forwardLateralThruster') {
			X3DJSON.nodeUtil("Scene","AriesAUV","forwardLateralThruster",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardLateralThruster === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardLateralThruster() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardLateralThruster, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AriesAUV","forwardLateralThruster",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardLateralThruster === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardLateralThruster() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardLateralThruster, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['afterLateralThruster'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['afterLateralThruster'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['afterLateralThruster'].push(function(property, value) {
		if (property === 'afterLateralThruster') {
			X3DJSON.nodeUtil("Scene","AriesAUV","afterLateralThruster",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterLateralThruster === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterLateralThruster() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterLateralThruster, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AriesAUV","afterLateralThruster",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterLateralThruster === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterLateralThruster() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterLateralThruster, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['forwardRudders'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['forwardRudders'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['forwardRudders'].push(function(property, value) {
		if (property === 'forwardRudders') {
			X3DJSON.nodeUtil("Scene","AriesAUV","forwardRudders",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardRudders === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardRudders() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardRudders, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AriesAUV","forwardRudders",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardRudders === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardRudders() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardRudders, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['afterRudders'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['afterRudders'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['afterRudders'].push(function(property, value) {
		if (property === 'afterRudders') {
			X3DJSON.nodeUtil("Scene","AriesAUV","afterRudders",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterRudders === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterRudders() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterRudders, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AriesAUV","afterRudders",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterRudders === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterRudders() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterRudders, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['forwardPlanes'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['forwardPlanes'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['forwardPlanes'].push(function(property, value) {
		if (property === 'forwardPlanes') {
			X3DJSON.nodeUtil("Scene","AriesAUV","forwardPlanes",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardPlanes === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardPlanes() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardPlanes, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AriesAUV","forwardPlanes",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardPlanes === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardPlanes() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardPlanes, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['afterPlanes'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['afterPlanes'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['afterPlanes'].push(function(property, value) {
		if (property === 'afterPlanes') {
			X3DJSON.nodeUtil("Scene","AriesAUV","afterPlanes",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterPlanes === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterPlanes() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterPlanes, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AriesAUV","afterPlanes",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterPlanes === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterPlanes() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterPlanes, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['ST725Range'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['ST725Range'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['ST725Range'].push(function(property, value) {
		if (property === 'ST725Range') {
			X3DJSON.nodeUtil("Scene","AriesAUV","ST725Range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST725Range === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST725Range() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST725Range, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AriesAUV","ST725Range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST725Range === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST725Range() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST725Range, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['ST725Bearing'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['ST725Bearing'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['ST725Bearing'].push(function(property, value) {
		if (property === 'ST725Bearing') {
			X3DJSON.nodeUtil("Scene","AriesAUV","ST725Bearing",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST725Bearing === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST725Bearing() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST725Bearing, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AriesAUV","ST725Bearing",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST725Bearing === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST725Bearing() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST725Bearing, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['ST1000Range'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['ST1000Range'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['ST1000Range'].push(function(property, value) {
		if (property === 'ST1000Range') {
			X3DJSON.nodeUtil("Scene","AriesAUV","ST1000Range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST1000Range === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST1000Range() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST1000Range, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AriesAUV","ST1000Range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST1000Range === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST1000Range() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST1000Range, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['ST1000Bearing'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['ST1000Bearing'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl']['ACTION']['ST1000Bearing'].push(function(property, value) {
		if (property === 'ST1000Bearing') {
			X3DJSON.nodeUtil("Scene","AriesAUV","ST1000Bearing",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST1000Bearing === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST1000Bearing() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST1000Bearing, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AriesAUV","ST1000Bearing",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST1000Bearing === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST1000Bearing() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST1000Bearing, __eventTime);
    if (X3DJSON.nodeUtil("Scene","ET")) {
X3DJSON.nodeUtil("Scene","ET").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ET")) {
X3DJSON.nodeUtil("Scene","ET").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].set_articulationParameters(X3DJSON.nodeUtil("Scene","ET","articulationParameterArray"), __eventTime);
			X3DJSON.nodeUtil("Scene","AriesAUV","portRpm",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].portRpm === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].portRpm() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].portRpm, __eventTime);
			X3DJSON.nodeUtil("Scene","AriesAUV","stbdRpm",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].stbdRpm === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].stbdRpm() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].stbdRpm, __eventTime);
			X3DJSON.nodeUtil("Scene","AriesAUV","forwardVerticalThruster",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardVerticalThruster === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardVerticalThruster() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardVerticalThruster, __eventTime);
			X3DJSON.nodeUtil("Scene","AriesAUV","afterVerticalThruster",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterVerticalThruster === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterVerticalThruster() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterVerticalThruster, __eventTime);
			X3DJSON.nodeUtil("Scene","AriesAUV","forwardLateralThruster",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardLateralThruster === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardLateralThruster() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardLateralThruster, __eventTime);
			X3DJSON.nodeUtil("Scene","AriesAUV","afterLateralThruster",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterLateralThruster === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterLateralThruster() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterLateralThruster, __eventTime);
			X3DJSON.nodeUtil("Scene","AriesAUV","forwardRudders",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardRudders === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardRudders() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardRudders, __eventTime);
			X3DJSON.nodeUtil("Scene","AriesAUV","afterRudders",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterRudders === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterRudders() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterRudders, __eventTime);
			X3DJSON.nodeUtil("Scene","AriesAUV","forwardPlanes",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardPlanes === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardPlanes() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].forwardPlanes, __eventTime);
			X3DJSON.nodeUtil("Scene","AriesAUV","afterPlanes",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterPlanes === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterPlanes() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].afterPlanes, __eventTime);
			X3DJSON.nodeUtil("Scene","AriesAUV","ST725Range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST725Range === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST725Range() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST725Range, __eventTime);
			X3DJSON.nodeUtil("Scene","AriesAUV","ST725Bearing",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST725Bearing === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST725Bearing() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST725Bearing, __eventTime);
			X3DJSON.nodeUtil("Scene","AriesAUV","ST1000Range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST1000Range === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST1000Range() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST1000Range, __eventTime);
			X3DJSON.nodeUtil("Scene","AriesAUV","ST1000Bearing",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST1000Bearing === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST1000Bearing() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesEspduPrototype.json']['ArticulationParameterControl'].ST1000Bearing, __eventTime);