var x3dom = require('../node/fields.js');
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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = function() {
	this.set_playScriptedNotes = function (value) {
		try {
			this.proxy.playScriptedNotes = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playScriptedNotes '+e);
			console.error('Problems setting playScriptedNotes',e);
		}
	};
	this.playScriptedNotes_changed = function () {
		var value = this.playScriptedNotes;
		return value;
	};
	try {
		this.playScriptedNotes = new SFTime();
	} catch (e) {
		console.log('Problems setting playScriptedNotes '+e);
		console.error('Problems setting playScriptedNotes',e);
	}
	this.set_playA0 = function (value) {
		try {
			this.proxy.playA0 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playA0 '+e);
			console.error('Problems setting playA0',e);
		}
	};
	this.playA0_changed = function () {
		var value = this.playA0;
		return value;
	};
	try {
		this.playA0 = new SFTime();
	} catch (e) {
		console.log('Problems setting playA0 '+e);
		console.error('Problems setting playA0',e);
	}
	this.set_playAs0 = function (value) {
		try {
			this.proxy.playAs0 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playAs0 '+e);
			console.error('Problems setting playAs0',e);
		}
	};
	this.playAs0_changed = function () {
		var value = this.playAs0;
		return value;
	};
	try {
		this.playAs0 = new SFTime();
	} catch (e) {
		console.log('Problems setting playAs0 '+e);
		console.error('Problems setting playAs0',e);
	}
	this.set_playB0 = function (value) {
		try {
			this.proxy.playB0 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playB0 '+e);
			console.error('Problems setting playB0',e);
		}
	};
	this.playB0_changed = function () {
		var value = this.playB0;
		return value;
	};
	try {
		this.playB0 = new SFTime();
	} catch (e) {
		console.log('Problems setting playB0 '+e);
		console.error('Problems setting playB0',e);
	}
	this.set_playC0 = function (value) {
		try {
			this.proxy.playC0 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playC0 '+e);
			console.error('Problems setting playC0',e);
		}
	};
	this.playC0_changed = function () {
		var value = this.playC0;
		return value;
	};
	try {
		this.playC0 = new SFTime();
	} catch (e) {
		console.log('Problems setting playC0 '+e);
		console.error('Problems setting playC0',e);
	}
	this.set_playCs0 = function (value) {
		try {
			this.proxy.playCs0 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playCs0 '+e);
			console.error('Problems setting playCs0',e);
		}
	};
	this.playCs0_changed = function () {
		var value = this.playCs0;
		return value;
	};
	try {
		this.playCs0 = new SFTime();
	} catch (e) {
		console.log('Problems setting playCs0 '+e);
		console.error('Problems setting playCs0',e);
	}
	this.set_playD0 = function (value) {
		try {
			this.proxy.playD0 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playD0 '+e);
			console.error('Problems setting playD0',e);
		}
	};
	this.playD0_changed = function () {
		var value = this.playD0;
		return value;
	};
	try {
		this.playD0 = new SFTime();
	} catch (e) {
		console.log('Problems setting playD0 '+e);
		console.error('Problems setting playD0',e);
	}
	this.set_playDs0 = function (value) {
		try {
			this.proxy.playDs0 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playDs0 '+e);
			console.error('Problems setting playDs0',e);
		}
	};
	this.playDs0_changed = function () {
		var value = this.playDs0;
		return value;
	};
	try {
		this.playDs0 = new SFTime();
	} catch (e) {
		console.log('Problems setting playDs0 '+e);
		console.error('Problems setting playDs0',e);
	}
	this.set_playE0 = function (value) {
		try {
			this.proxy.playE0 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playE0 '+e);
			console.error('Problems setting playE0',e);
		}
	};
	this.playE0_changed = function () {
		var value = this.playE0;
		return value;
	};
	try {
		this.playE0 = new SFTime();
	} catch (e) {
		console.log('Problems setting playE0 '+e);
		console.error('Problems setting playE0',e);
	}
	this.set_playF0 = function (value) {
		try {
			this.proxy.playF0 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playF0 '+e);
			console.error('Problems setting playF0',e);
		}
	};
	this.playF0_changed = function () {
		var value = this.playF0;
		return value;
	};
	try {
		this.playF0 = new SFTime();
	} catch (e) {
		console.log('Problems setting playF0 '+e);
		console.error('Problems setting playF0',e);
	}
	this.set_playFs0 = function (value) {
		try {
			this.proxy.playFs0 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playFs0 '+e);
			console.error('Problems setting playFs0',e);
		}
	};
	this.playFs0_changed = function () {
		var value = this.playFs0;
		return value;
	};
	try {
		this.playFs0 = new SFTime();
	} catch (e) {
		console.log('Problems setting playFs0 '+e);
		console.error('Problems setting playFs0',e);
	}
	this.set_playG0 = function (value) {
		try {
			this.proxy.playG0 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playG0 '+e);
			console.error('Problems setting playG0',e);
		}
	};
	this.playG0_changed = function () {
		var value = this.playG0;
		return value;
	};
	try {
		this.playG0 = new SFTime();
	} catch (e) {
		console.log('Problems setting playG0 '+e);
		console.error('Problems setting playG0',e);
	}
	this.set_playGs0 = function (value) {
		try {
			this.proxy.playGs0 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playGs0 '+e);
			console.error('Problems setting playGs0',e);
		}
	};
	this.playGs0_changed = function () {
		var value = this.playGs0;
		return value;
	};
	try {
		this.playGs0 = new SFTime();
	} catch (e) {
		console.log('Problems setting playGs0 '+e);
		console.error('Problems setting playGs0',e);
	}
	this.set_playA1 = function (value) {
		try {
			this.proxy.playA1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playA1 '+e);
			console.error('Problems setting playA1',e);
		}
	};
	this.playA1_changed = function () {
		var value = this.playA1;
		return value;
	};
	try {
		this.playA1 = new SFTime();
	} catch (e) {
		console.log('Problems setting playA1 '+e);
		console.error('Problems setting playA1',e);
	}
	this.set_playAs1 = function (value) {
		try {
			this.proxy.playAs1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playAs1 '+e);
			console.error('Problems setting playAs1',e);
		}
	};
	this.playAs1_changed = function () {
		var value = this.playAs1;
		return value;
	};
	try {
		this.playAs1 = new SFTime();
	} catch (e) {
		console.log('Problems setting playAs1 '+e);
		console.error('Problems setting playAs1',e);
	}
	this.set_playB1 = function (value) {
		try {
			this.proxy.playB1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playB1 '+e);
			console.error('Problems setting playB1',e);
		}
	};
	this.playB1_changed = function () {
		var value = this.playB1;
		return value;
	};
	try {
		this.playB1 = new SFTime();
	} catch (e) {
		console.log('Problems setting playB1 '+e);
		console.error('Problems setting playB1',e);
	}
	this.set_playC1 = function (value) {
		try {
			this.proxy.playC1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playC1 '+e);
			console.error('Problems setting playC1',e);
		}
	};
	this.playC1_changed = function () {
		var value = this.playC1;
		return value;
	};
	try {
		this.playC1 = new SFTime();
	} catch (e) {
		console.log('Problems setting playC1 '+e);
		console.error('Problems setting playC1',e);
	}
	this.set_playCs1 = function (value) {
		try {
			this.proxy.playCs1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playCs1 '+e);
			console.error('Problems setting playCs1',e);
		}
	};
	this.playCs1_changed = function () {
		var value = this.playCs1;
		return value;
	};
	try {
		this.playCs1 = new SFTime();
	} catch (e) {
		console.log('Problems setting playCs1 '+e);
		console.error('Problems setting playCs1',e);
	}
	this.set_playD1 = function (value) {
		try {
			this.proxy.playD1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playD1 '+e);
			console.error('Problems setting playD1',e);
		}
	};
	this.playD1_changed = function () {
		var value = this.playD1;
		return value;
	};
	try {
		this.playD1 = new SFTime();
	} catch (e) {
		console.log('Problems setting playD1 '+e);
		console.error('Problems setting playD1',e);
	}
	this.set_playDs1 = function (value) {
		try {
			this.proxy.playDs1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playDs1 '+e);
			console.error('Problems setting playDs1',e);
		}
	};
	this.playDs1_changed = function () {
		var value = this.playDs1;
		return value;
	};
	try {
		this.playDs1 = new SFTime();
	} catch (e) {
		console.log('Problems setting playDs1 '+e);
		console.error('Problems setting playDs1',e);
	}
	this.set_playE1 = function (value) {
		try {
			this.proxy.playE1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playE1 '+e);
			console.error('Problems setting playE1',e);
		}
	};
	this.playE1_changed = function () {
		var value = this.playE1;
		return value;
	};
	try {
		this.playE1 = new SFTime();
	} catch (e) {
		console.log('Problems setting playE1 '+e);
		console.error('Problems setting playE1',e);
	}
	this.set_playF1 = function (value) {
		try {
			this.proxy.playF1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playF1 '+e);
			console.error('Problems setting playF1',e);
		}
	};
	this.playF1_changed = function () {
		var value = this.playF1;
		return value;
	};
	try {
		this.playF1 = new SFTime();
	} catch (e) {
		console.log('Problems setting playF1 '+e);
		console.error('Problems setting playF1',e);
	}
	this.set_playFs1 = function (value) {
		try {
			this.proxy.playFs1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playFs1 '+e);
			console.error('Problems setting playFs1',e);
		}
	};
	this.playFs1_changed = function () {
		var value = this.playFs1;
		return value;
	};
	try {
		this.playFs1 = new SFTime();
	} catch (e) {
		console.log('Problems setting playFs1 '+e);
		console.error('Problems setting playFs1',e);
	}
	this.set_playG1 = function (value) {
		try {
			this.proxy.playG1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playG1 '+e);
			console.error('Problems setting playG1',e);
		}
	};
	this.playG1_changed = function () {
		var value = this.playG1;
		return value;
	};
	try {
		this.playG1 = new SFTime();
	} catch (e) {
		console.log('Problems setting playG1 '+e);
		console.error('Problems setting playG1',e);
	}
	this.set_playGs1 = function (value) {
		try {
			this.proxy.playGs1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playGs1 '+e);
			console.error('Problems setting playGs1',e);
		}
	};
	this.playGs1_changed = function () {
		var value = this.playGs1;
		return value;
	};
	try {
		this.playGs1 = new SFTime();
	} catch (e) {
		console.log('Problems setting playGs1 '+e);
		console.error('Problems setting playGs1',e);
	}
	this.set_playA2 = function (value) {
		try {
			this.proxy.playA2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playA2 '+e);
			console.error('Problems setting playA2',e);
		}
	};
	this.playA2_changed = function () {
		var value = this.playA2;
		return value;
	};
	try {
		this.playA2 = new SFTime();
	} catch (e) {
		console.log('Problems setting playA2 '+e);
		console.error('Problems setting playA2',e);
	}
	this.set_playAs2 = function (value) {
		try {
			this.proxy.playAs2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playAs2 '+e);
			console.error('Problems setting playAs2',e);
		}
	};
	this.playAs2_changed = function () {
		var value = this.playAs2;
		return value;
	};
	try {
		this.playAs2 = new SFTime();
	} catch (e) {
		console.log('Problems setting playAs2 '+e);
		console.error('Problems setting playAs2',e);
	}
	this.set_playB2 = function (value) {
		try {
			this.proxy.playB2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playB2 '+e);
			console.error('Problems setting playB2',e);
		}
	};
	this.playB2_changed = function () {
		var value = this.playB2;
		return value;
	};
	try {
		this.playB2 = new SFTime();
	} catch (e) {
		console.log('Problems setting playB2 '+e);
		console.error('Problems setting playB2',e);
	}
	this.set_playC2 = function (value) {
		try {
			this.proxy.playC2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playC2 '+e);
			console.error('Problems setting playC2',e);
		}
	};
	this.playC2_changed = function () {
		var value = this.playC2;
		return value;
	};
	try {
		this.playC2 = new SFTime();
	} catch (e) {
		console.log('Problems setting playC2 '+e);
		console.error('Problems setting playC2',e);
	}
	this.set_playCs2 = function (value) {
		try {
			this.proxy.playCs2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playCs2 '+e);
			console.error('Problems setting playCs2',e);
		}
	};
	this.playCs2_changed = function () {
		var value = this.playCs2;
		return value;
	};
	try {
		this.playCs2 = new SFTime();
	} catch (e) {
		console.log('Problems setting playCs2 '+e);
		console.error('Problems setting playCs2',e);
	}
	this.set_playD2 = function (value) {
		try {
			this.proxy.playD2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playD2 '+e);
			console.error('Problems setting playD2',e);
		}
	};
	this.playD2_changed = function () {
		var value = this.playD2;
		return value;
	};
	try {
		this.playD2 = new SFTime();
	} catch (e) {
		console.log('Problems setting playD2 '+e);
		console.error('Problems setting playD2',e);
	}
	this.set_playDs2 = function (value) {
		try {
			this.proxy.playDs2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playDs2 '+e);
			console.error('Problems setting playDs2',e);
		}
	};
	this.playDs2_changed = function () {
		var value = this.playDs2;
		return value;
	};
	try {
		this.playDs2 = new SFTime();
	} catch (e) {
		console.log('Problems setting playDs2 '+e);
		console.error('Problems setting playDs2',e);
	}
	this.set_playE2 = function (value) {
		try {
			this.proxy.playE2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playE2 '+e);
			console.error('Problems setting playE2',e);
		}
	};
	this.playE2_changed = function () {
		var value = this.playE2;
		return value;
	};
	try {
		this.playE2 = new SFTime();
	} catch (e) {
		console.log('Problems setting playE2 '+e);
		console.error('Problems setting playE2',e);
	}
	this.set_playF2 = function (value) {
		try {
			this.proxy.playF2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playF2 '+e);
			console.error('Problems setting playF2',e);
		}
	};
	this.playF2_changed = function () {
		var value = this.playF2;
		return value;
	};
	try {
		this.playF2 = new SFTime();
	} catch (e) {
		console.log('Problems setting playF2 '+e);
		console.error('Problems setting playF2',e);
	}
	this.set_playFs2 = function (value) {
		try {
			this.proxy.playFs2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playFs2 '+e);
			console.error('Problems setting playFs2',e);
		}
	};
	this.playFs2_changed = function () {
		var value = this.playFs2;
		return value;
	};
	try {
		this.playFs2 = new SFTime();
	} catch (e) {
		console.log('Problems setting playFs2 '+e);
		console.error('Problems setting playFs2',e);
	}
	this.set_playG2 = function (value) {
		try {
			this.proxy.playG2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playG2 '+e);
			console.error('Problems setting playG2',e);
		}
	};
	this.playG2_changed = function () {
		var value = this.playG2;
		return value;
	};
	try {
		this.playG2 = new SFTime();
	} catch (e) {
		console.log('Problems setting playG2 '+e);
		console.error('Problems setting playG2',e);
	}
	this.set_playGs2 = function (value) {
		try {
			this.proxy.playGs2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playGs2 '+e);
			console.error('Problems setting playGs2',e);
		}
	};
	this.playGs2_changed = function () {
		var value = this.playGs2;
		return value;
	};
	try {
		this.playGs2 = new SFTime();
	} catch (e) {
		console.log('Problems setting playGs2 '+e);
		console.error('Problems setting playGs2',e);
	}
	this.set_playA3 = function (value) {
		try {
			this.proxy.playA3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playA3 '+e);
			console.error('Problems setting playA3',e);
		}
	};
	this.playA3_changed = function () {
		var value = this.playA3;
		return value;
	};
	try {
		this.playA3 = new SFTime();
	} catch (e) {
		console.log('Problems setting playA3 '+e);
		console.error('Problems setting playA3',e);
	}
	this.set_playAs3 = function (value) {
		try {
			this.proxy.playAs3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playAs3 '+e);
			console.error('Problems setting playAs3',e);
		}
	};
	this.playAs3_changed = function () {
		var value = this.playAs3;
		return value;
	};
	try {
		this.playAs3 = new SFTime();
	} catch (e) {
		console.log('Problems setting playAs3 '+e);
		console.error('Problems setting playAs3',e);
	}
	this.set_playB3 = function (value) {
		try {
			this.proxy.playB3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playB3 '+e);
			console.error('Problems setting playB3',e);
		}
	};
	this.playB3_changed = function () {
		var value = this.playB3;
		return value;
	};
	try {
		this.playB3 = new SFTime();
	} catch (e) {
		console.log('Problems setting playB3 '+e);
		console.error('Problems setting playB3',e);
	}
	this.set_playC3 = function (value) {
		try {
			this.proxy.playC3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playC3 '+e);
			console.error('Problems setting playC3',e);
		}
	};
	this.playC3_changed = function () {
		var value = this.playC3;
		return value;
	};
	try {
		this.playC3 = new SFTime();
	} catch (e) {
		console.log('Problems setting playC3 '+e);
		console.error('Problems setting playC3',e);
	}
	this.set_playCs3 = function (value) {
		try {
			this.proxy.playCs3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playCs3 '+e);
			console.error('Problems setting playCs3',e);
		}
	};
	this.playCs3_changed = function () {
		var value = this.playCs3;
		return value;
	};
	try {
		this.playCs3 = new SFTime();
	} catch (e) {
		console.log('Problems setting playCs3 '+e);
		console.error('Problems setting playCs3',e);
	}
	this.set_playD3 = function (value) {
		try {
			this.proxy.playD3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playD3 '+e);
			console.error('Problems setting playD3',e);
		}
	};
	this.playD3_changed = function () {
		var value = this.playD3;
		return value;
	};
	try {
		this.playD3 = new SFTime();
	} catch (e) {
		console.log('Problems setting playD3 '+e);
		console.error('Problems setting playD3',e);
	}
	this.set_playDs3 = function (value) {
		try {
			this.proxy.playDs3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playDs3 '+e);
			console.error('Problems setting playDs3',e);
		}
	};
	this.playDs3_changed = function () {
		var value = this.playDs3;
		return value;
	};
	try {
		this.playDs3 = new SFTime();
	} catch (e) {
		console.log('Problems setting playDs3 '+e);
		console.error('Problems setting playDs3',e);
	}
	this.set_playE3 = function (value) {
		try {
			this.proxy.playE3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playE3 '+e);
			console.error('Problems setting playE3',e);
		}
	};
	this.playE3_changed = function () {
		var value = this.playE3;
		return value;
	};
	try {
		this.playE3 = new SFTime();
	} catch (e) {
		console.log('Problems setting playE3 '+e);
		console.error('Problems setting playE3',e);
	}
	this.set_playF3 = function (value) {
		try {
			this.proxy.playF3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playF3 '+e);
			console.error('Problems setting playF3',e);
		}
	};
	this.playF3_changed = function () {
		var value = this.playF3;
		return value;
	};
	try {
		this.playF3 = new SFTime();
	} catch (e) {
		console.log('Problems setting playF3 '+e);
		console.error('Problems setting playF3',e);
	}
	this.set_playFs3 = function (value) {
		try {
			this.proxy.playFs3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playFs3 '+e);
			console.error('Problems setting playFs3',e);
		}
	};
	this.playFs3_changed = function () {
		var value = this.playFs3;
		return value;
	};
	try {
		this.playFs3 = new SFTime();
	} catch (e) {
		console.log('Problems setting playFs3 '+e);
		console.error('Problems setting playFs3',e);
	}
	this.set_playG3 = function (value) {
		try {
			this.proxy.playG3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playG3 '+e);
			console.error('Problems setting playG3',e);
		}
	};
	this.playG3_changed = function () {
		var value = this.playG3;
		return value;
	};
	try {
		this.playG3 = new SFTime();
	} catch (e) {
		console.log('Problems setting playG3 '+e);
		console.error('Problems setting playG3',e);
	}
	this.set_playGs3 = function (value) {
		try {
			this.proxy.playGs3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playGs3 '+e);
			console.error('Problems setting playGs3',e);
		}
	};
	this.playGs3_changed = function () {
		var value = this.playGs3;
		return value;
	};
	try {
		this.playGs3 = new SFTime();
	} catch (e) {
		console.log('Problems setting playGs3 '+e);
		console.error('Problems setting playGs3',e);
	}
	this.set_playA4 = function (value) {
		try {
			this.proxy.playA4 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playA4 '+e);
			console.error('Problems setting playA4',e);
		}
	};
	this.playA4_changed = function () {
		var value = this.playA4;
		return value;
	};
	try {
		this.playA4 = new SFTime();
	} catch (e) {
		console.log('Problems setting playA4 '+e);
		console.error('Problems setting playA4',e);
	}
	this.set_playAs4 = function (value) {
		try {
			this.proxy.playAs4 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playAs4 '+e);
			console.error('Problems setting playAs4',e);
		}
	};
	this.playAs4_changed = function () {
		var value = this.playAs4;
		return value;
	};
	try {
		this.playAs4 = new SFTime();
	} catch (e) {
		console.log('Problems setting playAs4 '+e);
		console.error('Problems setting playAs4',e);
	}
	this.set_playB4 = function (value) {
		try {
			this.proxy.playB4 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playB4 '+e);
			console.error('Problems setting playB4',e);
		}
	};
	this.playB4_changed = function () {
		var value = this.playB4;
		return value;
	};
	try {
		this.playB4 = new SFTime();
	} catch (e) {
		console.log('Problems setting playB4 '+e);
		console.error('Problems setting playB4',e);
	}
	this.set_playC4 = function (value) {
		try {
			this.proxy.playC4 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playC4 '+e);
			console.error('Problems setting playC4',e);
		}
	};
	this.playC4_changed = function () {
		var value = this.playC4;
		return value;
	};
	try {
		this.playC4 = new SFTime();
	} catch (e) {
		console.log('Problems setting playC4 '+e);
		console.error('Problems setting playC4',e);
	}
	this.set_playCs4 = function (value) {
		try {
			this.proxy.playCs4 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playCs4 '+e);
			console.error('Problems setting playCs4',e);
		}
	};
	this.playCs4_changed = function () {
		var value = this.playCs4;
		return value;
	};
	try {
		this.playCs4 = new SFTime();
	} catch (e) {
		console.log('Problems setting playCs4 '+e);
		console.error('Problems setting playCs4',e);
	}
	this.set_playD4 = function (value) {
		try {
			this.proxy.playD4 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playD4 '+e);
			console.error('Problems setting playD4',e);
		}
	};
	this.playD4_changed = function () {
		var value = this.playD4;
		return value;
	};
	try {
		this.playD4 = new SFTime();
	} catch (e) {
		console.log('Problems setting playD4 '+e);
		console.error('Problems setting playD4',e);
	}
	this.set_playDs4 = function (value) {
		try {
			this.proxy.playDs4 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playDs4 '+e);
			console.error('Problems setting playDs4',e);
		}
	};
	this.playDs4_changed = function () {
		var value = this.playDs4;
		return value;
	};
	try {
		this.playDs4 = new SFTime();
	} catch (e) {
		console.log('Problems setting playDs4 '+e);
		console.error('Problems setting playDs4',e);
	}
	this.set_playE4 = function (value) {
		try {
			this.proxy.playE4 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playE4 '+e);
			console.error('Problems setting playE4',e);
		}
	};
	this.playE4_changed = function () {
		var value = this.playE4;
		return value;
	};
	try {
		this.playE4 = new SFTime();
	} catch (e) {
		console.log('Problems setting playE4 '+e);
		console.error('Problems setting playE4',e);
	}
	this.set_playF4 = function (value) {
		try {
			this.proxy.playF4 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playF4 '+e);
			console.error('Problems setting playF4',e);
		}
	};
	this.playF4_changed = function () {
		var value = this.playF4;
		return value;
	};
	try {
		this.playF4 = new SFTime();
	} catch (e) {
		console.log('Problems setting playF4 '+e);
		console.error('Problems setting playF4',e);
	}
	this.set_playFs4 = function (value) {
		try {
			this.proxy.playFs4 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playFs4 '+e);
			console.error('Problems setting playFs4',e);
		}
	};
	this.playFs4_changed = function () {
		var value = this.playFs4;
		return value;
	};
	try {
		this.playFs4 = new SFTime();
	} catch (e) {
		console.log('Problems setting playFs4 '+e);
		console.error('Problems setting playFs4',e);
	}
	this.set_playG4 = function (value) {
		try {
			this.proxy.playG4 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playG4 '+e);
			console.error('Problems setting playG4',e);
		}
	};
	this.playG4_changed = function () {
		var value = this.playG4;
		return value;
	};
	try {
		this.playG4 = new SFTime();
	} catch (e) {
		console.log('Problems setting playG4 '+e);
		console.error('Problems setting playG4',e);
	}
	this.set_playGs4 = function (value) {
		try {
			this.proxy.playGs4 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playGs4 '+e);
			console.error('Problems setting playGs4',e);
		}
	};
	this.playGs4_changed = function () {
		var value = this.playGs4;
		return value;
	};
	try {
		this.playGs4 = new SFTime();
	} catch (e) {
		console.log('Problems setting playGs4 '+e);
		console.error('Problems setting playGs4',e);
	}
	this.set_playA5 = function (value) {
		try {
			this.proxy.playA5 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playA5 '+e);
			console.error('Problems setting playA5',e);
		}
	};
	this.playA5_changed = function () {
		var value = this.playA5;
		return value;
	};
	try {
		this.playA5 = new SFTime();
	} catch (e) {
		console.log('Problems setting playA5 '+e);
		console.error('Problems setting playA5',e);
	}
	this.set_playAs5 = function (value) {
		try {
			this.proxy.playAs5 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playAs5 '+e);
			console.error('Problems setting playAs5',e);
		}
	};
	this.playAs5_changed = function () {
		var value = this.playAs5;
		return value;
	};
	try {
		this.playAs5 = new SFTime();
	} catch (e) {
		console.log('Problems setting playAs5 '+e);
		console.error('Problems setting playAs5',e);
	}
	this.set_playB5 = function (value) {
		try {
			this.proxy.playB5 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playB5 '+e);
			console.error('Problems setting playB5',e);
		}
	};
	this.playB5_changed = function () {
		var value = this.playB5;
		return value;
	};
	try {
		this.playB5 = new SFTime();
	} catch (e) {
		console.log('Problems setting playB5 '+e);
		console.error('Problems setting playB5',e);
	}
	this.set_playC5 = function (value) {
		try {
			this.proxy.playC5 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playC5 '+e);
			console.error('Problems setting playC5',e);
		}
	};
	this.playC5_changed = function () {
		var value = this.playC5;
		return value;
	};
	try {
		this.playC5 = new SFTime();
	} catch (e) {
		console.log('Problems setting playC5 '+e);
		console.error('Problems setting playC5',e);
	}
	this.set_playCs5 = function (value) {
		try {
			this.proxy.playCs5 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playCs5 '+e);
			console.error('Problems setting playCs5',e);
		}
	};
	this.playCs5_changed = function () {
		var value = this.playCs5;
		return value;
	};
	try {
		this.playCs5 = new SFTime();
	} catch (e) {
		console.log('Problems setting playCs5 '+e);
		console.error('Problems setting playCs5',e);
	}
	this.set_playD5 = function (value) {
		try {
			this.proxy.playD5 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playD5 '+e);
			console.error('Problems setting playD5',e);
		}
	};
	this.playD5_changed = function () {
		var value = this.playD5;
		return value;
	};
	try {
		this.playD5 = new SFTime();
	} catch (e) {
		console.log('Problems setting playD5 '+e);
		console.error('Problems setting playD5',e);
	}
	this.set_playDs5 = function (value) {
		try {
			this.proxy.playDs5 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playDs5 '+e);
			console.error('Problems setting playDs5',e);
		}
	};
	this.playDs5_changed = function () {
		var value = this.playDs5;
		return value;
	};
	try {
		this.playDs5 = new SFTime();
	} catch (e) {
		console.log('Problems setting playDs5 '+e);
		console.error('Problems setting playDs5',e);
	}
	this.set_playE5 = function (value) {
		try {
			this.proxy.playE5 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playE5 '+e);
			console.error('Problems setting playE5',e);
		}
	};
	this.playE5_changed = function () {
		var value = this.playE5;
		return value;
	};
	try {
		this.playE5 = new SFTime();
	} catch (e) {
		console.log('Problems setting playE5 '+e);
		console.error('Problems setting playE5',e);
	}
	this.set_playF5 = function (value) {
		try {
			this.proxy.playF5 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playF5 '+e);
			console.error('Problems setting playF5',e);
		}
	};
	this.playF5_changed = function () {
		var value = this.playF5;
		return value;
	};
	try {
		this.playF5 = new SFTime();
	} catch (e) {
		console.log('Problems setting playF5 '+e);
		console.error('Problems setting playF5',e);
	}
	this.set_playFs5 = function (value) {
		try {
			this.proxy.playFs5 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playFs5 '+e);
			console.error('Problems setting playFs5',e);
		}
	};
	this.playFs5_changed = function () {
		var value = this.playFs5;
		return value;
	};
	try {
		this.playFs5 = new SFTime();
	} catch (e) {
		console.log('Problems setting playFs5 '+e);
		console.error('Problems setting playFs5',e);
	}
	this.set_playG5 = function (value) {
		try {
			this.proxy.playG5 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playG5 '+e);
			console.error('Problems setting playG5',e);
		}
	};
	this.playG5_changed = function () {
		var value = this.playG5;
		return value;
	};
	try {
		this.playG5 = new SFTime();
	} catch (e) {
		console.log('Problems setting playG5 '+e);
		console.error('Problems setting playG5',e);
	}
	this.set_playGs5 = function (value) {
		try {
			this.proxy.playGs5 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playGs5 '+e);
			console.error('Problems setting playGs5',e);
		}
	};
	this.playGs5_changed = function () {
		var value = this.playGs5;
		return value;
	};
	try {
		this.playGs5 = new SFTime();
	} catch (e) {
		console.log('Problems setting playGs5 '+e);
		console.error('Problems setting playGs5',e);
	}
	this.set_playA6 = function (value) {
		try {
			this.proxy.playA6 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playA6 '+e);
			console.error('Problems setting playA6',e);
		}
	};
	this.playA6_changed = function () {
		var value = this.playA6;
		return value;
	};
	try {
		this.playA6 = new SFTime();
	} catch (e) {
		console.log('Problems setting playA6 '+e);
		console.error('Problems setting playA6',e);
	}
	this.set_playAs6 = function (value) {
		try {
			this.proxy.playAs6 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playAs6 '+e);
			console.error('Problems setting playAs6',e);
		}
	};
	this.playAs6_changed = function () {
		var value = this.playAs6;
		return value;
	};
	try {
		this.playAs6 = new SFTime();
	} catch (e) {
		console.log('Problems setting playAs6 '+e);
		console.error('Problems setting playAs6',e);
	}
	this.set_playB6 = function (value) {
		try {
			this.proxy.playB6 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playB6 '+e);
			console.error('Problems setting playB6',e);
		}
	};
	this.playB6_changed = function () {
		var value = this.playB6;
		return value;
	};
	try {
		this.playB6 = new SFTime();
	} catch (e) {
		console.log('Problems setting playB6 '+e);
		console.error('Problems setting playB6',e);
	}
	this.set_playC6 = function (value) {
		try {
			this.proxy.playC6 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playC6 '+e);
			console.error('Problems setting playC6',e);
		}
	};
	this.playC6_changed = function () {
		var value = this.playC6;
		return value;
	};
	try {
		this.playC6 = new SFTime();
	} catch (e) {
		console.log('Problems setting playC6 '+e);
		console.error('Problems setting playC6',e);
	}
	this.set_playCs6 = function (value) {
		try {
			this.proxy.playCs6 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playCs6 '+e);
			console.error('Problems setting playCs6',e);
		}
	};
	this.playCs6_changed = function () {
		var value = this.playCs6;
		return value;
	};
	try {
		this.playCs6 = new SFTime();
	} catch (e) {
		console.log('Problems setting playCs6 '+e);
		console.error('Problems setting playCs6',e);
	}
	this.set_playD6 = function (value) {
		try {
			this.proxy.playD6 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playD6 '+e);
			console.error('Problems setting playD6',e);
		}
	};
	this.playD6_changed = function () {
		var value = this.playD6;
		return value;
	};
	try {
		this.playD6 = new SFTime();
	} catch (e) {
		console.log('Problems setting playD6 '+e);
		console.error('Problems setting playD6',e);
	}
	this.set_playDs6 = function (value) {
		try {
			this.proxy.playDs6 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playDs6 '+e);
			console.error('Problems setting playDs6',e);
		}
	};
	this.playDs6_changed = function () {
		var value = this.playDs6;
		return value;
	};
	try {
		this.playDs6 = new SFTime();
	} catch (e) {
		console.log('Problems setting playDs6 '+e);
		console.error('Problems setting playDs6',e);
	}
	this.set_playE6 = function (value) {
		try {
			this.proxy.playE6 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playE6 '+e);
			console.error('Problems setting playE6',e);
		}
	};
	this.playE6_changed = function () {
		var value = this.playE6;
		return value;
	};
	try {
		this.playE6 = new SFTime();
	} catch (e) {
		console.log('Problems setting playE6 '+e);
		console.error('Problems setting playE6',e);
	}
	this.set_playF6 = function (value) {
		try {
			this.proxy.playF6 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playF6 '+e);
			console.error('Problems setting playF6',e);
		}
	};
	this.playF6_changed = function () {
		var value = this.playF6;
		return value;
	};
	try {
		this.playF6 = new SFTime();
	} catch (e) {
		console.log('Problems setting playF6 '+e);
		console.error('Problems setting playF6',e);
	}
	this.set_playFs6 = function (value) {
		try {
			this.proxy.playFs6 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playFs6 '+e);
			console.error('Problems setting playFs6',e);
		}
	};
	this.playFs6_changed = function () {
		var value = this.playFs6;
		return value;
	};
	try {
		this.playFs6 = new SFTime();
	} catch (e) {
		console.log('Problems setting playFs6 '+e);
		console.error('Problems setting playFs6',e);
	}
	this.set_playG6 = function (value) {
		try {
			this.proxy.playG6 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playG6 '+e);
			console.error('Problems setting playG6',e);
		}
	};
	this.playG6_changed = function () {
		var value = this.playG6;
		return value;
	};
	try {
		this.playG6 = new SFTime();
	} catch (e) {
		console.log('Problems setting playG6 '+e);
		console.error('Problems setting playG6',e);
	}
	this.set_playGs6 = function (value) {
		try {
			this.proxy.playGs6 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playGs6 '+e);
			console.error('Problems setting playGs6',e);
		}
	};
	this.playGs6_changed = function () {
		var value = this.playGs6;
		return value;
	};
	try {
		this.playGs6 = new SFTime();
	} catch (e) {
		console.log('Problems setting playGs6 '+e);
		console.error('Problems setting playGs6',e);
	}
	this.set_playA7 = function (value) {
		try {
			this.proxy.playA7 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playA7 '+e);
			console.error('Problems setting playA7',e);
		}
	};
	this.playA7_changed = function () {
		var value = this.playA7;
		return value;
	};
	try {
		this.playA7 = new SFTime();
	} catch (e) {
		console.log('Problems setting playA7 '+e);
		console.error('Problems setting playA7',e);
	}
	this.set_playAs7 = function (value) {
		try {
			this.proxy.playAs7 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playAs7 '+e);
			console.error('Problems setting playAs7',e);
		}
	};
	this.playAs7_changed = function () {
		var value = this.playAs7;
		return value;
	};
	try {
		this.playAs7 = new SFTime();
	} catch (e) {
		console.log('Problems setting playAs7 '+e);
		console.error('Problems setting playAs7',e);
	}
	this.set_playB7 = function (value) {
		try {
			this.proxy.playB7 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playB7 '+e);
			console.error('Problems setting playB7',e);
		}
	};
	this.playB7_changed = function () {
		var value = this.playB7;
		return value;
	};
	try {
		this.playB7 = new SFTime();
	} catch (e) {
		console.log('Problems setting playB7 '+e);
		console.error('Problems setting playB7',e);
	}
	this.set_playC7 = function (value) {
		try {
			this.proxy.playC7 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playC7 '+e);
			console.error('Problems setting playC7',e);
		}
	};
	this.playC7_changed = function () {
		var value = this.playC7;
		return value;
	};
	try {
		this.playC7 = new SFTime();
	} catch (e) {
		console.log('Problems setting playC7 '+e);
		console.error('Problems setting playC7',e);
	}
	this.set_playCs7 = function (value) {
		try {
			this.proxy.playCs7 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playCs7 '+e);
			console.error('Problems setting playCs7',e);
		}
	};
	this.playCs7_changed = function () {
		var value = this.playCs7;
		return value;
	};
	try {
		this.playCs7 = new SFTime();
	} catch (e) {
		console.log('Problems setting playCs7 '+e);
		console.error('Problems setting playCs7',e);
	}
	this.set_playD7 = function (value) {
		try {
			this.proxy.playD7 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playD7 '+e);
			console.error('Problems setting playD7',e);
		}
	};
	this.playD7_changed = function () {
		var value = this.playD7;
		return value;
	};
	try {
		this.playD7 = new SFTime();
	} catch (e) {
		console.log('Problems setting playD7 '+e);
		console.error('Problems setting playD7',e);
	}
	this.set_playDs7 = function (value) {
		try {
			this.proxy.playDs7 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playDs7 '+e);
			console.error('Problems setting playDs7',e);
		}
	};
	this.playDs7_changed = function () {
		var value = this.playDs7;
		return value;
	};
	try {
		this.playDs7 = new SFTime();
	} catch (e) {
		console.log('Problems setting playDs7 '+e);
		console.error('Problems setting playDs7',e);
	}
	this.set_playE7 = function (value) {
		try {
			this.proxy.playE7 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playE7 '+e);
			console.error('Problems setting playE7',e);
		}
	};
	this.playE7_changed = function () {
		var value = this.playE7;
		return value;
	};
	try {
		this.playE7 = new SFTime();
	} catch (e) {
		console.log('Problems setting playE7 '+e);
		console.error('Problems setting playE7',e);
	}
	this.set_playF7 = function (value) {
		try {
			this.proxy.playF7 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playF7 '+e);
			console.error('Problems setting playF7',e);
		}
	};
	this.playF7_changed = function () {
		var value = this.playF7;
		return value;
	};
	try {
		this.playF7 = new SFTime();
	} catch (e) {
		console.log('Problems setting playF7 '+e);
		console.error('Problems setting playF7',e);
	}
	this.set_playFs7 = function (value) {
		try {
			this.proxy.playFs7 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playFs7 '+e);
			console.error('Problems setting playFs7',e);
		}
	};
	this.playFs7_changed = function () {
		var value = this.playFs7;
		return value;
	};
	try {
		this.playFs7 = new SFTime();
	} catch (e) {
		console.log('Problems setting playFs7 '+e);
		console.error('Problems setting playFs7',e);
	}
	this.set_playG7 = function (value) {
		try {
			this.proxy.playG7 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playG7 '+e);
			console.error('Problems setting playG7',e);
		}
	};
	this.playG7_changed = function () {
		var value = this.playG7;
		return value;
	};
	try {
		this.playG7 = new SFTime();
	} catch (e) {
		console.log('Problems setting playG7 '+e);
		console.error('Problems setting playG7',e);
	}
	this.set_playGs7 = function (value) {
		try {
			this.proxy.playGs7 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playGs7 '+e);
			console.error('Problems setting playGs7',e);
		}
	};
	this.playGs7_changed = function () {
		var value = this.playGs7;
		return value;
	};
	try {
		this.playGs7 = new SFTime();
	} catch (e) {
		console.log('Problems setting playGs7 '+e);
		console.error('Problems setting playGs7',e);
	}
	this.set_playA8 = function (value) {
		try {
			this.proxy.playA8 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playA8 '+e);
			console.error('Problems setting playA8',e);
		}
	};
	this.playA8_changed = function () {
		var value = this.playA8;
		return value;
	};
	try {
		this.playA8 = new SFTime();
	} catch (e) {
		console.log('Problems setting playA8 '+e);
		console.error('Problems setting playA8',e);
	}
	this.set_playAs8 = function (value) {
		try {
			this.proxy.playAs8 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playAs8 '+e);
			console.error('Problems setting playAs8',e);
		}
	};
	this.playAs8_changed = function () {
		var value = this.playAs8;
		return value;
	};
	try {
		this.playAs8 = new SFTime();
	} catch (e) {
		console.log('Problems setting playAs8 '+e);
		console.error('Problems setting playAs8',e);
	}
	this.set_playB8 = function (value) {
		try {
			this.proxy.playB8 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playB8 '+e);
			console.error('Problems setting playB8',e);
		}
	};
	this.playB8_changed = function () {
		var value = this.playB8;
		return value;
	};
	try {
		this.playB8 = new SFTime();
	} catch (e) {
		console.log('Problems setting playB8 '+e);
		console.error('Problems setting playB8',e);
	}
	this.set_playC8 = function (value) {
		try {
			this.proxy.playC8 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playC8 '+e);
			console.error('Problems setting playC8',e);
		}
	};
	this.playC8_changed = function () {
		var value = this.playC8;
		return value;
	};
	try {
		this.playC8 = new SFTime();
	} catch (e) {
		console.log('Problems setting playC8 '+e);
		console.error('Problems setting playC8',e);
	}


ecmascript:

	this.playScriptedNotes = function (time, eventTime){

    this.proxy.playC4=eventTime;

    this.proxy.playD4=eventTime+1.1;

    this.proxy.playE4=eventTime+2.2;

    this.proxy.playF4=eventTime+3.3;

    this.proxy.playG4=eventTime+4.4;

    this.proxy.playA5=eventTime+5.5;   
};

	this.hideUnscriptedKeyWarnings = function ()
{
	this.proxy.playA0=0;
	this.proxy.playAs0=0;
	this.proxy.playB0=0;
	this.proxy.playC0=0;
	this.proxy.playCs0=0;
	this.proxy.playD0=0;
	this.proxy.playDs0=0;
	this.proxy.playE0=0;
	this.proxy.playF0=0;
	this.proxy.playFs0=0;
	this.proxy.playG0=0;
	this.proxy.playGs0=0;
	this.proxy.playA1=0;
	this.proxy.playAs1=0;
	this.proxy.playB1=0;
	this.proxy.playC1=0;
	this.proxy.playCs1=0;
	this.proxy.playD1=0;
	this.proxy.playDs1=0;
	this.proxy.playE1=0;
	this.proxy.playF1=0;
	this.proxy.playFs1=0;
	this.proxy.playG1=0;
	this.proxy.playGs1=0;
	this.proxy.playA2=0;
	this.proxy.playAs2=0;
	this.proxy.playB2=0;
	this.proxy.playC2=0;
	this.proxy.playCs2=0;
	this.proxy.playD2=0;
	this.proxy.playDs2=0;
	this.proxy.playE2=0;
	this.proxy.playF2=0;
	this.proxy.playFs2=0;
	this.proxy.playG2=0;
	this.proxy.playGs2=0;
	this.proxy.playA3=0;
	this.proxy.playAs3=0;
	this.proxy.playB3=0;
	this.proxy.playC3=0;
	this.proxy.playCs3=0;
	this.proxy.playD3=0;
	this.proxy.playDs3=0;
	this.proxy.playE3=0;
	this.proxy.playF3=0;
	this.proxy.playFs3=0;
	this.proxy.playG3=0;
	this.proxy.playGs3=0;
	this.proxy.playA4=0;
	this.proxy.playAs4=0;
	this.proxy.playB4=0;
	this.proxy.playC4=0;
	this.proxy.playCs4=0;
	this.proxy.playD4=0;
	this.proxy.playDs4=0;
	this.proxy.playE4=0;
	this.proxy.playF4=0;
	this.proxy.playFs4=0;
	this.proxy.playG4=0;
	this.proxy.playGs4=0;
	this.proxy.playA5=0;
	this.proxy.playAs5=0;
	this.proxy.playB5=0;
	this.proxy.playC5=0;
	this.proxy.playCs5=0;
	this.proxy.playD5=0;
	this.proxy.playDs5=0;
	this.proxy.playE5=0;
	this.proxy.playF5=0;
	this.proxy.playFs5=0;
	this.proxy.playG5=0;
	this.proxy.playGs5=0;
	this.proxy.playA6=0;
	this.proxy.playAs6=0;
	this.proxy.playB6=0;
	this.proxy.playC6=0;
	this.proxy.playCs6=0;
	this.proxy.playD6=0;
	this.proxy.playDs6=0;
	this.proxy.playE6=0;
	this.proxy.playF6=0;
	this.proxy.playFs6=0;
	this.proxy.playG6=0;
	this.proxy.playGs6=0;
	this.proxy.playA7=0;
	this.proxy.playAs7=0;
	this.proxy.playB7=0;
	this.proxy.playC7=0;
	this.proxy.playCs7=0;
	this.proxy.playD7=0;
	this.proxy.playDs7=0;
	this.proxy.playE7=0;
	this.proxy.playF7=0;
	this.proxy.playFs7=0;
	this.proxy.playG7=0;
	this.proxy.playGs7=0;
	this.proxy.playA8=0;
	this.proxy.playAs8=0;
	this.proxy.playB8=0;
	this.proxy.playC8=0;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].initialize();
    if (X3DJSON.nodeUtil("Scene","StartPlaying")) {
X3DJSON.nodeUtil("Scene","StartPlaying").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playScriptedNotes(X3DJSON.nodeUtil("Scene","StartPlaying","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playScriptedNotes(X3DJSON.nodeUtil("Scene","StartPlaying","touchTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","A0")) {
X3DJSON.nodeUtil("Scene","A0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","As0")) {
X3DJSON.nodeUtil("Scene","As0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","B0")) {
X3DJSON.nodeUtil("Scene","B0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","C0")) {
X3DJSON.nodeUtil("Scene","C0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cs0")) {
X3DJSON.nodeUtil("Scene","Cs0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","D0")) {
X3DJSON.nodeUtil("Scene","D0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Ds0")) {
X3DJSON.nodeUtil("Scene","Ds0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","E0")) {
X3DJSON.nodeUtil("Scene","E0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","F0")) {
X3DJSON.nodeUtil("Scene","F0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Fs0")) {
X3DJSON.nodeUtil("Scene","Fs0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","G0")) {
X3DJSON.nodeUtil("Scene","G0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Gs0")) {
X3DJSON.nodeUtil("Scene","Gs0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","A1")) {
X3DJSON.nodeUtil("Scene","A1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","As1")) {
X3DJSON.nodeUtil("Scene","As1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","B1")) {
X3DJSON.nodeUtil("Scene","B1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","C1")) {
X3DJSON.nodeUtil("Scene","C1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cs1")) {
X3DJSON.nodeUtil("Scene","Cs1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","D1")) {
X3DJSON.nodeUtil("Scene","D1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Ds1")) {
X3DJSON.nodeUtil("Scene","Ds1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","E1")) {
X3DJSON.nodeUtil("Scene","E1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","F1")) {
X3DJSON.nodeUtil("Scene","F1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Fs1")) {
X3DJSON.nodeUtil("Scene","Fs1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","G1")) {
X3DJSON.nodeUtil("Scene","G1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Gs1")) {
X3DJSON.nodeUtil("Scene","Gs1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","A2")) {
X3DJSON.nodeUtil("Scene","A2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","As2")) {
X3DJSON.nodeUtil("Scene","As2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","B2")) {
X3DJSON.nodeUtil("Scene","B2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","C2")) {
X3DJSON.nodeUtil("Scene","C2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cs2")) {
X3DJSON.nodeUtil("Scene","Cs2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","D2")) {
X3DJSON.nodeUtil("Scene","D2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Ds2")) {
X3DJSON.nodeUtil("Scene","Ds2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","E2")) {
X3DJSON.nodeUtil("Scene","E2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","F2")) {
X3DJSON.nodeUtil("Scene","F2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Fs2")) {
X3DJSON.nodeUtil("Scene","Fs2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","G2")) {
X3DJSON.nodeUtil("Scene","G2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Gs2")) {
X3DJSON.nodeUtil("Scene","Gs2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","A3")) {
X3DJSON.nodeUtil("Scene","A3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","As3")) {
X3DJSON.nodeUtil("Scene","As3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","B3")) {
X3DJSON.nodeUtil("Scene","B3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","C3")) {
X3DJSON.nodeUtil("Scene","C3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cs3")) {
X3DJSON.nodeUtil("Scene","Cs3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","D3")) {
X3DJSON.nodeUtil("Scene","D3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Ds3")) {
X3DJSON.nodeUtil("Scene","Ds3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","E3")) {
X3DJSON.nodeUtil("Scene","E3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","F3")) {
X3DJSON.nodeUtil("Scene","F3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Fs3")) {
X3DJSON.nodeUtil("Scene","Fs3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","G3")) {
X3DJSON.nodeUtil("Scene","G3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Gs3")) {
X3DJSON.nodeUtil("Scene","Gs3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","A4")) {
X3DJSON.nodeUtil("Scene","A4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","As4")) {
X3DJSON.nodeUtil("Scene","As4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","B4")) {
X3DJSON.nodeUtil("Scene","B4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","C4")) {
X3DJSON.nodeUtil("Scene","C4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cs4")) {
X3DJSON.nodeUtil("Scene","Cs4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","D4")) {
X3DJSON.nodeUtil("Scene","D4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Ds4")) {
X3DJSON.nodeUtil("Scene","Ds4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","E4")) {
X3DJSON.nodeUtil("Scene","E4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","F4")) {
X3DJSON.nodeUtil("Scene","F4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Fs4")) {
X3DJSON.nodeUtil("Scene","Fs4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","G4")) {
X3DJSON.nodeUtil("Scene","G4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Gs4")) {
X3DJSON.nodeUtil("Scene","Gs4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","A5")) {
X3DJSON.nodeUtil("Scene","A5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","As5")) {
X3DJSON.nodeUtil("Scene","As5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","B5")) {
X3DJSON.nodeUtil("Scene","B5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","C5")) {
X3DJSON.nodeUtil("Scene","C5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cs5")) {
X3DJSON.nodeUtil("Scene","Cs5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","D5")) {
X3DJSON.nodeUtil("Scene","D5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Ds5")) {
X3DJSON.nodeUtil("Scene","Ds5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","E5")) {
X3DJSON.nodeUtil("Scene","E5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","F5")) {
X3DJSON.nodeUtil("Scene","F5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Fs5")) {
X3DJSON.nodeUtil("Scene","Fs5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","G5")) {
X3DJSON.nodeUtil("Scene","G5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Gs5")) {
X3DJSON.nodeUtil("Scene","Gs5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","A6")) {
X3DJSON.nodeUtil("Scene","A6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","As6")) {
X3DJSON.nodeUtil("Scene","As6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","B6")) {
X3DJSON.nodeUtil("Scene","B6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","C6")) {
X3DJSON.nodeUtil("Scene","C6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cs6")) {
X3DJSON.nodeUtil("Scene","Cs6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","D6")) {
X3DJSON.nodeUtil("Scene","D6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Ds6")) {
X3DJSON.nodeUtil("Scene","Ds6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","E6")) {
X3DJSON.nodeUtil("Scene","E6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","F6")) {
X3DJSON.nodeUtil("Scene","F6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Fs6")) {
X3DJSON.nodeUtil("Scene","Fs6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","G6")) {
X3DJSON.nodeUtil("Scene","G6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Gs6")) {
X3DJSON.nodeUtil("Scene","Gs6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","A7")) {
X3DJSON.nodeUtil("Scene","A7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","As7")) {
X3DJSON.nodeUtil("Scene","As7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","B7")) {
X3DJSON.nodeUtil("Scene","B7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","C7")) {
X3DJSON.nodeUtil("Scene","C7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cs7")) {
X3DJSON.nodeUtil("Scene","Cs7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","D7")) {
X3DJSON.nodeUtil("Scene","D7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Ds7")) {
X3DJSON.nodeUtil("Scene","Ds7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","E7")) {
X3DJSON.nodeUtil("Scene","E7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","F7")) {
X3DJSON.nodeUtil("Scene","F7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Fs7")) {
X3DJSON.nodeUtil("Scene","Fs7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","G7")) {
X3DJSON.nodeUtil("Scene","G7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Gs7")) {
X3DJSON.nodeUtil("Scene","Gs7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","A8")) {
X3DJSON.nodeUtil("Scene","A8").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","As8")) {
X3DJSON.nodeUtil("Scene","As8").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","B8")) {
X3DJSON.nodeUtil("Scene","B8").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","C8")) {
X3DJSON.nodeUtil("Scene","C8").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","A0")) {
X3DJSON.nodeUtil("Scene","A0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockA0")) {
X3DJSON.nodeUtil("Scene","ClockA0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","A0Mover")) {
X3DJSON.nodeUtil("Scene","A0Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","As0")) {
X3DJSON.nodeUtil("Scene","As0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockAs0")) {
X3DJSON.nodeUtil("Scene","ClockAs0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","As0Mover")) {
X3DJSON.nodeUtil("Scene","As0Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","B0")) {
X3DJSON.nodeUtil("Scene","B0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockB0")) {
X3DJSON.nodeUtil("Scene","ClockB0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","B0Mover")) {
X3DJSON.nodeUtil("Scene","B0Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","C0")) {
X3DJSON.nodeUtil("Scene","C0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockC0")) {
X3DJSON.nodeUtil("Scene","ClockC0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","C0Mover")) {
X3DJSON.nodeUtil("Scene","C0Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cs0")) {
X3DJSON.nodeUtil("Scene","Cs0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockCs0")) {
X3DJSON.nodeUtil("Scene","ClockCs0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cs0Mover")) {
X3DJSON.nodeUtil("Scene","Cs0Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","D0")) {
X3DJSON.nodeUtil("Scene","D0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockD0")) {
X3DJSON.nodeUtil("Scene","ClockD0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","D0Mover")) {
X3DJSON.nodeUtil("Scene","D0Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Ds0")) {
X3DJSON.nodeUtil("Scene","Ds0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockDs0")) {
X3DJSON.nodeUtil("Scene","ClockDs0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Ds0Mover")) {
X3DJSON.nodeUtil("Scene","Ds0Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","E0")) {
X3DJSON.nodeUtil("Scene","E0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockE0")) {
X3DJSON.nodeUtil("Scene","ClockE0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","E0Mover")) {
X3DJSON.nodeUtil("Scene","E0Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","F0")) {
X3DJSON.nodeUtil("Scene","F0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockF0")) {
X3DJSON.nodeUtil("Scene","ClockF0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","F0Mover")) {
X3DJSON.nodeUtil("Scene","F0Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Fs0")) {
X3DJSON.nodeUtil("Scene","Fs0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockFs0")) {
X3DJSON.nodeUtil("Scene","ClockFs0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Fs0Mover")) {
X3DJSON.nodeUtil("Scene","Fs0Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","G0")) {
X3DJSON.nodeUtil("Scene","G0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockG0")) {
X3DJSON.nodeUtil("Scene","ClockG0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","G0Mover")) {
X3DJSON.nodeUtil("Scene","G0Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Gs0")) {
X3DJSON.nodeUtil("Scene","Gs0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockGs0")) {
X3DJSON.nodeUtil("Scene","ClockGs0").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Gs0Mover")) {
X3DJSON.nodeUtil("Scene","Gs0Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","A1")) {
X3DJSON.nodeUtil("Scene","A1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockA1")) {
X3DJSON.nodeUtil("Scene","ClockA1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","A1Mover")) {
X3DJSON.nodeUtil("Scene","A1Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","As1")) {
X3DJSON.nodeUtil("Scene","As1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockAs1")) {
X3DJSON.nodeUtil("Scene","ClockAs1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","As1Mover")) {
X3DJSON.nodeUtil("Scene","As1Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","B1")) {
X3DJSON.nodeUtil("Scene","B1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockB1")) {
X3DJSON.nodeUtil("Scene","ClockB1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","B1Mover")) {
X3DJSON.nodeUtil("Scene","B1Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","C1")) {
X3DJSON.nodeUtil("Scene","C1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockC1")) {
X3DJSON.nodeUtil("Scene","ClockC1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","C1Mover")) {
X3DJSON.nodeUtil("Scene","C1Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cs1")) {
X3DJSON.nodeUtil("Scene","Cs1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockCs1")) {
X3DJSON.nodeUtil("Scene","ClockCs1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cs1Mover")) {
X3DJSON.nodeUtil("Scene","Cs1Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","D1")) {
X3DJSON.nodeUtil("Scene","D1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockD1")) {
X3DJSON.nodeUtil("Scene","ClockD1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","D1Mover")) {
X3DJSON.nodeUtil("Scene","D1Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Ds1")) {
X3DJSON.nodeUtil("Scene","Ds1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockDs1")) {
X3DJSON.nodeUtil("Scene","ClockDs1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Ds1Mover")) {
X3DJSON.nodeUtil("Scene","Ds1Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","E1")) {
X3DJSON.nodeUtil("Scene","E1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockE1")) {
X3DJSON.nodeUtil("Scene","ClockE1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","E1Mover")) {
X3DJSON.nodeUtil("Scene","E1Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","F1")) {
X3DJSON.nodeUtil("Scene","F1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockF1")) {
X3DJSON.nodeUtil("Scene","ClockF1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","F1Mover")) {
X3DJSON.nodeUtil("Scene","F1Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Fs1")) {
X3DJSON.nodeUtil("Scene","Fs1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockFs1")) {
X3DJSON.nodeUtil("Scene","ClockFs1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Fs1Mover")) {
X3DJSON.nodeUtil("Scene","Fs1Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","G1")) {
X3DJSON.nodeUtil("Scene","G1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockG1")) {
X3DJSON.nodeUtil("Scene","ClockG1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","G1Mover")) {
X3DJSON.nodeUtil("Scene","G1Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Gs1")) {
X3DJSON.nodeUtil("Scene","Gs1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockGs1")) {
X3DJSON.nodeUtil("Scene","ClockGs1").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Gs1Mover")) {
X3DJSON.nodeUtil("Scene","Gs1Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","A2")) {
X3DJSON.nodeUtil("Scene","A2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockA2")) {
X3DJSON.nodeUtil("Scene","ClockA2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","A2Mover")) {
X3DJSON.nodeUtil("Scene","A2Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","As2")) {
X3DJSON.nodeUtil("Scene","As2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockAs2")) {
X3DJSON.nodeUtil("Scene","ClockAs2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","As2Mover")) {
X3DJSON.nodeUtil("Scene","As2Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","B2")) {
X3DJSON.nodeUtil("Scene","B2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockB2")) {
X3DJSON.nodeUtil("Scene","ClockB2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","B2Mover")) {
X3DJSON.nodeUtil("Scene","B2Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","C2")) {
X3DJSON.nodeUtil("Scene","C2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockC2")) {
X3DJSON.nodeUtil("Scene","ClockC2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","C2Mover")) {
X3DJSON.nodeUtil("Scene","C2Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cs2")) {
X3DJSON.nodeUtil("Scene","Cs2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockCs2")) {
X3DJSON.nodeUtil("Scene","ClockCs2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cs2Mover")) {
X3DJSON.nodeUtil("Scene","Cs2Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","D2")) {
X3DJSON.nodeUtil("Scene","D2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockD2")) {
X3DJSON.nodeUtil("Scene","ClockD2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","D2Mover")) {
X3DJSON.nodeUtil("Scene","D2Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Ds2")) {
X3DJSON.nodeUtil("Scene","Ds2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockDs2")) {
X3DJSON.nodeUtil("Scene","ClockDs2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Ds2Mover")) {
X3DJSON.nodeUtil("Scene","Ds2Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","E2")) {
X3DJSON.nodeUtil("Scene","E2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockE2")) {
X3DJSON.nodeUtil("Scene","ClockE2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","E2Mover")) {
X3DJSON.nodeUtil("Scene","E2Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","F2")) {
X3DJSON.nodeUtil("Scene","F2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockF2")) {
X3DJSON.nodeUtil("Scene","ClockF2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","F2Mover")) {
X3DJSON.nodeUtil("Scene","F2Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Fs2")) {
X3DJSON.nodeUtil("Scene","Fs2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockFs2")) {
X3DJSON.nodeUtil("Scene","ClockFs2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Fs2Mover")) {
X3DJSON.nodeUtil("Scene","Fs2Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","G2")) {
X3DJSON.nodeUtil("Scene","G2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockG2")) {
X3DJSON.nodeUtil("Scene","ClockG2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","G2Mover")) {
X3DJSON.nodeUtil("Scene","G2Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Gs2")) {
X3DJSON.nodeUtil("Scene","Gs2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockGs2")) {
X3DJSON.nodeUtil("Scene","ClockGs2").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Gs2Mover")) {
X3DJSON.nodeUtil("Scene","Gs2Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","A3")) {
X3DJSON.nodeUtil("Scene","A3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockA3")) {
X3DJSON.nodeUtil("Scene","ClockA3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","A3Mover")) {
X3DJSON.nodeUtil("Scene","A3Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","As3")) {
X3DJSON.nodeUtil("Scene","As3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockAs3")) {
X3DJSON.nodeUtil("Scene","ClockAs3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","As3Mover")) {
X3DJSON.nodeUtil("Scene","As3Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","B3")) {
X3DJSON.nodeUtil("Scene","B3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockB3")) {
X3DJSON.nodeUtil("Scene","ClockB3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","B3Mover")) {
X3DJSON.nodeUtil("Scene","B3Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","C3")) {
X3DJSON.nodeUtil("Scene","C3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockC3")) {
X3DJSON.nodeUtil("Scene","ClockC3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","C3Mover")) {
X3DJSON.nodeUtil("Scene","C3Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cs3")) {
X3DJSON.nodeUtil("Scene","Cs3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockCs3")) {
X3DJSON.nodeUtil("Scene","ClockCs3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cs3Mover")) {
X3DJSON.nodeUtil("Scene","Cs3Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","D3")) {
X3DJSON.nodeUtil("Scene","D3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockD3")) {
X3DJSON.nodeUtil("Scene","ClockD3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","D3Mover")) {
X3DJSON.nodeUtil("Scene","D3Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Ds3")) {
X3DJSON.nodeUtil("Scene","Ds3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockDs3")) {
X3DJSON.nodeUtil("Scene","ClockDs3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Ds3Mover")) {
X3DJSON.nodeUtil("Scene","Ds3Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","E3")) {
X3DJSON.nodeUtil("Scene","E3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockE3")) {
X3DJSON.nodeUtil("Scene","ClockE3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","E3Mover")) {
X3DJSON.nodeUtil("Scene","E3Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","F3")) {
X3DJSON.nodeUtil("Scene","F3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockF3")) {
X3DJSON.nodeUtil("Scene","ClockF3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","F3Mover")) {
X3DJSON.nodeUtil("Scene","F3Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Fs3")) {
X3DJSON.nodeUtil("Scene","Fs3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockFs3")) {
X3DJSON.nodeUtil("Scene","ClockFs3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Fs3Mover")) {
X3DJSON.nodeUtil("Scene","Fs3Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","G3")) {
X3DJSON.nodeUtil("Scene","G3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockG3")) {
X3DJSON.nodeUtil("Scene","ClockG3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","G3Mover")) {
X3DJSON.nodeUtil("Scene","G3Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Gs3")) {
X3DJSON.nodeUtil("Scene","Gs3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockGs3")) {
X3DJSON.nodeUtil("Scene","ClockGs3").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Gs3Mover")) {
X3DJSON.nodeUtil("Scene","Gs3Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","A4")) {
X3DJSON.nodeUtil("Scene","A4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockA4")) {
X3DJSON.nodeUtil("Scene","ClockA4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","A4Mover")) {
X3DJSON.nodeUtil("Scene","A4Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","As4")) {
X3DJSON.nodeUtil("Scene","As4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockAs4")) {
X3DJSON.nodeUtil("Scene","ClockAs4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","As4Mover")) {
X3DJSON.nodeUtil("Scene","As4Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","B4")) {
X3DJSON.nodeUtil("Scene","B4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockB4")) {
X3DJSON.nodeUtil("Scene","ClockB4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","B4Mover")) {
X3DJSON.nodeUtil("Scene","B4Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","C4")) {
X3DJSON.nodeUtil("Scene","C4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockC4")) {
X3DJSON.nodeUtil("Scene","ClockC4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","C4Mover")) {
X3DJSON.nodeUtil("Scene","C4Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cs4")) {
X3DJSON.nodeUtil("Scene","Cs4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockCs4")) {
X3DJSON.nodeUtil("Scene","ClockCs4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cs4Mover")) {
X3DJSON.nodeUtil("Scene","Cs4Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","D4")) {
X3DJSON.nodeUtil("Scene","D4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockD4")) {
X3DJSON.nodeUtil("Scene","ClockD4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","D4Mover")) {
X3DJSON.nodeUtil("Scene","D4Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Ds4")) {
X3DJSON.nodeUtil("Scene","Ds4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockDs4")) {
X3DJSON.nodeUtil("Scene","ClockDs4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Ds4Mover")) {
X3DJSON.nodeUtil("Scene","Ds4Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","E4")) {
X3DJSON.nodeUtil("Scene","E4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockE4")) {
X3DJSON.nodeUtil("Scene","ClockE4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","E4Mover")) {
X3DJSON.nodeUtil("Scene","E4Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","F4")) {
X3DJSON.nodeUtil("Scene","F4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockF4")) {
X3DJSON.nodeUtil("Scene","ClockF4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","F4Mover")) {
X3DJSON.nodeUtil("Scene","F4Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Fs4")) {
X3DJSON.nodeUtil("Scene","Fs4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockFs4")) {
X3DJSON.nodeUtil("Scene","ClockFs4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Fs4Mover")) {
X3DJSON.nodeUtil("Scene","Fs4Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","G4")) {
X3DJSON.nodeUtil("Scene","G4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockG4")) {
X3DJSON.nodeUtil("Scene","ClockG4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","G4Mover")) {
X3DJSON.nodeUtil("Scene","G4Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Gs4")) {
X3DJSON.nodeUtil("Scene","Gs4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockGs4")) {
X3DJSON.nodeUtil("Scene","ClockGs4").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Gs4Mover")) {
X3DJSON.nodeUtil("Scene","Gs4Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","A5")) {
X3DJSON.nodeUtil("Scene","A5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockA5")) {
X3DJSON.nodeUtil("Scene","ClockA5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","A5Mover")) {
X3DJSON.nodeUtil("Scene","A5Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","As5")) {
X3DJSON.nodeUtil("Scene","As5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockAs5")) {
X3DJSON.nodeUtil("Scene","ClockAs5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","As5Mover")) {
X3DJSON.nodeUtil("Scene","As5Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","B5")) {
X3DJSON.nodeUtil("Scene","B5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockB5")) {
X3DJSON.nodeUtil("Scene","ClockB5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","B5Mover")) {
X3DJSON.nodeUtil("Scene","B5Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","C5")) {
X3DJSON.nodeUtil("Scene","C5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockC5")) {
X3DJSON.nodeUtil("Scene","ClockC5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","C5Mover")) {
X3DJSON.nodeUtil("Scene","C5Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cs5")) {
X3DJSON.nodeUtil("Scene","Cs5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockCs5")) {
X3DJSON.nodeUtil("Scene","ClockCs5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cs5Mover")) {
X3DJSON.nodeUtil("Scene","Cs5Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","D5")) {
X3DJSON.nodeUtil("Scene","D5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockD5")) {
X3DJSON.nodeUtil("Scene","ClockD5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","D5Mover")) {
X3DJSON.nodeUtil("Scene","D5Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Ds5")) {
X3DJSON.nodeUtil("Scene","Ds5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockDs5")) {
X3DJSON.nodeUtil("Scene","ClockDs5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Ds5Mover")) {
X3DJSON.nodeUtil("Scene","Ds5Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","E5")) {
X3DJSON.nodeUtil("Scene","E5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockE5")) {
X3DJSON.nodeUtil("Scene","ClockE5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","E5Mover")) {
X3DJSON.nodeUtil("Scene","E5Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","F5")) {
X3DJSON.nodeUtil("Scene","F5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockF5")) {
X3DJSON.nodeUtil("Scene","ClockF5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","F5Mover")) {
X3DJSON.nodeUtil("Scene","F5Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Fs5")) {
X3DJSON.nodeUtil("Scene","Fs5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockFs5")) {
X3DJSON.nodeUtil("Scene","ClockFs5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Fs5Mover")) {
X3DJSON.nodeUtil("Scene","Fs5Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","G5")) {
X3DJSON.nodeUtil("Scene","G5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockG5")) {
X3DJSON.nodeUtil("Scene","ClockG5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","G5Mover")) {
X3DJSON.nodeUtil("Scene","G5Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Gs5")) {
X3DJSON.nodeUtil("Scene","Gs5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockGs5")) {
X3DJSON.nodeUtil("Scene","ClockGs5").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Gs5Mover")) {
X3DJSON.nodeUtil("Scene","Gs5Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","A6")) {
X3DJSON.nodeUtil("Scene","A6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockA6")) {
X3DJSON.nodeUtil("Scene","ClockA6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","A6Mover")) {
X3DJSON.nodeUtil("Scene","A6Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","As6")) {
X3DJSON.nodeUtil("Scene","As6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockAs6")) {
X3DJSON.nodeUtil("Scene","ClockAs6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","As6Mover")) {
X3DJSON.nodeUtil("Scene","As6Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","B6")) {
X3DJSON.nodeUtil("Scene","B6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockB6")) {
X3DJSON.nodeUtil("Scene","ClockB6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","B6Mover")) {
X3DJSON.nodeUtil("Scene","B6Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","C6")) {
X3DJSON.nodeUtil("Scene","C6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockC6")) {
X3DJSON.nodeUtil("Scene","ClockC6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","C6Mover")) {
X3DJSON.nodeUtil("Scene","C6Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cs6")) {
X3DJSON.nodeUtil("Scene","Cs6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockCs6")) {
X3DJSON.nodeUtil("Scene","ClockCs6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cs6Mover")) {
X3DJSON.nodeUtil("Scene","Cs6Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","D6")) {
X3DJSON.nodeUtil("Scene","D6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockD6")) {
X3DJSON.nodeUtil("Scene","ClockD6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","D6Mover")) {
X3DJSON.nodeUtil("Scene","D6Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Ds6")) {
X3DJSON.nodeUtil("Scene","Ds6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockDs6")) {
X3DJSON.nodeUtil("Scene","ClockDs6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Ds6Mover")) {
X3DJSON.nodeUtil("Scene","Ds6Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","E6")) {
X3DJSON.nodeUtil("Scene","E6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockE6")) {
X3DJSON.nodeUtil("Scene","ClockE6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","E6Mover")) {
X3DJSON.nodeUtil("Scene","E6Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","F6")) {
X3DJSON.nodeUtil("Scene","F6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockF6")) {
X3DJSON.nodeUtil("Scene","ClockF6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","F6Mover")) {
X3DJSON.nodeUtil("Scene","F6Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Fs6")) {
X3DJSON.nodeUtil("Scene","Fs6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockFs6")) {
X3DJSON.nodeUtil("Scene","ClockFs6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Fs6Mover")) {
X3DJSON.nodeUtil("Scene","Fs6Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","G6")) {
X3DJSON.nodeUtil("Scene","G6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockG6")) {
X3DJSON.nodeUtil("Scene","ClockG6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","G6Mover")) {
X3DJSON.nodeUtil("Scene","G6Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Gs6")) {
X3DJSON.nodeUtil("Scene","Gs6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockGs6")) {
X3DJSON.nodeUtil("Scene","ClockGs6").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Gs6Mover")) {
X3DJSON.nodeUtil("Scene","Gs6Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","A7")) {
X3DJSON.nodeUtil("Scene","A7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockA7")) {
X3DJSON.nodeUtil("Scene","ClockA7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","A7Mover")) {
X3DJSON.nodeUtil("Scene","A7Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","As7")) {
X3DJSON.nodeUtil("Scene","As7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockAs7")) {
X3DJSON.nodeUtil("Scene","ClockAs7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","As7Mover")) {
X3DJSON.nodeUtil("Scene","As7Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","B7")) {
X3DJSON.nodeUtil("Scene","B7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockB7")) {
X3DJSON.nodeUtil("Scene","ClockB7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","B7Mover")) {
X3DJSON.nodeUtil("Scene","B7Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","C7")) {
X3DJSON.nodeUtil("Scene","C7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockC7")) {
X3DJSON.nodeUtil("Scene","ClockC7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","C7Mover")) {
X3DJSON.nodeUtil("Scene","C7Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cs7")) {
X3DJSON.nodeUtil("Scene","Cs7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockCs7")) {
X3DJSON.nodeUtil("Scene","ClockCs7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Cs7Mover")) {
X3DJSON.nodeUtil("Scene","Cs7Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","D7")) {
X3DJSON.nodeUtil("Scene","D7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockD7")) {
X3DJSON.nodeUtil("Scene","ClockD7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","D7Mover")) {
X3DJSON.nodeUtil("Scene","D7Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Ds7")) {
X3DJSON.nodeUtil("Scene","Ds7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockDs7")) {
X3DJSON.nodeUtil("Scene","ClockDs7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Ds7Mover")) {
X3DJSON.nodeUtil("Scene","Ds7Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","E7")) {
X3DJSON.nodeUtil("Scene","E7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockE7")) {
X3DJSON.nodeUtil("Scene","ClockE7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","E7Mover")) {
X3DJSON.nodeUtil("Scene","E7Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","F7")) {
X3DJSON.nodeUtil("Scene","F7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockF7")) {
X3DJSON.nodeUtil("Scene","ClockF7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","F7Mover")) {
X3DJSON.nodeUtil("Scene","F7Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Fs7")) {
X3DJSON.nodeUtil("Scene","Fs7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockFs7")) {
X3DJSON.nodeUtil("Scene","ClockFs7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Fs7Mover")) {
X3DJSON.nodeUtil("Scene","Fs7Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","G7")) {
X3DJSON.nodeUtil("Scene","G7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockG7")) {
X3DJSON.nodeUtil("Scene","ClockG7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","G7Mover")) {
X3DJSON.nodeUtil("Scene","G7Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Gs7")) {
X3DJSON.nodeUtil("Scene","Gs7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockGs7")) {
X3DJSON.nodeUtil("Scene","ClockGs7").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Gs7Mover")) {
X3DJSON.nodeUtil("Scene","Gs7Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","A8")) {
X3DJSON.nodeUtil("Scene","A8").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockA8")) {
X3DJSON.nodeUtil("Scene","ClockA8").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","A8Mover")) {
X3DJSON.nodeUtil("Scene","A8Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","As8")) {
X3DJSON.nodeUtil("Scene","As8").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockAs8")) {
X3DJSON.nodeUtil("Scene","ClockAs8").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","As8Mover")) {
X3DJSON.nodeUtil("Scene","As8Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","B8")) {
X3DJSON.nodeUtil("Scene","B8").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockB8")) {
X3DJSON.nodeUtil("Scene","ClockB8").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","B8Mover")) {
X3DJSON.nodeUtil("Scene","B8Mover").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","C8")) {
X3DJSON.nodeUtil("Scene","C8").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ClockC8")) {
X3DJSON.nodeUtil("Scene","ClockC8").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","C8Mover")) {
X3DJSON.nodeUtil("Scene","C8Mover").addEventListener('outputchange', function(event) {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA0'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA0'].push(function(property, value) {
		if (property === 'playA0') {
			X3DJSON.nodeUtil("Scene","PitchA0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA0, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchA0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA0, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA0'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA0'].push(function(property, value) {
		if (property === 'playA0') {
			X3DJSON.nodeUtil("Scene","ClockA0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA0, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockA0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA0, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs0'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs0'].push(function(property, value) {
		if (property === 'playAs0') {
			X3DJSON.nodeUtil("Scene","PitchAs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs0, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchAs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs0, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs0'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs0'].push(function(property, value) {
		if (property === 'playAs0') {
			X3DJSON.nodeUtil("Scene","ClockAs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs0, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockAs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs0, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB0'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB0'].push(function(property, value) {
		if (property === 'playB0') {
			X3DJSON.nodeUtil("Scene","PitchB0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB0, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchB0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB0, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB0'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB0'].push(function(property, value) {
		if (property === 'playB0') {
			X3DJSON.nodeUtil("Scene","ClockB0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB0, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockB0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB0, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC0'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC0'].push(function(property, value) {
		if (property === 'playC0') {
			X3DJSON.nodeUtil("Scene","PitchC0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC0, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchC0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC0, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC0'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC0'].push(function(property, value) {
		if (property === 'playC0') {
			X3DJSON.nodeUtil("Scene","ClockC0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC0, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockC0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC0, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs0'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs0'].push(function(property, value) {
		if (property === 'playCs0') {
			X3DJSON.nodeUtil("Scene","PitchCs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs0, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchCs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs0, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs0'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs0'].push(function(property, value) {
		if (property === 'playCs0') {
			X3DJSON.nodeUtil("Scene","ClockCs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs0, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockCs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs0, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD0'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD0'].push(function(property, value) {
		if (property === 'playD0') {
			X3DJSON.nodeUtil("Scene","PitchD0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD0, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchD0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD0, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD0'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD0'].push(function(property, value) {
		if (property === 'playD0') {
			X3DJSON.nodeUtil("Scene","ClockD0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD0, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockD0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD0, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs0'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs0'].push(function(property, value) {
		if (property === 'playDs0') {
			X3DJSON.nodeUtil("Scene","PitchDs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs0, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchDs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs0, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs0'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs0'].push(function(property, value) {
		if (property === 'playDs0') {
			X3DJSON.nodeUtil("Scene","ClockDs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs0, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockDs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs0, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE0'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE0'].push(function(property, value) {
		if (property === 'playE0') {
			X3DJSON.nodeUtil("Scene","PitchE0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE0, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchE0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE0, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE0'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE0'].push(function(property, value) {
		if (property === 'playE0') {
			X3DJSON.nodeUtil("Scene","ClockE0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE0, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockE0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE0, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF0'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF0'].push(function(property, value) {
		if (property === 'playF0') {
			X3DJSON.nodeUtil("Scene","PitchF0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF0, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchF0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF0, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF0'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF0'].push(function(property, value) {
		if (property === 'playF0') {
			X3DJSON.nodeUtil("Scene","ClockF0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF0, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockF0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF0, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs0'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs0'].push(function(property, value) {
		if (property === 'playFs0') {
			X3DJSON.nodeUtil("Scene","PitchFs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs0, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchFs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs0, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs0'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs0'].push(function(property, value) {
		if (property === 'playFs0') {
			X3DJSON.nodeUtil("Scene","ClockFs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs0, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockFs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs0, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG0'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG0'].push(function(property, value) {
		if (property === 'playG0') {
			X3DJSON.nodeUtil("Scene","PitchG0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG0, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchG0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG0, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG0'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG0'].push(function(property, value) {
		if (property === 'playG0') {
			X3DJSON.nodeUtil("Scene","ClockG0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG0, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockG0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG0, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs0'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs0'].push(function(property, value) {
		if (property === 'playGs0') {
			X3DJSON.nodeUtil("Scene","PitchGs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs0, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchGs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs0, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs0'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs0'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs0'].push(function(property, value) {
		if (property === 'playGs0') {
			X3DJSON.nodeUtil("Scene","ClockGs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs0, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockGs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs0, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA1'].push(function(property, value) {
		if (property === 'playA1') {
			X3DJSON.nodeUtil("Scene","PitchA1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA1, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchA1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA1, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA1'].push(function(property, value) {
		if (property === 'playA1') {
			X3DJSON.nodeUtil("Scene","ClockA1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA1, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockA1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA1, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs1'].push(function(property, value) {
		if (property === 'playAs1') {
			X3DJSON.nodeUtil("Scene","PitchAs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs1, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchAs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs1, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs1'].push(function(property, value) {
		if (property === 'playAs1') {
			X3DJSON.nodeUtil("Scene","ClockAs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs1, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockAs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs1, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB1'].push(function(property, value) {
		if (property === 'playB1') {
			X3DJSON.nodeUtil("Scene","PitchB1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB1, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchB1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB1, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB1'].push(function(property, value) {
		if (property === 'playB1') {
			X3DJSON.nodeUtil("Scene","ClockB1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB1, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockB1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB1, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC1'].push(function(property, value) {
		if (property === 'playC1') {
			X3DJSON.nodeUtil("Scene","PitchC1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC1, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchC1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC1, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC1'].push(function(property, value) {
		if (property === 'playC1') {
			X3DJSON.nodeUtil("Scene","ClockC1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC1, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockC1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC1, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs1'].push(function(property, value) {
		if (property === 'playCs1') {
			X3DJSON.nodeUtil("Scene","PitchCs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs1, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchCs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs1, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs1'].push(function(property, value) {
		if (property === 'playCs1') {
			X3DJSON.nodeUtil("Scene","ClockCs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs1, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockCs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs1, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD1'].push(function(property, value) {
		if (property === 'playD1') {
			X3DJSON.nodeUtil("Scene","PitchD1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD1, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchD1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD1, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD1'].push(function(property, value) {
		if (property === 'playD1') {
			X3DJSON.nodeUtil("Scene","ClockD1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD1, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockD1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD1, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs1'].push(function(property, value) {
		if (property === 'playDs1') {
			X3DJSON.nodeUtil("Scene","PitchDs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs1, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchDs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs1, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs1'].push(function(property, value) {
		if (property === 'playDs1') {
			X3DJSON.nodeUtil("Scene","ClockDs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs1, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockDs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs1, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE1'].push(function(property, value) {
		if (property === 'playE1') {
			X3DJSON.nodeUtil("Scene","PitchE1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE1, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchE1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE1, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE1'].push(function(property, value) {
		if (property === 'playE1') {
			X3DJSON.nodeUtil("Scene","ClockE1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE1, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockE1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE1, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF1'].push(function(property, value) {
		if (property === 'playF1') {
			X3DJSON.nodeUtil("Scene","PitchF1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF1, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchF1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF1, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF1'].push(function(property, value) {
		if (property === 'playF1') {
			X3DJSON.nodeUtil("Scene","ClockF1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF1, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockF1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF1, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs1'].push(function(property, value) {
		if (property === 'playFs1') {
			X3DJSON.nodeUtil("Scene","PitchFs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs1, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchFs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs1, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs1'].push(function(property, value) {
		if (property === 'playFs1') {
			X3DJSON.nodeUtil("Scene","ClockFs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs1, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockFs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs1, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG1'].push(function(property, value) {
		if (property === 'playG1') {
			X3DJSON.nodeUtil("Scene","PitchG1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG1, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchG1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG1, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG1'].push(function(property, value) {
		if (property === 'playG1') {
			X3DJSON.nodeUtil("Scene","ClockG1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG1, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockG1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG1, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs1'].push(function(property, value) {
		if (property === 'playGs1') {
			X3DJSON.nodeUtil("Scene","PitchGs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs1, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchGs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs1, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs1'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs1'].push(function(property, value) {
		if (property === 'playGs1') {
			X3DJSON.nodeUtil("Scene","ClockGs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs1, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockGs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs1, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA2'].push(function(property, value) {
		if (property === 'playA2') {
			X3DJSON.nodeUtil("Scene","PitchA2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchA2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA2, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA2'].push(function(property, value) {
		if (property === 'playA2') {
			X3DJSON.nodeUtil("Scene","ClockA2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockA2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA2, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs2'].push(function(property, value) {
		if (property === 'playAs2') {
			X3DJSON.nodeUtil("Scene","PitchAs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchAs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs2, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs2'].push(function(property, value) {
		if (property === 'playAs2') {
			X3DJSON.nodeUtil("Scene","ClockAs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockAs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs2, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB2'].push(function(property, value) {
		if (property === 'playB2') {
			X3DJSON.nodeUtil("Scene","PitchB2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchB2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB2, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB2'].push(function(property, value) {
		if (property === 'playB2') {
			X3DJSON.nodeUtil("Scene","ClockB2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockB2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB2, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC2'].push(function(property, value) {
		if (property === 'playC2') {
			X3DJSON.nodeUtil("Scene","PitchC2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchC2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC2, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC2'].push(function(property, value) {
		if (property === 'playC2') {
			X3DJSON.nodeUtil("Scene","ClockC2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockC2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC2, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs2'].push(function(property, value) {
		if (property === 'playCs2') {
			X3DJSON.nodeUtil("Scene","PitchCs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchCs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs2, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs2'].push(function(property, value) {
		if (property === 'playCs2') {
			X3DJSON.nodeUtil("Scene","ClockCs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockCs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs2, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD2'].push(function(property, value) {
		if (property === 'playD2') {
			X3DJSON.nodeUtil("Scene","PitchD2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchD2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD2, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD2'].push(function(property, value) {
		if (property === 'playD2') {
			X3DJSON.nodeUtil("Scene","ClockD2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockD2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD2, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs2'].push(function(property, value) {
		if (property === 'playDs2') {
			X3DJSON.nodeUtil("Scene","PitchDs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchDs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs2, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs2'].push(function(property, value) {
		if (property === 'playDs2') {
			X3DJSON.nodeUtil("Scene","ClockDs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockDs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs2, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE2'].push(function(property, value) {
		if (property === 'playE2') {
			X3DJSON.nodeUtil("Scene","PitchE2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchE2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE2, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE2'].push(function(property, value) {
		if (property === 'playE2') {
			X3DJSON.nodeUtil("Scene","ClockE2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockE2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE2, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF2'].push(function(property, value) {
		if (property === 'playF2') {
			X3DJSON.nodeUtil("Scene","PitchF2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchF2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF2, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF2'].push(function(property, value) {
		if (property === 'playF2') {
			X3DJSON.nodeUtil("Scene","ClockF2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockF2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF2, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs2'].push(function(property, value) {
		if (property === 'playFs2') {
			X3DJSON.nodeUtil("Scene","PitchFs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchFs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs2, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs2'].push(function(property, value) {
		if (property === 'playFs2') {
			X3DJSON.nodeUtil("Scene","ClockFs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockFs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs2, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG2'].push(function(property, value) {
		if (property === 'playG2') {
			X3DJSON.nodeUtil("Scene","PitchG2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchG2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG2, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG2'].push(function(property, value) {
		if (property === 'playG2') {
			X3DJSON.nodeUtil("Scene","ClockG2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockG2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG2, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs2'].push(function(property, value) {
		if (property === 'playGs2') {
			X3DJSON.nodeUtil("Scene","PitchGs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchGs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs2, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs2'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs2'].push(function(property, value) {
		if (property === 'playGs2') {
			X3DJSON.nodeUtil("Scene","ClockGs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs2, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockGs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs2, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA3'].push(function(property, value) {
		if (property === 'playA3') {
			X3DJSON.nodeUtil("Scene","PitchA3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA3, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchA3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA3, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA3'].push(function(property, value) {
		if (property === 'playA3') {
			X3DJSON.nodeUtil("Scene","ClockA3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA3, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockA3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA3, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs3'].push(function(property, value) {
		if (property === 'playAs3') {
			X3DJSON.nodeUtil("Scene","PitchAs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs3, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchAs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs3, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs3'].push(function(property, value) {
		if (property === 'playAs3') {
			X3DJSON.nodeUtil("Scene","ClockAs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs3, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockAs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs3, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB3'].push(function(property, value) {
		if (property === 'playB3') {
			X3DJSON.nodeUtil("Scene","PitchB3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB3, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchB3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB3, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB3'].push(function(property, value) {
		if (property === 'playB3') {
			X3DJSON.nodeUtil("Scene","ClockB3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB3, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockB3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB3, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC3'].push(function(property, value) {
		if (property === 'playC3') {
			X3DJSON.nodeUtil("Scene","PitchC3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC3, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchC3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC3, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC3'].push(function(property, value) {
		if (property === 'playC3') {
			X3DJSON.nodeUtil("Scene","ClockC3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC3, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockC3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC3, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs3'].push(function(property, value) {
		if (property === 'playCs3') {
			X3DJSON.nodeUtil("Scene","PitchCs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs3, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchCs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs3, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs3'].push(function(property, value) {
		if (property === 'playCs3') {
			X3DJSON.nodeUtil("Scene","ClockCs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs3, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockCs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs3, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD3'].push(function(property, value) {
		if (property === 'playD3') {
			X3DJSON.nodeUtil("Scene","PitchD3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD3, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchD3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD3, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD3'].push(function(property, value) {
		if (property === 'playD3') {
			X3DJSON.nodeUtil("Scene","ClockD3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD3, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockD3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD3, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs3'].push(function(property, value) {
		if (property === 'playDs3') {
			X3DJSON.nodeUtil("Scene","PitchDs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs3, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchDs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs3, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs3'].push(function(property, value) {
		if (property === 'playDs3') {
			X3DJSON.nodeUtil("Scene","ClockDs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs3, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockDs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs3, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE3'].push(function(property, value) {
		if (property === 'playE3') {
			X3DJSON.nodeUtil("Scene","PitchE3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE3, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchE3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE3, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE3'].push(function(property, value) {
		if (property === 'playE3') {
			X3DJSON.nodeUtil("Scene","ClockE3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE3, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockE3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE3, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF3'].push(function(property, value) {
		if (property === 'playF3') {
			X3DJSON.nodeUtil("Scene","PitchF3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF3, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchF3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF3, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF3'].push(function(property, value) {
		if (property === 'playF3') {
			X3DJSON.nodeUtil("Scene","ClockF3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF3, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockF3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF3, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs3'].push(function(property, value) {
		if (property === 'playFs3') {
			X3DJSON.nodeUtil("Scene","PitchFs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs3, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchFs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs3, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs3'].push(function(property, value) {
		if (property === 'playFs3') {
			X3DJSON.nodeUtil("Scene","ClockFs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs3, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockFs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs3, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG3'].push(function(property, value) {
		if (property === 'playG3') {
			X3DJSON.nodeUtil("Scene","PitchG3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG3, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchG3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG3, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG3'].push(function(property, value) {
		if (property === 'playG3') {
			X3DJSON.nodeUtil("Scene","ClockG3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG3, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockG3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG3, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs3'].push(function(property, value) {
		if (property === 'playGs3') {
			X3DJSON.nodeUtil("Scene","PitchGs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs3, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchGs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs3, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs3'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs3'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs3'].push(function(property, value) {
		if (property === 'playGs3') {
			X3DJSON.nodeUtil("Scene","ClockGs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs3, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockGs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs3, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA4'].push(function(property, value) {
		if (property === 'playA4') {
			X3DJSON.nodeUtil("Scene","PitchA4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA4, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchA4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA4, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA4'].push(function(property, value) {
		if (property === 'playA4') {
			X3DJSON.nodeUtil("Scene","ClockA4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA4, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockA4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA4, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs4'].push(function(property, value) {
		if (property === 'playAs4') {
			X3DJSON.nodeUtil("Scene","PitchAs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs4, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchAs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs4, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs4'].push(function(property, value) {
		if (property === 'playAs4') {
			X3DJSON.nodeUtil("Scene","ClockAs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs4, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockAs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs4, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB4'].push(function(property, value) {
		if (property === 'playB4') {
			X3DJSON.nodeUtil("Scene","PitchB4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB4, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchB4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB4, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB4'].push(function(property, value) {
		if (property === 'playB4') {
			X3DJSON.nodeUtil("Scene","ClockB4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB4, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockB4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB4, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC4'].push(function(property, value) {
		if (property === 'playC4') {
			X3DJSON.nodeUtil("Scene","PitchC4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC4, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchC4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC4, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC4'].push(function(property, value) {
		if (property === 'playC4') {
			X3DJSON.nodeUtil("Scene","ClockC4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC4, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockC4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC4, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs4'].push(function(property, value) {
		if (property === 'playCs4') {
			X3DJSON.nodeUtil("Scene","PitchCs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs4, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchCs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs4, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs4'].push(function(property, value) {
		if (property === 'playCs4') {
			X3DJSON.nodeUtil("Scene","ClockCs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs4, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockCs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs4, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD4'].push(function(property, value) {
		if (property === 'playD4') {
			X3DJSON.nodeUtil("Scene","PitchD4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD4, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchD4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD4, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD4'].push(function(property, value) {
		if (property === 'playD4') {
			X3DJSON.nodeUtil("Scene","ClockD4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD4, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockD4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD4, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs4'].push(function(property, value) {
		if (property === 'playDs4') {
			X3DJSON.nodeUtil("Scene","PitchDs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs4, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchDs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs4, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs4'].push(function(property, value) {
		if (property === 'playDs4') {
			X3DJSON.nodeUtil("Scene","ClockDs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs4, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockDs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs4, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE4'].push(function(property, value) {
		if (property === 'playE4') {
			X3DJSON.nodeUtil("Scene","PitchE4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE4, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchE4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE4, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE4'].push(function(property, value) {
		if (property === 'playE4') {
			X3DJSON.nodeUtil("Scene","ClockE4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE4, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockE4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE4, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF4'].push(function(property, value) {
		if (property === 'playF4') {
			X3DJSON.nodeUtil("Scene","PitchF4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF4, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchF4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF4, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF4'].push(function(property, value) {
		if (property === 'playF4') {
			X3DJSON.nodeUtil("Scene","ClockF4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF4, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockF4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF4, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs4'].push(function(property, value) {
		if (property === 'playFs4') {
			X3DJSON.nodeUtil("Scene","PitchFs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs4, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchFs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs4, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs4'].push(function(property, value) {
		if (property === 'playFs4') {
			X3DJSON.nodeUtil("Scene","ClockFs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs4, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockFs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs4, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG4'].push(function(property, value) {
		if (property === 'playG4') {
			X3DJSON.nodeUtil("Scene","PitchG4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG4, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchG4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG4, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG4'].push(function(property, value) {
		if (property === 'playG4') {
			X3DJSON.nodeUtil("Scene","ClockG4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG4, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockG4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG4, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs4'].push(function(property, value) {
		if (property === 'playGs4') {
			X3DJSON.nodeUtil("Scene","PitchGs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs4, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchGs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs4, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs4'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs4'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs4'].push(function(property, value) {
		if (property === 'playGs4') {
			X3DJSON.nodeUtil("Scene","ClockGs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs4, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockGs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs4, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB5'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB5'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB5'].push(function(property, value) {
		if (property === 'playB5') {
			X3DJSON.nodeUtil("Scene","ClockB5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB5, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockB5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB5, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC5'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC5'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC5'].push(function(property, value) {
		if (property === 'playC5') {
			X3DJSON.nodeUtil("Scene","PitchC5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC5, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchC5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC5, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC5'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC5'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC5'].push(function(property, value) {
		if (property === 'playC5') {
			X3DJSON.nodeUtil("Scene","ClockC5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC5, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockC5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC5, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs5'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs5'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs5'].push(function(property, value) {
		if (property === 'playCs5') {
			X3DJSON.nodeUtil("Scene","PitchCs5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs5, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchCs5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs5, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs5'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs5'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs5'].push(function(property, value) {
		if (property === 'playCs5') {
			X3DJSON.nodeUtil("Scene","ClockCs5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs5, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockCs5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs5, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD5'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD5'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD5'].push(function(property, value) {
		if (property === 'playD5') {
			X3DJSON.nodeUtil("Scene","PitchD5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD5, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchD5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD5, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD5'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD5'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD5'].push(function(property, value) {
		if (property === 'playD5') {
			X3DJSON.nodeUtil("Scene","ClockD5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD5, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockD5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD5, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs5'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs5'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs5'].push(function(property, value) {
		if (property === 'playDs5') {
			X3DJSON.nodeUtil("Scene","PitchDs5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs5, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchDs5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs5, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs5'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs5'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs5'].push(function(property, value) {
		if (property === 'playDs5') {
			X3DJSON.nodeUtil("Scene","ClockDs5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs5, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockDs5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs5, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE5'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE5'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE5'].push(function(property, value) {
		if (property === 'playE5') {
			X3DJSON.nodeUtil("Scene","PitchE5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE5, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchE5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE5, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE5'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE5'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE5'].push(function(property, value) {
		if (property === 'playE5') {
			X3DJSON.nodeUtil("Scene","ClockE5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE5, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockE5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE5, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF5'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF5'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF5'].push(function(property, value) {
		if (property === 'playF5') {
			X3DJSON.nodeUtil("Scene","PitchF5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF5, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchF5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF5, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF5'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF5'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF5'].push(function(property, value) {
		if (property === 'playF5') {
			X3DJSON.nodeUtil("Scene","ClockF5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF5, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockF5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF5, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs5'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs5'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs5'].push(function(property, value) {
		if (property === 'playFs5') {
			X3DJSON.nodeUtil("Scene","PitchFs5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs5, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchFs5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs5, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs5'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs5'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs5'].push(function(property, value) {
		if (property === 'playFs5') {
			X3DJSON.nodeUtil("Scene","ClockFs5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs5, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockFs5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs5, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG5'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG5'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG5'].push(function(property, value) {
		if (property === 'playG5') {
			X3DJSON.nodeUtil("Scene","PitchG5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG5, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchG5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG5, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG5'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG5'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG5'].push(function(property, value) {
		if (property === 'playG5') {
			X3DJSON.nodeUtil("Scene","ClockG5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG5, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockG5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG5, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs5'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs5'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs5'].push(function(property, value) {
		if (property === 'playGs5') {
			X3DJSON.nodeUtil("Scene","PitchGs5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs5, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchGs5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs5, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs5'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs5'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs5'].push(function(property, value) {
		if (property === 'playGs5') {
			X3DJSON.nodeUtil("Scene","ClockGs5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs5, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockGs5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs5, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA6'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA6'].push(function(property, value) {
		if (property === 'playA6') {
			X3DJSON.nodeUtil("Scene","PitchA6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA6, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchA6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA6, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA6'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA6'].push(function(property, value) {
		if (property === 'playA6') {
			X3DJSON.nodeUtil("Scene","ClockA6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA6, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockA6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA6, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs6'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs6'].push(function(property, value) {
		if (property === 'playAs6') {
			X3DJSON.nodeUtil("Scene","PitchAs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs6, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchAs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs6, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs6'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs6'].push(function(property, value) {
		if (property === 'playAs6') {
			X3DJSON.nodeUtil("Scene","ClockAs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs6, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockAs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs6, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB6'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB6'].push(function(property, value) {
		if (property === 'playB6') {
			X3DJSON.nodeUtil("Scene","PitchB6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB6, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchB6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB6, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB6'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB6'].push(function(property, value) {
		if (property === 'playB6') {
			X3DJSON.nodeUtil("Scene","ClockB6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB6, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockB6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB6, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC6'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC6'].push(function(property, value) {
		if (property === 'playC6') {
			X3DJSON.nodeUtil("Scene","PitchC6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC6, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchC6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC6, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC6'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC6'].push(function(property, value) {
		if (property === 'playC6') {
			X3DJSON.nodeUtil("Scene","ClockC6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC6, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockC6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC6, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs6'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs6'].push(function(property, value) {
		if (property === 'playCs6') {
			X3DJSON.nodeUtil("Scene","PitchCs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs6, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchCs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs6, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs6'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs6'].push(function(property, value) {
		if (property === 'playCs6') {
			X3DJSON.nodeUtil("Scene","ClockCs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs6, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockCs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs6, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD6'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD6'].push(function(property, value) {
		if (property === 'playD6') {
			X3DJSON.nodeUtil("Scene","PitchD6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD6, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchD6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD6, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD6'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD6'].push(function(property, value) {
		if (property === 'playD6') {
			X3DJSON.nodeUtil("Scene","ClockD6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD6, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockD6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD6, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs6'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs6'].push(function(property, value) {
		if (property === 'playDs6') {
			X3DJSON.nodeUtil("Scene","PitchDs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs6, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchDs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs6, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs6'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs6'].push(function(property, value) {
		if (property === 'playDs6') {
			X3DJSON.nodeUtil("Scene","ClockDs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs6, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockDs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs6, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE6'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE6'].push(function(property, value) {
		if (property === 'playE6') {
			X3DJSON.nodeUtil("Scene","PitchE6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE6, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchE6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE6, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE6'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE6'].push(function(property, value) {
		if (property === 'playE6') {
			X3DJSON.nodeUtil("Scene","ClockE6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE6, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockE6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE6, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF6'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF6'].push(function(property, value) {
		if (property === 'playF6') {
			X3DJSON.nodeUtil("Scene","PitchF6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF6, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchF6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF6, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF6'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF6'].push(function(property, value) {
		if (property === 'playF6') {
			X3DJSON.nodeUtil("Scene","ClockF6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF6, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockF6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF6, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs6'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs6'].push(function(property, value) {
		if (property === 'playFs6') {
			X3DJSON.nodeUtil("Scene","PitchFs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs6, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchFs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs6, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs6'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs6'].push(function(property, value) {
		if (property === 'playFs6') {
			X3DJSON.nodeUtil("Scene","ClockFs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs6, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockFs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs6, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG6'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG6'].push(function(property, value) {
		if (property === 'playG6') {
			X3DJSON.nodeUtil("Scene","PitchG6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG6, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchG6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG6, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG6'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG6'].push(function(property, value) {
		if (property === 'playG6') {
			X3DJSON.nodeUtil("Scene","ClockG6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG6, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockG6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG6, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs6'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs6'].push(function(property, value) {
		if (property === 'playGs6') {
			X3DJSON.nodeUtil("Scene","PitchGs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs6, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchGs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs6, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs6'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs6'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs6'].push(function(property, value) {
		if (property === 'playGs6') {
			X3DJSON.nodeUtil("Scene","ClockGs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs6, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockGs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs6, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA7'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA7'].push(function(property, value) {
		if (property === 'playA7') {
			X3DJSON.nodeUtil("Scene","PitchA7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA7, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchA7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA7, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA7'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA7'].push(function(property, value) {
		if (property === 'playA7') {
			X3DJSON.nodeUtil("Scene","ClockA7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA7, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockA7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA7, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs7'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs7'].push(function(property, value) {
		if (property === 'playAs7') {
			X3DJSON.nodeUtil("Scene","PitchAs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs7, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchAs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs7, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs7'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs7'].push(function(property, value) {
		if (property === 'playAs7') {
			X3DJSON.nodeUtil("Scene","ClockAs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs7, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockAs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs7, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB7'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB7'].push(function(property, value) {
		if (property === 'playB7') {
			X3DJSON.nodeUtil("Scene","PitchB7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB7, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchB7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB7, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB7'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB7'].push(function(property, value) {
		if (property === 'playB7') {
			X3DJSON.nodeUtil("Scene","ClockB7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB7, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockB7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB7, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC7'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC7'].push(function(property, value) {
		if (property === 'playC7') {
			X3DJSON.nodeUtil("Scene","PitchC7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC7, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchC7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC7, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC7'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC7'].push(function(property, value) {
		if (property === 'playC7') {
			X3DJSON.nodeUtil("Scene","ClockC7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC7, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockC7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC7, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs7'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs7'].push(function(property, value) {
		if (property === 'playCs7') {
			X3DJSON.nodeUtil("Scene","PitchCs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs7, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchCs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs7, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs7'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playCs7'].push(function(property, value) {
		if (property === 'playCs7') {
			X3DJSON.nodeUtil("Scene","ClockCs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs7, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockCs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs7, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD7'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD7'].push(function(property, value) {
		if (property === 'playD7') {
			X3DJSON.nodeUtil("Scene","PitchD7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD7, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchD7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD7, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD7'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playD7'].push(function(property, value) {
		if (property === 'playD7') {
			X3DJSON.nodeUtil("Scene","ClockD7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD7, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockD7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD7, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs7'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs7'].push(function(property, value) {
		if (property === 'playDs7') {
			X3DJSON.nodeUtil("Scene","PitchDs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs7, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchDs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs7, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs7'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playDs7'].push(function(property, value) {
		if (property === 'playDs7') {
			X3DJSON.nodeUtil("Scene","ClockDs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs7, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockDs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs7, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE7'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE7'].push(function(property, value) {
		if (property === 'playE7') {
			X3DJSON.nodeUtil("Scene","PitchE7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE7, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchE7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE7, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE7'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playE7'].push(function(property, value) {
		if (property === 'playE7') {
			X3DJSON.nodeUtil("Scene","ClockE7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE7, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockE7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE7, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF7'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF7'].push(function(property, value) {
		if (property === 'playF7') {
			X3DJSON.nodeUtil("Scene","PitchF7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF7, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchF7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF7, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF7'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playF7'].push(function(property, value) {
		if (property === 'playF7') {
			X3DJSON.nodeUtil("Scene","ClockF7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF7, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockF7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF7, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs7'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs7'].push(function(property, value) {
		if (property === 'playFs7') {
			X3DJSON.nodeUtil("Scene","PitchFs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs7, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchFs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs7, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs7'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playFs7'].push(function(property, value) {
		if (property === 'playFs7') {
			X3DJSON.nodeUtil("Scene","ClockFs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs7, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockFs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs7, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG7'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG7'].push(function(property, value) {
		if (property === 'playG7') {
			X3DJSON.nodeUtil("Scene","PitchG7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG7, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchG7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG7, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG7'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playG7'].push(function(property, value) {
		if (property === 'playG7') {
			X3DJSON.nodeUtil("Scene","ClockG7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG7, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockG7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG7, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs7'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs7'].push(function(property, value) {
		if (property === 'playGs7') {
			X3DJSON.nodeUtil("Scene","PitchGs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs7, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchGs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs7, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs7'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs7'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playGs7'].push(function(property, value) {
		if (property === 'playGs7') {
			X3DJSON.nodeUtil("Scene","ClockGs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs7, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockGs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs7, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA8'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA8'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA8'].push(function(property, value) {
		if (property === 'playA8') {
			X3DJSON.nodeUtil("Scene","PitchA8","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA8, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchA8","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA8, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA8'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA8'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playA8'].push(function(property, value) {
		if (property === 'playA8') {
			X3DJSON.nodeUtil("Scene","ClockA8","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA8, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockA8","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA8, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs8'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs8'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs8'].push(function(property, value) {
		if (property === 'playAs8') {
			X3DJSON.nodeUtil("Scene","PitchAs8","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs8, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchAs8","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs8, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs8'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs8'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playAs8'].push(function(property, value) {
		if (property === 'playAs8') {
			X3DJSON.nodeUtil("Scene","ClockAs8","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs8, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockAs8","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs8, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB8'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB8'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB8'].push(function(property, value) {
		if (property === 'playB8') {
			X3DJSON.nodeUtil("Scene","PitchB8","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB8, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchB8","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB8, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB8'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB8'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playB8'].push(function(property, value) {
		if (property === 'playB8') {
			X3DJSON.nodeUtil("Scene","ClockB8","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB8, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockB8","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB8, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC8'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC8'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC8'].push(function(property, value) {
		if (property === 'playC8') {
			X3DJSON.nodeUtil("Scene","PitchC8","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC8, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PitchC8","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC8, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC8'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC8'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript']['ACTION']['playC8'].push(function(property, value) {
		if (property === 'playC8') {
			X3DJSON.nodeUtil("Scene","ClockC8","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC8, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ClockC8","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC8, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playScriptedNotes(X3DJSON.nodeUtil("Scene","StartPlaying","touchTime"), __eventTime);
			X3DJSON.nodeUtil("Scene","PitchA0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA0, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockA0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA0, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchAs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs0, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockAs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs0, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchB0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB0, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockB0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB0, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchC0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC0, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockC0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC0, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchCs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs0, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockCs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs0, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchD0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD0, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockD0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD0, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchDs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs0, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockDs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs0, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchE0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE0, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockE0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE0, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchF0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF0, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockF0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF0, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchFs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs0, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockFs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs0, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchG0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG0, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockG0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG0, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchGs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs0, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockGs0","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs0 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs0() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs0, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchA1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA1, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockA1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA1, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchAs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs1, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockAs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs1, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchB1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB1, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockB1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB1, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchC1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC1, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockC1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC1, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchCs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs1, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockCs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs1, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchD1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD1, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockD1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD1, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchDs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs1, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockDs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs1, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchE1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE1, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockE1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE1, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchF1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF1, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockF1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF1, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchFs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs1, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockFs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs1, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchG1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG1, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockG1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG1, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchGs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs1, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockGs1","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs1 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs1() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs1, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchA2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA2, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockA2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA2, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchAs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs2, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockAs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs2, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchB2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB2, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockB2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB2, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchC2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC2, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockC2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC2, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchCs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs2, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockCs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs2, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchD2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD2, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockD2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD2, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchDs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs2, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockDs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs2, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchE2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE2, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockE2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE2, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchF2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF2, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockF2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF2, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchFs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs2, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockFs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs2, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchG2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG2, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockG2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG2, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchGs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs2, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockGs2","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs2 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs2() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs2, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchA3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA3, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockA3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA3, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchAs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs3, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockAs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs3, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchB3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB3, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockB3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB3, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchC3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC3, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockC3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC3, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchCs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs3, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockCs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs3, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchD3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD3, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockD3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD3, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchDs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs3, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockDs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs3, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchE3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE3, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockE3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE3, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchF3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF3, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockF3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF3, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchFs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs3, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockFs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs3, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchG3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG3, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockG3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG3, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchGs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs3, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockGs3","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs3 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs3() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs3, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchA4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA4, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockA4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA4, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchAs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs4, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockAs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs4, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchB4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB4, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockB4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB4, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchC4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC4, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockC4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC4, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchCs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs4, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockCs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs4, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchD4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD4, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockD4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD4, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchDs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs4, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockDs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs4, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchE4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE4, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockE4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE4, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchF4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF4, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockF4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF4, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchFs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs4, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockFs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs4, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchG4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG4, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockG4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG4, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchGs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs4, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockGs4","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs4 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs4() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs4, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockB5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB5, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchC5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC5, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockC5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC5, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchCs5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs5, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockCs5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs5, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchD5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD5, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockD5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD5, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchDs5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs5, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockDs5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs5, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchE5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE5, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockE5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE5, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchF5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF5, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockF5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF5, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchFs5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs5, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockFs5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs5, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchG5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG5, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockG5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG5, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchGs5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs5, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockGs5","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs5 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs5() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs5, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchA6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA6, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockA6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA6, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchAs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs6, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockAs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs6, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchB6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB6, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockB6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB6, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchC6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC6, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockC6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC6, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchCs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs6, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockCs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs6, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchD6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD6, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockD6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD6, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchDs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs6, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockDs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs6, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchE6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE6, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockE6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE6, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchF6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF6, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockF6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF6, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchFs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs6, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockFs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs6, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchG6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG6, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockG6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG6, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchGs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs6, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockGs6","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs6 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs6() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs6, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchA7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA7, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockA7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA7, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchAs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs7, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockAs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs7, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchB7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB7, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockB7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB7, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchC7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC7, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockC7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC7, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchCs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs7, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockCs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playCs7, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchD7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD7, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockD7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playD7, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchDs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs7, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockDs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playDs7, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchE7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE7, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockE7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playE7, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchF7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF7, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockF7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playF7, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchFs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs7, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockFs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playFs7, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchG7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG7, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockG7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playG7, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchGs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs7, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockGs7","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs7 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs7() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playGs7, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchA8","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA8, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockA8","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playA8, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchAs8","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs8, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockAs8","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playAs8, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchB8","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB8, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockB8","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playB8, __eventTime);
			X3DJSON.nodeUtil("Scene","PitchC8","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC8, __eventTime);
			X3DJSON.nodeUtil("Scene","ClockC8","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC8 === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC8() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/KeyboardEightyEightKeys.json']['PlayerPianoScript'].playC8, __eventTime);