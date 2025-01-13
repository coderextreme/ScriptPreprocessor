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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'] = function() {
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
	this.set_interpolatorNode = function (value) {
		try {
			this.proxy.interpolatorNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting interpolatorNode '+e);
			console.error('Problems setting interpolatorNode',e);
		}
	};
	this.interpolatorNode_changed = function () {
		var value = this.interpolatorNode;
		return value;
	};
	try {
		this.interpolatorNode = X3DJSON.nodeUtil("Scene","TextAnimator");
	} catch (e) {
		console.log('Problems setting interpolatorNode '+e);
		console.error('Problems setting interpolatorNode',e);
	}
	this.set_textNode = function (value) {
		try {
			this.proxy.textNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting textNode '+e);
			console.error('Problems setting textNode',e);
		}
	};
	this.textNode_changed = function () {
		var value = this.textNode;
		return value;
	};
	try {
		this.textNode = X3DJSON.nodeUtil("Scene","TextMessage");
	} catch (e) {
		console.log('Problems setting textNode '+e);
		console.error('Problems setting textNode',e);
	}
	this.set_timeSensorNode = function (value) {
		try {
			this.proxy.timeSensorNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting timeSensorNode '+e);
			console.error('Problems setting timeSensorNode',e);
		}
	};
	this.timeSensorNode_changed = function () {
		var value = this.timeSensorNode;
		return value;
	};
	try {
		this.timeSensorNode = X3DJSON.nodeUtil("Scene","Clock");
	} catch (e) {
		console.log('Problems setting timeSensorNode '+e);
		console.error('Problems setting timeSensorNode',e);
	}
	this.set_waypoints = function (value) {
		try {
			this.proxy.waypoints = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting waypoints '+e);
			console.error('Problems setting waypoints',e);
		}
	};
	this.waypoints_changed = function () {
		var value = this.waypoints;
		return value;
	};
	try {
		this.waypoints = new MFVec3f();
	} catch (e) {
		console.log('Problems setting waypoints '+e);
		console.error('Problems setting waypoints',e);
	}
	this.set_waypoints = function (value) {
		try {
			this.proxy.waypoints = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting waypoints '+e);
			console.error('Problems setting waypoints',e);
		}
	};
	this.waypoints_changed = function () {
		var value = this.waypoints;
		return value;
	};
	try {
		this.waypoints = new MFVec3f();
	} catch (e) {
		console.log('Problems setting waypoints '+e);
		console.error('Problems setting waypoints',e);
	}
	this.set_timeIntervals = function (value) {
		try {
			this.proxy.timeIntervals = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting timeIntervals '+e);
			console.error('Problems setting timeIntervals',e);
		}
	};
	this.timeIntervals_changed = function () {
		var value = this.timeIntervals;
		return value;
	};
	try {
		this.timeIntervals = new MFTime();
	} catch (e) {
		console.log('Problems setting timeIntervals '+e);
		console.error('Problems setting timeIntervals',e);
	}
	this.set_timeIntervals = function (value) {
		try {
			this.proxy.timeIntervals = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting timeIntervals '+e);
			console.error('Problems setting timeIntervals',e);
		}
	};
	this.timeIntervals_changed = function () {
		var value = this.timeIntervals;
		return value;
	};
	try {
		this.timeIntervals = new MFTime();
	} catch (e) {
		console.log('Problems setting timeIntervals '+e);
		console.error('Problems setting timeIntervals',e);
	}
	this.set_textMessage = function (value) {
		try {
			this.proxy.textMessage = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting textMessage '+e);
			console.error('Problems setting textMessage',e);
		}
	};
	this.textMessage_changed = function () {
		var value = this.textMessage;
		return value;
	};
	try {
		this.textMessage = new MFString();
	} catch (e) {
		console.log('Problems setting textMessage '+e);
		console.error('Problems setting textMessage',e);
	}
	this.set_textMessage = function (value) {
		try {
			this.proxy.textMessage = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting textMessage '+e);
			console.error('Problems setting textMessage',e);
		}
	};
	this.textMessage_changed = function () {
		var value = this.textMessage;
		return value;
	};
	try {
		this.textMessage = new MFString();
	} catch (e) {
		console.log('Problems setting textMessage '+e);
		console.error('Problems setting textMessage',e);
	}
	this.set_visible = function (value) {
		try {
			this.proxy.visible = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting visible '+e);
			console.error('Problems setting visible',e);
		}
	};
	this.visible_changed = function () {
		var value = this.visible;
		return value;
	};
	try {
		this.visible = new SFBool();
	} catch (e) {
		console.log('Problems setting visible '+e);
		console.error('Problems setting visible',e);
	}
	this.set_visible = function (value) {
		try {
			this.proxy.visible = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting visible '+e);
			console.error('Problems setting visible',e);
		}
	};
	this.visible_changed = function () {
		var value = this.visible;
		return value;
	};
	try {
		this.visible = new SFBool();
	} catch (e) {
		console.log('Problems setting visible '+e);
		console.error('Problems setting visible',e);
	}
	this.set_hideText = function (value) {
		try {
			this.proxy.hideText = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting hideText '+e);
			console.error('Problems setting hideText',e);
		}
	};
	this.hideText_changed = function () {
		var value = this.hideText;
		return value;
	};
	try {
		this.hideText = new SFBool();
	} catch (e) {
		console.log('Problems setting hideText '+e);
		console.error('Problems setting hideText',e);
	}
	this.set_revealText = function (value) {
		try {
			this.proxy.revealText = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting revealText '+e);
			console.error('Problems setting revealText',e);
		}
	};
	this.revealText_changed = function () {
		var value = this.revealText;
		return value;
	};
	try {
		this.revealText = new SFBool();
	} catch (e) {
		console.log('Problems setting revealText '+e);
		console.error('Problems setting revealText',e);
	}
	this.set_startTime = function (value) {
		try {
			this.proxy.startTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startTime '+e);
			console.error('Problems setting startTime',e);
		}
	};
	this.startTime_changed = function () {
		var value = this.startTime;
		return value;
	};
	try {
		this.startTime = undefined;
	} catch (e) {
		console.log('Problems setting startTime '+e);
		console.error('Problems setting startTime',e);
	}
	this.set_totalDuration = function (value) {
		try {
			this.proxy.totalDuration = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting totalDuration '+e);
			console.error('Problems setting totalDuration',e);
		}
	};
	this.totalDuration_changed = function () {
		var value = this.totalDuration;
		return value;
	};
	try {
		this.totalDuration = new SFTime(0);
	} catch (e) {
		console.log('Problems setting totalDuration '+e);
		console.error('Problems setting totalDuration',e);
	}


ecmascript:

	this.initialize = function ()
{
   if ((this.proxy.waypoints.length - this.proxy.timeIntervals.length) == 1 )
   {
     this.proxy.set_textMessage(this.proxy.textMessage);
     this.proxy.set_timeIntervals(this.proxy.timeIntervals);
     this.proxy.set_waypoints(this.proxy.waypoints);
   }
   else
   {
     this.alwaysPrint('this.proxy.timeIntervals.length=' + this.proxy.timeIntervals.length + ' should be one less '
                + 'than this.proxy.waypoints.length=' + this.proxy.waypoints.length);
     this.alwaysPrint ('this.proxy.timeIntervals=' + this.proxy.timeIntervals);
     this.alwaysPrint ('this.proxy.waypoints    =' + this.proxy.waypoints);
   }
   if (this.proxy.visible) this.proxy.revealText = true;
   else           this.proxy.hideText = true;
   this.tracePrint ('this.proxy.visible = ' + this.proxy.visible);
};

	this.set_textMessage = function (text)
{
   X3DJSON.nodeUtil("Scene","TextMessage", "string",  text);
   this.tracePrint ('X3DJSON.nodeUtil("Scene","TextMessage", "string",  ' + X3DJSON.nodeUtil("Scene","TextMessage", "string")));
};

	this.set_waypoints = function (waypointsArray)
{
   X3DJSON.nodeUtil("Scene","TextAnimator", "keyValue",  waypointsArray);
   this.tracePrint ('X3DJSON.nodeUtil("Scene","TextAnimator", "keyValue",  ' + X3DJSON.nodeUtil("Scene","TextAnimator", "keyValue")));
};

	this.set_timeIntervals = function (intervals)
{
   this.tracePrint ('this.proxy.set_timeIntervals(' + this.proxy.timeIntervals + ')');
   this.proxy.totalDuration = 0;
   for(i = 0; i < this.proxy.timeIntervals.length; i++)
   {
      this.proxy.totalDuration = this.proxy.totalDuration + this.proxy.timeIntervals[i];
   }
   this.tracePrint ('this.proxy.totalDuration = ' + this.proxy.totalDuration);
   X3DJSON.nodeUtil("Scene","Clock", "cycleInterval",  this.proxy.totalDuration);

   X3DJSON.nodeUtil("Scene","TextAnimator", "key")[0] = 0.0;
   for (j = 0; j < this.proxy.timeIntervals.length; j++)
   {
      X3DJSON.nodeUtil("Scene","TextAnimator", "key")[j+1] = X3DJSON.nodeUtil("Scene","TextAnimator", "key")[j] + this.proxy.timeIntervals[j]/this.proxy.totalDuration;
      this.tracePrint ('X3DJSON.nodeUtil("Scene","TextAnimator", "key")[j] = ' + X3DJSON.nodeUtil("Scene","TextAnimator", "key")[j]);
   }
   this.tracePrint ('X3DJSON.nodeUtil("Scene","TextAnimator", "key",  ' + X3DJSON.nodeUtil("Scene","TextAnimator", "key")));
};

	this.set_visible = function (value, timestamp)
{
	this.proxy.visible = value;
	if (this.proxy.visible) this.proxy.revealText = true;
	else           this.proxy.hideText = true;
	this.tracePrint ('this.proxy.visible = ' + this.proxy.visible);
};

	this.set_startTime = function (value, timestamp)
{
	this.tracePrint ('this.proxy.set_startTime = ' + value);
	this.proxy.set_visible (true);  // ensure this.proxy.visible when activated
	this.initialize ();       // ensure all computations up to date
};

	this.tracePrint = function (value)
{
   if (this.proxy.traceEnabled) this.alwaysPrint(value);
};

	this.alwaysPrint = function (value)
{
      if (this.proxy.textMessage.length > 1)
	       console.error ('[FlyingText ' + this.proxy.textMessage + '] ' + value + '');
      else console.error ('[FlyingText] ' + value + '');
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'].initialize();
    if (X3DJSON.nodeUtil("Scene","Toucher")) {
X3DJSON.nodeUtil("Scene","Toucher").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Clock")) {
X3DJSON.nodeUtil("Scene","Clock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TextAnimator")) {
X3DJSON.nodeUtil("Scene","TextAnimator").addEventListener('outputchange', function(event) {
}, false);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript']['ACTION']['hideText'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript']['ACTION']['hideText'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript']['ACTION']['hideText'].push(function(property, value) {
		if (property === 'hideText') {
			X3DJSON.nodeUtil("Scene","HideTextTrigger","boolean",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'].hideText === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'].hideText() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'].hideText, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","HideTextTrigger","boolean",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'].hideText === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'].hideText() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'].hideText, __eventTime);
    if (X3DJSON.nodeUtil("Scene","HideTextTrigger")) {
X3DJSON.nodeUtil("Scene","HideTextTrigger").addEventListener('outputchange', function(event) {
}, false);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript']['ACTION']['revealText'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript']['ACTION']['revealText'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript']['ACTION']['revealText'].push(function(property, value) {
		if (property === 'revealText') {
			X3DJSON.nodeUtil("Scene","RevealTextTrigger","boolean",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'].revealText === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'].revealText() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'].revealText, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RevealTextTrigger","boolean",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'].revealText === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'].revealText() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'].revealText, __eventTime);
    if (X3DJSON.nodeUtil("Scene","RevealTextTrigger")) {
X3DJSON.nodeUtil("Scene","RevealTextTrigger").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON.nodeUtil("Scene","HideTextTrigger","boolean",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'].hideText === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'].hideText() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'].hideText, __eventTime);
			X3DJSON.nodeUtil("Scene","RevealTextTrigger","boolean",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'].revealText === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'].revealText() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/FlyingTextPrototype.json']['AnimationScript'].revealText, __eventTime);