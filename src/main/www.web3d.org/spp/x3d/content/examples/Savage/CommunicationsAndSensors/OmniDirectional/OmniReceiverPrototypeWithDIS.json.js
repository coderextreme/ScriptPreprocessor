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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'] = function() {
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
	this.set_diffuseColor = function (value) {
		try {
			this.proxy.diffuseColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting diffuseColor '+e);
			console.error('Problems setting diffuseColor',e);
		}
	};
	this.diffuseColor_changed = function () {
		var value = this.diffuseColor;
		return value;
	};
	try {
		this.diffuseColor = new SFColor();
	} catch (e) {
		console.log('Problems setting diffuseColor '+e);
		console.error('Problems setting diffuseColor',e);
	}
	this.set_emissiveColor = function (value) {
		try {
			this.proxy.emissiveColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting emissiveColor '+e);
			console.error('Problems setting emissiveColor',e);
		}
	};
	this.emissiveColor_changed = function () {
		var value = this.emissiveColor;
		return value;
	};
	try {
		this.emissiveColor = new SFColor();
	} catch (e) {
		console.log('Problems setting emissiveColor '+e);
		console.error('Problems setting emissiveColor',e);
	}
	this.set_shininess = function (value) {
		try {
			this.proxy.shininess = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting shininess '+e);
			console.error('Problems setting shininess',e);
		}
	};
	this.shininess_changed = function () {
		var value = this.shininess;
		return value;
	};
	try {
		this.shininess = new SFFloat();
	} catch (e) {
		console.log('Problems setting shininess '+e);
		console.error('Problems setting shininess',e);
	}
	this.set_ambientIntensity = function (value) {
		try {
			this.proxy.ambientIntensity = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ambientIntensity '+e);
			console.error('Problems setting ambientIntensity',e);
		}
	};
	this.ambientIntensity_changed = function () {
		var value = this.ambientIntensity;
		return value;
	};
	try {
		this.ambientIntensity = new SFFloat();
	} catch (e) {
		console.log('Problems setting ambientIntensity '+e);
		console.error('Problems setting ambientIntensity',e);
	}
	this.set_transparency = function (value) {
		try {
			this.proxy.transparency = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transparency '+e);
			console.error('Problems setting transparency',e);
		}
	};
	this.transparency_changed = function () {
		var value = this.transparency;
		return value;
	};
	try {
		this.transparency = new SFFloat();
	} catch (e) {
		console.log('Problems setting transparency '+e);
		console.error('Problems setting transparency',e);
	}


ecmascript:

	this.initialize = function ()
{

  // this depth band defined to match fathoms to 60 feet, then 10' increments, doesn't match MEDAL
  depthBand = new MFFloat (3000, 30000, 300000, 3000000, 30000000, 300000000, 3000000000);
  this.proxy.transparency = .65;

  brown		= new SFColor (0.2, 0.2, 0);
  white		= new SFColor (1, 1, 1);
  red		= new SFColor (1, 0, 0);
  redEmiss	= new SFColor (1, 0, 0) ;
  orange	= new SFColor (1, .529, 0);
  yellow	= new SFColor (1, 1, 0);
  green		= new SFColor (0, 1, 0);
  cyan		= new SFColor (0, 1, 1);
  blue		= new SFColor (0, 0, 1);
  magenta	= new SFColor (1, 0, 1);
  maroon	= new SFColor (0.561, 0, 0.322);
  tan		= new SFColor (0.871, 0.721, 0.529);
  seaGreen	= new SFColor (0.322, 0.584, 0.517);
  slateBlue	= new SFColor (0.494, 0.533, 0.671);
  navyBlue	= new SFColor (0.137, 0.137, 0.459);
  grey		= new SFColor (0.5,   0.5,   0.5);
  slateGrey	= new SFColor (0.439, 0.502, 0.565);
  skyBlue	= new SFColor (0.6, 0.6, 1.0);
  olive		= new SFColor (0.1, 0.4, 0);
  black		= new SFColor (0.1, 0.1, 0.1);

	frequencyValue = this.proxy.frequency ;
//	console.error ('this.proxy.frequency	= ' +frequencyValue) ;
//	console.error ('color		= ' +this.proxy.diffuseColor) ;
  {
	if      (frequencyValue < depthBand[1]) { this.proxy.diffuseColor = brown;
                                                  this.proxy.emissiveColor = brown; }
	else if (frequencyValue < depthBand[2]) { this.proxy.diffuseColor = cyan;
                                                  this.proxy.emissiveColor = cyan; }
	else if (frequencyValue < depthBand[3]) { this.proxy.diffuseColor = red;
						  this.proxy.emissiveColor = redEmiss ; }
	else if (frequencyValue < depthBand[4]) { this.proxy.diffuseColor = grey;
                                                  this.proxy.emissiveColor = grey; }
	else if (frequencyValue < depthBand[5]) { this.proxy.diffuseColor = yellow;
                                                 this.proxy.emissiveColor = yellow; }
	else if (frequencyValue < depthBand[6]) { this.proxy.diffuseColor = tan;
                                                  this.proxy.emissiveColor = tan; }
	else if (frequencyValue < depthBand[7]) { this.proxy.diffuseColor = orange;
                                                  this.proxy.emissiveColor = orange; }
//	else if (frequencyValue < depthBand[8])  this.proxy.diffuseColor = olive;
//	else if (frequencyValue < depthBand[9])  this.proxy.diffuseColor = green;
//	else if (frequencyValue < depthBand[10]) this.proxy.diffuseColor = seaGreen;
//	else if (frequencyValue < depthBand[11]) this.proxy.diffuseColor = navyBlue;
//	else if (frequencyValue < depthBand[12]) this.proxy.diffuseColor = blue;
//	else if (frequencyValue < depthBand[13]) this.proxy.diffuseColor = slateBlue;
//	else if (frequencyValue < depthBand[14]) this.proxy.diffuseColor = skyBlue;
//	else if (frequencyValue < depthBand[15]) this.proxy.diffuseColor = slateGrey;
	else
	{
	        this.proxy.diffuseColor = black;
		this.proxy.emissiveColor = black;
		this.proxy.transparency = 0 ;
	}
  }
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript'] = function() {
	this.set_transState = function (value) {
		try {
			this.proxy.transState = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transState '+e);
			console.error('Problems setting transState',e);
		}
	};
	this.transState_changed = function () {
		var value = this.transState;
		return value;
	};
	try {
		this.transState = new SFInt32();
	} catch (e) {
		console.log('Problems setting transState '+e);
		console.error('Problems setting transState',e);
	}
	this.set_size = function (value) {
		try {
			this.proxy.size = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting size '+e);
			console.error('Problems setting size',e);
		}
	};
	this.size_changed = function () {
		var value = this.size;
		return value;
	};
	try {
		this.size = new SFVec3f();
	} catch (e) {
		console.log('Problems setting size '+e);
		console.error('Problems setting size',e);
	}


ecmascript:

	this.initialize = function ()
{
	this.proxy.size = new SFVec3f(1, 1, 1) ;
	console.error ('TransmitScript this.initialize() complete') ;
}

// functi;

	this.transState = function (newValue, timestamp)
{
	transmitState = newValue ;
	if (transmitState == 2) {
		this.proxy.size[0] = 10;
		this.proxy.size[1] = 10;
		this.proxy.size[2] = 10;
	}
	else if (transmitState == 1) {
		this.proxy.size[0] = 2;
		this.proxy.size[1] = 2;
		this.proxy.size[2] = 2;
	}
	else {
		this.proxy.size[0] = .5;
		this.proxy.size[1] = .5;
		this.proxy.size[2] = .5;
	}
	console.error ('this.proxy.size	= ' + this.proxy.size) ;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL']['ACTION']['diffuseColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL']['ACTION']['diffuseColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL']['ACTION']['diffuseColor'].push(function(property, value) {
		if (property === 'diffuseColor') {
			X3DJSON.nodeUtil("Scene","material","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].diffuseColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].diffuseColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].diffuseColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","material","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].diffuseColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].diffuseColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].diffuseColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL']['ACTION']['emissiveColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL']['ACTION']['emissiveColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL']['ACTION']['emissiveColor'].push(function(property, value) {
		if (property === 'emissiveColor') {
			X3DJSON.nodeUtil("Scene","material","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].emissiveColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].emissiveColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].emissiveColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","material","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].emissiveColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].emissiveColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].emissiveColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL']['ACTION']['transparency'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL']['ACTION']['transparency'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL']['ACTION']['transparency'].push(function(property, value) {
		if (property === 'transparency') {
			X3DJSON.nodeUtil("Scene","material","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].transparency === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].transparency() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].transparency, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","material","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].transparency === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].transparency() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].transparency, __eventTime);
    if (X3DJSON.nodeUtil("Scene","RECEIVER")) {
X3DJSON.nodeUtil("Scene","RECEIVER").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript'].transState(X3DJSON.nodeUtil("Scene","RECEIVER","receiverState"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript'].transState(X3DJSON.nodeUtil("Scene","RECEIVER","receiverState"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript']['ACTION']['size'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript']['ACTION']['size'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript']['ACTION']['size'].push(function(property, value) {
		if (property === 'size') {
			X3DJSON.nodeUtil("Scene","DomeTransform","scale",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript'].size === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript'].size() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript'].size, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","DomeTransform","scale",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript'].size === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript'].size() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript'].size, __eventTime);
			X3DJSON.nodeUtil("Scene","material","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].diffuseColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].diffuseColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].diffuseColor, __eventTime);
			X3DJSON.nodeUtil("Scene","material","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].emissiveColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].emissiveColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].emissiveColor, __eventTime);
			X3DJSON.nodeUtil("Scene","material","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].transparency === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].transparency() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['CalculateColorSchemeMEDAL'].transparency, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript'].transState(X3DJSON.nodeUtil("Scene","RECEIVER","receiverState"), __eventTime);
			X3DJSON.nodeUtil("Scene","DomeTransform","scale",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript'].size === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript'].size() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/OmniDirectional/OmniReceiverPrototypeWithDIS.json']['TransmitScript'].size, __eventTime);