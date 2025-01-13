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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'] = function() {
	this.set_switchPosition = function (value) {
		try {
			this.proxy.switchPosition = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting switchPosition '+e);
			console.error('Problems setting switchPosition',e);
		}
	};
	this.switchPosition_changed = function () {
		var value = this.switchPosition;
		return value;
	};
	try {
		this.switchPosition = new SFVec3f();
	} catch (e) {
		console.log('Problems setting switchPosition '+e);
		console.error('Problems setting switchPosition',e);
	}
	this.set_fanCycleTime = function (value) {
		try {
			this.proxy.fanCycleTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fanCycleTime '+e);
			console.error('Problems setting fanCycleTime',e);
		}
	};
	this.fanCycleTime_changed = function () {
		var value = this.fanCycleTime;
		return value;
	};
	try {
		this.fanCycleTime = new MFFloat();
	} catch (e) {
		console.log('Problems setting fanCycleTime '+e);
		console.error('Problems setting fanCycleTime',e);
	}
	this.set_displayFanSpeed = function (value) {
		try {
			this.proxy.displayFanSpeed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting displayFanSpeed '+e);
			console.error('Problems setting displayFanSpeed',e);
		}
	};
	this.displayFanSpeed_changed = function () {
		var value = this.displayFanSpeed;
		return value;
	};
	try {
		this.displayFanSpeed = new MFString();
	} catch (e) {
		console.log('Problems setting displayFanSpeed '+e);
		console.error('Problems setting displayFanSpeed',e);
	}


ecmascript:

	this.switchPosition = function (pos)
{
	if (this.proxy.switchPosition.pos.y == 0){
		this.proxy.fanCycleTime[0] = this.proxy.switchPosition.pos.y;
		this.proxy.displayFanSpeed[0] ='OFF';
	}
	else{if (this.proxy.switchPosition.pos.y == 3){
		this.proxy.fanCycleTime[0] = .01;
		this.proxy.displayFanSpeed[0] ='MAX';
	}
	else {
		this.proxy.fanCycleTime[0] = (6 - (this.proxy.switchPosition.pos.y*2));
		this.proxy.displayFanSpeed[0] = (Math.round((1/this.proxy.fanCycleTime[0])*6000)/100) + ' RPM';
	}}
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'] = function() {
	this.set_onButtonAction = function (value) {
		try {
			this.proxy.onButtonAction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting onButtonAction '+e);
			console.error('Problems setting onButtonAction',e);
		}
	};
	this.onButtonAction_changed = function () {
		var value = this.onButtonAction;
		return value;
	};
	try {
		this.onButtonAction = new SFBool();
	} catch (e) {
		console.log('Problems setting onButtonAction '+e);
		console.error('Problems setting onButtonAction',e);
	}
	this.set_displayMotorStatus = function (value) {
		try {
			this.proxy.displayMotorStatus = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting displayMotorStatus '+e);
			console.error('Problems setting displayMotorStatus',e);
		}
	};
	this.displayMotorStatus_changed = function () {
		var value = this.displayMotorStatus;
		return value;
	};
	try {
		this.displayMotorStatus = new MFString();
	} catch (e) {
		console.log('Problems setting displayMotorStatus '+e);
		console.error('Problems setting displayMotorStatus',e);
	}
	this.set_fanOnButtonAction = function (value) {
		try {
			this.proxy.fanOnButtonAction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fanOnButtonAction '+e);
			console.error('Problems setting fanOnButtonAction',e);
		}
	};
	this.fanOnButtonAction_changed = function () {
		var value = this.fanOnButtonAction;
		return value;
	};
	try {
		this.fanOnButtonAction = new SFInt32();
	} catch (e) {
		console.log('Problems setting fanOnButtonAction '+e);
		console.error('Problems setting fanOnButtonAction',e);
	}


ecmascript:

	this.onButtonAction = function (bool)
{
	if (this.proxy.onButtonAction.bool == true)
	{
		this.proxy.displayMotorStatus[0] ='ON';
		this.proxy.fanOnButtonAction = 1;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff'] = function() {
	this.set_offButtonAction = function (value) {
		try {
			this.proxy.offButtonAction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting offButtonAction '+e);
			console.error('Problems setting offButtonAction',e);
		}
	};
	this.offButtonAction_changed = function () {
		var value = this.offButtonAction;
		return value;
	};
	try {
		this.offButtonAction = new SFBool();
	} catch (e) {
		console.log('Problems setting offButtonAction '+e);
		console.error('Problems setting offButtonAction',e);
	}
	this.set_displayMotorStatus = function (value) {
		try {
			this.proxy.displayMotorStatus = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting displayMotorStatus '+e);
			console.error('Problems setting displayMotorStatus',e);
		}
	};
	this.displayMotorStatus_changed = function () {
		var value = this.displayMotorStatus;
		return value;
	};
	try {
		this.displayMotorStatus = new MFString();
	} catch (e) {
		console.log('Problems setting displayMotorStatus '+e);
		console.error('Problems setting displayMotorStatus',e);
	}


ecmascript:

	this.offButtonAction = function (bool)
{
	if (this.proxy.offButtonAction.bool == true)
	{
		this.proxy.displayMotorStatus[0] ='OFF';
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff'].initialize();
    if (X3DJSON.nodeUtil("Scene","SwitchPlaneSensor")) {
X3DJSON.nodeUtil("Scene","SwitchPlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","SwitchPlaneSensor")) {
X3DJSON.nodeUtil("Scene","SwitchPlaneSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'].switchPosition(X3DJSON.nodeUtil("Scene","SwitchPlaneSensor","translation"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'].switchPosition(X3DJSON.nodeUtil("Scene","SwitchPlaneSensor","translation"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp']['ACTION']['fanCycleTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp']['ACTION']['fanCycleTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp']['ACTION']['fanCycleTime'].push(function(property, value) {
		if (property === 'fanCycleTime') {
			X3DJSON.nodeUtil("Scene","FanClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'].fanCycleTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'].fanCycleTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'].fanCycleTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FanClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'].fanCycleTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'].fanCycleTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'].fanCycleTime, __eventTime);
    if (X3DJSON.nodeUtil("Scene","FanClock")) {
X3DJSON.nodeUtil("Scene","FanClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FanPath")) {
X3DJSON.nodeUtil("Scene","FanPath").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","SensorOffButton")) {
X3DJSON.nodeUtil("Scene","SensorOffButton").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","SensorOffButton")) {
X3DJSON.nodeUtil("Scene","SensorOffButton").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff'].offButtonAction(X3DJSON.nodeUtil("Scene","SensorOffButton","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff'].offButtonAction(X3DJSON.nodeUtil("Scene","SensorOffButton","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","SensorOnButton")) {
X3DJSON.nodeUtil("Scene","SensorOnButton").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","SensorOnButton")) {
X3DJSON.nodeUtil("Scene","SensorOnButton").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'].onButtonAction(X3DJSON.nodeUtil("Scene","SensorOnButton","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'].onButtonAction(X3DJSON.nodeUtil("Scene","SensorOnButton","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","MotorClockOn")) {
X3DJSON.nodeUtil("Scene","MotorClockOn").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","MotorClockOn")) {
X3DJSON.nodeUtil("Scene","MotorClockOn").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","MotorClockOff")) {
X3DJSON.nodeUtil("Scene","MotorClockOff").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","MotorClockOff")) {
X3DJSON.nodeUtil("Scene","MotorClockOff").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","OnButtonDownPath")) {
X3DJSON.nodeUtil("Scene","OnButtonDownPath").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","OffButtonDownPath")) {
X3DJSON.nodeUtil("Scene","OffButtonDownPath").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","OnButtonUpPath")) {
X3DJSON.nodeUtil("Scene","OnButtonUpPath").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","OffButtonUpPath")) {
X3DJSON.nodeUtil("Scene","OffButtonUpPath").addEventListener('outputchange', function(event) {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp']['ACTION']['displayFanSpeed'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp']['ACTION']['displayFanSpeed'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp']['ACTION']['displayFanSpeed'].push(function(property, value) {
		if (property === 'displayFanSpeed') {
			X3DJSON.nodeUtil("Scene","SpeedDisplay","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'].displayFanSpeed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'].displayFanSpeed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'].displayFanSpeed, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SpeedDisplay","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'].displayFanSpeed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'].displayFanSpeed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'].displayFanSpeed, __eventTime);
    if (X3DJSON.nodeUtil("Scene","MotorClockOn")) {
X3DJSON.nodeUtil("Scene","MotorClockOn").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","MotorClockOff")) {
X3DJSON.nodeUtil("Scene","MotorClockOff").addEventListener('outputchange', function(event) {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn']['ACTION']['displayMotorStatus'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn']['ACTION']['displayMotorStatus'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn']['ACTION']['displayMotorStatus'].push(function(property, value) {
		if (property === 'displayMotorStatus') {
			X3DJSON.nodeUtil("Scene","StatusDisplay","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'].displayMotorStatus === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'].displayMotorStatus() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'].displayMotorStatus, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","StatusDisplay","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'].displayMotorStatus === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'].displayMotorStatus() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'].displayMotorStatus, __eventTime);
    if (X3DJSON.nodeUtil("Scene","RtoGColorInerp")) {
X3DJSON.nodeUtil("Scene","RtoGColorInerp").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","GtoRColorInerp")) {
X3DJSON.nodeUtil("Scene","GtoRColorInerp").addEventListener('outputchange', function(event) {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff']['ACTION']['displayMotorStatus'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff']['ACTION']['displayMotorStatus'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff']['ACTION']['displayMotorStatus'].push(function(property, value) {
		if (property === 'displayMotorStatus') {
			X3DJSON.nodeUtil("Scene","StatusDisplay","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff'].displayMotorStatus === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff'].displayMotorStatus() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff'].displayMotorStatus, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","StatusDisplay","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff'].displayMotorStatus === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff'].displayMotorStatus() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff'].displayMotorStatus, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn']['ACTION']['fanOnButtonAction'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn']['ACTION']['fanOnButtonAction'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn']['ACTION']['fanOnButtonAction'].push(function(property, value) {
		if (property === 'fanOnButtonAction') {
			X3DJSON.nodeUtil("Scene","FanClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'].fanOnButtonAction === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'].fanOnButtonAction() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'].fanOnButtonAction, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FanClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'].fanOnButtonAction === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'].fanOnButtonAction() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'].fanOnButtonAction, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'].switchPosition(X3DJSON.nodeUtil("Scene","SwitchPlaneSensor","translation"), __eventTime);
			X3DJSON.nodeUtil("Scene","FanClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'].fanCycleTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'].fanCycleTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'].fanCycleTime, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff'].offButtonAction(X3DJSON.nodeUtil("Scene","SensorOffButton","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'].onButtonAction(X3DJSON.nodeUtil("Scene","SensorOnButton","isActive"), __eventTime);
			X3DJSON.nodeUtil("Scene","SpeedDisplay","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'].displayFanSpeed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'].displayFanSpeed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorAmp'].displayFanSpeed, __eventTime);
			X3DJSON.nodeUtil("Scene","StatusDisplay","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'].displayMotorStatus === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'].displayMotorStatus() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'].displayMotorStatus, __eventTime);
			X3DJSON.nodeUtil("Scene","StatusDisplay","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff'].displayMotorStatus === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff'].displayMotorStatus() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOff'].displayMotorStatus, __eventTime);
			X3DJSON.nodeUtil("Scene","FanClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'].fanOnButtonAction === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'].fanOnButtonAction() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PropellerControlPanel.json']['MotorButtonActionOn'].fanOnButtonAction, __eventTime);