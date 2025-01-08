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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'] = function() {
	this.set_buttonMotionDone = function (value) {
		try {
			this.proxy.buttonMotionDone = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting buttonMotionDone '+e);
			console.error('Problems setting buttonMotionDone',e);
		}
	};
	this.buttonMotionDone_changed = function () {
		var value = this.buttonMotionDone;
		return value;
	};
	try {
		this.buttonMotionDone = new SFBool();
	} catch (e) {
		console.log('Problems setting buttonMotionDone '+e);
		console.error('Problems setting buttonMotionDone',e);
	}
	this.set_outRot = function (value) {
		try {
			this.proxy.outRot = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting outRot '+e);
			console.error('Problems setting outRot',e);
		}
	};
	this.outRot_changed = function () {
		var value = this.outRot;
		return value;
	};
	try {
		this.outRot = new SFRotation();
	} catch (e) {
		console.log('Problems setting outRot '+e);
		console.error('Problems setting outRot',e);
	}
	this.set_inRot = function (value) {
		try {
			this.proxy.inRot = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting inRot '+e);
			console.error('Problems setting inRot',e);
		}
	};
	this.inRot_changed = function () {
		var value = this.inRot;
		return value;
	};
	try {
		this.inRot = new SFRotation();
	} catch (e) {
		console.log('Problems setting inRot '+e);
		console.error('Problems setting inRot',e);
	}
	this.set_CW = function (value) {
		try {
			this.proxy.CW = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting CW '+e);
			console.error('Problems setting CW',e);
		}
	};
	this.CW_changed = function () {
		var value = this.CW;
		return value;
	};
	try {
		this.CW = new SFBool();
	} catch (e) {
		console.log('Problems setting CW '+e);
		console.error('Problems setting CW',e);
	}
	this.set_CCW = function (value) {
		try {
			this.proxy.CCW = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting CCW '+e);
			console.error('Problems setting CCW',e);
		}
	};
	this.CCW_changed = function () {
		var value = this.CCW;
		return value;
	};
	try {
		this.CCW = new SFBool();
	} catch (e) {
		console.log('Problems setting CCW '+e);
		console.error('Problems setting CCW',e);
	}


ecmascript:
// Filename:    rotationScript.js
// Author:      Claudio Coreixas
// Created:     14 October 2009


	this.buttonMotionDone = function (value)
{
    if (this.proxy.CW == true)
    {
      if (this.proxy.inRot[3] > 0.8){
        this.proxy.outRot = this.proxy.inRot;
        }
      else {
        this.proxy.outRot = new SFRotation(0,1,0,this.proxy.inRot[3]+0.1);
        }
    }
    if (this.proxy.CCW == true)
    {
      if (this.proxy.inRot[3] < -0.8){
        this.proxy.outRot = this.proxy.inRot;
        }
      else{
        this.proxy.outRot = new SFRotation(0,1,0,this.proxy.inRot[3]-0.1);
        }
    }

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'].initialize();
    if (X3DJSON.nodeUtil("Scene","DefaultCylinderSensor")) {
X3DJSON.nodeUtil("Scene","DefaultCylinderSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","rotateCW")) {
X3DJSON.nodeUtil("Scene","rotateCW").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'].buttonMotionDone(X3DJSON.nodeUtil("Scene","rotateCW","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'].buttonMotionDone(X3DJSON.nodeUtil("Scene","rotateCW","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","rotateCW")) {
X3DJSON.nodeUtil("Scene","rotateCW").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'].CW(X3DJSON.nodeUtil("Scene","rotateCW","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'].CW(X3DJSON.nodeUtil("Scene","rotateCW","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","rotateCCW")) {
X3DJSON.nodeUtil("Scene","rotateCCW").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'].buttonMotionDone(X3DJSON.nodeUtil("Scene","rotateCCW","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'].buttonMotionDone(X3DJSON.nodeUtil("Scene","rotateCCW","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","rotateCCW")) {
X3DJSON.nodeUtil("Scene","rotateCCW").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'].CCW(X3DJSON.nodeUtil("Scene","rotateCCW","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'].CCW(X3DJSON.nodeUtil("Scene","rotateCCW","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","gunBody")) {
X3DJSON.nodeUtil("Scene","gunBody").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'].inRot(X3DJSON.nodeUtil("Scene","gunBody","rotation"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'].inRot(X3DJSON.nodeUtil("Scene","gunBody","rotation"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript']['ACTION']['outRot'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript']['ACTION']['outRot'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript']['ACTION']['outRot'].push(function(property, value) {
		if (property === 'outRot') {
			X3DJSON.nodeUtil("Scene","gunBody","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'].outRot === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'].outRot() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'].outRot, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","gunBody","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'].outRot === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'].outRot() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'].outRot, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'].buttonMotionDone(X3DJSON.nodeUtil("Scene","rotateCW","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'].CW(X3DJSON.nodeUtil("Scene","rotateCW","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'].buttonMotionDone(X3DJSON.nodeUtil("Scene","rotateCCW","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'].CCW(X3DJSON.nodeUtil("Scene","rotateCCW","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'].inRot(X3DJSON.nodeUtil("Scene","gunBody","rotation"), __eventTime);
			X3DJSON.nodeUtil("Scene","gunBody","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'].outRot === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'].outRot() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/PatrolCraftNavalAcademyBrazil/Mtr50.json']['controlScript'].outRot, __eventTime);