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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'] = function() {
	this.set_typestring1 = function (value) {
		try {
			this.proxy.typestring1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting typestring1 '+e);
			console.error('Problems setting typestring1',e);
		}
	};
	this.typestring1_changed = function () {
		var value = this.typestring1;
		return value;
	};
	try {
		this.typestring1 = X3DJSON.nodeUtil("Scene","TYPESTRING1");
	} catch (e) {
		console.log('Problems setting typestring1 '+e);
		console.error('Problems setting typestring1',e);
	}
	this.set_printOutsideMaxFront = function (value) {
		try {
			this.proxy.printOutsideMaxFront = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printOutsideMaxFront '+e);
			console.error('Problems setting printOutsideMaxFront',e);
		}
	};
	this.printOutsideMaxFront_changed = function () {
		var value = this.printOutsideMaxFront;
		return value;
	};
	try {
		this.printOutsideMaxFront = new SFBool();
	} catch (e) {
		console.log('Problems setting printOutsideMaxFront '+e);
		console.error('Problems setting printOutsideMaxFront',e);
	}
	this.set_printJustOutsideMaxFront = function (value) {
		try {
			this.proxy.printJustOutsideMaxFront = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printJustOutsideMaxFront '+e);
			console.error('Problems setting printJustOutsideMaxFront',e);
		}
	};
	this.printJustOutsideMaxFront_changed = function () {
		var value = this.printJustOutsideMaxFront;
		return value;
	};
	try {
		this.printJustOutsideMaxFront = new SFBool();
	} catch (e) {
		console.log('Problems setting printJustOutsideMaxFront '+e);
		console.error('Problems setting printJustOutsideMaxFront',e);
	}
	this.set_printBetweenFront = function (value) {
		try {
			this.proxy.printBetweenFront = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printBetweenFront '+e);
			console.error('Problems setting printBetweenFront',e);
		}
	};
	this.printBetweenFront_changed = function () {
		var value = this.printBetweenFront;
		return value;
	};
	try {
		this.printBetweenFront = new SFBool();
	} catch (e) {
		console.log('Problems setting printBetweenFront '+e);
		console.error('Problems setting printBetweenFront',e);
	}
	this.set_printMinFront = function (value) {
		try {
			this.proxy.printMinFront = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printMinFront '+e);
			console.error('Problems setting printMinFront',e);
		}
	};
	this.printMinFront_changed = function () {
		var value = this.printMinFront;
		return value;
	};
	try {
		this.printMinFront = new SFBool();
	} catch (e) {
		console.log('Problems setting printMinFront '+e);
		console.error('Problems setting printMinFront',e);
	}
	this.set_printMinCenterFront = function (value) {
		try {
			this.proxy.printMinCenterFront = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printMinCenterFront '+e);
			console.error('Problems setting printMinCenterFront',e);
		}
	};
	this.printMinCenterFront_changed = function () {
		var value = this.printMinCenterFront;
		return value;
	};
	try {
		this.printMinCenterFront = new SFBool();
	} catch (e) {
		console.log('Problems setting printMinCenterFront '+e);
		console.error('Problems setting printMinCenterFront',e);
	}
	this.set_printOutsideMaxRight = function (value) {
		try {
			this.proxy.printOutsideMaxRight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printOutsideMaxRight '+e);
			console.error('Problems setting printOutsideMaxRight',e);
		}
	};
	this.printOutsideMaxRight_changed = function () {
		var value = this.printOutsideMaxRight;
		return value;
	};
	try {
		this.printOutsideMaxRight = new SFBool();
	} catch (e) {
		console.log('Problems setting printOutsideMaxRight '+e);
		console.error('Problems setting printOutsideMaxRight',e);
	}
	this.set_printJustOutsideMaxRight = function (value) {
		try {
			this.proxy.printJustOutsideMaxRight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printJustOutsideMaxRight '+e);
			console.error('Problems setting printJustOutsideMaxRight',e);
		}
	};
	this.printJustOutsideMaxRight_changed = function () {
		var value = this.printJustOutsideMaxRight;
		return value;
	};
	try {
		this.printJustOutsideMaxRight = new SFBool();
	} catch (e) {
		console.log('Problems setting printJustOutsideMaxRight '+e);
		console.error('Problems setting printJustOutsideMaxRight',e);
	}
	this.set_printBetweenRight = function (value) {
		try {
			this.proxy.printBetweenRight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printBetweenRight '+e);
			console.error('Problems setting printBetweenRight',e);
		}
	};
	this.printBetweenRight_changed = function () {
		var value = this.printBetweenRight;
		return value;
	};
	try {
		this.printBetweenRight = new SFBool();
	} catch (e) {
		console.log('Problems setting printBetweenRight '+e);
		console.error('Problems setting printBetweenRight',e);
	}
	this.set_printMinRight = function (value) {
		try {
			this.proxy.printMinRight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printMinRight '+e);
			console.error('Problems setting printMinRight',e);
		}
	};
	this.printMinRight_changed = function () {
		var value = this.printMinRight;
		return value;
	};
	try {
		this.printMinRight = new SFBool();
	} catch (e) {
		console.log('Problems setting printMinRight '+e);
		console.error('Problems setting printMinRight',e);
	}
	this.set_printMinCenterRight = function (value) {
		try {
			this.proxy.printMinCenterRight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printMinCenterRight '+e);
			console.error('Problems setting printMinCenterRight',e);
		}
	};
	this.printMinCenterRight_changed = function () {
		var value = this.printMinCenterRight;
		return value;
	};
	try {
		this.printMinCenterRight = new SFBool();
	} catch (e) {
		console.log('Problems setting printMinCenterRight '+e);
		console.error('Problems setting printMinCenterRight',e);
	}
	this.set_printOutsideMaxRear = function (value) {
		try {
			this.proxy.printOutsideMaxRear = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printOutsideMaxRear '+e);
			console.error('Problems setting printOutsideMaxRear',e);
		}
	};
	this.printOutsideMaxRear_changed = function () {
		var value = this.printOutsideMaxRear;
		return value;
	};
	try {
		this.printOutsideMaxRear = new SFBool();
	} catch (e) {
		console.log('Problems setting printOutsideMaxRear '+e);
		console.error('Problems setting printOutsideMaxRear',e);
	}
	this.set_printJustOutsideMaxRear = function (value) {
		try {
			this.proxy.printJustOutsideMaxRear = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printJustOutsideMaxRear '+e);
			console.error('Problems setting printJustOutsideMaxRear',e);
		}
	};
	this.printJustOutsideMaxRear_changed = function () {
		var value = this.printJustOutsideMaxRear;
		return value;
	};
	try {
		this.printJustOutsideMaxRear = new SFBool();
	} catch (e) {
		console.log('Problems setting printJustOutsideMaxRear '+e);
		console.error('Problems setting printJustOutsideMaxRear',e);
	}
	this.set_printBetweenRear = function (value) {
		try {
			this.proxy.printBetweenRear = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printBetweenRear '+e);
			console.error('Problems setting printBetweenRear',e);
		}
	};
	this.printBetweenRear_changed = function () {
		var value = this.printBetweenRear;
		return value;
	};
	try {
		this.printBetweenRear = new SFBool();
	} catch (e) {
		console.log('Problems setting printBetweenRear '+e);
		console.error('Problems setting printBetweenRear',e);
	}
	this.set_printMinRear = function (value) {
		try {
			this.proxy.printMinRear = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printMinRear '+e);
			console.error('Problems setting printMinRear',e);
		}
	};
	this.printMinRear_changed = function () {
		var value = this.printMinRear;
		return value;
	};
	try {
		this.printMinRear = new SFBool();
	} catch (e) {
		console.log('Problems setting printMinRear '+e);
		console.error('Problems setting printMinRear',e);
	}
	this.set_printMinCenterRear = function (value) {
		try {
			this.proxy.printMinCenterRear = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printMinCenterRear '+e);
			console.error('Problems setting printMinCenterRear',e);
		}
	};
	this.printMinCenterRear_changed = function () {
		var value = this.printMinCenterRear;
		return value;
	};
	try {
		this.printMinCenterRear = new SFBool();
	} catch (e) {
		console.log('Problems setting printMinCenterRear '+e);
		console.error('Problems setting printMinCenterRear',e);
	}
	this.set_printOutsideMaxLeft = function (value) {
		try {
			this.proxy.printOutsideMaxLeft = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printOutsideMaxLeft '+e);
			console.error('Problems setting printOutsideMaxLeft',e);
		}
	};
	this.printOutsideMaxLeft_changed = function () {
		var value = this.printOutsideMaxLeft;
		return value;
	};
	try {
		this.printOutsideMaxLeft = new SFBool();
	} catch (e) {
		console.log('Problems setting printOutsideMaxLeft '+e);
		console.error('Problems setting printOutsideMaxLeft',e);
	}
	this.set_printJustOutsideMaxLeft = function (value) {
		try {
			this.proxy.printJustOutsideMaxLeft = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printJustOutsideMaxLeft '+e);
			console.error('Problems setting printJustOutsideMaxLeft',e);
		}
	};
	this.printJustOutsideMaxLeft_changed = function () {
		var value = this.printJustOutsideMaxLeft;
		return value;
	};
	try {
		this.printJustOutsideMaxLeft = new SFBool();
	} catch (e) {
		console.log('Problems setting printJustOutsideMaxLeft '+e);
		console.error('Problems setting printJustOutsideMaxLeft',e);
	}
	this.set_printBetweenLeft = function (value) {
		try {
			this.proxy.printBetweenLeft = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printBetweenLeft '+e);
			console.error('Problems setting printBetweenLeft',e);
		}
	};
	this.printBetweenLeft_changed = function () {
		var value = this.printBetweenLeft;
		return value;
	};
	try {
		this.printBetweenLeft = new SFBool();
	} catch (e) {
		console.log('Problems setting printBetweenLeft '+e);
		console.error('Problems setting printBetweenLeft',e);
	}
	this.set_printMinLeft = function (value) {
		try {
			this.proxy.printMinLeft = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printMinLeft '+e);
			console.error('Problems setting printMinLeft',e);
		}
	};
	this.printMinLeft_changed = function () {
		var value = this.printMinLeft;
		return value;
	};
	try {
		this.printMinLeft = new SFBool();
	} catch (e) {
		console.log('Problems setting printMinLeft '+e);
		console.error('Problems setting printMinLeft',e);
	}
	this.set_printMinCenterLeft = function (value) {
		try {
			this.proxy.printMinCenterLeft = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printMinCenterLeft '+e);
			console.error('Problems setting printMinCenterLeft',e);
		}
	};
	this.printMinCenterLeft_changed = function () {
		var value = this.printMinCenterLeft;
		return value;
	};
	try {
		this.printMinCenterLeft = new SFBool();
	} catch (e) {
		console.log('Problems setting printMinCenterLeft '+e);
		console.error('Problems setting printMinCenterLeft',e);
	}
	this.set_printOutsideMaxBottom = function (value) {
		try {
			this.proxy.printOutsideMaxBottom = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printOutsideMaxBottom '+e);
			console.error('Problems setting printOutsideMaxBottom',e);
		}
	};
	this.printOutsideMaxBottom_changed = function () {
		var value = this.printOutsideMaxBottom;
		return value;
	};
	try {
		this.printOutsideMaxBottom = new SFBool();
	} catch (e) {
		console.log('Problems setting printOutsideMaxBottom '+e);
		console.error('Problems setting printOutsideMaxBottom',e);
	}
	this.set_printJustOutsideMaxBottom = function (value) {
		try {
			this.proxy.printJustOutsideMaxBottom = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printJustOutsideMaxBottom '+e);
			console.error('Problems setting printJustOutsideMaxBottom',e);
		}
	};
	this.printJustOutsideMaxBottom_changed = function () {
		var value = this.printJustOutsideMaxBottom;
		return value;
	};
	try {
		this.printJustOutsideMaxBottom = new SFBool();
	} catch (e) {
		console.log('Problems setting printJustOutsideMaxBottom '+e);
		console.error('Problems setting printJustOutsideMaxBottom',e);
	}
	this.set_printBetweenBottom = function (value) {
		try {
			this.proxy.printBetweenBottom = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printBetweenBottom '+e);
			console.error('Problems setting printBetweenBottom',e);
		}
	};
	this.printBetweenBottom_changed = function () {
		var value = this.printBetweenBottom;
		return value;
	};
	try {
		this.printBetweenBottom = new SFBool();
	} catch (e) {
		console.log('Problems setting printBetweenBottom '+e);
		console.error('Problems setting printBetweenBottom',e);
	}
	this.set_printMinBottom = function (value) {
		try {
			this.proxy.printMinBottom = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printMinBottom '+e);
			console.error('Problems setting printMinBottom',e);
		}
	};
	this.printMinBottom_changed = function () {
		var value = this.printMinBottom;
		return value;
	};
	try {
		this.printMinBottom = new SFBool();
	} catch (e) {
		console.log('Problems setting printMinBottom '+e);
		console.error('Problems setting printMinBottom',e);
	}
	this.set_printMinCenterBottom = function (value) {
		try {
			this.proxy.printMinCenterBottom = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printMinCenterBottom '+e);
			console.error('Problems setting printMinCenterBottom',e);
		}
	};
	this.printMinCenterBottom_changed = function () {
		var value = this.printMinCenterBottom;
		return value;
	};
	try {
		this.printMinCenterBottom = new SFBool();
	} catch (e) {
		console.log('Problems setting printMinCenterBottom '+e);
		console.error('Problems setting printMinCenterBottom',e);
	}
	this.set_printOutsideMaxTop = function (value) {
		try {
			this.proxy.printOutsideMaxTop = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printOutsideMaxTop '+e);
			console.error('Problems setting printOutsideMaxTop',e);
		}
	};
	this.printOutsideMaxTop_changed = function () {
		var value = this.printOutsideMaxTop;
		return value;
	};
	try {
		this.printOutsideMaxTop = new SFBool();
	} catch (e) {
		console.log('Problems setting printOutsideMaxTop '+e);
		console.error('Problems setting printOutsideMaxTop',e);
	}
	this.set_printJustOutsideMaxTop = function (value) {
		try {
			this.proxy.printJustOutsideMaxTop = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printJustOutsideMaxTop '+e);
			console.error('Problems setting printJustOutsideMaxTop',e);
		}
	};
	this.printJustOutsideMaxTop_changed = function () {
		var value = this.printJustOutsideMaxTop;
		return value;
	};
	try {
		this.printJustOutsideMaxTop = new SFBool();
	} catch (e) {
		console.log('Problems setting printJustOutsideMaxTop '+e);
		console.error('Problems setting printJustOutsideMaxTop',e);
	}
	this.set_printBetweenTop = function (value) {
		try {
			this.proxy.printBetweenTop = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printBetweenTop '+e);
			console.error('Problems setting printBetweenTop',e);
		}
	};
	this.printBetweenTop_changed = function () {
		var value = this.printBetweenTop;
		return value;
	};
	try {
		this.printBetweenTop = new SFBool();
	} catch (e) {
		console.log('Problems setting printBetweenTop '+e);
		console.error('Problems setting printBetweenTop',e);
	}
	this.set_printMinTop = function (value) {
		try {
			this.proxy.printMinTop = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printMinTop '+e);
			console.error('Problems setting printMinTop',e);
		}
	};
	this.printMinTop_changed = function () {
		var value = this.printMinTop;
		return value;
	};
	try {
		this.printMinTop = new SFBool();
	} catch (e) {
		console.log('Problems setting printMinTop '+e);
		console.error('Problems setting printMinTop',e);
	}
	this.set_printMinCenterTop = function (value) {
		try {
			this.proxy.printMinCenterTop = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting printMinCenterTop '+e);
			console.error('Problems setting printMinCenterTop',e);
		}
	};
	this.printMinCenterTop_changed = function () {
		var value = this.printMinCenterTop;
		return value;
	};
	try {
		this.printMinCenterTop = new SFBool();
	} catch (e) {
		console.log('Problems setting printMinCenterTop '+e);
		console.error('Problems setting printMinCenterTop',e);
	}
	this.set_outsideMaxFrontString = function (value) {
		try {
			this.proxy.outsideMaxFrontString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting outsideMaxFrontString '+e);
			console.error('Problems setting outsideMaxFrontString',e);
		}
	};
	this.outsideMaxFrontString_changed = function () {
		var value = this.outsideMaxFrontString;
		return value;
	};
	try {
		this.outsideMaxFrontString = new MFString("FRONT VIEW: Outside maxFront (no sound)");
	} catch (e) {
		console.log('Problems setting outsideMaxFrontString '+e);
		console.error('Problems setting outsideMaxFrontString',e);
	}
	this.set_justOutsideMaxFrontString = function (value) {
		try {
			this.proxy.justOutsideMaxFrontString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting justOutsideMaxFrontString '+e);
			console.error('Problems setting justOutsideMaxFrontString',e);
		}
	};
	this.justOutsideMaxFrontString_changed = function () {
		var value = this.justOutsideMaxFrontString;
		return value;
	};
	try {
		this.justOutsideMaxFrontString = new MFString("Just outside maxFront (no sound)");
	} catch (e) {
		console.log('Problems setting justOutsideMaxFrontString '+e);
		console.error('Problems setting justOutsideMaxFrontString',e);
	}
	this.set_betweenFrontString = function (value) {
		try {
			this.proxy.betweenFrontString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting betweenFrontString '+e);
			console.error('Problems setting betweenFrontString',e);
		}
	};
	this.betweenFrontString_changed = function () {
		var value = this.betweenFrontString;
		return value;
	};
	try {
		this.betweenFrontString = new MFString("Midway between ellipsoids(max sound -10dB)");
	} catch (e) {
		console.log('Problems setting betweenFrontString '+e);
		console.error('Problems setting betweenFrontString',e);
	}
	this.set_minFrontString = function (value) {
		try {
			this.proxy.minFrontString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting minFrontString '+e);
			console.error('Problems setting minFrontString',e);
		}
	};
	this.minFrontString_changed = function () {
		var value = this.minFrontString;
		return value;
	};
	try {
		this.minFrontString = new MFString("At minFront (max sound)");
	} catch (e) {
		console.log('Problems setting minFrontString '+e);
		console.error('Problems setting minFrontString',e);
	}
	this.set_minCenterFrontString = function (value) {
		try {
			this.proxy.minCenterFrontString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting minCenterFrontString '+e);
			console.error('Problems setting minCenterFrontString',e);
		}
	};
	this.minCenterFrontString_changed = function () {
		var value = this.minCenterFrontString;
		return value;
	};
	try {
		this.minCenterFrontString = new MFString("At ellipsoid center (max sound)");
	} catch (e) {
		console.log('Problems setting minCenterFrontString '+e);
		console.error('Problems setting minCenterFrontString',e);
	}
	this.set_outsideMaxRightString = function (value) {
		try {
			this.proxy.outsideMaxRightString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting outsideMaxRightString '+e);
			console.error('Problems setting outsideMaxRightString',e);
		}
	};
	this.outsideMaxRightString_changed = function () {
		var value = this.outsideMaxRightString;
		return value;
	};
	try {
		this.outsideMaxRightString = new MFString("RIGHT VIEW: Outside max ellipsoid (no sound)");
	} catch (e) {
		console.log('Problems setting outsideMaxRightString '+e);
		console.error('Problems setting outsideMaxRightString',e);
	}
	this.set_justOutsideMaxRightString = function (value) {
		try {
			this.proxy.justOutsideMaxRightString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting justOutsideMaxRightString '+e);
			console.error('Problems setting justOutsideMaxRightString',e);
		}
	};
	this.justOutsideMaxRightString_changed = function () {
		var value = this.justOutsideMaxRightString;
		return value;
	};
	try {
		this.justOutsideMaxRightString = new MFString("Just outside max ellipsoid (no sound)");
	} catch (e) {
		console.log('Problems setting justOutsideMaxRightString '+e);
		console.error('Problems setting justOutsideMaxRightString',e);
	}
	this.set_betweenRightString = function (value) {
		try {
			this.proxy.betweenRightString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting betweenRightString '+e);
			console.error('Problems setting betweenRightString',e);
		}
	};
	this.betweenRightString_changed = function () {
		var value = this.betweenRightString;
		return value;
	};
	try {
		this.betweenRightString = new MFString("Midway between ellipsoids (max sound -10dB)");
	} catch (e) {
		console.log('Problems setting betweenRightString '+e);
		console.error('Problems setting betweenRightString',e);
	}
	this.set_minRightString = function (value) {
		try {
			this.proxy.minRightString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting minRightString '+e);
			console.error('Problems setting minRightString',e);
		}
	};
	this.minRightString_changed = function () {
		var value = this.minRightString;
		return value;
	};
	try {
		this.minRightString = new MFString("At min ellipsoid (max sound)");
	} catch (e) {
		console.log('Problems setting minRightString '+e);
		console.error('Problems setting minRightString',e);
	}
	this.set_minCenterRightString = function (value) {
		try {
			this.proxy.minCenterRightString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting minCenterRightString '+e);
			console.error('Problems setting minCenterRightString',e);
		}
	};
	this.minCenterRightString_changed = function () {
		var value = this.minCenterRightString;
		return value;
	};
	try {
		this.minCenterRightString = new MFString("At ellipsoid center (max sound)");
	} catch (e) {
		console.log('Problems setting minCenterRightString '+e);
		console.error('Problems setting minCenterRightString',e);
	}
	this.set_outsideMaxRearString = function (value) {
		try {
			this.proxy.outsideMaxRearString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting outsideMaxRearString '+e);
			console.error('Problems setting outsideMaxRearString',e);
		}
	};
	this.outsideMaxRearString_changed = function () {
		var value = this.outsideMaxRearString;
		return value;
	};
	try {
		this.outsideMaxRearString = new MFString("REAR VIEW: Outside maxBack (no sound)");
	} catch (e) {
		console.log('Problems setting outsideMaxRearString '+e);
		console.error('Problems setting outsideMaxRearString',e);
	}
	this.set_justOutsideMaxRearString = function (value) {
		try {
			this.proxy.justOutsideMaxRearString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting justOutsideMaxRearString '+e);
			console.error('Problems setting justOutsideMaxRearString',e);
		}
	};
	this.justOutsideMaxRearString_changed = function () {
		var value = this.justOutsideMaxRearString;
		return value;
	};
	try {
		this.justOutsideMaxRearString = new MFString("Just outside maxBack (no sound)");
	} catch (e) {
		console.log('Problems setting justOutsideMaxRearString '+e);
		console.error('Problems setting justOutsideMaxRearString',e);
	}
	this.set_betweenRearString = function (value) {
		try {
			this.proxy.betweenRearString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting betweenRearString '+e);
			console.error('Problems setting betweenRearString',e);
		}
	};
	this.betweenRearString_changed = function () {
		var value = this.betweenRearString;
		return value;
	};
	try {
		this.betweenRearString = new MFString("Midway between maxBack and minBack (max sound -10dB)");
	} catch (e) {
		console.log('Problems setting betweenRearString '+e);
		console.error('Problems setting betweenRearString',e);
	}
	this.set_minRearString = function (value) {
		try {
			this.proxy.minRearString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting minRearString '+e);
			console.error('Problems setting minRearString',e);
		}
	};
	this.minRearString_changed = function () {
		var value = this.minRearString;
		return value;
	};
	try {
		this.minRearString = new MFString("At minBack (max sound)");
	} catch (e) {
		console.log('Problems setting minRearString '+e);
		console.error('Problems setting minRearString',e);
	}
	this.set_minCenterRearString = function (value) {
		try {
			this.proxy.minCenterRearString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting minCenterRearString '+e);
			console.error('Problems setting minCenterRearString',e);
		}
	};
	this.minCenterRearString_changed = function () {
		var value = this.minCenterRearString;
		return value;
	};
	try {
		this.minCenterRearString = new MFString("At ellipsoid center (max sound)");
	} catch (e) {
		console.log('Problems setting minCenterRearString '+e);
		console.error('Problems setting minCenterRearString',e);
	}
	this.set_outsideMaxLeftString = function (value) {
		try {
			this.proxy.outsideMaxLeftString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting outsideMaxLeftString '+e);
			console.error('Problems setting outsideMaxLeftString',e);
		}
	};
	this.outsideMaxLeftString_changed = function () {
		var value = this.outsideMaxLeftString;
		return value;
	};
	try {
		this.outsideMaxLeftString = new MFString("LEFT VIEW: Outside max ellipsoid (no sound)");
	} catch (e) {
		console.log('Problems setting outsideMaxLeftString '+e);
		console.error('Problems setting outsideMaxLeftString',e);
	}
	this.set_justOutsideMaxLeftString = function (value) {
		try {
			this.proxy.justOutsideMaxLeftString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting justOutsideMaxLeftString '+e);
			console.error('Problems setting justOutsideMaxLeftString',e);
		}
	};
	this.justOutsideMaxLeftString_changed = function () {
		var value = this.justOutsideMaxLeftString;
		return value;
	};
	try {
		this.justOutsideMaxLeftString = new MFString("Just outside max ellipsoid (no sound)");
	} catch (e) {
		console.log('Problems setting justOutsideMaxLeftString '+e);
		console.error('Problems setting justOutsideMaxLeftString',e);
	}
	this.set_betweenLeftString = function (value) {
		try {
			this.proxy.betweenLeftString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting betweenLeftString '+e);
			console.error('Problems setting betweenLeftString',e);
		}
	};
	this.betweenLeftString_changed = function () {
		var value = this.betweenLeftString;
		return value;
	};
	try {
		this.betweenLeftString = new MFString("Midway between ellipsoids (max sound -10dB)");
	} catch (e) {
		console.log('Problems setting betweenLeftString '+e);
		console.error('Problems setting betweenLeftString',e);
	}
	this.set_minLeftString = function (value) {
		try {
			this.proxy.minLeftString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting minLeftString '+e);
			console.error('Problems setting minLeftString',e);
		}
	};
	this.minLeftString_changed = function () {
		var value = this.minLeftString;
		return value;
	};
	try {
		this.minLeftString = new MFString("At min ellipsoid (max sound)");
	} catch (e) {
		console.log('Problems setting minLeftString '+e);
		console.error('Problems setting minLeftString',e);
	}
	this.set_minCenterLeftString = function (value) {
		try {
			this.proxy.minCenterLeftString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting minCenterLeftString '+e);
			console.error('Problems setting minCenterLeftString',e);
		}
	};
	this.minCenterLeftString_changed = function () {
		var value = this.minCenterLeftString;
		return value;
	};
	try {
		this.minCenterLeftString = new MFString("At ellipsoid center (max sound)");
	} catch (e) {
		console.log('Problems setting minCenterLeftString '+e);
		console.error('Problems setting minCenterLeftString',e);
	}
	this.set_outsideMaxTopString = function (value) {
		try {
			this.proxy.outsideMaxTopString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting outsideMaxTopString '+e);
			console.error('Problems setting outsideMaxTopString',e);
		}
	};
	this.outsideMaxTopString_changed = function () {
		var value = this.outsideMaxTopString;
		return value;
	};
	try {
		this.outsideMaxTopString = new MFString("TOP VIEW: Outside max ellipsoid (no sound)");
	} catch (e) {
		console.log('Problems setting outsideMaxTopString '+e);
		console.error('Problems setting outsideMaxTopString',e);
	}
	this.set_justOutsideMaxTopString = function (value) {
		try {
			this.proxy.justOutsideMaxTopString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting justOutsideMaxTopString '+e);
			console.error('Problems setting justOutsideMaxTopString',e);
		}
	};
	this.justOutsideMaxTopString_changed = function () {
		var value = this.justOutsideMaxTopString;
		return value;
	};
	try {
		this.justOutsideMaxTopString = new MFString("Just outside max ellipsoid (no sound)");
	} catch (e) {
		console.log('Problems setting justOutsideMaxTopString '+e);
		console.error('Problems setting justOutsideMaxTopString',e);
	}
	this.set_betweenTopString = function (value) {
		try {
			this.proxy.betweenTopString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting betweenTopString '+e);
			console.error('Problems setting betweenTopString',e);
		}
	};
	this.betweenTopString_changed = function () {
		var value = this.betweenTopString;
		return value;
	};
	try {
		this.betweenTopString = new MFString("Midway between ellipsoids (max sound -10dB)");
	} catch (e) {
		console.log('Problems setting betweenTopString '+e);
		console.error('Problems setting betweenTopString',e);
	}
	this.set_minTopString = function (value) {
		try {
			this.proxy.minTopString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting minTopString '+e);
			console.error('Problems setting minTopString',e);
		}
	};
	this.minTopString_changed = function () {
		var value = this.minTopString;
		return value;
	};
	try {
		this.minTopString = new MFString("At min ellipsoid (max sound)");
	} catch (e) {
		console.log('Problems setting minTopString '+e);
		console.error('Problems setting minTopString',e);
	}
	this.set_minCenterTopString = function (value) {
		try {
			this.proxy.minCenterTopString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting minCenterTopString '+e);
			console.error('Problems setting minCenterTopString',e);
		}
	};
	this.minCenterTopString_changed = function () {
		var value = this.minCenterTopString;
		return value;
	};
	try {
		this.minCenterTopString = new MFString("At ellipsoid center top (max sound)");
	} catch (e) {
		console.log('Problems setting minCenterTopString '+e);
		console.error('Problems setting minCenterTopString',e);
	}
	this.set_minCenterBottomString = function (value) {
		try {
			this.proxy.minCenterBottomString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting minCenterBottomString '+e);
			console.error('Problems setting minCenterBottomString',e);
		}
	};
	this.minCenterBottomString_changed = function () {
		var value = this.minCenterBottomString;
		return value;
	};
	try {
		this.minCenterBottomString = new MFString("At ellipsoid center bottom (max sound)");
	} catch (e) {
		console.log('Problems setting minCenterBottomString '+e);
		console.error('Problems setting minCenterBottomString',e);
	}
	this.set_outsideMaxBottomString = function (value) {
		try {
			this.proxy.outsideMaxBottomString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting outsideMaxBottomString '+e);
			console.error('Problems setting outsideMaxBottomString',e);
		}
	};
	this.outsideMaxBottomString_changed = function () {
		var value = this.outsideMaxBottomString;
		return value;
	};
	try {
		this.outsideMaxBottomString = new MFString("BOTTOM VIEW: Outside max ellipsoid (no sound)");
	} catch (e) {
		console.log('Problems setting outsideMaxBottomString '+e);
		console.error('Problems setting outsideMaxBottomString',e);
	}
	this.set_justOutsideMaxBottomString = function (value) {
		try {
			this.proxy.justOutsideMaxBottomString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting justOutsideMaxBottomString '+e);
			console.error('Problems setting justOutsideMaxBottomString',e);
		}
	};
	this.justOutsideMaxBottomString_changed = function () {
		var value = this.justOutsideMaxBottomString;
		return value;
	};
	try {
		this.justOutsideMaxBottomString = new MFString("Just outside max ellipsoid (no sound)");
	} catch (e) {
		console.log('Problems setting justOutsideMaxBottomString '+e);
		console.error('Problems setting justOutsideMaxBottomString',e);
	}
	this.set_betweenBottomString = function (value) {
		try {
			this.proxy.betweenBottomString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting betweenBottomString '+e);
			console.error('Problems setting betweenBottomString',e);
		}
	};
	this.betweenBottomString_changed = function () {
		var value = this.betweenBottomString;
		return value;
	};
	try {
		this.betweenBottomString = new MFString("Midway between ellipsoids (max sound -10dB)");
	} catch (e) {
		console.log('Problems setting betweenBottomString '+e);
		console.error('Problems setting betweenBottomString',e);
	}
	this.set_minBottomString = function (value) {
		try {
			this.proxy.minBottomString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting minBottomString '+e);
			console.error('Problems setting minBottomString',e);
		}
	};
	this.minBottomString_changed = function () {
		var value = this.minBottomString;
		return value;
	};
	try {
		this.minBottomString = new MFString("At min ellipsoid (max sound)");
	} catch (e) {
		console.log('Problems setting minBottomString '+e);
		console.error('Problems setting minBottomString',e);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].initialize();
    if (X3DJSON.nodeUtil("Scene","OUTSIDEMAXFRONT")) {
X3DJSON.nodeUtil("Scene","OUTSIDEMAXFRONT").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printOutsideMaxFront(X3DJSON.nodeUtil("Scene","OUTSIDEMAXFRONT","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printOutsideMaxFront(X3DJSON.nodeUtil("Scene","OUTSIDEMAXFRONT","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXFRONT")) {
X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXFRONT").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printJustOutsideMaxFront(X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXFRONT","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printJustOutsideMaxFront(X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXFRONT","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","BETWEENFRONT")) {
X3DJSON.nodeUtil("Scene","BETWEENFRONT").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printBetweenFront(X3DJSON.nodeUtil("Scene","BETWEENFRONT","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printBetweenFront(X3DJSON.nodeUtil("Scene","BETWEENFRONT","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","MINFRONT")) {
X3DJSON.nodeUtil("Scene","MINFRONT").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinFront(X3DJSON.nodeUtil("Scene","MINFRONT","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinFront(X3DJSON.nodeUtil("Scene","MINFRONT","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","MINCENTERFRONT")) {
X3DJSON.nodeUtil("Scene","MINCENTERFRONT").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinCenterFront(X3DJSON.nodeUtil("Scene","MINCENTERFRONT","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinCenterFront(X3DJSON.nodeUtil("Scene","MINCENTERFRONT","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","OUTSIDEMAXRIGHT")) {
X3DJSON.nodeUtil("Scene","OUTSIDEMAXRIGHT").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printOutsideMaxRight(X3DJSON.nodeUtil("Scene","OUTSIDEMAXRIGHT","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printOutsideMaxRight(X3DJSON.nodeUtil("Scene","OUTSIDEMAXRIGHT","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXRIGHT")) {
X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXRIGHT").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printJustOutsideMaxRight(X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXRIGHT","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printJustOutsideMaxRight(X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXRIGHT","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","BETWEENRIGHT")) {
X3DJSON.nodeUtil("Scene","BETWEENRIGHT").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printBetweenRight(X3DJSON.nodeUtil("Scene","BETWEENRIGHT","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printBetweenRight(X3DJSON.nodeUtil("Scene","BETWEENRIGHT","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","MINRIGHT")) {
X3DJSON.nodeUtil("Scene","MINRIGHT").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinRight(X3DJSON.nodeUtil("Scene","MINRIGHT","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinRight(X3DJSON.nodeUtil("Scene","MINRIGHT","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","MINCENTERRIGHT")) {
X3DJSON.nodeUtil("Scene","MINCENTERRIGHT").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinCenterRight(X3DJSON.nodeUtil("Scene","MINCENTERRIGHT","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinCenterRight(X3DJSON.nodeUtil("Scene","MINCENTERRIGHT","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","OUTSIDEMAXREAR")) {
X3DJSON.nodeUtil("Scene","OUTSIDEMAXREAR").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printOutsideMaxRear(X3DJSON.nodeUtil("Scene","OUTSIDEMAXREAR","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printOutsideMaxRear(X3DJSON.nodeUtil("Scene","OUTSIDEMAXREAR","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXREAR")) {
X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXREAR").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printJustOutsideMaxRear(X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXREAR","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printJustOutsideMaxRear(X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXREAR","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","BETWEENREAR")) {
X3DJSON.nodeUtil("Scene","BETWEENREAR").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printBetweenRear(X3DJSON.nodeUtil("Scene","BETWEENREAR","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printBetweenRear(X3DJSON.nodeUtil("Scene","BETWEENREAR","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","MINREAR")) {
X3DJSON.nodeUtil("Scene","MINREAR").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinRear(X3DJSON.nodeUtil("Scene","MINREAR","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinRear(X3DJSON.nodeUtil("Scene","MINREAR","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","MINCENTERREAR")) {
X3DJSON.nodeUtil("Scene","MINCENTERREAR").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinCenterRear(X3DJSON.nodeUtil("Scene","MINCENTERREAR","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinCenterRear(X3DJSON.nodeUtil("Scene","MINCENTERREAR","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","OUTSIDEMAXLEFT")) {
X3DJSON.nodeUtil("Scene","OUTSIDEMAXLEFT").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printOutsideMaxLeft(X3DJSON.nodeUtil("Scene","OUTSIDEMAXLEFT","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printOutsideMaxLeft(X3DJSON.nodeUtil("Scene","OUTSIDEMAXLEFT","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXLEFT")) {
X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXLEFT").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printJustOutsideMaxLeft(X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXLEFT","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printJustOutsideMaxLeft(X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXLEFT","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","BETWEENLEFT")) {
X3DJSON.nodeUtil("Scene","BETWEENLEFT").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printBetweenLeft(X3DJSON.nodeUtil("Scene","BETWEENLEFT","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printBetweenLeft(X3DJSON.nodeUtil("Scene","BETWEENLEFT","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","MINLEFT")) {
X3DJSON.nodeUtil("Scene","MINLEFT").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinLeft(X3DJSON.nodeUtil("Scene","MINLEFT","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinLeft(X3DJSON.nodeUtil("Scene","MINLEFT","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","MINCENTERLEFT")) {
X3DJSON.nodeUtil("Scene","MINCENTERLEFT").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinCenterLeft(X3DJSON.nodeUtil("Scene","MINCENTERLEFT","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinCenterLeft(X3DJSON.nodeUtil("Scene","MINCENTERLEFT","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","OUTSIDEMAXTOP")) {
X3DJSON.nodeUtil("Scene","OUTSIDEMAXTOP").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printOutsideMaxTop(X3DJSON.nodeUtil("Scene","OUTSIDEMAXTOP","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printOutsideMaxTop(X3DJSON.nodeUtil("Scene","OUTSIDEMAXTOP","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXTOP")) {
X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXTOP").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printJustOutsideMaxTop(X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXTOP","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printJustOutsideMaxTop(X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXTOP","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","BETWEENTOP")) {
X3DJSON.nodeUtil("Scene","BETWEENTOP").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printBetweenTop(X3DJSON.nodeUtil("Scene","BETWEENTOP","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printBetweenTop(X3DJSON.nodeUtil("Scene","BETWEENTOP","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","MINTOP")) {
X3DJSON.nodeUtil("Scene","MINTOP").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinTop(X3DJSON.nodeUtil("Scene","MINTOP","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinTop(X3DJSON.nodeUtil("Scene","MINTOP","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","MINCENTERTOP")) {
X3DJSON.nodeUtil("Scene","MINCENTERTOP").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinCenterTop(X3DJSON.nodeUtil("Scene","MINCENTERTOP","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinCenterTop(X3DJSON.nodeUtil("Scene","MINCENTERTOP","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","OUTSIDEMAXBOTTOM")) {
X3DJSON.nodeUtil("Scene","OUTSIDEMAXBOTTOM").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printOutsideMaxBottom(X3DJSON.nodeUtil("Scene","OUTSIDEMAXBOTTOM","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printOutsideMaxBottom(X3DJSON.nodeUtil("Scene","OUTSIDEMAXBOTTOM","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXBOTTOM")) {
X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXBOTTOM").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printJustOutsideMaxBottom(X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXBOTTOM","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printJustOutsideMaxBottom(X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXBOTTOM","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","BETWEENBOTTOM")) {
X3DJSON.nodeUtil("Scene","BETWEENBOTTOM").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printBetweenBottom(X3DJSON.nodeUtil("Scene","BETWEENBOTTOM","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printBetweenBottom(X3DJSON.nodeUtil("Scene","BETWEENBOTTOM","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","MINBOTTOM")) {
X3DJSON.nodeUtil("Scene","MINBOTTOM").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinBottom(X3DJSON.nodeUtil("Scene","MINBOTTOM","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinBottom(X3DJSON.nodeUtil("Scene","MINBOTTOM","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","MINCENTERBOTTOM")) {
X3DJSON.nodeUtil("Scene","MINCENTERBOTTOM").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinCenterBottom(X3DJSON.nodeUtil("Scene","MINCENTERBOTTOM","isBound"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinCenterBottom(X3DJSON.nodeUtil("Scene","MINCENTERBOTTOM","isBound"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","PROX_SENSOR")) {
X3DJSON.nodeUtil("Scene","PROX_SENSOR").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PROX_SENSOR")) {
X3DJSON.nodeUtil("Scene","PROX_SENSOR").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printOutsideMaxFront(X3DJSON.nodeUtil("Scene","OUTSIDEMAXFRONT","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printJustOutsideMaxFront(X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXFRONT","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printBetweenFront(X3DJSON.nodeUtil("Scene","BETWEENFRONT","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinFront(X3DJSON.nodeUtil("Scene","MINFRONT","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinCenterFront(X3DJSON.nodeUtil("Scene","MINCENTERFRONT","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printOutsideMaxRight(X3DJSON.nodeUtil("Scene","OUTSIDEMAXRIGHT","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printJustOutsideMaxRight(X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXRIGHT","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printBetweenRight(X3DJSON.nodeUtil("Scene","BETWEENRIGHT","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinRight(X3DJSON.nodeUtil("Scene","MINRIGHT","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinCenterRight(X3DJSON.nodeUtil("Scene","MINCENTERRIGHT","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printOutsideMaxRear(X3DJSON.nodeUtil("Scene","OUTSIDEMAXREAR","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printJustOutsideMaxRear(X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXREAR","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printBetweenRear(X3DJSON.nodeUtil("Scene","BETWEENREAR","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinRear(X3DJSON.nodeUtil("Scene","MINREAR","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinCenterRear(X3DJSON.nodeUtil("Scene","MINCENTERREAR","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printOutsideMaxLeft(X3DJSON.nodeUtil("Scene","OUTSIDEMAXLEFT","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printJustOutsideMaxLeft(X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXLEFT","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printBetweenLeft(X3DJSON.nodeUtil("Scene","BETWEENLEFT","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinLeft(X3DJSON.nodeUtil("Scene","MINLEFT","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinCenterLeft(X3DJSON.nodeUtil("Scene","MINCENTERLEFT","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printOutsideMaxTop(X3DJSON.nodeUtil("Scene","OUTSIDEMAXTOP","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printJustOutsideMaxTop(X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXTOP","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printBetweenTop(X3DJSON.nodeUtil("Scene","BETWEENTOP","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinTop(X3DJSON.nodeUtil("Scene","MINTOP","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinCenterTop(X3DJSON.nodeUtil("Scene","MINCENTERTOP","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printOutsideMaxBottom(X3DJSON.nodeUtil("Scene","OUTSIDEMAXBOTTOM","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printJustOutsideMaxBottom(X3DJSON.nodeUtil("Scene","JUSTOUTSIDEMAXBOTTOM","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printBetweenBottom(X3DJSON.nodeUtil("Scene","BETWEENBOTTOM","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinBottom(X3DJSON.nodeUtil("Scene","MINBOTTOM","isBound"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Sounds/Sound/hierarchy.json']['AVATARSCRIPT'].printMinCenterBottom(X3DJSON.nodeUtil("Scene","MINCENTERBOTTOM","isBound"), __eventTime);