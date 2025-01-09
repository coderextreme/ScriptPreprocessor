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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'] = function() {
	this.set_position = function (value) {
		try {
			this.proxy.position = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting position '+e);
			console.error('Problems setting position',e);
		}
	};
	this.position_changed = function () {
		var value = this.position;
		return value;
	};
	try {
		this.position = new SFVec3f();
	} catch (e) {
		console.log('Problems setting position '+e);
		console.error('Problems setting position',e);
	}
	this.set_position = function (value) {
		try {
			this.proxy.position = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting position '+e);
			console.error('Problems setting position',e);
		}
	};
	this.position_changed = function () {
		var value = this.position;
		return value;
	};
	try {
		this.position = new SFVec3f();
	} catch (e) {
		console.log('Problems setting position '+e);
		console.error('Problems setting position',e);
	}
	this.set_targetPosition = function (value) {
		try {
			this.proxy.targetPosition = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting targetPosition '+e);
			console.error('Problems setting targetPosition',e);
		}
	};
	this.targetPosition_changed = function () {
		var value = this.targetPosition;
		return value;
	};
	try {
		this.targetPosition = new SFVec3f();
	} catch (e) {
		console.log('Problems setting targetPosition '+e);
		console.error('Problems setting targetPosition',e);
	}
	this.set_targetPosition = function (value) {
		try {
			this.proxy.targetPosition = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting targetPosition '+e);
			console.error('Problems setting targetPosition',e);
		}
	};
	this.targetPosition_changed = function () {
		var value = this.targetPosition;
		return value;
	};
	try {
		this.targetPosition = new SFVec3f();
	} catch (e) {
		console.log('Problems setting targetPosition '+e);
		console.error('Problems setting targetPosition',e);
	}
	this.set_targetIdNumber = function (value) {
		try {
			this.proxy.targetIdNumber = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting targetIdNumber '+e);
			console.error('Problems setting targetIdNumber',e);
		}
	};
	this.targetIdNumber_changed = function () {
		var value = this.targetIdNumber;
		return value;
	};
	try {
		this.targetIdNumber = new SFInt32();
	} catch (e) {
		console.log('Problems setting targetIdNumber '+e);
		console.error('Problems setting targetIdNumber',e);
	}
	this.set_targetIdNumber = function (value) {
		try {
			this.proxy.targetIdNumber = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting targetIdNumber '+e);
			console.error('Problems setting targetIdNumber',e);
		}
	};
	this.targetIdNumber_changed = function () {
		var value = this.targetIdNumber;
		return value;
	};
	try {
		this.targetIdNumber = new SFInt32();
	} catch (e) {
		console.log('Problems setting targetIdNumber '+e);
		console.error('Problems setting targetIdNumber',e);
	}
	this.set_enabled = function (value) {
		try {
			this.proxy.enabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting enabled '+e);
			console.error('Problems setting enabled',e);
		}
	};
	this.enabled_changed = function () {
		var value = this.enabled;
		return value;
	};
	try {
		this.enabled = new SFBool();
	} catch (e) {
		console.log('Problems setting enabled '+e);
		console.error('Problems setting enabled',e);
	}
	this.set_enabled = function (value) {
		try {
			this.proxy.enabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting enabled '+e);
			console.error('Problems setting enabled',e);
		}
	};
	this.enabled_changed = function () {
		var value = this.enabled;
		return value;
	};
	try {
		this.enabled = new SFBool();
	} catch (e) {
		console.log('Problems setting enabled '+e);
		console.error('Problems setting enabled',e);
	}
	this.set_activated = function (value) {
		try {
			this.proxy.activated = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting activated '+e);
			console.error('Problems setting activated',e);
		}
	};
	this.activated_changed = function () {
		var value = this.activated;
		return value;
	};
	try {
		this.activated = new SFBool();
	} catch (e) {
		console.log('Problems setting activated '+e);
		console.error('Problems setting activated',e);
	}
	this.set_activated = function (value) {
		try {
			this.proxy.activated = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting activated '+e);
			console.error('Problems setting activated',e);
		}
	};
	this.activated_changed = function () {
		var value = this.activated;
		return value;
	};
	try {
		this.activated = new SFBool();
	} catch (e) {
		console.log('Problems setting activated '+e);
		console.error('Problems setting activated',e);
	}
	this.set_activationTime = function (value) {
		try {
			this.proxy.activationTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting activationTime '+e);
			console.error('Problems setting activationTime',e);
		}
	};
	this.activationTime_changed = function () {
		var value = this.activationTime;
		return value;
	};
	try {
		this.activationTime = new SFTime();
	} catch (e) {
		console.log('Problems setting activationTime '+e);
		console.error('Problems setting activationTime',e);
	}
	this.set_transmissionDuration = function (value) {
		try {
			this.proxy.transmissionDuration = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transmissionDuration '+e);
			console.error('Problems setting transmissionDuration',e);
		}
	};
	this.transmissionDuration_changed = function () {
		var value = this.transmissionDuration;
		return value;
	};
	try {
		this.transmissionDuration = new SFFloat();
	} catch (e) {
		console.log('Problems setting transmissionDuration '+e);
		console.error('Problems setting transmissionDuration',e);
	}
	this.set_transmissionDuration = function (value) {
		try {
			this.proxy.transmissionDuration = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transmissionDuration '+e);
			console.error('Problems setting transmissionDuration',e);
		}
	};
	this.transmissionDuration_changed = function () {
		var value = this.transmissionDuration;
		return value;
	};
	try {
		this.transmissionDuration = new SFFloat();
	} catch (e) {
		console.log('Problems setting transmissionDuration '+e);
		console.error('Problems setting transmissionDuration',e);
	}
	this.set_transmissionTimeDelay = function (value) {
		try {
			this.proxy.transmissionTimeDelay = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transmissionTimeDelay '+e);
			console.error('Problems setting transmissionTimeDelay',e);
		}
	};
	this.transmissionTimeDelay_changed = function () {
		var value = this.transmissionTimeDelay;
		return value;
	};
	try {
		this.transmissionTimeDelay = new SFTime();
	} catch (e) {
		console.log('Problems setting transmissionTimeDelay '+e);
		console.error('Problems setting transmissionTimeDelay',e);
	}
	this.set_transmissionTimeDelay = function (value) {
		try {
			this.proxy.transmissionTimeDelay = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transmissionTimeDelay '+e);
			console.error('Problems setting transmissionTimeDelay',e);
		}
	};
	this.transmissionTimeDelay_changed = function () {
		var value = this.transmissionTimeDelay;
		return value;
	};
	try {
		this.transmissionTimeDelay = new SFTime();
	} catch (e) {
		console.log('Problems setting transmissionTimeDelay '+e);
		console.error('Problems setting transmissionTimeDelay',e);
	}
	this.set_directionalTransmission = function (value) {
		try {
			this.proxy.directionalTransmission = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting directionalTransmission '+e);
			console.error('Problems setting directionalTransmission',e);
		}
	};
	this.directionalTransmission_changed = function () {
		var value = this.directionalTransmission;
		return value;
	};
	try {
		this.directionalTransmission = new SFBool();
	} catch (e) {
		console.log('Problems setting directionalTransmission '+e);
		console.error('Problems setting directionalTransmission',e);
	}
	this.set_directionalTransmission = function (value) {
		try {
			this.proxy.directionalTransmission = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting directionalTransmission '+e);
			console.error('Problems setting directionalTransmission',e);
		}
	};
	this.directionalTransmission_changed = function () {
		var value = this.directionalTransmission;
		return value;
	};
	try {
		this.directionalTransmission = new SFBool();
	} catch (e) {
		console.log('Problems setting directionalTransmission '+e);
		console.error('Problems setting directionalTransmission',e);
	}
	this.set_delayCompleted = function (value) {
		try {
			this.proxy.delayCompleted = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting delayCompleted '+e);
			console.error('Problems setting delayCompleted',e);
		}
	};
	this.delayCompleted_changed = function () {
		var value = this.delayCompleted;
		return value;
	};
	try {
		this.delayCompleted = new SFTime();
	} catch (e) {
		console.log('Problems setting delayCompleted '+e);
		console.error('Problems setting delayCompleted',e);
	}
	this.set_acousticTransmissionCylinder = function (value) {
		try {
			this.proxy.acousticTransmissionCylinder = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting acousticTransmissionCylinder '+e);
			console.error('Problems setting acousticTransmissionCylinder',e);
		}
	};
	this.acousticTransmissionCylinder_changed = function () {
		var value = this.acousticTransmissionCylinder;
		return value;
	};
	try {
		this.acousticTransmissionCylinder = X3DJSON.nodeUtil("Scene","AcousticTransmissionCylinderInstance");
	} catch (e) {
		console.log('Problems setting acousticTransmissionCylinder '+e);
		console.error('Problems setting acousticTransmissionCylinder',e);
	}
	this.set_beamCylinderInterpolator = function (value) {
		try {
			this.proxy.beamCylinderInterpolator = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting beamCylinderInterpolator '+e);
			console.error('Problems setting beamCylinderInterpolator',e);
		}
	};
	this.beamCylinderInterpolator_changed = function () {
		var value = this.beamCylinderInterpolator;
		return value;
	};
	try {
		this.beamCylinderInterpolator = X3DJSON.nodeUtil("Scene","BeamCylinderInterpolator");
	} catch (e) {
		console.log('Problems setting beamCylinderInterpolator '+e);
		console.error('Problems setting beamCylinderInterpolator',e);
	}
	this.set_flyingText = function (value) {
		try {
			this.proxy.flyingText = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting flyingText '+e);
			console.error('Problems setting flyingText',e);
		}
	};
	this.flyingText_changed = function () {
		var value = this.flyingText;
		return value;
	};
	try {
		this.flyingText = X3DJSON.nodeUtil("Scene","FlyingTextInstance");
	} catch (e) {
		console.log('Problems setting flyingText '+e);
		console.error('Problems setting flyingText',e);
	}
	this.set_geometrySwitch = function (value) {
		try {
			this.proxy.geometrySwitch = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting geometrySwitch '+e);
			console.error('Problems setting geometrySwitch',e);
		}
	};
	this.geometrySwitch_changed = function () {
		var value = this.geometrySwitch;
		return value;
	};
	try {
		this.geometrySwitch = X3DJSON.nodeUtil("Scene","BuoyGeometrySwitch");
	} catch (e) {
		console.log('Problems setting geometrySwitch '+e);
		console.error('Problems setting geometrySwitch',e);
	}
	this.set_transmissionGeometrySwitch = function (value) {
		try {
			this.proxy.transmissionGeometrySwitch = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transmissionGeometrySwitch '+e);
			console.error('Problems setting transmissionGeometrySwitch',e);
		}
	};
	this.transmissionGeometrySwitch_changed = function () {
		var value = this.transmissionGeometrySwitch;
		return value;
	};
	try {
		this.transmissionGeometrySwitch = X3DJSON.nodeUtil("Scene","TransmissionGeometrySwitch");
	} catch (e) {
		console.log('Problems setting transmissionGeometrySwitch '+e);
		console.error('Problems setting transmissionGeometrySwitch',e);
	}
	this.set_delayTimer = function (value) {
		try {
			this.proxy.delayTimer = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting delayTimer '+e);
			console.error('Problems setting delayTimer',e);
		}
	};
	this.delayTimer_changed = function () {
		var value = this.delayTimer;
		return value;
	};
	try {
		this.delayTimer = X3DJSON.nodeUtil("Scene","DelayTimer");
	} catch (e) {
		console.log('Problems setting delayTimer '+e);
		console.error('Problems setting delayTimer',e);
	}
	this.set_buoyType = function (value) {
		try {
			this.proxy.buoyType = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting buoyType '+e);
			console.error('Problems setting buoyType',e);
		}
	};
	this.buoyType_changed = function () {
		var value = this.buoyType;
		return value;
	};
	try {
		this.buoyType = new SFString();
	} catch (e) {
		console.log('Problems setting buoyType '+e);
		console.error('Problems setting buoyType',e);
	}
	this.set_buoyType = function (value) {
		try {
			this.proxy.buoyType = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting buoyType '+e);
			console.error('Problems setting buoyType',e);
		}
	};
	this.buoyType_changed = function () {
		var value = this.buoyType;
		return value;
	};
	try {
		this.buoyType = new SFString();
	} catch (e) {
		console.log('Problems setting buoyType '+e);
		console.error('Problems setting buoyType',e);
	}
	this.set_soundSpeedInWater = function (value) {
		try {
			this.proxy.soundSpeedInWater = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting soundSpeedInWater '+e);
			console.error('Problems setting soundSpeedInWater',e);
		}
	};
	this.soundSpeedInWater_changed = function () {
		var value = this.soundSpeedInWater;
		return value;
	};
	try {
		this.soundSpeedInWater = new SFFloat();
	} catch (e) {
		console.log('Problems setting soundSpeedInWater '+e);
		console.error('Problems setting soundSpeedInWater',e);
	}
	this.set_soundSpeedInWater = function (value) {
		try {
			this.proxy.soundSpeedInWater = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting soundSpeedInWater '+e);
			console.error('Problems setting soundSpeedInWater',e);
		}
	};
	this.soundSpeedInWater_changed = function () {
		var value = this.soundSpeedInWater;
		return value;
	};
	try {
		this.soundSpeedInWater = new SFFloat();
	} catch (e) {
		console.log('Problems setting soundSpeedInWater '+e);
		console.error('Problems setting soundSpeedInWater',e);
	}
	this.set_description = function (value) {
		try {
			this.proxy.description = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting description '+e);
			console.error('Problems setting description',e);
		}
	};
	this.description_changed = function () {
		var value = this.description;
		return value;
	};
	try {
		this.description = new SFString();
	} catch (e) {
		console.log('Problems setting description '+e);
		console.error('Problems setting description',e);
	}
	this.set_description = function (value) {
		try {
			this.proxy.description = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting description '+e);
			console.error('Problems setting description',e);
		}
	};
	this.description_changed = function () {
		var value = this.description;
		return value;
	};
	try {
		this.description = new SFString();
	} catch (e) {
		console.log('Problems setting description '+e);
		console.error('Problems setting description',e);
	}
	this.set_propagationDistance = function (value) {
		try {
			this.proxy.propagationDistance = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting propagationDistance '+e);
			console.error('Problems setting propagationDistance',e);
		}
	};
	this.propagationDistance_changed = function () {
		var value = this.propagationDistance;
		return value;
	};
	try {
		this.propagationDistance = new SFFloat();
	} catch (e) {
		console.log('Problems setting propagationDistance '+e);
		console.error('Problems setting propagationDistance',e);
	}
	this.set_propagationDuration = function (value) {
		try {
			this.proxy.propagationDuration = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting propagationDuration '+e);
			console.error('Problems setting propagationDuration',e);
		}
	};
	this.propagationDuration_changed = function () {
		var value = this.propagationDuration;
		return value;
	};
	try {
		this.propagationDuration = new SFTime();
	} catch (e) {
		console.log('Problems setting propagationDuration '+e);
		console.error('Problems setting propagationDuration',e);
	}
	this.set_activeDuration = function (value) {
		try {
			this.proxy.activeDuration = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting activeDuration '+e);
			console.error('Problems setting activeDuration',e);
		}
	};
	this.activeDuration_changed = function () {
		var value = this.activeDuration;
		return value;
	};
	try {
		this.activeDuration = new SFTime();
	} catch (e) {
		console.log('Problems setting activeDuration '+e);
		console.error('Problems setting activeDuration',e);
	}
	this.set_totalDuration = function (value) {
		try {
			this.proxy.totalDuration = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting totalDuration '+e);
			console.error('Problems setting totalDuration',e);
		}
	};
	this.totalDuration_changed = function () {
		var value = this.totalDuration;
		return value;
	};
	try {
		this.totalDuration = new SFTime();
	} catch (e) {
		console.log('Problems setting totalDuration '+e);
		console.error('Problems setting totalDuration',e);
	}
	this.set_beamRotation = function (value) {
		try {
			this.proxy.beamRotation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting beamRotation '+e);
			console.error('Problems setting beamRotation',e);
		}
	};
	this.beamRotation_changed = function () {
		var value = this.beamRotation;
		return value;
	};
	try {
		this.beamRotation = new SFRotation();
	} catch (e) {
		console.log('Problems setting beamRotation '+e);
		console.error('Problems setting beamRotation',e);
	}
	this.set_TextLabelNode = function (value) {
		try {
			this.proxy.TextLabelNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TextLabelNode '+e);
			console.error('Problems setting TextLabelNode',e);
		}
	};
	this.TextLabelNode_changed = function () {
		var value = this.TextLabelNode;
		return value;
	};
	try {
		this.TextLabelNode = X3DJSON.nodeUtil("Scene","TextLabel");
	} catch (e) {
		console.log('Problems setting TextLabelNode '+e);
		console.error('Problems setting TextLabelNode',e);
	}
	this.set_SeaWebBuoyViewpointNode = function (value) {
		try {
			this.proxy.SeaWebBuoyViewpointNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SeaWebBuoyViewpointNode '+e);
			console.error('Problems setting SeaWebBuoyViewpointNode',e);
		}
	};
	this.SeaWebBuoyViewpointNode_changed = function () {
		var value = this.SeaWebBuoyViewpointNode;
		return value;
	};
	try {
		this.SeaWebBuoyViewpointNode = X3DJSON.nodeUtil("Scene","SeaWebBuoyViewpoint");
	} catch (e) {
		console.log('Problems setting SeaWebBuoyViewpointNode '+e);
		console.error('Problems setting SeaWebBuoyViewpointNode',e);
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
		this.traceEnabled = new SFBool();
	} catch (e) {
		console.log('Problems setting traceEnabled '+e);
		console.error('Problems setting traceEnabled',e);
	}


ecmascript:

	this.initialize = function ()
{
	// invoke trace routines, if this.proxy.enabled
	this.proxy.set_buoyType (this.proxy.buoyType, timestamp);
	this.proxy.set_directionalTransmission (this.proxy.directionalTransmission);
	this.process_position_updates ();
	this.initializeTextLabel ();
	this.tracePrint('====================== this.initialize() complete ======================');
};

	this.initializeTextLabel = function ()
{
	X3DJSON.nodeUtil("Scene","TextLabel", "string",  new MFString (this.proxy.description, 'location (' + this.proxy.position + ')'));
	this.tracePrint('X3DJSON.nodeUtil("Scene","TextLabel", "string", ' + X3DJSON.nodeUtil("Scene","TextLabel", "string")));
};

	this.set_buoyType = function (stringValue, timestamp)
{
	this.proxy.buoyType = stringValue;
	this.tracePrint ('this.proxy.buoyType = ' + this.proxy.buoyType);
	if      (this.proxy.buoyType=='Racom')
    {
		X3DJSON.nodeUtil("Scene","BuoyGeometrySwitch", "whichChoice",  0);
	}
	else if (this.proxy.buoyType== 'Telesonar')
    {
		X3DJSON.nodeUtil("Scene","BuoyGeometrySwitch", "whichChoice",  1);
	}
    else
    {
		this.alwaysPrint ('unrecognized this.proxy.buoyType=' + this.proxy.buoyType + ' [allowed choices:  Racom Telesonar]');
		X3DJSON.nodeUtil("Scene","BuoyGeometrySwitch", "whichChoice",  -1); // none
	}
	this.updateSeaWebBuoyViewpointDescription ();
};

	this.updateSeaWebBuoyViewpointDescription = function ()
{
	X3DJSON.nodeUtil("Scene","SeaWebBuoyViewpoint", "this").proxy.description = this.proxy.description + ' (' + this.proxy.position + ')';
};

	this.set_soundSpeedInWater = function (value, timestamp)
{
	this.proxy.soundSpeedInWater = value;
	this.tracePrint('this.proxy.soundSpeedInWater = ' + this.proxy.soundSpeedInWater);
	this.process_position_updates ();
};

	this.set_position = function (positionValue, timestamp)
{
	this.proxy.position = positionValue;
	this.tracePrint('this.proxy.position = ' + this.proxy.position);
	this.process_position_updates();
	this.updateSeaWebBuoyViewpointDescription ();
};

	this.set_targetPosition = function (positionValue, timestamp)
{
	this.proxy.targetPosition = positionValue;
	this.tracePrint('this.proxy.targetPosition = ' + this.proxy.targetPosition);
	this.process_position_updates();
};

	this.set_transmissionDuration = function (value, timestamp)
{
	this.proxy.transmissionDuration = value;
	this.tracePrint('this.proxy.transmissionDuration     = ' + this.proxy.transmissionDuration);
	this.process_position_updates ();
};

	this.set_description = function (value, timestamp)
{
	this.tracePrint('new this.proxy.description = ' + value);
	this.proxy.description = value;
	this.updateSeaWebBuoyViewpointDescription ();
};

	this.process_position_updates = function (timestamp)
{
	this.tracePrint('this.process_position_updates()...');
	this.tracePrint('this.proxy.transmissionTimeDelay    = ' + this.proxy.transmissionTimeDelay);
	relativeTargetPosition = new SFVec3f();
	relativeTargetPosition.x = this.proxy.targetPosition.x - this.proxy.position.x;
	relativeTargetPosition.y = this.proxy.targetPosition.y - this.proxy.position.y;
	relativeTargetPosition.z = this.proxy.targetPosition.z - this.proxy.position.z;
	this.tracePrint('relativeTargetPosition = ' + relativeTargetPosition);

	// this.proxy.propagationDistance also sets range for AcousticTransmissionCylinderInstance
	this.proxy.propagationDistance = 	Math.sqrt(
				(relativeTargetPosition.x) * (relativeTargetPosition.x) +
				(relativeTargetPosition.y) * (relativeTargetPosition.y) +
				(relativeTargetPosition.z) * (relativeTargetPosition.z));
	this.tracePrint('this.proxy.propagationDistance = ' + this.proxy.propagationDistance);

	this.proxy.propagationDuration = this.proxy.propagationDistance / this.proxy.soundSpeedInWater;
	this.tracePrint('this.proxy.propagationDuration    = ' + this.proxy.propagationDuration);
	this.proxy.activeDuration = this.proxy.propagationDuration + this.proxy.transmissionDuration;
	this.proxy.totalDuration = this.proxy.transmissionTimeDelay + this.proxy.propagationDuration + this.proxy.transmissionDuration;
	this.tracePrint('this.proxy.totalDuration    = ' + this.proxy.totalDuration);

	X3DJSON.nodeUtil("Scene","BeamCylinderInterpolator", "key",  new MFFloat (0, this.proxy.transmissionTimeDelay/this.proxy.totalDuration,
		(this.proxy.transmissionTimeDelay + this.proxy.propagationDuration)/this.proxy.totalDuration, 0.99, 1));
	X3DJSON.nodeUtil("Scene","BeamCylinderInterpolator", "keyValue",  new MFFloat (0, 0, this.proxy.propagationDistance, this.proxy.propagationDistance, 0));
	this.tracePrint('X3DJSON.nodeUtil("Scene","BeamCylinderInterpolator", "key",  ' + X3DJSON.nodeUtil("Scene","BeamCylinderInterpolator", "key")));
	this.tracePrint('X3DJSON.nodeUtil("Scene","BeamCylinderInterpolator", "keyValue",  ' + X3DJSON.nodeUtil("Scene","BeamCylinderInterpolator", "keyValue")));
	this.proxy.beamRotation = new SFRotation (new SFVec3f (1, 0, 0), relativeTargetPosition.normalize());

	X3DJSON.nodeUtil("Scene","FlyingTextInstance", "timeIntervals",  new MFTime(this.proxy.transmissionTimeDelay, this.proxy.propagationDuration + this.proxy.transmissionDuration));
	this.tracePrint('X3DJSON.nodeUtil("Scene","FlyingTextInstance", "timeIntervals",  ' + X3DJSON.nodeUtil("Scene","FlyingTextInstance", "timeIntervals")));
	// popup text without motion during this.proxy.transmissionTimeDelay
	X3DJSON.nodeUtil("Scene","FlyingTextInstance", "waypoints",  new MFVec3f(new SFVec3f(0,0,0), new SFVec3f(0,0,0), relativeTargetPosition));
	this.tracePrint('X3DJSON.nodeUtil("Scene","FlyingTextInstance", "waypoints",  ' + X3DJSON.nodeUtil("Scene","FlyingTextInstance", "waypoints")));
	this.tracePrint('...process_position_updates() complete.');
};

	this.set_enabled = function (value, timestamp)
{
	this.proxy.enabled = value;
	this.tracePrint('this.proxy.enabled = ' + this.proxy.enabled);
};

	this.set_activated = function (value, timestamp)
{
	if (this.proxy.enabled)
	{
		this.process_position_updates(); // ensure up to date
		if (this.proxy.directionalTransmission)
		{
		//	beamCylinder.contact = true;
		}
		else
		{
			// start delay timer, which will later trigger X3DJSON.nodeUtil("Scene","AcousticTransmissionCylinderInstance", "")
		//	X3DJSON.nodeUtil("Scene","AcousticTransmissionCylinderInstance", "startTransmission",  true);
		}

		if (value == true)
		{
			X3DJSON.nodeUtil("Scene","DelayTimer", "delayInterval",  this.proxy.transmissionTimeDelay);
			this.tracePrint('X3DJSON.nodeUtil("Scene","DelayTimer", "delayInterval",  ' + X3DJSON.nodeUtil("Scene","DelayTimer", "delayInterval")));
			this.proxy.activationTime = timestamp; // start DelayTimer, BeamCylinderAnimation, FlyingText startTime
			this.tracePrint('this.proxy.activated at ' + this.proxy.activationTime);
		}
	}
};

	this.set_targetIdNumber = function (value, timestamp)
{
	this.proxy.targetIdNumber = value;
	this.tracePrint('this.proxy.targetIdNumber = ' + this.proxy.targetIdNumber);
};

	this.set_directionalTransmission = function (value, timestamp)
{
	this.proxy.directionalTransmission = value;
	this.tracePrint('this.proxy.directionalTransmission = ' + this.proxy.directionalTransmission);

	if (this.proxy.directionalTransmission)
	{
		X3DJSON.nodeUtil("Scene","TransmissionGeometrySwitch", "whichChoice",  1);
	}
	else
	{
		X3DJSON.nodeUtil("Scene","TransmissionGeometrySwitch", "whichChoice",  0);
	}
};

	this.set_transmissionTimeDelay = function (value, timestamp)
{
	if (value < 0.0)
	{
		this.alwaysPrint('error, illegal this.proxy.transmissionTimeDelay = ' + this.proxy.transmissionTimeDelay +
			', reset to 0');
		this.proxy.transmissionTimeDelay = 0.0;
	}
	else
	{
		this.proxy.transmissionTimeDelay = value;
	}
	this.tracePrint('this.proxy.transmissionTimeDelay = ' + this.proxy.transmissionTimeDelay);
	this.process_position_updates ();
};

	this.delayCompleted = function (value, timestamp)
{
	if (this.proxy.directionalTransmission)
	{
	//	beamCylinder.range = 0;
	}
	else
	{
		X3DJSON.nodeUtil("Scene","AcousticTransmissionCylinderInstance", "startTransmission",  true);
	}
	this.tracePrint('X3DJSON.nodeUtil("Scene","DelayTimer", "his").proxy.delayCompleted at ' + timestamp);
};

	this.alwaysPrint = function (string)
{
	console.error ('[SeaWebBuoyPrototype ' + this.proxy.description + '] ' + string);
};

	this.tracePrint = function (string)
{
	if (this.proxy.traceEnabled)
		console.error ('[SeaWebBuoyPrototype ' + this.proxy.description + '] ' + string);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].initialize();
    if (X3DJSON.nodeUtil("Scene","BeamCylinderAnimation")) {
X3DJSON.nodeUtil("Scene","BeamCylinderAnimation").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BeamCylinderInterpolator")) {
X3DJSON.nodeUtil("Scene","BeamCylinderInterpolator").addEventListener('outputchange', function(event) {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript']['ACTION']['activationTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript']['ACTION']['activationTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript']['ACTION']['activationTime'].push(function(property, value) {
		if (property === 'activationTime') {
			X3DJSON.nodeUtil("Scene","DelayTimer","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].activationTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].activationTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].activationTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","DelayTimer","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].activationTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].activationTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].activationTime, __eventTime);
    if (X3DJSON.nodeUtil("Scene","DelayTimer")) {
X3DJSON.nodeUtil("Scene","DelayTimer").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].delayCompleted(X3DJSON.nodeUtil("Scene","DelayTimer","delayCompleteTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].delayCompleted(X3DJSON.nodeUtil("Scene","DelayTimer","delayCompleteTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","DelayTimer")) {
X3DJSON.nodeUtil("Scene","DelayTimer").addEventListener('outputchange', function(event) {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript']['ACTION']['activationTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript']['ACTION']['activationTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript']['ACTION']['activationTime'].push(function(property, value) {
		if (property === 'activationTime') {
			X3DJSON.nodeUtil("Scene","FlyingTextInstance","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].activationTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].activationTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].activationTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FlyingTextInstance","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].activationTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].activationTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].activationTime, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript']['ACTION']['propagationDistance'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript']['ACTION']['propagationDistance'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript']['ACTION']['propagationDistance'].push(function(property, value) {
		if (property === 'propagationDistance') {
			X3DJSON.nodeUtil("Scene","AcousticTransmissionCylinderInstance","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].propagationDistance === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].propagationDistance() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].propagationDistance, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AcousticTransmissionCylinderInstance","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].propagationDistance === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].propagationDistance() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].propagationDistance, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript']['ACTION']['beamRotation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript']['ACTION']['beamRotation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript']['ACTION']['beamRotation'].push(function(property, value) {
		if (property === 'beamRotation') {
			X3DJSON.nodeUtil("Scene","BeamCylinderRotation","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].beamRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].beamRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].beamRotation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BeamCylinderRotation","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].beamRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].beamRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].beamRotation, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript']['ACTION']['activeDuration'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript']['ACTION']['activeDuration'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript']['ACTION']['activeDuration'].push(function(property, value) {
		if (property === 'activeDuration') {
			X3DJSON.nodeUtil("Scene","BeamCylinderAnimation","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].activeDuration === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].activeDuration() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].activeDuration, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BeamCylinderAnimation","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].activeDuration === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].activeDuration() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].activeDuration, __eventTime);
			X3DJSON.nodeUtil("Scene","DelayTimer","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].activationTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].activationTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].activationTime, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].delayCompleted(X3DJSON.nodeUtil("Scene","DelayTimer","delayCompleteTime"), __eventTime);
			X3DJSON.nodeUtil("Scene","FlyingTextInstance","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].activationTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].activationTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].activationTime, __eventTime);
			X3DJSON.nodeUtil("Scene","AcousticTransmissionCylinderInstance","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].propagationDistance === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].propagationDistance() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].propagationDistance, __eventTime);
			X3DJSON.nodeUtil("Scene","BeamCylinderRotation","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].beamRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].beamRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].beamRotation, __eventTime);
			X3DJSON.nodeUtil("Scene","BeamCylinderAnimation","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].activeDuration === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].activeDuration() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/SeaWebBuoyPrototype.json']['RepeaterBuoyControlScript'].activeDuration, __eventTime);