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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['ScaledSFFloatScriptNode'] = function() {
	this.set_oldMin = function (value) {
		try {
			this.proxy.oldMin = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting oldMin '+e);
			console.error('Problems setting oldMin',e);
		}
	};
	this.oldMin_changed = function () {
		var value = this.oldMin;
		return value;
	};
	try {
		this.oldMin = new SFFloat();
	} catch (e) {
		console.log('Problems setting oldMin '+e);
		console.error('Problems setting oldMin',e);
	}
	this.set_oldMax = function (value) {
		try {
			this.proxy.oldMax = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting oldMax '+e);
			console.error('Problems setting oldMax',e);
		}
	};
	this.oldMax_changed = function () {
		var value = this.oldMax;
		return value;
	};
	try {
		this.oldMax = new SFFloat();
	} catch (e) {
		console.log('Problems setting oldMax '+e);
		console.error('Problems setting oldMax',e);
	}
	this.set_newMin = function (value) {
		try {
			this.proxy.newMin = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting newMin '+e);
			console.error('Problems setting newMin',e);
		}
	};
	this.newMin_changed = function () {
		var value = this.newMin;
		return value;
	};
	try {
		this.newMin = new SFFloat();
	} catch (e) {
		console.log('Problems setting newMin '+e);
		console.error('Problems setting newMin',e);
	}
	this.set_newMax = function (value) {
		try {
			this.proxy.newMax = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting newMax '+e);
			console.error('Problems setting newMax',e);
		}
	};
	this.newMax_changed = function () {
		var value = this.newMax;
		return value;
	};
	try {
		this.newMax = new SFFloat();
	} catch (e) {
		console.log('Problems setting newMax '+e);
		console.error('Problems setting newMax',e);
	}
	this.set_oldMin = function (value) {
		try {
			this.proxy.oldMin = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting oldMin '+e);
			console.error('Problems setting oldMin',e);
		}
	};
	this.oldMin_changed = function () {
		var value = this.oldMin;
		return value;
	};
	try {
		this.oldMin = new SFFloat();
	} catch (e) {
		console.log('Problems setting oldMin '+e);
		console.error('Problems setting oldMin',e);
	}
	this.set_oldMax = function (value) {
		try {
			this.proxy.oldMax = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting oldMax '+e);
			console.error('Problems setting oldMax',e);
		}
	};
	this.oldMax_changed = function () {
		var value = this.oldMax;
		return value;
	};
	try {
		this.oldMax = new SFFloat();
	} catch (e) {
		console.log('Problems setting oldMax '+e);
		console.error('Problems setting oldMax',e);
	}
	this.set_newMin = function (value) {
		try {
			this.proxy.newMin = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting newMin '+e);
			console.error('Problems setting newMin',e);
		}
	};
	this.newMin_changed = function () {
		var value = this.newMin;
		return value;
	};
	try {
		this.newMin = new SFFloat();
	} catch (e) {
		console.log('Problems setting newMin '+e);
		console.error('Problems setting newMin',e);
	}
	this.set_newMax = function (value) {
		try {
			this.proxy.newMax = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting newMax '+e);
			console.error('Problems setting newMax',e);
		}
	};
	this.newMax_changed = function () {
		var value = this.newMax;
		return value;
	};
	try {
		this.newMax = new SFFloat();
	} catch (e) {
		console.log('Problems setting newMax '+e);
		console.error('Problems setting newMax',e);
	}
	this.set_value = function (value) {
		try {
			this.proxy.value = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting value '+e);
			console.error('Problems setting value',e);
		}
	};
	this.value_changed = function () {
		var value = this.value;
		return value;
	};
	try {
		this.value = undefined;
	} catch (e) {
		console.log('Problems setting value '+e);
		console.error('Problems setting value',e);
	}
	this.set_value = function (value) {
		try {
			this.proxy.value = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting value '+e);
			console.error('Problems setting value',e);
		}
	};
	this.value_changed = function () {
		var value = this.value;
		return value;
	};
	try {
		this.value = undefined;
	} catch (e) {
		console.log('Problems setting value '+e);
		console.error('Problems setting value',e);
	}
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['ScaledSFFloatScriptNode'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['ScaledSFFloatScriptNode']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['ScaledSFFloatScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['ScaledSFFloatScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['ScaledSFFloatScriptNode']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['ScaledSFFloatScriptNode']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['ScaledSFFloatScriptNode'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['ScaledSFFloatScriptNode']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['ScaledSFFloatScriptNode']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['ScaledSFFloatScriptNode'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['ScaledSFFloatScriptNode'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SingleTypeConversionScriptNode'] = function() {
	this.set_SFBoolValue = function (value) {
		try {
			this.proxy.SFBoolValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SFBoolValue '+e);
			console.error('Problems setting SFBoolValue',e);
		}
	};
	this.SFBoolValue_changed = function () {
		var value = this.SFBoolValue;
		return value;
	};
	try {
		this.SFBoolValue = new SFBool();
	} catch (e) {
		console.log('Problems setting SFBoolValue '+e);
		console.error('Problems setting SFBoolValue',e);
	}
	this.set_SFFloatValue = function (value) {
		try {
			this.proxy.SFFloatValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SFFloatValue '+e);
			console.error('Problems setting SFFloatValue',e);
		}
	};
	this.SFFloatValue_changed = function () {
		var value = this.SFFloatValue;
		return value;
	};
	try {
		this.SFFloatValue = new SFFloat();
	} catch (e) {
		console.log('Problems setting SFFloatValue '+e);
		console.error('Problems setting SFFloatValue',e);
	}
	this.set_SFInt32Value = function (value) {
		try {
			this.proxy.SFInt32Value = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SFInt32Value '+e);
			console.error('Problems setting SFInt32Value',e);
		}
	};
	this.SFInt32Value_changed = function () {
		var value = this.SFInt32Value;
		return value;
	};
	try {
		this.SFInt32Value = new SFInt32();
	} catch (e) {
		console.log('Problems setting SFInt32Value '+e);
		console.error('Problems setting SFInt32Value',e);
	}
	this.set_SFStringValue = function (value) {
		try {
			this.proxy.SFStringValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SFStringValue '+e);
			console.error('Problems setting SFStringValue',e);
		}
	};
	this.SFStringValue_changed = function () {
		var value = this.SFStringValue;
		return value;
	};
	try {
		this.SFStringValue = new SFString();
	} catch (e) {
		console.log('Problems setting SFStringValue '+e);
		console.error('Problems setting SFStringValue',e);
	}
	this.set_SFBoolResult = function (value) {
		try {
			this.proxy.SFBoolResult = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SFBoolResult '+e);
			console.error('Problems setting SFBoolResult',e);
		}
	};
	this.SFBoolResult_changed = function () {
		var value = this.SFBoolResult;
		return value;
	};
	try {
		this.SFBoolResult = new SFBool();
	} catch (e) {
		console.log('Problems setting SFBoolResult '+e);
		console.error('Problems setting SFBoolResult',e);
	}
	this.set_SFFloatResult = function (value) {
		try {
			this.proxy.SFFloatResult = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SFFloatResult '+e);
			console.error('Problems setting SFFloatResult',e);
		}
	};
	this.SFFloatResult_changed = function () {
		var value = this.SFFloatResult;
		return value;
	};
	try {
		this.SFFloatResult = new SFFloat();
	} catch (e) {
		console.log('Problems setting SFFloatResult '+e);
		console.error('Problems setting SFFloatResult',e);
	}
	this.set_SFInt32Result = function (value) {
		try {
			this.proxy.SFInt32Result = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SFInt32Result '+e);
			console.error('Problems setting SFInt32Result',e);
		}
	};
	this.SFInt32Result_changed = function () {
		var value = this.SFInt32Result;
		return value;
	};
	try {
		this.SFInt32Result = new SFInt32();
	} catch (e) {
		console.log('Problems setting SFInt32Result '+e);
		console.error('Problems setting SFInt32Result',e);
	}
	this.set_SFStringResult = function (value) {
		try {
			this.proxy.SFStringResult = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SFStringResult '+e);
			console.error('Problems setting SFStringResult',e);
		}
	};
	this.SFStringResult_changed = function () {
		var value = this.SFStringResult;
		return value;
	};
	try {
		this.SFStringResult = new SFString();
	} catch (e) {
		console.log('Problems setting SFStringResult '+e);
		console.error('Problems setting SFStringResult',e);
	}
	this.set_MFStringResult = function (value) {
		try {
			this.proxy.MFStringResult = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting MFStringResult '+e);
			console.error('Problems setting MFStringResult',e);
		}
	};
	this.MFStringResult_changed = function () {
		var value = this.MFStringResult;
		return value;
	};
	try {
		this.MFStringResult = new MFString();
	} catch (e) {
		console.log('Problems setting MFStringResult '+e);
		console.error('Problems setting MFStringResult',e);
	}
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SingleTypeConversionScriptNode'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SingleTypeConversionScriptNode']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SingleTypeConversionScriptNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SingleTypeConversionScriptNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SingleTypeConversionScriptNode']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SingleTypeConversionScriptNode']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SingleTypeConversionScriptNode'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SingleTypeConversionScriptNode']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SingleTypeConversionScriptNode']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SingleTypeConversionScriptNode'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SingleTypeConversionScriptNode'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'] = function() {
	this.set_height = function (value) {
		try {
			this.proxy.height = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting height '+e);
			console.error('Problems setting height',e);
		}
	};
	this.height_changed = function () {
		var value = this.height;
		return value;
	};
	try {
		this.height = new SFFloat();
	} catch (e) {
		console.log('Problems setting height '+e);
		console.error('Problems setting height',e);
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
	this.set_min = function (value) {
		try {
			this.proxy.min = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting min '+e);
			console.error('Problems setting min',e);
		}
	};
	this.min_changed = function () {
		var value = this.min;
		return value;
	};
	try {
		this.min = new SFInt32();
	} catch (e) {
		console.log('Problems setting min '+e);
		console.error('Problems setting min',e);
	}
	this.set_max = function (value) {
		try {
			this.proxy.max = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting max '+e);
			console.error('Problems setting max',e);
		}
	};
	this.max_changed = function () {
		var value = this.max;
		return value;
	};
	try {
		this.max = new SFInt32();
	} catch (e) {
		console.log('Problems setting max '+e);
		console.error('Problems setting max',e);
	}
	this.set_value = function (value) {
		try {
			this.proxy.value = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting value '+e);
			console.error('Problems setting value',e);
		}
	};
	this.value_changed = function () {
		var value = this.value;
		return value;
	};
	try {
		this.value = new SFInt32();
	} catch (e) {
		console.log('Problems setting value '+e);
		console.error('Problems setting value',e);
	}
	this.set_min = function (value) {
		try {
			this.proxy.min = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting min '+e);
			console.error('Problems setting min',e);
		}
	};
	this.min_changed = function () {
		var value = this.min;
		return value;
	};
	try {
		this.min = new SFInt32();
	} catch (e) {
		console.log('Problems setting min '+e);
		console.error('Problems setting min',e);
	}
	this.set_max = function (value) {
		try {
			this.proxy.max = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting max '+e);
			console.error('Problems setting max',e);
		}
	};
	this.max_changed = function () {
		var value = this.max;
		return value;
	};
	try {
		this.max = new SFInt32();
	} catch (e) {
		console.log('Problems setting max '+e);
		console.error('Problems setting max',e);
	}
	this.set_value = function (value) {
		try {
			this.proxy.value = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting value '+e);
			console.error('Problems setting value',e);
		}
	};
	this.value_changed = function () {
		var value = this.value;
		return value;
	};
	try {
		this.value = new SFInt32();
	} catch (e) {
		console.log('Problems setting value '+e);
		console.error('Problems setting value',e);
	}
	this.set_value = function (value) {
		try {
			this.proxy.value = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting value '+e);
			console.error('Problems setting value',e);
		}
	};
	this.value_changed = function () {
		var value = this.value;
		return value;
	};
	try {
		this.value = new SFInt32();
	} catch (e) {
		console.log('Problems setting value '+e);
		console.error('Problems setting value',e);
	}
	this.set_bottomDiskTouched = function (value) {
		try {
			this.proxy.bottomDiskTouched = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting bottomDiskTouched '+e);
			console.error('Problems setting bottomDiskTouched',e);
		}
	};
	this.bottomDiskTouched_changed = function () {
		var value = this.bottomDiskTouched;
		return value;
	};
	try {
		this.bottomDiskTouched = new SFBool();
	} catch (e) {
		console.log('Problems setting bottomDiskTouched '+e);
		console.error('Problems setting bottomDiskTouched',e);
	}
	this.set_topDiskTouched = function (value) {
		try {
			this.proxy.topDiskTouched = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting topDiskTouched '+e);
			console.error('Problems setting topDiskTouched',e);
		}
	};
	this.topDiskTouched_changed = function () {
		var value = this.topDiskTouched;
		return value;
	};
	try {
		this.topDiskTouched = new SFBool();
	} catch (e) {
		console.log('Problems setting topDiskTouched '+e);
		console.error('Problems setting topDiskTouched',e);
	}
	this.set_ballTrans = function (value) {
		try {
			this.proxy.ballTrans = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ballTrans '+e);
			console.error('Problems setting ballTrans',e);
		}
	};
	this.ballTrans_changed = function () {
		var value = this.ballTrans;
		return value;
	};
	try {
		this.ballTrans = undefined;
	} catch (e) {
		console.log('Problems setting ballTrans '+e);
		console.error('Problems setting ballTrans',e);
	}
	this.set_dragActive = function (value) {
		try {
			this.proxy.dragActive = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting dragActive '+e);
			console.error('Problems setting dragActive',e);
		}
	};
	this.dragActive_changed = function () {
		var value = this.dragActive;
		return value;
	};
	try {
		this.dragActive = undefined;
	} catch (e) {
		console.log('Problems setting dragActive '+e);
		console.error('Problems setting dragActive',e);
	}
	this.set_topDiskTrans = function (value) {
		try {
			this.proxy.topDiskTrans = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting topDiskTrans '+e);
			console.error('Problems setting topDiskTrans',e);
		}
	};
	this.topDiskTrans_changed = function () {
		var value = this.topDiskTrans;
		return value;
	};
	try {
		this.topDiskTrans = undefined;
	} catch (e) {
		console.log('Problems setting topDiskTrans '+e);
		console.error('Problems setting topDiskTrans',e);
	}
	this.set_bottomDiskTrans = function (value) {
		try {
			this.proxy.bottomDiskTrans = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting bottomDiskTrans '+e);
			console.error('Problems setting bottomDiskTrans',e);
		}
	};
	this.bottomDiskTrans_changed = function () {
		var value = this.bottomDiskTrans;
		return value;
	};
	try {
		this.bottomDiskTrans = undefined;
	} catch (e) {
		console.log('Problems setting bottomDiskTrans '+e);
		console.error('Problems setting bottomDiskTrans',e);
	}
	this.set_connectorTrans = function (value) {
		try {
			this.proxy.connectorTrans = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting connectorTrans '+e);
			console.error('Problems setting connectorTrans',e);
		}
	};
	this.connectorTrans_changed = function () {
		var value = this.connectorTrans;
		return value;
	};
	try {
		this.connectorTrans = undefined;
	} catch (e) {
		console.log('Problems setting connectorTrans '+e);
		console.error('Problems setting connectorTrans',e);
	}
	this.set_ballTrans = function (value) {
		try {
			this.proxy.ballTrans = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ballTrans '+e);
			console.error('Problems setting ballTrans',e);
		}
	};
	this.ballTrans_changed = function () {
		var value = this.ballTrans;
		return value;
	};
	try {
		this.ballTrans = undefined;
	} catch (e) {
		console.log('Problems setting ballTrans '+e);
		console.error('Problems setting ballTrans',e);
	}
	this.set_maxBallPosition = function (value) {
		try {
			this.proxy.maxBallPosition = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting maxBallPosition '+e);
			console.error('Problems setting maxBallPosition',e);
		}
	};
	this.maxBallPosition_changed = function () {
		var value = this.maxBallPosition;
		return value;
	};
	try {
		this.maxBallPosition = undefined;
	} catch (e) {
		console.log('Problems setting maxBallPosition '+e);
		console.error('Problems setting maxBallPosition',e);
	}
	this.set_minBallPosition = function (value) {
		try {
			this.proxy.minBallPosition = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting minBallPosition '+e);
			console.error('Problems setting minBallPosition',e);
		}
	};
	this.minBallPosition_changed = function () {
		var value = this.minBallPosition;
		return value;
	};
	try {
		this.minBallPosition = undefined;
	} catch (e) {
		console.log('Problems setting minBallPosition '+e);
		console.error('Problems setting minBallPosition',e);
	}
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT']['ACTION']['bottomDiskTrans'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT']['ACTION']['bottomDiskTrans'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT']['ACTION']['bottomDiskTrans'].push(function(property, value) {
		if (property === 'bottomDiskTrans') {
			X3DJSON.nodeUtil("Scene","BOTTOM_DISK_TRANS","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].bottomDiskTrans_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].bottomDiskTrans_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].bottomDiskTrans, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BOTTOM_DISK_TRANS","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].bottomDiskTrans_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].bottomDiskTrans_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].bottomDiskTrans, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT']['ACTION']['topDiskTrans'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT']['ACTION']['topDiskTrans'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT']['ACTION']['topDiskTrans'].push(function(property, value) {
		if (property === 'topDiskTrans') {
			X3DJSON.nodeUtil("Scene","TOP_DISK_TRANS","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].topDiskTrans_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].topDiskTrans_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].topDiskTrans, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TOP_DISK_TRANS","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].topDiskTrans_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].topDiskTrans_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].topDiskTrans, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT']['ACTION']['connectorTrans'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT']['ACTION']['connectorTrans'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT']['ACTION']['connectorTrans'].push(function(property, value) {
		if (property === 'connectorTrans') {
			X3DJSON.nodeUtil("Scene","CONNECTOR_TRANS","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].connectorTrans_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].connectorTrans_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].connectorTrans, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","CONNECTOR_TRANS","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].connectorTrans_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].connectorTrans_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].connectorTrans, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT']['ACTION']['ballTrans'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT']['ACTION']['ballTrans'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT']['ACTION']['ballTrans'].push(function(property, value) {
		if (property === 'ballTrans') {
			X3DJSON.nodeUtil("Scene","BALL_TRANS","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].ballTrans_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].ballTrans_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].ballTrans, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BALL_TRANS","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].ballTrans_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].ballTrans_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].ballTrans, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT']['ACTION']['maxBallPosition'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT']['ACTION']['maxBallPosition'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT']['ACTION']['maxBallPosition'].push(function(property, value) {
		if (property === 'maxBallPosition') {
			X3DJSON.nodeUtil("Scene","BALL_PLANE","maxPosition",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].maxBallPosition_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].maxBallPosition_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].maxBallPosition, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BALL_PLANE","maxPosition",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].maxBallPosition_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].maxBallPosition_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].maxBallPosition, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT']['ACTION']['minBallPosition'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT']['ACTION']['minBallPosition'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT']['ACTION']['minBallPosition'].push(function(property, value) {
		if (property === 'minBallPosition') {
			X3DJSON.nodeUtil("Scene","BALL_PLANE","minPosition",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].minBallPosition_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].minBallPosition_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].minBallPosition, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BALL_PLANE","minPosition",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].minBallPosition_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].minBallPosition_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].minBallPosition, __eventTime);
    if (X3DJSON.nodeUtil("Scene","BALL_PLANE")) {
X3DJSON.nodeUtil("Scene","BALL_PLANE").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].set_dragActive(X3DJSON.nodeUtil("Scene","BALL_PLANE","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].set_dragActive(X3DJSON.nodeUtil("Scene","BALL_PLANE","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","BALL_PLANE")) {
X3DJSON.nodeUtil("Scene","BALL_PLANE").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].set_ballTrans(X3DJSON.nodeUtil("Scene","BALL_PLANE","translation"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].set_ballTrans(X3DJSON.nodeUtil("Scene","BALL_PLANE","translation"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","BOTTOM_DISK_TOUCH")) {
X3DJSON.nodeUtil("Scene","BOTTOM_DISK_TOUCH").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].bottomDiskTouched(X3DJSON.nodeUtil("Scene","BOTTOM_DISK_TOUCH","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].bottomDiskTouched(X3DJSON.nodeUtil("Scene","BOTTOM_DISK_TOUCH","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOP_DISK_TOUCH")) {
X3DJSON.nodeUtil("Scene","TOP_DISK_TOUCH").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].topDiskTouched(X3DJSON.nodeUtil("Scene","TOP_DISK_TOUCH","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].topDiskTouched(X3DJSON.nodeUtil("Scene","TOP_DISK_TOUCH","isActive"), __eventTime);
			X3DJSON.nodeUtil("Scene","BOTTOM_DISK_TRANS","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].bottomDiskTrans_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].bottomDiskTrans_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].bottomDiskTrans, __eventTime);
			X3DJSON.nodeUtil("Scene","TOP_DISK_TRANS","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].topDiskTrans_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].topDiskTrans_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].topDiskTrans, __eventTime);
			X3DJSON.nodeUtil("Scene","CONNECTOR_TRANS","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].connectorTrans_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].connectorTrans_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].connectorTrans, __eventTime);
			X3DJSON.nodeUtil("Scene","BALL_TRANS","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].ballTrans_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].ballTrans_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].ballTrans, __eventTime);
			X3DJSON.nodeUtil("Scene","BALL_PLANE","maxPosition",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].maxBallPosition_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].maxBallPosition_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].maxBallPosition, __eventTime);
			X3DJSON.nodeUtil("Scene","BALL_PLANE","minPosition",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].minBallPosition_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].minBallPosition_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].minBallPosition, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].set_dragActive(X3DJSON.nodeUtil("Scene","BALL_PLANE","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].set_ballTrans(X3DJSON.nodeUtil("Scene","BALL_PLANE","translation"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].bottomDiskTouched(X3DJSON.nodeUtil("Scene","BOTTOM_DISK_TOUCH","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Slider/SliderPrototype.json']['SLIDER_SCRIPT'].topDiskTouched(X3DJSON.nodeUtil("Scene","TOP_DISK_TOUCH","isActive"), __eventTime);