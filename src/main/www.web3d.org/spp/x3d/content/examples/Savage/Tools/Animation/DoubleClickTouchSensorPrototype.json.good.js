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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/DoubleClickTouchSensorPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/DoubleClickTouchSensorPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/DoubleClickTouchSensorPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/DoubleClickTouchSensorPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/DoubleClickTouchSensorPrototype.json']['DoubleClickTouchScript'] = function() {
	this.set_description = function (value) {
		try {
			this.proxy.description = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting description '+e);
			console.error('Problems setting description',e);
		}
	};
	this.description_changed = function () {
		var value = this.description;
		return value;
	};
	try {
		this.description = new SFString();
	} catch (e) {
		console.log('Problems setting description '+e);
		console.error('Problems setting description',e);
	}
	this.set_checkClicks = function (value) {
		try {
			this.proxy.checkClicks = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting checkClicks '+e);
			console.error('Problems setting checkClicks',e);
		}
	};
	this.checkClicks_changed = function () {
		var value = this.checkClicks;
		return value;
	};
	try {
		this.checkClicks = new SFBool();
	} catch (e) {
		console.log('Problems setting checkClicks '+e);
		console.error('Problems setting checkClicks',e);
	}
	this.set_maxDelayInterval = function (value) {
		try {
			this.proxy.maxDelayInterval = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting maxDelayInterval '+e);
			console.error('Problems setting maxDelayInterval',e);
		}
	};
	this.maxDelayInterval_changed = function () {
		var value = this.maxDelayInterval;
		return value;
	};
	try {
		this.maxDelayInterval = new SFTime();
	} catch (e) {
		console.log('Problems setting maxDelayInterval '+e);
		console.error('Problems setting maxDelayInterval',e);
	}
	this.set_priorTouchTime = function (value) {
		try {
			this.proxy.priorTouchTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting priorTouchTime '+e);
			console.error('Problems setting priorTouchTime',e);
		}
	};
	this.priorTouchTime_changed = function () {
		var value = this.priorTouchTime;
		return value;
	};
	try {
		this.priorTouchTime = new SFTime(-1);
	} catch (e) {
		console.log('Problems setting priorTouchTime '+e);
		console.error('Problems setting priorTouchTime',e);
	}
	this.set_currentTouchTime = function (value) {
		try {
			this.proxy.currentTouchTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting currentTouchTime '+e);
			console.error('Problems setting currentTouchTime',e);
		}
	};
	this.currentTouchTime_changed = function () {
		var value = this.currentTouchTime;
		return value;
	};
	try {
		this.currentTouchTime = new SFTime(-1);
	} catch (e) {
		console.log('Problems setting currentTouchTime '+e);
		console.error('Problems setting currentTouchTime',e);
	}
	this.set_touchSensor = function (value) {
		try {
			this.proxy.touchSensor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting touchSensor '+e);
			console.error('Problems setting touchSensor',e);
		}
	};
	this.touchSensor_changed = function () {
		var value = this.touchSensor;
		return value;
	};
	try {
		this.touchSensor = X3DJSON.nodeUtil("Scene","TouchSensorNode");
	} catch (e) {
		console.log('Problems setting touchSensor '+e);
		console.error('Problems setting touchSensor',e);
	}
	this.set_isActive = function (value) {
		try {
			this.proxy.isActive = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isActive '+e);
			console.error('Problems setting isActive',e);
		}
	};
	this.isActive_changed = function () {
		var value = this.isActive;
		return value;
	};
	try {
		this.isActive = new SFBool();
	} catch (e) {
		console.log('Problems setting isActive '+e);
		console.error('Problems setting isActive',e);
	}
	this.set_touchTime = function (value) {
		try {
			this.proxy.touchTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting touchTime '+e);
			console.error('Problems setting touchTime',e);
		}
	};
	this.touchTime_changed = function () {
		var value = this.touchTime;
		return value;
	};
	try {
		this.touchTime = new SFTime();
	} catch (e) {
		console.log('Problems setting touchTime '+e);
		console.error('Problems setting touchTime',e);
	}
	this.set_hitPoint = function (value) {
		try {
			this.proxy.hitPoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting hitPoint '+e);
			console.error('Problems setting hitPoint',e);
		}
	};
	this.hitPoint_changed = function () {
		var value = this.hitPoint;
		return value;
	};
	try {
		this.hitPoint = undefined;
	} catch (e) {
		console.log('Problems setting hitPoint '+e);
		console.error('Problems setting hitPoint',e);
	}
	this.set_hitNormal = function (value) {
		try {
			this.proxy.hitNormal = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting hitNormal '+e);
			console.error('Problems setting hitNormal',e);
		}
	};
	this.hitNormal_changed = function () {
		var value = this.hitNormal;
		return value;
	};
	try {
		this.hitNormal = undefined;
	} catch (e) {
		console.log('Problems setting hitNormal '+e);
		console.error('Problems setting hitNormal',e);
	}
	this.set_hitTexCoord = function (value) {
		try {
			this.proxy.hitTexCoord = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting hitTexCoord '+e);
			console.error('Problems setting hitTexCoord',e);
		}
	};
	this.hitTexCoord_changed = function () {
		var value = this.hitTexCoord;
		return value;
	};
	try {
		this.hitTexCoord = undefined;
	} catch (e) {
		console.log('Problems setting hitTexCoord '+e);
		console.error('Problems setting hitTexCoord',e);
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

//  inputOnly events are handled by functinos,
//  initializeOnly fields are variable objects,
//  outputOnly events are sent by setting values

	this.initialize = function ()
{
	this.tracePrint ('this.initialize (); enabled=' + X3DJSON.nodeUtil("Scene","TouchSensorNode", "enabled"));
}

// trigge;

	this.checkClicks = function (value, timestamp)  // activated from TouchSensorNode.proxy.isActive
{
	if (value == false) // doubleClick this.proxy.isActive=false events
	{
		if (this.proxy.isActive == true) // need to unclick
		{
			this.proxy.isActive  = false;	// send output events
			this.proxy.touchTime = timestamp;
			this.tracePrint ('DoubleClick this.proxy.isActive=false;');
		}
		return;
	}
	this.proxy.priorTouchTime = this.proxy.currentTouchTime;
	this.proxy.currentTouchTime = timestamp;
	computedDelay = (this.proxy.currentTouchTime - this.proxy.priorTouchTime);

	if      (this.proxy.priorTouchTime == -1)
	{
		this.tracePrint ('this.proxy.priorTouchTime == -1, return;');
		return;
	}
	else if (computedDelay <= this.proxy.maxDelayInterval)
	{
		this.tracePrint ('computedDelay=' + computedDelay + ', DoubleClick this.proxy.isActive=true;');

		this.proxy.isActive  = true;	// send output events
		this.proxy.touchTime = timestamp;
		this.proxy.hitPoint_changed    = X3DJSON.nodeUtil("Scene","TouchSensorNode", "this.proxy.hitPoint_changed");
		this.proxy.hitNormal_changed   = X3DJSON.nodeUtil("Scene","TouchSensorNode", "this.proxy.hitNormal_changed");
		this.proxy.hitTexCoord_changed = X3DJSON.nodeUtil("Scene","TouchSensorNode", "this.proxy.hitTexCoord_changed");
	}
	else
	{
		this.tracePrint ('computedDelay=' + computedDelay + ', single click');
		return;
	}

};

	this.set_description = function (newDescription)
{
    this.proxy.description = newDescription;
};

	this.tracePrint = function (outputString)
{
	if (this.proxy.traceEnabled) console.error ('[DoubleClickTouchSensor] ' + outputString);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/DoubleClickTouchSensorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/DoubleClickTouchSensorPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/DoubleClickTouchSensorPrototype.json']['DoubleClickTouchScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/DoubleClickTouchSensorPrototype.json']['DoubleClickTouchScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/DoubleClickTouchSensorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/DoubleClickTouchSensorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/DoubleClickTouchSensorPrototype.json']['DoubleClickTouchScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/DoubleClickTouchSensorPrototype.json']['DoubleClickTouchScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/DoubleClickTouchSensorPrototype.json']['DoubleClickTouchScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/DoubleClickTouchSensorPrototype.json']['DoubleClickTouchScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/DoubleClickTouchSensorPrototype.json']['DoubleClickTouchScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/DoubleClickTouchSensorPrototype.json']['DoubleClickTouchScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/DoubleClickTouchSensorPrototype.json']['DoubleClickTouchScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/DoubleClickTouchSensorPrototype.json']['DoubleClickTouchScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/DoubleClickTouchSensorPrototype.json']['DoubleClickTouchScript'].initialize();
    if (X3DJSON.nodeUtil("Scene","TouchSensorNode")) {
X3DJSON.nodeUtil("Scene","TouchSensorNode").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/DoubleClickTouchSensorPrototype.json']['DoubleClickTouchScript'].checkClicks(X3DJSON.nodeUtil("Scene","TouchSensorNode","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/DoubleClickTouchSensorPrototype.json']['DoubleClickTouchScript'].checkClicks(X3DJSON.nodeUtil("Scene","TouchSensorNode","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/DoubleClickTouchSensorPrototype.json']['DoubleClickTouchScript'].checkClicks(X3DJSON.nodeUtil("Scene","TouchSensorNode","isActive"), __eventTime);