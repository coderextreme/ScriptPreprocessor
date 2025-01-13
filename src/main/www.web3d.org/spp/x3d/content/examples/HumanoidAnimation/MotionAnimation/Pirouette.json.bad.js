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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/MotionAnimation/Pirouette.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/MotionAnimation/Pirouette.json'] = {};
}

    if (X3DJSON.nodeUtil("Scene","StepTimer")) {
X3DJSON.nodeUtil("Scene","StepTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator0_humanoid_root")) {
X3DJSON.nodeUtil("Scene","Interpolator0_humanoid_root").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator1_humanoid_root")) {
X3DJSON.nodeUtil("Scene","Interpolator1_humanoid_root").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator2_abdomen")) {
X3DJSON.nodeUtil("Scene","Interpolator2_abdomen").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator3_vl5")) {
X3DJSON.nodeUtil("Scene","Interpolator3_vl5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator4_neck")) {
X3DJSON.nodeUtil("Scene","Interpolator4_neck").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator5_skullbase")) {
X3DJSON.nodeUtil("Scene","Interpolator5_skullbase").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator6_leftEye")) {
X3DJSON.nodeUtil("Scene","Interpolator6_leftEye").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator7_rightEye")) {
X3DJSON.nodeUtil("Scene","Interpolator7_rightEye").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator8_rCollar")) {
X3DJSON.nodeUtil("Scene","Interpolator8_rCollar").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator9_rShldr")) {
X3DJSON.nodeUtil("Scene","Interpolator9_rShldr").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator10_rForeArm")) {
X3DJSON.nodeUtil("Scene","Interpolator10_rForeArm").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator11_rHand")) {
X3DJSON.nodeUtil("Scene","Interpolator11_rHand").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator12_rThumb1")) {
X3DJSON.nodeUtil("Scene","Interpolator12_rThumb1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator13_rThumb2")) {
X3DJSON.nodeUtil("Scene","Interpolator13_rThumb2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator14_rIndex1")) {
X3DJSON.nodeUtil("Scene","Interpolator14_rIndex1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator15_rIndex2")) {
X3DJSON.nodeUtil("Scene","Interpolator15_rIndex2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator16_rMid1")) {
X3DJSON.nodeUtil("Scene","Interpolator16_rMid1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator17_rMid2")) {
X3DJSON.nodeUtil("Scene","Interpolator17_rMid2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator18_rRing1")) {
X3DJSON.nodeUtil("Scene","Interpolator18_rRing1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator19_rRing2")) {
X3DJSON.nodeUtil("Scene","Interpolator19_rRing2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator20_rPinky1")) {
X3DJSON.nodeUtil("Scene","Interpolator20_rPinky1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator21_rPinky2")) {
X3DJSON.nodeUtil("Scene","Interpolator21_rPinky2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator22_lCollar")) {
X3DJSON.nodeUtil("Scene","Interpolator22_lCollar").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator23_lShldr")) {
X3DJSON.nodeUtil("Scene","Interpolator23_lShldr").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator24_lForeArm")) {
X3DJSON.nodeUtil("Scene","Interpolator24_lForeArm").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator25_lHand")) {
X3DJSON.nodeUtil("Scene","Interpolator25_lHand").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator26_lThumb1")) {
X3DJSON.nodeUtil("Scene","Interpolator26_lThumb1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator27_lThumb2")) {
X3DJSON.nodeUtil("Scene","Interpolator27_lThumb2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator28_lIndex1")) {
X3DJSON.nodeUtil("Scene","Interpolator28_lIndex1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator29_lIndex2")) {
X3DJSON.nodeUtil("Scene","Interpolator29_lIndex2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator30_lMid1")) {
X3DJSON.nodeUtil("Scene","Interpolator30_lMid1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator31_lMid2")) {
X3DJSON.nodeUtil("Scene","Interpolator31_lMid2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator32_lRing1")) {
X3DJSON.nodeUtil("Scene","Interpolator32_lRing1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator33_lRing2")) {
X3DJSON.nodeUtil("Scene","Interpolator33_lRing2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator34_lPinky1")) {
X3DJSON.nodeUtil("Scene","Interpolator34_lPinky1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator35_lPinky2")) {
X3DJSON.nodeUtil("Scene","Interpolator35_lPinky2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator36_rButtock")) {
X3DJSON.nodeUtil("Scene","Interpolator36_rButtock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator37_rThigh")) {
X3DJSON.nodeUtil("Scene","Interpolator37_rThigh").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator38_rShin")) {
X3DJSON.nodeUtil("Scene","Interpolator38_rShin").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator39_rFoot")) {
X3DJSON.nodeUtil("Scene","Interpolator39_rFoot").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator40_lButtock")) {
X3DJSON.nodeUtil("Scene","Interpolator40_lButtock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator41_lThigh")) {
X3DJSON.nodeUtil("Scene","Interpolator41_lThigh").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator42_lShin")) {
X3DJSON.nodeUtil("Scene","Interpolator42_lShin").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RealTimer")) {
X3DJSON.nodeUtil("Scene","RealTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FrameStepper")) {
X3DJSON.nodeUtil("Scene","FrameStepper").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Interpolator43_lFoot")) {
X3DJSON.nodeUtil("Scene","Interpolator43_lFoot").addEventListener('outputchange', function(event) {
}, false);
}
