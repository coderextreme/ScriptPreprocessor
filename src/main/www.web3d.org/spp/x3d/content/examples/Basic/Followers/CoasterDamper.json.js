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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['Texturizer'] = function() {
	this.set_TexTransGrass = function (value) {
		try {
			this.proxy.TexTransGrass = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TexTransGrass '+e);
			console.error('Problems setting TexTransGrass',e);
		}
	};
	this.TexTransGrass_changed = function () {
		var value = this.TexTransGrass;
		return value;
	};
	try {
		this.TexTransGrass = X3DJSON.nodeUtil("Scene","TexTransGrass");
	} catch (e) {
		console.log('Problems setting TexTransGrass '+e);
		console.error('Problems setting TexTransGrass',e);
	}
	this.set_TexGrass = function (value) {
		try {
			this.proxy.TexGrass = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TexGrass '+e);
			console.error('Problems setting TexGrass',e);
		}
	};
	this.TexGrass_changed = function () {
		var value = this.TexGrass;
		return value;
	};
	try {
		this.TexGrass = X3DJSON.nodeUtil("Scene","TexGrass");
	} catch (e) {
		console.log('Problems setting TexGrass '+e);
		console.error('Problems setting TexGrass',e);
	}
	this.set_AppFromBelow = function (value) {
		try {
			this.proxy.AppFromBelow = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting AppFromBelow '+e);
			console.error('Problems setting AppFromBelow',e);
		}
	};
	this.AppFromBelow_changed = function () {
		var value = this.AppFromBelow;
		return value;
	};
	try {
		this.AppFromBelow = X3DJSON.nodeUtil("Scene","AppFromBelow");
	} catch (e) {
		console.log('Problems setting AppFromBelow '+e);
		console.error('Problems setting AppFromBelow',e);
	}
	this.set_MatFromBelow = function (value) {
		try {
			this.proxy.MatFromBelow = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting MatFromBelow '+e);
			console.error('Problems setting MatFromBelow',e);
		}
	};
	this.MatFromBelow_changed = function () {
		var value = this.MatFromBelow;
		return value;
	};
	try {
		this.MatFromBelow = X3DJSON.nodeUtil("Scene","MatFromBelow");
	} catch (e) {
		console.log('Problems setting MatFromBelow '+e);
		console.error('Problems setting MatFromBelow',e);
	}


ecmascript:

	this.initialize = function ()
{
    if(   Browser.getName() == 'blaxxunCC3D'  // This also covers BS Contact VRML.
       || Browser.getName() == 'bsContactMP4'
      )
    {
        X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","AppFromBelow", "")", "texture",  X3DJSON.nodeUtil("Scene","TexGrass", "X3DJSON.nodeUtil("Scene","AppFromBelow", "")").textureTransform= X3DJSON.nodeUtil("Scene","TexTransGrass", "X3DJSON.nodeUtil("Scene","MatFromBelow", "")").transparency= .6);
        X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","MatFromBelow", "")", "emissiveColor",  new SFColor(1, 1, 1));
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['Texturizer'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['Texturizer']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['Texturizer'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['Texturizer'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['Texturizer']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['Texturizer']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['Texturizer'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['Texturizer']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['Texturizer']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['Texturizer'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['Texturizer'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'] = function() {
	this.set_triggerIn = function (value) {
		try {
			this.proxy.triggerIn = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting triggerIn '+e);
			console.error('Problems setting triggerIn',e);
		}
	};
	this.triggerIn_changed = function () {
		var value = this.triggerIn;
		return value;
	};
	try {
		this.triggerIn = new SFTime();
	} catch (e) {
		console.log('Problems setting triggerIn '+e);
		console.error('Problems setting triggerIn',e);
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
	this.set_firstTime = function (value) {
		try {
			this.proxy.firstTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting firstTime '+e);
			console.error('Problems setting firstTime',e);
		}
	};
	this.firstTime_changed = function () {
		var value = this.firstTime;
		return value;
	};
	try {
		this.firstTime = new SFBool();
	} catch (e) {
		console.log('Problems setting firstTime '+e);
		console.error('Problems setting firstTime',e);
	}


ecmascript:
	this.triggerIn = function (value, time) {

     // fire off a single round                                     
     this.proxy.startTime = value;                                             
     this.proxy.firstTime = false;                                             
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'] = function() {
	this.set_offsetFactor = function (value) {
		try {
			this.proxy.offsetFactor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting offsetFactor '+e);
			console.error('Problems setting offsetFactor',e);
		}
	};
	this.offsetFactor_changed = function () {
		var value = this.offsetFactor;
		return value;
	};
	try {
		this.offsetFactor = new SFVec3f(0,0.717,0);
	} catch (e) {
		console.log('Problems setting offsetFactor '+e);
		console.error('Problems setting offsetFactor',e);
	}
	this.set_offsetCoordinateOut = function (value) {
		try {
			this.proxy.offsetCoordinateOut = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting offsetCoordinateOut '+e);
			console.error('Problems setting offsetCoordinateOut',e);
		}
	};
	this.offsetCoordinateOut_changed = function () {
		var value = this.offsetCoordinateOut;
		return value;
	};
	try {
		this.offsetCoordinateOut = new SFVec3f();
	} catch (e) {
		console.log('Problems setting offsetCoordinateOut '+e);
		console.error('Problems setting offsetCoordinateOut',e);
	}
	this.set_rawCoordinateIn = function (value) {
		try {
			this.proxy.rawCoordinateIn = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rawCoordinateIn '+e);
			console.error('Problems setting rawCoordinateIn',e);
		}
	};
	this.rawCoordinateIn_changed = function () {
		var value = this.rawCoordinateIn;
		return value;
	};
	try {
		this.rawCoordinateIn = new SFVec3f();
	} catch (e) {
		console.log('Problems setting rawCoordinateIn '+e);
		console.error('Problems setting rawCoordinateIn',e);
	}


ecmascript:
	this.rawCoordinateIn = function (value, time)
{
	this.proxy.offsetCoordinateOut = value.add(this.proxy.offsetFactor);	
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'] = function() {
	this.set_stepCount = function (value) {
		try {
			this.proxy.stepCount = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting stepCount '+e);
			console.error('Problems setting stepCount',e);
		}
	};
	this.stepCount_changed = function () {
		var value = this.stepCount;
		return value;
	};
	try {
		this.stepCount = new SFInt32(1);
	} catch (e) {
		console.log('Problems setting stepCount '+e);
		console.error('Problems setting stepCount',e);
	}
	this.set_isVisible = function (value) {
		try {
			this.proxy.isVisible = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isVisible '+e);
			console.error('Problems setting isVisible',e);
		}
	};
	this.isVisible_changed = function () {
		var value = this.isVisible;
		return value;
	};
	try {
		this.isVisible = new SFBool(true);
	} catch (e) {
		console.log('Problems setting isVisible '+e);
		console.error('Problems setting isVisible',e);
	}
	this.set_coordIndex = function (value) {
		try {
			this.proxy.coordIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting coordIndex '+e);
			console.error('Problems setting coordIndex',e);
		}
	};
	this.coordIndex_changed = function () {
		var value = this.coordIndex;
		return value;
	};
	try {
		this.coordIndex = new MFInt32(-1,-1);
	} catch (e) {
		console.log('Problems setting coordIndex '+e);
		console.error('Problems setting coordIndex',e);
	}
	this.set_currentIndex = function (value) {
		try {
			this.proxy.currentIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting currentIndex '+e);
			console.error('Problems setting currentIndex',e);
		}
	};
	this.currentIndex_changed = function () {
		var value = this.currentIndex;
		return value;
	};
	try {
		this.currentIndex = new SFInt32(0);
	} catch (e) {
		console.log('Problems setting currentIndex '+e);
		console.error('Problems setting currentIndex',e);
	}
	this.set_last_time = function (value) {
		try {
			this.proxy.last_time = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting last_time '+e);
			console.error('Problems setting last_time',e);
		}
	};
	this.last_time_changed = function () {
		var value = this.last_time;
		return value;
	};
	try {
		this.last_time = new SFTime(0);
	} catch (e) {
		console.log('Problems setting last_time '+e);
		console.error('Problems setting last_time',e);
	}
	this.set_distance = function (value) {
		try {
			this.proxy.distance = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting distance '+e);
			console.error('Problems setting distance',e);
		}
	};
	this.distance_changed = function () {
		var value = this.distance;
		return value;
	};
	try {
		this.distance = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting distance '+e);
		console.error('Problems setting distance',e);
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
		this.isActive = new SFBool(true);
	} catch (e) {
		console.log('Problems setting isActive '+e);
		console.error('Problems setting isActive',e);
	}
	this.set_stepSize = function (value) {
		try {
			this.proxy.stepSize = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting stepSize '+e);
			console.error('Problems setting stepSize',e);
		}
	};
	this.stepSize_changed = function () {
		var value = this.stepSize;
		return value;
	};
	try {
		this.stepSize = new SFInt32(1);
	} catch (e) {
		console.log('Problems setting stepSize '+e);
		console.error('Problems setting stepSize',e);
	}
	this.set_coordIndex = function (value) {
		try {
			this.proxy.coordIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting coordIndex '+e);
			console.error('Problems setting coordIndex',e);
		}
	};
	this.coordIndex_changed = function () {
		var value = this.coordIndex;
		return value;
	};
	try {
		this.coordIndex = new MFInt32(-1,-1);
	} catch (e) {
		console.log('Problems setting coordIndex '+e);
		console.error('Problems setting coordIndex',e);
	}
	this.set_startIndex = function (value) {
		try {
			this.proxy.startIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startIndex '+e);
			console.error('Problems setting startIndex',e);
		}
	};
	this.startIndex_changed = function () {
		var value = this.startIndex;
		return value;
	};
	try {
		this.startIndex = new SFInt32(0);
	} catch (e) {
		console.log('Problems setting startIndex '+e);
		console.error('Problems setting startIndex',e);
	}
	this.set_position = function (value) {
		try {
			this.proxy.position = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting position '+e);
			console.error('Problems setting position',e);
		}
	};
	this.position_changed = function () {
		var value = this.position;
		return value;
	};
	try {
		this.position = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting position '+e);
		console.error('Problems setting position',e);
	}
	this.set_reset_trigger = function (value) {
		try {
			this.proxy.reset_trigger = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting reset_trigger '+e);
			console.error('Problems setting reset_trigger',e);
		}
	};
	this.reset_trigger_changed = function () {
		var value = this.reset_trigger;
		return value;
	};
	try {
		this.reset_trigger = new SFTime();
	} catch (e) {
		console.log('Problems setting reset_trigger '+e);
		console.error('Problems setting reset_trigger',e);
	}
	this.set_coord = function (value) {
		try {
			this.proxy.coord = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting coord '+e);
			console.error('Problems setting coord',e);
		}
	};
	this.coord_changed = function () {
		var value = this.coord;
		return value;
	};
	try {
		this.coord = new MFVec3f([new SFVec3f ( 0 , 0 , 0 ),new SFVec3f ( 1 , 0 , 0 )]);
	} catch (e) {
		console.log('Problems setting coord '+e);
		console.error('Problems setting coord',e);
	}
	this.set_current_time = function (value) {
		try {
			this.proxy.current_time = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting current_time '+e);
			console.error('Problems setting current_time',e);
		}
	};
	this.current_time_changed = function () {
		var value = this.current_time;
		return value;
	};
	try {
		this.current_time = new SFTime(0);
	} catch (e) {
		console.log('Problems setting current_time '+e);
		console.error('Problems setting current_time',e);
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
		this.rotation = new SFRotation(0,0,1,0);
	} catch (e) {
		console.log('Problems setting rotation '+e);
		console.error('Problems setting rotation',e);
	}
	this.set_isVisible = function (value) {
		try {
			this.proxy.isVisible = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isVisible '+e);
			console.error('Problems setting isVisible',e);
		}
	};
	this.isVisible_changed = function () {
		var value = this.isVisible;
		return value;
	};
	try {
		this.isVisible = new SFBool(true);
	} catch (e) {
		console.log('Problems setting isVisible '+e);
		console.error('Problems setting isVisible',e);
	}
	this.set_last_position = function (value) {
		try {
			this.proxy.last_position = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting last_position '+e);
			console.error('Problems setting last_position',e);
		}
	};
	this.last_position_changed = function () {
		var value = this.last_position;
		return value;
	};
	try {
		this.last_position = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting last_position '+e);
		console.error('Problems setting last_position',e);
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
		this.isActive = new SFBool(true);
	} catch (e) {
		console.log('Problems setting isActive '+e);
		console.error('Problems setting isActive',e);
	}
	this.set_initial_direction = function (value) {
		try {
			this.proxy.initial_direction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting initial_direction '+e);
			console.error('Problems setting initial_direction',e);
		}
	};
	this.initial_direction_changed = function () {
		var value = this.initial_direction;
		return value;
	};
	try {
		this.initial_direction = new SFVec3f(0,0,-1);
	} catch (e) {
		console.log('Problems setting initial_direction '+e);
		console.error('Problems setting initial_direction',e);
	}
	this.set_isVisible = function (value) {
		try {
			this.proxy.isVisible = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isVisible '+e);
			console.error('Problems setting isVisible',e);
		}
	};
	this.isVisible_changed = function () {
		var value = this.isVisible;
		return value;
	};
	try {
		this.isVisible = new SFBool(true);
	} catch (e) {
		console.log('Problems setting isVisible '+e);
		console.error('Problems setting isVisible',e);
	}
	this.set_coord = function (value) {
		try {
			this.proxy.coord = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting coord '+e);
			console.error('Problems setting coord',e);
		}
	};
	this.coord_changed = function () {
		var value = this.coord;
		return value;
	};
	try {
		this.coord = new MFVec3f([new SFVec3f ( 0 , 0 , 0 ),new SFVec3f ( 1 , 0 , 0 )]);
	} catch (e) {
		console.log('Problems setting coord '+e);
		console.error('Problems setting coord',e);
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
		this.rotation = new SFRotation(0,0,1,0);
	} catch (e) {
		console.log('Problems setting rotation '+e);
		console.error('Problems setting rotation',e);
	}
	this.set_speed = function (value) {
		try {
			this.proxy.speed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting speed '+e);
			console.error('Problems setting speed',e);
		}
	};
	this.speed_changed = function () {
		var value = this.speed;
		return value;
	};
	try {
		this.speed = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting speed '+e);
		console.error('Problems setting speed',e);
	}
	this.set_speed = function (value) {
		try {
			this.proxy.speed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting speed '+e);
			console.error('Problems setting speed',e);
		}
	};
	this.speed_changed = function () {
		var value = this.speed;
		return value;
	};
	try {
		this.speed = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting speed '+e);
		console.error('Problems setting speed',e);
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
		this.isActive = new SFBool(true);
	} catch (e) {
		console.log('Problems setting isActive '+e);
		console.error('Problems setting isActive',e);
	}
	this.set_position = function (value) {
		try {
			this.proxy.position = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting position '+e);
			console.error('Problems setting position',e);
		}
	};
	this.position_changed = function () {
		var value = this.position;
		return value;
	};
	try {
		this.position = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting position '+e);
		console.error('Problems setting position',e);
	}
	this.set_maxPoints = function (value) {
		try {
			this.proxy.maxPoints = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting maxPoints '+e);
			console.error('Problems setting maxPoints',e);
		}
	};
	this.maxPoints_changed = function () {
		var value = this.maxPoints;
		return value;
	};
	try {
		this.maxPoints = new SFInt32(50);
	} catch (e) {
		console.log('Problems setting maxPoints '+e);
		console.error('Problems setting maxPoints',e);
	}
	this.set_pointCount = function (value) {
		try {
			this.proxy.pointCount = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting pointCount '+e);
			console.error('Problems setting pointCount',e);
		}
	};
	this.pointCount_changed = function () {
		var value = this.pointCount;
		return value;
	};
	try {
		this.pointCount = new SFInt32(0);
	} catch (e) {
		console.log('Problems setting pointCount '+e);
		console.error('Problems setting pointCount',e);
	}
	this.set_direction = function (value) {
		try {
			this.proxy.direction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting direction '+e);
			console.error('Problems setting direction',e);
		}
	};
	this.direction_changed = function () {
		var value = this.direction;
		return value;
	};
	try {
		this.direction = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting direction '+e);
		console.error('Problems setting direction',e);
	}
	this.set_reset = function (value) {
		try {
			this.proxy.reset = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting reset '+e);
			console.error('Problems setting reset',e);
		}
	};
	this.reset_changed = function () {
		var value = this.reset;
		return value;
	};
	try {
		this.reset = new SFTime();
	} catch (e) {
		console.log('Problems setting reset '+e);
		console.error('Problems setting reset',e);
	}
	this.set_position = function (value) {
		try {
			this.proxy.position = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting position '+e);
			console.error('Problems setting position',e);
		}
	};
	this.position_changed = function () {
		var value = this.position;
		return value;
	};
	try {
		this.position = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting position '+e);
		console.error('Problems setting position',e);
	}
	this.set_nullcoordIndex = function (value) {
		try {
			this.proxy.nullcoordIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting nullcoordIndex '+e);
			console.error('Problems setting nullcoordIndex',e);
		}
	};
	this.nullcoordIndex_changed = function () {
		var value = this.nullcoordIndex;
		return value;
	};
	try {
		this.nullcoordIndex = new MFInt32();
	} catch (e) {
		console.log('Problems setting nullcoordIndex '+e);
		console.error('Problems setting nullcoordIndex',e);
	}


ecmascript:
//////////////////////////////////////////////////////////////////////
// author:	-Tom Kaye, Silicon Graphics Inc, 1997 (tomk@sgi.com)
// purpose:	-Generate a polyline tail from a series of coordinates
//		passed into the script (one per clock-tick).
//		Lots of useful auxilliary info is returned as well.
// input:	-a series of position values
// output:	-a polyline consisting of the last maxPoints coordinates
//		passed into the script.
//			- position, orientation and speed of the head
//			  of the motion path
//////////////////////////////////////////////////////////////////////
	this.initialize = function ()
{
	this.proxy.position[0] = 0;
	this.proxy.position[1] = 0;
	this.proxy.position[2] = 0;
	this.proxy.last_position = this.proxy.position;
	this.proxy.direction = this.proxy.position;
	this.proxy.distance = 0;
	this.proxy.rotation = new SFRotation(this.proxy.initial_direction, this.proxy.direction);
	this.proxy.speed     = 0;
	this.proxy.last_time = 0;	
	this.proxy.current_time = 0;	
	this.proxy.pointCount = 0;
	this.proxy.stepCount = this.proxy.stepSize;
	this.proxy.currentIndex = 0;
	this.proxy.coord.length = this.proxy.maxPoints;
	this.proxy.coordIndex.length = this.proxy.maxPoints + 3;
	for ( i = 0; i < this.proxy.coordIndex.length; ++i) {
		this.proxy.coordIndex[i] = -1;
	}
}
;

	this.reset = function (value, time)
{
	this.proxy.position[0] = 0;
	this.proxy.position[1] = 0;
	this.proxy.position[2] = 0;
	this.proxy.last_position = this.proxy.position;
	this.proxy.direction = this.proxy.position;
	this.proxy.distance = 0;
	this.proxy.rotation = new SFRotation(this.proxy.initial_direction, this.proxy.direction);
	this.proxy.speed     = 0;
	this.proxy.last_time = 0;	
	this.proxy.current_time = 0;	
	this.proxy.pointCount = 0;
	this.proxy.stepCount = this.proxy.stepSize;
	this.proxy.currentIndex = 0;
	this.proxy.coord.length = this.proxy.maxPoints;
	this.proxy.coordIndex.length = this.proxy.maxPoints + 3;
	for ( i = 0; i < this.proxy.coordIndex.length; ++i) {
		this.proxy.coordIndex[i] = -1;
	}
}
;

	this.set_isVisible = function (value, time)
{
	this.proxy.isVisible = value;
	this.proxy.isVisible_changed = this.proxy.isVisible;
}
;

	this.set_isActive = function (value, time)
{
	if (value != this.proxy.isActive) {
		this.proxy.isActive = value;
		this.proxy.isActive_changed = this.proxy.isActive;
		if (this.proxy.isActive == true) {
			this.proxy.reset_trigger = time;
		}
	}
}
;

	this.set_position = function (value, time)
{
  this.proxy.last_position = value; 		// a bogus assignment
  if ( this.proxy.isActive ) {

    // skip every this.proxy.stepSize points
    if ( this.proxy.stepCount >= this.proxy.stepSize ) {

	 this.proxy.stepCount = 0;	

	// update the this.proxy.coordIndex with as few operations as possible
	if ( this.proxy.pointCount <= this.proxy.maxPoints ) {
		// first pass as tail grows from 0 to this.proxy.maxPoints in length
		// and this.proxy.coordIndex consists of only one polyline
		if ( this.proxy.pointCount < this.proxy.maxPoints ) {
			this.proxy.coordIndex[this.proxy.currentIndex + 1] = this.proxy.currentIndex;
			this.proxy.coordIndex[this.proxy.currentIndex + 2] = -1;
		} else {
			// occurs once: this.proxy.currentIndex == this.proxy.pointCount == this.proxy.maxPoints
			this.proxy.coordIndex[this.proxy.currentIndex + 1] = 0;
			this.proxy.coordIndex[this.proxy.currentIndex + 2] = -1;
			this.proxy.currentIndex = 0;
			this.proxy.coordIndex[this.proxy.currentIndex ] = this.proxy.currentIndex;
			this.proxy.coordIndex[this.proxy.currentIndex + 1] = -1;
		}
	} else {
		// subsequent passes when tail is a constant length of this.proxy.maxPoints
		// and this.proxy.coordIndex consists of two polylines
		if ( this.proxy.currentIndex < this.proxy.maxPoints ) {
			this.proxy.coordIndex[this.proxy.currentIndex]     = this.proxy.currentIndex;
			this.proxy.coordIndex[this.proxy.currentIndex + 1] = -1;
		} else {
			// occurs once each cycle when this.proxy.currentIndex == this.proxy.maxPoints
			this.proxy.coordIndex[this.proxy.currentIndex ]    = 0;
			this.proxy.coordIndex[this.proxy.currentIndex + 1] = -1;
			this.proxy.currentIndex = 0;
			this.proxy.coordIndex[this.proxy.currentIndex ] = this.proxy.currentIndex;
			this.proxy.coordIndex[this.proxy.currentIndex + 1] = -1;
		}
	}

	// save last this.proxy.position  and time to later compute this.proxy.direction and this.proxy.speed
	this.proxy.last_position = this.proxy.position;
	this.proxy.position = value;
	this.proxy.last_time = this.proxy.current_time;
	this.proxy.current_time = time;

	// add the new this.proxy.position to the coordinate array ring-buffer
	this.proxy.coord[this.proxy.currentIndex] = this.proxy.position;
	this.proxy.position_changed = this.proxy.position; 	// echo this.proxy.position value as an output

	// compute this.proxy.direction based on last two points passed in
	this.proxy.direction = this.proxy.position.subtract(this.proxy.last_position);
	this.proxy.distance = this.proxy.direction.length();

	// compute a new this.proxy.rotation only if there has been some finite movement
	if ( this.proxy.distance >= 0.00001 ) {
			this.proxy.rotation = new SFRotation(this.proxy.initial_direction, this.proxy.direction);
	}

	// Compute this.proxy.speed and output results only if two or more points have been
	// passed in since initialization or last this.proxy.reset
	if ( this.proxy.pointCount >= 1 ) {

		// compute this.proxy.speed
		this.proxy.speed = this.proxy.distance / (this.proxy.current_time - this.proxy.last_time);
		this.proxy.rotation_changed = this.proxy.rotation;
		this.proxy.speed_changed = this.proxy.speed;

		// outpout the this.proxy.coord and this.proxy.coordIndex arrays only when appropriate
		if (this.proxy.isVisible ) {
			this.proxy.coord_changed = this.proxy.coord;
			this.proxy.coordIndex_changed = this.proxy.coordIndex;
		} else {
			this.proxy.coordIndex_changed = this.proxy.nullcoordIndex;
		}

	}
	// increment the appropriate counters
	this.proxy.currentIndex += 1;	// cycles between 0 and this.proxy.maxPoints (length of tail)
	this.proxy.pointCount += 1;	// total number of points processed since this.proxy.reset

    }  // end this.proxy.stepCount block

    this.proxy.stepCount += 1;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'] = function() {
	this.set_stepCount = function (value) {
		try {
			this.proxy.stepCount = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting stepCount '+e);
			console.error('Problems setting stepCount',e);
		}
	};
	this.stepCount_changed = function () {
		var value = this.stepCount;
		return value;
	};
	try {
		this.stepCount = new SFInt32(1);
	} catch (e) {
		console.log('Problems setting stepCount '+e);
		console.error('Problems setting stepCount',e);
	}
	this.set_isVisible = function (value) {
		try {
			this.proxy.isVisible = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isVisible '+e);
			console.error('Problems setting isVisible',e);
		}
	};
	this.isVisible_changed = function () {
		var value = this.isVisible;
		return value;
	};
	try {
		this.isVisible = new SFBool(true);
	} catch (e) {
		console.log('Problems setting isVisible '+e);
		console.error('Problems setting isVisible',e);
	}
	this.set_coordIndex = function (value) {
		try {
			this.proxy.coordIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting coordIndex '+e);
			console.error('Problems setting coordIndex',e);
		}
	};
	this.coordIndex_changed = function () {
		var value = this.coordIndex;
		return value;
	};
	try {
		this.coordIndex = new MFInt32(-1,-1);
	} catch (e) {
		console.log('Problems setting coordIndex '+e);
		console.error('Problems setting coordIndex',e);
	}
	this.set_currentIndex = function (value) {
		try {
			this.proxy.currentIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting currentIndex '+e);
			console.error('Problems setting currentIndex',e);
		}
	};
	this.currentIndex_changed = function () {
		var value = this.currentIndex;
		return value;
	};
	try {
		this.currentIndex = new SFInt32(0);
	} catch (e) {
		console.log('Problems setting currentIndex '+e);
		console.error('Problems setting currentIndex',e);
	}
	this.set_last_time = function (value) {
		try {
			this.proxy.last_time = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting last_time '+e);
			console.error('Problems setting last_time',e);
		}
	};
	this.last_time_changed = function () {
		var value = this.last_time;
		return value;
	};
	try {
		this.last_time = new SFTime(0);
	} catch (e) {
		console.log('Problems setting last_time '+e);
		console.error('Problems setting last_time',e);
	}
	this.set_distance = function (value) {
		try {
			this.proxy.distance = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting distance '+e);
			console.error('Problems setting distance',e);
		}
	};
	this.distance_changed = function () {
		var value = this.distance;
		return value;
	};
	try {
		this.distance = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting distance '+e);
		console.error('Problems setting distance',e);
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
		this.isActive = new SFBool(true);
	} catch (e) {
		console.log('Problems setting isActive '+e);
		console.error('Problems setting isActive',e);
	}
	this.set_stepSize = function (value) {
		try {
			this.proxy.stepSize = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting stepSize '+e);
			console.error('Problems setting stepSize',e);
		}
	};
	this.stepSize_changed = function () {
		var value = this.stepSize;
		return value;
	};
	try {
		this.stepSize = new SFInt32(1);
	} catch (e) {
		console.log('Problems setting stepSize '+e);
		console.error('Problems setting stepSize',e);
	}
	this.set_coordIndex = function (value) {
		try {
			this.proxy.coordIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting coordIndex '+e);
			console.error('Problems setting coordIndex',e);
		}
	};
	this.coordIndex_changed = function () {
		var value = this.coordIndex;
		return value;
	};
	try {
		this.coordIndex = new MFInt32(-1,-1);
	} catch (e) {
		console.log('Problems setting coordIndex '+e);
		console.error('Problems setting coordIndex',e);
	}
	this.set_startIndex = function (value) {
		try {
			this.proxy.startIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startIndex '+e);
			console.error('Problems setting startIndex',e);
		}
	};
	this.startIndex_changed = function () {
		var value = this.startIndex;
		return value;
	};
	try {
		this.startIndex = new SFInt32(0);
	} catch (e) {
		console.log('Problems setting startIndex '+e);
		console.error('Problems setting startIndex',e);
	}
	this.set_position = function (value) {
		try {
			this.proxy.position = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting position '+e);
			console.error('Problems setting position',e);
		}
	};
	this.position_changed = function () {
		var value = this.position;
		return value;
	};
	try {
		this.position = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting position '+e);
		console.error('Problems setting position',e);
	}
	this.set_reset_trigger = function (value) {
		try {
			this.proxy.reset_trigger = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting reset_trigger '+e);
			console.error('Problems setting reset_trigger',e);
		}
	};
	this.reset_trigger_changed = function () {
		var value = this.reset_trigger;
		return value;
	};
	try {
		this.reset_trigger = new SFTime();
	} catch (e) {
		console.log('Problems setting reset_trigger '+e);
		console.error('Problems setting reset_trigger',e);
	}
	this.set_coord = function (value) {
		try {
			this.proxy.coord = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting coord '+e);
			console.error('Problems setting coord',e);
		}
	};
	this.coord_changed = function () {
		var value = this.coord;
		return value;
	};
	try {
		this.coord = new MFVec3f([new SFVec3f ( 0 , 0 , 0 ),new SFVec3f ( 1 , 0 , 0 )]);
	} catch (e) {
		console.log('Problems setting coord '+e);
		console.error('Problems setting coord',e);
	}
	this.set_current_time = function (value) {
		try {
			this.proxy.current_time = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting current_time '+e);
			console.error('Problems setting current_time',e);
		}
	};
	this.current_time_changed = function () {
		var value = this.current_time;
		return value;
	};
	try {
		this.current_time = new SFTime(0);
	} catch (e) {
		console.log('Problems setting current_time '+e);
		console.error('Problems setting current_time',e);
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
		this.rotation = new SFRotation(0,0,1,0);
	} catch (e) {
		console.log('Problems setting rotation '+e);
		console.error('Problems setting rotation',e);
	}
	this.set_isVisible = function (value) {
		try {
			this.proxy.isVisible = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isVisible '+e);
			console.error('Problems setting isVisible',e);
		}
	};
	this.isVisible_changed = function () {
		var value = this.isVisible;
		return value;
	};
	try {
		this.isVisible = new SFBool(true);
	} catch (e) {
		console.log('Problems setting isVisible '+e);
		console.error('Problems setting isVisible',e);
	}
	this.set_last_position = function (value) {
		try {
			this.proxy.last_position = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting last_position '+e);
			console.error('Problems setting last_position',e);
		}
	};
	this.last_position_changed = function () {
		var value = this.last_position;
		return value;
	};
	try {
		this.last_position = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting last_position '+e);
		console.error('Problems setting last_position',e);
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
		this.isActive = new SFBool(true);
	} catch (e) {
		console.log('Problems setting isActive '+e);
		console.error('Problems setting isActive',e);
	}
	this.set_initial_direction = function (value) {
		try {
			this.proxy.initial_direction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting initial_direction '+e);
			console.error('Problems setting initial_direction',e);
		}
	};
	this.initial_direction_changed = function () {
		var value = this.initial_direction;
		return value;
	};
	try {
		this.initial_direction = new SFVec3f(0,0,-1);
	} catch (e) {
		console.log('Problems setting initial_direction '+e);
		console.error('Problems setting initial_direction',e);
	}
	this.set_isVisible = function (value) {
		try {
			this.proxy.isVisible = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isVisible '+e);
			console.error('Problems setting isVisible',e);
		}
	};
	this.isVisible_changed = function () {
		var value = this.isVisible;
		return value;
	};
	try {
		this.isVisible = new SFBool(true);
	} catch (e) {
		console.log('Problems setting isVisible '+e);
		console.error('Problems setting isVisible',e);
	}
	this.set_coord = function (value) {
		try {
			this.proxy.coord = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting coord '+e);
			console.error('Problems setting coord',e);
		}
	};
	this.coord_changed = function () {
		var value = this.coord;
		return value;
	};
	try {
		this.coord = new MFVec3f([new SFVec3f ( 0 , 0 , 0 ),new SFVec3f ( 1 , 0 , 0 )]);
	} catch (e) {
		console.log('Problems setting coord '+e);
		console.error('Problems setting coord',e);
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
		this.rotation = new SFRotation(0,0,1,0);
	} catch (e) {
		console.log('Problems setting rotation '+e);
		console.error('Problems setting rotation',e);
	}
	this.set_speed = function (value) {
		try {
			this.proxy.speed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting speed '+e);
			console.error('Problems setting speed',e);
		}
	};
	this.speed_changed = function () {
		var value = this.speed;
		return value;
	};
	try {
		this.speed = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting speed '+e);
		console.error('Problems setting speed',e);
	}
	this.set_speed = function (value) {
		try {
			this.proxy.speed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting speed '+e);
			console.error('Problems setting speed',e);
		}
	};
	this.speed_changed = function () {
		var value = this.speed;
		return value;
	};
	try {
		this.speed = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting speed '+e);
		console.error('Problems setting speed',e);
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
		this.isActive = new SFBool(true);
	} catch (e) {
		console.log('Problems setting isActive '+e);
		console.error('Problems setting isActive',e);
	}
	this.set_position = function (value) {
		try {
			this.proxy.position = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting position '+e);
			console.error('Problems setting position',e);
		}
	};
	this.position_changed = function () {
		var value = this.position;
		return value;
	};
	try {
		this.position = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting position '+e);
		console.error('Problems setting position',e);
	}
	this.set_maxPoints = function (value) {
		try {
			this.proxy.maxPoints = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting maxPoints '+e);
			console.error('Problems setting maxPoints',e);
		}
	};
	this.maxPoints_changed = function () {
		var value = this.maxPoints;
		return value;
	};
	try {
		this.maxPoints = new SFInt32(50);
	} catch (e) {
		console.log('Problems setting maxPoints '+e);
		console.error('Problems setting maxPoints',e);
	}
	this.set_pointCount = function (value) {
		try {
			this.proxy.pointCount = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting pointCount '+e);
			console.error('Problems setting pointCount',e);
		}
	};
	this.pointCount_changed = function () {
		var value = this.pointCount;
		return value;
	};
	try {
		this.pointCount = new SFInt32(0);
	} catch (e) {
		console.log('Problems setting pointCount '+e);
		console.error('Problems setting pointCount',e);
	}
	this.set_direction = function (value) {
		try {
			this.proxy.direction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting direction '+e);
			console.error('Problems setting direction',e);
		}
	};
	this.direction_changed = function () {
		var value = this.direction;
		return value;
	};
	try {
		this.direction = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting direction '+e);
		console.error('Problems setting direction',e);
	}
	this.set_reset = function (value) {
		try {
			this.proxy.reset = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting reset '+e);
			console.error('Problems setting reset',e);
		}
	};
	this.reset_changed = function () {
		var value = this.reset;
		return value;
	};
	try {
		this.reset = new SFTime();
	} catch (e) {
		console.log('Problems setting reset '+e);
		console.error('Problems setting reset',e);
	}
	this.set_position = function (value) {
		try {
			this.proxy.position = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting position '+e);
			console.error('Problems setting position',e);
		}
	};
	this.position_changed = function () {
		var value = this.position;
		return value;
	};
	try {
		this.position = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting position '+e);
		console.error('Problems setting position',e);
	}
	this.set_nullcoordIndex = function (value) {
		try {
			this.proxy.nullcoordIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting nullcoordIndex '+e);
			console.error('Problems setting nullcoordIndex',e);
		}
	};
	this.nullcoordIndex_changed = function () {
		var value = this.nullcoordIndex;
		return value;
	};
	try {
		this.nullcoordIndex = new MFInt32();
	} catch (e) {
		console.log('Problems setting nullcoordIndex '+e);
		console.error('Problems setting nullcoordIndex',e);
	}


ecmascript:
//////////////////////////////////////////////////////////////////////
// author:	-Tom Kaye, Silicon Graphics Inc, 1997 (tomk@sgi.com)
// purpose:	-Generate a polyline tail from a series of coordinates
//		passed into the script (one per clock-tick).
//		Lots of useful auxilliary info is returned as well.
// input:	-a series of position values
// output:	-a polyline consisting of the last maxPoints coordinates
//		passed into the script.
//			- position, orientation and speed of the head
//			  of the motion path
//////////////////////////////////////////////////////////////////////
	this.initialize = function ()
{
	this.proxy.position[0] = 0;
	this.proxy.position[1] = 0;
	this.proxy.position[2] = 0;
	this.proxy.last_position = this.proxy.position;
	this.proxy.direction = this.proxy.position;
	this.proxy.distance = 0;
	this.proxy.rotation = new SFRotation(this.proxy.initial_direction, this.proxy.direction);
	this.proxy.speed     = 0;
	this.proxy.last_time = 0;	
	this.proxy.current_time = 0;	
	this.proxy.pointCount = 0;
	this.proxy.stepCount = this.proxy.stepSize;
	this.proxy.currentIndex = 0;
	this.proxy.coord.length = this.proxy.maxPoints;
	this.proxy.coordIndex.length = this.proxy.maxPoints + 3;
	for ( i = 0; i < this.proxy.coordIndex.length; ++i) {
		this.proxy.coordIndex[i] = -1;
	}
}
;

	this.reset = function (value, time)
{
	this.proxy.position[0] = 0;
	this.proxy.position[1] = 0;
	this.proxy.position[2] = 0;
	this.proxy.last_position = this.proxy.position;
	this.proxy.direction = this.proxy.position;
	this.proxy.distance = 0;
	this.proxy.rotation = new SFRotation(this.proxy.initial_direction, this.proxy.direction);
	this.proxy.speed     = 0;
	this.proxy.last_time = 0;	
	this.proxy.current_time = 0;	
	this.proxy.pointCount = 0;
	this.proxy.stepCount = this.proxy.stepSize;
	this.proxy.currentIndex = 0;
	this.proxy.coord.length = this.proxy.maxPoints;
	this.proxy.coordIndex.length = this.proxy.maxPoints + 3;
	for ( i = 0; i < this.proxy.coordIndex.length; ++i) {
		this.proxy.coordIndex[i] = -1;
	}
}
;

	this.set_isVisible = function (value, time)
{
	this.proxy.isVisible = value;
	this.proxy.isVisible_changed = this.proxy.isVisible;
}
;

	this.set_isActive = function (value, time)
{
	if (value != this.proxy.isActive) {
		this.proxy.isActive = value;
		this.proxy.isActive_changed = this.proxy.isActive;
		if (this.proxy.isActive == true) {
			this.proxy.reset_trigger = time;
		}
	}
}
;

	this.set_position = function (value, time)
{
  this.proxy.last_position = value; 		// a bogus assignment
  if ( this.proxy.isActive ) {

    // skip every this.proxy.stepSize points
    if ( this.proxy.stepCount >= this.proxy.stepSize ) {

	 this.proxy.stepCount = 0;	

	// update the this.proxy.coordIndex with as few operations as possible
	if ( this.proxy.pointCount <= this.proxy.maxPoints ) {
		// first pass as tail grows from 0 to this.proxy.maxPoints in length
		// and this.proxy.coordIndex consists of only one polyline
		if ( this.proxy.pointCount < this.proxy.maxPoints ) {
			this.proxy.coordIndex[this.proxy.currentIndex + 1] = this.proxy.currentIndex;
			this.proxy.coordIndex[this.proxy.currentIndex + 2] = -1;
		} else {
			// occurs once: this.proxy.currentIndex == this.proxy.pointCount == this.proxy.maxPoints
			this.proxy.coordIndex[this.proxy.currentIndex + 1] = 0;
			this.proxy.coordIndex[this.proxy.currentIndex + 2] = -1;
			this.proxy.currentIndex = 0;
			this.proxy.coordIndex[this.proxy.currentIndex ] = this.proxy.currentIndex;
			this.proxy.coordIndex[this.proxy.currentIndex + 1] = -1;
		}
	} else {
		// subsequent passes when tail is a constant length of this.proxy.maxPoints
		// and this.proxy.coordIndex consists of two polylines
		if ( this.proxy.currentIndex < this.proxy.maxPoints ) {
			this.proxy.coordIndex[this.proxy.currentIndex]     = this.proxy.currentIndex;
			this.proxy.coordIndex[this.proxy.currentIndex + 1] = -1;
		} else {
			// occurs once each cycle when this.proxy.currentIndex == this.proxy.maxPoints
			this.proxy.coordIndex[this.proxy.currentIndex ]    = 0;
			this.proxy.coordIndex[this.proxy.currentIndex + 1] = -1;
			this.proxy.currentIndex = 0;
			this.proxy.coordIndex[this.proxy.currentIndex ] = this.proxy.currentIndex;
			this.proxy.coordIndex[this.proxy.currentIndex + 1] = -1;
		}
	}

	// save last this.proxy.position  and time to later compute this.proxy.direction and this.proxy.speed
	this.proxy.last_position = this.proxy.position;
	this.proxy.position = value;
	this.proxy.last_time = this.proxy.current_time;
	this.proxy.current_time = time;

	// add the new this.proxy.position to the coordinate array ring-buffer
	this.proxy.coord[this.proxy.currentIndex] = this.proxy.position;
	this.proxy.position_changed = this.proxy.position; 	// echo this.proxy.position value as an output


	
	// compute this.proxy.direction based on last two points passed in
	this.proxy.direction = this.proxy.position.subtract(this.proxy.last_position);
	this.proxy.distance = this.proxy.direction.length();

	// compute a new this.proxy.rotation only if there has been some finite movement
	if ( this.proxy.distance >= 0.00001 ) {
			this.proxy.rotation = new SFRotation(this.proxy.initial_direction, this.proxy.direction);
	}

	// Compute this.proxy.speed and output results only if two or more points have been
	// passed in since initialization or last this.proxy.reset
	if ( this.proxy.pointCount >= 1 ) {

		// compute this.proxy.speed
		this.proxy.speed = this.proxy.distance / (this.proxy.current_time - this.proxy.last_time);
		this.proxy.rotation_changed = this.proxy.rotation;
		this.proxy.speed_changed = this.proxy.speed;

		// outpout the this.proxy.coord and this.proxy.coordIndex arrays only when appropriate
		if (this.proxy.isVisible ) {
			this.proxy.coord_changed = this.proxy.coord;
			this.proxy.coordIndex_changed = this.proxy.coordIndex;
		} else {
			this.proxy.coordIndex_changed = this.proxy.nullcoordIndex;
		}
	}

	// increment the appropriate counters
	this.proxy.currentIndex += 1;	// cycles between 0 and this.proxy.maxPoints (length of tail)
	this.proxy.pointCount += 1;	// total number of points processed since this.proxy.reset

    }  // end this.proxy.stepCount block

    this.proxy.stepCount += 1;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'] = function() {
	this.set_leftWingtipCoordinate = function (value) {
		try {
			this.proxy.leftWingtipCoordinate = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting leftWingtipCoordinate '+e);
			console.error('Problems setting leftWingtipCoordinate',e);
		}
	};
	this.leftWingtipCoordinate_changed = function () {
		var value = this.leftWingtipCoordinate;
		return value;
	};
	try {
		this.leftWingtipCoordinate = undefined;
	} catch (e) {
		console.log('Problems setting leftWingtipCoordinate '+e);
		console.error('Problems setting leftWingtipCoordinate',e);
	}
	this.set_vehicleRotation = function (value) {
		try {
			this.proxy.vehicleRotation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting vehicleRotation '+e);
			console.error('Problems setting vehicleRotation',e);
		}
	};
	this.vehicleRotation_changed = function () {
		var value = this.vehicleRotation;
		return value;
	};
	try {
		this.vehicleRotation = new SFRotation(0,0,1,0);
	} catch (e) {
		console.log('Problems setting vehicleRotation '+e);
		console.error('Problems setting vehicleRotation',e);
	}
	this.set_vehiclePosition = function (value) {
		try {
			this.proxy.vehiclePosition = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting vehiclePosition '+e);
			console.error('Problems setting vehiclePosition',e);
		}
	};
	this.vehiclePosition_changed = function () {
		var value = this.vehiclePosition;
		return value;
	};
	try {
		this.vehiclePosition = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting vehiclePosition '+e);
		console.error('Problems setting vehiclePosition',e);
	}
	this.set_rightOffsetVector = function (value) {
		try {
			this.proxy.rightOffsetVector = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rightOffsetVector '+e);
			console.error('Problems setting rightOffsetVector',e);
		}
	};
	this.rightOffsetVector_changed = function () {
		var value = this.rightOffsetVector;
		return value;
	};
	try {
		this.rightOffsetVector = new SFVec3f(0.25,-0.5,0);
	} catch (e) {
		console.log('Problems setting rightOffsetVector '+e);
		console.error('Problems setting rightOffsetVector',e);
	}
	this.set_leftOffsetVector = function (value) {
		try {
			this.proxy.leftOffsetVector = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting leftOffsetVector '+e);
			console.error('Problems setting leftOffsetVector',e);
		}
	};
	this.leftOffsetVector_changed = function () {
		var value = this.leftOffsetVector;
		return value;
	};
	try {
		this.leftOffsetVector = new SFVec3f(-0.25,-0.5,0);
	} catch (e) {
		console.log('Problems setting leftOffsetVector '+e);
		console.error('Problems setting leftOffsetVector',e);
	}
	this.set_rightWingtipCoordinate = function (value) {
		try {
			this.proxy.rightWingtipCoordinate = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rightWingtipCoordinate '+e);
			console.error('Problems setting rightWingtipCoordinate',e);
		}
	};
	this.rightWingtipCoordinate_changed = function () {
		var value = this.rightWingtipCoordinate;
		return value;
	};
	try {
		this.rightWingtipCoordinate = undefined;
	} catch (e) {
		console.log('Problems setting rightWingtipCoordinate '+e);
		console.error('Problems setting rightWingtipCoordinate',e);
	}
	this.set_vehiclePosition = function (value) {
		try {
			this.proxy.vehiclePosition = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting vehiclePosition '+e);
			console.error('Problems setting vehiclePosition',e);
		}
	};
	this.vehiclePosition_changed = function () {
		var value = this.vehiclePosition;
		return value;
	};
	try {
		this.vehiclePosition = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting vehiclePosition '+e);
		console.error('Problems setting vehiclePosition',e);
	}
	this.set_vehicleRotation = function (value) {
		try {
			this.proxy.vehicleRotation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting vehicleRotation '+e);
			console.error('Problems setting vehicleRotation',e);
		}
	};
	this.vehicleRotation_changed = function () {
		var value = this.vehicleRotation;
		return value;
	};
	try {
		this.vehicleRotation = new SFRotation(0,0,1,0);
	} catch (e) {
		console.log('Problems setting vehicleRotation '+e);
		console.error('Problems setting vehicleRotation',e);
	}


ecmascript:
//////////////////////////////////////////////////////////////////////
// author:	Tom Kaye, Silicon Graphics Inc, 1997 (tomk@sgi.com)
// purpose:	Generate absolute WingTip coordinates from a single
//		position and rotation value.
// input:	position and rotation of a vehicle
// output:	absolute coordinates of left and right wingtips
//////////////////////////////////////////////////////////////////////
	this.set_vehiclePosition = function (value, time)
{
	this.proxy.vehiclePosition = value;
	this.proxy.rightWingtipCoordinate_changed = this.proxy.vehiclePosition.add( this.proxy.vehicleRotation.multVec(this.proxy.rightOffsetVector) );
	this.proxy.leftWingtipCoordinate_changed  = this.proxy.vehiclePosition.add( this.proxy.vehicleRotation.multVec(this.proxy.leftOffsetVector) );
		
}
;

	this.set_vehicleRotation = function (value, time)
{
	this.proxy.vehicleRotation = value;	
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript']['ACTION']['firstTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript']['ACTION']['firstTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript']['ACTION']['firstTime'].push(function(property, value) {
		if (property === 'firstTime') {
			X3DJSON.nodeUtil("Scene","enterWorldTimeSensor","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'].firstTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'].firstTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'].firstTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","enterWorldTimeSensor","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'].firstTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'].firstTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'].firstTime, __eventTime);
    if (X3DJSON.nodeUtil("Scene","enterWorldTimeSensor")) {
X3DJSON.nodeUtil("Scene","enterWorldTimeSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'].triggerIn(X3DJSON.nodeUtil("Scene","enterWorldTimeSensor","time"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'].triggerIn(X3DJSON.nodeUtil("Scene","enterWorldTimeSensor","time"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TargetVehicle")) {
X3DJSON.nodeUtil("Scene","TargetVehicle").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'].rawCoordinateIn(X3DJSON.nodeUtil("Scene","TargetVehicle","translation"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'].rawCoordinateIn(X3DJSON.nodeUtil("Scene","TargetVehicle","translation"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","Time")) {
X3DJSON.nodeUtil("Scene","Time").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'].reset(X3DJSON.nodeUtil("Scene","Time","cycleInterval"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'].reset(X3DJSON.nodeUtil("Scene","Time","cycleInterval"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates']['ACTION']['leftWingtipCoordinate'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates']['ACTION']['leftWingtipCoordinate'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates']['ACTION']['leftWingtipCoordinate'].push(function(property, value) {
		if (property === 'leftWingtipCoordinate') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].leftWingtipCoordinate_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].leftWingtipCoordinate_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].leftWingtipCoordinate) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'].set_position(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].leftWingtipCoordinate_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].leftWingtipCoordinate_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].leftWingtipCoordinate, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].leftWingtipCoordinate_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].leftWingtipCoordinate_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].leftWingtipCoordinate) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'].set_position(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].leftWingtipCoordinate_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].leftWingtipCoordinate_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].leftWingtipCoordinate, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL']['ACTION']['coord'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL']['ACTION']['coord'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL']['ACTION']['coord'].push(function(property, value) {
		if (property === 'coord') {
			X3DJSON.nodeUtil("Scene","MotionTrailCoordL","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'].coord_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'].coord_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'].coord, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","MotionTrailCoordL","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'].coord_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'].coord_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'].coord, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL']['ACTION']['coordIndex'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL']['ACTION']['coordIndex'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL']['ACTION']['coordIndex'].push(function(property, value) {
		if (property === 'coordIndex') {
			X3DJSON.nodeUtil("Scene","MotionTrailLineSetL","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'].coordIndex_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'].coordIndex_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'].coordIndex, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","MotionTrailLineSetL","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'].coordIndex_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'].coordIndex_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'].coordIndex, __eventTime);
    if (X3DJSON.nodeUtil("Scene","Time")) {
X3DJSON.nodeUtil("Scene","Time").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'].reset(X3DJSON.nodeUtil("Scene","Time","cycleInterval"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'].reset(X3DJSON.nodeUtil("Scene","Time","cycleInterval"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates']['ACTION']['rightWingtipCoordinate'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates']['ACTION']['rightWingtipCoordinate'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates']['ACTION']['rightWingtipCoordinate'].push(function(property, value) {
		if (property === 'rightWingtipCoordinate') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].rightWingtipCoordinate_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].rightWingtipCoordinate_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].rightWingtipCoordinate) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'].set_position(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].rightWingtipCoordinate_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].rightWingtipCoordinate_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].rightWingtipCoordinate, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].rightWingtipCoordinate_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].rightWingtipCoordinate_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].rightWingtipCoordinate) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'].set_position(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].rightWingtipCoordinate_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].rightWingtipCoordinate_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].rightWingtipCoordinate, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR']['ACTION']['coord'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR']['ACTION']['coord'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR']['ACTION']['coord'].push(function(property, value) {
		if (property === 'coord') {
			X3DJSON.nodeUtil("Scene","MotionTrailCoordR","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'].coord_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'].coord_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'].coord, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","MotionTrailCoordR","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'].coord_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'].coord_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'].coord, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR']['ACTION']['coordIndex'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR']['ACTION']['coordIndex'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR']['ACTION']['coordIndex'].push(function(property, value) {
		if (property === 'coordIndex') {
			X3DJSON.nodeUtil("Scene","MotionTrailLineSetR","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'].coordIndex_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'].coordIndex_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'].coordIndex, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","MotionTrailLineSetR","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'].coordIndex_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'].coordIndex_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'].coordIndex, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates']['ACTION']['offsetCoordinateOut'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates']['ACTION']['offsetCoordinateOut'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates']['ACTION']['offsetCoordinateOut'].push(function(property, value) {
		if (property === 'offsetCoordinateOut') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'].offsetCoordinateOut === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'].offsetCoordinateOut() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'].offsetCoordinateOut) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].set_vehiclePosition(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'].offsetCoordinateOut === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'].offsetCoordinateOut() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'].offsetCoordinateOut, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'].offsetCoordinateOut === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'].offsetCoordinateOut() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'].offsetCoordinateOut) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].set_vehiclePosition(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'].offsetCoordinateOut === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'].offsetCoordinateOut() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'].offsetCoordinateOut, __eventTime);
		}
    if (X3DJSON.nodeUtil("Scene","TargetVehicle")) {
X3DJSON.nodeUtil("Scene","TargetVehicle").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].set_vehicleRotation(X3DJSON.nodeUtil("Scene","TargetVehicle","rotation"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].set_vehicleRotation(X3DJSON.nodeUtil("Scene","TargetVehicle","rotation"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript']['ACTION']['startTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript']['ACTION']['startTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript']['ACTION']['startTime'].push(function(property, value) {
		if (property === 'startTime') {
			X3DJSON.nodeUtil("Scene","Time","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'].startTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'].startTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'].startTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Time","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'].startTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'].startTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'].startTime, __eventTime);
    if (X3DJSON.nodeUtil("Scene","Time")) {
X3DJSON.nodeUtil("Scene","Time").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Time")) {
X3DJSON.nodeUtil("Scene","Time").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TargetVehicleTranslationInterp")) {
X3DJSON.nodeUtil("Scene","TargetVehicleTranslationInterp").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TargetVehicleRotationInterp")) {
X3DJSON.nodeUtil("Scene","TargetVehicleRotationInterp").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PositionDamperNode")) {
X3DJSON.nodeUtil("Scene","PositionDamperNode").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","OrientationDamperNode")) {
X3DJSON.nodeUtil("Scene","OrientationDamperNode").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON.nodeUtil("Scene","enterWorldTimeSensor","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'].firstTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'].firstTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'].firstTime, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'].triggerIn(X3DJSON.nodeUtil("Scene","enterWorldTimeSensor","time"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'].rawCoordinateIn(X3DJSON.nodeUtil("Scene","TargetVehicle","translation"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'].reset(X3DJSON.nodeUtil("Scene","Time","cycleInterval"), __eventTime);
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].leftWingtipCoordinate_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].leftWingtipCoordinate_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].leftWingtipCoordinate) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'].set_position(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].leftWingtipCoordinate_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].leftWingtipCoordinate_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].leftWingtipCoordinate, __eventTime);
		}
			X3DJSON.nodeUtil("Scene","MotionTrailCoordL","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'].coord_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'].coord_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'].coord, __eventTime);
			X3DJSON.nodeUtil("Scene","MotionTrailLineSetL","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'].coordIndex_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'].coordIndex_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptL'].coordIndex, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'].reset(X3DJSON.nodeUtil("Scene","Time","cycleInterval"), __eventTime);
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].rightWingtipCoordinate_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].rightWingtipCoordinate_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].rightWingtipCoordinate) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'].set_position(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].rightWingtipCoordinate_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].rightWingtipCoordinate_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].rightWingtipCoordinate, __eventTime);
		}
			X3DJSON.nodeUtil("Scene","MotionTrailCoordR","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'].coord_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'].coord_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'].coord, __eventTime);
			X3DJSON.nodeUtil("Scene","MotionTrailLineSetR","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'].coordIndex_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'].coordIndex_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['MotionTrailScriptR'].coordIndex, __eventTime);
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'].offsetCoordinateOut === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'].offsetCoordinateOut() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'].offsetCoordinateOut) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].set_vehiclePosition(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'].offsetCoordinateOut === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'].offsetCoordinateOut() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['offsetCoordinates'].offsetCoordinateOut, __eventTime);
		}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['wingtipCoordinates'].set_vehicleRotation(X3DJSON.nodeUtil("Scene","TargetVehicle","rotation"), __eventTime);
			X3DJSON.nodeUtil("Scene","Time","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'].startTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'].startTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/CoasterDamper.json']['enterWorldScript'].startTime, __eventTime);