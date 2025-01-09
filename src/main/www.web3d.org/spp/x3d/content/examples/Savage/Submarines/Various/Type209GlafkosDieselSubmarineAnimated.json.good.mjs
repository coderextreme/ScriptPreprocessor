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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove'] = function() {
	this.set_fraction = function (value) {
		try {
			this.proxy.fraction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fraction '+e);
			console.error('Problems setting fraction',e);
		}
	};
	this.fraction_changed = function () {
		var value = this.fraction;
		return value;
	};
	try {
		this.fraction = undefined;
	} catch (e) {
		console.log('Problems setting fraction '+e);
		console.error('Problems setting fraction',e);
	}
	this.set_value = function (value) {
		try {
			this.proxy.value = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting value '+e);
			console.error('Problems setting value',e);
		}
	};
	this.value_changed = function () {
		var value = this.value;
		return value;
	};
	try {
		this.value = undefined;
	} catch (e) {
		console.log('Problems setting value '+e);
		console.error('Problems setting value',e);
	}
	this.set_radius = function (value) {
		try {
			this.proxy.radius = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radius '+e);
			console.error('Problems setting radius',e);
		}
	};
	this.radius_changed = function () {
		var value = this.radius;
		return value;
	};
	try {
		this.radius = new SFFloat(10);
	} catch (e) {
		console.log('Problems setting radius '+e);
		console.error('Problems setting radius',e);
	}
	this.set_turns = function (value) {
		try {
			this.proxy.turns = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting turns '+e);
			console.error('Problems setting turns',e);
		}
	};
	this.turns_changed = function () {
		var value = this.turns;
		return value;
	};
	try {
		this.turns = new SFFloat(1);
	} catch (e) {
		console.log('Problems setting turns '+e);
		console.error('Problems setting turns',e);
	}


ecmascript:

	this.set_fraction = function (fraction,eventTime) 
{
 this.proxy.value_changed[0]=this.proxy.radius*Math.sin(this.proxy.turns*fraction*6.28);
 this.proxy.value_changed[1]=0;
 this.proxy.value_changed[2]=this.proxy.radius*Math.cos(this.proxy.turns*fraction*6.28)
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn'] = function() {
	this.set_fraction = function (value) {
		try {
			this.proxy.fraction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fraction '+e);
			console.error('Problems setting fraction',e);
		}
	};
	this.fraction_changed = function () {
		var value = this.fraction;
		return value;
	};
	try {
		this.fraction = undefined;
	} catch (e) {
		console.log('Problems setting fraction '+e);
		console.error('Problems setting fraction',e);
	}
	this.set_value = function (value) {
		try {
			this.proxy.value = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting value '+e);
			console.error('Problems setting value',e);
		}
	};
	this.value_changed = function () {
		var value = this.value;
		return value;
	};
	try {
		this.value = undefined;
	} catch (e) {
		console.log('Problems setting value '+e);
		console.error('Problems setting value',e);
	}
	this.set_radius = function (value) {
		try {
			this.proxy.radius = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radius '+e);
			console.error('Problems setting radius',e);
		}
	};
	this.radius_changed = function () {
		var value = this.radius;
		return value;
	};
	try {
		this.radius = new SFFloat(1);
	} catch (e) {
		console.log('Problems setting radius '+e);
		console.error('Problems setting radius',e);
	}
	this.set_turns = function (value) {
		try {
			this.proxy.turns = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting turns '+e);
			console.error('Problems setting turns',e);
		}
	};
	this.turns_changed = function () {
		var value = this.turns;
		return value;
	};
	try {
		this.turns = new SFFloat(1);
	} catch (e) {
		console.log('Problems setting turns '+e);
		console.error('Problems setting turns',e);
	}


ecmascript:

	this.set_fraction = function (fraction,eventTime)
{
 this.proxy.value_changed[0]=0;
 this.proxy.value_changed[1]=1;
 this.proxy.value_changed[2]=0;
 this.proxy.value_changed[3]=fraction*6.28;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn'].initialize();
    if (X3DJSON.nodeUtil("Scene","HarpoonLaunch1")) {
X3DJSON.nodeUtil("Scene","HarpoonLaunch1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","HarpoonLaunch2")) {
X3DJSON.nodeUtil("Scene","HarpoonLaunch2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TorpedoLaunch1")) {
X3DJSON.nodeUtil("Scene","TorpedoLaunch1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Clock1")) {
X3DJSON.nodeUtil("Scene","Clock1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TorpedoFire1")) {
X3DJSON.nodeUtil("Scene","TorpedoFire1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TorpedoLaunch2")) {
X3DJSON.nodeUtil("Scene","TorpedoLaunch2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Clock2")) {
X3DJSON.nodeUtil("Scene","Clock2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TorpedoFire2")) {
X3DJSON.nodeUtil("Scene","TorpedoFire2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TorpedoLaunch3")) {
X3DJSON.nodeUtil("Scene","TorpedoLaunch3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Clock3")) {
X3DJSON.nodeUtil("Scene","Clock3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TorpedoFire3")) {
X3DJSON.nodeUtil("Scene","TorpedoFire3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TorpedoLaunch4")) {
X3DJSON.nodeUtil("Scene","TorpedoLaunch4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Clock4")) {
X3DJSON.nodeUtil("Scene","Clock4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TorpedoFire4")) {
X3DJSON.nodeUtil("Scene","TorpedoFire4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TorpedoLaunch5")) {
X3DJSON.nodeUtil("Scene","TorpedoLaunch5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Clock5")) {
X3DJSON.nodeUtil("Scene","Clock5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TorpedoFire5")) {
X3DJSON.nodeUtil("Scene","TorpedoFire5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TorpedoLaunch6")) {
X3DJSON.nodeUtil("Scene","TorpedoLaunch6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Clock6")) {
X3DJSON.nodeUtil("Scene","Clock6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TorpedoFire6")) {
X3DJSON.nodeUtil("Scene","TorpedoFire6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","HarpoonLaunch1")) {
X3DJSON.nodeUtil("Scene","HarpoonLaunch1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Clock7")) {
X3DJSON.nodeUtil("Scene","Clock7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","HarpoonFire1")) {
X3DJSON.nodeUtil("Scene","HarpoonFire1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Clock7")) {
X3DJSON.nodeUtil("Scene","Clock7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","HarpoonRot1")) {
X3DJSON.nodeUtil("Scene","HarpoonRot1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","HarpoonLaunch2")) {
X3DJSON.nodeUtil("Scene","HarpoonLaunch2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Clock8")) {
X3DJSON.nodeUtil("Scene","Clock8").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","HarpoonFire2")) {
X3DJSON.nodeUtil("Scene","HarpoonFire2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Clock8")) {
X3DJSON.nodeUtil("Scene","Clock8").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","HarpoonRot2")) {
X3DJSON.nodeUtil("Scene","HarpoonRot2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","SubDrag")) {
X3DJSON.nodeUtil("Scene","SubDrag").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Touch1")) {
X3DJSON.nodeUtil("Scene","Touch1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Clock")) {
X3DJSON.nodeUtil("Scene","Clock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove'].set_fraction(X3DJSON.nodeUtil("Scene","Clock","fraction"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove'].set_fraction(X3DJSON.nodeUtil("Scene","Clock","fraction"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove']['ACTION']['value'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove']['ACTION']['value'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove']['ACTION']['value'].push(function(property, value) {
		if (property === 'value') {
			X3DJSON.nodeUtil("Scene","Submarine","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove'].value_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove'].value_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove'].value, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Submarine","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove'].value_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove'].value_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove'].value, __eventTime);
    if (X3DJSON.nodeUtil("Scene","Clock")) {
X3DJSON.nodeUtil("Scene","Clock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn'].set_fraction(X3DJSON.nodeUtil("Scene","Clock","fraction"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn'].set_fraction(X3DJSON.nodeUtil("Scene","Clock","fraction"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn']['ACTION']['value'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn']['ACTION']['value'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn']['ACTION']['value'].push(function(property, value) {
		if (property === 'value') {
			X3DJSON.nodeUtil("Scene","Submarine","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn'].value_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn'].value_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn'].value, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Submarine","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn'].value_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn'].value_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn'].value, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove'].set_fraction(X3DJSON.nodeUtil("Scene","Clock","fraction"), __eventTime);
			X3DJSON.nodeUtil("Scene","Submarine","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove'].value_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove'].value_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubMove'].value, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn'].set_fraction(X3DJSON.nodeUtil("Scene","Clock","fraction"), __eventTime);
			X3DJSON.nodeUtil("Scene","Submarine","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn'].value_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn'].value_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Submarines/Various/Type209GlafkosDieselSubmarineAnimated.json']['SubTurn'].value, __eventTime);