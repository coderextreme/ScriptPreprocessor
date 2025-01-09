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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'] = function() {
	this.set_toggle = function (value) {
		try {
			this.proxy.toggle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toggle '+e);
			console.error('Problems setting toggle',e);
		}
	};
	this.toggle_changed = function () {
		var value = this.toggle;
		return value;
	};
	try {
		this.toggle = new SFBool();
	} catch (e) {
		console.log('Problems setting toggle '+e);
		console.error('Problems setting toggle',e);
	}
	this.set_state = function (value) {
		try {
			this.proxy.state = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting state '+e);
			console.error('Problems setting state',e);
		}
	};
	this.state_changed = function () {
		var value = this.state;
		return value;
	};
	try {
		this.state = new SFBool(false);
	} catch (e) {
		console.log('Problems setting state '+e);
		console.error('Problems setting state',e);
	}
	this.set_toggleValue = function (value) {
		try {
			this.proxy.toggleValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toggleValue '+e);
			console.error('Problems setting toggleValue',e);
		}
	};
	this.toggleValue_changed = function () {
		var value = this.toggleValue;
		return value;
	};
	try {
		this.toggleValue = new SFFloat();
	} catch (e) {
		console.log('Problems setting toggleValue '+e);
		console.error('Problems setting toggleValue',e);
	}
	this.set_transState = function (value) {
		try {
			this.proxy.transState = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transState '+e);
			console.error('Problems setting transState',e);
		}
	};
	this.transState_changed = function () {
		var value = this.transState;
		return value;
	};
	try {
		this.transState = new SFFloat(1);
	} catch (e) {
		console.log('Problems setting transState '+e);
		console.error('Problems setting transState',e);
	}
	this.set_transparency = function (value) {
		try {
			this.proxy.transparency = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transparency '+e);
			console.error('Problems setting transparency',e);
		}
	};
	this.transparency_changed = function () {
		var value = this.transparency;
		return value;
	};
	try {
		this.transparency = new SFFloat();
	} catch (e) {
		console.log('Problems setting transparency '+e);
		console.error('Problems setting transparency',e);
	}


ecmascript:

	this.toggle = function ( value, ts ) {
 if(value == true){
   this.proxy.state = !this.proxy.state;
   this.proxy.toggleValue = this.proxy.state;
   }
  if(this.proxy.state){
      this.proxy.transState = 0;
      this.proxy.transparency = this.proxy.transState;
   }
   else{
      this.proxy.transState = 1;
      this.proxy.transparency = this.proxy.transState;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'] = function() {
	this.set_toggle = function (value) {
		try {
			this.proxy.toggle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toggle '+e);
			console.error('Problems setting toggle',e);
		}
	};
	this.toggle_changed = function () {
		var value = this.toggle;
		return value;
	};
	try {
		this.toggle = new SFBool();
	} catch (e) {
		console.log('Problems setting toggle '+e);
		console.error('Problems setting toggle',e);
	}
	this.set_state = function (value) {
		try {
			this.proxy.state = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting state '+e);
			console.error('Problems setting state',e);
		}
	};
	this.state_changed = function () {
		var value = this.state;
		return value;
	};
	try {
		this.state = new SFBool(false);
	} catch (e) {
		console.log('Problems setting state '+e);
		console.error('Problems setting state',e);
	}
	this.set_toggleValue = function (value) {
		try {
			this.proxy.toggleValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toggleValue '+e);
			console.error('Problems setting toggleValue',e);
		}
	};
	this.toggleValue_changed = function () {
		var value = this.toggleValue;
		return value;
	};
	try {
		this.toggleValue = new SFFloat();
	} catch (e) {
		console.log('Problems setting toggleValue '+e);
		console.error('Problems setting toggleValue',e);
	}
	this.set_transState = function (value) {
		try {
			this.proxy.transState = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transState '+e);
			console.error('Problems setting transState',e);
		}
	};
	this.transState_changed = function () {
		var value = this.transState;
		return value;
	};
	try {
		this.transState = new SFFloat(1);
	} catch (e) {
		console.log('Problems setting transState '+e);
		console.error('Problems setting transState',e);
	}
	this.set_transparency = function (value) {
		try {
			this.proxy.transparency = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transparency '+e);
			console.error('Problems setting transparency',e);
		}
	};
	this.transparency_changed = function () {
		var value = this.transparency;
		return value;
	};
	try {
		this.transparency = new SFFloat();
	} catch (e) {
		console.log('Problems setting transparency '+e);
		console.error('Problems setting transparency',e);
	}


ecmascript:

	this.toggle = function ( value, ts ) {
 if(value == true){
   this.proxy.state = !this.proxy.state;
   this.proxy.toggleValue = this.proxy.state;
   }
  if(this.proxy.state){
      this.proxy.transState = 0;
      this.proxy.transparency = this.proxy.transState;
   }
   else{
      this.proxy.transState = 1;
      this.proxy.transparency = this.proxy.transState;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'].initialize();
    if (X3DJSON.nodeUtil("Scene","red_pipe")) {
X3DJSON.nodeUtil("Scene","red_pipe").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'].toggle(X3DJSON.nodeUtil("Scene","red_pipe","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'].toggle(X3DJSON.nodeUtil("Scene","red_pipe","isActive"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure']['ACTION']['toggleValue'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure']['ACTION']['toggleValue'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure']['ACTION']['toggleValue'].push(function(property, value) {
		if (property === 'toggleValue') {
			X3DJSON.nodeUtil("Scene","pipe_material","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'].toggleValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'].toggleValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'].toggleValue, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","pipe_material","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'].toggleValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'].toggleValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'].toggleValue, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure']['ACTION']['transparency'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure']['ACTION']['transparency'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure']['ACTION']['transparency'].push(function(property, value) {
		if (property === 'transparency') {
			X3DJSON.nodeUtil("Scene","pipe_material","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'].transparency === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'].transparency() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'].transparency, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","pipe_material","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'].transparency === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'].transparency() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'].transparency, __eventTime);
    if (X3DJSON.nodeUtil("Scene","red_pipe2")) {
X3DJSON.nodeUtil("Scene","red_pipe2").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'].toggle(X3DJSON.nodeUtil("Scene","red_pipe2","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'].toggle(X3DJSON.nodeUtil("Scene","red_pipe2","isActive"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure']['ACTION']['toggleValue'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure']['ACTION']['toggleValue'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure']['ACTION']['toggleValue'].push(function(property, value) {
		if (property === 'toggleValue') {
			X3DJSON.nodeUtil("Scene","pipe_material2","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'].toggleValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'].toggleValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'].toggleValue, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","pipe_material2","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'].toggleValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'].toggleValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'].toggleValue, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure']['ACTION']['transparency'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure']['ACTION']['transparency'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure']['ACTION']['transparency'].push(function(property, value) {
		if (property === 'transparency') {
			X3DJSON.nodeUtil("Scene","pipe_material2","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'].transparency === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'].transparency() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'].transparency, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","pipe_material2","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'].transparency === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'].transparency() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'].transparency, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'].toggle(X3DJSON.nodeUtil("Scene","red_pipe","isActive"), __eventTime);
			X3DJSON.nodeUtil("Scene","pipe_material","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'].toggleValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'].toggleValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'].toggleValue, __eventTime);
			X3DJSON.nodeUtil("Scene","pipe_material","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'].transparency === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'].transparency() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['linkFailure'].transparency, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'].toggle(X3DJSON.nodeUtil("Scene","red_pipe2","isActive"), __eventTime);
			X3DJSON.nodeUtil("Scene","pipe_material2","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'].toggleValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'].toggleValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'].toggleValue, __eventTime);
			X3DJSON.nodeUtil("Scene","pipe_material2","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'].transparency === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'].transparency() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingAlternateRoutes.json']['nodeFailure'].transparency, __eventTime);