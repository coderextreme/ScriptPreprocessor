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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'] = function() {
	this.set_timeToPrepareMessage = function (value) {
		try {
			this.proxy.timeToPrepareMessage = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting timeToPrepareMessage '+e);
			console.error('Problems setting timeToPrepareMessage',e);
		}
	};
	this.timeToPrepareMessage_changed = function () {
		var value = this.timeToPrepareMessage;
		return value;
	};
	try {
		this.timeToPrepareMessage = new SFTime();
	} catch (e) {
		console.log('Problems setting timeToPrepareMessage '+e);
		console.error('Problems setting timeToPrepareMessage',e);
	}
	this.set_messageCounter = function (value) {
		try {
			this.proxy.messageCounter = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting messageCounter '+e);
			console.error('Problems setting messageCounter',e);
		}
	};
	this.messageCounter_changed = function () {
		var value = this.messageCounter;
		return value;
	};
	try {
		this.messageCounter = new SFInt32(0);
	} catch (e) {
		console.log('Problems setting messageCounter '+e);
		console.error('Problems setting messageCounter',e);
	}
	this.set_newMessage = function (value) {
		try {
			this.proxy.newMessage = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting newMessage '+e);
			console.error('Problems setting newMessage',e);
		}
	};
	this.newMessage_changed = function () {
		var value = this.newMessage;
		return value;
	};
	try {
		this.newMessage = new MFString();
	} catch (e) {
		console.log('Problems setting newMessage '+e);
		console.error('Problems setting newMessage',e);
	}
	this.set_sendMessage = function (value) {
		try {
			this.proxy.sendMessage = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sendMessage '+e);
			console.error('Problems setting sendMessage',e);
		}
	};
	this.sendMessage_changed = function () {
		var value = this.sendMessage;
		return value;
	};
	try {
		this.sendMessage = new SFBool();
	} catch (e) {
		console.log('Problems setting sendMessage '+e);
		console.error('Problems setting sendMessage',e);
	}


ecmascript:

	this.timeToPrepareMessage = function (value, timestamp)
{
	this.proxy.messageCounter++;
	this.proxy.newMessage[0] ='SolarAUV' + this.proxy.messageCounter; // set
	this.proxy.sendMessage = true; // send
	console.error ('[SolarAuvMessageScript] this.proxy.timeToPrepareMessage() complete:' + this.proxy.newMessage[0]);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'].initialize();
    if (X3DJSON.nodeUtil("Scene","MasterDvdClock")) {
X3DJSON.nodeUtil("Scene","MasterDvdClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","MantaWaypointInterpolator")) {
X3DJSON.nodeUtil("Scene","MantaWaypointInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","MantaWaypointInterpolator")) {
X3DJSON.nodeUtil("Scene","MantaWaypointInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","MantaWaypointInterpolator")) {
X3DJSON.nodeUtil("Scene","MantaWaypointInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","MantaWaypointInterpolator")) {
X3DJSON.nodeUtil("Scene","MantaWaypointInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","SolarAuvMessageSendClock")) {
X3DJSON.nodeUtil("Scene","SolarAuvMessageSendClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'].timeToPrepareMessage(X3DJSON.nodeUtil("Scene","SolarAuvMessageSendClock","cycleTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'].timeToPrepareMessage(X3DJSON.nodeUtil("Scene","SolarAuvMessageSendClock","cycleTime"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript']['ACTION']['newMessage'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript']['ACTION']['newMessage'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript']['ACTION']['newMessage'].push(function(property, value) {
		if (property === 'newMessage') {
			X3DJSON.nodeUtil("Scene","BuoyCommsGrid","textMessage",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'].newMessage === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'].newMessage() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'].newMessage, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BuoyCommsGrid","textMessage",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'].newMessage === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'].newMessage() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'].newMessage, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript']['ACTION']['sendMessage'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript']['ACTION']['sendMessage'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript']['ACTION']['sendMessage'].push(function(property, value) {
		if (property === 'sendMessage') {
			X3DJSON.nodeUtil("Scene","BuoyCommsGrid","sendMessage",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'].sendMessage === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'].sendMessage() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'].sendMessage, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BuoyCommsGrid","sendMessage",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'].sendMessage === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'].sendMessage() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'].sendMessage, __eventTime);
    if (X3DJSON.nodeUtil("Scene","MasterDvdClock")) {
X3DJSON.nodeUtil("Scene","MasterDvdClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","SolarAuvWaypointInterpolator")) {
X3DJSON.nodeUtil("Scene","SolarAuvWaypointInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","SolarAuvWaypointInterpolator")) {
X3DJSON.nodeUtil("Scene","SolarAuvWaypointInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","SolarAuvWaypointInterpolator")) {
X3DJSON.nodeUtil("Scene","SolarAuvWaypointInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'].timeToPrepareMessage(X3DJSON.nodeUtil("Scene","SolarAuvMessageSendClock","cycleTime"), __eventTime);
			X3DJSON.nodeUtil("Scene","BuoyCommsGrid","textMessage",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'].newMessage === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'].newMessage() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'].newMessage, __eventTime);
			X3DJSON.nodeUtil("Scene","BuoyCommsGrid","sendMessage",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'].sendMessage === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'].sendMessage() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridExample.json']['SolarAuvMessageScript'].sendMessage, __eventTime);