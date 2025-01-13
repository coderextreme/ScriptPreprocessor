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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'] = function() {
	this.set_rotationOn = function (value) {
		try {
			this.proxy.rotationOn = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rotationOn '+e);
			console.error('Problems setting rotationOn',e);
		}
	};
	this.rotationOn_changed = function () {
		var value = this.rotationOn;
		return value;
	};
	try {
		this.rotationOn = new SFBool();
	} catch (e) {
		console.log('Problems setting rotationOn '+e);
		console.error('Problems setting rotationOn',e);
	}
	this.set_clockEnabled = function (value) {
		try {
			this.proxy.clockEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting clockEnabled '+e);
			console.error('Problems setting clockEnabled',e);
		}
	};
	this.clockEnabled_changed = function () {
		var value = this.clockEnabled;
		return value;
	};
	try {
		this.clockEnabled = new SFBool();
	} catch (e) {
		console.log('Problems setting clockEnabled '+e);
		console.error('Problems setting clockEnabled',e);
	}
	this.set_switchChoice = function (value) {
		try {
			this.proxy.switchChoice = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting switchChoice '+e);
			console.error('Problems setting switchChoice',e);
		}
	};
	this.switchChoice_changed = function () {
		var value = this.switchChoice;
		return value;
	};
	try {
		this.switchChoice = new SFInt32();
	} catch (e) {
		console.log('Problems setting switchChoice '+e);
		console.error('Problems setting switchChoice',e);
	}


ecmascript:

	this.rotationOn = function (value, timeStamp) {
   if (value == true)
   {
      this.proxy.clockEnabled = true;
      this.proxy.switchChoice = 1;
   }
   else
   {
      this.proxy.clockEnabled = false;
      this.proxy.switchChoice = 0;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'] = function() {
	this.set_armed = function (value) {
		try {
			this.proxy.armed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting armed '+e);
			console.error('Problems setting armed',e);
		}
	};
	this.armed_changed = function () {
		var value = this.armed;
		return value;
	};
	try {
		this.armed = new SFInt32(-1);
	} catch (e) {
		console.log('Problems setting armed '+e);
		console.error('Problems setting armed',e);
	}
	this.set_toggleEnabled = function (value) {
		try {
			this.proxy.toggleEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toggleEnabled '+e);
			console.error('Problems setting toggleEnabled',e);
		}
	};
	this.toggleEnabled_changed = function () {
		var value = this.toggleEnabled;
		return value;
	};
	try {
		this.toggleEnabled = new SFBool();
	} catch (e) {
		console.log('Problems setting toggleEnabled '+e);
		console.error('Problems setting toggleEnabled',e);
	}
	this.set_statusColor = function (value) {
		try {
			this.proxy.statusColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting statusColor '+e);
			console.error('Problems setting statusColor',e);
		}
	};
	this.statusColor_changed = function () {
		var value = this.statusColor;
		return value;
	};
	try {
		this.statusColor = new SFColor();
	} catch (e) {
		console.log('Problems setting statusColor '+e);
		console.error('Problems setting statusColor',e);
	}
	this.set_status = function (value) {
		try {
			this.proxy.status = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting status '+e);
			console.error('Problems setting status',e);
		}
	};
	this.status_changed = function () {
		var value = this.status;
		return value;
	};
	try {
		this.status = new SFBool();
	} catch (e) {
		console.log('Problems setting status '+e);
		console.error('Problems setting status',e);
	}


ecmascript:

	this.toggleEnabled = function (value, ts) {
   if (this.proxy.armed == -1)
   {
      this.proxy.toggleEnabled = false;
      this.proxy.armed = 0;
   }

   if (this.proxy.armed == 0)
   {
      this.proxy.armed = 1;

      if (this.proxy.toggleEnabled == false)
      {
         this.proxy.status = true;
         this.proxy.statusColor = new SFColor(0, 0.8, 0);
         this.proxy.toggleEnabled = true;
      }
      else
      {
         this.proxy.status = false;
         this.proxy.statusColor = new SFColor(0.8, 0.8, 0);
         this.proxy.toggleEnabled = false;
      }
   }
   else
   {
      this.proxy.armed = 0;
      return;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript']['ACTION']['clockEnabled'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript']['ACTION']['clockEnabled'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript']['ACTION']['clockEnabled'].push(function(property, value) {
		if (property === 'clockEnabled') {
			X3DJSON.nodeUtil("Scene","TailRotorClock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'].clockEnabled === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'].clockEnabled() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'].clockEnabled, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TailRotorClock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'].clockEnabled === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'].clockEnabled() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'].clockEnabled, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript']['ACTION']['switchChoice'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript']['ACTION']['switchChoice'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript']['ACTION']['switchChoice'].push(function(property, value) {
		if (property === 'switchChoice') {
			X3DJSON.nodeUtil("Scene","RotationSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'].switchChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'].switchChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'].switchChoice, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RotationSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'].switchChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'].switchChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'].switchChoice, __eventTime);
    if (X3DJSON.nodeUtil("Scene","TailRotorClock")) {
X3DJSON.nodeUtil("Scene","TailRotorClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TailRotorPath")) {
X3DJSON.nodeUtil("Scene","TailRotorPath").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ExampleBladeRotationToggle")) {
X3DJSON.nodeUtil("Scene","ExampleBladeRotationToggle").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'].toggleEnabled(X3DJSON.nodeUtil("Scene","ExampleBladeRotationToggle","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'].toggleEnabled(X3DJSON.nodeUtil("Scene","ExampleBladeRotationToggle","isActive"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection']['ACTION']['statusColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection']['ACTION']['statusColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection']['ACTION']['statusColor'].push(function(property, value) {
		if (property === 'statusColor') {
			X3DJSON.nodeUtil("Scene","ToggleStatusColor","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'].statusColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'].statusColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'].statusColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ToggleStatusColor","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'].statusColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'].statusColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'].statusColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection']['ACTION']['status'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection']['ACTION']['status'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection']['ACTION']['status'].push(function(property, value) {
		if (property === 'status') {
			X3DJSON.nodeUtil("Scene","ExampleTailRotor","rotationOn",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'].status === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'].status() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'].status, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ExampleTailRotor","rotationOn",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'].status === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'].status() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'].status, __eventTime);
			X3DJSON.nodeUtil("Scene","TailRotorClock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'].clockEnabled === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'].clockEnabled() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'].clockEnabled, __eventTime);
			X3DJSON.nodeUtil("Scene","RotationSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'].switchChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'].switchChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['BladeRotationOnOffScript'].switchChoice, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'].toggleEnabled(X3DJSON.nodeUtil("Scene","ExampleBladeRotationToggle","isActive"), __eventTime);
			X3DJSON.nodeUtil("Scene","ToggleStatusColor","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'].statusColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'].statusColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'].statusColor, __eventTime);
			X3DJSON.nodeUtil("Scene","ExampleTailRotor","rotationOn",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'].status === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'].status() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/TwoBladeTailRotorPrototype.json']['ExampleSelection'].status, __eventTime);