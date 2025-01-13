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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'] = function() {
	this.set_bindMaster = function (value) {
		try {
			this.proxy.bindMaster = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting bindMaster '+e);
			console.error('Problems setting bindMaster',e);
		}
	};
	this.bindMaster_changed = function () {
		var value = this.bindMaster;
		return value;
	};
	try {
		this.bindMaster = new SFBool();
	} catch (e) {
		console.log('Problems setting bindMaster '+e);
		console.error('Problems setting bindMaster',e);
	}
	this.set_bindSlave = function (value) {
		try {
			this.proxy.bindSlave = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting bindSlave '+e);
			console.error('Problems setting bindSlave',e);
		}
	};
	this.bindSlave_changed = function () {
		var value = this.bindSlave;
		return value;
	};
	try {
		this.bindSlave = new SFBool();
	} catch (e) {
		console.log('Problems setting bindSlave '+e);
		console.error('Problems setting bindSlave',e);
	}
	this.set_user_translation = function (value) {
		try {
			this.proxy.user_translation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting user_translation '+e);
			console.error('Problems setting user_translation',e);
		}
	};
	this.user_translation_changed = function () {
		var value = this.user_translation;
		return value;
	};
	try {
		this.user_translation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting user_translation '+e);
		console.error('Problems setting user_translation',e);
	}
	this.set_user_rotation = function (value) {
		try {
			this.proxy.user_rotation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting user_rotation '+e);
			console.error('Problems setting user_rotation',e);
		}
	};
	this.user_rotation_changed = function () {
		var value = this.user_rotation;
		return value;
	};
	try {
		this.user_rotation = new SFRotation();
	} catch (e) {
		console.log('Problems setting user_rotation '+e);
		console.error('Problems setting user_rotation',e);
	}
	this.set_sharedTranslation = function (value) {
		try {
			this.proxy.sharedTranslation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sharedTranslation '+e);
			console.error('Problems setting sharedTranslation',e);
		}
	};
	this.sharedTranslation_changed = function () {
		var value = this.sharedTranslation;
		return value;
	};
	try {
		this.sharedTranslation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting sharedTranslation '+e);
		console.error('Problems setting sharedTranslation',e);
	}
	this.set_sharedRotation = function (value) {
		try {
			this.proxy.sharedRotation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sharedRotation '+e);
			console.error('Problems setting sharedRotation',e);
		}
	};
	this.sharedRotation_changed = function () {
		var value = this.sharedRotation;
		return value;
	};
	try {
		this.sharedRotation = new SFRotation();
	} catch (e) {
		console.log('Problems setting sharedRotation '+e);
		console.error('Problems setting sharedRotation',e);
	}
	this.set_networkMode = function (value) {
		try {
			this.proxy.networkMode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting networkMode '+e);
			console.error('Problems setting networkMode',e);
		}
	};
	this.networkMode_changed = function () {
		var value = this.networkMode;
		return value;
	};
	try {
		this.networkMode = new SFString();
	} catch (e) {
		console.log('Problems setting networkMode '+e);
		console.error('Problems setting networkMode',e);
	}
	this.set_isMaster = function (value) {
		try {
			this.proxy.isMaster = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isMaster '+e);
			console.error('Problems setting isMaster',e);
		}
	};
	this.isMaster_changed = function () {
		var value = this.isMaster;
		return value;
	};
	try {
		this.isMaster = new SFBool(false);
	} catch (e) {
		console.log('Problems setting isMaster '+e);
		console.error('Problems setting isMaster',e);
	}
	this.set_isSlave = function (value) {
		try {
			this.proxy.isSlave = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isSlave '+e);
			console.error('Problems setting isSlave',e);
		}
	};
	this.isSlave_changed = function () {
		var value = this.isSlave;
		return value;
	};
	try {
		this.isSlave = new SFBool(false);
	} catch (e) {
		console.log('Problems setting isSlave '+e);
		console.error('Problems setting isSlave',e);
	}


ecmascript:

	this.bindMaster = function (value)
{
	console.error('[NetworkedCamera] Master viewpoint bound');
	this.proxy.isMaster = value;
	if (this.proxy.isMaster) this.proxy.networkMode ='networkWriter';
}
;

	this.bindSlave = function (value)
{
	console.error('[NetworkedCamera] Slave viewpoint bound');
	this.proxy.isSlave = value;
	if (this.proxy.isSlave) this.proxy.networkMode ='networkReader';
}
;

	this.user_translation = function (value)
{
	if (this.proxy.isMaster) this.proxy.sharedTranslation = value;
}
;

	this.user_rotation = function (value)
{
	if (this.proxy.isMaster) this.proxy.sharedRotation = value;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].initialize();
    if (X3DJSON.nodeUtil("Scene","MasterViewpoint")) {
X3DJSON.nodeUtil("Scene","MasterViewpoint").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].bindMaster(X3DJSON.nodeUtil("Scene","MasterViewpoint","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].bindMaster(X3DJSON.nodeUtil("Scene","MasterViewpoint","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","MasterViewpoint")) {
X3DJSON.nodeUtil("Scene","MasterViewpoint").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","SlavedViewpoint")) {
X3DJSON.nodeUtil("Scene","SlavedViewpoint").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].bindSlave(X3DJSON.nodeUtil("Scene","SlavedViewpoint","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].bindSlave(X3DJSON.nodeUtil("Scene","SlavedViewpoint","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","WorldProximitySensor")) {
X3DJSON.nodeUtil("Scene","WorldProximitySensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].user_translation(X3DJSON.nodeUtil("Scene","WorldProximitySensor","position"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].user_translation(X3DJSON.nodeUtil("Scene","WorldProximitySensor","position"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","WorldProximitySensor")) {
X3DJSON.nodeUtil("Scene","WorldProximitySensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].user_rotation(X3DJSON.nodeUtil("Scene","WorldProximitySensor","orientation"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].user_rotation(X3DJSON.nodeUtil("Scene","WorldProximitySensor","orientation"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript']['ACTION']['sharedTranslation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript']['ACTION']['sharedTranslation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript']['ACTION']['sharedTranslation'].push(function(property, value) {
		if (property === 'sharedTranslation') {
			X3DJSON.nodeUtil("Scene","CameraEspduTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].sharedTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].sharedTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].sharedTranslation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","CameraEspduTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].sharedTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].sharedTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].sharedTranslation, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript']['ACTION']['sharedRotation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript']['ACTION']['sharedRotation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript']['ACTION']['sharedRotation'].push(function(property, value) {
		if (property === 'sharedRotation') {
			X3DJSON.nodeUtil("Scene","CameraEspduTransform","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].sharedRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].sharedRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].sharedRotation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","CameraEspduTransform","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].sharedRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].sharedRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].sharedRotation, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript']['ACTION']['networkMode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript']['ACTION']['networkMode'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript']['ACTION']['networkMode'].push(function(property, value) {
		if (property === 'networkMode') {
			X3DJSON.nodeUtil("Scene","CameraEspduTransform","networkMode",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].networkMode === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].networkMode() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].networkMode, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","CameraEspduTransform","networkMode",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].networkMode === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].networkMode() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].networkMode, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].bindMaster(X3DJSON.nodeUtil("Scene","MasterViewpoint","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].bindSlave(X3DJSON.nodeUtil("Scene","SlavedViewpoint","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].user_translation(X3DJSON.nodeUtil("Scene","WorldProximitySensor","position"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].user_rotation(X3DJSON.nodeUtil("Scene","WorldProximitySensor","orientation"), __eventTime);
			X3DJSON.nodeUtil("Scene","CameraEspduTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].sharedTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].sharedTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].sharedTranslation, __eventTime);
			X3DJSON.nodeUtil("Scene","CameraEspduTransform","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].sharedRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].sharedRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].sharedRotation, __eventTime);
			X3DJSON.nodeUtil("Scene","CameraEspduTransform","networkMode",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].networkMode === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].networkMode() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/NetworkedCamera.json']['ViewpointControlScript'].networkMode, __eventTime);