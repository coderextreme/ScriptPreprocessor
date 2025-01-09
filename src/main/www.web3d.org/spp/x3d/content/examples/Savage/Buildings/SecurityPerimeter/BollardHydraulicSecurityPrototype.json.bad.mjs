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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['HeightTypeConversion'] = function() {
	this.set_height = function (value) {
		try {
			this.proxy.height = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting height '+e);
			console.error('Problems setting height',e);
		}
	};
	this.height_changed = function () {
		var value = this.height;
		return value;
	};
	try {
		this.height = new SFFloat();
	} catch (e) {
		console.log('Problems setting height '+e);
		console.error('Problems setting height',e);
	}
	this.set_initialTranslation = function (value) {
		try {
			this.proxy.initialTranslation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting initialTranslation '+e);
			console.error('Problems setting initialTranslation',e);
		}
	};
	this.initialTranslation_changed = function () {
		var value = this.initialTranslation;
		return value;
	};
	try {
		this.initialTranslation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting initialTranslation '+e);
		console.error('Problems setting initialTranslation',e);
	}
	this.set_PI = function (value) {
		try {
			this.proxy.PI = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting PI '+e);
			console.error('Problems setting PI',e);
		}
	};
	this.PI_changed = function () {
		var value = this.PI;
		return value;
	};
	try {
		this.PI = X3DJSON.nodeUtil("Scene","HeightInterpolator");
	} catch (e) {
		console.log('Problems setting PI '+e);
		console.error('Problems setting PI',e);
	}


ecmascript:

	this.initialize = function ()
{
	// set initial Transform translation value to the correct this.proxy.height
	this.proxy.initialTranslation = new SFVec3f (0, -(this.proxy.height / 2), 0); // output event
	finalTranslation   = new SFVec3f (0,  (this.proxy.height / 2), 0);
//	console.error ('this.proxy.initialTranslation=' + this.proxy.initialTranslation);

	// customize PositionInterpolator to move correct vertical distance
	X3DJSON.nodeUtil("Scene","HeightInterpolator", "keyValue",  new MFVec3f (this.proxy.initialTranslation, finalTranslation));
//	console.error ('X3DJSON.nodeUtil("Scene","HeightInterpolator", "keyValue", ' + X3DJSON.nodeUtil("Scene","HeightInterpolator", "keyValue")));
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['HeightTypeConversion'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['HeightTypeConversion']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['HeightTypeConversion'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['HeightTypeConversion'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['HeightTypeConversion']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['HeightTypeConversion']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['HeightTypeConversion'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['HeightTypeConversion']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['HeightTypeConversion']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['HeightTypeConversion'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['HeightTypeConversion'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['ClockScript'] = function() {
	this.set_raise = function (value) {
		try {
			this.proxy.raise = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting raise '+e);
			console.error('Problems setting raise',e);
		}
	};
	this.raise_changed = function () {
		var value = this.raise;
		return value;
	};
	try {
		this.raise = new SFBool();
	} catch (e) {
		console.log('Problems setting raise '+e);
		console.error('Problems setting raise',e);
	}
	this.set_startRaising = function (value) {
		try {
			this.proxy.startRaising = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startRaising '+e);
			console.error('Problems setting startRaising',e);
		}
	};
	this.startRaising_changed = function () {
		var value = this.startRaising;
		return value;
	};
	try {
		this.startRaising = new SFTime();
	} catch (e) {
		console.log('Problems setting startRaising '+e);
		console.error('Problems setting startRaising',e);
	}


ecmascript:

	this.raise = function (value, timestamp)
{
	this.proxy.startRaising = timestamp;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['ClockScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['ClockScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['ClockScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['ClockScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['ClockScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['ClockScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['ClockScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['ClockScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['ClockScript'].initialize();
    if (X3DJSON.nodeUtil("Scene","HeightInterpolator")) {
X3DJSON.nodeUtil("Scene","HeightInterpolator").addEventListener('outputchange', function(event) {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['HeightTypeConversion'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['HeightTypeConversion'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['HeightTypeConversion']['ACTION']['initialTranslation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['HeightTypeConversion']['ACTION']['initialTranslation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['HeightTypeConversion']['ACTION']['initialTranslation'].push(function(property, value) {
		if (property === 'initialTranslation') {
			X3DJSON.nodeUtil("Scene","BollardTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['HeightTypeConversion'].initialTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['HeightTypeConversion'].initialTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['HeightTypeConversion'].initialTranslation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BollardTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['HeightTypeConversion'].initialTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['HeightTypeConversion'].initialTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['HeightTypeConversion'].initialTranslation, __eventTime);
    if (X3DJSON.nodeUtil("Scene","RaiseBollardClock")) {
X3DJSON.nodeUtil("Scene","RaiseBollardClock").addEventListener('outputchange', function(event) {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['ClockScript']['ACTION']['startRaising'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['ClockScript']['ACTION']['startRaising'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['ClockScript']['ACTION']['startRaising'].push(function(property, value) {
		if (property === 'startRaising') {
			X3DJSON.nodeUtil("Scene","RaiseBollardClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['ClockScript'].startRaising === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['ClockScript'].startRaising() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['ClockScript'].startRaising, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RaiseBollardClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['ClockScript'].startRaising === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['ClockScript'].startRaising() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['ClockScript'].startRaising, __eventTime);
    if (X3DJSON.nodeUtil("Scene","FractionReverser")) {
X3DJSON.nodeUtil("Scene","FractionReverser").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","LowerBollardClock")) {
X3DJSON.nodeUtil("Scene","LowerBollardClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","LowerTimeTrigger")) {
X3DJSON.nodeUtil("Scene","LowerTimeTrigger").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","StartLoweringFilter")) {
X3DJSON.nodeUtil("Scene","StartLoweringFilter").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClickToRaiseBollard")) {
X3DJSON.nodeUtil("Scene","ClickToRaiseBollard").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClickToLowerBollard")) {
X3DJSON.nodeUtil("Scene","ClickToLowerBollard").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON.nodeUtil("Scene","BollardTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['HeightTypeConversion'].initialTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['HeightTypeConversion'].initialTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['HeightTypeConversion'].initialTranslation, __eventTime);
			X3DJSON.nodeUtil("Scene","RaiseBollardClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['ClockScript'].startRaising === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['ClockScript'].startRaising() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/SecurityPerimeter/BollardHydraulicSecurityPrototype.json']['ClockScript'].startRaising, __eventTime);