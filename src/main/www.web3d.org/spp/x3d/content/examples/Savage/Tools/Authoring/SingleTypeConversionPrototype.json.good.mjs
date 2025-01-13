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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/SingleTypeConversionPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/SingleTypeConversionPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/SingleTypeConversionPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/SingleTypeConversionPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/SingleTypeConversionPrototype.json']['ConversionScript'] = function() {
	this.set_decimalPlaces = function (value) {
		try {
			this.proxy.decimalPlaces = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting decimalPlaces '+e);
			console.error('Problems setting decimalPlaces',e);
		}
	};
	this.decimalPlaces_changed = function () {
		var value = this.decimalPlaces;
		return value;
	};
	try {
		this.decimalPlaces = new SFInt32();
	} catch (e) {
		console.log('Problems setting decimalPlaces '+e);
		console.error('Problems setting decimalPlaces',e);
	}
	this.set_setDecimalPlaces = function (value) {
		try {
			this.proxy.setDecimalPlaces = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setDecimalPlaces '+e);
			console.error('Problems setting setDecimalPlaces',e);
		}
	};
	this.setDecimalPlaces_changed = function () {
		var value = this.setDecimalPlaces;
		return value;
	};
	try {
		this.setDecimalPlaces = new SFInt32();
	} catch (e) {
		console.log('Problems setting setDecimalPlaces '+e);
		console.error('Problems setting setDecimalPlaces',e);
	}
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
	this.set_SFTimeValue = function (value) {
		try {
			this.proxy.SFTimeValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SFTimeValue '+e);
			console.error('Problems setting SFTimeValue',e);
		}
	};
	this.SFTimeValue_changed = function () {
		var value = this.SFTimeValue;
		return value;
	};
	try {
		this.SFTimeValue = new SFTime();
	} catch (e) {
		console.log('Problems setting SFTimeValue '+e);
		console.error('Problems setting SFTimeValue',e);
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
	this.set_SFTimeResult = function (value) {
		try {
			this.proxy.SFTimeResult = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SFTimeResult '+e);
			console.error('Problems setting SFTimeResult',e);
		}
	};
	this.SFTimeResult_changed = function () {
		var value = this.SFTimeResult;
		return value;
	};
	try {
		this.SFTimeResult = new SFTime();
	} catch (e) {
		console.log('Problems setting SFTimeResult '+e);
		console.error('Problems setting SFTimeResult',e);
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
	this.set_newIntegerValue = function (value) {
		try {
			this.proxy.newIntegerValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting newIntegerValue '+e);
			console.error('Problems setting newIntegerValue',e);
		}
	};
	this.newIntegerValue_changed = function () {
		var value = this.newIntegerValue;
		return value;
	};
	try {
		this.newIntegerValue = new SFInt32(0);
	} catch (e) {
		console.log('Problems setting newIntegerValue '+e);
		console.error('Problems setting newIntegerValue',e);
	}
	this.set_newFloatValue = function (value) {
		try {
			this.proxy.newFloatValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting newFloatValue '+e);
			console.error('Problems setting newFloatValue',e);
		}
	};
	this.newFloatValue_changed = function () {
		var value = this.newFloatValue;
		return value;
	};
	try {
		this.newFloatValue = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting newFloatValue '+e);
		console.error('Problems setting newFloatValue',e);
	}
	this.set_newTimeValue = function (value) {
		try {
			this.proxy.newTimeValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting newTimeValue '+e);
			console.error('Problems setting newTimeValue',e);
		}
	};
	this.newTimeValue_changed = function () {
		var value = this.newTimeValue;
		return value;
	};
	try {
		this.newTimeValue = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting newTimeValue '+e);
		console.error('Problems setting newTimeValue',e);
	}
	this.set_roundOffFactor = function (value) {
		try {
			this.proxy.roundOffFactor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting roundOffFactor '+e);
			console.error('Problems setting roundOffFactor',e);
		}
	};
	this.roundOffFactor_changed = function () {
		var value = this.roundOffFactor;
		return value;
	};
	try {
		this.roundOffFactor = new SFFloat(1);
	} catch (e) {
		console.log('Problems setting roundOffFactor '+e);
		console.error('Problems setting roundOffFactor',e);
	}


ecmascript:

	this.initialize = function ()
{
	if (this.proxy.decimalPlaces <= -1)
	{
		this.proxy.roundOffFactor = 1;
	}
	else
	{
		this.proxy.roundOffFactor = Math.pow(10, this.proxy.decimalPlaces);
	}
//	console.error ('[SingleTypeConversion this.initialize()] this.proxy.decimalPlaces=' + this.proxy.decimalPlaces + ', this.proxy.roundOffFactor=' + this.proxy.roundOffFactor + '');
};

	this.setDecimalPlaces = function (value, timeStamp)
{
	this.proxy.decimalPlaces = value;
	this.initialize ();
};

	this.SFBoolValue = function (value, timeStamp)
{
	if (value)
	{
		this.proxy.SFBoolResult   = value;
		this.proxy.SFInt32Result  = 1;
		this.proxy.SFFloatResult  = 1.0;
		this.proxy.SFTimeResult   = timeStamp;
		this.proxy.SFStringResult = '1';
		this.proxy.MFStringResult = new MFString ('1');
	}
	else
	{
		this.proxy.SFBoolResult   = value;
		this.proxy.SFInt32Result  = 0;
		this.proxy.SFFloatResult  = 0.0;
		this.proxy.SFTimeResult   = -1;
		this.proxy.SFStringResult = '0';
		this.proxy.MFStringResult = new MFString ('0');
	}
};

	this.SFInt32Value = function (value, timeStamp)
{
	if (value == 0)
		this.proxy.SFBoolResult = false;
	else
		this.proxy.SFBoolResult = true;

	this.proxy.newIntegerValue = value;
        this.proxy.SFInt32Result   = this.proxy.newIntegerValue;
	this.proxy.SFFloatResult   = this.proxy.newIntegerValue * 1.0;
	this.proxy.SFTimeResult    = this.proxy.newIntegerValue * 1.0;
	this.proxy.SFStringResult  = this.proxy.newIntegerValue.toString(); // per EcmaScript specification
        if (this.proxy.SFStringResult == null)
        {
            this.proxy.SFStringResult = this.proxy.newIntegerValue; // try direct approach
        }
	this.proxy.MFStringResult = new MFString(this.proxy.SFStringResult);
};

	this.SFFloatValue = function (value, timeStamp)
{
	if (value == 0)
		this.proxy.SFBoolResult = false;
	else
		this.proxy.SFBoolResult = true;

        if (this.proxy.decimalPlaces >= 0)
	     this.proxy.newFloatValue = Math.round(value*this.proxy.roundOffFactor) / this.proxy.roundOffFactor;
	else this.proxy.newFloatValue = value;

	this.proxy.SFInt32Result  = Math.round(this.proxy.newFloatValue);
	this.proxy.SFFloatResult  = this.proxy.newFloatValue;
	this.proxy.SFTimeResult   = this.proxy.newFloatValue;
	this.proxy.SFStringResult = this.proxy.newFloatValue.toString(); // per EcmaScript specification
        if (this.proxy.SFStringResult == null)
        {
          this.proxy.SFStringResult = this.proxy.newFloatValue; // try direct approach
        }
	this.proxy.MFStringResult = new MFString(this.proxy.SFStringResult);
//      console.error ('value=' + value + ', this.proxy.SFFloatResult=' + this.proxy.SFFloatResult + '');
};

	this.SFTimeValue = function (value, timeStamp)
{
	if (value == 0.0)
		this.proxy.SFBoolResult = false;
	else
		this.proxy.SFBoolResult = true;

	if (this.proxy.decimalPlaces >= 0)
		this.proxy.newTimeValue = Math.round(value*this.proxy.roundOffFactor) / this.proxy.roundOffFactor;
	else	this.proxy.newTimeValue = value;

	this.proxy.SFInt32Result  = Math.round(this.proxy.newTimeValue);
	this.proxy.SFFloatResult  = this.proxy.newTimeValue;
	this.proxy.SFTimeResult   = this.proxy.newTimeValue;
	this.proxy.SFStringResult = this.proxy.newTimeValue.toString(); // per EcmaScript specification
        if (this.proxy.SFStringResult == null)
        {
            this.proxy.SFStringResult = this.proxy.newTimeValue; // try direct approach
        }
	this.proxy.MFStringResult = new MFString(this.proxy.SFStringResult);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/SingleTypeConversionPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/SingleTypeConversionPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/SingleTypeConversionPrototype.json']['ConversionScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/SingleTypeConversionPrototype.json']['ConversionScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/SingleTypeConversionPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/SingleTypeConversionPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/SingleTypeConversionPrototype.json']['ConversionScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/SingleTypeConversionPrototype.json']['ConversionScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/SingleTypeConversionPrototype.json']['ConversionScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/SingleTypeConversionPrototype.json']['ConversionScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/SingleTypeConversionPrototype.json']['ConversionScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/SingleTypeConversionPrototype.json']['ConversionScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/SingleTypeConversionPrototype.json']['ConversionScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/SingleTypeConversionPrototype.json']['ConversionScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/SingleTypeConversionPrototype.json']['ConversionScript'].initialize();

