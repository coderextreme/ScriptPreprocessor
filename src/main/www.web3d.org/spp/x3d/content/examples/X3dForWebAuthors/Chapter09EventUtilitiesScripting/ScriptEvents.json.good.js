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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'] = function() {
	this.set_angle = function (value) {
		try {
			this.proxy.angle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting angle '+e);
			console.error('Problems setting angle',e);
		}
	};
	this.angle_changed = function () {
		var value = this.angle;
		return value;
	};
	try {
		this.angle = new SFFloat();
	} catch (e) {
		console.log('Problems setting angle '+e);
		console.error('Problems setting angle',e);
	}
	this.set_positionRed = function (value) {
		try {
			this.proxy.positionRed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting positionRed '+e);
			console.error('Problems setting positionRed',e);
		}
	};
	this.positionRed_changed = function () {
		var value = this.positionRed;
		return value;
	};
	try {
		this.positionRed = new SFVec3f();
	} catch (e) {
		console.log('Problems setting positionRed '+e);
		console.error('Problems setting positionRed',e);
	}
	this.set_positionGreen = function (value) {
		try {
			this.proxy.positionGreen = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting positionGreen '+e);
			console.error('Problems setting positionGreen',e);
		}
	};
	this.positionGreen_changed = function () {
		var value = this.positionGreen;
		return value;
	};
	try {
		this.positionGreen = new SFVec3f();
	} catch (e) {
		console.log('Problems setting positionGreen '+e);
		console.error('Problems setting positionGreen',e);
	}
	this.set_positionTurquoise = function (value) {
		try {
			this.proxy.positionTurquoise = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting positionTurquoise '+e);
			console.error('Problems setting positionTurquoise',e);
		}
	};
	this.positionTurquoise_changed = function () {
		var value = this.positionTurquoise;
		return value;
	};
	try {
		this.positionTurquoise = new SFVec3f();
	} catch (e) {
		console.log('Problems setting positionTurquoise '+e);
		console.error('Problems setting positionTurquoise',e);
	}
	this.set_orientationRed = function (value) {
		try {
			this.proxy.orientationRed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting orientationRed '+e);
			console.error('Problems setting orientationRed',e);
		}
	};
	this.orientationRed_changed = function () {
		var value = this.orientationRed;
		return value;
	};
	try {
		this.orientationRed = new SFRotation();
	} catch (e) {
		console.log('Problems setting orientationRed '+e);
		console.error('Problems setting orientationRed',e);
	}
	this.set_orientationGreen = function (value) {
		try {
			this.proxy.orientationGreen = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting orientationGreen '+e);
			console.error('Problems setting orientationGreen',e);
		}
	};
	this.orientationGreen_changed = function () {
		var value = this.orientationGreen;
		return value;
	};
	try {
		this.orientationGreen = new SFRotation();
	} catch (e) {
		console.log('Problems setting orientationGreen '+e);
		console.error('Problems setting orientationGreen',e);
	}
	this.set_orientationTurquoise = function (value) {
		try {
			this.proxy.orientationTurquoise = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting orientationTurquoise '+e);
			console.error('Problems setting orientationTurquoise',e);
		}
	};
	this.orientationTurquoise_changed = function () {
		var value = this.orientationTurquoise;
		return value;
	};
	try {
		this.orientationTurquoise = new SFRotation();
	} catch (e) {
		console.log('Problems setting orientationTurquoise '+e);
		console.error('Problems setting orientationTurquoise',e);
	}


ecmascript:

//  this input functino receives the currently interpolated rotation angle value,
//  and then computes the position and orientation of each of the cones.

	this.angle = function (value)
{
  this.proxy.positionRed       = new SFVec3f (Math.cos (value), 1.5 * Math.sin(value), 0.5);
  this.proxy.positionGreen     = new SFVec3f (Math.cos (value+2.094), 1.5 * Math.sin(value+2.094),    0);
  this.proxy.positionTurquoise = new SFVec3f (Math.cos (value+4.189), 1.5 * Math.sin(value+4.189), -0.5);

  // The values 2.094 and 4.189 are 1/3 and 2/3 of 2*pi radians.
  this.proxy.orientationRed       = new SFRotation (0, 0, 1, -2*value);
  this.proxy.orientationGreen     = new SFRotation (0, 0, 1, -2*(value+2.094));
  this.proxy.orientationTurquoise = new SFRotation (0, 0, 1, -2*(value+4.189));
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].initialize();
    if (X3DJSON.nodeUtil("Scene","AngleGenerator")) {
X3DJSON.nodeUtil("Scene","AngleGenerator").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].angle(X3DJSON.nodeUtil("Scene","AngleGenerator","value"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].angle(X3DJSON.nodeUtil("Scene","AngleGenerator","value"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","SpinAngleTimer")) {
X3DJSON.nodeUtil("Scene","SpinAngleTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PumpTouched")) {
X3DJSON.nodeUtil("Scene","PumpTouched").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TouchFilter")) {
X3DJSON.nodeUtil("Scene","TouchFilter").addEventListener('outputchange', function(event) {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript']['ACTION']['positionRed'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript']['ACTION']['positionRed'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript']['ACTION']['positionRed'].push(function(property, value) {
		if (property === 'positionRed') {
			X3DJSON.nodeUtil("Scene","RedTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].positionRed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].positionRed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].positionRed, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RedTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].positionRed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].positionRed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].positionRed, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript']['ACTION']['positionGreen'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript']['ACTION']['positionGreen'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript']['ACTION']['positionGreen'].push(function(property, value) {
		if (property === 'positionGreen') {
			X3DJSON.nodeUtil("Scene","GreenTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].positionGreen === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].positionGreen() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].positionGreen, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","GreenTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].positionGreen === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].positionGreen() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].positionGreen, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript']['ACTION']['positionTurquoise'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript']['ACTION']['positionTurquoise'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript']['ACTION']['positionTurquoise'].push(function(property, value) {
		if (property === 'positionTurquoise') {
			X3DJSON.nodeUtil("Scene","TurquoiseTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].positionTurquoise === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].positionTurquoise() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].positionTurquoise, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TurquoiseTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].positionTurquoise === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].positionTurquoise() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].positionTurquoise, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript']['ACTION']['orientationRed'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript']['ACTION']['orientationRed'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript']['ACTION']['orientationRed'].push(function(property, value) {
		if (property === 'orientationRed') {
			X3DJSON.nodeUtil("Scene","RedTransform","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].orientationRed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].orientationRed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].orientationRed, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RedTransform","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].orientationRed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].orientationRed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].orientationRed, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript']['ACTION']['orientationGreen'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript']['ACTION']['orientationGreen'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript']['ACTION']['orientationGreen'].push(function(property, value) {
		if (property === 'orientationGreen') {
			X3DJSON.nodeUtil("Scene","GreenTransform","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].orientationGreen === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].orientationGreen() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].orientationGreen, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","GreenTransform","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].orientationGreen === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].orientationGreen() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].orientationGreen, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript']['ACTION']['orientationTurquoise'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript']['ACTION']['orientationTurquoise'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript']['ACTION']['orientationTurquoise'].push(function(property, value) {
		if (property === 'orientationTurquoise') {
			X3DJSON.nodeUtil("Scene","TurquoiseTransform","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].orientationTurquoise === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].orientationTurquoise() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].orientationTurquoise, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TurquoiseTransform","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].orientationTurquoise === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].orientationTurquoise() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].orientationTurquoise, __eventTime);
    if (X3DJSON.nodeUtil("Scene","TouchFilter")) {
X3DJSON.nodeUtil("Scene","TouchFilter").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PistonClock")) {
X3DJSON.nodeUtil("Scene","PistonClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PistonPath")) {
X3DJSON.nodeUtil("Scene","PistonPath").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PistonClock")) {
X3DJSON.nodeUtil("Scene","PistonClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Rocker1Path")) {
X3DJSON.nodeUtil("Scene","Rocker1Path").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PistonClock")) {
X3DJSON.nodeUtil("Scene","PistonClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Rocker1Rotation")) {
X3DJSON.nodeUtil("Scene","Rocker1Rotation").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PistonClock")) {
X3DJSON.nodeUtil("Scene","PistonClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Rocker2Path")) {
X3DJSON.nodeUtil("Scene","Rocker2Path").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PistonClock")) {
X3DJSON.nodeUtil("Scene","PistonClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Rocker2Rotation")) {
X3DJSON.nodeUtil("Scene","Rocker2Rotation").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].angle(X3DJSON.nodeUtil("Scene","AngleGenerator","value"), __eventTime);
			X3DJSON.nodeUtil("Scene","RedTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].positionRed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].positionRed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].positionRed, __eventTime);
			X3DJSON.nodeUtil("Scene","GreenTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].positionGreen === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].positionGreen() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].positionGreen, __eventTime);
			X3DJSON.nodeUtil("Scene","TurquoiseTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].positionTurquoise === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].positionTurquoise() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].positionTurquoise, __eventTime);
			X3DJSON.nodeUtil("Scene","RedTransform","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].orientationRed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].orientationRed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].orientationRed, __eventTime);
			X3DJSON.nodeUtil("Scene","GreenTransform","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].orientationGreen === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].orientationGreen() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].orientationGreen, __eventTime);
			X3DJSON.nodeUtil("Scene","TurquoiseTransform","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].orientationTurquoise === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].orientationTurquoise() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter09EventUtilitiesScripting/ScriptEvents.json']['ControlScript'].orientationTurquoise, __eventTime);