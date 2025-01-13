var x3dom = require('../node/fields.js');
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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'] = function() {
	this.set_gearup = function (value) {
		try {
			this.proxy.gearup = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting gearup '+e);
			console.error('Problems setting gearup',e);
		}
	};
	this.gearup_changed = function () {
		var value = this.gearup;
		return value;
	};
	try {
		this.gearup = new SFBool();
	} catch (e) {
		console.log('Problems setting gearup '+e);
		console.error('Problems setting gearup',e);
	}
	this.set_gearupOut = function (value) {
		try {
			this.proxy.gearupOut = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting gearupOut '+e);
			console.error('Problems setting gearupOut',e);
		}
	};
	this.gearupOut_changed = function () {
		var value = this.gearupOut;
		return value;
	};
	try {
		this.gearupOut = new SFBool();
	} catch (e) {
		console.log('Problems setting gearupOut '+e);
		console.error('Problems setting gearupOut',e);
	}
	this.set_keyValue = function (value) {
		try {
			this.proxy.keyValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting keyValue '+e);
			console.error('Problems setting keyValue',e);
		}
	};
	this.keyValue_changed = function () {
		var value = this.keyValue;
		return value;
	};
	try {
		this.keyValue = new MFRotation();
	} catch (e) {
		console.log('Problems setting keyValue '+e);
		console.error('Problems setting keyValue',e);
	}
	this.set_keyValue2 = function (value) {
		try {
			this.proxy.keyValue2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting keyValue2 '+e);
			console.error('Problems setting keyValue2',e);
		}
	};
	this.keyValue2_changed = function () {
		var value = this.keyValue2;
		return value;
	};
	try {
		this.keyValue2 = new MFRotation();
	} catch (e) {
		console.log('Problems setting keyValue2 '+e);
		console.error('Problems setting keyValue2',e);
	}
	this.set_kV1 = function (value) {
		try {
			this.proxy.kV1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting kV1 '+e);
			console.error('Problems setting kV1',e);
		}
	};
	this.kV1_changed = function () {
		var value = this.kV1;
		return value;
	};
	try {
		this.kV1 = new SFRotation();
	} catch (e) {
		console.log('Problems setting kV1 '+e);
		console.error('Problems setting kV1',e);
	}
	this.set_kV1Second = function (value) {
		try {
			this.proxy.kV1Second = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting kV1Second '+e);
			console.error('Problems setting kV1Second',e);
		}
	};
	this.kV1Second_changed = function () {
		var value = this.kV1Second;
		return value;
	};
	try {
		this.kV1Second = new SFRotation();
	} catch (e) {
		console.log('Problems setting kV1Second '+e);
		console.error('Problems setting kV1Second',e);
	}
	this.set_kV2 = function (value) {
		try {
			this.proxy.kV2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting kV2 '+e);
			console.error('Problems setting kV2',e);
		}
	};
	this.kV2_changed = function () {
		var value = this.kV2;
		return value;
	};
	try {
		this.kV2 = new SFRotation();
	} catch (e) {
		console.log('Problems setting kV2 '+e);
		console.error('Problems setting kV2',e);
	}
	this.set_kV2Second = function (value) {
		try {
			this.proxy.kV2Second = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting kV2Second '+e);
			console.error('Problems setting kV2Second',e);
		}
	};
	this.kV2Second_changed = function () {
		var value = this.kV2Second;
		return value;
	};
	try {
		this.kV2Second = new SFRotation();
	} catch (e) {
		console.log('Problems setting kV2Second '+e);
		console.error('Problems setting kV2Second',e);
	}
	this.set_kV3 = function (value) {
		try {
			this.proxy.kV3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting kV3 '+e);
			console.error('Problems setting kV3',e);
		}
	};
	this.kV3_changed = function () {
		var value = this.kV3;
		return value;
	};
	try {
		this.kV3 = new SFRotation();
	} catch (e) {
		console.log('Problems setting kV3 '+e);
		console.error('Problems setting kV3',e);
	}
	this.set_kV3Second = function (value) {
		try {
			this.proxy.kV3Second = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting kV3Second '+e);
			console.error('Problems setting kV3Second',e);
		}
	};
	this.kV3Second_changed = function () {
		var value = this.kV3Second;
		return value;
	};
	try {
		this.kV3Second = new SFRotation();
	} catch (e) {
		console.log('Problems setting kV3Second '+e);
		console.error('Problems setting kV3Second',e);
	}
	this.set_kV4 = function (value) {
		try {
			this.proxy.kV4 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting kV4 '+e);
			console.error('Problems setting kV4',e);
		}
	};
	this.kV4_changed = function () {
		var value = this.kV4;
		return value;
	};
	try {
		this.kV4 = new SFRotation();
	} catch (e) {
		console.log('Problems setting kV4 '+e);
		console.error('Problems setting kV4',e);
	}
	this.set_kV4Second = function (value) {
		try {
			this.proxy.kV4Second = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting kV4Second '+e);
			console.error('Problems setting kV4Second',e);
		}
	};
	this.kV4Second_changed = function () {
		var value = this.kV4Second;
		return value;
	};
	try {
		this.kV4Second = new SFRotation();
	} catch (e) {
		console.log('Problems setting kV4Second '+e);
		console.error('Problems setting kV4Second',e);
	}
	this.set_fraction = function (value) {
		try {
			this.proxy.fraction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fraction '+e);
			console.error('Problems setting fraction',e);
		}
	};
	this.fraction_changed = function () {
		var value = this.fraction;
		return value;
	};
	try {
		this.fraction = undefined;
	} catch (e) {
		console.log('Problems setting fraction '+e);
		console.error('Problems setting fraction',e);
	}
	this.set_animationStartTime = function (value) {
		try {
			this.proxy.animationStartTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting animationStartTime '+e);
			console.error('Problems setting animationStartTime',e);
		}
	};
	this.animationStartTime_changed = function () {
		var value = this.animationStartTime;
		return value;
	};
	try {
		this.animationStartTime = new SFTime();
	} catch (e) {
		console.log('Problems setting animationStartTime '+e);
		console.error('Problems setting animationStartTime',e);
	}
	this.set_clockStartTime = function (value) {
		try {
			this.proxy.clockStartTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting clockStartTime '+e);
			console.error('Problems setting clockStartTime',e);
		}
	};
	this.clockStartTime_changed = function () {
		var value = this.clockStartTime;
		return value;
	};
	try {
		this.clockStartTime = new SFTime();
	} catch (e) {
		console.log('Problems setting clockStartTime '+e);
		console.error('Problems setting clockStartTime',e);
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
		this.traceEnabled = new SFBool();
	} catch (e) {
		console.log('Problems setting traceEnabled '+e);
		console.error('Problems setting traceEnabled',e);
	}


ecmascript:

	this.gearup = function (value, timeStamp) {

 if (value == true)       //Gear Up
 {
      	this.tracePrint ('[GearUp] ' );
      	this.tracePrint ('value = ' + value);
      	this.proxy.gearupOut = true;    	

      	this.proxy.kV1 = new SFRotation (new SFVec3f (0, -1, 0), 0.0);  
     	this.proxy.kV2 = new SFRotation (new SFVec3f (0, -1, 0), 0.44);
      	this.proxy.kV3 = new SFRotation(new SFVec3f (0, -1, 0), 1.22);
        this.proxy.kV4 = new SFRotation(new SFVec3f (0.21, -0.96, -0.19), 1.72);
      	this.proxy.keyValue = new MFRotation(this.proxy.kV1, this.proxy.kV2, this.proxy.kV3, this.proxy.kV4);  

	this.proxy.kV1Second = new SFRotation (new SFVec3f (0, 0, -1), 0.0);  
     	this.proxy.kV2Second = new SFRotation (new SFVec3f (0, 0, -1), 0.44);
      	this.proxy.kV3Second = new SFRotation(new SFVec3f (0, 0, -1), 0.80);
        this.proxy.kV4Second = new SFRotation(new SFVec3f (-0.21, 0.18, -0.95), 1.62);
      	this.proxy.keyValue2 = new MFRotation(this.proxy.kV1Second, this.proxy.kV2Second, this.proxy.kV3Second, this.proxy.kV4Second);  
      	//this.tracePrint ('[this.proxy.keyValue = ]' + this.proxy.keyValue);      

 }
 else        //Gear Down
 {
      	this.tracePrint ('[GearDown] ' );
      	this.tracePrint ('value = ' + value);
      	this.proxy.gearupOut = true;
     	
      	this.proxy.keyValue = new MFRotation(this.proxy.kV4, this.proxy.kV3, this.proxy.kV2, this.proxy.kV1);  
        this.proxy.keyValue2 = new MFRotation(this.proxy.kV4Second, this.proxy.kV3Second, this.proxy.kV2Second, this.proxy.kV1Second);  
      	//this.tracePrint ('[this.proxy.keyValue = ]' + this.proxy.keyValue);             
 }

}
;

	this.set_fraction = function (value, timeStamp)
{
	//this.tracePrint('time fraction = ' + value);
}
;

	this.animationStartTime = function (value, timeStamp)
{	
	this.tracePrint('The Start Time is: ' + value);
	this.proxy.clockStartTime = value;
}
;

	this.tracePrint = function (outputString)
{
	if (this.proxy.traceEnabled) console.error ('[WheelsRearRightPrototype] ' + outputString);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].initialize();
    if (X3DJSON.nodeUtil("Scene","WheelTouchSensor")) {
X3DJSON.nodeUtil("Scene","WheelTouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Clock")) {
X3DJSON.nodeUtil("Scene","Clock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","WheelInterpolator")) {
X3DJSON.nodeUtil("Scene","WheelInterpolator").addEventListener('outputchange', function(event) {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript']['ACTION']['clockStartTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript']['ACTION']['clockStartTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript']['ACTION']['clockStartTime'].push(function(property, value) {
		if (property === 'clockStartTime') {
			X3DJSON.nodeUtil("Scene","ClockAxleGearUpDownFirst","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].clockStartTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].clockStartTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].clockStartTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockAxleGearUpDownFirst","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].clockStartTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].clockStartTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].clockStartTime, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript']['ACTION']['clockStartTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript']['ACTION']['clockStartTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript']['ACTION']['clockStartTime'].push(function(property, value) {
		if (property === 'clockStartTime') {
			X3DJSON.nodeUtil("Scene","ClockAxleGearUpDownSecond","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].clockStartTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].clockStartTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].clockStartTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockAxleGearUpDownSecond","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].clockStartTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].clockStartTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].clockStartTime, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript']['ACTION']['gearupOut'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript']['ACTION']['gearupOut'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript']['ACTION']['gearupOut'].push(function(property, value) {
		if (property === 'gearupOut') {
			X3DJSON.nodeUtil("Scene","ClockAxleGearUpDownFirst","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].gearupOut === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].gearupOut() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].gearupOut, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockAxleGearUpDownFirst","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].gearupOut === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].gearupOut() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].gearupOut, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript']['ACTION']['gearupOut'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript']['ACTION']['gearupOut'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript']['ACTION']['gearupOut'].push(function(property, value) {
		if (property === 'gearupOut') {
			X3DJSON.nodeUtil("Scene","ClockAxleGearUpDownSecond","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].gearupOut === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].gearupOut() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].gearupOut, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockAxleGearUpDownSecond","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].gearupOut === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].gearupOut() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].gearupOut, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript']['ACTION']['keyValue'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript']['ACTION']['keyValue'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript']['ACTION']['keyValue'].push(function(property, value) {
		if (property === 'keyValue') {
			X3DJSON.nodeUtil("Scene","GearUpDownInterpolator","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].keyValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].keyValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].keyValue, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","GearUpDownInterpolator","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].keyValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].keyValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].keyValue, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript']['ACTION']['keyValue2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript']['ACTION']['keyValue2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript']['ACTION']['keyValue2'].push(function(property, value) {
		if (property === 'keyValue2') {
			X3DJSON.nodeUtil("Scene","GearUpDownInterpolator2","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].keyValue2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].keyValue2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].keyValue2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","GearUpDownInterpolator2","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].keyValue2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].keyValue2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].keyValue2, __eventTime);
    if (X3DJSON.nodeUtil("Scene","ClockAxleGearUpDownFirst")) {
X3DJSON.nodeUtil("Scene","ClockAxleGearUpDownFirst").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockAxleGearUpDownSecond")) {
X3DJSON.nodeUtil("Scene","ClockAxleGearUpDownSecond").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockAxleGearUpDownFirst")) {
X3DJSON.nodeUtil("Scene","ClockAxleGearUpDownFirst").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].set_fraction(X3DJSON.nodeUtil("Scene","ClockAxleGearUpDownFirst","fraction"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].set_fraction(X3DJSON.nodeUtil("Scene","ClockAxleGearUpDownFirst","fraction"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","GearUpDownInterpolator")) {
X3DJSON.nodeUtil("Scene","GearUpDownInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","GearUpDownInterpolator2")) {
X3DJSON.nodeUtil("Scene","GearUpDownInterpolator2").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON.nodeUtil("Scene","ClockAxleGearUpDownFirst","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].clockStartTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].clockStartTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].clockStartTime, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockAxleGearUpDownSecond","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].clockStartTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].clockStartTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].clockStartTime, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockAxleGearUpDownFirst","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].gearupOut === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].gearupOut() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].gearupOut, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockAxleGearUpDownSecond","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].gearupOut === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].gearupOut() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].gearupOut, __eventTime);
			X3DJSON.nodeUtil("Scene","GearUpDownInterpolator","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].keyValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].keyValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].keyValue, __eventTime);
			X3DJSON.nodeUtil("Scene","GearUpDownInterpolator2","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].keyValue2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].keyValue2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].keyValue2, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/WheelsRearRightPrototype.json']['GearUpDownScript'].set_fraction(X3DJSON.nodeUtil("Scene","ClockAxleGearUpDownFirst","fraction"), __eventTime);