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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ScriptSyntaxExampleTest.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ScriptSyntaxExampleTest.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ScriptSyntaxExampleTest.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ScriptSyntaxExampleTest.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ScriptSyntaxExampleTest.json']['myScript'] = function() {
	this.set_someSFBool = function (value) {
		try {
			this.proxy.someSFBool = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting someSFBool '+e);
			console.error('Problems setting someSFBool',e);
		}
	};
	this.someSFBool_changed = function () {
		var value = this.someSFBool;
		return value;
	};
	try {
		this.someSFBool = new SFBool();
	} catch (e) {
		console.log('Problems setting someSFBool '+e);
		console.error('Problems setting someSFBool',e);
	}
	this.set_someMFInt32 = function (value) {
		try {
			this.proxy.someMFInt32 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting someMFInt32 '+e);
			console.error('Problems setting someMFInt32',e);
		}
	};
	this.someMFInt32_changed = function () {
		var value = this.someMFInt32;
		return value;
	};
	try {
		this.someMFInt32 = new MFInt32();
	} catch (e) {
		console.log('Problems setting someMFInt32 '+e);
		console.error('Problems setting someMFInt32',e);
	}
	this.set_someMFFloats = function (value) {
		try {
			this.proxy.someMFFloats = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting someMFFloats '+e);
			console.error('Problems setting someMFFloats',e);
		}
	};
	this.someMFFloats_changed = function () {
		var value = this.someMFFloats;
		return value;
	};
	try {
		this.someMFFloats = new MFFloat([new SFFloat ( 0 ),new SFFloat ( 1 ),new SFFloat ( 2 )]);
	} catch (e) {
		console.log('Problems setting someMFFloats '+e);
		console.error('Problems setting someMFFloats',e);
	}
	this.set_someStringField = function (value) {
		try {
			this.proxy.someStringField = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting someStringField '+e);
			console.error('Problems setting someStringField',e);
		}
	};
	this.someStringField_changed = function () {
		var value = this.someStringField;
		return value;
	};
	try {
		this.someStringField = new SFString("hello");
	} catch (e) {
		console.log('Problems setting someStringField '+e);
		console.error('Problems setting someStringField',e);
	}
	this.set_stringTest1 = function (value) {
		try {
			this.proxy.stringTest1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting stringTest1 '+e);
			console.error('Problems setting stringTest1',e);
		}
	};
	this.stringTest1_changed = function () {
		var value = this.stringTest1;
		return value;
	};
	try {
		this.stringTest1 = new MFString("'","apostrophe");
	} catch (e) {
		console.log('Problems setting stringTest1 '+e);
		console.error('Problems setting stringTest1',e);
	}
	this.set_stringTest2 = function (value) {
		try {
			this.proxy.stringTest2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting stringTest2 '+e);
			console.error('Problems setting stringTest2',e);
		}
	};
	this.stringTest2_changed = function () {
		var value = this.stringTest2;
		return value;
	};
	try {
		this.stringTest2 = new MFString("Quote &quot; character","More Text");
	} catch (e) {
		console.log('Problems setting stringTest2 '+e);
		console.error('Problems setting stringTest2',e);
	}
	this.set_someInitializedRotation = function (value) {
		try {
			this.proxy.someInitializedRotation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting someInitializedRotation '+e);
			console.error('Problems setting someInitializedRotation',e);
		}
	};
	this.someInitializedRotation_changed = function () {
		var value = this.someInitializedRotation;
		return value;
	};
	try {
		this.someInitializedRotation = new SFRotation(0,1,0,0);
	} catch (e) {
		console.log('Problems setting someInitializedRotation '+e);
		console.error('Problems setting someInitializedRotation',e);
	}
	this.set_someInitializedTime = function (value) {
		try {
			this.proxy.someInitializedTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting someInitializedTime '+e);
			console.error('Problems setting someInitializedTime',e);
		}
	};
	this.someInitializedTime_changed = function () {
		var value = this.someInitializedTime;
		return value;
	};
	try {
		this.someInitializedTime = new SFTime(0);
	} catch (e) {
		console.log('Problems setting someInitializedTime '+e);
		console.error('Problems setting someInitializedTime',e);
	}


ecmascript:

// Preferred style for inlined script code is contained CDATA
// in order to simplify use of characters < > " " ' ' etc. in source code

// When inlined script code appears in url instead, XML special characters
// must be carefully 'escaped' or an incorrect translation will result.

// url appears before contained code when translating to VRML encoding,
// so that external (possibly updated) code scripts can take precedence

	this.someSFBool = function (value, timestamp)
{
	console.error ('this.proxy.someSFBool input event=' + value);
	this.proxy.someMFInt32 = 0; // set outputOnly event, for example
};

	this.initialize = function (value)
{
	console.error ('    this.proxy.someMFFloats=' + this.proxy.someMFFloats);
	console.error ('this.proxy.someStringField=' + this.proxy.someStringField);
	console.error ('    this.proxy.stringTest1=' + this.proxy.stringTest1);
	console.error ('    this.proxy.stringTest2=' + this.proxy.stringTest2);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ScriptSyntaxExampleTest.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ScriptSyntaxExampleTest.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ScriptSyntaxExampleTest.json']['myScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ScriptSyntaxExampleTest.json']['myScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ScriptSyntaxExampleTest.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ScriptSyntaxExampleTest.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ScriptSyntaxExampleTest.json']['myScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ScriptSyntaxExampleTest.json']['myScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ScriptSyntaxExampleTest.json']['myScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ScriptSyntaxExampleTest.json']['myScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ScriptSyntaxExampleTest.json']['myScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ScriptSyntaxExampleTest.json']['myScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ScriptSyntaxExampleTest.json']['myScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ScriptSyntaxExampleTest.json']['myScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/ScriptSyntaxExampleTest.json']['myScript'].initialize();

