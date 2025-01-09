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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Visualization/PajekVisualizationPrototypes.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Visualization/PajekVisualizationPrototypes.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Visualization/PajekVisualizationPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Visualization/PajekVisualizationPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Visualization/PajekVisualizationPrototypes.json']['ArcScript'] = function() {
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
	this.set_cylinderHeight = function (value) {
		try {
			this.proxy.cylinderHeight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cylinderHeight '+e);
			console.error('Problems setting cylinderHeight',e);
		}
	};
	this.cylinderHeight_changed = function () {
		var value = this.cylinderHeight;
		return value;
	};
	try {
		this.cylinderHeight = new SFFloat();
	} catch (e) {
		console.log('Problems setting cylinderHeight '+e);
		console.error('Problems setting cylinderHeight',e);
	}
	this.set_website = function (value) {
		try {
			this.proxy.website = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting website '+e);
			console.error('Problems setting website',e);
		}
	};
	this.website_changed = function () {
		var value = this.website;
		return value;
	};
	try {
		this.website = new MFString();
	} catch (e) {
		console.log('Problems setting website '+e);
		console.error('Problems setting website',e);
	}
	this.set_cylinderTranslation = function (value) {
		try {
			this.proxy.cylinderTranslation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cylinderTranslation '+e);
			console.error('Problems setting cylinderTranslation',e);
		}
	};
	this.cylinderTranslation_changed = function () {
		var value = this.cylinderTranslation;
		return value;
	};
	try {
		this.cylinderTranslation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting cylinderTranslation '+e);
		console.error('Problems setting cylinderTranslation',e);
	}
	this.set_coneTranslation = function (value) {
		try {
			this.proxy.coneTranslation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting coneTranslation '+e);
			console.error('Problems setting coneTranslation',e);
		}
	};
	this.coneTranslation_changed = function () {
		var value = this.coneTranslation;
		return value;
	};
	try {
		this.coneTranslation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting coneTranslation '+e);
		console.error('Problems setting coneTranslation',e);
	}
	this.set_rotation = function (value) {
		try {
			this.proxy.rotation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rotation '+e);
			console.error('Problems setting rotation',e);
		}
	};
	this.rotation_changed = function () {
		var value = this.rotation;
		return value;
	};
	try {
		this.rotation = new SFRotation();
	} catch (e) {
		console.log('Problems setting rotation '+e);
		console.error('Problems setting rotation',e);
	}
	this.set_displayMode = function (value) {
		try {
			this.proxy.displayMode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting displayMode '+e);
			console.error('Problems setting displayMode',e);
		}
	};
	this.displayMode_changed = function () {
		var value = this.displayMode;
		return value;
	};
	try {
		this.displayMode = new SFString();
	} catch (e) {
		console.log('Problems setting displayMode '+e);
		console.error('Problems setting displayMode',e);
	}
	this.set_color = function (value) {
		try {
			this.proxy.color = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting color '+e);
			console.error('Problems setting color',e);
		}
	};
	this.color_changed = function () {
		var value = this.color;
		return value;
	};
	try {
		this.color = new SFColor();
	} catch (e) {
		console.log('Problems setting color '+e);
		console.error('Problems setting color',e);
	}
	this.set_transparency = function (value) {
		try {
			this.proxy.transparency = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transparency '+e);
			console.error('Problems setting transparency',e);
		}
	};
	this.transparency_changed = function () {
		var value = this.transparency;
		return value;
	};
	try {
		this.transparency = new SFFloat();
	} catch (e) {
		console.log('Problems setting transparency '+e);
		console.error('Problems setting transparency',e);
	}
	this.set_ballRadius = function (value) {
		try {
			this.proxy.ballRadius = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ballRadius '+e);
			console.error('Problems setting ballRadius',e);
		}
	};
	this.ballRadius_changed = function () {
		var value = this.ballRadius;
		return value;
	};
	try {
		this.ballRadius = new SFFloat();
	} catch (e) {
		console.log('Problems setting ballRadius '+e);
		console.error('Problems setting ballRadius',e);
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
    // TODO? potential visualization improvment (at possible cost of breaking simple 1:1 mapping)
    // compute Cone translation (and perhaps cone size) based on Cylinder size
    // then send result to the Cone parent transform

    // conceivably this extended Cylinder length is a feature, not a bug...
    // if the Cylinder goes to the center of the ball, then you can turn off both
    // balls and Cone arrowheads to yield a simple stick-only model
    // so we need to consider this as an animation/visualization feature as well

    this.tracePrint ('ArcScript ' + this.proxy.name + ': ' initialization() successful');
};

	this.set_name = function (eventValue)
{
    // input eventValue received for inputOutput field this.proxy.name
    this.proxy.name = eventValue;
    this.tracePrint ('this.proxy.name = ' + this.proxy.name);
};

	this.set_description = function (eventValue)
{
    // input eventValue received for inputOutput field this.proxy.description
    this.proxy.description = eventValue;
    this.tracePrint ('this.proxy.description = ' + this.proxy.description);
};

	this.set_cylinderTranslation = function (eventValue)
{
    // input eventValue received for inputOutput field this.proxy.cylinderTranslation
    this.proxy.cylinderTranslation = eventValue;
    this.tracePrint ('this.proxy.cylinderTranslation = ' + this.proxy.cylinderTranslation);

    // TODO author code (if any) goes here
};

	this.set_coneTranslation = function (eventValue)
{
    // input eventValue received for inputOutput field this.proxy.coneTranslation
    this.proxy.coneTranslation = eventValue;
    this.tracePrint ('this.proxy.coneTranslation = ' + this.proxy.coneTranslation);

    // TODO author code (if any) goes here
};

	this.set_rotation = function (eventValue)
{
    // input eventValue received for inputOutput field this.proxy.rotation
    this.proxy.rotation = eventValue;
    this.tracePrint ('this.proxy.rotation = ' + this.proxy.rotation);

    // TODO author code (if any) goes here
};

	this.set_displayMode = function (eventValue)
{
    // input eventValue received for inputOutput field this.proxy.displayMode
    this.proxy.displayMode = eventValue;
    this.tracePrint ('this.proxy.displayMode = ' + this.proxy.displayMode);

    // TODO author code (if any) goes here
};

	this.set_color = function (eventValue)
{
    // input eventValue received for inputOutput field this.proxy.color
    this.proxy.color = eventValue;
    this.tracePrint ('this.proxy.color = ' + this.proxy.color);

    // TODO author code (if any) goes here
};

	this.set_transparency = function (eventValue)
{
    // input eventValue received for inputOutput field this.proxy.transparency
    this.proxy.transparency = eventValue;
    this.tracePrint ('this.proxy.transparency = ' + this.proxy.transparency);

    // TODO author code (if any) goes here
};

	this.set_ballRadius = function (eventValue)
{
    // input eventValue received for inputOutput field this.proxy.ballRadius
    this.proxy.ballRadius = eventValue;
    this.tracePrint ('this.proxy.ballRadius = ' + this.proxy.ballRadius);

    // TODO author code (if any) goes here
}
// ===========;

	this.tracePrint = function (outputString)
{
   // if this.proxy.traceEnabled is true, print outputString on X3D browser console
   if (this.proxy.traceEnabled)
      console.error ('[Arc ' + this.proxy.name + ': ' + outputString + ']');
};

	this.alwaysPrint = function (outputString)
{
      // always print outputString on X3D browser console
      console.error ('[Arc ' + this.proxy.name + ': ' + outputString + ']');
};

	this.set_traceEnabled = function (eventValue)
{
    // input eventValue received for inputOutput field
    this.proxy.traceEnabled = eventValue;
}
// =============;

	this.set_website = function (eventValue)
{
    // input eventValue received for inputOutput field this.proxy.website
    this.proxy.website = eventValue;
    this.tracePrint ('this.proxy.website = ' + this.proxy.website);

    // TODO author code (if any) goes here
}
//=========;

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Visualization/PajekVisualizationPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Visualization/PajekVisualizationPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Visualization/PajekVisualizationPrototypes.json']['ArcScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Visualization/PajekVisualizationPrototypes.json']['ArcScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Visualization/PajekVisualizationPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Visualization/PajekVisualizationPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Visualization/PajekVisualizationPrototypes.json']['ArcScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Visualization/PajekVisualizationPrototypes.json']['ArcScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Visualization/PajekVisualizationPrototypes.json']['ArcScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Visualization/PajekVisualizationPrototypes.json']['ArcScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Visualization/PajekVisualizationPrototypes.json']['ArcScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Visualization/PajekVisualizationPrototypes.json']['ArcScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Visualization/PajekVisualizationPrototypes.json']['ArcScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Visualization/PajekVisualizationPrototypes.json']['ArcScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Visualization/PajekVisualizationPrototypes.json']['ArcScript'].initialize();

