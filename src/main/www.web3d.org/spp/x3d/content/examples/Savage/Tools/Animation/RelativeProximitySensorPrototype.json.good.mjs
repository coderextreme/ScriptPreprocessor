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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/RelativeProximitySensorPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/RelativeProximitySensorPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/RelativeProximitySensorPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/RelativeProximitySensorPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/RelativeProximitySensorPrototype.json'][''] = function() {
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
	this.set_locationPrimary = function (value) {
		try {
			this.proxy.locationPrimary = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting locationPrimary '+e);
			console.error('Problems setting locationPrimary',e);
		}
	};
	this.locationPrimary_changed = function () {
		var value = this.locationPrimary;
		return value;
	};
	try {
		this.locationPrimary = new SFVec3f();
	} catch (e) {
		console.log('Problems setting locationPrimary '+e);
		console.error('Problems setting locationPrimary',e);
	}
	this.set_locationPrimary = function (value) {
		try {
			this.proxy.locationPrimary = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting locationPrimary '+e);
			console.error('Problems setting locationPrimary',e);
		}
	};
	this.locationPrimary_changed = function () {
		var value = this.locationPrimary;
		return value;
	};
	try {
		this.locationPrimary = new SFVec3f();
	} catch (e) {
		console.log('Problems setting locationPrimary '+e);
		console.error('Problems setting locationPrimary',e);
	}
	this.set_locationSecondary = function (value) {
		try {
			this.proxy.locationSecondary = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting locationSecondary '+e);
			console.error('Problems setting locationSecondary',e);
		}
	};
	this.locationSecondary_changed = function () {
		var value = this.locationSecondary;
		return value;
	};
	try {
		this.locationSecondary = new SFVec3f();
	} catch (e) {
		console.log('Problems setting locationSecondary '+e);
		console.error('Problems setting locationSecondary',e);
	}
	this.set_locationSecondary = function (value) {
		try {
			this.proxy.locationSecondary = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting locationSecondary '+e);
			console.error('Problems setting locationSecondary',e);
		}
	};
	this.locationSecondary_changed = function () {
		var value = this.locationSecondary;
		return value;
	};
	try {
		this.locationSecondary = new SFVec3f();
	} catch (e) {
		console.log('Problems setting locationSecondary '+e);
		console.error('Problems setting locationSecondary',e);
	}
	this.set_proximityRangeThreshold = function (value) {
		try {
			this.proxy.proximityRangeThreshold = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting proximityRangeThreshold '+e);
			console.error('Problems setting proximityRangeThreshold',e);
		}
	};
	this.proximityRangeThreshold_changed = function () {
		var value = this.proximityRangeThreshold;
		return value;
	};
	try {
		this.proximityRangeThreshold = new SFFloat();
	} catch (e) {
		console.log('Problems setting proximityRangeThreshold '+e);
		console.error('Problems setting proximityRangeThreshold',e);
	}
	this.set_proximityRangeThreshold = function (value) {
		try {
			this.proxy.proximityRangeThreshold = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting proximityRangeThreshold '+e);
			console.error('Problems setting proximityRangeThreshold',e);
		}
	};
	this.proximityRangeThreshold_changed = function () {
		var value = this.proximityRangeThreshold;
		return value;
	};
	try {
		this.proximityRangeThreshold = new SFFloat();
	} catch (e) {
		console.log('Problems setting proximityRangeThreshold '+e);
		console.error('Problems setting proximityRangeThreshold',e);
	}
	this.set_isInRange = function (value) {
		try {
			this.proxy.isInRange = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isInRange '+e);
			console.error('Problems setting isInRange',e);
		}
	};
	this.isInRange_changed = function () {
		var value = this.isInRange;
		return value;
	};
	try {
		this.isInRange = new SFBool();
	} catch (e) {
		console.log('Problems setting isInRange '+e);
		console.error('Problems setting isInRange',e);
	}
	this.set_isInRangeTime = function (value) {
		try {
			this.proxy.isInRangeTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isInRangeTime '+e);
			console.error('Problems setting isInRangeTime',e);
		}
	};
	this.isInRangeTime_changed = function () {
		var value = this.isInRangeTime;
		return value;
	};
	try {
		this.isInRangeTime = new SFTime();
	} catch (e) {
		console.log('Problems setting isInRangeTime '+e);
		console.error('Problems setting isInRangeTime',e);
	}
	this.set_enabled = function (value) {
		try {
			this.proxy.enabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting enabled '+e);
			console.error('Problems setting enabled',e);
		}
	};
	this.enabled_changed = function () {
		var value = this.enabled;
		return value;
	};
	try {
		this.enabled = new SFBool();
	} catch (e) {
		console.log('Problems setting enabled '+e);
		console.error('Problems setting enabled',e);
	}
	this.set_enabled = function (value) {
		try {
			this.proxy.enabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting enabled '+e);
			console.error('Problems setting enabled',e);
		}
	};
	this.enabled_changed = function () {
		var value = this.enabled;
		return value;
	};
	try {
		this.enabled = new SFBool();
	} catch (e) {
		console.log('Problems setting enabled '+e);
		console.error('Problems setting enabled',e);
	}
	this.set_priorDistance = function (value) {
		try {
			this.proxy.priorDistance = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting priorDistance '+e);
			console.error('Problems setting priorDistance',e);
		}
	};
	this.priorDistance_changed = function () {
		var value = this.priorDistance;
		return value;
	};
	try {
		this.priorDistance = new SFFloat(-1);
	} catch (e) {
		console.log('Problems setting priorDistance '+e);
		console.error('Problems setting priorDistance',e);
	}
	this.set_newDistance = function (value) {
		try {
			this.proxy.newDistance = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting newDistance '+e);
			console.error('Problems setting newDistance',e);
		}
	};
	this.newDistance_changed = function () {
		var value = this.newDistance;
		return value;
	};
	try {
		this.newDistance = new SFFloat(-1);
	} catch (e) {
		console.log('Problems setting newDistance '+e);
		console.error('Problems setting newDistance',e);
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


ecmascript:

	this.initialize = function ()
{
	this.tracePrint ('this.initialize(), this.proxy.description=' + this.proxy.description + ', this.proxy.enabled=' + this.proxy.enabled +
		', this.proxy.traceEnabled=' + this.proxy.traceEnabled);
	if (!this.proxy.enabled) return;
	// sensor is this.proxy.enabled, so force initial proximity condition
	this.proxy.priorDistance = this.distance (this.proxy.locationPrimary, this.proxy.locationSecondary);
	if      (this.proxy.priorDistance > this.proxy.proximityRangeThreshold)
        {
		this.proxy.isInRange     = false;
                this.proxy.isInRangeTime = -1;
        }
	else	
        {
        	this.proxy.isInRange     = true;
                this.proxy.isInRangeTime = 0; // TODO change to current timestamp
	}
	this.tracePrint ('this.proxy.isInRange=' + this.proxy.isInRange + ', this.distance=' + this.proxy.priorDistance +
		', this.proxy.proximityRangeThreshold=' + this.proxy.proximityRangeThreshold);
};

	this.distance = function (p1, p2)
{
	return Math.sqrt (
		(p2.x - p1.x) * (p2.x - p1.x) +
		(p2.y - p1.y) * (p2.y - p1.y) +
		(p2.z - p1.z) * (p2.z - p1.z));
};

	this.computeProximity = function (value, timestamp) // triggering value is unused since it comes from different sources
{
	this.proxy.newDistance = this.distance (this.proxy.locationPrimary, this.proxy.locationSecondary);
//	this.tracePrint ('this.proxy.newDistance=' + this.proxy.newDistance);
	// test if proximity gained
	if      ((  this.proxy.newDistance <  this.proxy.proximityRangeThreshold) &&
	         (this.proxy.priorDistance >= this.proxy.proximityRangeThreshold))
	{
		this.proxy.isInRange     = true;
		this.proxy.isInRangeTime = timestamp;
		this.tracePrint ('this.proxy.isInRange=' + this.proxy.isInRange + ', this.proxy.newDistance=' + this.proxy.newDistance);
	}
	// test if proximity lost
	else if ((  this.proxy.newDistance >  this.proxy.proximityRangeThreshold) &&
	         (this.proxy.priorDistance <= this.proxy.proximityRangeThreshold))
	{
		this.proxy.isInRange     = false;
		this.proxy.isInRangeTime = timestamp;
		this.tracePrint ('this.proxy.isInRange=' + this.proxy.isInRange + ', this.proxy.newDistance=' + this.proxy.newDistance);
	}
	this.proxy.priorDistance = this.proxy.newDistance;
};

	this.set_description = function (newDescription)
{
    this.proxy.description = newDescription;
    this.tracePrint ('this.proxy.description=' + this.proxy.description);
};

	this.set_locationPrimary = function (value, timestamp)
{
	this.proxy.locationPrimary = value;
	if (this.proxy.enabled) this.computeProximity (value, timestamp);
};

	this.set_locationSecondary = function (value, timestamp)
{
	this.proxy.locationSecondary = value;
	if (this.proxy.enabled) this.computeProximity (value, timestamp);
};

	this.set_proximityRangeThreshold = function (value, timestamp)
{
	this.proxy.proximityRangeThreshold = value;
};

	this.set_enabled = function (value, timestamp)
{
	this.proxy.enabled = value;
	this.initialize (timestamp);
};

	this.tracePrint = function (outputString)
{
	if (this.proxy.traceEnabled) console.error ('[RelativeProximitySensor] ' + outputString + '');
};

	this.alwaysPrint = function (outputString)
{
	console.error ('[RelativeProximitySensor] ' + outputString + '');
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/RelativeProximitySensorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/RelativeProximitySensorPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/RelativeProximitySensorPrototype.json'][''] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/RelativeProximitySensorPrototype.json']['']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/RelativeProximitySensorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/RelativeProximitySensorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/RelativeProximitySensorPrototype.json'][''] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/RelativeProximitySensorPrototype.json'][''] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/RelativeProximitySensorPrototype.json']['']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/RelativeProximitySensorPrototype.json']['']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/RelativeProximitySensorPrototype.json'][''].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/RelativeProximitySensorPrototype.json']['']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/RelativeProximitySensorPrototype.json']['']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/RelativeProximitySensorPrototype.json'][''].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/RelativeProximitySensorPrototype.json'][''].initialize();

