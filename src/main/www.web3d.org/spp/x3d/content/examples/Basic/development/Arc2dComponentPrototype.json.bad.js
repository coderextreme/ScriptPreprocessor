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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'] = function() {
	this.set_startAngle = function (value) {
		try {
			this.proxy.startAngle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startAngle '+e);
			console.error('Problems setting startAngle',e);
		}
	};
	this.startAngle_changed = function () {
		var value = this.startAngle;
		return value;
	};
	try {
		this.startAngle = new SFFloat();
	} catch (e) {
		console.log('Problems setting startAngle '+e);
		console.error('Problems setting startAngle',e);
	}
	this.set_endAngle = function (value) {
		try {
			this.proxy.endAngle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting endAngle '+e);
			console.error('Problems setting endAngle',e);
		}
	};
	this.endAngle_changed = function () {
		var value = this.endAngle;
		return value;
	};
	try {
		this.endAngle = new SFFloat();
	} catch (e) {
		console.log('Problems setting endAngle '+e);
		console.error('Problems setting endAngle',e);
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
	this.set_arcSet3d = function (value) {
		try {
			this.proxy.arcSet3d = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting arcSet3d '+e);
			console.error('Problems setting arcSet3d',e);
		}
	};
	this.arcSet3d_changed = function () {
		var value = this.arcSet3d;
		return value;
	};
	try {
		this.arcSet3d = new MFVec3f();
	} catch (e) {
		console.log('Problems setting arcSet3d '+e);
		console.error('Problems setting arcSet3d',e);
	}
	this.set_arcIndexSet3d = function (value) {
		try {
			this.proxy.arcIndexSet3d = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting arcIndexSet3d '+e);
			console.error('Problems setting arcIndexSet3d',e);
		}
	};
	this.arcIndexSet3d_changed = function () {
		var value = this.arcIndexSet3d;
		return value;
	};
	try {
		this.arcIndexSet3d = new MFInt32();
	} catch (e) {
		console.log('Problems setting arcIndexSet3d '+e);
		console.error('Problems setting arcIndexSet3d',e);
	}


ecmascript:

	this.initialize = function ()
{
   numOfPoints = 100;

   if (this.proxy.radius < 0)
   {
      console.error ('[Arc2D] Warning:  invalid value, this.proxy.radius=' + value + ' must instead be >= 0');
   }

   if ((this.proxy.startAngle < 0) || (this.proxy.startAngle >= 2 * Math.PI))
   {
      console.error ('[Arc2D] Warning: this.proxy.startAngle=' + this.proxy.startAngle + ' must be within range [0..2pi)');
   }

   if ((this.proxy.endAngle < 0) || (this.proxy.endAngle >= 2 * Math.PI))
   {
      console.error ('[Arc2D] Warning: this.proxy.endAngle=' + this.proxy.endAngle + ' must be within range [0..2pi)');
   }

   // equal this.proxy.startAngle, this.proxy.endAngle means draw full circle.
   // high out-of-range this.proxy.endAngle is OK for local computation.
   if (this.proxy.startAngle >= this.proxy.endAngle)
      this.proxy.endAngle += (2 * Math.PI);

   differAng = Math.abs((this.proxy.endAngle - this.proxy.startAngle))/numOfPoints;

   for (i = 0; i <= numOfPoints; i++)
   {
      this.proxy.arcSet3d[i] = new SFVec3f (this.proxy.radius * Math.cos(this.proxy.startAngle + i * differAng), this.proxy.radius * Math.sin(this.proxy.startAngle + i * differAng), 0.0);
      this.proxy.arcIndexSet3d[i] = i;
   }

} // initia;

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d']['ACTION']['arcSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d']['ACTION']['arcSet3d'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d']['ACTION']['arcSet3d'].push(function(property, value) {
		if (property === 'arcSet3d') {
			X3DJSON.nodeUtil("Scene","Arc3DPoints","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'].arcSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'].arcSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'].arcSet3d, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Arc3DPoints","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'].arcSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'].arcSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'].arcSet3d, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d']['ACTION']['arcIndexSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d']['ACTION']['arcIndexSet3d'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d']['ACTION']['arcIndexSet3d'].push(function(property, value) {
		if (property === 'arcIndexSet3d') {
			X3DJSON.nodeUtil("Scene","ArcIndexPoints","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'].arcIndexSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'].arcIndexSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'].arcIndexSet3d, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ArcIndexPoints","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'].arcIndexSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'].arcIndexSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'].arcIndexSet3d, __eventTime);
			X3DJSON.nodeUtil("Scene","Arc3DPoints","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'].arcSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'].arcSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'].arcSet3d, __eventTime);
			X3DJSON.nodeUtil("Scene","ArcIndexPoints","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'].arcIndexSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'].arcIndexSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Arc2dComponentPrototype.json']['Arc2dToFaceSet3d'].arcIndexSet3d, __eventTime);