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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'] = function() {
	this.set_LastPos = function (value) {
		try {
			this.proxy.LastPos = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting LastPos '+e);
			console.error('Problems setting LastPos',e);
		}
	};
	this.LastPos_changed = function () {
		var value = this.LastPos;
		return value;
	};
	try {
		this.LastPos = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting LastPos '+e);
		console.error('Problems setting LastPos',e);
	}
	this.set_OriOt = function (value) {
		try {
			this.proxy.OriOt = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting OriOt '+e);
			console.error('Problems setting OriOt',e);
		}
	};
	this.OriOt_changed = function () {
		var value = this.OriOt;
		return value;
	};
	try {
		this.OriOt = new SFRotation();
	} catch (e) {
		console.log('Problems setting OriOt '+e);
		console.error('Problems setting OriOt',e);
	}
	this.set_PosIn = function (value) {
		try {
			this.proxy.PosIn = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting PosIn '+e);
			console.error('Problems setting PosIn',e);
		}
	};
	this.PosIn_changed = function () {
		var value = this.PosIn;
		return value;
	};
	try {
		this.PosIn = new SFVec3f();
	} catch (e) {
		console.log('Problems setting PosIn '+e);
		console.error('Problems setting PosIn',e);
	}


ecmascript:

	this.PosIn = function (Pos)
{
    var Delta= Pos.subtract(this.proxy.LastPos);
    this.proxy.LastPos= Pos;

    Delta= Delta.multiply(3);

    var Tmp= Delta.x;
    Delta.x= -Delta.y;
    Delta.y= Tmp;

    var DeltaOri= new SFRotation(Delta.normalize(), Delta.length());

    this.proxy.OriOt= this.proxy.OriOt.multiply(DeltaOri);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrStopper'] = function() {
	this.set_OriIn = function (value) {
		try {
			this.proxy.OriIn = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting OriIn '+e);
			console.error('Problems setting OriIn',e);
		}
	};
	this.OriIn_changed = function () {
		var value = this.OriIn;
		return value;
	};
	try {
		this.OriIn = new SFRotation();
	} catch (e) {
		console.log('Problems setting OriIn '+e);
		console.error('Problems setting OriIn',e);
	}
	this.set_Damper = function (value) {
		try {
			this.proxy.Damper = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Damper '+e);
			console.error('Problems setting Damper',e);
		}
	};
	this.Damper_changed = function () {
		var value = this.Damper;
		return value;
	};
	try {
		this.Damper = X3DJSON.nodeUtil("Scene","PositionDamperNode");
	} catch (e) {
		console.log('Problems setting Damper '+e);
		console.error('Problems setting Damper',e);
	}
	this.set_Stop = function (value) {
		try {
			this.proxy.Stop = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Stop '+e);
			console.error('Problems setting Stop',e);
		}
	};
	this.Stop_changed = function () {
		var value = this.Stop;
		return value;
	};
	try {
		this.Stop = new SFTime();
	} catch (e) {
		console.log('Problems setting Stop '+e);
		console.error('Problems setting Stop',e);
	}
	this.set_SensorIsActive = function (value) {
		try {
			this.proxy.SensorIsActive = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SensorIsActive '+e);
			console.error('Problems setting SensorIsActive',e);
		}
	};
	this.SensorIsActive_changed = function () {
		var value = this.SensorIsActive;
		return value;
	};
	try {
		this.SensorIsActive = new SFBool();
	} catch (e) {
		console.log('Problems setting SensorIsActive '+e);
		console.error('Problems setting SensorIsActive',e);
	}
	this.set_Stopped = function (value) {
		try {
			this.proxy.Stopped = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Stopped '+e);
			console.error('Problems setting Stopped',e);
		}
	};
	this.Stopped_changed = function () {
		var value = this.Stopped;
		return value;
	};
	try {
		this.Stopped = new SFBool(false);
	} catch (e) {
		console.log('Problems setting Stopped '+e);
		console.error('Problems setting Stopped',e);
	}
	this.set_OriOt = function (value) {
		try {
			this.proxy.OriOt = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting OriOt '+e);
			console.error('Problems setting OriOt',e);
		}
	};
	this.OriOt_changed = function () {
		var value = this.OriOt;
		return value;
	};
	try {
		this.OriOt = new SFRotation();
	} catch (e) {
		console.log('Problems setting OriOt '+e);
		console.error('Problems setting OriOt',e);
	}


ecmascript:

	this.Stop = function ()
{
    var Value= X3DJSON.nodeUtil("Scene","PositionDamperNode", "value_changed");

    this.proxy.Stopped= true;

    X3DJSON.nodeUtil("Scene","PositionDamperNode", "set_value",  Value);
    X3DJSON.nodeUtil("Scene","PositionDamperNode", "set_destination",   Value);

}
;

	this.OriIn = function (O)
{
    if(!this.proxy.Stopped)
        this.proxy.OriOt= O;
}
;

	this.SensorIsActive = function (a)
{
    if(a)
        this.proxy.Stopped= false;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrStopper'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrStopper']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrStopper'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrStopper'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrStopper']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrStopper']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrStopper'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrStopper']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrStopper']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrStopper'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrStopper'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'] = function() {
	this.set_DampEmissive_sThere = function (value) {
		try {
			this.proxy.DampEmissive_sThere = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting DampEmissive_sThere '+e);
			console.error('Problems setting DampEmissive_sThere',e);
		}
	};
	this.DampEmissive_sThere_changed = function () {
		var value = this.DampEmissive_sThere;
		return value;
	};
	try {
		this.DampEmissive_sThere = new SFBool();
	} catch (e) {
		console.log('Problems setting DampEmissive_sThere '+e);
		console.error('Problems setting DampEmissive_sThere',e);
	}
	this.set_cEmissiveHot = function (value) {
		try {
			this.proxy.cEmissiveHot = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cEmissiveHot '+e);
			console.error('Problems setting cEmissiveHot',e);
		}
	};
	this.cEmissiveHot_changed = function () {
		var value = this.cEmissiveHot;
		return value;
	};
	try {
		this.cEmissiveHot = new SFColor(0,0.135,0.225);
	} catch (e) {
		console.log('Problems setting cEmissiveHot '+e);
		console.error('Problems setting cEmissiveHot',e);
	}
	this.set_DiffuseValue = function (value) {
		try {
			this.proxy.DiffuseValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting DiffuseValue '+e);
			console.error('Problems setting DiffuseValue',e);
		}
	};
	this.DiffuseValue_changed = function () {
		var value = this.DiffuseValue;
		return value;
	};
	try {
		this.DiffuseValue = new SFColor();
	} catch (e) {
		console.log('Problems setting DiffuseValue '+e);
		console.error('Problems setting DiffuseValue',e);
	}
	this.set_SpecularHot = function (value) {
		try {
			this.proxy.SpecularHot = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SpecularHot '+e);
			console.error('Problems setting SpecularHot',e);
		}
	};
	this.SpecularHot_changed = function () {
		var value = this.SpecularHot;
		return value;
	};
	try {
		this.SpecularHot = new SFColor(0.75,0.75,0.75);
	} catch (e) {
		console.log('Problems setting SpecularHot '+e);
		console.error('Problems setting SpecularHot',e);
	}
	this.set_cEmissiveCold = function (value) {
		try {
			this.proxy.cEmissiveCold = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cEmissiveCold '+e);
			console.error('Problems setting cEmissiveCold',e);
		}
	};
	this.cEmissiveCold_changed = function () {
		var value = this.cEmissiveCold;
		return value;
	};
	try {
		this.cEmissiveCold = new SFColor(0,0.045,0.075);
	} catch (e) {
		console.log('Problems setting cEmissiveCold '+e);
		console.error('Problems setting cEmissiveCold',e);
	}
	this.set_cDiffuseHot = function (value) {
		try {
			this.proxy.cDiffuseHot = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cDiffuseHot '+e);
			console.error('Problems setting cDiffuseHot',e);
		}
	};
	this.cDiffuseHot_changed = function () {
		var value = this.cDiffuseHot;
		return value;
	};
	try {
		this.cDiffuseHot = new SFColor(0,0.72,0.6);
	} catch (e) {
		console.log('Problems setting cDiffuseHot '+e);
		console.error('Problems setting cDiffuseHot',e);
	}
	this.set_cDiffuseCold = function (value) {
		try {
			this.proxy.cDiffuseCold = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cDiffuseCold '+e);
			console.error('Problems setting cDiffuseCold',e);
		}
	};
	this.cDiffuseCold_changed = function () {
		var value = this.cDiffuseCold;
		return value;
	};
	try {
		this.cDiffuseCold = new SFColor(0,0.24,0.4);
	} catch (e) {
		console.log('Problems setting cDiffuseCold '+e);
		console.error('Problems setting cDiffuseCold',e);
	}
	this.set_DampSpecular_sThere = function (value) {
		try {
			this.proxy.DampSpecular_sThere = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting DampSpecular_sThere '+e);
			console.error('Problems setting DampSpecular_sThere',e);
		}
	};
	this.DampSpecular_sThere_changed = function () {
		var value = this.DampSpecular_sThere;
		return value;
	};
	try {
		this.DampSpecular_sThere = new SFBool();
	} catch (e) {
		console.log('Problems setting DampSpecular_sThere '+e);
		console.error('Problems setting DampSpecular_sThere',e);
	}
	this.set_DiffuseDest = function (value) {
		try {
			this.proxy.DiffuseDest = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting DiffuseDest '+e);
			console.error('Problems setting DiffuseDest',e);
		}
	};
	this.DiffuseDest_changed = function () {
		var value = this.DiffuseDest;
		return value;
	};
	try {
		this.DiffuseDest = new SFColor();
	} catch (e) {
		console.log('Problems setting DiffuseDest '+e);
		console.error('Problems setting DiffuseDest',e);
	}
	this.set_EmissiveValue = function (value) {
		try {
			this.proxy.EmissiveValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting EmissiveValue '+e);
			console.error('Problems setting EmissiveValue',e);
		}
	};
	this.EmissiveValue_changed = function () {
		var value = this.EmissiveValue;
		return value;
	};
	try {
		this.EmissiveValue = new SFColor();
	} catch (e) {
		console.log('Problems setting EmissiveValue '+e);
		console.error('Problems setting EmissiveValue',e);
	}
	this.set_SpecularDest = function (value) {
		try {
			this.proxy.SpecularDest = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SpecularDest '+e);
			console.error('Problems setting SpecularDest',e);
		}
	};
	this.SpecularDest_changed = function () {
		var value = this.SpecularDest;
		return value;
	};
	try {
		this.SpecularDest = new SFColor();
	} catch (e) {
		console.log('Problems setting SpecularDest '+e);
		console.error('Problems setting SpecularDest',e);
	}
	this.set_DampDiffuse_sThere = function (value) {
		try {
			this.proxy.DampDiffuse_sThere = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting DampDiffuse_sThere '+e);
			console.error('Problems setting DampDiffuse_sThere',e);
		}
	};
	this.DampDiffuse_sThere_changed = function () {
		var value = this.DampDiffuse_sThere;
		return value;
	};
	try {
		this.DampDiffuse_sThere = new SFBool();
	} catch (e) {
		console.log('Problems setting DampDiffuse_sThere '+e);
		console.error('Problems setting DampDiffuse_sThere',e);
	}
	this.set_SpecularValue = function (value) {
		try {
			this.proxy.SpecularValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SpecularValue '+e);
			console.error('Problems setting SpecularValue',e);
		}
	};
	this.SpecularValue_changed = function () {
		var value = this.SpecularValue;
		return value;
	};
	try {
		this.SpecularValue = new SFColor();
	} catch (e) {
		console.log('Problems setting SpecularValue '+e);
		console.error('Problems setting SpecularValue',e);
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
		this.touched = new SFTime();
	} catch (e) {
		console.log('Problems setting touched '+e);
		console.error('Problems setting touched',e);
	}
	this.set_EmissiveDest = function (value) {
		try {
			this.proxy.EmissiveDest = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting EmissiveDest '+e);
			console.error('Problems setting EmissiveDest',e);
		}
	};
	this.EmissiveDest_changed = function () {
		var value = this.EmissiveDest;
		return value;
	};
	try {
		this.EmissiveDest = new SFColor();
	} catch (e) {
		console.log('Problems setting EmissiveDest '+e);
		console.error('Problems setting EmissiveDest',e);
	}
	this.set_cSpecularCold = function (value) {
		try {
			this.proxy.cSpecularCold = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cSpecularCold '+e);
			console.error('Problems setting cSpecularCold',e);
		}
	};
	this.cSpecularCold_changed = function () {
		var value = this.cSpecularCold;
		return value;
	};
	try {
		this.cSpecularCold = new SFColor(0.5,0.5,0.5);
	} catch (e) {
		console.log('Problems setting cSpecularCold '+e);
		console.error('Problems setting cSpecularCold',e);
	}


ecmascript:

	this.DampDiffuse_sThere = function (l)
{
    if(l)  
        this.proxy.DiffuseValue= 
        this.proxy.DiffuseDest=  this.proxy.cDiffuseCold;
};

	this.DampEmissive_sThere = function (l)
{
    if(l)
        this.proxy.EmissiveValue=
        this.proxy.EmissiveDest= this.proxy.cEmissiveCold;
};

	this.DampSpecular_sThere = function (l)
{
    if(l)
        this.proxy.SpecularValue=
        this.proxy.SpecularDest= this.proxy.cSpecularCold;
};

	this.touched = function ()
{
    this.proxy.DiffuseValue= this.proxy.cDiffuseHot;
    this.proxy.EmissiveValue= this.proxy.cEmissiveHot;
    this.proxy.SpecularValue= this.proxy.SpecularHot;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'] = function() {
	this.set_RandomOri_selected = function (value) {
		try {
			this.proxy.RandomOri_selected = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting RandomOri_selected '+e);
			console.error('Problems setting RandomOri_selected',e);
		}
	};
	this.RandomOri_selected_changed = function () {
		var value = this.RandomOri_selected;
		return value;
	};
	try {
		this.RandomOri_selected = new SFRotation();
	} catch (e) {
		console.log('Problems setting RandomOri_selected '+e);
		console.error('Problems setting RandomOri_selected',e);
	}
	this.set_OriE = function (value) {
		try {
			this.proxy.OriE = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting OriE '+e);
			console.error('Problems setting OriE',e);
		}
	};
	this.OriE_changed = function () {
		var value = this.OriE;
		return value;
	};
	try {
		this.OriE = new SFRotation(0,0,1,0);
	} catch (e) {
		console.log('Problems setting OriE '+e);
		console.error('Problems setting OriE',e);
	}
	this.set_OriD = function (value) {
		try {
			this.proxy.OriD = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting OriD '+e);
			console.error('Problems setting OriD',e);
		}
	};
	this.OriD_changed = function () {
		var value = this.OriD;
		return value;
	};
	try {
		this.OriD = new SFRotation(0,0,1,0);
	} catch (e) {
		console.log('Problems setting OriD '+e);
		console.error('Problems setting OriD',e);
	}
	this.set_OriC = function (value) {
		try {
			this.proxy.OriC = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting OriC '+e);
			console.error('Problems setting OriC',e);
		}
	};
	this.OriC_changed = function () {
		var value = this.OriC;
		return value;
	};
	try {
		this.OriC = new SFRotation(0,0,1,0);
	} catch (e) {
		console.log('Problems setting OriC '+e);
		console.error('Problems setting OriC',e);
	}
	this.set_OriB = function (value) {
		try {
			this.proxy.OriB = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting OriB '+e);
			console.error('Problems setting OriB',e);
		}
	};
	this.OriB_changed = function () {
		var value = this.OriB;
		return value;
	};
	try {
		this.OriB = new SFRotation(0,0,1,0);
	} catch (e) {
		console.log('Problems setting OriB '+e);
		console.error('Problems setting OriB',e);
	}
	this.set_OriA = function (value) {
		try {
			this.proxy.OriA = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting OriA '+e);
			console.error('Problems setting OriA',e);
		}
	};
	this.OriA_changed = function () {
		var value = this.OriA;
		return value;
	};
	try {
		this.OriA = new SFRotation(0,0,1,0);
	} catch (e) {
		console.log('Problems setting OriA '+e);
		console.error('Problems setting OriA',e);
	}
	this.set_BtnD_touched = function (value) {
		try {
			this.proxy.BtnD_touched = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting BtnD_touched '+e);
			console.error('Problems setting BtnD_touched',e);
		}
	};
	this.BtnD_touched_changed = function () {
		var value = this.BtnD_touched;
		return value;
	};
	try {
		this.BtnD_touched = new SFTime();
	} catch (e) {
		console.log('Problems setting BtnD_touched '+e);
		console.error('Problems setting BtnD_touched',e);
	}
	this.set_BtnA_touched = function (value) {
		try {
			this.proxy.BtnA_touched = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting BtnA_touched '+e);
			console.error('Problems setting BtnA_touched',e);
		}
	};
	this.BtnA_touched_changed = function () {
		var value = this.BtnA_touched;
		return value;
	};
	try {
		this.BtnA_touched = new SFTime();
	} catch (e) {
		console.log('Problems setting BtnA_touched '+e);
		console.error('Problems setting BtnA_touched',e);
	}
	this.set_BtnRandom_touched = function (value) {
		try {
			this.proxy.BtnRandom_touched = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting BtnRandom_touched '+e);
			console.error('Problems setting BtnRandom_touched',e);
		}
	};
	this.BtnRandom_touched_changed = function () {
		var value = this.BtnRandom_touched;
		return value;
	};
	try {
		this.BtnRandom_touched = new SFTime();
	} catch (e) {
		console.log('Problems setting BtnRandom_touched '+e);
		console.error('Problems setting BtnRandom_touched',e);
	}
	this.set_Ori_toSet = function (value) {
		try {
			this.proxy.Ori_toSet = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Ori_toSet '+e);
			console.error('Problems setting Ori_toSet',e);
		}
	};
	this.Ori_toSet_changed = function () {
		var value = this.Ori_toSet;
		return value;
	};
	try {
		this.Ori_toSet = new SFRotation();
	} catch (e) {
		console.log('Problems setting Ori_toSet '+e);
		console.error('Problems setting Ori_toSet',e);
	}
	this.set_BtnE_touched = function (value) {
		try {
			this.proxy.BtnE_touched = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting BtnE_touched '+e);
			console.error('Problems setting BtnE_touched',e);
		}
	};
	this.BtnE_touched_changed = function () {
		var value = this.BtnE_touched;
		return value;
	};
	try {
		this.BtnE_touched = new SFTime();
	} catch (e) {
		console.log('Problems setting BtnE_touched '+e);
		console.error('Problems setting BtnE_touched',e);
	}
	this.set_BtnC_touched = function (value) {
		try {
			this.proxy.BtnC_touched = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting BtnC_touched '+e);
			console.error('Problems setting BtnC_touched',e);
		}
	};
	this.BtnC_touched_changed = function () {
		var value = this.BtnC_touched;
		return value;
	};
	try {
		this.BtnC_touched = new SFTime();
	} catch (e) {
		console.log('Problems setting BtnC_touched '+e);
		console.error('Problems setting BtnC_touched',e);
	}
	this.set_BtnB_touched = function (value) {
		try {
			this.proxy.BtnB_touched = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting BtnB_touched '+e);
			console.error('Problems setting BtnB_touched',e);
		}
	};
	this.BtnB_touched_changed = function () {
		var value = this.BtnB_touched;
		return value;
	};
	try {
		this.BtnB_touched = new SFTime();
	} catch (e) {
		console.log('Problems setting BtnB_touched '+e);
		console.error('Problems setting BtnB_touched',e);
	}
	this.set_Stop_Continous = function (value) {
		try {
			this.proxy.Stop_Continous = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Stop_Continous '+e);
			console.error('Problems setting Stop_Continous',e);
		}
	};
	this.Stop_Continous_changed = function () {
		var value = this.Stop_Continous;
		return value;
	};
	try {
		this.Stop_Continous = new SFTime();
	} catch (e) {
		console.log('Problems setting Stop_Continous '+e);
		console.error('Problems setting Stop_Continous',e);
	}
	this.set_OriE = function (value) {
		try {
			this.proxy.OriE = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting OriE '+e);
			console.error('Problems setting OriE',e);
		}
	};
	this.OriE_changed = function () {
		var value = this.OriE;
		return value;
	};
	try {
		this.OriE = new SFRotation(0,0,1,0);
	} catch (e) {
		console.log('Problems setting OriE '+e);
		console.error('Problems setting OriE',e);
	}
	this.set_OriD = function (value) {
		try {
			this.proxy.OriD = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting OriD '+e);
			console.error('Problems setting OriD',e);
		}
	};
	this.OriD_changed = function () {
		var value = this.OriD;
		return value;
	};
	try {
		this.OriD = new SFRotation(0,0,1,0);
	} catch (e) {
		console.log('Problems setting OriD '+e);
		console.error('Problems setting OriD',e);
	}
	this.set_OriC = function (value) {
		try {
			this.proxy.OriC = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting OriC '+e);
			console.error('Problems setting OriC',e);
		}
	};
	this.OriC_changed = function () {
		var value = this.OriC;
		return value;
	};
	try {
		this.OriC = new SFRotation(0,0,1,0);
	} catch (e) {
		console.log('Problems setting OriC '+e);
		console.error('Problems setting OriC',e);
	}
	this.set_OriContinous = function (value) {
		try {
			this.proxy.OriContinous = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting OriContinous '+e);
			console.error('Problems setting OriContinous',e);
		}
	};
	this.OriContinous_changed = function () {
		var value = this.OriContinous;
		return value;
	};
	try {
		this.OriContinous = undefined;
	} catch (e) {
		console.log('Problems setting OriContinous '+e);
		console.error('Problems setting OriContinous',e);
	}
	this.set_OriB = function (value) {
		try {
			this.proxy.OriB = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting OriB '+e);
			console.error('Problems setting OriB',e);
		}
	};
	this.OriB_changed = function () {
		var value = this.OriB;
		return value;
	};
	try {
		this.OriB = new SFRotation(0,0,1,0);
	} catch (e) {
		console.log('Problems setting OriB '+e);
		console.error('Problems setting OriB',e);
	}
	this.set_OriA = function (value) {
		try {
			this.proxy.OriA = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting OriA '+e);
			console.error('Problems setting OriA',e);
		}
	};
	this.OriA_changed = function () {
		var value = this.OriA;
		return value;
	};
	try {
		this.OriA = new SFRotation(0,0,1,0);
	} catch (e) {
		console.log('Problems setting OriA '+e);
		console.error('Problems setting OriA',e);
	}


ecmascript:

	this.set_OriA = function (Ori)   { this.proxy.OriA= Ori; };

	this.set_OriB = function (Ori)   { this.proxy.OriB= Ori; };

	this.set_OriC = function (Ori)   { this.proxy.OriC= Ori; };

	this.set_OriD = function (Ori)   { this.proxy.OriD= Ori; };

	this.set_OriE = function (Ori)   { this.proxy.OriE= Ori; }
;

	this.BtnA_touched = function ()  { this.proxy.Stop_Continous= 0;   this.proxy.Ori_toSet= this.proxy.OriA; };

	this.BtnB_touched = function ()  { this.proxy.Stop_Continous= 0;   this.proxy.Ori_toSet= this.proxy.OriB; };

	this.BtnC_touched = function ()  { this.proxy.Stop_Continous= 0;   this.proxy.Ori_toSet= this.proxy.OriC; };

	this.BtnD_touched = function ()  { this.proxy.Stop_Continous= 0;   this.proxy.Ori_toSet= this.proxy.OriD; };

	this.BtnE_touched = function ()  { this.proxy.Stop_Continous= 0;   this.proxy.Ori_toSet= this.proxy.OriE; }
;

	this.BtnRandom_touched = function ()
{
    var VecRand= new SFVec3f( Math.random() * 2 - 1
                            , Math.random() * 2 - 1
                            , Math.random() * 2 - 1
                            );

    this.proxy.RandomOri_selected= new SFRotation(VecRand.normalize(), VecRand.length() * Math.PI);

    this.proxy.Stop_Continous= 0;
    this.proxy.Ori_toSet= this.proxy.RandomOri_selected;
}
;

	this.set_OriContinous = function (ori)
{
    this.proxy.Ori_toSet= ori;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].initialize();
    if (X3DJSON.nodeUtil("Scene","Sens")) {
X3DJSON.nodeUtil("Scene","Sens").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PositionDamperNode")) {
X3DJSON.nodeUtil("Scene","PositionDamperNode").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].PosIn(X3DJSON.nodeUtil("Scene","PositionDamperNode","value"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].PosIn(X3DJSON.nodeUtil("Scene","PositionDamperNode","value"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter']['ACTION']['OriOt'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter']['ACTION']['OriOt'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter']['ACTION']['OriOt'].push(function(property, value) {
		if (property === 'OriOt') {
			X3DJSON.nodeUtil("Scene","TrMonkey","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].OriOt === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].OriOt() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].OriOt, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TrMonkey","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].OriOt === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].OriOt() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].OriOt, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter']['ACTION']['OriOt'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter']['ACTION']['OriOt'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter']['ACTION']['OriOt'].push(function(property, value) {
		if (property === 'OriOt') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrStopper'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].OriOt === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].OriOt() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].OriOt) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrStopper'].OriIn(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].OriOt === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].OriOt() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].OriOt, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrStopper'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].OriOt === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].OriOt() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].OriOt) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrStopper'].OriIn(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].OriOt === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].OriOt() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].OriOt, __eventTime);
		}
    if (X3DJSON.nodeUtil("Scene","Sens")) {
X3DJSON.nodeUtil("Scene","Sens").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrStopper'].SensorIsActive(X3DJSON.nodeUtil("Scene","Sens","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrStopper'].SensorIsActive(X3DJSON.nodeUtil("Scene","Sens","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","Tch")) {
X3DJSON.nodeUtil("Scene","Tch").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].touched(X3DJSON.nodeUtil("Scene","Tch","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].touched(X3DJSON.nodeUtil("Scene","Tch","touchTime"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn']['ACTION']['DiffuseDest'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn']['ACTION']['DiffuseDest'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn']['ACTION']['DiffuseDest'].push(function(property, value) {
		if (property === 'DiffuseDest') {
			X3DJSON.nodeUtil("Scene","DampDiffuse","destination",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].DiffuseDest === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].DiffuseDest() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].DiffuseDest, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","DampDiffuse","destination",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].DiffuseDest === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].DiffuseDest() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].DiffuseDest, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn']['ACTION']['DiffuseValue'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn']['ACTION']['DiffuseValue'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn']['ACTION']['DiffuseValue'].push(function(property, value) {
		if (property === 'DiffuseValue') {
			X3DJSON.nodeUtil("Scene","DampDiffuse","value",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].DiffuseValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].DiffuseValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].DiffuseValue, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","DampDiffuse","value",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].DiffuseValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].DiffuseValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].DiffuseValue, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn']['ACTION']['EmissiveDest'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn']['ACTION']['EmissiveDest'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn']['ACTION']['EmissiveDest'].push(function(property, value) {
		if (property === 'EmissiveDest') {
			X3DJSON.nodeUtil("Scene","DampEmissive","destination",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].EmissiveDest === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].EmissiveDest() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].EmissiveDest, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","DampEmissive","destination",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].EmissiveDest === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].EmissiveDest() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].EmissiveDest, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn']['ACTION']['EmissiveValue'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn']['ACTION']['EmissiveValue'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn']['ACTION']['EmissiveValue'].push(function(property, value) {
		if (property === 'EmissiveValue') {
			X3DJSON.nodeUtil("Scene","DampEmissive","value",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].EmissiveValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].EmissiveValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].EmissiveValue, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","DampEmissive","value",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].EmissiveValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].EmissiveValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].EmissiveValue, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn']['ACTION']['SpecularDest'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn']['ACTION']['SpecularDest'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn']['ACTION']['SpecularDest'].push(function(property, value) {
		if (property === 'SpecularDest') {
			X3DJSON.nodeUtil("Scene","DampSpecular","destination",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].SpecularDest === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].SpecularDest() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].SpecularDest, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","DampSpecular","destination",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].SpecularDest === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].SpecularDest() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].SpecularDest, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn']['ACTION']['SpecularValue'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn']['ACTION']['SpecularValue'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn']['ACTION']['SpecularValue'].push(function(property, value) {
		if (property === 'SpecularValue') {
			X3DJSON.nodeUtil("Scene","DampSpecular","value",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].SpecularValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].SpecularValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].SpecularValue, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","DampSpecular","value",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].SpecularValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].SpecularValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].SpecularValue, __eventTime);
    if (X3DJSON.nodeUtil("Scene","DampDiffuse")) {
X3DJSON.nodeUtil("Scene","DampDiffuse").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","DampEmissive")) {
X3DJSON.nodeUtil("Scene","DampEmissive").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","DampSpecular")) {
X3DJSON.nodeUtil("Scene","DampSpecular").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","DampDiffuse")) {
X3DJSON.nodeUtil("Scene","DampDiffuse").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].DampDiffuse_sThere(X3DJSON.nodeUtil("Scene","DampDiffuse","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].DampDiffuse_sThere(X3DJSON.nodeUtil("Scene","DampDiffuse","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","DampEmissive")) {
X3DJSON.nodeUtil("Scene","DampEmissive").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].DampEmissive_sThere(X3DJSON.nodeUtil("Scene","DampEmissive","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].DampEmissive_sThere(X3DJSON.nodeUtil("Scene","DampEmissive","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","DampSpecular")) {
X3DJSON.nodeUtil("Scene","DampSpecular").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].DampSpecular_sThere(X3DJSON.nodeUtil("Scene","DampSpecular","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].DampSpecular_sThere(X3DJSON.nodeUtil("Scene","DampSpecular","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","BtnA")) {
X3DJSON.nodeUtil("Scene","BtnA").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].BtnA_touched(X3DJSON.nodeUtil("Scene","BtnA","touched"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].BtnA_touched(X3DJSON.nodeUtil("Scene","BtnA","touched"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","BtnB")) {
X3DJSON.nodeUtil("Scene","BtnB").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].BtnB_touched(X3DJSON.nodeUtil("Scene","BtnB","touched"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].BtnB_touched(X3DJSON.nodeUtil("Scene","BtnB","touched"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","BtnC")) {
X3DJSON.nodeUtil("Scene","BtnC").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].BtnC_touched(X3DJSON.nodeUtil("Scene","BtnC","touched"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].BtnC_touched(X3DJSON.nodeUtil("Scene","BtnC","touched"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","BtnD")) {
X3DJSON.nodeUtil("Scene","BtnD").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].BtnD_touched(X3DJSON.nodeUtil("Scene","BtnD","touched"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].BtnD_touched(X3DJSON.nodeUtil("Scene","BtnD","touched"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","BtnE")) {
X3DJSON.nodeUtil("Scene","BtnE").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].BtnE_touched(X3DJSON.nodeUtil("Scene","BtnE","touched"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].BtnE_touched(X3DJSON.nodeUtil("Scene","BtnE","touched"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","OseA")) {
X3DJSON.nodeUtil("Scene","OseA").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].set_OriA(X3DJSON.nodeUtil("Scene","OseA","Ori"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].set_OriA(X3DJSON.nodeUtil("Scene","OseA","Ori"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","OseB")) {
X3DJSON.nodeUtil("Scene","OseB").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].set_OriB(X3DJSON.nodeUtil("Scene","OseB","Ori"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].set_OriB(X3DJSON.nodeUtil("Scene","OseB","Ori"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","OseC")) {
X3DJSON.nodeUtil("Scene","OseC").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].set_OriC(X3DJSON.nodeUtil("Scene","OseC","Ori"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].set_OriC(X3DJSON.nodeUtil("Scene","OseC","Ori"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","OseD")) {
X3DJSON.nodeUtil("Scene","OseD").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].set_OriD(X3DJSON.nodeUtil("Scene","OseD","Ori"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].set_OriD(X3DJSON.nodeUtil("Scene","OseD","Ori"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","OseE")) {
X3DJSON.nodeUtil("Scene","OseE").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].set_OriE(X3DJSON.nodeUtil("Scene","OseE","Ori"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].set_OriE(X3DJSON.nodeUtil("Scene","OseE","Ori"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","BtnRandom")) {
X3DJSON.nodeUtil("Scene","BtnRandom").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].BtnRandom_touched(X3DJSON.nodeUtil("Scene","BtnRandom","touched"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].BtnRandom_touched(X3DJSON.nodeUtil("Scene","BtnRandom","touched"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain']['ACTION']['RandomOri_selected'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain']['ACTION']['RandomOri_selected'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain']['ACTION']['RandomOri_selected'].push(function(property, value) {
		if (property === 'RandomOri_selected') {
			X3DJSON.nodeUtil("Scene","DampRandomInd","destination",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].RandomOri_selected === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].RandomOri_selected() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].RandomOri_selected, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","DampRandomInd","destination",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].RandomOri_selected === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].RandomOri_selected() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].RandomOri_selected, __eventTime);
    if (X3DJSON.nodeUtil("Scene","DampRandomInd")) {
X3DJSON.nodeUtil("Scene","DampRandomInd").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].PosIn(X3DJSON.nodeUtil("Scene","PositionDamperNode","value"), __eventTime);
			X3DJSON.nodeUtil("Scene","TrMonkey","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].OriOt === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].OriOt() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].OriOt, __eventTime);
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrStopper'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].OriOt === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].OriOt() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].OriOt) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrStopper'].OriIn(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].OriOt === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].OriOt() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrOriSetter'].OriOt, __eventTime);
		}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrStopper'].SensorIsActive(X3DJSON.nodeUtil("Scene","Sens","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].touched(X3DJSON.nodeUtil("Scene","Tch","touchTime"), __eventTime);
			X3DJSON.nodeUtil("Scene","DampDiffuse","destination",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].DiffuseDest === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].DiffuseDest() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].DiffuseDest, __eventTime);
			X3DJSON.nodeUtil("Scene","DampDiffuse","value",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].DiffuseValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].DiffuseValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].DiffuseValue, __eventTime);
			X3DJSON.nodeUtil("Scene","DampEmissive","destination",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].EmissiveDest === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].EmissiveDest() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].EmissiveDest, __eventTime);
			X3DJSON.nodeUtil("Scene","DampEmissive","value",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].EmissiveValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].EmissiveValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].EmissiveValue, __eventTime);
			X3DJSON.nodeUtil("Scene","DampSpecular","destination",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].SpecularDest === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].SpecularDest() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].SpecularDest, __eventTime);
			X3DJSON.nodeUtil("Scene","DampSpecular","value",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].SpecularValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].SpecularValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].SpecularValue, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].DampDiffuse_sThere(X3DJSON.nodeUtil("Scene","DampDiffuse","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].DampEmissive_sThere(X3DJSON.nodeUtil("Scene","DampEmissive","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrSelectBtn'].DampSpecular_sThere(X3DJSON.nodeUtil("Scene","DampSpecular","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].BtnA_touched(X3DJSON.nodeUtil("Scene","BtnA","touched"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].BtnB_touched(X3DJSON.nodeUtil("Scene","BtnB","touched"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].BtnC_touched(X3DJSON.nodeUtil("Scene","BtnC","touched"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].BtnD_touched(X3DJSON.nodeUtil("Scene","BtnD","touched"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].BtnE_touched(X3DJSON.nodeUtil("Scene","BtnE","touched"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].set_OriA(X3DJSON.nodeUtil("Scene","OseA","Ori"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].set_OriB(X3DJSON.nodeUtil("Scene","OseB","Ori"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].set_OriC(X3DJSON.nodeUtil("Scene","OseC","Ori"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].set_OriD(X3DJSON.nodeUtil("Scene","OseD","Ori"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].set_OriE(X3DJSON.nodeUtil("Scene","OseE","Ori"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].BtnRandom_touched(X3DJSON.nodeUtil("Scene","BtnRandom","touched"), __eventTime);
			X3DJSON.nodeUtil("Scene","DampRandomInd","destination",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].RandomOri_selected === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].RandomOri_selected() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestOrientationFollower.json']['ScrMain'].RandomOri_selected, __eventTime);