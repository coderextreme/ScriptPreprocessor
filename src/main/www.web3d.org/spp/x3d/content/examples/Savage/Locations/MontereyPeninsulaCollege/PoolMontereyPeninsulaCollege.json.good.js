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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/MontereyPeninsulaCollege/PoolMontereyPeninsulaCollege.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/MontereyPeninsulaCollege/PoolMontereyPeninsulaCollege.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/MontereyPeninsulaCollege/PoolMontereyPeninsulaCollege.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/MontereyPeninsulaCollege/PoolMontereyPeninsulaCollege.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/MontereyPeninsulaCollege/PoolMontereyPeninsulaCollege.json']['Trace_ROUTE_ViewOverhead.isBound_TO_NavigationExamineMode.set_bind'] = function() {
	this.set_reportInterval = function (value) {
		try {
			this.proxy.reportInterval = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting reportInterval '+e);
			console.error('Problems setting reportInterval',e);
		}
	};
	this.reportInterval_changed = function () {
		var value = this.reportInterval;
		return value;
	};
	try {
		this.reportInterval = new SFTime(1);
	} catch (e) {
		console.log('Problems setting reportInterval '+e);
		console.error('Problems setting reportInterval',e);
	}
	this.set_traceValue = function (value) {
		try {
			this.proxy.traceValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting traceValue '+e);
			console.error('Problems setting traceValue',e);
		}
	};
	this.traceValue_changed = function () {
		var value = this.traceValue;
		return value;
	};
	try {
		this.traceValue = new SFBool();
	} catch (e) {
		console.log('Problems setting traceValue '+e);
		console.error('Problems setting traceValue',e);
	}
	this.set_timeStampPreviousReport = function (value) {
		try {
			this.proxy.timeStampPreviousReport = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting timeStampPreviousReport '+e);
			console.error('Problems setting timeStampPreviousReport',e);
		}
	};
	this.timeStampPreviousReport_changed = function () {
		var value = this.timeStampPreviousReport;
		return value;
	};
	try {
		this.timeStampPreviousReport = new SFTime(-1);
	} catch (e) {
		console.log('Problems setting timeStampPreviousReport '+e);
		console.error('Problems setting timeStampPreviousReport',e);
	}


ecmascript:
   
	this.set_traceValue = function (eventValue, timeStamp)
    {
        console.error ('Script method this.set_traceValue invoked, which is now handing off to this.traceValueHandler()...');
        this.traceValueHandler (eventValue, timeStamp);
    }
   ;

	this.traceValue = function (eventValue, timeStamp)
    {
        console.error ('Script method this.proxy.traceValue invoked, which is now handing off to this.traceValueHandler()...');
        this.traceValueHandler (eventValue, timeStamp);
    }
   ;

	this.traceValueHandler = function (eventValue, timeStamp)
    {
      // input eventValue received for trace field
      if (timeStamp - this.proxy.timeStampPreviousReport >= this.proxy.reportInterval) {
        console.error ('Trace_ROUTE_ViewOverhead.isBound_TO_NavigationExamineMode.set_bind type=SFBool value=' + eventValue);
        this.proxy.timeStampPreviousReport = timeStamp;
        if  (eventValue == true)
             console.error ('User navigation should be EXAMINE');
        else console.error ('User navigation should be FLY');
      }
    }
   ;

	this.timeOfDay = function (someTime) {
      hh = Math.floor (someTime /(60*60)) % 24;
      mm = Math.floor (someTime / 60)     % 60;
      ss = Math.floor (someTime)          % 60;
      if (hh < 9) hour   = '0' + hh;
      else        hour   =       hh;
      if (mm < 9) minute = '0' + mm;
      else        minute =       mm;
      if (ss < 9) second = '0' + ss;
      else        second =       ss;
      return '(' + hour + ':' + minute + ':' + second + ' GMT)';
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/MontereyPeninsulaCollege/PoolMontereyPeninsulaCollege.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/MontereyPeninsulaCollege/PoolMontereyPeninsulaCollege.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/MontereyPeninsulaCollege/PoolMontereyPeninsulaCollege.json']['Trace_ROUTE_ViewOverhead.isBound_TO_NavigationExamineMode.set_bind'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/MontereyPeninsulaCollege/PoolMontereyPeninsulaCollege.json']['Trace_ROUTE_ViewOverhead.isBound_TO_NavigationExamineMode.set_bind']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/MontereyPeninsulaCollege/PoolMontereyPeninsulaCollege.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/MontereyPeninsulaCollege/PoolMontereyPeninsulaCollege.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/MontereyPeninsulaCollege/PoolMontereyPeninsulaCollege.json']['Trace_ROUTE_ViewOverhead.isBound_TO_NavigationExamineMode.set_bind'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/MontereyPeninsulaCollege/PoolMontereyPeninsulaCollege.json']['Trace_ROUTE_ViewOverhead.isBound_TO_NavigationExamineMode.set_bind'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/MontereyPeninsulaCollege/PoolMontereyPeninsulaCollege.json']['Trace_ROUTE_ViewOverhead.isBound_TO_NavigationExamineMode.set_bind']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/MontereyPeninsulaCollege/PoolMontereyPeninsulaCollege.json']['Trace_ROUTE_ViewOverhead.isBound_TO_NavigationExamineMode.set_bind']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/MontereyPeninsulaCollege/PoolMontereyPeninsulaCollege.json']['Trace_ROUTE_ViewOverhead.isBound_TO_NavigationExamineMode.set_bind'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/MontereyPeninsulaCollege/PoolMontereyPeninsulaCollege.json']['Trace_ROUTE_ViewOverhead.isBound_TO_NavigationExamineMode.set_bind']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/MontereyPeninsulaCollege/PoolMontereyPeninsulaCollege.json']['Trace_ROUTE_ViewOverhead.isBound_TO_NavigationExamineMode.set_bind']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/MontereyPeninsulaCollege/PoolMontereyPeninsulaCollege.json']['Trace_ROUTE_ViewOverhead.isBound_TO_NavigationExamineMode.set_bind'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/MontereyPeninsulaCollege/PoolMontereyPeninsulaCollege.json']['Trace_ROUTE_ViewOverhead.isBound_TO_NavigationExamineMode.set_bind'].initialize();
    if (X3DJSON.nodeUtil("Scene","ViewOverhead")) {
X3DJSON.nodeUtil("Scene","ViewOverhead").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/MontereyPeninsulaCollege/PoolMontereyPeninsulaCollege.json']['Trace_ROUTE_ViewOverhead.isBound_TO_NavigationExamineMode.set_bind'].traceValue(X3DJSON.nodeUtil("Scene","ViewOverhead","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/MontereyPeninsulaCollege/PoolMontereyPeninsulaCollege.json']['Trace_ROUTE_ViewOverhead.isBound_TO_NavigationExamineMode.set_bind'].traceValue(X3DJSON.nodeUtil("Scene","ViewOverhead","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","PoolSwitcherClock")) {
X3DJSON.nodeUtil("Scene","PoolSwitcherClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PoolSequencer")) {
X3DJSON.nodeUtil("Scene","PoolSequencer").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/MontereyPeninsulaCollege/PoolMontereyPeninsulaCollege.json']['Trace_ROUTE_ViewOverhead.isBound_TO_NavigationExamineMode.set_bind'].traceValue(X3DJSON.nodeUtil("Scene","ViewOverhead","isBound"), __eventTime);