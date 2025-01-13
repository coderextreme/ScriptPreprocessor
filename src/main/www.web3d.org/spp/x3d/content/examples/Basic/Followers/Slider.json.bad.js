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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/Slider.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/Slider.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/Slider.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/Slider.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/Slider.json']['Worker'] = function() {
	this.set_height = function (value) {
		try {
			this.proxy.height = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting height '+e);
			console.error('Problems setting height',e);
		}
	};
	this.height_changed = function () {
		var value = this.height;
		return value;
	};
	try {
		this.height = new SFFloat(2);
	} catch (e) {
		console.log('Problems setting height '+e);
		console.error('Problems setting height',e);
	}
	this.set_max = function (value) {
		try {
			this.proxy.max = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting max '+e);
			console.error('Problems setting max',e);
		}
	};
	this.max_changed = function () {
		var value = this.max;
		return value;
	};
	try {
		this.max = new SFFloat(1);
	} catch (e) {
		console.log('Problems setting max '+e);
		console.error('Problems setting max',e);
	}
	this.set_silent = function (value) {
		try {
			this.proxy.silent = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting silent '+e);
			console.error('Problems setting silent',e);
		}
	};
	this.silent_changed = function () {
		var value = this.silent;
		return value;
	};
	try {
		this.silent = new SFBool(false);
	} catch (e) {
		console.log('Problems setting silent '+e);
		console.error('Problems setting silent',e);
	}
	this.set_lastTick = function (value) {
		try {
			this.proxy.lastTick = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting lastTick '+e);
			console.error('Problems setting lastTick',e);
		}
	};
	this.lastTick_changed = function () {
		var value = this.lastTick;
		return value;
	};
	try {
		this.lastTick = new SFTime(0);
	} catch (e) {
		console.log('Problems setting lastTick '+e);
		console.error('Problems setting lastTick',e);
	}
	this.set_pageSize = function (value) {
		try {
			this.proxy.pageSize = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting pageSize '+e);
			console.error('Problems setting pageSize',e);
		}
	};
	this.pageSize_changed = function () {
		var value = this.pageSize;
		return value;
	};
	try {
		this.pageSize = new SFFloat(0.2);
	} catch (e) {
		console.log('Problems setting pageSize '+e);
		console.error('Problems setting pageSize',e);
	}
	this.set_decPage = function (value) {
		try {
			this.proxy.decPage = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting decPage '+e);
			console.error('Problems setting decPage',e);
		}
	};
	this.decPage_changed = function () {
		var value = this.decPage;
		return value;
	};
	try {
		this.decPage = new SFTime();
	} catch (e) {
		console.log('Problems setting decPage '+e);
		console.error('Problems setting decPage',e);
	}
	this.set_radiusStick = function (value) {
		try {
			this.proxy.radiusStick = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radiusStick '+e);
			console.error('Problems setting radiusStick',e);
		}
	};
	this.radiusStick_changed = function () {
		var value = this.radiusStick;
		return value;
	};
	try {
		this.radiusStick = new SFFloat(0.25);
	} catch (e) {
		console.log('Problems setting radiusStick '+e);
		console.error('Problems setting radiusStick',e);
	}
	this.set_height = function (value) {
		try {
			this.proxy.height = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting height '+e);
			console.error('Problems setting height',e);
		}
	};
	this.height_changed = function () {
		var value = this.height;
		return value;
	};
	try {
		this.height = new SFFloat(2);
	} catch (e) {
		console.log('Problems setting height '+e);
		console.error('Problems setting height',e);
	}
	this.set_position = function (value) {
		try {
			this.proxy.position = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting position '+e);
			console.error('Problems setting position',e);
		}
	};
	this.position_changed = function () {
		var value = this.position;
		return value;
	};
	try {
		this.position = new SFFloat();
	} catch (e) {
		console.log('Problems setting position '+e);
		console.error('Problems setting position',e);
	}
	this.set_Timer = function (value) {
		try {
			this.proxy.Timer = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Timer '+e);
			console.error('Problems setting Timer',e);
		}
	};
	this.Timer_changed = function () {
		var value = this.Timer;
		return value;
	};
	try {
		this.Timer = X3DJSON.nodeUtil("Scene","Timer");
	} catch (e) {
		console.log('Problems setting Timer '+e);
		console.error('Problems setting Timer',e);
	}
	this.set_position = function (value) {
		try {
			this.proxy.position = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting position '+e);
			console.error('Problems setting position',e);
		}
	};
	this.position_changed = function () {
		var value = this.position;
		return value;
	};
	try {
		this.position = new SFFloat();
	} catch (e) {
		console.log('Problems setting position '+e);
		console.error('Problems setting position',e);
	}
	this.set_snapTime = function (value) {
		try {
			this.proxy.snapTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting snapTime '+e);
			console.error('Problems setting snapTime',e);
		}
	};
	this.snapTime_changed = function () {
		var value = this.snapTime;
		return value;
	};
	try {
		this.snapTime = new SFTime(0);
	} catch (e) {
		console.log('Problems setting snapTime '+e);
		console.error('Problems setting snapTime',e);
	}
	this.set_TrStickAbove = function (value) {
		try {
			this.proxy.TrStickAbove = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TrStickAbove '+e);
			console.error('Problems setting TrStickAbove',e);
		}
	};
	this.TrStickAbove_changed = function () {
		var value = this.TrStickAbove;
		return value;
	};
	try {
		this.TrStickAbove = X3DJSON.nodeUtil("Scene","TrStickAbove");
	} catch (e) {
		console.log('Problems setting TrStickAbove '+e);
		console.error('Problems setting TrStickAbove',e);
	}
	this.set_radiusKnob = function (value) {
		try {
			this.proxy.radiusKnob = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radiusKnob '+e);
			console.error('Problems setting radiusKnob',e);
		}
	};
	this.radiusKnob_changed = function () {
		var value = this.radiusKnob;
		return value;
	};
	try {
		this.radiusKnob = new SFFloat(0.5);
	} catch (e) {
		console.log('Problems setting radiusKnob '+e);
		console.error('Problems setting radiusKnob',e);
	}
	this.set_smoothMovements = function (value) {
		try {
			this.proxy.smoothMovements = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting smoothMovements '+e);
			console.error('Problems setting smoothMovements',e);
		}
	};
	this.smoothMovements_changed = function () {
		var value = this.smoothMovements;
		return value;
	};
	try {
		this.smoothMovements = new SFBool(true);
	} catch (e) {
		console.log('Problems setting smoothMovements '+e);
		console.error('Problems setting smoothMovements',e);
	}
	this.set_max = function (value) {
		try {
			this.proxy.max = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting max '+e);
			console.error('Problems setting max',e);
		}
	};
	this.max_changed = function () {
		var value = this.max;
		return value;
	};
	try {
		this.max = new SFFloat(1);
	} catch (e) {
		console.log('Problems setting max '+e);
		console.error('Problems setting max',e);
	}
	this.set_initialUpdate = function (value) {
		try {
			this.proxy.initialUpdate = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting initialUpdate '+e);
			console.error('Problems setting initialUpdate',e);
		}
	};
	this.initialUpdate_changed = function () {
		var value = this.initialUpdate;
		return value;
	};
	try {
		this.initialUpdate = new SFBool(true);
	} catch (e) {
		console.log('Problems setting initialUpdate '+e);
		console.error('Problems setting initialUpdate',e);
	}
	this.set_EFFS = function (value) {
		try {
			this.proxy.EFFS = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting EFFS '+e);
			console.error('Problems setting EFFS',e);
		}
	};
	this.EFFS_changed = function () {
		var value = this.EFFS;
		return value;
	};
	try {
		this.EFFS = X3DJSON.nodeUtil("Scene","EFFS");
	} catch (e) {
		console.log('Problems setting EFFS '+e);
		console.error('Problems setting EFFS',e);
	}
	this.set_SensKnobOrigin = function (value) {
		try {
			this.proxy.SensKnobOrigin = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SensKnobOrigin '+e);
			console.error('Problems setting SensKnobOrigin',e);
		}
	};
	this.SensKnobOrigin_changed = function () {
		var value = this.SensKnobOrigin;
		return value;
	};
	try {
		this.SensKnobOrigin = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting SensKnobOrigin '+e);
		console.error('Problems setting SensKnobOrigin',e);
	}
	this.set_pageSize = function (value) {
		try {
			this.proxy.pageSize = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting pageSize '+e);
			console.error('Problems setting pageSize',e);
		}
	};
	this.pageSize_changed = function () {
		var value = this.pageSize;
		return value;
	};
	try {
		this.pageSize = new SFFloat(0.2);
	} catch (e) {
		console.log('Problems setting pageSize '+e);
		console.error('Problems setting pageSize',e);
	}
	this.set_positionInt = function (value) {
		try {
			this.proxy.positionInt = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting positionInt '+e);
			console.error('Problems setting positionInt',e);
		}
	};
	this.positionInt_changed = function () {
		var value = this.positionInt;
		return value;
	};
	try {
		this.positionInt = undefined;
	} catch (e) {
		console.log('Problems setting positionInt '+e);
		console.error('Problems setting positionInt',e);
	}
	this.set_SmoothTau3 = function (value) {
		try {
			this.proxy.SmoothTau3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SmoothTau3 '+e);
			console.error('Problems setting SmoothTau3',e);
		}
	};
	this.SmoothTau3_changed = function () {
		var value = this.SmoothTau3;
		return value;
	};
	try {
		this.SmoothTau3 = new SFFloat(0.05);
	} catch (e) {
		console.log('Problems setting SmoothTau3 '+e);
		console.error('Problems setting SmoothTau3',e);
	}
	this.set_SmoothTau2 = function (value) {
		try {
			this.proxy.SmoothTau2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SmoothTau2 '+e);
			console.error('Problems setting SmoothTau2',e);
		}
	};
	this.SmoothTau2_changed = function () {
		var value = this.SmoothTau2;
		return value;
	};
	try {
		this.SmoothTau2 = new SFFloat(0.05);
	} catch (e) {
		console.log('Problems setting SmoothTau2 '+e);
		console.error('Problems setting SmoothTau2',e);
	}
	this.set_SmoothTau1 = function (value) {
		try {
			this.proxy.SmoothTau1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SmoothTau1 '+e);
			console.error('Problems setting SmoothTau1',e);
		}
	};
	this.SmoothTau1_changed = function () {
		var value = this.SmoothTau1;
		return value;
	};
	try {
		this.SmoothTau1 = new SFFloat(0.05);
	} catch (e) {
		console.log('Problems setting SmoothTau1 '+e);
		console.error('Problems setting SmoothTau1',e);
	}
	this.set_min = function (value) {
		try {
			this.proxy.min = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting min '+e);
			console.error('Problems setting min',e);
		}
	};
	this.min_changed = function () {
		var value = this.min;
		return value;
	};
	try {
		this.min = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting min '+e);
		console.error('Problems setting min',e);
	}
	this.set_SensKnob_isActive = function (value) {
		try {
			this.proxy.SensKnob_isActive = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SensKnob_isActive '+e);
			console.error('Problems setting SensKnob_isActive',e);
		}
	};
	this.SensKnob_isActive_changed = function () {
		var value = this.SensKnob_isActive;
		return value;
	};
	try {
		this.SensKnob_isActive = new SFBool();
	} catch (e) {
		console.log('Problems setting SensKnob_isActive '+e);
		console.error('Problems setting SensKnob_isActive',e);
	}
	this.set_KnobSize = function (value) {
		try {
			this.proxy.KnobSize = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting KnobSize '+e);
			console.error('Problems setting KnobSize',e);
		}
	};
	this.KnobSize_changed = function () {
		var value = this.KnobSize;
		return value;
	};
	try {
		this.KnobSize = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting KnobSize '+e);
		console.error('Problems setting KnobSize',e);
	}
	this.set_silently_set_position = function (value) {
		try {
			this.proxy.silently_set_position = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting silently_set_position '+e);
			console.error('Problems setting silently_set_position',e);
		}
	};
	this.silently_set_position_changed = function () {
		var value = this.silently_set_position;
		return value;
	};
	try {
		this.silently_set_position = new SFFloat();
	} catch (e) {
		console.log('Problems setting silently_set_position '+e);
		console.error('Problems setting silently_set_position',e);
	}
	this.set_initialUnfilteredUpdate = function (value) {
		try {
			this.proxy.initialUnfilteredUpdate = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting initialUnfilteredUpdate '+e);
			console.error('Problems setting initialUnfilteredUpdate',e);
		}
	};
	this.initialUnfilteredUpdate_changed = function () {
		var value = this.initialUnfilteredUpdate;
		return value;
	};
	try {
		this.initialUnfilteredUpdate = new SFBool(true);
	} catch (e) {
		console.log('Problems setting initialUnfilteredUpdate '+e);
		console.error('Problems setting initialUnfilteredUpdate',e);
	}
	this.set_positionSmo3 = function (value) {
		try {
			this.proxy.positionSmo3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting positionSmo3 '+e);
			console.error('Problems setting positionSmo3',e);
		}
	};
	this.positionSmo3_changed = function () {
		var value = this.positionSmo3;
		return value;
	};
	try {
		this.positionSmo3 = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting positionSmo3 '+e);
		console.error('Problems setting positionSmo3',e);
	}
	this.set_snapToInt = function (value) {
		try {
			this.proxy.snapToInt = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting snapToInt '+e);
			console.error('Problems setting snapToInt',e);
		}
	};
	this.snapToInt_changed = function () {
		var value = this.snapToInt;
		return value;
	};
	try {
		this.snapToInt = new SFBool(false);
	} catch (e) {
		console.log('Problems setting snapToInt '+e);
		console.error('Problems setting snapToInt',e);
	}
	this.set_positionSmo2 = function (value) {
		try {
			this.proxy.positionSmo2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting positionSmo2 '+e);
			console.error('Problems setting positionSmo2',e);
		}
	};
	this.positionSmo2_changed = function () {
		var value = this.positionSmo2;
		return value;
	};
	try {
		this.positionSmo2 = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting positionSmo2 '+e);
		console.error('Problems setting positionSmo2',e);
	}
	this.set_unfiltered_position = function (value) {
		try {
			this.proxy.unfiltered_position = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting unfiltered_position '+e);
			console.error('Problems setting unfiltered_position',e);
		}
	};
	this.unfiltered_position_changed = function () {
		var value = this.unfiltered_position;
		return value;
	};
	try {
		this.unfiltered_position = undefined;
	} catch (e) {
		console.log('Problems setting unfiltered_position '+e);
		console.error('Problems setting unfiltered_position',e);
	}
	this.set_positionSmo1 = function (value) {
		try {
			this.proxy.positionSmo1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting positionSmo1 '+e);
			console.error('Problems setting positionSmo1',e);
		}
	};
	this.positionSmo1_changed = function () {
		var value = this.positionSmo1;
		return value;
	};
	try {
		this.positionSmo1 = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting positionSmo1 '+e);
		console.error('Problems setting positionSmo1',e);
	}
	this.set_silently_set_unfiltered_position = function (value) {
		try {
			this.proxy.silently_set_unfiltered_position = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting silently_set_unfiltered_position '+e);
			console.error('Problems setting silently_set_unfiltered_position',e);
		}
	};
	this.silently_set_unfiltered_position_changed = function () {
		var value = this.silently_set_unfiltered_position;
		return value;
	};
	try {
		this.silently_set_unfiltered_position = new SFFloat();
	} catch (e) {
		console.log('Problems setting silently_set_unfiltered_position '+e);
		console.error('Problems setting silently_set_unfiltered_position',e);
	}
	this.set_radiusStick = function (value) {
		try {
			this.proxy.radiusStick = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radiusStick '+e);
			console.error('Problems setting radiusStick',e);
		}
	};
	this.radiusStick_changed = function () {
		var value = this.radiusStick;
		return value;
	};
	try {
		this.radiusStick = new SFFloat(0.25);
	} catch (e) {
		console.log('Problems setting radiusStick '+e);
		console.error('Problems setting radiusStick',e);
	}
	this.set_KnobCenterPos = function (value) {
		try {
			this.proxy.KnobCenterPos = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting KnobCenterPos '+e);
			console.error('Problems setting KnobCenterPos',e);
		}
	};
	this.KnobCenterPos_changed = function () {
		var value = this.KnobCenterPos;
		return value;
	};
	try {
		this.KnobCenterPos = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting KnobCenterPos '+e);
		console.error('Problems setting KnobCenterPos',e);
	}
	this.set_position = function (value) {
		try {
			this.proxy.position = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting position '+e);
			console.error('Problems setting position',e);
		}
	};
	this.position_changed = function () {
		var value = this.position;
		return value;
	};
	try {
		this.position = new SFFloat();
	} catch (e) {
		console.log('Problems setting position '+e);
		console.error('Problems setting position',e);
	}
	this.set_SensKnob_translationChanged = function (value) {
		try {
			this.proxy.SensKnob_translationChanged = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SensKnob_translationChanged '+e);
			console.error('Problems setting SensKnob_translationChanged',e);
		}
	};
	this.SensKnob_translationChanged_changed = function () {
		var value = this.SensKnob_translationChanged;
		return value;
	};
	try {
		this.SensKnob_translationChanged = new SFVec3f();
	} catch (e) {
		console.log('Problems setting SensKnob_translationChanged '+e);
		console.error('Problems setting SensKnob_translationChanged',e);
	}
	this.set_radiusKnob = function (value) {
		try {
			this.proxy.radiusKnob = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radiusKnob '+e);
			console.error('Problems setting radiusKnob',e);
		}
	};
	this.radiusKnob_changed = function () {
		var value = this.radiusKnob;
		return value;
	};
	try {
		this.radiusKnob = new SFFloat(0.5);
	} catch (e) {
		console.log('Problems setting radiusKnob '+e);
		console.error('Problems setting radiusKnob',e);
	}
	this.set_TrStickBelow = function (value) {
		try {
			this.proxy.TrStickBelow = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TrStickBelow '+e);
			console.error('Problems setting TrStickBelow',e);
		}
	};
	this.TrStickBelow_changed = function () {
		var value = this.TrStickBelow;
		return value;
	};
	try {
		this.TrStickBelow = X3DJSON.nodeUtil("Scene","TrStickBelow");
	} catch (e) {
		console.log('Problems setting TrStickBelow '+e);
		console.error('Problems setting TrStickBelow',e);
	}
	this.set_TchPgUp = function (value) {
		try {
			this.proxy.TchPgUp = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TchPgUp '+e);
			console.error('Problems setting TchPgUp',e);
		}
	};
	this.TchPgUp_changed = function () {
		var value = this.TchPgUp;
		return value;
	};
	try {
		this.TchPgUp = X3DJSON.nodeUtil("Scene","TchPgUp");
	} catch (e) {
		console.log('Problems setting TchPgUp '+e);
		console.error('Problems setting TchPgUp',e);
	}
	this.set_incPage = function (value) {
		try {
			this.proxy.incPage = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting incPage '+e);
			console.error('Problems setting incPage',e);
		}
	};
	this.incPage_changed = function () {
		var value = this.incPage;
		return value;
	};
	try {
		this.incPage = new SFTime();
	} catch (e) {
		console.log('Problems setting incPage '+e);
		console.error('Problems setting incPage',e);
	}
	this.set_unfiltered_position = function (value) {
		try {
			this.proxy.unfiltered_position = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting unfiltered_position '+e);
			console.error('Problems setting unfiltered_position',e);
		}
	};
	this.unfiltered_position_changed = function () {
		var value = this.unfiltered_position;
		return value;
	};
	try {
		this.unfiltered_position = undefined;
	} catch (e) {
		console.log('Problems setting unfiltered_position '+e);
		console.error('Problems setting unfiltered_position',e);
	}
	this.set_Tick = function (value) {
		try {
			this.proxy.Tick = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Tick '+e);
			console.error('Problems setting Tick',e);
		}
	};
	this.Tick_changed = function () {
		var value = this.Tick;
		return value;
	};
	try {
		this.Tick = new SFTime();
	} catch (e) {
		console.log('Problems setting Tick '+e);
		console.error('Problems setting Tick',e);
	}
	this.set_smooothMovements = function (value) {
		try {
			this.proxy.smooothMovements = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting smooothMovements '+e);
			console.error('Problems setting smooothMovements',e);
		}
	};
	this.smooothMovements_changed = function () {
		var value = this.smooothMovements;
		return value;
	};
	try {
		this.smooothMovements = undefined;
	} catch (e) {
		console.log('Problems setting smooothMovements '+e);
		console.error('Problems setting smooothMovements',e);
	}
	this.set_min = function (value) {
		try {
			this.proxy.min = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting min '+e);
			console.error('Problems setting min',e);
		}
	};
	this.min_changed = function () {
		var value = this.min;
		return value;
	};
	try {
		this.min = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting min '+e);
		console.error('Problems setting min',e);
	}
	this.set_TchPgDown = function (value) {
		try {
			this.proxy.TchPgDown = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TchPgDown '+e);
			console.error('Problems setting TchPgDown',e);
		}
	};
	this.TchPgDown_changed = function () {
		var value = this.TchPgDown;
		return value;
	};
	try {
		this.TchPgDown = X3DJSON.nodeUtil("Scene","TchPgDown");
	} catch (e) {
		console.log('Problems setting TchPgDown '+e);
		console.error('Problems setting TchPgDown',e);
	}
	this.set_TrKnob = function (value) {
		try {
			this.proxy.TrKnob = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TrKnob '+e);
			console.error('Problems setting TrKnob',e);
		}
	};
	this.TrKnob_changed = function () {
		var value = this.TrKnob;
		return value;
	};
	try {
		this.TrKnob = X3DJSON.nodeUtil("Scene","TrKnob");
	} catch (e) {
		console.log('Problems setting TrKnob '+e);
		console.error('Problems setting TrKnob',e);
	}


ecmascript:

	this.initialize = function ()
{            
    this.proxy.positionSmo1= this.proxy.position;
    this.proxy.positionSmo2= this.proxy.position;
    this.proxy.positionSmo3= this.proxy.position;

    this.proxy.min=             X3DJSON.nodeUtil("Scene","EFFS", "this.proxy.min");
    this.proxy.max=             X3DJSON.nodeUtil("Scene","EFFS", "this").proxy.max;
    this.proxy.pageSize=        X3DJSON.nodeUtil("Scene","EFFS", "this.proxy.pageSize");
    this.proxy.height=          X3DJSON.nodeUtil("Scene","EFFS", "this").proxy.height;
    this.proxy.radiusKnob=      X3DJSON.nodeUtil("Scene","EFFS", "this.proxy.radiusKnob");
    this.proxy.radiusStick=     X3DJSON.nodeUtil("Scene","EFFS", "this.proxy.radiusStick");
    this.proxy.smoothMovements= X3DJSON.nodeUtil("Scene","EFFS", "this").proxy.smoothMovements;

    // work around the initialization bug in Contact 5.
    if(   Browser.getName() == 'blaxxunCC3D'
       && Browser.getVersion() <= 5.104
       && !this.proxy.position && !this.proxy.min && !this.proxy.max && !this.proxy.pageSize && !this.proxy.height && !this.proxy.radiusKnob && !this.proxy.radiusStick
      )
    {
        this.proxy.position= .5;
        this.proxy.min= 0;
        this.proxy.max= 1;
        this.proxy.pageSize= .2;
        this.proxy.height= 2;
        this.proxy.radiusKnob= .3;
        this.proxy.radiusStick= .2;

        this.proxy.positionSmo1= 
        this.proxy.positionSmo2= 
        this.proxy.positionSmo3=
            this.proxy.position;
    }


    this.Update();

    X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","Timer", "")", "enabled",  true); // TBD: Shouldn't we start with false?
}
;

	this.set_min = function (m)           {          this.proxy.min= m;  this.Update();          };

	this.set_max = function (m)           {          this.proxy.max= m;  this.Update();          };

	this.set_pageSize = function (s)      {     this.proxy.pageSize= s;  this.Update();          };

	this.set_height = function (h)        {       this.proxy.height= h;  this.UpdateGeometry();  };

	this.set_radiusKnob = function (r)    {   this.proxy.radiusKnob= r;  this.UpdateGeometry();  };

	this.set_radiusStick = function (r)   {  this.proxy.radiusStick= r;  this.UpdateGeometry();  };

	this.set_position = function (p) 
{ 
    this.proxy.silent= false; 
    this.proxy.snapTime= 0; 
    this.proxy.position= this.proxy.snapToInt? Math.floor(p + .5) : p;
    this.Update();
}
;

	this.set_smooothMovements = function (s)
{
    this.proxy.smoothMovements= s;
    this.Update();
}
;

	this.silently_set_position = function (p) 
{ 
    this.proxy.silent= true;
    this.proxy.snapTime= 0;
    this.proxy.position= this.proxy.snapToInt? Math.floor(p + .5) : p;
    this.Update();        
}
;

	this.silently_set_unfiltered_position = function (p, now)  
{ 
    this.proxy.silent= true; 
    this.proxy.snapTime= 0;
    this.proxy.position= this.proxy.positionSmo1= this.proxy.positionSmo2= this.proxy.positionSmo3= p;
    this.proxy.snapTime= now + .1;
    this.Update(); 
}

;

	this.set_unfiltered_position = function (p, now)  
{ 
    this.proxy.snapTime= 0;
    this.proxy.position= this.proxy.positionSmo1= this.proxy.positionSmo2= this.proxy.positionSmo3= p;
    this.proxy.snapTime= now + .1;
    this.Update(); 
}
;

	this.incPage = function (t, now)
{
    this.proxy.silent= false;
    this.proxy.position+= this.proxy.pageSize;
    this.proxy.snapTime= now + .3;
    this.Update();
}
;

	this.decPage = function (t, now)
{
    this.proxy.silent= false;
    this.proxy.position-= this.proxy.pageSize;
    this.proxy.snapTime= now + .3;
    this.Update();
}
;

	this.SensKnob_isActive = function (a, now)
{
    if(a)
    {
        this.proxy.SensKnobOrigin= this.proxy.smoothMovements? this.proxy.positionSmo3 : this.proxy.position;  // TBD: Da stimmt noch was nicht.
        this.proxy.SmoothTau1= .07;
        this.proxy.SmoothTau2= .001;
        this.proxy.SmoothTau3= .001;
//                last_SensKnob_translationChange= this.proxy.SensKnob_translationChanged;
    }else{
        this.proxy.SmoothTau1= .06;
        this.proxy.SmoothTau2= .06;
        this.proxy.SmoothTau3= .06;
        this.proxy.snapTime=   now;
    }
}
;

	this.SensKnob_translationChanged = function (t, now)
{
    this.proxy.silent= false;
//            if(t.subtract(last_SensKnob_translationChange).length() > .0001 )
//            {
        this.proxy.position= this.proxy.SensKnobOrigin + ( this.proxy.height? t.y * (this.proxy.max - this.proxy.min) / (this.proxy.height - this.proxy.KnobSize)
                                           : 0
                                   );
//                this.proxy.snapTime= now + .3;

//                last_SensKnob_translationChange= t;
//            }
    this.Update();
}
;

	this.Update = function ()
{
    this.UpdateLogic();

    this.UpdateGeometry();

    if(this.proxy.smoothMovements) 
    {
        this.setUPC(this.proxy.position);
    }else{
        this.setUPC(this.proxy.position);
        this.proxy.positionSmo1= this.proxy.position;
        this.proxy.positionSmo2= this.proxy.position;
        this.proxy.positionSmo3= this.proxy.position;
        this.setPC(this.proxy.position);
    }
}
;

	this.UpdateLogic = function ()
{
    if(this.proxy.max < this.proxy.min)
        this.proxy.max= this.proxy.min;

    if(this.proxy.position     > this.proxy.max)    this.proxy.position=     this.proxy.max;
    if(this.proxy.positionSmo1 > this.proxy.max)    this.proxy.positionSmo1= this.proxy.max;
    if(this.proxy.positionSmo2 > this.proxy.max)    this.proxy.positionSmo2= this.proxy.max;
    if(this.proxy.positionSmo3 > this.proxy.max)    this.proxy.positionSmo3= this.proxy.max;

    if(this.proxy.position     < this.proxy.min)    this.proxy.position=     this.proxy.min;
    if(this.proxy.positionSmo1 < this.proxy.min)    this.proxy.positionSmo1= this.proxy.min;
    if(this.proxy.positionSmo2 < this.proxy.min)    this.proxy.positionSmo2= this.proxy.min;
    if(this.proxy.positionSmo3 < this.proxy.min)    this.proxy.positionSmo3= this.proxy.min;
}
;

	this.UpdateGeometry = function ()
{
    this.proxy.KnobSize= this.proxy.max - this.proxy.min? this.proxy.pageSize / (this.proxy.max - this.proxy.min) * this.proxy.height
                       : this.proxy.height
                       ;

    this.proxy.KnobCenterPos= this.proxy.max - this.proxy.min? ( ( this.proxy.smoothMovements? this.proxy.positionSmo3
                                                 : this.proxy.position
                                )
                              - (this.proxy.max + this.proxy.min)/2
                              ) / (this.proxy.max - this.proxy.min) * (this.proxy.height - this.proxy.KnobSize)
                            : 0
                            ;

    X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","TrKnob", "")", "scale",              new SFVec3f(this.proxy.radiusKnob,   this.proxy.KnobSize,                     this.proxy.radiusKnob));
    X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","TrKnob", "")", "translation",        new SFVec3f(0,            this.proxy.KnobCenterPos,                0));

    X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","TrStickAbove", "")", "scale",        new SFVec3f(this.proxy.radiusStick,  (this.proxy.height/2 - this.proxy.KnobCenterPos),   this.proxy.radiusStick));
    X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","TrStickAbove", "")", "translation",  new SFVec3f(0,           (this.proxy.height/2 + this.proxy.KnobCenterPos)/2, 0          ));

    X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","TrStickBelow", "")", "scale",        new SFVec3f(this.proxy.radiusStick, (this.proxy.KnobCenterPos - -this.proxy.height/2),   this.proxy.radiusStick));
    X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","TrStickBelow", "")", "translation",  new SFVec3f(0,           (this.proxy.KnobCenterPos + -this.proxy.height/2)/2, 0          ));
}
;

	this.Tick = function (now)
{
    if(!this.proxy.lastTick)
    {
        this.proxy.lastTick= now;
return;
    }

    var Delta= now - this.proxy.lastTick;

    if(this.proxy.smoothMovements)  // TBD: The timer should be completely off if !Smoothmovements.
    {
        this.proxy.positionSmo1= this.proxy.position     + (this.proxy.positionSmo1 - this.proxy.position    ) * Math.exp(-Delta/this.proxy.SmoothTau1);
        this.proxy.positionSmo2= this.proxy.positionSmo1 + (this.proxy.positionSmo2 - this.proxy.positionSmo1) * Math.exp(-Delta/this.proxy.SmoothTau2);
        this.proxy.positionSmo3= this.proxy.positionSmo2 + (this.proxy.positionSmo3 - this.proxy.positionSmo2) * Math.exp(-Delta/this.proxy.SmoothTau3);

        this.UpdateGeometry();

        this.setPC(this.proxy.positionSmo3);
    }

    if(this.proxy.snapToInt)
        if(this.proxy.snapTime && now >= this.proxy.snapTime)
        {
            var newPos= Math.floor(this.proxy.position + .5);
            this.proxy.SensKnobOrigin+= newPos - this.proxy.position;
            this.proxy.position= newPos;
            this.proxy.snapTime= 0;
        }


    //TBD: Set X3DJSON.nodeUtil("Scene","Timer", "enabled")

    this.proxy.lastTick= now;
}
;

	this.setUPC = function (value)
{
    if(this.proxy.unfiltered_position_changed != value || this.proxy.initialUnfilteredUpdate)
        if(!this.proxy.silent) this.proxy.unfiltered_position_changed= value;

    this.proxy.initialUnfilteredUpdate= false;
}
;

	this.setPC = function (value)
{
    if(this.proxy.position_changed != value || this.proxy.initialUpdate) 
        if(!this.proxy.silent) this.proxy.position_changed= value;

    if(Math.floor(this.proxy.position_changed + .5) != this.proxy.positionInt_changed || this.proxy.initialUpdate)
        if(!this.proxy.silent) this.proxy.positionInt_changed= Math.floor(this.proxy.position_changed + .5);

    this.proxy.initialUpdate= false;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/Slider.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/Slider.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/Slider.json']['Worker'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/Slider.json']['Worker']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/Slider.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/Slider.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/Slider.json']['Worker'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/Slider.json']['Worker'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/Slider.json']['Worker']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/Slider.json']['Worker']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/Slider.json']['Worker'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/Slider.json']['Worker']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/Slider.json']['Worker']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/Slider.json']['Worker'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/Slider.json']['Worker'].initialize();

