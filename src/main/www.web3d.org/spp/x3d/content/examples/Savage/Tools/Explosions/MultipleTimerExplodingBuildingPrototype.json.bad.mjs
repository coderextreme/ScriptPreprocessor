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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'] = function() {
	this.set_initialPosition = function (value) {
		try {
			this.proxy.initialPosition = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting initialPosition '+e);
			console.error('Problems setting initialPosition',e);
		}
	};
	this.initialPosition_changed = function () {
		var value = this.initialPosition;
		return value;
	};
	try {
		this.initialPosition = new SFVec3f();
	} catch (e) {
		console.log('Problems setting initialPosition '+e);
		console.error('Problems setting initialPosition',e);
	}
	this.set_finalPosition = function (value) {
		try {
			this.proxy.finalPosition = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting finalPosition '+e);
			console.error('Problems setting finalPosition',e);
		}
	};
	this.finalPosition_changed = function () {
		var value = this.finalPosition;
		return value;
	};
	try {
		this.finalPosition = new SFVec3f();
	} catch (e) {
		console.log('Problems setting finalPosition '+e);
		console.error('Problems setting finalPosition',e);
	}
	this.set_initialOrientation = function (value) {
		try {
			this.proxy.initialOrientation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting initialOrientation '+e);
			console.error('Problems setting initialOrientation',e);
		}
	};
	this.initialOrientation_changed = function () {
		var value = this.initialOrientation;
		return value;
	};
	try {
		this.initialOrientation = new SFRotation();
	} catch (e) {
		console.log('Problems setting initialOrientation '+e);
		console.error('Problems setting initialOrientation',e);
	}
	this.set_finalOrientation = function (value) {
		try {
			this.proxy.finalOrientation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting finalOrientation '+e);
			console.error('Problems setting finalOrientation',e);
		}
	};
	this.finalOrientation_changed = function () {
		var value = this.finalOrientation;
		return value;
	};
	try {
		this.finalOrientation = new SFRotation();
	} catch (e) {
		console.log('Problems setting finalOrientation '+e);
		console.error('Problems setting finalOrientation',e);
	}
	this.set_runTime = function (value) {
		try {
			this.proxy.runTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting runTime '+e);
			console.error('Problems setting runTime',e);
		}
	};
	this.runTime_changed = function () {
		var value = this.runTime;
		return value;
	};
	try {
		this.runTime = new SFTime();
	} catch (e) {
		console.log('Problems setting runTime '+e);
		console.error('Problems setting runTime',e);
	}
	this.set_position_changeds = function (value) {
		try {
			this.proxy.position_changeds = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting position_changeds '+e);
			console.error('Problems setting position_changeds',e);
		}
	};
	this.position_changeds_changed = function () {
		var value = this.position_changeds;
		return value;
	};
	try {
		this.position_changeds = new MFVec3f();
	} catch (e) {
		console.log('Problems setting position_changeds '+e);
		console.error('Problems setting position_changeds',e);
	}
	this.set_rotationValues = function (value) {
		try {
			this.proxy.rotationValues = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rotationValues '+e);
			console.error('Problems setting rotationValues',e);
		}
	};
	this.rotationValues_changed = function () {
		var value = this.rotationValues;
		return value;
	};
	try {
		this.rotationValues = new MFRotation();
	} catch (e) {
		console.log('Problems setting rotationValues '+e);
		console.error('Problems setting rotationValues',e);
	}


ecmascript:

	this.initialize = function ()
{
	dx = this.proxy.finalPosition.x - this.proxy.initialPosition.x;
	dy = this.proxy.finalPosition.y - this.proxy.initialPosition.y;
	dz = this.proxy.finalPosition.z - this.proxy.initialPosition.z;
//	console.error ('dx=' + dx + ', dy=' + dy + ', dz=' + dz);
	distance = Math.sqrt (dx*dx + dy*dy + dz*dz);
	this.proxy.runTime = distance/20;
//	console.error ('this.proxy.runTime = ' + this.proxy.runTime);
//	console.error ('distance          =' + distance);
	quarterPoint   = this.proxy.initialPosition.add (new SFVec3f (  dx/4,   dy/4 + 0.707*distance,     dz/4));
	halfwaypoint   = this.proxy.initialPosition.add (new SFVec3f (  dx/2,   dy/2 +       distance,     dz/2));
	three4thsPoint = this.proxy.initialPosition.add (new SFVec3f (3*dx/4, 3*dy/4 + 0.707*distance/2, 3*dz/4));
	this.proxy.position_changeds = new MFVec3f (this.proxy.initialPosition, this.proxy.initialPosition, quarterPoint, halfwaypoint, three4thsPoint, this.proxy.finalPosition);
//	console.error ('this.proxy.position_changeds    =' + this.proxy.position_changeds);
	this.proxy.rotationValues = new MFRotation (this.proxy.initialOrientation, this.proxy.finalOrientation);
//	console.error ('this.proxy.initialPosition   =' + this.proxy.initialPosition);
//	console.error ('this.proxy.finalPosition     =' + this.proxy.finalPosition);
//	console.error ('this.proxy.position_changeds    =' + this.proxy.position_changeds);
//	console.error ('this.proxy.initialOrientation=' + this.proxy.initialOrientation);
//	console.error ('this.proxy.finalOrientation  =' + this.proxy.finalOrientation);
//	console.error ('this.proxy.rotationValues=' + this.proxy.rotationValues);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].initialize();
    if (X3DJSON.nodeUtil("Scene","ProtoPositionInterpolatorCalculated")) {
X3DJSON.nodeUtil("Scene","ProtoPositionInterpolatorCalculated").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ProtoOrientationInterpolatorCalculated")) {
X3DJSON.nodeUtil("Scene","ProtoOrientationInterpolatorCalculated").addEventListener('outputchange', function(event) {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript']['ACTION']['position_changeds'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript']['ACTION']['position_changeds'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript']['ACTION']['position_changeds'].push(function(property, value) {
		if (property === 'position_changeds') {
			X3DJSON.nodeUtil("Scene","ProtoPositionInterpolatorCalculated","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].position_changeds === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].position_changeds() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].position_changeds, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ProtoPositionInterpolatorCalculated","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].position_changeds === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].position_changeds() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].position_changeds, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript']['ACTION']['rotationValues'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript']['ACTION']['rotationValues'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript']['ACTION']['rotationValues'].push(function(property, value) {
		if (property === 'rotationValues') {
			X3DJSON.nodeUtil("Scene","ProtoOrientationInterpolatorCalculated","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].rotationValues === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].rotationValues() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].rotationValues, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ProtoOrientationInterpolatorCalculated","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].rotationValues === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].rotationValues() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].rotationValues, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript']['ACTION']['runTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript']['ACTION']['runTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript']['ACTION']['runTime'].push(function(property, value) {
		if (property === 'runTime') {
			X3DJSON.nodeUtil("Scene","ProtoTimeSensor","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].runTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].runTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].runTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ProtoTimeSensor","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].runTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].runTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].runTime, __eventTime);
    if (X3DJSON.nodeUtil("Scene","ProtoTimeSensor")) {
X3DJSON.nodeUtil("Scene","ProtoTimeSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ProtoTimeSensor")) {
X3DJSON.nodeUtil("Scene","ProtoTimeSensor").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON.nodeUtil("Scene","ProtoPositionInterpolatorCalculated","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].position_changeds === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].position_changeds() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].position_changeds, __eventTime);
			X3DJSON.nodeUtil("Scene","ProtoOrientationInterpolatorCalculated","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].rotationValues === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].rotationValues() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].rotationValues, __eventTime);
			X3DJSON.nodeUtil("Scene","ProtoTimeSensor","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].runTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].runTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Explosions/MultipleTimerExplodingBuildingPrototype.json']['ProtoAnimationScript'].runTime, __eventTime);