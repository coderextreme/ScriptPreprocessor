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
    var SFVec3f = function() { var that = Array.prototype.slice.call(arguments, 0); that.x  = that[0]; that.y = that[1]; that.z = that[2]; return that; };
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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'] = function() {
	this.set_on = function (value) {
		try {
			this.proxy.on = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting on '+e);
			console.error('Problems setting on',e);
		}
	};
	this.on_changed = function () {
		var value = this.on;
		return value;
	};
	try {
		this.on = new SFBool(true);
	} catch (e) {
		console.log('Problems setting on '+e);
		console.error('Problems setting on',e);
	}
	this.set_active = function (value) {
		try {
			this.proxy.active = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting active '+e);
			console.error('Problems setting active',e);
		}
	};
	this.active_changed = function () {
		var value = this.active;
		return value;
	};
	try {
		this.active = undefined;
	} catch (e) {
		console.log('Problems setting active '+e);
		console.error('Problems setting active',e);
	}
	this.set_on = function (value) {
		try {
			this.proxy.on = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting on '+e);
			console.error('Problems setting on',e);
		}
	};
	this.on_changed = function () {
		var value = this.on;
		return value;
	};
	try {
		this.on = new SFBool(true);
	} catch (e) {
		console.log('Problems setting on '+e);
		console.error('Problems setting on',e);
	}


ecmascript:
	
	this.set_active = function ( b, tm ) {
			// ignore button releases
			if ( b == false ) return;

			// toggle this.proxy.on button presses
			if ( this.proxy.on == true ) this.proxy.on = false;
			else              this.proxy.on = true;
			this.proxy.on_changed = this.proxy.on;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector'] = function() {
	this.set_offColor = function (value) {
		try {
			this.proxy.offColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting offColor '+e);
			console.error('Problems setting offColor',e);
		}
	};
	this.offColor_changed = function () {
		var value = this.offColor;
		return value;
	};
	try {
		this.offColor = new SFColor(0,0,0);
	} catch (e) {
		console.log('Problems setting offColor '+e);
		console.error('Problems setting offColor',e);
	}
	this.set_onColor = function (value) {
		try {
			this.proxy.onColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting onColor '+e);
			console.error('Problems setting onColor',e);
		}
	};
	this.onColor_changed = function () {
		var value = this.onColor;
		return value;
	};
	try {
		this.onColor = new SFColor(1,1,1);
	} catch (e) {
		console.log('Problems setting onColor '+e);
		console.error('Problems setting onColor',e);
	}
	this.set_color = function (value) {
		try {
			this.proxy.color = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting color '+e);
			console.error('Problems setting color',e);
		}
	};
	this.color_changed = function () {
		var value = this.color;
		return value;
	};
	try {
		this.color = undefined;
	} catch (e) {
		console.log('Problems setting color '+e);
		console.error('Problems setting color',e);
	}
	this.set_selection = function (value) {
		try {
			this.proxy.selection = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting selection '+e);
			console.error('Problems setting selection',e);
		}
	};
	this.selection_changed = function () {
		var value = this.selection;
		return value;
	};
	try {
		this.selection = undefined;
	} catch (e) {
		console.log('Problems setting selection '+e);
		console.error('Problems setting selection',e);
	}


ecmascript:
	
	this.set_selection = function ( b, tm ) {
			if ( b == true )
				this.proxy.color_changed = this.proxy.onColor;
			else
				this.proxy.color_changed = this.proxy.offColor;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector'].initialize();
    if (X3DJSON.nodeUtil("Scene","MoveLamp")) {
X3DJSON.nodeUtil("Scene","MoveLamp").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","MoveFirstArm")) {
X3DJSON.nodeUtil("Scene","MoveFirstArm").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","MoveSecondArm")) {
X3DJSON.nodeUtil("Scene","MoveSecondArm").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","MoveLampShade")) {
X3DJSON.nodeUtil("Scene","MoveLampShade").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","LightSwitch")) {
X3DJSON.nodeUtil("Scene","LightSwitch").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].set_active(X3DJSON.nodeUtil("Scene","LightSwitch","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].set_active(X3DJSON.nodeUtil("Scene","LightSwitch","isActive"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle']['ACTION']['on'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle']['ACTION']['on'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle']['ACTION']['on'].push(function(property, value) {
		if (property === 'on') {
			X3DJSON.nodeUtil("Scene","LampLight","on",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].on_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].on_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].on, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","LampLight","on",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].on_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].on_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].on, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle']['ACTION']['on'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle']['ACTION']['on'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle']['ACTION']['on'].push(function(property, value) {
		if (property === 'on') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].on_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].on_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].on) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector'].set_selection(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].on_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].on_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].on, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].on_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].on_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].on) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector'].set_selection(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].on_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].on_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].on, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector']['ACTION']['color'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector']['ACTION']['color'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector']['ACTION']['color'].push(function(property, value) {
		if (property === 'color') {
			X3DJSON.nodeUtil("Scene","BulbMaterial","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector'].color_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector'].color_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector'].color, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BulbMaterial","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector'].color_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector'].color_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector'].color, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].set_active(X3DJSON.nodeUtil("Scene","LightSwitch","isActive"), __eventTime);
			X3DJSON.nodeUtil("Scene","LampLight","on",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].on_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].on_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].on, __eventTime);
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].on_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].on_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].on) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector'].set_selection(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].on_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].on_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['Toggle'].on, __eventTime);
		}
			X3DJSON.nodeUtil("Scene","BulbMaterial","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector'].color_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector'].color_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Siggraph98Course/Lamp2.json']['ColorSelector'].color, __eventTime);