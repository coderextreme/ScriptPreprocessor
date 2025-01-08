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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'] = function() {
	this.set_name = function (value) {
		try {
			this.proxy.name = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting name '+e);
			console.error('Problems setting name',e);
		}
	};
	this.name_changed = function () {
		var value = this.name;
		return value;
	};
	try {
		this.name = new SFString();
	} catch (e) {
		console.log('Problems setting name '+e);
		console.error('Problems setting name',e);
	}
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
	this.set_trace = function (value) {
		try {
			this.proxy.trace = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting trace '+e);
			console.error('Problems setting trace',e);
		}
	};
	this.trace_changed = function () {
		var value = this.trace;
		return value;
	};
	try {
		this.trace = new SFBool(false);
	} catch (e) {
		console.log('Problems setting trace '+e);
		console.error('Problems setting trace',e);
	}


ecmascript:
	this.initialize = function ()
{
	this.proxy.beamColor = this.proxy.noContactColor;
	if (this.proxy.wireframe == true) this.proxy.wireframeChoice = 1;
	if (this.proxy.solid     == true) this.proxy.solidChoice     = 1;
	if (this.proxy.trace) console.error ('[BeamHemisphere ' + this.proxy.name + '] this.proxy.trace=' + this.proxy.trace + '');
	if (this.proxy.trace) console.error ('[BeamHemisphere ' + this.proxy.name + '] this.proxy.wireframeChoice=' + this.proxy.wireframeChoice + ', this.proxy.solidChoice=' + this.proxy.solidChoice + '');
	if (this.proxy.trace) console.error ('[BeamHemisphere ' + this.proxy.name + '] this.proxy.contactColor=' + this.proxy.contactColor.toString() + ', this.proxy.noContactColor=' + this.proxy.noContactColor.toString() + '');
};

	this.contact = function (newDetect, timeStamp)
{
	if (newDetect) this.proxy.beamColor = this.proxy.contactColor;
	else           this.proxy.beamColor = this.proxy.noContactColor;
	if (this.proxy.trace) console.error ('[BeamHemisphere ' + this.proxy.name + '] this.proxy.contact=' + newDetect + ', this.proxy.beamColor=' + this.proxy.beamColor.toString() + '');
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'] = function() {
	this.set_name = function (value) {
		try {
			this.proxy.name = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting name '+e);
			console.error('Problems setting name',e);
		}
	};
	this.name_changed = function () {
		var value = this.name;
		return value;
	};
	try {
		this.name = new SFString();
	} catch (e) {
		console.log('Problems setting name '+e);
		console.error('Problems setting name',e);
	}
	this.set_range = function (value) {
		try {
			this.proxy.range = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting range '+e);
			console.error('Problems setting range',e);
		}
	};
	this.range_changed = function () {
		var value = this.range;
		return value;
	};
	try {
		this.range = new SFFloat();
	} catch (e) {
		console.log('Problems setting range '+e);
		console.error('Problems setting range',e);
	}
	this.set_defaultRange = function (value) {
		try {
			this.proxy.defaultRange = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting defaultRange '+e);
			console.error('Problems setting defaultRange',e);
		}
	};
	this.defaultRange_changed = function () {
		var value = this.defaultRange;
		return value;
	};
	try {
		this.defaultRange = new SFFloat();
	} catch (e) {
		console.log('Problems setting defaultRange '+e);
		console.error('Problems setting defaultRange',e);
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
	this.set_direction = function (value) {
		try {
			this.proxy.direction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting direction '+e);
			console.error('Problems setting direction',e);
		}
	};
	this.direction_changed = function () {
		var value = this.direction;
		return value;
	};
	try {
		this.direction = new SFRotation();
	} catch (e) {
		console.log('Problems setting direction '+e);
		console.error('Problems setting direction',e);
	}
	this.set_trace = function (value) {
		try {
			this.proxy.trace = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting trace '+e);
			console.error('Problems setting trace',e);
		}
	};
	this.trace_changed = function () {
		var value = this.trace;
		return value;
	};
	try {
		this.trace = new SFBool(false);
	} catch (e) {
		console.log('Problems setting trace '+e);
		console.error('Problems setting trace',e);
	}


ecmascript:
	this.initialize = function ()
{
	// Note that VRML scale factor triplets all equal to zero are not allowed
	if (this.proxy.defaultRange == 0)      this.proxy.defaultRange = .0001;
	this.proxy.beamScale = new SFVec3f (this.proxy.defaultRange, this.proxy.defaultRange, this.proxy.defaultRange);
	if (this.proxy.trace) ('[BeamHemisphere ' + this.proxy.name + '] initial this.proxy.beamScale=', this.proxy.beamScale.toString());
};

	this.range = function (newRange, timeStamp)
{
	if (newRange < 0)
	{
		this.proxy.direction     = new SFRotation (1, 0, 0, 3.141592653);
		this.proxy.beamScale = new SFVec3f (-newRange, -newRange, -newRange);
	}
	else if (newRange == 0)
	{
		this.proxy.direction     = new SFRotation (1, 0, 0, 0);
		this.proxy.beamScale = new SFVec3f ( .0001, .0001, .0001 );  // zero scale is illegal
	}
	else // (newRange > 0)
	{
		this.proxy.direction     = new SFRotation (1, 0, 0, 0);
		this.proxy.beamScale = new SFVec3f (newRange, newRange, newRange);
	}
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION']['ACTION']['beamColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION']['ACTION']['beamColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION']['ACTION']['beamColor'].push(function(property, value) {
		if (property === 'beamColor') {
			X3DJSON.nodeUtil("Scene","WIRE_COLOR","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].beamColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].beamColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].beamColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","WIRE_COLOR","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].beamColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].beamColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].beamColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION']['ACTION']['beamColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION']['ACTION']['beamColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION']['ACTION']['beamColor'].push(function(property, value) {
		if (property === 'beamColor') {
			X3DJSON.nodeUtil("Scene","CYLINDER_COLOR","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].beamColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].beamColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].beamColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","CYLINDER_COLOR","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].beamColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].beamColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].beamColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION']['ACTION']['beamColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION']['ACTION']['beamColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION']['ACTION']['beamColor'].push(function(property, value) {
		if (property === 'beamColor') {
			X3DJSON.nodeUtil("Scene","CAP_COLOR","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].beamColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].beamColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].beamColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","CAP_COLOR","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].beamColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].beamColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].beamColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION']['ACTION']['wireframeChoice'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION']['ACTION']['wireframeChoice'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION']['ACTION']['wireframeChoice'].push(function(property, value) {
		if (property === 'wireframeChoice') {
			X3DJSON.nodeUtil("Scene","WIREFRAME_SWITCH","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].wireframeChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].wireframeChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].wireframeChoice, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","WIREFRAME_SWITCH","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].wireframeChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].wireframeChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].wireframeChoice, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION']['ACTION']['solidChoice'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION']['ACTION']['solidChoice'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION']['ACTION']['solidChoice'].push(function(property, value) {
		if (property === 'solidChoice') {
			X3DJSON.nodeUtil("Scene","SOLID_SWITCH","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].solidChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].solidChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].solidChoice, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SOLID_SWITCH","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].solidChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].solidChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].solidChoice, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION']['ACTION']['solidChoice'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION']['ACTION']['solidChoice'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION']['ACTION']['solidChoice'].push(function(property, value) {
		if (property === 'solidChoice') {
			X3DJSON.nodeUtil("Scene","CAP_SWITCH","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].solidChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].solidChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].solidChoice, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","CAP_SWITCH","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].solidChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].solidChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].solidChoice, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE']['ACTION']['beamScale'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE']['ACTION']['beamScale'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE']['ACTION']['beamScale'].push(function(property, value) {
		if (property === 'beamScale') {
			X3DJSON.nodeUtil("Scene","BEAM_CONTROL","scale",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'].beamScale === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'].beamScale() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'].beamScale, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BEAM_CONTROL","scale",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'].beamScale === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'].beamScale() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'].beamScale, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE']['ACTION']['direction'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE']['ACTION']['direction'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE']['ACTION']['direction'].push(function(property, value) {
		if (property === 'direction') {
			X3DJSON.nodeUtil("Scene","BEAM_CONTROL","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'].direction === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'].direction() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'].direction, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BEAM_CONTROL","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'].direction === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'].direction() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'].direction, __eventTime);
			X3DJSON.nodeUtil("Scene","WIRE_COLOR","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].beamColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].beamColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].beamColor, __eventTime);
			X3DJSON.nodeUtil("Scene","CYLINDER_COLOR","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].beamColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].beamColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].beamColor, __eventTime);
			X3DJSON.nodeUtil("Scene","CAP_COLOR","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].beamColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].beamColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].beamColor, __eventTime);
			X3DJSON.nodeUtil("Scene","WIREFRAME_SWITCH","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].wireframeChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].wireframeChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].wireframeChoice, __eventTime);
			X3DJSON.nodeUtil("Scene","SOLID_SWITCH","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].solidChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].solidChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].solidChoice, __eventTime);
			X3DJSON.nodeUtil("Scene","CAP_SWITCH","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].solidChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].solidChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['DETECTION'].solidChoice, __eventTime);
			X3DJSON.nodeUtil("Scene","BEAM_CONTROL","scale",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'].beamScale === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'].beamScale() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'].beamScale, __eventTime);
			X3DJSON.nodeUtil("Scene","BEAM_CONTROL","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'].direction === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'].direction() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Beam/BeamHemispherePrototype.json']['BEAM_CALCULATE'].direction, __eventTime);