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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1'] = function() {
	this.set_boolean = function (value) {
		try {
			this.proxy.boolean = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting boolean '+e);
			console.error('Problems setting boolean',e);
		}
	};
	this.boolean_changed = function () {
		var value = this.boolean;
		return value;
	};
	try {
		this.boolean = undefined;
	} catch (e) {
		console.log('Problems setting boolean '+e);
		console.error('Problems setting boolean',e);
	}
	this.set_activated = function (value) {
		try {
			this.proxy.activated = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting activated '+e);
			console.error('Problems setting activated',e);
		}
	};
	this.activated_changed = function () {
		var value = this.activated;
		return value;
	};
	try {
		this.activated = new SFBool();
	} catch (e) {
		console.log('Problems setting activated '+e);
		console.error('Problems setting activated',e);
	}
	this.set_count = function (value) {
		try {
			this.proxy.count = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting count '+e);
			console.error('Problems setting count',e);
		}
	};
	this.count_changed = function () {
		var value = this.count;
		return value;
	};
	try {
		this.count = new SFInt32(1);
	} catch (e) {
		console.log('Problems setting count '+e);
		console.error('Problems setting count',e);
	}


ecmascript:

	this.initialize = function () {
  console.error (' '); // skip line
  console.error ('Click shapes to select a background...');
  console.error (' '); // skip line
}

// settin;

	this.set_boolean = function ( value, eventTime ) {
  if ( value == true ) {
	this.proxy.activated = value;
	console.error ('Display blue clear sky' + this.proxy.count);
  }
  else this.proxy.count++;  // received isActive value = false
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2'] = function() {
	this.set_boolean = function (value) {
		try {
			this.proxy.boolean = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting boolean '+e);
			console.error('Problems setting boolean',e);
		}
	};
	this.boolean_changed = function () {
		var value = this.boolean;
		return value;
	};
	try {
		this.boolean = undefined;
	} catch (e) {
		console.log('Problems setting boolean '+e);
		console.error('Problems setting boolean',e);
	}
	this.set_activated = function (value) {
		try {
			this.proxy.activated = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting activated '+e);
			console.error('Problems setting activated',e);
		}
	};
	this.activated_changed = function () {
		var value = this.activated;
		return value;
	};
	try {
		this.activated = new SFBool();
	} catch (e) {
		console.log('Problems setting activated '+e);
		console.error('Problems setting activated',e);
	}
	this.set_count = function (value) {
		try {
			this.proxy.count = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting count '+e);
			console.error('Problems setting count',e);
		}
	};
	this.count_changed = function () {
		var value = this.count;
		return value;
	};
	try {
		this.count = new SFInt32(1);
	} catch (e) {
		console.log('Problems setting count '+e);
		console.error('Problems setting count',e);
	}


ecmascript:

// setting the value of an eventOut variable also sends it as an event

	this.set_boolean = function ( value, eventTime ) {
  if ( value == true ) {
	this.proxy.activated = value;
	console.error ('Display red sunset sky' + this.proxy.count);
  }
  else this.proxy.count++;  // received isActive value = false
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2'].initialize();
    if (X3DJSON.nodeUtil("Scene","SensorButton1")) {
X3DJSON.nodeUtil("Scene","SensorButton1").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1'].set_boolean(X3DJSON.nodeUtil("Scene","SensorButton1","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1'].set_boolean(X3DJSON.nodeUtil("Scene","SensorButton1","isActive"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1']['ACTION']['activated'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1']['ACTION']['activated'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1']['ACTION']['activated'].push(function(property, value) {
		if (property === 'activated') {
			X3DJSON.nodeUtil("Scene","BackgroundCyan-ish","bind",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1'].activated === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1'].activated() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1'].activated, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BackgroundCyan-ish","bind",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1'].activated === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1'].activated() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1'].activated, __eventTime);
    if (X3DJSON.nodeUtil("Scene","SensorButton2")) {
X3DJSON.nodeUtil("Scene","SensorButton2").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2'].set_boolean(X3DJSON.nodeUtil("Scene","SensorButton2","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2'].set_boolean(X3DJSON.nodeUtil("Scene","SensorButton2","isActive"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2']['ACTION']['activated'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2']['ACTION']['activated'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2']['ACTION']['activated'].push(function(property, value) {
		if (property === 'activated') {
			X3DJSON.nodeUtil("Scene","BackgroundReddish","bind",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2'].activated === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2'].activated() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2'].activated, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BackgroundReddish","bind",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2'].activated === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2'].activated() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2'].activated, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1'].set_boolean(X3DJSON.nodeUtil("Scene","SensorButton1","isActive"), __eventTime);
			X3DJSON.nodeUtil("Scene","BackgroundCyan-ish","bind",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1'].activated === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1'].activated() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter1'].activated, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2'].set_boolean(X3DJSON.nodeUtil("Scene","SensorButton2","isActive"), __eventTime);
			X3DJSON.nodeUtil("Scene","BackgroundReddish","bind",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2'].activated === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2'].activated() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/Hawaii/OahuCollisionSite.json']['Filter2'].activated, __eventTime);