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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['EspduScriptNode'] = function() {
	this.set_geoCoords = function (value) {
		try {
			this.proxy.geoCoords = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting geoCoords '+e);
			console.error('Problems setting geoCoords',e);
		}
	};
	this.geoCoords_changed = function () {
		var value = this.geoCoords;
		return value;
	};
	try {
		this.geoCoords = undefined;
	} catch (e) {
		console.log('Problems setting geoCoords '+e);
		console.error('Problems setting geoCoords',e);
	}
	this.set_traceJava = function (value) {
		try {
			this.proxy.traceJava = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting traceJava '+e);
			console.error('Problems setting traceJava',e);
		}
	};
	this.traceJava_changed = function () {
		var value = this.traceJava;
		return value;
	};
	try {
		this.traceJava = new SFBool(false);
	} catch (e) {
		console.log('Problems setting traceJava '+e);
		console.error('Problems setting traceJava',e);
	}
	this.set_update = function (value) {
		try {
			this.proxy.update = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting update '+e);
			console.error('Problems setting update',e);
		}
	};
	this.update_changed = function () {
		var value = this.update;
		return value;
	};
	try {
		this.update = new SFTime();
	} catch (e) {
		console.log('Problems setting update '+e);
		console.error('Problems setting update',e);
	}
	this.set_transformNode = function (value) {
		try {
			this.proxy.transformNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transformNode '+e);
			console.error('Problems setting transformNode',e);
		}
	};
	this.transformNode_changed = function () {
		var value = this.transformNode;
		return value;
	};
	try {
		this.transformNode = X3DJSON.nodeUtil("Scene","DisTransformNode");
	} catch (e) {
		console.log('Problems setting transformNode '+e);
		console.error('Problems setting transformNode',e);
	}
	this.set_markingNode = function (value) {
		try {
			this.proxy.markingNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting markingNode '+e);
			console.error('Problems setting markingNode',e);
		}
	};
	this.markingNode_changed = function () {
		var value = this.markingNode;
		return value;
	};
	try {
		this.markingNode = X3DJSON.nodeUtil("Scene","MarkingState");
	} catch (e) {
		console.log('Problems setting markingNode '+e);
		console.error('Problems setting markingNode',e);
	}
	this.set_siteIdNode = function (value) {
		try {
			this.proxy.siteIdNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting siteIdNode '+e);
			console.error('Problems setting siteIdNode',e);
		}
	};
	this.siteIdNode_changed = function () {
		var value = this.siteIdNode;
		return value;
	};
	try {
		this.siteIdNode = X3DJSON.nodeUtil("Scene","SiteIdState");
	} catch (e) {
		console.log('Problems setting siteIdNode '+e);
		console.error('Problems setting siteIdNode',e);
	}
	this.set_applicationIdNode = function (value) {
		try {
			this.proxy.applicationIdNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting applicationIdNode '+e);
			console.error('Problems setting applicationIdNode',e);
		}
	};
	this.applicationIdNode_changed = function () {
		var value = this.applicationIdNode;
		return value;
	};
	try {
		this.applicationIdNode = X3DJSON.nodeUtil("Scene","ApplicationIdState");
	} catch (e) {
		console.log('Problems setting applicationIdNode '+e);
		console.error('Problems setting applicationIdNode',e);
	}
	this.set_entityIdNode = function (value) {
		try {
			this.proxy.entityIdNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting entityIdNode '+e);
			console.error('Problems setting entityIdNode',e);
		}
	};
	this.entityIdNode_changed = function () {
		var value = this.entityIdNode;
		return value;
	};
	try {
		this.entityIdNode = X3DJSON.nodeUtil("Scene","EntityIdState");
	} catch (e) {
		console.log('Problems setting entityIdNode '+e);
		console.error('Problems setting entityIdNode',e);
	}
	this.set_addressNode = function (value) {
		try {
			this.proxy.addressNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting addressNode '+e);
			console.error('Problems setting addressNode',e);
		}
	};
	this.addressNode_changed = function () {
		var value = this.addressNode;
		return value;
	};
	try {
		this.addressNode = X3DJSON.nodeUtil("Scene","AddressHolder");
	} catch (e) {
		console.log('Problems setting addressNode '+e);
		console.error('Problems setting addressNode',e);
	}
	this.set_multicastAddressNode = function (value) {
		try {
			this.proxy.multicastAddressNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting multicastAddressNode '+e);
			console.error('Problems setting multicastAddressNode',e);
		}
	};
	this.multicastAddressNode_changed = function () {
		var value = this.multicastAddressNode;
		return value;
	};
	try {
		this.multicastAddressNode = X3DJSON.nodeUtil("Scene","MulticastAddressHolder");
	} catch (e) {
		console.log('Problems setting multicastAddressNode '+e);
		console.error('Problems setting multicastAddressNode',e);
	}
	this.set_portNode = function (value) {
		try {
			this.proxy.portNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting portNode '+e);
			console.error('Problems setting portNode',e);
		}
	};
	this.portNode_changed = function () {
		var value = this.portNode;
		return value;
	};
	try {
		this.portNode = X3DJSON.nodeUtil("Scene","PortHolder");
	} catch (e) {
		console.log('Problems setting portNode '+e);
		console.error('Problems setting portNode',e);
	}
	this.set_multicastPortNode = function (value) {
		try {
			this.proxy.multicastPortNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting multicastPortNode '+e);
			console.error('Problems setting multicastPortNode',e);
		}
	};
	this.multicastPortNode_changed = function () {
		var value = this.multicastPortNode;
		return value;
	};
	try {
		this.multicastPortNode = X3DJSON.nodeUtil("Scene","MulticastPortHolder");
	} catch (e) {
		console.log('Problems setting multicastPortNode '+e);
		console.error('Problems setting multicastPortNode',e);
	}
	this.set_networkModeNode = function (value) {
		try {
			this.proxy.networkModeNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting networkModeNode '+e);
			console.error('Problems setting networkModeNode',e);
		}
	};
	this.networkModeNode_changed = function () {
		var value = this.networkModeNode;
		return value;
	};
	try {
		this.networkModeNode = X3DJSON.nodeUtil("Scene","NetworkModeState");
	} catch (e) {
		console.log('Problems setting networkModeNode '+e);
		console.error('Problems setting networkModeNode',e);
	}
	this.set_readWriteIntervalNode = function (value) {
		try {
			this.proxy.readWriteIntervalNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting readWriteIntervalNode '+e);
			console.error('Problems setting readWriteIntervalNode',e);
		}
	};
	this.readWriteIntervalNode_changed = function () {
		var value = this.readWriteIntervalNode;
		return value;
	};
	try {
		this.readWriteIntervalNode = X3DJSON.nodeUtil("Scene","ReadWriteIntervalState");
	} catch (e) {
		console.log('Problems setting readWriteIntervalNode '+e);
		console.error('Problems setting readWriteIntervalNode',e);
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
	this.set_timestamp = function (value) {
		try {
			this.proxy.timestamp = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting timestamp '+e);
			console.error('Problems setting timestamp',e);
		}
	};
	this.timestamp_changed = function () {
		var value = this.timestamp;
		return value;
	};
	try {
		this.timestamp = new SFTime();
	} catch (e) {
		console.log('Problems setting timestamp '+e);
		console.error('Problems setting timestamp',e);
	}
	this.set_rtpHeaderExpected = function (value) {
		try {
			this.proxy.rtpHeaderExpected = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rtpHeaderExpected '+e);
			console.error('Problems setting rtpHeaderExpected',e);
		}
	};
	this.rtpHeaderExpected_changed = function () {
		var value = this.rtpHeaderExpected;
		return value;
	};
	try {
		this.rtpHeaderExpected = new SFBool();
	} catch (e) {
		console.log('Problems setting rtpHeaderExpected '+e);
		console.error('Problems setting rtpHeaderExpected',e);
	}
	this.set_isRtpHeaderHeard = function (value) {
		try {
			this.proxy.isRtpHeaderHeard = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isRtpHeaderHeard '+e);
			console.error('Problems setting isRtpHeaderHeard',e);
		}
	};
	this.isRtpHeaderHeard_changed = function () {
		var value = this.isRtpHeaderHeard;
		return value;
	};
	try {
		this.isRtpHeaderHeard = new SFBool();
	} catch (e) {
		console.log('Problems setting isRtpHeaderHeard '+e);
		console.error('Problems setting isRtpHeaderHeard',e);
	}
	this.set_isCollided = function (value) {
		try {
			this.proxy.isCollided = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isCollided '+e);
			console.error('Problems setting isCollided',e);
		}
	};
	this.isCollided_changed = function () {
		var value = this.isCollided;
		return value;
	};
	try {
		this.isCollided = new SFBool();
	} catch (e) {
		console.log('Problems setting isCollided '+e);
		console.error('Problems setting isCollided',e);
	}
	this.set_collideTime = function (value) {
		try {
			this.proxy.collideTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting collideTime '+e);
			console.error('Problems setting collideTime',e);
		}
	};
	this.collideTime_changed = function () {
		var value = this.collideTime;
		return value;
	};
	try {
		this.collideTime = new SFTime();
	} catch (e) {
		console.log('Problems setting collideTime '+e);
		console.error('Problems setting collideTime',e);
	}
	this.set_isDetonated = function (value) {
		try {
			this.proxy.isDetonated = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isDetonated '+e);
			console.error('Problems setting isDetonated',e);
		}
	};
	this.isDetonated_changed = function () {
		var value = this.isDetonated;
		return value;
	};
	try {
		this.isDetonated = new SFBool();
	} catch (e) {
		console.log('Problems setting isDetonated '+e);
		console.error('Problems setting isDetonated',e);
	}
	this.set_detonateTime = function (value) {
		try {
			this.proxy.detonateTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting detonateTime '+e);
			console.error('Problems setting detonateTime',e);
		}
	};
	this.detonateTime_changed = function () {
		var value = this.detonateTime;
		return value;
	};
	try {
		this.detonateTime = new SFTime();
	} catch (e) {
		console.log('Problems setting detonateTime '+e);
		console.error('Problems setting detonateTime',e);
	}
	this.set_firedTime = function (value) {
		try {
			this.proxy.firedTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting firedTime '+e);
			console.error('Problems setting firedTime',e);
		}
	};
	this.firedTime_changed = function () {
		var value = this.firedTime;
		return value;
	};
	try {
		this.firedTime = new SFTime();
	} catch (e) {
		console.log('Problems setting firedTime '+e);
		console.error('Problems setting firedTime',e);
	}
	this.set_munitionPointNode = function (value) {
		try {
			this.proxy.munitionPointNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting munitionPointNode '+e);
			console.error('Problems setting munitionPointNode',e);
		}
	};
	this.munitionPointNode_changed = function () {
		var value = this.munitionPointNode;
		return value;
	};
	try {
		this.munitionPointNode = X3DJSON.nodeUtil("Scene","MunitionPointNode");
	} catch (e) {
		console.log('Problems setting munitionPointNode '+e);
		console.error('Problems setting munitionPointNode',e);
	}
	this.set_articulationParameterCountNode = function (value) {
		try {
			this.proxy.articulationParameterCountNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting articulationParameterCountNode '+e);
			console.error('Problems setting articulationParameterCountNode',e);
		}
	};
	this.articulationParameterCountNode_changed = function () {
		var value = this.articulationParameterCountNode;
		return value;
	};
	try {
		this.articulationParameterCountNode = X3DJSON.nodeUtil("Scene","ArticulationParameterCountHolder");
	} catch (e) {
		console.log('Problems setting articulationParameterCountNode '+e);
		console.error('Problems setting articulationParameterCountNode',e);
	}
	this.set_articulationParameterArrayNode = function (value) {
		try {
			this.proxy.articulationParameterArrayNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting articulationParameterArrayNode '+e);
			console.error('Problems setting articulationParameterArrayNode',e);
		}
	};
	this.articulationParameterArrayNode_changed = function () {
		var value = this.articulationParameterArrayNode;
		return value;
	};
	try {
		this.articulationParameterArrayNode = X3DJSON.nodeUtil("Scene","ArticulationParameterArrayHolder");
	} catch (e) {
		console.log('Problems setting articulationParameterArrayNode '+e);
		console.error('Problems setting articulationParameterArrayNode',e);
	}
	this.set_articulationParameterValue0 = function (value) {
		try {
			this.proxy.articulationParameterValue0 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting articulationParameterValue0 '+e);
			console.error('Problems setting articulationParameterValue0',e);
		}
	};
	this.articulationParameterValue0_changed = function () {
		var value = this.articulationParameterValue0;
		return value;
	};
	try {
		this.articulationParameterValue0 = undefined;
	} catch (e) {
		console.log('Problems setting articulationParameterValue0 '+e);
		console.error('Problems setting articulationParameterValue0',e);
	}
	this.set_articulationParameterValue1 = function (value) {
		try {
			this.proxy.articulationParameterValue1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting articulationParameterValue1 '+e);
			console.error('Problems setting articulationParameterValue1',e);
		}
	};
	this.articulationParameterValue1_changed = function () {
		var value = this.articulationParameterValue1;
		return value;
	};
	try {
		this.articulationParameterValue1 = undefined;
	} catch (e) {
		console.log('Problems setting articulationParameterValue1 '+e);
		console.error('Problems setting articulationParameterValue1',e);
	}
	this.set_articulationParameterValue2 = function (value) {
		try {
			this.proxy.articulationParameterValue2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting articulationParameterValue2 '+e);
			console.error('Problems setting articulationParameterValue2',e);
		}
	};
	this.articulationParameterValue2_changed = function () {
		var value = this.articulationParameterValue2;
		return value;
	};
	try {
		this.articulationParameterValue2 = undefined;
	} catch (e) {
		console.log('Problems setting articulationParameterValue2 '+e);
		console.error('Problems setting articulationParameterValue2',e);
	}
	this.set_articulationParameterValue3 = function (value) {
		try {
			this.proxy.articulationParameterValue3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting articulationParameterValue3 '+e);
			console.error('Problems setting articulationParameterValue3',e);
		}
	};
	this.articulationParameterValue3_changed = function () {
		var value = this.articulationParameterValue3;
		return value;
	};
	try {
		this.articulationParameterValue3 = undefined;
	} catch (e) {
		console.log('Problems setting articulationParameterValue3 '+e);
		console.error('Problems setting articulationParameterValue3',e);
	}
	this.set_articulationParameterValue4 = function (value) {
		try {
			this.proxy.articulationParameterValue4 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting articulationParameterValue4 '+e);
			console.error('Problems setting articulationParameterValue4',e);
		}
	};
	this.articulationParameterValue4_changed = function () {
		var value = this.articulationParameterValue4;
		return value;
	};
	try {
		this.articulationParameterValue4 = undefined;
	} catch (e) {
		console.log('Problems setting articulationParameterValue4 '+e);
		console.error('Problems setting articulationParameterValue4',e);
	}
	this.set_articulationParameterValue5 = function (value) {
		try {
			this.proxy.articulationParameterValue5 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting articulationParameterValue5 '+e);
			console.error('Problems setting articulationParameterValue5',e);
		}
	};
	this.articulationParameterValue5_changed = function () {
		var value = this.articulationParameterValue5;
		return value;
	};
	try {
		this.articulationParameterValue5 = undefined;
	} catch (e) {
		console.log('Problems setting articulationParameterValue5 '+e);
		console.error('Problems setting articulationParameterValue5',e);
	}
	this.set_articulationParameterValue6 = function (value) {
		try {
			this.proxy.articulationParameterValue6 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting articulationParameterValue6 '+e);
			console.error('Problems setting articulationParameterValue6',e);
		}
	};
	this.articulationParameterValue6_changed = function () {
		var value = this.articulationParameterValue6;
		return value;
	};
	try {
		this.articulationParameterValue6 = undefined;
	} catch (e) {
		console.log('Problems setting articulationParameterValue6 '+e);
		console.error('Problems setting articulationParameterValue6',e);
	}
	this.set_articulationParameterValue7 = function (value) {
		try {
			this.proxy.articulationParameterValue7 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting articulationParameterValue7 '+e);
			console.error('Problems setting articulationParameterValue7',e);
		}
	};
	this.articulationParameterValue7_changed = function () {
		var value = this.articulationParameterValue7;
		return value;
	};
	try {
		this.articulationParameterValue7 = undefined;
	} catch (e) {
		console.log('Problems setting articulationParameterValue7 '+e);
		console.error('Problems setting articulationParameterValue7',e);
	}
	this.set_articulationParameterValue0 = function (value) {
		try {
			this.proxy.articulationParameterValue0 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting articulationParameterValue0 '+e);
			console.error('Problems setting articulationParameterValue0',e);
		}
	};
	this.articulationParameterValue0_changed = function () {
		var value = this.articulationParameterValue0;
		return value;
	};
	try {
		this.articulationParameterValue0 = undefined;
	} catch (e) {
		console.log('Problems setting articulationParameterValue0 '+e);
		console.error('Problems setting articulationParameterValue0',e);
	}
	this.set_articulationParameterValue1 = function (value) {
		try {
			this.proxy.articulationParameterValue1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting articulationParameterValue1 '+e);
			console.error('Problems setting articulationParameterValue1',e);
		}
	};
	this.articulationParameterValue1_changed = function () {
		var value = this.articulationParameterValue1;
		return value;
	};
	try {
		this.articulationParameterValue1 = undefined;
	} catch (e) {
		console.log('Problems setting articulationParameterValue1 '+e);
		console.error('Problems setting articulationParameterValue1',e);
	}
	this.set_articulationParameterValue2 = function (value) {
		try {
			this.proxy.articulationParameterValue2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting articulationParameterValue2 '+e);
			console.error('Problems setting articulationParameterValue2',e);
		}
	};
	this.articulationParameterValue2_changed = function () {
		var value = this.articulationParameterValue2;
		return value;
	};
	try {
		this.articulationParameterValue2 = undefined;
	} catch (e) {
		console.log('Problems setting articulationParameterValue2 '+e);
		console.error('Problems setting articulationParameterValue2',e);
	}
	this.set_articulationParameterValue3 = function (value) {
		try {
			this.proxy.articulationParameterValue3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting articulationParameterValue3 '+e);
			console.error('Problems setting articulationParameterValue3',e);
		}
	};
	this.articulationParameterValue3_changed = function () {
		var value = this.articulationParameterValue3;
		return value;
	};
	try {
		this.articulationParameterValue3 = undefined;
	} catch (e) {
		console.log('Problems setting articulationParameterValue3 '+e);
		console.error('Problems setting articulationParameterValue3',e);
	}
	this.set_articulationParameterValue4 = function (value) {
		try {
			this.proxy.articulationParameterValue4 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting articulationParameterValue4 '+e);
			console.error('Problems setting articulationParameterValue4',e);
		}
	};
	this.articulationParameterValue4_changed = function () {
		var value = this.articulationParameterValue4;
		return value;
	};
	try {
		this.articulationParameterValue4 = undefined;
	} catch (e) {
		console.log('Problems setting articulationParameterValue4 '+e);
		console.error('Problems setting articulationParameterValue4',e);
	}
	this.set_articulationParameterValue5 = function (value) {
		try {
			this.proxy.articulationParameterValue5 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting articulationParameterValue5 '+e);
			console.error('Problems setting articulationParameterValue5',e);
		}
	};
	this.articulationParameterValue5_changed = function () {
		var value = this.articulationParameterValue5;
		return value;
	};
	try {
		this.articulationParameterValue5 = undefined;
	} catch (e) {
		console.log('Problems setting articulationParameterValue5 '+e);
		console.error('Problems setting articulationParameterValue5',e);
	}
	this.set_articulationParameterValue6 = function (value) {
		try {
			this.proxy.articulationParameterValue6 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting articulationParameterValue6 '+e);
			console.error('Problems setting articulationParameterValue6',e);
		}
	};
	this.articulationParameterValue6_changed = function () {
		var value = this.articulationParameterValue6;
		return value;
	};
	try {
		this.articulationParameterValue6 = undefined;
	} catch (e) {
		console.log('Problems setting articulationParameterValue6 '+e);
		console.error('Problems setting articulationParameterValue6',e);
	}
	this.set_articulationParameterValue7 = function (value) {
		try {
			this.proxy.articulationParameterValue7 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting articulationParameterValue7 '+e);
			console.error('Problems setting articulationParameterValue7',e);
		}
	};
	this.articulationParameterValue7_changed = function () {
		var value = this.articulationParameterValue7;
		return value;
	};
	try {
		this.articulationParameterValue7 = undefined;
	} catch (e) {
		console.log('Problems setting articulationParameterValue7 '+e);
		console.error('Problems setting articulationParameterValue7',e);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['EspduScriptNode'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['EspduScriptNode']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['EspduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['EspduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['EspduScriptNode']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['EspduScriptNode']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['EspduScriptNode'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['EspduScriptNode']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['EspduScriptNode']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['EspduScriptNode'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['EspduScriptNode'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'] = function() {
	this.set_espduTransformNode = function (value) {
		try {
			this.proxy.espduTransformNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting espduTransformNode '+e);
			console.error('Problems setting espduTransformNode',e);
		}
	};
	this.espduTransformNode_changed = function () {
		var value = this.espduTransformNode;
		return value;
	};
	try {
		this.espduTransformNode = new SFNode();
	} catch (e) {
		console.log('Problems setting espduTransformNode '+e);
		console.error('Problems setting espduTransformNode',e);
	}
	this.set_traceColor = function (value) {
		try {
			this.proxy.traceColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting traceColor '+e);
			console.error('Problems setting traceColor',e);
		}
	};
	this.traceColor_changed = function () {
		var value = this.traceColor;
		return value;
	};
	try {
		this.traceColor = new SFColor();
	} catch (e) {
		console.log('Problems setting traceColor '+e);
		console.error('Problems setting traceColor',e);
	}
	this.set_traceOffset = function (value) {
		try {
			this.proxy.traceOffset = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting traceOffset '+e);
			console.error('Problems setting traceOffset',e);
		}
	};
	this.traceOffset_changed = function () {
		var value = this.traceOffset;
		return value;
	};
	try {
		this.traceOffset = new SFVec3f();
	} catch (e) {
		console.log('Problems setting traceOffset '+e);
		console.error('Problems setting traceOffset',e);
	}
	this.set_traceFontSize = function (value) {
		try {
			this.proxy.traceFontSize = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting traceFontSize '+e);
			console.error('Problems setting traceFontSize',e);
		}
	};
	this.traceFontSize_changed = function () {
		var value = this.traceFontSize;
		return value;
	};
	try {
		this.traceFontSize = new SFFloat();
	} catch (e) {
		console.log('Problems setting traceFontSize '+e);
		console.error('Problems setting traceFontSize',e);
	}
	this.set_traceJava = function (value) {
		try {
			this.proxy.traceJava = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting traceJava '+e);
			console.error('Problems setting traceJava',e);
		}
	};
	this.traceJava_changed = function () {
		var value = this.traceJava;
		return value;
	};
	try {
		this.traceJava = new SFBool();
	} catch (e) {
		console.log('Problems setting traceJava '+e);
		console.error('Problems setting traceJava',e);
	}
	this.set_localTraceEnabled = function (value) {
		try {
			this.proxy.localTraceEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting localTraceEnabled '+e);
			console.error('Problems setting localTraceEnabled',e);
		}
	};
	this.localTraceEnabled_changed = function () {
		var value = this.localTraceEnabled;
		return value;
	};
	try {
		this.localTraceEnabled = new SFBool();
	} catch (e) {
		console.log('Problems setting localTraceEnabled '+e);
		console.error('Problems setting localTraceEnabled',e);
	}
	this.set_touched = function (value) {
		try {
			this.proxy.touched = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting touched '+e);
			console.error('Problems setting touched',e);
		}
	};
	this.touched_changed = function () {
		var value = this.touched;
		return value;
	};
	try {
		this.touched = new SFBool();
	} catch (e) {
		console.log('Problems setting touched '+e);
		console.error('Problems setting touched',e);
	}
	this.set_update = function (value) {
		try {
			this.proxy.update = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting update '+e);
			console.error('Problems setting update',e);
		}
	};
	this.update_changed = function () {
		var value = this.update;
		return value;
	};
	try {
		this.update = new SFTime();
	} catch (e) {
		console.log('Problems setting update '+e);
		console.error('Problems setting update',e);
	}
	this.set_marking = function (value) {
		try {
			this.proxy.marking = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting marking '+e);
			console.error('Problems setting marking',e);
		}
	};
	this.marking_changed = function () {
		var value = this.marking;
		return value;
	};
	try {
		this.marking = new SFString();
	} catch (e) {
		console.log('Problems setting marking '+e);
		console.error('Problems setting marking',e);
	}
	this.set_readInterval = function (value) {
		try {
			this.proxy.readInterval = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting readInterval '+e);
			console.error('Problems setting readInterval',e);
		}
	};
	this.readInterval_changed = function () {
		var value = this.readInterval;
		return value;
	};
	try {
		this.readInterval = new SFTime();
	} catch (e) {
		console.log('Problems setting readInterval '+e);
		console.error('Problems setting readInterval',e);
	}
	this.set_writeInterval = function (value) {
		try {
			this.proxy.writeInterval = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting writeInterval '+e);
			console.error('Problems setting writeInterval',e);
		}
	};
	this.writeInterval_changed = function () {
		var value = this.writeInterval;
		return value;
	};
	try {
		this.writeInterval = new SFTime();
	} catch (e) {
		console.log('Problems setting writeInterval '+e);
		console.error('Problems setting writeInterval',e);
	}
	this.set_fired1 = function (value) {
		try {
			this.proxy.fired1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fired1 '+e);
			console.error('Problems setting fired1',e);
		}
	};
	this.fired1_changed = function () {
		var value = this.fired1;
		return value;
	};
	try {
		this.fired1 = new SFBool();
	} catch (e) {
		console.log('Problems setting fired1 '+e);
		console.error('Problems setting fired1',e);
	}
	this.set_fired2 = function (value) {
		try {
			this.proxy.fired2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fired2 '+e);
			console.error('Problems setting fired2',e);
		}
	};
	this.fired2_changed = function () {
		var value = this.fired2;
		return value;
	};
	try {
		this.fired2 = new SFBool();
	} catch (e) {
		console.log('Problems setting fired2 '+e);
		console.error('Problems setting fired2',e);
	}
	this.set_fireTime = function (value) {
		try {
			this.proxy.fireTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fireTime '+e);
			console.error('Problems setting fireTime',e);
		}
	};
	this.fireTime_changed = function () {
		var value = this.fireTime;
		return value;
	};
	try {
		this.fireTime = new SFTime();
	} catch (e) {
		console.log('Problems setting fireTime '+e);
		console.error('Problems setting fireTime',e);
	}
	this.set_traceString = function (value) {
		try {
			this.proxy.traceString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting traceString '+e);
			console.error('Problems setting traceString',e);
		}
	};
	this.traceString_changed = function () {
		var value = this.traceString;
		return value;
	};
	try {
		this.traceString = new MFString();
	} catch (e) {
		console.log('Problems setting traceString '+e);
		console.error('Problems setting traceString',e);
	}
	this.set_prior_marking = function (value) {
		try {
			this.proxy.prior_marking = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting prior_marking '+e);
			console.error('Problems setting prior_marking',e);
		}
	};
	this.prior_marking_changed = function () {
		var value = this.prior_marking;
		return value;
	};
	try {
		this.prior_marking = new SFString();
	} catch (e) {
		console.log('Problems setting prior_marking '+e);
		console.error('Problems setting prior_marking',e);
	}
	this.set_prior_readInterval = function (value) {
		try {
			this.proxy.prior_readInterval = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting prior_readInterval '+e);
			console.error('Problems setting prior_readInterval',e);
		}
	};
	this.prior_readInterval_changed = function () {
		var value = this.prior_readInterval;
		return value;
	};
	try {
		this.prior_readInterval = new SFTime(-1);
	} catch (e) {
		console.log('Problems setting prior_readInterval '+e);
		console.error('Problems setting prior_readInterval',e);
	}
	this.set_prior_writeInterval = function (value) {
		try {
			this.proxy.prior_writeInterval = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting prior_writeInterval '+e);
			console.error('Problems setting prior_writeInterval',e);
		}
	};
	this.prior_writeInterval_changed = function () {
		var value = this.prior_writeInterval;
		return value;
	};
	try {
		this.prior_writeInterval = new SFTime(-1);
	} catch (e) {
		console.log('Problems setting prior_writeInterval '+e);
		console.error('Problems setting prior_writeInterval',e);
	}
	this.set_prior_fired1 = function (value) {
		try {
			this.proxy.prior_fired1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting prior_fired1 '+e);
			console.error('Problems setting prior_fired1',e);
		}
	};
	this.prior_fired1_changed = function () {
		var value = this.prior_fired1;
		return value;
	};
	try {
		this.prior_fired1 = new SFBool(false);
	} catch (e) {
		console.log('Problems setting prior_fired1 '+e);
		console.error('Problems setting prior_fired1',e);
	}
	this.set_prior_fired2 = function (value) {
		try {
			this.proxy.prior_fired2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting prior_fired2 '+e);
			console.error('Problems setting prior_fired2',e);
		}
	};
	this.prior_fired2_changed = function () {
		var value = this.prior_fired2;
		return value;
	};
	try {
		this.prior_fired2 = new SFBool(false);
	} catch (e) {
		console.log('Problems setting prior_fired2 '+e);
		console.error('Problems setting prior_fired2',e);
	}
	this.set_prior_translation = function (value) {
		try {
			this.proxy.prior_translation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting prior_translation '+e);
			console.error('Problems setting prior_translation',e);
		}
	};
	this.prior_translation_changed = function () {
		var value = this.prior_translation;
		return value;
	};
	try {
		this.prior_translation = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting prior_translation '+e);
		console.error('Problems setting prior_translation',e);
	}
	this.set_prior_geoCoords = function (value) {
		try {
			this.proxy.prior_geoCoords = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting prior_geoCoords '+e);
			console.error('Problems setting prior_geoCoords',e);
		}
	};
	this.prior_geoCoords_changed = function () {
		var value = this.prior_geoCoords;
		return value;
	};
	try {
		this.prior_geoCoords = undefined;
	} catch (e) {
		console.log('Problems setting prior_geoCoords '+e);
		console.error('Problems setting prior_geoCoords',e);
	}


ecmascript:

	this.initialize = function ()
{
	this.tracePrint('TraceScript this.initialize() start...');
	this.tracePrint('this.proxy.traceColor=' + this.proxy.traceColor);
	this.tracePrint('this.proxy.traceOffset=' + this.proxy.traceOffset);
	this.tracePrint('this.proxy.traceFontSize=' + this.proxy.traceFontSize);
	this.tracePrint('this.proxy.traceJava=' + this.proxy.traceJava);
	this.tracePrint('this.proxy.marking=' + this.proxy.espduTransformNode.proxy.marking);
	this.tracePrint('address=' + this.proxy.espduTransformNode.address);
	this.tracePrint('   port=' + this.proxy.espduTransformNode.port);
	this.tracePrint('networkMode=' + this.proxy.espduTransformNode.networkMode);

	if (this.proxy.espduTransformNode.networkMode == 'networkReader')
	{
		this.proxy.readInterval  = this.proxy.espduTransformNode.proxy.readInterval;
		this.proxy.writeInterval = 0;
	}
	if (this.proxy.espduTransformNode.networkMode == 'networkWriter')
	{
		this.proxy.readInterval  = 0;
		this.proxy.writeInterval = this.proxy.espduTransformNode.proxy.writeInterval;
	}
	this.tracePrint('this.proxy.readInterval='  + this.proxy.espduTransformNode.proxy.readInterval);
	this.tracePrint('this.proxy.writeInterval=' + this.proxy.espduTransformNode.proxy.writeInterval);

	this.proxy.prior_marking       = this.proxy.espduTransformNode.proxy.marking;
	this.proxy.prior_readInterval  = this.proxy.espduTransformNode.proxy.readInterval;
	this.proxy.prior_writeInterval = this.proxy.espduTransformNode.proxy.writeInterval;
	this.proxy.prior_translation   = this.proxy.espduTransformNode.translation;
	this.proxy.prior_geoCoords_changed = this.proxy.espduTransformNode.geoCoords_changed;

	this.proxy.prior_fired1  = this.proxy.espduTransformNode.proxy.fired1;
	this.proxy.prior_fired2  = this.proxy.espduTransformNode.proxy.fired2;

	outputString1 = this.proxy.espduTransformNode.proxy.marking + '  (' +
			this.proxy.espduTransformNode.siteID + ', ' +
			this.proxy.espduTransformNode.applicationID + ', ' +
			this.proxy.espduTransformNode.entityID + ')';

	outputString2 = 'awaiting PDUs...';

	this.proxy.traceString = new MFString (outputString1, outputString2);
	this.tracePrint ('this.proxy.traceString=' + this.proxy.traceString);
//	if (offsetFollowsEspduTransform)
//	{
//		// create ROUTEs to connect parent EspduTransform
//	}
	this.tracePrint('TraceScript this.initialize() finish.');
}
;

	this.touched = function (isActiveValue, timestamp)
{
	this.tracePrint ('this.proxy.touched=' + isActiveValue + ', no action');
}
;

	this.update = function (value, timestamp)
{
//	this.tracePrint('begin this.proxy.update() ...');
	changed = false;  // only send output events when changed
	if (this.proxy.prior_marking != this.proxy.espduTransformNode.proxy.marking)
	{
		this.tracePrint('this.proxy.update() changed this.proxy.marking');
		this.proxy.marking        = this.proxy.espduTransformNode.proxy.marking;
		this.proxy.prior_marking  = this.proxy.marking;
		changed = true;
	}
	if (this.proxy.prior_readInterval != this.proxy.espduTransformNode.proxy.readInterval)
	{
		this.tracePrint('this.proxy.update() changed this.proxy.readInterval');
		this.proxy.readInterval        = this.proxy.espduTransformNode.proxy.readInterval;
		this.proxy.prior_readInterval  = this.proxy.espduTransformNode.proxy.readInterval;
		changed = true;
	}
	if (this.proxy.prior_writeInterval != this.proxy.espduTransformNode.proxy.writeInterval)
	{
		this.tracePrint('this.proxy.update() changed this.proxy.writeInterval');
		this.proxy.writeInterval        = this.proxy.espduTransformNode.proxy.writeInterval;
		this.proxy.prior_writeInterval  = this.proxy.espduTransformNode.proxy.writeInterval;
		changed = true;
	}
	if (	(this.proxy.prior_translation.x != this.proxy.espduTransformNode.translation.x) ||
		(this.proxy.prior_translation.y != this.proxy.espduTransformNode.translation.y) ||
		(this.proxy.prior_translation.z != this.proxy.espduTransformNode.translation.z))
	{
		this.tracePrint('this.proxy.update() changed translation');
		this.proxy.prior_translation = this.proxy.espduTransformNode.translation;
		changed = true;
	}
	if (this.proxy.prior_geoCoords_changed != this.proxy.espduTransformNode.geoCoords_changed)
	{
		this.tracePrint('this.proxy.update() changed geoCoords_changed');
		this.proxy.prior_geoCoords_changed = this.proxy.espduTransformNode.geoCoords_changed;
		changed = true;
	}
//	this.tracePrint('this.proxy.espduTransformNode.translation=' + this.proxy.espduTransformNode.translation);
//	this.tracePrint('this.proxy.prior_translation=' + this.proxy.prior_translation);
//	this.tracePrint('this.proxy.prior_geoCoords_changed=' + this.proxy.prior_geoCoords_changed);
	if (this.proxy.prior_fired1 != this.proxy.espduTransformNode.proxy.fired1)
	{
		this.tracePrint('this.proxy.update() changed this.proxy.fired1');
		this.proxy.fired1        = this.proxy.espduTransformNode.proxy.fired1;
		this.proxy.fireTime      = timestamp;
		this.proxy.prior_fired1  = this.proxy.espduTransformNode.proxy.fired1;
		changed = true;
	}
	if (this.proxy.prior_fired2 != this.proxy.espduTransformNode.proxy.fired2)
	{
		this.tracePrint('this.proxy.update() changed this.proxy.fired2');
		this.proxy.fired2        = this.proxy.espduTransformNode.proxy.fired2;
		this.proxy.fireTime      = timestamp;
		this.proxy.prior_fired2  = this.proxy.espduTransformNode.proxy.fired2;
		changed = true;
	}

	if (changed == true) // produce, then send trace text
	{
		this.tracePrint('this.proxy.update() changed == true');
		outputString1 = this.proxy.espduTransformNode.proxy.marking + '  (' +
			this.proxy.espduTransformNode.siteID + ', ' +
			this.proxy.espduTransformNode.applicationID + ', ' +
			this.proxy.espduTransformNode.entityID + ')';

		outputString2 = this.proxy.prior_geoCoords_changed;

		this.proxy.traceString = new MFString (outputString1, outputString2);
	}
	this.tracePrint('end this.proxy.update()   changed=' + changed);
};

	this.roundoff = function (x)
{
	return Math.round(x * 10) / 10;
};

	this.tracePrint = function (outputString)
{
    if (this.proxy.localTraceEnabled)
	console.error ('[EspduTransformTrace ' + this.proxy.espduTransformNode.proxy.marking + '] ' + outputString);
};

	this.alwaysPrint = function (outputString)
{
	console.error ('[EspduTransformTrace ' + this.proxy.espduTransformNode.proxy.marking + '] ' + outputString);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['DEBUG_JAVASCRIPT'] = function() {
	this.set_espduTransformNode = function (value) {
		try {
			this.proxy.espduTransformNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting espduTransformNode '+e);
			console.error('Problems setting espduTransformNode',e);
		}
	};
	this.espduTransformNode_changed = function () {
		var value = this.espduTransformNode;
		return value;
	};
	try {
		this.espduTransformNode = new SFNode();
	} catch (e) {
		console.log('Problems setting espduTransformNode '+e);
		console.error('Problems setting espduTransformNode',e);
	}
	this.set_localTraceEnabled = function (value) {
		try {
			this.proxy.localTraceEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting localTraceEnabled '+e);
			console.error('Problems setting localTraceEnabled',e);
		}
	};
	this.localTraceEnabled_changed = function () {
		var value = this.localTraceEnabled;
		return value;
	};
	try {
		this.localTraceEnabled = new SFBool();
	} catch (e) {
		console.log('Problems setting localTraceEnabled '+e);
		console.error('Problems setting localTraceEnabled',e);
	}
	this.set_articulationParameterCount = function (value) {
		try {
			this.proxy.articulationParameterCount = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting articulationParameterCount '+e);
			console.error('Problems setting articulationParameterCount',e);
		}
	};
	this.articulationParameterCount_changed = function () {
		var value = this.articulationParameterCount;
		return value;
	};
	try {
		this.articulationParameterCount = new SFInt32();
	} catch (e) {
		console.log('Problems setting articulationParameterCount '+e);
		console.error('Problems setting articulationParameterCount',e);
	}
	this.set_MFmarking = function (value) {
		try {
			this.proxy.MFmarking = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting MFmarking '+e);
			console.error('Problems setting MFmarking',e);
		}
	};
	this.MFmarking_changed = function () {
		var value = this.MFmarking;
		return value;
	};
	try {
		this.MFmarking = new MFString();
	} catch (e) {
		console.log('Problems setting MFmarking '+e);
		console.error('Problems setting MFmarking',e);
	}
	this.set_rotation = function (value) {
		try {
			this.proxy.rotation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rotation '+e);
			console.error('Problems setting rotation',e);
		}
	};
	this.rotation_changed = function () {
		var value = this.rotation;
		return value;
	};
	try {
		this.rotation = undefined;
	} catch (e) {
		console.log('Problems setting rotation '+e);
		console.error('Problems setting rotation',e);
	}
	this.set_timestamp = function (value) {
		try {
			this.proxy.timestamp = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting timestamp '+e);
			console.error('Problems setting timestamp',e);
		}
	};
	this.timestamp_changed = function () {
		var value = this.timestamp;
		return value;
	};
	try {
		this.timestamp = new SFTime();
	} catch (e) {
		console.log('Problems setting timestamp '+e);
		console.error('Problems setting timestamp',e);
	}
	this.set_translation = function (value) {
		try {
			this.proxy.translation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting translation '+e);
			console.error('Problems setting translation',e);
		}
	};
	this.translation_changed = function () {
		var value = this.translation;
		return value;
	};
	try {
		this.translation = undefined;
	} catch (e) {
		console.log('Problems setting translation '+e);
		console.error('Problems setting translation',e);
	}
	this.set_detonated = function (value) {
		try {
			this.proxy.detonated = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting detonated '+e);
			console.error('Problems setting detonated',e);
		}
	};
	this.detonated_changed = function () {
		var value = this.detonated;
		return value;
	};
	try {
		this.detonated = new SFBool();
	} catch (e) {
		console.log('Problems setting detonated '+e);
		console.error('Problems setting detonated',e);
	}
	this.set_marking_address_text = function (value) {
		try {
			this.proxy.marking_address_text = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting marking_address_text '+e);
			console.error('Problems setting marking_address_text',e);
		}
	};
	this.marking_address_text_changed = function () {
		var value = this.marking_address_text;
		return value;
	};
	try {
		this.marking_address_text = new MFString();
	} catch (e) {
		console.log('Problems setting marking_address_text '+e);
		console.error('Problems setting marking_address_text',e);
	}
	this.set_result = function (value) {
		try {
			this.proxy.result = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting result '+e);
			console.error('Problems setting result',e);
		}
	};
	this.result_changed = function () {
		var value = this.result;
		return value;
	};
	try {
		this.result = new SFBool();
	} catch (e) {
		console.log('Problems setting result '+e);
		console.error('Problems setting result',e);
	}
	this.set_entityID = function (value) {
		try {
			this.proxy.entityID = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting entityID '+e);
			console.error('Problems setting entityID',e);
		}
	};
	this.entityID_changed = function () {
		var value = this.entityID;
		return value;
	};
	try {
		this.entityID = new SFInt32(0);
	} catch (e) {
		console.log('Problems setting entityID '+e);
		console.error('Problems setting entityID',e);
	}
	this.set_translation_text = function (value) {
		try {
			this.proxy.translation_text = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting translation_text '+e);
			console.error('Problems setting translation_text',e);
		}
	};
	this.translation_text_changed = function () {
		var value = this.translation_text;
		return value;
	};
	try {
		this.translation_text = new MFString();
	} catch (e) {
		console.log('Problems setting translation_text '+e);
		console.error('Problems setting translation_text',e);
	}
	this.set_port = function (value) {
		try {
			this.proxy.port = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting port '+e);
			console.error('Problems setting port',e);
		}
	};
	this.port_changed = function () {
		var value = this.port;
		return value;
	};
	try {
		this.port = new SFInt32(0);
	} catch (e) {
		console.log('Problems setting port '+e);
		console.error('Problems setting port',e);
	}
	this.set_collided = function (value) {
		try {
			this.proxy.collided = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting collided '+e);
			console.error('Problems setting collided',e);
		}
	};
	this.collided_changed = function () {
		var value = this.collided;
		return value;
	};
	try {
		this.collided = new SFBool();
	} catch (e) {
		console.log('Problems setting collided '+e);
		console.error('Problems setting collided',e);
	}
	this.set_rtpHeaderHeard = function (value) {
		try {
			this.proxy.rtpHeaderHeard = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rtpHeaderHeard '+e);
			console.error('Problems setting rtpHeaderHeard',e);
		}
	};
	this.rtpHeaderHeard_changed = function () {
		var value = this.rtpHeaderHeard;
		return value;
	};
	try {
		this.rtpHeaderHeard = new SFBool();
	} catch (e) {
		console.log('Problems setting rtpHeaderHeard '+e);
		console.error('Problems setting rtpHeaderHeard',e);
	}
	this.set_rotation_text = function (value) {
		try {
			this.proxy.rotation_text = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rotation_text '+e);
			console.error('Problems setting rotation_text',e);
		}
	};
	this.rotation_text_changed = function () {
		var value = this.rotation_text;
		return value;
	};
	try {
		this.rotation_text = new MFString();
	} catch (e) {
		console.log('Problems setting rotation_text '+e);
		console.error('Problems setting rotation_text',e);
	}
	this.set_applicationID = function (value) {
		try {
			this.proxy.applicationID = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting applicationID '+e);
			console.error('Problems setting applicationID',e);
		}
	};
	this.applicationID_changed = function () {
		var value = this.applicationID;
		return value;
	};
	try {
		this.applicationID = new SFInt32(0);
	} catch (e) {
		console.log('Problems setting applicationID '+e);
		console.error('Problems setting applicationID',e);
	}
	this.set_address = function (value) {
		try {
			this.proxy.address = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting address '+e);
			console.error('Problems setting address',e);
		}
	};
	this.address_changed = function () {
		var value = this.address;
		return value;
	};
	try {
		this.address = new SFString();
	} catch (e) {
		console.log('Problems setting address '+e);
		console.error('Problems setting address',e);
	}
	this.set_active = function (value) {
		try {
			this.proxy.active = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting active '+e);
			console.error('Problems setting active',e);
		}
	};
	this.active_changed = function () {
		var value = this.active;
		return value;
	};
	try {
		this.active = new SFBool(true);
	} catch (e) {
		console.log('Problems setting active '+e);
		console.error('Problems setting active',e);
	}
	this.set_touch = function (value) {
		try {
			this.proxy.touch = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting touch '+e);
			console.error('Problems setting touch',e);
		}
	};
	this.touch_changed = function () {
		var value = this.touch;
		return value;
	};
	try {
		this.touch = new SFTime();
	} catch (e) {
		console.log('Problems setting touch '+e);
		console.error('Problems setting touch',e);
	}
	this.set_marking = function (value) {
		try {
			this.proxy.marking = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting marking '+e);
			console.error('Problems setting marking',e);
		}
	};
	this.marking_changed = function () {
		var value = this.marking;
		return value;
	};
	try {
		this.marking = new SFString();
	} catch (e) {
		console.log('Problems setting marking '+e);
		console.error('Problems setting marking',e);
	}
	this.set_siteID = function (value) {
		try {
			this.proxy.siteID = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting siteID '+e);
			console.error('Problems setting siteID',e);
		}
	};
	this.siteID_changed = function () {
		var value = this.siteID;
		return value;
	};
	try {
		this.siteID = new SFInt32(0);
	} catch (e) {
		console.log('Problems setting siteID '+e);
		console.error('Problems setting siteID',e);
	}


ecmascript:

	this.initialize = function ( )
{
	this.tracePrint ('DEBUG_JAVASCRIPT this.initialize() start...');
	this.proxy.translation_text[0]     = this.proxy.espduTransformNode.proxy.marking + '  awaiting DIS';
//	this.proxy.rotation_text   [0]     = 'translation and rotation updates';
//	this.proxy.marking_address_text[0] = 'multicast group: ' + this.proxy.address +'/' + this.proxy.port + ', ID:'//		+ this.proxy.siteID + ',' + this.proxy.applicationID + ',' + this.proxy.entityID;
	this.proxy.MFmarking[0] = this.proxy.espduTransformNode.proxy.marking;
	this.tracePrint ('DEBUG_JAVASCRIPT this.initialize() finish.');
};

	this.set_translation = function ( translation, ts )
{
	if (this.proxy.active) {
		// round to nearest tenth
		translation.x = Math.round (translation.x * 10.0) / 10.0;
		translation.y = Math.round (translation.y * 10.0) / 10.0;
		translation.z = Math.round (translation.z * 10.0) / 10.0;
		this.proxy.translation_text[0] = this.proxy.marking + '  translation ' + translation;
	}
};

	this.set_rotation = function ( rotation, ts )
{
	if (this.proxy.active) {
		// round terms to nearest thousandth
		rotation.x     = Math.round (rotation.x     * 1000.0) / 1000.0;
		rotation.y     = Math.round (rotation.y     * 1000.0) / 1000.0;
		rotation.z     = Math.round (rotation.z     * 1000.0) / 1000.0;
		rotation.angle = (rotation.angle * 180.0) / 3.141592653;
		rotation.angle = Math.round (rotation.angle * 10.0) / 10.0;
//		this.proxy.rotation_text   [0] = 'rotation ' + rotation + ' axis/degrees';
	}
};

	this.touch = function (value, time)
{
	this.proxy.active = !this.proxy.active;
	this.proxy.result =  this.proxy.active;
	if (this.proxy.result) {
		this.proxy.translation_text[0]     = this.proxy.marking + '  awaiting DIS';
//		this.proxy.rotation_text   [0]     = 'translation and rotation updates';
//		this.proxy.marking_address_text[0] = 'multicast group: ' + this.proxy.address +'/' + this.proxy.port + ', ID:'//			+ this.proxy.siteID + ',' + this.proxy.applicationID + ',' + this.proxy.entityID;
		this.proxy.MFmarking[0] = this.proxy.marking;
	} else {
		this.proxy.translation_text[0] = '';
		this.proxy.rotation_text   [0] = '';
		this.proxy.marking_address_text[0] = '';
		this.proxy.MFmarking[0] = '';
	}
};

	this.timestamp = function ( value, ts ) {
	this.tracePrint ('DIS this.proxy.timestamp=' + value + ', event this.proxy.timestamp=' + ts);
};

	this.collided = function ( value, ts ) {
	this.tracePrint ('this.proxy.collided=' + value);
};

	this.detonated = function ( value, ts ) {
	this.tracePrint ('this.proxy.detonated=' + value);
};

	this.articulationParameterCount = function ( value, ts ) {
	this.tracePrint ('this.proxy.articulationParameterCount=' + value);
};

	this.articulationParameterValue0 = function ( value, ts ) {
	this.tracePrint ('this.articulationParameterValue0=' + value);
};

	this.articulationParameterValue1 = function ( value, ts ) {
	this.tracePrint ('this.articulationParameterValue1=' + value);
};

	this.articulationParameterValue2 = function ( value, ts ) {
	this.tracePrint ('this.articulationParameterValue2=' + value);
};

	this.articulationParameterValue3 = function ( value, ts ) {
	this.tracePrint ('this.articulationParameterValue3=' + value);
};

	this.articulationParameterValue4 = function ( value, ts ) {
	this.tracePrint ('this.articulationParameterValue4=' + value);
};

	this.articulationParameterValue5 = function ( value, ts ) {
	this.tracePrint ('this.articulationParameterValue5=' + value);
};

	this.articulationParameterValue6 = function ( value, ts ) {
	this.tracePrint ('this.articulationParameterValue6=' + value);
};

	this.articulationParameterValue7 = function ( value, ts ) {
	this.tracePrint ('this.articulationParameterValue7=' + value);
};

	this.articulationParameterValue8 = function ( value, ts ) {
	this.tracePrint ('this.articulationParameterValue8=' + value);
};

	this.articulationParameterValue9 = function ( value, ts ) {
	this.tracePrint ('this.articulationParameterValue9=' + value);
};

	this.articulationParameterValue10 = function ( value, ts ) {
	this.tracePrint ('this.articulationParameterValue10=' + value);
};

	this.articulationParameterValue11 = function ( value, ts ) {
	this.tracePrint ('this.articulationParameterValue11=' + value);
};

	this.articulationParameterValue12 = function ( value, ts ) {
	this.tracePrint ('this.articulationParameterValue12=' + value);
};

	this.articulationParameterValue13 = function ( value, ts ) {
	this.tracePrint ('this.articulationParameterValue13=' + value);
};

	this.articulationParameterValue14 = function ( value, ts ) {
	this.tracePrint ('this.articulationParameterValue14=' + value);
};

	this.munitionStartPoint = function ( value, ts ) {
	this.tracePrint ('this.munitionStartPoint=' + value);
};

	this.munitionEndPoint = function ( value, ts ) {
	this.tracePrint ('this.munitionEndPoint=' + value);
};

	this.rtpHeaderHeard = function ( value, ts ) {
	this.tracePrint ('unexpected RTP header status, this.proxy.rtpHeaderHeard=' + value);
};

	this.tracePrint = function (outputString)
{
    if (this.proxy.localTraceEnabled)
	console.error ('[EspduTransformTrace ' + this.proxy.espduTransformNode.proxy.marking + '] ' + outputString);
};

	this.alwaysPrint = function (outputString)
{
	console.error ('[EspduTransformTrace ' + this.proxy.espduTransformNode.proxy.marking + '] ' + outputString);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['DEBUG_JAVASCRIPT'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['DEBUG_JAVASCRIPT']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['DEBUG_JAVASCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['DEBUG_JAVASCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['DEBUG_JAVASCRIPT']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['DEBUG_JAVASCRIPT']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['DEBUG_JAVASCRIPT'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['DEBUG_JAVASCRIPT']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['DEBUG_JAVASCRIPT']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['DEBUG_JAVASCRIPT'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['DEBUG_JAVASCRIPT'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['SetFireLineEndpoints'] = function() {
	this.set_munitionStartPoint = function (value) {
		try {
			this.proxy.munitionStartPoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting munitionStartPoint '+e);
			console.error('Problems setting munitionStartPoint',e);
		}
	};
	this.munitionStartPoint_changed = function () {
		var value = this.munitionStartPoint;
		return value;
	};
	try {
		this.munitionStartPoint = undefined;
	} catch (e) {
		console.log('Problems setting munitionStartPoint '+e);
		console.error('Problems setting munitionStartPoint',e);
	}
	this.set_munitionEndPoint = function (value) {
		try {
			this.proxy.munitionEndPoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting munitionEndPoint '+e);
			console.error('Problems setting munitionEndPoint',e);
		}
	};
	this.munitionEndPoint_changed = function () {
		var value = this.munitionEndPoint;
		return value;
	};
	try {
		this.munitionEndPoint = undefined;
	} catch (e) {
		console.log('Problems setting munitionEndPoint '+e);
		console.error('Problems setting munitionEndPoint',e);
	}
	this.set_holdArray = function (value) {
		try {
			this.proxy.holdArray = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting holdArray '+e);
			console.error('Problems setting holdArray',e);
		}
	};
	this.holdArray_changed = function () {
		var value = this.holdArray;
		return value;
	};
	try {
		this.holdArray = new MFVec3f();
	} catch (e) {
		console.log('Problems setting holdArray '+e);
		console.error('Problems setting holdArray',e);
	}
	this.set_pointArray = function (value) {
		try {
			this.proxy.pointArray = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting pointArray '+e);
			console.error('Problems setting pointArray',e);
		}
	};
	this.pointArray_changed = function () {
		var value = this.pointArray;
		return value;
	};
	try {
		this.pointArray = new MFVec3f();
	} catch (e) {
		console.log('Problems setting pointArray '+e);
		console.error('Problems setting pointArray',e);
	}
	this.set_localTraceEnabled = function (value) {
		try {
			this.proxy.localTraceEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting localTraceEnabled '+e);
			console.error('Problems setting localTraceEnabled',e);
		}
	};
	this.localTraceEnabled_changed = function () {
		var value = this.localTraceEnabled;
		return value;
	};
	try {
		this.localTraceEnabled = new SFBool();
	} catch (e) {
		console.log('Problems setting localTraceEnabled '+e);
		console.error('Problems setting localTraceEnabled',e);
	}


ecmascript:

	this.initialize = function ( )
{
	this.tracePrint ('SetFireLineEndpoints this.initialize() start...');
	this.proxy.holdArray [0] = new SFVec3f (0.0, 0.0, 0.0);
	this.proxy.holdArray [1] = new SFVec3f (0.0, 0.0, 0.0);
	this.proxy.pointArray = this.proxy.holdArray;
	this.tracePrint ('SetFireLineEndpoints this.initialize() start...');
};

	this.set_munitionStartPoint = function ( value, timestamp )
{
	this.proxy.holdArray [0] = value;
};

	this.set_munitionEndPoint = function ( value, timestamp )
{
	this.proxy.holdArray [1] = value;
	this.proxy.pointArray = this.proxy.holdArray;
//	this.tracePrint ('fire line endpoints=' + this.proxy.holdArray);
};

	this.tracePrint = function (outputString)
{
    if (this.proxy.localTraceEnabled)
	console.error ('[EspduTransformTrace SetFireLineEndpoints] ' + outputString);
};

	this.alwaysPrint = function (outputString)
{
	console.error ('[EspduTransformTrace SetFireLineEndpoints] ' + outputString);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['SetFireLineEndpoints'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['SetFireLineEndpoints']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['SetFireLineEndpoints'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['SetFireLineEndpoints'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['SetFireLineEndpoints']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['SetFireLineEndpoints']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['SetFireLineEndpoints'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['SetFireLineEndpoints']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['SetFireLineEndpoints']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['SetFireLineEndpoints'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['SetFireLineEndpoints'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript'] = function() {
	this.set_fired1 = function (value) {
		try {
			this.proxy.fired1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fired1 '+e);
			console.error('Problems setting fired1',e);
		}
	};
	this.fired1_changed = function () {
		var value = this.fired1;
		return value;
	};
	try {
		this.fired1 = undefined;
	} catch (e) {
		console.log('Problems setting fired1 '+e);
		console.error('Problems setting fired1',e);
	}
	this.set_fired2 = function (value) {
		try {
			this.proxy.fired2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fired2 '+e);
			console.error('Problems setting fired2',e);
		}
	};
	this.fired2_changed = function () {
		var value = this.fired2;
		return value;
	};
	try {
		this.fired2 = undefined;
	} catch (e) {
		console.log('Problems setting fired2 '+e);
		console.error('Problems setting fired2',e);
	}
	this.set_fireTime = function (value) {
		try {
			this.proxy.fireTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fireTime '+e);
			console.error('Problems setting fireTime',e);
		}
	};
	this.fireTime_changed = function () {
		var value = this.fireTime;
		return value;
	};
	try {
		this.fireTime = new SFTime();
	} catch (e) {
		console.log('Problems setting fireTime '+e);
		console.error('Problems setting fireTime',e);
	}
	this.set_firstFired1 = function (value) {
		try {
			this.proxy.firstFired1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting firstFired1 '+e);
			console.error('Problems setting firstFired1',e);
		}
	};
	this.firstFired1_changed = function () {
		var value = this.firstFired1;
		return value;
	};
	try {
		this.firstFired1 = new SFBool();
	} catch (e) {
		console.log('Problems setting firstFired1 '+e);
		console.error('Problems setting firstFired1',e);
	}
	this.set_firstFired2 = function (value) {
		try {
			this.proxy.firstFired2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting firstFired2 '+e);
			console.error('Problems setting firstFired2',e);
		}
	};
	this.firstFired2_changed = function () {
		var value = this.firstFired2;
		return value;
	};
	try {
		this.firstFired2 = new SFBool();
	} catch (e) {
		console.log('Problems setting firstFired2 '+e);
		console.error('Problems setting firstFired2',e);
	}
	this.set_localTraceEnabled = function (value) {
		try {
			this.proxy.localTraceEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting localTraceEnabled '+e);
			console.error('Problems setting localTraceEnabled',e);
		}
	};
	this.localTraceEnabled_changed = function () {
		var value = this.localTraceEnabled;
		return value;
	};
	try {
		this.localTraceEnabled = new SFBool();
	} catch (e) {
		console.log('Problems setting localTraceEnabled '+e);
		console.error('Problems setting localTraceEnabled',e);
	}


ecmascript:

	this.initialize = function ( )
{
	this.tracePrint ('FireSequenceScript this.initialize() start...');
	this.proxy.firstFired1 = false;
	this.proxy.firstFired2 = false;
	this.tracePrint ('FireSequenceScript this.initialize() finish.');
};

	this.fireTime = function (value, timestamp)
{
	// no action
};

	this.set_fired1 = function (value, timestamp)
{
	if ((value == true) && (this.proxy.firstFired1 == false))
	{
		this.proxy.firstFired1 = true;
		this.tracePrint ('EspduTransformPROTO.wrl: fired1 FIRE_SEQUENCE_SCRIPT timestamp ' + this.proxy.fireTime);
	}
}
;

	this.set_fired2 = function (value, timestamp)
{
	if ((value == true) && (this.proxy.firstFired1 == false))
	{
		this.proxy.firstFired2 = true;
		this.tracePrint ('EspduTransformPROTO.wrl: fired2 FIRE_SEQUENCE_SCRIPT timestamp ' + this.proxy.fireTime);
	}
};

	this.tracePrint = function (outputString)
{
    if (this.proxy.localTraceEnabled)
	console.error ('[EspduTransformTrace FireSequenceScript] ' + outputString);
};

	this.alwaysPrint = function (outputString)
{
	console.error ('[EspduTransformTrace FireSequenceScript] ' + outputString);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript'].initialize();
    if (X3DJSON.nodeUtil("Scene","ReadIntervalClock")) {
X3DJSON.nodeUtil("Scene","ReadIntervalClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['EspduScriptNode'].update(X3DJSON.nodeUtil("Scene","ReadIntervalClock","cycleTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['EspduScriptNode'].update(X3DJSON.nodeUtil("Scene","ReadIntervalClock","cycleTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","WriteIntervalClock")) {
X3DJSON.nodeUtil("Scene","WriteIntervalClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['EspduScriptNode'].update(X3DJSON.nodeUtil("Scene","WriteIntervalClock","cycleTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['EspduScriptNode'].update(X3DJSON.nodeUtil("Scene","WriteIntervalClock","cycleTime"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript']['ACTION']['readInterval'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript']['ACTION']['readInterval'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript']['ACTION']['readInterval'].push(function(property, value) {
		if (property === 'readInterval') {
			X3DJSON.nodeUtil("Scene","ReadIntervalTraceClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].readInterval === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].readInterval() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].readInterval, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ReadIntervalTraceClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].readInterval === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].readInterval() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].readInterval, __eventTime);
    if (X3DJSON.nodeUtil("Scene","ReadIntervalTraceClock")) {
X3DJSON.nodeUtil("Scene","ReadIntervalTraceClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].update(X3DJSON.nodeUtil("Scene","ReadIntervalTraceClock","cycleTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].update(X3DJSON.nodeUtil("Scene","ReadIntervalTraceClock","cycleTime"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript']['ACTION']['writeInterval'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript']['ACTION']['writeInterval'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript']['ACTION']['writeInterval'].push(function(property, value) {
		if (property === 'writeInterval') {
			X3DJSON.nodeUtil("Scene","WriteIntervalTraceClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].writeInterval === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].writeInterval() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].writeInterval, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","WriteIntervalTraceClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].writeInterval === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].writeInterval() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].writeInterval, __eventTime);
    if (X3DJSON.nodeUtil("Scene","WriteIntervalTraceClock")) {
X3DJSON.nodeUtil("Scene","WriteIntervalTraceClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].update(X3DJSON.nodeUtil("Scene","WriteIntervalTraceClock","cycleTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].update(X3DJSON.nodeUtil("Scene","WriteIntervalTraceClock","cycleTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","ActivationTouchSensor")) {
X3DJSON.nodeUtil("Scene","ActivationTouchSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].touched(X3DJSON.nodeUtil("Scene","ActivationTouchSensor","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].touched(X3DJSON.nodeUtil("Scene","ActivationTouchSensor","isActive"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript']['ACTION']['traceString'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript']['ACTION']['traceString'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript']['ACTION']['traceString'].push(function(property, value) {
		if (property === 'traceString') {
			X3DJSON.nodeUtil("Scene","TraceText","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].traceString === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].traceString() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].traceString, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TraceText","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].traceString === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].traceString() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].traceString, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['SetFireLineEndpoints'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['SetFireLineEndpoints'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['SetFireLineEndpoints']['ACTION']['pointArray'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['SetFireLineEndpoints']['ACTION']['pointArray'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['SetFireLineEndpoints']['ACTION']['pointArray'].push(function(property, value) {
		if (property === 'pointArray') {
			X3DJSON.nodeUtil("Scene","LineOfFireCoordinateNode","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['SetFireLineEndpoints'].pointArray === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['SetFireLineEndpoints'].pointArray() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['SetFireLineEndpoints'].pointArray, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","LineOfFireCoordinateNode","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['SetFireLineEndpoints'].pointArray === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['SetFireLineEndpoints'].pointArray() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['SetFireLineEndpoints'].pointArray, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript']['ACTION']['fired1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript']['ACTION']['fired1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript']['ACTION']['fired1'].push(function(property, value) {
		if (property === 'fired1') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired1) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript'].set_fired1(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired1, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired1) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript'].set_fired1(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired1, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript']['ACTION']['fired2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript']['ACTION']['fired2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript']['ACTION']['fired2'].push(function(property, value) {
		if (property === 'fired2') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired2) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript'].set_fired2(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired2, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired2) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript'].set_fired2(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired2, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript']['ACTION']['fireTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript']['ACTION']['fireTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript']['ACTION']['fireTime'].push(function(property, value) {
		if (property === 'fireTime') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fireTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fireTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fireTime) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript'].fireTime(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fireTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fireTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fireTime, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fireTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fireTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fireTime) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript'].fireTime(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fireTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fireTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fireTime, __eventTime);
		}
    if (X3DJSON.nodeUtil("Scene","EspduTrans")) {
X3DJSON.nodeUtil("Scene","EspduTrans").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","EspduTrans")) {
X3DJSON.nodeUtil("Scene","EspduTrans").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['EspduScriptNode'].update(X3DJSON.nodeUtil("Scene","ReadIntervalClock","cycleTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['EspduScriptNode'].update(X3DJSON.nodeUtil("Scene","WriteIntervalClock","cycleTime"), __eventTime);
			X3DJSON.nodeUtil("Scene","ReadIntervalTraceClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].readInterval === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].readInterval() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].readInterval, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].update(X3DJSON.nodeUtil("Scene","ReadIntervalTraceClock","cycleTime"), __eventTime);
			X3DJSON.nodeUtil("Scene","WriteIntervalTraceClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].writeInterval === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].writeInterval() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].writeInterval, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].update(X3DJSON.nodeUtil("Scene","WriteIntervalTraceClock","cycleTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].touched(X3DJSON.nodeUtil("Scene","ActivationTouchSensor","isActive"), __eventTime);
			X3DJSON.nodeUtil("Scene","TraceText","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].traceString === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].traceString() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].traceString, __eventTime);
			X3DJSON.nodeUtil("Scene","LineOfFireCoordinateNode","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['SetFireLineEndpoints'].pointArray === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['SetFireLineEndpoints'].pointArray() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['SetFireLineEndpoints'].pointArray, __eventTime);
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired1) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript'].set_fired1(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired1, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired2) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript'].set_fired2(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fired2, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fireTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fireTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fireTime) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['FireSequenceScript'].fireTime(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fireTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fireTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/EspduTransformPrototypes.json']['TraceScript'].fireTime, __eventTime);
		}