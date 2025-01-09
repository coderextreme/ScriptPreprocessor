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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Spiral.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Spiral.json'] = {};
}

    if (X3DJSON.nodeUtil("Scene","Timer1")) {
X3DJSON.nodeUtil("Scene","Timer1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Position1")) {
X3DJSON.nodeUtil("Scene","Position1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Timer1")) {
X3DJSON.nodeUtil("Scene","Timer1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Color1")) {
X3DJSON.nodeUtil("Scene","Color1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Timer2")) {
X3DJSON.nodeUtil("Scene","Timer2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Position2")) {
X3DJSON.nodeUtil("Scene","Position2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Timer2")) {
X3DJSON.nodeUtil("Scene","Timer2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Color2")) {
X3DJSON.nodeUtil("Scene","Color2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Timer3")) {
X3DJSON.nodeUtil("Scene","Timer3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Position3")) {
X3DJSON.nodeUtil("Scene","Position3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Timer3")) {
X3DJSON.nodeUtil("Scene","Timer3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Color3")) {
X3DJSON.nodeUtil("Scene","Color3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Timer4")) {
X3DJSON.nodeUtil("Scene","Timer4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Position4")) {
X3DJSON.nodeUtil("Scene","Position4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Timer4")) {
X3DJSON.nodeUtil("Scene","Timer4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Color4")) {
X3DJSON.nodeUtil("Scene","Color4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Timer5")) {
X3DJSON.nodeUtil("Scene","Timer5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Position5")) {
X3DJSON.nodeUtil("Scene","Position5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Timer5")) {
X3DJSON.nodeUtil("Scene","Timer5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Color5")) {
X3DJSON.nodeUtil("Scene","Color5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Timer6")) {
X3DJSON.nodeUtil("Scene","Timer6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Position6")) {
X3DJSON.nodeUtil("Scene","Position6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Timer6")) {
X3DJSON.nodeUtil("Scene","Timer6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Color6")) {
X3DJSON.nodeUtil("Scene","Color6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Timer7")) {
X3DJSON.nodeUtil("Scene","Timer7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Position7")) {
X3DJSON.nodeUtil("Scene","Position7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Timer7")) {
X3DJSON.nodeUtil("Scene","Timer7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Color7")) {
X3DJSON.nodeUtil("Scene","Color7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Timer8")) {
X3DJSON.nodeUtil("Scene","Timer8").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Position8")) {
X3DJSON.nodeUtil("Scene","Position8").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Timer8")) {
X3DJSON.nodeUtil("Scene","Timer8").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Color8")) {
X3DJSON.nodeUtil("Scene","Color8").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Timer9")) {
X3DJSON.nodeUtil("Scene","Timer9").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Position9")) {
X3DJSON.nodeUtil("Scene","Position9").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Timer9")) {
X3DJSON.nodeUtil("Scene","Timer9").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Color9")) {
X3DJSON.nodeUtil("Scene","Color9").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Timer10")) {
X3DJSON.nodeUtil("Scene","Timer10").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Position10")) {
X3DJSON.nodeUtil("Scene","Position10").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Timer10")) {
X3DJSON.nodeUtil("Scene","Timer10").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Color10")) {
X3DJSON.nodeUtil("Scene","Color10").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Timer11")) {
X3DJSON.nodeUtil("Scene","Timer11").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Position11")) {
X3DJSON.nodeUtil("Scene","Position11").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Timer11")) {
X3DJSON.nodeUtil("Scene","Timer11").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Color11")) {
X3DJSON.nodeUtil("Scene","Color11").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Timer12")) {
X3DJSON.nodeUtil("Scene","Timer12").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Position12")) {
X3DJSON.nodeUtil("Scene","Position12").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Timer12")) {
X3DJSON.nodeUtil("Scene","Timer12").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Color12")) {
X3DJSON.nodeUtil("Scene","Color12").addEventListener('outputchange', function(event) {
}, false);
}
