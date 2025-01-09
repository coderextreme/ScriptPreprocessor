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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/TestOrientationInterpolatorSize.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/TestOrientationInterpolatorSize.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/TestOrientationInterpolatorSize.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/TestOrientationInterpolatorSize.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/TestOrientationInterpolatorSize.json']['InitializeOI'] = function() {
	this.set_keys = function (value) {
		try {
			this.proxy.keys = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting keys '+e);
			console.error('Problems setting keys',e);
		}
	};
	this.keys_changed = function () {
		var value = this.keys;
		return value;
	};
	try {
		this.keys = new MFFloat([new SFFloat ( 0 ),new SFFloat ( 0.01 ),new SFFloat ( 0.02 ),new SFFloat ( 0.03 ),new SFFloat ( 0.04 ),new SFFloat ( 0.05 ),new SFFloat ( 0.06 ),new SFFloat ( 0.07 ),new SFFloat ( 0.08 ),new SFFloat ( 0.09 ),new SFFloat ( 0.1 ),new SFFloat ( 0.11 ),new SFFloat ( 0.12 ),new SFFloat ( 0.13 ),new SFFloat ( 0.14 ),new SFFloat ( 0.15 ),new SFFloat ( 0.16 ),new SFFloat ( 0.17 ),new SFFloat ( 0.18 ),new SFFloat ( 0.19 ),new SFFloat ( 0.2 ),new SFFloat ( 0.21 ),new SFFloat ( 0.22 ),new SFFloat ( 0.23 ),new SFFloat ( 0.24 ),new SFFloat ( 0.25 ),new SFFloat ( 0.26 ),new SFFloat ( 0.27 ),new SFFloat ( 0.28 ),new SFFloat ( 0.29 ),new SFFloat ( 0.3 ),new SFFloat ( 0.31 ),new SFFloat ( 0.32 ),new SFFloat ( 0.33 ),new SFFloat ( 0.34 ),new SFFloat ( 0.35 ),new SFFloat ( 0.36 ),new SFFloat ( 0.37 ),new SFFloat ( 0.38 ),new SFFloat ( 0.39 ),new SFFloat ( 0.4 ),new SFFloat ( 0.41 ),new SFFloat ( 0.42 ),new SFFloat ( 0.43 ),new SFFloat ( 0.44 ),new SFFloat ( 0.45 ),new SFFloat ( 0.46 ),new SFFloat ( 0.47 ),new SFFloat ( 0.48 ),new SFFloat ( 0.49 ),new SFFloat ( 0.5 ),new SFFloat ( 0.51 ),new SFFloat ( 0.52 ),new SFFloat ( 0.53 ),new SFFloat ( 0.54 ),new SFFloat ( 0.55 ),new SFFloat ( 0.56 ),new SFFloat ( 0.57 ),new SFFloat ( 0.58 ),new SFFloat ( 0.59 ),new SFFloat ( 0.6 ),new SFFloat ( 0.61 ),new SFFloat ( 0.62 ),new SFFloat ( 0.63 ),new SFFloat ( 0.64 ),new SFFloat ( 0.65 ),new SFFloat ( 0.66 ),new SFFloat ( 0.67 ),new SFFloat ( 0.68 ),new SFFloat ( 0.69 ),new SFFloat ( 0.7 ),new SFFloat ( 0.71 ),new SFFloat ( 0.72 ),new SFFloat ( 0.73 ),new SFFloat ( 0.74 ),new SFFloat ( 0.75 ),new SFFloat ( 0.76 ),new SFFloat ( 0.77 ),new SFFloat ( 0.78 ),new SFFloat ( 0.79 ),new SFFloat ( 0.8 ),new SFFloat ( 0.81 ),new SFFloat ( 0.82 ),new SFFloat ( 0.83 ),new SFFloat ( 0.84 ),new SFFloat ( 0.85 ),new SFFloat ( 0.86 ),new SFFloat ( 0.87 ),new SFFloat ( 0.88 ),new SFFloat ( 0.89 ),new SFFloat ( 0.9 ),new SFFloat ( 0.91 ),new SFFloat ( 0.92 ),new SFFloat ( 0.93 ),new SFFloat ( 0.94 ),new SFFloat ( 0.95 ),new SFFloat ( 0.96 ),new SFFloat ( 0.97 ),new SFFloat ( 0.98 ),new SFFloat ( 0.99 ),new SFFloat ( 1 )]);
	} catch (e) {
		console.log('Problems setting keys '+e);
		console.error('Problems setting keys',e);
	}
	this.set_keyValues = function (value) {
		try {
			this.proxy.keyValues = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting keyValues '+e);
			console.error('Problems setting keyValues',e);
		}
	};
	this.keyValues_changed = function () {
		var value = this.keyValues;
		return value;
	};
	try {
		this.keyValues = new MFRotation([new SFRotation ( 0 , 1 , 0 , 0 ),new SFRotation ( 0 , 1 , 0 , 1.57 ),new SFRotation ( 0 , 1 , 0 , 3.14 ),new SFRotation ( 0 , 1 , 0 , 4.71 ),new SFRotation ( 0 , 1 , 0 , 6.28 ),new SFRotation ( 0 , 1 , 0 , 0 ),new SFRotation ( 0 , 1 , 0 , 1.57 ),new SFRotation ( 0 , 1 , 0 , 3.14 ),new SFRotation ( 0 , 1 , 0 , 4.71 ),new SFRotation ( 0 , 1 , 0 , 6.28 ),new SFRotation ( 0 , 1 , 0 , 0 ),new SFRotation ( 0 , 1 , 0 , 1.57 ),new SFRotation ( 0 , 1 , 0 , 3.14 ),new SFRotation ( 0 , 1 , 0 , 4.71 ),new SFRotation ( 0 , 1 , 0 , 6.28 ),new SFRotation ( 0 , 1 , 0 , 0 ),new SFRotation ( 0 , 1 , 0 , 1.57 ),new SFRotation ( 0 , 1 , 0 , 3.14 ),new SFRotation ( 0 , 1 , 0 , 4.71 ),new SFRotation ( 0 , 1 , 0 , 6.28 ),new SFRotation ( 0 , 1 , 0 , 0 ),new SFRotation ( 0 , 1 , 0 , 1.57 ),new SFRotation ( 0 , 1 , 0 , 3.14 ),new SFRotation ( 0 , 1 , 0 , 4.71 ),new SFRotation ( 0 , 1 , 0 , 6.28 ),new SFRotation ( 0 , 1 , 0 , 0 ),new SFRotation ( 0 , 1 , 0 , 1.57 ),new SFRotation ( 0 , 1 , 0 , 3.14 ),new SFRotation ( 0 , 1 , 0 , 4.71 ),new SFRotation ( 0 , 1 , 0 , 6.28 ),new SFRotation ( 0 , 1 , 0 , 0 ),new SFRotation ( 0 , 1 , 0 , 1.57 ),new SFRotation ( 0 , 1 , 0 , 3.14 ),new SFRotation ( 0 , 1 , 0 , 4.71 ),new SFRotation ( 0 , 1 , 0 , 6.28 ),new SFRotation ( 0 , 1 , 0 , 0 ),new SFRotation ( 0 , 1 , 0 , 1.57 ),new SFRotation ( 0 , 1 , 0 , 3.14 ),new SFRotation ( 0 , 1 , 0 , 4.71 ),new SFRotation ( 0 , 1 , 0 , 6.28 ),new SFRotation ( 0 , 1 , 0 , 0 ),new SFRotation ( 0 , 1 , 0 , 1.57 ),new SFRotation ( 0 , 1 , 0 , 3.14 ),new SFRotation ( 0 , 1 , 0 , 4.71 ),new SFRotation ( 0 , 1 , 0 , 6.28 ),new SFRotation ( 0 , 1 , 0 , 0 ),new SFRotation ( 0 , 1 , 0 , 1.57 ),new SFRotation ( 0 , 1 , 0 , 3.14 ),new SFRotation ( 0 , 1 , 0 , 4.71 ),new SFRotation ( 0 , 1 , 0 , 6.28 ),new SFRotation ( 0 , 1 , 0 , 0 ),new SFRotation ( 0 , 1 , 0 , 1.57 ),new SFRotation ( 0 , 1 , 0 , 3.14 ),new SFRotation ( 0 , 1 , 0 , 4.71 ),new SFRotation ( 0 , 1 , 0 , 6.28 ),new SFRotation ( 0 , 1 , 0 , 0 ),new SFRotation ( 0 , 1 , 0 , 1.57 ),new SFRotation ( 0 , 1 , 0 , 3.14 ),new SFRotation ( 0 , 1 , 0 , 4.71 ),new SFRotation ( 0 , 1 , 0 , 6.28 ),new SFRotation ( 0 , 1 , 0 , 0 ),new SFRotation ( 0 , 1 , 0 , 1.57 ),new SFRotation ( 0 , 1 , 0 , 3.14 ),new SFRotation ( 0 , 1 , 0 , 4.71 ),new SFRotation ( 0 , 1 , 0 , 6.28 ),new SFRotation ( 0 , 1 , 0 , 0 ),new SFRotation ( 0 , 1 , 0 , 1.57 ),new SFRotation ( 0 , 1 , 0 , 3.14 ),new SFRotation ( 0 , 1 , 0 , 4.71 ),new SFRotation ( 0 , 1 , 0 , 6.28 ),new SFRotation ( 0 , 1 , 0 , 0 ),new SFRotation ( 0 , 1 , 0 , 1.57 ),new SFRotation ( 0 , 1 , 0 , 3.14 ),new SFRotation ( 0 , 1 , 0 , 4.71 ),new SFRotation ( 0 , 1 , 0 , 6.28 ),new SFRotation ( 0 , 1 , 0 , 0 ),new SFRotation ( 0 , 1 , 0 , 1.57 ),new SFRotation ( 0 , 1 , 0 , 3.14 ),new SFRotation ( 0 , 1 , 0 , 4.71 ),new SFRotation ( 0 , 1 , 0 , 6.28 ),new SFRotation ( 0 , 1 , 0 , 0 ),new SFRotation ( 0 , 1 , 0 , 1.57 ),new SFRotation ( 0 , 1 , 0 , 3.14 ),new SFRotation ( 0 , 1 , 0 , 4.71 ),new SFRotation ( 0 , 1 , 0 , 6.28 ),new SFRotation ( 0 , 1 , 0 , 0 ),new SFRotation ( 0 , 1 , 0 , 1.57 ),new SFRotation ( 0 , 1 , 0 , 3.14 ),new SFRotation ( 0 , 1 , 0 , 4.71 ),new SFRotation ( 0 , 1 , 0 , 6.28 ),new SFRotation ( 0 , 1 , 0 , 0 ),new SFRotation ( 0 , 1 , 0 , 1.57 ),new SFRotation ( 0 , 1 , 0 , 3.14 ),new SFRotation ( 0 , 1 , 0 , 4.71 ),new SFRotation ( 0 , 1 , 0 , 6.28 ),new SFRotation ( 0 , 1 , 0 , 0 ),new SFRotation ( 0 , 1 , 0 , 1.57 ),new SFRotation ( 0 , 1 , 0 , 3.14 ),new SFRotation ( 0 , 1 , 0 , 4.71 ),new SFRotation ( 0 , 1 , 0 , 6.28 ),new SFRotation ( 0 , 1 , 0 , 0 )]);
	} catch (e) {
		console.log('Problems setting keyValues '+e);
		console.error('Problems setting keyValues',e);
	}
	this.set_OI = function (value) {
		try {
			this.proxy.OI = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting OI '+e);
			console.error('Problems setting OI',e);
		}
	};
	this.OI_changed = function () {
		var value = this.OI;
		return value;
	};
	try {
		this.OI = X3DJSON.nodeUtil("Scene","OI");
	} catch (e) {
		console.log('Problems setting OI '+e);
		console.error('Problems setting OI',e);
	}


ecmascript:

	this.initialize = function ()
{
	X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","OI", "")", "key",  this.proxy.keys);
	X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","OI", "")", "keyValue",  this.proxy.keyValues);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/TestOrientationInterpolatorSize.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/TestOrientationInterpolatorSize.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/TestOrientationInterpolatorSize.json']['InitializeOI'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/TestOrientationInterpolatorSize.json']['InitializeOI']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/TestOrientationInterpolatorSize.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/TestOrientationInterpolatorSize.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/TestOrientationInterpolatorSize.json']['InitializeOI'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/TestOrientationInterpolatorSize.json']['InitializeOI'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/TestOrientationInterpolatorSize.json']['InitializeOI']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/TestOrientationInterpolatorSize.json']['InitializeOI']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/TestOrientationInterpolatorSize.json']['InitializeOI'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/TestOrientationInterpolatorSize.json']['InitializeOI']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/TestOrientationInterpolatorSize.json']['InitializeOI']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/TestOrientationInterpolatorSize.json']['InitializeOI'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/TestOrientationInterpolatorSize.json']['InitializeOI'].initialize();
    if (X3DJSON.nodeUtil("Scene","Clock")) {
X3DJSON.nodeUtil("Scene","Clock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","OI")) {
X3DJSON.nodeUtil("Scene","OI").addEventListener('outputchange', function(event) {
}, false);
}
