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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'] = function() {
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
		this.ST725Range = undefined;
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
		this.ST725Bearing = undefined;
	} catch (e) {
		console.log('Problems setting ST725Bearing '+e);
		console.error('Problems setting ST725Bearing',e);
	}
	this.set_ST725Intensity = function (value) {
		try {
			this.proxy.ST725Intensity = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ST725Intensity '+e);
			console.error('Problems setting ST725Intensity',e);
		}
	};
	this.ST725Intensity_changed = function () {
		var value = this.ST725Intensity;
		return value;
	};
	try {
		this.ST725Intensity = new SFFloat();
	} catch (e) {
		console.log('Problems setting ST725Intensity '+e);
		console.error('Problems setting ST725Intensity',e);
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
		this.ST1000Range = undefined;
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
		this.ST1000Bearing = undefined;
	} catch (e) {
		console.log('Problems setting ST1000Bearing '+e);
		console.error('Problems setting ST1000Bearing',e);
	}
	this.set_ST1000Intensity = function (value) {
		try {
			this.proxy.ST1000Intensity = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ST1000Intensity '+e);
			console.error('Problems setting ST1000Intensity',e);
		}
	};
	this.ST1000Intensity_changed = function () {
		var value = this.ST1000Intensity;
		return value;
	};
	try {
		this.ST1000Intensity = new SFFloat();
	} catch (e) {
		console.log('Problems setting ST1000Intensity '+e);
		console.error('Problems setting ST1000Intensity',e);
	}
	this.set_ST725Rotation = function (value) {
		try {
			this.proxy.ST725Rotation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ST725Rotation '+e);
			console.error('Problems setting ST725Rotation',e);
		}
	};
	this.ST725Rotation_changed = function () {
		var value = this.ST725Rotation;
		return value;
	};
	try {
		this.ST725Rotation = new SFRotation();
	} catch (e) {
		console.log('Problems setting ST725Rotation '+e);
		console.error('Problems setting ST725Rotation',e);
	}
	this.set_ST1000Rotation = function (value) {
		try {
			this.proxy.ST1000Rotation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ST1000Rotation '+e);
			console.error('Problems setting ST1000Rotation',e);
		}
	};
	this.ST1000Rotation_changed = function () {
		var value = this.ST1000Rotation;
		return value;
	};
	try {
		this.ST1000Rotation = new SFRotation();
	} catch (e) {
		console.log('Problems setting ST1000Rotation '+e);
		console.error('Problems setting ST1000Rotation',e);
	}
	this.set_ST725Contact = function (value) {
		try {
			this.proxy.ST725Contact = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ST725Contact '+e);
			console.error('Problems setting ST725Contact',e);
		}
	};
	this.ST725Contact_changed = function () {
		var value = this.ST725Contact;
		return value;
	};
	try {
		this.ST725Contact = new SFBool();
	} catch (e) {
		console.log('Problems setting ST725Contact '+e);
		console.error('Problems setting ST725Contact',e);
	}
	this.set_ST1000Contact = function (value) {
		try {
			this.proxy.ST1000Contact = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ST1000Contact '+e);
			console.error('Problems setting ST1000Contact',e);
		}
	};
	this.ST1000Contact_changed = function () {
		var value = this.ST1000Contact;
		return value;
	};
	try {
		this.ST1000Contact = new SFBool();
	} catch (e) {
		console.log('Problems setting ST1000Contact '+e);
		console.error('Problems setting ST1000Contact',e);
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
		this.ST725Range = undefined;
	} catch (e) {
		console.log('Problems setting ST725Range '+e);
		console.error('Problems setting ST725Range',e);
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
		this.ST1000Range = undefined;
	} catch (e) {
		console.log('Problems setting ST1000Range '+e);
		console.error('Problems setting ST1000Range',e);
	}
	this.set_ST725Intensity = function (value) {
		try {
			this.proxy.ST725Intensity = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ST725Intensity '+e);
			console.error('Problems setting ST725Intensity',e);
		}
	};
	this.ST725Intensity_changed = function () {
		var value = this.ST725Intensity;
		return value;
	};
	try {
		this.ST725Intensity = new SFFloat();
	} catch (e) {
		console.log('Problems setting ST725Intensity '+e);
		console.error('Problems setting ST725Intensity',e);
	}
	this.set_ST1000Intensity = function (value) {
		try {
			this.proxy.ST1000Intensity = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ST1000Intensity '+e);
			console.error('Problems setting ST1000Intensity',e);
		}
	};
	this.ST1000Intensity_changed = function () {
		var value = this.ST1000Intensity;
		return value;
	};
	try {
		this.ST1000Intensity = new SFFloat();
	} catch (e) {
		console.log('Problems setting ST1000Intensity '+e);
		console.error('Problems setting ST1000Intensity',e);
	}


ecmascript:

	this.degreeToRadian = function ( value )
{
   return value * Math.PI / 180;
}
;

	this.set_ST725Range = function (value, timeStamp)
{
   if ((value > 0) && (value < 30.0))
   {
      this.proxy.ST725Contact = true;
      this.proxy.ST725Range_changed = value;
   }
   else
   {
      this.proxy.ST725Contact = false;
      if ( value < 0 )
         this.proxy.ST725Range_changed = 0.0;
      else
         this.proxy.ST725Range_changed = 30.0;
   }
};

	this.set_ST725Bearing = function (value, timeStamp)
{
   this.proxy.ST725Rotation = new SFRotation(0, 1, 0, this.degreeToRadian(value));
};

	this.set_ST725Intensity = function (value, timeStamp)
{
   this.proxy.ST725Intensity = new SFFloat(value);
}
;

	this.set_ST1000Range = function (value, timeStamp)
{
   if ((value > 0) && (value < 30.0))
   {
      this.proxy.ST1000Contact = true;
      this.proxy.ST1000Range_changed = value;
   }
   else
   {
      this.proxy.ST1000Contact = false;
      if ( value < 0 )
         this.proxy.ST1000Range_changed = 0.0;
      else
         this.proxy.ST1000Range_changed = 30.0;
   }
};

	this.set_ST1000Bearing = function (value, timeStamp)
{
   this.proxy.ST1000Rotation = new SFRotation(0, 1, 0, this.degreeToRadian(value));
};

	this.set_ST1000Intensity = function (value, timeStamp)
{
   this.proxy.ST1000Intensity = new SFFloat(value);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'] = function() {
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
		this.forwardRudders = undefined;
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
		this.afterRudders = undefined;
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
		this.forwardPlanes = undefined;
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
		this.afterPlanes = undefined;
	} catch (e) {
		console.log('Problems setting afterPlanes '+e);
		console.error('Problems setting afterPlanes',e);
	}
	this.set_forwardRuddersRotation = function (value) {
		try {
			this.proxy.forwardRuddersRotation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting forwardRuddersRotation '+e);
			console.error('Problems setting forwardRuddersRotation',e);
		}
	};
	this.forwardRuddersRotation_changed = function () {
		var value = this.forwardRuddersRotation;
		return value;
	};
	try {
		this.forwardRuddersRotation = new SFRotation();
	} catch (e) {
		console.log('Problems setting forwardRuddersRotation '+e);
		console.error('Problems setting forwardRuddersRotation',e);
	}
	this.set_afterRuddersRotation = function (value) {
		try {
			this.proxy.afterRuddersRotation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting afterRuddersRotation '+e);
			console.error('Problems setting afterRuddersRotation',e);
		}
	};
	this.afterRuddersRotation_changed = function () {
		var value = this.afterRuddersRotation;
		return value;
	};
	try {
		this.afterRuddersRotation = new SFRotation();
	} catch (e) {
		console.log('Problems setting afterRuddersRotation '+e);
		console.error('Problems setting afterRuddersRotation',e);
	}
	this.set_forwardPlanesRotation = function (value) {
		try {
			this.proxy.forwardPlanesRotation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting forwardPlanesRotation '+e);
			console.error('Problems setting forwardPlanesRotation',e);
		}
	};
	this.forwardPlanesRotation_changed = function () {
		var value = this.forwardPlanesRotation;
		return value;
	};
	try {
		this.forwardPlanesRotation = new SFRotation();
	} catch (e) {
		console.log('Problems setting forwardPlanesRotation '+e);
		console.error('Problems setting forwardPlanesRotation',e);
	}
	this.set_afterPlanesRotation = function (value) {
		try {
			this.proxy.afterPlanesRotation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting afterPlanesRotation '+e);
			console.error('Problems setting afterPlanesRotation',e);
		}
	};
	this.afterPlanesRotation_changed = function () {
		var value = this.afterPlanesRotation;
		return value;
	};
	try {
		this.afterPlanesRotation = new SFRotation();
	} catch (e) {
		console.log('Problems setting afterPlanesRotation '+e);
		console.error('Problems setting afterPlanesRotation',e);
	}


ecmascript:

	this.set_forwardRudders = function (value, timeStamp) {
   this.proxy.forwardRuddersRotation = new SFRotation(0, 1, 0, value);
}
;

	this.set_afterRudders = function (value, timeStamp) {
   this.proxy.afterRuddersRotation = new SFRotation(0, 1, 0, value);
}
;

	this.set_forwardPlanes = function (value, timeStamp) {
   this.proxy.forwardPlanesRotation = new SFRotation(0, 0, 1, value);
}
;

	this.set_afterPlanes = function (value, timeStamp) {
   this.proxy.afterPlanesRotation = new SFRotation(0, 0, 1, value);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'] = function() {
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
		this.forwardVerticalThruster = undefined;
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
		this.afterVerticalThruster = undefined;
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
		this.forwardLateralThruster = undefined;
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
		this.afterLateralThruster = undefined;
	} catch (e) {
		console.log('Problems setting afterLateralThruster '+e);
		console.error('Problems setting afterLateralThruster',e);
	}
	this.set_forwardVerticalThrusterBeamTranslation = function (value) {
		try {
			this.proxy.forwardVerticalThrusterBeamTranslation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting forwardVerticalThrusterBeamTranslation '+e);
			console.error('Problems setting forwardVerticalThrusterBeamTranslation',e);
		}
	};
	this.forwardVerticalThrusterBeamTranslation_changed = function () {
		var value = this.forwardVerticalThrusterBeamTranslation;
		return value;
	};
	try {
		this.forwardVerticalThrusterBeamTranslation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting forwardVerticalThrusterBeamTranslation '+e);
		console.error('Problems setting forwardVerticalThrusterBeamTranslation',e);
	}
	this.set_forwardVerticalThrusterBeamRange = function (value) {
		try {
			this.proxy.forwardVerticalThrusterBeamRange = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting forwardVerticalThrusterBeamRange '+e);
			console.error('Problems setting forwardVerticalThrusterBeamRange',e);
		}
	};
	this.forwardVerticalThrusterBeamRange_changed = function () {
		var value = this.forwardVerticalThrusterBeamRange;
		return value;
	};
	try {
		this.forwardVerticalThrusterBeamRange = new SFFloat();
	} catch (e) {
		console.log('Problems setting forwardVerticalThrusterBeamRange '+e);
		console.error('Problems setting forwardVerticalThrusterBeamRange',e);
	}
	this.set_afterVerticalThrusterBeamTranslation = function (value) {
		try {
			this.proxy.afterVerticalThrusterBeamTranslation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting afterVerticalThrusterBeamTranslation '+e);
			console.error('Problems setting afterVerticalThrusterBeamTranslation',e);
		}
	};
	this.afterVerticalThrusterBeamTranslation_changed = function () {
		var value = this.afterVerticalThrusterBeamTranslation;
		return value;
	};
	try {
		this.afterVerticalThrusterBeamTranslation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting afterVerticalThrusterBeamTranslation '+e);
		console.error('Problems setting afterVerticalThrusterBeamTranslation',e);
	}
	this.set_afterVerticalThrusterBeamRange = function (value) {
		try {
			this.proxy.afterVerticalThrusterBeamRange = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting afterVerticalThrusterBeamRange '+e);
			console.error('Problems setting afterVerticalThrusterBeamRange',e);
		}
	};
	this.afterVerticalThrusterBeamRange_changed = function () {
		var value = this.afterVerticalThrusterBeamRange;
		return value;
	};
	try {
		this.afterVerticalThrusterBeamRange = new SFFloat();
	} catch (e) {
		console.log('Problems setting afterVerticalThrusterBeamRange '+e);
		console.error('Problems setting afterVerticalThrusterBeamRange',e);
	}
	this.set_forwardLateralThrusterBeamTranslation = function (value) {
		try {
			this.proxy.forwardLateralThrusterBeamTranslation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting forwardLateralThrusterBeamTranslation '+e);
			console.error('Problems setting forwardLateralThrusterBeamTranslation',e);
		}
	};
	this.forwardLateralThrusterBeamTranslation_changed = function () {
		var value = this.forwardLateralThrusterBeamTranslation;
		return value;
	};
	try {
		this.forwardLateralThrusterBeamTranslation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting forwardLateralThrusterBeamTranslation '+e);
		console.error('Problems setting forwardLateralThrusterBeamTranslation',e);
	}
	this.set_forwardLateralThrusterBeamRange = function (value) {
		try {
			this.proxy.forwardLateralThrusterBeamRange = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting forwardLateralThrusterBeamRange '+e);
			console.error('Problems setting forwardLateralThrusterBeamRange',e);
		}
	};
	this.forwardLateralThrusterBeamRange_changed = function () {
		var value = this.forwardLateralThrusterBeamRange;
		return value;
	};
	try {
		this.forwardLateralThrusterBeamRange = new SFFloat();
	} catch (e) {
		console.log('Problems setting forwardLateralThrusterBeamRange '+e);
		console.error('Problems setting forwardLateralThrusterBeamRange',e);
	}
	this.set_afterLateralThrusterBeamTranslation = function (value) {
		try {
			this.proxy.afterLateralThrusterBeamTranslation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting afterLateralThrusterBeamTranslation '+e);
			console.error('Problems setting afterLateralThrusterBeamTranslation',e);
		}
	};
	this.afterLateralThrusterBeamTranslation_changed = function () {
		var value = this.afterLateralThrusterBeamTranslation;
		return value;
	};
	try {
		this.afterLateralThrusterBeamTranslation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting afterLateralThrusterBeamTranslation '+e);
		console.error('Problems setting afterLateralThrusterBeamTranslation',e);
	}
	this.set_afterLateralThrusterBeamRange = function (value) {
		try {
			this.proxy.afterLateralThrusterBeamRange = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting afterLateralThrusterBeamRange '+e);
			console.error('Problems setting afterLateralThrusterBeamRange',e);
		}
	};
	this.afterLateralThrusterBeamRange_changed = function () {
		var value = this.afterLateralThrusterBeamRange;
		return value;
	};
	try {
		this.afterLateralThrusterBeamRange = new SFFloat();
	} catch (e) {
		console.log('Problems setting afterLateralThrusterBeamRange '+e);
		console.error('Problems setting afterLateralThrusterBeamRange',e);
	}


ecmascript:

	this.set_forwardVerticalThruster = function (value, timeStamp) {
   if (value >= 0)
      this.proxy.forwardVerticalThrusterBeamTranslation = new SFVec3f(0, .145, 0);
   else
      this.proxy.forwardVerticalThrusterBeamTranslation = new SFVec3f(0, -0.145 + value, 0);

   this.proxy.forwardVerticalThrusterBeamRange = value;
}
;

	this.set_afterVerticalThruster = function (value, timeStamp) {
   if (value >= 0)
      this.proxy.afterVerticalThrusterBeamTranslation = new SFVec3f(0, .145, 0);
   else
      this.proxy.afterVerticalThrusterBeamTranslation = new SFVec3f(0, -0.145 + value, 0);

   this.proxy.afterVerticalThrusterBeamRange = value;
}
;

	this.set_forwardLateralThruster = function (value, timeStamp) {
   if (value >= 0)
      this.proxy.forwardLateralThrusterBeamTranslation = new SFVec3f(0, .21, 0);
   else
      this.proxy.forwardLateralThrusterBeamTranslation = new SFVec3f(0, -0.21 + value, 0);

   this.proxy.forwardLateralThrusterBeamRange = value;
}
;

	this.set_afterLateralThruster = function (value, timeStamp) {
   if (value >= 0)
      this.proxy.afterLateralThrusterBeamTranslation = new SFVec3f(0, .21, 0);
   else
      this.proxy.afterLateralThrusterBeamTranslation = new SFVec3f(0, -0.21 + value, 0);

   this.proxy.afterLateralThrusterBeamRange = value;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']['ACTION']['ST725Rotation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']['ACTION']['ST725Rotation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']['ACTION']['ST725Rotation'].push(function(property, value) {
		if (property === 'ST725Rotation') {
			X3DJSON.nodeUtil("Scene","ST725","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Rotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Rotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Rotation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ST725","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Rotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Rotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Rotation, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']['ACTION']['ST1000Rotation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']['ACTION']['ST1000Rotation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']['ACTION']['ST1000Rotation'].push(function(property, value) {
		if (property === 'ST1000Rotation') {
			X3DJSON.nodeUtil("Scene","ST1000","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Rotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Rotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Rotation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ST1000","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Rotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Rotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Rotation, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']['ACTION']['ST725Contact'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']['ACTION']['ST725Contact'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']['ACTION']['ST725Contact'].push(function(property, value) {
		if (property === 'ST725Contact') {
			X3DJSON.nodeUtil("Scene","ST725BeamCone","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Contact === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Contact() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Contact, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ST725BeamCone","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Contact === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Contact() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Contact, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']['ACTION']['ST1000Contact'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']['ACTION']['ST1000Contact'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']['ACTION']['ST1000Contact'].push(function(property, value) {
		if (property === 'ST1000Contact') {
			X3DJSON.nodeUtil("Scene","ST1000BeamCone","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Contact === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Contact() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Contact, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ST1000BeamCone","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Contact === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Contact() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Contact, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']['ACTION']['ST725Range'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']['ACTION']['ST725Range'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']['ACTION']['ST725Range'].push(function(property, value) {
		if (property === 'ST725Range') {
			X3DJSON.nodeUtil("Scene","ST725BeamCone","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Range_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Range_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Range, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ST725BeamCone","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Range_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Range_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Range, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']['ACTION']['ST1000Range'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']['ACTION']['ST1000Range'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']['ACTION']['ST1000Range'].push(function(property, value) {
		if (property === 'ST1000Range') {
			X3DJSON.nodeUtil("Scene","ST1000BeamCone","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Range_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Range_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Range, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ST1000BeamCone","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Range_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Range_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Range, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']['ACTION']['ST725Intensity'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']['ACTION']['ST725Intensity'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']['ACTION']['ST725Intensity'].push(function(property, value) {
		if (property === 'ST725Intensity') {
			X3DJSON.nodeUtil("Scene","ST725BeamCone","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Intensity === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Intensity() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Intensity, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ST725BeamCone","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Intensity === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Intensity() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Intensity, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']['ACTION']['ST1000Intensity'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']['ACTION']['ST1000Intensity'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS']['ACTION']['ST1000Intensity'].push(function(property, value) {
		if (property === 'ST1000Intensity') {
			X3DJSON.nodeUtil("Scene","ST1000BeamCone","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Intensity === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Intensity() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Intensity, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ST1000BeamCone","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Intensity === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Intensity() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Intensity, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES']['ACTION']['forwardRuddersRotation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES']['ACTION']['forwardRuddersRotation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES']['ACTION']['forwardRuddersRotation'].push(function(property, value) {
		if (property === 'forwardRuddersRotation') {
			X3DJSON.nodeUtil("Scene","FORWARD_RUDDERS","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].forwardRuddersRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].forwardRuddersRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].forwardRuddersRotation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FORWARD_RUDDERS","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].forwardRuddersRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].forwardRuddersRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].forwardRuddersRotation, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES']['ACTION']['afterRuddersRotation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES']['ACTION']['afterRuddersRotation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES']['ACTION']['afterRuddersRotation'].push(function(property, value) {
		if (property === 'afterRuddersRotation') {
			X3DJSON.nodeUtil("Scene","AFTER_RUDDERS","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].afterRuddersRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].afterRuddersRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].afterRuddersRotation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AFTER_RUDDERS","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].afterRuddersRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].afterRuddersRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].afterRuddersRotation, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES']['ACTION']['forwardPlanesRotation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES']['ACTION']['forwardPlanesRotation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES']['ACTION']['forwardPlanesRotation'].push(function(property, value) {
		if (property === 'forwardPlanesRotation') {
			X3DJSON.nodeUtil("Scene","FORWARD_PLANES","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].forwardPlanesRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].forwardPlanesRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].forwardPlanesRotation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FORWARD_PLANES","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].forwardPlanesRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].forwardPlanesRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].forwardPlanesRotation, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES']['ACTION']['afterPlanesRotation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES']['ACTION']['afterPlanesRotation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES']['ACTION']['afterPlanesRotation'].push(function(property, value) {
		if (property === 'afterPlanesRotation') {
			X3DJSON.nodeUtil("Scene","AFTER_PLANES","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].afterPlanesRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].afterPlanesRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].afterPlanesRotation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AFTER_PLANES","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].afterPlanesRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].afterPlanesRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].afterPlanesRotation, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']['ACTION']['forwardVerticalThrusterBeamTranslation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']['ACTION']['forwardVerticalThrusterBeamTranslation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']['ACTION']['forwardVerticalThrusterBeamTranslation'].push(function(property, value) {
		if (property === 'forwardVerticalThrusterBeamTranslation') {
			X3DJSON.nodeUtil("Scene","FORWARD_VERTICAL_BEAMCONE","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardVerticalThrusterBeamTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardVerticalThrusterBeamTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardVerticalThrusterBeamTranslation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FORWARD_VERTICAL_BEAMCONE","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardVerticalThrusterBeamTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardVerticalThrusterBeamTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardVerticalThrusterBeamTranslation, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']['ACTION']['forwardVerticalThrusterBeamRange'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']['ACTION']['forwardVerticalThrusterBeamRange'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']['ACTION']['forwardVerticalThrusterBeamRange'].push(function(property, value) {
		if (property === 'forwardVerticalThrusterBeamRange') {
			X3DJSON.nodeUtil("Scene","ForwardVerticalBeamCone","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardVerticalThrusterBeamRange === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardVerticalThrusterBeamRange() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardVerticalThrusterBeamRange, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ForwardVerticalBeamCone","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardVerticalThrusterBeamRange === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardVerticalThrusterBeamRange() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardVerticalThrusterBeamRange, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']['ACTION']['afterVerticalThrusterBeamTranslation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']['ACTION']['afterVerticalThrusterBeamTranslation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']['ACTION']['afterVerticalThrusterBeamTranslation'].push(function(property, value) {
		if (property === 'afterVerticalThrusterBeamTranslation') {
			X3DJSON.nodeUtil("Scene","AFTER_VERTICAL_BEAMCONE","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterVerticalThrusterBeamTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterVerticalThrusterBeamTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterVerticalThrusterBeamTranslation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AFTER_VERTICAL_BEAMCONE","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterVerticalThrusterBeamTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterVerticalThrusterBeamTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterVerticalThrusterBeamTranslation, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']['ACTION']['afterVerticalThrusterBeamRange'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']['ACTION']['afterVerticalThrusterBeamRange'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']['ACTION']['afterVerticalThrusterBeamRange'].push(function(property, value) {
		if (property === 'afterVerticalThrusterBeamRange') {
			X3DJSON.nodeUtil("Scene","AfterVerticalBeamCone","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterVerticalThrusterBeamRange === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterVerticalThrusterBeamRange() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterVerticalThrusterBeamRange, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AfterVerticalBeamCone","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterVerticalThrusterBeamRange === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterVerticalThrusterBeamRange() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterVerticalThrusterBeamRange, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']['ACTION']['forwardLateralThrusterBeamTranslation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']['ACTION']['forwardLateralThrusterBeamTranslation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']['ACTION']['forwardLateralThrusterBeamTranslation'].push(function(property, value) {
		if (property === 'forwardLateralThrusterBeamTranslation') {
			X3DJSON.nodeUtil("Scene","FORWARD_LATERAL_BEAMCONE","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardLateralThrusterBeamTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardLateralThrusterBeamTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardLateralThrusterBeamTranslation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FORWARD_LATERAL_BEAMCONE","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardLateralThrusterBeamTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardLateralThrusterBeamTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardLateralThrusterBeamTranslation, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']['ACTION']['forwardLateralThrusterBeamRange'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']['ACTION']['forwardLateralThrusterBeamRange'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']['ACTION']['forwardLateralThrusterBeamRange'].push(function(property, value) {
		if (property === 'forwardLateralThrusterBeamRange') {
			X3DJSON.nodeUtil("Scene","ForwardLateralBeamCone","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardLateralThrusterBeamRange === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardLateralThrusterBeamRange() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardLateralThrusterBeamRange, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ForwardLateralBeamCone","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardLateralThrusterBeamRange === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardLateralThrusterBeamRange() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardLateralThrusterBeamRange, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']['ACTION']['afterLateralThrusterBeamTranslation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']['ACTION']['afterLateralThrusterBeamTranslation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']['ACTION']['afterLateralThrusterBeamTranslation'].push(function(property, value) {
		if (property === 'afterLateralThrusterBeamTranslation') {
			X3DJSON.nodeUtil("Scene","AFTER_LATERAL_BEAMCONE","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterLateralThrusterBeamTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterLateralThrusterBeamTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterLateralThrusterBeamTranslation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AFTER_LATERAL_BEAMCONE","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterLateralThrusterBeamTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterLateralThrusterBeamTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterLateralThrusterBeamTranslation, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']['ACTION']['afterLateralThrusterBeamRange'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']['ACTION']['afterLateralThrusterBeamRange'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES']['ACTION']['afterLateralThrusterBeamRange'].push(function(property, value) {
		if (property === 'afterLateralThrusterBeamRange') {
			X3DJSON.nodeUtil("Scene","AfterLateralBeamCone","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterLateralThrusterBeamRange === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterLateralThrusterBeamRange() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterLateralThrusterBeamRange, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AfterLateralBeamCone","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterLateralThrusterBeamRange === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterLateralThrusterBeamRange() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterLateralThrusterBeamRange, __eventTime);
			X3DJSON.nodeUtil("Scene","ST725","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Rotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Rotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Rotation, __eventTime);
			X3DJSON.nodeUtil("Scene","ST1000","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Rotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Rotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Rotation, __eventTime);
			X3DJSON.nodeUtil("Scene","ST725BeamCone","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Contact === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Contact() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Contact, __eventTime);
			X3DJSON.nodeUtil("Scene","ST1000BeamCone","contact",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Contact === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Contact() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Contact, __eventTime);
			X3DJSON.nodeUtil("Scene","ST725BeamCone","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Range_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Range_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Range, __eventTime);
			X3DJSON.nodeUtil("Scene","ST1000BeamCone","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Range_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Range_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Range, __eventTime);
			X3DJSON.nodeUtil("Scene","ST725BeamCone","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Intensity === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Intensity() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST725Intensity, __eventTime);
			X3DJSON.nodeUtil("Scene","ST1000BeamCone","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Intensity === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Intensity() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['SONAR_STEERING_AND_DETECTS'].ST1000Intensity, __eventTime);
			X3DJSON.nodeUtil("Scene","FORWARD_RUDDERS","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].forwardRuddersRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].forwardRuddersRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].forwardRuddersRotation, __eventTime);
			X3DJSON.nodeUtil("Scene","AFTER_RUDDERS","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].afterRuddersRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].afterRuddersRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].afterRuddersRotation, __eventTime);
			X3DJSON.nodeUtil("Scene","FORWARD_PLANES","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].forwardPlanesRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].forwardPlanesRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].forwardPlanesRotation, __eventTime);
			X3DJSON.nodeUtil("Scene","AFTER_PLANES","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].afterPlanesRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].afterPlanesRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['PLANE_SURFACES'].afterPlanesRotation, __eventTime);
			X3DJSON.nodeUtil("Scene","FORWARD_VERTICAL_BEAMCONE","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardVerticalThrusterBeamTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardVerticalThrusterBeamTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardVerticalThrusterBeamTranslation, __eventTime);
			X3DJSON.nodeUtil("Scene","ForwardVerticalBeamCone","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardVerticalThrusterBeamRange === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardVerticalThrusterBeamRange() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardVerticalThrusterBeamRange, __eventTime);
			X3DJSON.nodeUtil("Scene","AFTER_VERTICAL_BEAMCONE","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterVerticalThrusterBeamTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterVerticalThrusterBeamTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterVerticalThrusterBeamTranslation, __eventTime);
			X3DJSON.nodeUtil("Scene","AfterVerticalBeamCone","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterVerticalThrusterBeamRange === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterVerticalThrusterBeamRange() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterVerticalThrusterBeamRange, __eventTime);
			X3DJSON.nodeUtil("Scene","FORWARD_LATERAL_BEAMCONE","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardLateralThrusterBeamTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardLateralThrusterBeamTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardLateralThrusterBeamTranslation, __eventTime);
			X3DJSON.nodeUtil("Scene","ForwardLateralBeamCone","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardLateralThrusterBeamRange === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardLateralThrusterBeamRange() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].forwardLateralThrusterBeamRange, __eventTime);
			X3DJSON.nodeUtil("Scene","AFTER_LATERAL_BEAMCONE","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterLateralThrusterBeamTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterLateralThrusterBeamTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterLateralThrusterBeamTranslation, __eventTime);
			X3DJSON.nodeUtil("Scene","AfterLateralBeamCone","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterLateralThrusterBeamRange === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterLateralThrusterBeamRange() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Robots/UnmannedUnderwaterVehicles/AriesPrototype.json']['THRUSTER_CONES'].afterLateralThrusterBeamRange, __eventTime);