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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialTogglePrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialTogglePrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialTogglePrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialTogglePrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialTogglePrototype.json']['MaterialAnimationScript'] = function() {
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
	this.set_toggle = function (value) {
		try {
			this.proxy.toggle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toggle '+e);
			console.error('Problems setting toggle',e);
		}
	};
	this.toggle_changed = function () {
		var value = this.toggle;
		return value;
	};
	try {
		this.toggle = new SFBool();
	} catch (e) {
		console.log('Problems setting toggle '+e);
		console.error('Problems setting toggle',e);
	}
	this.set_toggle = function (value) {
		try {
			this.proxy.toggle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toggle '+e);
			console.error('Problems setting toggle',e);
		}
	};
	this.toggle_changed = function () {
		var value = this.toggle;
		return value;
	};
	try {
		this.toggle = new SFBool();
	} catch (e) {
		console.log('Problems setting toggle '+e);
		console.error('Problems setting toggle',e);
	}
	this.set_toggle = function (value) {
		try {
			this.proxy.toggle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toggle '+e);
			console.error('Problems setting toggle',e);
		}
	};
	this.toggle_changed = function () {
		var value = this.toggle;
		return value;
	};
	try {
		this.toggle = new SFBool();
	} catch (e) {
		console.log('Problems setting toggle '+e);
		console.error('Problems setting toggle',e);
	}
	this.set_defaultMaterial = function (value) {
		try {
			this.proxy.defaultMaterial = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting defaultMaterial '+e);
			console.error('Problems setting defaultMaterial',e);
		}
	};
	this.defaultMaterial_changed = function () {
		var value = this.defaultMaterial;
		return value;
	};
	try {
		this.defaultMaterial = new SFNode();
	} catch (e) {
		console.log('Problems setting defaultMaterial '+e);
		console.error('Problems setting defaultMaterial',e);
	}
	this.set_toggleMaterial = function (value) {
		try {
			this.proxy.toggleMaterial = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toggleMaterial '+e);
			console.error('Problems setting toggleMaterial',e);
		}
	};
	this.toggleMaterial_changed = function () {
		var value = this.toggleMaterial;
		return value;
	};
	try {
		this.toggleMaterial = new SFNode();
	} catch (e) {
		console.log('Problems setting toggleMaterial '+e);
		console.error('Problems setting toggleMaterial',e);
	}
	this.set_defaultMaterial = function (value) {
		try {
			this.proxy.defaultMaterial = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting defaultMaterial '+e);
			console.error('Problems setting defaultMaterial',e);
		}
	};
	this.defaultMaterial_changed = function () {
		var value = this.defaultMaterial;
		return value;
	};
	try {
		this.defaultMaterial = new SFNode();
	} catch (e) {
		console.log('Problems setting defaultMaterial '+e);
		console.error('Problems setting defaultMaterial',e);
	}
	this.set_toggleMaterial = function (value) {
		try {
			this.proxy.toggleMaterial = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toggleMaterial '+e);
			console.error('Problems setting toggleMaterial',e);
		}
	};
	this.toggleMaterial_changed = function () {
		var value = this.toggleMaterial;
		return value;
	};
	try {
		this.toggleMaterial = new SFNode();
	} catch (e) {
		console.log('Problems setting toggleMaterial '+e);
		console.error('Problems setting toggleMaterial',e);
	}
	this.set_viewedMaterial = function (value) {
		try {
			this.proxy.viewedMaterial = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting viewedMaterial '+e);
			console.error('Problems setting viewedMaterial',e);
		}
	};
	this.viewedMaterial_changed = function () {
		var value = this.viewedMaterial;
		return value;
	};
	try {
		this.viewedMaterial = X3DJSON.nodeUtil("Scene","ViewedMaterialNode");
	} catch (e) {
		console.log('Problems setting viewedMaterial '+e);
		console.error('Problems setting viewedMaterial',e);
	}


ecmascript:

	this.initialize = function ()
{

   this.tracePrint ('this.initialize() begin...');
   if (this.proxy.defaultMaterial != null)
   {
	this.tracePrint ('this.proxy.defaultMaterial.diffuseColor=' + this.proxy.defaultMaterial.diffuseColor.toString());
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "diffuseColor",  this.proxy.defaultMaterial.diffuseColor);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "emissiveColor",  this.proxy.defaultMaterial.emissiveColor);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "specularColor",  this.proxy.defaultMaterial.specularColor);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "shininess",  this.proxy.defaultMaterial.shininess);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "ambientIntensity",  this.proxy.defaultMaterial.ambientIntensity);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "transparency",  this.proxy.defaultMaterial.transparency);
	this.tracePrint ('this.proxy.toggleMaterial.diffuseColor=' + this.proxy.toggleMaterial.diffuseColor.toString());
   }
   else this.alwaysPrint ('warning: no initialization Material node provided for this.proxy.defaultMaterial');
   if  (this.proxy.toggleMaterial == null)
        this.alwaysPrint ('warning: no initialization Material node provided for this.proxy.toggleMaterial');

   this.tracePrint ('this.initialize() complete');
}
;

	this.set_toggle = function (value, timestamp)
{
   if ((value == true) && (this.proxy.toggleMaterial != null))
   {
	this.tracePrint ('this.proxy.set_toggle true, this.proxy.toggleMaterial.diffuseColor=' + this.proxy.toggleMaterial.diffuseColor.toString());
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "diffuseColor",  this.proxy.toggleMaterial.diffuseColor);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "emissiveColor",  this.proxy.toggleMaterial.emissiveColor);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "specularColor",  this.proxy.toggleMaterial.specularColor);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "shininess",  this.proxy.toggleMaterial.shininess);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "ambientIntensity",  this.proxy.toggleMaterial.ambientIntensity);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "transparency",  this.proxy.toggleMaterial.transparency);
   }
   else if (this.proxy.defaultMaterial != null)
   {
	this.tracePrint ('this.proxy.set_toggle false, this.proxy.defaultMaterial.diffuseColor=' + this.proxy.defaultMaterial.diffuseColor.toString());
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "diffuseColor",  this.proxy.defaultMaterial.diffuseColor);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "emissiveColor",  this.proxy.defaultMaterial.emissiveColor);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "specularColor",  this.proxy.defaultMaterial.specularColor);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "shininess",  this.proxy.defaultMaterial.shininess);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "ambientIntensity",  this.proxy.defaultMaterial.ambientIntensity);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "transparency",  this.proxy.defaultMaterial.transparency);
   }
   this.proxy.toggle         = value; // remember state
   this.proxy.toggle_changed = value; // chain input boolean event to output event
   this.tracePrint ('this.proxy.set_toggle(' + value + ') complete');
}
;

	this.set_defaultMaterial = function (newMaterial)
{
	this.proxy.defaultMaterial = newMaterial;
	this.tracePrint('this.proxy.set_defaultMaterial = ' + newMaterial);
}
;

	this.set_toggleMaterial = function (newMaterial)
{
	this.proxy.toggleMaterial = newMaterial;
	this.tracePrint('this.proxy.set_toggleMaterial = ' + newMaterial);
}
;

	this.tracePrint = function (outputString)
{
	if (this.proxy.traceEnabled) console.error ('[MaterialToggle] ' + outputString + '');
};

	this.alwaysPrint = function (outputString)
{
	console.error ('[MaterialToggle] ' + outputString + '');
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialTogglePrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialTogglePrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialTogglePrototype.json']['MaterialAnimationScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialTogglePrototype.json']['MaterialAnimationScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialTogglePrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialTogglePrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialTogglePrototype.json']['MaterialAnimationScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialTogglePrototype.json']['MaterialAnimationScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialTogglePrototype.json']['MaterialAnimationScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialTogglePrototype.json']['MaterialAnimationScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialTogglePrototype.json']['MaterialAnimationScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialTogglePrototype.json']['MaterialAnimationScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialTogglePrototype.json']['MaterialAnimationScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialTogglePrototype.json']['MaterialAnimationScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialTogglePrototype.json']['MaterialAnimationScript'].initialize();

