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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'] = function() {
	this.set_inFlight = function (value) {
		try {
			this.proxy.inFlight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting inFlight '+e);
			console.error('Problems setting inFlight',e);
		}
	};
	this.inFlight_changed = function () {
		var value = this.inFlight;
		return value;
	};
	try {
		this.inFlight = new SFBool();
	} catch (e) {
		console.log('Problems setting inFlight '+e);
		console.error('Problems setting inFlight',e);
	}
	this.set_status = function (value) {
		try {
			this.proxy.status = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting status '+e);
			console.error('Problems setting status',e);
		}
	};
	this.status_changed = function () {
		var value = this.status;
		return value;
	};
	try {
		this.status = new SFBool();
	} catch (e) {
		console.log('Problems setting status '+e);
		console.error('Problems setting status',e);
	}


ecmascript:

	this.inFlight = function (value, ts) {

   this.proxy.status = value;

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'] = function() {
	this.set_touchedGreen = function (value) {
		try {
			this.proxy.touchedGreen = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting touchedGreen '+e);
			console.error('Problems setting touchedGreen',e);
		}
	};
	this.touchedGreen_changed = function () {
		var value = this.touchedGreen;
		return value;
	};
	try {
		this.touchedGreen = new SFBool();
	} catch (e) {
		console.log('Problems setting touchedGreen '+e);
		console.error('Problems setting touchedGreen',e);
	}
	this.set_touchedCamouflage = function (value) {
		try {
			this.proxy.touchedCamouflage = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting touchedCamouflage '+e);
			console.error('Problems setting touchedCamouflage',e);
		}
	};
	this.touchedCamouflage_changed = function () {
		var value = this.touchedCamouflage;
		return value;
	};
	try {
		this.touchedCamouflage = new SFBool();
	} catch (e) {
		console.log('Problems setting touchedCamouflage '+e);
		console.error('Problems setting touchedCamouflage',e);
	}
	this.set_touchedGrey = function (value) {
		try {
			this.proxy.touchedGrey = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting touchedGrey '+e);
			console.error('Problems setting touchedGrey',e);
		}
	};
	this.touchedGrey_changed = function () {
		var value = this.touchedGrey;
		return value;
	};
	try {
		this.touchedGrey = new SFBool();
	} catch (e) {
		console.log('Problems setting touchedGrey '+e);
		console.error('Problems setting touchedGrey',e);
	}
	this.set_selection = function (value) {
		try {
			this.proxy.selection = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting selection '+e);
			console.error('Problems setting selection',e);
		}
	};
	this.selection_changed = function () {
		var value = this.selection;
		return value;
	};
	try {
		this.selection = new SFInt32();
	} catch (e) {
		console.log('Problems setting selection '+e);
		console.error('Problems setting selection',e);
	}
	this.set_greenSelectionColor = function (value) {
		try {
			this.proxy.greenSelectionColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting greenSelectionColor '+e);
			console.error('Problems setting greenSelectionColor',e);
		}
	};
	this.greenSelectionColor_changed = function () {
		var value = this.greenSelectionColor;
		return value;
	};
	try {
		this.greenSelectionColor = new SFColor();
	} catch (e) {
		console.log('Problems setting greenSelectionColor '+e);
		console.error('Problems setting greenSelectionColor',e);
	}
	this.set_camouflageSelectionColor = function (value) {
		try {
			this.proxy.camouflageSelectionColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting camouflageSelectionColor '+e);
			console.error('Problems setting camouflageSelectionColor',e);
		}
	};
	this.camouflageSelectionColor_changed = function () {
		var value = this.camouflageSelectionColor;
		return value;
	};
	try {
		this.camouflageSelectionColor = new SFColor();
	} catch (e) {
		console.log('Problems setting camouflageSelectionColor '+e);
		console.error('Problems setting camouflageSelectionColor',e);
	}
	this.set_greySelectionColor = function (value) {
		try {
			this.proxy.greySelectionColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting greySelectionColor '+e);
			console.error('Problems setting greySelectionColor',e);
		}
	};
	this.greySelectionColor_changed = function () {
		var value = this.greySelectionColor;
		return value;
	};
	try {
		this.greySelectionColor = new SFColor();
	} catch (e) {
		console.log('Problems setting greySelectionColor '+e);
		console.error('Problems setting greySelectionColor',e);
	}


ecmascript:  

	this.touchedGreen = function (value, ts) 
{
	this.proxy.selection = 0;
	this.proxy.greenSelectionColor = new SFColor(0, 0.8, 0);
	this.proxy.camouflageSelectionColor = new SFColor(0.8, 0, 0);
	this.proxy.greySelectionColor = new SFColor(0.8, 0, 0);
};

	this.touchedCamouflage = function (value, ts) 
{
	this.proxy.selection = 1;
	this.proxy.greenSelectionColor = new SFColor(0.8, 0, 0);
	this.proxy.camouflageSelectionColor = new SFColor(0, 0.8, 0);
	this.proxy.greySelectionColor = new SFColor(0.8, 0, 0);
};

	this.touchedGrey = function (value, ts) 
{
	this.proxy.selection = 2;
	this.proxy.greenSelectionColor = new SFColor(0.8, 0, 0);
	this.proxy.camouflageSelectionColor = new SFColor(0.8, 0, 0);
	this.proxy.greySelectionColor = new SFColor(0, 0.8, 0);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript']['ACTION']['status'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript']['ACTION']['status'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript']['ACTION']['status'].push(function(property, value) {
		if (property === 'status') {
			X3DJSON.nodeUtil("Scene","HeloFlyingAudioClip","loop",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","HeloFlyingAudioClip","loop",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript']['ACTION']['status'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript']['ACTION']['status'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript']['ACTION']['status'].push(function(property, value) {
		if (property === 'status') {
			X3DJSON.nodeUtil("Scene","MainRotor","rotationOn",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","MainRotor","rotationOn",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript']['ACTION']['status'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript']['ACTION']['status'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript']['ACTION']['status'].push(function(property, value) {
		if (property === 'status') {
			X3DJSON.nodeUtil("Scene","TailRotor","rotationOn",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TailRotor","rotationOn",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript']['ACTION']['status'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript']['ACTION']['status'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript']['ACTION']['status'].push(function(property, value) {
		if (property === 'status') {
			X3DJSON.nodeUtil("Scene","BottomACLightClock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BottomACLightClock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript']['ACTION']['status'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript']['ACTION']['status'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript']['ACTION']['status'].push(function(property, value) {
		if (property === 'status') {
			X3DJSON.nodeUtil("Scene","TopACLightClock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TopACLightClock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status, __eventTime);
    if (X3DJSON.nodeUtil("Scene","BottomACLightClock")) {
X3DJSON.nodeUtil("Scene","BottomACLightClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BottomLightColorPath")) {
X3DJSON.nodeUtil("Scene","BottomLightColorPath").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TopACLightClock")) {
X3DJSON.nodeUtil("Scene","TopACLightClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TopLightColorPath")) {
X3DJSON.nodeUtil("Scene","TopLightColorPath").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TOUCH_Green")) {
X3DJSON.nodeUtil("Scene","TOUCH_Green").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].touchedGreen(X3DJSON.nodeUtil("Scene","TOUCH_Green","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].touchedGreen(X3DJSON.nodeUtil("Scene","TOUCH_Green","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCH_Camouflage")) {
X3DJSON.nodeUtil("Scene","TOUCH_Camouflage").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].touchedCamouflage(X3DJSON.nodeUtil("Scene","TOUCH_Camouflage","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].touchedCamouflage(X3DJSON.nodeUtil("Scene","TOUCH_Camouflage","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCH_Grey")) {
X3DJSON.nodeUtil("Scene","TOUCH_Grey").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].touchedGrey(X3DJSON.nodeUtil("Scene","TOUCH_Grey","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].touchedGrey(X3DJSON.nodeUtil("Scene","TOUCH_Grey","isActive"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION']['ACTION']['greenSelectionColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION']['ACTION']['greenSelectionColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION']['ACTION']['greenSelectionColor'].push(function(property, value) {
		if (property === 'greenSelectionColor') {
			X3DJSON.nodeUtil("Scene","MATERIAL_Green","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].greenSelectionColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].greenSelectionColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].greenSelectionColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","MATERIAL_Green","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].greenSelectionColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].greenSelectionColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].greenSelectionColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION']['ACTION']['camouflageSelectionColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION']['ACTION']['camouflageSelectionColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION']['ACTION']['camouflageSelectionColor'].push(function(property, value) {
		if (property === 'camouflageSelectionColor') {
			X3DJSON.nodeUtil("Scene","MATERIAL_Camouflage","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].camouflageSelectionColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].camouflageSelectionColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].camouflageSelectionColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","MATERIAL_Camouflage","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].camouflageSelectionColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].camouflageSelectionColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].camouflageSelectionColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION']['ACTION']['greySelectionColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION']['ACTION']['greySelectionColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION']['ACTION']['greySelectionColor'].push(function(property, value) {
		if (property === 'greySelectionColor') {
			X3DJSON.nodeUtil("Scene","MATERIAL_Grey","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].greySelectionColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].greySelectionColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].greySelectionColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","MATERIAL_Grey","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].greySelectionColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].greySelectionColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].greySelectionColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION']['ACTION']['selection'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION']['ACTION']['selection'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION']['ACTION']['selection'].push(function(property, value) {
		if (property === 'selection') {
			X3DJSON.nodeUtil("Scene","EXAMPLE_SWITCH","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].selection === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].selection() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].selection, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","EXAMPLE_SWITCH","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].selection === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].selection() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].selection, __eventTime);
			X3DJSON.nodeUtil("Scene","HeloFlyingAudioClip","loop",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status, __eventTime);
			X3DJSON.nodeUtil("Scene","MainRotor","rotationOn",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status, __eventTime);
			X3DJSON.nodeUtil("Scene","TailRotor","rotationOn",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status, __eventTime);
			X3DJSON.nodeUtil("Scene","BottomACLightClock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status, __eventTime);
			X3DJSON.nodeUtil("Scene","TopACLightClock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['InFlightStatusScript'].status, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].touchedGreen(X3DJSON.nodeUtil("Scene","TOUCH_Green","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].touchedCamouflage(X3DJSON.nodeUtil("Scene","TOUCH_Camouflage","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].touchedGrey(X3DJSON.nodeUtil("Scene","TOUCH_Grey","isActive"), __eventTime);
			X3DJSON.nodeUtil("Scene","MATERIAL_Green","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].greenSelectionColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].greenSelectionColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].greenSelectionColor, __eventTime);
			X3DJSON.nodeUtil("Scene","MATERIAL_Camouflage","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].camouflageSelectionColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].camouflageSelectionColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].camouflageSelectionColor, __eventTime);
			X3DJSON.nodeUtil("Scene","MATERIAL_Grey","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].greySelectionColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].greySelectionColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].greySelectionColor, __eventTime);
			X3DJSON.nodeUtil("Scene","EXAMPLE_SWITCH","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].selection === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].selection() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/AircraftHelicopters/AH1SuperCobraUnitedStates/SuperCobraPrototype.json']['EXAMPLE_SELECTION'].selection, __eventTime);