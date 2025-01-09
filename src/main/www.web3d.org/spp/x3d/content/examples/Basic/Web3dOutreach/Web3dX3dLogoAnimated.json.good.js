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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dX3dLogoAnimated.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dX3dLogoAnimated.json'] = {};
}

    if (X3DJSON.nodeUtil("Scene","Direct01-TIMER")) {
X3DJSON.nodeUtil("Scene","Direct01-TIMER").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Thump")) {
X3DJSON.nodeUtil("Scene","Thump").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Direct01-TIMER")) {
X3DJSON.nodeUtil("Scene","Direct01-TIMER").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","x3dP")) {
X3DJSON.nodeUtil("Scene","x3dP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Direct01-TIMER")) {
X3DJSON.nodeUtil("Scene","Direct01-TIMER").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Slash1-ROT-INTERP")) {
X3DJSON.nodeUtil("Scene","Slash1-ROT-INTERP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Direct01-TIMER")) {
X3DJSON.nodeUtil("Scene","Direct01-TIMER").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Slash2-ROT-INTERP")) {
X3DJSON.nodeUtil("Scene","Slash2-ROT-INTERP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Direct01-TIMER")) {
X3DJSON.nodeUtil("Scene","Direct01-TIMER").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cube-POS-INTERP")) {
X3DJSON.nodeUtil("Scene","Cube-POS-INTERP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Direct01-TIMER")) {
X3DJSON.nodeUtil("Scene","Direct01-TIMER").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cube-ROT-INTERP")) {
X3DJSON.nodeUtil("Scene","Cube-ROT-INTERP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Direct01-TIMER")) {
X3DJSON.nodeUtil("Scene","Direct01-TIMER").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Sphere-POS-INTERP")) {
X3DJSON.nodeUtil("Scene","Sphere-POS-INTERP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Direct01-TIMER")) {
X3DJSON.nodeUtil("Scene","Direct01-TIMER").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Sphere-SCALE-INTERP")) {
X3DJSON.nodeUtil("Scene","Sphere-SCALE-INTERP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Direct01-TIMER")) {
X3DJSON.nodeUtil("Scene","Direct01-TIMER").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Bracket-ROT-INTERP")) {
X3DJSON.nodeUtil("Scene","Bracket-ROT-INTERP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Bracket-ROT-INTERP")) {
X3DJSON.nodeUtil("Scene","Bracket-ROT-INTERP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Direct01-TIMER")) {
X3DJSON.nodeUtil("Scene","Direct01-TIMER").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cone_dummy-POS-INTERP")) {
X3DJSON.nodeUtil("Scene","Cone_dummy-POS-INTERP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Direct01-TIMER")) {
X3DJSON.nodeUtil("Scene","Direct01-TIMER").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cone_dummy-ROT-INTERP")) {
X3DJSON.nodeUtil("Scene","Cone_dummy-ROT-INTERP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Direct01-TIMER")) {
X3DJSON.nodeUtil("Scene","Direct01-TIMER").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cone-POS-INTERP")) {
X3DJSON.nodeUtil("Scene","Cone-POS-INTERP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Direct01-TIMER")) {
X3DJSON.nodeUtil("Scene","Direct01-TIMER").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cone-ROT-INTERP")) {
X3DJSON.nodeUtil("Scene","Cone-ROT-INTERP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TimerThump")) {
X3DJSON.nodeUtil("Scene","TimerThump").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Thump2")) {
X3DJSON.nodeUtil("Scene","Thump2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TimerThump")) {
X3DJSON.nodeUtil("Scene","TimerThump").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","webP")) {
X3DJSON.nodeUtil("Scene","webP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","webP")) {
X3DJSON.nodeUtil("Scene","webP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","webP")) {
X3DJSON.nodeUtil("Scene","webP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TimerThump")) {
X3DJSON.nodeUtil("Scene","TimerThump").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PositionInterpolator3dP")) {
X3DJSON.nodeUtil("Scene","PositionInterpolator3dP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PositionInterpolator3dP")) {
X3DJSON.nodeUtil("Scene","PositionInterpolator3dP").addEventListener('outputchange', function(event) {
}, false);
}
