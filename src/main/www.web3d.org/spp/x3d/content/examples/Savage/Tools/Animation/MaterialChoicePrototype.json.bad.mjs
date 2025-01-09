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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialChoicePrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialChoicePrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialChoicePrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialChoicePrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialChoicePrototype.json']['MaterialAnimationScript'] = function() {
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
	this.set_index = function (value) {
		try {
			this.proxy.index = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting index '+e);
			console.error('Problems setting index',e);
		}
	};
	this.index_changed = function () {
		var value = this.index;
		return value;
	};
	try {
		this.index = new SFInt32();
	} catch (e) {
		console.log('Problems setting index '+e);
		console.error('Problems setting index',e);
	}
	this.set_index = function (value) {
		try {
			this.proxy.index = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting index '+e);
			console.error('Problems setting index',e);
		}
	};
	this.index_changed = function () {
		var value = this.index;
		return value;
	};
	try {
		this.index = new SFInt32();
	} catch (e) {
		console.log('Problems setting index '+e);
		console.error('Problems setting index',e);
	}
	this.set_index = function (value) {
		try {
			this.proxy.index = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting index '+e);
			console.error('Problems setting index',e);
		}
	};
	this.index_changed = function () {
		var value = this.index;
		return value;
	};
	try {
		this.index = new SFInt32();
	} catch (e) {
		console.log('Problems setting index '+e);
		console.error('Problems setting index',e);
	}
	this.set_fraction = function (value) {
		try {
			this.proxy.fraction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fraction '+e);
			console.error('Problems setting fraction',e);
		}
	};
	this.fraction_changed = function () {
		var value = this.fraction;
		return value;
	};
	try {
		this.fraction = new SFFloat();
	} catch (e) {
		console.log('Problems setting fraction '+e);
		console.error('Problems setting fraction',e);
	}
	this.set_fraction = function (value) {
		try {
			this.proxy.fraction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fraction '+e);
			console.error('Problems setting fraction',e);
		}
	};
	this.fraction_changed = function () {
		var value = this.fraction;
		return value;
	};
	try {
		this.fraction = new SFFloat();
	} catch (e) {
		console.log('Problems setting fraction '+e);
		console.error('Problems setting fraction',e);
	}
	this.set_next = function (value) {
		try {
			this.proxy.next = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting next '+e);
			console.error('Problems setting next',e);
		}
	};
	this.next_changed = function () {
		var value = this.next;
		return value;
	};
	try {
		this.next = new SFBool();
	} catch (e) {
		console.log('Problems setting next '+e);
		console.error('Problems setting next',e);
	}
	this.set_previous = function (value) {
		try {
			this.proxy.previous = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting previous '+e);
			console.error('Problems setting previous',e);
		}
	};
	this.previous_changed = function () {
		var value = this.previous;
		return value;
	};
	try {
		this.previous = new SFBool();
	} catch (e) {
		console.log('Problems setting previous '+e);
		console.error('Problems setting previous',e);
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
		this.defaultMaterial = X3DJSON.nodeUtil("Scene","undefined");
	} catch (e) {
		console.log('Problems setting defaultMaterial '+e);
		console.error('Problems setting defaultMaterial',e);
	}
	this.set_materials = function (value) {
		try {
			this.proxy.materials = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting materials '+e);
			console.error('Problems setting materials',e);
		}
	};
	this.materials_changed = function () {
		var value = this.materials;
		return value;
	};
	try {
		this.materials = new MFNode();
	} catch (e) {
		console.log('Problems setting materials '+e);
		console.error('Problems setting materials',e);
	}
	this.set_appendMaterial = function (value) {
		try {
			this.proxy.appendMaterial = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting appendMaterial '+e);
			console.error('Problems setting appendMaterial',e);
		}
	};
	this.appendMaterial_changed = function () {
		var value = this.appendMaterial;
		return value;
	};
	try {
		this.appendMaterial = new SFNode();
	} catch (e) {
		console.log('Problems setting appendMaterial '+e);
		console.error('Problems setting appendMaterial',e);
	}
	this.set_deleteMaterial = function (value) {
		try {
			this.proxy.deleteMaterial = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting deleteMaterial '+e);
			console.error('Problems setting deleteMaterial',e);
		}
	};
	this.deleteMaterial_changed = function () {
		var value = this.deleteMaterial;
		return value;
	};
	try {
		this.deleteMaterial = new SFInt32();
	} catch (e) {
		console.log('Problems setting deleteMaterial '+e);
		console.error('Problems setting deleteMaterial',e);
	}
	this.set_deleteAllMaterials = function (value) {
		try {
			this.proxy.deleteAllMaterials = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting deleteAllMaterials '+e);
			console.error('Problems setting deleteAllMaterials',e);
		}
	};
	this.deleteAllMaterials_changed = function () {
		var value = this.deleteAllMaterials;
		return value;
	};
	try {
		this.deleteAllMaterials = new SFBool();
	} catch (e) {
		console.log('Problems setting deleteAllMaterials '+e);
		console.error('Problems setting deleteAllMaterials',e);
	}
	this.set_priorBadIndex = function (value) {
		try {
			this.proxy.priorBadIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting priorBadIndex '+e);
			console.error('Problems setting priorBadIndex',e);
		}
	};
	this.priorBadIndex_changed = function () {
		var value = this.priorBadIndex;
		return value;
	};
	try {
		this.priorBadIndex = new SFInt32(-1);
	} catch (e) {
		console.log('Problems setting priorBadIndex '+e);
		console.error('Problems setting priorBadIndex',e);
	}


ecmascript:

	this.initialize = function ()
{
   this.tracePrint ('this.initialize() begin...');
   if (this.proxy.materials[this.proxy.index] != null)
   {
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "diffuseColor",  this.proxy.materials[this.proxy.index].diffuseColor);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "emissiveColor",  this.proxy.materials[this.proxy.index].emissiveColor);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "specularColor",  this.proxy.materials[this.proxy.index].specularColor);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "shininess",  this.proxy.materials[this.proxy.index].shininess);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "ambientIntensity",  this.proxy.materials[this.proxy.index].ambientIntensity);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "transparency",  this.proxy.materials[this.proxy.index].transparency);
	this.interpolateMaterialValues();
   }
   else this.alwaysPrint ('warning: no initialization Material node provided for this.proxy.materials[' + this.proxy.index + ']'
                    + ', this.proxy.materials.length=' + this.proxy.materials.length);

   this.tracePrint ('this.initialize() complete');
}
;

	this.set_index = function (value, timestamp)
{
   if (value == this.proxy.index) return;
   else if ((value >= 0) && (value < this.proxy.materials.length))
   {
	this.proxy.index = value;
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "diffuseColor",  this.proxy.materials[this.proxy.index].diffuseColor);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "emissiveColor",  this.proxy.materials[this.proxy.index].emissiveColor);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "specularColor",  this.proxy.materials[this.proxy.index].specularColor);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "shininess",  this.proxy.materials[this.proxy.index].shininess);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "ambientIntensity",  this.proxy.materials[this.proxy.index].ambientIntensity);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "transparency",  this.proxy.materials[this.proxy.index].transparency);
	this.interpolateMaterialValues();
	this.proxy.index_changed = value; // chain input event to output event
	this.tracePrint ('this.proxy.set_index(' + value + ') complete');
   }
   else if (value == -1)
   {
	this.tracePrint ('this.proxy.set_index(' + value + ') out of range, use default Material values');
	this.proxy.index = value;
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "diffuseColor",  X3DJSON.nodeUtil("Scene","undefined", "diffuseColor"));
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "emissiveColor",  X3DJSON.nodeUtil("Scene","undefined", "emissiveColor"));
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "specularColor",  X3DJSON.nodeUtil("Scene","undefined", "specularColor"));
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "shininess",  X3DJSON.nodeUtil("Scene","undefined", "shininess"));
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "ambientIntensity",  X3DJSON.nodeUtil("Scene","undefined", "ambientIntensity"));
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "transparency",  X3DJSON.nodeUtil("Scene","undefined", "transparency"));
	this.proxy.index_changed = value; // chain input event to output event
   }
   else if (this.proxy.priorBadIndex != value)
   {
	this.alwaysPrint ('this.proxy.set_index(' + value + ') out of range (only '
		+ this.proxy.materials.length + ' Material nodes)');
	this.proxy.priorBadIndex = value;
   }
}
;

	this.set_fraction = function (value, timestamp)
{
	this.tracePrint ('this.proxy.set_fraction(' + value + ')');
	if (this.proxy.fraction != value) // only update if value is changed
	{
		this.proxy.fraction = value;
		this.interpolateMaterialValues();
	}
}
;

	this.interpolateMaterialValues = function ()
{
	f = this.proxy.fraction % 1;  // nonzero remainder (modulo 1) within range [0..1]
	this.tracePrint ('this.interpolateMaterialValues(this.proxy.index=' + this.proxy.index + ', this.proxy.fraction=' + this.proxy.fraction +  ', f=' + f + ')');
	// reset Material this.proxy.index if this.proxy.fraction is above 1
	if (Math.floor(this.proxy.fraction) >= 1)
	{
		this.proxy.index = Math.floor(this.proxy.fraction);
		this.tracePrint ('this.proxy.index=' + this.proxy.index + ' (reset from this.proxy.fraction)');
	}
	this.proxy.fraction = f;  // no need to retain integral part of this.proxy.fraction once this.proxy.index is set correspondingly
	// check OK to proceed
	if (this.proxy.index <  0) return;				// avoid this.proxy.index underflow
	if (this.proxy.index >= this.proxy.materials.length - 1) return;	// avoid this.proxy.index overflow
	if (f == 0.0) return; 				// avoid zero interpolation
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "diffuseColor").r     = this.proxy.materials[this.proxy.index].diffuseColor.r +
		f * (this.proxy.materials[this.proxy.index+1].diffuseColor.r - this.proxy.materials[this.proxy.index].diffuseColor.r);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "diffuseColor").g     = this.proxy.materials[this.proxy.index].diffuseColor.g +
		f * (this.proxy.materials[this.proxy.index+1].diffuseColor.g - this.proxy.materials[this.proxy.index].diffuseColor.g);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "diffuseColor").b     = this.proxy.materials[this.proxy.index].diffuseColor.r +
		f * (this.proxy.materials[this.proxy.index+1].diffuseColor.b - this.proxy.materials[this.proxy.index].diffuseColor.b);
	this.tracePrint ('X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "diffuseColor", ' + X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "diffuseColor")));

	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "emissiveColor").r    = this.proxy.materials[this.proxy.index].emissiveColor.r +
		f * (this.proxy.materials[this.proxy.index+1].emissiveColor.r - this.proxy.materials[this.proxy.index].emissiveColor.r);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "emissiveColor").g    = this.proxy.materials[this.proxy.index].emissiveColor.r +
		f * (this.proxy.materials[this.proxy.index+1].emissiveColor.g - this.proxy.materials[this.proxy.index].emissiveColor.g);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "emissiveColor").b    = this.proxy.materials[this.proxy.index].emissiveColor.b +
		f * (this.proxy.materials[this.proxy.index+1].emissiveColor.b - this.proxy.materials[this.proxy.index].emissiveColor.b);

	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "specularColor").r    = this.proxy.materials[this.proxy.index].specularColor.r +
		f * (this.proxy.materials[this.proxy.index+1].specularColor.r - this.proxy.materials[this.proxy.index].specularColor.r);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "specularColor").g    = this.proxy.materials[this.proxy.index].specularColor.g +
		f * (this.proxy.materials[this.proxy.index+1].specularColor.g - this.proxy.materials[this.proxy.index].specularColor.g);
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "specularColor").b    = this.proxy.materials[this.proxy.index].specularColor.b +
		f * (this.proxy.materials[this.proxy.index+1].specularColor.b - this.proxy.materials[this.proxy.index].specularColor.b);

	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "shininess",  this.proxy.materials[this.proxy.index].shininess +
		f * (this.proxy.materials[this.proxy.index+1].shininess - this.proxy.materials[this.proxy.index].shininess));
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "ambientIntensity",  this.proxy.materials[this.proxy.index].ambientIntensity +
		f * (this.proxy.materials[this.proxy.index+1].ambientIntensity - this.proxy.materials[this.proxy.index].ambientIntensity));
	X3DJSON.nodeUtil("Scene","ViewedMaterialNode", "transparency",  this.proxy.materials[this.proxy.index].transparency +
		f * (this.proxy.materials[this.proxy.index+1].transparency - this.proxy.materials[this.proxy.index].transparency));
}
;

	this.next = function (trigger)
{
	this.tracePrint ('this.proxy.next(' + trigger + ')');
	if ((trigger == true) && (this.proxy.materials.length > 0))
	{
		value = this.proxy.index + 1;
		if (value >= this.proxy.materials.length) value = 0;
		this.proxy.set_index (value); // update Material, test, etc.
	}
}
;

	this.previous = function (trigger)
{
	this.tracePrint ('this.proxy.previous(' + trigger + ')');
	if ((trigger == true) && (this.proxy.materials.length > 0))
	{
		value = this.proxy.index - 1;
		if (value < 0) value = this.proxy.materials.length - 1;
		this.proxy.set_index (value); // update Material, test, etc.
	}
}
;

	this.appendMaterial = function (newMaterial)
{
	this.tracePrint ('this.proxy.appendMaterial(' + newMaterial + ')');
	newMaterialCopy = new SFNode ('Material {}');
	this.tracePrint ('newMaterial.diffuseColor=' + newMaterial.diffuseColor);
	newMaterialCopy.diffuseColor     = newMaterial.diffuseColor;
	newMaterialCopy.emissiveColor    = newMaterial.emissiveColor;
	newMaterialCopy.specularColor    = newMaterial.specularColor;
	newMaterialCopy.shininess        = newMaterial.shininess;
	newMaterialCopy.ambientIntensity = newMaterial.ambientIntensity;
	newMaterialCopy.transparency     = newMaterial.transparency;
	this.proxy.materials[this.proxy.materials.length]      = newMaterialCopy;
	this.proxy.set_index (this.proxy.materials.length-1); // update Material, test, etc.
}
;

	this.deleteAllMaterials = function (trigger)
{
	if ((trigger == true) && (this.proxy.materials.length > 0))
	{
		this.proxy.materials.length = 0; // deletes all objects in this.proxy.materials MFNode array
		this.proxy.index = 0; // must be different to trigger node reset by this.proxy.set_index()
		this.proxy.set_index (-1);
		this.tracePrint ('this.proxy.deleteAllMaterials() this.proxy.materials.length=' + this.proxy.materials.length);
	}
}
;

	this.deleteMaterial = function (materialIndex)
{
	if ((materialIndex >= this.proxy.materials.length) || materialIndex < 0)
		this.alwaysPrint ('this.proxy.deleteMaterial(materialIndex=' + materialIndex + ') out of range, this.proxy.materials.length=' +  this.proxy.materials.length);
	else
	{
		for (i = materialIndex; i <= this.proxy.materials.length - 2; i++)
		{
			this.proxy.materials[i] = this.proxy.materials[i+1];
		}
		this.proxy.materials.length = this.proxy.materials.length - 1;
		if ((this.proxy.index == 0) && (materialIndex == 0) && (this.proxy.materials.length > 0))
		{
			this.proxy.index = -1; // allow reset back to 0
			this.proxy.set_index (0);
		}
		else if (this.proxy.index >= materialIndex) this.proxy.set_index (this.proxy.index-1); // decrement to remain same
		this.tracePrint ('this.proxy.deleteMaterial(materialIndex=' + materialIndex + ') complete,  this.proxy.materials.length=' + this.proxy.materials.length);
	}
}
;

	this.tracePrint = function (outputString)
{
	if (this.proxy.traceEnabled) console.error ('[MaterialChoice] ' + outputString + '');
};

	this.alwaysPrint = function (outputString)
{
	console.error ('[MaterialChoice] ' + outputString + '');
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialChoicePrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialChoicePrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialChoicePrototype.json']['MaterialAnimationScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialChoicePrototype.json']['MaterialAnimationScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialChoicePrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialChoicePrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialChoicePrototype.json']['MaterialAnimationScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialChoicePrototype.json']['MaterialAnimationScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialChoicePrototype.json']['MaterialAnimationScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialChoicePrototype.json']['MaterialAnimationScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialChoicePrototype.json']['MaterialAnimationScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialChoicePrototype.json']['MaterialAnimationScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialChoicePrototype.json']['MaterialAnimationScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialChoicePrototype.json']['MaterialAnimationScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/MaterialChoicePrototype.json']['MaterialAnimationScript'].initialize();

