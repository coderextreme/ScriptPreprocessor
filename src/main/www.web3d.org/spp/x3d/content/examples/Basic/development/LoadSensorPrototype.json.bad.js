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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'] = function() {
	this.set_ClockNode = function (value) {
		try {
			this.proxy.ClockNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ClockNode '+e);
			console.error('Problems setting ClockNode',e);
		}
	};
	this.ClockNode_changed = function () {
		var value = this.ClockNode;
		return value;
	};
	try {
		this.ClockNode = X3DJSON.nodeUtil("Scene","Clock");
	} catch (e) {
		console.log('Problems setting ClockNode '+e);
		console.error('Problems setting ClockNode',e);
	}
	this.set_loopStart = function (value) {
		try {
			this.proxy.loopStart = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting loopStart '+e);
			console.error('Problems setting loopStart',e);
		}
	};
	this.loopStart_changed = function () {
		var value = this.loopStart;
		return value;
	};
	try {
		this.loopStart = new SFTime();
	} catch (e) {
		console.log('Problems setting loopStart '+e);
		console.error('Problems setting loopStart',e);
	}
	this.set_fraction = function (value) {
		try {
			this.proxy.fraction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fraction '+e);
			console.error('Problems setting fraction',e);
		}
	};
	this.fraction_changed = function () {
		var value = this.fraction;
		return value;
	};
	try {
		this.fraction = new SFFloat();
	} catch (e) {
		console.log('Problems setting fraction '+e);
		console.error('Problems setting fraction',e);
	}
	this.set_priorFraction = function (value) {
		try {
			this.proxy.priorFraction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting priorFraction '+e);
			console.error('Problems setting priorFraction',e);
		}
	};
	this.priorFraction_changed = function () {
		var value = this.priorFraction;
		return value;
	};
	try {
		this.priorFraction = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting priorFraction '+e);
		console.error('Problems setting priorFraction',e);
	}
	this.set_progress = function (value) {
		try {
			this.proxy.progress = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting progress '+e);
			console.error('Problems setting progress',e);
		}
	};
	this.progress_changed = function () {
		var value = this.progress;
		return value;
	};
	try {
		this.progress = new SFFloat();
	} catch (e) {
		console.log('Problems setting progress '+e);
		console.error('Problems setting progress',e);
	}
	this.set_watchList = function (value) {
		try {
			this.proxy.watchList = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting watchList '+e);
			console.error('Problems setting watchList',e);
		}
	};
	this.watchList_changed = function () {
		var value = this.watchList;
		return value;
	};
	try {
		this.watchList = new MFNode();
	} catch (e) {
		console.log('Problems setting watchList '+e);
		console.error('Problems setting watchList',e);
	}
	this.set_watchList = function (value) {
		try {
			this.proxy.watchList = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting watchList '+e);
			console.error('Problems setting watchList',e);
		}
	};
	this.watchList_changed = function () {
		var value = this.watchList;
		return value;
	};
	try {
		this.watchList = new MFNode();
	} catch (e) {
		console.log('Problems setting watchList '+e);
		console.error('Problems setting watchList',e);
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
	this.set_isLoaded = function (value) {
		try {
			this.proxy.isLoaded = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isLoaded '+e);
			console.error('Problems setting isLoaded',e);
		}
	};
	this.isLoaded_changed = function () {
		var value = this.isLoaded;
		return value;
	};
	try {
		this.isLoaded = new SFBool();
	} catch (e) {
		console.log('Problems setting isLoaded '+e);
		console.error('Problems setting isLoaded',e);
	}
	this.set_loadTime = function (value) {
		try {
			this.proxy.loadTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting loadTime '+e);
			console.error('Problems setting loadTime',e);
		}
	};
	this.loadTime_changed = function () {
		var value = this.loadTime;
		return value;
	};
	try {
		this.loadTime = new SFTime();
	} catch (e) {
		console.log('Problems setting loadTime '+e);
		console.error('Problems setting loadTime',e);
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
		this.traceEnabled = new SFBool(false);
	} catch (e) {
		console.log('Problems setting traceEnabled '+e);
		console.error('Problems setting traceEnabled',e);
	}


ecmascript:

	this.initialize = function ()
{
	enabled = X3DJSON.nodeUtil("Scene","Clock", "enabled");
	this.tracePrint ('this.initialize() enabled=' + enabled);
	if (enabled)
	{
		this.proxy.isActive = true;
		// this.proxy.isLoaded event only sent upon completion
		this.proxy.progress = 0.0;
		this.tracePrintEvents ();
		timeOut = X3DJSON.nodeUtil("Scene","Clock", "cycleInterval");
		this.tracePrint ('timeOut=' + timeOut);
		if (timeOut <= 0.0) // instantaneous, no loop
		{
			this.proxy.isActive = false;
			this.proxy.isLoaded = true;
			this.proxy.progress = 1.0;
			this.proxy.loadTime = timestamp;
			this.tracePrintEvents ();
		}
	}
};

	this.fraction = function (value, timestamp)
{
	enabled = X3DJSON.nodeUtil("Scene","Clock", "enabled");
	if (enabled)
		this.tracePrint ('this.proxy.progress=' + value + ', this.proxy.priorFraction=' + this.proxy.priorFraction);
	// use this.proxy.priorFraction to check for looping, then stop loop
	if (enabled && ((value >=1) || (value < this.proxy.priorFraction)))
	{
		this.proxy.isActive = false;
		this.proxy.isLoaded = true;
		this.proxy.loadTime = timestamp;
		this.proxy.progress = 1;
		this.tracePrintEvents ();
		this.tracePrint ('complete');
                this.proxy.loopStart = true;
	}
	else this.proxy.progress= value; // output event
	this.proxy.priorFraction = this.proxy.progress;
};

	this.set_watchList = function (value, timestamp)
{
	this.proxy.watchList = value;
};

	this.tracePrintEvents = function ()
{
	this.tracePrint ('this.proxy.isActive=' + this.proxy.isActive);
	this.tracePrint ('this.proxy.isLoaded=' + this.proxy.isLoaded);
	this.tracePrint ('this.proxy.loadTime=' + this.proxy.loadTime);
	this.tracePrint ('this.proxy.progress=' + this.proxy.progress);
};

	this.tracePrint = function (outputString)
{
	if (this.proxy.traceEnabled) console.error ('[LoadSensor]' + outputString);
};

	this.alwaysPrint = function (outputString)
{
	console.error ('[LoadSensor]' + outputString);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript']['ACTION']['loopStart'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript']['ACTION']['loopStart'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript']['ACTION']['loopStart'].push(function(property, value) {
		if (property === 'loopStart') {
			X3DJSON.nodeUtil("Scene","Clock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'].loopStart === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'].loopStart() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'].loopStart, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Clock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'].loopStart === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'].loopStart() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'].loopStart, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript']['ACTION']['isActive'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript']['ACTION']['isActive'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript']['ACTION']['isActive'].push(function(property, value) {
		if (property === 'isActive') {
			X3DJSON.nodeUtil("Scene","Clock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'].isActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'].isActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'].isActive, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Clock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'].isActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'].isActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'].isActive, __eventTime);
    if (X3DJSON.nodeUtil("Scene","Clock")) {
X3DJSON.nodeUtil("Scene","Clock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'].fraction(X3DJSON.nodeUtil("Scene","Clock","fraction"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'].fraction(X3DJSON.nodeUtil("Scene","Clock","fraction"), __eventTime);
			X3DJSON.nodeUtil("Scene","Clock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'].loopStart === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'].loopStart() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'].loopStart, __eventTime);
			X3DJSON.nodeUtil("Scene","Clock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'].isActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'].isActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'].isActive, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/LoadSensorPrototype.json']['LoadSensorScript'].fraction(X3DJSON.nodeUtil("Scene","Clock","fraction"), __eventTime);