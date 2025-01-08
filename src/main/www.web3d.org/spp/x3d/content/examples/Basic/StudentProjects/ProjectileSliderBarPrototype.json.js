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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json']['ShapeOrganizer'] = function() {
	this.set_Length = function (value) {
		try {
			this.proxy.Length = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Length '+e);
			console.error('Problems setting Length',e);
		}
	};
	this.Length_changed = function () {
		var value = this.Length;
		return value;
	};
	try {
		this.Length = new SFFloat();
	} catch (e) {
		console.log('Problems setting Length '+e);
		console.error('Problems setting Length',e);
	}
	this.set_Width = function (value) {
		try {
			this.proxy.Width = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Width '+e);
			console.error('Problems setting Width',e);
		}
	};
	this.Width_changed = function () {
		var value = this.Width;
		return value;
	};
	try {
		this.Width = new SFFloat();
	} catch (e) {
		console.log('Problems setting Width '+e);
		console.error('Problems setting Width',e);
	}
	this.set_SliderNameTransformNode = function (value) {
		try {
			this.proxy.SliderNameTransformNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SliderNameTransformNode '+e);
			console.error('Problems setting SliderNameTransformNode',e);
		}
	};
	this.SliderNameTransformNode_changed = function () {
		var value = this.SliderNameTransformNode;
		return value;
	};
	try {
		this.SliderNameTransformNode = X3DJSON.nodeUtil("Scene","sliderNameTransform");
	} catch (e) {
		console.log('Problems setting SliderNameTransformNode '+e);
		console.error('Problems setting SliderNameTransformNode',e);
	}
	this.set_CurrentValueTransformNode = function (value) {
		try {
			this.proxy.CurrentValueTransformNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting CurrentValueTransformNode '+e);
			console.error('Problems setting CurrentValueTransformNode',e);
		}
	};
	this.CurrentValueTransformNode_changed = function () {
		var value = this.CurrentValueTransformNode;
		return value;
	};
	try {
		this.CurrentValueTransformNode = X3DJSON.nodeUtil("Scene","currentValueTransform");
	} catch (e) {
		console.log('Problems setting CurrentValueTransformNode '+e);
		console.error('Problems setting CurrentValueTransformNode',e);
	}
	this.set_BarTransformNode = function (value) {
		try {
			this.proxy.BarTransformNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting BarTransformNode '+e);
			console.error('Problems setting BarTransformNode',e);
		}
	};
	this.BarTransformNode_changed = function () {
		var value = this.BarTransformNode;
		return value;
	};
	try {
		this.BarTransformNode = X3DJSON.nodeUtil("Scene","barTransform");
	} catch (e) {
		console.log('Problems setting BarTransformNode '+e);
		console.error('Problems setting BarTransformNode',e);
	}
	this.set_PointerTransformNode = function (value) {
		try {
			this.proxy.PointerTransformNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting PointerTransformNode '+e);
			console.error('Problems setting PointerTransformNode',e);
		}
	};
	this.PointerTransformNode_changed = function () {
		var value = this.PointerTransformNode;
		return value;
	};
	try {
		this.PointerTransformNode = X3DJSON.nodeUtil("Scene","pointerTransform");
	} catch (e) {
		console.log('Problems setting PointerTransformNode '+e);
		console.error('Problems setting PointerTransformNode',e);
	}
	this.set_CurrentValueText = function (value) {
		try {
			this.proxy.CurrentValueText = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting CurrentValueText '+e);
			console.error('Problems setting CurrentValueText',e);
		}
	};
	this.CurrentValueText_changed = function () {
		var value = this.CurrentValueText;
		return value;
	};
	try {
		this.CurrentValueText = X3DJSON.nodeUtil("Scene","currentValueText");
	} catch (e) {
		console.log('Problems setting CurrentValueText '+e);
		console.error('Problems setting CurrentValueText',e);
	}
	this.set_SVPlaneSensorNode = function (value) {
		try {
			this.proxy.SVPlaneSensorNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SVPlaneSensorNode '+e);
			console.error('Problems setting SVPlaneSensorNode',e);
		}
	};
	this.SVPlaneSensorNode_changed = function () {
		var value = this.SVPlaneSensorNode;
		return value;
	};
	try {
		this.SVPlaneSensorNode = X3DJSON.nodeUtil("Scene","SVPlaneSensor");
	} catch (e) {
		console.log('Problems setting SVPlaneSensorNode '+e);
		console.error('Problems setting SVPlaneSensorNode',e);
	}


ecmascript:
	this.initialize = function () {

   for(i = 0; i < 3; i++) { 
      X3DJSON.nodeUtil("Scene","barTransform", "scale")[i] = 1;
      if(i == 2) {
         X3DJSON.nodeUtil("Scene","pointerTransform", "scale")[i] = 0.1; 
      }
      else {
         X3DJSON.nodeUtil("Scene","pointerTransform", "scale")[i] = 1;
      }
   } 
   this.setBarSize();
   this.setPointerSize();
   this.setCurrentValueTransform();
   this.setNameTransform();
}
;

	this.setBarSize = function () {
   X3DJSON.nodeUtil("Scene","barTransform", "scale")[0] = this.proxy.Length * X3DJSON.nodeUtil("Scene","barTransform", "scale")[0];
   X3DJSON.nodeUtil("Scene","barTransform", "scale")[1] = this.proxy.Width * X3DJSON.nodeUtil("Scene","barTransform", "scale")[1];
}
;

	this.setPointerSize = function () {
   X3DJSON.nodeUtil("Scene","pointerTransform", "scale")[0] = this.proxy.Width * X3DJSON.nodeUtil("Scene","pointerTransform", "scale")[0];
   X3DJSON.nodeUtil("Scene","pointerTransform", "scale")[1] = this.proxy.Width * X3DJSON.nodeUtil("Scene","pointerTransform", "scale")[1];
   X3DJSON.nodeUtil("Scene","SVPlaneSensor", "minPosition")[0] = this.proxy.Length * X3DJSON.nodeUtil("Scene","SVPlaneSensor", "minPosition")[0];
   X3DJSON.nodeUtil("Scene","SVPlaneSensor", "maxPosition")[0] = this.proxy.Length * X3DJSON.nodeUtil("Scene","SVPlaneSensor", "maxPosition")[0];
}
;

	this.setCurrentValueTransform = function () {
   X3DJSON.nodeUtil("Scene","currentValueTransform", "translation")[0] = (X3DJSON.nodeUtil("Scene","barTransform", "scale")[0] * 0.05 / 2) + (X3DJSON.nodeUtil("Scene","barTransform", "scale")[1] * 0.001 * 2);
}
;

	this.setNameTransform = function () {
   X3DJSON.nodeUtil("Scene","sliderNameTransform", "translation")[0] = -((X3DJSON.nodeUtil("Scene","barTransform", "scale")[0] * 0.05 / 2) + (X3DJSON.nodeUtil("Scene","barTransform", "scale")[1] * 0.001 * 2));
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json']['ShapeOrganizer'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json']['ShapeOrganizer']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json']['ShapeOrganizer'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json']['ShapeOrganizer'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json']['ShapeOrganizer']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json']['ShapeOrganizer']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json']['ShapeOrganizer'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json']['ShapeOrganizer']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json']['ShapeOrganizer']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json']['ShapeOrganizer'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json']['ShapeOrganizer'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json']['CurrentValueFinder'] = function() {
	this.set_SVPlaneSensorNode = function (value) {
		try {
			this.proxy.SVPlaneSensorNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SVPlaneSensorNode '+e);
			console.error('Problems setting SVPlaneSensorNode',e);
		}
	};
	this.SVPlaneSensorNode_changed = function () {
		var value = this.SVPlaneSensorNode;
		return value;
	};
	try {
		this.SVPlaneSensorNode = X3DJSON.nodeUtil("Scene","SVPlaneSensor");
	} catch (e) {
		console.log('Problems setting SVPlaneSensorNode '+e);
		console.error('Problems setting SVPlaneSensorNode',e);
	}
	this.set_MaxValue = function (value) {
		try {
			this.proxy.MaxValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting MaxValue '+e);
			console.error('Problems setting MaxValue',e);
		}
	};
	this.MaxValue_changed = function () {
		var value = this.MaxValue;
		return value;
	};
	try {
		this.MaxValue = new SFFloat();
	} catch (e) {
		console.log('Problems setting MaxValue '+e);
		console.error('Problems setting MaxValue',e);
	}
	this.set_MinValue = function (value) {
		try {
			this.proxy.MinValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting MinValue '+e);
			console.error('Problems setting MinValue',e);
		}
	};
	this.MinValue_changed = function () {
		var value = this.MinValue;
		return value;
	};
	try {
		this.MinValue = new SFFloat();
	} catch (e) {
		console.log('Problems setting MinValue '+e);
		console.error('Problems setting MinValue',e);
	}
	this.set_CurrentValueTextNode = function (value) {
		try {
			this.proxy.CurrentValueTextNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting CurrentValueTextNode '+e);
			console.error('Problems setting CurrentValueTextNode',e);
		}
	};
	this.CurrentValueTextNode_changed = function () {
		var value = this.CurrentValueTextNode;
		return value;
	};
	try {
		this.CurrentValueTextNode = X3DJSON.nodeUtil("Scene","currentValueText");
	} catch (e) {
		console.log('Problems setting CurrentValueTextNode '+e);
		console.error('Problems setting CurrentValueTextNode',e);
	}
	this.set_updateCurrentValue = function (value) {
		try {
			this.proxy.updateCurrentValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting updateCurrentValue '+e);
			console.error('Problems setting updateCurrentValue',e);
		}
	};
	this.updateCurrentValue_changed = function () {
		var value = this.updateCurrentValue;
		return value;
	};
	try {
		this.updateCurrentValue = new SFVec3f();
	} catch (e) {
		console.log('Problems setting updateCurrentValue '+e);
		console.error('Problems setting updateCurrentValue',e);
	}
	this.set_CurrentValueInt = function (value) {
		try {
			this.proxy.CurrentValueInt = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting CurrentValueInt '+e);
			console.error('Problems setting CurrentValueInt',e);
		}
	};
	this.CurrentValueInt_changed = function () {
		var value = this.CurrentValueInt;
		return value;
	};
	try {
		this.CurrentValueInt = new SFInt32();
	} catch (e) {
		console.log('Problems setting CurrentValueInt '+e);
		console.error('Problems setting CurrentValueInt',e);
	}
	this.set_CurrentValueFloat = function (value) {
		try {
			this.proxy.CurrentValueFloat = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting CurrentValueFloat '+e);
			console.error('Problems setting CurrentValueFloat',e);
		}
	};
	this.CurrentValueFloat_changed = function () {
		var value = this.CurrentValueFloat;
		return value;
	};
	try {
		this.CurrentValueFloat = new SFFloat();
	} catch (e) {
		console.log('Problems setting CurrentValueFloat '+e);
		console.error('Problems setting CurrentValueFloat',e);
	}
	this.set_Precision = function (value) {
		try {
			this.proxy.Precision = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Precision '+e);
			console.error('Problems setting Precision',e);
		}
	};
	this.Precision_changed = function () {
		var value = this.Precision;
		return value;
	};
	try {
		this.Precision = new SFInt32();
	} catch (e) {
		console.log('Problems setting Precision '+e);
		console.error('Problems setting Precision',e);
	}


ecmascript:

var totalLength;

	this.initialize = function () {
   realValue = (this.proxy.MaxValue + this.proxy.MinValue) / 2;
   realValue = this.roundOff(realValue, this.proxy.Precision);
   this.proxy.CurrentValueFloat = realValue;
   this.proxy.CurrentValueInt = Math.round(realValue);
   totalLength = X3DJSON.nodeUtil("Scene","SVPlaneSensor", "maxPosition")[0] - X3DJSON.nodeUtil("Scene","SVPlaneSensor", "minPosition")[0];
   this.updateCurrentValueText(realValue.toString()); 
}

//Map po;

	this.updateCurrentValue = function (translation, timeEvent) {
   var displayString;
   var curPositionOnBar = translation[0] + totalLength / 2;
   var x = (this.proxy.MaxValue - this.proxy.MinValue) * curPositionOnBar / totalLength;

   var realValue = this.proxy.MinValue + x;

   if(this.proxy.Precision == 0) { //If 
      this.proxy.CurrentValueInt = Math.round(realValue);
      displayString = this.proxy.CurrentValueInt.toString();
   }
   else {
      this.proxy.CurrentValueFloat = this.roundOff(realValue, this.proxy.Precision);       
      displayString = this.proxy.CurrentValueFloat.toString();
   } 

   this.updateCurrentValueText(displayString);
}

;

	this.updateCurrentValueText = function (dispStr) {
   X3DJSON.nodeUtil("Scene","currentValueText", "string")[0] = dispStr;
}

//A functino to roun;

	this.roundOff = function (value, precision) {

   var result;
   var isNegative = false;
   var wholeInt = Math.round(value * Math.pow(10, precision));

   //Negative numbers creates exceptional condition, therefor they are converted
   //to positive values.
   if(wholeInt < 0) {
      wholeInt = -wholeInt;
      isNegative = true;
   }

   var whole = wholeInt.toString();

   var decPoint = whole.length - precision;

   //Exception when precision is bigger than the string length   
   if(decPoint < 0) {
      i = -decPoint;
      for(i; i > 0; i--) {  
         whole ='0' + whole;
      }

      //Calculate decPoint according to new string expanded with 0s      
      decPoint = whole.length - precision;
   }

   if(whole !='0') {
      //Put the decimal point on the appropriate place
      result = whole.substring(0, decPoint);
      result +='.';
      result += whole.substring(decPoint, whole.length);
   }
   else { //If the string is'0', then result is'0'
      result = whole;
   }

   //Negative numbers are altered.
   if(isNegative) {
      result ='-' + result;
   }
   //Convert the String value to Float.
   resultFloat = parseFloat(result); 


   return resultFloat;

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json']['CurrentValueFinder'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json']['CurrentValueFinder']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json']['CurrentValueFinder'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json']['CurrentValueFinder'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json']['CurrentValueFinder']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json']['CurrentValueFinder']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json']['CurrentValueFinder'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json']['CurrentValueFinder']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json']['CurrentValueFinder']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json']['CurrentValueFinder'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json']['CurrentValueFinder'].initialize();
    if (X3DJSON.nodeUtil("Scene","HudProx")) {
X3DJSON.nodeUtil("Scene","HudProx").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","HudProx")) {
X3DJSON.nodeUtil("Scene","HudProx").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","HudProx")) {
X3DJSON.nodeUtil("Scene","HudProx").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","SVPlaneSensor")) {
X3DJSON.nodeUtil("Scene","SVPlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","SVPlaneSensor")) {
X3DJSON.nodeUtil("Scene","SVPlaneSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json']['CurrentValueFinder'].updateCurrentValue(X3DJSON.nodeUtil("Scene","SVPlaneSensor","translation"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json']['CurrentValueFinder'].updateCurrentValue(X3DJSON.nodeUtil("Scene","SVPlaneSensor","translation"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileSliderBarPrototype.json']['CurrentValueFinder'].updateCurrentValue(X3DJSON.nodeUtil("Scene","SVPlaneSensor","translation"), __eventTime);