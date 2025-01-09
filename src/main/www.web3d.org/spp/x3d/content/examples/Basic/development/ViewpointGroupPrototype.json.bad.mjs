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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ViewpointGroupPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ViewpointGroupPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ViewpointGroupPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ViewpointGroupPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ViewpointGroupPrototype.json']['UnbindingControlScript'] = function() {
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
	this.set_ProximityZone = function (value) {
		try {
			this.proxy.ProximityZone = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ProximityZone '+e);
			console.error('Problems setting ProximityZone',e);
		}
	};
	this.ProximityZone_changed = function () {
		var value = this.ProximityZone;
		return value;
	};
	try {
		this.ProximityZone = X3DJSON.nodeUtil("Scene","ProximityZone");
	} catch (e) {
		console.log('Problems setting ProximityZone '+e);
		console.error('Problems setting ProximityZone',e);
	}
	this.set_radius = function (value) {
		try {
			this.proxy.radius = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radius '+e);
			console.error('Problems setting radius',e);
		}
	};
	this.radius_changed = function () {
		var value = this.radius;
		return value;
	};
	try {
		this.radius = new SFFloat();
	} catch (e) {
		console.log('Problems setting radius '+e);
		console.error('Problems setting radius',e);
	}
	this.set_radius = function (value) {
		try {
			this.proxy.radius = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radius '+e);
			console.error('Problems setting radius',e);
		}
	};
	this.radius_changed = function () {
		var value = this.radius;
		return value;
	};
	try {
		this.radius = new SFFloat();
	} catch (e) {
		console.log('Problems setting radius '+e);
		console.error('Problems setting radius',e);
	}
	this.set_viewpointsSwitch = function (value) {
		try {
			this.proxy.viewpointsSwitch = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting viewpointsSwitch '+e);
			console.error('Problems setting viewpointsSwitch',e);
		}
	};
	this.viewpointsSwitch_changed = function () {
		var value = this.viewpointsSwitch;
		return value;
	};
	try {
		this.viewpointsSwitch = X3DJSON.nodeUtil("Scene","ViewpointsSwitch");
	} catch (e) {
		console.log('Problems setting viewpointsSwitch '+e);
		console.error('Problems setting viewpointsSwitch',e);
	}
	this.set_descriptionHolder = function (value) {
		try {
			this.proxy.descriptionHolder = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting descriptionHolder '+e);
			console.error('Problems setting descriptionHolder',e);
		}
	};
	this.descriptionHolder_changed = function () {
		var value = this.descriptionHolder;
		return value;
	};
	try {
		this.descriptionHolder = X3DJSON.nodeUtil("Scene","DescriptionHolder");
	} catch (e) {
		console.log('Problems setting descriptionHolder '+e);
		console.error('Problems setting descriptionHolder',e);
	}
	this.set_displayedHolder = function (value) {
		try {
			this.proxy.displayedHolder = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting displayedHolder '+e);
			console.error('Problems setting displayedHolder',e);
		}
	};
	this.displayedHolder_changed = function () {
		var value = this.displayedHolder;
		return value;
	};
	try {
		this.displayedHolder = X3DJSON.nodeUtil("Scene","DisplayedHolder");
	} catch (e) {
		console.log('Problems setting displayedHolder '+e);
		console.error('Problems setting displayedHolder',e);
	}
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
	this.set_displayed = function (value) {
		try {
			this.proxy.displayed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting displayed '+e);
			console.error('Problems setting displayed',e);
		}
	};
	this.displayed_changed = function () {
		var value = this.displayed;
		return value;
	};
	try {
		this.displayed = new SFBool(true);
	} catch (e) {
		console.log('Problems setting displayed '+e);
		console.error('Problems setting displayed',e);
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
	// since Viewpoints remain on binding stack as before,
	// no initialization action is necessary when implemented natively.
	this.proxy.description = X3DJSON.nodeUtil("Scene","DescriptionHolder", "this.proxy.description");
	this.proxy.displayed = X3DJSON.nodeUtil("Scene","DisplayedHolder", "enabled");
	this.tracePrint ('this.proxy.displayed=' + this.proxy.displayed);
	if (!this.proxy.displayed) X3DJSON.nodeUtil("Scene","ViewpointsSwitch", "whichChoice",  -1);
	this.proxy.set_radius (this.proxy.radius);

	// typecheck valid children nodes:
	this.tracePrint ('X3DJSON.nodeUtil("Scene","ViewpointsSwitch", "choice").length=' + X3DJSON.nodeUtil("Scene","ViewpointsSwitch", "choice").length);
	if (X3DJSON.nodeUtil("Scene","ViewpointsSwitch", "choice").length >= 1)
		for (i=0; i >= X3DJSON.nodeUtil("Scene","ViewpointsSwitch", "choice").length; i)
		{
			// how to check type?
			// if (X3DJSON.nodeUtil("Scene","ViewpointsSwitch", "choice")[i].____ etc.)
			// once type checked, warn if Viewpoint position outside proximity box size
		}
	this.tracePrint ('... this.initialize() complete');
};

	this.isActive = function (activeValue)
{
	// Most likely, viewpoint list actions will be controlled by browser.

	// If viewpoint list is exposed via SAI, could do things here
	// such as setting ViewpointGroup.proxy.description as browser label.

	// Current action:  switch child Viewpoints in/out of scope.
	this.tracePrint ('activeValue=' + activeValue);

	this.tracePrint ('this.proxy.displayed=' + this.proxy.displayed);
	if (!this.proxy.displayed) return;

	if (activeValue) X3DJSON.nodeUtil("Scene","ViewpointsSwitch", "whichChoice",   0);
	else             X3DJSON.nodeUtil("Scene","ViewpointsSwitch", "whichChoice",  -1);

	this.tracePrint ('X3DJSON.nodeUtil("Scene","ViewpointsSwitch", "whichChoice", ' + X3DJSON.nodeUtil("Scene","ViewpointsSwitch", "whichChoice")));
};

	this.set_radius = function (value, timestamp)
{
	this.proxy.radius = value;
	X3DJSON.nodeUtil("Scene","ProximityZone", "size").x = 2 * this.proxy.radius;
	X3DJSON.nodeUtil("Scene","ProximityZone", "size").y = 2 * this.proxy.radius;
	X3DJSON.nodeUtil("Scene","ProximityZone", "size").z = 2 * this.proxy.radius;
	this.tracePrint ('this.proxy.set_radius (' + value + '), this.proxy.radius=' + this.proxy.radius + ', X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","ProximityZone", "")", "size", ' + X3DJSON.nodeUtil("Scene","ProximityZone", "size")));
}
;

	this.tracePrint = function (outputString)
{
	if (this.proxy.traceEnabled) console.error ('[ViewpointGroup' + this.proxy.description + ']' + outputString);
};

	this.alwaysPrint = function (outputString)
{
	console.error ('[ViewpointGroup' + this.proxy.description + ']' + outputString);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ViewpointGroupPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ViewpointGroupPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ViewpointGroupPrototype.json']['UnbindingControlScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ViewpointGroupPrototype.json']['UnbindingControlScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ViewpointGroupPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ViewpointGroupPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ViewpointGroupPrototype.json']['UnbindingControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ViewpointGroupPrototype.json']['UnbindingControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ViewpointGroupPrototype.json']['UnbindingControlScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ViewpointGroupPrototype.json']['UnbindingControlScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ViewpointGroupPrototype.json']['UnbindingControlScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ViewpointGroupPrototype.json']['UnbindingControlScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ViewpointGroupPrototype.json']['UnbindingControlScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ViewpointGroupPrototype.json']['UnbindingControlScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ViewpointGroupPrototype.json']['UnbindingControlScript'].initialize();
    if (X3DJSON.nodeUtil("Scene","ProximityZone")) {
X3DJSON.nodeUtil("Scene","ProximityZone").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ViewpointGroupPrototype.json']['UnbindingControlScript'].isActive(X3DJSON.nodeUtil("Scene","ProximityZone","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ViewpointGroupPrototype.json']['UnbindingControlScript'].isActive(X3DJSON.nodeUtil("Scene","ProximityZone","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ViewpointGroupPrototype.json']['UnbindingControlScript'].isActive(X3DJSON.nodeUtil("Scene","ProximityZone","isActive"), __eventTime);