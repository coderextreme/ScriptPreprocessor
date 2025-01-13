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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['BrowserScript'] = function() {
	this.set_createVrmlFromString = function (value) {
		try {
			this.proxy.createVrmlFromString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting createVrmlFromString '+e);
			console.error('Problems setting createVrmlFromString',e);
		}
	};
	this.createVrmlFromString_changed = function () {
		var value = this.createVrmlFromString;
		return value;
	};
	try {
		this.createVrmlFromString = new SFString();
	} catch (e) {
		console.log('Problems setting createVrmlFromString '+e);
		console.error('Problems setting createVrmlFromString',e);
	}
	this.set_createVrmlFromURL = function (value) {
		try {
			this.proxy.createVrmlFromURL = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting createVrmlFromURL '+e);
			console.error('Problems setting createVrmlFromURL',e);
		}
	};
	this.createVrmlFromURL_changed = function () {
		var value = this.createVrmlFromURL;
		return value;
	};
	try {
		this.createVrmlFromURL = new SFString();
	} catch (e) {
		console.log('Problems setting createVrmlFromURL '+e);
		console.error('Problems setting createVrmlFromURL',e);
	}
	this.set_createdVrmlNodes = function (value) {
		try {
			this.proxy.createdVrmlNodes = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting createdVrmlNodes '+e);
			console.error('Problems setting createdVrmlNodes',e);
		}
	};
	this.createdVrmlNodes_changed = function () {
		var value = this.createdVrmlNodes;
		return value;
	};
	try {
		this.createdVrmlNodes = new MFNode();
	} catch (e) {
		console.log('Problems setting createdVrmlNodes '+e);
		console.error('Problems setting createdVrmlNodes',e);
	}
	this.set_currentFrameRate = function (value) {
		try {
			this.proxy.currentFrameRate = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting currentFrameRate '+e);
			console.error('Problems setting currentFrameRate',e);
		}
	};
	this.currentFrameRate_changed = function () {
		var value = this.currentFrameRate;
		return value;
	};
	try {
		this.currentFrameRate = new SFFloat();
	} catch (e) {
		console.log('Problems setting currentFrameRate '+e);
		console.error('Problems setting currentFrameRate',e);
	}
	this.set_currentSpeed = function (value) {
		try {
			this.proxy.currentSpeed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting currentSpeed '+e);
			console.error('Problems setting currentSpeed',e);
		}
	};
	this.currentSpeed_changed = function () {
		var value = this.currentSpeed;
		return value;
	};
	try {
		this.currentSpeed = new SFFloat();
	} catch (e) {
		console.log('Problems setting currentSpeed '+e);
		console.error('Problems setting currentSpeed',e);
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
	this.set_evaluate = function (value) {
		try {
			this.proxy.evaluate = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting evaluate '+e);
			console.error('Problems setting evaluate',e);
		}
	};
	this.evaluate_changed = function () {
		var value = this.evaluate;
		return value;
	};
	try {
		this.evaluate = new SFBool();
	} catch (e) {
		console.log('Problems setting evaluate '+e);
		console.error('Problems setting evaluate',e);
	}
	this.set_loadUrl = function (value) {
		try {
			this.proxy.loadUrl = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting loadUrl '+e);
			console.error('Problems setting loadUrl',e);
		}
	};
	this.loadUrl_changed = function () {
		var value = this.loadUrl;
		return value;
	};
	try {
		this.loadUrl = new SFString();
	} catch (e) {
		console.log('Problems setting loadUrl '+e);
		console.error('Problems setting loadUrl',e);
	}
	this.set_loadUrlParameter = function (value) {
		try {
			this.proxy.loadUrlParameter = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting loadUrlParameter '+e);
			console.error('Problems setting loadUrlParameter',e);
		}
	};
	this.loadUrlParameter_changed = function () {
		var value = this.loadUrlParameter;
		return value;
	};
	try {
		this.loadUrlParameter = new SFString();
	} catch (e) {
		console.log('Problems setting loadUrlParameter '+e);
		console.error('Problems setting loadUrlParameter',e);
	}
	this.set_name = function (value) {
		try {
			this.proxy.name = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting name '+e);
			console.error('Problems setting name',e);
		}
	};
	this.name_changed = function () {
		var value = this.name;
		return value;
	};
	try {
		this.name = new SFString();
	} catch (e) {
		console.log('Problems setting name '+e);
		console.error('Problems setting name',e);
	}
	this.set_replaceWorld = function (value) {
		try {
			this.proxy.replaceWorld = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting replaceWorld '+e);
			console.error('Problems setting replaceWorld',e);
		}
	};
	this.replaceWorld_changed = function () {
		var value = this.replaceWorld;
		return value;
	};
	try {
		this.replaceWorld = new MFNode();
	} catch (e) {
		console.log('Problems setting replaceWorld '+e);
		console.error('Problems setting replaceWorld',e);
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
	this.set_worldUrl = function (value) {
		try {
			this.proxy.worldUrl = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting worldUrl '+e);
			console.error('Problems setting worldUrl',e);
		}
	};
	this.worldUrl_changed = function () {
		var value = this.worldUrl;
		return value;
	};
	try {
		this.worldUrl = new SFString();
	} catch (e) {
		console.log('Problems setting worldUrl '+e);
		console.error('Problems setting worldUrl',e);
	}
	this.set_addRoute = function (value) {
		try {
			this.proxy.addRoute = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting addRoute '+e);
			console.error('Problems setting addRoute',e);
		}
	};
	this.addRoute_changed = function () {
		var value = this.addRoute;
		return value;
	};
	try {
		this.addRoute = new SFBool();
	} catch (e) {
		console.log('Problems setting addRoute '+e);
		console.error('Problems setting addRoute',e);
	}
	this.set_deleteRoute = function (value) {
		try {
			this.proxy.deleteRoute = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting deleteRoute '+e);
			console.error('Problems setting deleteRoute',e);
		}
	};
	this.deleteRoute_changed = function () {
		var value = this.deleteRoute;
		return value;
	};
	try {
		this.deleteRoute = new SFBool();
	} catch (e) {
		console.log('Problems setting deleteRoute '+e);
		console.error('Problems setting deleteRoute',e);
	}
	this.set_fromNode = function (value) {
		try {
			this.proxy.fromNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fromNode '+e);
			console.error('Problems setting fromNode',e);
		}
	};
	this.fromNode_changed = function () {
		var value = this.fromNode;
		return value;
	};
	try {
		this.fromNode = new SFNode();
	} catch (e) {
		console.log('Problems setting fromNode '+e);
		console.error('Problems setting fromNode',e);
	}
	this.set_fromEventOut = function (value) {
		try {
			this.proxy.fromEventOut = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fromEventOut '+e);
			console.error('Problems setting fromEventOut',e);
		}
	};
	this.fromEventOut_changed = function () {
		var value = this.fromEventOut;
		return value;
	};
	try {
		this.fromEventOut = new SFString();
	} catch (e) {
		console.log('Problems setting fromEventOut '+e);
		console.error('Problems setting fromEventOut',e);
	}
	this.set_toNode = function (value) {
		try {
			this.proxy.toNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toNode '+e);
			console.error('Problems setting toNode',e);
		}
	};
	this.toNode_changed = function () {
		var value = this.toNode;
		return value;
	};
	try {
		this.toNode = new SFNode();
	} catch (e) {
		console.log('Problems setting toNode '+e);
		console.error('Problems setting toNode',e);
	}
	this.set_toEventIn = function (value) {
		try {
			this.proxy.toEventIn = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toEventIn '+e);
			console.error('Problems setting toEventIn',e);
		}
	};
	this.toEventIn_changed = function () {
		var value = this.toEventIn;
		return value;
	};
	try {
		this.toEventIn = new SFString();
	} catch (e) {
		console.log('Problems setting toEventIn '+e);
		console.error('Problems setting toEventIn',e);
	}
	this.set_response = function (value) {
		try {
			this.proxy.response = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting response '+e);
			console.error('Problems setting response',e);
		}
	};
	this.response_changed = function () {
		var value = this.response;
		return value;
	};
	try {
		this.response = new MFString();
	} catch (e) {
		console.log('Problems setting response '+e);
		console.error('Problems setting response',e);
	}


ecmascript:

	this.evaluate = function (inputValue, timeStamp)
{
	if (inputValue)  // Boolean
	{
		this.proxy.currentFrameRate = Browser.getCurrentFrameRate ();
		this.proxy.currentSpeed = Browser.getCurrentSpeed ();
		this.proxy.version = Browser.getVersion ();
		this.proxy.name = Browser.getName ();
		this.proxy.worldUrl = Browser.getWorldURL ();

		console.error ('this.proxy.currentFrameRate = ' + this.proxy.currentFrameRate);
		console.error ('this.proxy.currentSpeed = ' + this.proxy.currentSpeed);
		console.error ('this.proxy.version = ' + this.proxy.version);
		console.error ('this.proxy.name = ' + this.proxy.name);
		console.error ('this.proxy.worldUrl = ' + this.proxy.worldUrl);
	}
}
;

	this.createVrmlFromString = function (inputValue, timeStamp)
{
	// note VRML 97 method this.proxy.name didn't follow capitalization convention
	this.proxy.createdVrmlNodes = new MFNode();
}
;

	this.createVrmlFromUrl = function (inputValue, timeStamp)
{
	// note VRML 97 method this.proxy.name didn't follow capitalization convention
	this.proxy.createdVrmlNodes = Browser.proxy.createVrmlFromURL (inputValue);
}
;

	this.description = function (inputValue, timeStamp)
{
	console.error ('this.proxy.description = ' + inputValue);
	Browser.setDescription (inputValue);
}
;

	this.replaceWorld = function (inputValue, timeStamp)
{
	Browser.proxy.replaceWorld (inputValue);
}
;

	this.addRoute = function (inputValue, timeStamp)
{
	if (inputValue)  // Boolean
	{
		Browser.proxy.addRoute (this.proxy.fromNode, this.proxy.fromEventOut, this.proxy.toNode, this.proxy.toEventIn);
	}
}
;

	this.deleteRoute = function (inputValue, timeStamp)
{
	if (inputValue)  // Boolean
	{
		Browser.proxy.deleteRoute (this.proxy.fromNode, this.proxy.fromEventOut, this.proxy.toNode, this.proxy.toEventIn);
	}
}
;

	this.loadURL = function (inputValue, timeStamp)
{
	console.error ('this.loadURL = ' + inputValue);
	console.error ('this.proxy.loadUrlParameter = ' + this.proxy.loadUrlParameter);
	Browser.loadURL (inputValue, this.proxy.loadUrlParameter);
};

	this.createVrmlFromURL = function (SFStringValue, timestamp)
{

}
;

	this.loadUrl = function (SFStringValue, timestamp)
{

}
;

	this.loadUrlParameter = function (SFStringValue, timestamp)
{

}
;

	this.fromNode = function (SFNodeValue, timestamp)
{

}
;

	this.fromEventOut = function (SFStringValue, timestamp)
{

}
;

	this.toNode = function (SFNodeValue, timestamp)
{

}
;

	this.toEventIn = function (SFStringValue, timestamp)
{

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['BrowserScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['BrowserScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['BrowserScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['BrowserScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['BrowserScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['BrowserScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['BrowserScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['BrowserScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['BrowserScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['BrowserScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['BrowserScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'] = function() {
	this.set_currentFrameRate = function (value) {
		try {
			this.proxy.currentFrameRate = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting currentFrameRate '+e);
			console.error('Problems setting currentFrameRate',e);
		}
	};
	this.currentFrameRate_changed = function () {
		var value = this.currentFrameRate;
		return value;
	};
	try {
		this.currentFrameRate = new SFFloat();
	} catch (e) {
		console.log('Problems setting currentFrameRate '+e);
		console.error('Problems setting currentFrameRate',e);
	}
	this.set_currentSpeed = function (value) {
		try {
			this.proxy.currentSpeed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting currentSpeed '+e);
			console.error('Problems setting currentSpeed',e);
		}
	};
	this.currentSpeed_changed = function () {
		var value = this.currentSpeed;
		return value;
	};
	try {
		this.currentSpeed = new SFFloat();
	} catch (e) {
		console.log('Problems setting currentSpeed '+e);
		console.error('Problems setting currentSpeed',e);
	}
	this.set_name = function (value) {
		try {
			this.proxy.name = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting name '+e);
			console.error('Problems setting name',e);
		}
	};
	this.name_changed = function () {
		var value = this.name;
		return value;
	};
	try {
		this.name = new SFString();
	} catch (e) {
		console.log('Problems setting name '+e);
		console.error('Problems setting name',e);
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
	this.set_worldUrl = function (value) {
		try {
			this.proxy.worldUrl = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting worldUrl '+e);
			console.error('Problems setting worldUrl',e);
		}
	};
	this.worldUrl_changed = function () {
		var value = this.worldUrl;
		return value;
	};
	try {
		this.worldUrl = new SFString();
	} catch (e) {
		console.log('Problems setting worldUrl '+e);
		console.error('Problems setting worldUrl',e);
	}
	this.set_evaluatedResult = function (value) {
		try {
			this.proxy.evaluatedResult = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting evaluatedResult '+e);
			console.error('Problems setting evaluatedResult',e);
		}
	};
	this.evaluatedResult_changed = function () {
		var value = this.evaluatedResult;
		return value;
	};
	try {
		this.evaluatedResult = new MFString();
	} catch (e) {
		console.log('Problems setting evaluatedResult '+e);
		console.error('Problems setting evaluatedResult',e);
	}


ecmascript:

	this.initialize = function ()
{
	this.proxy.evaluatedResult = new MFString (
		'Click for partial Scene node test:',
		' ', ' ', ' ', ' ', ' ', ' ', ' ');
};

	this.currentFrameRate = function (inputValue, timeStamp)
{
	this.proxy.evaluatedResult [2] = 'this.proxy.currentFrameRate=' + inputValue;
};

	this.currentSpeed = function (inputValue, timeStamp)
{
	this.proxy.evaluatedResult [3] = 'this.proxy.currentSpeed=' + inputValue;
};

	this.version = function (inputValue, timeStamp)
{
	this.proxy.evaluatedResult [4] = 'this.proxy.version=' + inputValue;
};

	this.name = function (inputValue, timeStamp)
{
	this.proxy.evaluatedResult [5] = 'this.proxy.name=' + inputValue;
};

	this.worldUrl = function (inputValue, timeStamp)
{
	this.proxy.evaluatedResult [6] = 'this.proxy.worldUrl=';
	this.proxy.evaluatedResult [7] = inputValue;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'].initialize();
    if (X3DJSON.nodeUtil("Scene","ClickTextSensor")) {
X3DJSON.nodeUtil("Scene","ClickTextSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","SceneNode")) {
X3DJSON.nodeUtil("Scene","SceneNode").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'].currentFrameRate(X3DJSON.nodeUtil("Scene","SceneNode","currentFrameRate"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'].currentFrameRate(X3DJSON.nodeUtil("Scene","SceneNode","currentFrameRate"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","SceneNode")) {
X3DJSON.nodeUtil("Scene","SceneNode").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'].currentSpeed(X3DJSON.nodeUtil("Scene","SceneNode","currentSpeed"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'].currentSpeed(X3DJSON.nodeUtil("Scene","SceneNode","currentSpeed"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","SceneNode")) {
X3DJSON.nodeUtil("Scene","SceneNode").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'].version(X3DJSON.nodeUtil("Scene","SceneNode","version"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'].version(X3DJSON.nodeUtil("Scene","SceneNode","version"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","SceneNode")) {
X3DJSON.nodeUtil("Scene","SceneNode").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'].name(X3DJSON.nodeUtil("Scene","SceneNode","name"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'].name(X3DJSON.nodeUtil("Scene","SceneNode","name"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","SceneNode")) {
X3DJSON.nodeUtil("Scene","SceneNode").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'].worldUrl(X3DJSON.nodeUtil("Scene","SceneNode","worldUrl"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'].worldUrl(X3DJSON.nodeUtil("Scene","SceneNode","worldUrl"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText']['ACTION']['evaluatedResult'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText']['ACTION']['evaluatedResult'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText']['ACTION']['evaluatedResult'].push(function(property, value) {
		if (property === 'evaluatedResult') {
			X3DJSON.nodeUtil("Scene","Output3dText","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'].evaluatedResult === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'].evaluatedResult() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'].evaluatedResult, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Output3dText","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'].evaluatedResult === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'].evaluatedResult() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'].evaluatedResult, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'].currentFrameRate(X3DJSON.nodeUtil("Scene","SceneNode","currentFrameRate"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'].currentSpeed(X3DJSON.nodeUtil("Scene","SceneNode","currentSpeed"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'].version(X3DJSON.nodeUtil("Scene","SceneNode","version"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'].name(X3DJSON.nodeUtil("Scene","SceneNode","name"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'].worldUrl(X3DJSON.nodeUtil("Scene","SceneNode","worldUrl"), __eventTime);
			X3DJSON.nodeUtil("Scene","Output3dText","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'].evaluatedResult === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'].evaluatedResult() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/SceneNodePrototype.json']['AssembleBrowserOutputText'].evaluatedResult, __eventTime);