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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2'] = function() {
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
	this.setStart = function ( value, timeStamp )
{
	this.proxy.startEventTime = timeStamp + 28;
	console.error ('TimeFilter.proxy.setStart (' + value + '), this.proxy.startEventTime =' + timeStamp);
	console.error (' ');
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE'] = function() {
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
	this.set_InputTime = function (value) {
		try {
			this.proxy.InputTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting InputTime '+e);
			console.error('Problems setting InputTime',e);
		}
	};
	this.InputTime_changed = function () {
		var value = this.InputTime;
		return value;
	};
	try {
		this.InputTime = new SFTime();
	} catch (e) {
		console.log('Problems setting InputTime '+e);
		console.error('Problems setting InputTime',e);
	}


ecmascript:
	this.setStart = function ( value, this.proxy.InputTime )
{
	this.proxy.startEventTime = this.proxy.InputTime + 28 ;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT'] = function() {
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
	this.set_InputTime = function (value) {
		try {
			this.proxy.InputTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting InputTime '+e);
			console.error('Problems setting InputTime',e);
		}
	};
	this.InputTime_changed = function () {
		var value = this.InputTime;
		return value;
	};
	try {
		this.InputTime = new SFTime();
	} catch (e) {
		console.log('Problems setting InputTime '+e);
		console.error('Problems setting InputTime',e);
	}


ecmascript:
	this.setStart = function ( value, this.proxy.InputTime )
{
	this.proxy.startEventTime = this.proxy.InputTime + 28 ;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT'].initialize();
    if (X3DJSON.nodeUtil("Scene","LAUNCHBGM")) {
X3DJSON.nodeUtil("Scene","LAUNCHBGM").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE'].setStart(X3DJSON.nodeUtil("Scene","LAUNCHBGM","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE'].setStart(X3DJSON.nodeUtil("Scene","LAUNCHBGM","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","LAUNCHBGM")) {
X3DJSON.nodeUtil("Scene","LAUNCHBGM").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE'].InputTime(X3DJSON.nodeUtil("Scene","LAUNCHBGM","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE'].InputTime(X3DJSON.nodeUtil("Scene","LAUNCHBGM","touchTime"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE']['ACTION']['startEventTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE']['ACTION']['startEventTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE']['ACTION']['startEventTime'].push(function(property, value) {
		if (property === 'startEventTime') {
			X3DJSON.nodeUtil("Scene","ExplosionClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE'].startEventTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE'].startEventTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE'].startEventTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ExplosionClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE'].startEventTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE'].startEventTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE'].startEventTime, __eventTime);
    if (X3DJSON.nodeUtil("Scene","ExplosionClock")) {
X3DJSON.nodeUtil("Scene","ExplosionClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ExplosionClock")) {
X3DJSON.nodeUtil("Scene","ExplosionClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ExplosionClock")) {
X3DJSON.nodeUtil("Scene","ExplosionClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ExplosionClock")) {
X3DJSON.nodeUtil("Scene","ExplosionClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ExplosionClock")) {
X3DJSON.nodeUtil("Scene","ExplosionClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ExplosionClock")) {
X3DJSON.nodeUtil("Scene","ExplosionClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ExplosionClock")) {
X3DJSON.nodeUtil("Scene","ExplosionClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ExplosionClock")) {
X3DJSON.nodeUtil("Scene","ExplosionClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ExplosionClock")) {
X3DJSON.nodeUtil("Scene","ExplosionClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ExplosionClock")) {
X3DJSON.nodeUtil("Scene","ExplosionClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ExplosionClock")) {
X3DJSON.nodeUtil("Scene","ExplosionClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","LAUNCHAFT")) {
X3DJSON.nodeUtil("Scene","LAUNCHAFT").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT'].setStart(X3DJSON.nodeUtil("Scene","LAUNCHAFT","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT'].setStart(X3DJSON.nodeUtil("Scene","LAUNCHAFT","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","LAUNCHAFT")) {
X3DJSON.nodeUtil("Scene","LAUNCHAFT").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT'].InputTime(X3DJSON.nodeUtil("Scene","LAUNCHAFT","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT'].InputTime(X3DJSON.nodeUtil("Scene","LAUNCHAFT","touchTime"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT']['ACTION']['startEventTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT']['ACTION']['startEventTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT']['ACTION']['startEventTime'].push(function(property, value) {
		if (property === 'startEventTime') {
			X3DJSON.nodeUtil("Scene","ExplosionClockAFT","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT'].startEventTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT'].startEventTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT'].startEventTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ExplosionClockAFT","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT'].startEventTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT'].startEventTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT'].startEventTime, __eventTime);
    if (X3DJSON.nodeUtil("Scene","ExplosionClockAFT")) {
X3DJSON.nodeUtil("Scene","ExplosionClockAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ExplosionClockAFT")) {
X3DJSON.nodeUtil("Scene","ExplosionClockAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ExplosionClockAFT")) {
X3DJSON.nodeUtil("Scene","ExplosionClockAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ExplosionClockAFT")) {
X3DJSON.nodeUtil("Scene","ExplosionClockAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ExplosionClockAFT")) {
X3DJSON.nodeUtil("Scene","ExplosionClockAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ExplosionClockAFT")) {
X3DJSON.nodeUtil("Scene","ExplosionClockAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ExplosionClockAFT")) {
X3DJSON.nodeUtil("Scene","ExplosionClockAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ExplosionClockAFT")) {
X3DJSON.nodeUtil("Scene","ExplosionClockAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ExplosionClockAFT")) {
X3DJSON.nodeUtil("Scene","ExplosionClockAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ExplosionClockAFT")) {
X3DJSON.nodeUtil("Scene","ExplosionClockAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ExplosionClockAFT")) {
X3DJSON.nodeUtil("Scene","ExplosionClockAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RGMCLOCK")) {
X3DJSON.nodeUtil("Scene","RGMCLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RGMCLOCK")) {
X3DJSON.nodeUtil("Scene","RGMCLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RGMCLOCK")) {
X3DJSON.nodeUtil("Scene","RGMCLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RGMCLOCK")) {
X3DJSON.nodeUtil("Scene","RGMCLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RGMANGLE")) {
X3DJSON.nodeUtil("Scene","RGMANGLE").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RGMPOSIT")) {
X3DJSON.nodeUtil("Scene","RGMPOSIT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","VIEWPOSIT")) {
X3DJSON.nodeUtil("Scene","VIEWPOSIT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","VIEWANGLE")) {
X3DJSON.nodeUtil("Scene","VIEWANGLE").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RGMCLOCK")) {
X3DJSON.nodeUtil("Scene","RGMCLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","MISSILESCALE")) {
X3DJSON.nodeUtil("Scene","MISSILESCALE").addEventListener('outputchange', function(event) {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2']['ACTION']['startEventTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2']['ACTION']['startEventTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2']['ACTION']['startEventTime'].push(function(property, value) {
		if (property === 'startEventTime') {
			X3DJSON.nodeUtil("Scene","SINKCLOCK","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2'].startEventTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2'].startEventTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2'].startEventTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SINKCLOCK","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2'].startEventTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2'].startEventTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2'].startEventTime, __eventTime);
    if (X3DJSON.nodeUtil("Scene","SINKCLOCK")) {
X3DJSON.nodeUtil("Scene","SINKCLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","SINKINGSHIP")) {
X3DJSON.nodeUtil("Scene","SINKINGSHIP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","SINKCLOCK")) {
X3DJSON.nodeUtil("Scene","SINKCLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","SINKANGLE")) {
X3DJSON.nodeUtil("Scene","SINKANGLE").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","LAUNCHRGM")) {
X3DJSON.nodeUtil("Scene","LAUNCHRGM").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","LAUNCHRGM")) {
X3DJSON.nodeUtil("Scene","LAUNCHRGM").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2'].setStart(X3DJSON.nodeUtil("Scene","LAUNCHRGM","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2'].setStart(X3DJSON.nodeUtil("Scene","LAUNCHRGM","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","LAUNCHRGM")) {
X3DJSON.nodeUtil("Scene","LAUNCHRGM").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","LAUNCHRGM")) {
X3DJSON.nodeUtil("Scene","LAUNCHRGM").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","LAUNCHRGM")) {
X3DJSON.nodeUtil("Scene","LAUNCHRGM").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","LAUNCHRGM")) {
X3DJSON.nodeUtil("Scene","LAUNCHRGM").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","LAUNCHBGM")) {
X3DJSON.nodeUtil("Scene","LAUNCHBGM").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","LAUNCHBGM")) {
X3DJSON.nodeUtil("Scene","LAUNCHBGM").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","LAUNCHBGM")) {
X3DJSON.nodeUtil("Scene","LAUNCHBGM").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TLAMCLOCK")) {
X3DJSON.nodeUtil("Scene","TLAMCLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TLAMCLOCK")) {
X3DJSON.nodeUtil("Scene","TLAMCLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TLAMCLOCK")) {
X3DJSON.nodeUtil("Scene","TLAMCLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TLAMPOSIT")) {
X3DJSON.nodeUtil("Scene","TLAMPOSIT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TLAMANGLE")) {
X3DJSON.nodeUtil("Scene","TLAMANGLE").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TLAMSCALE")) {
X3DJSON.nodeUtil("Scene","TLAMSCALE").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TLAMCLOCK")) {
X3DJSON.nodeUtil("Scene","TLAMCLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TLAMCLOCK")) {
X3DJSON.nodeUtil("Scene","TLAMCLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TLAMVIEWANGLE")) {
X3DJSON.nodeUtil("Scene","TLAMVIEWANGLE").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TLAMVIEWPOSIT")) {
X3DJSON.nodeUtil("Scene","TLAMVIEWPOSIT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","LAUNCHBGM")) {
X3DJSON.nodeUtil("Scene","LAUNCHBGM").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","LAUNCHBGM")) {
X3DJSON.nodeUtil("Scene","LAUNCHBGM").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","LAUNCHBGM")) {
X3DJSON.nodeUtil("Scene","LAUNCHBGM").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","VLSCLOCK")) {
X3DJSON.nodeUtil("Scene","VLSCLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","VLSORIENT")) {
X3DJSON.nodeUtil("Scene","VLSORIENT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","VLSCLOCK")) {
X3DJSON.nodeUtil("Scene","VLSCLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","VLSPOSIT")) {
X3DJSON.nodeUtil("Scene","VLSPOSIT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","LAUNCHAFT")) {
X3DJSON.nodeUtil("Scene","LAUNCHAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","LAUNCHAFT")) {
X3DJSON.nodeUtil("Scene","LAUNCHAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","LAUNCHAFT")) {
X3DJSON.nodeUtil("Scene","LAUNCHAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","LAUNCHAFT")) {
X3DJSON.nodeUtil("Scene","LAUNCHAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","LAUNCHAFT")) {
X3DJSON.nodeUtil("Scene","LAUNCHAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","CLOCKAFT")) {
X3DJSON.nodeUtil("Scene","CLOCKAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ORIENTAFT")) {
X3DJSON.nodeUtil("Scene","ORIENTAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","CLOCKAFT")) {
X3DJSON.nodeUtil("Scene","CLOCKAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","POSITAFT")) {
X3DJSON.nodeUtil("Scene","POSITAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","LAUNCHAFT")) {
X3DJSON.nodeUtil("Scene","LAUNCHAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TLAMCLOCKAFT")) {
X3DJSON.nodeUtil("Scene","TLAMCLOCKAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TLAMCLOCKAFT")) {
X3DJSON.nodeUtil("Scene","TLAMCLOCKAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TLAMCLOCKAFT")) {
X3DJSON.nodeUtil("Scene","TLAMCLOCKAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TLAMPOSITAFT")) {
X3DJSON.nodeUtil("Scene","TLAMPOSITAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TLAMANGLEAFT")) {
X3DJSON.nodeUtil("Scene","TLAMANGLEAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TLAMSCALEAFT")) {
X3DJSON.nodeUtil("Scene","TLAMSCALEAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TLAMCLOCKAFT")) {
X3DJSON.nodeUtil("Scene","TLAMCLOCKAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TLAMCLOCKAFT")) {
X3DJSON.nodeUtil("Scene","TLAMCLOCKAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TLAMVIEWANGLEAFT")) {
X3DJSON.nodeUtil("Scene","TLAMVIEWANGLEAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TLAMVIEWPOSITAFT")) {
X3DJSON.nodeUtil("Scene","TLAMVIEWPOSITAFT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ProSense")) {
X3DJSON.nodeUtil("Scene","ProSense").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ProSense")) {
X3DJSON.nodeUtil("Scene","ProSense").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ProSense")) {
X3DJSON.nodeUtil("Scene","ProSense").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE'].setStart(X3DJSON.nodeUtil("Scene","LAUNCHBGM","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE'].InputTime(X3DJSON.nodeUtil("Scene","LAUNCHBGM","touchTime"), __eventTime);
			X3DJSON.nodeUtil("Scene","ExplosionClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE'].startEventTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE'].startEventTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterE'].startEventTime, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT'].setStart(X3DJSON.nodeUtil("Scene","LAUNCHAFT","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT'].InputTime(X3DJSON.nodeUtil("Scene","LAUNCHAFT","touchTime"), __eventTime);
			X3DJSON.nodeUtil("Scene","ExplosionClockAFT","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT'].startEventTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT'].startEventTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilterEAFT'].startEventTime, __eventTime);
			X3DJSON.nodeUtil("Scene","SINKCLOCK","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2'].startEventTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2'].startEventTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2'].startEventTime, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Weapons/Missiles/MissileLaunch.json']['TimeFilter2'].setStart(X3DJSON.nodeUtil("Scene","LAUNCHRGM","isActive"), __eventTime);