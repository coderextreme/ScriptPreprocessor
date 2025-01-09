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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] = function() {
	this.set_messageResult = function (value) {
		try {
			this.proxy.messageResult = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting messageResult '+e);
			console.error('Problems setting messageResult',e);
		}
	};
	this.messageResult_changed = function () {
		var value = this.messageResult;
		return value;
	};
	try {
		this.messageResult = new MFString();
	} catch (e) {
		console.log('Problems setting messageResult '+e);
		console.error('Problems setting messageResult',e);
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
		this.active = new SFBool();
	} catch (e) {
		console.log('Problems setting active '+e);
		console.error('Problems setting active',e);
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
	this.set_radioID = function (value) {
		try {
			this.proxy.radioID = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radioID '+e);
			console.error('Problems setting radioID',e);
		}
	};
	this.radioID_changed = function () {
		var value = this.radioID;
		return value;
	};
	try {
		this.radioID = new SFInt32();
	} catch (e) {
		console.log('Problems setting radioID '+e);
		console.error('Problems setting radioID',e);
	}
	this.set_receivedPower = function (value) {
		try {
			this.proxy.receivedPower = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting receivedPower '+e);
			console.error('Problems setting receivedPower',e);
		}
	};
	this.receivedPower_changed = function () {
		var value = this.receivedPower;
		return value;
	};
	try {
		this.receivedPower = new SFFloat();
	} catch (e) {
		console.log('Problems setting receivedPower '+e);
		console.error('Problems setting receivedPower',e);
	}
	this.set_receiverState = function (value) {
		try {
			this.proxy.receiverState = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting receiverState '+e);
			console.error('Problems setting receiverState',e);
		}
	};
	this.receiverState_changed = function () {
		var value = this.receiverState;
		return value;
	};
	try {
		this.receiverState = new SFInt32();
	} catch (e) {
		console.log('Problems setting receiverState '+e);
		console.error('Problems setting receiverState',e);
	}
	this.set_transmitterSiteID = function (value) {
		try {
			this.proxy.transmitterSiteID = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transmitterSiteID '+e);
			console.error('Problems setting transmitterSiteID',e);
		}
	};
	this.transmitterSiteID_changed = function () {
		var value = this.transmitterSiteID;
		return value;
	};
	try {
		this.transmitterSiteID = new SFInt32();
	} catch (e) {
		console.log('Problems setting transmitterSiteID '+e);
		console.error('Problems setting transmitterSiteID',e);
	}
	this.set_transmitterApplicationID = function (value) {
		try {
			this.proxy.transmitterApplicationID = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transmitterApplicationID '+e);
			console.error('Problems setting transmitterApplicationID',e);
		}
	};
	this.transmitterApplicationID_changed = function () {
		var value = this.transmitterApplicationID;
		return value;
	};
	try {
		this.transmitterApplicationID = new SFInt32();
	} catch (e) {
		console.log('Problems setting transmitterApplicationID '+e);
		console.error('Problems setting transmitterApplicationID',e);
	}
	this.set_transmitterEntityID = function (value) {
		try {
			this.proxy.transmitterEntityID = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transmitterEntityID '+e);
			console.error('Problems setting transmitterEntityID',e);
		}
	};
	this.transmitterEntityID_changed = function () {
		var value = this.transmitterEntityID;
		return value;
	};
	try {
		this.transmitterEntityID = new SFInt32();
	} catch (e) {
		console.log('Problems setting transmitterEntityID '+e);
		console.error('Problems setting transmitterEntityID',e);
	}
	this.set_transmitterRadioID = function (value) {
		try {
			this.proxy.transmitterRadioID = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transmitterRadioID '+e);
			console.error('Problems setting transmitterRadioID',e);
		}
	};
	this.transmitterRadioID_changed = function () {
		var value = this.transmitterRadioID;
		return value;
	};
	try {
		this.transmitterRadioID = new SFInt32();
	} catch (e) {
		console.log('Problems setting transmitterRadioID '+e);
		console.error('Problems setting transmitterRadioID',e);
	}


ecmascript:

	this.initialize = function ()
{
	value='awaiting PDU';
	this.proxy.messageResult  [0] = 'this.proxy.active=' + value;
	this.proxy.messageResult  [1] = 'this.proxy.timestamp=' + value;
	this.proxy.messageResult  [2] = 'this.proxy.isRtpHeaderHeard=' + value;
	this.proxy.messageResult  [3] = 'this.proxy.radioID=' + value;
	this.proxy.messageResult  [4] = 'this.proxy.receivedPower=' + value;
	this.proxy.messageResult  [5] = 'this.proxy.receiverState=' + value;
	this.proxy.messageResult  [6] = 'this.proxy.transmitterSiteID=' + value;
	this.proxy.messageResult  [7] = 'this.proxy.transmitterApplicationID=' + value;
	this.proxy.messageResult  [8] = 'this.proxy.transmitterEntityID=' + value;
	this.proxy.messageResult  [9] = 'this.proxy.transmitterRadioID=' + value;
};

	this.active = function (value, ts) { this.proxy.messageResult [0] = 'this.proxy.active=' + value; };

	this.timestamp = function (value, ts) { this.proxy.messageResult [1] = 'this.proxy.timestamp=' + value; };

	this.isRtpHeaderHeard = function (value, ts) { this.proxy.messageResult [2] = 'this.proxy.isRtpHeaderHeard=' + value; };

	this.radioID = function (value, ts) { this.proxy.messageResult [3] = 'this.proxy.radioID=' + value; };

	this.receivedPower = function (value, ts) { this.proxy.messageResult [4] = 'receiverPower=' + value; };

	this.receiverState = function (value, ts) { this.proxy.messageResult [5] = 'this.proxy.receiverState=' + value; };

	this.transmitterSiteID = function (value, ts) { this.proxy.messageResult [6] = 'this.proxy.transmitterSiteID=' + value; };

	this.transmitterApplicationID = function (value, ts) { this.proxy.messageResult [7] = 'this.proxy.transmitterApplicationID=' + value; };

	this.transmitterEntityID = function (value, ts) { this.proxy.messageResult [8] = 'this.proxy.transmitterEntityID=' + value; };

	this.transmitterRadioID = function (value, ts) { this.proxy.messageResult [9] = 'this.proxy.transmitterRadioID=' + value; }

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'] = function() {
	this.set_radioPduType = function (value) {
		try {
			this.proxy.radioPduType = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radioPduType '+e);
			console.error('Problems setting radioPduType',e);
		}
	};
	this.radioPduType_changed = function () {
		var value = this.radioPduType;
		return value;
	};
	try {
		this.radioPduType = new SFString("ReceiverPdu");
	} catch (e) {
		console.log('Problems setting radioPduType '+e);
		console.error('Problems setting radioPduType',e);
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
		this.siteID = new SFInt32();
	} catch (e) {
		console.log('Problems setting siteID '+e);
		console.error('Problems setting siteID',e);
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
		this.applicationID = new SFInt32();
	} catch (e) {
		console.log('Problems setting applicationID '+e);
		console.error('Problems setting applicationID',e);
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
		this.entityID = new SFInt32();
	} catch (e) {
		console.log('Problems setting entityID '+e);
		console.error('Problems setting entityID',e);
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
		this.port = new SFInt32();
	} catch (e) {
		console.log('Problems setting port '+e);
		console.error('Problems setting port',e);
	}
	this.set_multicastRelayHost = function (value) {
		try {
			this.proxy.multicastRelayHost = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting multicastRelayHost '+e);
			console.error('Problems setting multicastRelayHost',e);
		}
	};
	this.multicastRelayHost_changed = function () {
		var value = this.multicastRelayHost;
		return value;
	};
	try {
		this.multicastRelayHost = new SFString();
	} catch (e) {
		console.log('Problems setting multicastRelayHost '+e);
		console.error('Problems setting multicastRelayHost',e);
	}
	this.set_multicastRelayPort = function (value) {
		try {
			this.proxy.multicastRelayPort = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting multicastRelayPort '+e);
			console.error('Problems setting multicastRelayPort',e);
		}
	};
	this.multicastRelayPort_changed = function () {
		var value = this.multicastRelayPort;
		return value;
	};
	try {
		this.multicastRelayPort = new SFInt32();
	} catch (e) {
		console.log('Problems setting multicastRelayPort '+e);
		console.error('Problems setting multicastRelayPort',e);
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
	this.set_trace = function (value) {
		try {
			this.proxy.trace = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting trace '+e);
			console.error('Problems setting trace',e);
		}
	};
	this.trace_changed = function () {
		var value = this.trace;
		return value;
	};
	try {
		this.trace = new SFBool();
	} catch (e) {
		console.log('Problems setting trace '+e);
		console.error('Problems setting trace',e);
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
		this.active = new SFBool();
	} catch (e) {
		console.log('Problems setting active '+e);
		console.error('Problems setting active',e);
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
	this.set_radioID = function (value) {
		try {
			this.proxy.radioID = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radioID '+e);
			console.error('Problems setting radioID',e);
		}
	};
	this.radioID_changed = function () {
		var value = this.radioID;
		return value;
	};
	try {
		this.radioID = new SFInt32();
	} catch (e) {
		console.log('Problems setting radioID '+e);
		console.error('Problems setting radioID',e);
	}
	this.set_receivedPower = function (value) {
		try {
			this.proxy.receivedPower = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting receivedPower '+e);
			console.error('Problems setting receivedPower',e);
		}
	};
	this.receivedPower_changed = function () {
		var value = this.receivedPower;
		return value;
	};
	try {
		this.receivedPower = new SFFloat();
	} catch (e) {
		console.log('Problems setting receivedPower '+e);
		console.error('Problems setting receivedPower',e);
	}
	this.set_receiverState = function (value) {
		try {
			this.proxy.receiverState = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting receiverState '+e);
			console.error('Problems setting receiverState',e);
		}
	};
	this.receiverState_changed = function () {
		var value = this.receiverState;
		return value;
	};
	try {
		this.receiverState = new SFInt32();
	} catch (e) {
		console.log('Problems setting receiverState '+e);
		console.error('Problems setting receiverState',e);
	}
	this.set_transmitterSiteID = function (value) {
		try {
			this.proxy.transmitterSiteID = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transmitterSiteID '+e);
			console.error('Problems setting transmitterSiteID',e);
		}
	};
	this.transmitterSiteID_changed = function () {
		var value = this.transmitterSiteID;
		return value;
	};
	try {
		this.transmitterSiteID = new SFInt32();
	} catch (e) {
		console.log('Problems setting transmitterSiteID '+e);
		console.error('Problems setting transmitterSiteID',e);
	}
	this.set_transmitterApplicationID = function (value) {
		try {
			this.proxy.transmitterApplicationID = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transmitterApplicationID '+e);
			console.error('Problems setting transmitterApplicationID',e);
		}
	};
	this.transmitterApplicationID_changed = function () {
		var value = this.transmitterApplicationID;
		return value;
	};
	try {
		this.transmitterApplicationID = new SFInt32();
	} catch (e) {
		console.log('Problems setting transmitterApplicationID '+e);
		console.error('Problems setting transmitterApplicationID',e);
	}
	this.set_transmitterEntityID = function (value) {
		try {
			this.proxy.transmitterEntityID = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transmitterEntityID '+e);
			console.error('Problems setting transmitterEntityID',e);
		}
	};
	this.transmitterEntityID_changed = function () {
		var value = this.transmitterEntityID;
		return value;
	};
	try {
		this.transmitterEntityID = new SFInt32();
	} catch (e) {
		console.log('Problems setting transmitterEntityID '+e);
		console.error('Problems setting transmitterEntityID',e);
	}
	this.set_transmitterRadioID = function (value) {
		try {
			this.proxy.transmitterRadioID = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transmitterRadioID '+e);
			console.error('Problems setting transmitterRadioID',e);
		}
	};
	this.transmitterRadioID_changed = function () {
		var value = this.transmitterRadioID;
		return value;
	};
	try {
		this.transmitterRadioID = new SFInt32();
	} catch (e) {
		console.log('Problems setting transmitterRadioID '+e);
		console.error('Problems setting transmitterRadioID',e);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] = function() {
	this.set_messageResult = function (value) {
		try {
			this.proxy.messageResult = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting messageResult '+e);
			console.error('Problems setting messageResult',e);
		}
	};
	this.messageResult_changed = function () {
		var value = this.messageResult;
		return value;
	};
	try {
		this.messageResult = new MFString();
	} catch (e) {
		console.log('Problems setting messageResult '+e);
		console.error('Problems setting messageResult',e);
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
		this.active = new SFBool();
	} catch (e) {
		console.log('Problems setting active '+e);
		console.error('Problems setting active',e);
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
	this.set_radioID = function (value) {
		try {
			this.proxy.radioID = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radioID '+e);
			console.error('Problems setting radioID',e);
		}
	};
	this.radioID_changed = function () {
		var value = this.radioID;
		return value;
	};
	try {
		this.radioID = new SFInt32();
	} catch (e) {
		console.log('Problems setting radioID '+e);
		console.error('Problems setting radioID',e);
	}
	this.set_encodingScheme = function (value) {
		try {
			this.proxy.encodingScheme = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting encodingScheme '+e);
			console.error('Problems setting encodingScheme',e);
		}
	};
	this.encodingScheme_changed = function () {
		var value = this.encodingScheme;
		return value;
	};
	try {
		this.encodingScheme = new SFInt32();
	} catch (e) {
		console.log('Problems setting encodingScheme '+e);
		console.error('Problems setting encodingScheme',e);
	}
	this.set_tdlType = function (value) {
		try {
			this.proxy.tdlType = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting tdlType '+e);
			console.error('Problems setting tdlType',e);
		}
	};
	this.tdlType_changed = function () {
		var value = this.tdlType;
		return value;
	};
	try {
		this.tdlType = new SFInt32();
	} catch (e) {
		console.log('Problems setting tdlType '+e);
		console.error('Problems setting tdlType',e);
	}
	this.set_sampleRate = function (value) {
		try {
			this.proxy.sampleRate = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sampleRate '+e);
			console.error('Problems setting sampleRate',e);
		}
	};
	this.sampleRate_changed = function () {
		var value = this.sampleRate;
		return value;
	};
	try {
		this.sampleRate = new SFInt32();
	} catch (e) {
		console.log('Problems setting sampleRate '+e);
		console.error('Problems setting sampleRate',e);
	}
	this.set_samples = function (value) {
		try {
			this.proxy.samples = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting samples '+e);
			console.error('Problems setting samples',e);
		}
	};
	this.samples_changed = function () {
		var value = this.samples;
		return value;
	};
	try {
		this.samples = new SFInt32();
	} catch (e) {
		console.log('Problems setting samples '+e);
		console.error('Problems setting samples',e);
	}
	this.set_dataLength = function (value) {
		try {
			this.proxy.dataLength = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting dataLength '+e);
			console.error('Problems setting dataLength',e);
		}
	};
	this.dataLength_changed = function () {
		var value = this.dataLength;
		return value;
	};
	try {
		this.dataLength = new SFInt32();
	} catch (e) {
		console.log('Problems setting dataLength '+e);
		console.error('Problems setting dataLength',e);
	}
	this.set_data00 = function (value) {
		try {
			this.proxy.data00 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting data00 '+e);
			console.error('Problems setting data00',e);
		}
	};
	this.data00_changed = function () {
		var value = this.data00;
		return value;
	};
	try {
		this.data00 = new SFInt32();
	} catch (e) {
		console.log('Problems setting data00 '+e);
		console.error('Problems setting data00',e);
	}


ecmascript:

	this.initialize = function ()
{
	value='awaiting PDU';
	this.proxy.messageResult  [0] = 'this.proxy.active=' + value;
	this.proxy.messageResult  [1] = 'this.proxy.timestamp=' + value;
	this.proxy.messageResult  [2] = 'this.proxy.isRtpHeaderHeard=' + value;
	this.proxy.messageResult  [3] = 'this.proxy.radioID=' + value;
	this.proxy.messageResult  [4] = 'this.proxy.encodingScheme=' + value;
	this.proxy.messageResult  [5] = 'this.proxy.tdlType=' + value;
	this.proxy.messageResult  [6] = 'this.proxy.sampleRate=' + value;
	this.proxy.messageResult  [7] = 'this.proxy.samples=' + value;
	this.proxy.messageResult  [8] = 'this.proxy.dataLength=' + value;
	this.proxy.messageResult  [9] = 'this.proxy.data00=' + value;
};

	this.active = function (value, ts) { this.proxy.messageResult [0] = 'this.proxy.active=' + value; };

	this.timestamp = function (value, ts) { this.proxy.messageResult [1] = 'this.proxy.timestamp=' + value; };

	this.isRtpHeaderHeard = function (value, ts) { this.proxy.messageResult [2] = 'this.proxy.isRtpHeaderHeard=' + value; };

	this.radioID = function (value, ts) { this.proxy.messageResult [3] = 'this.proxy.radioID=' + value; };

	this.encodingScheme = function (value, ts) { this.proxy.messageResult [4] = 'this.proxy.encodingScheme=' + value; };

	this.tdlType = function (value, ts) { this.proxy.messageResult [5] = 'this.proxy.tdlType=' + value; };

	this.sampleRate = function (value, ts) { this.proxy.messageResult [6] = 'this.proxy.sampleRate=' + value; };

	this.samples = function (value, ts) { this.proxy.messageResult [7] = 'this.proxy.samples=' + value; };

	this.dataLength = function (value, ts) { this.proxy.messageResult [8] = 'this.proxy.dataLength=' + value; };

	this.data00 = function (value, ts) { this.proxy.messageResult [9] = 'this.proxy.data00=' + value; }

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] = function() {
	this.set_messageResult = function (value) {
		try {
			this.proxy.messageResult = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting messageResult '+e);
			console.error('Problems setting messageResult',e);
		}
	};
	this.messageResult_changed = function () {
		var value = this.messageResult;
		return value;
	};
	try {
		this.messageResult = new MFString();
	} catch (e) {
		console.log('Problems setting messageResult '+e);
		console.error('Problems setting messageResult',e);
	}
	this.set_data01 = function (value) {
		try {
			this.proxy.data01 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting data01 '+e);
			console.error('Problems setting data01',e);
		}
	};
	this.data01_changed = function () {
		var value = this.data01;
		return value;
	};
	try {
		this.data01 = new SFInt32();
	} catch (e) {
		console.log('Problems setting data01 '+e);
		console.error('Problems setting data01',e);
	}
	this.set_data02 = function (value) {
		try {
			this.proxy.data02 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting data02 '+e);
			console.error('Problems setting data02',e);
		}
	};
	this.data02_changed = function () {
		var value = this.data02;
		return value;
	};
	try {
		this.data02 = new SFInt32();
	} catch (e) {
		console.log('Problems setting data02 '+e);
		console.error('Problems setting data02',e);
	}
	this.set_data03 = function (value) {
		try {
			this.proxy.data03 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting data03 '+e);
			console.error('Problems setting data03',e);
		}
	};
	this.data03_changed = function () {
		var value = this.data03;
		return value;
	};
	try {
		this.data03 = new SFInt32();
	} catch (e) {
		console.log('Problems setting data03 '+e);
		console.error('Problems setting data03',e);
	}
	this.set_data04 = function (value) {
		try {
			this.proxy.data04 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting data04 '+e);
			console.error('Problems setting data04',e);
		}
	};
	this.data04_changed = function () {
		var value = this.data04;
		return value;
	};
	try {
		this.data04 = new SFInt32();
	} catch (e) {
		console.log('Problems setting data04 '+e);
		console.error('Problems setting data04',e);
	}
	this.set_data05 = function (value) {
		try {
			this.proxy.data05 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting data05 '+e);
			console.error('Problems setting data05',e);
		}
	};
	this.data05_changed = function () {
		var value = this.data05;
		return value;
	};
	try {
		this.data05 = new SFInt32();
	} catch (e) {
		console.log('Problems setting data05 '+e);
		console.error('Problems setting data05',e);
	}
	this.set_data06 = function (value) {
		try {
			this.proxy.data06 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting data06 '+e);
			console.error('Problems setting data06',e);
		}
	};
	this.data06_changed = function () {
		var value = this.data06;
		return value;
	};
	try {
		this.data06 = new SFInt32();
	} catch (e) {
		console.log('Problems setting data06 '+e);
		console.error('Problems setting data06',e);
	}
	this.set_data07 = function (value) {
		try {
			this.proxy.data07 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting data07 '+e);
			console.error('Problems setting data07',e);
		}
	};
	this.data07_changed = function () {
		var value = this.data07;
		return value;
	};
	try {
		this.data07 = new SFInt32();
	} catch (e) {
		console.log('Problems setting data07 '+e);
		console.error('Problems setting data07',e);
	}
	this.set_data08 = function (value) {
		try {
			this.proxy.data08 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting data08 '+e);
			console.error('Problems setting data08',e);
		}
	};
	this.data08_changed = function () {
		var value = this.data08;
		return value;
	};
	try {
		this.data08 = new SFInt32();
	} catch (e) {
		console.log('Problems setting data08 '+e);
		console.error('Problems setting data08',e);
	}
	this.set_data09 = function (value) {
		try {
			this.proxy.data09 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting data09 '+e);
			console.error('Problems setting data09',e);
		}
	};
	this.data09_changed = function () {
		var value = this.data09;
		return value;
	};
	try {
		this.data09 = new SFInt32();
	} catch (e) {
		console.log('Problems setting data09 '+e);
		console.error('Problems setting data09',e);
	}
	this.set_data10 = function (value) {
		try {
			this.proxy.data10 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting data10 '+e);
			console.error('Problems setting data10',e);
		}
	};
	this.data10_changed = function () {
		var value = this.data10;
		return value;
	};
	try {
		this.data10 = new SFInt32();
	} catch (e) {
		console.log('Problems setting data10 '+e);
		console.error('Problems setting data10',e);
	}


ecmascript:

	this.initialize = function ()
{
	this.proxy.messageResult [0] = 'this.proxy.data01=' + value;
	this.proxy.messageResult [1] = 'this.proxy.data02=' + value;
	this.proxy.messageResult [2] = 'this.proxy.data03=' + value;
	this.proxy.messageResult [3] = 'this.proxy.data04=' + value;
	this.proxy.messageResult [4] = 'this.proxy.data05=' + value;
	this.proxy.messageResult [5] = 'this.proxy.data06=' + value;
	this.proxy.messageResult [6] = 'this.proxy.data07=' + value;
	this.proxy.messageResult [7] = 'this.proxy.data08=' + value;
	this.proxy.messageResult [8] = 'this.proxy.data09=' + value;
	this.proxy.messageResult [9] = 'this.proxy.data10=' + value;
};

	this.data01 = function (value, ts) { this.proxy.messageResult [0] = 'this.proxy.data01=' + value; };

	this.data02 = function (value, ts) { this.proxy.messageResult [1] = 'this.proxy.data02=' + value; };

	this.data03 = function (value, ts) { this.proxy.messageResult [2] = 'this.proxy.data03=' + value; };

	this.data04 = function (value, ts) { this.proxy.messageResult [3] = 'this.proxy.data04=' + value; };

	this.data05 = function (value, ts) { this.proxy.messageResult [4] = 'this.proxy.data05=' + value; };

	this.data06 = function (value, ts) { this.proxy.messageResult [5] = 'this.proxy.data06=' + value; };

	this.data07 = function (value, ts) { this.proxy.messageResult [6] = 'this.proxy.data07=' + value; };

	this.data08 = function (value, ts) { this.proxy.messageResult [7] = 'this.proxy.data08=' + value; };

	this.data09 = function (value, ts) { this.proxy.messageResult [8] = 'this.proxy.data09=' + value; };

	this.data10 = function (value, ts) { this.proxy.messageResult [9] = 'this.proxy.data10=' + value; }

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] = function() {
	this.set_radioPduType = function (value) {
		try {
			this.proxy.radioPduType = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radioPduType '+e);
			console.error('Problems setting radioPduType',e);
		}
	};
	this.radioPduType_changed = function () {
		var value = this.radioPduType;
		return value;
	};
	try {
		this.radioPduType = new SFString("SignalPdu");
	} catch (e) {
		console.log('Problems setting radioPduType '+e);
		console.error('Problems setting radioPduType',e);
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
		this.siteID = new SFInt32();
	} catch (e) {
		console.log('Problems setting siteID '+e);
		console.error('Problems setting siteID',e);
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
		this.applicationID = new SFInt32();
	} catch (e) {
		console.log('Problems setting applicationID '+e);
		console.error('Problems setting applicationID',e);
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
		this.entityID = new SFInt32();
	} catch (e) {
		console.log('Problems setting entityID '+e);
		console.error('Problems setting entityID',e);
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
		this.port = new SFInt32();
	} catch (e) {
		console.log('Problems setting port '+e);
		console.error('Problems setting port',e);
	}
	this.set_multicastRelayHost = function (value) {
		try {
			this.proxy.multicastRelayHost = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting multicastRelayHost '+e);
			console.error('Problems setting multicastRelayHost',e);
		}
	};
	this.multicastRelayHost_changed = function () {
		var value = this.multicastRelayHost;
		return value;
	};
	try {
		this.multicastRelayHost = new SFString();
	} catch (e) {
		console.log('Problems setting multicastRelayHost '+e);
		console.error('Problems setting multicastRelayHost',e);
	}
	this.set_multicastRelayPort = function (value) {
		try {
			this.proxy.multicastRelayPort = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting multicastRelayPort '+e);
			console.error('Problems setting multicastRelayPort',e);
		}
	};
	this.multicastRelayPort_changed = function () {
		var value = this.multicastRelayPort;
		return value;
	};
	try {
		this.multicastRelayPort = new SFInt32();
	} catch (e) {
		console.log('Problems setting multicastRelayPort '+e);
		console.error('Problems setting multicastRelayPort',e);
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
	this.set_trace = function (value) {
		try {
			this.proxy.trace = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting trace '+e);
			console.error('Problems setting trace',e);
		}
	};
	this.trace_changed = function () {
		var value = this.trace;
		return value;
	};
	try {
		this.trace = new SFBool();
	} catch (e) {
		console.log('Problems setting trace '+e);
		console.error('Problems setting trace',e);
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
		this.active = new SFBool();
	} catch (e) {
		console.log('Problems setting active '+e);
		console.error('Problems setting active',e);
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
	this.set_radioID = function (value) {
		try {
			this.proxy.radioID = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radioID '+e);
			console.error('Problems setting radioID',e);
		}
	};
	this.radioID_changed = function () {
		var value = this.radioID;
		return value;
	};
	try {
		this.radioID = new SFInt32();
	} catch (e) {
		console.log('Problems setting radioID '+e);
		console.error('Problems setting radioID',e);
	}
	this.set_encodingScheme = function (value) {
		try {
			this.proxy.encodingScheme = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting encodingScheme '+e);
			console.error('Problems setting encodingScheme',e);
		}
	};
	this.encodingScheme_changed = function () {
		var value = this.encodingScheme;
		return value;
	};
	try {
		this.encodingScheme = new SFInt32();
	} catch (e) {
		console.log('Problems setting encodingScheme '+e);
		console.error('Problems setting encodingScheme',e);
	}
	this.set_tdlType = function (value) {
		try {
			this.proxy.tdlType = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting tdlType '+e);
			console.error('Problems setting tdlType',e);
		}
	};
	this.tdlType_changed = function () {
		var value = this.tdlType;
		return value;
	};
	try {
		this.tdlType = new SFInt32();
	} catch (e) {
		console.log('Problems setting tdlType '+e);
		console.error('Problems setting tdlType',e);
	}
	this.set_sampleRate = function (value) {
		try {
			this.proxy.sampleRate = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sampleRate '+e);
			console.error('Problems setting sampleRate',e);
		}
	};
	this.sampleRate_changed = function () {
		var value = this.sampleRate;
		return value;
	};
	try {
		this.sampleRate = new SFInt32();
	} catch (e) {
		console.log('Problems setting sampleRate '+e);
		console.error('Problems setting sampleRate',e);
	}
	this.set_samples = function (value) {
		try {
			this.proxy.samples = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting samples '+e);
			console.error('Problems setting samples',e);
		}
	};
	this.samples_changed = function () {
		var value = this.samples;
		return value;
	};
	try {
		this.samples = new SFInt32();
	} catch (e) {
		console.log('Problems setting samples '+e);
		console.error('Problems setting samples',e);
	}
	this.set_dataLength = function (value) {
		try {
			this.proxy.dataLength = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting dataLength '+e);
			console.error('Problems setting dataLength',e);
		}
	};
	this.dataLength_changed = function () {
		var value = this.dataLength;
		return value;
	};
	try {
		this.dataLength = new SFInt32();
	} catch (e) {
		console.log('Problems setting dataLength '+e);
		console.error('Problems setting dataLength',e);
	}
	this.set_data00 = function (value) {
		try {
			this.proxy.data00 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting data00 '+e);
			console.error('Problems setting data00',e);
		}
	};
	this.data00_changed = function () {
		var value = this.data00;
		return value;
	};
	try {
		this.data00 = new SFInt32();
	} catch (e) {
		console.log('Problems setting data00 '+e);
		console.error('Problems setting data00',e);
	}
	this.set_data01 = function (value) {
		try {
			this.proxy.data01 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting data01 '+e);
			console.error('Problems setting data01',e);
		}
	};
	this.data01_changed = function () {
		var value = this.data01;
		return value;
	};
	try {
		this.data01 = new SFInt32();
	} catch (e) {
		console.log('Problems setting data01 '+e);
		console.error('Problems setting data01',e);
	}
	this.set_data02 = function (value) {
		try {
			this.proxy.data02 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting data02 '+e);
			console.error('Problems setting data02',e);
		}
	};
	this.data02_changed = function () {
		var value = this.data02;
		return value;
	};
	try {
		this.data02 = new SFInt32();
	} catch (e) {
		console.log('Problems setting data02 '+e);
		console.error('Problems setting data02',e);
	}
	this.set_data03 = function (value) {
		try {
			this.proxy.data03 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting data03 '+e);
			console.error('Problems setting data03',e);
		}
	};
	this.data03_changed = function () {
		var value = this.data03;
		return value;
	};
	try {
		this.data03 = new SFInt32();
	} catch (e) {
		console.log('Problems setting data03 '+e);
		console.error('Problems setting data03',e);
	}
	this.set_data04 = function (value) {
		try {
			this.proxy.data04 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting data04 '+e);
			console.error('Problems setting data04',e);
		}
	};
	this.data04_changed = function () {
		var value = this.data04;
		return value;
	};
	try {
		this.data04 = new SFInt32();
	} catch (e) {
		console.log('Problems setting data04 '+e);
		console.error('Problems setting data04',e);
	}
	this.set_data05 = function (value) {
		try {
			this.proxy.data05 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting data05 '+e);
			console.error('Problems setting data05',e);
		}
	};
	this.data05_changed = function () {
		var value = this.data05;
		return value;
	};
	try {
		this.data05 = new SFInt32();
	} catch (e) {
		console.log('Problems setting data05 '+e);
		console.error('Problems setting data05',e);
	}
	this.set_data06 = function (value) {
		try {
			this.proxy.data06 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting data06 '+e);
			console.error('Problems setting data06',e);
		}
	};
	this.data06_changed = function () {
		var value = this.data06;
		return value;
	};
	try {
		this.data06 = new SFInt32();
	} catch (e) {
		console.log('Problems setting data06 '+e);
		console.error('Problems setting data06',e);
	}
	this.set_data07 = function (value) {
		try {
			this.proxy.data07 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting data07 '+e);
			console.error('Problems setting data07',e);
		}
	};
	this.data07_changed = function () {
		var value = this.data07;
		return value;
	};
	try {
		this.data07 = new SFInt32();
	} catch (e) {
		console.log('Problems setting data07 '+e);
		console.error('Problems setting data07',e);
	}
	this.set_data08 = function (value) {
		try {
			this.proxy.data08 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting data08 '+e);
			console.error('Problems setting data08',e);
		}
	};
	this.data08_changed = function () {
		var value = this.data08;
		return value;
	};
	try {
		this.data08 = new SFInt32();
	} catch (e) {
		console.log('Problems setting data08 '+e);
		console.error('Problems setting data08',e);
	}
	this.set_data09 = function (value) {
		try {
			this.proxy.data09 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting data09 '+e);
			console.error('Problems setting data09',e);
		}
	};
	this.data09_changed = function () {
		var value = this.data09;
		return value;
	};
	try {
		this.data09 = new SFInt32();
	} catch (e) {
		console.log('Problems setting data09 '+e);
		console.error('Problems setting data09',e);
	}
	this.set_data10 = function (value) {
		try {
			this.proxy.data10 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting data10 '+e);
			console.error('Problems setting data10',e);
		}
	};
	this.data10_changed = function () {
		var value = this.data10;
		return value;
	};
	try {
		this.data10 = new SFInt32();
	} catch (e) {
		console.log('Problems setting data10 '+e);
		console.error('Problems setting data10',e);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] = function() {
	this.set_messageResult = function (value) {
		try {
			this.proxy.messageResult = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting messageResult '+e);
			console.error('Problems setting messageResult',e);
		}
	};
	this.messageResult_changed = function () {
		var value = this.messageResult;
		return value;
	};
	try {
		this.messageResult = new MFString();
	} catch (e) {
		console.log('Problems setting messageResult '+e);
		console.error('Problems setting messageResult',e);
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
		this.active = new SFBool();
	} catch (e) {
		console.log('Problems setting active '+e);
		console.error('Problems setting active',e);
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
	this.set_radioID = function (value) {
		try {
			this.proxy.radioID = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radioID '+e);
			console.error('Problems setting radioID',e);
		}
	};
	this.radioID_changed = function () {
		var value = this.radioID;
		return value;
	};
	try {
		this.radioID = new SFInt32();
	} catch (e) {
		console.log('Problems setting radioID '+e);
		console.error('Problems setting radioID',e);
	}
	this.set_antennaLocation = function (value) {
		try {
			this.proxy.antennaLocation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting antennaLocation '+e);
			console.error('Problems setting antennaLocation',e);
		}
	};
	this.antennaLocation_changed = function () {
		var value = this.antennaLocation;
		return value;
	};
	try {
		this.antennaLocation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting antennaLocation '+e);
		console.error('Problems setting antennaLocation',e);
	}
	this.set_antennaPatternLength = function (value) {
		try {
			this.proxy.antennaPatternLength = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting antennaPatternLength '+e);
			console.error('Problems setting antennaPatternLength',e);
		}
	};
	this.antennaPatternLength_changed = function () {
		var value = this.antennaPatternLength;
		return value;
	};
	try {
		this.antennaPatternLength = new SFInt32();
	} catch (e) {
		console.log('Problems setting antennaPatternLength '+e);
		console.error('Problems setting antennaPatternLength',e);
	}
	this.set_antennaPatternType = function (value) {
		try {
			this.proxy.antennaPatternType = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting antennaPatternType '+e);
			console.error('Problems setting antennaPatternType',e);
		}
	};
	this.antennaPatternType_changed = function () {
		var value = this.antennaPatternType;
		return value;
	};
	try {
		this.antennaPatternType = new SFInt32();
	} catch (e) {
		console.log('Problems setting antennaPatternType '+e);
		console.error('Problems setting antennaPatternType',e);
	}
	this.set_cryptoKeyID = function (value) {
		try {
			this.proxy.cryptoKeyID = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cryptoKeyID '+e);
			console.error('Problems setting cryptoKeyID',e);
		}
	};
	this.cryptoKeyID_changed = function () {
		var value = this.cryptoKeyID;
		return value;
	};
	try {
		this.cryptoKeyID = new SFInt32();
	} catch (e) {
		console.log('Problems setting cryptoKeyID '+e);
		console.error('Problems setting cryptoKeyID',e);
	}
	this.set_cryptoSytem = function (value) {
		try {
			this.proxy.cryptoSytem = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cryptoSytem '+e);
			console.error('Problems setting cryptoSytem',e);
		}
	};
	this.cryptoSytem_changed = function () {
		var value = this.cryptoSytem;
		return value;
	};
	try {
		this.cryptoSytem = new SFInt32();
	} catch (e) {
		console.log('Problems setting cryptoSytem '+e);
		console.error('Problems setting cryptoSytem',e);
	}
	this.set_frequency = function (value) {
		try {
			this.proxy.frequency = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting frequency '+e);
			console.error('Problems setting frequency',e);
		}
	};
	this.frequency_changed = function () {
		var value = this.frequency;
		return value;
	};
	try {
		this.frequency = new SFInt32();
	} catch (e) {
		console.log('Problems setting frequency '+e);
		console.error('Problems setting frequency',e);
	}


ecmascript:

	this.initialize = function ()
{
	value='awaiting PDU';
	this.proxy.messageResult  [0] = 'this.proxy.active=' + value;
	this.proxy.messageResult  [1] = 'this.proxy.timestamp=' + value;
	this.proxy.messageResult  [2] = 'this.proxy.isRtpHeaderHeard=' + value;
	this.proxy.messageResult  [3] = 'this.proxy.radioID=' + value;
	this.proxy.messageResult  [4] = 'this.proxy.antennaLocation=' + value;
	this.proxy.messageResult  [5] = 'this.proxy.antennaPatternLength=' + value;
	this.proxy.messageResult  [6] = 'this.proxy.antennaPatternType=' + value;
	this.proxy.messageResult  [7] = 'this.proxy.cryptoKeyID=' + value;
	this.proxy.messageResult  [8] = 'this.proxy.cryptoSytem=' + value;
	this.proxy.messageResult  [9] = 'this.proxy.frequency=' + value;
};

	this.active = function (value, ts) { this.proxy.messageResult [0] = 'this.proxy.active=' + value; };

	this.timestamp = function (value, ts) { this.proxy.messageResult [1] = 'this.proxy.timestamp=' + value; };

	this.isRtpHeaderHeard = function (value, ts) { this.proxy.messageResult [2] = 'this.proxy.isRtpHeaderHeard=' + value; };

	this.radioID = function (value, ts) { this.proxy.messageResult [3] = 'this.proxy.radioID=' + value; };

	this.antennaLocation = function (value, ts) { this.proxy.messageResult [4] = 'this.proxy.antennaLocation=' + value; };

	this.antennaPatternLength = function (value, ts) { this.proxy.messageResult [5] = 'this.proxy.antennaPatternLength=' + value; };

	this.antennaPatternType = function (value, ts) { this.proxy.messageResult [6] = 'this.proxy.antennaPatternType=' + value; };

	this.cryptoKeyID = function (value, ts) { this.proxy.messageResult [7] = 'this.proxy.cryptoKeyID=' + value; };

	this.cryptoSytem = function (value, ts) { this.proxy.messageResult [8] = 'this.proxy.cryptoSytem=' + value; };

	this.frequency = function (value, ts) { this.proxy.messageResult [9] = 'this.proxy.frequency=' + value; }

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] = function() {
	this.set_messageResult = function (value) {
		try {
			this.proxy.messageResult = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting messageResult '+e);
			console.error('Problems setting messageResult',e);
		}
	};
	this.messageResult_changed = function () {
		var value = this.messageResult;
		return value;
	};
	try {
		this.messageResult = new MFString();
	} catch (e) {
		console.log('Problems setting messageResult '+e);
		console.error('Problems setting messageResult',e);
	}
	this.set_inputSource = function (value) {
		try {
			this.proxy.inputSource = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting inputSource '+e);
			console.error('Problems setting inputSource',e);
		}
	};
	this.inputSource_changed = function () {
		var value = this.inputSource;
		return value;
	};
	try {
		this.inputSource = new SFInt32();
	} catch (e) {
		console.log('Problems setting inputSource '+e);
		console.error('Problems setting inputSource',e);
	}
	this.set_lengthOfModulationParameters = function (value) {
		try {
			this.proxy.lengthOfModulationParameters = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting lengthOfModulationParameters '+e);
			console.error('Problems setting lengthOfModulationParameters',e);
		}
	};
	this.lengthOfModulationParameters_changed = function () {
		var value = this.lengthOfModulationParameters;
		return value;
	};
	try {
		this.lengthOfModulationParameters = new SFInt32();
	} catch (e) {
		console.log('Problems setting lengthOfModulationParameters '+e);
		console.error('Problems setting lengthOfModulationParameters',e);
	}
	this.set_modulationTypeDetail = function (value) {
		try {
			this.proxy.modulationTypeDetail = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting modulationTypeDetail '+e);
			console.error('Problems setting modulationTypeDetail',e);
		}
	};
	this.modulationTypeDetail_changed = function () {
		var value = this.modulationTypeDetail;
		return value;
	};
	try {
		this.modulationTypeDetail = new SFInt32();
	} catch (e) {
		console.log('Problems setting modulationTypeDetail '+e);
		console.error('Problems setting modulationTypeDetail',e);
	}
	this.set_modulationTypeMajor = function (value) {
		try {
			this.proxy.modulationTypeMajor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting modulationTypeMajor '+e);
			console.error('Problems setting modulationTypeMajor',e);
		}
	};
	this.modulationTypeMajor_changed = function () {
		var value = this.modulationTypeMajor;
		return value;
	};
	try {
		this.modulationTypeMajor = new SFInt32();
	} catch (e) {
		console.log('Problems setting modulationTypeMajor '+e);
		console.error('Problems setting modulationTypeMajor',e);
	}
	this.set_modulationTypeSpreadSpectrum = function (value) {
		try {
			this.proxy.modulationTypeSpreadSpectrum = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting modulationTypeSpreadSpectrum '+e);
			console.error('Problems setting modulationTypeSpreadSpectrum',e);
		}
	};
	this.modulationTypeSpreadSpectrum_changed = function () {
		var value = this.modulationTypeSpreadSpectrum;
		return value;
	};
	try {
		this.modulationTypeSpreadSpectrum = new SFInt32();
	} catch (e) {
		console.log('Problems setting modulationTypeSpreadSpectrum '+e);
		console.error('Problems setting modulationTypeSpreadSpectrum',e);
	}
	this.set_modulationTypeSystem = function (value) {
		try {
			this.proxy.modulationTypeSystem = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting modulationTypeSystem '+e);
			console.error('Problems setting modulationTypeSystem',e);
		}
	};
	this.modulationTypeSystem_changed = function () {
		var value = this.modulationTypeSystem;
		return value;
	};
	try {
		this.modulationTypeSystem = new SFInt32();
	} catch (e) {
		console.log('Problems setting modulationTypeSystem '+e);
		console.error('Problems setting modulationTypeSystem',e);
	}
	this.set_power = function (value) {
		try {
			this.proxy.power = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting power '+e);
			console.error('Problems setting power',e);
		}
	};
	this.power_changed = function () {
		var value = this.power;
		return value;
	};
	try {
		this.power = new SFInt32();
	} catch (e) {
		console.log('Problems setting power '+e);
		console.error('Problems setting power',e);
	}
	this.set_radioEntityTypeCategory = function (value) {
		try {
			this.proxy.radioEntityTypeCategory = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radioEntityTypeCategory '+e);
			console.error('Problems setting radioEntityTypeCategory',e);
		}
	};
	this.radioEntityTypeCategory_changed = function () {
		var value = this.radioEntityTypeCategory;
		return value;
	};
	try {
		this.radioEntityTypeCategory = new SFInt32();
	} catch (e) {
		console.log('Problems setting radioEntityTypeCategory '+e);
		console.error('Problems setting radioEntityTypeCategory',e);
	}
	this.set_radioEntityTypeCountry = function (value) {
		try {
			this.proxy.radioEntityTypeCountry = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radioEntityTypeCountry '+e);
			console.error('Problems setting radioEntityTypeCountry',e);
		}
	};
	this.radioEntityTypeCountry_changed = function () {
		var value = this.radioEntityTypeCountry;
		return value;
	};
	try {
		this.radioEntityTypeCountry = new SFInt32();
	} catch (e) {
		console.log('Problems setting radioEntityTypeCountry '+e);
		console.error('Problems setting radioEntityTypeCountry',e);
	}
	this.set_radioEntityTypeDomain = function (value) {
		try {
			this.proxy.radioEntityTypeDomain = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radioEntityTypeDomain '+e);
			console.error('Problems setting radioEntityTypeDomain',e);
		}
	};
	this.radioEntityTypeDomain_changed = function () {
		var value = this.radioEntityTypeDomain;
		return value;
	};
	try {
		this.radioEntityTypeDomain = new SFInt32();
	} catch (e) {
		console.log('Problems setting radioEntityTypeDomain '+e);
		console.error('Problems setting radioEntityTypeDomain',e);
	}


ecmascript:

	this.initialize = function ()
{
	this.proxy.messageResult [0] = 'this.proxy.inputSource=' + value;
	this.proxy.messageResult [1] = 'this.proxy.lengthOfModulationParameters=' + value;
	this.proxy.messageResult [2] = 'this.proxy.modulationTypeDetail=' + value;
	this.proxy.messageResult [3] = 'this.proxy.modulationTypeMajor=' + value;
	this.proxy.messageResult [4] = 'this.proxy.modulationTypeSpreadSpectrum=' + value;
	this.proxy.messageResult [5] = 'this.proxy.modulationTypeSystem=' + value;
	this.proxy.messageResult [6] = 'this.proxy.power=' + value;
	this.proxy.messageResult [7] = 'this.proxy.radioEntityTypeCategory=' + value;
	this.proxy.messageResult [8] = 'this.proxy.radioEntityTypeCountry=' + value;
	this.proxy.messageResult [9] = 'this.proxy.radioEntityTypeDomain=' + value;
};

	this.inputSource = function (value, ts) { this.proxy.messageResult [0] = 'this.proxy.inputSource=' + value; };

	this.lengthOfModulationParameters = function (value, ts) { this.proxy.messageResult [1] = 'this.proxy.lengthOfModulationParameters=' + value; };

	this.modulationTypeDetail = function (value, ts) { this.proxy.messageResult [2] = 'this.proxy.modulationTypeDetail=' + value; };

	this.modulationTypeMajor = function (value, ts) { this.proxy.messageResult [3] = 'this.proxy.modulationTypeMajor=' + value; };

	this.modulationTypeSpreadSpectrum = function (value, ts) { this.proxy.messageResult [4] = 'this.proxy.modulationTypeSpreadSpectrum=' + value; };

	this.modulationTypeSystem = function (value, ts) { this.proxy.messageResult [5] = 'this.proxy.modulationTypeSystem=' + value; };

	this.power = function (value, ts) { this.proxy.messageResult [6] = 'this.proxy.power=' + value; };

	this.radioEntityTypeCategory = function (value, ts) { this.proxy.messageResult [7] = 'this.proxy.radioEntityTypeCategory=' + value; };

	this.radioEntityTypeCountry = function (value, ts) { this.proxy.messageResult [8] = 'this.proxy.radioEntityTypeCountry=' + value; };

	this.radioEntityTypeDomain = function (value, ts) { this.proxy.messageResult [9] = 'this.proxy.radioEntityTypeDomain=' + value; }

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'] = function() {
	this.set_messageResult = function (value) {
		try {
			this.proxy.messageResult = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting messageResult '+e);
			console.error('Problems setting messageResult',e);
		}
	};
	this.messageResult_changed = function () {
		var value = this.messageResult;
		return value;
	};
	try {
		this.messageResult = new MFString();
	} catch (e) {
		console.log('Problems setting messageResult '+e);
		console.error('Problems setting messageResult',e);
	}
	this.set_radioEntityTypeKind = function (value) {
		try {
			this.proxy.radioEntityTypeKind = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radioEntityTypeKind '+e);
			console.error('Problems setting radioEntityTypeKind',e);
		}
	};
	this.radioEntityTypeKind_changed = function () {
		var value = this.radioEntityTypeKind;
		return value;
	};
	try {
		this.radioEntityTypeKind = new SFInt32();
	} catch (e) {
		console.log('Problems setting radioEntityTypeKind '+e);
		console.error('Problems setting radioEntityTypeKind',e);
	}
	this.set_radioEntityTypeNomenclature = function (value) {
		try {
			this.proxy.radioEntityTypeNomenclature = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radioEntityTypeNomenclature '+e);
			console.error('Problems setting radioEntityTypeNomenclature',e);
		}
	};
	this.radioEntityTypeNomenclature_changed = function () {
		var value = this.radioEntityTypeNomenclature;
		return value;
	};
	try {
		this.radioEntityTypeNomenclature = new SFInt32();
	} catch (e) {
		console.log('Problems setting radioEntityTypeNomenclature '+e);
		console.error('Problems setting radioEntityTypeNomenclature',e);
	}
	this.set_radioEntityTypeNomenclatureVersion = function (value) {
		try {
			this.proxy.radioEntityTypeNomenclatureVersion = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radioEntityTypeNomenclatureVersion '+e);
			console.error('Problems setting radioEntityTypeNomenclatureVersion',e);
		}
	};
	this.radioEntityTypeNomenclatureVersion_changed = function () {
		var value = this.radioEntityTypeNomenclatureVersion;
		return value;
	};
	try {
		this.radioEntityTypeNomenclatureVersion = new SFInt32();
	} catch (e) {
		console.log('Problems setting radioEntityTypeNomenclatureVersion '+e);
		console.error('Problems setting radioEntityTypeNomenclatureVersion',e);
	}
	this.set_relativeAntennaLocation = function (value) {
		try {
			this.proxy.relativeAntennaLocation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting relativeAntennaLocation '+e);
			console.error('Problems setting relativeAntennaLocation',e);
		}
	};
	this.relativeAntennaLocation_changed = function () {
		var value = this.relativeAntennaLocation;
		return value;
	};
	try {
		this.relativeAntennaLocation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting relativeAntennaLocation '+e);
		console.error('Problems setting relativeAntennaLocation',e);
	}
	this.set_transmitFrequencyBandwidth = function (value) {
		try {
			this.proxy.transmitFrequencyBandwidth = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transmitFrequencyBandwidth '+e);
			console.error('Problems setting transmitFrequencyBandwidth',e);
		}
	};
	this.transmitFrequencyBandwidth_changed = function () {
		var value = this.transmitFrequencyBandwidth;
		return value;
	};
	try {
		this.transmitFrequencyBandwidth = new SFInt32();
	} catch (e) {
		console.log('Problems setting transmitFrequencyBandwidth '+e);
		console.error('Problems setting transmitFrequencyBandwidth',e);
	}
	this.set_transmitState = function (value) {
		try {
			this.proxy.transmitState = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transmitState '+e);
			console.error('Problems setting transmitState',e);
		}
	};
	this.transmitState_changed = function () {
		var value = this.transmitState;
		return value;
	};
	try {
		this.transmitState = new SFInt32();
	} catch (e) {
		console.log('Problems setting transmitState '+e);
		console.error('Problems setting transmitState',e);
	}


ecmascript:

	this.initialize = function ()
{
	this.proxy.messageResult [0] = 'this.proxy.radioEntityTypeKind=' + value;
	this.proxy.messageResult [1] = 'this.proxy.radioEntityTypeNomenclature=' + value;
	this.proxy.messageResult [2] = 'this.proxy.radioEntityTypeNomenclatureVersion=' + value;
	this.proxy.messageResult [3] = 'this.proxy.relativeAntennaLocation=' + value;
	this.proxy.messageResult [4] = 'this.proxy.transmitFrequencyBandwidth=' + value;
	this.proxy.messageResult [5] = 'this.proxy.transmitState=' + value;
};

	this.radioEntityTypeKind = function (value, ts) { this.proxy.messageResult [0] = 'this.proxy.radioEntityTypeKind=' + value; };

	this.radioEntityTypeNomenclature = function (value, ts) { this.proxy.messageResult [1] = 'this.proxy.radioEntityTypeNomenclature=' + value; };

	this.radioEntityTypeNomenclatureVersion = function (value, ts) { this.proxy.messageResult [2] = 'this.proxy.radioEntityTypeNomenclatureVersion=' + value; };

	this.relativeAntennaLocation = function (value, ts) { this.proxy.messageResult [3] = 'this.proxy.relativeAntennaLocation=' + value; };

	this.transmitFrequencyBandwidth = function (value, ts) { this.proxy.messageResult [4] = 'this.proxy.transmitFrequencyBandwidth=' + value; };

	this.transmitState = function (value, ts) { this.proxy.messageResult [5] = 'this.proxy.transmitState=' + value; }

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = function() {
	this.set_radioPduType = function (value) {
		try {
			this.proxy.radioPduType = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radioPduType '+e);
			console.error('Problems setting radioPduType',e);
		}
	};
	this.radioPduType_changed = function () {
		var value = this.radioPduType;
		return value;
	};
	try {
		this.radioPduType = new SFString("TransmitterPdu");
	} catch (e) {
		console.log('Problems setting radioPduType '+e);
		console.error('Problems setting radioPduType',e);
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
		this.siteID = new SFInt32();
	} catch (e) {
		console.log('Problems setting siteID '+e);
		console.error('Problems setting siteID',e);
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
		this.applicationID = new SFInt32();
	} catch (e) {
		console.log('Problems setting applicationID '+e);
		console.error('Problems setting applicationID',e);
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
		this.entityID = new SFInt32();
	} catch (e) {
		console.log('Problems setting entityID '+e);
		console.error('Problems setting entityID',e);
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
		this.port = new SFInt32();
	} catch (e) {
		console.log('Problems setting port '+e);
		console.error('Problems setting port',e);
	}
	this.set_multicastRelayHost = function (value) {
		try {
			this.proxy.multicastRelayHost = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting multicastRelayHost '+e);
			console.error('Problems setting multicastRelayHost',e);
		}
	};
	this.multicastRelayHost_changed = function () {
		var value = this.multicastRelayHost;
		return value;
	};
	try {
		this.multicastRelayHost = new SFString();
	} catch (e) {
		console.log('Problems setting multicastRelayHost '+e);
		console.error('Problems setting multicastRelayHost',e);
	}
	this.set_multicastRelayPort = function (value) {
		try {
			this.proxy.multicastRelayPort = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting multicastRelayPort '+e);
			console.error('Problems setting multicastRelayPort',e);
		}
	};
	this.multicastRelayPort_changed = function () {
		var value = this.multicastRelayPort;
		return value;
	};
	try {
		this.multicastRelayPort = new SFInt32();
	} catch (e) {
		console.log('Problems setting multicastRelayPort '+e);
		console.error('Problems setting multicastRelayPort',e);
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
	this.set_trace = function (value) {
		try {
			this.proxy.trace = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting trace '+e);
			console.error('Problems setting trace',e);
		}
	};
	this.trace_changed = function () {
		var value = this.trace;
		return value;
	};
	try {
		this.trace = new SFBool();
	} catch (e) {
		console.log('Problems setting trace '+e);
		console.error('Problems setting trace',e);
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
		this.active = new SFBool();
	} catch (e) {
		console.log('Problems setting active '+e);
		console.error('Problems setting active',e);
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
	this.set_radioID = function (value) {
		try {
			this.proxy.radioID = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radioID '+e);
			console.error('Problems setting radioID',e);
		}
	};
	this.radioID_changed = function () {
		var value = this.radioID;
		return value;
	};
	try {
		this.radioID = new SFInt32();
	} catch (e) {
		console.log('Problems setting radioID '+e);
		console.error('Problems setting radioID',e);
	}
	this.set_antennaLocation = function (value) {
		try {
			this.proxy.antennaLocation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting antennaLocation '+e);
			console.error('Problems setting antennaLocation',e);
		}
	};
	this.antennaLocation_changed = function () {
		var value = this.antennaLocation;
		return value;
	};
	try {
		this.antennaLocation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting antennaLocation '+e);
		console.error('Problems setting antennaLocation',e);
	}
	this.set_antennaPatternLength = function (value) {
		try {
			this.proxy.antennaPatternLength = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting antennaPatternLength '+e);
			console.error('Problems setting antennaPatternLength',e);
		}
	};
	this.antennaPatternLength_changed = function () {
		var value = this.antennaPatternLength;
		return value;
	};
	try {
		this.antennaPatternLength = new SFInt32();
	} catch (e) {
		console.log('Problems setting antennaPatternLength '+e);
		console.error('Problems setting antennaPatternLength',e);
	}
	this.set_antennaPatternType = function (value) {
		try {
			this.proxy.antennaPatternType = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting antennaPatternType '+e);
			console.error('Problems setting antennaPatternType',e);
		}
	};
	this.antennaPatternType_changed = function () {
		var value = this.antennaPatternType;
		return value;
	};
	try {
		this.antennaPatternType = new SFInt32();
	} catch (e) {
		console.log('Problems setting antennaPatternType '+e);
		console.error('Problems setting antennaPatternType',e);
	}
	this.set_cryptoKeyID = function (value) {
		try {
			this.proxy.cryptoKeyID = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cryptoKeyID '+e);
			console.error('Problems setting cryptoKeyID',e);
		}
	};
	this.cryptoKeyID_changed = function () {
		var value = this.cryptoKeyID;
		return value;
	};
	try {
		this.cryptoKeyID = new SFInt32();
	} catch (e) {
		console.log('Problems setting cryptoKeyID '+e);
		console.error('Problems setting cryptoKeyID',e);
	}
	this.set_cryptoSytem = function (value) {
		try {
			this.proxy.cryptoSytem = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cryptoSytem '+e);
			console.error('Problems setting cryptoSytem',e);
		}
	};
	this.cryptoSytem_changed = function () {
		var value = this.cryptoSytem;
		return value;
	};
	try {
		this.cryptoSytem = new SFInt32();
	} catch (e) {
		console.log('Problems setting cryptoSytem '+e);
		console.error('Problems setting cryptoSytem',e);
	}
	this.set_frequency = function (value) {
		try {
			this.proxy.frequency = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting frequency '+e);
			console.error('Problems setting frequency',e);
		}
	};
	this.frequency_changed = function () {
		var value = this.frequency;
		return value;
	};
	try {
		this.frequency = new SFInt32();
	} catch (e) {
		console.log('Problems setting frequency '+e);
		console.error('Problems setting frequency',e);
	}
	this.set_inputSource = function (value) {
		try {
			this.proxy.inputSource = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting inputSource '+e);
			console.error('Problems setting inputSource',e);
		}
	};
	this.inputSource_changed = function () {
		var value = this.inputSource;
		return value;
	};
	try {
		this.inputSource = new SFInt32();
	} catch (e) {
		console.log('Problems setting inputSource '+e);
		console.error('Problems setting inputSource',e);
	}
	this.set_lengthOfModulationParameters = function (value) {
		try {
			this.proxy.lengthOfModulationParameters = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting lengthOfModulationParameters '+e);
			console.error('Problems setting lengthOfModulationParameters',e);
		}
	};
	this.lengthOfModulationParameters_changed = function () {
		var value = this.lengthOfModulationParameters;
		return value;
	};
	try {
		this.lengthOfModulationParameters = new SFInt32();
	} catch (e) {
		console.log('Problems setting lengthOfModulationParameters '+e);
		console.error('Problems setting lengthOfModulationParameters',e);
	}
	this.set_modulationTypeDetail = function (value) {
		try {
			this.proxy.modulationTypeDetail = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting modulationTypeDetail '+e);
			console.error('Problems setting modulationTypeDetail',e);
		}
	};
	this.modulationTypeDetail_changed = function () {
		var value = this.modulationTypeDetail;
		return value;
	};
	try {
		this.modulationTypeDetail = new SFInt32();
	} catch (e) {
		console.log('Problems setting modulationTypeDetail '+e);
		console.error('Problems setting modulationTypeDetail',e);
	}
	this.set_modulationTypeMajor = function (value) {
		try {
			this.proxy.modulationTypeMajor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting modulationTypeMajor '+e);
			console.error('Problems setting modulationTypeMajor',e);
		}
	};
	this.modulationTypeMajor_changed = function () {
		var value = this.modulationTypeMajor;
		return value;
	};
	try {
		this.modulationTypeMajor = new SFInt32();
	} catch (e) {
		console.log('Problems setting modulationTypeMajor '+e);
		console.error('Problems setting modulationTypeMajor',e);
	}
	this.set_modulationTypeSpreadSpectrum = function (value) {
		try {
			this.proxy.modulationTypeSpreadSpectrum = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting modulationTypeSpreadSpectrum '+e);
			console.error('Problems setting modulationTypeSpreadSpectrum',e);
		}
	};
	this.modulationTypeSpreadSpectrum_changed = function () {
		var value = this.modulationTypeSpreadSpectrum;
		return value;
	};
	try {
		this.modulationTypeSpreadSpectrum = new SFInt32();
	} catch (e) {
		console.log('Problems setting modulationTypeSpreadSpectrum '+e);
		console.error('Problems setting modulationTypeSpreadSpectrum',e);
	}
	this.set_modulationTypeSystem = function (value) {
		try {
			this.proxy.modulationTypeSystem = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting modulationTypeSystem '+e);
			console.error('Problems setting modulationTypeSystem',e);
		}
	};
	this.modulationTypeSystem_changed = function () {
		var value = this.modulationTypeSystem;
		return value;
	};
	try {
		this.modulationTypeSystem = new SFInt32();
	} catch (e) {
		console.log('Problems setting modulationTypeSystem '+e);
		console.error('Problems setting modulationTypeSystem',e);
	}
	this.set_power = function (value) {
		try {
			this.proxy.power = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting power '+e);
			console.error('Problems setting power',e);
		}
	};
	this.power_changed = function () {
		var value = this.power;
		return value;
	};
	try {
		this.power = new SFInt32();
	} catch (e) {
		console.log('Problems setting power '+e);
		console.error('Problems setting power',e);
	}
	this.set_radioEntityTypeCategory = function (value) {
		try {
			this.proxy.radioEntityTypeCategory = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radioEntityTypeCategory '+e);
			console.error('Problems setting radioEntityTypeCategory',e);
		}
	};
	this.radioEntityTypeCategory_changed = function () {
		var value = this.radioEntityTypeCategory;
		return value;
	};
	try {
		this.radioEntityTypeCategory = new SFInt32();
	} catch (e) {
		console.log('Problems setting radioEntityTypeCategory '+e);
		console.error('Problems setting radioEntityTypeCategory',e);
	}
	this.set_radioEntityTypeCountry = function (value) {
		try {
			this.proxy.radioEntityTypeCountry = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radioEntityTypeCountry '+e);
			console.error('Problems setting radioEntityTypeCountry',e);
		}
	};
	this.radioEntityTypeCountry_changed = function () {
		var value = this.radioEntityTypeCountry;
		return value;
	};
	try {
		this.radioEntityTypeCountry = new SFInt32();
	} catch (e) {
		console.log('Problems setting radioEntityTypeCountry '+e);
		console.error('Problems setting radioEntityTypeCountry',e);
	}
	this.set_radioEntityTypeDomain = function (value) {
		try {
			this.proxy.radioEntityTypeDomain = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radioEntityTypeDomain '+e);
			console.error('Problems setting radioEntityTypeDomain',e);
		}
	};
	this.radioEntityTypeDomain_changed = function () {
		var value = this.radioEntityTypeDomain;
		return value;
	};
	try {
		this.radioEntityTypeDomain = new SFInt32();
	} catch (e) {
		console.log('Problems setting radioEntityTypeDomain '+e);
		console.error('Problems setting radioEntityTypeDomain',e);
	}
	this.set_radioEntityTypeKind = function (value) {
		try {
			this.proxy.radioEntityTypeKind = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radioEntityTypeKind '+e);
			console.error('Problems setting radioEntityTypeKind',e);
		}
	};
	this.radioEntityTypeKind_changed = function () {
		var value = this.radioEntityTypeKind;
		return value;
	};
	try {
		this.radioEntityTypeKind = new SFInt32();
	} catch (e) {
		console.log('Problems setting radioEntityTypeKind '+e);
		console.error('Problems setting radioEntityTypeKind',e);
	}
	this.set_radioEntityTypeNomenclature = function (value) {
		try {
			this.proxy.radioEntityTypeNomenclature = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radioEntityTypeNomenclature '+e);
			console.error('Problems setting radioEntityTypeNomenclature',e);
		}
	};
	this.radioEntityTypeNomenclature_changed = function () {
		var value = this.radioEntityTypeNomenclature;
		return value;
	};
	try {
		this.radioEntityTypeNomenclature = new SFInt32();
	} catch (e) {
		console.log('Problems setting radioEntityTypeNomenclature '+e);
		console.error('Problems setting radioEntityTypeNomenclature',e);
	}
	this.set_radioEntityTypeNomenclatureVersion = function (value) {
		try {
			this.proxy.radioEntityTypeNomenclatureVersion = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radioEntityTypeNomenclatureVersion '+e);
			console.error('Problems setting radioEntityTypeNomenclatureVersion',e);
		}
	};
	this.radioEntityTypeNomenclatureVersion_changed = function () {
		var value = this.radioEntityTypeNomenclatureVersion;
		return value;
	};
	try {
		this.radioEntityTypeNomenclatureVersion = new SFInt32();
	} catch (e) {
		console.log('Problems setting radioEntityTypeNomenclatureVersion '+e);
		console.error('Problems setting radioEntityTypeNomenclatureVersion',e);
	}
	this.set_relativeAntennaLocation = function (value) {
		try {
			this.proxy.relativeAntennaLocation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting relativeAntennaLocation '+e);
			console.error('Problems setting relativeAntennaLocation',e);
		}
	};
	this.relativeAntennaLocation_changed = function () {
		var value = this.relativeAntennaLocation;
		return value;
	};
	try {
		this.relativeAntennaLocation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting relativeAntennaLocation '+e);
		console.error('Problems setting relativeAntennaLocation',e);
	}
	this.set_transmitFrequencyBandwidth = function (value) {
		try {
			this.proxy.transmitFrequencyBandwidth = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transmitFrequencyBandwidth '+e);
			console.error('Problems setting transmitFrequencyBandwidth',e);
		}
	};
	this.transmitFrequencyBandwidth_changed = function () {
		var value = this.transmitFrequencyBandwidth;
		return value;
	};
	try {
		this.transmitFrequencyBandwidth = new SFInt32();
	} catch (e) {
		console.log('Problems setting transmitFrequencyBandwidth '+e);
		console.error('Problems setting transmitFrequencyBandwidth',e);
	}
	this.set_transmitState = function (value) {
		try {
			this.proxy.transmitState = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transmitState '+e);
			console.error('Problems setting transmitState',e);
		}
	};
	this.transmitState_changed = function () {
		var value = this.transmitState;
		return value;
	};
	try {
		this.transmitState = new SFInt32();
	} catch (e) {
		console.log('Problems setting transmitState '+e);
		console.error('Problems setting transmitState',e);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].initialize();
    if (X3DJSON.nodeUtil("Scene","ReceiverPduReadIntervalClock")) {
X3DJSON.nodeUtil("Scene","ReceiverPduReadIntervalClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].update(X3DJSON.nodeUtil("Scene","ReceiverPduReadIntervalClock","cycleTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].update(X3DJSON.nodeUtil("Scene","ReceiverPduReadIntervalClock","cycleTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","ReceiverPduWriteIntervalClock")) {
X3DJSON.nodeUtil("Scene","ReceiverPduWriteIntervalClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].update(X3DJSON.nodeUtil("Scene","ReceiverPduWriteIntervalClock","cycleTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].update(X3DJSON.nodeUtil("Scene","ReceiverPduWriteIntervalClock","cycleTime"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['active'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['active'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['active'].push(function(property, value) {
		if (property === 'active') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].active === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].active() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].active) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].active(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].active === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].active() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].active, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].active === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].active() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].active) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].active(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].active === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].active() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].active, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['timestamp'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['timestamp'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['timestamp'].push(function(property, value) {
		if (property === 'timestamp') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].timestamp === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].timestamp() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].timestamp) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].timestamp(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].timestamp === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].timestamp() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].timestamp, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].timestamp === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].timestamp() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].timestamp) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].timestamp(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].timestamp === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].timestamp() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].timestamp, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['isRtpHeaderHeard'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['isRtpHeaderHeard'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['isRtpHeaderHeard'].push(function(property, value) {
		if (property === 'isRtpHeaderHeard') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].isRtpHeaderHeard === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].isRtpHeaderHeard() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].isRtpHeaderHeard) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].isRtpHeaderHeard(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].isRtpHeaderHeard === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].isRtpHeaderHeard() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].isRtpHeaderHeard, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].isRtpHeaderHeard === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].isRtpHeaderHeard() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].isRtpHeaderHeard) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].isRtpHeaderHeard(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].isRtpHeaderHeard === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].isRtpHeaderHeard() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].isRtpHeaderHeard, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['radioID'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['radioID'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['radioID'].push(function(property, value) {
		if (property === 'radioID') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].radioID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].radioID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].radioID) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].radioID(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].radioID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].radioID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].radioID, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].radioID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].radioID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].radioID) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].radioID(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].radioID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].radioID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].radioID, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['receivedPower'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['receivedPower'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['receivedPower'].push(function(property, value) {
		if (property === 'receivedPower') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receivedPower === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receivedPower() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receivedPower) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].receivedPower(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receivedPower === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receivedPower() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receivedPower, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receivedPower === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receivedPower() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receivedPower) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].receivedPower(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receivedPower === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receivedPower() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receivedPower, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['receiverState'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['receiverState'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['receiverState'].push(function(property, value) {
		if (property === 'receiverState') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receiverState === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receiverState() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receiverState) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].receiverState(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receiverState === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receiverState() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receiverState, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receiverState === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receiverState() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receiverState) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].receiverState(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receiverState === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receiverState() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receiverState, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['transmitterSiteID'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['transmitterSiteID'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['transmitterSiteID'].push(function(property, value) {
		if (property === 'transmitterSiteID') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterSiteID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterSiteID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterSiteID) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].transmitterSiteID(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterSiteID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterSiteID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterSiteID, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterSiteID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterSiteID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterSiteID) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].transmitterSiteID(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterSiteID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterSiteID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterSiteID, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['transmitterApplicationID'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['transmitterApplicationID'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['transmitterApplicationID'].push(function(property, value) {
		if (property === 'transmitterApplicationID') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterApplicationID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterApplicationID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterApplicationID) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].transmitterApplicationID(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterApplicationID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterApplicationID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterApplicationID, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterApplicationID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterApplicationID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterApplicationID) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].transmitterApplicationID(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterApplicationID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterApplicationID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterApplicationID, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['transmitterEntityID'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['transmitterEntityID'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['transmitterEntityID'].push(function(property, value) {
		if (property === 'transmitterEntityID') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterEntityID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterEntityID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterEntityID) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].transmitterEntityID(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterEntityID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterEntityID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterEntityID, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterEntityID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterEntityID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterEntityID) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].transmitterEntityID(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterEntityID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterEntityID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterEntityID, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['transmitterRadioID'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['transmitterRadioID'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode']['ACTION']['transmitterRadioID'].push(function(property, value) {
		if (property === 'transmitterRadioID') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterRadioID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterRadioID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterRadioID) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].transmitterRadioID(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterRadioID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterRadioID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterRadioID, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterRadioID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterRadioID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterRadioID) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].transmitterRadioID(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterRadioID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterRadioID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterRadioID, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1']['ACTION']['messageResult'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1']['ACTION']['messageResult'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1']['ACTION']['messageResult'].push(function(property, value) {
		if (property === 'messageResult') {
			X3DJSON.nodeUtil("Scene","ReceiverOutput1","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].messageResult === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].messageResult() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].messageResult, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ReceiverOutput1","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].messageResult === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].messageResult() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].messageResult, __eventTime);
    if (X3DJSON.nodeUtil("Scene","SignalPduReadIntervalClock")) {
X3DJSON.nodeUtil("Scene","SignalPduReadIntervalClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].update(X3DJSON.nodeUtil("Scene","SignalPduReadIntervalClock","cycleTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].update(X3DJSON.nodeUtil("Scene","SignalPduReadIntervalClock","cycleTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","SignalPduWriteIntervalClock")) {
X3DJSON.nodeUtil("Scene","SignalPduWriteIntervalClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].update(X3DJSON.nodeUtil("Scene","SignalPduWriteIntervalClock","cycleTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].update(X3DJSON.nodeUtil("Scene","SignalPduWriteIntervalClock","cycleTime"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['active'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['active'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['active'].push(function(property, value) {
		if (property === 'active') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].active === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].active() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].active) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].active(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].active === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].active() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].active, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].active === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].active() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].active) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].active(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].active === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].active() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].active, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['timestamp'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['timestamp'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['timestamp'].push(function(property, value) {
		if (property === 'timestamp') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].timestamp === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].timestamp() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].timestamp) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].timestamp(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].timestamp === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].timestamp() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].timestamp, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].timestamp === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].timestamp() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].timestamp) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].timestamp(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].timestamp === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].timestamp() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].timestamp, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['isRtpHeaderHeard'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['isRtpHeaderHeard'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['isRtpHeaderHeard'].push(function(property, value) {
		if (property === 'isRtpHeaderHeard') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].isRtpHeaderHeard === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].isRtpHeaderHeard() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].isRtpHeaderHeard) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].isRtpHeaderHeard(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].isRtpHeaderHeard === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].isRtpHeaderHeard() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].isRtpHeaderHeard, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].isRtpHeaderHeard === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].isRtpHeaderHeard() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].isRtpHeaderHeard) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].isRtpHeaderHeard(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].isRtpHeaderHeard === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].isRtpHeaderHeard() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].isRtpHeaderHeard, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['radioID'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['radioID'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['radioID'].push(function(property, value) {
		if (property === 'radioID') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].radioID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].radioID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].radioID) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].radioID(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].radioID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].radioID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].radioID, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].radioID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].radioID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].radioID) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].radioID(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].radioID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].radioID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].radioID, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['encodingScheme'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['encodingScheme'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['encodingScheme'].push(function(property, value) {
		if (property === 'encodingScheme') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].encodingScheme === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].encodingScheme() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].encodingScheme) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].encodingScheme(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].encodingScheme === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].encodingScheme() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].encodingScheme, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].encodingScheme === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].encodingScheme() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].encodingScheme) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].encodingScheme(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].encodingScheme === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].encodingScheme() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].encodingScheme, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['tdlType'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['tdlType'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['tdlType'].push(function(property, value) {
		if (property === 'tdlType') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].tdlType === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].tdlType() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].tdlType) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].tdlType(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].tdlType === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].tdlType() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].tdlType, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].tdlType === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].tdlType() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].tdlType) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].tdlType(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].tdlType === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].tdlType() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].tdlType, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['sampleRate'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['sampleRate'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['sampleRate'].push(function(property, value) {
		if (property === 'sampleRate') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].sampleRate === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].sampleRate() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].sampleRate) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].sampleRate(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].sampleRate === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].sampleRate() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].sampleRate, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].sampleRate === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].sampleRate() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].sampleRate) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].sampleRate(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].sampleRate === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].sampleRate() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].sampleRate, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['samples'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['samples'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['samples'].push(function(property, value) {
		if (property === 'samples') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].samples === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].samples() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].samples) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].samples(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].samples === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].samples() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].samples, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].samples === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].samples() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].samples) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].samples(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].samples === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].samples() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].samples, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['dataLength'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['dataLength'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['dataLength'].push(function(property, value) {
		if (property === 'dataLength') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].dataLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].dataLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].dataLength) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].dataLength(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].dataLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].dataLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].dataLength, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].dataLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].dataLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].dataLength) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].dataLength(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].dataLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].dataLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].dataLength, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data00'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data00'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data00'].push(function(property, value) {
		if (property === 'data00') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data00 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data00() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data00) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].data00(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data00 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data00() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data00, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data00 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data00() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data00) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].data00(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data00 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data00() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data00, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data01'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data01'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data01'].push(function(property, value) {
		if (property === 'data01') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data01 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data01() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data01) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data01(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data01 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data01() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data01, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data01 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data01() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data01) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data01(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data01 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data01() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data01, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data02'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data02'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data02'].push(function(property, value) {
		if (property === 'data02') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data02 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data02() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data02) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data02(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data02 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data02() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data02, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data02 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data02() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data02) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data02(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data02 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data02() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data02, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data03'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data03'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data03'].push(function(property, value) {
		if (property === 'data03') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data03 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data03() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data03) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data03(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data03 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data03() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data03, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data03 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data03() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data03) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data03(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data03 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data03() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data03, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data04'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data04'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data04'].push(function(property, value) {
		if (property === 'data04') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data04 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data04() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data04) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data04(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data04 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data04() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data04, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data04 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data04() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data04) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data04(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data04 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data04() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data04, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data05'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data05'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data05'].push(function(property, value) {
		if (property === 'data05') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data05 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data05() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data05) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data05(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data05 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data05() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data05, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data05 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data05() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data05) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data05(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data05 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data05() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data05, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data06'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data06'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data06'].push(function(property, value) {
		if (property === 'data06') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data06 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data06() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data06) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data06(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data06 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data06() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data06, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data06 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data06() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data06) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data06(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data06 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data06() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data06, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data07'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data07'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data07'].push(function(property, value) {
		if (property === 'data07') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data07 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data07() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data07) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data07(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data07 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data07() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data07, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data07 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data07() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data07) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data07(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data07 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data07() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data07, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data08'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data08'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data08'].push(function(property, value) {
		if (property === 'data08') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data08 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data08() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data08) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data08(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data08 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data08() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data08, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data08 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data08() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data08) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data08(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data08 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data08() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data08, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data09'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data09'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data09'].push(function(property, value) {
		if (property === 'data09') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data09 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data09() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data09) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data09(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data09 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data09() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data09, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data09 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data09() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data09) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data09(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data09 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data09() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data09, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data10'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data10'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode']['ACTION']['data10'].push(function(property, value) {
		if (property === 'data10') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data10 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data10() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data10) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data10(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data10 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data10() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data10, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data10 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data10() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data10) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data10(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data10 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data10() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data10, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1']['ACTION']['messageResult'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1']['ACTION']['messageResult'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1']['ACTION']['messageResult'].push(function(property, value) {
		if (property === 'messageResult') {
			X3DJSON.nodeUtil("Scene","SignalOutput1","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].messageResult === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].messageResult() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].messageResult, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SignalOutput1","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].messageResult === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].messageResult() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].messageResult, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2']['ACTION']['messageResult'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2']['ACTION']['messageResult'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2']['ACTION']['messageResult'].push(function(property, value) {
		if (property === 'messageResult') {
			X3DJSON.nodeUtil("Scene","SignalOutput2","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].messageResult === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].messageResult() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].messageResult, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SignalOutput2","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].messageResult === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].messageResult() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].messageResult, __eventTime);
    if (X3DJSON.nodeUtil("Scene","TransmitterPduReadIntervalClock")) {
X3DJSON.nodeUtil("Scene","TransmitterPduReadIntervalClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].update(X3DJSON.nodeUtil("Scene","TransmitterPduReadIntervalClock","cycleTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].update(X3DJSON.nodeUtil("Scene","TransmitterPduReadIntervalClock","cycleTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TransmitterPduWriteIntervalClock")) {
X3DJSON.nodeUtil("Scene","TransmitterPduWriteIntervalClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].update(X3DJSON.nodeUtil("Scene","TransmitterPduWriteIntervalClock","cycleTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].update(X3DJSON.nodeUtil("Scene","TransmitterPduWriteIntervalClock","cycleTime"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['active'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['active'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['active'].push(function(property, value) {
		if (property === 'active') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].active === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].active() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].active) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].active(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].active === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].active() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].active, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].active === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].active() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].active) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].active(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].active === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].active() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].active, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['timestamp'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['timestamp'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['timestamp'].push(function(property, value) {
		if (property === 'timestamp') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].timestamp === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].timestamp() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].timestamp) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].timestamp(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].timestamp === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].timestamp() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].timestamp, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].timestamp === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].timestamp() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].timestamp) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].timestamp(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].timestamp === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].timestamp() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].timestamp, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['isRtpHeaderHeard'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['isRtpHeaderHeard'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['isRtpHeaderHeard'].push(function(property, value) {
		if (property === 'isRtpHeaderHeard') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].isRtpHeaderHeard === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].isRtpHeaderHeard() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].isRtpHeaderHeard) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].isRtpHeaderHeard(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].isRtpHeaderHeard === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].isRtpHeaderHeard() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].isRtpHeaderHeard, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].isRtpHeaderHeard === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].isRtpHeaderHeard() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].isRtpHeaderHeard) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].isRtpHeaderHeard(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].isRtpHeaderHeard === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].isRtpHeaderHeard() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].isRtpHeaderHeard, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['radioID'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['radioID'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['radioID'].push(function(property, value) {
		if (property === 'radioID') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioID) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].radioID(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioID, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioID) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].radioID(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioID, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['antennaLocation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['antennaLocation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['antennaLocation'].push(function(property, value) {
		if (property === 'antennaLocation') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaLocation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaLocation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaLocation) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].antennaLocation(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaLocation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaLocation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaLocation, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaLocation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaLocation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaLocation) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].antennaLocation(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaLocation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaLocation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaLocation, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['antennaPatternLength'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['antennaPatternLength'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['antennaPatternLength'].push(function(property, value) {
		if (property === 'antennaPatternLength') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternLength) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].antennaPatternLength(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternLength, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternLength) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].antennaPatternLength(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternLength, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['antennaPatternType'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['antennaPatternType'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['antennaPatternType'].push(function(property, value) {
		if (property === 'antennaPatternType') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternType === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternType() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternType) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].antennaPatternType(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternType === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternType() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternType, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternType === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternType() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternType) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].antennaPatternType(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternType === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternType() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternType, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['cryptoKeyID'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['cryptoKeyID'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['cryptoKeyID'].push(function(property, value) {
		if (property === 'cryptoKeyID') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoKeyID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoKeyID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoKeyID) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].cryptoKeyID(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoKeyID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoKeyID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoKeyID, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoKeyID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoKeyID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoKeyID) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].cryptoKeyID(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoKeyID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoKeyID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoKeyID, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['cryptoSytem'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['cryptoSytem'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['cryptoSytem'].push(function(property, value) {
		if (property === 'cryptoSytem') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoSytem === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoSytem() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoSytem) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].cryptoSytem(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoSytem === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoSytem() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoSytem, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoSytem === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoSytem() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoSytem) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].cryptoSytem(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoSytem === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoSytem() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoSytem, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['frequency'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['frequency'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['frequency'].push(function(property, value) {
		if (property === 'frequency') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].frequency === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].frequency() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].frequency) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].frequency(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].frequency === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].frequency() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].frequency, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].frequency === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].frequency() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].frequency) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].frequency(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].frequency === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].frequency() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].frequency, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['inputSource'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['inputSource'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['inputSource'].push(function(property, value) {
		if (property === 'inputSource') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].inputSource === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].inputSource() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].inputSource) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].inputSource(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].inputSource === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].inputSource() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].inputSource, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].inputSource === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].inputSource() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].inputSource) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].inputSource(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].inputSource === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].inputSource() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].inputSource, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['lengthOfModulationParameters'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['lengthOfModulationParameters'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['lengthOfModulationParameters'].push(function(property, value) {
		if (property === 'lengthOfModulationParameters') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].lengthOfModulationParameters === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].lengthOfModulationParameters() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].lengthOfModulationParameters) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].lengthOfModulationParameters(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].lengthOfModulationParameters === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].lengthOfModulationParameters() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].lengthOfModulationParameters, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].lengthOfModulationParameters === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].lengthOfModulationParameters() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].lengthOfModulationParameters) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].lengthOfModulationParameters(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].lengthOfModulationParameters === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].lengthOfModulationParameters() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].lengthOfModulationParameters, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['modulationTypeDetail'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['modulationTypeDetail'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['modulationTypeDetail'].push(function(property, value) {
		if (property === 'modulationTypeDetail') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeDetail === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeDetail() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeDetail) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].modulationTypeDetail(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeDetail === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeDetail() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeDetail, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeDetail === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeDetail() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeDetail) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].modulationTypeDetail(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeDetail === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeDetail() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeDetail, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['modulationTypeMajor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['modulationTypeMajor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['modulationTypeMajor'].push(function(property, value) {
		if (property === 'modulationTypeMajor') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeMajor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeMajor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeMajor) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].modulationTypeMajor(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeMajor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeMajor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeMajor, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeMajor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeMajor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeMajor) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].modulationTypeMajor(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeMajor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeMajor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeMajor, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['modulationTypeSpreadSpectrum'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['modulationTypeSpreadSpectrum'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['modulationTypeSpreadSpectrum'].push(function(property, value) {
		if (property === 'modulationTypeSpreadSpectrum') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSpreadSpectrum === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSpreadSpectrum() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSpreadSpectrum) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].modulationTypeSpreadSpectrum(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSpreadSpectrum === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSpreadSpectrum() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSpreadSpectrum, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSpreadSpectrum === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSpreadSpectrum() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSpreadSpectrum) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].modulationTypeSpreadSpectrum(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSpreadSpectrum === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSpreadSpectrum() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSpreadSpectrum, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['modulationTypeSystem'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['modulationTypeSystem'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['modulationTypeSystem'].push(function(property, value) {
		if (property === 'modulationTypeSystem') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSystem === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSystem() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSystem) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].modulationTypeSystem(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSystem === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSystem() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSystem, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSystem === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSystem() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSystem) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].modulationTypeSystem(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSystem === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSystem() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSystem, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['power'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['power'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['power'].push(function(property, value) {
		if (property === 'power') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].power === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].power() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].power) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].power(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].power === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].power() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].power, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].power === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].power() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].power) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].power(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].power === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].power() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].power, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['radioEntityTypeCategory'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['radioEntityTypeCategory'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['radioEntityTypeCategory'].push(function(property, value) {
		if (property === 'radioEntityTypeCategory') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCategory === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCategory() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCategory) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].radioEntityTypeCategory(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCategory === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCategory() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCategory, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCategory === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCategory() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCategory) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].radioEntityTypeCategory(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCategory === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCategory() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCategory, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['radioEntityTypeCountry'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['radioEntityTypeCountry'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['radioEntityTypeCountry'].push(function(property, value) {
		if (property === 'radioEntityTypeCountry') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCountry === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCountry() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCountry) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].radioEntityTypeCountry(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCountry === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCountry() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCountry, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCountry === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCountry() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCountry) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].radioEntityTypeCountry(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCountry === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCountry() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCountry, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['radioEntityTypeDomain'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['radioEntityTypeDomain'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['radioEntityTypeDomain'].push(function(property, value) {
		if (property === 'radioEntityTypeDomain') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeDomain === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeDomain() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeDomain) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].radioEntityTypeDomain(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeDomain === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeDomain() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeDomain, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeDomain === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeDomain() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeDomain) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].radioEntityTypeDomain(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeDomain === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeDomain() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeDomain, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['radioEntityTypeKind'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['radioEntityTypeKind'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['radioEntityTypeKind'].push(function(property, value) {
		if (property === 'radioEntityTypeKind') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeKind === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeKind() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeKind) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].radioEntityTypeKind(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeKind === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeKind() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeKind, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeKind === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeKind() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeKind) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].radioEntityTypeKind(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeKind === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeKind() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeKind, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['radioEntityTypeNomenclature'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['radioEntityTypeNomenclature'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['radioEntityTypeNomenclature'].push(function(property, value) {
		if (property === 'radioEntityTypeNomenclature') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclature === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclature() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclature) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].radioEntityTypeNomenclature(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclature === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclature() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclature, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclature === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclature() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclature) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].radioEntityTypeNomenclature(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclature === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclature() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclature, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['radioEntityTypeNomenclatureVersion'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['radioEntityTypeNomenclatureVersion'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['radioEntityTypeNomenclatureVersion'].push(function(property, value) {
		if (property === 'radioEntityTypeNomenclatureVersion') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclatureVersion === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclatureVersion() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclatureVersion) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].radioEntityTypeNomenclatureVersion(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclatureVersion === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclatureVersion() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclatureVersion, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclatureVersion === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclatureVersion() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclatureVersion) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].radioEntityTypeNomenclatureVersion(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclatureVersion === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclatureVersion() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclatureVersion, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['relativeAntennaLocation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['relativeAntennaLocation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['relativeAntennaLocation'].push(function(property, value) {
		if (property === 'relativeAntennaLocation') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].relativeAntennaLocation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].relativeAntennaLocation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].relativeAntennaLocation) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].relativeAntennaLocation(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].relativeAntennaLocation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].relativeAntennaLocation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].relativeAntennaLocation, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].relativeAntennaLocation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].relativeAntennaLocation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].relativeAntennaLocation) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].relativeAntennaLocation(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].relativeAntennaLocation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].relativeAntennaLocation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].relativeAntennaLocation, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['transmitFrequencyBandwidth'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['transmitFrequencyBandwidth'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['transmitFrequencyBandwidth'].push(function(property, value) {
		if (property === 'transmitFrequencyBandwidth') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitFrequencyBandwidth === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitFrequencyBandwidth() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitFrequencyBandwidth) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].transmitFrequencyBandwidth(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitFrequencyBandwidth === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitFrequencyBandwidth() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitFrequencyBandwidth, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitFrequencyBandwidth === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitFrequencyBandwidth() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitFrequencyBandwidth) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].transmitFrequencyBandwidth(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitFrequencyBandwidth === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitFrequencyBandwidth() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitFrequencyBandwidth, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['transmitState'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['transmitState'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode']['ACTION']['transmitState'].push(function(property, value) {
		if (property === 'transmitState') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitState === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitState() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitState) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].transmitState(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitState === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitState() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitState, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitState === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitState() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitState) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].transmitState(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitState === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitState() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitState, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1']['ACTION']['messageResult'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1']['ACTION']['messageResult'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1']['ACTION']['messageResult'].push(function(property, value) {
		if (property === 'messageResult') {
			X3DJSON.nodeUtil("Scene","TransmitterOutput1","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].messageResult === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].messageResult() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].messageResult, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TransmitterOutput1","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].messageResult === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].messageResult() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].messageResult, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2']['ACTION']['messageResult'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2']['ACTION']['messageResult'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2']['ACTION']['messageResult'].push(function(property, value) {
		if (property === 'messageResult') {
			X3DJSON.nodeUtil("Scene","TransmitterOutput2","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].messageResult === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].messageResult() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].messageResult, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TransmitterOutput2","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].messageResult === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].messageResult() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].messageResult, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3']['ACTION']['messageResult'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3']['ACTION']['messageResult'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3']['ACTION']['messageResult'].push(function(property, value) {
		if (property === 'messageResult') {
			X3DJSON.nodeUtil("Scene","TransmitterOutput3","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].messageResult === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].messageResult() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].messageResult, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TransmitterOutput3","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].messageResult === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].messageResult() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].messageResult, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].update(X3DJSON.nodeUtil("Scene","ReceiverPduReadIntervalClock","cycleTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].update(X3DJSON.nodeUtil("Scene","ReceiverPduWriteIntervalClock","cycleTime"), __eventTime);
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].active === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].active() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].active) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].active(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].active === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].active() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].active, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].timestamp === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].timestamp() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].timestamp) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].timestamp(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].timestamp === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].timestamp() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].timestamp, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].isRtpHeaderHeard === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].isRtpHeaderHeard() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].isRtpHeaderHeard) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].isRtpHeaderHeard(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].isRtpHeaderHeard === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].isRtpHeaderHeard() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].isRtpHeaderHeard, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].radioID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].radioID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].radioID) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].radioID(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].radioID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].radioID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].radioID, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receivedPower === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receivedPower() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receivedPower) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].receivedPower(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receivedPower === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receivedPower() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receivedPower, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receiverState === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receiverState() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receiverState) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].receiverState(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receiverState === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receiverState() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].receiverState, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterSiteID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterSiteID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterSiteID) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].transmitterSiteID(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterSiteID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterSiteID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterSiteID, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterApplicationID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterApplicationID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterApplicationID) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].transmitterApplicationID(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterApplicationID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterApplicationID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterApplicationID, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterEntityID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterEntityID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterEntityID) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].transmitterEntityID(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterEntityID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterEntityID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterEntityID, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterRadioID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterRadioID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterRadioID) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].transmitterRadioID(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterRadioID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterRadioID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverPduScriptNode'].transmitterRadioID, __eventTime);
		}
			X3DJSON.nodeUtil("Scene","ReceiverOutput1","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].messageResult === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].messageResult() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['ReceiverOutputAssembler1'].messageResult, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].update(X3DJSON.nodeUtil("Scene","SignalPduReadIntervalClock","cycleTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].update(X3DJSON.nodeUtil("Scene","SignalPduWriteIntervalClock","cycleTime"), __eventTime);
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].active === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].active() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].active) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].active(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].active === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].active() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].active, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].timestamp === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].timestamp() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].timestamp) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].timestamp(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].timestamp === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].timestamp() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].timestamp, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].isRtpHeaderHeard === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].isRtpHeaderHeard() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].isRtpHeaderHeard) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].isRtpHeaderHeard(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].isRtpHeaderHeard === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].isRtpHeaderHeard() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].isRtpHeaderHeard, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].radioID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].radioID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].radioID) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].radioID(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].radioID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].radioID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].radioID, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].encodingScheme === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].encodingScheme() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].encodingScheme) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].encodingScheme(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].encodingScheme === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].encodingScheme() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].encodingScheme, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].tdlType === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].tdlType() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].tdlType) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].tdlType(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].tdlType === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].tdlType() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].tdlType, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].sampleRate === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].sampleRate() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].sampleRate) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].sampleRate(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].sampleRate === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].sampleRate() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].sampleRate, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].samples === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].samples() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].samples) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].samples(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].samples === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].samples() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].samples, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].dataLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].dataLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].dataLength) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].dataLength(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].dataLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].dataLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].dataLength, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data00 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data00() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data00) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].data00(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data00 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data00() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data00, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data01 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data01() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data01) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data01(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data01 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data01() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data01, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data02 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data02() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data02) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data02(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data02 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data02() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data02, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data03 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data03() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data03) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data03(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data03 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data03() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data03, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data04 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data04() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data04) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data04(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data04 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data04() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data04, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data05 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data05() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data05) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data05(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data05 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data05() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data05, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data06 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data06() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data06) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data06(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data06 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data06() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data06, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data07 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data07() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data07) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data07(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data07 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data07() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data07, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data08 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data08() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data08) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data08(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data08 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data08() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data08, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data09 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data09() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data09) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data09(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data09 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data09() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data09, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data10 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data10() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data10) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].data10(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data10 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data10() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalPduScriptNode'].data10, __eventTime);
		}
			X3DJSON.nodeUtil("Scene","SignalOutput1","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].messageResult === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].messageResult() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler1'].messageResult, __eventTime);
			X3DJSON.nodeUtil("Scene","SignalOutput2","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].messageResult === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].messageResult() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['SignalOutputAssembler2'].messageResult, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].update(X3DJSON.nodeUtil("Scene","TransmitterPduReadIntervalClock","cycleTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].update(X3DJSON.nodeUtil("Scene","TransmitterPduWriteIntervalClock","cycleTime"), __eventTime);
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].active === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].active() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].active) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].active(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].active === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].active() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].active, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].timestamp === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].timestamp() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].timestamp) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].timestamp(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].timestamp === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].timestamp() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].timestamp, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].isRtpHeaderHeard === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].isRtpHeaderHeard() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].isRtpHeaderHeard) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].isRtpHeaderHeard(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].isRtpHeaderHeard === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].isRtpHeaderHeard() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].isRtpHeaderHeard, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioID) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].radioID(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioID, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaLocation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaLocation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaLocation) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].antennaLocation(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaLocation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaLocation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaLocation, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternLength) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].antennaPatternLength(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternLength === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternLength() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternLength, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternType === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternType() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternType) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].antennaPatternType(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternType === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternType() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].antennaPatternType, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoKeyID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoKeyID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoKeyID) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].cryptoKeyID(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoKeyID === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoKeyID() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoKeyID, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoSytem === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoSytem() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoSytem) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].cryptoSytem(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoSytem === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoSytem() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].cryptoSytem, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].frequency === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].frequency() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].frequency) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].frequency(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].frequency === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].frequency() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].frequency, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].inputSource === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].inputSource() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].inputSource) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].inputSource(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].inputSource === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].inputSource() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].inputSource, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].lengthOfModulationParameters === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].lengthOfModulationParameters() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].lengthOfModulationParameters) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].lengthOfModulationParameters(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].lengthOfModulationParameters === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].lengthOfModulationParameters() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].lengthOfModulationParameters, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeDetail === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeDetail() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeDetail) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].modulationTypeDetail(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeDetail === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeDetail() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeDetail, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeMajor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeMajor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeMajor) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].modulationTypeMajor(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeMajor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeMajor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeMajor, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSpreadSpectrum === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSpreadSpectrum() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSpreadSpectrum) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].modulationTypeSpreadSpectrum(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSpreadSpectrum === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSpreadSpectrum() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSpreadSpectrum, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSystem === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSystem() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSystem) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].modulationTypeSystem(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSystem === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSystem() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].modulationTypeSystem, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].power === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].power() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].power) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].power(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].power === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].power() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].power, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCategory === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCategory() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCategory) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].radioEntityTypeCategory(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCategory === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCategory() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCategory, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCountry === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCountry() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCountry) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].radioEntityTypeCountry(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCountry === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCountry() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeCountry, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeDomain === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeDomain() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeDomain) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].radioEntityTypeDomain(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeDomain === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeDomain() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeDomain, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeKind === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeKind() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeKind) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].radioEntityTypeKind(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeKind === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeKind() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeKind, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclature === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclature() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclature) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].radioEntityTypeNomenclature(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclature === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclature() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclature, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclatureVersion === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclatureVersion() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclatureVersion) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].radioEntityTypeNomenclatureVersion(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclatureVersion === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclatureVersion() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].radioEntityTypeNomenclatureVersion, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].relativeAntennaLocation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].relativeAntennaLocation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].relativeAntennaLocation) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].relativeAntennaLocation(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].relativeAntennaLocation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].relativeAntennaLocation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].relativeAntennaLocation, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitFrequencyBandwidth === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitFrequencyBandwidth() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitFrequencyBandwidth) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].transmitFrequencyBandwidth(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitFrequencyBandwidth === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitFrequencyBandwidth() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitFrequencyBandwidth, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitState === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitState() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitState) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].transmitState(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitState === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitState() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterPduScriptNode'].transmitState, __eventTime);
		}
			X3DJSON.nodeUtil("Scene","TransmitterOutput1","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].messageResult === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].messageResult() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler1'].messageResult, __eventTime);
			X3DJSON.nodeUtil("Scene","TransmitterOutput2","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].messageResult === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].messageResult() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler2'].messageResult, __eventTime);
			X3DJSON.nodeUtil("Scene","TransmitterOutput3","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].messageResult === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].messageResult() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/DistributedInteractiveSimulation/RadioCommunicationsPrototypes.json']['TransmitterOutputAssembler3'].messageResult, __eventTime);