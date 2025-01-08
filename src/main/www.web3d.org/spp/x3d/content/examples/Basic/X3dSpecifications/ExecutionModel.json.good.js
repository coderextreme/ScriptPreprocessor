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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'] = function() {
	this.set_touchTime = function (value) {
		try {
			this.proxy.touchTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting touchTime '+e);
			console.error('Problems setting touchTime',e);
		}
	};
	this.touchTime_changed = function () {
		var value = this.touchTime;
		return value;
	};
	try {
		this.touchTime = new SFTime();
	} catch (e) {
		console.log('Problems setting touchTime '+e);
		console.error('Problems setting touchTime',e);
	}
	this.set_toScript2 = function (value) {
		try {
			this.proxy.toScript2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toScript2 '+e);
			console.error('Problems setting toScript2',e);
		}
	};
	this.toScript2_changed = function () {
		var value = this.toScript2;
		return value;
	};
	try {
		this.toScript2 = new SFBool();
	} catch (e) {
		console.log('Problems setting toScript2 '+e);
		console.error('Problems setting toScript2',e);
	}
	this.set_toScript3 = function (value) {
		try {
			this.proxy.toScript3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toScript3 '+e);
			console.error('Problems setting toScript3',e);
		}
	};
	this.toScript3_changed = function () {
		var value = this.toScript3;
		return value;
	};
	try {
		this.toScript3 = new SFBool();
	} catch (e) {
		console.log('Problems setting toScript3 '+e);
		console.error('Problems setting toScript3',e);
	}
	this.set_string = function (value) {
		try {
			this.proxy.string = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting string '+e);
			console.error('Problems setting string',e);
		}
	};
	this.string_changed = function () {
		var value = this.string;
		return value;
	};
	try {
		this.string = new SFString();
	} catch (e) {
		console.log('Problems setting string '+e);
		console.error('Problems setting string',e);
	}


ecmascript:
     
	this.touchTime = function () {
        this.proxy.toScript2 = true;
      }
     ;

	this.eventsProcessed = function () {
        this.proxy.string = 'Script1.eventsProcessed';
        this.proxy.toScript3 = true;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'] = function() {
	this.set_fromScript1 = function (value) {
		try {
			this.proxy.fromScript1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fromScript1 '+e);
			console.error('Problems setting fromScript1',e);
		}
	};
	this.fromScript1_changed = function () {
		var value = this.fromScript1;
		return value;
	};
	try {
		this.fromScript1 = new SFBool();
	} catch (e) {
		console.log('Problems setting fromScript1 '+e);
		console.error('Problems setting fromScript1',e);
	}
	this.set_toScript4 = function (value) {
		try {
			this.proxy.toScript4 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toScript4 '+e);
			console.error('Problems setting toScript4',e);
		}
	};
	this.toScript4_changed = function () {
		var value = this.toScript4;
		return value;
	};
	try {
		this.toScript4 = new SFBool();
	} catch (e) {
		console.log('Problems setting toScript4 '+e);
		console.error('Problems setting toScript4',e);
	}
	this.set_string = function (value) {
		try {
			this.proxy.string = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting string '+e);
			console.error('Problems setting string',e);
		}
	};
	this.string_changed = function () {
		var value = this.string;
		return value;
	};
	try {
		this.string = new SFString();
	} catch (e) {
		console.log('Problems setting string '+e);
		console.error('Problems setting string',e);
	}


ecmascript:
     
	this.fromScript1 = function () {
      }
     ;

	this.eventsProcessed = function () {
        this.proxy.string = 'Script2.eventsProcessed';
        this.proxy.toScript4 = true;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'] = function() {
	this.set_fromScript1 = function (value) {
		try {
			this.proxy.fromScript1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fromScript1 '+e);
			console.error('Problems setting fromScript1',e);
		}
	};
	this.fromScript1_changed = function () {
		var value = this.fromScript1;
		return value;
	};
	try {
		this.fromScript1 = new SFBool();
	} catch (e) {
		console.log('Problems setting fromScript1 '+e);
		console.error('Problems setting fromScript1',e);
	}
	this.set_toScript5 = function (value) {
		try {
			this.proxy.toScript5 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toScript5 '+e);
			console.error('Problems setting toScript5',e);
		}
	};
	this.toScript5_changed = function () {
		var value = this.toScript5;
		return value;
	};
	try {
		this.toScript5 = new SFBool();
	} catch (e) {
		console.log('Problems setting toScript5 '+e);
		console.error('Problems setting toScript5',e);
	}
	this.set_toScript6 = function (value) {
		try {
			this.proxy.toScript6 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toScript6 '+e);
			console.error('Problems setting toScript6',e);
		}
	};
	this.toScript6_changed = function () {
		var value = this.toScript6;
		return value;
	};
	try {
		this.toScript6 = new SFBool();
	} catch (e) {
		console.log('Problems setting toScript6 '+e);
		console.error('Problems setting toScript6',e);
	}
	this.set_string = function (value) {
		try {
			this.proxy.string = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting string '+e);
			console.error('Problems setting string',e);
		}
	};
	this.string_changed = function () {
		var value = this.string;
		return value;
	};
	try {
		this.string = new SFString();
	} catch (e) {
		console.log('Problems setting string '+e);
		console.error('Problems setting string',e);
	}


ecmascript:
     
	this.fromScript1 = function () {
        this.proxy.toScript5 = true;
      }
     ;

	this.eventsProcessed = function () {
        this.proxy.string = 'Script3.eventsProcessed';
        this.proxy.toScript6 = true;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script4'] = function() {
	this.set_fromScript2 = function (value) {
		try {
			this.proxy.fromScript2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fromScript2 '+e);
			console.error('Problems setting fromScript2',e);
		}
	};
	this.fromScript2_changed = function () {
		var value = this.fromScript2;
		return value;
	};
	try {
		this.fromScript2 = new SFBool();
	} catch (e) {
		console.log('Problems setting fromScript2 '+e);
		console.error('Problems setting fromScript2',e);
	}


ecmascript:
     
	this.fromScript2 = function () {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script4'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script4']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script4'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script4']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script4']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script4'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script4']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script4']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script4'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script4'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script5'] = function() {
	this.set_fromScript3 = function (value) {
		try {
			this.proxy.fromScript3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fromScript3 '+e);
			console.error('Problems setting fromScript3',e);
		}
	};
	this.fromScript3_changed = function () {
		var value = this.fromScript3;
		return value;
	};
	try {
		this.fromScript3 = new SFBool();
	} catch (e) {
		console.log('Problems setting fromScript3 '+e);
		console.error('Problems setting fromScript3',e);
	}


ecmascript:
      
	this.fromScript3 = function () {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script5'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script5']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script5'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script5'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script5']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script5']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script5'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script5']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script5']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script5'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script5'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'] = function() {
	this.set_fromScript3 = function (value) {
		try {
			this.proxy.fromScript3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fromScript3 '+e);
			console.error('Problems setting fromScript3',e);
		}
	};
	this.fromScript3_changed = function () {
		var value = this.fromScript3;
		return value;
	};
	try {
		this.fromScript3 = new SFBool();
	} catch (e) {
		console.log('Problems setting fromScript3 '+e);
		console.error('Problems setting fromScript3',e);
	}
	this.set_toScript7 = function (value) {
		try {
			this.proxy.toScript7 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toScript7 '+e);
			console.error('Problems setting toScript7',e);
		}
	};
	this.toScript7_changed = function () {
		var value = this.toScript7;
		return value;
	};
	try {
		this.toScript7 = new SFBool();
	} catch (e) {
		console.log('Problems setting toScript7 '+e);
		console.error('Problems setting toScript7',e);
	}
	this.set_string = function (value) {
		try {
			this.proxy.string = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting string '+e);
			console.error('Problems setting string',e);
		}
	};
	this.string_changed = function () {
		var value = this.string;
		return value;
	};
	try {
		this.string = new SFString();
	} catch (e) {
		console.log('Problems setting string '+e);
		console.error('Problems setting string',e);
	}


ecmascript:
     
	this.fromScript3 = function () {
        this.proxy.toScript7 = true;
      }
     ;

	this.eventsProcessed = function () {
        this.proxy.string = 'Script6.eventsProcessed';
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script7'] = function() {
	this.set_fromScript6 = function (value) {
		try {
			this.proxy.fromScript6 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fromScript6 '+e);
			console.error('Problems setting fromScript6',e);
		}
	};
	this.fromScript6_changed = function () {
		var value = this.fromScript6;
		return value;
	};
	try {
		this.fromScript6 = new SFBool();
	} catch (e) {
		console.log('Problems setting fromScript6 '+e);
		console.error('Problems setting fromScript6',e);
	}


ecmascript:
     
	this.fromScript6 = function () {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script7'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script7']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script7'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script7']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script7']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script7'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script7']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script7']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script7'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script7'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'] = function() {
	this.set_string = function (value) {
		try {
			this.proxy.string = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting string '+e);
			console.error('Problems setting string',e);
		}
	};
	this.string_changed = function () {
		var value = this.string;
		return value;
	};
	try {
		this.string = new MFString();
	} catch (e) {
		console.log('Problems setting string '+e);
		console.error('Problems setting string',e);
	}
	this.set_fromString = function (value) {
		try {
			this.proxy.fromString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fromString '+e);
			console.error('Problems setting fromString',e);
		}
	};
	this.fromString_changed = function () {
		var value = this.fromString;
		return value;
	};
	try {
		this.fromString = new SFString();
	} catch (e) {
		console.log('Problems setting fromString '+e);
		console.error('Problems setting fromString',e);
	}


ecmascript:
     
	this.initialize = function () {
        this.proxy.string[0] = 'Event Sequence:';
      }
     ;

	this.fromString = function (s) {
        i = this.proxy.string.length;
        this.proxy.string[i] = ' ( ' + i + ' ) ' + s + ' occurred';
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'].initialize();
    if (X3DJSON.nodeUtil("Scene","TS")) {
X3DJSON.nodeUtil("Scene","TS").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].touchTime(X3DJSON.nodeUtil("Scene","TS","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].touchTime(X3DJSON.nodeUtil("Scene","TS","touchTime"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1']['ACTION']['toScript2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1']['ACTION']['toScript2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1']['ACTION']['toScript2'].push(function(property, value) {
		if (property === 'toScript2') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript2) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].fromScript1(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript2, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript2) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].fromScript1(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript2, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1']['ACTION']['toScript3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1']['ACTION']['toScript3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1']['ACTION']['toScript3'].push(function(property, value) {
		if (property === 'toScript3') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript3) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].fromScript1(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript3, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript3) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].fromScript1(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript3, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2']['ACTION']['toScript4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2']['ACTION']['toScript4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2']['ACTION']['toScript4'].push(function(property, value) {
		if (property === 'toScript4') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script4'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].toScript4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].toScript4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].toScript4) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script4'].fromScript2(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].toScript4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].toScript4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].toScript4, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script4'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].toScript4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].toScript4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].toScript4) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script4'].fromScript2(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].toScript4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].toScript4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].toScript4, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3']['ACTION']['toScript5'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3']['ACTION']['toScript5'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3']['ACTION']['toScript5'].push(function(property, value) {
		if (property === 'toScript5') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script5'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript5) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script5'].fromScript3(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript5, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script5'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript5) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script5'].fromScript3(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript5, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3']['ACTION']['toScript6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3']['ACTION']['toScript6'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3']['ACTION']['toScript6'].push(function(property, value) {
		if (property === 'toScript6') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript6) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].fromScript3(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript6, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript6) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].fromScript3(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript6, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6']['ACTION']['toScript7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6']['ACTION']['toScript7'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6']['ACTION']['toScript7'].push(function(property, value) {
		if (property === 'toScript7') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script7'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].toScript7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].toScript7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].toScript7) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script7'].fromScript6(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].toScript7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].toScript7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].toScript7, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script7'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].toScript7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].toScript7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].toScript7) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script7'].fromScript6(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].toScript7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].toScript7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].toScript7, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1']['ACTION']['string'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1']['ACTION']['string'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1']['ACTION']['string'].push(function(property, value) {
		if (property === 'string') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].string === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].string() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].string) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'].fromString(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].string === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].string() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].string, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].string === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].string() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].string) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'].fromString(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].string === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].string() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].string, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2']['ACTION']['string'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2']['ACTION']['string'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2']['ACTION']['string'].push(function(property, value) {
		if (property === 'string') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].string === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].string() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].string) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'].fromString(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].string === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].string() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].string, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].string === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].string() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].string) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'].fromString(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].string === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].string() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].string, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3']['ACTION']['string'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3']['ACTION']['string'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3']['ACTION']['string'].push(function(property, value) {
		if (property === 'string') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].string === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].string() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].string) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'].fromString(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].string === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].string() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].string, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].string === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].string() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].string) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'].fromString(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].string === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].string() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].string, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6']['ACTION']['string'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6']['ACTION']['string'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6']['ACTION']['string'].push(function(property, value) {
		if (property === 'string') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].string === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].string() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].string) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'].fromString(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].string === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].string() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].string, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].string === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].string() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].string) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'].fromString(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].string === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].string() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].string, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector']['ACTION']['string'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector']['ACTION']['string'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector']['ACTION']['string'].push(function(property, value) {
		if (property === 'string') {
			X3DJSON.nodeUtil("Scene","Result","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'].string === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'].string() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'].string, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Result","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'].string === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'].string() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'].string, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].touchTime(X3DJSON.nodeUtil("Scene","TS","touchTime"), __eventTime);
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript2) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].fromScript1(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript2, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript3) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].fromScript1(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].toScript3, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script4'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].toScript4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].toScript4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].toScript4) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script4'].fromScript2(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].toScript4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].toScript4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].toScript4, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script5'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript5) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script5'].fromScript3(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript5, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript6) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].fromScript3(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].toScript6, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script7'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].toScript7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].toScript7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].toScript7) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script7'].fromScript6(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].toScript7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].toScript7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].toScript7, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].string === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].string() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].string) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'].fromString(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].string === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].string() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script1'].string, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].string === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].string() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].string) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'].fromString(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].string === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].string() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script2'].string, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].string === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].string() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].string) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'].fromString(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].string === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].string() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script3'].string, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].string === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].string() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].string) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'].fromString(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].string === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].string() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Script6'].string, __eventTime);
		}
			X3DJSON.nodeUtil("Scene","Result","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'].string === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'].string() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/X3dSpecifications/ExecutionModel.json']['Collector'].string, __eventTime);