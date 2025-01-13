var x3dom = require('../node/fields.js');
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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PushButtonPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PushButtonPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PushButtonPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PushButtonPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PushButtonPrototype.json'][''] = function() {
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
	this.set_delayInterval = function (value) {
		try {
			this.proxy.delayInterval = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting delayInterval '+e);
			console.error('Problems setting delayInterval',e);
		}
	};
	this.delayInterval_changed = function () {
		var value = this.delayInterval;
		return value;
	};
	try {
		this.delayInterval = new SFTime();
	} catch (e) {
		console.log('Problems setting delayInterval '+e);
		console.error('Problems setting delayInterval',e);
	}
	this.set_outerSwitchStyle = function (value) {
		try {
			this.proxy.outerSwitchStyle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting outerSwitchStyle '+e);
			console.error('Problems setting outerSwitchStyle',e);
		}
	};
	this.outerSwitchStyle_changed = function () {
		var value = this.outerSwitchStyle;
		return value;
	};
	try {
		this.outerSwitchStyle = new SFString();
	} catch (e) {
		console.log('Problems setting outerSwitchStyle '+e);
		console.error('Problems setting outerSwitchStyle',e);
	}
	this.set_outerSwitchStyle = function (value) {
		try {
			this.proxy.outerSwitchStyle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting outerSwitchStyle '+e);
			console.error('Problems setting outerSwitchStyle',e);
		}
	};
	this.outerSwitchStyle_changed = function () {
		var value = this.outerSwitchStyle;
		return value;
	};
	try {
		this.outerSwitchStyle = new SFString();
	} catch (e) {
		console.log('Problems setting outerSwitchStyle '+e);
		console.error('Problems setting outerSwitchStyle',e);
	}
	this.set_innerSwitchStyle = function (value) {
		try {
			this.proxy.innerSwitchStyle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting innerSwitchStyle '+e);
			console.error('Problems setting innerSwitchStyle',e);
		}
	};
	this.innerSwitchStyle_changed = function () {
		var value = this.innerSwitchStyle;
		return value;
	};
	try {
		this.innerSwitchStyle = new SFString();
	} catch (e) {
		console.log('Problems setting innerSwitchStyle '+e);
		console.error('Problems setting innerSwitchStyle',e);
	}
	this.set_innerSwitchStyle = function (value) {
		try {
			this.proxy.innerSwitchStyle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting innerSwitchStyle '+e);
			console.error('Problems setting innerSwitchStyle',e);
		}
	};
	this.innerSwitchStyle_changed = function () {
		var value = this.innerSwitchStyle;
		return value;
	};
	try {
		this.innerSwitchStyle = new SFString();
	} catch (e) {
		console.log('Problems setting innerSwitchStyle '+e);
		console.error('Problems setting innerSwitchStyle',e);
	}
	this.set_switchOuterRound = function (value) {
		try {
			this.proxy.switchOuterRound = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting switchOuterRound '+e);
			console.error('Problems setting switchOuterRound',e);
		}
	};
	this.switchOuterRound_changed = function () {
		var value = this.switchOuterRound;
		return value;
	};
	try {
		this.switchOuterRound = X3DJSON.nodeUtil("Scene","OuterShapeSwitchRound");
	} catch (e) {
		console.log('Problems setting switchOuterRound '+e);
		console.error('Problems setting switchOuterRound',e);
	}
	this.set_switchOuterSquare = function (value) {
		try {
			this.proxy.switchOuterSquare = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting switchOuterSquare '+e);
			console.error('Problems setting switchOuterSquare',e);
		}
	};
	this.switchOuterSquare_changed = function () {
		var value = this.switchOuterSquare;
		return value;
	};
	try {
		this.switchOuterSquare = X3DJSON.nodeUtil("Scene","OuterShapeSwitchSquare");
	} catch (e) {
		console.log('Problems setting switchOuterSquare '+e);
		console.error('Problems setting switchOuterSquare',e);
	}
	this.set_switchInnerRound = function (value) {
		try {
			this.proxy.switchInnerRound = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting switchInnerRound '+e);
			console.error('Problems setting switchInnerRound',e);
		}
	};
	this.switchInnerRound_changed = function () {
		var value = this.switchInnerRound;
		return value;
	};
	try {
		this.switchInnerRound = X3DJSON.nodeUtil("Scene","InnerShapeSwitchRound");
	} catch (e) {
		console.log('Problems setting switchInnerRound '+e);
		console.error('Problems setting switchInnerRound',e);
	}
	this.set_switchInnerSquare = function (value) {
		try {
			this.proxy.switchInnerSquare = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting switchInnerSquare '+e);
			console.error('Problems setting switchInnerSquare',e);
		}
	};
	this.switchInnerSquare_changed = function () {
		var value = this.switchInnerSquare;
		return value;
	};
	try {
		this.switchInnerSquare = X3DJSON.nodeUtil("Scene","InnerShapeSwitchSquare");
	} catch (e) {
		console.log('Problems setting switchInnerSquare '+e);
		console.error('Problems setting switchInnerSquare',e);
	}
	this.set_clock1 = function (value) {
		try {
			this.proxy.clock1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting clock1 '+e);
			console.error('Problems setting clock1',e);
		}
	};
	this.clock1_changed = function () {
		var value = this.clock1;
		return value;
	};
	try {
		this.clock1 = X3DJSON.nodeUtil("Scene","Clock1");
	} catch (e) {
		console.log('Problems setting clock1 '+e);
		console.error('Problems setting clock1',e);
	}
	this.set_clock2 = function (value) {
		try {
			this.proxy.clock2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting clock2 '+e);
			console.error('Problems setting clock2',e);
		}
	};
	this.clock2_changed = function () {
		var value = this.clock2;
		return value;
	};
	try {
		this.clock2 = X3DJSON.nodeUtil("Scene","Clock2");
	} catch (e) {
		console.log('Problems setting clock2 '+e);
		console.error('Problems setting clock2',e);
	}


ecmascript:

	this.initialize = function ()
{
   X3DJSON.nodeUtil("Scene","Clock1", "cycleInterval",  this.proxy.delayInterval);
   X3DJSON.nodeUtil("Scene","Clock2", "cycleInterval",  this.proxy.delayInterval);

   this.proxy.set_innerSwitchStyle(this.proxy.innerSwitchStyle);
   this.proxy.set_outerSwitchStyle(this.proxy.outerSwitchStyle);
}
;

	this.set_innerSwitchStyle = function (stringValue)
{
   if (stringValue != null)  //security check
   {
      if (stringValue != 'round')
      {
         if (stringValue != 'square')
         {
            this.printError(stringValue, 'inner');
            this.proxy.innerSwitchStyle = 'round';
         }
         else
         {
            this.proxy.innerSwitchStyle = stringValue;
         }
      }
      else
      {
          this.proxy.innerSwitchStyle = stringValue;
      }
   }

   if      (this.proxy.innerSwitchStyle == 'round')
   {
        X3DJSON.nodeUtil("Scene","InnerShapeSwitchSquare", "whichChoice",  -1);
         X3DJSON.nodeUtil("Scene","InnerShapeSwitchRound", "whichChoice",   0);
   }
   else // (this.proxy.innerSwitchStyle == 'square')
   {
        X3DJSON.nodeUtil("Scene","InnerShapeSwitchSquare", "whichChoice",   0);
         X3DJSON.nodeUtil("Scene","InnerShapeSwitchRound", "whichChoice",  -1);
   }
}
;

	this.set_outerSwitchStyle = function (stringValue)
{
   if (stringValue != null)    //security check
   {
      if (stringValue != 'round')
      {
         if (stringValue != 'square')
         {
            this.printError(stringValue, 'outer');
            this.proxy.outerSwitchStyle = 'round';
         }
         else
         {
            this.proxy.outerSwitchStyle = stringValue;
         }
      }
      else
      {
          this.proxy.outerSwitchStyle = stringValue;
      }
   }

   if      (this.proxy.outerSwitchStyle == 'round')
   {
        X3DJSON.nodeUtil("Scene","OuterShapeSwitchSquare", "whichChoice",  -1);
         X3DJSON.nodeUtil("Scene","OuterShapeSwitchRound", "whichChoice",   0);
   }
   else // (this.proxy.outerSwitchStyle == 'square')
   {
        X3DJSON.nodeUtil("Scene","OuterShapeSwitchSquare", "whichChoice",   0);
         X3DJSON.nodeUtil("Scene","OuterShapeSwitchRound", "whichChoice",  -1);
   }
}
;

	this.printError = function (s1, s2)
{
    if (this.proxy.traceEnabled)
    {
      console.error ('Allowed values are [round] and [square].' +
            'Assigned value [' + s1 + '] (The values are case/whitespace-sensitive).' +
            'Default value  [round] will be used for [' + s2 + 'SwitchStyle].');
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PushButtonPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PushButtonPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PushButtonPrototype.json'][''] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PushButtonPrototype.json']['']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PushButtonPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PushButtonPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PushButtonPrototype.json'][''] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PushButtonPrototype.json'][''] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PushButtonPrototype.json']['']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PushButtonPrototype.json']['']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PushButtonPrototype.json'][''].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PushButtonPrototype.json']['']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PushButtonPrototype.json']['']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PushButtonPrototype.json'][''].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PushButtonPrototype.json'][''].initialize();
    if (X3DJSON.nodeUtil("Scene","Toucher")) {
X3DJSON.nodeUtil("Scene","Toucher").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Toucher")) {
X3DJSON.nodeUtil("Scene","Toucher").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Toucher")) {
X3DJSON.nodeUtil("Scene","Toucher").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Clock1")) {
X3DJSON.nodeUtil("Scene","Clock1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","SwitchAnimator1")) {
X3DJSON.nodeUtil("Scene","SwitchAnimator1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","DelayTimer")) {
X3DJSON.nodeUtil("Scene","DelayTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Clock2")) {
X3DJSON.nodeUtil("Scene","Clock2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","SwitchAnimator2")) {
X3DJSON.nodeUtil("Scene","SwitchAnimator2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Clock2")) {
X3DJSON.nodeUtil("Scene","Clock2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BooleanToggler")) {
X3DJSON.nodeUtil("Scene","BooleanToggler").addEventListener('outputchange', function(event) {
}, false);
}
