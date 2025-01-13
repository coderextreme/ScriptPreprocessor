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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'] = function() {
	this.set_SeaStateChoice0 = function (value) {
		try {
			this.proxy.SeaStateChoice0 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SeaStateChoice0 '+e);
			console.error('Problems setting SeaStateChoice0',e);
		}
	};
	this.SeaStateChoice0_changed = function () {
		var value = this.SeaStateChoice0;
		return value;
	};
	try {
		this.SeaStateChoice0 = new SFBool();
	} catch (e) {
		console.log('Problems setting SeaStateChoice0 '+e);
		console.error('Problems setting SeaStateChoice0',e);
	}
	this.set_SeaStateChoice1 = function (value) {
		try {
			this.proxy.SeaStateChoice1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SeaStateChoice1 '+e);
			console.error('Problems setting SeaStateChoice1',e);
		}
	};
	this.SeaStateChoice1_changed = function () {
		var value = this.SeaStateChoice1;
		return value;
	};
	try {
		this.SeaStateChoice1 = new SFBool();
	} catch (e) {
		console.log('Problems setting SeaStateChoice1 '+e);
		console.error('Problems setting SeaStateChoice1',e);
	}
	this.set_SeaStateChoice2 = function (value) {
		try {
			this.proxy.SeaStateChoice2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SeaStateChoice2 '+e);
			console.error('Problems setting SeaStateChoice2',e);
		}
	};
	this.SeaStateChoice2_changed = function () {
		var value = this.SeaStateChoice2;
		return value;
	};
	try {
		this.SeaStateChoice2 = new SFBool();
	} catch (e) {
		console.log('Problems setting SeaStateChoice2 '+e);
		console.error('Problems setting SeaStateChoice2',e);
	}
	this.set_SeaStateChoice3 = function (value) {
		try {
			this.proxy.SeaStateChoice3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SeaStateChoice3 '+e);
			console.error('Problems setting SeaStateChoice3',e);
		}
	};
	this.SeaStateChoice3_changed = function () {
		var value = this.SeaStateChoice3;
		return value;
	};
	try {
		this.SeaStateChoice3 = new SFBool();
	} catch (e) {
		console.log('Problems setting SeaStateChoice3 '+e);
		console.error('Problems setting SeaStateChoice3',e);
	}
	this.set_SeaStateChoice4 = function (value) {
		try {
			this.proxy.SeaStateChoice4 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SeaStateChoice4 '+e);
			console.error('Problems setting SeaStateChoice4',e);
		}
	};
	this.SeaStateChoice4_changed = function () {
		var value = this.SeaStateChoice4;
		return value;
	};
	try {
		this.SeaStateChoice4 = new SFBool();
	} catch (e) {
		console.log('Problems setting SeaStateChoice4 '+e);
		console.error('Problems setting SeaStateChoice4',e);
	}
	this.set_SeaStateChoice5 = function (value) {
		try {
			this.proxy.SeaStateChoice5 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SeaStateChoice5 '+e);
			console.error('Problems setting SeaStateChoice5',e);
		}
	};
	this.SeaStateChoice5_changed = function () {
		var value = this.SeaStateChoice5;
		return value;
	};
	try {
		this.SeaStateChoice5 = new SFBool();
	} catch (e) {
		console.log('Problems setting SeaStateChoice5 '+e);
		console.error('Problems setting SeaStateChoice5',e);
	}
	this.set_SeaStateChoice6 = function (value) {
		try {
			this.proxy.SeaStateChoice6 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SeaStateChoice6 '+e);
			console.error('Problems setting SeaStateChoice6',e);
		}
	};
	this.SeaStateChoice6_changed = function () {
		var value = this.SeaStateChoice6;
		return value;
	};
	try {
		this.SeaStateChoice6 = new SFBool();
	} catch (e) {
		console.log('Problems setting SeaStateChoice6 '+e);
		console.error('Problems setting SeaStateChoice6',e);
	}
	this.set_SeaStateChoice7 = function (value) {
		try {
			this.proxy.SeaStateChoice7 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SeaStateChoice7 '+e);
			console.error('Problems setting SeaStateChoice7',e);
		}
	};
	this.SeaStateChoice7_changed = function () {
		var value = this.SeaStateChoice7;
		return value;
	};
	try {
		this.SeaStateChoice7 = new SFBool();
	} catch (e) {
		console.log('Problems setting SeaStateChoice7 '+e);
		console.error('Problems setting SeaStateChoice7',e);
	}
	this.set_SeaStateChoice8 = function (value) {
		try {
			this.proxy.SeaStateChoice8 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SeaStateChoice8 '+e);
			console.error('Problems setting SeaStateChoice8',e);
		}
	};
	this.SeaStateChoice8_changed = function () {
		var value = this.SeaStateChoice8;
		return value;
	};
	try {
		this.SeaStateChoice8 = new SFBool();
	} catch (e) {
		console.log('Problems setting SeaStateChoice8 '+e);
		console.error('Problems setting SeaStateChoice8',e);
	}
	this.set_SeaStateValue = function (value) {
		try {
			this.proxy.SeaStateValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SeaStateValue '+e);
			console.error('Problems setting SeaStateValue',e);
		}
	};
	this.SeaStateValue_changed = function () {
		var value = this.SeaStateValue;
		return value;
	};
	try {
		this.SeaStateValue = new SFInt32();
	} catch (e) {
		console.log('Problems setting SeaStateValue '+e);
		console.error('Problems setting SeaStateValue',e);
	}


ecmascript:

// Return the numeric value of SST button clicked

	this.initialize = function ()
{
	this.proxy.SeaStateValue = 2;


};

	this.SeaStateChoice1 = function (inputBoolean, timestamp)
{
	if (inputBoolean) this.proxy.SeaStateValue = 0;
};

	this.SeaStateChoice2 = function (inputBoolean, timestamp)
{
	if (inputBoolean) this.proxy.SeaStateValue = 1;
};

	this.SeaStateChoice3 = function (inputBoolean, timestamp)
{
	if (inputBoolean) this.proxy.SeaStateValue = 2;
};

	this.SeaStateChoice4 = function (inputBoolean, timestamp)
{
	if (inputBoolean) this.proxy.SeaStateValue = 3;
};

	this.SeaStateChoice5 = function (inputBoolean, timestamp)
{
	if (inputBoolean) this.proxy.SeaStateValue = 4;
};

	this.SeaStateChoice6 = function (inputBoolean, timestamp)
{
	if (inputBoolean) this.proxy.SeaStateValue = 5;
};

	this.SeaStateChoice7 = function (inputBoolean, timestamp)
{
	if (inputBoolean) this.proxy.SeaStateValue = 6;
};

	this.SeaStateChoice8 = function (inputBoolean, timestamp)
{
	if (inputBoolean) this.proxy.SeaStateValue = 7;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].initialize();
    if (X3DJSON.nodeUtil("Scene","TouchSensorSeaState1")) {
X3DJSON.nodeUtil("Scene","TouchSensorSeaState1").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateChoice1(X3DJSON.nodeUtil("Scene","TouchSensorSeaState1","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateChoice1(X3DJSON.nodeUtil("Scene","TouchSensorSeaState1","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TouchSensorSeaState2")) {
X3DJSON.nodeUtil("Scene","TouchSensorSeaState2").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateChoice2(X3DJSON.nodeUtil("Scene","TouchSensorSeaState2","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateChoice2(X3DJSON.nodeUtil("Scene","TouchSensorSeaState2","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TouchSensorSeaState3")) {
X3DJSON.nodeUtil("Scene","TouchSensorSeaState3").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateChoice3(X3DJSON.nodeUtil("Scene","TouchSensorSeaState3","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateChoice3(X3DJSON.nodeUtil("Scene","TouchSensorSeaState3","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TouchSensorSeaState4")) {
X3DJSON.nodeUtil("Scene","TouchSensorSeaState4").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateChoice4(X3DJSON.nodeUtil("Scene","TouchSensorSeaState4","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateChoice4(X3DJSON.nodeUtil("Scene","TouchSensorSeaState4","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TouchSensorSeaState5")) {
X3DJSON.nodeUtil("Scene","TouchSensorSeaState5").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateChoice5(X3DJSON.nodeUtil("Scene","TouchSensorSeaState5","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateChoice5(X3DJSON.nodeUtil("Scene","TouchSensorSeaState5","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TouchSensorSeaState6")) {
X3DJSON.nodeUtil("Scene","TouchSensorSeaState6").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateChoice6(X3DJSON.nodeUtil("Scene","TouchSensorSeaState6","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateChoice6(X3DJSON.nodeUtil("Scene","TouchSensorSeaState6","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TouchSensorSeaState7")) {
X3DJSON.nodeUtil("Scene","TouchSensorSeaState7").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateChoice7(X3DJSON.nodeUtil("Scene","TouchSensorSeaState7","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateChoice7(X3DJSON.nodeUtil("Scene","TouchSensorSeaState7","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TouchSensorSeaState8")) {
X3DJSON.nodeUtil("Scene","TouchSensorSeaState8").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateChoice8(X3DJSON.nodeUtil("Scene","TouchSensorSeaState8","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateChoice8(X3DJSON.nodeUtil("Scene","TouchSensorSeaState8","isActive"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue']['ACTION']['SeaStateValue'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue']['ACTION']['SeaStateValue'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue']['ACTION']['SeaStateValue'].push(function(property, value) {
		if (property === 'SeaStateValue') {
			X3DJSON.nodeUtil("Scene","SeaStateNumber","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateValue, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SeaStateNumber","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateValue, __eventTime);
    if (X3DJSON.nodeUtil("Scene","WaveClock")) {
X3DJSON.nodeUtil("Scene","WaveClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PitchandRollClock")) {
X3DJSON.nodeUtil("Scene","PitchandRollClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PitchandRollClock")) {
X3DJSON.nodeUtil("Scene","PitchandRollClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Ondulation")) {
X3DJSON.nodeUtil("Scene","Ondulation").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateChoice1(X3DJSON.nodeUtil("Scene","TouchSensorSeaState1","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateChoice2(X3DJSON.nodeUtil("Scene","TouchSensorSeaState2","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateChoice3(X3DJSON.nodeUtil("Scene","TouchSensorSeaState3","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateChoice4(X3DJSON.nodeUtil("Scene","TouchSensorSeaState4","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateChoice5(X3DJSON.nodeUtil("Scene","TouchSensorSeaState5","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateChoice6(X3DJSON.nodeUtil("Scene","TouchSensorSeaState6","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateChoice7(X3DJSON.nodeUtil("Scene","TouchSensorSeaState7","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateChoice8(X3DJSON.nodeUtil("Scene","TouchSensorSeaState8","isActive"), __eventTime);
			X3DJSON.nodeUtil("Scene","SeaStateNumber","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/SeaStateExtrusionPrototype.json']['SeaStateChoiceToValue'].SeaStateValue, __eventTime);