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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE'] = function() {
	this.set_inProximity = function (value) {
		try {
			this.proxy.inProximity = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting inProximity '+e);
			console.error('Problems setting inProximity',e);
		}
	};
	this.inProximity_changed = function () {
		var value = this.inProximity;
		return value;
	};
	try {
		this.inProximity = new SFBool();
	} catch (e) {
		console.log('Problems setting inProximity '+e);
		console.error('Problems setting inProximity',e);
	}
	this.set_type = function (value) {
		try {
			this.proxy.type = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting type '+e);
			console.error('Problems setting type',e);
		}
	};
	this.type_changed = function () {
		var value = this.type;
		return value;
	};
	try {
		this.type = new MFString();
	} catch (e) {
		console.log('Problems setting type '+e);
		console.error('Problems setting type',e);
	}


ecmascript:

	this.inProximity = function ( value, eventTime )
{
 if ( value == true )
 {
	this.proxy.type[0] = 'EXAMINE';
	this.proxy.type[1] = 'WALK';
	this.proxy.type[2] = 'ANY';
 }
 else
 {
	this.proxy.type[0] = 'WALK';
	this.proxy.type[1] = 'EXAMINE';
	this.proxy.type[2] = 'ANY';
 }
 // console.error ('this.proxy.inProximity=' + value + ', this.proxy.type=' + this.proxy.type);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE'].initialize();
    if (X3DJSON.nodeUtil("Scene","BLUE_SPHERICAL_MINE")) {
X3DJSON.nodeUtil("Scene","BLUE_SPHERICAL_MINE").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE'].inProximity(X3DJSON.nodeUtil("Scene","BLUE_SPHERICAL_MINE","proximityIsActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE'].inProximity(X3DJSON.nodeUtil("Scene","BLUE_SPHERICAL_MINE","proximityIsActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","GREEN_SPHERICAL_MINE")) {
X3DJSON.nodeUtil("Scene","GREEN_SPHERICAL_MINE").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE'].inProximity(X3DJSON.nodeUtil("Scene","GREEN_SPHERICAL_MINE","proximityIsActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE'].inProximity(X3DJSON.nodeUtil("Scene","GREEN_SPHERICAL_MINE","proximityIsActive"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE']['ACTION']['type'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE']['ACTION']['type'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE']['ACTION']['type'].push(function(property, value) {
		if (property === 'type') {
			X3DJSON.nodeUtil("Scene","NAVIGATION","type",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE'].type === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE'].type() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE'].type, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","NAVIGATION","type",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE'].type === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE'].type() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE'].type, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE'].inProximity(X3DJSON.nodeUtil("Scene","BLUE_SPHERICAL_MINE","proximityIsActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE'].inProximity(X3DJSON.nodeUtil("Scene","GREEN_SPHERICAL_MINE","proximityIsActive"), __eventTime);
			X3DJSON.nodeUtil("Scene","NAVIGATION","type",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE'].type === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE'].type() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/UnderwaterMines/SphericalMinePrototype.json']['NAVIGATION_MODE'].type, __eventTime);