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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'] = function() {
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
		this.toggleValue = new SFBool();
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'] = function() {
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
		this.toggleValue = new SFBool();
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'] = function() {
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
		this.toggleValue = new SFBool();
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'].initialize();
    if (X3DJSON.nodeUtil("Scene","primaryTouch")) {
X3DJSON.nodeUtil("Scene","primaryTouch").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'].toggle(X3DJSON.nodeUtil("Scene","primaryTouch","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'].toggle(X3DJSON.nodeUtil("Scene","primaryTouch","isActive"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1']['ACTION']['toggleValue'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1']['ACTION']['toggleValue'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1']['ACTION']['toggleValue'].push(function(property, value) {
		if (property === 'toggleValue') {
			X3DJSON.nodeUtil("Scene","clock","loop",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'].toggleValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'].toggleValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'].toggleValue, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","clock","loop",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'].toggleValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'].toggleValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'].toggleValue, __eventTime);
    if (X3DJSON.nodeUtil("Scene","secondaryTouch")) {
X3DJSON.nodeUtil("Scene","secondaryTouch").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'].toggle(X3DJSON.nodeUtil("Scene","secondaryTouch","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'].toggle(X3DJSON.nodeUtil("Scene","secondaryTouch","isActive"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2']['ACTION']['toggleValue'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2']['ACTION']['toggleValue'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2']['ACTION']['toggleValue'].push(function(property, value) {
		if (property === 'toggleValue') {
			X3DJSON.nodeUtil("Scene","clock2","loop",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'].toggleValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'].toggleValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'].toggleValue, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","clock2","loop",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'].toggleValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'].toggleValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'].toggleValue, __eventTime);
    if (X3DJSON.nodeUtil("Scene","tertiaryTouch")) {
X3DJSON.nodeUtil("Scene","tertiaryTouch").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'].toggle(X3DJSON.nodeUtil("Scene","tertiaryTouch","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'].toggle(X3DJSON.nodeUtil("Scene","tertiaryTouch","isActive"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3']['ACTION']['toggleValue'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3']['ACTION']['toggleValue'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3']['ACTION']['toggleValue'].push(function(property, value) {
		if (property === 'toggleValue') {
			X3DJSON.nodeUtil("Scene","clock3","loop",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'].toggleValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'].toggleValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'].toggleValue, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","clock3","loop",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'].toggleValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'].toggleValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'].toggleValue, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1']['ACTION']['transparency'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1']['ACTION']['transparency'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1']['ACTION']['transparency'].push(function(property, value) {
		if (property === 'transparency') {
			X3DJSON.nodeUtil("Scene","numberSix","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'].transparency === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'].transparency() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'].transparency, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","numberSix","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'].transparency === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'].transparency() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'].transparency, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2']['ACTION']['transparency'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2']['ACTION']['transparency'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2']['ACTION']['transparency'].push(function(property, value) {
		if (property === 'transparency') {
			X3DJSON.nodeUtil("Scene","numberSeven","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'].transparency === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'].transparency() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'].transparency, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","numberSeven","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'].transparency === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'].transparency() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'].transparency, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3']['ACTION']['transparency'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3']['ACTION']['transparency'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3']['ACTION']['transparency'].push(function(property, value) {
		if (property === 'transparency') {
			X3DJSON.nodeUtil("Scene","numberEight","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'].transparency === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'].transparency() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'].transparency, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","numberEight","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'].transparency === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'].transparency() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'].transparency, __eventTime);
    if (X3DJSON.nodeUtil("Scene","clock")) {
X3DJSON.nodeUtil("Scene","clock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","clock")) {
X3DJSON.nodeUtil("Scene","clock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","clock")) {
X3DJSON.nodeUtil("Scene","clock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","clock")) {
X3DJSON.nodeUtil("Scene","clock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","clock")) {
X3DJSON.nodeUtil("Scene","clock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","clock")) {
X3DJSON.nodeUtil("Scene","clock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","clock")) {
X3DJSON.nodeUtil("Scene","clock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","clock")) {
X3DJSON.nodeUtil("Scene","clock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","clock")) {
X3DJSON.nodeUtil("Scene","clock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","clock")) {
X3DJSON.nodeUtil("Scene","clock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","clock")) {
X3DJSON.nodeUtil("Scene","clock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","clock")) {
X3DJSON.nodeUtil("Scene","clock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","clock2")) {
X3DJSON.nodeUtil("Scene","clock2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","clock2")) {
X3DJSON.nodeUtil("Scene","clock2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","clock2")) {
X3DJSON.nodeUtil("Scene","clock2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","clock2")) {
X3DJSON.nodeUtil("Scene","clock2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","clock2")) {
X3DJSON.nodeUtil("Scene","clock2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","clock2")) {
X3DJSON.nodeUtil("Scene","clock2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","clock2")) {
X3DJSON.nodeUtil("Scene","clock2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","clock2")) {
X3DJSON.nodeUtil("Scene","clock2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","clock2")) {
X3DJSON.nodeUtil("Scene","clock2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","clock2")) {
X3DJSON.nodeUtil("Scene","clock2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","clock2")) {
X3DJSON.nodeUtil("Scene","clock2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","clock2")) {
X3DJSON.nodeUtil("Scene","clock2").addEventListener('outputchange', function(event) {
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
    if (X3DJSON.nodeUtil("Scene","clock3")) {
X3DJSON.nodeUtil("Scene","clock3").addEventListener('outputchange', function(event) {
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
    if (X3DJSON.nodeUtil("Scene","clock3")) {
X3DJSON.nodeUtil("Scene","clock3").addEventListener('outputchange', function(event) {
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
    if (X3DJSON.nodeUtil("Scene","clock3")) {
X3DJSON.nodeUtil("Scene","clock3").addEventListener('outputchange', function(event) {
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
    if (X3DJSON.nodeUtil("Scene","clock3")) {
X3DJSON.nodeUtil("Scene","clock3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","node_path")) {
X3DJSON.nodeUtil("Scene","node_path").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","node_path4")) {
X3DJSON.nodeUtil("Scene","node_path4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","node_path2")) {
X3DJSON.nodeUtil("Scene","node_path2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","node_path5")) {
X3DJSON.nodeUtil("Scene","node_path5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","node_path3")) {
X3DJSON.nodeUtil("Scene","node_path3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","node_path6")) {
X3DJSON.nodeUtil("Scene","node_path6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","node_path2")) {
X3DJSON.nodeUtil("Scene","node_path2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","node_path5")) {
X3DJSON.nodeUtil("Scene","node_path5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","node_path3")) {
X3DJSON.nodeUtil("Scene","node_path3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","node_path6")) {
X3DJSON.nodeUtil("Scene","node_path6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","node_path")) {
X3DJSON.nodeUtil("Scene","node_path").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","node_path4")) {
X3DJSON.nodeUtil("Scene","node_path4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path2")) {
X3DJSON.nodeUtil("Scene","path2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path2_4")) {
X3DJSON.nodeUtil("Scene","path2_4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path2_2")) {
X3DJSON.nodeUtil("Scene","path2_2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path2_5")) {
X3DJSON.nodeUtil("Scene","path2_5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path2_3")) {
X3DJSON.nodeUtil("Scene","path2_3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path2_6")) {
X3DJSON.nodeUtil("Scene","path2_6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path2_2a")) {
X3DJSON.nodeUtil("Scene","path2_2a").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path2_5a")) {
X3DJSON.nodeUtil("Scene","path2_5a").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path2_4a")) {
X3DJSON.nodeUtil("Scene","path2_4a").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path2a")) {
X3DJSON.nodeUtil("Scene","path2a").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path2_3")) {
X3DJSON.nodeUtil("Scene","path2_3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path2_6")) {
X3DJSON.nodeUtil("Scene","path2_6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path2_3")) {
X3DJSON.nodeUtil("Scene","path2_3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path2_6")) {
X3DJSON.nodeUtil("Scene","path2_6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path2")) {
X3DJSON.nodeUtil("Scene","path2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path2_4")) {
X3DJSON.nodeUtil("Scene","path2_4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path3")) {
X3DJSON.nodeUtil("Scene","path3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path3_4")) {
X3DJSON.nodeUtil("Scene","path3_4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path3_3")) {
X3DJSON.nodeUtil("Scene","path3_3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path3_6")) {
X3DJSON.nodeUtil("Scene","path3_6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path3_3a")) {
X3DJSON.nodeUtil("Scene","path3_3a").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path3_6a")) {
X3DJSON.nodeUtil("Scene","path3_6a").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path3a")) {
X3DJSON.nodeUtil("Scene","path3a").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path3_4a")) {
X3DJSON.nodeUtil("Scene","path3_4a").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path3a")) {
X3DJSON.nodeUtil("Scene","path3a").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path3_4a")) {
X3DJSON.nodeUtil("Scene","path3_4a").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path3_2a")) {
X3DJSON.nodeUtil("Scene","path3_2a").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path3_5a")) {
X3DJSON.nodeUtil("Scene","path3_5a").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path3_2")) {
X3DJSON.nodeUtil("Scene","path3_2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path3_5")) {
X3DJSON.nodeUtil("Scene","path3_5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path3")) {
X3DJSON.nodeUtil("Scene","path3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","path3_4")) {
X3DJSON.nodeUtil("Scene","path3_4").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'].toggle(X3DJSON.nodeUtil("Scene","primaryTouch","isActive"), __eventTime);
			X3DJSON.nodeUtil("Scene","clock","loop",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'].toggleValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'].toggleValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'].toggleValue, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'].toggle(X3DJSON.nodeUtil("Scene","secondaryTouch","isActive"), __eventTime);
			X3DJSON.nodeUtil("Scene","clock2","loop",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'].toggleValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'].toggleValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'].toggleValue, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'].toggle(X3DJSON.nodeUtil("Scene","tertiaryTouch","isActive"), __eventTime);
			X3DJSON.nodeUtil("Scene","clock3","loop",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'].toggleValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'].toggleValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'].toggleValue, __eventTime);
			X3DJSON.nodeUtil("Scene","numberSix","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'].transparency === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'].transparency() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript1'].transparency, __eventTime);
			X3DJSON.nodeUtil("Scene","numberSeven","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'].transparency === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'].transparency() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript2'].transparency, __eventTime);
			X3DJSON.nodeUtil("Scene","numberEight","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'].transparency === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'].transparency() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Networking/NetworkReroutingRoutes.json']['toggleScript3'].transparency, __eventTime);