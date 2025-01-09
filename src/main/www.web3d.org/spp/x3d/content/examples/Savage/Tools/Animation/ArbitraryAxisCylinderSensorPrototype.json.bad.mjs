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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['NegationScript'] = function() {
	this.set_shiftRotationAxis = function (value) {
		try {
			this.proxy.shiftRotationAxis = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting shiftRotationAxis '+e);
			console.error('Problems setting shiftRotationAxis',e);
		}
	};
	this.shiftRotationAxis_changed = function () {
		var value = this.shiftRotationAxis;
		return value;
	};
	try {
		this.shiftRotationAxis = new SFRotation();
	} catch (e) {
		console.log('Problems setting shiftRotationAxis '+e);
		console.error('Problems setting shiftRotationAxis',e);
	}
	this.set_offset = function (value) {
		try {
			this.proxy.offset = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting offset '+e);
			console.error('Problems setting offset',e);
		}
	};
	this.offset_changed = function () {
		var value = this.offset;
		return value;
	};
	try {
		this.offset = new SFFloat();
	} catch (e) {
		console.log('Problems setting offset '+e);
		console.error('Problems setting offset',e);
	}
	this.set_rotationRestore = function (value) {
		try {
			this.proxy.rotationRestore = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rotationRestore '+e);
			console.error('Problems setting rotationRestore',e);
		}
	};
	this.rotationRestore_changed = function () {
		var value = this.rotationRestore;
		return value;
	};
	try {
		this.rotationRestore = new SFRotation();
	} catch (e) {
		console.log('Problems setting rotationRestore '+e);
		console.error('Problems setting rotationRestore',e);
	}
	this.set_CylinderSensorRotationTransform = function (value) {
		try {
			this.proxy.CylinderSensorRotationTransform = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting CylinderSensorRotationTransform '+e);
			console.error('Problems setting CylinderSensorRotationTransform',e);
		}
	};
	this.CylinderSensorRotationTransform_changed = function () {
		var value = this.CylinderSensorRotationTransform;
		return value;
	};
	try {
		this.CylinderSensorRotationTransform = X3DJSON.nodeUtil("Scene","CylinderSensorRotationTransform");
	} catch (e) {
		console.log('Problems setting CylinderSensorRotationTransform '+e);
		console.error('Problems setting CylinderSensorRotationTransform',e);
	}
	this.set_rotationOffset = function (value) {
		try {
			this.proxy.rotationOffset = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rotationOffset '+e);
			console.error('Problems setting rotationOffset',e);
		}
	};
	this.rotationOffset_changed = function () {
		var value = this.rotationOffset;
		return value;
	};
	try {
		this.rotationOffset = new SFRotation(0,1,0,0);
	} catch (e) {
		console.log('Problems setting rotationOffset '+e);
		console.error('Problems setting rotationOffset',e);
	}
	this.set_rotationIntermediate = function (value) {
		try {
			this.proxy.rotationIntermediate = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rotationIntermediate '+e);
			console.error('Problems setting rotationIntermediate',e);
		}
	};
	this.rotationIntermediate_changed = function () {
		var value = this.rotationIntermediate;
		return value;
	};
	try {
		this.rotationIntermediate = new SFRotation(0,1,0,0);
	} catch (e) {
		console.log('Problems setting rotationIntermediate '+e);
		console.error('Problems setting rotationIntermediate',e);
	}


ecmascript:

	this.initialize = function () {
	this.proxy.rotationOffset = new SFRotation (0, 1, 0, this.proxy.offset);  // establish initial angle
	X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","CylinderSensorRotationTransform", "")", "rotation", 
	   X3DJSON.nodeUtil("Scene","CylinderSensorRotationTransform", "rotation").multiply (this.proxy.rotationOffset));
	this.proxy.rotationIntermediate = this.proxy.shiftRotationAxis;
	this.proxy.rotationIntermediate = this.proxy.rotationIntermediate.inverse ();
	this.proxy.rotationRestore = this.proxy.rotationIntermediate;
	console.error ('   this.proxy.rotationOffset=' +    this.proxy.rotationOffset.toString());
	console.error ('this.proxy.shiftRotationAxis=' + this.proxy.shiftRotationAxis.toString());
	console.error ('  this.proxy.rotationRestore=' +   this.proxy.rotationRestore.toString());
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['NegationScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['NegationScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['NegationScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['NegationScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['NegationScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['NegationScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['NegationScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['NegationScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['NegationScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['NegationScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['NegationScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['HideSensorShapeScript'] = function() {
	this.set_showCylinderSensorShape = function (value) {
		try {
			this.proxy.showCylinderSensorShape = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting showCylinderSensorShape '+e);
			console.error('Problems setting showCylinderSensorShape',e);
		}
	};
	this.showCylinderSensorShape_changed = function () {
		var value = this.showCylinderSensorShape;
		return value;
	};
	try {
		this.showCylinderSensorShape = new SFBool();
	} catch (e) {
		console.log('Problems setting showCylinderSensorShape '+e);
		console.error('Problems setting showCylinderSensorShape',e);
	}
	this.set_choiceScaleSensor = function (value) {
		try {
			this.proxy.choiceScaleSensor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting choiceScaleSensor '+e);
			console.error('Problems setting choiceScaleSensor',e);
		}
	};
	this.choiceScaleSensor_changed = function () {
		var value = this.choiceScaleSensor;
		return value;
	};
	try {
		this.choiceScaleSensor = new SFInt32();
	} catch (e) {
		console.log('Problems setting choiceScaleSensor '+e);
		console.error('Problems setting choiceScaleSensor',e);
	}


ecmascript:

	this.initialize = function () {
	if (this.proxy.showCylinderSensorShape == true)
		this.proxy.choiceScaleSensor =  0;
	else	this.proxy.choiceScaleSensor = -1;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['HideSensorShapeScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['HideSensorShapeScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['HideSensorShapeScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['HideSensorShapeScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['HideSensorShapeScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['HideSensorShapeScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['HideSensorShapeScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['HideSensorShapeScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['HideSensorShapeScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['HideSensorShapeScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['HideSensorShapeScript'].initialize();
    if (X3DJSON.nodeUtil("Scene","RotatedCylinderSensor")) {
X3DJSON.nodeUtil("Scene","RotatedCylinderSensor").addEventListener('outputchange', function(event) {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['NegationScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['NegationScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['NegationScript']['ACTION']['rotationRestore'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['NegationScript']['ACTION']['rotationRestore'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['NegationScript']['ACTION']['rotationRestore'].push(function(property, value) {
		if (property === 'rotationRestore') {
			X3DJSON.nodeUtil("Scene","RestorationTransform","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['NegationScript'].rotationRestore === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['NegationScript'].rotationRestore() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['NegationScript'].rotationRestore, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RestorationTransform","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['NegationScript'].rotationRestore === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['NegationScript'].rotationRestore() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['NegationScript'].rotationRestore, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['HideSensorShapeScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['HideSensorShapeScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['HideSensorShapeScript']['ACTION']['choiceScaleSensor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['HideSensorShapeScript']['ACTION']['choiceScaleSensor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['HideSensorShapeScript']['ACTION']['choiceScaleSensor'].push(function(property, value) {
		if (property === 'choiceScaleSensor') {
			X3DJSON.nodeUtil("Scene","ScaleSensorSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['HideSensorShapeScript'].choiceScaleSensor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['HideSensorShapeScript'].choiceScaleSensor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['HideSensorShapeScript'].choiceScaleSensor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ScaleSensorSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['HideSensorShapeScript'].choiceScaleSensor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['HideSensorShapeScript'].choiceScaleSensor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['HideSensorShapeScript'].choiceScaleSensor, __eventTime);
			X3DJSON.nodeUtil("Scene","RestorationTransform","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['NegationScript'].rotationRestore === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['NegationScript'].rotationRestore() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['NegationScript'].rotationRestore, __eventTime);
			X3DJSON.nodeUtil("Scene","ScaleSensorSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['HideSensorShapeScript'].choiceScaleSensor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['HideSensorShapeScript'].choiceScaleSensor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ArbitraryAxisCylinderSensorPrototype.json']['HideSensorShapeScript'].choiceScaleSensor, __eventTime);