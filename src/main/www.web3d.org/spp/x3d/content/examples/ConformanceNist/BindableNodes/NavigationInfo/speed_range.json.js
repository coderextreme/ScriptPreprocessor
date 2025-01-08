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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT'] = function() {
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
	this.set_trans1 = function (value) {
		try {
			this.proxy.trans1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting trans1 '+e);
			console.error('Problems setting trans1',e);
		}
	};
	this.trans1_changed = function () {
		var value = this.trans1;
		return value;
	};
	try {
		this.trans1 = X3DJSON.nodeUtil("Scene","TRANS1");
	} catch (e) {
		console.log('Problems setting trans1 '+e);
		console.error('Problems setting trans1',e);
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
	this.set_typestring2 = function (value) {
		try {
			this.proxy.typestring2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting typestring2 '+e);
			console.error('Problems setting typestring2',e);
		}
	};
	this.typestring2_changed = function () {
		var value = this.typestring2;
		return value;
	};
	try {
		this.typestring2 = X3DJSON.nodeUtil("Scene","TYPESTRING2");
	} catch (e) {
		console.log('Problems setting typestring2 '+e);
		console.error('Problems setting typestring2',e);
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
	this.set_view0 = function (value) {
		try {
			this.proxy.view0 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting view0 '+e);
			console.error('Problems setting view0',e);
		}
	};
	this.view0_changed = function () {
		var value = this.view0;
		return value;
	};
	try {
		this.view0 = X3DJSON.nodeUtil("Scene","VIEW0");
	} catch (e) {
		console.log('Problems setting view0 '+e);
		console.error('Problems setting view0',e);
	}
	this.set_view1 = function (value) {
		try {
			this.proxy.view1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting view1 '+e);
			console.error('Problems setting view1',e);
		}
	};
	this.view1_changed = function () {
		var value = this.view1;
		return value;
	};
	try {
		this.view1 = X3DJSON.nodeUtil("Scene","VIEW1");
	} catch (e) {
		console.log('Problems setting view1 '+e);
		console.error('Problems setting view1',e);
	}
	this.set_view10 = function (value) {
		try {
			this.proxy.view10 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting view10 '+e);
			console.error('Problems setting view10',e);
		}
	};
	this.view10_changed = function () {
		var value = this.view10;
		return value;
	};
	try {
		this.view10 = X3DJSON.nodeUtil("Scene","VIEW10");
	} catch (e) {
		console.log('Problems setting view10 '+e);
		console.error('Problems setting view10',e);
	}
	this.set_nav1 = function (value) {
		try {
			this.proxy.nav1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting nav1 '+e);
			console.error('Problems setting nav1',e);
		}
	};
	this.nav1_changed = function () {
		var value = this.nav1;
		return value;
	};
	try {
		this.nav1 = X3DJSON.nodeUtil("Scene","NAV1");
	} catch (e) {
		console.log('Problems setting nav1 '+e);
		console.error('Problems setting nav1',e);
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
	this.set_setZeroSpeedString = function (value) {
		try {
			this.proxy.setZeroSpeedString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setZeroSpeedString '+e);
			console.error('Problems setting setZeroSpeedString',e);
		}
	};
	this.setZeroSpeedString_changed = function () {
		var value = this.setZeroSpeedString;
		return value;
	};
	try {
		this.setZeroSpeedString = new MFString("Click to set speed to 0 meters/sec");
	} catch (e) {
		console.log('Problems setting setZeroSpeedString '+e);
		console.error('Problems setting setZeroSpeedString',e);
	}
	this.set_speedSetToZeroString = function (value) {
		try {
			this.proxy.speedSetToZeroString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting speedSetToZeroString '+e);
			console.error('Problems setting speedSetToZeroString',e);
		}
	};
	this.speedSetToZeroString_changed = function () {
		var value = this.speedSetToZeroString;
		return value;
	};
	try {
		this.speedSetToZeroString = new MFString("Speed set to 0 meters/sec");
	} catch (e) {
		console.log('Problems setting speedSetToZeroString '+e);
		console.error('Problems setting speedSetToZeroString',e);
	}
	this.set_setHundredSpeedString = function (value) {
		try {
			this.proxy.setHundredSpeedString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setHundredSpeedString '+e);
			console.error('Problems setting setHundredSpeedString',e);
		}
	};
	this.setHundredSpeedString_changed = function () {
		var value = this.setHundredSpeedString;
		return value;
	};
	try {
		this.setHundredSpeedString = new MFString("Click to set speed to 100 meters/sec");
	} catch (e) {
		console.log('Problems setting setHundredSpeedString '+e);
		console.error('Problems setting setHundredSpeedString',e);
	}
	this.set_speedSetToHundredString = function (value) {
		try {
			this.proxy.speedSetToHundredString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting speedSetToHundredString '+e);
			console.error('Problems setting speedSetToHundredString',e);
		}
	};
	this.speedSetToHundredString_changed = function () {
		var value = this.speedSetToHundredString;
		return value;
	};
	try {
		this.speedSetToHundredString = new MFString("Speed set to 100 meters/sec");
	} catch (e) {
		console.log('Problems setting speedSetToHundredString '+e);
		console.error('Problems setting speedSetToHundredString',e);
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
	this.set_changeSpeed0 = function (value) {
		try {
			this.proxy.changeSpeed0 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting changeSpeed0 '+e);
			console.error('Problems setting changeSpeed0',e);
		}
	};
	this.changeSpeed0_changed = function () {
		var value = this.changeSpeed0;
		return value;
	};
	try {
		this.changeSpeed0 = new SFBool();
	} catch (e) {
		console.log('Problems setting changeSpeed0 '+e);
		console.error('Problems setting changeSpeed0',e);
	}
	this.set_changeSpeed100 = function (value) {
		try {
			this.proxy.changeSpeed100 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting changeSpeed100 '+e);
			console.error('Problems setting changeSpeed100',e);
		}
	};
	this.changeSpeed100_changed = function () {
		var value = this.changeSpeed100;
		return value;
	};
	try {
		this.changeSpeed100 = new SFBool();
	} catch (e) {
		console.log('Problems setting changeSpeed100 '+e);
		console.error('Problems setting changeSpeed100',e);
	}
	this.set_printZeroSpeed = function (value) {
		try {
			this.proxy.printZeroSpeed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printZeroSpeed '+e);
			console.error('Problems setting printZeroSpeed',e);
		}
	};
	this.printZeroSpeed_changed = function () {
		var value = this.printZeroSpeed;
		return value;
	};
	try {
		this.printZeroSpeed = new SFBool();
	} catch (e) {
		console.log('Problems setting printZeroSpeed '+e);
		console.error('Problems setting printZeroSpeed',e);
	}
	this.set_printHundredSpeed = function (value) {
		try {
			this.proxy.printHundredSpeed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printHundredSpeed '+e);
			console.error('Problems setting printHundredSpeed',e);
		}
	};
	this.printHundredSpeed_changed = function () {
		var value = this.printHundredSpeed;
		return value;
	};
	try {
		this.printHundredSpeed = new SFBool();
	} catch (e) {
		console.log('Problems setting printHundredSpeed '+e);
		console.error('Problems setting printHundredSpeed',e);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT'].initialize();
    if (X3DJSON.nodeUtil("Scene","TOUCH0")) {
X3DJSON.nodeUtil("Scene","TOUCH0").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT'].changeSpeed0(X3DJSON.nodeUtil("Scene","TOUCH0","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT'].changeSpeed0(X3DJSON.nodeUtil("Scene","TOUCH0","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCH0")) {
X3DJSON.nodeUtil("Scene","TOUCH0").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT'].printZeroSpeed(X3DJSON.nodeUtil("Scene","TOUCH0","isOver"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT'].printZeroSpeed(X3DJSON.nodeUtil("Scene","TOUCH0","isOver"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCH100")) {
X3DJSON.nodeUtil("Scene","TOUCH100").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT'].changeSpeed100(X3DJSON.nodeUtil("Scene","TOUCH100","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT'].changeSpeed100(X3DJSON.nodeUtil("Scene","TOUCH100","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCH100")) {
X3DJSON.nodeUtil("Scene","TOUCH100").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT'].printHundredSpeed(X3DJSON.nodeUtil("Scene","TOUCH100","isOver"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT'].printHundredSpeed(X3DJSON.nodeUtil("Scene","TOUCH100","isOver"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","PROX_SENSOR")) {
X3DJSON.nodeUtil("Scene","PROX_SENSOR").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT'].printSpeed(X3DJSON.nodeUtil("Scene","PROX_SENSOR","position"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT'].printSpeed(X3DJSON.nodeUtil("Scene","PROX_SENSOR","position"), __eventTime);
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
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT'].printZero(X3DJSON.nodeUtil("Scene","TIME","cycleTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT'].printZero(X3DJSON.nodeUtil("Scene","TIME","cycleTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT'].changeSpeed0(X3DJSON.nodeUtil("Scene","TOUCH0","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT'].printZeroSpeed(X3DJSON.nodeUtil("Scene","TOUCH0","isOver"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT'].changeSpeed100(X3DJSON.nodeUtil("Scene","TOUCH100","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT'].printHundredSpeed(X3DJSON.nodeUtil("Scene","TOUCH100","isOver"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT'].printSpeed(X3DJSON.nodeUtil("Scene","PROX_SENSOR","position"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/BindableNodes/NavigationInfo/speed_range.json']['SPEEDSCRIPT'].printZero(X3DJSON.nodeUtil("Scene","TIME","cycleTime"), __eventTime);