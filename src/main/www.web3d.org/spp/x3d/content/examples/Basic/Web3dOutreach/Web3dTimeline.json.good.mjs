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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'] = function() {
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
		this.name = new MFString();
	} catch (e) {
		console.log('Problems setting name '+e);
		console.error('Problems setting name',e);
	}
	this.set_imagePixelHeight = function (value) {
		try {
			this.proxy.imagePixelHeight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting imagePixelHeight '+e);
			console.error('Problems setting imagePixelHeight',e);
		}
	};
	this.imagePixelHeight_changed = function () {
		var value = this.imagePixelHeight;
		return value;
	};
	try {
		this.imagePixelHeight = new SFInt32();
	} catch (e) {
		console.log('Problems setting imagePixelHeight '+e);
		console.error('Problems setting imagePixelHeight',e);
	}
	this.set_imagePixelWidth = function (value) {
		try {
			this.proxy.imagePixelWidth = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting imagePixelWidth '+e);
			console.error('Problems setting imagePixelWidth',e);
		}
	};
	this.imagePixelWidth_changed = function () {
		var value = this.imagePixelWidth;
		return value;
	};
	try {
		this.imagePixelWidth = new SFInt32();
	} catch (e) {
		console.log('Problems setting imagePixelWidth '+e);
		console.error('Problems setting imagePixelWidth',e);
	}
	this.set_hidden = function (value) {
		try {
			this.proxy.hidden = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting hidden '+e);
			console.error('Problems setting hidden',e);
		}
	};
	this.hidden_changed = function () {
		var value = this.hidden;
		return value;
	};
	try {
		this.hidden = new SFBool();
	} catch (e) {
		console.log('Problems setting hidden '+e);
		console.error('Problems setting hidden',e);
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
	this.set_hideSwitchChoice = function (value) {
		try {
			this.proxy.hideSwitchChoice = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting hideSwitchChoice '+e);
			console.error('Problems setting hideSwitchChoice',e);
		}
	};
	this.hideSwitchChoice_changed = function () {
		var value = this.hideSwitchChoice;
		return value;
	};
	try {
		this.hideSwitchChoice = new SFInt32();
	} catch (e) {
		console.log('Problems setting hideSwitchChoice '+e);
		console.error('Problems setting hideSwitchChoice',e);
	}
	this.set_displayViewpointGroup = function (value) {
		try {
			this.proxy.displayViewpointGroup = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting displayViewpointGroup '+e);
			console.error('Problems setting displayViewpointGroup',e);
		}
	};
	this.displayViewpointGroup_changed = function () {
		var value = this.displayViewpointGroup;
		return value;
	};
	try {
		this.displayViewpointGroup = new SFBool();
	} catch (e) {
		console.log('Problems setting displayViewpointGroup '+e);
		console.error('Problems setting displayViewpointGroup',e);
	}


ecmascript:

	this.initialize = function ()
{
    this.computePointArray ();

    this.hide ();

    this.tracePrint ('initialization() successful');
};

	this.computePointArray = function ()
{
    if ((this.proxy.imagePixelHeight <= 0) || (this.proxy.imagePixelWidth <= 0))
    {
        this.tracePrint ('cannot compute new scale, this.proxy.imagePixelHeight=' + this.proxy.imagePixelHeight.toString() + ', this.proxy.imagePixelWidth=' + this.proxy.imagePixelWidth.toString());
        return;
    }
    else if (this.proxy.imagePixelHeight < this.proxy.imagePixelWidth)
    {
        height = this.proxy.imagePixelHeight/this.proxy.imagePixelWidth;
        width  = 1.0;
    }
    else if (this.proxy.imagePixelHeight > this.proxy.imagePixelWidth)
    {
        height = 1.0;
        width  = this.proxy.imagePixelWidth/this.proxy.imagePixelHeight;
    }
    else // same
    {
        height = 1.0;
        width  = 1.0;
    }
    p0 = new SFVec3f (0.0,   0.0,    0.0);
    p1 = new SFVec3f (0.0,   height, 0.0);
    p2 = new SFVec3f (width, height, 0.0);
    p3 = new SFVec3f (width, 0.0,    0.0);
    this.proxy.pointArray = new MFVec3f (p0, p1, p2, p3);
    this.tracePrint ('computed new ImageCoordinate.point=' + this.proxy.pointArray.toString());

    if (this.proxy.hidden)
    {
        this.proxy.hideSwitchChoice = -1;
    }
};

	this.set_imagePixelHeight = function (eventValue)
{
    this.computePointArray ();
};

	this.set_imagePixelWidth = function (eventValue)
{
    this.computePointArray ();
}
;

	this.set_name = function (eventValue)
{
   // input eventValue received for inputOutput field
    this.proxy.name = eventValue;
};

	this.hide = function ()
{
    // input eventValue received for inputOutput field
    this.tracePrint ("this.set_hidden: this.proxy.hidden=" + this.proxy.hidden);
    if (this.proxy.hidden)
    {
         this.proxy.hideSwitchChoice      = -1;
         this.proxy.displayViewpointGroup = false;
    }
    else
    {
        this.proxy.hideSwitchChoice      = 0;
        this.proxy.displayViewpointGroup = true;
    }
}
;

	this.set_hidden = function (eventValue)
{
    this.proxy.hidden = eventValue;
    this.hide ();
}
// =======;

	this.tracePrint = function (outputString)
{
   // if this.proxy.traceEnabled is true, print outputString on X3D browser console
   if (this.proxy.traceEnabled)
      console.error ('[TimelineElementScript ' + this.proxy.name.toString() + ': ' + outputString.toString() + ']');
};

	this.alwaysPrint = function (outputString)
{
      // always print outputString on X3D browser console
      console.error ('[TimelineElementScript ' + this.proxy.name.toString() + ': ' + outputString.toString() + ']');
};

	this.set_traceEnabled = function (eventValue)
{
      // input eventValue received for inputOutput field
      this.proxy.traceEnabled = eventValue;
}
// =============;

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].initialize();
    if (X3DJSON.nodeUtil("Scene","TouchToView")) {
X3DJSON.nodeUtil("Scene","TouchToView").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TouchViewpointSelectBooleanFilter")) {
X3DJSON.nodeUtil("Scene","TouchViewpointSelectBooleanFilter").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","proximity")) {
X3DJSON.nodeUtil("Scene","proximity").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","it0")) {
X3DJSON.nodeUtil("Scene","it0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","proximity")) {
X3DJSON.nodeUtil("Scene","proximity").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","bt")) {
X3DJSON.nodeUtil("Scene","bt").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","it1")) {
X3DJSON.nodeUtil("Scene","it1").addEventListener('outputchange', function(event) {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript']['ACTION']['pointArray'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript']['ACTION']['pointArray'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript']['ACTION']['pointArray'].push(function(property, value) {
		if (property === 'pointArray') {
			X3DJSON.nodeUtil("Scene","ImageCoordinate","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].pointArray === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].pointArray() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].pointArray, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ImageCoordinate","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].pointArray === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].pointArray() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].pointArray, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript']['ACTION']['hideSwitchChoice'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript']['ACTION']['hideSwitchChoice'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript']['ACTION']['hideSwitchChoice'].push(function(property, value) {
		if (property === 'hideSwitchChoice') {
			X3DJSON.nodeUtil("Scene","TimelineElementSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].hideSwitchChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].hideSwitchChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].hideSwitchChoice, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TimelineElementSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].hideSwitchChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].hideSwitchChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].hideSwitchChoice, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript']['ACTION']['displayViewpointGroup'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript']['ACTION']['displayViewpointGroup'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript']['ACTION']['displayViewpointGroup'].push(function(property, value) {
		if (property === 'displayViewpointGroup') {
			X3DJSON.nodeUtil("Scene","TimelineElementViewpointGroup","displayed",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].displayViewpointGroup === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].displayViewpointGroup() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].displayViewpointGroup, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TimelineElementViewpointGroup","displayed",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].displayViewpointGroup === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].displayViewpointGroup() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].displayViewpointGroup, __eventTime);
    if (X3DJSON.nodeUtil("Scene","Web3dLogoSpinner")) {
X3DJSON.nodeUtil("Scene","Web3dLogoSpinner").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Web3dLogoClock")) {
X3DJSON.nodeUtil("Scene","Web3dLogoClock").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON.nodeUtil("Scene","ImageCoordinate","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].pointArray === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].pointArray() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].pointArray, __eventTime);
			X3DJSON.nodeUtil("Scene","TimelineElementSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].hideSwitchChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].hideSwitchChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].hideSwitchChoice, __eventTime);
			X3DJSON.nodeUtil("Scene","TimelineElementViewpointGroup","displayed",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].displayViewpointGroup === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].displayViewpointGroup() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Web3dOutreach/Web3dTimeline.json']['TimelineElementScript'].displayViewpointGroup, __eventTime);