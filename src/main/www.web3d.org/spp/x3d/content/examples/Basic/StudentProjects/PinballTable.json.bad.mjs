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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'] = function() {
	this.set_startTime = function (value) {
		try {
			this.proxy.startTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startTime '+e);
			console.error('Problems setting startTime',e);
		}
	};
	this.startTime_changed = function () {
		var value = this.startTime;
		return value;
	};
	try {
		this.startTime = undefined;
	} catch (e) {
		console.log('Problems setting startTime '+e);
		console.error('Problems setting startTime',e);
	}
	this.set_startTime1 = function (value) {
		try {
			this.proxy.startTime1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startTime1 '+e);
			console.error('Problems setting startTime1',e);
		}
	};
	this.startTime1_changed = function () {
		var value = this.startTime1;
		return value;
	};
	try {
		this.startTime1 = new SFTime();
	} catch (e) {
		console.log('Problems setting startTime1 '+e);
		console.error('Problems setting startTime1',e);
	}
	this.set_startTime2 = function (value) {
		try {
			this.proxy.startTime2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startTime2 '+e);
			console.error('Problems setting startTime2',e);
		}
	};
	this.startTime2_changed = function () {
		var value = this.startTime2;
		return value;
	};
	try {
		this.startTime2 = new SFTime();
	} catch (e) {
		console.log('Problems setting startTime2 '+e);
		console.error('Problems setting startTime2',e);
	}
	this.set_startTime3 = function (value) {
		try {
			this.proxy.startTime3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startTime3 '+e);
			console.error('Problems setting startTime3',e);
		}
	};
	this.startTime3_changed = function () {
		var value = this.startTime3;
		return value;
	};
	try {
		this.startTime3 = new SFTime();
	} catch (e) {
		console.log('Problems setting startTime3 '+e);
		console.error('Problems setting startTime3',e);
	}
	this.set_startTime4 = function (value) {
		try {
			this.proxy.startTime4 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startTime4 '+e);
			console.error('Problems setting startTime4',e);
		}
	};
	this.startTime4_changed = function () {
		var value = this.startTime4;
		return value;
	};
	try {
		this.startTime4 = new SFTime();
	} catch (e) {
		console.log('Problems setting startTime4 '+e);
		console.error('Problems setting startTime4',e);
	}


ecmascript:

	this.set_startTime = function ( touchTime ) {
	prob= Math.random();

	if ( prob < 0.25 ) {
		this.proxy.startTime1 = touchTime;
	}
	else if ( (prob >= 0.25) && (prob < 0.50) ) {
		this.proxy.startTime2 = touchTime;
	}
	else if ( ( prob >= 0.50) && (prob < 0.75) ) {
		this.proxy.startTime3 = touchTime;
	}
	else {
		this.proxy.startTime4 = touchTime;	
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'] = function() {
	this.set_startTime = function (value) {
		try {
			this.proxy.startTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startTime '+e);
			console.error('Problems setting startTime',e);
		}
	};
	this.startTime_changed = function () {
		var value = this.startTime;
		return value;
	};
	try {
		this.startTime = undefined;
	} catch (e) {
		console.log('Problems setting startTime '+e);
		console.error('Problems setting startTime',e);
	}
	this.set_startTime1 = function (value) {
		try {
			this.proxy.startTime1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startTime1 '+e);
			console.error('Problems setting startTime1',e);
		}
	};
	this.startTime1_changed = function () {
		var value = this.startTime1;
		return value;
	};
	try {
		this.startTime1 = new SFTime();
	} catch (e) {
		console.log('Problems setting startTime1 '+e);
		console.error('Problems setting startTime1',e);
	}
	this.set_startTime2 = function (value) {
		try {
			this.proxy.startTime2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startTime2 '+e);
			console.error('Problems setting startTime2',e);
		}
	};
	this.startTime2_changed = function () {
		var value = this.startTime2;
		return value;
	};
	try {
		this.startTime2 = new SFTime();
	} catch (e) {
		console.log('Problems setting startTime2 '+e);
		console.error('Problems setting startTime2',e);
	}
	this.set_startTime3 = function (value) {
		try {
			this.proxy.startTime3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startTime3 '+e);
			console.error('Problems setting startTime3',e);
		}
	};
	this.startTime3_changed = function () {
		var value = this.startTime3;
		return value;
	};
	try {
		this.startTime3 = new SFTime();
	} catch (e) {
		console.log('Problems setting startTime3 '+e);
		console.error('Problems setting startTime3',e);
	}
	this.set_startTime4 = function (value) {
		try {
			this.proxy.startTime4 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startTime4 '+e);
			console.error('Problems setting startTime4',e);
		}
	};
	this.startTime4_changed = function () {
		var value = this.startTime4;
		return value;
	};
	try {
		this.startTime4 = new SFTime();
	} catch (e) {
		console.log('Problems setting startTime4 '+e);
		console.error('Problems setting startTime4',e);
	}


ecmascript:

	this.set_startTime = function ( touchTime ) {
	prob= Math.random();
	if ( prob < 0.25 ) {
		this.proxy.startTime1 = touchTime;
	}
	else if ( (prob >= 0.25) && (prob < 0.50) ) {
		this.proxy.startTime2 = touchTime;
	}
	else if ( (prob >= 0.50) && (prob < 0.75) ) {
		this.proxy.startTime3 = touchTime;
	}
	else {
		this.proxy.startTime4 = touchTime;	
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].initialize();
    if (X3DJSON.nodeUtil("Scene","CLOCK_1")) {
X3DJSON.nodeUtil("Scene","CLOCK_1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","COLOR_PATH_1")) {
X3DJSON.nodeUtil("Scene","COLOR_PATH_1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","CLOCK_2")) {
X3DJSON.nodeUtil("Scene","CLOCK_2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","COLOR_PATH_2")) {
X3DJSON.nodeUtil("Scene","COLOR_PATH_2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","CLOCK_3")) {
X3DJSON.nodeUtil("Scene","CLOCK_3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","COLOR_PATH_3")) {
X3DJSON.nodeUtil("Scene","COLOR_PATH_3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Touch")) {
X3DJSON.nodeUtil("Scene","Touch").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Clock")) {
X3DJSON.nodeUtil("Scene","Clock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PosBall1")) {
X3DJSON.nodeUtil("Scene","PosBall1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Touch1")) {
X3DJSON.nodeUtil("Scene","Touch1").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].set_startTime(X3DJSON.nodeUtil("Scene","Touch1","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].set_startTime(X3DJSON.nodeUtil("Scene","Touch1","touchTime"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1']['ACTION']['startTime1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1']['ACTION']['startTime1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1']['ACTION']['startTime1'].push(function(property, value) {
		if (property === 'startTime1') {
			X3DJSON.nodeUtil("Scene","Clock1_1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime1, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Clock1_1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime1, __eventTime);
    if (X3DJSON.nodeUtil("Scene","Clock1_1")) {
X3DJSON.nodeUtil("Scene","Clock1_1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PosFlip1_1")) {
X3DJSON.nodeUtil("Scene","PosFlip1_1").addEventListener('outputchange', function(event) {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1']['ACTION']['startTime2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1']['ACTION']['startTime2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1']['ACTION']['startTime2'].push(function(property, value) {
		if (property === 'startTime2') {
			X3DJSON.nodeUtil("Scene","Clock1_2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Clock1_2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime2, __eventTime);
    if (X3DJSON.nodeUtil("Scene","Clock1_2")) {
X3DJSON.nodeUtil("Scene","Clock1_2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PosFlip1_2")) {
X3DJSON.nodeUtil("Scene","PosFlip1_2").addEventListener('outputchange', function(event) {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1']['ACTION']['startTime3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1']['ACTION']['startTime3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1']['ACTION']['startTime3'].push(function(property, value) {
		if (property === 'startTime3') {
			X3DJSON.nodeUtil("Scene","Clock1_3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime3, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Clock1_3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime3, __eventTime);
    if (X3DJSON.nodeUtil("Scene","Clock1_3")) {
X3DJSON.nodeUtil("Scene","Clock1_3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PosFlip1_3")) {
X3DJSON.nodeUtil("Scene","PosFlip1_3").addEventListener('outputchange', function(event) {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1']['ACTION']['startTime4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1']['ACTION']['startTime4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1']['ACTION']['startTime4'].push(function(property, value) {
		if (property === 'startTime4') {
			X3DJSON.nodeUtil("Scene","Clock1_4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime4, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Clock1_4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime4, __eventTime);
    if (X3DJSON.nodeUtil("Scene","Clock1_4")) {
X3DJSON.nodeUtil("Scene","Clock1_4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PosFlip1_4")) {
X3DJSON.nodeUtil("Scene","PosFlip1_4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Touch2")) {
X3DJSON.nodeUtil("Scene","Touch2").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].set_startTime(X3DJSON.nodeUtil("Scene","Touch2","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].set_startTime(X3DJSON.nodeUtil("Scene","Touch2","touchTime"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2']['ACTION']['startTime1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2']['ACTION']['startTime1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2']['ACTION']['startTime1'].push(function(property, value) {
		if (property === 'startTime1') {
			X3DJSON.nodeUtil("Scene","Clock2_1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime1, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Clock2_1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime1, __eventTime);
    if (X3DJSON.nodeUtil("Scene","Clock2_1")) {
X3DJSON.nodeUtil("Scene","Clock2_1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PosFlip2_1")) {
X3DJSON.nodeUtil("Scene","PosFlip2_1").addEventListener('outputchange', function(event) {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2']['ACTION']['startTime2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2']['ACTION']['startTime2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2']['ACTION']['startTime2'].push(function(property, value) {
		if (property === 'startTime2') {
			X3DJSON.nodeUtil("Scene","Clock2_2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Clock2_2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime2, __eventTime);
    if (X3DJSON.nodeUtil("Scene","Clock2_2")) {
X3DJSON.nodeUtil("Scene","Clock2_2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PosFlip2_2")) {
X3DJSON.nodeUtil("Scene","PosFlip2_2").addEventListener('outputchange', function(event) {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2']['ACTION']['startTime3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2']['ACTION']['startTime3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2']['ACTION']['startTime3'].push(function(property, value) {
		if (property === 'startTime3') {
			X3DJSON.nodeUtil("Scene","Clock2_3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime3, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Clock2_3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime3, __eventTime);
    if (X3DJSON.nodeUtil("Scene","Clock2_3")) {
X3DJSON.nodeUtil("Scene","Clock2_3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PosFlip2_3")) {
X3DJSON.nodeUtil("Scene","PosFlip2_3").addEventListener('outputchange', function(event) {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2']['ACTION']['startTime4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2']['ACTION']['startTime4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2']['ACTION']['startTime4'].push(function(property, value) {
		if (property === 'startTime4') {
			X3DJSON.nodeUtil("Scene","Clock2_4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime4, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Clock2_4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime4, __eventTime);
    if (X3DJSON.nodeUtil("Scene","Clock2_4")) {
X3DJSON.nodeUtil("Scene","Clock2_4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PosFlip2_4")) {
X3DJSON.nodeUtil("Scene","PosFlip2_4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Touch1")) {
X3DJSON.nodeUtil("Scene","Touch1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockOrient1")) {
X3DJSON.nodeUtil("Scene","ClockOrient1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","orienFlip1")) {
X3DJSON.nodeUtil("Scene","orienFlip1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Touch2")) {
X3DJSON.nodeUtil("Scene","Touch2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockOrient2")) {
X3DJSON.nodeUtil("Scene","ClockOrient2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","orienFlip2")) {
X3DJSON.nodeUtil("Scene","orienFlip2").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].set_startTime(X3DJSON.nodeUtil("Scene","Touch1","touchTime"), __eventTime);
			X3DJSON.nodeUtil("Scene","Clock1_1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime1, __eventTime);
			X3DJSON.nodeUtil("Scene","Clock1_2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime2, __eventTime);
			X3DJSON.nodeUtil("Scene","Clock1_3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime3, __eventTime);
			X3DJSON.nodeUtil("Scene","Clock1_4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter1'].startTime4, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].set_startTime(X3DJSON.nodeUtil("Scene","Touch2","touchTime"), __eventTime);
			X3DJSON.nodeUtil("Scene","Clock2_1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime1, __eventTime);
			X3DJSON.nodeUtil("Scene","Clock2_2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime2, __eventTime);
			X3DJSON.nodeUtil("Scene","Clock2_3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime3, __eventTime);
			X3DJSON.nodeUtil("Scene","Clock2_4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/PinballTable.json']['routeSelecter2'].startTime4, __eventTime);