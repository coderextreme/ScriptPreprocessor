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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'] = function() {
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
		this.height = new SFFloat();
	} catch (e) {
		console.log('Problems setting height '+e);
		console.error('Problems setting height',e);
	}
	this.set_radius = function (value) {
		try {
			this.proxy.radius = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radius '+e);
			console.error('Problems setting radius',e);
		}
	};
	this.radius_changed = function () {
		var value = this.radius;
		return value;
	};
	try {
		this.radius = new SFFloat();
	} catch (e) {
		console.log('Problems setting radius '+e);
		console.error('Problems setting radius',e);
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
		this.min = new SFInt32();
	} catch (e) {
		console.log('Problems setting min '+e);
		console.error('Problems setting min',e);
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
		this.max = new SFInt32();
	} catch (e) {
		console.log('Problems setting max '+e);
		console.error('Problems setting max',e);
	}
	this.set_value = function (value) {
		try {
			this.proxy.value = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting value '+e);
			console.error('Problems setting value',e);
		}
	};
	this.value_changed = function () {
		var value = this.value;
		return value;
	};
	try {
		this.value = new SFInt32();
	} catch (e) {
		console.log('Problems setting value '+e);
		console.error('Problems setting value',e);
	}
	this.set_dragActive = function (value) {
		try {
			this.proxy.dragActive = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting dragActive '+e);
			console.error('Problems setting dragActive',e);
		}
	};
	this.dragActive_changed = function () {
		var value = this.dragActive;
		return value;
	};
	try {
		this.dragActive = new SFBool(false);
	} catch (e) {
		console.log('Problems setting dragActive '+e);
		console.error('Problems setting dragActive',e);
	}
	this.set_lastBallPosition = function (value) {
		try {
			this.proxy.lastBallPosition = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting lastBallPosition '+e);
			console.error('Problems setting lastBallPosition',e);
		}
	};
	this.lastBallPosition_changed = function () {
		var value = this.lastBallPosition;
		return value;
	};
	try {
		this.lastBallPosition = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting lastBallPosition '+e);
		console.error('Problems setting lastBallPosition',e);
	}
	this.set_beginPosition = function (value) {
		try {
			this.proxy.beginPosition = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting beginPosition '+e);
			console.error('Problems setting beginPosition',e);
		}
	};
	this.beginPosition_changed = function () {
		var value = this.beginPosition;
		return value;
	};
	try {
		this.beginPosition = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting beginPosition '+e);
		console.error('Problems setting beginPosition',e);
	}
	this.set_endPosition = function (value) {
		try {
			this.proxy.endPosition = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting endPosition '+e);
			console.error('Problems setting endPosition',e);
		}
	};
	this.endPosition_changed = function () {
		var value = this.endPosition;
		return value;
	};
	try {
		this.endPosition = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting endPosition '+e);
		console.error('Problems setting endPosition',e);
	}
	this.set_incrementInterval = function (value) {
		try {
			this.proxy.incrementInterval = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting incrementInterval '+e);
			console.error('Problems setting incrementInterval',e);
		}
	};
	this.incrementInterval_changed = function () {
		var value = this.incrementInterval;
		return value;
	};
	try {
		this.incrementInterval = new SFFloat(1);
	} catch (e) {
		console.log('Problems setting incrementInterval '+e);
		console.error('Problems setting incrementInterval',e);
	}
	this.set_setMin = function (value) {
		try {
			this.proxy.setMin = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setMin '+e);
			console.error('Problems setting setMin',e);
		}
	};
	this.setMin_changed = function () {
		var value = this.setMin;
		return value;
	};
	try {
		this.setMin = new SFInt32();
	} catch (e) {
		console.log('Problems setting setMin '+e);
		console.error('Problems setting setMin',e);
	}
	this.set_setMax = function (value) {
		try {
			this.proxy.setMax = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setMax '+e);
			console.error('Problems setting setMax',e);
		}
	};
	this.setMax_changed = function () {
		var value = this.setMax;
		return value;
	};
	try {
		this.setMax = new SFInt32();
	} catch (e) {
		console.log('Problems setting setMax '+e);
		console.error('Problems setting setMax',e);
	}
	this.set_setValue = function (value) {
		try {
			this.proxy.setValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setValue '+e);
			console.error('Problems setting setValue',e);
		}
	};
	this.setValue_changed = function () {
		var value = this.setValue;
		return value;
	};
	try {
		this.setValue = new SFInt32();
	} catch (e) {
		console.log('Problems setting setValue '+e);
		console.error('Problems setting setValue',e);
	}
	this.set_valueChanged = function (value) {
		try {
			this.proxy.valueChanged = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting valueChanged '+e);
			console.error('Problems setting valueChanged',e);
		}
	};
	this.valueChanged_changed = function () {
		var value = this.valueChanged;
		return value;
	};
	try {
		this.valueChanged = new SFInt32();
	} catch (e) {
		console.log('Problems setting valueChanged '+e);
		console.error('Problems setting valueChanged',e);
	}
	this.set_bottomEndTouched = function (value) {
		try {
			this.proxy.bottomEndTouched = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting bottomEndTouched '+e);
			console.error('Problems setting bottomEndTouched',e);
		}
	};
	this.bottomEndTouched_changed = function () {
		var value = this.bottomEndTouched;
		return value;
	};
	try {
		this.bottomEndTouched = new SFBool();
	} catch (e) {
		console.log('Problems setting bottomEndTouched '+e);
		console.error('Problems setting bottomEndTouched',e);
	}
	this.set_topEndTouched = function (value) {
		try {
			this.proxy.topEndTouched = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting topEndTouched '+e);
			console.error('Problems setting topEndTouched',e);
		}
	};
	this.topEndTouched_changed = function () {
		var value = this.topEndTouched;
		return value;
	};
	try {
		this.topEndTouched = new SFBool();
	} catch (e) {
		console.log('Problems setting topEndTouched '+e);
		console.error('Problems setting topEndTouched',e);
	}
	this.set_setBallPosition = function (value) {
		try {
			this.proxy.setBallPosition = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setBallPosition '+e);
			console.error('Problems setting setBallPosition',e);
		}
	};
	this.setBallPosition_changed = function () {
		var value = this.setBallPosition;
		return value;
	};
	try {
		this.setBallPosition = new SFVec3f();
	} catch (e) {
		console.log('Problems setting setBallPosition '+e);
		console.error('Problems setting setBallPosition',e);
	}
	this.set_setDragActive = function (value) {
		try {
			this.proxy.setDragActive = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setDragActive '+e);
			console.error('Problems setting setDragActive',e);
		}
	};
	this.setDragActive_changed = function () {
		var value = this.setDragActive;
		return value;
	};
	try {
		this.setDragActive = new SFBool();
	} catch (e) {
		console.log('Problems setting setDragActive '+e);
		console.error('Problems setting setDragActive',e);
	}
	this.set_bottomEndPositionChanged = function (value) {
		try {
			this.proxy.bottomEndPositionChanged = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting bottomEndPositionChanged '+e);
			console.error('Problems setting bottomEndPositionChanged',e);
		}
	};
	this.bottomEndPositionChanged_changed = function () {
		var value = this.bottomEndPositionChanged;
		return value;
	};
	try {
		this.bottomEndPositionChanged = new SFVec3f();
	} catch (e) {
		console.log('Problems setting bottomEndPositionChanged '+e);
		console.error('Problems setting bottomEndPositionChanged',e);
	}
	this.set_topEndPositionChanged = function (value) {
		try {
			this.proxy.topEndPositionChanged = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting topEndPositionChanged '+e);
			console.error('Problems setting topEndPositionChanged',e);
		}
	};
	this.topEndPositionChanged_changed = function () {
		var value = this.topEndPositionChanged;
		return value;
	};
	try {
		this.topEndPositionChanged = new SFVec3f();
	} catch (e) {
		console.log('Problems setting topEndPositionChanged '+e);
		console.error('Problems setting topEndPositionChanged',e);
	}
	this.set_ballPositionChanged = function (value) {
		try {
			this.proxy.ballPositionChanged = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ballPositionChanged '+e);
			console.error('Problems setting ballPositionChanged',e);
		}
	};
	this.ballPositionChanged_changed = function () {
		var value = this.ballPositionChanged;
		return value;
	};
	try {
		this.ballPositionChanged = new SFVec3f();
	} catch (e) {
		console.log('Problems setting ballPositionChanged '+e);
		console.error('Problems setting ballPositionChanged',e);
	}
	this.set_minBallPositionChanged = function (value) {
		try {
			this.proxy.minBallPositionChanged = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting minBallPositionChanged '+e);
			console.error('Problems setting minBallPositionChanged',e);
		}
	};
	this.minBallPositionChanged_changed = function () {
		var value = this.minBallPositionChanged;
		return value;
	};
	try {
		this.minBallPositionChanged = new SFVec2f();
	} catch (e) {
		console.log('Problems setting minBallPositionChanged '+e);
		console.error('Problems setting minBallPositionChanged',e);
	}
	this.set_maxBallPositionChanged = function (value) {
		try {
			this.proxy.maxBallPositionChanged = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting maxBallPositionChanged '+e);
			console.error('Problems setting maxBallPositionChanged',e);
		}
	};
	this.maxBallPositionChanged_changed = function () {
		var value = this.maxBallPositionChanged;
		return value;
	};
	try {
		this.maxBallPositionChanged = new SFVec2f();
	} catch (e) {
		console.log('Problems setting maxBallPositionChanged '+e);
		console.error('Problems setting maxBallPositionChanged',e);
	}
	this.set_traceEnabled = function (value) {
		try {
			this.proxy.traceEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting traceEnabled '+e);
			console.error('Problems setting traceEnabled',e);
		}
	};
	this.traceEnabled_changed = function () {
		var value = this.traceEnabled;
		return value;
	};
	try {
		this.traceEnabled = new SFBool();
	} catch (e) {
		console.log('Problems setting traceEnabled '+e);
		console.error('Problems setting traceEnabled',e);
	}


ecmascript:
	this.initialize = function ()
{
        this.tracePrint('this.initialize() commenced...');

	this.proxy.beginPosition = new SFVec3f(0, (this.proxy.height/2) * (-1) + this.proxy.radius, 0);
	this.proxy.endPosition   = new SFVec3f(0, (this.proxy.height/2) - this.proxy.radius, 0);
	this.tracePrint('this.proxy.beginPosition=' + this.proxy.beginPosition.toString() + ', this.proxy.endPosition=' + this.proxy.endPosition.toString());
	this.proxy.incrementInterval = (this.proxy.height - (2 * this.proxy.radius)) / (this.proxy.max - this.proxy.min);
	this.tracePrint('this.proxy.incrementInterval=' + this.proxy.incrementInterval.toString());

	this.proxy.bottomEndPositionChanged = new SFVec3f(0, (this.proxy.height/2) * (-1), 0);
	this.proxy.topEndPositionChanged = new SFVec3f(0, (this.proxy.height/2), 0);
	this.tracePrint('this.proxy.bottomEndPositionChanged=' + this.proxy.bottomEndPositionChanged.toString() + ', this.proxy.topEndPositionChanged=' + this.proxy.topEndPositionChanged.toString());

        this.proxy.minBallPositionChanged = new SFVec2f(0, this.proxy.bottomEndPositionChanged.y + this.proxy.radius);
	this.proxy.maxBallPositionChanged = new SFVec2f(0, this.proxy.topEndPositionChanged.y - this.proxy.radius);
	this.tracePrint('this.proxy.minBallPositionChanged=' + this.proxy.minBallPositionChanged.toString() + ', this.proxy.maxBallPositionChanged=' + this.proxy.maxBallPositionChanged.toString());

	this.proxy.ballPositionChanged = new SFVec3f(0, this.proxy.beginPosition.y + (this.proxy.incrementInterval * (this.proxy.value - this.proxy.min)), 0);
	this.proxy.lastBallPosition = this.proxy.ballPositionChanged;

	if (this.proxy.value < this.proxy.min) this.proxy.value = this.proxy.min;
	if (this.proxy.value > this.proxy.max) this.proxy.value = this.proxy.max;

	this.proxy.valueChanged = this.proxy.value;
	this.tracePrint('this.proxy.value=' + this.proxy.value.toString());
	this.tracePrint('...initialize() complete');
}
;

	this.setDragActive = function (inputValue, timeStamp)
{
	this.proxy.dragActive = inputValue;
}
;

	this.setMin = function (inputValue, timeStamp)
{
	this.proxy.min = inputValue;
	if (this.proxy.value < this.proxy.min) this.proxy.value = this.proxy.min;

	this.proxy.incrementInterval = (this.proxy.height - (2 * this.proxy.radius)) / (this.proxy.max - this.proxy.min);
	this.tracePrint('this.proxy.incrementInterval=' + this.proxy.incrementInterval.toString());

	this.proxy.ballPositionChanged = new SFVec3f(0, this.proxy.beginPosition.y + (this.proxy.incrementInterval * (this.proxy.value - this.proxy.min)), 0);
	this.proxy.lastBallPosition = this.proxy.ballPositionChanged;

	this.proxy.valueChanged = this.proxy.value;
	this.tracePrint('this.proxy.min=' + this.proxy.min + ', this.proxy.valueChanged=' + this.proxy.valueChanged);
}
;

	this.setMax = function (inputValue, timeStamp)
{
	this.proxy.max = inputValue;
	if (this.proxy.value > this.proxy.max) this.proxy.value = this.proxy.max;

	this.proxy.incrementInterval = (this.proxy.height - (2 * this.proxy.radius)) / (this.proxy.max - this.proxy.min);

	this.proxy.ballPositionChanged = new SFVec3f(0, this.proxy.beginPosition.y + (this.proxy.incrementInterval * (this.proxy.value - this.proxy.min)), 0);
	this.proxy.lastBallPosition = this.proxy.ballPositionChanged;

	this.proxy.valueChanged = this.proxy.value;
	this.tracePrint('this.proxy.max=' + this.proxy.max + ', this.proxy.valueChanged=' + this.proxy.valueChanged);
}
;

	this.setValue = function (inputValue, timeStamp)
{
	if (inputValue <= this.proxy.min)
	{
		this.proxy.valueChanged = this.proxy.value = this.proxy.min;
		this.proxy.ballPositionChanged = this.proxy.beginPosition;
		this.proxy.lastBallPosition = this.proxy.ballPositionChanged;
	}
	else if (inputValue >= this.proxy.max)
	{
		this.proxy.valueChanged = this.proxy.value = this.proxy.max;
		this.proxy.ballPositionChanged = this.proxy.endPosition;
		this.proxy.lastBallPosition = this.proxy.ballPositionChanged;
	}
	else
	{
		if (inputValue > this.proxy.value) //getting bigger
		{
			this.proxy.ballPositionChanged = new SFVec3f(0, this.proxy.lastBallPosition.y + (this.proxy.incrementInterval * (inputValue - this.proxy.value)), 0);
			this.proxy.lastBallPosition = this.proxy.ballPositionChanged;
		}
		else if (inputValue < this.proxy.value) //getting smaller
		{
			this.proxy.ballPositionChanged = new SFVec3f(0, this.proxy.lastBallPosition.y - (this.proxy.incrementInterval * (this.proxy.value - inputValue)), 0);
			this.proxy.lastBallPosition = this.proxy.ballPositionChanged;
		}
		this.proxy.valueChanged = this.proxy.value = inputValue;
	}
}
;

	this.bottomEndTouched = function (inputValue, timeStamp)
{
	this.tracePrint('this.proxy.bottomEndTouched(' + inputValue.toString() + ')');
	if (inputValue == false) return; // ignore deselection

	if (this.proxy.value > this.proxy.min)
	{
		this.proxy.valueChanged = --this.proxy.value;
		this.proxy.ballPositionChanged = new SFVec3f(0, this.proxy.lastBallPosition.y - this.proxy.incrementInterval, 0);
		this.proxy.lastBallPosition = this.proxy.ballPositionChanged;
	}
}
;

	this.topEndTouched = function (inputValue, timeStamp)
{
	this.tracePrint('this.proxy.topEndTouched(' + inputValue.toString() + ')');
	if (inputValue == false) return; // ignore deselection

	if (this.proxy.value < this.proxy.max)
	{
		this.proxy.valueChanged = ++this.proxy.value;
		this.proxy.ballPositionChanged = new SFVec3f(0, this.proxy.lastBallPosition.y + this.proxy.incrementInterval, 0);
		this.proxy.lastBallPosition = this.proxy.ballPositionChanged;
	}
}
;

	this.setBallPosition = function (inputValue, timeStamp)
{
	this.tracePrint('this.proxy.setBallPosition(' + inputValue.toString() + '), this.proxy.dragActive=' + this.proxy.dragActive);
//	if (!this.proxy.dragActive)
//		return;

	if (inputValue.y > this.proxy.lastBallPosition.y) // moving upwards
	{
		if (inputValue.y >= (this.proxy.beginPosition.y + (this.proxy.incrementInterval * ((this.proxy.value + 1) - this.proxy.min))))
		{
			if (this.proxy.value == this.proxy.max - 1)
			{
				this.proxy.value = this.proxy.max;
				this.proxy.lastBallPosition = this.proxy.endPosition;
			}
			else
			{
				this.proxy.value = this.proxy.value + 1;
				this.proxy.lastBallPosition = new SFVec3f(0, this.proxy.beginPosition.y + (this.proxy.incrementInterval * (this.proxy.value - this.proxy.min)), 0);
			}
			this.proxy.valueChanged = this.proxy.value;
			this.proxy.ballPositionChanged = this.proxy.lastBallPosition;
		}
	}
	else if (inputValue.y < this.proxy.lastBallPosition.y) // moving downwards
	{
		if (inputValue.y <= (this.proxy.endPosition.y - (this.proxy.incrementInterval * (this.proxy.max - (this.proxy.value - 1)))))
		{
			if (this.proxy.value == (this.proxy.min + 1))
			{
				this.proxy.value = this.proxy.min;
				this.proxy.lastBallPosition = this.proxy.beginPosition;
			}
			else
			{
				this.proxy.value = this.proxy.value - 1;
				this.proxy.lastBallPosition = new SFVec3f(0, this.proxy.endPosition.y - (this.proxy.incrementInterval * (this.proxy.max - this.proxy.value)), 0);
			}
			this.proxy.valueChanged = this.proxy.value;
			this.proxy.ballPositionChanged = this.proxy.lastBallPosition;
		}
	}
}
;

	this.tracePrint = function (text)
{
	if (this.proxy.traceEnabled) console.error ('[SliderFloat SliderScript] ' + text + '');
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['LayoutDirectionScript'] = function() {
	this.set_direction = function (value) {
		try {
			this.proxy.direction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting direction '+e);
			console.error('Problems setting direction',e);
		}
	};
	this.direction_changed = function () {
		var value = this.direction;
		return value;
	};
	try {
		this.direction = new SFString();
	} catch (e) {
		console.log('Problems setting direction '+e);
		console.error('Problems setting direction',e);
	}
	this.set_directionRotation = function (value) {
		try {
			this.proxy.directionRotation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting directionRotation '+e);
			console.error('Problems setting directionRotation',e);
		}
	};
	this.directionRotation_changed = function () {
		var value = this.directionRotation;
		return value;
	};
	try {
		this.directionRotation = new SFRotation();
	} catch (e) {
		console.log('Problems setting directionRotation '+e);
		console.error('Problems setting directionRotation',e);
	}
	this.set_traceEnabled = function (value) {
		try {
			this.proxy.traceEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting traceEnabled '+e);
			console.error('Problems setting traceEnabled',e);
		}
	};
	this.traceEnabled_changed = function () {
		var value = this.traceEnabled;
		return value;
	};
	try {
		this.traceEnabled = new SFBool();
	} catch (e) {
		console.log('Problems setting traceEnabled '+e);
		console.error('Problems setting traceEnabled',e);
	}


ecmascript:

	this.initialize = function ()
{
    if      ((this.proxy.direction=='vertical') || (this.proxy.direction=='Vertical') || (this.proxy.direction=='VERTICAL'))
    {
        this.proxy.directionRotation = new SFRotation(0, 0, 1, 0);
    }
    else if ((this.proxy.direction=='horizontal') || (this.proxy.direction=='Horizontal') || (this.proxy.direction=='HORIZONTAL'))
    {
        this.proxy.directionRotation = new SFRotation(0, 0, 1, -1.57);
    }
    else
    {
        console.error ('[SliderFloat LayoutDirectionScript] unrecognized this.proxy.direction: ' + this.proxy.direction + ', using vertical');
        this.proxy.directionRotation = new SFRotation(0, 0, 1, 0);
    }
    this.tracePrint ('this.proxy.direction=' + this.proxy.direction);
};

	this.tracePrint = function (text)
{
	if (this.proxy.traceEnabled) console.error ('[SliderFloat LayoutDirectionScript] ' + text + '');
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['LayoutDirectionScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['LayoutDirectionScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['LayoutDirectionScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['LayoutDirectionScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['LayoutDirectionScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['LayoutDirectionScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['LayoutDirectionScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['LayoutDirectionScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['LayoutDirectionScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['LayoutDirectionScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['LayoutDirectionScript'].initialize();
    if (X3DJSON.nodeUtil("Scene","SliderBallPlaneSensor")) {
X3DJSON.nodeUtil("Scene","SliderBallPlaneSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].setDragActive(X3DJSON.nodeUtil("Scene","SliderBallPlaneSensor","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].setDragActive(X3DJSON.nodeUtil("Scene","SliderBallPlaneSensor","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","SliderBallPlaneSensor")) {
X3DJSON.nodeUtil("Scene","SliderBallPlaneSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].setBallPosition(X3DJSON.nodeUtil("Scene","SliderBallPlaneSensor","translation"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].setBallPosition(X3DJSON.nodeUtil("Scene","SliderBallPlaneSensor","translation"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","BottomEndSensor")) {
X3DJSON.nodeUtil("Scene","BottomEndSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].bottomEndTouched(X3DJSON.nodeUtil("Scene","BottomEndSensor","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].bottomEndTouched(X3DJSON.nodeUtil("Scene","BottomEndSensor","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TopEndSensor")) {
X3DJSON.nodeUtil("Scene","TopEndSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].topEndTouched(X3DJSON.nodeUtil("Scene","TopEndSensor","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].topEndTouched(X3DJSON.nodeUtil("Scene","TopEndSensor","isActive"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript']['ACTION']['minBallPositionChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript']['ACTION']['minBallPositionChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript']['ACTION']['minBallPositionChanged'].push(function(property, value) {
		if (property === 'minBallPositionChanged') {
			X3DJSON.nodeUtil("Scene","SliderBallPlaneSensor","minPosition",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].minBallPositionChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].minBallPositionChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].minBallPositionChanged, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SliderBallPlaneSensor","minPosition",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].minBallPositionChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].minBallPositionChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].minBallPositionChanged, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript']['ACTION']['maxBallPositionChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript']['ACTION']['maxBallPositionChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript']['ACTION']['maxBallPositionChanged'].push(function(property, value) {
		if (property === 'maxBallPositionChanged') {
			X3DJSON.nodeUtil("Scene","SliderBallPlaneSensor","maxPosition",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].maxBallPositionChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].maxBallPositionChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].maxBallPositionChanged, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SliderBallPlaneSensor","maxPosition",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].maxBallPositionChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].maxBallPositionChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].maxBallPositionChanged, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript']['ACTION']['bottomEndPositionChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript']['ACTION']['bottomEndPositionChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript']['ACTION']['bottomEndPositionChanged'].push(function(property, value) {
		if (property === 'bottomEndPositionChanged') {
			X3DJSON.nodeUtil("Scene","BottomEndTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].bottomEndPositionChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].bottomEndPositionChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].bottomEndPositionChanged, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BottomEndTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].bottomEndPositionChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].bottomEndPositionChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].bottomEndPositionChanged, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript']['ACTION']['topEndPositionChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript']['ACTION']['topEndPositionChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript']['ACTION']['topEndPositionChanged'].push(function(property, value) {
		if (property === 'topEndPositionChanged') {
			X3DJSON.nodeUtil("Scene","TopEndTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].topEndPositionChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].topEndPositionChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].topEndPositionChanged, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TopEndTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].topEndPositionChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].topEndPositionChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].topEndPositionChanged, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript']['ACTION']['ballPositionChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript']['ACTION']['ballPositionChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript']['ACTION']['ballPositionChanged'].push(function(property, value) {
		if (property === 'ballPositionChanged') {
			X3DJSON.nodeUtil("Scene","SliderBallTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].ballPositionChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].ballPositionChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].ballPositionChanged, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SliderBallTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].ballPositionChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].ballPositionChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].ballPositionChanged, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['LayoutDirectionScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['LayoutDirectionScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['LayoutDirectionScript']['ACTION']['directionRotation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['LayoutDirectionScript']['ACTION']['directionRotation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['LayoutDirectionScript']['ACTION']['directionRotation'].push(function(property, value) {
		if (property === 'directionRotation') {
			X3DJSON.nodeUtil("Scene","LayoutDirectionTransform","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['LayoutDirectionScript'].directionRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['LayoutDirectionScript'].directionRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['LayoutDirectionScript'].directionRotation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","LayoutDirectionTransform","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['LayoutDirectionScript'].directionRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['LayoutDirectionScript'].directionRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['LayoutDirectionScript'].directionRotation, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].setDragActive(X3DJSON.nodeUtil("Scene","SliderBallPlaneSensor","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].setBallPosition(X3DJSON.nodeUtil("Scene","SliderBallPlaneSensor","translation"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].bottomEndTouched(X3DJSON.nodeUtil("Scene","BottomEndSensor","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].topEndTouched(X3DJSON.nodeUtil("Scene","TopEndSensor","isActive"), __eventTime);
			X3DJSON.nodeUtil("Scene","SliderBallPlaneSensor","minPosition",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].minBallPositionChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].minBallPositionChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].minBallPositionChanged, __eventTime);
			X3DJSON.nodeUtil("Scene","SliderBallPlaneSensor","maxPosition",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].maxBallPositionChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].maxBallPositionChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].maxBallPositionChanged, __eventTime);
			X3DJSON.nodeUtil("Scene","BottomEndTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].bottomEndPositionChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].bottomEndPositionChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].bottomEndPositionChanged, __eventTime);
			X3DJSON.nodeUtil("Scene","TopEndTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].topEndPositionChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].topEndPositionChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].topEndPositionChanged, __eventTime);
			X3DJSON.nodeUtil("Scene","SliderBallTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].ballPositionChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].ballPositionChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['SliderScript'].ballPositionChanged, __eventTime);
			X3DJSON.nodeUtil("Scene","LayoutDirectionTransform","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['LayoutDirectionScript'].directionRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['LayoutDirectionScript'].directionRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/SliderIntegerPrototype.json']['LayoutDirectionScript'].directionRotation, __eventTime);