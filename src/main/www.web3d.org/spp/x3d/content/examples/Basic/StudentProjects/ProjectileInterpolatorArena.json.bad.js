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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['ValueDisplayer'] = function() {
	this.set_setTextValues = function (value) {
		try {
			this.proxy.setTextValues = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setTextValues '+e);
			console.error('Problems setting setTextValues',e);
		}
	};
	this.setTextValues_changed = function () {
		var value = this.setTextValues;
		return value;
	};
	try {
		this.setTextValues = new SFVec3f();
	} catch (e) {
		console.log('Problems setting setTextValues '+e);
		console.error('Problems setting setTextValues',e);
	}
	this.set_reset = function (value) {
		try {
			this.proxy.reset = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting reset '+e);
			console.error('Problems setting reset',e);
		}
	};
	this.reset_changed = function () {
		var value = this.reset;
		return value;
	};
	try {
		this.reset = new SFBool();
	} catch (e) {
		console.log('Problems setting reset '+e);
		console.error('Problems setting reset',e);
	}
	this.set_RangeText = function (value) {
		try {
			this.proxy.RangeText = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting RangeText '+e);
			console.error('Problems setting RangeText',e);
		}
	};
	this.RangeText_changed = function () {
		var value = this.RangeText;
		return value;
	};
	try {
		this.RangeText = X3DJSON.nodeUtil("Scene","RangeText");
	} catch (e) {
		console.log('Problems setting RangeText '+e);
		console.error('Problems setting RangeText',e);
	}
	this.set_HeightText = function (value) {
		try {
			this.proxy.HeightText = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting HeightText '+e);
			console.error('Problems setting HeightText',e);
		}
	};
	this.HeightText_changed = function () {
		var value = this.HeightText;
		return value;
	};
	try {
		this.HeightText = X3DJSON.nodeUtil("Scene","HeightText");
	} catch (e) {
		console.log('Problems setting HeightText '+e);
		console.error('Problems setting HeightText',e);
	}


ecmascript:
var maxValue;

	this.initialize = function () {
   maxValue = 0;
}
;

	this.setTextValues = function (values, timeEvent) {
   var precision = 2;
   X3DJSON.nodeUtil("Scene","RangeText", "string")[0] ='Range            ' + this.roundOff(values[0], precision);
   if(values[1] > maxValue) {
      maxValue = this.roundOff(values[1], precision);
      console.error ('maximum' + maxValue);
   }

   console.error ('values' + values[1]);
   X3DJSON.nodeUtil("Scene","HeightText", "string")[0] ='Max Height   ' + maxValue;
}
;

	this.reset = function (bool, eventTime) {
   maxValue = 0;
}

//A;

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['ValueDisplayer'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['ValueDisplayer']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['ValueDisplayer'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['ValueDisplayer'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['ValueDisplayer']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['ValueDisplayer']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['ValueDisplayer'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['ValueDisplayer']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['ValueDisplayer']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['ValueDisplayer'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['ValueDisplayer'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['TimeConverter'] = function() {
	this.set_TimerNode = function (value) {
		try {
			this.proxy.TimerNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TimerNode '+e);
			console.error('Problems setting TimerNode',e);
		}
	};
	this.TimerNode_changed = function () {
		var value = this.TimerNode;
		return value;
	};
	try {
		this.TimerNode = X3DJSON.nodeUtil("Scene","Timer");
	} catch (e) {
		console.log('Problems setting TimerNode '+e);
		console.error('Problems setting TimerNode',e);
	}
	this.set_setTime = function (value) {
		try {
			this.proxy.setTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setTime '+e);
			console.error('Problems setting setTime',e);
		}
	};
	this.setTime_changed = function () {
		var value = this.setTime;
		return value;
	};
	try {
		this.setTime = new SFFloat();
	} catch (e) {
		console.log('Problems setting setTime '+e);
		console.error('Problems setting setTime',e);
	}


ecmascript:
	this.initialize = function () {
}
;

	this.setTime = function (inputTime, timeEvent) {
   X3DJSON.nodeUtil("Scene","Timer", "cycleInterval",  inputTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['TimeConverter'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['TimeConverter']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['TimeConverter'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['TimeConverter'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['TimeConverter']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['TimeConverter']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['TimeConverter'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['TimeConverter']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['TimeConverter']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['TimeConverter'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['TimeConverter'].initialize();
    if (X3DJSON.nodeUtil("Scene","SliderVelocity")) {
X3DJSON.nodeUtil("Scene","SliderVelocity").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","SliderAngle")) {
X3DJSON.nodeUtil("Scene","SliderAngle").addEventListener('outputchange', function(event) {
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
    if (X3DJSON.nodeUtil("Scene","HudProx")) {
X3DJSON.nodeUtil("Scene","HudProx").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ProjectileInterpolator")) {
X3DJSON.nodeUtil("Scene","ProjectileInterpolator").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['ValueDisplayer'].setTextValues(X3DJSON.nodeUtil("Scene","ProjectileInterpolator","value"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['ValueDisplayer'].setTextValues(X3DJSON.nodeUtil("Scene","ProjectileInterpolator","value"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","Timer")) {
X3DJSON.nodeUtil("Scene","Timer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","HitSensor")) {
X3DJSON.nodeUtil("Scene","HitSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","HitSensor")) {
X3DJSON.nodeUtil("Scene","HitSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['ValueDisplayer'].reset(X3DJSON.nodeUtil("Scene","HitSensor","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['ValueDisplayer'].reset(X3DJSON.nodeUtil("Scene","HitSensor","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","ProjectileInterpolator")) {
X3DJSON.nodeUtil("Scene","ProjectileInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TimeCycle")) {
X3DJSON.nodeUtil("Scene","TimeCycle").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['TimeConverter'].setTime(X3DJSON.nodeUtil("Scene","TimeCycle","currentValueFloat"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['TimeConverter'].setTime(X3DJSON.nodeUtil("Scene","TimeCycle","currentValueFloat"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['ValueDisplayer'].setTextValues(X3DJSON.nodeUtil("Scene","ProjectileInterpolator","value"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['ValueDisplayer'].reset(X3DJSON.nodeUtil("Scene","HitSensor","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorArena.json']['TimeConverter'].setTime(X3DJSON.nodeUtil("Scene","TimeCycle","currentValueFloat"), __eventTime);