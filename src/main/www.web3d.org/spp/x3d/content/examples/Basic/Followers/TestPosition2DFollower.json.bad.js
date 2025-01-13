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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'] = function() {
	this.set_A_ot = function (value) {
		try {
			this.proxy.A_ot = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting A_ot '+e);
			console.error('Problems setting A_ot',e);
		}
	};
	this.A_ot_changed = function () {
		var value = this.A_ot;
		return value;
	};
	try {
		this.A_ot = new SFVec3f();
	} catch (e) {
		console.log('Problems setting A_ot '+e);
		console.error('Problems setting A_ot',e);
	}
	this.set_B_in = function (value) {
		try {
			this.proxy.B_in = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting B_in '+e);
			console.error('Problems setting B_in',e);
		}
	};
	this.B_in_changed = function () {
		var value = this.B_in;
		return value;
	};
	try {
		this.B_in = new SFVec2f();
	} catch (e) {
		console.log('Problems setting B_in '+e);
		console.error('Problems setting B_in',e);
	}
	this.set_A_in = function (value) {
		try {
			this.proxy.A_in = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting A_in '+e);
			console.error('Problems setting A_in',e);
		}
	};
	this.A_in_changed = function () {
		var value = this.A_in;
		return value;
	};
	try {
		this.A_in = new SFVec2f();
	} catch (e) {
		console.log('Problems setting A_in '+e);
		console.error('Problems setting A_in',e);
	}
	this.set_C_ot = function (value) {
		try {
			this.proxy.C_ot = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting C_ot '+e);
			console.error('Problems setting C_ot',e);
		}
	};
	this.C_ot_changed = function () {
		var value = this.C_ot;
		return value;
	};
	try {
		this.C_ot = new SFVec3f();
	} catch (e) {
		console.log('Problems setting C_ot '+e);
		console.error('Problems setting C_ot',e);
	}
	this.set_B_ot = function (value) {
		try {
			this.proxy.B_ot = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting B_ot '+e);
			console.error('Problems setting B_ot',e);
		}
	};
	this.B_ot_changed = function () {
		var value = this.B_ot;
		return value;
	};
	try {
		this.B_ot = new SFVec3f();
	} catch (e) {
		console.log('Problems setting B_ot '+e);
		console.error('Problems setting B_ot',e);
	}
	this.set_C_in = function (value) {
		try {
			this.proxy.C_in = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting C_in '+e);
			console.error('Problems setting C_in',e);
		}
	};
	this.C_in_changed = function () {
		var value = this.C_in;
		return value;
	};
	try {
		this.C_in = new SFVec2f();
	} catch (e) {
		console.log('Problems setting C_in '+e);
		console.error('Problems setting C_in',e);
	}


ecmascript:

	this.A_in = function (a)   { this.proxy.A_ot= (new SFVec3f(a.x, a.y, 0)).multiply(10).subtract(new SFVec3f(5, 5, 0)); };

	this.B_in = function (b)   { this.proxy.B_ot= (new SFVec3f(b.x, b.y, 0)).multiply(10).subtract(new SFVec3f(5, 5, 0)); };

	this.C_in = function (c)   { this.proxy.C_ot= (new SFVec3f(c.x, c.y, 0)).multiply(10).subtract(new SFVec3f(5, 5, 0)); }

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'] = function() {
	this.set_TS_Touched = function (value) {
		try {
			this.proxy.TS_Touched = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TS_Touched '+e);
			console.error('Problems setting TS_Touched',e);
		}
	};
	this.TS_Touched_changed = function () {
		var value = this.TS_Touched;
		return value;
	};
	try {
		this.TS_Touched = new SFTime();
	} catch (e) {
		console.log('Problems setting TS_Touched '+e);
		console.error('Problems setting TS_Touched',e);
	}
	this.set_Color = function (value) {
		try {
			this.proxy.Color = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Color '+e);
			console.error('Problems setting Color',e);
		}
	};
	this.Color_changed = function () {
		var value = this.Color;
		return value;
	};
	try {
		this.Color = new SFColor();
	} catch (e) {
		console.log('Problems setting Color '+e);
		console.error('Problems setting Color',e);
	}
	this.set_isOn = function (value) {
		try {
			this.proxy.isOn = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isOn '+e);
			console.error('Problems setting isOn',e);
		}
	};
	this.isOn_changed = function () {
		var value = this.isOn;
		return value;
	};
	try {
		this.isOn = new SFBool();
	} catch (e) {
		console.log('Problems setting isOn '+e);
		console.error('Problems setting isOn',e);
	}
	this.set_ColdColor = function (value) {
		try {
			this.proxy.ColdColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ColdColor '+e);
			console.error('Problems setting ColdColor',e);
		}
	};
	this.ColdColor_changed = function () {
		var value = this.ColdColor;
		return value;
	};
	try {
		this.ColdColor = new SFColor();
	} catch (e) {
		console.log('Problems setting ColdColor '+e);
		console.error('Problems setting ColdColor',e);
	}
	this.set_Tau = function (value) {
		try {
			this.proxy.Tau = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Tau '+e);
			console.error('Problems setting Tau',e);
		}
	};
	this.Tau_changed = function () {
		var value = this.Tau;
		return value;
	};
	try {
		this.Tau = new SFFloat();
	} catch (e) {
		console.log('Problems setting Tau '+e);
		console.error('Problems setting Tau',e);
	}
	this.set_initiallyOn = function (value) {
		try {
			this.proxy.initiallyOn = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting initiallyOn '+e);
			console.error('Problems setting initiallyOn',e);
		}
	};
	this.initiallyOn_changed = function () {
		var value = this.initiallyOn;
		return value;
	};
	try {
		this.initiallyOn = new SFBool();
	} catch (e) {
		console.log('Problems setting initiallyOn '+e);
		console.error('Problems setting initiallyOn',e);
	}
	this.set_DamperSThere = function (value) {
		try {
			this.proxy.DamperSThere = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting DamperSThere '+e);
			console.error('Problems setting DamperSThere',e);
		}
	};
	this.DamperSThere_changed = function () {
		var value = this.DamperSThere;
		return value;
	};
	try {
		this.DamperSThere = new SFBool();
	} catch (e) {
		console.log('Problems setting DamperSThere '+e);
		console.error('Problems setting DamperSThere',e);
	}
	this.set_HottColor = function (value) {
		try {
			this.proxy.HottColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting HottColor '+e);
			console.error('Problems setting HottColor',e);
		}
	};
	this.HottColor_changed = function () {
		var value = this.HottColor;
		return value;
	};
	try {
		this.HottColor = new SFColor();
	} catch (e) {
		console.log('Problems setting HottColor '+e);
		console.error('Problems setting HottColor',e);
	}


ecmascript:

	this.DamperSThere = function ()
{
    this.activate(this.proxy.initiallyOn);
}
;

	this.activate = function (a)
{
    this.proxy.isOn= a;
    this.proxy.Tau=  a? .1 : .2;
    this.proxy.Color= a? this.proxy.HottColor : this.proxy.ColdColor;
}
;

	this.set_id = function (i)
{
    id= i;
}
;

	this.TS_Touched = function ()
{
    this.activate(!this.proxy.isOn);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['Trace_ROUTE_ScrToggleButton.Tau_TO_Damp.tau'] = function() {
	this.set_reportInterval = function (value) {
		try {
			this.proxy.reportInterval = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting reportInterval '+e);
			console.error('Problems setting reportInterval',e);
		}
	};
	this.reportInterval_changed = function () {
		var value = this.reportInterval;
		return value;
	};
	try {
		this.reportInterval = new SFTime(1);
	} catch (e) {
		console.log('Problems setting reportInterval '+e);
		console.error('Problems setting reportInterval',e);
	}
	this.set_traceValue = function (value) {
		try {
			this.proxy.traceValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting traceValue '+e);
			console.error('Problems setting traceValue',e);
		}
	};
	this.traceValue_changed = function () {
		var value = this.traceValue;
		return value;
	};
	try {
		this.traceValue = new SFFloat();
	} catch (e) {
		console.log('Problems setting traceValue '+e);
		console.error('Problems setting traceValue',e);
	}
	this.set_timeStampPreviousReport = function (value) {
		try {
			this.proxy.timeStampPreviousReport = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting timeStampPreviousReport '+e);
			console.error('Problems setting timeStampPreviousReport',e);
		}
	};
	this.timeStampPreviousReport_changed = function () {
		var value = this.timeStampPreviousReport;
		return value;
	};
	try {
		this.timeStampPreviousReport = new SFTime(-1);
	} catch (e) {
		console.log('Problems setting timeStampPreviousReport '+e);
		console.error('Problems setting timeStampPreviousReport',e);
	}


ecmascript:
   
	this.traceValue = function (eventValue, timeStamp) {
      // input eventValue received for trace field
      if (timeStamp - this.proxy.timeStampPreviousReport >= this.proxy.reportInterval) {
        console.error ('Trace_ROUTE_ScrToggleButton.Tau_TO_Damp.tau type=SFFloat value=' + eventValue + '');
        this.proxy.timeStampPreviousReport = timeStamp;
      }
    }
   ;

	this.timeOfDay = function (someTime) {
      hh = Math.floor (someTime /(60*60)) % 24;
      mm = Math.floor (someTime / 60)     % 60;
      ss = Math.floor (someTime)          % 60;
      if (hh < 9) hour   = '0' + hh;
      else        hour   =       hh;
      if (mm < 9) minute = '0' + mm;
      else        minute =       mm;
      if (ss < 9) second = '0' + ss;
      else        second =       ss;
      return '(' + hour + ':' + minute + ':' + second + ' GMT)';
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['Trace_ROUTE_ScrToggleButton.Tau_TO_Damp.tau'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['Trace_ROUTE_ScrToggleButton.Tau_TO_Damp.tau']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['Trace_ROUTE_ScrToggleButton.Tau_TO_Damp.tau'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['Trace_ROUTE_ScrToggleButton.Tau_TO_Damp.tau'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['Trace_ROUTE_ScrToggleButton.Tau_TO_Damp.tau']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['Trace_ROUTE_ScrToggleButton.Tau_TO_Damp.tau']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['Trace_ROUTE_ScrToggleButton.Tau_TO_Damp.tau'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['Trace_ROUTE_ScrToggleButton.Tau_TO_Damp.tau']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['Trace_ROUTE_ScrToggleButton.Tau_TO_Damp.tau']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['Trace_ROUTE_ScrToggleButton.Tau_TO_Damp.tau'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['Trace_ROUTE_ScrToggleButton.Tau_TO_Damp.tau'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'] = function() {
	this.set_BtnChaserIsOn = function (value) {
		try {
			this.proxy.BtnChaserIsOn = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting BtnChaserIsOn '+e);
			console.error('Problems setting BtnChaserIsOn',e);
		}
	};
	this.BtnChaserIsOn_changed = function () {
		var value = this.BtnChaserIsOn;
		return value;
	};
	try {
		this.BtnChaserIsOn = new SFBool();
	} catch (e) {
		console.log('Problems setting BtnChaserIsOn '+e);
		console.error('Problems setting BtnChaserIsOn',e);
	}
	this.set_WcDamper = function (value) {
		try {
			this.proxy.WcDamper = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting WcDamper '+e);
			console.error('Problems setting WcDamper',e);
		}
	};
	this.WcDamper_changed = function () {
		var value = this.WcDamper;
		return value;
	};
	try {
		this.WcDamper = new SFInt32();
	} catch (e) {
		console.log('Problems setting WcDamper '+e);
		console.error('Problems setting WcDamper',e);
	}
	this.set_WcChaser = function (value) {
		try {
			this.proxy.WcChaser = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting WcChaser '+e);
			console.error('Problems setting WcChaser',e);
		}
	};
	this.WcChaser_changed = function () {
		var value = this.WcChaser;
		return value;
	};
	try {
		this.WcChaser = new SFInt32();
	} catch (e) {
		console.log('Problems setting WcChaser '+e);
		console.error('Problems setting WcChaser',e);
	}
	this.set_BtnDamperIsOn = function (value) {
		try {
			this.proxy.BtnDamperIsOn = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting BtnDamperIsOn '+e);
			console.error('Problems setting BtnDamperIsOn',e);
		}
	};
	this.BtnDamperIsOn_changed = function () {
		var value = this.BtnDamperIsOn;
		return value;
	};
	try {
		this.BtnDamperIsOn = new SFBool();
	} catch (e) {
		console.log('Problems setting BtnDamperIsOn '+e);
		console.error('Problems setting BtnDamperIsOn',e);
	}


ecmascript:

	this.BtnDamperIsOn = function (on)
{
    this.proxy.WcDamper= on? 0:-1;
}
;

	this.BtnChaserIsOn = function (on)
{
    this.proxy.WcChaser= on? 0:-1;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTrailer'] = function() {
	this.set_cShapeDamperTrailPoint = function (value) {
		try {
			this.proxy.cShapeDamperTrailPoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cShapeDamperTrailPoint '+e);
			console.error('Problems setting cShapeDamperTrailPoint',e);
		}
	};
	this.cShapeDamperTrailPoint_changed = function () {
		var value = this.cShapeDamperTrailPoint;
		return value;
	};
	try {
		this.cShapeDamperTrailPoint = X3DJSON.nodeUtil("Scene","undefined");
	} catch (e) {
		console.log('Problems setting cShapeDamperTrailPoint '+e);
		console.error('Problems setting cShapeDamperTrailPoint',e);
	}
	this.set_lastDamperPos = function (value) {
		try {
			this.proxy.lastDamperPos = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting lastDamperPos '+e);
			console.error('Problems setting lastDamperPos',e);
		}
	};
	this.lastDamperPos_changed = function () {
		var value = this.lastDamperPos;
		return value;
	};
	try {
		this.lastDamperPos = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting lastDamperPos '+e);
		console.error('Problems setting lastDamperPos',e);
	}
	this.set_ChaserTrails = function (value) {
		try {
			this.proxy.ChaserTrails = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ChaserTrails '+e);
			console.error('Problems setting ChaserTrails',e);
		}
	};
	this.ChaserTrails_changed = function () {
		var value = this.ChaserTrails;
		return value;
	};
	try {
		this.ChaserTrails = new MFNode();
	} catch (e) {
		console.log('Problems setting ChaserTrails '+e);
		console.error('Problems setting ChaserTrails',e);
	}
	this.set_cShapeChaserTrailPoint = function (value) {
		try {
			this.proxy.cShapeChaserTrailPoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cShapeChaserTrailPoint '+e);
			console.error('Problems setting cShapeChaserTrailPoint',e);
		}
	};
	this.cShapeChaserTrailPoint_changed = function () {
		var value = this.cShapeChaserTrailPoint;
		return value;
	};
	try {
		this.cShapeChaserTrailPoint = X3DJSON.nodeUtil("Scene","undefined");
	} catch (e) {
		console.log('Problems setting cShapeChaserTrailPoint '+e);
		console.error('Problems setting cShapeChaserTrailPoint',e);
	}
	this.set_DamperTrails = function (value) {
		try {
			this.proxy.DamperTrails = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting DamperTrails '+e);
			console.error('Problems setting DamperTrails',e);
		}
	};
	this.DamperTrails_changed = function () {
		var value = this.DamperTrails;
		return value;
	};
	try {
		this.DamperTrails = new MFNode();
	} catch (e) {
		console.log('Problems setting DamperTrails '+e);
		console.error('Problems setting DamperTrails',e);
	}
	this.set_GrChaserTrail = function (value) {
		try {
			this.proxy.GrChaserTrail = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting GrChaserTrail '+e);
			console.error('Problems setting GrChaserTrail',e);
		}
	};
	this.GrChaserTrail_changed = function () {
		var value = this.GrChaserTrail;
		return value;
	};
	try {
		this.GrChaserTrail = X3DJSON.nodeUtil("Scene","GrChaserTrail");
	} catch (e) {
		console.log('Problems setting GrChaserTrail '+e);
		console.error('Problems setting GrChaserTrail',e);
	}
	this.set_ChaserPos = function (value) {
		try {
			this.proxy.ChaserPos = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ChaserPos '+e);
			console.error('Problems setting ChaserPos',e);
		}
	};
	this.ChaserPos_changed = function () {
		var value = this.ChaserPos;
		return value;
	};
	try {
		this.ChaserPos = new SFVec3f();
	} catch (e) {
		console.log('Problems setting ChaserPos '+e);
		console.error('Problems setting ChaserPos',e);
	}
	this.set_cNumTrailPoints = function (value) {
		try {
			this.proxy.cNumTrailPoints = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cNumTrailPoints '+e);
			console.error('Problems setting cNumTrailPoints',e);
		}
	};
	this.cNumTrailPoints_changed = function () {
		var value = this.cNumTrailPoints;
		return value;
	};
	try {
		this.cNumTrailPoints = new SFInt32(35);
	} catch (e) {
		console.log('Problems setting cNumTrailPoints '+e);
		console.error('Problems setting cNumTrailPoints',e);
	}
	this.set_lastChaserPos = function (value) {
		try {
			this.proxy.lastChaserPos = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting lastChaserPos '+e);
			console.error('Problems setting lastChaserPos',e);
		}
	};
	this.lastChaserPos_changed = function () {
		var value = this.lastChaserPos;
		return value;
	};
	try {
		this.lastChaserPos = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting lastChaserPos '+e);
		console.error('Problems setting lastChaserPos',e);
	}
	this.set_Tick = function (value) {
		try {
			this.proxy.Tick = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Tick '+e);
			console.error('Problems setting Tick',e);
		}
	};
	this.Tick_changed = function () {
		var value = this.Tick;
		return value;
	};
	try {
		this.Tick = new SFTime();
	} catch (e) {
		console.log('Problems setting Tick '+e);
		console.error('Problems setting Tick',e);
	}
	this.set_DamperPos = function (value) {
		try {
			this.proxy.DamperPos = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting DamperPos '+e);
			console.error('Problems setting DamperPos',e);
		}
	};
	this.DamperPos_changed = function () {
		var value = this.DamperPos;
		return value;
	};
	try {
		this.DamperPos = new SFVec3f();
	} catch (e) {
		console.log('Problems setting DamperPos '+e);
		console.error('Problems setting DamperPos',e);
	}
	this.set_GrDamperTrail = function (value) {
		try {
			this.proxy.GrDamperTrail = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting GrDamperTrail '+e);
			console.error('Problems setting GrDamperTrail',e);
		}
	};
	this.GrDamperTrail_changed = function () {
		var value = this.GrDamperTrail;
		return value;
	};
	try {
		this.GrDamperTrail = X3DJSON.nodeUtil("Scene","GrDamperTrail");
	} catch (e) {
		console.log('Problems setting GrDamperTrail '+e);
		console.error('Problems setting GrDamperTrail',e);
	}


ecmascript:

	this.initialize = function ()
{
    this.proxy.DamperTrails.length=
    this.proxy.ChaserTrails.length= this.proxy.cNumTrailPoints;

    for(var C= 0; C<this.proxy.cNumTrailPoints; C++ )
    {
        this.proxy.DamperTrails[C]= new SFNode('Transform{}');
        this.proxy.ChaserTrails[C]= new SFNode('Transform{}');

        this.proxy.DamperTrails[C].children[0]= X3DJSON.nodeUtil("Scene","undefined", "this.proxy.ChaserTrails")[C].children[0]= X3DJSON.nodeUtil("Scene","undefined", "");
    }

    X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","GrDamperTrail", "")", "children",  this.proxy.DamperTrails);
    X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","GrChaserTrail", "")", "children",  this.proxy.ChaserTrails);
}
;

	this.DamperPos = function (Pos)
{
    this.proxy.lastDamperPos= Pos;
}
;

	this.ChaserPos = function (Pos)
{
    this.proxy.lastChaserPos= Pos;
}
;

	this.Tick = function ()
{
    for(var C= this.proxy.cNumTrailPoints - 1; C>0; C-- )
    {
        this.proxy.DamperTrails[C].translation= this.proxy.DamperTrails[  C - 1].translation;
        this.proxy.ChaserTrails[C].translation= this.proxy.ChaserTrails[C - 1].translation;
    }

    this.proxy.DamperTrails[0].translation= this.proxy.lastDamperPos;
    this.proxy.ChaserTrails[0].translation= this.proxy.lastChaserPos;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTrailer'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTrailer']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTrailer'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTrailer'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTrailer']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTrailer']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTrailer'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTrailer']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTrailer']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTrailer'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTrailer'].initialize();
    if (X3DJSON.nodeUtil("Scene","PositionTouchSensor")) {
X3DJSON.nodeUtil("Scene","PositionTouchSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].A_in(X3DJSON.nodeUtil("Scene","PositionTouchSensor","hitTexCoord"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].A_in(X3DJSON.nodeUtil("Scene","PositionTouchSensor","hitTexCoord"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D']['ACTION']['A_ot'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D']['ACTION']['A_ot'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D']['ACTION']['A_ot'].push(function(property, value) {
		if (property === 'A_ot') {
			X3DJSON.nodeUtil("Scene","TrObjectDirect","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].A_ot === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].A_ot() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].A_ot, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TrObjectDirect","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].A_ot === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].A_ot() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].A_ot, __eventTime);
    if (X3DJSON.nodeUtil("Scene","PositionTouchSensor")) {
X3DJSON.nodeUtil("Scene","PositionTouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PositionDamper2DNode")) {
X3DJSON.nodeUtil("Scene","PositionDamper2DNode").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].B_in(X3DJSON.nodeUtil("Scene","PositionDamper2DNode","value"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].B_in(X3DJSON.nodeUtil("Scene","PositionDamper2DNode","value"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D']['ACTION']['B_ot'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D']['ACTION']['B_ot'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D']['ACTION']['B_ot'].push(function(property, value) {
		if (property === 'B_ot') {
			X3DJSON.nodeUtil("Scene","TrObjectDampered","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].B_ot === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].B_ot() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].B_ot, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TrObjectDampered","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].B_ot === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].B_ot() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].B_ot, __eventTime);
    if (X3DJSON.nodeUtil("Scene","PositionTouchSensor")) {
X3DJSON.nodeUtil("Scene","PositionTouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PositionChaser2DNode")) {
X3DJSON.nodeUtil("Scene","PositionChaser2DNode").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].C_in(X3DJSON.nodeUtil("Scene","PositionChaser2DNode","value"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].C_in(X3DJSON.nodeUtil("Scene","PositionChaser2DNode","value"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D']['ACTION']['C_ot'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D']['ACTION']['C_ot'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D']['ACTION']['C_ot'].push(function(property, value) {
		if (property === 'C_ot') {
			X3DJSON.nodeUtil("Scene","TrObjectFollowed","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].C_ot === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].C_ot() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].C_ot, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TrObjectFollowed","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].C_ot === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].C_ot() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].C_ot, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton']['ACTION']['Tau'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton']['ACTION']['Tau'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton']['ACTION']['Tau'].push(function(property, value) {
		if (property === 'Tau') {
			X3DJSON.nodeUtil("Scene","ColorDamperNode","tau",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Tau === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Tau() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Tau, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ColorDamperNode","tau",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Tau === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Tau() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Tau, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton']['ACTION']['Color'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton']['ACTION']['Color'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton']['ACTION']['Color'].push(function(property, value) {
		if (property === 'Color') {
			X3DJSON.nodeUtil("Scene","ColorDamperNode","destination",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Color === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Color() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Color, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ColorDamperNode","destination",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Color === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Color() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Color, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton']['ACTION']['Tau'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton']['ACTION']['Tau'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton']['ACTION']['Tau'].push(function(property, value) {
		if (property === 'Tau') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['Trace_ROUTE_ScrToggleButton.Tau_TO_Damp.tau'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Tau === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Tau() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Tau) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['Trace_ROUTE_ScrToggleButton.Tau_TO_Damp.tau'].traceValue(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Tau === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Tau() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Tau, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['Trace_ROUTE_ScrToggleButton.Tau_TO_Damp.tau'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Tau === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Tau() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Tau) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['Trace_ROUTE_ScrToggleButton.Tau_TO_Damp.tau'].traceValue(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Tau === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Tau() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Tau, __eventTime);
		}
    if (X3DJSON.nodeUtil("Scene","BtnDamper")) {
X3DJSON.nodeUtil("Scene","BtnDamper").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].BtnDamperIsOn(X3DJSON.nodeUtil("Scene","BtnDamper","isOn"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].BtnDamperIsOn(X3DJSON.nodeUtil("Scene","BtnDamper","isOn"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","BtnChaser")) {
X3DJSON.nodeUtil("Scene","BtnChaser").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].BtnChaserIsOn(X3DJSON.nodeUtil("Scene","BtnChaser","isOn"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].BtnChaserIsOn(X3DJSON.nodeUtil("Scene","BtnChaser","isOn"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr']['ACTION']['WcDamper'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr']['ACTION']['WcDamper'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr']['ACTION']['WcDamper'].push(function(property, value) {
		if (property === 'WcDamper') {
			X3DJSON.nodeUtil("Scene","SwObjectDampered","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcDamper === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcDamper() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcDamper, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SwObjectDampered","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcDamper === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcDamper() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcDamper, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr']['ACTION']['WcChaser'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr']['ACTION']['WcChaser'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr']['ACTION']['WcChaser'].push(function(property, value) {
		if (property === 'WcChaser') {
			X3DJSON.nodeUtil("Scene","SwObjectFollowed","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcChaser === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcChaser() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcChaser, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SwObjectFollowed","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcChaser === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcChaser() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcChaser, __eventTime);
    if (X3DJSON.nodeUtil("Scene","TmrTrail")) {
X3DJSON.nodeUtil("Scene","TmrTrail").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTrailer'].Tick(X3DJSON.nodeUtil("Scene","TmrTrail","cycleTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTrailer'].Tick(X3DJSON.nodeUtil("Scene","TmrTrail","cycleTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TrObjectDampered")) {
X3DJSON.nodeUtil("Scene","TrObjectDampered").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTrailer'].DamperPos(X3DJSON.nodeUtil("Scene","TrObjectDampered","translation"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTrailer'].DamperPos(X3DJSON.nodeUtil("Scene","TrObjectDampered","translation"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TrObjectFollowed")) {
X3DJSON.nodeUtil("Scene","TrObjectFollowed").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTrailer'].ChaserPos(X3DJSON.nodeUtil("Scene","TrObjectFollowed","translation"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTrailer'].ChaserPos(X3DJSON.nodeUtil("Scene","TrObjectFollowed","translation"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr']['ACTION']['WcDamper'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr']['ACTION']['WcDamper'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr']['ACTION']['WcDamper'].push(function(property, value) {
		if (property === 'WcDamper') {
			X3DJSON.nodeUtil("Scene","SwDamperTrail","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcDamper === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcDamper() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcDamper, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SwDamperTrail","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcDamper === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcDamper() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcDamper, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr']['ACTION']['WcChaser'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr']['ACTION']['WcChaser'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr']['ACTION']['WcChaser'].push(function(property, value) {
		if (property === 'WcChaser') {
			X3DJSON.nodeUtil("Scene","SwChaserTrail","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcChaser === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcChaser() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcChaser, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SwChaserTrail","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcChaser === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcChaser() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcChaser, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].A_in(X3DJSON.nodeUtil("Scene","PositionTouchSensor","hitTexCoord"), __eventTime);
			X3DJSON.nodeUtil("Scene","TrObjectDirect","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].A_ot === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].A_ot() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].A_ot, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].B_in(X3DJSON.nodeUtil("Scene","PositionDamper2DNode","value"), __eventTime);
			X3DJSON.nodeUtil("Scene","TrObjectDampered","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].B_ot === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].B_ot() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].B_ot, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].C_in(X3DJSON.nodeUtil("Scene","PositionChaser2DNode","value"), __eventTime);
			X3DJSON.nodeUtil("Scene","TrObjectFollowed","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].C_ot === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].C_ot() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTexCoordTo3D'].C_ot, __eventTime);
			X3DJSON.nodeUtil("Scene","ColorDamperNode","tau",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Tau === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Tau() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Tau, __eventTime);
			X3DJSON.nodeUtil("Scene","ColorDamperNode","destination",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Color === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Color() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Color, __eventTime);
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['Trace_ROUTE_ScrToggleButton.Tau_TO_Damp.tau'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Tau === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Tau() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Tau) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['Trace_ROUTE_ScrToggleButton.Tau_TO_Damp.tau'].traceValue(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Tau === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Tau() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrToggleButton'].Tau, __eventTime);
		}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].BtnDamperIsOn(X3DJSON.nodeUtil("Scene","BtnDamper","isOn"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].BtnChaserIsOn(X3DJSON.nodeUtil("Scene","BtnChaser","isOn"), __eventTime);
			X3DJSON.nodeUtil("Scene","SwObjectDampered","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcDamper === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcDamper() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcDamper, __eventTime);
			X3DJSON.nodeUtil("Scene","SwObjectFollowed","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcChaser === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcChaser() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcChaser, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTrailer'].Tick(X3DJSON.nodeUtil("Scene","TmrTrail","cycleTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTrailer'].DamperPos(X3DJSON.nodeUtil("Scene","TrObjectDampered","translation"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrTrailer'].ChaserPos(X3DJSON.nodeUtil("Scene","TrObjectFollowed","translation"), __eventTime);
			X3DJSON.nodeUtil("Scene","SwDamperTrail","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcDamper === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcDamper() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcDamper, __eventTime);
			X3DJSON.nodeUtil("Scene","SwChaserTrail","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcChaser === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcChaser() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/TestPosition2DFollower.json']['ScrBtnMgr'].WcChaser, __eventTime);