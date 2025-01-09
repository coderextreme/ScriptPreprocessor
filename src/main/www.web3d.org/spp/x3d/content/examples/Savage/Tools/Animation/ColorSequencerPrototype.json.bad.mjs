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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ColorSequencerPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ColorSequencerPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ColorSequencerPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ColorSequencerPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ColorSequencerPrototype.json']['SequencerScript'] = function() {
	this.set_enabledHolderNode = function (value) {
		try {
			this.proxy.enabledHolderNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting enabledHolderNode '+e);
			console.error('Problems setting enabledHolderNode',e);
		}
	};
	this.enabledHolderNode_changed = function () {
		var value = this.enabledHolderNode;
		return value;
	};
	try {
		this.enabledHolderNode = X3DJSON.nodeUtil("Scene","EnabledHolder");
	} catch (e) {
		console.log('Problems setting enabledHolderNode '+e);
		console.error('Problems setting enabledHolderNode',e);
	}
	this.set_indexHolderNode = function (value) {
		try {
			this.proxy.indexHolderNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting indexHolderNode '+e);
			console.error('Problems setting indexHolderNode',e);
		}
	};
	this.indexHolderNode_changed = function () {
		var value = this.indexHolderNode;
		return value;
	};
	try {
		this.indexHolderNode = X3DJSON.nodeUtil("Scene","IndexHolder");
	} catch (e) {
		console.log('Problems setting indexHolderNode '+e);
		console.error('Problems setting indexHolderNode',e);
	}
	this.set_colorsHolderNode = function (value) {
		try {
			this.proxy.colorsHolderNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting colorsHolderNode '+e);
			console.error('Problems setting colorsHolderNode',e);
		}
	};
	this.colorsHolderNode_changed = function () {
		var value = this.colorsHolderNode;
		return value;
	};
	try {
		this.colorsHolderNode = X3DJSON.nodeUtil("Scene","ColorsHolder");
	} catch (e) {
		console.log('Problems setting colorsHolderNode '+e);
		console.error('Problems setting colorsHolderNode',e);
	}
	this.set_previous = function (value) {
		try {
			this.proxy.previous = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting previous '+e);
			console.error('Problems setting previous',e);
		}
	};
	this.previous_changed = function () {
		var value = this.previous;
		return value;
	};
	try {
		this.previous = new SFBool();
	} catch (e) {
		console.log('Problems setting previous '+e);
		console.error('Problems setting previous',e);
	}
	this.set_next = function (value) {
		try {
			this.proxy.next = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting next '+e);
			console.error('Problems setting next',e);
		}
	};
	this.next_changed = function () {
		var value = this.next;
		return value;
	};
	try {
		this.next = new SFBool();
	} catch (e) {
		console.log('Problems setting next '+e);
		console.error('Problems setting next',e);
	}
	this.set_index = function (value) {
		try {
			this.proxy.index = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting index '+e);
			console.error('Problems setting index',e);
		}
	};
	this.index_changed = function () {
		var value = this.index;
		return value;
	};
	try {
		this.index = new SFInt32(0);
	} catch (e) {
		console.log('Problems setting index '+e);
		console.error('Problems setting index',e);
	}
	this.set_colors = function (value) {
		try {
			this.proxy.colors = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting colors '+e);
			console.error('Problems setting colors',e);
		}
	};
	this.colors_changed = function () {
		var value = this.colors;
		return value;
	};
	try {
		this.colors = new MFColor();
	} catch (e) {
		console.log('Problems setting colors '+e);
		console.error('Problems setting colors',e);
	}
	this.set_color = function (value) {
		try {
			this.proxy.color = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting color '+e);
			console.error('Problems setting color',e);
		}
	};
	this.color_changed = function () {
		var value = this.color;
		return value;
	};
	try {
		this.color = undefined;
	} catch (e) {
		console.log('Problems setting color '+e);
		console.error('Problems setting color',e);
	}
	this.set_enabled = function (value) {
		try {
			this.proxy.enabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting enabled '+e);
			console.error('Problems setting enabled',e);
		}
	};
	this.enabled_changed = function () {
		var value = this.enabled;
		return value;
	};
	try {
		this.enabled = new SFBool(true);
	} catch (e) {
		console.log('Problems setting enabled '+e);
		console.error('Problems setting enabled',e);
	}
	this.set_traceEnabled = function (value) {
		try {
			this.proxy.traceEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting traceEnabled '+e);
			console.error('Problems setting traceEnabled',e);
		}
	};
	this.traceEnabled_changed = function () {
		var value = this.traceEnabled;
		return value;
	};
	try {
		this.traceEnabled = new SFBool();
	} catch (e) {
		console.log('Problems setting traceEnabled '+e);
		console.error('Problems setting traceEnabled',e);
	}


ecmascript:

	this.tracePrint = function (outputString)
{
    if (this.proxy.traceEnabled)
    {
        console.error ('[ColorSequencer] ' + outputString + '');
    }
}
;

	this.alwaysPrint = function (outputString)
{
    console.error ('[ColorSequencer] ' + outputString + '');
}
;

	this.validityCheck = function ()
{
    valid = true;
    // Check if this.proxy.index value is within allowed range
    if (this.proxy.index < 0)
    {
        this.alwaysPrint('*** error: this.proxy.index=' + this.proxy.index + ' less than zero, ColorSequencer ignored ***');
        valid = false;
    }
    if (this.proxy.index >= this.proxy.colors.length)
    {
        this.alwaysPrint('*** error: this.proxy.index=' + this.proxy.index + ' greater than allowed this.proxy.colors this.proxy.index range [0..' 
        + (this.proxy.colors.length-1) + '], ColorSequencer ignored ***');
        valid = false;
    }
    // Check color rgb values valid [0..1]
    if (this.proxy.colors[this.proxy.index].r < 0 || this.proxy.colors[this.proxy.index].r > 1 
     || this.proxy.colors[this.proxy.index].g < 0 || this.proxy.colors[this.proxy.index].g > 1
     || this.proxy.colors[this.proxy.index].b < 0 || this.proxy.colors[this.proxy.index].b > 1)
    {
        this.alwaysPrint('*** error: this.proxy.colors[' + this.proxy.index + ']=' + this.proxy.colors[this.proxy.index] + ' value is NOT in the range of [0..1].  ColorSequencer ignored ***');
        valid = false;
    }
    this.tracePrint ('this.validityCheck() is ' + valid);
    return valid;
}
;

	this.initialize = function ()
{
    this.tracePrint('Initializing a new ColorSequencer...');
    this.proxy.enabled = X3DJSON.nodeUtil("Scene","EnabledHolder", "this.proxy.enabled");
    this.tracePrint('this.proxy.enabled=' + this.proxy.enabled);
    this.proxy.index = X3DJSON.nodeUtil("Scene","IndexHolder", "whichChoice");
    this.tracePrint('this.proxy.index=' + this.proxy.index);
    this.proxy.colors = X3DJSON.nodeUtil("Scene","ColorsHolder", "keyValue");
    this.tracePrint('this.proxy.colors.length=' + this.proxy.colors.length);
    if (this.proxy.colors.length > 0)
    {
        this.tracePrint('this.proxy.colors=' + this.proxy.colors.toString()); // Xj3D exception
    }
    if (this.validityCheck())
    {
        this.proxy.color_changed = this.proxy.colors[this.proxy.index];
    }
    else
    {
        this.tracePrint('this.initialize() did not pass this.validityCheck()');
    }
    return;
}
;

	this.index = function (value, timeStamp)
{
    this.proxy.index = value;
    this.tracePrint('this.proxy.index=' + this.proxy.index + ', color=' + this.proxy.colors[this.proxy.index].toString());
    this.proxy.color_changed = this.proxy.colors[this.proxy.index];
}
;

	this.colors = function (value, timeStamp)
{
    this.proxy.colors = value;
    this.tracePrint('this.proxy.colors=' + this.proxy.colors.toString());
    if (this.validityCheck())
    {
        this.proxy.color_changed = this.proxy.colors[this.proxy.index];
    }
 }
;

	this.previous = function (value, timeStamp)
{
    this.tracePrint ('this.proxy.previous=' + value);
    if (value) // only respond to true inputs
    {
            this.proxy.index--;
            if (this.proxy.index < 0)
            {
                this.proxy.index = this.proxy.colors.length - 1;
            }
            this.tracePrint ('this.proxy.index=' + this.proxy.index + ', color=' + this.proxy.colors[this.proxy.index].toString());
            this.proxy.color_changed = this.proxy.colors[this.proxy.index];
    }
};

	this.next = function (value, timeStamp)
{
    this.tracePrint ('this.proxy.next=' + value);
    if (value) // only respond to true inputs
    {
            this.proxy.index++;
            if (this.proxy.index >= this.proxy.colors.length)
            {
                this.proxy.index = 0;
            }
            this.tracePrint ('this.proxy.index=' + this.proxy.index + ', color=' + this.proxy.colors[this.proxy.index].toString());
            this.proxy.color_changed = this.proxy.colors[this.proxy.index];
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ColorSequencerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ColorSequencerPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ColorSequencerPrototype.json']['SequencerScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ColorSequencerPrototype.json']['SequencerScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ColorSequencerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ColorSequencerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ColorSequencerPrototype.json']['SequencerScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ColorSequencerPrototype.json']['SequencerScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ColorSequencerPrototype.json']['SequencerScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ColorSequencerPrototype.json']['SequencerScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ColorSequencerPrototype.json']['SequencerScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ColorSequencerPrototype.json']['SequencerScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ColorSequencerPrototype.json']['SequencerScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ColorSequencerPrototype.json']['SequencerScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/ColorSequencerPrototype.json']['SequencerScript'].initialize();

