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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'] = function() {
	this.set_altitude = function (value) {
		try {
			this.proxy.altitude = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting altitude '+e);
			console.error('Problems setting altitude',e);
		}
	};
	this.altitude_changed = function () {
		var value = this.altitude;
		return value;
	};
	try {
		this.altitude = new SFFloat();
	} catch (e) {
		console.log('Problems setting altitude '+e);
		console.error('Problems setting altitude',e);
	}
	this.set_defaultAltitude = function (value) {
		try {
			this.proxy.defaultAltitude = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting defaultAltitude '+e);
			console.error('Problems setting defaultAltitude',e);
		}
	};
	this.defaultAltitude_changed = function () {
		var value = this.defaultAltitude;
		return value;
	};
	try {
		this.defaultAltitude = new SFFloat();
	} catch (e) {
		console.log('Problems setting defaultAltitude '+e);
		console.error('Problems setting defaultAltitude',e);
	}
	this.set_maxAltitude = function (value) {
		try {
			this.proxy.maxAltitude = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting maxAltitude '+e);
			console.error('Problems setting maxAltitude',e);
		}
	};
	this.maxAltitude_changed = function () {
		var value = this.maxAltitude;
		return value;
	};
	try {
		this.maxAltitude = new SFFloat();
	} catch (e) {
		console.log('Problems setting maxAltitude '+e);
		console.error('Problems setting maxAltitude',e);
	}
	this.set_defaultCrossTrackHalfRange = function (value) {
		try {
			this.proxy.defaultCrossTrackHalfRange = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting defaultCrossTrackHalfRange '+e);
			console.error('Problems setting defaultCrossTrackHalfRange',e);
		}
	};
	this.defaultCrossTrackHalfRange_changed = function () {
		var value = this.defaultCrossTrackHalfRange;
		return value;
	};
	try {
		this.defaultCrossTrackHalfRange = new SFFloat();
	} catch (e) {
		console.log('Problems setting defaultCrossTrackHalfRange '+e);
		console.error('Problems setting defaultCrossTrackHalfRange',e);
	}
	this.set_defaultTrackWidthMeters = function (value) {
		try {
			this.proxy.defaultTrackWidthMeters = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting defaultTrackWidthMeters '+e);
			console.error('Problems setting defaultTrackWidthMeters',e);
		}
	};
	this.defaultTrackWidthMeters_changed = function () {
		var value = this.defaultTrackWidthMeters;
		return value;
	};
	try {
		this.defaultTrackWidthMeters = new SFFloat();
	} catch (e) {
		console.log('Problems setting defaultTrackWidthMeters '+e);
		console.error('Problems setting defaultTrackWidthMeters',e);
	}
	this.set_vehicleWidthMeters = function (value) {
		try {
			this.proxy.vehicleWidthMeters = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting vehicleWidthMeters '+e);
			console.error('Problems setting vehicleWidthMeters',e);
		}
	};
	this.vehicleWidthMeters_changed = function () {
		var value = this.vehicleWidthMeters;
		return value;
	};
	try {
		this.vehicleWidthMeters = new SFFloat();
	} catch (e) {
		console.log('Problems setting vehicleWidthMeters '+e);
		console.error('Problems setting vehicleWidthMeters',e);
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
	this.set_coordinatePoints = function (value) {
		try {
			this.proxy.coordinatePoints = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting coordinatePoints '+e);
			console.error('Problems setting coordinatePoints',e);
		}
	};
	this.coordinatePoints_changed = function () {
		var value = this.coordinatePoints;
		return value;
	};
	try {
		this.coordinatePoints = new MFVec3f();
	} catch (e) {
		console.log('Problems setting coordinatePoints '+e);
		console.error('Problems setting coordinatePoints',e);
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
		this.traceEnabled = new SFBool(false);
	} catch (e) {
		console.log('Problems setting traceEnabled '+e);
		console.error('Problems setting traceEnabled',e);
	}


ecmascript:

	this.tracePrint = function (value)
{
	if (this.proxy.traceEnabled) console.error ('[SideScanSonar BEAM_CALCULATE] ' + value);
}
;

	this.initialize = function () {
 this.proxy.beamScale = new SFVec3f (1, 1, 1);
 dt2 = this.proxy.defaultTrackWidthMeters/2;

 origin = new SFVec3f (0, 0, 0);
 a  = new SFVec3f (-dt2,  0,               -this.proxy.vehicleWidthMeters/2);
 b  = new SFVec3f (-dt2, -this.proxy.defaultAltitude, -this.proxy.defaultCrossTrackHalfRange);
 c  = new SFVec3f (-dt2, -this.proxy.defaultAltitude,  0);
 d  = new SFVec3f (-dt2, -this.proxy.defaultAltitude,  this.proxy.defaultCrossTrackHalfRange);
 e  = new SFVec3f (-dt2,  0,                this.proxy.vehicleWidthMeters/2);
 aa = new SFVec3f ( dt2,  0,               -this.proxy.vehicleWidthMeters/2);
 bb = new SFVec3f ( dt2, -this.proxy.defaultAltitude, -this.proxy.defaultCrossTrackHalfRange);
 cc = new SFVec3f ( dt2, -this.proxy.defaultAltitude,  0);
 dd = new SFVec3f ( dt2, -this.proxy.defaultAltitude,  this.proxy.defaultCrossTrackHalfRange);
 ee = new SFVec3f ( dt2,  0,                this.proxy.vehicleWidthMeters/2);

 this.proxy.coordinatePoints = new MFVec3f (origin, a, b, c, d, e, aa, bb, cc, dd, ee);

 this.tracePrint ('this.proxy.coordinatePoints =' + this.proxy.coordinatePoints);
};

	this.altitude = function (newAltitude, timeStamp) {
 if (newAltitude <= 0)
 {
   beamHeightFactor= 0.001;
   this.proxy.beamScale = new SFVec3f (1, beamHeightFactor, beamHeightFactor);
 }
 else if (newAltitude < this.proxy.maxAltitude)
 {
   beamHeightFactor= newAltitude / this.proxy.defaultAltitude;
   this.proxy.beamScale = new SFVec3f (1, beamHeightFactor, beamHeightFactor);
 }
 else
 {
   beamHeightFactor= this.proxy.maxAltitude / this.proxy.defaultAltitude;
   this.proxy.beamScale = new SFVec3f (1, beamHeightFactor, beamHeightFactor);
 }
 this.tracePrint ('newAltitude      =' + newAltitude);
 this.tracePrint ('beamHeightFactor =' + beamHeightFactor);
 this.tracePrint ('this.proxy.beamScale        =' + this.proxy.beamScale);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'] = function() {
	this.set_contact = function (value) {
		try {
			this.proxy.contact = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting contact '+e);
			console.error('Problems setting contact',e);
		}
	};
	this.contact_changed = function () {
		var value = this.contact;
		return value;
	};
	try {
		this.contact = new SFBool();
	} catch (e) {
		console.log('Problems setting contact '+e);
		console.error('Problems setting contact',e);
	}
	this.set_wireframe = function (value) {
		try {
			this.proxy.wireframe = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting wireframe '+e);
			console.error('Problems setting wireframe',e);
		}
	};
	this.wireframe_changed = function () {
		var value = this.wireframe;
		return value;
	};
	try {
		this.wireframe = new SFBool();
	} catch (e) {
		console.log('Problems setting wireframe '+e);
		console.error('Problems setting wireframe',e);
	}
	this.set_solid = function (value) {
		try {
			this.proxy.solid = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting solid '+e);
			console.error('Problems setting solid',e);
		}
	};
	this.solid_changed = function () {
		var value = this.solid;
		return value;
	};
	try {
		this.solid = new SFBool();
	} catch (e) {
		console.log('Problems setting solid '+e);
		console.error('Problems setting solid',e);
	}
	this.set_contactColor = function (value) {
		try {
			this.proxy.contactColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting contactColor '+e);
			console.error('Problems setting contactColor',e);
		}
	};
	this.contactColor_changed = function () {
		var value = this.contactColor;
		return value;
	};
	try {
		this.contactColor = new SFColor();
	} catch (e) {
		console.log('Problems setting contactColor '+e);
		console.error('Problems setting contactColor',e);
	}
	this.set_noContactColor = function (value) {
		try {
			this.proxy.noContactColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting noContactColor '+e);
			console.error('Problems setting noContactColor',e);
		}
	};
	this.noContactColor_changed = function () {
		var value = this.noContactColor;
		return value;
	};
	try {
		this.noContactColor = new SFColor();
	} catch (e) {
		console.log('Problems setting noContactColor '+e);
		console.error('Problems setting noContactColor',e);
	}
	this.set_beamColor = function (value) {
		try {
			this.proxy.beamColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting beamColor '+e);
			console.error('Problems setting beamColor',e);
		}
	};
	this.beamColor_changed = function () {
		var value = this.beamColor;
		return value;
	};
	try {
		this.beamColor = new SFColor();
	} catch (e) {
		console.log('Problems setting beamColor '+e);
		console.error('Problems setting beamColor',e);
	}
	this.set_wireframeChoice = function (value) {
		try {
			this.proxy.wireframeChoice = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting wireframeChoice '+e);
			console.error('Problems setting wireframeChoice',e);
		}
	};
	this.wireframeChoice_changed = function () {
		var value = this.wireframeChoice;
		return value;
	};
	try {
		this.wireframeChoice = new SFInt32();
	} catch (e) {
		console.log('Problems setting wireframeChoice '+e);
		console.error('Problems setting wireframeChoice',e);
	}
	this.set_solidChoice = function (value) {
		try {
			this.proxy.solidChoice = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting solidChoice '+e);
			console.error('Problems setting solidChoice',e);
		}
	};
	this.solidChoice_changed = function () {
		var value = this.solidChoice;
		return value;
	};
	try {
		this.solidChoice = new SFInt32();
	} catch (e) {
		console.log('Problems setting solidChoice '+e);
		console.error('Problems setting solidChoice',e);
	}
	this.set_MaterialNodeHolder = function (value) {
		try {
			this.proxy.MaterialNodeHolder = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting MaterialNodeHolder '+e);
			console.error('Problems setting MaterialNodeHolder',e);
		}
	};
	this.MaterialNodeHolder_changed = function () {
		var value = this.MaterialNodeHolder;
		return value;
	};
	try {
		this.MaterialNodeHolder = X3DJSON.nodeUtil("Scene","FaceMaterial");
	} catch (e) {
		console.log('Problems setting MaterialNodeHolder '+e);
		console.error('Problems setting MaterialNodeHolder',e);
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
		this.traceEnabled = new SFBool(false);
	} catch (e) {
		console.log('Problems setting traceEnabled '+e);
		console.error('Problems setting traceEnabled',e);
	}


ecmascript:

	this.tracePrint = function (value)
{
	if (this.proxy.traceEnabled) console.error ('[SideScanSonar DETECTION] ' + value);
}
;

	this.initialize = function ()
{
	this.proxy.beamColor = this.proxy.noContactColor;
	if (this.proxy.wireframe == true) this.proxy.wireframeChoice = 1;
	if (this.proxy.solid     == true) this.proxy.solidChoice     = 1;

	// Debug  statements
	this.tracePrint ('  this.proxy.wireframe       =' + this.proxy.wireframe);
	this.tracePrint ('  this.proxy.solid           =' + this.proxy.solid);
	this.tracePrint ('  this.proxy.contactColor    =' + this.proxy.contactColor);
	this.tracePrint ('  this.proxy.noContactColor  =' + this.proxy.noContactColor);
	this.tracePrint ('  this.proxy.beamColor       =' + this.proxy.beamColor);
	this.tracePrint ('  this.proxy.wireframeChoice =' + this.proxy.wireframeChoice);
	this.tracePrint ('  this.proxy.solidChoice     =' + this.proxy.solidChoice);
	this.tracePrint ('  transparency    =' + X3DJSON.nodeUtil("Scene","FaceMaterial", "transparency"));
};

	this.contact = function (newDetect, timeStamp)
{
	this.tracePrint ('  newDetect       =' + newDetect);
	if (newDetect) this.proxy.beamColor = this.proxy.contactColor;
	else           this.proxy.beamColor = this.proxy.noContactColor;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE']['ACTION']['beamScale'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE']['ACTION']['beamScale'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE']['ACTION']['beamScale'].push(function(property, value) {
		if (property === 'beamScale') {
			X3DJSON.nodeUtil("Scene","BEAM_CONTROL","scale",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'].beamScale === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'].beamScale() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'].beamScale, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BEAM_CONTROL","scale",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'].beamScale === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'].beamScale() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'].beamScale, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE']['ACTION']['coordinatePoints'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE']['ACTION']['coordinatePoints'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE']['ACTION']['coordinatePoints'].push(function(property, value) {
		if (property === 'coordinatePoints') {
			X3DJSON.nodeUtil("Scene","BeamPatternCoordinatePoints","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'].coordinatePoints === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'].coordinatePoints() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'].coordinatePoints, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BeamPatternCoordinatePoints","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'].coordinatePoints === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'].coordinatePoints() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'].coordinatePoints, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION']['ACTION']['beamColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION']['ACTION']['beamColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION']['ACTION']['beamColor'].push(function(property, value) {
		if (property === 'beamColor') {
			X3DJSON.nodeUtil("Scene","WireMaterial","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].beamColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].beamColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].beamColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","WireMaterial","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].beamColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].beamColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].beamColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION']['ACTION']['beamColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION']['ACTION']['beamColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION']['ACTION']['beamColor'].push(function(property, value) {
		if (property === 'beamColor') {
			X3DJSON.nodeUtil("Scene","FaceMaterial","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].beamColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].beamColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].beamColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FaceMaterial","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].beamColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].beamColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].beamColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION']['ACTION']['wireframeChoice'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION']['ACTION']['wireframeChoice'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION']['ACTION']['wireframeChoice'].push(function(property, value) {
		if (property === 'wireframeChoice') {
			X3DJSON.nodeUtil("Scene","WIREFRAME_SWITCH","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].wireframeChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].wireframeChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].wireframeChoice, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","WIREFRAME_SWITCH","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].wireframeChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].wireframeChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].wireframeChoice, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION']['ACTION']['solidChoice'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION']['ACTION']['solidChoice'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION']['ACTION']['solidChoice'].push(function(property, value) {
		if (property === 'solidChoice') {
			X3DJSON.nodeUtil("Scene","SOLID_SWITCH","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].solidChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].solidChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].solidChoice, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SOLID_SWITCH","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].solidChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].solidChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].solidChoice, __eventTime);
			X3DJSON.nodeUtil("Scene","BEAM_CONTROL","scale",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'].beamScale === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'].beamScale() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'].beamScale, __eventTime);
			X3DJSON.nodeUtil("Scene","BeamPatternCoordinatePoints","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'].coordinatePoints === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'].coordinatePoints() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['BEAM_CALCULATE'].coordinatePoints, __eventTime);
			X3DJSON.nodeUtil("Scene","WireMaterial","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].beamColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].beamColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].beamColor, __eventTime);
			X3DJSON.nodeUtil("Scene","FaceMaterial","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].beamColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].beamColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].beamColor, __eventTime);
			X3DJSON.nodeUtil("Scene","WIREFRAME_SWITCH","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].wireframeChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].wireframeChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].wireframeChoice, __eventTime);
			X3DJSON.nodeUtil("Scene","SOLID_SWITCH","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].solidChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].solidChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/SideScanSonarPrototype.json']['DETECTION'].solidChoice, __eventTime);