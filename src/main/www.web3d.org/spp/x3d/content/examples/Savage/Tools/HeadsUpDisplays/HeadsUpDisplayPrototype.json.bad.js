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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'] = function() {
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
	this.set_isVisible = function (value) {
		try {
			this.proxy.isVisible = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isVisible '+e);
			console.error('Problems setting isVisible',e);
		}
	};
	this.isVisible_changed = function () {
		var value = this.isVisible;
		return value;
	};
	try {
		this.isVisible = new SFBool(true);
	} catch (e) {
		console.log('Problems setting isVisible '+e);
		console.error('Problems setting isVisible',e);
	}
	this.set_planeSensorTranslation = function (value) {
		try {
			this.proxy.planeSensorTranslation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting planeSensorTranslation '+e);
			console.error('Problems setting planeSensorTranslation',e);
		}
	};
	this.planeSensorTranslation_changed = function () {
		var value = this.planeSensorTranslation;
		return value;
	};
	try {
		this.planeSensorTranslation = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting planeSensorTranslation '+e);
		console.error('Problems setting planeSensorTranslation',e);
	}
	this.set_setIsVisible = function (value) {
		try {
			this.proxy.setIsVisible = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setIsVisible '+e);
			console.error('Problems setting setIsVisible',e);
		}
	};
	this.setIsVisible_changed = function () {
		var value = this.setIsVisible;
		return value;
	};
	try {
		this.setIsVisible = new SFBool();
	} catch (e) {
		console.log('Problems setting setIsVisible '+e);
		console.error('Problems setting setIsVisible',e);
	}
	this.set_setPlaneSensorIsActive = function (value) {
		try {
			this.proxy.setPlaneSensorIsActive = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setPlaneSensorIsActive '+e);
			console.error('Problems setting setPlaneSensorIsActive',e);
		}
	};
	this.setPlaneSensorIsActive_changed = function () {
		var value = this.setPlaneSensorIsActive;
		return value;
	};
	try {
		this.setPlaneSensorIsActive = new SFBool();
	} catch (e) {
		console.log('Problems setting setPlaneSensorIsActive '+e);
		console.error('Problems setting setPlaneSensorIsActive',e);
	}
	this.set_setPlaneSensorTranslation = function (value) {
		try {
			this.proxy.setPlaneSensorTranslation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setPlaneSensorTranslation '+e);
			console.error('Problems setting setPlaneSensorTranslation',e);
		}
	};
	this.setPlaneSensorTranslation_changed = function () {
		var value = this.setPlaneSensorTranslation;
		return value;
	};
	try {
		this.setPlaneSensorTranslation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting setPlaneSensorTranslation '+e);
		console.error('Problems setting setPlaneSensorTranslation',e);
	}
	this.set_translationChanged = function (value) {
		try {
			this.proxy.translationChanged = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting translationChanged '+e);
			console.error('Problems setting translationChanged',e);
		}
	};
	this.translationChanged_changed = function () {
		var value = this.translationChanged;
		return value;
	};
	try {
		this.translationChanged = new SFVec3f();
	} catch (e) {
		console.log('Problems setting translationChanged '+e);
		console.error('Problems setting translationChanged',e);
	}
	this.set_translationOffsetChanged = function (value) {
		try {
			this.proxy.translationOffsetChanged = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting translationOffsetChanged '+e);
			console.error('Problems setting translationOffsetChanged',e);
		}
	};
	this.translationOffsetChanged_changed = function () {
		var value = this.translationOffsetChanged;
		return value;
	};
	try {
		this.translationOffsetChanged = new SFVec3f();
	} catch (e) {
		console.log('Problems setting translationOffsetChanged '+e);
		console.error('Problems setting translationOffsetChanged',e);
	}


ecmascript:

	this.tracePrint = function (text)
{
	if (this.proxy.traceEnabled) console.error ('[HeadsUpDisplayPrototype VisibilityControlScript] ' + text);
};

	this.setIsVisible = function (value, timeStamp)
{
	this.proxy.isVisible = value;
	this.tracePrint('this.proxy.isVisible=' + value);
};

	this.setPlaneSensorIsActive = function (value, timeStamp)
{
	this.tracePrint('PlaneSensor isActive=' + value);

	if (value == false)
	{
		this.tracePrint('this.proxy.planeSensorTranslation=' + this.proxy.planeSensorTranslation);
		if (this.proxy.isVisible)
		{
			this.proxy.translationChanged = this.proxy.planeSensorTranslation;
		}
		else
		{
			// fell off screen, reset to center
			this.proxy.translationChanged = new SFVec3f(0, 0, 0);
			this.proxy.translationOffsetChanged  = new SFVec3f(0, 0, 0);
		}
	}
};

	this.setPlaneSensorTranslation = function (value, timeStamp)
{
	this.proxy.planeSensorTranslation = value;
	this.tracePrint('this.proxy.planeSensorTranslation=' + value);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].initialize();
    if (X3DJSON.nodeUtil("Scene","PlaneMovementSensor")) {
X3DJSON.nodeUtil("Scene","PlaneMovementSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].setPlaneSensorIsActive(X3DJSON.nodeUtil("Scene","PlaneMovementSensor","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].setPlaneSensorIsActive(X3DJSON.nodeUtil("Scene","PlaneMovementSensor","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","PlaneMovementSensor")) {
X3DJSON.nodeUtil("Scene","PlaneMovementSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].setPlaneSensorTranslation(X3DJSON.nodeUtil("Scene","PlaneMovementSensor","translation"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].setPlaneSensorTranslation(X3DJSON.nodeUtil("Scene","PlaneMovementSensor","translation"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","MovementVisibilitySensor")) {
X3DJSON.nodeUtil("Scene","MovementVisibilitySensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].setIsVisible(X3DJSON.nodeUtil("Scene","MovementVisibilitySensor","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].setIsVisible(X3DJSON.nodeUtil("Scene","MovementVisibilitySensor","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","PlaneMovementSensor")) {
X3DJSON.nodeUtil("Scene","PlaneMovementSensor").addEventListener('outputchange', function(event) {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript']['ACTION']['translationChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript']['ACTION']['translationChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript']['ACTION']['translationChanged'].push(function(property, value) {
		if (property === 'translationChanged') {
			X3DJSON.nodeUtil("Scene","MovableLocation","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].translationChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].translationChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].translationChanged, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","MovableLocation","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].translationChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].translationChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].translationChanged, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript']['ACTION']['translationOffsetChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript']['ACTION']['translationOffsetChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript']['ACTION']['translationOffsetChanged'].push(function(property, value) {
		if (property === 'translationOffsetChanged') {
			X3DJSON.nodeUtil("Scene","PlaneMovementSensor","offset",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].translationOffsetChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].translationOffsetChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].translationOffsetChanged, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PlaneMovementSensor","offset",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].translationOffsetChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].translationOffsetChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].translationOffsetChanged, __eventTime);
    if (X3DJSON.nodeUtil("Scene","WhereSensor")) {
X3DJSON.nodeUtil("Scene","WhereSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","WhereSensor")) {
X3DJSON.nodeUtil("Scene","WhereSensor").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].setPlaneSensorIsActive(X3DJSON.nodeUtil("Scene","PlaneMovementSensor","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].setPlaneSensorTranslation(X3DJSON.nodeUtil("Scene","PlaneMovementSensor","translation"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].setIsVisible(X3DJSON.nodeUtil("Scene","MovementVisibilitySensor","isActive"), __eventTime);
			X3DJSON.nodeUtil("Scene","MovableLocation","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].translationChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].translationChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].translationChanged, __eventTime);
			X3DJSON.nodeUtil("Scene","PlaneMovementSensor","offset",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].translationOffsetChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].translationOffsetChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/HeadsUpDisplayPrototype.json']['VisibilityControlScript'].translationOffsetChanged, __eventTime);