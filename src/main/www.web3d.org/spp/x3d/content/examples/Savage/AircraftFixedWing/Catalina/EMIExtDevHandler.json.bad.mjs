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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/Catalina/EMIExtDevHandler.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/Catalina/EMIExtDevHandler.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/Catalina/EMIExtDevHandler.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/Catalina/EMIExtDevHandler.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/Catalina/EMIExtDevHandler.json'][''] = function() {
	this.set_LOOK_DOWN = function (value) {
		try {
			this.proxy.LOOK_DOWN = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting LOOK_DOWN '+e);
			console.error('Problems setting LOOK_DOWN',e);
		}
	};
	this.LOOK_DOWN_changed = function () {
		var value = this.LOOK_DOWN;
		return value;
	};
	try {
		this.LOOK_DOWN = new SFBool();
	} catch (e) {
		console.log('Problems setting LOOK_DOWN '+e);
		console.error('Problems setting LOOK_DOWN',e);
	}
	this.set_Action_19 = function (value) {
		try {
			this.proxy.Action_19 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_19 '+e);
			console.error('Problems setting Action_19',e);
		}
	};
	this.Action_19_changed = function () {
		var value = this.Action_19;
		return value;
	};
	try {
		this.Action_19 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_19 '+e);
		console.error('Problems setting Action_19',e);
	}
	this.set_Action_18 = function (value) {
		try {
			this.proxy.Action_18 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_18 '+e);
			console.error('Problems setting Action_18',e);
		}
	};
	this.Action_18_changed = function () {
		var value = this.Action_18;
		return value;
	};
	try {
		this.Action_18 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_18 '+e);
		console.error('Problems setting Action_18',e);
	}
	this.set_Action_17 = function (value) {
		try {
			this.proxy.Action_17 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_17 '+e);
			console.error('Problems setting Action_17',e);
		}
	};
	this.Action_17_changed = function () {
		var value = this.Action_17;
		return value;
	};
	try {
		this.Action_17 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_17 '+e);
		console.error('Problems setting Action_17',e);
	}
	this.set_TRACING = function (value) {
		try {
			this.proxy.TRACING = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TRACING '+e);
			console.error('Problems setting TRACING',e);
		}
	};
	this.TRACING_changed = function () {
		var value = this.TRACING;
		return value;
	};
	try {
		this.TRACING = new SFBool();
	} catch (e) {
		console.log('Problems setting TRACING '+e);
		console.error('Problems setting TRACING',e);
	}
	this.set_Action_16 = function (value) {
		try {
			this.proxy.Action_16 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_16 '+e);
			console.error('Problems setting Action_16',e);
		}
	};
	this.Action_16_changed = function () {
		var value = this.Action_16;
		return value;
	};
	try {
		this.Action_16 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_16 '+e);
		console.error('Problems setting Action_16',e);
	}
	this.set_Action_15 = function (value) {
		try {
			this.proxy.Action_15 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_15 '+e);
			console.error('Problems setting Action_15',e);
		}
	};
	this.Action_15_changed = function () {
		var value = this.Action_15;
		return value;
	};
	try {
		this.Action_15 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_15 '+e);
		console.error('Problems setting Action_15',e);
	}
	this.set_PAN_UP = function (value) {
		try {
			this.proxy.PAN_UP = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting PAN_UP '+e);
			console.error('Problems setting PAN_UP',e);
		}
	};
	this.PAN_UP_changed = function () {
		var value = this.PAN_UP;
		return value;
	};
	try {
		this.PAN_UP = new SFBool();
	} catch (e) {
		console.log('Problems setting PAN_UP '+e);
		console.error('Problems setting PAN_UP',e);
	}
	this.set_Action_14 = function (value) {
		try {
			this.proxy.Action_14 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_14 '+e);
			console.error('Problems setting Action_14',e);
		}
	};
	this.Action_14_changed = function () {
		var value = this.Action_14;
		return value;
	};
	try {
		this.Action_14 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_14 '+e);
		console.error('Problems setting Action_14',e);
	}
	this.set_Action_13 = function (value) {
		try {
			this.proxy.Action_13 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_13 '+e);
			console.error('Problems setting Action_13',e);
		}
	};
	this.Action_13_changed = function () {
		var value = this.Action_13;
		return value;
	};
	try {
		this.Action_13 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_13 '+e);
		console.error('Problems setting Action_13',e);
	}
	this.set_Action_12 = function (value) {
		try {
			this.proxy.Action_12 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_12 '+e);
			console.error('Problems setting Action_12',e);
		}
	};
	this.Action_12_changed = function () {
		var value = this.Action_12;
		return value;
	};
	try {
		this.Action_12 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_12 '+e);
		console.error('Problems setting Action_12',e);
	}
	this.set_Action_11 = function (value) {
		try {
			this.proxy.Action_11 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_11 '+e);
			console.error('Problems setting Action_11',e);
		}
	};
	this.Action_11_changed = function () {
		var value = this.Action_11;
		return value;
	};
	try {
		this.Action_11 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_11 '+e);
		console.error('Problems setting Action_11',e);
	}
	this.set_Action_10 = function (value) {
		try {
			this.proxy.Action_10 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_10 '+e);
			console.error('Problems setting Action_10',e);
		}
	};
	this.Action_10_changed = function () {
		var value = this.Action_10;
		return value;
	};
	try {
		this.Action_10 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_10 '+e);
		console.error('Problems setting Action_10',e);
	}
	this.set_PAN_LEFT = function (value) {
		try {
			this.proxy.PAN_LEFT = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting PAN_LEFT '+e);
			console.error('Problems setting PAN_LEFT',e);
		}
	};
	this.PAN_LEFT_changed = function () {
		var value = this.PAN_LEFT;
		return value;
	};
	try {
		this.PAN_LEFT = new SFBool();
	} catch (e) {
		console.log('Problems setting PAN_LEFT '+e);
		console.error('Problems setting PAN_LEFT',e);
	}
	this.set_DISPLAY_MENU = function (value) {
		try {
			this.proxy.DISPLAY_MENU = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting DISPLAY_MENU '+e);
			console.error('Problems setting DISPLAY_MENU',e);
		}
	};
	this.DISPLAY_MENU_changed = function () {
		var value = this.DISPLAY_MENU;
		return value;
	};
	try {
		this.DISPLAY_MENU = new SFBool();
	} catch (e) {
		console.log('Problems setting DISPLAY_MENU '+e);
		console.error('Problems setting DISPLAY_MENU',e);
	}
	this.set_QUIT = function (value) {
		try {
			this.proxy.QUIT = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting QUIT '+e);
			console.error('Problems setting QUIT',e);
		}
	};
	this.QUIT_changed = function () {
		var value = this.QUIT;
		return value;
	};
	try {
		this.QUIT = new SFBool();
	} catch (e) {
		console.log('Problems setting QUIT '+e);
		console.error('Problems setting QUIT',e);
	}
	this.set_PAN_LEFT_RIGHT_AXIS = function (value) {
		try {
			this.proxy.PAN_LEFT_RIGHT_AXIS = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting PAN_LEFT_RIGHT_AXIS '+e);
			console.error('Problems setting PAN_LEFT_RIGHT_AXIS',e);
		}
	};
	this.PAN_LEFT_RIGHT_AXIS_changed = function () {
		var value = this.PAN_LEFT_RIGHT_AXIS;
		return value;
	};
	try {
		this.PAN_LEFT_RIGHT_AXIS = new SFInt32();
	} catch (e) {
		console.log('Problems setting PAN_LEFT_RIGHT_AXIS '+e);
		console.error('Problems setting PAN_LEFT_RIGHT_AXIS',e);
	}
	this.set_pollAtStartUp = function (value) {
		try {
			this.proxy.pollAtStartUp = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting pollAtStartUp '+e);
			console.error('Problems setting pollAtStartUp',e);
		}
	};
	this.pollAtStartUp_changed = function () {
		var value = this.pollAtStartUp;
		return value;
	};
	try {
		this.pollAtStartUp = new SFBool();
	} catch (e) {
		console.log('Problems setting pollAtStartUp '+e);
		console.error('Problems setting pollAtStartUp',e);
	}
	this.set_POINTER_2 = function (value) {
		try {
			this.proxy.POINTER_2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting POINTER_2 '+e);
			console.error('Problems setting POINTER_2',e);
		}
	};
	this.POINTER_2_changed = function () {
		var value = this.POINTER_2;
		return value;
	};
	try {
		this.POINTER_2 = new SFInt32();
	} catch (e) {
		console.log('Problems setting POINTER_2 '+e);
		console.error('Problems setting POINTER_2',e);
	}
	this.set_POINTER_1 = function (value) {
		try {
			this.proxy.POINTER_1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting POINTER_1 '+e);
			console.error('Problems setting POINTER_1',e);
		}
	};
	this.POINTER_1_changed = function () {
		var value = this.POINTER_1;
		return value;
	};
	try {
		this.POINTER_1 = new SFInt32();
	} catch (e) {
		console.log('Problems setting POINTER_1 '+e);
		console.error('Problems setting POINTER_1',e);
	}
	this.set_WALK_FLY_TOGGLE = function (value) {
		try {
			this.proxy.WALK_FLY_TOGGLE = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting WALK_FLY_TOGGLE '+e);
			console.error('Problems setting WALK_FLY_TOGGLE',e);
		}
	};
	this.WALK_FLY_TOGGLE_changed = function () {
		var value = this.WALK_FLY_TOGGLE;
		return value;
	};
	try {
		this.WALK_FLY_TOGGLE = new SFBool();
	} catch (e) {
		console.log('Problems setting WALK_FLY_TOGGLE '+e);
		console.error('Problems setting WALK_FLY_TOGGLE',e);
	}
	this.set_POV = function (value) {
		try {
			this.proxy.POV = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting POV '+e);
			console.error('Problems setting POV',e);
		}
	};
	this.POV_changed = function () {
		var value = this.POV;
		return value;
	};
	try {
		this.POV = new SFInt32();
	} catch (e) {
		console.log('Problems setting POV '+e);
		console.error('Problems setting POV',e);
	}
	this.set_LOOK_LEFT = function (value) {
		try {
			this.proxy.LOOK_LEFT = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting LOOK_LEFT '+e);
			console.error('Problems setting LOOK_LEFT',e);
		}
	};
	this.LOOK_LEFT_changed = function () {
		var value = this.LOOK_LEFT;
		return value;
	};
	try {
		this.LOOK_LEFT = new SFBool();
	} catch (e) {
		console.log('Problems setting LOOK_LEFT '+e);
		console.error('Problems setting LOOK_LEFT',e);
	}
	this.set_UP_DOWN_AXIS = function (value) {
		try {
			this.proxy.UP_DOWN_AXIS = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting UP_DOWN_AXIS '+e);
			console.error('Problems setting UP_DOWN_AXIS',e);
		}
	};
	this.UP_DOWN_AXIS_changed = function () {
		var value = this.UP_DOWN_AXIS;
		return value;
	};
	try {
		this.UP_DOWN_AXIS = new SFInt32();
	} catch (e) {
		console.log('Problems setting UP_DOWN_AXIS '+e);
		console.error('Problems setting UP_DOWN_AXIS',e);
	}
	this.set_poll = function (value) {
		try {
			this.proxy.poll = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting poll '+e);
			console.error('Problems setting poll',e);
		}
	};
	this.poll_changed = function () {
		var value = this.poll;
		return value;
	};
	try {
		this.poll = new SFBool();
	} catch (e) {
		console.log('Problems setting poll '+e);
		console.error('Problems setting poll',e);
	}
	this.set_ADD_OBJECT = function (value) {
		try {
			this.proxy.ADD_OBJECT = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ADD_OBJECT '+e);
			console.error('Problems setting ADD_OBJECT',e);
		}
	};
	this.ADD_OBJECT_changed = function () {
		var value = this.ADD_OBJECT;
		return value;
	};
	try {
		this.ADD_OBJECT = new SFBool();
	} catch (e) {
		console.log('Problems setting ADD_OBJECT '+e);
		console.error('Problems setting ADD_OBJECT',e);
	}
	this.set_THRUST_AXIS = function (value) {
		try {
			this.proxy.THRUST_AXIS = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting THRUST_AXIS '+e);
			console.error('Problems setting THRUST_AXIS',e);
		}
	};
	this.THRUST_AXIS_changed = function () {
		var value = this.THRUST_AXIS;
		return value;
	};
	try {
		this.THRUST_AXIS = new SFInt32();
	} catch (e) {
		console.log('Problems setting THRUST_AXIS '+e);
		console.error('Problems setting THRUST_AXIS',e);
	}
	this.set_Action_50 = function (value) {
		try {
			this.proxy.Action_50 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_50 '+e);
			console.error('Problems setting Action_50',e);
		}
	};
	this.Action_50_changed = function () {
		var value = this.Action_50;
		return value;
	};
	try {
		this.Action_50 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_50 '+e);
		console.error('Problems setting Action_50',e);
	}
	this.set_LOOK_RAZ = function (value) {
		try {
			this.proxy.LOOK_RAZ = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting LOOK_RAZ '+e);
			console.error('Problems setting LOOK_RAZ',e);
		}
	};
	this.LOOK_RAZ_changed = function () {
		var value = this.LOOK_RAZ;
		return value;
	};
	try {
		this.LOOK_RAZ = new SFBool();
	} catch (e) {
		console.log('Problems setting LOOK_RAZ '+e);
		console.error('Problems setting LOOK_RAZ',e);
	}
	this.set_Action_49 = function (value) {
		try {
			this.proxy.Action_49 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_49 '+e);
			console.error('Problems setting Action_49',e);
		}
	};
	this.Action_49_changed = function () {
		var value = this.Action_49;
		return value;
	};
	try {
		this.Action_49 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_49 '+e);
		console.error('Problems setting Action_49',e);
	}
	this.set_PAN = function (value) {
		try {
			this.proxy.PAN = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting PAN '+e);
			console.error('Problems setting PAN',e);
		}
	};
	this.PAN_changed = function () {
		var value = this.PAN;
		return value;
	};
	try {
		this.PAN = new SFInt32();
	} catch (e) {
		console.log('Problems setting PAN '+e);
		console.error('Problems setting PAN',e);
	}
	this.set_Action_48 = function (value) {
		try {
			this.proxy.Action_48 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_48 '+e);
			console.error('Problems setting Action_48',e);
		}
	};
	this.Action_48_changed = function () {
		var value = this.Action_48;
		return value;
	};
	try {
		this.Action_48 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_48 '+e);
		console.error('Problems setting Action_48',e);
	}
	this.set_Action_47 = function (value) {
		try {
			this.proxy.Action_47 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_47 '+e);
			console.error('Problems setting Action_47',e);
		}
	};
	this.Action_47_changed = function () {
		var value = this.Action_47;
		return value;
	};
	try {
		this.Action_47 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_47 '+e);
		console.error('Problems setting Action_47',e);
	}
	this.set_Action_46 = function (value) {
		try {
			this.proxy.Action_46 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_46 '+e);
			console.error('Problems setting Action_46',e);
		}
	};
	this.Action_46_changed = function () {
		var value = this.Action_46;
		return value;
	};
	try {
		this.Action_46 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_46 '+e);
		console.error('Problems setting Action_46',e);
	}
	this.set_define = function (value) {
		try {
			this.proxy.define = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting define '+e);
			console.error('Problems setting define',e);
		}
	};
	this.define_changed = function () {
		var value = this.define;
		return value;
	};
	try {
		this.define = new SFTime();
	} catch (e) {
		console.log('Problems setting define '+e);
		console.error('Problems setting define',e);
	}
	this.set_Action_45 = function (value) {
		try {
			this.proxy.Action_45 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_45 '+e);
			console.error('Problems setting Action_45',e);
		}
	};
	this.Action_45_changed = function () {
		var value = this.Action_45;
		return value;
	};
	try {
		this.Action_45 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_45 '+e);
		console.error('Problems setting Action_45',e);
	}
	this.set_Action_44 = function (value) {
		try {
			this.proxy.Action_44 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_44 '+e);
			console.error('Problems setting Action_44',e);
		}
	};
	this.Action_44_changed = function () {
		var value = this.Action_44;
		return value;
	};
	try {
		this.Action_44 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_44 '+e);
		console.error('Problems setting Action_44',e);
	}
	this.set_Action_43 = function (value) {
		try {
			this.proxy.Action_43 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_43 '+e);
			console.error('Problems setting Action_43',e);
		}
	};
	this.Action_43_changed = function () {
		var value = this.Action_43;
		return value;
	};
	try {
		this.Action_43 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_43 '+e);
		console.error('Problems setting Action_43',e);
	}
	this.set_Action_42 = function (value) {
		try {
			this.proxy.Action_42 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_42 '+e);
			console.error('Problems setting Action_42',e);
		}
	};
	this.Action_42_changed = function () {
		var value = this.Action_42;
		return value;
	};
	try {
		this.Action_42 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_42 '+e);
		console.error('Problems setting Action_42',e);
	}
	this.set_Action_41 = function (value) {
		try {
			this.proxy.Action_41 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_41 '+e);
			console.error('Problems setting Action_41',e);
		}
	};
	this.Action_41_changed = function () {
		var value = this.Action_41;
		return value;
	};
	try {
		this.Action_41 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_41 '+e);
		console.error('Problems setting Action_41',e);
	}
	this.set_Action_40 = function (value) {
		try {
			this.proxy.Action_40 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_40 '+e);
			console.error('Problems setting Action_40',e);
		}
	};
	this.Action_40_changed = function () {
		var value = this.Action_40;
		return value;
	};
	try {
		this.Action_40 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_40 '+e);
		console.error('Problems setting Action_40',e);
	}
	this.set_ROTATEOBJECT_LEFT_RIGHT_AXIS = function (value) {
		try {
			this.proxy.ROTATEOBJECT_LEFT_RIGHT_AXIS = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ROTATEOBJECT_LEFT_RIGHT_AXIS '+e);
			console.error('Problems setting ROTATEOBJECT_LEFT_RIGHT_AXIS',e);
		}
	};
	this.ROTATEOBJECT_LEFT_RIGHT_AXIS_changed = function () {
		var value = this.ROTATEOBJECT_LEFT_RIGHT_AXIS;
		return value;
	};
	try {
		this.ROTATEOBJECT_LEFT_RIGHT_AXIS = new SFInt32();
	} catch (e) {
		console.log('Problems setting ROTATEOBJECT_LEFT_RIGHT_AXIS '+e);
		console.error('Problems setting ROTATEOBJECT_LEFT_RIGHT_AXIS',e);
	}
	this.set_settingsName = function (value) {
		try {
			this.proxy.settingsName = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting settingsName '+e);
			console.error('Problems setting settingsName',e);
		}
	};
	this.settingsName_changed = function () {
		var value = this.settingsName;
		return value;
	};
	try {
		this.settingsName = new SFString();
	} catch (e) {
		console.log('Problems setting settingsName '+e);
		console.error('Problems setting settingsName',e);
	}
	this.set_ROTATEOBJECT_UP_DOWN_AXIS = function (value) {
		try {
			this.proxy.ROTATEOBJECT_UP_DOWN_AXIS = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ROTATEOBJECT_UP_DOWN_AXIS '+e);
			console.error('Problems setting ROTATEOBJECT_UP_DOWN_AXIS',e);
		}
	};
	this.ROTATEOBJECT_UP_DOWN_AXIS_changed = function () {
		var value = this.ROTATEOBJECT_UP_DOWN_AXIS;
		return value;
	};
	try {
		this.ROTATEOBJECT_UP_DOWN_AXIS = new SFInt32();
	} catch (e) {
		console.log('Problems setting ROTATEOBJECT_UP_DOWN_AXIS '+e);
		console.error('Problems setting ROTATEOBJECT_UP_DOWN_AXIS',e);
	}
	this.set_LOOK_UP = function (value) {
		try {
			this.proxy.LOOK_UP = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting LOOK_UP '+e);
			console.error('Problems setting LOOK_UP',e);
		}
	};
	this.LOOK_UP_changed = function () {
		var value = this.LOOK_UP;
		return value;
	};
	try {
		this.LOOK_UP = new SFBool();
	} catch (e) {
		console.log('Problems setting LOOK_UP '+e);
		console.error('Problems setting LOOK_UP',e);
	}
	this.set_Action_9 = function (value) {
		try {
			this.proxy.Action_9 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_9 '+e);
			console.error('Problems setting Action_9',e);
		}
	};
	this.Action_9_changed = function () {
		var value = this.Action_9;
		return value;
	};
	try {
		this.Action_9 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_9 '+e);
		console.error('Problems setting Action_9',e);
	}
	this.set_Action_8 = function (value) {
		try {
			this.proxy.Action_8 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_8 '+e);
			console.error('Problems setting Action_8',e);
		}
	};
	this.Action_8_changed = function () {
		var value = this.Action_8;
		return value;
	};
	try {
		this.Action_8 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_8 '+e);
		console.error('Problems setting Action_8',e);
	}
	this.set_LOOK_RIGHT = function (value) {
		try {
			this.proxy.LOOK_RIGHT = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting LOOK_RIGHT '+e);
			console.error('Problems setting LOOK_RIGHT',e);
		}
	};
	this.LOOK_RIGHT_changed = function () {
		var value = this.LOOK_RIGHT;
		return value;
	};
	try {
		this.LOOK_RIGHT = new SFBool();
	} catch (e) {
		console.log('Problems setting LOOK_RIGHT '+e);
		console.error('Problems setting LOOK_RIGHT',e);
	}
	this.set_Action_7 = function (value) {
		try {
			this.proxy.Action_7 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_7 '+e);
			console.error('Problems setting Action_7',e);
		}
	};
	this.Action_7_changed = function () {
		var value = this.Action_7;
		return value;
	};
	try {
		this.Action_7 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_7 '+e);
		console.error('Problems setting Action_7',e);
	}
	this.set_Action_39 = function (value) {
		try {
			this.proxy.Action_39 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_39 '+e);
			console.error('Problems setting Action_39',e);
		}
	};
	this.Action_39_changed = function () {
		var value = this.Action_39;
		return value;
	};
	try {
		this.Action_39 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_39 '+e);
		console.error('Problems setting Action_39',e);
	}
	this.set_Action_6 = function (value) {
		try {
			this.proxy.Action_6 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_6 '+e);
			console.error('Problems setting Action_6',e);
		}
	};
	this.Action_6_changed = function () {
		var value = this.Action_6;
		return value;
	};
	try {
		this.Action_6 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_6 '+e);
		console.error('Problems setting Action_6',e);
	}
	this.set_Action_38 = function (value) {
		try {
			this.proxy.Action_38 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_38 '+e);
			console.error('Problems setting Action_38',e);
		}
	};
	this.Action_38_changed = function () {
		var value = this.Action_38;
		return value;
	};
	try {
		this.Action_38 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_38 '+e);
		console.error('Problems setting Action_38',e);
	}
	this.set_PAN_UP_DOWN_AXIS = function (value) {
		try {
			this.proxy.PAN_UP_DOWN_AXIS = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting PAN_UP_DOWN_AXIS '+e);
			console.error('Problems setting PAN_UP_DOWN_AXIS',e);
		}
	};
	this.PAN_UP_DOWN_AXIS_changed = function () {
		var value = this.PAN_UP_DOWN_AXIS;
		return value;
	};
	try {
		this.PAN_UP_DOWN_AXIS = new SFInt32();
	} catch (e) {
		console.log('Problems setting PAN_UP_DOWN_AXIS '+e);
		console.error('Problems setting PAN_UP_DOWN_AXIS',e);
	}
	this.set_Action_5 = function (value) {
		try {
			this.proxy.Action_5 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_5 '+e);
			console.error('Problems setting Action_5',e);
		}
	};
	this.Action_5_changed = function () {
		var value = this.Action_5;
		return value;
	};
	try {
		this.Action_5 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_5 '+e);
		console.error('Problems setting Action_5',e);
	}
	this.set_Action_37 = function (value) {
		try {
			this.proxy.Action_37 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_37 '+e);
			console.error('Problems setting Action_37',e);
		}
	};
	this.Action_37_changed = function () {
		var value = this.Action_37;
		return value;
	};
	try {
		this.Action_37 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_37 '+e);
		console.error('Problems setting Action_37',e);
	}
	this.set_Action_4 = function (value) {
		try {
			this.proxy.Action_4 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_4 '+e);
			console.error('Problems setting Action_4',e);
		}
	};
	this.Action_4_changed = function () {
		var value = this.Action_4;
		return value;
	};
	try {
		this.Action_4 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_4 '+e);
		console.error('Problems setting Action_4',e);
	}
	this.set_Action_36 = function (value) {
		try {
			this.proxy.Action_36 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_36 '+e);
			console.error('Problems setting Action_36',e);
		}
	};
	this.Action_36_changed = function () {
		var value = this.Action_36;
		return value;
	};
	try {
		this.Action_36 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_36 '+e);
		console.error('Problems setting Action_36',e);
	}
	this.set_Action_3 = function (value) {
		try {
			this.proxy.Action_3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_3 '+e);
			console.error('Problems setting Action_3',e);
		}
	};
	this.Action_3_changed = function () {
		var value = this.Action_3;
		return value;
	};
	try {
		this.Action_3 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_3 '+e);
		console.error('Problems setting Action_3',e);
	}
	this.set_Action_35 = function (value) {
		try {
			this.proxy.Action_35 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_35 '+e);
			console.error('Problems setting Action_35',e);
		}
	};
	this.Action_35_changed = function () {
		var value = this.Action_35;
		return value;
	};
	try {
		this.Action_35 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_35 '+e);
		console.error('Problems setting Action_35',e);
	}
	this.set_Action_2 = function (value) {
		try {
			this.proxy.Action_2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_2 '+e);
			console.error('Problems setting Action_2',e);
		}
	};
	this.Action_2_changed = function () {
		var value = this.Action_2;
		return value;
	};
	try {
		this.Action_2 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_2 '+e);
		console.error('Problems setting Action_2',e);
	}
	this.set_Action_34 = function (value) {
		try {
			this.proxy.Action_34 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_34 '+e);
			console.error('Problems setting Action_34',e);
		}
	};
	this.Action_34_changed = function () {
		var value = this.Action_34;
		return value;
	};
	try {
		this.Action_34 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_34 '+e);
		console.error('Problems setting Action_34',e);
	}
	this.set_Action_1 = function (value) {
		try {
			this.proxy.Action_1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_1 '+e);
			console.error('Problems setting Action_1',e);
		}
	};
	this.Action_1_changed = function () {
		var value = this.Action_1;
		return value;
	};
	try {
		this.Action_1 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_1 '+e);
		console.error('Problems setting Action_1',e);
	}
	this.set_Action_33 = function (value) {
		try {
			this.proxy.Action_33 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_33 '+e);
			console.error('Problems setting Action_33',e);
		}
	};
	this.Action_33_changed = function () {
		var value = this.Action_33;
		return value;
	};
	try {
		this.Action_33 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_33 '+e);
		console.error('Problems setting Action_33',e);
	}
	this.set_Action_0 = function (value) {
		try {
			this.proxy.Action_0 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_0 '+e);
			console.error('Problems setting Action_0',e);
		}
	};
	this.Action_0_changed = function () {
		var value = this.Action_0;
		return value;
	};
	try {
		this.Action_0 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_0 '+e);
		console.error('Problems setting Action_0',e);
	}
	this.set_Action_32 = function (value) {
		try {
			this.proxy.Action_32 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_32 '+e);
			console.error('Problems setting Action_32',e);
		}
	};
	this.Action_32_changed = function () {
		var value = this.Action_32;
		return value;
	};
	try {
		this.Action_32 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_32 '+e);
		console.error('Problems setting Action_32',e);
	}
	this.set_OBJ_2_ROT = function (value) {
		try {
			this.proxy.OBJ_2_ROT = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting OBJ_2_ROT '+e);
			console.error('Problems setting OBJ_2_ROT',e);
		}
	};
	this.OBJ_2_ROT_changed = function () {
		var value = this.OBJ_2_ROT;
		return value;
	};
	try {
		this.OBJ_2_ROT = new MFInt32();
	} catch (e) {
		console.log('Problems setting OBJ_2_ROT '+e);
		console.error('Problems setting OBJ_2_ROT',e);
	}
	this.set_Action_31 = function (value) {
		try {
			this.proxy.Action_31 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_31 '+e);
			console.error('Problems setting Action_31',e);
		}
	};
	this.Action_31_changed = function () {
		var value = this.Action_31;
		return value;
	};
	try {
		this.Action_31 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_31 '+e);
		console.error('Problems setting Action_31',e);
	}
	this.set_Action_30 = function (value) {
		try {
			this.proxy.Action_30 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_30 '+e);
			console.error('Problems setting Action_30',e);
		}
	};
	this.Action_30_changed = function () {
		var value = this.Action_30;
		return value;
	};
	try {
		this.Action_30 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_30 '+e);
		console.error('Problems setting Action_30',e);
	}
	this.set_ACTIVATION = function (value) {
		try {
			this.proxy.ACTIVATION = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ACTIVATION '+e);
			console.error('Problems setting ACTIVATION',e);
		}
	};
	this.ACTIVATION_changed = function () {
		var value = this.ACTIVATION;
		return value;
	};
	try {
		this.ACTIVATION = new SFBool();
	} catch (e) {
		console.log('Problems setting ACTIVATION '+e);
		console.error('Problems setting ACTIVATION',e);
	}
	this.set_BANK_AXIS = function (value) {
		try {
			this.proxy.BANK_AXIS = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting BANK_AXIS '+e);
			console.error('Problems setting BANK_AXIS',e);
		}
	};
	this.BANK_AXIS_changed = function () {
		var value = this.BANK_AXIS;
		return value;
	};
	try {
		this.BANK_AXIS = new SFInt32();
	} catch (e) {
		console.log('Problems setting BANK_AXIS '+e);
		console.error('Problems setting BANK_AXIS',e);
	}
	this.set_PAN_DOWN = function (value) {
		try {
			this.proxy.PAN_DOWN = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting PAN_DOWN '+e);
			console.error('Problems setting PAN_DOWN',e);
		}
	};
	this.PAN_DOWN_changed = function () {
		var value = this.PAN_DOWN;
		return value;
	};
	try {
		this.PAN_DOWN = new SFBool();
	} catch (e) {
		console.log('Problems setting PAN_DOWN '+e);
		console.error('Problems setting PAN_DOWN',e);
	}
	this.set_Action_29 = function (value) {
		try {
			this.proxy.Action_29 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_29 '+e);
			console.error('Problems setting Action_29',e);
		}
	};
	this.Action_29_changed = function () {
		var value = this.Action_29;
		return value;
	};
	try {
		this.Action_29 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_29 '+e);
		console.error('Problems setting Action_29',e);
	}
	this.set_Action_28 = function (value) {
		try {
			this.proxy.Action_28 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_28 '+e);
			console.error('Problems setting Action_28',e);
		}
	};
	this.Action_28_changed = function () {
		var value = this.Action_28;
		return value;
	};
	try {
		this.Action_28 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_28 '+e);
		console.error('Problems setting Action_28',e);
	}
	this.set_Action_27 = function (value) {
		try {
			this.proxy.Action_27 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_27 '+e);
			console.error('Problems setting Action_27',e);
		}
	};
	this.Action_27_changed = function () {
		var value = this.Action_27;
		return value;
	};
	try {
		this.Action_27 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_27 '+e);
		console.error('Problems setting Action_27',e);
	}
	this.set_timeStep = function (value) {
		try {
			this.proxy.timeStep = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting timeStep '+e);
			console.error('Problems setting timeStep',e);
		}
	};
	this.timeStep_changed = function () {
		var value = this.timeStep;
		return value;
	};
	try {
		this.timeStep = new SFTime();
	} catch (e) {
		console.log('Problems setting timeStep '+e);
		console.error('Problems setting timeStep',e);
	}
	this.set_Action_26 = function (value) {
		try {
			this.proxy.Action_26 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_26 '+e);
			console.error('Problems setting Action_26',e);
		}
	};
	this.Action_26_changed = function () {
		var value = this.Action_26;
		return value;
	};
	try {
		this.Action_26 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_26 '+e);
		console.error('Problems setting Action_26',e);
	}
	this.set_Action_25 = function (value) {
		try {
			this.proxy.Action_25 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_25 '+e);
			console.error('Problems setting Action_25',e);
		}
	};
	this.Action_25_changed = function () {
		var value = this.Action_25;
		return value;
	};
	try {
		this.Action_25 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_25 '+e);
		console.error('Problems setting Action_25',e);
	}
	this.set_Action_24 = function (value) {
		try {
			this.proxy.Action_24 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_24 '+e);
			console.error('Problems setting Action_24',e);
		}
	};
	this.Action_24_changed = function () {
		var value = this.Action_24;
		return value;
	};
	try {
		this.Action_24 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_24 '+e);
		console.error('Problems setting Action_24',e);
	}
	this.set_Action_23 = function (value) {
		try {
			this.proxy.Action_23 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_23 '+e);
			console.error('Problems setting Action_23',e);
		}
	};
	this.Action_23_changed = function () {
		var value = this.Action_23;
		return value;
	};
	try {
		this.Action_23 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_23 '+e);
		console.error('Problems setting Action_23',e);
	}
	this.set_Action_22 = function (value) {
		try {
			this.proxy.Action_22 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_22 '+e);
			console.error('Problems setting Action_22',e);
		}
	};
	this.Action_22_changed = function () {
		var value = this.Action_22;
		return value;
	};
	try {
		this.Action_22 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_22 '+e);
		console.error('Problems setting Action_22',e);
	}
	this.set_PAN_RIGHT = function (value) {
		try {
			this.proxy.PAN_RIGHT = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting PAN_RIGHT '+e);
			console.error('Problems setting PAN_RIGHT',e);
		}
	};
	this.PAN_RIGHT_changed = function () {
		var value = this.PAN_RIGHT;
		return value;
	};
	try {
		this.PAN_RIGHT = new SFBool();
	} catch (e) {
		console.log('Problems setting PAN_RIGHT '+e);
		console.error('Problems setting PAN_RIGHT',e);
	}
	this.set_Action_21 = function (value) {
		try {
			this.proxy.Action_21 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_21 '+e);
			console.error('Problems setting Action_21',e);
		}
	};
	this.Action_21_changed = function () {
		var value = this.Action_21;
		return value;
	};
	try {
		this.Action_21 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_21 '+e);
		console.error('Problems setting Action_21',e);
	}
	this.set_Action_20 = function (value) {
		try {
			this.proxy.Action_20 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Action_20 '+e);
			console.error('Problems setting Action_20',e);
		}
	};
	this.Action_20_changed = function () {
		var value = this.Action_20;
		return value;
	};
	try {
		this.Action_20 = new SFBool();
	} catch (e) {
		console.log('Problems setting Action_20 '+e);
		console.error('Problems setting Action_20',e);
	}
	this.set_LEFT_RIGHT_AXIS = function (value) {
		try {
			this.proxy.LEFT_RIGHT_AXIS = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting LEFT_RIGHT_AXIS '+e);
			console.error('Problems setting LEFT_RIGHT_AXIS',e);
		}
	};
	this.LEFT_RIGHT_AXIS_changed = function () {
		var value = this.LEFT_RIGHT_AXIS;
		return value;
	};
	try {
		this.LEFT_RIGHT_AXIS = new SFInt32();
	} catch (e) {
		console.log('Problems setting LEFT_RIGHT_AXIS '+e);
		console.error('Problems setting LEFT_RIGHT_AXIS',e);
	}
	this.set_OBJ_1_ROT = function (value) {
		try {
			this.proxy.OBJ_1_ROT = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting OBJ_1_ROT '+e);
			console.error('Problems setting OBJ_1_ROT',e);
		}
	};
	this.OBJ_1_ROT_changed = function () {
		var value = this.OBJ_1_ROT;
		return value;
	};
	try {
		this.OBJ_1_ROT = new MFInt32();
	} catch (e) {
		console.log('Problems setting OBJ_1_ROT '+e);
		console.error('Problems setting OBJ_1_ROT',e);
	}
	this.set_PICK_OBJECT = function (value) {
		try {
			this.proxy.PICK_OBJECT = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting PICK_OBJECT '+e);
			console.error('Problems setting PICK_OBJECT',e);
		}
	};
	this.PICK_OBJECT_changed = function () {
		var value = this.PICK_OBJECT;
		return value;
	};
	try {
		this.PICK_OBJECT = new SFBool();
	} catch (e) {
		console.log('Problems setting PICK_OBJECT '+e);
		console.error('Problems setting PICK_OBJECT',e);
	}


ecmascript:
//nativescript:

	libuid=EMIExtDevHandler;
	scriptid=Script;
	file-win32-x86=EMIExtDevHandler.dll


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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/Catalina/EMIExtDevHandler.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/Catalina/EMIExtDevHandler.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/Catalina/EMIExtDevHandler.json'][''] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/Catalina/EMIExtDevHandler.json']['']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/Catalina/EMIExtDevHandler.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/Catalina/EMIExtDevHandler.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/Catalina/EMIExtDevHandler.json'][''] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/Catalina/EMIExtDevHandler.json'][''] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/Catalina/EMIExtDevHandler.json']['']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/Catalina/EMIExtDevHandler.json']['']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/Catalina/EMIExtDevHandler.json'][''].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/Catalina/EMIExtDevHandler.json']['']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/Catalina/EMIExtDevHandler.json']['']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/Catalina/EMIExtDevHandler.json'][''].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/Catalina/EMIExtDevHandler.json'][''].initialize();

