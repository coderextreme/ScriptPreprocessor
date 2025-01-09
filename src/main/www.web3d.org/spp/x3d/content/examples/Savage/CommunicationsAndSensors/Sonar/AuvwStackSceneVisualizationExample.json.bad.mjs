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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'] = function() {
	this.set_booleanToggler0 = function (value) {
		try {
			this.proxy.booleanToggler0 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting booleanToggler0 '+e);
			console.error('Problems setting booleanToggler0',e);
		}
	};
	this.booleanToggler0_changed = function () {
		var value = this.booleanToggler0;
		return value;
	};
	try {
		this.booleanToggler0 = new SFBool();
	} catch (e) {
		console.log('Problems setting booleanToggler0 '+e);
		console.error('Problems setting booleanToggler0',e);
	}
	this.set_toggle0 = function (value) {
		try {
			this.proxy.toggle0 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toggle0 '+e);
			console.error('Problems setting toggle0',e);
		}
	};
	this.toggle0_changed = function () {
		var value = this.toggle0;
		return value;
	};
	try {
		this.toggle0 = new SFInt32();
	} catch (e) {
		console.log('Problems setting toggle0 '+e);
		console.error('Problems setting toggle0',e);
	}
	this.set_color0 = function (value) {
		try {
			this.proxy.color0 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting color0 '+e);
			console.error('Problems setting color0',e);
		}
	};
	this.color0_changed = function () {
		var value = this.color0;
		return value;
	};
	try {
		this.color0 = new SFColor();
	} catch (e) {
		console.log('Problems setting color0 '+e);
		console.error('Problems setting color0',e);
	}


ecmascript:
	this.booleanToggler0 = function (value, timestamp) {
	if(this.proxy.toggle0 == 0) { this.proxy.toggle0 = -1; this.proxy.color0[0]= 0.6; this.proxy.color0[1]= 0.6; this.proxy.color0[2]= 0.6;
	}
	else { this.proxy.toggle0 = 0; this.proxy.color0[0]= 1; this.proxy.color0[1]= 0; this.proxy.color0[2]= 0;}
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'] = function() {
	this.set_booleanToggler1 = function (value) {
		try {
			this.proxy.booleanToggler1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting booleanToggler1 '+e);
			console.error('Problems setting booleanToggler1',e);
		}
	};
	this.booleanToggler1_changed = function () {
		var value = this.booleanToggler1;
		return value;
	};
	try {
		this.booleanToggler1 = new SFBool();
	} catch (e) {
		console.log('Problems setting booleanToggler1 '+e);
		console.error('Problems setting booleanToggler1',e);
	}
	this.set_toggle1 = function (value) {
		try {
			this.proxy.toggle1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toggle1 '+e);
			console.error('Problems setting toggle1',e);
		}
	};
	this.toggle1_changed = function () {
		var value = this.toggle1;
		return value;
	};
	try {
		this.toggle1 = new SFInt32();
	} catch (e) {
		console.log('Problems setting toggle1 '+e);
		console.error('Problems setting toggle1',e);
	}
	this.set_color1 = function (value) {
		try {
			this.proxy.color1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting color1 '+e);
			console.error('Problems setting color1',e);
		}
	};
	this.color1_changed = function () {
		var value = this.color1;
		return value;
	};
	try {
		this.color1 = new SFColor();
	} catch (e) {
		console.log('Problems setting color1 '+e);
		console.error('Problems setting color1',e);
	}


ecmascript:
	this.booleanToggler1 = function (value, timestamp) {
	if(this.proxy.toggle1 == 0) { this.proxy.toggle1 = -1; this.proxy.color1[0]= 0.6; this.proxy.color1[1]= 0.6; this.proxy.color1[2]= 0.6;
	}
	else { this.proxy.toggle1 = 0; this.proxy.color1[0]= 1; this.proxy.color1[1]= 0; this.proxy.color1[2]= 0;}
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'] = function() {
	this.set_booleanToggler2 = function (value) {
		try {
			this.proxy.booleanToggler2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting booleanToggler2 '+e);
			console.error('Problems setting booleanToggler2',e);
		}
	};
	this.booleanToggler2_changed = function () {
		var value = this.booleanToggler2;
		return value;
	};
	try {
		this.booleanToggler2 = new SFBool();
	} catch (e) {
		console.log('Problems setting booleanToggler2 '+e);
		console.error('Problems setting booleanToggler2',e);
	}
	this.set_toggle2 = function (value) {
		try {
			this.proxy.toggle2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toggle2 '+e);
			console.error('Problems setting toggle2',e);
		}
	};
	this.toggle2_changed = function () {
		var value = this.toggle2;
		return value;
	};
	try {
		this.toggle2 = new SFInt32();
	} catch (e) {
		console.log('Problems setting toggle2 '+e);
		console.error('Problems setting toggle2',e);
	}
	this.set_color2 = function (value) {
		try {
			this.proxy.color2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting color2 '+e);
			console.error('Problems setting color2',e);
		}
	};
	this.color2_changed = function () {
		var value = this.color2;
		return value;
	};
	try {
		this.color2 = new SFColor();
	} catch (e) {
		console.log('Problems setting color2 '+e);
		console.error('Problems setting color2',e);
	}


ecmascript:
	this.booleanToggler2 = function (value, timestamp) {
	if(this.proxy.toggle2 == 0) { this.proxy.toggle2 = -1; this.proxy.color2[0]= 0.6; this.proxy.color2[1]= 0.6; this.proxy.color2[2]= 0.6;
	}
	else { this.proxy.toggle2 = 0; this.proxy.color2[0]= 1; this.proxy.color2[1]= 0; this.proxy.color2[2]= 0;}
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'] = function() {
	this.set_booleanToggler3 = function (value) {
		try {
			this.proxy.booleanToggler3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting booleanToggler3 '+e);
			console.error('Problems setting booleanToggler3',e);
		}
	};
	this.booleanToggler3_changed = function () {
		var value = this.booleanToggler3;
		return value;
	};
	try {
		this.booleanToggler3 = new SFBool();
	} catch (e) {
		console.log('Problems setting booleanToggler3 '+e);
		console.error('Problems setting booleanToggler3',e);
	}
	this.set_toggle3 = function (value) {
		try {
			this.proxy.toggle3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toggle3 '+e);
			console.error('Problems setting toggle3',e);
		}
	};
	this.toggle3_changed = function () {
		var value = this.toggle3;
		return value;
	};
	try {
		this.toggle3 = new SFInt32();
	} catch (e) {
		console.log('Problems setting toggle3 '+e);
		console.error('Problems setting toggle3',e);
	}
	this.set_color3 = function (value) {
		try {
			this.proxy.color3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting color3 '+e);
			console.error('Problems setting color3',e);
		}
	};
	this.color3_changed = function () {
		var value = this.color3;
		return value;
	};
	try {
		this.color3 = new SFColor();
	} catch (e) {
		console.log('Problems setting color3 '+e);
		console.error('Problems setting color3',e);
	}


ecmascript:
	this.booleanToggler3 = function (value, timestamp) {
	if(this.proxy.toggle3 == 0) { this.proxy.toggle3 = -1; this.proxy.color3[0]= 0.6; this.proxy.color3[1]= 0.6; this.proxy.color3[2]= 0.6;
	}
	else { this.proxy.toggle3 = 0; this.proxy.color3[0]= 1; this.proxy.color3[1]= 0; this.proxy.color3[2]= 0;}
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'] = function() {
	this.set_booleanToggler4 = function (value) {
		try {
			this.proxy.booleanToggler4 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting booleanToggler4 '+e);
			console.error('Problems setting booleanToggler4',e);
		}
	};
	this.booleanToggler4_changed = function () {
		var value = this.booleanToggler4;
		return value;
	};
	try {
		this.booleanToggler4 = new SFBool();
	} catch (e) {
		console.log('Problems setting booleanToggler4 '+e);
		console.error('Problems setting booleanToggler4',e);
	}
	this.set_toggle4 = function (value) {
		try {
			this.proxy.toggle4 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toggle4 '+e);
			console.error('Problems setting toggle4',e);
		}
	};
	this.toggle4_changed = function () {
		var value = this.toggle4;
		return value;
	};
	try {
		this.toggle4 = new SFInt32();
	} catch (e) {
		console.log('Problems setting toggle4 '+e);
		console.error('Problems setting toggle4',e);
	}
	this.set_color4 = function (value) {
		try {
			this.proxy.color4 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting color4 '+e);
			console.error('Problems setting color4',e);
		}
	};
	this.color4_changed = function () {
		var value = this.color4;
		return value;
	};
	try {
		this.color4 = new SFColor();
	} catch (e) {
		console.log('Problems setting color4 '+e);
		console.error('Problems setting color4',e);
	}


ecmascript:
	this.booleanToggler4 = function (value, timestamp) {
	if(this.proxy.toggle4 == 0) { this.proxy.toggle4 = -1; this.proxy.color4[0]= 0.6; this.proxy.color4[1]= 0.6; this.proxy.color4[2]= 0.6;
	}
	else { this.proxy.toggle4 = 0; this.proxy.color4[0]= 1; this.proxy.color4[1]= 0; this.proxy.color4[2]= 0;}
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'] = function() {
	this.set_booleanToggler5 = function (value) {
		try {
			this.proxy.booleanToggler5 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting booleanToggler5 '+e);
			console.error('Problems setting booleanToggler5',e);
		}
	};
	this.booleanToggler5_changed = function () {
		var value = this.booleanToggler5;
		return value;
	};
	try {
		this.booleanToggler5 = new SFBool();
	} catch (e) {
		console.log('Problems setting booleanToggler5 '+e);
		console.error('Problems setting booleanToggler5',e);
	}
	this.set_toggle5 = function (value) {
		try {
			this.proxy.toggle5 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toggle5 '+e);
			console.error('Problems setting toggle5',e);
		}
	};
	this.toggle5_changed = function () {
		var value = this.toggle5;
		return value;
	};
	try {
		this.toggle5 = new SFInt32();
	} catch (e) {
		console.log('Problems setting toggle5 '+e);
		console.error('Problems setting toggle5',e);
	}
	this.set_color5 = function (value) {
		try {
			this.proxy.color5 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting color5 '+e);
			console.error('Problems setting color5',e);
		}
	};
	this.color5_changed = function () {
		var value = this.color5;
		return value;
	};
	try {
		this.color5 = new SFColor();
	} catch (e) {
		console.log('Problems setting color5 '+e);
		console.error('Problems setting color5',e);
	}


ecmascript:
	this.booleanToggler5 = function (value, timestamp) {
	if(this.proxy.toggle5 == 0) { this.proxy.toggle5 = -1; this.proxy.color5[0]= 0.6; this.proxy.color5[1]= 0.6; this.proxy.color5[2]= 0.6;
	}
	else { this.proxy.toggle5 = 0; this.proxy.color5[0]= 1; this.proxy.color5[1]= 0; this.proxy.color5[2]= 0;}
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'] = function() {
	this.set_booleanToggler6 = function (value) {
		try {
			this.proxy.booleanToggler6 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting booleanToggler6 '+e);
			console.error('Problems setting booleanToggler6',e);
		}
	};
	this.booleanToggler6_changed = function () {
		var value = this.booleanToggler6;
		return value;
	};
	try {
		this.booleanToggler6 = new SFBool();
	} catch (e) {
		console.log('Problems setting booleanToggler6 '+e);
		console.error('Problems setting booleanToggler6',e);
	}
	this.set_toggle6 = function (value) {
		try {
			this.proxy.toggle6 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toggle6 '+e);
			console.error('Problems setting toggle6',e);
		}
	};
	this.toggle6_changed = function () {
		var value = this.toggle6;
		return value;
	};
	try {
		this.toggle6 = new SFInt32();
	} catch (e) {
		console.log('Problems setting toggle6 '+e);
		console.error('Problems setting toggle6',e);
	}
	this.set_color6 = function (value) {
		try {
			this.proxy.color6 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting color6 '+e);
			console.error('Problems setting color6',e);
		}
	};
	this.color6_changed = function () {
		var value = this.color6;
		return value;
	};
	try {
		this.color6 = new SFColor();
	} catch (e) {
		console.log('Problems setting color6 '+e);
		console.error('Problems setting color6',e);
	}


ecmascript:
	this.booleanToggler6 = function (value, timestamp) {
	if(this.proxy.toggle6 == 0) { this.proxy.toggle6 = -1; this.proxy.color6[0]= 0.6; this.proxy.color6[1]= 0.6; this.proxy.color6[2]= 0.6;
	}
	else { this.proxy.toggle6 = 0; this.proxy.color6[0]= 1; this.proxy.color6[1]= 0; this.proxy.color6[2]= 0;}
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'] = function() {
	this.set_booleanToggler7 = function (value) {
		try {
			this.proxy.booleanToggler7 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting booleanToggler7 '+e);
			console.error('Problems setting booleanToggler7',e);
		}
	};
	this.booleanToggler7_changed = function () {
		var value = this.booleanToggler7;
		return value;
	};
	try {
		this.booleanToggler7 = new SFBool();
	} catch (e) {
		console.log('Problems setting booleanToggler7 '+e);
		console.error('Problems setting booleanToggler7',e);
	}
	this.set_toggle7 = function (value) {
		try {
			this.proxy.toggle7 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toggle7 '+e);
			console.error('Problems setting toggle7',e);
		}
	};
	this.toggle7_changed = function () {
		var value = this.toggle7;
		return value;
	};
	try {
		this.toggle7 = new SFInt32();
	} catch (e) {
		console.log('Problems setting toggle7 '+e);
		console.error('Problems setting toggle7',e);
	}
	this.set_color7 = function (value) {
		try {
			this.proxy.color7 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting color7 '+e);
			console.error('Problems setting color7',e);
		}
	};
	this.color7_changed = function () {
		var value = this.color7;
		return value;
	};
	try {
		this.color7 = new SFColor();
	} catch (e) {
		console.log('Problems setting color7 '+e);
		console.error('Problems setting color7',e);
	}


ecmascript:
	this.booleanToggler7 = function (value, timestamp) {
	if(this.proxy.toggle7 == 0) { this.proxy.toggle7 = -1; this.proxy.color7[0]= 0.6; this.proxy.color7[1]= 0.6; this.proxy.color7[2]= 0.6;
	}
	else { this.proxy.toggle7 = 0; this.proxy.color7[0]= 1; this.proxy.color7[1]= 0; this.proxy.color7[2]= 0;}
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'] = function() {
	this.set_booleanToggler8 = function (value) {
		try {
			this.proxy.booleanToggler8 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting booleanToggler8 '+e);
			console.error('Problems setting booleanToggler8',e);
		}
	};
	this.booleanToggler8_changed = function () {
		var value = this.booleanToggler8;
		return value;
	};
	try {
		this.booleanToggler8 = new SFBool();
	} catch (e) {
		console.log('Problems setting booleanToggler8 '+e);
		console.error('Problems setting booleanToggler8',e);
	}
	this.set_toggle8 = function (value) {
		try {
			this.proxy.toggle8 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toggle8 '+e);
			console.error('Problems setting toggle8',e);
		}
	};
	this.toggle8_changed = function () {
		var value = this.toggle8;
		return value;
	};
	try {
		this.toggle8 = new SFInt32();
	} catch (e) {
		console.log('Problems setting toggle8 '+e);
		console.error('Problems setting toggle8',e);
	}
	this.set_color8 = function (value) {
		try {
			this.proxy.color8 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting color8 '+e);
			console.error('Problems setting color8',e);
		}
	};
	this.color8_changed = function () {
		var value = this.color8;
		return value;
	};
	try {
		this.color8 = new SFColor();
	} catch (e) {
		console.log('Problems setting color8 '+e);
		console.error('Problems setting color8',e);
	}


ecmascript:
	this.booleanToggler8 = function (value, timestamp) {
	if(this.proxy.toggle8 == 0) { this.proxy.toggle8 = -1; this.proxy.color8[0]= 0.6; this.proxy.color8[1]= 0.6; this.proxy.color8[2]= 0.6;
	}
	else { this.proxy.toggle8 = 0; this.proxy.color8[0]= 1; this.proxy.color8[1]= 0; this.proxy.color8[2]= 0;}
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'] = function() {
	this.set_booleanToggler9 = function (value) {
		try {
			this.proxy.booleanToggler9 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting booleanToggler9 '+e);
			console.error('Problems setting booleanToggler9',e);
		}
	};
	this.booleanToggler9_changed = function () {
		var value = this.booleanToggler9;
		return value;
	};
	try {
		this.booleanToggler9 = new SFBool();
	} catch (e) {
		console.log('Problems setting booleanToggler9 '+e);
		console.error('Problems setting booleanToggler9',e);
	}
	this.set_toggle9 = function (value) {
		try {
			this.proxy.toggle9 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toggle9 '+e);
			console.error('Problems setting toggle9',e);
		}
	};
	this.toggle9_changed = function () {
		var value = this.toggle9;
		return value;
	};
	try {
		this.toggle9 = new SFInt32();
	} catch (e) {
		console.log('Problems setting toggle9 '+e);
		console.error('Problems setting toggle9',e);
	}
	this.set_color9 = function (value) {
		try {
			this.proxy.color9 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting color9 '+e);
			console.error('Problems setting color9',e);
		}
	};
	this.color9_changed = function () {
		var value = this.color9;
		return value;
	};
	try {
		this.color9 = new SFColor();
	} catch (e) {
		console.log('Problems setting color9 '+e);
		console.error('Problems setting color9',e);
	}


ecmascript:
	this.booleanToggler9 = function (value, timestamp) {
	if(this.proxy.toggle9 == 0) { this.proxy.toggle9 = -1; this.proxy.color9[0]= 0.6; this.proxy.color9[1]= 0.6; this.proxy.color9[2]= 0.6;
	}
	else { this.proxy.toggle9 = 0; this.proxy.color9[0]= 1; this.proxy.color9[1]= 0; this.proxy.color9[2]= 0;}
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'].initialize();
    if (X3DJSON.nodeUtil("Scene","Viewpoint")) {
X3DJSON.nodeUtil("Scene","Viewpoint").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Viewpoint")) {
X3DJSON.nodeUtil("Scene","Viewpoint").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","touch0")) {
X3DJSON.nodeUtil("Scene","touch0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","trigger0")) {
X3DJSON.nodeUtil("Scene","trigger0").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'].booleanToggler0(X3DJSON.nodeUtil("Scene","trigger0","triggerTrue"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'].booleanToggler0(X3DJSON.nodeUtil("Scene","trigger0","triggerTrue"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0']['ACTION']['toggle0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0']['ACTION']['toggle0'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0']['ACTION']['toggle0'].push(function(property, value) {
		if (property === 'toggle0') {
			X3DJSON.nodeUtil("Scene","Blade0","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'].toggle0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'].toggle0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'].toggle0, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Blade0","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'].toggle0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'].toggle0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'].toggle0, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0']['ACTION']['color0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0']['ACTION']['color0'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0']['ACTION']['color0'].push(function(property, value) {
		if (property === 'color0') {
			X3DJSON.nodeUtil("Scene","material0","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'].color0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'].color0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'].color0, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","material0","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'].color0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'].color0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'].color0, __eventTime);
    if (X3DJSON.nodeUtil("Scene","touch1")) {
X3DJSON.nodeUtil("Scene","touch1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","trigger1")) {
X3DJSON.nodeUtil("Scene","trigger1").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'].booleanToggler1(X3DJSON.nodeUtil("Scene","trigger1","triggerTrue"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'].booleanToggler1(X3DJSON.nodeUtil("Scene","trigger1","triggerTrue"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1']['ACTION']['toggle1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1']['ACTION']['toggle1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1']['ACTION']['toggle1'].push(function(property, value) {
		if (property === 'toggle1') {
			X3DJSON.nodeUtil("Scene","Blade1","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'].toggle1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'].toggle1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'].toggle1, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Blade1","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'].toggle1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'].toggle1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'].toggle1, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1']['ACTION']['color1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1']['ACTION']['color1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1']['ACTION']['color1'].push(function(property, value) {
		if (property === 'color1') {
			X3DJSON.nodeUtil("Scene","material1","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'].color1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'].color1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'].color1, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","material1","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'].color1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'].color1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'].color1, __eventTime);
    if (X3DJSON.nodeUtil("Scene","touch2")) {
X3DJSON.nodeUtil("Scene","touch2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","trigger2")) {
X3DJSON.nodeUtil("Scene","trigger2").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'].booleanToggler2(X3DJSON.nodeUtil("Scene","trigger2","triggerTrue"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'].booleanToggler2(X3DJSON.nodeUtil("Scene","trigger2","triggerTrue"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2']['ACTION']['toggle2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2']['ACTION']['toggle2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2']['ACTION']['toggle2'].push(function(property, value) {
		if (property === 'toggle2') {
			X3DJSON.nodeUtil("Scene","Blade2","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'].toggle2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'].toggle2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'].toggle2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Blade2","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'].toggle2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'].toggle2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'].toggle2, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2']['ACTION']['color2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2']['ACTION']['color2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2']['ACTION']['color2'].push(function(property, value) {
		if (property === 'color2') {
			X3DJSON.nodeUtil("Scene","material2","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'].color2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'].color2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'].color2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","material2","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'].color2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'].color2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'].color2, __eventTime);
    if (X3DJSON.nodeUtil("Scene","touch3")) {
X3DJSON.nodeUtil("Scene","touch3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","trigger3")) {
X3DJSON.nodeUtil("Scene","trigger3").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'].booleanToggler3(X3DJSON.nodeUtil("Scene","trigger3","triggerTrue"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'].booleanToggler3(X3DJSON.nodeUtil("Scene","trigger3","triggerTrue"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3']['ACTION']['toggle3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3']['ACTION']['toggle3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3']['ACTION']['toggle3'].push(function(property, value) {
		if (property === 'toggle3') {
			X3DJSON.nodeUtil("Scene","Blade3","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'].toggle3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'].toggle3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'].toggle3, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Blade3","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'].toggle3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'].toggle3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'].toggle3, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3']['ACTION']['color3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3']['ACTION']['color3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3']['ACTION']['color3'].push(function(property, value) {
		if (property === 'color3') {
			X3DJSON.nodeUtil("Scene","material3","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'].color3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'].color3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'].color3, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","material3","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'].color3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'].color3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'].color3, __eventTime);
    if (X3DJSON.nodeUtil("Scene","touch4")) {
X3DJSON.nodeUtil("Scene","touch4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","trigger4")) {
X3DJSON.nodeUtil("Scene","trigger4").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'].booleanToggler4(X3DJSON.nodeUtil("Scene","trigger4","triggerTrue"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'].booleanToggler4(X3DJSON.nodeUtil("Scene","trigger4","triggerTrue"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4']['ACTION']['toggle4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4']['ACTION']['toggle4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4']['ACTION']['toggle4'].push(function(property, value) {
		if (property === 'toggle4') {
			X3DJSON.nodeUtil("Scene","Blade4","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'].toggle4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'].toggle4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'].toggle4, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Blade4","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'].toggle4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'].toggle4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'].toggle4, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4']['ACTION']['color4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4']['ACTION']['color4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4']['ACTION']['color4'].push(function(property, value) {
		if (property === 'color4') {
			X3DJSON.nodeUtil("Scene","material4","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'].color4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'].color4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'].color4, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","material4","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'].color4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'].color4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'].color4, __eventTime);
    if (X3DJSON.nodeUtil("Scene","touch5")) {
X3DJSON.nodeUtil("Scene","touch5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","trigger5")) {
X3DJSON.nodeUtil("Scene","trigger5").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'].booleanToggler5(X3DJSON.nodeUtil("Scene","trigger5","triggerTrue"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'].booleanToggler5(X3DJSON.nodeUtil("Scene","trigger5","triggerTrue"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5']['ACTION']['toggle5'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5']['ACTION']['toggle5'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5']['ACTION']['toggle5'].push(function(property, value) {
		if (property === 'toggle5') {
			X3DJSON.nodeUtil("Scene","Blade5","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'].toggle5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'].toggle5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'].toggle5, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Blade5","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'].toggle5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'].toggle5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'].toggle5, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5']['ACTION']['color5'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5']['ACTION']['color5'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5']['ACTION']['color5'].push(function(property, value) {
		if (property === 'color5') {
			X3DJSON.nodeUtil("Scene","material5","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'].color5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'].color5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'].color5, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","material5","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'].color5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'].color5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'].color5, __eventTime);
    if (X3DJSON.nodeUtil("Scene","touch6")) {
X3DJSON.nodeUtil("Scene","touch6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","trigger6")) {
X3DJSON.nodeUtil("Scene","trigger6").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'].booleanToggler6(X3DJSON.nodeUtil("Scene","trigger6","triggerTrue"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'].booleanToggler6(X3DJSON.nodeUtil("Scene","trigger6","triggerTrue"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6']['ACTION']['toggle6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6']['ACTION']['toggle6'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6']['ACTION']['toggle6'].push(function(property, value) {
		if (property === 'toggle6') {
			X3DJSON.nodeUtil("Scene","Blade6","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'].toggle6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'].toggle6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'].toggle6, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Blade6","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'].toggle6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'].toggle6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'].toggle6, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6']['ACTION']['color6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6']['ACTION']['color6'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6']['ACTION']['color6'].push(function(property, value) {
		if (property === 'color6') {
			X3DJSON.nodeUtil("Scene","material6","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'].color6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'].color6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'].color6, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","material6","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'].color6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'].color6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'].color6, __eventTime);
    if (X3DJSON.nodeUtil("Scene","touch7")) {
X3DJSON.nodeUtil("Scene","touch7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","trigger7")) {
X3DJSON.nodeUtil("Scene","trigger7").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'].booleanToggler7(X3DJSON.nodeUtil("Scene","trigger7","triggerTrue"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'].booleanToggler7(X3DJSON.nodeUtil("Scene","trigger7","triggerTrue"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7']['ACTION']['toggle7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7']['ACTION']['toggle7'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7']['ACTION']['toggle7'].push(function(property, value) {
		if (property === 'toggle7') {
			X3DJSON.nodeUtil("Scene","Blade7","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'].toggle7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'].toggle7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'].toggle7, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Blade7","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'].toggle7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'].toggle7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'].toggle7, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7']['ACTION']['color7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7']['ACTION']['color7'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7']['ACTION']['color7'].push(function(property, value) {
		if (property === 'color7') {
			X3DJSON.nodeUtil("Scene","material7","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'].color7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'].color7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'].color7, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","material7","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'].color7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'].color7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'].color7, __eventTime);
    if (X3DJSON.nodeUtil("Scene","touch8")) {
X3DJSON.nodeUtil("Scene","touch8").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","trigger8")) {
X3DJSON.nodeUtil("Scene","trigger8").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'].booleanToggler8(X3DJSON.nodeUtil("Scene","trigger8","triggerTrue"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'].booleanToggler8(X3DJSON.nodeUtil("Scene","trigger8","triggerTrue"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8']['ACTION']['toggle8'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8']['ACTION']['toggle8'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8']['ACTION']['toggle8'].push(function(property, value) {
		if (property === 'toggle8') {
			X3DJSON.nodeUtil("Scene","Blade8","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'].toggle8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'].toggle8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'].toggle8, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Blade8","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'].toggle8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'].toggle8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'].toggle8, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8']['ACTION']['color8'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8']['ACTION']['color8'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8']['ACTION']['color8'].push(function(property, value) {
		if (property === 'color8') {
			X3DJSON.nodeUtil("Scene","material8","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'].color8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'].color8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'].color8, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","material8","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'].color8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'].color8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'].color8, __eventTime);
    if (X3DJSON.nodeUtil("Scene","touch9")) {
X3DJSON.nodeUtil("Scene","touch9").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","trigger9")) {
X3DJSON.nodeUtil("Scene","trigger9").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'].booleanToggler9(X3DJSON.nodeUtil("Scene","trigger9","triggerTrue"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'].booleanToggler9(X3DJSON.nodeUtil("Scene","trigger9","triggerTrue"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9']['ACTION']['toggle9'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9']['ACTION']['toggle9'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9']['ACTION']['toggle9'].push(function(property, value) {
		if (property === 'toggle9') {
			X3DJSON.nodeUtil("Scene","Blade9","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'].toggle9 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'].toggle9() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'].toggle9, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Blade9","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'].toggle9 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'].toggle9() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'].toggle9, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9']['ACTION']['color9'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9']['ACTION']['color9'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9']['ACTION']['color9'].push(function(property, value) {
		if (property === 'color9') {
			X3DJSON.nodeUtil("Scene","material9","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'].color9 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'].color9() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'].color9, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","material9","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'].color9 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'].color9() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'].color9, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'].booleanToggler0(X3DJSON.nodeUtil("Scene","trigger0","triggerTrue"), __eventTime);
			X3DJSON.nodeUtil("Scene","Blade0","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'].toggle0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'].toggle0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'].toggle0, __eventTime);
			X3DJSON.nodeUtil("Scene","material0","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'].color0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'].color0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg0'].color0, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'].booleanToggler1(X3DJSON.nodeUtil("Scene","trigger1","triggerTrue"), __eventTime);
			X3DJSON.nodeUtil("Scene","Blade1","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'].toggle1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'].toggle1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'].toggle1, __eventTime);
			X3DJSON.nodeUtil("Scene","material1","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'].color1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'].color1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg1'].color1, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'].booleanToggler2(X3DJSON.nodeUtil("Scene","trigger2","triggerTrue"), __eventTime);
			X3DJSON.nodeUtil("Scene","Blade2","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'].toggle2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'].toggle2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'].toggle2, __eventTime);
			X3DJSON.nodeUtil("Scene","material2","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'].color2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'].color2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg2'].color2, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'].booleanToggler3(X3DJSON.nodeUtil("Scene","trigger3","triggerTrue"), __eventTime);
			X3DJSON.nodeUtil("Scene","Blade3","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'].toggle3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'].toggle3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'].toggle3, __eventTime);
			X3DJSON.nodeUtil("Scene","material3","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'].color3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'].color3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg3'].color3, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'].booleanToggler4(X3DJSON.nodeUtil("Scene","trigger4","triggerTrue"), __eventTime);
			X3DJSON.nodeUtil("Scene","Blade4","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'].toggle4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'].toggle4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'].toggle4, __eventTime);
			X3DJSON.nodeUtil("Scene","material4","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'].color4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'].color4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg4'].color4, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'].booleanToggler5(X3DJSON.nodeUtil("Scene","trigger5","triggerTrue"), __eventTime);
			X3DJSON.nodeUtil("Scene","Blade5","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'].toggle5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'].toggle5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'].toggle5, __eventTime);
			X3DJSON.nodeUtil("Scene","material5","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'].color5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'].color5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg5'].color5, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'].booleanToggler6(X3DJSON.nodeUtil("Scene","trigger6","triggerTrue"), __eventTime);
			X3DJSON.nodeUtil("Scene","Blade6","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'].toggle6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'].toggle6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'].toggle6, __eventTime);
			X3DJSON.nodeUtil("Scene","material6","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'].color6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'].color6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg6'].color6, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'].booleanToggler7(X3DJSON.nodeUtil("Scene","trigger7","triggerTrue"), __eventTime);
			X3DJSON.nodeUtil("Scene","Blade7","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'].toggle7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'].toggle7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'].toggle7, __eventTime);
			X3DJSON.nodeUtil("Scene","material7","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'].color7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'].color7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg7'].color7, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'].booleanToggler8(X3DJSON.nodeUtil("Scene","trigger8","triggerTrue"), __eventTime);
			X3DJSON.nodeUtil("Scene","Blade8","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'].toggle8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'].toggle8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'].toggle8, __eventTime);
			X3DJSON.nodeUtil("Scene","material8","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'].color8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'].color8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg8'].color8, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'].booleanToggler9(X3DJSON.nodeUtil("Scene","trigger9","triggerTrue"), __eventTime);
			X3DJSON.nodeUtil("Scene","Blade9","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'].toggle9 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'].toggle9() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'].toggle9, __eventTime);
			X3DJSON.nodeUtil("Scene","material9","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'].color9 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'].color9() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonar/AuvwStackSceneVisualizationExample.json']['booleanTogg9'].color9, __eventTime);