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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'] = function() {
	this.set_barrelRotation = function (value) {
		try {
			this.proxy.barrelRotation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting barrelRotation '+e);
			console.error('Problems setting barrelRotation',e);
		}
	};
	this.barrelRotation_changed = function () {
		var value = this.barrelRotation;
		return value;
	};
	try {
		this.barrelRotation = new SFRotation();
	} catch (e) {
		console.log('Problems setting barrelRotation '+e);
		console.error('Problems setting barrelRotation',e);
	}
	this.set_upperRotation = function (value) {
		try {
			this.proxy.upperRotation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting upperRotation '+e);
			console.error('Problems setting upperRotation',e);
		}
	};
	this.upperRotation_changed = function () {
		var value = this.upperRotation;
		return value;
	};
	try {
		this.upperRotation = new SFRotation();
	} catch (e) {
		console.log('Problems setting upperRotation '+e);
		console.error('Problems setting upperRotation',e);
	}
	this.set_shrinkCylinder = function (value) {
		try {
			this.proxy.shrinkCylinder = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting shrinkCylinder '+e);
			console.error('Problems setting shrinkCylinder',e);
		}
	};
	this.shrinkCylinder_changed = function () {
		var value = this.shrinkCylinder;
		return value;
	};
	try {
		this.shrinkCylinder = new SFVec3f();
	} catch (e) {
		console.log('Problems setting shrinkCylinder '+e);
		console.error('Problems setting shrinkCylinder',e);
	}
	this.set_extendCylinder = function (value) {
		try {
			this.proxy.extendCylinder = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting extendCylinder '+e);
			console.error('Problems setting extendCylinder',e);
		}
	};
	this.extendCylinder_changed = function () {
		var value = this.extendCylinder;
		return value;
	};
	try {
		this.extendCylinder = new SFVec3f();
	} catch (e) {
		console.log('Problems setting extendCylinder '+e);
		console.error('Problems setting extendCylinder',e);
	}


ecmascript:

	this.barrelRotation = function (value, eventTime ) {
	angle = value[3];
	outputAngle = .75 * angle;
	this.proxy.upperRotation = new SFRotation ( 0, 1, 0, outputAngle);
	this.proxy.extendCylinder = new SFVec3f ( 0, .22 + (-.7 * angle), 0);	
	this.proxy.shrinkCylinder = new SFVec3f (1, 1.02 * (.85 - angle), 1);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].initialize();
    if (X3DJSON.nodeUtil("Scene","trailSpreader")) {
X3DJSON.nodeUtil("Scene","trailSpreader").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","lTrailSpreader")) {
X3DJSON.nodeUtil("Scene","lTrailSpreader").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BoxUpTimer")) {
X3DJSON.nodeUtil("Scene","BoxUpTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","wheelUp")) {
X3DJSON.nodeUtil("Scene","wheelUp").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClearSphere1")) {
X3DJSON.nodeUtil("Scene","ClearSphere1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BoxDownTimer")) {
X3DJSON.nodeUtil("Scene","BoxDownTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","wheelDown")) {
X3DJSON.nodeUtil("Scene","wheelDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClearSphere2")) {
X3DJSON.nodeUtil("Scene","ClearSphere2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClearSphere1")) {
X3DJSON.nodeUtil("Scene","ClearSphere1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClearSphere2")) {
X3DJSON.nodeUtil("Scene","ClearSphere2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","SetBoxUp")) {
X3DJSON.nodeUtil("Scene","SetBoxUp").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","SetBoxDown")) {
X3DJSON.nodeUtil("Scene","SetBoxDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","tubeSensor")) {
X3DJSON.nodeUtil("Scene","tubeSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","travelLockSensor")) {
X3DJSON.nodeUtil("Scene","travelLockSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","travelLockClock")) {
X3DJSON.nodeUtil("Scene","travelLockClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","travelLockOrientor")) {
X3DJSON.nodeUtil("Scene","travelLockOrientor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RECOILTIMER")) {
X3DJSON.nodeUtil("Scene","RECOILTIMER").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","recoil")) {
X3DJSON.nodeUtil("Scene","recoil").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BOOMCLOCK")) {
X3DJSON.nodeUtil("Scene","BOOMCLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BALLSIZE")) {
X3DJSON.nodeUtil("Scene","BALLSIZE").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BoomTimer")) {
X3DJSON.nodeUtil("Scene","BoomTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ScaleInterp")) {
X3DJSON.nodeUtil("Scene","ScaleInterp").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BoomTimer")) {
X3DJSON.nodeUtil("Scene","BoomTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TransparencyInterp")) {
X3DJSON.nodeUtil("Scene","TransparencyInterp").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","tubeSensor")) {
X3DJSON.nodeUtil("Scene","tubeSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].barrelRotation(X3DJSON.nodeUtil("Scene","tubeSensor","rotation"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].barrelRotation(X3DJSON.nodeUtil("Scene","tubeSensor","rotation"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover']['ACTION']['upperRotation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover']['ACTION']['upperRotation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover']['ACTION']['upperRotation'].push(function(property, value) {
		if (property === 'upperRotation') {
			X3DJSON.nodeUtil("Scene","ruc","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].upperRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].upperRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].upperRotation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ruc","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].upperRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].upperRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].upperRotation, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover']['ACTION']['extendCylinder'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover']['ACTION']['extendCylinder'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover']['ACTION']['extendCylinder'].push(function(property, value) {
		if (property === 'extendCylinder') {
			X3DJSON.nodeUtil("Scene","shrinkCylinder","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].extendCylinder === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].extendCylinder() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].extendCylinder, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","shrinkCylinder","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].extendCylinder === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].extendCylinder() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].extendCylinder, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover']['ACTION']['shrinkCylinder'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover']['ACTION']['shrinkCylinder'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover']['ACTION']['shrinkCylinder'].push(function(property, value) {
		if (property === 'shrinkCylinder') {
			X3DJSON.nodeUtil("Scene","shrinkCylinder","scale",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].shrinkCylinder === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].shrinkCylinder() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].shrinkCylinder, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","shrinkCylinder","scale",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].shrinkCylinder === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].shrinkCylinder() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].shrinkCylinder, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover']['ACTION']['extendCylinder'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover']['ACTION']['extendCylinder'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover']['ACTION']['extendCylinder'].push(function(property, value) {
		if (property === 'extendCylinder') {
			X3DJSON.nodeUtil("Scene","shrinkCylinderR","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].extendCylinder === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].extendCylinder() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].extendCylinder, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","shrinkCylinderR","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].extendCylinder === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].extendCylinder() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].extendCylinder, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover']['ACTION']['shrinkCylinder'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover']['ACTION']['shrinkCylinder'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover']['ACTION']['shrinkCylinder'].push(function(property, value) {
		if (property === 'shrinkCylinder') {
			X3DJSON.nodeUtil("Scene","shrinkCylinderR","scale",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].shrinkCylinder === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].shrinkCylinder() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].shrinkCylinder, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","shrinkCylinderR","scale",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].shrinkCylinder === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].shrinkCylinder() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].shrinkCylinder, __eventTime);
    if (X3DJSON.nodeUtil("Scene","carriage_sensor")) {
X3DJSON.nodeUtil("Scene","carriage_sensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","wheelSensor")) {
X3DJSON.nodeUtil("Scene","wheelSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","CLOCK")) {
X3DJSON.nodeUtil("Scene","CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","wheelInterpolator")) {
X3DJSON.nodeUtil("Scene","wheelInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","explosionsensor")) {
X3DJSON.nodeUtil("Scene","explosionsensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","explosionsoundsensor")) {
X3DJSON.nodeUtil("Scene","explosionsoundsensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","shootRound")) {
X3DJSON.nodeUtil("Scene","shootRound").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","shootRound")) {
X3DJSON.nodeUtil("Scene","shootRound").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","shootRound")) {
X3DJSON.nodeUtil("Scene","shootRound").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","shootRound")) {
X3DJSON.nodeUtil("Scene","shootRound").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","shootRound")) {
X3DJSON.nodeUtil("Scene","shootRound").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","clock3")) {
X3DJSON.nodeUtil("Scene","clock3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","clock3")) {
X3DJSON.nodeUtil("Scene","clock3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","roundPathInterpolator")) {
X3DJSON.nodeUtil("Scene","roundPathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","roundOrientationInterpolator")) {
X3DJSON.nodeUtil("Scene","roundOrientationInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","shootRound")) {
X3DJSON.nodeUtil("Scene","shootRound").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","spinTimer")) {
X3DJSON.nodeUtil("Scene","spinTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","roundSpinner")) {
X3DJSON.nodeUtil("Scene","roundSpinner").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].barrelRotation(X3DJSON.nodeUtil("Scene","tubeSensor","rotation"), __eventTime);
			X3DJSON.nodeUtil("Scene","ruc","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].upperRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].upperRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].upperRotation, __eventTime);
			X3DJSON.nodeUtil("Scene","shrinkCylinder","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].extendCylinder === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].extendCylinder() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].extendCylinder, __eventTime);
			X3DJSON.nodeUtil("Scene","shrinkCylinder","scale",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].shrinkCylinder === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].shrinkCylinder() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].shrinkCylinder, __eventTime);
			X3DJSON.nodeUtil("Scene","shrinkCylinderR","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].extendCylinder === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].extendCylinder() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].extendCylinder, __eventTime);
			X3DJSON.nodeUtil("Scene","shrinkCylinderR","scale",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].shrinkCylinder === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].shrinkCylinder() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Guns/M198HowitzerWithExplosion.json']['upperCylinderMover'].shrinkCylinder, __eventTime);