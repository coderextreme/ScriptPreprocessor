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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'] = function() {
	this.set_activeSensor = function (value) {
		try {
			this.proxy.activeSensor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting activeSensor '+e);
			console.error('Problems setting activeSensor',e);
		}
	};
	this.activeSensor_changed = function () {
		var value = this.activeSensor;
		return value;
	};
	try {
		this.activeSensor = new SFBool();
	} catch (e) {
		console.log('Problems setting activeSensor '+e);
		console.error('Problems setting activeSensor',e);
	}
	this.set_indicatorColor = function (value) {
		try {
			this.proxy.indicatorColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting indicatorColor '+e);
			console.error('Problems setting indicatorColor',e);
		}
	};
	this.indicatorColor_changed = function () {
		var value = this.indicatorColor;
		return value;
	};
	try {
		this.indicatorColor = new SFColor();
	} catch (e) {
		console.log('Problems setting indicatorColor '+e);
		console.error('Problems setting indicatorColor',e);
	}
	this.set_jointContacts = function (value) {
		try {
			this.proxy.jointContacts = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting jointContacts '+e);
			console.error('Problems setting jointContacts',e);
		}
	};
	this.jointContacts_changed = function () {
		var value = this.jointContacts;
		return value;
	};
	try {
		this.jointContacts = undefined;
	} catch (e) {
		console.log('Problems setting jointContacts '+e);
		console.error('Problems setting jointContacts',e);
	}
	this.set_correctedContacts = function (value) {
		try {
			this.proxy.correctedContacts = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting correctedContacts '+e);
			console.error('Problems setting correctedContacts',e);
		}
	};
	this.correctedContacts_changed = function () {
		var value = this.correctedContacts;
		return value;
	};
	try {
		this.correctedContacts = new MFNode();
	} catch (e) {
		console.log('Problems setting correctedContacts '+e);
		console.error('Problems setting correctedContacts',e);
	}
	this.set_ground = function (value) {
		try {
			this.proxy.ground = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ground '+e);
			console.error('Problems setting ground',e);
		}
	};
	this.ground_changed = function () {
		var value = this.ground;
		return value;
	};
	try {
		this.ground = X3DJSON.nodeUtil("Scene","GROUND-GEOM");
	} catch (e) {
		console.log('Problems setting ground '+e);
		console.error('Problems setting ground',e);
	}


ecmascript:
   
	this.set_jointContacts = function (val) {
      for(i = 0; i < val.length; i++) {
        if(val[i].geometry1.equals(X3DJSON.nodeUtil("Scene","GROUND-GEOM", ""))) {
	  val[i].geometry1 = null;
	  val[i].body1 = null;
	  val[i].bounce = 1;
	}

        if(val[i].geometry2.equals(X3DJSON.nodeUtil("Scene","GROUND-GEOM", ""))) {
	  val[i].geometry2 = null;
	  val[i].body2 = null;
	  val[i].bounce = 1;
	}
      }
      this.proxy.correctedContacts = val;
    }

   ;

	this.activeSensor = function (val) {
      if(val) {
        this.proxy.indicatorColor.r = 0;
        this.proxy.indicatorColor.g = 1;
        this.proxy.indicatorColor.b = 0;
      }	else {
        this.proxy.indicatorColor.r = 1;
        this.proxy.indicatorColor.g = 0;
        this.proxy.indicatorColor.b = 0;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'].initialize();
    if (X3DJSON.nodeUtil("Scene","COLLISION-OUTPUT")) {
X3DJSON.nodeUtil("Scene","COLLISION-OUTPUT").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'].set_jointContacts(X3DJSON.nodeUtil("Scene","COLLISION-OUTPUT","contacts"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'].set_jointContacts(X3DJSON.nodeUtil("Scene","COLLISION-OUTPUT","contacts"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","COLLISION-OUTPUT")) {
X3DJSON.nodeUtil("Scene","COLLISION-OUTPUT").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'].activeSensor(X3DJSON.nodeUtil("Scene","COLLISION-OUTPUT","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'].activeSensor(X3DJSON.nodeUtil("Scene","COLLISION-OUTPUT","isActive"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT']['ACTION']['indicatorColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT']['ACTION']['indicatorColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT']['ACTION']['indicatorColor'].push(function(property, value) {
		if (property === 'indicatorColor') {
			X3DJSON.nodeUtil("Scene","INDICATOR-MATERIAL","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'].indicatorColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'].indicatorColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'].indicatorColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","INDICATOR-MATERIAL","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'].indicatorColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'].indicatorColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'].indicatorColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT']['ACTION']['correctedContacts'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT']['ACTION']['correctedContacts'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT']['ACTION']['correctedContacts'].push(function(property, value) {
		if (property === 'correctedContacts') {
			X3DJSON.nodeUtil("Scene","BODY-COLLECTION","contacts",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'].correctedContacts === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'].correctedContacts() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'].correctedContacts, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BODY-COLLECTION","contacts",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'].correctedContacts === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'].correctedContacts() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'].correctedContacts, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'].set_jointContacts(X3DJSON.nodeUtil("Scene","COLLISION-OUTPUT","contacts"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'].activeSensor(X3DJSON.nodeUtil("Scene","COLLISION-OUTPUT","isActive"), __eventTime);
			X3DJSON.nodeUtil("Scene","INDICATOR-MATERIAL","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'].indicatorColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'].indicatorColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'].indicatorColor, __eventTime);
			X3DJSON.nodeUtil("Scene","BODY-COLLECTION","contacts",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'].correctedContacts === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'].correctedContacts() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/BounceTrimesh.json']['CONTACT-SCRIPT'].correctedContacts, __eventTime);