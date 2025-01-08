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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter'] = function() {
	this.set_setStart = function (value) {
		try {
			this.proxy.setStart = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setStart '+e);
			console.error('Problems setting setStart',e);
		}
	};
	this.setStart_changed = function () {
		var value = this.setStart;
		return value;
	};
	try {
		this.setStart = new SFBool();
	} catch (e) {
		console.log('Problems setting setStart '+e);
		console.error('Problems setting setStart',e);
	}
	this.set_startEventTime = function (value) {
		try {
			this.proxy.startEventTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startEventTime '+e);
			console.error('Problems setting startEventTime',e);
		}
	};
	this.startEventTime_changed = function () {
		var value = this.startEventTime;
		return value;
	};
	try {
		this.startEventTime = new SFTime();
	} catch (e) {
		console.log('Problems setting startEventTime '+e);
		console.error('Problems setting startEventTime',e);
	}


ecmascript:


	this.setStart = function ( value, timeStamp) {

	this.proxy.startEventTime = timeStamp;

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'] = function() {
	this.set_setStart = function (value) {
		try {
			this.proxy.setStart = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setStart '+e);
			console.error('Problems setting setStart',e);
		}
	};
	this.setStart_changed = function () {
		var value = this.setStart;
		return value;
	};
	try {
		this.setStart = new SFBool();
	} catch (e) {
		console.log('Problems setting setStart '+e);
		console.error('Problems setting setStart',e);
	}
	this.set_startEventTime = function (value) {
		try {
			this.proxy.startEventTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startEventTime '+e);
			console.error('Problems setting startEventTime',e);
		}
	};
	this.startEventTime_changed = function () {
		var value = this.startEventTime;
		return value;
	};
	try {
		this.startEventTime = new SFTime();
	} catch (e) {
		console.log('Problems setting startEventTime '+e);
		console.error('Problems setting startEventTime',e);
	}


ecmascript:


	this.setStart = function ( value, timeStamp) {

	this.proxy.startEventTime = timeStamp;

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter'] = function() {
	this.set_setStart = function (value) {
		try {
			this.proxy.setStart = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setStart '+e);
			console.error('Problems setting setStart',e);
		}
	};
	this.setStart_changed = function () {
		var value = this.setStart;
		return value;
	};
	try {
		this.setStart = new SFBool();
	} catch (e) {
		console.log('Problems setting setStart '+e);
		console.error('Problems setting setStart',e);
	}
	this.set_startEventTime = function (value) {
		try {
			this.proxy.startEventTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startEventTime '+e);
			console.error('Problems setting startEventTime',e);
		}
	};
	this.startEventTime_changed = function () {
		var value = this.startEventTime;
		return value;
	};
	try {
		this.startEventTime = new SFTime();
	} catch (e) {
		console.log('Problems setting startEventTime '+e);
		console.error('Problems setting startEventTime',e);
	}


ecmascript:


	this.setStart = function ( value, timeStamp) {

	this.proxy.startEventTime = timeStamp;

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter'].initialize();
    if (X3DJSON.nodeUtil("Scene","Cole")) {
X3DJSON.nodeUtil("Scene","Cole").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter'].setStart(X3DJSON.nodeUtil("Scene","Cole","isCollided"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter'].setStart(X3DJSON.nodeUtil("Scene","Cole","isCollided"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter']['ACTION']['startEventTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter']['ACTION']['startEventTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter']['ACTION']['startEventTime'].push(function(property, value) {
		if (property === 'startEventTime') {
			X3DJSON.nodeUtil("Scene","DDG-51","startExplosion",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter'].startEventTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter'].startEventTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter'].startEventTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","DDG-51","startExplosion",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter'].startEventTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter'].startEventTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter'].startEventTime, __eventTime);
    if (X3DJSON.nodeUtil("Scene","RedBoat")) {
X3DJSON.nodeUtil("Scene","RedBoat").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'].setStart(X3DJSON.nodeUtil("Scene","RedBoat","isCollided"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'].setStart(X3DJSON.nodeUtil("Scene","RedBoat","isCollided"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter']['ACTION']['startEventTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter']['ACTION']['startEventTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter']['ACTION']['startEventTime'].push(function(property, value) {
		if (property === 'startEventTime') {
			X3DJSON.nodeUtil("Scene","TerroristExplosion","startExplosion",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'].startEventTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'].startEventTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'].startEventTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TerroristExplosion","startExplosion",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'].startEventTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'].startEventTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'].startEventTime, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter']['ACTION']['startEventTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter']['ACTION']['startEventTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter']['ACTION']['startEventTime'].push(function(property, value) {
		if (property === 'startEventTime') {
			X3DJSON.nodeUtil("Scene","Boat","startExplosion",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'].startEventTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'].startEventTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'].startEventTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Boat","startExplosion",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'].startEventTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'].startEventTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'].startEventTime, __eventTime);
    if (X3DJSON.nodeUtil("Scene","myLauncher")) {
X3DJSON.nodeUtil("Scene","myLauncher").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","myLauncher")) {
X3DJSON.nodeUtil("Scene","myLauncher").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","myLauncher")) {
X3DJSON.nodeUtil("Scene","myLauncher").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","myLauncher")) {
X3DJSON.nodeUtil("Scene","myLauncher").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ColeRHIB")) {
X3DJSON.nodeUtil("Scene","ColeRHIB").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter'].setStart(X3DJSON.nodeUtil("Scene","ColeRHIB","isCollided"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter'].setStart(X3DJSON.nodeUtil("Scene","ColeRHIB","isCollided"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter']['ACTION']['startEventTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter']['ACTION']['startEventTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter']['ACTION']['startEventTime'].push(function(property, value) {
		if (property === 'startEventTime') {
			X3DJSON.nodeUtil("Scene","myLauncher","startLaunchToStbd",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter'].startEventTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter'].startEventTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter'].startEventTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","myLauncher","startLaunchToStbd",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter'].startEventTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter'].startEventTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter'].startEventTime, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter'].setStart(X3DJSON.nodeUtil("Scene","Cole","isCollided"), __eventTime);
			X3DJSON.nodeUtil("Scene","DDG-51","startExplosion",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter'].startEventTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter'].startEventTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['ColeTimeFilter'].startEventTime, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'].setStart(X3DJSON.nodeUtil("Scene","RedBoat","isCollided"), __eventTime);
			X3DJSON.nodeUtil("Scene","TerroristExplosion","startExplosion",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'].startEventTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'].startEventTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'].startEventTime, __eventTime);
			X3DJSON.nodeUtil("Scene","Boat","startExplosion",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'].startEventTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'].startEventTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['TimeFilter'].startEventTime, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter'].setStart(X3DJSON.nodeUtil("Scene","ColeRHIB","isCollided"), __eventTime);
			X3DJSON.nodeUtil("Scene","myLauncher","startLaunchToStbd",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter'].startEventTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter'].startEventTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/LimitedObjectiveExperimentPortHueneme/LimitedObjectiveExperimentPortHuenemeDIS.json']['RhibTimeFilter'].startEventTime, __eventTime);