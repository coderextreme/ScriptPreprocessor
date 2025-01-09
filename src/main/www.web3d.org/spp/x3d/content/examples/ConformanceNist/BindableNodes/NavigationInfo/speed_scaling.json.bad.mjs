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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'] = function() {
	this.set_proxSensor = function (value) {
		try {
			this.proxy.proxSensor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting proxSensor '+e);
			console.error('Problems setting proxSensor',e);
		}
	};
	this.proxSensor_changed = function () {
		var value = this.proxSensor;
		return value;
	};
	try {
		this.proxSensor = X3DJSON.nodeUtil("Scene","PROX_SENSOR");
	} catch (e) {
		console.log('Problems setting proxSensor '+e);
		console.error('Problems setting proxSensor',e);
	}
	this.set_rootTrans = function (value) {
		try {
			this.proxy.rootTrans = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rootTrans '+e);
			console.error('Problems setting rootTrans',e);
		}
	};
	this.rootTrans_changed = function () {
		var value = this.rootTrans;
		return value;
	};
	try {
		this.rootTrans = X3DJSON.nodeUtil("Scene","ROOT_TRANS");
	} catch (e) {
		console.log('Problems setting rootTrans '+e);
		console.error('Problems setting rootTrans',e);
	}
	this.set_typestring0 = function (value) {
		try {
			this.proxy.typestring0 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting typestring0 '+e);
			console.error('Problems setting typestring0',e);
		}
	};
	this.typestring0_changed = function () {
		var value = this.typestring0;
		return value;
	};
	try {
		this.typestring0 = X3DJSON.nodeUtil("Scene","TYPESTRING0");
	} catch (e) {
		console.log('Problems setting typestring0 '+e);
		console.error('Problems setting typestring0',e);
	}
	this.set_typestring1 = function (value) {
		try {
			this.proxy.typestring1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting typestring1 '+e);
			console.error('Problems setting typestring1',e);
		}
	};
	this.typestring1_changed = function () {
		var value = this.typestring1;
		return value;
	};
	try {
		this.typestring1 = X3DJSON.nodeUtil("Scene","TYPESTRING1");
	} catch (e) {
		console.log('Problems setting typestring1 '+e);
		console.error('Problems setting typestring1',e);
	}
	this.set_previousTime = function (value) {
		try {
			this.proxy.previousTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting previousTime '+e);
			console.error('Problems setting previousTime',e);
		}
	};
	this.previousTime_changed = function () {
		var value = this.previousTime;
		return value;
	};
	try {
		this.previousTime = new SFTime(0);
	} catch (e) {
		console.log('Problems setting previousTime '+e);
		console.error('Problems setting previousTime',e);
	}
	this.set_previousLoc = function (value) {
		try {
			this.proxy.previousLoc = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting previousLoc '+e);
			console.error('Problems setting previousLoc',e);
		}
	};
	this.previousLoc_changed = function () {
		var value = this.previousLoc;
		return value;
	};
	try {
		this.previousLoc = new SFVec3f(0,0,100);
	} catch (e) {
		console.log('Problems setting previousLoc '+e);
		console.error('Problems setting previousLoc',e);
	}
	this.set_currentLoc = function (value) {
		try {
			this.proxy.currentLoc = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting currentLoc '+e);
			console.error('Problems setting currentLoc',e);
		}
	};
	this.currentLoc_changed = function () {
		var value = this.currentLoc;
		return value;
	};
	try {
		this.currentLoc = new SFVec3f(0,0,10);
	} catch (e) {
		console.log('Problems setting currentLoc '+e);
		console.error('Problems setting currentLoc',e);
	}
	this.set_emptyString = function (value) {
		try {
			this.proxy.emptyString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting emptyString '+e);
			console.error('Problems setting emptyString',e);
		}
	};
	this.emptyString_changed = function () {
		var value = this.emptyString;
		return value;
	};
	try {
		this.emptyString = new MFString();
	} catch (e) {
		console.log('Problems setting emptyString '+e);
		console.error('Problems setting emptyString',e);
	}
	this.set_zero = function (value) {
		try {
			this.proxy.zero = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting zero '+e);
			console.error('Problems setting zero',e);
		}
	};
	this.zero_changed = function () {
		var value = this.zero;
		return value;
	};
	try {
		this.zero = new MFString("current speed = 0");
	} catch (e) {
		console.log('Problems setting zero '+e);
		console.error('Problems setting zero',e);
	}
	this.set_setSmallScaleString = function (value) {
		try {
			this.proxy.setSmallScaleString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setSmallScaleString '+e);
			console.error('Problems setting setSmallScaleString',e);
		}
	};
	this.setSmallScaleString_changed = function () {
		var value = this.setSmallScaleString;
		return value;
	};
	try {
		this.setSmallScaleString = new MFString("Click to set Transform scale to .01 .01 .01");
	} catch (e) {
		console.log('Problems setting setSmallScaleString '+e);
		console.error('Problems setting setSmallScaleString',e);
	}
	this.set_smallScaleSetString = function (value) {
		try {
			this.proxy.smallScaleSetString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting smallScaleSetString '+e);
			console.error('Problems setting smallScaleSetString',e);
		}
	};
	this.smallScaleSetString_changed = function () {
		var value = this.smallScaleSetString;
		return value;
	};
	try {
		this.smallScaleSetString = new MFString("Tranform scale set to .01 .01 .01");
	} catch (e) {
		console.log('Problems setting smallScaleSetString '+e);
		console.error('Problems setting smallScaleSetString',e);
	}
	this.set_setNormalScaleString = function (value) {
		try {
			this.proxy.setNormalScaleString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setNormalScaleString '+e);
			console.error('Problems setting setNormalScaleString',e);
		}
	};
	this.setNormalScaleString_changed = function () {
		var value = this.setNormalScaleString;
		return value;
	};
	try {
		this.setNormalScaleString = new MFString("Click to set Transform scale to 1 1 1");
	} catch (e) {
		console.log('Problems setting setNormalScaleString '+e);
		console.error('Problems setting setNormalScaleString',e);
	}
	this.set_normalScaleSetString = function (value) {
		try {
			this.proxy.normalScaleSetString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting normalScaleSetString '+e);
			console.error('Problems setting normalScaleSetString',e);
		}
	};
	this.normalScaleSetString_changed = function () {
		var value = this.normalScaleSetString;
		return value;
	};
	try {
		this.normalScaleSetString = new MFString("Transform scale set to 1 1 1");
	} catch (e) {
		console.log('Problems setting normalScaleSetString '+e);
		console.error('Problems setting normalScaleSetString',e);
	}
	this.set_setLargeScaleString = function (value) {
		try {
			this.proxy.setLargeScaleString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setLargeScaleString '+e);
			console.error('Problems setting setLargeScaleString',e);
		}
	};
	this.setLargeScaleString_changed = function () {
		var value = this.setLargeScaleString;
		return value;
	};
	try {
		this.setLargeScaleString = new MFString("Click to set Transform scale to 100 100 100");
	} catch (e) {
		console.log('Problems setting setLargeScaleString '+e);
		console.error('Problems setting setLargeScaleString',e);
	}
	this.set_largeScaleSetString = function (value) {
		try {
			this.proxy.largeScaleSetString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting largeScaleSetString '+e);
			console.error('Problems setting largeScaleSetString',e);
		}
	};
	this.largeScaleSetString_changed = function () {
		var value = this.largeScaleSetString;
		return value;
	};
	try {
		this.largeScaleSetString = new MFString("Transform scale set to 100 100 100");
	} catch (e) {
		console.log('Problems setting largeScaleSetString '+e);
		console.error('Problems setting largeScaleSetString',e);
	}
	this.set_small = function (value) {
		try {
			this.proxy.small = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting small '+e);
			console.error('Problems setting small',e);
		}
	};
	this.small_changed = function () {
		var value = this.small;
		return value;
	};
	try {
		this.small = new SFVec3f(0.01,0.01,0.01);
	} catch (e) {
		console.log('Problems setting small '+e);
		console.error('Problems setting small',e);
	}
	this.set_normal = function (value) {
		try {
			this.proxy.normal = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting normal '+e);
			console.error('Problems setting normal',e);
		}
	};
	this.normal_changed = function () {
		var value = this.normal;
		return value;
	};
	try {
		this.normal = new SFVec3f(1,1,1);
	} catch (e) {
		console.log('Problems setting normal '+e);
		console.error('Problems setting normal',e);
	}
	this.set_large = function (value) {
		try {
			this.proxy.large = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting large '+e);
			console.error('Problems setting large',e);
		}
	};
	this.large_changed = function () {
		var value = this.large;
		return value;
	};
	try {
		this.large = new SFVec3f(100,100,100);
	} catch (e) {
		console.log('Problems setting large '+e);
		console.error('Problems setting large',e);
	}
	this.set_printSpeed = function (value) {
		try {
			this.proxy.printSpeed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printSpeed '+e);
			console.error('Problems setting printSpeed',e);
		}
	};
	this.printSpeed_changed = function () {
		var value = this.printSpeed;
		return value;
	};
	try {
		this.printSpeed = new SFVec3f();
	} catch (e) {
		console.log('Problems setting printSpeed '+e);
		console.error('Problems setting printSpeed',e);
	}
	this.set_printZero = function (value) {
		try {
			this.proxy.printZero = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printZero '+e);
			console.error('Problems setting printZero',e);
		}
	};
	this.printZero_changed = function () {
		var value = this.printZero;
		return value;
	};
	try {
		this.printZero = new SFTime();
	} catch (e) {
		console.log('Problems setting printZero '+e);
		console.error('Problems setting printZero',e);
	}
	this.set_smallScale = function (value) {
		try {
			this.proxy.smallScale = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting smallScale '+e);
			console.error('Problems setting smallScale',e);
		}
	};
	this.smallScale_changed = function () {
		var value = this.smallScale;
		return value;
	};
	try {
		this.smallScale = new SFBool();
	} catch (e) {
		console.log('Problems setting smallScale '+e);
		console.error('Problems setting smallScale',e);
	}
	this.set_largeScale = function (value) {
		try {
			this.proxy.largeScale = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting largeScale '+e);
			console.error('Problems setting largeScale',e);
		}
	};
	this.largeScale_changed = function () {
		var value = this.largeScale;
		return value;
	};
	try {
		this.largeScale = new SFBool();
	} catch (e) {
		console.log('Problems setting largeScale '+e);
		console.error('Problems setting largeScale',e);
	}
	this.set_normalScale = function (value) {
		try {
			this.proxy.normalScale = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting normalScale '+e);
			console.error('Problems setting normalScale',e);
		}
	};
	this.normalScale_changed = function () {
		var value = this.normalScale;
		return value;
	};
	try {
		this.normalScale = new SFBool();
	} catch (e) {
		console.log('Problems setting normalScale '+e);
		console.error('Problems setting normalScale',e);
	}
	this.set_printSmallScale = function (value) {
		try {
			this.proxy.printSmallScale = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printSmallScale '+e);
			console.error('Problems setting printSmallScale',e);
		}
	};
	this.printSmallScale_changed = function () {
		var value = this.printSmallScale;
		return value;
	};
	try {
		this.printSmallScale = new SFBool();
	} catch (e) {
		console.log('Problems setting printSmallScale '+e);
		console.error('Problems setting printSmallScale',e);
	}
	this.set_printLargeScale = function (value) {
		try {
			this.proxy.printLargeScale = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printLargeScale '+e);
			console.error('Problems setting printLargeScale',e);
		}
	};
	this.printLargeScale_changed = function () {
		var value = this.printLargeScale;
		return value;
	};
	try {
		this.printLargeScale = new SFBool();
	} catch (e) {
		console.log('Problems setting printLargeScale '+e);
		console.error('Problems setting printLargeScale',e);
	}
	this.set_printNormalScale = function (value) {
		try {
			this.proxy.printNormalScale = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printNormalScale '+e);
			console.error('Problems setting printNormalScale',e);
		}
	};
	this.printNormalScale_changed = function () {
		var value = this.printNormalScale;
		return value;
	};
	try {
		this.printNormalScale = new SFBool();
	} catch (e) {
		console.log('Problems setting printNormalScale '+e);
		console.error('Problems setting printNormalScale',e);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'].initialize();
    if (X3DJSON.nodeUtil("Scene","TOUCH1")) {
X3DJSON.nodeUtil("Scene","TOUCH1").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'].normalScale(X3DJSON.nodeUtil("Scene","TOUCH1","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'].normalScale(X3DJSON.nodeUtil("Scene","TOUCH1","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCH1")) {
X3DJSON.nodeUtil("Scene","TOUCH1").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'].printNormalScale(X3DJSON.nodeUtil("Scene","TOUCH1","isOver"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'].printNormalScale(X3DJSON.nodeUtil("Scene","TOUCH1","isOver"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCH2")) {
X3DJSON.nodeUtil("Scene","TOUCH2").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'].smallScale(X3DJSON.nodeUtil("Scene","TOUCH2","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'].smallScale(X3DJSON.nodeUtil("Scene","TOUCH2","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCH2")) {
X3DJSON.nodeUtil("Scene","TOUCH2").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'].printSmallScale(X3DJSON.nodeUtil("Scene","TOUCH2","isOver"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'].printSmallScale(X3DJSON.nodeUtil("Scene","TOUCH2","isOver"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCH3")) {
X3DJSON.nodeUtil("Scene","TOUCH3").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'].largeScale(X3DJSON.nodeUtil("Scene","TOUCH3","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'].largeScale(X3DJSON.nodeUtil("Scene","TOUCH3","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCH3")) {
X3DJSON.nodeUtil("Scene","TOUCH3").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'].printLargeScale(X3DJSON.nodeUtil("Scene","TOUCH3","isOver"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'].printLargeScale(X3DJSON.nodeUtil("Scene","TOUCH3","isOver"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","PROX_SENSOR")) {
X3DJSON.nodeUtil("Scene","PROX_SENSOR").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'].printSpeed(X3DJSON.nodeUtil("Scene","PROX_SENSOR","position"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'].printSpeed(X3DJSON.nodeUtil("Scene","PROX_SENSOR","position"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","PROX_SENSOR")) {
X3DJSON.nodeUtil("Scene","PROX_SENSOR").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PROX_SENSOR")) {
X3DJSON.nodeUtil("Scene","PROX_SENSOR").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PROX_SENSOR")) {
X3DJSON.nodeUtil("Scene","PROX_SENSOR").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PROX_SENSOR")) {
X3DJSON.nodeUtil("Scene","PROX_SENSOR").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PROX_SENSOR")) {
X3DJSON.nodeUtil("Scene","PROX_SENSOR").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PROX_SENSOR")) {
X3DJSON.nodeUtil("Scene","PROX_SENSOR").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PROX_SENSOR")) {
X3DJSON.nodeUtil("Scene","PROX_SENSOR").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PROX_SENSOR")) {
X3DJSON.nodeUtil("Scene","PROX_SENSOR").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PROX_SENSOR")) {
X3DJSON.nodeUtil("Scene","PROX_SENSOR").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PROX_SENSOR")) {
X3DJSON.nodeUtil("Scene","PROX_SENSOR").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TIME")) {
X3DJSON.nodeUtil("Scene","TIME").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'].printZero(X3DJSON.nodeUtil("Scene","TIME","cycleTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'].printZero(X3DJSON.nodeUtil("Scene","TIME","cycleTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'].normalScale(X3DJSON.nodeUtil("Scene","TOUCH1","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'].printNormalScale(X3DJSON.nodeUtil("Scene","TOUCH1","isOver"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'].smallScale(X3DJSON.nodeUtil("Scene","TOUCH2","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'].printSmallScale(X3DJSON.nodeUtil("Scene","TOUCH2","isOver"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'].largeScale(X3DJSON.nodeUtil("Scene","TOUCH3","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'].printLargeScale(X3DJSON.nodeUtil("Scene","TOUCH3","isOver"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'].printSpeed(X3DJSON.nodeUtil("Scene","PROX_SENSOR","position"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_scaling.json']['CHANGEVIEW'].printZero(X3DJSON.nodeUtil("Scene","TIME","cycleTime"), __eventTime);