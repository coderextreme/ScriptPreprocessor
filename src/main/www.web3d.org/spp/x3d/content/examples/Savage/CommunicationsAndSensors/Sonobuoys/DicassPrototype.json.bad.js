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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'] = function() {
	this.set_ID = function (value) {
		try {
			this.proxy.ID = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ID '+e);
			console.error('Problems setting ID',e);
		}
	};
	this.ID_changed = function () {
		var value = this.ID;
		return value;
	};
	try {
		this.ID = new MFString();
	} catch (e) {
		console.log('Problems setting ID '+e);
		console.error('Problems setting ID',e);
	}
	this.set_version = function (value) {
		try {
			this.proxy.version = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting version '+e);
			console.error('Problems setting version',e);
		}
	};
	this.version_changed = function () {
		var value = this.version;
		return value;
	};
	try {
		this.version = new SFString();
	} catch (e) {
		console.log('Problems setting version '+e);
		console.error('Problems setting version',e);
	}
	this.set_initialPositionXZ = function (value) {
		try {
			this.proxy.initialPositionXZ = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting initialPositionXZ '+e);
			console.error('Problems setting initialPositionXZ',e);
		}
	};
	this.initialPositionXZ_changed = function () {
		var value = this.initialPositionXZ;
		return value;
	};
	try {
		this.initialPositionXZ = new SFVec2f();
	} catch (e) {
		console.log('Problems setting initialPositionXZ '+e);
		console.error('Problems setting initialPositionXZ',e);
	}
	this.set_orderedPositionXZ = function (value) {
		try {
			this.proxy.orderedPositionXZ = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting orderedPositionXZ '+e);
			console.error('Problems setting orderedPositionXZ',e);
		}
	};
	this.orderedPositionXZ_changed = function () {
		var value = this.orderedPositionXZ;
		return value;
	};
	try {
		this.orderedPositionXZ = new SFVec2f();
	} catch (e) {
		console.log('Problems setting orderedPositionXZ '+e);
		console.error('Problems setting orderedPositionXZ',e);
	}
	this.set_initialDepth = function (value) {
		try {
			this.proxy.initialDepth = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting initialDepth '+e);
			console.error('Problems setting initialDepth',e);
		}
	};
	this.initialDepth_changed = function () {
		var value = this.initialDepth;
		return value;
	};
	try {
		this.initialDepth = new SFFloat();
	} catch (e) {
		console.log('Problems setting initialDepth '+e);
		console.error('Problems setting initialDepth',e);
	}
	this.set_orderedDepth = function (value) {
		try {
			this.proxy.orderedDepth = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting orderedDepth '+e);
			console.error('Problems setting orderedDepth',e);
		}
	};
	this.orderedDepth_changed = function () {
		var value = this.orderedDepth;
		return value;
	};
	try {
		this.orderedDepth = new SFFloat();
	} catch (e) {
		console.log('Problems setting orderedDepth '+e);
		console.error('Problems setting orderedDepth',e);
	}
	this.set_newLocation = function (value) {
		try {
			this.proxy.newLocation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting newLocation '+e);
			console.error('Problems setting newLocation',e);
		}
	};
	this.newLocation_changed = function () {
		var value = this.newLocation;
		return value;
	};
	try {
		this.newLocation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting newLocation '+e);
		console.error('Problems setting newLocation',e);
	}
	this.set_newBuoyLabel = function (value) {
		try {
			this.proxy.newBuoyLabel = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting newBuoyLabel '+e);
			console.error('Problems setting newBuoyLabel',e);
		}
	};
	this.newBuoyLabel_changed = function () {
		var value = this.newBuoyLabel;
		return value;
	};
	try {
		this.newBuoyLabel = new MFString();
	} catch (e) {
		console.log('Problems setting newBuoyLabel '+e);
		console.error('Problems setting newBuoyLabel',e);
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
		this.traceEnabled = new SFBool(true);
	} catch (e) {
		console.log('Problems setting traceEnabled '+e);
		console.error('Problems setting traceEnabled',e);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['ViewpointControl'] = function() {
	this.set_ID = function (value) {
		try {
			this.proxy.ID = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ID '+e);
			console.error('Problems setting ID',e);
		}
	};
	this.ID_changed = function () {
		var value = this.ID;
		return value;
	};
	try {
		this.ID = new MFString();
	} catch (e) {
		console.log('Problems setting ID '+e);
		console.error('Problems setting ID',e);
	}
	this.set_LocalViewpoint = function (value) {
		try {
			this.proxy.LocalViewpoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting LocalViewpoint '+e);
			console.error('Problems setting LocalViewpoint',e);
		}
	};
	this.LocalViewpoint_changed = function () {
		var value = this.LocalViewpoint;
		return value;
	};
	try {
		this.LocalViewpoint = X3DJSON.nodeUtil("Scene","BuoyViewpoint");
	} catch (e) {
		console.log('Problems setting LocalViewpoint '+e);
		console.error('Problems setting LocalViewpoint',e);
	}
	this.set_viewpointDescription = function (value) {
		try {
			this.proxy.viewpointDescription = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting viewpointDescription '+e);
			console.error('Problems setting viewpointDescription',e);
		}
	};
	this.viewpointDescription_changed = function () {
		var value = this.viewpointDescription;
		return value;
	};
	try {
		this.viewpointDescription = new SFString();
	} catch (e) {
		console.log('Problems setting viewpointDescription '+e);
		console.error('Problems setting viewpointDescription',e);
	}
	this.set_bindViewpoint = function (value) {
		try {
			this.proxy.bindViewpoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting bindViewpoint '+e);
			console.error('Problems setting bindViewpoint',e);
		}
	};
	this.bindViewpoint_changed = function () {
		var value = this.bindViewpoint;
		return value;
	};
	try {
		this.bindViewpoint = new SFBool();
	} catch (e) {
		console.log('Problems setting bindViewpoint '+e);
		console.error('Problems setting bindViewpoint',e);
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
		this.traceEnabled = new SFBool(true);
	} catch (e) {
		console.log('Problems setting traceEnabled '+e);
		console.error('Problems setting traceEnabled',e);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['ViewpointControl'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['ViewpointControl']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['ViewpointControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['ViewpointControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['ViewpointControl']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['ViewpointControl']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['ViewpointControl'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['ViewpointControl']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['ViewpointControl']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['ViewpointControl'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['ViewpointControl'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'] = function() {
	this.set_ID = function (value) {
		try {
			this.proxy.ID = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ID '+e);
			console.error('Problems setting ID',e);
		}
	};
	this.ID_changed = function () {
		var value = this.ID;
		return value;
	};
	try {
		this.ID = new MFString();
	} catch (e) {
		console.log('Problems setting ID '+e);
		console.error('Problems setting ID',e);
	}
	this.set_maxRange = function (value) {
		try {
			this.proxy.maxRange = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting maxRange '+e);
			console.error('Problems setting maxRange',e);
		}
	};
	this.maxRange_changed = function () {
		var value = this.maxRange;
		return value;
	};
	try {
		this.maxRange = new SFFloat();
	} catch (e) {
		console.log('Problems setting maxRange '+e);
		console.error('Problems setting maxRange',e);
	}
	this.set_soundSpeed = function (value) {
		try {
			this.proxy.soundSpeed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting soundSpeed '+e);
			console.error('Problems setting soundSpeed',e);
		}
	};
	this.soundSpeed_changed = function () {
		var value = this.soundSpeed;
		return value;
	};
	try {
		this.soundSpeed = new SFFloat();
	} catch (e) {
		console.log('Problems setting soundSpeed '+e);
		console.error('Problems setting soundSpeed',e);
	}
	this.set_pingDuration = function (value) {
		try {
			this.proxy.pingDuration = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting pingDuration '+e);
			console.error('Problems setting pingDuration',e);
		}
	};
	this.pingDuration_changed = function () {
		var value = this.pingDuration;
		return value;
	};
	try {
		this.pingDuration = new SFTime();
	} catch (e) {
		console.log('Problems setting pingDuration '+e);
		console.error('Problems setting pingDuration',e);
	}
	this.set_cycleInterval = function (value) {
		try {
			this.proxy.cycleInterval = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cycleInterval '+e);
			console.error('Problems setting cycleInterval',e);
		}
	};
	this.cycleInterval_changed = function () {
		var value = this.cycleInterval;
		return value;
	};
	try {
		this.cycleInterval = new SFTime();
	} catch (e) {
		console.log('Problems setting cycleInterval '+e);
		console.error('Problems setting cycleInterval',e);
	}
	this.set_keyValueRangeInterpolator = function (value) {
		try {
			this.proxy.keyValueRangeInterpolator = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting keyValueRangeInterpolator '+e);
			console.error('Problems setting keyValueRangeInterpolator',e);
		}
	};
	this.keyValueRangeInterpolator_changed = function () {
		var value = this.keyValueRangeInterpolator;
		return value;
	};
	try {
		this.keyValueRangeInterpolator = new MFFloat();
	} catch (e) {
		console.log('Problems setting keyValueRangeInterpolator '+e);
		console.error('Problems setting keyValueRangeInterpolator',e);
	}
	this.set_initializeHemisphereRange = function (value) {
		try {
			this.proxy.initializeHemisphereRange = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting initializeHemisphereRange '+e);
			console.error('Problems setting initializeHemisphereRange',e);
		}
	};
	this.initializeHemisphereRange_changed = function () {
		var value = this.initializeHemisphereRange;
		return value;
	};
	try {
		this.initializeHemisphereRange = new SFFloat();
	} catch (e) {
		console.log('Problems setting initializeHemisphereRange '+e);
		console.error('Problems setting initializeHemisphereRange',e);
	}
	this.set_startPing = function (value) {
		try {
			this.proxy.startPing = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startPing '+e);
			console.error('Problems setting startPing',e);
		}
	};
	this.startPing_changed = function () {
		var value = this.startPing;
		return value;
	};
	try {
		this.startPing = new SFBool();
	} catch (e) {
		console.log('Problems setting startPing '+e);
		console.error('Problems setting startPing',e);
	}
	this.set_startContinuousPings = function (value) {
		try {
			this.proxy.startContinuousPings = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startContinuousPings '+e);
			console.error('Problems setting startContinuousPings',e);
		}
	};
	this.startContinuousPings_changed = function () {
		var value = this.startContinuousPings;
		return value;
	};
	try {
		this.startContinuousPings = new SFBool();
	} catch (e) {
		console.log('Problems setting startContinuousPings '+e);
		console.error('Problems setting startContinuousPings',e);
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
		this.startTime = new SFTime();
	} catch (e) {
		console.log('Problems setting startTime '+e);
		console.error('Problems setting startTime',e);
	}
	this.set_loop = function (value) {
		try {
			this.proxy.loop = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting loop '+e);
			console.error('Problems setting loop',e);
		}
	};
	this.loop_changed = function () {
		var value = this.loop;
		return value;
	};
	try {
		this.loop = new SFBool();
	} catch (e) {
		console.log('Problems setting loop '+e);
		console.error('Problems setting loop',e);
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
		this.traceEnabled = new SFBool(true);
	} catch (e) {
		console.log('Problems setting traceEnabled '+e);
		console.error('Problems setting traceEnabled',e);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript']['ACTION']['newLocation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript']['ACTION']['newLocation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript']['ACTION']['newLocation'].push(function(property, value) {
		if (property === 'newLocation') {
			X3DJSON.nodeUtil("Scene","BuoyPosition","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'].newLocation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'].newLocation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'].newLocation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BuoyPosition","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'].newLocation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'].newLocation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'].newLocation, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript']['ACTION']['newBuoyLabel'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript']['ACTION']['newBuoyLabel'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript']['ACTION']['newBuoyLabel'].push(function(property, value) {
		if (property === 'newBuoyLabel') {
			X3DJSON.nodeUtil("Scene","BuoyLabel","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'].newBuoyLabel === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'].newBuoyLabel() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'].newBuoyLabel, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BuoyLabel","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'].newBuoyLabel === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'].newBuoyLabel() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'].newBuoyLabel, __eventTime);
    if (X3DJSON.nodeUtil("Scene","TextTouch")) {
X3DJSON.nodeUtil("Scene","TextTouch").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['ViewpointControl'].bindViewpoint(X3DJSON.nodeUtil("Scene","TextTouch","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['ViewpointControl'].bindViewpoint(X3DJSON.nodeUtil("Scene","TextTouch","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","PingClock")) {
X3DJSON.nodeUtil("Scene","PingClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RangeInterpolator")) {
X3DJSON.nodeUtil("Scene","RangeInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PingClock")) {
X3DJSON.nodeUtil("Scene","PingClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TransparencyInterpolator")) {
X3DJSON.nodeUtil("Scene","TransparencyInterpolator").addEventListener('outputchange', function(event) {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl']['ACTION']['cycleInterval'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl']['ACTION']['cycleInterval'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl']['ACTION']['cycleInterval'].push(function(property, value) {
		if (property === 'cycleInterval') {
			X3DJSON.nodeUtil("Scene","PingClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].cycleInterval === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].cycleInterval() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].cycleInterval, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PingClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].cycleInterval === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].cycleInterval() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].cycleInterval, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl']['ACTION']['keyValueRangeInterpolator'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl']['ACTION']['keyValueRangeInterpolator'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl']['ACTION']['keyValueRangeInterpolator'].push(function(property, value) {
		if (property === 'keyValueRangeInterpolator') {
			X3DJSON.nodeUtil("Scene","RangeInterpolator","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].keyValueRangeInterpolator === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].keyValueRangeInterpolator() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].keyValueRangeInterpolator, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RangeInterpolator","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].keyValueRangeInterpolator === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].keyValueRangeInterpolator() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].keyValueRangeInterpolator, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl']['ACTION']['initializeHemisphereRange'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl']['ACTION']['initializeHemisphereRange'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl']['ACTION']['initializeHemisphereRange'].push(function(property, value) {
		if (property === 'initializeHemisphereRange') {
			X3DJSON.nodeUtil("Scene","SonarBeamHemisphere","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].initializeHemisphereRange === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].initializeHemisphereRange() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].initializeHemisphereRange, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SonarBeamHemisphere","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].initializeHemisphereRange === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].initializeHemisphereRange() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].initializeHemisphereRange, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl']['ACTION']['loop'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl']['ACTION']['loop'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl']['ACTION']['loop'].push(function(property, value) {
		if (property === 'loop') {
			X3DJSON.nodeUtil("Scene","PingClock","loop",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].loop === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].loop() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].loop, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PingClock","loop",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].loop === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].loop() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].loop, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl']['ACTION']['startTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl']['ACTION']['startTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl']['ACTION']['startTime'].push(function(property, value) {
		if (property === 'startTime') {
			X3DJSON.nodeUtil("Scene","PingClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].startTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].startTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].startTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PingClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].startTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].startTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].startTime, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl']['ACTION']['startTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl']['ACTION']['startTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl']['ACTION']['startTime'].push(function(property, value) {
		if (property === 'startTime') {
			X3DJSON.nodeUtil("Scene","PingAudioClip","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].startTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].startTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].startTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PingAudioClip","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].startTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].startTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].startTime, __eventTime);
    if (X3DJSON.nodeUtil("Scene","PingClock")) {
X3DJSON.nodeUtil("Scene","PingClock").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON.nodeUtil("Scene","BuoyPosition","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'].newLocation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'].newLocation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'].newLocation, __eventTime);
			X3DJSON.nodeUtil("Scene","BuoyLabel","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'].newBuoyLabel === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'].newBuoyLabel() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['LocationScript'].newBuoyLabel, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['ViewpointControl'].bindViewpoint(X3DJSON.nodeUtil("Scene","TextTouch","isActive"), __eventTime);
			X3DJSON.nodeUtil("Scene","PingClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].cycleInterval === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].cycleInterval() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].cycleInterval, __eventTime);
			X3DJSON.nodeUtil("Scene","RangeInterpolator","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].keyValueRangeInterpolator === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].keyValueRangeInterpolator() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].keyValueRangeInterpolator, __eventTime);
			X3DJSON.nodeUtil("Scene","SonarBeamHemisphere","range",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].initializeHemisphereRange === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].initializeHemisphereRange() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].initializeHemisphereRange, __eventTime);
			X3DJSON.nodeUtil("Scene","PingClock","loop",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].loop === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].loop() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].loop, __eventTime);
			X3DJSON.nodeUtil("Scene","PingClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].startTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].startTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].startTime, __eventTime);
			X3DJSON.nodeUtil("Scene","PingAudioClip","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].startTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].startTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/Sonobuoys/DicassPrototype.json']['PingControl'].startTime, __eventTime);