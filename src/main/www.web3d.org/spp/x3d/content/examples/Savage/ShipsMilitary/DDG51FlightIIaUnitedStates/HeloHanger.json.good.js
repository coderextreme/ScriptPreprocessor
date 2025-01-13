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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/DDG51FlightIIaUnitedStates/HeloHanger.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/DDG51FlightIIaUnitedStates/HeloHanger.json'] = {};
}

    if (X3DJSON.nodeUtil("Scene","STBDRASTClockOut")) {
X3DJSON.nodeUtil("Scene","STBDRASTClockOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDRASTClockOut")) {
X3DJSON.nodeUtil("Scene","STBDRASTClockOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDRASTPathInterpolatorOut")) {
X3DJSON.nodeUtil("Scene","STBDRASTPathInterpolatorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDRastOrientationInterpolatorOut")) {
X3DJSON.nodeUtil("Scene","STBDRastOrientationInterpolatorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDRastTouchSensorOut")) {
X3DJSON.nodeUtil("Scene","STBDRastTouchSensorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDRASTClockIn")) {
X3DJSON.nodeUtil("Scene","STBDRASTClockIn").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDRASTClockIn")) {
X3DJSON.nodeUtil("Scene","STBDRASTClockIn").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDRASTPathInterpolatorIn")) {
X3DJSON.nodeUtil("Scene","STBDRASTPathInterpolatorIn").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDRastOrientationInterpolatorIn")) {
X3DJSON.nodeUtil("Scene","STBDRastOrientationInterpolatorIn").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDRastTouchSensorIn")) {
X3DJSON.nodeUtil("Scene","STBDRastTouchSensorIn").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDRastTouchSensorIn")) {
X3DJSON.nodeUtil("Scene","STBDRastTouchSensorIn").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDRastTouchSensorOut")) {
X3DJSON.nodeUtil("Scene","STBDRastTouchSensorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDRastTouchSensorIn")) {
X3DJSON.nodeUtil("Scene","STBDRastTouchSensorIn").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RastOut")) {
X3DJSON.nodeUtil("Scene","RastOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RastIn")) {
X3DJSON.nodeUtil("Scene","RastIn").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortRASTClockOut")) {
X3DJSON.nodeUtil("Scene","PortRASTClockOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortRASTClockOut")) {
X3DJSON.nodeUtil("Scene","PortRASTClockOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortRASTPathInterpolatorOut")) {
X3DJSON.nodeUtil("Scene","PortRASTPathInterpolatorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortRastOrientationInterpolatorOut")) {
X3DJSON.nodeUtil("Scene","PortRastOrientationInterpolatorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortRastTouchSensorOut")) {
X3DJSON.nodeUtil("Scene","PortRastTouchSensorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortRASTClockIn")) {
X3DJSON.nodeUtil("Scene","PortRASTClockIn").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortRASTClockIn")) {
X3DJSON.nodeUtil("Scene","PortRASTClockIn").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortRASTPathInterpolatorIn")) {
X3DJSON.nodeUtil("Scene","PortRASTPathInterpolatorIn").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortRastOrientationInterpolatorIn")) {
X3DJSON.nodeUtil("Scene","PortRastOrientationInterpolatorIn").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortRastTouchSensorIn")) {
X3DJSON.nodeUtil("Scene","PortRastTouchSensorIn").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortRastTouchSensorIn")) {
X3DJSON.nodeUtil("Scene","PortRastTouchSensorIn").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortRastTouchSensorOut")) {
X3DJSON.nodeUtil("Scene","PortRastTouchSensorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortRastTouchSensorIn")) {
X3DJSON.nodeUtil("Scene","PortRastTouchSensorIn").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortRastOut")) {
X3DJSON.nodeUtil("Scene","PortRastOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortRastIn")) {
X3DJSON.nodeUtil("Scene","PortRastIn").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorClockOut")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorClockOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorClockOut")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorClockOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorClockOut")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorClockOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorClockOut")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorClockOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorClockOut")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorClockOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorClockOut")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorClockOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorClockOut")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorClockOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorClockOut")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorClockOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorClockOut")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorClockOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorClockOut")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorClockOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorClockOut")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorClockOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorClockOut")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorClockOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoor1PathInterpolatorOut")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoor1PathInterpolatorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoor1OrientationInterpolatorOut")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoor1OrientationInterpolatorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoor2PathInterpolatorOut")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoor2PathInterpolatorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoor2OrientationInterpolatorOut")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoor2OrientationInterpolatorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoor3PathInterpolatorOut")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoor3PathInterpolatorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoor3OrientationInterpolatorOut")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoor3OrientationInterpolatorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoor4PathInterpolatorOut")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoor4PathInterpolatorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoor4OrientationInterpolatorOut")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoor4OrientationInterpolatorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoor5PathInterpolatorOut")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoor5PathInterpolatorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoor5OrientationInterpolatorOut")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoor5OrientationInterpolatorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoor6PathInterpolatorOut")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoor6PathInterpolatorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoor6OrientationInterpolatorOut")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoor6OrientationInterpolatorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorTouchSensor")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorTouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorClockDown")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorClockDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorClockDown")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorClockDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorClockDown")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorClockDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorClockDown")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorClockDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorClockDown")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorClockDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorClockDown")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorClockDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorClockDown")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorClockDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorClockDown")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorClockDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorClockDown")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorClockDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorClockDown")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorClockDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorClockDown")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorClockDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorClockDown")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorClockDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoor1PathInterpolatorDown")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoor1PathInterpolatorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoor1OrientationInterpolatorDown")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoor1OrientationInterpolatorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoor2PathInterpolatorDown")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoor2PathInterpolatorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoor2OrientationInterpolatorDown")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoor2OrientationInterpolatorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoor3PathInterpolatorDown")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoor3PathInterpolatorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoor3OrientationInterpolatorDown")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoor3OrientationInterpolatorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoor4PathInterpolatorDown")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoor4PathInterpolatorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoor4OrientationInterpolatorDown")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoor4OrientationInterpolatorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoor5PathInterpolatorDown")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoor5PathInterpolatorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoor5OrientationInterpolatorDown")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoor5OrientationInterpolatorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoor6PathInterpolatorDown")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoor6PathInterpolatorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoor6OrientationInterpolatorDown")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoor6OrientationInterpolatorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorTouchSensorDown")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorTouchSensorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorTouchSensor")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorTouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorTouchSensorDown")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorTouchSensorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorUp")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorUp").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","STBDHeloDoorDown")) {
X3DJSON.nodeUtil("Scene","STBDHeloDoorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorClockOut")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorClockOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorClockOut")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorClockOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorClockOut")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorClockOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorClockOut")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorClockOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorClockOut")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorClockOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorClockOut")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorClockOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorClockOut")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorClockOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorClockOut")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorClockOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorClockOut")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorClockOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorClockOut")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorClockOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorClockOut")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorClockOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorClockOut")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorClockOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoor1PathInterpolatorOut")) {
X3DJSON.nodeUtil("Scene","PortHeloDoor1PathInterpolatorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoor1OrientationInterpolatorOut")) {
X3DJSON.nodeUtil("Scene","PortHeloDoor1OrientationInterpolatorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoor2PathInterpolatorOut")) {
X3DJSON.nodeUtil("Scene","PortHeloDoor2PathInterpolatorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoor2OrientationInterpolatorOut")) {
X3DJSON.nodeUtil("Scene","PortHeloDoor2OrientationInterpolatorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoor3PathInterpolatorOut")) {
X3DJSON.nodeUtil("Scene","PortHeloDoor3PathInterpolatorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoor3OrientationInterpolatorOut")) {
X3DJSON.nodeUtil("Scene","PortHeloDoor3OrientationInterpolatorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoor4PathInterpolatorOut")) {
X3DJSON.nodeUtil("Scene","PortHeloDoor4PathInterpolatorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoor4OrientationInterpolatorOut")) {
X3DJSON.nodeUtil("Scene","PortHeloDoor4OrientationInterpolatorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoor5PathInterpolatorOut")) {
X3DJSON.nodeUtil("Scene","PortHeloDoor5PathInterpolatorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoor5OrientationInterpolatorOut")) {
X3DJSON.nodeUtil("Scene","PortHeloDoor5OrientationInterpolatorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoor6PathInterpolatorOut")) {
X3DJSON.nodeUtil("Scene","PortHeloDoor6PathInterpolatorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoor6OrientationInterpolatorOut")) {
X3DJSON.nodeUtil("Scene","PortHeloDoor6OrientationInterpolatorOut").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorTouchSensor")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorTouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorClockDown")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorClockDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorClockDown")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorClockDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorClockDown")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorClockDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorClockDown")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorClockDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorClockDown")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorClockDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorClockDown")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorClockDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorClockDown")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorClockDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorClockDown")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorClockDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorClockDown")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorClockDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorClockDown")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorClockDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorClockDown")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorClockDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorClockDown")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorClockDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoor1PathInterpolatorDown")) {
X3DJSON.nodeUtil("Scene","PortHeloDoor1PathInterpolatorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoor1OrientationInterpolatorDown")) {
X3DJSON.nodeUtil("Scene","PortHeloDoor1OrientationInterpolatorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoor2PathInterpolatorDown")) {
X3DJSON.nodeUtil("Scene","PortHeloDoor2PathInterpolatorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoor2OrientationInterpolatorDown")) {
X3DJSON.nodeUtil("Scene","PortHeloDoor2OrientationInterpolatorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoor3PathInterpolatorDown")) {
X3DJSON.nodeUtil("Scene","PortHeloDoor3PathInterpolatorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoor3OrientationInterpolatorDown")) {
X3DJSON.nodeUtil("Scene","PortHeloDoor3OrientationInterpolatorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoor4PathInterpolatorDown")) {
X3DJSON.nodeUtil("Scene","PortHeloDoor4PathInterpolatorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoor4OrientationInterpolatorDown")) {
X3DJSON.nodeUtil("Scene","PortHeloDoor4OrientationInterpolatorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoor5PathInterpolatorDown")) {
X3DJSON.nodeUtil("Scene","PortHeloDoor5PathInterpolatorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoor5OrientationInterpolatorDown")) {
X3DJSON.nodeUtil("Scene","PortHeloDoor5OrientationInterpolatorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoor6PathInterpolatorDown")) {
X3DJSON.nodeUtil("Scene","PortHeloDoor6PathInterpolatorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoor6OrientationInterpolatorDown")) {
X3DJSON.nodeUtil("Scene","PortHeloDoor6OrientationInterpolatorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorTouchSensorDown")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorTouchSensorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorTouchSensor")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorTouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorTouchSensorDown")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorTouchSensorDown").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorUp")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorUp").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortHeloDoorDown")) {
X3DJSON.nodeUtil("Scene","PortHeloDoorDown").addEventListener('outputchange', function(event) {
}, false);
}
