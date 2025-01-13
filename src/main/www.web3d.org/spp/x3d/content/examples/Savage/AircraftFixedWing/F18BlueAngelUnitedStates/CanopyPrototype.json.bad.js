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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'] = function() {
	this.set_canopyOpen = function (value) {
		try {
			this.proxy.canopyOpen = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting canopyOpen '+e);
			console.error('Problems setting canopyOpen',e);
		}
	};
	this.canopyOpen_changed = function () {
		var value = this.canopyOpen;
		return value;
	};
	try {
		this.canopyOpen = new SFBool();
	} catch (e) {
		console.log('Problems setting canopyOpen '+e);
		console.error('Problems setting canopyOpen',e);
	}
	this.set_canopyOut = function (value) {
		try {
			this.proxy.canopyOut = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting canopyOut '+e);
			console.error('Problems setting canopyOut',e);
		}
	};
	this.canopyOut_changed = function () {
		var value = this.canopyOut;
		return value;
	};
	try {
		this.canopyOut = new SFBool();
	} catch (e) {
		console.log('Problems setting canopyOut '+e);
		console.error('Problems setting canopyOut',e);
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
		this.kV1 = new SFRotation(0,1,0,0);
	} catch (e) {
		console.log('Problems setting kV1 '+e);
		console.error('Problems setting kV1',e);
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
		this.kV2 = new SFRotation(0,1,0,0);
	} catch (e) {
		console.log('Problems setting kV2 '+e);
		console.error('Problems setting kV2',e);
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
		this.kV3 = new SFRotation(0,1,0,0);
	} catch (e) {
		console.log('Problems setting kV3 '+e);
		console.error('Problems setting kV3',e);
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

	this.canopyOpen = function (value, timeStamp) {

 if (value == true)       //Canopy Open
 {
      	this.tracePrint ('[Canopy Open] ' );
      	this.tracePrint ('value = ' + value);
      	canapyOut = true;    	

      	this.proxy.kV1 = new SFRotation (new SFVec3f (1, 0, 0), 0.0);  
     	this.proxy.kV2 = new SFRotation (new SFVec3f (1, 0, 0), 0.52);
      	this.proxy.kV3 = new SFRotation(new SFVec3f (1, 0, 0), 0.79);
      	this.proxy.keyValue = new MFRotation(this.proxy.kV1, this.proxy.kV2, this.proxy.kV3);  
      	//this.tracePrint ('[this.proxy.keyValue = ]' + this.proxy.keyValue);      

 }
 else        //Canopy Close
 {
      	this.tracePrint ('[Canopy Close] ' );
      	this.tracePrint ('value = ' + value);
      	this.proxy.canopyOut = true;
     	
      	this.proxy.keyValue = new MFRotation(this.proxy.kV3, this.proxy.kV2, this.proxy.kV1);  
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
	if (this.proxy.traceEnabled) console.error ('[CanopyPrototype] ' + outputString);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript']['ACTION']['clockStartTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript']['ACTION']['clockStartTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript']['ACTION']['clockStartTime'].push(function(property, value) {
		if (property === 'clockStartTime') {
			X3DJSON.nodeUtil("Scene","Clock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].clockStartTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].clockStartTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].clockStartTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Clock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].clockStartTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].clockStartTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].clockStartTime, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript']['ACTION']['canopyOut'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript']['ACTION']['canopyOut'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript']['ACTION']['canopyOut'].push(function(property, value) {
		if (property === 'canopyOut') {
			X3DJSON.nodeUtil("Scene","Clock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].canopyOut === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].canopyOut() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].canopyOut, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Clock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].canopyOut === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].canopyOut() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].canopyOut, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript']['ACTION']['keyValue'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript']['ACTION']['keyValue'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript']['ACTION']['keyValue'].push(function(property, value) {
		if (property === 'keyValue') {
			X3DJSON.nodeUtil("Scene","CanopyInterpolator","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].keyValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].keyValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].keyValue, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","CanopyInterpolator","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].keyValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].keyValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].keyValue, __eventTime);
    if (X3DJSON.nodeUtil("Scene","Clock")) {
X3DJSON.nodeUtil("Scene","Clock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Clock")) {
X3DJSON.nodeUtil("Scene","Clock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].set_fraction(X3DJSON.nodeUtil("Scene","Clock","fraction"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].set_fraction(X3DJSON.nodeUtil("Scene","Clock","fraction"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","CanopyInterpolator")) {
X3DJSON.nodeUtil("Scene","CanopyInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON.nodeUtil("Scene","Clock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].clockStartTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].clockStartTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].clockStartTime, __eventTime);
			X3DJSON.nodeUtil("Scene","Clock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].canopyOut === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].canopyOut() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].canopyOut, __eventTime);
			X3DJSON.nodeUtil("Scene","CanopyInterpolator","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].keyValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].keyValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].keyValue, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftFixedWing/F18BlueAngelUnitedStates/CanopyPrototype.json']['CanopyScript'].set_fraction(X3DJSON.nodeUtil("Scene","Clock","fraction"), __eventTime);