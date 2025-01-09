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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'] = function() {
	this.set_HelicopterWaypointInterpolator = function (value) {
		try {
			this.proxy.HelicopterWaypointInterpolator = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting HelicopterWaypointInterpolator '+e);
			console.error('Problems setting HelicopterWaypointInterpolator',e);
		}
	};
	this.HelicopterWaypointInterpolator_changed = function () {
		var value = this.HelicopterWaypointInterpolator;
		return value;
	};
	try {
		this.HelicopterWaypointInterpolator = X3DJSON.nodeUtil("Scene","HelicopterOrbitTrack");
	} catch (e) {
		console.log('Problems setting HelicopterWaypointInterpolator '+e);
		console.error('Problems setting HelicopterWaypointInterpolator',e);
	}
	this.set_BuoyArray = function (value) {
		try {
			this.proxy.BuoyArray = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting BuoyArray '+e);
			console.error('Problems setting BuoyArray',e);
		}
	};
	this.BuoyArray_changed = function () {
		var value = this.BuoyArray;
		return value;
	};
	try {
		this.BuoyArray = new MFNode();
	} catch (e) {
		console.log('Problems setting BuoyArray '+e);
		console.error('Problems setting BuoyArray',e);
	}
	this.set_timeNextBouyPing = function (value) {
		try {
			this.proxy.timeNextBouyPing = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting timeNextBouyPing '+e);
			console.error('Problems setting timeNextBouyPing',e);
		}
	};
	this.timeNextBouyPing_changed = function () {
		var value = this.timeNextBouyPing;
		return value;
	};
	try {
		this.timeNextBouyPing = new SFTime();
	} catch (e) {
		console.log('Problems setting timeNextBouyPing '+e);
		console.error('Problems setting timeNextBouyPing',e);
	}
	this.set_activeBuoyLocation = function (value) {
		try {
			this.proxy.activeBuoyLocation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting activeBuoyLocation '+e);
			console.error('Problems setting activeBuoyLocation',e);
		}
	};
	this.activeBuoyLocation_changed = function () {
		var value = this.activeBuoyLocation;
		return value;
	};
	try {
		this.activeBuoyLocation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting activeBuoyLocation '+e);
		console.error('Problems setting activeBuoyLocation',e);
	}
	this.set_buoyRange = function (value) {
		try {
			this.proxy.buoyRange = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting buoyRange '+e);
			console.error('Problems setting buoyRange',e);
		}
	};
	this.buoyRange_changed = function () {
		var value = this.buoyRange;
		return value;
	};
	try {
		this.buoyRange = new SFFloat();
	} catch (e) {
		console.log('Problems setting buoyRange '+e);
		console.error('Problems setting buoyRange',e);
	}
	this.set_keyValueRadioCommandInterpolator = function (value) {
		try {
			this.proxy.keyValueRadioCommandInterpolator = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting keyValueRadioCommandInterpolator '+e);
			console.error('Problems setting keyValueRadioCommandInterpolator',e);
		}
	};
	this.keyValueRadioCommandInterpolator_changed = function () {
		var value = this.keyValueRadioCommandInterpolator;
		return value;
	};
	try {
		this.keyValueRadioCommandInterpolator = new MFFloat();
	} catch (e) {
		console.log('Problems setting keyValueRadioCommandInterpolator '+e);
		console.error('Problems setting keyValueRadioCommandInterpolator',e);
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
	this.set_sendCommand = function (value) {
		try {
			this.proxy.sendCommand = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sendCommand '+e);
			console.error('Problems setting sendCommand',e);
		}
	};
	this.sendCommand_changed = function () {
		var value = this.sendCommand;
		return value;
	};
	try {
		this.sendCommand = new SFTime();
	} catch (e) {
		console.log('Problems setting sendCommand '+e);
		console.error('Problems setting sendCommand',e);
	}
	this.set_currentBuoyNumber = function (value) {
		try {
			this.proxy.currentBuoyNumber = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting currentBuoyNumber '+e);
			console.error('Problems setting currentBuoyNumber',e);
		}
	};
	this.currentBuoyNumber_changed = function () {
		var value = this.currentBuoyNumber;
		return value;
	};
	try {
		this.currentBuoyNumber = new SFInt32(-1);
	} catch (e) {
		console.log('Problems setting currentBuoyNumber '+e);
		console.error('Problems setting currentBuoyNumber',e);
	}
	this.set_ID = function (value) {
		try {
			this.proxy.ID = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ID '+e);
			console.error('Problems setting ID',e);
		}
	};
	this.ID_changed = function () {
		var value = this.ID;
		return value;
	};
	try {
		this.ID = new MFString();
	} catch (e) {
		console.log('Problems setting ID '+e);
		console.error('Problems setting ID',e);
	}
	this.set_TRACE = function (value) {
		try {
			this.proxy.TRACE = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TRACE '+e);
			console.error('Problems setting TRACE',e);
		}
	};
	this.TRACE_changed = function () {
		var value = this.TRACE;
		return value;
	};
	try {
		this.TRACE = new SFBool(true);
	} catch (e) {
		console.log('Problems setting TRACE '+e);
		console.error('Problems setting TRACE',e);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].initialize();
    if (X3DJSON.nodeUtil("Scene","HelicopterOrbitTrack")) {
X3DJSON.nodeUtil("Scene","HelicopterOrbitTrack").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","HelicopterOrbitClock")) {
X3DJSON.nodeUtil("Scene","HelicopterOrbitClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","HelicopterOrbitTrack")) {
X3DJSON.nodeUtil("Scene","HelicopterOrbitTrack").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","HelicopterOrbitTrack")) {
X3DJSON.nodeUtil("Scene","HelicopterOrbitTrack").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PingBuoySequenceClock")) {
X3DJSON.nodeUtil("Scene","PingBuoySequenceClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].timeNextBouyPing(X3DJSON.nodeUtil("Scene","PingBuoySequenceClock","cycleTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].timeNextBouyPing(X3DJSON.nodeUtil("Scene","PingBuoySequenceClock","cycleTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","HelicopterOrbitTrack")) {
X3DJSON.nodeUtil("Scene","HelicopterOrbitTrack").addEventListener('outputchange', function(event) {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript']['ACTION']['beamRotation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript']['ACTION']['beamRotation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript']['ACTION']['beamRotation'].push(function(property, value) {
		if (property === 'beamRotation') {
			X3DJSON.nodeUtil("Scene","RadioBeamOrientation","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].beamRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].beamRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].beamRotation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RadioBeamOrientation","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].beamRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].beamRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].beamRotation, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript']['ACTION']['sendCommand'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript']['ACTION']['sendCommand'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript']['ACTION']['sendCommand'].push(function(property, value) {
		if (property === 'sendCommand') {
			X3DJSON.nodeUtil("Scene","RadioCommandTimer","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].sendCommand === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].sendCommand() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].sendCommand, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RadioCommandTimer","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].sendCommand === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].sendCommand() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].sendCommand, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript']['ACTION']['keyValueRadioCommandInterpolator'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript']['ACTION']['keyValueRadioCommandInterpolator'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript']['ACTION']['keyValueRadioCommandInterpolator'].push(function(property, value) {
		if (property === 'keyValueRadioCommandInterpolator') {
			X3DJSON.nodeUtil("Scene","RadioBeamInterpolator","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].keyValueRadioCommandInterpolator === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].keyValueRadioCommandInterpolator() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].keyValueRadioCommandInterpolator, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RadioBeamInterpolator","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].keyValueRadioCommandInterpolator === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].keyValueRadioCommandInterpolator() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].keyValueRadioCommandInterpolator, __eventTime);
    if (X3DJSON.nodeUtil("Scene","RadioCommandTimer")) {
X3DJSON.nodeUtil("Scene","RadioCommandTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RadioBeamInterpolator")) {
X3DJSON.nodeUtil("Scene","RadioBeamInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RadioCommandTimer")) {
X3DJSON.nodeUtil("Scene","RadioCommandTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RadioContactSequencer")) {
X3DJSON.nodeUtil("Scene","RadioContactSequencer").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].timeNextBouyPing(X3DJSON.nodeUtil("Scene","PingBuoySequenceClock","cycleTime"), __eventTime);
			X3DJSON.nodeUtil("Scene","RadioBeamOrientation","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].beamRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].beamRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].beamRotation, __eventTime);
			X3DJSON.nodeUtil("Scene","RadioCommandTimer","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].sendCommand === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].sendCommand() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].sendCommand, __eventTime);
			X3DJSON.nodeUtil("Scene","RadioBeamInterpolator","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].keyValueRadioCommandInterpolator === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].keyValueRadioCommandInterpolator() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/SonobuoyFieldScenario.json']['SonobuoyFieldScenarioScript'].keyValueRadioCommandInterpolator, __eventTime);