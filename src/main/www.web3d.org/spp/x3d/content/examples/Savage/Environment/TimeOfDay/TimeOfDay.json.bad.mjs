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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm'] = function() {
	this.set_boolean = function (value) {
		try {
			this.proxy.boolean = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting boolean '+e);
			console.error('Problems setting boolean',e);
		}
	};
	this.boolean_changed = function () {
		var value = this.boolean;
		return value;
	};
	try {
		this.boolean = undefined;
	} catch (e) {
		console.log('Problems setting boolean '+e);
		console.error('Problems setting boolean',e);
	}
	this.set_whichchoice = function (value) {
		try {
			this.proxy.whichchoice = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting whichchoice '+e);
			console.error('Problems setting whichchoice',e);
		}
	};
	this.whichchoice_changed = function () {
		var value = this.whichchoice;
		return value;
	};
	try {
		this.whichchoice = new SFInt32();
	} catch (e) {
		console.log('Problems setting whichchoice '+e);
		console.error('Problems setting whichchoice',e);
	}


ecmascript:

	this.set_boolean = function ( boolean_input, eventTime)
{

        if ( boolean_input== false ) { this.proxy.whichchoice = 0;}

	if ( boolean_input== true ) { this.proxy.whichchoice = 1; }

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'] = function() {
	this.set_boolean = function (value) {
		try {
			this.proxy.boolean = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting boolean '+e);
			console.error('Problems setting boolean',e);
		}
	};
	this.boolean_changed = function () {
		var value = this.boolean;
		return value;
	};
	try {
		this.boolean = undefined;
	} catch (e) {
		console.log('Problems setting boolean '+e);
		console.error('Problems setting boolean',e);
	}
	this.set_hour = function (value) {
		try {
			this.proxy.hour = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting hour '+e);
			console.error('Problems setting hour',e);
		}
	};
	this.hour_changed = function () {
		var value = this.hour;
		return value;
	};
	try {
		this.hour = undefined;
	} catch (e) {
		console.log('Problems setting hour '+e);
		console.error('Problems setting hour',e);
	}
	this.set_twelvebool = function (value) {
		try {
			this.proxy.twelvebool = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting twelvebool '+e);
			console.error('Problems setting twelvebool',e);
		}
	};
	this.twelvebool_changed = function () {
		var value = this.twelvebool;
		return value;
	};
	try {
		this.twelvebool = new SFBool();
	} catch (e) {
		console.log('Problems setting twelvebool '+e);
		console.error('Problems setting twelvebool',e);
	}


ecmascript:

	this.set_boolean = function ( boolean_input, eventTime)
{
	console.error ('boolean_input=' + boolean_input);
	if ( boolean_input == true )
		{ this.proxy.hour_changed = this.proxy.hour_changed + 1;}

        if (this.proxy.hour_changed <= 11){this.proxy.twelvebool = false; }

	if (this.proxy.hour_changed > 11){this.proxy.twelvebool = true; }
	if (this.proxy.hour_changed ==24) {this.proxy.hour_changed = 0;}
}

// separag;

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'] = function() {
	this.set_boolean = function (value) {
		try {
			this.proxy.boolean = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting boolean '+e);
			console.error('Problems setting boolean',e);
		}
	};
	this.boolean_changed = function () {
		var value = this.boolean;
		return value;
	};
	try {
		this.boolean = undefined;
	} catch (e) {
		console.log('Problems setting boolean '+e);
		console.error('Problems setting boolean',e);
	}
	this.set_whichchoice = function (value) {
		try {
			this.proxy.whichchoice = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting whichchoice '+e);
			console.error('Problems setting whichchoice',e);
		}
	};
	this.whichchoice_changed = function () {
		var value = this.whichchoice;
		return value;
	};
	try {
		this.whichchoice = new SFInt32();
	} catch (e) {
		console.log('Problems setting whichchoice '+e);
		console.error('Problems setting whichchoice',e);
	}
	this.set_range = function (value) {
		try {
			this.proxy.range = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting range '+e);
			console.error('Problems setting range',e);
		}
	};
	this.range_changed = function () {
		var value = this.range;
		return value;
	};
	try {
		this.range = new SFFloat();
	} catch (e) {
		console.log('Problems setting range '+e);
		console.error('Problems setting range',e);
	}
	this.set_binder = function (value) {
		try {
			this.proxy.binder = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting binder '+e);
			console.error('Problems setting binder',e);
		}
	};
	this.binder_changed = function () {
		var value = this.binder;
		return value;
	};
	try {
		this.binder = new SFBool();
	} catch (e) {
		console.log('Problems setting binder '+e);
		console.error('Problems setting binder',e);
	}


ecmascript:

	this.set_boolean = function ( boolean_input, eventTime)
{
binder =true;
if ( boolean_input== false ) { return; }
whichchoice = this.proxy.whichchoice +1;
if ( this.proxy.whichchoice ==12 ) { this.proxy.whichchoice = 0; }
if (this.proxy.whichchoice ==0) {this.proxy.range = 0;}
if (this.proxy.whichchoice ==1) {this.proxy.range = 5000;}
if (this.proxy.whichchoice ==2) {this.proxy.range = 2500;}
if (this.proxy.whichchoice ==3) {this.proxy.range = 1000;}
if (this.proxy.whichchoice ==4) {this.proxy.range = 500;}
if (this.proxy.whichchoice ==5) {this.proxy.range = 250;}
if (this.proxy.whichchoice ==6) {this.proxy.range = 100;}
if (this.proxy.whichchoice ==7) {this.proxy.range = 50;}
if (this.proxy.whichchoice ==8) {this.proxy.range = 25;}
if (this.proxy.whichchoice ==9) {this.proxy.range = 10;}
if (this.proxy.whichchoice ==10) {this.proxy.range = 5;}
if (this.proxy.whichchoice ==11) {this.proxy.range = 1;}
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].initialize();
    if (X3DJSON.nodeUtil("Scene","VisibilityButton")) {
X3DJSON.nodeUtil("Scene","VisibilityButton").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].set_boolean(X3DJSON.nodeUtil("Scene","VisibilityButton","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].set_boolean(X3DJSON.nodeUtil("Scene","VisibilityButton","isActive"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript']['ACTION']['whichchoice'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript']['ACTION']['whichchoice'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript']['ACTION']['whichchoice'].push(function(property, value) {
		if (property === 'whichchoice') {
			X3DJSON.nodeUtil("Scene","FogSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].whichchoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].whichchoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].whichchoice, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FogSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].whichchoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].whichchoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].whichchoice, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript']['ACTION']['range'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript']['ACTION']['range'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript']['ACTION']['range'].push(function(property, value) {
		if (property === 'range') {
			X3DJSON.nodeUtil("Scene","Foggy","visibilityRange",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].range === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].range() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].range, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Foggy","visibilityRange",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].range === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].range() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].range, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript']['ACTION']['binder'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript']['ACTION']['binder'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript']['ACTION']['binder'].push(function(property, value) {
		if (property === 'binder') {
			X3DJSON.nodeUtil("Scene","Foggy","bind",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].binder === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].binder() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].binder, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Foggy","bind",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].binder === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].binder() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].binder, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor']['ACTION']['twelvebool'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor']['ACTION']['twelvebool'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor']['ACTION']['twelvebool'].push(function(property, value) {
		if (property === 'twelvebool') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].twelvebool === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].twelvebool() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].twelvebool) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm'].set_boolean(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].twelvebool === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].twelvebool() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].twelvebool, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].twelvebool === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].twelvebool() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].twelvebool) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm'].set_boolean(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].twelvebool === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].twelvebool() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].twelvebool, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm']['ACTION']['whichchoice'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm']['ACTION']['whichchoice'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm']['ACTION']['whichchoice'].push(function(property, value) {
		if (property === 'whichchoice') {
			X3DJSON.nodeUtil("Scene","ampmswitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm'].whichchoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm'].whichchoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm'].whichchoice, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ampmswitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm'].whichchoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm'].whichchoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm'].whichchoice, __eventTime);
    if (X3DJSON.nodeUtil("Scene","ClockMechanism")) {
X3DJSON.nodeUtil("Scene","ClockMechanism").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockMechanism")) {
X3DJSON.nodeUtil("Scene","ClockMechanism").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockMechanism")) {
X3DJSON.nodeUtil("Scene","ClockMechanism").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","button")) {
X3DJSON.nodeUtil("Scene","button").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].set_boolean(X3DJSON.nodeUtil("Scene","button","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].set_boolean(X3DJSON.nodeUtil("Scene","button","isActive"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor']['ACTION']['hour'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor']['ACTION']['hour'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor']['ACTION']['hour'].push(function(property, value) {
		if (property === 'hour') {
			X3DJSON.nodeUtil("Scene","ClockMechanism","hour",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].hour_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].hour_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].hour, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockMechanism","hour",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].hour_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].hour_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].hour, __eventTime);
    if (X3DJSON.nodeUtil("Scene","ClockMechanism")) {
X3DJSON.nodeUtil("Scene","ClockMechanism").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockMechanism")) {
X3DJSON.nodeUtil("Scene","ClockMechanism").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","LightDirection")) {
X3DJSON.nodeUtil("Scene","LightDirection").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","LightAmbient")) {
X3DJSON.nodeUtil("Scene","LightAmbient").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","LightAmbient")) {
X3DJSON.nodeUtil("Scene","LightAmbient").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].set_boolean(X3DJSON.nodeUtil("Scene","VisibilityButton","isActive"), __eventTime);
			X3DJSON.nodeUtil("Scene","FogSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].whichchoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].whichchoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].whichchoice, __eventTime);
			X3DJSON.nodeUtil("Scene","Foggy","visibilityRange",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].range === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].range() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].range, __eventTime);
			X3DJSON.nodeUtil("Scene","Foggy","bind",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].binder === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].binder() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['VisibilityScript'].binder, __eventTime);
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].twelvebool === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].twelvebool() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].twelvebool) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm'].set_boolean(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].twelvebool === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].twelvebool() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].twelvebool, __eventTime);
		}
			X3DJSON.nodeUtil("Scene","ampmswitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm'].whichchoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm'].whichchoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['ampm'].whichchoice, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].set_boolean(X3DJSON.nodeUtil("Scene","button","isActive"), __eventTime);
			X3DJSON.nodeUtil("Scene","ClockMechanism","hour",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].hour_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].hour_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/TimeOfDay/TimeOfDay.json']['Incrementor'].hour, __eventTime);