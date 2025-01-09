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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'] = function() {
	this.set_inputUnits = function (value) {
		try {
			this.proxy.inputUnits = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting inputUnits '+e);
			console.error('Problems setting inputUnits',e);
		}
	};
	this.inputUnits_changed = function () {
		var value = this.inputUnits;
		return value;
	};
	try {
		this.inputUnits = new SFString("feet");
	} catch (e) {
		console.log('Problems setting inputUnits '+e);
		console.error('Problems setting inputUnits',e);
	}
	this.set_heightValues = function (value) {
		try {
			this.proxy.heightValues = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting heightValues '+e);
			console.error('Problems setting heightValues',e);
		}
	};
	this.heightValues_changed = function () {
		var value = this.heightValues;
		return value;
	};
	try {
		this.heightValues = new MFFloat([new SFFloat ( -101 ),new SFFloat ( -90 ),new SFFloat ( -84 ),new SFFloat ( -78 ),new SFFloat ( -72 ),new SFFloat ( -72 ),new SFFloat ( -70 ),new SFFloat ( -65 ),new SFFloat ( -62 ),new SFFloat ( -63 ),new SFFloat ( -55 ),new SFFloat ( -53 ),new SFFloat ( -50 ),new SFFloat ( -50 ),new SFFloat ( -47 ),new SFFloat ( -45 ),new SFFloat ( -45 ),new SFFloat ( -43 ),new SFFloat ( -42 ),new SFFloat ( -41 ),new SFFloat ( -38 ),new SFFloat ( -37 ),new SFFloat ( -37 ),new SFFloat ( -36 ),new SFFloat ( -34 ),new SFFloat ( -31 ),new SFFloat ( -31 ),new SFFloat ( -27 ),new SFFloat ( -26 ),new SFFloat ( -25 ),new SFFloat ( -23 ),new SFFloat ( -101 ),new SFFloat ( -90 ),new SFFloat ( -84 ),new SFFloat ( -78 ),new SFFloat ( -72 ),new SFFloat ( -72 ),new SFFloat ( -66 ),new SFFloat ( -66 ),new SFFloat ( -64 ),new SFFloat ( -58 ),new SFFloat ( -55 ),new SFFloat ( -53 ),new SFFloat ( -50 ),new SFFloat ( -48 ),new SFFloat ( -46 ),new SFFloat ( -45 ),new SFFloat ( -43 ),new SFFloat ( -42 ),new SFFloat ( -42 ),new SFFloat ( -39 ),new SFFloat ( -39 ),new SFFloat ( -37 ),new SFFloat ( -36 ),new SFFloat ( -34 ),new SFFloat ( -32 ),new SFFloat ( -31 ),new SFFloat ( -27 ),new SFFloat ( -26 ),new SFFloat ( -21 ),new SFFloat ( -24 ),new SFFloat ( -19 ),new SFFloat ( -86 ),new SFFloat ( -84 ),new SFFloat ( -78 ),new SFFloat ( -73 ),new SFFloat ( -72 ),new SFFloat ( -66 ),new SFFloat ( -66 ),new SFFloat ( -61 ),new SFFloat ( -57 ),new SFFloat ( -55 ),new SFFloat ( -52 ),new SFFloat ( -49 ),new SFFloat ( -48 ),new SFFloat ( -46 ),new SFFloat ( -45 ),new SFFloat ( -46 ),new SFFloat ( -45 ),new SFFloat ( -38 ),new SFFloat ( -38 ),new SFFloat ( -36 ),new SFFloat ( -33 ),new SFFloat ( -32 ),new SFFloat ( -32 ),new SFFloat ( -31 ),new SFFloat ( -30 ),new SFFloat ( -30 ),new SFFloat ( -25 ),new SFFloat ( -24 ),new SFFloat ( -22 ),new SFFloat ( -15 ),new SFFloat ( -9 ),new SFFloat ( -84 ),new SFFloat ( -78 ),new SFFloat ( -75 ),new SFFloat ( -72 ),new SFFloat ( -66 ),new SFFloat ( -65 ),new SFFloat ( -63 ),new SFFloat ( -58 ),new SFFloat ( -55 ),new SFFloat ( -53 ),new SFFloat ( -49 ),new SFFloat ( -47 ),new SFFloat ( -47 ),new SFFloat ( -45 ),new SFFloat ( -43 ),new SFFloat ( -42 ),new SFFloat ( -40 ),new SFFloat ( -39 ),new SFFloat ( -37.5 ),new SFFloat ( -35.5 ),new SFFloat ( -34 ),new SFFloat ( -32.5 ),new SFFloat ( -31 ),new SFFloat ( -32 ),new SFFloat ( -28 ),new SFFloat ( -26 ),new SFFloat ( -24 ),new SFFloat ( -21 ),new SFFloat ( -20 ),new SFFloat ( -8.5 ),new SFFloat ( -5 ),new SFFloat ( -79 ),new SFFloat ( -72 ),new SFFloat ( -70 ),new SFFloat ( -66 ),new SFFloat ( -66 ),new SFFloat ( -60 ),new SFFloat ( -57 ),new SFFloat ( -54 ),new SFFloat ( -52 ),new SFFloat ( -49 ),new SFFloat ( -48 ),new SFFloat ( -46 ),new SFFloat ( -44 ),new SFFloat ( -43 ),new SFFloat ( -43 ),new SFFloat ( -40 ),new SFFloat ( -40 ),new SFFloat ( -39 ),new SFFloat ( -36 ),new SFFloat ( -34 ),new SFFloat ( -33 ),new SFFloat ( -32 ),new SFFloat ( -31 ),new SFFloat ( -28 ),new SFFloat ( -26 ),new SFFloat ( -24 ),new SFFloat ( -22 ),new SFFloat ( -20 ),new SFFloat ( -10 ),new SFFloat ( -5 ),new SFFloat ( 0 ),new SFFloat ( -81 ),new SFFloat ( -72 ),new SFFloat ( -66 ),new SFFloat ( -63 ),new SFFloat ( -60 ),new SFFloat ( -58 ),new SFFloat ( -57 ),new SFFloat ( -54 ),new SFFloat ( -51 ),new SFFloat ( -49 ),new SFFloat ( -46 ),new SFFloat ( -46 ),new SFFloat ( -44 ),new SFFloat ( -42 ),new SFFloat ( -41 ),new SFFloat ( -40 ),new SFFloat ( -40 ),new SFFloat ( -41 ),new SFFloat ( -35.5 ),new SFFloat ( -35 ),new SFFloat ( -33 ),new SFFloat ( -31 ),new SFFloat ( -28 ),new SFFloat ( -27 ),new SFFloat ( -25 ),new SFFloat ( -23 ),new SFFloat ( -18 ),new SFFloat ( -13 ),new SFFloat ( -5 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( -72 ),new SFFloat ( -66 ),new SFFloat ( -64.5 ),new SFFloat ( -60 ),new SFFloat ( -59 ),new SFFloat ( -55 ),new SFFloat ( -54 ),new SFFloat ( -52 ),new SFFloat ( -48 ),new SFFloat ( -48 ),new SFFloat ( -45 ),new SFFloat ( -44 ),new SFFloat ( -42 ),new SFFloat ( -42 ),new SFFloat ( -41 ),new SFFloat ( -40 ),new SFFloat ( -39.5 ),new SFFloat ( -38 ),new SFFloat ( -36 ),new SFFloat ( -35 ),new SFFloat ( -34 ),new SFFloat ( -29 ),new SFFloat ( -28 ),new SFFloat ( -24 ),new SFFloat ( -23 ),new SFFloat ( -18 ),new SFFloat ( -12 ),new SFFloat ( -5 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( -70 ),new SFFloat ( -65 ),new SFFloat ( -62 ),new SFFloat ( -61 ),new SFFloat ( -54 ),new SFFloat ( -54 ),new SFFloat ( -51 ),new SFFloat ( -49 ),new SFFloat ( -48 ),new SFFloat ( -45 ),new SFFloat ( -45 ),new SFFloat ( -44 ),new SFFloat ( -43 ),new SFFloat ( -40 ),new SFFloat ( -39.7 ),new SFFloat ( -39 ),new SFFloat ( -38 ),new SFFloat ( -35 ),new SFFloat ( -34 ),new SFFloat ( -33 ),new SFFloat ( -31 ),new SFFloat ( -28.7 ),new SFFloat ( -26 ),new SFFloat ( -23 ),new SFFloat ( -19 ),new SFFloat ( -14 ),new SFFloat ( -5 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( -63 ),new SFFloat ( -61 ),new SFFloat ( -60 ),new SFFloat ( -55 ),new SFFloat ( -54 ),new SFFloat ( -51 ),new SFFloat ( -50 ),new SFFloat ( -50 ),new SFFloat ( -47 ),new SFFloat ( -44 ),new SFFloat ( -43 ),new SFFloat ( -41 ),new SFFloat ( -39 ),new SFFloat ( -38 ),new SFFloat ( -37 ),new SFFloat ( -36 ),new SFFloat ( -36 ),new SFFloat ( -36 ),new SFFloat ( -33 ),new SFFloat ( -33 ),new SFFloat ( -31 ),new SFFloat ( -27 ),new SFFloat ( -24 ),new SFFloat ( -19 ),new SFFloat ( -12 ),new SFFloat ( -5 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( -60 ),new SFFloat ( -59 ),new SFFloat ( -55 ),new SFFloat ( -53 ),new SFFloat ( -50 ),new SFFloat ( -50 ),new SFFloat ( -49 ),new SFFloat ( -48 ),new SFFloat ( -45 ),new SFFloat ( -44 ),new SFFloat ( -41 ),new SFFloat ( -39.5 ),new SFFloat ( -39 ),new SFFloat ( -37 ),new SFFloat ( -36.5 ),new SFFloat ( -36 ),new SFFloat ( -34 ),new SFFloat ( -34 ),new SFFloat ( -32 ),new SFFloat ( -30.5 ),new SFFloat ( -29 ),new SFFloat ( -27 ),new SFFloat ( -20 ),new SFFloat ( -15 ),new SFFloat ( -8 ),new SFFloat ( -2 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( -58 ),new SFFloat ( -56.5 ),new SFFloat ( -54 ),new SFFloat ( -50 ),new SFFloat ( -50 ),new SFFloat ( -49 ),new SFFloat ( -48 ),new SFFloat ( -47 ),new SFFloat ( -44 ),new SFFloat ( -42 ),new SFFloat ( -39 ),new SFFloat ( -38.5 ),new SFFloat ( -37 ),new SFFloat ( -36 ),new SFFloat ( -36 ),new SFFloat ( -29.7 ),new SFFloat ( -33 ),new SFFloat ( -32 ),new SFFloat ( -31 ),new SFFloat ( -29 ),new SFFloat ( -27.7 ),new SFFloat ( -22 ),new SFFloat ( -16 ),new SFFloat ( -9 ),new SFFloat ( -2 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( -55 ),new SFFloat ( -53 ),new SFFloat ( -50 ),new SFFloat ( -49 ),new SFFloat ( -48 ),new SFFloat ( -47 ),new SFFloat ( -43 ),new SFFloat ( -44 ),new SFFloat ( -44 ),new SFFloat ( -40 ),new SFFloat ( -39 ),new SFFloat ( -38 ),new SFFloat ( -37 ),new SFFloat ( -36 ),new SFFloat ( -34 ),new SFFloat ( -33.5 ),new SFFloat ( -31 ),new SFFloat ( -30 ),new SFFloat ( -27.5 ),new SFFloat ( -26 ),new SFFloat ( -23 ),new SFFloat ( -17 ),new SFFloat ( -11 ),new SFFloat ( -2 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( -54 ),new SFFloat ( -51 ),new SFFloat ( -50 ),new SFFloat ( -47 ),new SFFloat ( -47 ),new SFFloat ( -47 ),new SFFloat ( -45 ),new SFFloat ( -45 ),new SFFloat ( -43 ),new SFFloat ( -41 ),new SFFloat ( -39 ),new SFFloat ( -37 ),new SFFloat ( -36 ),new SFFloat ( -35 ),new SFFloat ( -33 ),new SFFloat ( -32 ),new SFFloat ( -30 ),new SFFloat ( -29 ),new SFFloat ( -27 ),new SFFloat ( -24.5 ),new SFFloat ( -21 ),new SFFloat ( -15 ),new SFFloat ( -5 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( -53 ),new SFFloat ( -51 ),new SFFloat ( -48 ),new SFFloat ( -46 ),new SFFloat ( -44 ),new SFFloat ( -44.5 ),new SFFloat ( -43 ),new SFFloat ( -42 ),new SFFloat ( -41 ),new SFFloat ( -40 ),new SFFloat ( -36.5 ),new SFFloat ( -35 ),new SFFloat ( -34.5 ),new SFFloat ( -35 ),new SFFloat ( -18 ),new SFFloat ( -31 ),new SFFloat ( -29 ),new SFFloat ( -26 ),new SFFloat ( -24 ),new SFFloat ( -20 ),new SFFloat ( -13 ),new SFFloat ( -5 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( -52 ),new SFFloat ( -50 ),new SFFloat ( -47 ),new SFFloat ( -45 ),new SFFloat ( -44 ),new SFFloat ( -44 ),new SFFloat ( -43 ),new SFFloat ( -42 ),new SFFloat ( -40 ),new SFFloat ( -38 ),new SFFloat ( -36.5 ),new SFFloat ( -34 ),new SFFloat ( -32.5 ),new SFFloat ( -31 ),new SFFloat ( -31 ),new SFFloat ( -29.5 ),new SFFloat ( -26.7 ),new SFFloat ( -24.5 ),new SFFloat ( -20 ),new SFFloat ( -13 ),new SFFloat ( -7 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( -49.5 ),new SFFloat ( -49 ),new SFFloat ( -47 ),new SFFloat ( -45 ),new SFFloat ( -43 ),new SFFloat ( -41.5 ),new SFFloat ( -40 ),new SFFloat ( -39.5 ),new SFFloat ( -37.5 ),new SFFloat ( -34 ),new SFFloat ( -34 ),new SFFloat ( -33 ),new SFFloat ( -33 ),new SFFloat ( -32 ),new SFFloat ( -28.5 ),new SFFloat ( -28 ),new SFFloat ( -26 ),new SFFloat ( -21 ),new SFFloat ( -15 ),new SFFloat ( -8 ),new SFFloat ( -1 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( -49 ),new SFFloat ( -48 ),new SFFloat ( -46 ),new SFFloat ( -46 ),new SFFloat ( -44 ),new SFFloat ( -40 ),new SFFloat ( -41 ),new SFFloat ( -38.5 ),new SFFloat ( -37 ),new SFFloat ( -37 ),new SFFloat ( -36.5 ),new SFFloat ( -33 ),new SFFloat ( -32.5 ),new SFFloat ( -30 ),new SFFloat ( -27 ),new SFFloat ( -26 ),new SFFloat ( -22 ),new SFFloat ( -14 ),new SFFloat ( -10 ),new SFFloat ( -1 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( -47 ),new SFFloat ( -46 ),new SFFloat ( -45 ),new SFFloat ( -45 ),new SFFloat ( -44 ),new SFFloat ( -41 ),new SFFloat ( -40 ),new SFFloat ( -38 ),new SFFloat ( -37 ),new SFFloat ( -34 ),new SFFloat ( -33 ),new SFFloat ( -32.5 ),new SFFloat ( -31 ),new SFFloat ( -28.7 ),new SFFloat ( -26 ),new SFFloat ( -22 ),new SFFloat ( -19 ),new SFFloat ( -10 ),new SFFloat ( -3 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( -45 ),new SFFloat ( -44.5 ),new SFFloat ( -42 ),new SFFloat ( -42 ),new SFFloat ( -42 ),new SFFloat ( -40 ),new SFFloat ( -39 ),new SFFloat ( -37.5 ),new SFFloat ( -36 ),new SFFloat ( -32.5 ),new SFFloat ( -31 ),new SFFloat ( -31 ),new SFFloat ( -29 ),new SFFloat ( -26 ),new SFFloat ( -23 ),new SFFloat ( -20 ),new SFFloat ( -10 ),new SFFloat ( -5 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( -44 ),new SFFloat ( -45 ),new SFFloat ( -40 ),new SFFloat ( -40 ),new SFFloat ( -39 ),new SFFloat ( -38 ),new SFFloat ( -37.5 ),new SFFloat ( -35 ),new SFFloat ( -33 ),new SFFloat ( -31.5 ),new SFFloat ( -30 ),new SFFloat ( -29 ),new SFFloat ( -26 ),new SFFloat ( -24 ),new SFFloat ( -20 ),new SFFloat ( -12 ),new SFFloat ( -6 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( -43 ),new SFFloat ( -41 ),new SFFloat ( -39.5 ),new SFFloat ( -39 ),new SFFloat ( -38 ),new SFFloat ( -36 ),new SFFloat ( -35 ),new SFFloat ( -32 ),new SFFloat ( -32 ),new SFFloat ( -30 ),new SFFloat ( -28 ),new SFFloat ( -27 ),new SFFloat ( -24 ),new SFFloat ( -20 ),new SFFloat ( -12 ),new SFFloat ( -5 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( -40 ),new SFFloat ( -39 ),new SFFloat ( -39 ),new SFFloat ( -39 ),new SFFloat ( -36 ),new SFFloat ( -34 ),new SFFloat ( -32 ),new SFFloat ( -31 ),new SFFloat ( -30 ),new SFFloat ( -27 ),new SFFloat ( -26 ),new SFFloat ( -24 ),new SFFloat ( -20 ),new SFFloat ( -12 ),new SFFloat ( -5 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( -39 ),new SFFloat ( -38.5 ),new SFFloat ( -38 ),new SFFloat ( -38 ),new SFFloat ( -34 ),new SFFloat ( -33 ),new SFFloat ( -31 ),new SFFloat ( -30 ),new SFFloat ( -27 ),new SFFloat ( -25 ),new SFFloat ( -24 ),new SFFloat ( -21 ),new SFFloat ( -13 ),new SFFloat ( -6 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( -38 ),new SFFloat ( -37 ),new SFFloat ( -36.5 ),new SFFloat ( -34 ),new SFFloat ( -32 ),new SFFloat ( -31 ),new SFFloat ( -29.7 ),new SFFloat ( -28 ),new SFFloat ( -26 ),new SFFloat ( -24 ),new SFFloat ( -20.5 ),new SFFloat ( -14 ),new SFFloat ( -7 ),new SFFloat ( -2 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( -37 ),new SFFloat ( -37 ),new SFFloat ( -33.8 ),new SFFloat ( -33 ),new SFFloat ( -31 ),new SFFloat ( -29 ),new SFFloat ( -28.5 ),new SFFloat ( -26.7 ),new SFFloat ( -25.5 ),new SFFloat ( -20 ),new SFFloat ( -14 ),new SFFloat ( -7 ),new SFFloat ( -2 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( -34 ),new SFFloat ( -39 ),new SFFloat ( -33 ),new SFFloat ( -31 ),new SFFloat ( -29 ),new SFFloat ( -27 ),new SFFloat ( -27 ),new SFFloat ( -24 ),new SFFloat ( -21 ),new SFFloat ( -16 ),new SFFloat ( -7 ),new SFFloat ( -2 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( -34 ),new SFFloat ( -36 ),new SFFloat ( -33 ),new SFFloat ( -30 ),new SFFloat ( -28 ),new SFFloat ( -26 ),new SFFloat ( -26 ),new SFFloat ( -22 ),new SFFloat ( -15 ),new SFFloat ( -8 ),new SFFloat ( -2 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( -32 ),new SFFloat ( -32 ),new SFFloat ( -29 ),new SFFloat ( -27.5 ),new SFFloat ( -25.7 ),new SFFloat ( -25 ),new SFFloat ( -23 ),new SFFloat ( -15 ),new SFFloat ( -8 ),new SFFloat ( -2 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( -33 ),new SFFloat ( -30 ),new SFFloat ( -27 ),new SFFloat ( -26 ),new SFFloat ( -24 ),new SFFloat ( -21 ),new SFFloat ( -16 ),new SFFloat ( -9 ),new SFFloat ( -2 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 ),new SFFloat ( 0 )]);
	} catch (e) {
		console.log('Problems setting heightValues '+e);
		console.error('Problems setting heightValues',e);
	}
	this.set_heightValuesOutput = function (value) {
		try {
			this.proxy.heightValuesOutput = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting heightValuesOutput '+e);
			console.error('Problems setting heightValuesOutput',e);
		}
	};
	this.heightValuesOutput_changed = function () {
		var value = this.heightValuesOutput;
		return value;
	};
	try {
		this.heightValuesOutput = new MFFloat();
	} catch (e) {
		console.log('Problems setting heightValuesOutput '+e);
		console.error('Problems setting heightValuesOutput',e);
	}
	this.set_colorValuesOutput = function (value) {
		try {
			this.proxy.colorValuesOutput = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting colorValuesOutput '+e);
			console.error('Problems setting colorValuesOutput',e);
		}
	};
	this.colorValuesOutput_changed = function () {
		var value = this.colorValuesOutput;
		return value;
	};
	try {
		this.colorValuesOutput = new MFColor();
	} catch (e) {
		console.log('Problems setting colorValuesOutput '+e);
		console.error('Problems setting colorValuesOutput',e);
	}


ecmascript:

	this.initialize = function ()
{
	totalHeights=this.proxy.heightValues.length;
	heightValuesHold = new MFFloat (0);
//	console.error ('totalHeights=this.proxy.heightValues.length=' + totalHeights);

  // this depth band defined to match fathoms to 60 feet, then 10' increments, doesn't match MEDAL
  depthBand = new MFFloat (0,-6,-12,-18,-24,-30,-36,-42,-48,-54,-60,-70,-80,-90,-100);

  if (this.proxy.inputUnits == 'feet')
  {
	for ( index = 1; index <= totalHeights ; index++ )
	{
		// 1 meter = 39.3 inches
		heightValuesHold[index] = this.proxy.heightValues[index] * (12.0 / 39.3);
	}
	this.proxy.heightValuesOutput = heightValuesHold;
  }
  else
  {
	for ( index = 1; index <= depthBand.length ; index++ )
	{
		// 1 meter = 39.3 inches
		depthBand[index] *= (39.31 / 2.0);
	}
	this.proxy.heightValuesOutput = this.proxy.heightValues;
  }
  brown		= new SFColor (0.2, 0.2, 0);
  white		= new SFColor (1, 1, 1);
  red		= new SFColor (1, 0, 0);
  orange	= new SFColor (1, .529, 0);
  yellow	= new SFColor (1, 1, 0);
  green		= new SFColor (0, 1, 0);
  cyan		= new SFColor (0, 1, 1);
  blue		= new SFColor (0, 0, 1);
  magenta	= new SFColor (1, 0, 1);
  maroon	= new SFColor (0.561, 0, 0.322);
  tan		= new SFColor (0.871, 0.721, 0.529);
  seaGreen	= new SFColor (0.322, 0.584, 0.517);
  slateBlue	= new SFColor (0.494, 0.533, 0.671);
  navyBlue	= new SFColor (0.137, 0.137, 0.459);
  grey		= new SFColor (0.5,   0.5,   0.5);
  slateGrey	= new SFColor (0.439, 0.502, 0.565);
  skyBlue	= new SFColor (0.6, 0.6, 1.0);
  olive		= new SFColor (0.1, 0.4, 0);
  black		= new SFColor (0.1, 0.1, 0.1);

  this.proxy.colorValuesOutput = new MFColor (); // array gets dynamically expanded
  for ( index = 1; index <= totalHeights ; index++ )
  {
	if      (this.proxy.heightValues[index] > depthBand[1])  this.proxy.colorValuesOutput [index] = brown;
	else if (this.proxy.heightValues[index] > depthBand[2])  this.proxy.colorValuesOutput [index] = cyan;
	else if (this.proxy.heightValues[index] > depthBand[3])  this.proxy.colorValuesOutput [index] = red;
	else if (this.proxy.heightValues[index] > depthBand[4])  this.proxy.colorValuesOutput [index] = orange;
	else if (this.proxy.heightValues[index] > depthBand[5])  this.proxy.colorValuesOutput [index] = yellow;
	else if (this.proxy.heightValues[index] > depthBand[6])  this.proxy.colorValuesOutput [index] = tan;
	else if (this.proxy.heightValues[index] > depthBand[7])  this.proxy.colorValuesOutput [index] = grey;
	else if (this.proxy.heightValues[index] > depthBand[8])  this.proxy.colorValuesOutput [index] = olive;
	else if (this.proxy.heightValues[index] > depthBand[9])  this.proxy.colorValuesOutput [index] = green;
	else if (this.proxy.heightValues[index] > depthBand[10]) this.proxy.colorValuesOutput [index] = seaGreen;
	else if (this.proxy.heightValues[index] > depthBand[11]) this.proxy.colorValuesOutput [index] = navyBlue;
	else if (this.proxy.heightValues[index] > depthBand[12]) this.proxy.colorValuesOutput [index] = blue;
	else if (this.proxy.heightValues[index] > depthBand[13]) this.proxy.colorValuesOutput [index] = slateBlue;
	else if (this.proxy.heightValues[index] > depthBand[14]) this.proxy.colorValuesOutput [index] = skyBlue;
	else if (this.proxy.heightValues[index] > depthBand[15]) this.proxy.colorValuesOutput [index] = slateGrey;
	else                                          this.proxy.colorValuesOutput [index] = black;

//	if      (this.proxy.heightValues[index] > depthBand[1])  this.proxy.colorValuesOutput [index] = brown;
//	else if (this.proxy.heightValues[index] > depthBand[2])  this.proxy.colorValuesOutput [index] = yellow;
//	else if (this.proxy.heightValues[index] > depthBand[3])  this.proxy.colorValuesOutput [index] = green;
//	else if (this.proxy.heightValues[index] > depthBand[4])  this.proxy.colorValuesOutput [index] = cyan;
//	else if (this.proxy.heightValues[index] > depthBand[5])  this.proxy.colorValuesOutput [index] = magenta;
//	else if (this.proxy.heightValues[index] > depthBand[6])  this.proxy.colorValuesOutput [index] = tan;
//	else if (this.proxy.heightValues[index] > depthBand[7])  this.proxy.colorValuesOutput [index] = skyBlue;
//	else if (this.proxy.heightValues[index] > depthBand[8])  this.proxy.colorValuesOutput [index] = red;
//	else if (this.proxy.heightValues[index] > depthBand[9])  this.proxy.colorValuesOutput [index] = grey;
//	else if (this.proxy.heightValues[index] > depthBand[10]) this.proxy.colorValuesOutput [index] = seaGreen;
//	else if (this.proxy.heightValues[index] > depthBand[11]) this.proxy.colorValuesOutput [index] = slateBlue;
//	else if (this.proxy.heightValues[index] > depthBand[12]) this.proxy.colorValuesOutput [index] = olive;
//	else if (this.proxy.heightValues[index] > depthBand[13]) this.proxy.colorValuesOutput [index] = black;
//	else if (this.proxy.heightValues[index] > depthBand[14]) this.proxy.colorValuesOutput [index] = navyBlue;
//	else if (this.proxy.heightValues[index] > depthBand[15]) this.proxy.colorValuesOutput [index] = slateGrey;
//	else                                          this.proxy.colorValuesOutput [index] = orange;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL']['ACTION']['heightValuesOutput'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL']['ACTION']['heightValuesOutput'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL']['ACTION']['heightValuesOutput'].push(function(property, value) {
		if (property === 'heightValuesOutput') {
			X3DJSON.nodeUtil("Scene","BathymetryGrid","height",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'].heightValuesOutput === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'].heightValuesOutput() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'].heightValuesOutput, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BathymetryGrid","height",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'].heightValuesOutput === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'].heightValuesOutput() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'].heightValuesOutput, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL']['ACTION']['colorValuesOutput'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL']['ACTION']['colorValuesOutput'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL']['ACTION']['colorValuesOutput'].push(function(property, value) {
		if (property === 'colorValuesOutput') {
			X3DJSON.nodeUtil("Scene","BathymetryGridColorNodeCalculated","color",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'].colorValuesOutput === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'].colorValuesOutput() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'].colorValuesOutput, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BathymetryGridColorNodeCalculated","color",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'].colorValuesOutput === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'].colorValuesOutput() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'].colorValuesOutput, __eventTime);
			X3DJSON.nodeUtil("Scene","BathymetryGrid","height",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'].heightValuesOutput === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'].heightValuesOutput() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'].heightValuesOutput, __eventTime);
			X3DJSON.nodeUtil("Scene","BathymetryGridColorNodeCalculated","color",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'].colorValuesOutput === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'].colorValuesOutput() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/CampPendletonCalifornia/ChartletTranscribed.json']['CalculateColorSchemeMEDAL'].colorValuesOutput, __eventTime);