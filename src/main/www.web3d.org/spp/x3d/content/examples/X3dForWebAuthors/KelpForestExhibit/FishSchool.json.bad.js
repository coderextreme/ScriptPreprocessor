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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/FishSchool.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/FishSchool.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/FishSchool.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/FishSchool.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/FishSchool.json']['BoidScript'] = function() {
	this.set_GlobalTick = function (value) {
		try {
			this.proxy.GlobalTick = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting GlobalTick '+e);
			console.error('Problems setting GlobalTick',e);
		}
	};
	this.GlobalTick_changed = function () {
		var value = this.GlobalTick;
		return value;
	};
	try {
		this.GlobalTick = new SFFloat();
	} catch (e) {
		console.log('Problems setting GlobalTick '+e);
		console.error('Problems setting GlobalTick',e);
	}
	this.set_B9 = function (value) {
		try {
			this.proxy.B9 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting B9 '+e);
			console.error('Problems setting B9',e);
		}
	};
	this.B9_changed = function () {
		var value = this.B9;
		return value;
	};
	try {
		this.B9 = X3DJSON.nodeUtil("Scene","Fish9");
	} catch (e) {
		console.log('Problems setting B9 '+e);
		console.error('Problems setting B9',e);
	}
	this.set_B8 = function (value) {
		try {
			this.proxy.B8 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting B8 '+e);
			console.error('Problems setting B8',e);
		}
	};
	this.B8_changed = function () {
		var value = this.B8;
		return value;
	};
	try {
		this.B8 = X3DJSON.nodeUtil("Scene","Fish8");
	} catch (e) {
		console.log('Problems setting B8 '+e);
		console.error('Problems setting B8',e);
	}
	this.set_B7 = function (value) {
		try {
			this.proxy.B7 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting B7 '+e);
			console.error('Problems setting B7',e);
		}
	};
	this.B7_changed = function () {
		var value = this.B7;
		return value;
	};
	try {
		this.B7 = X3DJSON.nodeUtil("Scene","Fish7");
	} catch (e) {
		console.log('Problems setting B7 '+e);
		console.error('Problems setting B7',e);
	}
	this.set_B6 = function (value) {
		try {
			this.proxy.B6 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting B6 '+e);
			console.error('Problems setting B6',e);
		}
	};
	this.B6_changed = function () {
		var value = this.B6;
		return value;
	};
	try {
		this.B6 = X3DJSON.nodeUtil("Scene","Fish6");
	} catch (e) {
		console.log('Problems setting B6 '+e);
		console.error('Problems setting B6',e);
	}
	this.set_B5 = function (value) {
		try {
			this.proxy.B5 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting B5 '+e);
			console.error('Problems setting B5',e);
		}
	};
	this.B5_changed = function () {
		var value = this.B5;
		return value;
	};
	try {
		this.B5 = X3DJSON.nodeUtil("Scene","Fish5");
	} catch (e) {
		console.log('Problems setting B5 '+e);
		console.error('Problems setting B5',e);
	}
	this.set_B4 = function (value) {
		try {
			this.proxy.B4 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting B4 '+e);
			console.error('Problems setting B4',e);
		}
	};
	this.B4_changed = function () {
		var value = this.B4;
		return value;
	};
	try {
		this.B4 = X3DJSON.nodeUtil("Scene","Fish4");
	} catch (e) {
		console.log('Problems setting B4 '+e);
		console.error('Problems setting B4',e);
	}
	this.set_B3 = function (value) {
		try {
			this.proxy.B3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting B3 '+e);
			console.error('Problems setting B3',e);
		}
	};
	this.B3_changed = function () {
		var value = this.B3;
		return value;
	};
	try {
		this.B3 = X3DJSON.nodeUtil("Scene","Fish3");
	} catch (e) {
		console.log('Problems setting B3 '+e);
		console.error('Problems setting B3',e);
	}
	this.set_B2 = function (value) {
		try {
			this.proxy.B2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting B2 '+e);
			console.error('Problems setting B2',e);
		}
	};
	this.B2_changed = function () {
		var value = this.B2;
		return value;
	};
	try {
		this.B2 = X3DJSON.nodeUtil("Scene","Fish2");
	} catch (e) {
		console.log('Problems setting B2 '+e);
		console.error('Problems setting B2',e);
	}
	this.set_B1 = function (value) {
		try {
			this.proxy.B1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting B1 '+e);
			console.error('Problems setting B1',e);
		}
	};
	this.B1_changed = function () {
		var value = this.B1;
		return value;
	};
	try {
		this.B1 = X3DJSON.nodeUtil("Scene","Fish1");
	} catch (e) {
		console.log('Problems setting B1 '+e);
		console.error('Problems setting B1',e);
	}
	this.set_B0 = function (value) {
		try {
			this.proxy.B0 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting B0 '+e);
			console.error('Problems setting B0',e);
		}
	};
	this.B0_changed = function () {
		var value = this.B0;
		return value;
	};
	try {
		this.B0 = X3DJSON.nodeUtil("Scene","Fish0");
	} catch (e) {
		console.log('Problems setting B0 '+e);
		console.error('Problems setting B0',e);
	}
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/FishSchool.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/FishSchool.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/FishSchool.json']['BoidScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/FishSchool.json']['BoidScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/FishSchool.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/FishSchool.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/FishSchool.json']['BoidScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/FishSchool.json']['BoidScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/FishSchool.json']['BoidScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/FishSchool.json']['BoidScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/FishSchool.json']['BoidScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/FishSchool.json']['BoidScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/FishSchool.json']['BoidScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/FishSchool.json']['BoidScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/FishSchool.json']['BoidScript'].initialize();
    if (X3DJSON.nodeUtil("Scene","GlobalClock")) {
X3DJSON.nodeUtil("Scene","GlobalClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/FishSchool.json']['BoidScript'].GlobalTick(X3DJSON.nodeUtil("Scene","GlobalClock","fraction"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/FishSchool.json']['BoidScript'].GlobalTick(X3DJSON.nodeUtil("Scene","GlobalClock","fraction"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/FishSchool.json']['BoidScript'].GlobalTick(X3DJSON.nodeUtil("Scene","GlobalClock","fraction"), __eventTime);