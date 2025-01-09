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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'] = function() {
	this.set_translation = function (value) {
		try {
			this.proxy.translation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting translation '+e);
			console.error('Problems setting translation',e);
		}
	};
	this.translation_changed = function () {
		var value = this.translation;
		return value;
	};
	try {
		this.translation = undefined;
	} catch (e) {
		console.log('Problems setting translation '+e);
		console.error('Problems setting translation',e);
	}
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
		this.angle = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting angle '+e);
		console.error('Problems setting angle',e);
	}
	this.set_y = function (value) {
		try {
			this.proxy.y = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting y '+e);
			console.error('Problems setting y',e);
		}
	};
	this.y_changed = function () {
		var value = this.y;
		return value;
	};
	try {
		this.y = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting y '+e);
		console.error('Problems setting y',e);
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
		this.rotation = undefined;
	} catch (e) {
		console.log('Problems setting rotation '+e);
		console.error('Problems setting rotation',e);
	}
	this.set_translation = function (value) {
		try {
			this.proxy.translation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting translation '+e);
			console.error('Problems setting translation',e);
		}
	};
	this.translation_changed = function () {
		var value = this.translation;
		return value;
	};
	try {
		this.translation = undefined;
	} catch (e) {
		console.log('Problems setting translation '+e);
		console.error('Problems setting translation',e);
	}
	this.set_angleMFString = function (value) {
		try {
			this.proxy.angleMFString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting angleMFString '+e);
			console.error('Problems setting angleMFString',e);
		}
	};
	this.angleMFString_changed = function () {
		var value = this.angleMFString;
		return value;
	};
	try {
		this.angleMFString = undefined;
	} catch (e) {
		console.log('Problems setting angleMFString '+e);
		console.error('Problems setting angleMFString',e);
	}
	this.set_tracePrint = function (value) {
		try {
			this.proxy.tracePrint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting tracePrint '+e);
			console.error('Problems setting tracePrint',e);
		}
	};
	this.tracePrint_changed = function () {
		var value = this.tracePrint;
		return value;
	};
	try {
		this.tracePrint = new SFBool(true);
	} catch (e) {
		console.log('Problems setting tracePrint '+e);
		console.error('Problems setting tracePrint',e);
	}


ecmascript:

	this.set_translation = function (eventValue)
{
   x = eventValue.x;
   if (this.proxy.tracePrint)
   {
      console.error ("========================");
      console.error ('                  x=' + x);
   }
   // clamp values to prevent overrun/underrun, in case minPosition/maxPosition fail
   if (x >  3.0) x =  3.0;
   if (x < -3.0) x = -3.0;

   this.proxy.translation_changed = eventValue;
   this.proxy.angle = Math.round(x * 90.0 / 3.0);
   this.proxy.rotation_changed = new SFRotation (0, 1, 0, this.proxy.angle * Math.PI / 180.0);
   var angleString = this.proxy.angle.toString() + ' degrees'; // JavaScript string

// this.proxy.angleMFString_changed = new MFString (new SFString(angleString)); // only works in InstantReality
   this.proxy.angleMFString_changed = new MFString (angleString); // works in several players but not all
// this.proxy.angleMFString_changed = [ angleString ]; // Use JavaScript string array instead of MFString doesn't work

   if (this.proxy.tracePrint)
   {
      console.error ('          clamped x=' + x);
      console.error ("    this.proxy.set_translation=" + eventValue);
      console.error ("this.proxy.translation_changed=" + this.proxy.translation_changed.toString() + ", this.proxy.rotation_changed=" + this.proxy.rotation_changed.toString());
      console.error ("this.proxy.angle=" + this.proxy.angle + ", angleString=" + angleString + ", this.proxy.angleMFString_changed=" + this.proxy.angleMFString_changed.toString());
   }
/*
example console excerpt:
========================
                  x=-0.05248255282640457
          clamped x=-0.05248255282640457
    this.proxy.set_translation=-0.05248255282640457 0 0
translation_changed=-0.05248255282640457 0 0, this.proxy.rotation_changed=0 1 0 -0.03490658503988659
angle=-2, angleString=-2 degrees, this.proxy.angleMFString_changed="-2 degrees"
========================
*/
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].initialize();
    if (X3DJSON.nodeUtil("Scene","SliderPlaneSensor")) {
X3DJSON.nodeUtil("Scene","SliderPlaneSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].set_translation(X3DJSON.nodeUtil("Scene","SliderPlaneSensor","translation"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].set_translation(X3DJSON.nodeUtil("Scene","SliderPlaneSensor","translation"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript']['ACTION']['translation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript']['ACTION']['translation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript']['ACTION']['translation'].push(function(property, value) {
		if (property === 'translation') {
			X3DJSON.nodeUtil("Scene","SliderKnobTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].translation_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].translation_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].translation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SliderKnobTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].translation_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].translation_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].translation, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript']['ACTION']['rotation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript']['ACTION']['rotation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript']['ACTION']['rotation'].push(function(property, value) {
		if (property === 'rotation') {
			X3DJSON.nodeUtil("Scene","ImageTransform","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].rotation_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].rotation_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].rotation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ImageTransform","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].rotation_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].rotation_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].rotation, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript']['ACTION']['angleMFString'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript']['ACTION']['angleMFString'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript']['ACTION']['angleMFString'].push(function(property, value) {
		if (property === 'angleMFString') {
			X3DJSON.nodeUtil("Scene","AngleOutputText","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].angleMFString_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].angleMFString_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].angleMFString, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AngleOutputText","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].angleMFString_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].angleMFString_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].angleMFString, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].set_translation(X3DJSON.nodeUtil("Scene","SliderPlaneSensor","translation"), __eventTime);
			X3DJSON.nodeUtil("Scene","SliderKnobTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].translation_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].translation_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].translation, __eventTime);
			X3DJSON.nodeUtil("Scene","ImageTransform","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].rotation_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].rotation_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].rotation, __eventTime);
			X3DJSON.nodeUtil("Scene","AngleOutputText","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].angleMFString_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].angleMFString_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/TextureMapping/TextureAngleViewer.json']['SliderScript'].angleMFString, __eventTime);