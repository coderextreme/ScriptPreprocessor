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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/AudioClip/startltstoploopfalse.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/AudioClip/startltstoploopfalse.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/AudioClip/startltstoploopfalse.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/AudioClip/startltstoploopfalse.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/AudioClip/startltstoploopfalse.json']['SOUND_SCRIPT'] = function() {
	this.set_mySound = function (value) {
		try {
			this.proxy.mySound = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting mySound '+e);
			console.error('Problems setting mySound',e);
		}
	};
	this.mySound_changed = function () {
		var value = this.mySound;
		return value;
	};
	try {
		this.mySound = X3DJSON.nodeUtil("Scene","MYSOUND");
	} catch (e) {
		console.log('Problems setting mySound '+e);
		console.error('Problems setting mySound',e);
	}
	this.set_phonoColor = function (value) {
		try {
			this.proxy.phonoColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting phonoColor '+e);
			console.error('Problems setting phonoColor',e);
		}
	};
	this.phonoColor_changed = function () {
		var value = this.phonoColor;
		return value;
	};
	try {
		this.phonoColor = X3DJSON.nodeUtil("Scene","PHONOCOLOR");
	} catch (e) {
		console.log('Problems setting phonoColor '+e);
		console.error('Problems setting phonoColor',e);
	}
	this.set_hornColor = function (value) {
		try {
			this.proxy.hornColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting hornColor '+e);
			console.error('Problems setting hornColor',e);
		}
	};
	this.hornColor_changed = function () {
		var value = this.hornColor;
		return value;
	};
	try {
		this.hornColor = X3DJSON.nodeUtil("Scene","HORNCOLOR");
	} catch (e) {
		console.log('Problems setting hornColor '+e);
		console.error('Problems setting hornColor',e);
	}
	this.set_yellow = function (value) {
		try {
			this.proxy.yellow = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting yellow '+e);
			console.error('Problems setting yellow',e);
		}
	};
	this.yellow_changed = function () {
		var value = this.yellow;
		return value;
	};
	try {
		this.yellow = new SFColor(0.75,0.75,0);
	} catch (e) {
		console.log('Problems setting yellow '+e);
		console.error('Problems setting yellow',e);
	}
	this.set_white = function (value) {
		try {
			this.proxy.white = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting white '+e);
			console.error('Problems setting white',e);
		}
	};
	this.white_changed = function () {
		var value = this.white;
		return value;
	};
	try {
		this.white = new SFColor(0.8,0.8,0.8);
	} catch (e) {
		console.log('Problems setting white '+e);
		console.error('Problems setting white',e);
	}
	this.set_colorPhonograph = function (value) {
		try {
			this.proxy.colorPhonograph = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting colorPhonograph '+e);
			console.error('Problems setting colorPhonograph',e);
		}
	};
	this.colorPhonograph_changed = function () {
		var value = this.colorPhonograph;
		return value;
	};
	try {
		this.colorPhonograph = new SFBool();
	} catch (e) {
		console.log('Problems setting colorPhonograph '+e);
		console.error('Problems setting colorPhonograph',e);
	}
	this.set_stopTime = function (value) {
		try {
			this.proxy.stopTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting stopTime '+e);
			console.error('Problems setting stopTime',e);
		}
	};
	this.stopTime_changed = function () {
		var value = this.stopTime;
		return value;
	};
	try {
		this.stopTime = undefined;
	} catch (e) {
		console.log('Problems setting stopTime '+e);
		console.error('Problems setting stopTime',e);
	}
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/AudioClip/startltstoploopfalse.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/AudioClip/startltstoploopfalse.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/AudioClip/startltstoploopfalse.json']['SOUND_SCRIPT'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/AudioClip/startltstoploopfalse.json']['SOUND_SCRIPT']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/AudioClip/startltstoploopfalse.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/AudioClip/startltstoploopfalse.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/AudioClip/startltstoploopfalse.json']['SOUND_SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/AudioClip/startltstoploopfalse.json']['SOUND_SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/AudioClip/startltstoploopfalse.json']['SOUND_SCRIPT']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/AudioClip/startltstoploopfalse.json']['SOUND_SCRIPT']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/AudioClip/startltstoploopfalse.json']['SOUND_SCRIPT'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/AudioClip/startltstoploopfalse.json']['SOUND_SCRIPT']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/AudioClip/startltstoploopfalse.json']['SOUND_SCRIPT']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/AudioClip/startltstoploopfalse.json']['SOUND_SCRIPT'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/AudioClip/startltstoploopfalse.json']['SOUND_SCRIPT'].initialize();
    if (X3DJSON.nodeUtil("Scene","TOUCHSTART")) {
X3DJSON.nodeUtil("Scene","TOUCHSTART").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TOUCHSTART")) {
X3DJSON.nodeUtil("Scene","TOUCHSTART").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/AudioClip/startltstoploopfalse.json']['SOUND_SCRIPT'].set_stopTime(X3DJSON.nodeUtil("Scene","TOUCHSTART","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/AudioClip/startltstoploopfalse.json']['SOUND_SCRIPT'].set_stopTime(X3DJSON.nodeUtil("Scene","TOUCHSTART","touchTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCHSTOP")) {
X3DJSON.nodeUtil("Scene","TOUCHSTOP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PROX_SENSOR")) {
X3DJSON.nodeUtil("Scene","PROX_SENSOR").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PROX_SENSOR")) {
X3DJSON.nodeUtil("Scene","PROX_SENSOR").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PROX_SENSOR")) {
X3DJSON.nodeUtil("Scene","PROX_SENSOR").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PROX_SENSOR")) {
X3DJSON.nodeUtil("Scene","PROX_SENSOR").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","MYSOUND")) {
X3DJSON.nodeUtil("Scene","MYSOUND").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/AudioClip/startltstoploopfalse.json']['SOUND_SCRIPT'].colorPhonograph(X3DJSON.nodeUtil("Scene","MYSOUND","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/AudioClip/startltstoploopfalse.json']['SOUND_SCRIPT'].colorPhonograph(X3DJSON.nodeUtil("Scene","MYSOUND","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCHSTART")) {
X3DJSON.nodeUtil("Scene","TOUCHSTART").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","GOTIMER")) {
X3DJSON.nodeUtil("Scene","GOTIMER").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","GOFLASH")) {
X3DJSON.nodeUtil("Scene","GOFLASH").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TOUCHSTOP")) {
X3DJSON.nodeUtil("Scene","TOUCHSTOP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STOPTIMER")) {
X3DJSON.nodeUtil("Scene","STOPTIMER").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STOPFLASH")) {
X3DJSON.nodeUtil("Scene","STOPFLASH").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/AudioClip/startltstoploopfalse.json']['SOUND_SCRIPT'].set_stopTime(X3DJSON.nodeUtil("Scene","TOUCHSTART","touchTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/AudioClip/startltstoploopfalse.json']['SOUND_SCRIPT'].colorPhonograph(X3DJSON.nodeUtil("Scene","MYSOUND","isActive"), __eventTime);