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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'] = function() {
	this.set_description = function (value) {
		try {
			this.proxy.description = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting description '+e);
			console.error('Problems setting description',e);
		}
	};
	this.description_changed = function () {
		var value = this.description;
		return value;
	};
	try {
		this.description = new SFString();
	} catch (e) {
		console.log('Problems setting description '+e);
		console.error('Problems setting description',e);
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
	this.set_isVisible = function (value) {
		try {
			this.proxy.isVisible = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isVisible '+e);
			console.error('Problems setting isVisible',e);
		}
	};
	this.isVisible_changed = function () {
		var value = this.isVisible;
		return value;
	};
	try {
		this.isVisible = new SFBool(true);
	} catch (e) {
		console.log('Problems setting isVisible '+e);
		console.error('Problems setting isVisible',e);
	}
	this.set_locationOffset = function (value) {
		try {
			this.proxy.locationOffset = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting locationOffset '+e);
			console.error('Problems setting locationOffset',e);
		}
	};
	this.locationOffset_changed = function () {
		var value = this.locationOffset;
		return value;
	};
	try {
		this.locationOffset = new SFVec3f();
	} catch (e) {
		console.log('Problems setting locationOffset '+e);
		console.error('Problems setting locationOffset',e);
	}
	this.set_planeSensorTranslation = function (value) {
		try {
			this.proxy.planeSensorTranslation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting planeSensorTranslation '+e);
			console.error('Problems setting planeSensorTranslation',e);
		}
	};
	this.planeSensorTranslation_changed = function () {
		var value = this.planeSensorTranslation;
		return value;
	};
	try {
		this.planeSensorTranslation = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting planeSensorTranslation '+e);
		console.error('Problems setting planeSensorTranslation',e);
	}
	this.set_setIsVisible = function (value) {
		try {
			this.proxy.setIsVisible = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setIsVisible '+e);
			console.error('Problems setting setIsVisible',e);
		}
	};
	this.setIsVisible_changed = function () {
		var value = this.setIsVisible;
		return value;
	};
	try {
		this.setIsVisible = new SFBool();
	} catch (e) {
		console.log('Problems setting setIsVisible '+e);
		console.error('Problems setting setIsVisible',e);
	}
	this.set_setPlaneSensorIsActive = function (value) {
		try {
			this.proxy.setPlaneSensorIsActive = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setPlaneSensorIsActive '+e);
			console.error('Problems setting setPlaneSensorIsActive',e);
		}
	};
	this.setPlaneSensorIsActive_changed = function () {
		var value = this.setPlaneSensorIsActive;
		return value;
	};
	try {
		this.setPlaneSensorIsActive = new SFBool();
	} catch (e) {
		console.log('Problems setting setPlaneSensorIsActive '+e);
		console.error('Problems setting setPlaneSensorIsActive',e);
	}
	this.set_setPlaneSensorTranslation = function (value) {
		try {
			this.proxy.setPlaneSensorTranslation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setPlaneSensorTranslation '+e);
			console.error('Problems setting setPlaneSensorTranslation',e);
		}
	};
	this.setPlaneSensorTranslation_changed = function () {
		var value = this.setPlaneSensorTranslation;
		return value;
	};
	try {
		this.setPlaneSensorTranslation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting setPlaneSensorTranslation '+e);
		console.error('Problems setting setPlaneSensorTranslation',e);
	}
	this.set_translationChanged = function (value) {
		try {
			this.proxy.translationChanged = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting translationChanged '+e);
			console.error('Problems setting translationChanged',e);
		}
	};
	this.translationChanged_changed = function () {
		var value = this.translationChanged;
		return value;
	};
	try {
		this.translationChanged = new SFVec3f();
	} catch (e) {
		console.log('Problems setting translationChanged '+e);
		console.error('Problems setting translationChanged',e);
	}
	this.set_translationOffsetChanged = function (value) {
		try {
			this.proxy.translationOffsetChanged = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting translationOffsetChanged '+e);
			console.error('Problems setting translationOffsetChanged',e);
		}
	};
	this.translationOffsetChanged_changed = function () {
		var value = this.translationOffsetChanged;
		return value;
	};
	try {
		this.translationOffsetChanged = new SFVec3f();
	} catch (e) {
		console.log('Problems setting translationOffsetChanged '+e);
		console.error('Problems setting translationOffsetChanged',e);
	}


ecmascript:

	this.tracePrint = function (text)
{
    if (this.proxy.traceEnabled) console.error ('[DvdController ' + this.proxy.description + ' VisibilityControlScript] ' + text + '');
};

	this.initialize = function ()
{
    this.proxy.translationOffsetChanged = this.proxy.locationOffset;
    this.proxy.planeSensorTranslation   = this.proxy.locationOffset;
    this.proxy.setPlaneSensorIsActive (false, -1); // dummy timeStamp
};

	this.setIsVisible = function (value, timeStamp)
{
    this.proxy.isVisible = value;
    this.tracePrint('this.proxy.isVisible=' + value);
};

	this.setPlaneSensorIsActive = function (value, timeStamp)
{
    this.tracePrint('PlaneSensor isActive=' + value + ', this.proxy.translationOffsetChanged=' + this.proxy.translationOffsetChanged.toString());

    if (value == false)
    {
            this.tracePrint('this.proxy.planeSensorTranslation=' + this.proxy.planeSensorTranslation.toString());
            if (this.proxy.isVisible)
            {
                    this.proxy.translationChanged = this.proxy.planeSensorTranslation;
            }
            else
            {
                    this.proxy.translationChanged = new SFVec3f(0, 0, 0);
                    this.proxy.translationOffsetChanged  = new SFVec3f(0, 0, 0);
            }
    }
};

	this.setPlaneSensorTranslation = function (value, timeStamp)
{
	this.proxy.planeSensorTranslation = value;
	this.tracePrint('this.proxy.planeSensorTranslation=' + value.toString());
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'] = function() {
	this.set_description = function (value) {
		try {
			this.proxy.description = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting description '+e);
			console.error('Problems setting description',e);
		}
	};
	this.description_changed = function () {
		var value = this.description;
		return value;
	};
	try {
		this.description = new SFString();
	} catch (e) {
		console.log('Problems setting description '+e);
		console.error('Problems setting description',e);
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
	this.set_displayMode = function (value) {
		try {
			this.proxy.displayMode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting displayMode '+e);
			console.error('Problems setting displayMode',e);
		}
	};
	this.displayMode_changed = function () {
		var value = this.displayMode;
		return value;
	};
	try {
		this.displayMode = new SFString();
	} catch (e) {
		console.log('Problems setting displayMode '+e);
		console.error('Problems setting displayMode',e);
	}
	this.set_setDisplayMode = function (value) {
		try {
			this.proxy.setDisplayMode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setDisplayMode '+e);
			console.error('Problems setting setDisplayMode',e);
		}
	};
	this.setDisplayMode_changed = function () {
		var value = this.setDisplayMode;
		return value;
	};
	try {
		this.setDisplayMode = new SFString();
	} catch (e) {
		console.log('Problems setting setDisplayMode '+e);
		console.error('Problems setting setDisplayMode',e);
	}
	this.set_displayAllToggleArmed = function (value) {
		try {
			this.proxy.displayAllToggleArmed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting displayAllToggleArmed '+e);
			console.error('Problems setting displayAllToggleArmed',e);
		}
	};
	this.displayAllToggleArmed_changed = function () {
		var value = this.displayAllToggleArmed;
		return value;
	};
	try {
		this.displayAllToggleArmed = new SFBool(false);
	} catch (e) {
		console.log('Problems setting displayAllToggleArmed '+e);
		console.error('Problems setting displayAllToggleArmed',e);
	}
	this.set_topLayerToggleArmed = function (value) {
		try {
			this.proxy.topLayerToggleArmed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting topLayerToggleArmed '+e);
			console.error('Problems setting topLayerToggleArmed',e);
		}
	};
	this.topLayerToggleArmed_changed = function () {
		var value = this.topLayerToggleArmed;
		return value;
	};
	try {
		this.topLayerToggleArmed = new SFBool(false);
	} catch (e) {
		console.log('Problems setting topLayerToggleArmed '+e);
		console.error('Problems setting topLayerToggleArmed',e);
	}
	this.set_midLayerToggleArmed = function (value) {
		try {
			this.proxy.midLayerToggleArmed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting midLayerToggleArmed '+e);
			console.error('Problems setting midLayerToggleArmed',e);
		}
	};
	this.midLayerToggleArmed_changed = function () {
		var value = this.midLayerToggleArmed;
		return value;
	};
	try {
		this.midLayerToggleArmed = new SFBool(false);
	} catch (e) {
		console.log('Problems setting midLayerToggleArmed '+e);
		console.error('Problems setting midLayerToggleArmed',e);
	}
	this.set_bottomLayerToggleArmed = function (value) {
		try {
			this.proxy.bottomLayerToggleArmed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting bottomLayerToggleArmed '+e);
			console.error('Problems setting bottomLayerToggleArmed',e);
		}
	};
	this.bottomLayerToggleArmed_changed = function () {
		var value = this.bottomLayerToggleArmed;
		return value;
	};
	try {
		this.bottomLayerToggleArmed = new SFBool(false);
	} catch (e) {
		console.log('Problems setting bottomLayerToggleArmed '+e);
		console.error('Problems setting bottomLayerToggleArmed',e);
	}
	this.set_displayAllToggleEnabled = function (value) {
		try {
			this.proxy.displayAllToggleEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting displayAllToggleEnabled '+e);
			console.error('Problems setting displayAllToggleEnabled',e);
		}
	};
	this.displayAllToggleEnabled_changed = function () {
		var value = this.displayAllToggleEnabled;
		return value;
	};
	try {
		this.displayAllToggleEnabled = new SFBool();
	} catch (e) {
		console.log('Problems setting displayAllToggleEnabled '+e);
		console.error('Problems setting displayAllToggleEnabled',e);
	}
	this.set_topLayerToggleEnabled = function (value) {
		try {
			this.proxy.topLayerToggleEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting topLayerToggleEnabled '+e);
			console.error('Problems setting topLayerToggleEnabled',e);
		}
	};
	this.topLayerToggleEnabled_changed = function () {
		var value = this.topLayerToggleEnabled;
		return value;
	};
	try {
		this.topLayerToggleEnabled = new SFBool();
	} catch (e) {
		console.log('Problems setting topLayerToggleEnabled '+e);
		console.error('Problems setting topLayerToggleEnabled',e);
	}
	this.set_midLayerToggleEnabled = function (value) {
		try {
			this.proxy.midLayerToggleEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting midLayerToggleEnabled '+e);
			console.error('Problems setting midLayerToggleEnabled',e);
		}
	};
	this.midLayerToggleEnabled_changed = function () {
		var value = this.midLayerToggleEnabled;
		return value;
	};
	try {
		this.midLayerToggleEnabled = new SFBool();
	} catch (e) {
		console.log('Problems setting midLayerToggleEnabled '+e);
		console.error('Problems setting midLayerToggleEnabled',e);
	}
	this.set_bottomLayerToggleEnabled = function (value) {
		try {
			this.proxy.bottomLayerToggleEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting bottomLayerToggleEnabled '+e);
			console.error('Problems setting bottomLayerToggleEnabled',e);
		}
	};
	this.bottomLayerToggleEnabled_changed = function () {
		var value = this.bottomLayerToggleEnabled;
		return value;
	};
	try {
		this.bottomLayerToggleEnabled = new SFBool();
	} catch (e) {
		console.log('Problems setting bottomLayerToggleEnabled '+e);
		console.error('Problems setting bottomLayerToggleEnabled',e);
	}
	this.set_displayAllColor = function (value) {
		try {
			this.proxy.displayAllColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting displayAllColor '+e);
			console.error('Problems setting displayAllColor',e);
		}
	};
	this.displayAllColor_changed = function () {
		var value = this.displayAllColor;
		return value;
	};
	try {
		this.displayAllColor = new SFColor();
	} catch (e) {
		console.log('Problems setting displayAllColor '+e);
		console.error('Problems setting displayAllColor',e);
	}
	this.set_movementControlSwitchSelection = function (value) {
		try {
			this.proxy.movementControlSwitchSelection = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting movementControlSwitchSelection '+e);
			console.error('Problems setting movementControlSwitchSelection',e);
		}
	};
	this.movementControlSwitchSelection_changed = function () {
		var value = this.movementControlSwitchSelection;
		return value;
	};
	try {
		this.movementControlSwitchSelection = new SFInt32();
	} catch (e) {
		console.log('Problems setting movementControlSwitchSelection '+e);
		console.error('Problems setting movementControlSwitchSelection',e);
	}
	this.set_displayControlSwitchSelection = function (value) {
		try {
			this.proxy.displayControlSwitchSelection = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting displayControlSwitchSelection '+e);
			console.error('Problems setting displayControlSwitchSelection',e);
		}
	};
	this.displayControlSwitchSelection_changed = function () {
		var value = this.displayControlSwitchSelection;
		return value;
	};
	try {
		this.displayControlSwitchSelection = new SFInt32();
	} catch (e) {
		console.log('Problems setting displayControlSwitchSelection '+e);
		console.error('Problems setting displayControlSwitchSelection',e);
	}
	this.set_topLayerSwitchSelection = function (value) {
		try {
			this.proxy.topLayerSwitchSelection = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting topLayerSwitchSelection '+e);
			console.error('Problems setting topLayerSwitchSelection',e);
		}
	};
	this.topLayerSwitchSelection_changed = function () {
		var value = this.topLayerSwitchSelection;
		return value;
	};
	try {
		this.topLayerSwitchSelection = new SFInt32();
	} catch (e) {
		console.log('Problems setting topLayerSwitchSelection '+e);
		console.error('Problems setting topLayerSwitchSelection',e);
	}
	this.set_midLayerSwitchSelection = function (value) {
		try {
			this.proxy.midLayerSwitchSelection = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting midLayerSwitchSelection '+e);
			console.error('Problems setting midLayerSwitchSelection',e);
		}
	};
	this.midLayerSwitchSelection_changed = function () {
		var value = this.midLayerSwitchSelection;
		return value;
	};
	try {
		this.midLayerSwitchSelection = new SFInt32();
	} catch (e) {
		console.log('Problems setting midLayerSwitchSelection '+e);
		console.error('Problems setting midLayerSwitchSelection',e);
	}
	this.set_bottomLayerSwitchSelection = function (value) {
		try {
			this.proxy.bottomLayerSwitchSelection = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting bottomLayerSwitchSelection '+e);
			console.error('Problems setting bottomLayerSwitchSelection',e);
		}
	};
	this.bottomLayerSwitchSelection_changed = function () {
		var value = this.bottomLayerSwitchSelection;
		return value;
	};
	try {
		this.bottomLayerSwitchSelection = new SFInt32();
	} catch (e) {
		console.log('Problems setting bottomLayerSwitchSelection '+e);
		console.error('Problems setting bottomLayerSwitchSelection',e);
	}


ecmascript:

	this.initialize = function ()
{
	this.proxy.setDisplayMode(this.proxy.displayMode, -1);
};

	this.tracePrint = function (text)
{
	if (this.proxy.traceEnabled) console.error ('[DvdController ' + this.proxy.description + ' DisplayLayerScript] ' + text + '');
};

	this.setDisplayMode = function (value, timeStamp)
{
	// javascript switch statement is convenient but not consistently supported, so test the old-fashioned way:

        if (this.proxy.displayMode == 'ALL')
	{
            this.proxy.movementControlSwitchSelection = 0; //AllLayer
            this.proxy.displayControlSwitchSelection = 0;  //DisplayAllLayer
            this.proxy.displayAllColor = new SFColor(0, 0.35, 0.8);
            this.proxy.topLayerSwitchSelection = 0;
            this.proxy.midLayerSwitchSelection = 0;
            this.proxy.bottomLayerSwitchSelection = 0;
	}
        else if (this.proxy.displayMode == 'DIS_ONLY')
        {
            this.proxy.movementControlSwitchSelection = 2; //OneLayer
            this.proxy.displayControlSwitchSelection = 2;  //DisplayOneLayer
            this.proxy.displayAllColor = new SFColor(1, 0, 0);
            this.proxy.topLayerSwitchSelection = 1;        //DisplayNoneTop
            this.proxy.midLayerSwitchSelection = 2;        //DisplayNoneMid
            this.proxy.bottomLayerSwitchSelection = 1;     //DisplayDISModeBottom
	}
        else if (this.proxy.displayMode == 'PLAYBACK_ONLY')
        {
            this.proxy.movementControlSwitchSelection = 2; //OneLayer
            this.proxy.displayControlSwitchSelection = 2;  //DisplayOneLayer
            this.proxy.displayAllColor = new SFColor(1, 0, 0);
            this.proxy.topLayerSwitchSelection = 1;        //DisplayNoneTop
            this.proxy.midLayerSwitchSelection = 2;        //DisplayNoneMid
            this.proxy.bottomLayerSwitchSelection = 2;     //DisplayPlaybackButtonsBottom
	}
        else if (this.proxy.displayMode == 'SLIDER_ONLY')
        {
            this.proxy.movementControlSwitchSelection = 2; //OneLayer
            this.proxy.displayControlSwitchSelection = 2;  //DisplayOneLayer
            this.proxy.displayAllColor = new SFColor(1, 0, 0);
            this.proxy.topLayerSwitchSelection = 1;        //DisplayNoneTop
            this.proxy.midLayerSwitchSelection = 2;        //DisplayNoneMid
            this.proxy.bottomLayerSwitchSelection = 0;     //DiaplaySliderBottom
	}
        else if (this.proxy.displayMode == 'DIS_PLAYBACK')
        {
            this.proxy.movementControlSwitchSelection = 1; //TwoLayer
            this.proxy.displayControlSwitchSelection = 1;  //DisplayTwoLayer
            this.proxy.displayAllColor = new SFColor(1, 0, 0);
            this.proxy.topLayerSwitchSelection = 1;        //DisplayNoneTop
            this.proxy.midLayerSwitchSelection = 1;        //DisplayDISModeMid
            this.proxy.bottomLayerSwitchSelection = 2;     //DisplayPlaybackButtonsBottom
	}
        else if (this.proxy.displayMode == 'DIS_SLIDER')
        {
            this.proxy.movementControlSwitchSelection = 1; //TwoLayer
            this.proxy.displayControlSwitchSelection = 1;  //DisplayTwoLayer
            this.proxy.displayAllColor = new SFColor(1, 0, 0);
            this.proxy.topLayerSwitchSelection = 1;        //DisplayNoneTop
            this.proxy.midLayerSwitchSelection = 1;        //DisplayDISModeMid
            this.proxy.bottomLayerSwitchSelection = 0;     //DisplaySliderBottom
	}
        else if (this.proxy.displayMode == 'PLAYBACK_SLIDER')
        {
            this.proxy.movementControlSwitchSelection = 1; //TwoLayer
            this.proxy.displayControlSwitchSelection = 1;  //DisplayTwoLayer
            this.proxy.displayAllColor = new SFColor(1, 0, 0);
            this.proxy.topLayerSwitchSelection = 1;        //DisplayNoneTop
            this.proxy.midLayerSwitchSelection = 0;        //DisplayPlaybackButtosMid
            this.proxy.bottomLayerSwitchSelection = 0;     //DisplaySliderBottom
	}
        else
        {
            if (this.proxy.displayMode != 'NONE')
                console.error ('Unknown value for this.proxy.displayMode=' + this.proxy.displayMode + ', assuming value of NONE');

            this.proxy.movementControlSwitchSelection = 2; //OneLayer
            this.proxy.displayControlSwitchSelection = 3;  //DisplayNoLayer
            this.proxy.displayAllColor = new SFColor(1, 0, 0);
            this.proxy.topLayerSwitchSelection = 1;        //DisplayNoneTop
            this.proxy.midLayerSwitchSelection = 2;        //DisplayNoneMid
            this.proxy.bottomLayerSwitchSelection = 3;     //DisplayNoneBottom
	}
}
;

	this.displayAllToggleEnabled = function (value, timeStamp) {
	if (this.proxy.displayAllToggleArmed == false)
	{
		this.proxy.displayAllToggleArmed = true;
		if (this.proxy.displayControlSwitchSelection == 0)
		{
			this.proxy.movementControlSwitchSelection = 2;
			this.proxy.displayControlSwitchSelection = 3;
			this.proxy.displayAllColor = new SFColor(1, 0, 0);
			this.proxy.topLayerSwitchSelection = 1;
			this.proxy.midLayerSwitchSelection = 2;
			this.proxy.bottomLayerSwitchSelection = 3;
			this.tracePrint('this.proxy.movementControlSwitchSelection =' + this.proxy.movementControlSwitchSelection);
			this.tracePrint('this.proxy.displayControlSwitchSelection =' + this.proxy.displayControlSwitchSelection);
			this.tracePrint('this.proxy.topLayerSwitchSelection =' + this.proxy.topLayerSwitchSelection);
			this.tracePrint('this.proxy.midLayerSwitchSelection =' + this.proxy.midLayerSwitchSelection);
			this.tracePrint('this.proxy.bottomLayerSwitchSelection =' + this.proxy.bottomLayerSwitchSelection);
		}
		else //this.proxy.displayControlSwitchSelection not 0
		{
			this.proxy.movementControlSwitchSelection = 0;
			this.proxy.displayControlSwitchSelection = 0;
			this.proxy.displayAllColor = new SFColor(0, 0.35, 0.8);
			this.proxy.topLayerSwitchSelection = 0;
			this.proxy.midLayerSwitchSelection = 0;
			this.proxy.bottomLayerSwitchSelection = 0;
			this.tracePrint('this.proxy.movementControlSwitchSelection =' + this.proxy.movementControlSwitchSelection);
			this.tracePrint('this.proxy.displayControlSwitchSelection =' + this.proxy.displayControlSwitchSelection);
			this.tracePrint('this.proxy.topLayerSwitchSelection =' + this.proxy.topLayerSwitchSelection);
			this.tracePrint('this.proxy.midLayerSwitchSelection =' + this.proxy.midLayerSwitchSelection);
			this.tracePrint('this.proxy.bottomLayerSwitchSelection =' + this.proxy.bottomLayerSwitchSelection);
		}
	}
	else
	{
		this.proxy.displayAllToggleArmed = false;
		return;
	}
}
;

	this.topLayerToggleEnabled = function (value, timeStamp) {
	if (this.proxy.topLayerToggleArmed == false)
	{
		this.proxy.topLayerToggleArmed = true;
		this.proxy.displayControlSwitchSelection += 1;
		if (this.proxy.displayControlSwitchSelection == 3)
			this.proxy.movementControlSwitchSelection = 2;
		else
			this.proxy.movementControlSwitchSelection = this.proxy.displayControlSwitchSelection;
		this.proxy.displayAllColor = new SFColor(1, 0, 0);
		this.proxy.topLayerSwitchSelection = 1;
		this.tracePrint('this.proxy.movementControlSwitchSelection =' + this.proxy.movementControlSwitchSelection);
		this.tracePrint('this.proxy.displayControlSwitchSelection =' + this.proxy.displayControlSwitchSelection);
		this.tracePrint('this.proxy.topLayerSwitchSelection =' + this.proxy.topLayerSwitchSelection);
	}
	else
	{
		this.proxy.topLayerToggleArmed = false;
		return;
	}
}
;

	this.midLayerToggleEnabled = function (value, timeStamp) {
	if (this.proxy.midLayerToggleArmed == false)
	{
		this.proxy.midLayerToggleArmed = true;
		this.proxy.displayControlSwitchSelection += 1;
		if (this.proxy.displayControlSwitchSelection == 3)
			this.proxy.movementControlSwitchSelection = 2;
		else
			this.proxy.movementControlSwitchSelection = this.proxy.displayControlSwitchSelection;
		this.proxy.displayAllColor = new SFColor(1, 0, 0);
		if (this.proxy.topLayerSwitchSelection == 0)
		{
			this.proxy.topLayerSwitchSelection = 1;
			this.proxy.midLayerSwitchSelection = 1;
		}
		else
		{
			this.proxy.midLayerSwitchSelection = 2;
		}
		this.tracePrint('this.proxy.movementControlSwitchSelection =' + this.proxy.movementControlSwitchSelection);
		this.tracePrint('this.proxy.displayControlSwitchSelection =' + this.proxy.displayControlSwitchSelection);
		this.tracePrint('this.proxy.topLayerSwitchSelection =' + this.proxy.topLayerSwitchSelection);
		this.tracePrint('this.proxy.midLayerSwitchSelection =' + this.proxy.midLayerSwitchSelection);
	}
	else
	{
		this.proxy.midLayerToggleArmed = false;
		return;
	}
}
;

	this.bottomLayerToggleEnabled = function (value, timeStamp) {
	if (this.proxy.bottomLayerToggleArmed == false)
	{
		this.proxy.bottomLayerToggleArmed = true;
		this.proxy.displayControlSwitchSelection += 1;
		if (this.proxy.displayControlSwitchSelection == 3)
			this.proxy.movementControlSwitchSelection = 2;
		else
			this.proxy.movementControlSwitchSelection = this.proxy.displayControlSwitchSelection;
		this.proxy.displayAllColor = new SFColor(1, 0, 0);
		if (this.proxy.topLayerSwitchSelection == 0) //if top display animation mode selection
		{
			this.proxy.topLayerSwitchSelection = 1; //top display nothing
			this.proxy.midLayerSwitchSelection = 1; //mid display animation mode selection
			this.proxy.bottomLayerSwitchSelection = 2; //bottom display playback control buttons
		}
		else if (this.proxy.midLayerSwitchSelection == 0) //if mid display playback control buttons
		{
			//top display nothing implied
			this.proxy.midLayerSwitchSelection = 2; //mid display nothing
			this.proxy.bottomLayerSwitchSelection = 2; //bottom display playback control buttons
		}
		else if (this.proxy.midLayerSwitchSelection == 1) //if mid display animation mode selection
		{
			//top display nothing implied
			this.proxy.midLayerSwitchSelection = 2; //mid display nothing
			this.proxy.bottomLayerSwitchSelection = 1; //bottom display animation mode selection
		}
		else //if mid display nothing
		{
			//top display nothing implied
			//mid display nothing implied
			this.proxy.bottomLayerSwitchSelection = 3; //bottom display nothing
		}

		this.tracePrint('this.proxy.movementControlSwitchSelection =' + this.proxy.movementControlSwitchSelection);
		this.tracePrint('this.proxy.displayControlSwitchSelection =' + this.proxy.displayControlSwitchSelection);
		this.tracePrint('this.proxy.topLayerSwitchSelection =' + this.proxy.topLayerSwitchSelection);
		this.tracePrint('this.proxy.midLayerSwitchSelection =' + this.proxy.midLayerSwitchSelection);
		this.tracePrint('this.proxy.bottomLayerSwitchSelection =' + this.proxy.bottomLayerSwitchSelection);
	}
	else
	{
		this.proxy.bottomLayerToggleArmed = false;
		return;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] = function() {
	this.set_description = function (value) {
		try {
			this.proxy.description = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting description '+e);
			console.error('Problems setting description',e);
		}
	};
	this.description_changed = function () {
		var value = this.description;
		return value;
	};
	try {
		this.description = new SFString();
	} catch (e) {
		console.log('Problems setting description '+e);
		console.error('Problems setting description',e);
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
	this.set_buttonColor = function (value) {
		try {
			this.proxy.buttonColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting buttonColor '+e);
			console.error('Problems setting buttonColor',e);
		}
	};
	this.buttonColor_changed = function () {
		var value = this.buttonColor;
		return value;
	};
	try {
		this.buttonColor = new SFColor();
	} catch (e) {
		console.log('Problems setting buttonColor '+e);
		console.error('Problems setting buttonColor',e);
	}
	this.set_activeButtonColor = function (value) {
		try {
			this.proxy.activeButtonColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting activeButtonColor '+e);
			console.error('Problems setting activeButtonColor',e);
		}
	};
	this.activeButtonColor_changed = function () {
		var value = this.activeButtonColor;
		return value;
	};
	try {
		this.activeButtonColor = new SFColor();
	} catch (e) {
		console.log('Problems setting activeButtonColor '+e);
		console.error('Problems setting activeButtonColor',e);
	}
	this.set_labelColor = function (value) {
		try {
			this.proxy.labelColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting labelColor '+e);
			console.error('Problems setting labelColor',e);
		}
	};
	this.labelColor_changed = function () {
		var value = this.labelColor;
		return value;
	};
	try {
		this.labelColor = new SFColor();
	} catch (e) {
		console.log('Problems setting labelColor '+e);
		console.error('Problems setting labelColor',e);
	}
	this.set_activeLabelColor = function (value) {
		try {
			this.proxy.activeLabelColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting activeLabelColor '+e);
			console.error('Problems setting activeLabelColor',e);
		}
	};
	this.activeLabelColor_changed = function () {
		var value = this.activeLabelColor;
		return value;
	};
	try {
		this.activeLabelColor = new SFColor();
	} catch (e) {
		console.log('Problems setting activeLabelColor '+e);
		console.error('Problems setting activeLabelColor',e);
	}
	this.set_masterToggleEnabled = function (value) {
		try {
			this.proxy.masterToggleEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting masterToggleEnabled '+e);
			console.error('Problems setting masterToggleEnabled',e);
		}
	};
	this.masterToggleEnabled_changed = function () {
		var value = this.masterToggleEnabled;
		return value;
	};
	try {
		this.masterToggleEnabled = new SFBool();
	} catch (e) {
		console.log('Problems setting masterToggleEnabled '+e);
		console.error('Problems setting masterToggleEnabled',e);
	}
	this.set_remoteToggleEnabled = function (value) {
		try {
			this.proxy.remoteToggleEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting remoteToggleEnabled '+e);
			console.error('Problems setting remoteToggleEnabled',e);
		}
	};
	this.remoteToggleEnabled_changed = function () {
		var value = this.remoteToggleEnabled;
		return value;
	};
	try {
		this.remoteToggleEnabled = new SFBool();
	} catch (e) {
		console.log('Problems setting remoteToggleEnabled '+e);
		console.error('Problems setting remoteToggleEnabled',e);
	}
	this.set_localToggleEnabled = function (value) {
		try {
			this.proxy.localToggleEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting localToggleEnabled '+e);
			console.error('Problems setting localToggleEnabled',e);
		}
	};
	this.localToggleEnabled_changed = function () {
		var value = this.localToggleEnabled;
		return value;
	};
	try {
		this.localToggleEnabled = new SFBool();
	} catch (e) {
		console.log('Problems setting localToggleEnabled '+e);
		console.error('Problems setting localToggleEnabled',e);
	}
	this.set_masterButtonColor = function (value) {
		try {
			this.proxy.masterButtonColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting masterButtonColor '+e);
			console.error('Problems setting masterButtonColor',e);
		}
	};
	this.masterButtonColor_changed = function () {
		var value = this.masterButtonColor;
		return value;
	};
	try {
		this.masterButtonColor = new SFColor();
	} catch (e) {
		console.log('Problems setting masterButtonColor '+e);
		console.error('Problems setting masterButtonColor',e);
	}
	this.set_masterLabelColor = function (value) {
		try {
			this.proxy.masterLabelColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting masterLabelColor '+e);
			console.error('Problems setting masterLabelColor',e);
		}
	};
	this.masterLabelColor_changed = function () {
		var value = this.masterLabelColor;
		return value;
	};
	try {
		this.masterLabelColor = new SFColor();
	} catch (e) {
		console.log('Problems setting masterLabelColor '+e);
		console.error('Problems setting masterLabelColor',e);
	}
	this.set_remoteButtonColor = function (value) {
		try {
			this.proxy.remoteButtonColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting remoteButtonColor '+e);
			console.error('Problems setting remoteButtonColor',e);
		}
	};
	this.remoteButtonColor_changed = function () {
		var value = this.remoteButtonColor;
		return value;
	};
	try {
		this.remoteButtonColor = new SFColor();
	} catch (e) {
		console.log('Problems setting remoteButtonColor '+e);
		console.error('Problems setting remoteButtonColor',e);
	}
	this.set_remoteLabelColor = function (value) {
		try {
			this.proxy.remoteLabelColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting remoteLabelColor '+e);
			console.error('Problems setting remoteLabelColor',e);
		}
	};
	this.remoteLabelColor_changed = function () {
		var value = this.remoteLabelColor;
		return value;
	};
	try {
		this.remoteLabelColor = new SFColor();
	} catch (e) {
		console.log('Problems setting remoteLabelColor '+e);
		console.error('Problems setting remoteLabelColor',e);
	}
	this.set_localButtonColor = function (value) {
		try {
			this.proxy.localButtonColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting localButtonColor '+e);
			console.error('Problems setting localButtonColor',e);
		}
	};
	this.localButtonColor_changed = function () {
		var value = this.localButtonColor;
		return value;
	};
	try {
		this.localButtonColor = new SFColor();
	} catch (e) {
		console.log('Problems setting localButtonColor '+e);
		console.error('Problems setting localButtonColor',e);
	}
	this.set_localLabelColor = function (value) {
		try {
			this.proxy.localLabelColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting localLabelColor '+e);
			console.error('Problems setting localLabelColor',e);
		}
	};
	this.localLabelColor_changed = function () {
		var value = this.localLabelColor;
		return value;
	};
	try {
		this.localLabelColor = new SFColor();
	} catch (e) {
		console.log('Problems setting localLabelColor '+e);
		console.error('Problems setting localLabelColor',e);
	}
	this.set_isMaster = function (value) {
		try {
			this.proxy.isMaster = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isMaster '+e);
			console.error('Problems setting isMaster',e);
		}
	};
	this.isMaster_changed = function () {
		var value = this.isMaster;
		return value;
	};
	try {
		this.isMaster = new SFBool();
	} catch (e) {
		console.log('Problems setting isMaster '+e);
		console.error('Problems setting isMaster',e);
	}
	this.set_isRemote = function (value) {
		try {
			this.proxy.isRemote = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isRemote '+e);
			console.error('Problems setting isRemote',e);
		}
	};
	this.isRemote_changed = function () {
		var value = this.isRemote;
		return value;
	};
	try {
		this.isRemote = new SFBool();
	} catch (e) {
		console.log('Problems setting isRemote '+e);
		console.error('Problems setting isRemote',e);
	}
	this.set_isLocal = function (value) {
		try {
			this.proxy.isLocal = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isLocal '+e);
			console.error('Problems setting isLocal',e);
		}
	};
	this.isLocal_changed = function () {
		var value = this.isLocal;
		return value;
	};
	try {
		this.isLocal = new SFBool();
	} catch (e) {
		console.log('Problems setting isLocal '+e);
		console.error('Problems setting isLocal',e);
	}
	this.set_arePlaybackButtonsActive = function (value) {
		try {
			this.proxy.arePlaybackButtonsActive = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting arePlaybackButtonsActive '+e);
			console.error('Problems setting arePlaybackButtonsActive',e);
		}
	};
	this.arePlaybackButtonsActive_changed = function () {
		var value = this.arePlaybackButtonsActive;
		return value;
	};
	try {
		this.arePlaybackButtonsActive = new SFBool();
	} catch (e) {
		console.log('Problems setting arePlaybackButtonsActive '+e);
		console.error('Problems setting arePlaybackButtonsActive',e);
	}
	this.set_playbackButtonLabelColor = function (value) {
		try {
			this.proxy.playbackButtonLabelColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playbackButtonLabelColor '+e);
			console.error('Problems setting playbackButtonLabelColor',e);
		}
	};
	this.playbackButtonLabelColor_changed = function () {
		var value = this.playbackButtonLabelColor;
		return value;
	};
	try {
		this.playbackButtonLabelColor = new SFColor();
	} catch (e) {
		console.log('Problems setting playbackButtonLabelColor '+e);
		console.error('Problems setting playbackButtonLabelColor',e);
	}
	this.set_resetToStartEnabled = function (value) {
		try {
			this.proxy.resetToStartEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting resetToStartEnabled '+e);
			console.error('Problems setting resetToStartEnabled',e);
		}
	};
	this.resetToStartEnabled_changed = function () {
		var value = this.resetToStartEnabled;
		return value;
	};
	try {
		this.resetToStartEnabled = new SFBool();
	} catch (e) {
		console.log('Problems setting resetToStartEnabled '+e);
		console.error('Problems setting resetToStartEnabled',e);
	}


ecmascript:

	this.tracePrint = function (text)
{
	if (this.proxy.traceEnabled) console.error ('[DvdController ' + this.proxy.description + ' DISModeScript] ' + text + '');
}
;

	this.initialize = function ()
{
	this.proxy.masterButtonColor = this.proxy.buttonColor;
	this.proxy.remoteButtonColor = this.proxy.buttonColor;
	this.proxy.localButtonColor  = this.proxy.activeButtonColor;

	this.proxy.masterLabelColor = this.proxy.labelColor;
	this.proxy.remoteLabelColor = this.proxy.labelColor;
	this.proxy.localLabelColor  = this.proxy.activeLabelColor;

	this.proxy.isMaster = false;
	this.proxy.isRemote = false;
	this.proxy.isLocal  = true;
	this.proxy.arePlaybackButtonsActive = true;

	//set default mode
	this.proxy.localToggleEnabled(true, -1);
}
;

	this.masterToggleEnabled = function (value, timeStamp)
{
	this.proxy.masterButtonColor = this.proxy.activeButtonColor;
	this.proxy.remoteButtonColor = this.proxy.buttonColor;
	this.proxy.localButtonColor  = this.proxy.buttonColor;

	this.proxy.masterLabelColor = this.proxy.activeLabelColor;
	this.proxy.remoteLabelColor = this.proxy.labelColor;
	this.proxy.localLabelColor  = this.proxy.labelColor;

	this.proxy.isMaster = true;
	this.proxy.isRemote = false;
	this.proxy.isLocal  = false;

	if (!this.proxy.arePlaybackButtonsActive)
		this.proxy.playbackButtonLabelColor = this.proxy.labelColor;

	this.proxy.arePlaybackButtonsActive = true;
}
;

	this.remoteToggleEnabled = function (value, timeStamp)
{
	this.proxy.masterButtonColor = this.proxy.buttonColor;
	this.proxy.remoteButtonColor = this.proxy.activeButtonColor;
	this.proxy.localButtonColor  = this.proxy.buttonColor;

	this.proxy.masterLabelColor = this.proxy.labelColor;
	this.proxy.remoteLabelColor = this.proxy.activeLabelColor;
	this.proxy.localLabelColor  = this.proxy.labelColor;

	this.proxy.isMaster = false;
	this.proxy.isRemote = true;
	this.proxy.isLocal  = false;

	this.proxy.arePlaybackButtonsActive = false;
	this.proxy.playbackButtonLabelColor = this.proxy.labelColor;
	this.proxy.resetToStartEnabled = true;
}
;

	this.localToggleEnabled = function (value, timeStamp)
{
	this.proxy.masterButtonColor = this.proxy.buttonColor;
	this.proxy.remoteButtonColor = this.proxy.buttonColor;
	this.proxy.localButtonColor  = this.proxy.activeButtonColor;

	this.proxy.masterLabelColor = this.proxy.labelColor;
	this.proxy.remoteLabelColor = this.proxy.labelColor;
	this.proxy.localLabelColor  = this.proxy.activeLabelColor;

	this.proxy.isMaster = false;
	this.proxy.isRemote = false;
	this.proxy.isLocal  = true;

	if (!this.proxy.arePlaybackButtonsActive)
		this.proxy.playbackButtonLabelColor = this.proxy.labelColor;

	this.proxy.arePlaybackButtonsActive = true;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] = function() {
	this.set_description = function (value) {
		try {
			this.proxy.description = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting description '+e);
			console.error('Problems setting description',e);
		}
	};
	this.description_changed = function () {
		var value = this.description;
		return value;
	};
	try {
		this.description = new SFString();
	} catch (e) {
		console.log('Problems setting description '+e);
		console.error('Problems setting description',e);
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
	this.set_playEnabled = function (value) {
		try {
			this.proxy.playEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playEnabled '+e);
			console.error('Problems setting playEnabled',e);
		}
	};
	this.playEnabled_changed = function () {
		var value = this.playEnabled;
		return value;
	};
	try {
		this.playEnabled = new SFBool();
	} catch (e) {
		console.log('Problems setting playEnabled '+e);
		console.error('Problems setting playEnabled',e);
	}
	this.set_buttonColor = function (value) {
		try {
			this.proxy.buttonColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting buttonColor '+e);
			console.error('Problems setting buttonColor',e);
		}
	};
	this.buttonColor_changed = function () {
		var value = this.buttonColor;
		return value;
	};
	try {
		this.buttonColor = new SFColor();
	} catch (e) {
		console.log('Problems setting buttonColor '+e);
		console.error('Problems setting buttonColor',e);
	}
	this.set_activeButtonColor = function (value) {
		try {
			this.proxy.activeButtonColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting activeButtonColor '+e);
			console.error('Problems setting activeButtonColor',e);
		}
	};
	this.activeButtonColor_changed = function () {
		var value = this.activeButtonColor;
		return value;
	};
	try {
		this.activeButtonColor = new SFColor();
	} catch (e) {
		console.log('Problems setting activeButtonColor '+e);
		console.error('Problems setting activeButtonColor',e);
	}
	this.set_labelColor = function (value) {
		try {
			this.proxy.labelColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting labelColor '+e);
			console.error('Problems setting labelColor',e);
		}
	};
	this.labelColor_changed = function () {
		var value = this.labelColor;
		return value;
	};
	try {
		this.labelColor = new SFColor();
	} catch (e) {
		console.log('Problems setting labelColor '+e);
		console.error('Problems setting labelColor',e);
	}
	this.set_activeLabelColor = function (value) {
		try {
			this.proxy.activeLabelColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting activeLabelColor '+e);
			console.error('Problems setting activeLabelColor',e);
		}
	};
	this.activeLabelColor_changed = function () {
		var value = this.activeLabelColor;
		return value;
	};
	try {
		this.activeLabelColor = new SFColor();
	} catch (e) {
		console.log('Problems setting activeLabelColor '+e);
		console.error('Problems setting activeLabelColor',e);
	}
	this.set_isActive = function (value) {
		try {
			this.proxy.isActive = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isActive '+e);
			console.error('Problems setting isActive',e);
		}
	};
	this.isActive_changed = function () {
		var value = this.isActive;
		return value;
	};
	try {
		this.isActive = new SFBool(true);
	} catch (e) {
		console.log('Problems setting isActive '+e);
		console.error('Problems setting isActive',e);
	}
	this.set_setIsActive = function (value) {
		try {
			this.proxy.setIsActive = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setIsActive '+e);
			console.error('Problems setting setIsActive',e);
		}
	};
	this.setIsActive_changed = function () {
		var value = this.setIsActive;
		return value;
	};
	try {
		this.setIsActive = new SFBool();
	} catch (e) {
		console.log('Problems setting setIsActive '+e);
		console.error('Problems setting setIsActive',e);
	}
	this.set_resetToStartToggleArmed = function (value) {
		try {
			this.proxy.resetToStartToggleArmed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting resetToStartToggleArmed '+e);
			console.error('Problems setting resetToStartToggleArmed',e);
		}
	};
	this.resetToStartToggleArmed_changed = function () {
		var value = this.resetToStartToggleArmed;
		return value;
	};
	try {
		this.resetToStartToggleArmed = new SFBool(false);
	} catch (e) {
		console.log('Problems setting resetToStartToggleArmed '+e);
		console.error('Problems setting resetToStartToggleArmed',e);
	}
	this.set_fastRewindToggleArmed = function (value) {
		try {
			this.proxy.fastRewindToggleArmed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fastRewindToggleArmed '+e);
			console.error('Problems setting fastRewindToggleArmed',e);
		}
	};
	this.fastRewindToggleArmed_changed = function () {
		var value = this.fastRewindToggleArmed;
		return value;
	};
	try {
		this.fastRewindToggleArmed = new SFBool(false);
	} catch (e) {
		console.log('Problems setting fastRewindToggleArmed '+e);
		console.error('Problems setting fastRewindToggleArmed',e);
	}
	this.set_rewindToggleArmed = function (value) {
		try {
			this.proxy.rewindToggleArmed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rewindToggleArmed '+e);
			console.error('Problems setting rewindToggleArmed',e);
		}
	};
	this.rewindToggleArmed_changed = function () {
		var value = this.rewindToggleArmed;
		return value;
	};
	try {
		this.rewindToggleArmed = new SFBool(false);
	} catch (e) {
		console.log('Problems setting rewindToggleArmed '+e);
		console.error('Problems setting rewindToggleArmed',e);
	}
	this.set_pauseToggleArmed = function (value) {
		try {
			this.proxy.pauseToggleArmed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting pauseToggleArmed '+e);
			console.error('Problems setting pauseToggleArmed',e);
		}
	};
	this.pauseToggleArmed_changed = function () {
		var value = this.pauseToggleArmed;
		return value;
	};
	try {
		this.pauseToggleArmed = new SFBool(false);
	} catch (e) {
		console.log('Problems setting pauseToggleArmed '+e);
		console.error('Problems setting pauseToggleArmed',e);
	}
	this.set_playToggleArmed = function (value) {
		try {
			this.proxy.playToggleArmed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playToggleArmed '+e);
			console.error('Problems setting playToggleArmed',e);
		}
	};
	this.playToggleArmed_changed = function () {
		var value = this.playToggleArmed;
		return value;
	};
	try {
		this.playToggleArmed = new SFBool(false);
	} catch (e) {
		console.log('Problems setting playToggleArmed '+e);
		console.error('Problems setting playToggleArmed',e);
	}
	this.set_fastForwardToggleArmed = function (value) {
		try {
			this.proxy.fastForwardToggleArmed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fastForwardToggleArmed '+e);
			console.error('Problems setting fastForwardToggleArmed',e);
		}
	};
	this.fastForwardToggleArmed_changed = function () {
		var value = this.fastForwardToggleArmed;
		return value;
	};
	try {
		this.fastForwardToggleArmed = new SFBool(false);
	} catch (e) {
		console.log('Problems setting fastForwardToggleArmed '+e);
		console.error('Problems setting fastForwardToggleArmed',e);
	}
	this.set_resetToEndToggleArmed = function (value) {
		try {
			this.proxy.resetToEndToggleArmed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting resetToEndToggleArmed '+e);
			console.error('Problems setting resetToEndToggleArmed',e);
		}
	};
	this.resetToEndToggleArmed_changed = function () {
		var value = this.resetToEndToggleArmed;
		return value;
	};
	try {
		this.resetToEndToggleArmed = new SFBool(false);
	} catch (e) {
		console.log('Problems setting resetToEndToggleArmed '+e);
		console.error('Problems setting resetToEndToggleArmed',e);
	}
	this.set_resetToStartToggleEnabled = function (value) {
		try {
			this.proxy.resetToStartToggleEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting resetToStartToggleEnabled '+e);
			console.error('Problems setting resetToStartToggleEnabled',e);
		}
	};
	this.resetToStartToggleEnabled_changed = function () {
		var value = this.resetToStartToggleEnabled;
		return value;
	};
	try {
		this.resetToStartToggleEnabled = new SFBool();
	} catch (e) {
		console.log('Problems setting resetToStartToggleEnabled '+e);
		console.error('Problems setting resetToStartToggleEnabled',e);
	}
	this.set_fastRewindToggleEnabled = function (value) {
		try {
			this.proxy.fastRewindToggleEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fastRewindToggleEnabled '+e);
			console.error('Problems setting fastRewindToggleEnabled',e);
		}
	};
	this.fastRewindToggleEnabled_changed = function () {
		var value = this.fastRewindToggleEnabled;
		return value;
	};
	try {
		this.fastRewindToggleEnabled = new SFBool();
	} catch (e) {
		console.log('Problems setting fastRewindToggleEnabled '+e);
		console.error('Problems setting fastRewindToggleEnabled',e);
	}
	this.set_rewindToggleEnabled = function (value) {
		try {
			this.proxy.rewindToggleEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rewindToggleEnabled '+e);
			console.error('Problems setting rewindToggleEnabled',e);
		}
	};
	this.rewindToggleEnabled_changed = function () {
		var value = this.rewindToggleEnabled;
		return value;
	};
	try {
		this.rewindToggleEnabled = new SFBool();
	} catch (e) {
		console.log('Problems setting rewindToggleEnabled '+e);
		console.error('Problems setting rewindToggleEnabled',e);
	}
	this.set_pauseToggleEnabled = function (value) {
		try {
			this.proxy.pauseToggleEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting pauseToggleEnabled '+e);
			console.error('Problems setting pauseToggleEnabled',e);
		}
	};
	this.pauseToggleEnabled_changed = function () {
		var value = this.pauseToggleEnabled;
		return value;
	};
	try {
		this.pauseToggleEnabled = new SFBool();
	} catch (e) {
		console.log('Problems setting pauseToggleEnabled '+e);
		console.error('Problems setting pauseToggleEnabled',e);
	}
	this.set_playToggleEnabled = function (value) {
		try {
			this.proxy.playToggleEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playToggleEnabled '+e);
			console.error('Problems setting playToggleEnabled',e);
		}
	};
	this.playToggleEnabled_changed = function () {
		var value = this.playToggleEnabled;
		return value;
	};
	try {
		this.playToggleEnabled = new SFBool();
	} catch (e) {
		console.log('Problems setting playToggleEnabled '+e);
		console.error('Problems setting playToggleEnabled',e);
	}
	this.set_fastForwardToggleEnabled = function (value) {
		try {
			this.proxy.fastForwardToggleEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fastForwardToggleEnabled '+e);
			console.error('Problems setting fastForwardToggleEnabled',e);
		}
	};
	this.fastForwardToggleEnabled_changed = function () {
		var value = this.fastForwardToggleEnabled;
		return value;
	};
	try {
		this.fastForwardToggleEnabled = new SFBool();
	} catch (e) {
		console.log('Problems setting fastForwardToggleEnabled '+e);
		console.error('Problems setting fastForwardToggleEnabled',e);
	}
	this.set_resetToEndToggleEnabled = function (value) {
		try {
			this.proxy.resetToEndToggleEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting resetToEndToggleEnabled '+e);
			console.error('Problems setting resetToEndToggleEnabled',e);
		}
	};
	this.resetToEndToggleEnabled_changed = function () {
		var value = this.resetToEndToggleEnabled;
		return value;
	};
	try {
		this.resetToEndToggleEnabled = new SFBool();
	} catch (e) {
		console.log('Problems setting resetToEndToggleEnabled '+e);
		console.error('Problems setting resetToEndToggleEnabled',e);
	}
	this.set_resetToStartButtonColor = function (value) {
		try {
			this.proxy.resetToStartButtonColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting resetToStartButtonColor '+e);
			console.error('Problems setting resetToStartButtonColor',e);
		}
	};
	this.resetToStartButtonColor_changed = function () {
		var value = this.resetToStartButtonColor;
		return value;
	};
	try {
		this.resetToStartButtonColor = new SFColor();
	} catch (e) {
		console.log('Problems setting resetToStartButtonColor '+e);
		console.error('Problems setting resetToStartButtonColor',e);
	}
	this.set_resetToStartLabelColor = function (value) {
		try {
			this.proxy.resetToStartLabelColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting resetToStartLabelColor '+e);
			console.error('Problems setting resetToStartLabelColor',e);
		}
	};
	this.resetToStartLabelColor_changed = function () {
		var value = this.resetToStartLabelColor;
		return value;
	};
	try {
		this.resetToStartLabelColor = new SFColor();
	} catch (e) {
		console.log('Problems setting resetToStartLabelColor '+e);
		console.error('Problems setting resetToStartLabelColor',e);
	}
	this.set_fastRewindButtonColor = function (value) {
		try {
			this.proxy.fastRewindButtonColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fastRewindButtonColor '+e);
			console.error('Problems setting fastRewindButtonColor',e);
		}
	};
	this.fastRewindButtonColor_changed = function () {
		var value = this.fastRewindButtonColor;
		return value;
	};
	try {
		this.fastRewindButtonColor = new SFColor();
	} catch (e) {
		console.log('Problems setting fastRewindButtonColor '+e);
		console.error('Problems setting fastRewindButtonColor',e);
	}
	this.set_fastRewindLabelColor = function (value) {
		try {
			this.proxy.fastRewindLabelColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fastRewindLabelColor '+e);
			console.error('Problems setting fastRewindLabelColor',e);
		}
	};
	this.fastRewindLabelColor_changed = function () {
		var value = this.fastRewindLabelColor;
		return value;
	};
	try {
		this.fastRewindLabelColor = new SFColor();
	} catch (e) {
		console.log('Problems setting fastRewindLabelColor '+e);
		console.error('Problems setting fastRewindLabelColor',e);
	}
	this.set_rewindButtonColor = function (value) {
		try {
			this.proxy.rewindButtonColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rewindButtonColor '+e);
			console.error('Problems setting rewindButtonColor',e);
		}
	};
	this.rewindButtonColor_changed = function () {
		var value = this.rewindButtonColor;
		return value;
	};
	try {
		this.rewindButtonColor = new SFColor();
	} catch (e) {
		console.log('Problems setting rewindButtonColor '+e);
		console.error('Problems setting rewindButtonColor',e);
	}
	this.set_rewindLabelColor = function (value) {
		try {
			this.proxy.rewindLabelColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rewindLabelColor '+e);
			console.error('Problems setting rewindLabelColor',e);
		}
	};
	this.rewindLabelColor_changed = function () {
		var value = this.rewindLabelColor;
		return value;
	};
	try {
		this.rewindLabelColor = new SFColor();
	} catch (e) {
		console.log('Problems setting rewindLabelColor '+e);
		console.error('Problems setting rewindLabelColor',e);
	}
	this.set_pauseButtonColor = function (value) {
		try {
			this.proxy.pauseButtonColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting pauseButtonColor '+e);
			console.error('Problems setting pauseButtonColor',e);
		}
	};
	this.pauseButtonColor_changed = function () {
		var value = this.pauseButtonColor;
		return value;
	};
	try {
		this.pauseButtonColor = new SFColor();
	} catch (e) {
		console.log('Problems setting pauseButtonColor '+e);
		console.error('Problems setting pauseButtonColor',e);
	}
	this.set_pauseLabelColor = function (value) {
		try {
			this.proxy.pauseLabelColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting pauseLabelColor '+e);
			console.error('Problems setting pauseLabelColor',e);
		}
	};
	this.pauseLabelColor_changed = function () {
		var value = this.pauseLabelColor;
		return value;
	};
	try {
		this.pauseLabelColor = new SFColor();
	} catch (e) {
		console.log('Problems setting pauseLabelColor '+e);
		console.error('Problems setting pauseLabelColor',e);
	}
	this.set_playButtonColor = function (value) {
		try {
			this.proxy.playButtonColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playButtonColor '+e);
			console.error('Problems setting playButtonColor',e);
		}
	};
	this.playButtonColor_changed = function () {
		var value = this.playButtonColor;
		return value;
	};
	try {
		this.playButtonColor = new SFColor();
	} catch (e) {
		console.log('Problems setting playButtonColor '+e);
		console.error('Problems setting playButtonColor',e);
	}
	this.set_playLabelColor = function (value) {
		try {
			this.proxy.playLabelColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playLabelColor '+e);
			console.error('Problems setting playLabelColor',e);
		}
	};
	this.playLabelColor_changed = function () {
		var value = this.playLabelColor;
		return value;
	};
	try {
		this.playLabelColor = new SFColor();
	} catch (e) {
		console.log('Problems setting playLabelColor '+e);
		console.error('Problems setting playLabelColor',e);
	}
	this.set_fastForwardButtonColor = function (value) {
		try {
			this.proxy.fastForwardButtonColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fastForwardButtonColor '+e);
			console.error('Problems setting fastForwardButtonColor',e);
		}
	};
	this.fastForwardButtonColor_changed = function () {
		var value = this.fastForwardButtonColor;
		return value;
	};
	try {
		this.fastForwardButtonColor = new SFColor();
	} catch (e) {
		console.log('Problems setting fastForwardButtonColor '+e);
		console.error('Problems setting fastForwardButtonColor',e);
	}
	this.set_fastForwardLabelColor = function (value) {
		try {
			this.proxy.fastForwardLabelColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fastForwardLabelColor '+e);
			console.error('Problems setting fastForwardLabelColor',e);
		}
	};
	this.fastForwardLabelColor_changed = function () {
		var value = this.fastForwardLabelColor;
		return value;
	};
	try {
		this.fastForwardLabelColor = new SFColor();
	} catch (e) {
		console.log('Problems setting fastForwardLabelColor '+e);
		console.error('Problems setting fastForwardLabelColor',e);
	}
	this.set_resetToEndButtonColor = function (value) {
		try {
			this.proxy.resetToEndButtonColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting resetToEndButtonColor '+e);
			console.error('Problems setting resetToEndButtonColor',e);
		}
	};
	this.resetToEndButtonColor_changed = function () {
		var value = this.resetToEndButtonColor;
		return value;
	};
	try {
		this.resetToEndButtonColor = new SFColor();
	} catch (e) {
		console.log('Problems setting resetToEndButtonColor '+e);
		console.error('Problems setting resetToEndButtonColor',e);
	}
	this.set_resetToEndLabelColor = function (value) {
		try {
			this.proxy.resetToEndLabelColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting resetToEndLabelColor '+e);
			console.error('Problems setting resetToEndLabelColor',e);
		}
	};
	this.resetToEndLabelColor_changed = function () {
		var value = this.resetToEndLabelColor;
		return value;
	};
	try {
		this.resetToEndLabelColor = new SFColor();
	} catch (e) {
		console.log('Problems setting resetToEndLabelColor '+e);
		console.error('Problems setting resetToEndLabelColor',e);
	}
	this.set_isPaused = function (value) {
		try {
			this.proxy.isPaused = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isPaused '+e);
			console.error('Problems setting isPaused',e);
		}
	};
	this.isPaused_changed = function () {
		var value = this.isPaused;
		return value;
	};
	try {
		this.isPaused = new SFBool();
	} catch (e) {
		console.log('Problems setting isPaused '+e);
		console.error('Problems setting isPaused',e);
	}
	this.set_isRunning = function (value) {
		try {
			this.proxy.isRunning = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isRunning '+e);
			console.error('Problems setting isRunning',e);
		}
	};
	this.isRunning_changed = function () {
		var value = this.isRunning;
		return value;
	};
	try {
		this.isRunning = new SFBool();
	} catch (e) {
		console.log('Problems setting isRunning '+e);
		console.error('Problems setting isRunning',e);
	}
	this.set_resetToStartChanged = function (value) {
		try {
			this.proxy.resetToStartChanged = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting resetToStartChanged '+e);
			console.error('Problems setting resetToStartChanged',e);
		}
	};
	this.resetToStartChanged_changed = function () {
		var value = this.resetToStartChanged;
		return value;
	};
	try {
		this.resetToStartChanged = new SFBool();
	} catch (e) {
		console.log('Problems setting resetToStartChanged '+e);
		console.error('Problems setting resetToStartChanged',e);
	}
	this.set_fastRewindChanged = function (value) {
		try {
			this.proxy.fastRewindChanged = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fastRewindChanged '+e);
			console.error('Problems setting fastRewindChanged',e);
		}
	};
	this.fastRewindChanged_changed = function () {
		var value = this.fastRewindChanged;
		return value;
	};
	try {
		this.fastRewindChanged = new SFBool();
	} catch (e) {
		console.log('Problems setting fastRewindChanged '+e);
		console.error('Problems setting fastRewindChanged',e);
	}
	this.set_rewindChanged = function (value) {
		try {
			this.proxy.rewindChanged = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rewindChanged '+e);
			console.error('Problems setting rewindChanged',e);
		}
	};
	this.rewindChanged_changed = function () {
		var value = this.rewindChanged;
		return value;
	};
	try {
		this.rewindChanged = new SFBool();
	} catch (e) {
		console.log('Problems setting rewindChanged '+e);
		console.error('Problems setting rewindChanged',e);
	}
	this.set_pauseChanged = function (value) {
		try {
			this.proxy.pauseChanged = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting pauseChanged '+e);
			console.error('Problems setting pauseChanged',e);
		}
	};
	this.pauseChanged_changed = function () {
		var value = this.pauseChanged;
		return value;
	};
	try {
		this.pauseChanged = new SFBool();
	} catch (e) {
		console.log('Problems setting pauseChanged '+e);
		console.error('Problems setting pauseChanged',e);
	}
	this.set_playChanged = function (value) {
		try {
			this.proxy.playChanged = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playChanged '+e);
			console.error('Problems setting playChanged',e);
		}
	};
	this.playChanged_changed = function () {
		var value = this.playChanged;
		return value;
	};
	try {
		this.playChanged = new SFBool();
	} catch (e) {
		console.log('Problems setting playChanged '+e);
		console.error('Problems setting playChanged',e);
	}
	this.set_fastForwardChanged = function (value) {
		try {
			this.proxy.fastForwardChanged = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fastForwardChanged '+e);
			console.error('Problems setting fastForwardChanged',e);
		}
	};
	this.fastForwardChanged_changed = function () {
		var value = this.fastForwardChanged;
		return value;
	};
	try {
		this.fastForwardChanged = new SFBool();
	} catch (e) {
		console.log('Problems setting fastForwardChanged '+e);
		console.error('Problems setting fastForwardChanged',e);
	}
	this.set_resetToEndChanged = function (value) {
		try {
			this.proxy.resetToEndChanged = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting resetToEndChanged '+e);
			console.error('Problems setting resetToEndChanged',e);
		}
	};
	this.resetToEndChanged_changed = function () {
		var value = this.resetToEndChanged;
		return value;
	};
	try {
		this.resetToEndChanged = new SFBool();
	} catch (e) {
		console.log('Problems setting resetToEndChanged '+e);
		console.error('Problems setting resetToEndChanged',e);
	}


ecmascript:

	this.tracePrint = function (text)
{
	if (this.proxy.traceEnabled) console.error ('[DvdController ' + this.proxy.description + ' PlaybackControlScript] ' + text + '');
};

	this.TraceLabelColors = function ()
{
	if (this.proxy.traceEnabled == false) return;

	console.error ('	this.proxy.buttonColor=' + this.proxy.buttonColor.toString() + '');
	console.error ('	this.proxy.activeButtonColor=' + this.proxy.activeButtonColor.toString() + '');
	console.error ('	this.proxy.labelColor=' + this.proxy.labelColor.toString() + '');
	console.error ('	this.proxy.activeLabelColor=' + this.proxy.activeLabelColor.toString() + '');

	console.error ('	this.proxy.resetToStartLabelColor=' + this.proxy.resetToStartLabelColor.toString() + '');
	console.error ('	this.proxy.fastRewindLabelColor=' + this.proxy.fastRewindLabelColor.toString() + '');
	console.error ('	this.proxy.rewindLabelColor=' + this.proxy.rewindLabelColor.toString() + '');
	console.error ('	this.proxy.pauseLabelColor=' + this.proxy.pauseLabelColor.toString() + '');
	console.error ('	this.proxy.playLabelColor=' + this.proxy.playLabelColor.toString() + '');
	console.error ('	this.proxy.fastForwardLabelColor=' + this.proxy.fastForwardLabelColor.toString() + '');
	console.error ('	this.proxy.resetToEndLabelColor=' + this.proxy.resetToEndLabelColor.toString() + '');
};

	this.initialize = function ()
{
	this.tracePrint ('this.initialize() starting...');
	if (!this.proxy.playEnabled)
	{
		this.proxy.resetToStartButtonColor = this.proxy.buttonColor;
		this.proxy.fastRewindButtonColor   = this.proxy.buttonColor;
		this.proxy.rewindButtonColor       = this.proxy.buttonColor;
		this.proxy.pauseButtonColor        = this.proxy.activeButtonColor;
		this.proxy.playButtonColor         = this.proxy.buttonColor;
		this.proxy.fastForwardButtonColor  = this.proxy.buttonColor;
		this.proxy.resetToEndButtonColor   = this.proxy.buttonColor;

		this.proxy.resetToStartLabelColor  = this.proxy.labelColor;
		this.proxy.fastRewindLabelColor    = this.proxy.labelColor;
		this.proxy.rewindLabelColor        = this.proxy.labelColor;
		this.proxy.pauseLabelColor         = this.proxy.activeLabelColor;
		this.proxy.playLabelColor          = this.proxy.labelColor;
		this.proxy.fastForwardLabelColor   = this.proxy.labelColor;
		this.proxy.resetToEndLabelColor    = this.proxy.labelColor;

		this.proxy.isPaused = true;
		this.proxy.isRunning = false;
		this.TraceLabelColors ();
	}
	else //	this.proxy.playEnabled == true
	{
		this.proxy.playToggleEnabled(true, -1); // dummy timeStamp
		this.proxy.playToggleArmed = false;
	}
	this.tracePrint ('...initialize() complete');
};

	this.setIsActive = function (value, timeStamp)
{
	this.proxy.isActive = value;
};

	this.resetToStartToggleEnabled = function (value, timeStamp)
{
	if (value == false) return;
	this.tracePrint ('this.proxy.resetToStartToggleEnabled (' + value + ')' + ', this.proxy.resetToStartToggleArmed=' + this.proxy.resetToStartToggleArmed);

	if (!this.proxy.resetToStartToggleArmed)
	{
		this.proxy.resetToStartButtonColor = this.proxy.activeButtonColor;
		this.proxy.resetToStartLabelColor  = this.proxy.activeLabelColor;
		this.proxy.resetToStartToggleArmed = true;
		return;
	}
	this.proxy.isPaused  = true;
	this.proxy.isRunning = false;
	this.proxy.resetToStartChanged = true;

	if (!this.proxy.isActive) return;

	this.proxy.resetToStartButtonColor = this.proxy.activeButtonColor;
	this.proxy.fastRewindButtonColor   = this.proxy.buttonColor;
	this.proxy.rewindButtonColor       = this.proxy.buttonColor;
	this.proxy.pauseButtonColor        = this.proxy.buttonColor;
	this.proxy.playButtonColor         = this.proxy.buttonColor;
	this.proxy.fastForwardButtonColor  = this.proxy.buttonColor;
	this.proxy.resetToEndButtonColor   = this.proxy.buttonColor;

	this.proxy.resetToStartLabelColor = this.proxy.activeLabelColor;
	this.proxy.fastRewindLabelColor   = this.proxy.labelColor;
	this.proxy.rewindLabelColor       = this.proxy.labelColor;
	this.proxy.pauseLabelColor        = this.proxy.labelColor;
	this.proxy.playLabelColor         = this.proxy.labelColor;
	this.proxy.fastForwardLabelColor  = this.proxy.labelColor;
	this.proxy.resetToEndLabelColor   = this.proxy.labelColor;

	this.TraceLabelColors ();
};

	this.fastRewindToggleEnabled = function (value, timeStamp)
{
	if (value == false) return;
	this.tracePrint ('this.proxy.fastRewindToggleEnabled (' + value + ')' + ', this.proxy.fastRewindToggleArmed=' + this.proxy.fastRewindToggleArmed);

	if (this.proxy.fastRewindToggleArmed)
	{
		this.proxy.fastRewindToggleArmed = false;
		return;
	}
	this.proxy.isPaused  = true;
	this.proxy.isRunning = false;
	this.proxy.fastRewindChanged = true;

	if (!this.proxy.isActive) return;

	this.proxy.resetToStartButtonColor = this.proxy.buttonColor;
	this.proxy.fastRewindButtonColor   = this.proxy.activeButtonColor;
	this.proxy.rewindButtonColor       = this.proxy.buttonColor;
	this.proxy.pauseButtonColor        = this.proxy.buttonColor;
	this.proxy.playButtonColor         = this.proxy.buttonColor;
	this.proxy.fastForwardButtonColor  = this.proxy.buttonColor;
	this.proxy.resetToEndButtonColor   = this.proxy.buttonColor;

	this.proxy.resetToStartLabelColor = this.proxy.labelColor;
	this.proxy.fastRewindLabelColor   = this.proxy.activeLabelColor;
	this.proxy.rewindLabelColor       = this.proxy.labelColor;
	this.proxy.pauseLabelColor        = this.proxy.labelColor;
	this.proxy.playLabelColor         = this.proxy.labelColor;
	this.proxy.fastForwardLabelColor  = this.proxy.labelColor;
	this.proxy.resetToEndLabelColor   = this.proxy.labelColor;

	this.TraceLabelColors ();
}
;

	this.rewindToggleEnabled = function (value, timeStamp)
{
	if (value == false) return;
	this.tracePrint ('this.proxy.rewindToggleEnabled (' + value + ')' + ', this.proxy.rewindToggleArmed=' + this.proxy.rewindToggleArmed);

	if (this.proxy.rewindToggleArmed)
	{
		this.proxy.rewindToggleArmed = false;
		return;
	}
	this.proxy.isPaused  = true;
	this.proxy.isRunning = false;
	this.proxy.rewindChanged = true;

	if (!this.proxy.isActive) return;

	this.proxy.resetToStartButtonColor = this.proxy.buttonColor;
	this.proxy.fastRewindButtonColor   = this.proxy.buttonColor;
	this.proxy.rewindButtonColor       = this.proxy.activeButtonColor;
	this.proxy.pauseButtonColor        = this.proxy.buttonColor;
	this.proxy.playButtonColor         = this.proxy.buttonColor;
	this.proxy.fastForwardButtonColor  = this.proxy.buttonColor;
	this.proxy.resetToEndButtonColor   = this.proxy.buttonColor;

	this.proxy.resetToStartLabelColor = this.proxy.labelColor;
	this.proxy.fastRewindLabelColor   = this.proxy.labelColor;
	this.proxy.rewindLabelColor       = this.proxy.activeLabelColor;
	this.proxy.pauseLabelColor        = this.proxy.labelColor;
	this.proxy.playLabelColor         = this.proxy.labelColor;
	this.proxy.fastForwardLabelColor  = this.proxy.labelColor;
	this.proxy.resetToEndLabelColor   = this.proxy.labelColor;

	this.TraceLabelColors ();
}
;

	this.pauseToggleEnabled = function (value, timeStamp)
{
	if (value == false) return;
	this.tracePrint ('this.proxy.pauseToggleEnabled (' + value + ')' + ', this.proxy.pauseToggleArmed=' + this.proxy.pauseToggleArmed);

	if (this.proxy.pauseToggleArmed)
	{
		this.proxy.pauseToggleArmed = false;
		return;
	}
	this.proxy.isPaused  = true;
	this.proxy.isRunning = false;
	this.proxy.pauseChanged = true;

	if (!this.proxy.isActive) return;

	this.proxy.resetToStartButtonColor = this.proxy.buttonColor;
	this.proxy.fastRewindButtonColor   = this.proxy.buttonColor;
	this.proxy.rewindButtonColor       = this.proxy.buttonColor;
	this.proxy.pauseButtonColor        = this.proxy.activeButtonColor;
	this.proxy.playButtonColor         = this.proxy.buttonColor;
	this.proxy.fastForwardButtonColor  = this.proxy.buttonColor;
	this.proxy.resetToEndButtonColor   = this.proxy.buttonColor;

	this.proxy.resetToStartLabelColor = this.proxy.labelColor;
	this.proxy.fastRewindLabelColor   = this.proxy.labelColor;
	this.proxy.rewindLabelColor       = this.proxy.labelColor;
	this.proxy.pauseLabelColor        = this.proxy.activeLabelColor;
	this.proxy.playLabelColor         = this.proxy.labelColor;
	this.proxy.fastForwardLabelColor  = this.proxy.labelColor;
	this.proxy.resetToEndLabelColor   = this.proxy.labelColor;

	this.TraceLabelColors ();
}
;

	this.playToggleEnabled = function (value, timeStamp)
{
	if (value == false) return;
	this.tracePrint ('this.proxy.playToggleEnabled (' + value + ')' + ', this.proxy.pauseToggleArmed=' + this.proxy.playToggleArmed);

	if (this.proxy.playToggleArmed)
	{
		this.proxy.playToggleArmed = false;
		return;
	}
	this.proxy.isPaused  = false;
	this.proxy.isRunning = true;
	this.proxy.playChanged = true;

	if (!this.proxy.isActive) return;

	this.proxy.resetToStartButtonColor = this.proxy.buttonColor;
	this.proxy.fastRewindButtonColor   = this.proxy.buttonColor;
	this.proxy.rewindButtonColor       = this.proxy.buttonColor;
	this.proxy.pauseButtonColor        = this.proxy.buttonColor;
	this.proxy.playButtonColor         = this.proxy.activeButtonColor;
	this.proxy.fastForwardButtonColor  = this.proxy.buttonColor;
	this.proxy.resetToEndButtonColor   = this.proxy.buttonColor;

	this.proxy.resetToStartLabelColor = this.proxy.labelColor;
	this.proxy.fastRewindLabelColor   = this.proxy.labelColor;
	this.proxy.rewindLabelColor       = this.proxy.labelColor;
	this.proxy.pauseLabelColor        = this.proxy.labelColor;
	this.proxy.playLabelColor         = this.proxy.activeLabelColor;
	this.proxy.fastForwardLabelColor  = this.proxy.labelColor;
	this.proxy.resetToEndLabelColor   = this.proxy.labelColor;

	this.TraceLabelColors ();
}
;

	this.fastForwardToggleEnabled = function (value, timeStamp)
{
	if (value == false) return;
	this.tracePrint ('this.proxy.fastForwardToggleEnabled (' + value + ')' + ', this.proxy.fastForwardToggleArmed=' + this.proxy.fastForwardToggleArmed);

	if (this.proxy.fastForwardToggleArmed)
	{
		this.proxy.fastForwardToggleArmed = false;
		return;
	}
	this.proxy.isPaused  = false;
	this.proxy.isRunning = true;
	this.proxy.fastForwardChanged = true;

	if (!this.proxy.isActive) return;

	this.proxy.resetToStartButtonColor = this.proxy.buttonColor;
	this.proxy.fastRewindButtonColor   = this.proxy.buttonColor;
	this.proxy.rewindButtonColor       = this.proxy.buttonColor;
	this.proxy.pauseButtonColor        = this.proxy.buttonColor;
	this.proxy.playButtonColor         = this.proxy.buttonColor;
	this.proxy.fastForwardButtonColor  = this.proxy.activeButtonColor;
	this.proxy.resetToEndButtonColor   = this.proxy.buttonColor;

	this.proxy.resetToStartLabelColor = this.proxy.labelColor;
	this.proxy.fastRewindLabelColor   = this.proxy.labelColor;
	this.proxy.rewindLabelColor       = this.proxy.labelColor;
	this.proxy.pauseLabelColor        = this.proxy.labelColor;
	this.proxy.playLabelColor         = this.proxy.labelColor;
	this.proxy.fastForwardLabelColor  = this.proxy.activeLabelColor;
	this.proxy.resetToEndLabelColor   = this.proxy.labelColor;

	this.TraceLabelColors ();
}
;

	this.resetToEndToggleEnabled = function (value, timeStamp)
{
	if (value == false) return;
	this.tracePrint ('this.proxy.resetToEndToggleEnabled (' + value + ')' + ', this.proxy.resetToEndToggleArmed=' + this.proxy.resetToEndToggleArmed);

	if (!this.proxy.resetToEndToggleArmed)
	{
		this.proxy.resetToEndButtonColor = this.proxy.activeButtonColor;
		this.proxy.resetToEndLabelColor = this.proxy.activeLabelColor;
		this.proxy.resetToEndToggleArmed = true;
		return;
	}
	this.proxy.isPaused  = true;
	this.proxy.isRunning = false;
	this.proxy.resetToEndChanged = true;

	if (!this.proxy.isActive) return;

	this.proxy.resetToStartButtonColor = this.proxy.buttonColor;
	this.proxy.fastRewindButtonColor   = this.proxy.buttonColor;
	this.proxy.rewindButtonColor       = this.proxy.buttonColor;
	this.proxy.pauseButtonColor        = this.proxy.buttonColor;
	this.proxy.playButtonColor         = this.proxy.buttonColor;
	this.proxy.fastForwardButtonColor  = this.proxy.buttonColor;
	this.proxy.resetToEndButtonColor   = this.proxy.activeButtonColor;

	this.proxy.resetToStartLabelColor = this.proxy.labelColor;
	this.proxy.fastRewindLabelColor   = this.proxy.labelColor;
	this.proxy.rewindLabelColor       = this.proxy.labelColor;
	this.proxy.pauseLabelColor        = this.proxy.labelColor;
	this.proxy.playLabelColor         = this.proxy.labelColor;
	this.proxy.fastForwardLabelColor  = this.proxy.labelColor;
	this.proxy.resetToEndLabelColor   = this.proxy.activeLabelColor;

	this.TraceLabelColors ();
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'] = function() {
	this.set_description = function (value) {
		try {
			this.proxy.description = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting description '+e);
			console.error('Problems setting description',e);
		}
	};
	this.description_changed = function () {
		var value = this.description;
		return value;
	};
	try {
		this.description = new SFString();
	} catch (e) {
		console.log('Problems setting description '+e);
		console.error('Problems setting description',e);
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
	this.set_duration = function (value) {
		try {
			this.proxy.duration = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting duration '+e);
			console.error('Problems setting duration',e);
		}
	};
	this.duration_changed = function () {
		var value = this.duration;
		return value;
	};
	try {
		this.duration = new SFTime();
	} catch (e) {
		console.log('Problems setting duration '+e);
		console.error('Problems setting duration',e);
	}
	this.set_secondsElapsed = function (value) {
		try {
			this.proxy.secondsElapsed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting secondsElapsed '+e);
			console.error('Problems setting secondsElapsed',e);
		}
	};
	this.secondsElapsed_changed = function () {
		var value = this.secondsElapsed;
		return value;
	};
	try {
		this.secondsElapsed = new SFTime(0);
	} catch (e) {
		console.log('Problems setting secondsElapsed '+e);
		console.error('Problems setting secondsElapsed',e);
	}
	this.set_setSecondsElapsed = function (value) {
		try {
			this.proxy.setSecondsElapsed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setSecondsElapsed '+e);
			console.error('Problems setting setSecondsElapsed',e);
		}
	};
	this.setSecondsElapsed_changed = function () {
		var value = this.setSecondsElapsed;
		return value;
	};
	try {
		this.setSecondsElapsed = new SFTime();
	} catch (e) {
		console.log('Problems setting setSecondsElapsed '+e);
		console.error('Problems setting setSecondsElapsed',e);
	}
	this.set_durationOutput = function (value) {
		try {
			this.proxy.durationOutput = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting durationOutput '+e);
			console.error('Problems setting durationOutput',e);
		}
	};
	this.durationOutput_changed = function () {
		var value = this.durationOutput;
		return value;
	};
	try {
		this.durationOutput = new MFString();
	} catch (e) {
		console.log('Problems setting durationOutput '+e);
		console.error('Problems setting durationOutput',e);
	}
	this.set_secondsElapsedOutput = function (value) {
		try {
			this.proxy.secondsElapsedOutput = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting secondsElapsedOutput '+e);
			console.error('Problems setting secondsElapsedOutput',e);
		}
	};
	this.secondsElapsedOutput_changed = function () {
		var value = this.secondsElapsedOutput;
		return value;
	};
	try {
		this.secondsElapsedOutput = new MFString();
	} catch (e) {
		console.log('Problems setting secondsElapsedOutput '+e);
		console.error('Problems setting secondsElapsedOutput',e);
	}


ecmascript:

	this.tracePrint = function (text)
{
	if (this.proxy.traceEnabled) this.forcePrint (text);
}
;

	this.forcePrint = function (text)
{
	console.error ('[DvdController ' + this.proxy.description + ' TimeScaleScript] ' + text + '');
}
;

	this.initialize = function ()
{
        this.tracePrint ('this.initialize this.proxy.duration:');
	this.set_duration(this.proxy.duration, -1); // dummy timeStamp
	this.proxy.secondsElapsedOutput = new MFString('00h00m00s');
}
;

	this.set_duration = function (value, timeStamp)
{
	this.proxy.duration = Math.floor(value);
        this.tracePrint ('set_cycleInterval value=' + value + ', this.proxy.duration=' + this.proxy.duration);
	this.proxy.durationOutput = new MFString(this.printTime(this.proxy.duration));
        this.forcePrint ('this.proxy.duration=' + this.proxy.durationOutput.toString());
}
;

	this.setSecondsElapsed = function (value, timeStamp)
{
	this.proxy.secondsElapsed = Math.floor(value);
	this.proxy.secondsElapsedOutput = new MFString(this.printTime(this.proxy.secondsElapsed));
        this.tracePrint ('this.proxy.secondsElapsedOutput=' + this.proxy.secondsElapsedOutput.toString());
}
;

	this.printTime = function (value)
{
	timeInSeconds = value;
	seconds = timeInSeconds % 60;
	minute = ((timeInSeconds - seconds) / 60) % 60;
	hour = (timeInSeconds - minute * 60 - seconds) / 3600;
	hStr = (hour    < 10 ? '0' + hour    : '' + hour);
	mStr = (minute  < 10 ? '0' + minute  : '' + minute);
	sStr = (seconds < 10 ? '0' + seconds : '' + seconds);
	timeString = new SFString( hStr + 'h' + mStr + 'm' + sStr + 's');
        this.tracePrint ('timeString=' + timeString.toString());
	return timeString;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = function() {
	this.set_description = function (value) {
		try {
			this.proxy.description = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting description '+e);
			console.error('Problems setting description',e);
		}
	};
	this.description_changed = function () {
		var value = this.description;
		return value;
	};
	try {
		this.description = new SFString();
	} catch (e) {
		console.log('Problems setting description '+e);
		console.error('Problems setting description',e);
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
	this.set_duration = function (value) {
		try {
			this.proxy.duration = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting duration '+e);
			console.error('Problems setting duration',e);
		}
	};
	this.duration_changed = function () {
		var value = this.duration;
		return value;
	};
	try {
		this.duration = new SFTime();
	} catch (e) {
		console.log('Problems setting duration '+e);
		console.error('Problems setting duration',e);
	}
	this.set_duration = function (value) {
		try {
			this.proxy.duration = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting duration '+e);
			console.error('Problems setting duration',e);
		}
	};
	this.duration_changed = function () {
		var value = this.duration;
		return value;
	};
	try {
		this.duration = new SFTime();
	} catch (e) {
		console.log('Problems setting duration '+e);
		console.error('Problems setting duration',e);
	}
	this.set_durationChanged = function (value) {
		try {
			this.proxy.durationChanged = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting durationChanged '+e);
			console.error('Problems setting durationChanged',e);
		}
	};
	this.durationChanged_changed = function () {
		var value = this.durationChanged;
		return value;
	};
	try {
		this.durationChanged = new SFTime();
	} catch (e) {
		console.log('Problems setting durationChanged '+e);
		console.error('Problems setting durationChanged',e);
	}
	this.set_forwardCycleInterval = function (value) {
		try {
			this.proxy.forwardCycleInterval = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting forwardCycleInterval '+e);
			console.error('Problems setting forwardCycleInterval',e);
		}
	};
	this.forwardCycleInterval_changed = function () {
		var value = this.forwardCycleInterval;
		return value;
	};
	try {
		this.forwardCycleInterval = new SFTime();
	} catch (e) {
		console.log('Problems setting forwardCycleInterval '+e);
		console.error('Problems setting forwardCycleInterval',e);
	}
	this.set_fastForwardCycleInterval = function (value) {
		try {
			this.proxy.fastForwardCycleInterval = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fastForwardCycleInterval '+e);
			console.error('Problems setting fastForwardCycleInterval',e);
		}
	};
	this.fastForwardCycleInterval_changed = function () {
		var value = this.fastForwardCycleInterval;
		return value;
	};
	try {
		this.fastForwardCycleInterval = new SFTime();
	} catch (e) {
		console.log('Problems setting fastForwardCycleInterval '+e);
		console.error('Problems setting fastForwardCycleInterval',e);
	}
	this.set_rewindCycleInterval = function (value) {
		try {
			this.proxy.rewindCycleInterval = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rewindCycleInterval '+e);
			console.error('Problems setting rewindCycleInterval',e);
		}
	};
	this.rewindCycleInterval_changed = function () {
		var value = this.rewindCycleInterval;
		return value;
	};
	try {
		this.rewindCycleInterval = new SFTime();
	} catch (e) {
		console.log('Problems setting rewindCycleInterval '+e);
		console.error('Problems setting rewindCycleInterval',e);
	}
	this.set_fastRewindCycleInterval = function (value) {
		try {
			this.proxy.fastRewindCycleInterval = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fastRewindCycleInterval '+e);
			console.error('Problems setting fastRewindCycleInterval',e);
		}
	};
	this.fastRewindCycleInterval_changed = function () {
		var value = this.fastRewindCycleInterval;
		return value;
	};
	try {
		this.fastRewindCycleInterval = new SFTime();
	} catch (e) {
		console.log('Problems setting fastRewindCycleInterval '+e);
		console.error('Problems setting fastRewindCycleInterval',e);
	}
	this.set_sliderClockCycleInterval = function (value) {
		try {
			this.proxy.sliderClockCycleInterval = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sliderClockCycleInterval '+e);
			console.error('Problems setting sliderClockCycleInterval',e);
		}
	};
	this.sliderClockCycleInterval_changed = function () {
		var value = this.sliderClockCycleInterval;
		return value;
	};
	try {
		this.sliderClockCycleInterval = new SFTime();
	} catch (e) {
		console.log('Problems setting sliderClockCycleInterval '+e);
		console.error('Problems setting sliderClockCycleInterval',e);
	}
	this.set_speedFactor = function (value) {
		try {
			this.proxy.speedFactor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting speedFactor '+e);
			console.error('Problems setting speedFactor',e);
		}
	};
	this.speedFactor_changed = function () {
		var value = this.speedFactor;
		return value;
	};
	try {
		this.speedFactor = new SFFloat();
	} catch (e) {
		console.log('Problems setting speedFactor '+e);
		console.error('Problems setting speedFactor',e);
	}
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
		this.startTime = new SFTime(-1);
	} catch (e) {
		console.log('Problems setting startTime '+e);
		console.error('Problems setting startTime',e);
	}
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
		this.startTime = new SFTime(-1);
	} catch (e) {
		console.log('Problems setting startTime '+e);
		console.error('Problems setting startTime',e);
	}
	this.set_stopTime = function (value) {
		try {
			this.proxy.stopTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting stopTime '+e);
			console.error('Problems setting stopTime',e);
		}
	};
	this.stopTime_changed = function () {
		var value = this.stopTime;
		return value;
	};
	try {
		this.stopTime = new SFTime(-1);
	} catch (e) {
		console.log('Problems setting stopTime '+e);
		console.error('Problems setting stopTime',e);
	}
	this.set_stopTime = function (value) {
		try {
			this.proxy.stopTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting stopTime '+e);
			console.error('Problems setting stopTime',e);
		}
	};
	this.stopTime_changed = function () {
		var value = this.stopTime;
		return value;
	};
	try {
		this.stopTime = new SFTime(-1);
	} catch (e) {
		console.log('Problems setting stopTime '+e);
		console.error('Problems setting stopTime',e);
	}
	this.set_rewindStartTime = function (value) {
		try {
			this.proxy.rewindStartTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rewindStartTime '+e);
			console.error('Problems setting rewindStartTime',e);
		}
	};
	this.rewindStartTime_changed = function () {
		var value = this.rewindStartTime;
		return value;
	};
	try {
		this.rewindStartTime = new SFTime();
	} catch (e) {
		console.log('Problems setting rewindStartTime '+e);
		console.error('Problems setting rewindStartTime',e);
	}
	this.set_rewindStopTime = function (value) {
		try {
			this.proxy.rewindStopTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rewindStopTime '+e);
			console.error('Problems setting rewindStopTime',e);
		}
	};
	this.rewindStopTime_changed = function () {
		var value = this.rewindStopTime;
		return value;
	};
	try {
		this.rewindStopTime = new SFTime();
	} catch (e) {
		console.log('Problems setting rewindStopTime '+e);
		console.error('Problems setting rewindStopTime',e);
	}
	this.set_fastForwardStartTime = function (value) {
		try {
			this.proxy.fastForwardStartTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fastForwardStartTime '+e);
			console.error('Problems setting fastForwardStartTime',e);
		}
	};
	this.fastForwardStartTime_changed = function () {
		var value = this.fastForwardStartTime;
		return value;
	};
	try {
		this.fastForwardStartTime = new SFTime();
	} catch (e) {
		console.log('Problems setting fastForwardStartTime '+e);
		console.error('Problems setting fastForwardStartTime',e);
	}
	this.set_fastForwardStopTime = function (value) {
		try {
			this.proxy.fastForwardStopTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fastForwardStopTime '+e);
			console.error('Problems setting fastForwardStopTime',e);
		}
	};
	this.fastForwardStopTime_changed = function () {
		var value = this.fastForwardStopTime;
		return value;
	};
	try {
		this.fastForwardStopTime = new SFTime();
	} catch (e) {
		console.log('Problems setting fastForwardStopTime '+e);
		console.error('Problems setting fastForwardStopTime',e);
	}
	this.set_fastRewindStartTime = function (value) {
		try {
			this.proxy.fastRewindStartTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fastRewindStartTime '+e);
			console.error('Problems setting fastRewindStartTime',e);
		}
	};
	this.fastRewindStartTime_changed = function () {
		var value = this.fastRewindStartTime;
		return value;
	};
	try {
		this.fastRewindStartTime = new SFTime();
	} catch (e) {
		console.log('Problems setting fastRewindStartTime '+e);
		console.error('Problems setting fastRewindStartTime',e);
	}
	this.set_fastRewindStopTime = function (value) {
		try {
			this.proxy.fastRewindStopTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fastRewindStopTime '+e);
			console.error('Problems setting fastRewindStopTime',e);
		}
	};
	this.fastRewindStopTime_changed = function () {
		var value = this.fastRewindStopTime;
		return value;
	};
	try {
		this.fastRewindStopTime = new SFTime();
	} catch (e) {
		console.log('Problems setting fastRewindStopTime '+e);
		console.error('Problems setting fastRewindStopTime',e);
	}
	this.set_sliderClockStartTime = function (value) {
		try {
			this.proxy.sliderClockStartTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sliderClockStartTime '+e);
			console.error('Problems setting sliderClockStartTime',e);
		}
	};
	this.sliderClockStartTime_changed = function () {
		var value = this.sliderClockStartTime;
		return value;
	};
	try {
		this.sliderClockStartTime = new SFTime();
	} catch (e) {
		console.log('Problems setting sliderClockStartTime '+e);
		console.error('Problems setting sliderClockStartTime',e);
	}
	this.set_sliderClockStopTime = function (value) {
		try {
			this.proxy.sliderClockStopTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sliderClockStopTime '+e);
			console.error('Problems setting sliderClockStopTime',e);
		}
	};
	this.sliderClockStopTime_changed = function () {
		var value = this.sliderClockStopTime;
		return value;
	};
	try {
		this.sliderClockStopTime = new SFTime();
	} catch (e) {
		console.log('Problems setting sliderClockStopTime '+e);
		console.error('Problems setting sliderClockStopTime',e);
	}
	this.set_time = function (value) {
		try {
			this.proxy.time = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting time '+e);
			console.error('Problems setting time',e);
		}
	};
	this.time_changed = function () {
		var value = this.time;
		return value;
	};
	try {
		this.time = new SFTime(-1);
	} catch (e) {
		console.log('Problems setting time '+e);
		console.error('Problems setting time',e);
	}
	this.set_setTime = function (value) {
		try {
			this.proxy.setTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setTime '+e);
			console.error('Problems setting setTime',e);
		}
	};
	this.setTime_changed = function () {
		var value = this.setTime;
		return value;
	};
	try {
		this.setTime = new SFTime();
	} catch (e) {
		console.log('Problems setting setTime '+e);
		console.error('Problems setting setTime',e);
	}
	this.set_time = function (value) {
		try {
			this.proxy.time = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting time '+e);
			console.error('Problems setting time',e);
		}
	};
	this.time_changed = function () {
		var value = this.time;
		return value;
	};
	try {
		this.time = new SFTime(-1);
	} catch (e) {
		console.log('Problems setting time '+e);
		console.error('Problems setting time',e);
	}
	this.set_isClockActive = function (value) {
		try {
			this.proxy.isClockActive = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isClockActive '+e);
			console.error('Problems setting isClockActive',e);
		}
	};
	this.isClockActive_changed = function () {
		var value = this.isClockActive;
		return value;
	};
	try {
		this.isClockActive = new SFBool(false);
	} catch (e) {
		console.log('Problems setting isClockActive '+e);
		console.error('Problems setting isClockActive',e);
	}
	this.set_setIsClockActive = function (value) {
		try {
			this.proxy.setIsClockActive = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setIsClockActive '+e);
			console.error('Problems setting setIsClockActive',e);
		}
	};
	this.setIsClockActive_changed = function () {
		var value = this.setIsClockActive;
		return value;
	};
	try {
		this.setIsClockActive = new SFBool();
	} catch (e) {
		console.log('Problems setting setIsClockActive '+e);
		console.error('Problems setting setIsClockActive',e);
	}
	this.set_isClockActiveChanged = function (value) {
		try {
			this.proxy.isClockActiveChanged = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isClockActiveChanged '+e);
			console.error('Problems setting isClockActiveChanged',e);
		}
	};
	this.isClockActiveChanged_changed = function () {
		var value = this.isClockActiveChanged;
		return value;
	};
	try {
		this.isClockActiveChanged = new SFBool();
	} catch (e) {
		console.log('Problems setting isClockActiveChanged '+e);
		console.error('Problems setting isClockActiveChanged',e);
	}
	this.set_secondsElapsed = function (value) {
		try {
			this.proxy.secondsElapsed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting secondsElapsed '+e);
			console.error('Problems setting secondsElapsed',e);
		}
	};
	this.secondsElapsed_changed = function () {
		var value = this.secondsElapsed;
		return value;
	};
	try {
		this.secondsElapsed = new SFTime();
	} catch (e) {
		console.log('Problems setting secondsElapsed '+e);
		console.error('Problems setting secondsElapsed',e);
	}
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
		this.fraction = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting fraction '+e);
		console.error('Problems setting fraction',e);
	}
	this.set_setFraction = function (value) {
		try {
			this.proxy.setFraction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setFraction '+e);
			console.error('Problems setting setFraction',e);
		}
	};
	this.setFraction_changed = function () {
		var value = this.setFraction;
		return value;
	};
	try {
		this.setFraction = new SFFloat();
	} catch (e) {
		console.log('Problems setting setFraction '+e);
		console.error('Problems setting setFraction',e);
	}
	this.set_setFastForwardFraction = function (value) {
		try {
			this.proxy.setFastForwardFraction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setFastForwardFraction '+e);
			console.error('Problems setting setFastForwardFraction',e);
		}
	};
	this.setFastForwardFraction_changed = function () {
		var value = this.setFastForwardFraction;
		return value;
	};
	try {
		this.setFastForwardFraction = new SFFloat();
	} catch (e) {
		console.log('Problems setting setFastForwardFraction '+e);
		console.error('Problems setting setFastForwardFraction',e);
	}
	this.set_setRewindFraction = function (value) {
		try {
			this.proxy.setRewindFraction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setRewindFraction '+e);
			console.error('Problems setting setRewindFraction',e);
		}
	};
	this.setRewindFraction_changed = function () {
		var value = this.setRewindFraction;
		return value;
	};
	try {
		this.setRewindFraction = new SFFloat();
	} catch (e) {
		console.log('Problems setting setRewindFraction '+e);
		console.error('Problems setting setRewindFraction',e);
	}
	this.set_setFastRewindFraction = function (value) {
		try {
			this.proxy.setFastRewindFraction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setFastRewindFraction '+e);
			console.error('Problems setting setFastRewindFraction',e);
		}
	};
	this.setFastRewindFraction_changed = function () {
		var value = this.setFastRewindFraction;
		return value;
	};
	try {
		this.setFastRewindFraction = new SFFloat();
	} catch (e) {
		console.log('Problems setting setFastRewindFraction '+e);
		console.error('Problems setting setFastRewindFraction',e);
	}
	this.set_setSliderDragFraction = function (value) {
		try {
			this.proxy.setSliderDragFraction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setSliderDragFraction '+e);
			console.error('Problems setting setSliderDragFraction',e);
		}
	};
	this.setSliderDragFraction_changed = function () {
		var value = this.setSliderDragFraction;
		return value;
	};
	try {
		this.setSliderDragFraction = new SFFloat();
	} catch (e) {
		console.log('Problems setting setSliderDragFraction '+e);
		console.error('Problems setting setSliderDragFraction',e);
	}
	this.set_setSliderClockFraction = function (value) {
		try {
			this.proxy.setSliderClockFraction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setSliderClockFraction '+e);
			console.error('Problems setting setSliderClockFraction',e);
		}
	};
	this.setSliderClockFraction_changed = function () {
		var value = this.setSliderClockFraction;
		return value;
	};
	try {
		this.setSliderClockFraction = new SFFloat();
	} catch (e) {
		console.log('Problems setting setSliderClockFraction '+e);
		console.error('Problems setting setSliderClockFraction',e);
	}
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
		this.fraction = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting fraction '+e);
		console.error('Problems setting fraction',e);
	}
	this.set_isResetToStart = function (value) {
		try {
			this.proxy.isResetToStart = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isResetToStart '+e);
			console.error('Problems setting isResetToStart',e);
		}
	};
	this.isResetToStart_changed = function () {
		var value = this.isResetToStart;
		return value;
	};
	try {
		this.isResetToStart = new SFBool();
	} catch (e) {
		console.log('Problems setting isResetToStart '+e);
		console.error('Problems setting isResetToStart',e);
	}
	this.set_setResetToStart = function (value) {
		try {
			this.proxy.setResetToStart = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setResetToStart '+e);
			console.error('Problems setting setResetToStart',e);
		}
	};
	this.setResetToStart_changed = function () {
		var value = this.setResetToStart;
		return value;
	};
	try {
		this.setResetToStart = new SFBool();
	} catch (e) {
		console.log('Problems setting setResetToStart '+e);
		console.error('Problems setting setResetToStart',e);
	}
	this.set_isFastRewind = function (value) {
		try {
			this.proxy.isFastRewind = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isFastRewind '+e);
			console.error('Problems setting isFastRewind',e);
		}
	};
	this.isFastRewind_changed = function () {
		var value = this.isFastRewind;
		return value;
	};
	try {
		this.isFastRewind = new SFBool();
	} catch (e) {
		console.log('Problems setting isFastRewind '+e);
		console.error('Problems setting isFastRewind',e);
	}
	this.set_setFastRewind = function (value) {
		try {
			this.proxy.setFastRewind = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setFastRewind '+e);
			console.error('Problems setting setFastRewind',e);
		}
	};
	this.setFastRewind_changed = function () {
		var value = this.setFastRewind;
		return value;
	};
	try {
		this.setFastRewind = new SFBool();
	} catch (e) {
		console.log('Problems setting setFastRewind '+e);
		console.error('Problems setting setFastRewind',e);
	}
	this.set_isRewinding = function (value) {
		try {
			this.proxy.isRewinding = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isRewinding '+e);
			console.error('Problems setting isRewinding',e);
		}
	};
	this.isRewinding_changed = function () {
		var value = this.isRewinding;
		return value;
	};
	try {
		this.isRewinding = new SFBool();
	} catch (e) {
		console.log('Problems setting isRewinding '+e);
		console.error('Problems setting isRewinding',e);
	}
	this.set_setRewind = function (value) {
		try {
			this.proxy.setRewind = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setRewind '+e);
			console.error('Problems setting setRewind',e);
		}
	};
	this.setRewind_changed = function () {
		var value = this.setRewind;
		return value;
	};
	try {
		this.setRewind = new SFBool();
	} catch (e) {
		console.log('Problems setting setRewind '+e);
		console.error('Problems setting setRewind',e);
	}
	this.set_setPaused = function (value) {
		try {
			this.proxy.setPaused = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setPaused '+e);
			console.error('Problems setting setPaused',e);
		}
	};
	this.setPaused_changed = function () {
		var value = this.setPaused;
		return value;
	};
	try {
		this.setPaused = new SFBool();
	} catch (e) {
		console.log('Problems setting setPaused '+e);
		console.error('Problems setting setPaused',e);
	}
	this.set_isPlaying = function (value) {
		try {
			this.proxy.isPlaying = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isPlaying '+e);
			console.error('Problems setting isPlaying',e);
		}
	};
	this.isPlaying_changed = function () {
		var value = this.isPlaying;
		return value;
	};
	try {
		this.isPlaying = new SFBool();
	} catch (e) {
		console.log('Problems setting isPlaying '+e);
		console.error('Problems setting isPlaying',e);
	}
	this.set_setPlay = function (value) {
		try {
			this.proxy.setPlay = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setPlay '+e);
			console.error('Problems setting setPlay',e);
		}
	};
	this.setPlay_changed = function () {
		var value = this.setPlay;
		return value;
	};
	try {
		this.setPlay = new SFBool();
	} catch (e) {
		console.log('Problems setting setPlay '+e);
		console.error('Problems setting setPlay',e);
	}
	this.set_isFastForward = function (value) {
		try {
			this.proxy.isFastForward = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isFastForward '+e);
			console.error('Problems setting isFastForward',e);
		}
	};
	this.isFastForward_changed = function () {
		var value = this.isFastForward;
		return value;
	};
	try {
		this.isFastForward = new SFBool();
	} catch (e) {
		console.log('Problems setting isFastForward '+e);
		console.error('Problems setting isFastForward',e);
	}
	this.set_setFastForward = function (value) {
		try {
			this.proxy.setFastForward = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setFastForward '+e);
			console.error('Problems setting setFastForward',e);
		}
	};
	this.setFastForward_changed = function () {
		var value = this.setFastForward;
		return value;
	};
	try {
		this.setFastForward = new SFBool();
	} catch (e) {
		console.log('Problems setting setFastForward '+e);
		console.error('Problems setting setFastForward',e);
	}
	this.set_isResetToEnd = function (value) {
		try {
			this.proxy.isResetToEnd = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isResetToEnd '+e);
			console.error('Problems setting isResetToEnd',e);
		}
	};
	this.isResetToEnd_changed = function () {
		var value = this.isResetToEnd;
		return value;
	};
	try {
		this.isResetToEnd = new SFBool();
	} catch (e) {
		console.log('Problems setting isResetToEnd '+e);
		console.error('Problems setting isResetToEnd',e);
	}
	this.set_setResetToEnd = function (value) {
		try {
			this.proxy.setResetToEnd = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setResetToEnd '+e);
			console.error('Problems setting setResetToEnd',e);
		}
	};
	this.setResetToEnd_changed = function () {
		var value = this.setResetToEnd;
		return value;
	};
	try {
		this.setResetToEnd = new SFBool();
	} catch (e) {
		console.log('Problems setting setResetToEnd '+e);
		console.error('Problems setting setResetToEnd',e);
	}
	this.set_sliderClockEnabled = function (value) {
		try {
			this.proxy.sliderClockEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sliderClockEnabled '+e);
			console.error('Problems setting sliderClockEnabled',e);
		}
	};
	this.sliderClockEnabled_changed = function () {
		var value = this.sliderClockEnabled;
		return value;
	};
	try {
		this.sliderClockEnabled = new SFBool();
	} catch (e) {
		console.log('Problems setting sliderClockEnabled '+e);
		console.error('Problems setting sliderClockEnabled',e);
	}
	this.set_sliderDragArmed = function (value) {
		try {
			this.proxy.sliderDragArmed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sliderDragArmed '+e);
			console.error('Problems setting sliderDragArmed',e);
		}
	};
	this.sliderDragArmed_changed = function () {
		var value = this.sliderDragArmed;
		return value;
	};
	try {
		this.sliderDragArmed = new SFBool(false);
	} catch (e) {
		console.log('Problems setting sliderDragArmed '+e);
		console.error('Problems setting sliderDragArmed',e);
	}
	this.set_setSliderDragged = function (value) {
		try {
			this.proxy.setSliderDragged = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setSliderDragged '+e);
			console.error('Problems setting setSliderDragged',e);
		}
	};
	this.setSliderDragged_changed = function () {
		var value = this.setSliderDragged;
		return value;
	};
	try {
		this.setSliderDragged = new SFBool();
	} catch (e) {
		console.log('Problems setting setSliderDragged '+e);
		console.error('Problems setting setSliderDragged',e);
	}
	this.set_pauseTime = function (value) {
		try {
			this.proxy.pauseTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting pauseTime '+e);
			console.error('Problems setting pauseTime',e);
		}
	};
	this.pauseTime_changed = function () {
		var value = this.pauseTime;
		return value;
	};
	try {
		this.pauseTime = new SFTime(-1);
	} catch (e) {
		console.log('Problems setting pauseTime '+e);
		console.error('Problems setting pauseTime',e);
	}
	this.set_activateButtonColor = function (value) {
		try {
			this.proxy.activateButtonColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting activateButtonColor '+e);
			console.error('Problems setting activateButtonColor',e);
		}
	};
	this.activateButtonColor_changed = function () {
		var value = this.activateButtonColor;
		return value;
	};
	try {
		this.activateButtonColor = new SFColor();
	} catch (e) {
		console.log('Problems setting activateButtonColor '+e);
		console.error('Problems setting activateButtonColor',e);
	}
	this.set_activateLabelColor = function (value) {
		try {
			this.proxy.activateLabelColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting activateLabelColor '+e);
			console.error('Problems setting activateLabelColor',e);
		}
	};
	this.activateLabelColor_changed = function () {
		var value = this.activateLabelColor;
		return value;
	};
	try {
		this.activateLabelColor = new SFColor();
	} catch (e) {
		console.log('Problems setting activateLabelColor '+e);
		console.error('Problems setting activateLabelColor',e);
	}
	this.set_deactivateButtonColor = function (value) {
		try {
			this.proxy.deactivateButtonColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting deactivateButtonColor '+e);
			console.error('Problems setting deactivateButtonColor',e);
		}
	};
	this.deactivateButtonColor_changed = function () {
		var value = this.deactivateButtonColor;
		return value;
	};
	try {
		this.deactivateButtonColor = new SFColor();
	} catch (e) {
		console.log('Problems setting deactivateButtonColor '+e);
		console.error('Problems setting deactivateButtonColor',e);
	}
	this.set_arePlaybackButtonsActive = function (value) {
		try {
			this.proxy.arePlaybackButtonsActive = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting arePlaybackButtonsActive '+e);
			console.error('Problems setting arePlaybackButtonsActive',e);
		}
	};
	this.arePlaybackButtonsActive_changed = function () {
		var value = this.arePlaybackButtonsActive;
		return value;
	};
	try {
		this.arePlaybackButtonsActive = new SFBool(true);
	} catch (e) {
		console.log('Problems setting arePlaybackButtonsActive '+e);
		console.error('Problems setting arePlaybackButtonsActive',e);
	}
	this.set_setarePlaybackButtonsActive = function (value) {
		try {
			this.proxy.setarePlaybackButtonsActive = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setarePlaybackButtonsActive '+e);
			console.error('Problems setting setarePlaybackButtonsActive',e);
		}
	};
	this.setarePlaybackButtonsActive_changed = function () {
		var value = this.setarePlaybackButtonsActive;
		return value;
	};
	try {
		this.setarePlaybackButtonsActive = new SFBool();
	} catch (e) {
		console.log('Problems setting setarePlaybackButtonsActive '+e);
		console.error('Problems setting setarePlaybackButtonsActive',e);
	}
	this.set_deactivateButtonColorChanged = function (value) {
		try {
			this.proxy.deactivateButtonColorChanged = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting deactivateButtonColorChanged '+e);
			console.error('Problems setting deactivateButtonColorChanged',e);
		}
	};
	this.deactivateButtonColorChanged_changed = function () {
		var value = this.deactivateButtonColorChanged;
		return value;
	};
	try {
		this.deactivateButtonColorChanged = new SFColor();
	} catch (e) {
		console.log('Problems setting deactivateButtonColorChanged '+e);
		console.error('Problems setting deactivateButtonColorChanged',e);
	}
	this.set_deactivateLabelColor = function (value) {
		try {
			this.proxy.deactivateLabelColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting deactivateLabelColor '+e);
			console.error('Problems setting deactivateLabelColor',e);
		}
	};
	this.deactivateLabelColor_changed = function () {
		var value = this.deactivateLabelColor;
		return value;
	};
	try {
		this.deactivateLabelColor = new SFColor();
	} catch (e) {
		console.log('Problems setting deactivateLabelColor '+e);
		console.error('Problems setting deactivateLabelColor',e);
	}
	this.set_deactivateLabelColorChanged = function (value) {
		try {
			this.proxy.deactivateLabelColorChanged = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting deactivateLabelColorChanged '+e);
			console.error('Problems setting deactivateLabelColorChanged',e);
		}
	};
	this.deactivateLabelColorChanged_changed = function () {
		var value = this.deactivateLabelColorChanged;
		return value;
	};
	try {
		this.deactivateLabelColorChanged = new SFColor();
	} catch (e) {
		console.log('Problems setting deactivateLabelColorChanged '+e);
		console.error('Problems setting deactivateLabelColorChanged',e);
	}
	this.set_playButtonActivateColorChanged = function (value) {
		try {
			this.proxy.playButtonActivateColorChanged = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playButtonActivateColorChanged '+e);
			console.error('Problems setting playButtonActivateColorChanged',e);
		}
	};
	this.playButtonActivateColorChanged_changed = function () {
		var value = this.playButtonActivateColorChanged;
		return value;
	};
	try {
		this.playButtonActivateColorChanged = new SFColor();
	} catch (e) {
		console.log('Problems setting playButtonActivateColorChanged '+e);
		console.error('Problems setting playButtonActivateColorChanged',e);
	}
	this.set_playLabelActivateColorChanged = function (value) {
		try {
			this.proxy.playLabelActivateColorChanged = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting playLabelActivateColorChanged '+e);
			console.error('Problems setting playLabelActivateColorChanged',e);
		}
	};
	this.playLabelActivateColorChanged_changed = function () {
		var value = this.playLabelActivateColorChanged;
		return value;
	};
	try {
		this.playLabelActivateColorChanged = new SFColor();
	} catch (e) {
		console.log('Problems setting playLabelActivateColorChanged '+e);
		console.error('Problems setting playLabelActivateColorChanged',e);
	}
	this.set_rewindButtonActivateColorChanged = function (value) {
		try {
			this.proxy.rewindButtonActivateColorChanged = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rewindButtonActivateColorChanged '+e);
			console.error('Problems setting rewindButtonActivateColorChanged',e);
		}
	};
	this.rewindButtonActivateColorChanged_changed = function () {
		var value = this.rewindButtonActivateColorChanged;
		return value;
	};
	try {
		this.rewindButtonActivateColorChanged = new SFColor();
	} catch (e) {
		console.log('Problems setting rewindButtonActivateColorChanged '+e);
		console.error('Problems setting rewindButtonActivateColorChanged',e);
	}
	this.set_rewindLabelActivateColorChanged = function (value) {
		try {
			this.proxy.rewindLabelActivateColorChanged = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rewindLabelActivateColorChanged '+e);
			console.error('Problems setting rewindLabelActivateColorChanged',e);
		}
	};
	this.rewindLabelActivateColorChanged_changed = function () {
		var value = this.rewindLabelActivateColorChanged;
		return value;
	};
	try {
		this.rewindLabelActivateColorChanged = new SFColor();
	} catch (e) {
		console.log('Problems setting rewindLabelActivateColorChanged '+e);
		console.error('Problems setting rewindLabelActivateColorChanged',e);
	}
	this.set_rewindStart_fraction = function (value) {
		try {
			this.proxy.rewindStart_fraction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rewindStart_fraction '+e);
			console.error('Problems setting rewindStart_fraction',e);
		}
	};
	this.rewindStart_fraction_changed = function () {
		var value = this.rewindStart_fraction;
		return value;
	};
	try {
		this.rewindStart_fraction = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting rewindStart_fraction '+e);
		console.error('Problems setting rewindStart_fraction',e);
	}
	this.set_fastRewindStart_fraction = function (value) {
		try {
			this.proxy.fastRewindStart_fraction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fastRewindStart_fraction '+e);
			console.error('Problems setting fastRewindStart_fraction',e);
		}
	};
	this.fastRewindStart_fraction_changed = function () {
		var value = this.fastRewindStart_fraction;
		return value;
	};
	try {
		this.fastRewindStart_fraction = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting fastRewindStart_fraction '+e);
		console.error('Problems setting fastRewindStart_fraction',e);
	}
	this.set_sliderClockStart_fraction = function (value) {
		try {
			this.proxy.sliderClockStart_fraction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sliderClockStart_fraction '+e);
			console.error('Problems setting sliderClockStart_fraction',e);
		}
	};
	this.sliderClockStart_fraction_changed = function () {
		var value = this.sliderClockStart_fraction;
		return value;
	};
	try {
		this.sliderClockStart_fraction = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting sliderClockStart_fraction '+e);
		console.error('Problems setting sliderClockStart_fraction',e);
	}
	this.set_fastRewind_level = function (value) {
		try {
			this.proxy.fastRewind_level = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fastRewind_level '+e);
			console.error('Problems setting fastRewind_level',e);
		}
	};
	this.fastRewind_level_changed = function () {
		var value = this.fastRewind_level;
		return value;
	};
	try {
		this.fastRewind_level = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting fastRewind_level '+e);
		console.error('Problems setting fastRewind_level',e);
	}
	this.set_fastForward_level = function (value) {
		try {
			this.proxy.fastForward_level = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fastForward_level '+e);
			console.error('Problems setting fastForward_level',e);
		}
	};
	this.fastForward_level_changed = function () {
		var value = this.fastForward_level;
		return value;
	};
	try {
		this.fastForward_level = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting fastForward_level '+e);
		console.error('Problems setting fastForward_level',e);
	}
	this.set_preDrag_fraction = function (value) {
		try {
			this.proxy.preDrag_fraction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting preDrag_fraction '+e);
			console.error('Problems setting preDrag_fraction',e);
		}
	};
	this.preDrag_fraction_changed = function () {
		var value = this.preDrag_fraction;
		return value;
	};
	try {
		this.preDrag_fraction = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting preDrag_fraction '+e);
		console.error('Problems setting preDrag_fraction',e);
	}


ecmascript:

	this.tracePrint = function (text)
{
	if (this.proxy.traceEnabled) console.error ('[DvdController ' + this.proxy.description + ' ClockScript] ' + text + '');
};

	this.alwaysPrint = function (output)
{
	console.error ('[DvdController ' + this.proxy.description + ' ClockScript] ' + output + '');
}
;

	this.initialize = function ()
{
	this.proxy.isResetToStart = false;
	this.proxy.isFastRewind = false;
	this.proxy.isRewinding = false;
	this.proxy.isPlaying = false;
	this.proxy.isFastForward = false;
	this.proxy.isResetToEnd = false;

	this.proxy.durationChanged = this.proxy.duration;
	this.proxy.forwardCycleInterval = this.proxy.duration;
	this.proxy.fastForwardCycleInterval = this.proxy.duration;
	this.proxy.rewindCycleInterval = this.proxy.duration;
	this.proxy.fastRewindCycleInterval = this.proxy.duration;
	this.proxy.sliderClockCycleInterval = this.proxy.duration;

	this.proxy.fraction = 0;
	this.proxy.fastRewind_level = 0;
	this.proxy.fastForward_level = 0;
	this.proxy.sliderClockStart_fraction = 0;
}
;

	this.set_duration = function (value, timeStamp)
{
	this.proxy.duration = value;
	this.proxy.durationChanged = value;
	this.proxy.forwardCycleInterval = this.proxy.duration;
	this.proxy.fastForwardCycleInterval = this.proxy.duration;
	this.proxy.rewindCycleInterval = this.proxy.duration;
	this.proxy.fastRewindCycleInterval = this.proxy.duration;
	this.proxy.sliderClockCycleInterval = this.proxy.duration;
	this.alwaysPrint ('this.proxy.set_duration (' + this.proxy.duration + ') complete');
}
;

	this.setarePlaybackButtonsActive = function (value, timeStamp)
{
	this.proxy.arePlaybackButtonsActive = value;
	this.tracePrint('this.proxy.arePlaybackButtonsActive=' + this.proxy.arePlaybackButtonsActive);
}
;

	this.setIsClockActive = function (value, timeStamp)
{
	this.proxy.isClockActive = this.proxy.isClockActiveChanged = value;
	this.tracePrint('this.proxy.isClockActive=' + this.proxy.isClockActive);
}
;

	this.setResetToStart = function (value, timeStamp)
{
	this.tracePrint('this.proxy.setResetToStart(' + value + ')');
	this.proxy.isResetToStart = true;

	//Stop all clocks
	this.proxy.isPlaying = false;
	this.proxy.isRewinding = false;
	this.proxy.isFastForward = false;
	this.proxy.isFastRewind = false;
	this.proxy.sliderClockEnabled = false;

	this.proxy.fraction = this.proxy.fraction_changed = 0.0;
	this.proxy.secondsElapsed = 0.0;
	this.proxy.startTime = this.proxy.startTime_changed = timeStamp;
	this.proxy.stopTime = this.proxy.stopTime_changed = this.proxy.startTime + this.proxy.duration;
	this.proxy.deactivateButtonColorChanged = this.proxy.deactivateButtonColor;

	if (!this.proxy.arePlaybackButtonsActive)
		return;

	this.proxy.deactivateLabelColorChanged = this.proxy.deactivateLabelColor;
}
;

	this.setFastRewind = function (value, timeStamp)
{
	this.tracePrint('this.proxy.setFastRewind(' + value + ')');
	if (!this.proxy.isFastRewind)
		this.proxy.fastRewindStart_fraction = this.proxy.fraction;

	this.proxy.isFastRewind = true;
	this.proxy.isPlaying = false;
	this.proxy.isRewinding = false;
	this.proxy.isFastForward = false;
	this.proxy.sliderClockEnabled = false;

	if (this.proxy.fastRewind_level < 1)
	{
		++this.proxy.fastRewind_level;
		this.proxy.fastRewindCycleInterval = this.proxy.duration / (this.proxy.speedFactor * this.proxy.fastRewind_level);
	}

	if (this.proxy.fraction == 0) //start reached
	{
		this.proxy.deactivateButtonColorChanged = this.proxy.deactivateButtonColor;
		this.proxy.deactivateLabelColorChanged = this.proxy.deactivateLabelColor;
		return;
	}

	this.proxy.fastRewindStartTime = timeStamp;
	this.proxy.fastRewindStopTime = this.proxy.fastRewindStartTime + this.proxy.secondsElapsed / (this.proxy.speedFactor * this.proxy.fastRewind_level);

	this.proxy.startTime = this.proxy.startTime_changed = this.proxy.fastRewindStopTime;
}
;

	this.setRewind = function (value, timeStamp)
{
	this.tracePrint('this.proxy.setRewind(' + value + ')');
	if (!this.proxy.isRewinding)
		this.proxy.rewindStart_fraction = this.proxy.fraction;

	this.proxy.isRewinding = true;
	this.proxy.isPlaying = false;
	this.proxy.isFastForward = false;
	this.proxy.isFastRewind = false;
	this.proxy.sliderClockEnabled = false;

	this.proxy.fastRewind_level = 0;  //reset
	this.proxy.rewindCycleInterval = this.proxy.duration;

	if (this.proxy.fraction == 0)  //start reached
	{
		this.proxy.deactivateButtonColorChanged = this.proxy.deactivateButtonColor;
		this.proxy.deactivateLabelColorChanged = this.proxy.deactivateLabelColor;
		return;
	}

	this.proxy.rewindStartTime = timeStamp;
	this.proxy.rewindStopTime = this.proxy.rewindStartTime + this.proxy.secondsElapsed;

	this.proxy.startTime = this.proxy.startTime_changed = this.proxy.rewindStopTime;
}
;

	this.setPaused = function (value, timeStamp)
{
	this.tracePrint('this.proxy.setPaused(' + value + ')');
	if (value == true)
	{
		now = new Date();
		this.proxy.pauseTime = now.getTime() / 1000.0;

		this.proxy.isFastRewind = false;
		this.proxy.isRewinding = false;
		this.proxy.isPlaying = false;
		this.proxy.isFastForward = false;
		this.proxy.sliderClockEnabled = false;
	}
}
;

	this.setPlay = function (value, timeStamp)
{
	this.tracePrint('this.proxy.setPlay(' + value + ')');
	this.proxy.isPlaying = true;
	this.proxy.isRewinding = false;
	this.proxy.isFastForward = false;
	this.proxy.isFastRewind = false;
	this.proxy.sliderClockEnabled = false;

	this.proxy.fastRewind_level = 0; //reset fast rewind
	this.proxy.forwardCycleInterval = this.proxy.duration;

	if (this.proxy.fraction == 0 || this.proxy.fraction == 1)  //start or restart from beginning
	{
		this.proxy.startTime = this.proxy.startTime_changed = timeStamp;
		this.proxy.stopTime = this.proxy.stopTime_changed = this.proxy.startTime + this.proxy.duration;
	}
	else
	{
		this.proxy.startTime = this.proxy.startTime_changed = timeStamp - this.proxy.secondsElapsed;
		this.proxy.stopTime = this.proxy.stopTime_changed = this.proxy.startTime + this.proxy.duration;
	}
}
;

	this.setFastForward = function (value, timeStamp)
{
	this.tracePrint('this.proxy.setFastForward(' + value + ')');
	this.proxy.isFastForward = true;
	this.proxy.isPlaying = false;
	this.proxy.isRewinding = false;
	this.proxy.isFastRewind = false;
	this.proxy.sliderClockEnabled = false;

	if (this.proxy.fastForward_level < 1)
	{
		++this.proxy.fastForward_level;
		this.proxy.fastForwardCycleInterval = this.proxy.duration / (this.proxy.speedFactor * this.proxy.fastForward_level);
	}

	this.proxy.fastForwardStartTime = timeStamp - this.proxy.secondsElapsed / (this.proxy.speedFactor * this.proxy.fastForward_level);
	this.proxy.fastForwardStopTime = this.proxy.fastForwardStartTime + this.proxy.duration / (this.proxy.speedFactor * this.proxy.fastForward_level);

	this.proxy.startTime = this.proxy.startTime_changed = this.proxy.fastForwardStartTime;
}
;

	this.setResetToEnd = function (value, timeStamp)
{
	this.tracePrint('this.proxy.setResetToEnd(' + value + ')');
	this.proxy.isResetToEnd = true;

	//Stop all clocks
	this.proxy.isPlaying = false;
	this.proxy.isRewinding = false;
	this.proxy.isFastForward = false;
	this.proxy.isFastRewind = false;
	this.proxy.sliderClockEnabled = false;

	this.proxy.fraction = this.proxy.fraction_changed = 1.0;
	this.proxy.secondsElapsed = this.proxy.duration;

	this.proxy.stopTime = this.proxy.stopTime_changed = timeStamp;
	this.proxy.startTime = this.proxy.startTime_changed = this.proxy.stopTime - this.proxy.duration;
	this.proxy.deactivateButtonColorChanged = this.proxy.deactivateButtonColor;
	this.proxy.deactivateLabelColorChanged = this.proxy.deactivateLabelColor;
}
;

	this.setFraction = function (value, timeStamp)
{
	if (this.proxy.isRewinding || this.proxy.isFastForward || this.proxy.isFastRewind || this.proxy.sliderClockEnabled || this.proxy.sliderDragArmed)
        {
//              this.tracePrint('this.proxy.setFraction immediate return..');
		return;
        }
//	this.tracePrint('this.proxy.setFraction(' + value + ')');

	if (this.proxy.isResetToStart)
	{
                this.tracePrint('this.proxy.setFraction this.proxy.isResetToStart=true, reset..');
		this.proxy.isResetToStart = false; //reset
		return;
	}
	else if (this.proxy.isResetToEnd)
	{
                this.tracePrint('this.proxy.setFraction this.proxy.isResetToEnd=true, reset..');
		this.proxy.isResetToEnd = false; //reset
		return;
	}

	this.proxy.fraction = this.proxy.fraction_changed = value;
        this.tracePrint('this.proxy.fraction_changed=' + this.proxy.fraction_changed);

	if (this.proxy.fraction >= 1) //end reached
	{
		this.proxy.deactivateButtonColorChanged = this.proxy.deactivateButtonColor;
		this.proxy.deactivateLabelColorChanged = this.proxy.deactivateLabelColor;
		this.proxy.fraction = this.proxy.fraction_changed = 1.0;
	}
}
;

	this.setFastForwardFraction = function (value, timeStamp)
{
	this.tracePrint('this.proxy.setFastForwardFraction(' + value + ')');
	if (this.proxy.isPlaying || this.proxy.isFastRewind || this.proxy.isRewinding || this.proxy.sliderClockEnabled || this.proxy.sliderDragArmed)
		return;

	if (this.proxy.isResetToStart)
	{
		this.proxy.isResetToStart = false; //reset
		return;
	}
	else if (this.proxy.isResetToEnd)
	{
		this.proxy.isResetToEnd = false; //reset
		return;
	}

	this.proxy.fraction = this.proxy.fraction_changed = value;

	if (this.proxy.fraction >= 1) //end reached
	{
		this.proxy.deactivateButtonColorChanged = this.proxy.deactivateButtonColor;
		this.proxy.deactivateLabelColorChanged = this.proxy.deactivateLabelColor;
		this.proxy.isFastForward = false;
		this.proxy.fraction = this.proxy.fraction_changed = 1.0;
		this.proxy.secondsElapsed = this.proxy.duration;
	}
}
;

	this.setRewindFraction = function (value, timeStamp)
{
	this.tracePrint('this.proxy.setRewindFraction(' + value + ')');
	if (this.proxy.isPlaying || this.proxy.isFastForward || this.proxy.isFastRewind || this.proxy.sliderClockEnabled || this.proxy.sliderDragArmed)
		return;

	if (this.proxy.isResetToStart)
	{
		this.proxy.isResetToStart = false; //reset
		return;
	}
	else if (this.proxy.isResetToEnd)
	{
		this.proxy.isResetToEnd = false; //reset
		return;
	}

	this.proxy.fraction = this.proxy.fraction_changed = 1 - value - (1 - this.proxy.rewindStart_fraction);

	if (this.proxy.fraction <= 0.0000001) //start reached - rounded off
	{
		this.proxy.deactivateButtonColorChanged = this.proxy.deactivateButtonColor;
		this.proxy.deactivateLabelColorChanged  = this.proxy.deactivateLabelColor;
		this.proxy.isRewinding = false;
		this.proxy.fraction = this.proxy.fraction_changed = 0.0;
		this.proxy.secondsElapsed = 0.0;
	}
}
;

	this.setFastRewindFraction = function (value, timeStamp)
{
	this.tracePrint('this.proxy.setFastRewindFraction(' + value + ')');
	if (this.proxy.isPlaying || this.proxy.isFastForward || this.proxy.isRewinding || this.proxy.sliderClockEnabled || this.proxy.sliderDragArmed)
		return;

	if (this.proxy.isResetToStart)
	{
		this.proxy.isResetToStart = false; //reset
		return;
	}
	else if (this.proxy.isResetToEnd)
	{
		this.proxy.isResetToEnd = false; //reset
		return;
	}

	this.proxy.fraction = this.proxy.fraction_changed = 1 - value - (1 - this.proxy.fastRewindStart_fraction);

	if (this.proxy.fraction <= 0.0000001) //start reached - rounded off
	{
		this.proxy.deactivateButtonColorChanged = this.proxy.deactivateButtonColor;
		this.proxy.deactivateLabelColorChanged  = this.proxy.deactivateLabelColor;
		this.proxy.isFastRewind = false;
		this.proxy.fraction = this.proxy.fraction_changed = 0.0;
		this.proxy.fastRewindStart_fraction = -1; //reset
		this.proxy.secondsElapsed = 0.0;
	}
}
;

	this.setTime = function (value, timeStamp)
{
	// Check if pause option is selected
	if (!this.proxy.isPlaying && !this.proxy.isRewinding && !this.proxy.isFastForward && !this.proxy.isFastRewind && !this.proxy.sliderClockEnabled)
        {
                this.tracePrint('this.proxy.setTime(' + value + ') immediate return');
		return;
        }
	this.tracePrint('this.proxy.setTime(' + value + ')');

	this.proxy.time = this.proxy.time_changed = value; // this.proxy.time_changed is output event via IS/connect
	this.proxy.secondsElapsed = Math.abs(value - this.proxy.startTime);
        this.tracePrint ('this.proxy.time=' + this.proxy.time + ', this.proxy.secondsElapsed=' + this.proxy.secondsElapsed);
	if (this.proxy.isFastRewind)
		this.proxy.secondsElapsed = this.proxy.secondsElapsed * (this.proxy.speedFactor * this.proxy.fastRewind_level);
	else if (this.proxy.isFastForward)
		this.proxy.secondsElapsed = this.proxy.secondsElapsed * (this.proxy.speedFactor * this.proxy.fastForward_level);
	if (this.proxy.fraction == 0)
		this.proxy.secondsElapsed = 0.0;
	else if (this.proxy.fraction == 1)
		this.proxy.secondsElapsed = this.proxy.duration;
}
;

	this.setSliderDragged = function (value, timeStamp)
{
	if (value == true) //Drag started
	{
                this.tracePrint ('Drag started');
		this.proxy.preDrag_fraction = this.proxy.fraction;
		this.proxy.sliderDragArmed = true;

		this.proxy.isPlaying = false;
		this.proxy.isRewinding = false;
		this.proxy.isFastForward = false;
		this.proxy.isFastRewind = false;
		this.proxy.sliderClockEnabled = false;
	}
	else //Drag finished
	{
                this.tracePrint ('Drag finished');
		this.proxy.deactivateButtonColorChanged = this.proxy.deactivateButtonColor;
		this.proxy.deactivateLabelColorChanged  = this.proxy.deactivateLabelColor;
		this.proxy.sliderDragArmed = false;

		this.proxy.secondsElapsed = this.proxy.duration * this.proxy.fraction;

		this.proxy.sliderClockEnabled = true;
		if (this.proxy.fraction == 0 || this.proxy.fraction == 1) //start or end reached
			return;

		this.proxy.sliderClockCycleInterval = this.proxy.duration;
		if (this.proxy.fraction >= this.proxy.preDrag_fraction) //play
		{
			drag_forward = true;
			drag_backward = false;
			this.proxy.sliderClockStartTime = timeStamp - this.proxy.secondsElapsed;
			this.proxy.sliderClockStopTime = this.proxy.sliderClockStartTime + this.proxy.duration;
			this.proxy.startTime = this.proxy.startTime_changed = this.proxy.sliderClockStartTime;
			this.proxy.playButtonActivateColorChanged = this.proxy.activateButtonColor;
			this.proxy.playLabelActivateColorChanged  = this.proxy.activateLabelColor;
		}
		else if (this.proxy.fraction < this.proxy.preDrag_fraction) //rewind
		{
			drag_forward = false;
			drag_backward = true;
			this.proxy.sliderClockStartTime = timeStamp;
			this.proxy.sliderClockStopTime = timeStamp + this.proxy.secondsElapsed;
			this.proxy.startTime = this.proxy.startTime_changed = this.proxy.sliderClockStopTime;
			this.proxy.rewindButtonActivateColorChanged = this.proxy.activateButtonColor;
			this.proxy.rewindLabelActivateColorChanged  = this.proxy.activateLabelColor;
	}

		this.proxy.sliderClockStart_fraction = this.proxy.fraction;
	}
}
;

	this.setSliderDragFraction = function (value, timeStamp)
{
	if (this.proxy.isPlaying || this.proxy.isRewinding || this.proxy.isFastForward || this.proxy.isFastRewind || this.proxy.sliderClockEnabled)
        {
//              this.tracePrint('this.proxy.setSliderDragFraction immediate return');
		return;
        }
	this.tracePrint('this.proxy.setSliderDragFraction(' + value + ')');

	if (this.proxy.sliderDragArmed)
		this.proxy.fraction = this.proxy.fraction_changed = value;
}
;

	this.setSliderClockFraction = function (value, timeStamp)
{
	if (this.proxy.isPlaying || this.proxy.isRewinding || this.proxy.isFastForward || this.proxy.isFastRewind)
        {
//              this.tracePrint('this.proxy.setSliderClockFraction immediate return');
		return;
        }
	this.tracePrint('this.proxy.setSliderClockFraction(' + value + ')');

	if (this.proxy.isResetToStart)
	{
		this.proxy.isResetToStart = false; //reset
		return;
	}
	else if (this.proxy.isResetToEnd)
	{
		this.proxy.isResetToEnd = false; //reset
		return;
	}

	if (drag_forward)
		this.proxy.fraction = this.proxy.fraction_changed = value;
	else if (drag_backward)
		this.proxy.fraction = this.proxy.fraction_changed = 1 - value - (1 - this.proxy.sliderClockStart_fraction);

	if (this.proxy.fraction <= 0.0000001)
	{
		this.proxy.deactivateButtonColorChanged = this.proxy.deactivateButtonColor;
		this.proxy.deactivateLabelColorChanged  = this.proxy.deactivateLabelColor;
		this.proxy.sliderClockEnabled = false;
		this.proxy.fraction = this.proxy.fraction_changed = 0.0;
		this.proxy.secondsElapsed = 0.0;
	}
	else if (this.proxy.fraction >= 1)
	{
		this.proxy.deactivateButtonColorChanged = this.proxy.deactivateButtonColor;
		this.proxy.deactivateLabelColorChanged  = this.proxy.deactivateLabelColor;
		this.proxy.sliderClockEnabled = false;
		this.proxy.fraction = this.proxy.fraction_changed = 1.0;
		this.proxy.secondsElapsed = this.proxy.duration;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].initialize();
    if (X3DJSON.nodeUtil("Scene","PlaneMovementSensor")) {
X3DJSON.nodeUtil("Scene","PlaneMovementSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].setPlaneSensorIsActive(X3DJSON.nodeUtil("Scene","PlaneMovementSensor","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].setPlaneSensorIsActive(X3DJSON.nodeUtil("Scene","PlaneMovementSensor","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","PlaneMovementSensor")) {
X3DJSON.nodeUtil("Scene","PlaneMovementSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].setPlaneSensorTranslation(X3DJSON.nodeUtil("Scene","PlaneMovementSensor","translation"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].setPlaneSensorTranslation(X3DJSON.nodeUtil("Scene","PlaneMovementSensor","translation"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","MovementVisibilitySensor")) {
X3DJSON.nodeUtil("Scene","MovementVisibilitySensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].setIsVisible(X3DJSON.nodeUtil("Scene","MovementVisibilitySensor","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].setIsVisible(X3DJSON.nodeUtil("Scene","MovementVisibilitySensor","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","DisplayAllSensor")) {
X3DJSON.nodeUtil("Scene","DisplayAllSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].displayAllToggleEnabled(X3DJSON.nodeUtil("Scene","DisplayAllSensor","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].displayAllToggleEnabled(X3DJSON.nodeUtil("Scene","DisplayAllSensor","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","DisplayTopLayerSensor")) {
X3DJSON.nodeUtil("Scene","DisplayTopLayerSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].topLayerToggleEnabled(X3DJSON.nodeUtil("Scene","DisplayTopLayerSensor","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].topLayerToggleEnabled(X3DJSON.nodeUtil("Scene","DisplayTopLayerSensor","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","DisplayMidLayerSensor")) {
X3DJSON.nodeUtil("Scene","DisplayMidLayerSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].midLayerToggleEnabled(X3DJSON.nodeUtil("Scene","DisplayMidLayerSensor","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].midLayerToggleEnabled(X3DJSON.nodeUtil("Scene","DisplayMidLayerSensor","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","DisplayBottomLayerSensor")) {
X3DJSON.nodeUtil("Scene","DisplayBottomLayerSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].bottomLayerToggleEnabled(X3DJSON.nodeUtil("Scene","DisplayBottomLayerSensor","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].bottomLayerToggleEnabled(X3DJSON.nodeUtil("Scene","DisplayBottomLayerSensor","isActive"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript']['ACTION']['movementControlSwitchSelection'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript']['ACTION']['movementControlSwitchSelection'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript']['ACTION']['movementControlSwitchSelection'].push(function(property, value) {
		if (property === 'movementControlSwitchSelection') {
			X3DJSON.nodeUtil("Scene","MovementControlSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].movementControlSwitchSelection === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].movementControlSwitchSelection() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].movementControlSwitchSelection, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","MovementControlSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].movementControlSwitchSelection === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].movementControlSwitchSelection() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].movementControlSwitchSelection, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript']['ACTION']['displayControlSwitchSelection'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript']['ACTION']['displayControlSwitchSelection'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript']['ACTION']['displayControlSwitchSelection'].push(function(property, value) {
		if (property === 'displayControlSwitchSelection') {
			X3DJSON.nodeUtil("Scene","DisplayControlSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].displayControlSwitchSelection === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].displayControlSwitchSelection() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].displayControlSwitchSelection, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","DisplayControlSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].displayControlSwitchSelection === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].displayControlSwitchSelection() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].displayControlSwitchSelection, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript']['ACTION']['displayAllColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript']['ACTION']['displayAllColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript']['ACTION']['displayAllColor'].push(function(property, value) {
		if (property === 'displayAllColor') {
			X3DJSON.nodeUtil("Scene","DisplayAllMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].displayAllColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].displayAllColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].displayAllColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","DisplayAllMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].displayAllColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].displayAllColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].displayAllColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['masterButtonColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['masterButtonColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['masterButtonColor'].push(function(property, value) {
		if (property === 'masterButtonColor') {
			X3DJSON.nodeUtil("Scene","MasterButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].masterButtonColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].masterButtonColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].masterButtonColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","MasterButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].masterButtonColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].masterButtonColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].masterButtonColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['masterLabelColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['masterLabelColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['masterLabelColor'].push(function(property, value) {
		if (property === 'masterLabelColor') {
			X3DJSON.nodeUtil("Scene","MasterLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].masterLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].masterLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].masterLabelColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","MasterLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].masterLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].masterLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].masterLabelColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['remoteLabelColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['remoteLabelColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['remoteLabelColor'].push(function(property, value) {
		if (property === 'remoteLabelColor') {
			X3DJSON.nodeUtil("Scene","RemoteLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].remoteLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].remoteLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].remoteLabelColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RemoteLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].remoteLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].remoteLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].remoteLabelColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['localLabelColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['localLabelColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['localLabelColor'].push(function(property, value) {
		if (property === 'localLabelColor') {
			X3DJSON.nodeUtil("Scene","LocalLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].localLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].localLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].localLabelColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","LocalLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].localLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].localLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].localLabelColor, __eventTime);
    if (X3DJSON.nodeUtil("Scene","MasterSensor")) {
X3DJSON.nodeUtil("Scene","MasterSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].masterToggleEnabled(X3DJSON.nodeUtil("Scene","MasterSensor","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].masterToggleEnabled(X3DJSON.nodeUtil("Scene","MasterSensor","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","RemoteSensor")) {
X3DJSON.nodeUtil("Scene","RemoteSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].remoteToggleEnabled(X3DJSON.nodeUtil("Scene","RemoteSensor","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].remoteToggleEnabled(X3DJSON.nodeUtil("Scene","RemoteSensor","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","LocalSensor")) {
X3DJSON.nodeUtil("Scene","LocalSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].localToggleEnabled(X3DJSON.nodeUtil("Scene","LocalSensor","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].localToggleEnabled(X3DJSON.nodeUtil("Scene","LocalSensor","isActive"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript']['ACTION']['topLayerSwitchSelection'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript']['ACTION']['topLayerSwitchSelection'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript']['ACTION']['topLayerSwitchSelection'].push(function(property, value) {
		if (property === 'topLayerSwitchSelection') {
			X3DJSON.nodeUtil("Scene","TopLayerSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].topLayerSwitchSelection === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].topLayerSwitchSelection() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].topLayerSwitchSelection, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TopLayerSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].topLayerSwitchSelection === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].topLayerSwitchSelection() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].topLayerSwitchSelection, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['arePlaybackButtonsActive'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['arePlaybackButtonsActive'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['arePlaybackButtonsActive'].push(function(property, value) {
		if (property === 'arePlaybackButtonsActive') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].setIsActive(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].setIsActive(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['resetToStartEnabled'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['resetToStartEnabled'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['resetToStartEnabled'].push(function(property, value) {
		if (property === 'resetToStartEnabled') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].resetToStartEnabled === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].resetToStartEnabled() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].resetToStartEnabled) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartToggleEnabled(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].resetToStartEnabled === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].resetToStartEnabled() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].resetToStartEnabled, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].resetToStartEnabled === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].resetToStartEnabled() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].resetToStartEnabled) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartToggleEnabled(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].resetToStartEnabled === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].resetToStartEnabled() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].resetToStartEnabled, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['playbackButtonLabelColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['playbackButtonLabelColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['playbackButtonLabelColor'].push(function(property, value) {
		if (property === 'playbackButtonLabelColor') {
			X3DJSON.nodeUtil("Scene","ResetToStartLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ResetToStartLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['playbackButtonLabelColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['playbackButtonLabelColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['playbackButtonLabelColor'].push(function(property, value) {
		if (property === 'playbackButtonLabelColor') {
			X3DJSON.nodeUtil("Scene","FastRewindLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FastRewindLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['playbackButtonLabelColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['playbackButtonLabelColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['playbackButtonLabelColor'].push(function(property, value) {
		if (property === 'playbackButtonLabelColor') {
			X3DJSON.nodeUtil("Scene","RewindLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RewindLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['playbackButtonLabelColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['playbackButtonLabelColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['playbackButtonLabelColor'].push(function(property, value) {
		if (property === 'playbackButtonLabelColor') {
			X3DJSON.nodeUtil("Scene","PauseLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PauseLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['playbackButtonLabelColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['playbackButtonLabelColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['playbackButtonLabelColor'].push(function(property, value) {
		if (property === 'playbackButtonLabelColor') {
			X3DJSON.nodeUtil("Scene","PlayLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PlayLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['playbackButtonLabelColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['playbackButtonLabelColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['playbackButtonLabelColor'].push(function(property, value) {
		if (property === 'playbackButtonLabelColor') {
			X3DJSON.nodeUtil("Scene","FastForwardLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FastForwardLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['playbackButtonLabelColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['playbackButtonLabelColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['playbackButtonLabelColor'].push(function(property, value) {
		if (property === 'playbackButtonLabelColor') {
			X3DJSON.nodeUtil("Scene","ResetToEndLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ResetToEndLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['arePlaybackButtonsActive'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['arePlaybackButtonsActive'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['arePlaybackButtonsActive'].push(function(property, value) {
		if (property === 'arePlaybackButtonsActive') {
			X3DJSON.nodeUtil("Scene","ResetToStartSensor","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ResetToStartSensor","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['arePlaybackButtonsActive'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['arePlaybackButtonsActive'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['arePlaybackButtonsActive'].push(function(property, value) {
		if (property === 'arePlaybackButtonsActive') {
			X3DJSON.nodeUtil("Scene","FastRewindSensor","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FastRewindSensor","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['arePlaybackButtonsActive'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['arePlaybackButtonsActive'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['arePlaybackButtonsActive'].push(function(property, value) {
		if (property === 'arePlaybackButtonsActive') {
			X3DJSON.nodeUtil("Scene","RewindSensor","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RewindSensor","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['arePlaybackButtonsActive'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['arePlaybackButtonsActive'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['arePlaybackButtonsActive'].push(function(property, value) {
		if (property === 'arePlaybackButtonsActive') {
			X3DJSON.nodeUtil("Scene","PauseSensor","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PauseSensor","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['arePlaybackButtonsActive'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['arePlaybackButtonsActive'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['arePlaybackButtonsActive'].push(function(property, value) {
		if (property === 'arePlaybackButtonsActive') {
			X3DJSON.nodeUtil("Scene","PlaySensor","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PlaySensor","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['arePlaybackButtonsActive'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['arePlaybackButtonsActive'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['arePlaybackButtonsActive'].push(function(property, value) {
		if (property === 'arePlaybackButtonsActive') {
			X3DJSON.nodeUtil("Scene","FastForwardSensor","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FastForwardSensor","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['arePlaybackButtonsActive'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['arePlaybackButtonsActive'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['arePlaybackButtonsActive'].push(function(property, value) {
		if (property === 'arePlaybackButtonsActive') {
			X3DJSON.nodeUtil("Scene","ResetToEndSensor","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ResetToEndSensor","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['resetToStartButtonColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['resetToStartButtonColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['resetToStartButtonColor'].push(function(property, value) {
		if (property === 'resetToStartButtonColor') {
			X3DJSON.nodeUtil("Scene","ResetToStartButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartButtonColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartButtonColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartButtonColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ResetToStartButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartButtonColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartButtonColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartButtonColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['resetToStartLabelColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['resetToStartLabelColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['resetToStartLabelColor'].push(function(property, value) {
		if (property === 'resetToStartLabelColor') {
			X3DJSON.nodeUtil("Scene","ResetToStartLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartLabelColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ResetToStartLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartLabelColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['fastRewindButtonColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['fastRewindButtonColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['fastRewindButtonColor'].push(function(property, value) {
		if (property === 'fastRewindButtonColor') {
			X3DJSON.nodeUtil("Scene","FastRewindButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindButtonColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindButtonColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindButtonColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FastRewindButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindButtonColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindButtonColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindButtonColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['fastRewindLabelColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['fastRewindLabelColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['fastRewindLabelColor'].push(function(property, value) {
		if (property === 'fastRewindLabelColor') {
			X3DJSON.nodeUtil("Scene","FastRewindLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindLabelColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FastRewindLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindLabelColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['rewindButtonColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['rewindButtonColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['rewindButtonColor'].push(function(property, value) {
		if (property === 'rewindButtonColor') {
			X3DJSON.nodeUtil("Scene","RewindButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindButtonColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindButtonColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindButtonColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RewindButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindButtonColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindButtonColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindButtonColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['rewindLabelColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['rewindLabelColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['rewindLabelColor'].push(function(property, value) {
		if (property === 'rewindLabelColor') {
			X3DJSON.nodeUtil("Scene","RewindLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindLabelColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RewindLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindLabelColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['pauseButtonColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['pauseButtonColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['pauseButtonColor'].push(function(property, value) {
		if (property === 'pauseButtonColor') {
			X3DJSON.nodeUtil("Scene","PauseButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseButtonColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseButtonColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseButtonColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PauseButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseButtonColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseButtonColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseButtonColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['pauseLabelColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['pauseLabelColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['pauseLabelColor'].push(function(property, value) {
		if (property === 'pauseLabelColor') {
			X3DJSON.nodeUtil("Scene","PauseLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseLabelColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PauseLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseLabelColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['playButtonColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['playButtonColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['playButtonColor'].push(function(property, value) {
		if (property === 'playButtonColor') {
			X3DJSON.nodeUtil("Scene","PlayButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playButtonColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playButtonColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playButtonColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PlayButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playButtonColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playButtonColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playButtonColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['playLabelColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['playLabelColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['playLabelColor'].push(function(property, value) {
		if (property === 'playLabelColor') {
			X3DJSON.nodeUtil("Scene","PlayLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playLabelColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PlayLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playLabelColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['fastForwardButtonColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['fastForwardButtonColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['fastForwardButtonColor'].push(function(property, value) {
		if (property === 'fastForwardButtonColor') {
			X3DJSON.nodeUtil("Scene","FastForwardButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardButtonColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardButtonColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardButtonColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FastForwardButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardButtonColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardButtonColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardButtonColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['fastForwardLabelColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['fastForwardLabelColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['fastForwardLabelColor'].push(function(property, value) {
		if (property === 'fastForwardLabelColor') {
			X3DJSON.nodeUtil("Scene","FastForwardLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardLabelColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FastForwardLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardLabelColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['resetToEndButtonColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['resetToEndButtonColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['resetToEndButtonColor'].push(function(property, value) {
		if (property === 'resetToEndButtonColor') {
			X3DJSON.nodeUtil("Scene","ResetToEndButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndButtonColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndButtonColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndButtonColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ResetToEndButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndButtonColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndButtonColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndButtonColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['resetToEndLabelColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['resetToEndLabelColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['resetToEndLabelColor'].push(function(property, value) {
		if (property === 'resetToEndLabelColor') {
			X3DJSON.nodeUtil("Scene","ResetToEndLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndLabelColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ResetToEndLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndLabelColor, __eventTime);
    if (X3DJSON.nodeUtil("Scene","ResetToStartSensor")) {
X3DJSON.nodeUtil("Scene","ResetToStartSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartToggleEnabled(X3DJSON.nodeUtil("Scene","ResetToStartSensor","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartToggleEnabled(X3DJSON.nodeUtil("Scene","ResetToStartSensor","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","FastRewindSensor")) {
X3DJSON.nodeUtil("Scene","FastRewindSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindToggleEnabled(X3DJSON.nodeUtil("Scene","FastRewindSensor","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindToggleEnabled(X3DJSON.nodeUtil("Scene","FastRewindSensor","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","RewindSensor")) {
X3DJSON.nodeUtil("Scene","RewindSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindToggleEnabled(X3DJSON.nodeUtil("Scene","RewindSensor","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindToggleEnabled(X3DJSON.nodeUtil("Scene","RewindSensor","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","PauseSensor")) {
X3DJSON.nodeUtil("Scene","PauseSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseToggleEnabled(X3DJSON.nodeUtil("Scene","PauseSensor","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseToggleEnabled(X3DJSON.nodeUtil("Scene","PauseSensor","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","PlaySensor")) {
X3DJSON.nodeUtil("Scene","PlaySensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playToggleEnabled(X3DJSON.nodeUtil("Scene","PlaySensor","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playToggleEnabled(X3DJSON.nodeUtil("Scene","PlaySensor","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","FastForwardSensor")) {
X3DJSON.nodeUtil("Scene","FastForwardSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardToggleEnabled(X3DJSON.nodeUtil("Scene","FastForwardSensor","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardToggleEnabled(X3DJSON.nodeUtil("Scene","FastForwardSensor","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","ResetToEndSensor")) {
X3DJSON.nodeUtil("Scene","ResetToEndSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndToggleEnabled(X3DJSON.nodeUtil("Scene","ResetToEndSensor","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndToggleEnabled(X3DJSON.nodeUtil("Scene","ResetToEndSensor","isActive"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript']['ACTION']['midLayerSwitchSelection'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript']['ACTION']['midLayerSwitchSelection'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript']['ACTION']['midLayerSwitchSelection'].push(function(property, value) {
		if (property === 'midLayerSwitchSelection') {
			X3DJSON.nodeUtil("Scene","MidLayerSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].midLayerSwitchSelection === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].midLayerSwitchSelection() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].midLayerSwitchSelection, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","MidLayerSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].midLayerSwitchSelection === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].midLayerSwitchSelection() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].midLayerSwitchSelection, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript']['ACTION']['durationOutput'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript']['ACTION']['durationOutput'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript']['ACTION']['durationOutput'].push(function(property, value) {
		if (property === 'durationOutput') {
			X3DJSON.nodeUtil("Scene","DurationText","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'].durationOutput === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'].durationOutput() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'].durationOutput, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","DurationText","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'].durationOutput === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'].durationOutput() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'].durationOutput, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript']['ACTION']['secondsElapsedOutput'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript']['ACTION']['secondsElapsedOutput'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript']['ACTION']['secondsElapsedOutput'].push(function(property, value) {
		if (property === 'secondsElapsedOutput') {
			X3DJSON.nodeUtil("Scene","secondsElapsedText","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'].secondsElapsedOutput === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'].secondsElapsedOutput() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'].secondsElapsedOutput, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","secondsElapsedText","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'].secondsElapsedOutput === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'].secondsElapsedOutput() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'].secondsElapsedOutput, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript']['ACTION']['bottomLayerSwitchSelection'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript']['ACTION']['bottomLayerSwitchSelection'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript']['ACTION']['bottomLayerSwitchSelection'].push(function(property, value) {
		if (property === 'bottomLayerSwitchSelection') {
			X3DJSON.nodeUtil("Scene","BottomLayerSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].bottomLayerSwitchSelection === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].bottomLayerSwitchSelection() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].bottomLayerSwitchSelection, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BottomLayerSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].bottomLayerSwitchSelection === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].bottomLayerSwitchSelection() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].bottomLayerSwitchSelection, __eventTime);
    if (X3DJSON.nodeUtil("Scene","PlaneMovementSensor")) {
X3DJSON.nodeUtil("Scene","PlaneMovementSensor").addEventListener('outputchange', function(event) {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript']['ACTION']['translationChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript']['ACTION']['translationChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript']['ACTION']['translationChanged'].push(function(property, value) {
		if (property === 'translationChanged') {
			X3DJSON.nodeUtil("Scene","MovableLocation","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].translationChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].translationChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].translationChanged, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","MovableLocation","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].translationChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].translationChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].translationChanged, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript']['ACTION']['translationOffsetChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript']['ACTION']['translationOffsetChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript']['ACTION']['translationOffsetChanged'].push(function(property, value) {
		if (property === 'translationOffsetChanged') {
			X3DJSON.nodeUtil("Scene","PlaneMovementSensor","offset",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].translationOffsetChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].translationOffsetChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].translationOffsetChanged, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PlaneMovementSensor","offset",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].translationOffsetChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].translationOffsetChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].translationOffsetChanged, __eventTime);
    if (X3DJSON.nodeUtil("Scene","WhereSensor")) {
X3DJSON.nodeUtil("Scene","WhereSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","WhereSensor")) {
X3DJSON.nodeUtil("Scene","WhereSensor").addEventListener('outputchange', function(event) {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['arePlaybackButtonsActive'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['arePlaybackButtonsActive'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript']['ACTION']['arePlaybackButtonsActive'].push(function(property, value) {
		if (property === 'arePlaybackButtonsActive') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setarePlaybackButtonsActive(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setarePlaybackButtonsActive(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['resetToStartChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['resetToStartChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['resetToStartChanged'].push(function(property, value) {
		if (property === 'resetToStartChanged') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartChanged) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setResetToStart(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartChanged, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartChanged) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setResetToStart(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartChanged, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['fastRewindChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['fastRewindChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['fastRewindChanged'].push(function(property, value) {
		if (property === 'fastRewindChanged') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindChanged) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setFastRewind(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindChanged, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindChanged) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setFastRewind(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindChanged, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['rewindChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['rewindChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['rewindChanged'].push(function(property, value) {
		if (property === 'rewindChanged') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindChanged) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setRewind(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindChanged, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindChanged) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setRewind(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindChanged, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['pauseChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['pauseChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['pauseChanged'].push(function(property, value) {
		if (property === 'pauseChanged') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseChanged) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setPaused(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseChanged, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseChanged) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setPaused(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseChanged, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['playChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['playChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['playChanged'].push(function(property, value) {
		if (property === 'playChanged') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playChanged) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setPlay(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playChanged, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playChanged) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setPlay(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playChanged, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['fastForwardChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['fastForwardChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['fastForwardChanged'].push(function(property, value) {
		if (property === 'fastForwardChanged') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardChanged) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setFastForward(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardChanged, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardChanged) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setFastForward(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardChanged, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['resetToEndChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['resetToEndChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript']['ACTION']['resetToEndChanged'].push(function(property, value) {
		if (property === 'resetToEndChanged') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndChanged) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setResetToEnd(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndChanged, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndChanged) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setResetToEnd(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndChanged, __eventTime);
		}
    if (X3DJSON.nodeUtil("Scene","ForwardClock")) {
X3DJSON.nodeUtil("Scene","ForwardClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setIsClockActive(X3DJSON.nodeUtil("Scene","ForwardClock","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setIsClockActive(X3DJSON.nodeUtil("Scene","ForwardClock","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","ForwardClock")) {
X3DJSON.nodeUtil("Scene","ForwardClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setFraction(X3DJSON.nodeUtil("Scene","ForwardClock","fraction"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setFraction(X3DJSON.nodeUtil("Scene","ForwardClock","fraction"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","ForwardClock")) {
X3DJSON.nodeUtil("Scene","ForwardClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setTime(X3DJSON.nodeUtil("Scene","ForwardClock","time"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setTime(X3DJSON.nodeUtil("Scene","ForwardClock","time"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","RewindClock")) {
X3DJSON.nodeUtil("Scene","RewindClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setIsClockActive(X3DJSON.nodeUtil("Scene","RewindClock","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setIsClockActive(X3DJSON.nodeUtil("Scene","RewindClock","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","RewindClock")) {
X3DJSON.nodeUtil("Scene","RewindClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setRewindFraction(X3DJSON.nodeUtil("Scene","RewindClock","fraction"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setRewindFraction(X3DJSON.nodeUtil("Scene","RewindClock","fraction"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","RewindClock")) {
X3DJSON.nodeUtil("Scene","RewindClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setTime(X3DJSON.nodeUtil("Scene","RewindClock","time"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setTime(X3DJSON.nodeUtil("Scene","RewindClock","time"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","FastForwardClock")) {
X3DJSON.nodeUtil("Scene","FastForwardClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setIsClockActive(X3DJSON.nodeUtil("Scene","FastForwardClock","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setIsClockActive(X3DJSON.nodeUtil("Scene","FastForwardClock","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","FastForwardClock")) {
X3DJSON.nodeUtil("Scene","FastForwardClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setFastForwardFraction(X3DJSON.nodeUtil("Scene","FastForwardClock","fraction"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setFastForwardFraction(X3DJSON.nodeUtil("Scene","FastForwardClock","fraction"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","FastForwardClock")) {
X3DJSON.nodeUtil("Scene","FastForwardClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setTime(X3DJSON.nodeUtil("Scene","FastForwardClock","time"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setTime(X3DJSON.nodeUtil("Scene","FastForwardClock","time"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","FastRewindClock")) {
X3DJSON.nodeUtil("Scene","FastRewindClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setIsClockActive(X3DJSON.nodeUtil("Scene","FastRewindClock","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setIsClockActive(X3DJSON.nodeUtil("Scene","FastRewindClock","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","FastRewindClock")) {
X3DJSON.nodeUtil("Scene","FastRewindClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setFastRewindFraction(X3DJSON.nodeUtil("Scene","FastRewindClock","fraction"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setFastRewindFraction(X3DJSON.nodeUtil("Scene","FastRewindClock","fraction"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","FastRewindClock")) {
X3DJSON.nodeUtil("Scene","FastRewindClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setTime(X3DJSON.nodeUtil("Scene","FastRewindClock","time"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setTime(X3DJSON.nodeUtil("Scene","FastRewindClock","time"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","SliderClock")) {
X3DJSON.nodeUtil("Scene","SliderClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setIsClockActive(X3DJSON.nodeUtil("Scene","SliderClock","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setIsClockActive(X3DJSON.nodeUtil("Scene","SliderClock","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","SliderClock")) {
X3DJSON.nodeUtil("Scene","SliderClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setSliderClockFraction(X3DJSON.nodeUtil("Scene","SliderClock","fraction"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setSliderClockFraction(X3DJSON.nodeUtil("Scene","SliderClock","fraction"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","SliderClock")) {
X3DJSON.nodeUtil("Scene","SliderClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setTime(X3DJSON.nodeUtil("Scene","SliderClock","time"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setTime(X3DJSON.nodeUtil("Scene","SliderClock","time"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['isPlaying'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['isPlaying'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['isPlaying'].push(function(property, value) {
		if (property === 'isPlaying') {
			X3DJSON.nodeUtil("Scene","ForwardClock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isPlaying === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isPlaying() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isPlaying, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ForwardClock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isPlaying === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isPlaying() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isPlaying, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['isRewinding'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['isRewinding'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['isRewinding'].push(function(property, value) {
		if (property === 'isRewinding') {
			X3DJSON.nodeUtil("Scene","RewindClock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isRewinding === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isRewinding() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isRewinding, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RewindClock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isRewinding === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isRewinding() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isRewinding, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['isFastForward'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['isFastForward'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['isFastForward'].push(function(property, value) {
		if (property === 'isFastForward') {
			X3DJSON.nodeUtil("Scene","FastForwardClock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isFastForward === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isFastForward() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isFastForward, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FastForwardClock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isFastForward === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isFastForward() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isFastForward, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['isFastRewind'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['isFastRewind'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['isFastRewind'].push(function(property, value) {
		if (property === 'isFastRewind') {
			X3DJSON.nodeUtil("Scene","FastRewindClock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isFastRewind === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isFastRewind() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isFastRewind, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FastRewindClock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isFastRewind === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isFastRewind() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isFastRewind, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['sliderClockEnabled'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['sliderClockEnabled'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['sliderClockEnabled'].push(function(property, value) {
		if (property === 'sliderClockEnabled') {
			X3DJSON.nodeUtil("Scene","SliderClock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockEnabled === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockEnabled() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockEnabled, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SliderClock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockEnabled === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockEnabled() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockEnabled, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['forwardCycleInterval'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['forwardCycleInterval'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['forwardCycleInterval'].push(function(property, value) {
		if (property === 'forwardCycleInterval') {
			X3DJSON.nodeUtil("Scene","ForwardClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].forwardCycleInterval === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].forwardCycleInterval() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].forwardCycleInterval, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ForwardClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].forwardCycleInterval === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].forwardCycleInterval() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].forwardCycleInterval, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['rewindCycleInterval'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['rewindCycleInterval'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['rewindCycleInterval'].push(function(property, value) {
		if (property === 'rewindCycleInterval') {
			X3DJSON.nodeUtil("Scene","RewindClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindCycleInterval === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindCycleInterval() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindCycleInterval, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RewindClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindCycleInterval === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindCycleInterval() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindCycleInterval, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['fastForwardCycleInterval'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['fastForwardCycleInterval'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['fastForwardCycleInterval'].push(function(property, value) {
		if (property === 'fastForwardCycleInterval') {
			X3DJSON.nodeUtil("Scene","FastForwardClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastForwardCycleInterval === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastForwardCycleInterval() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastForwardCycleInterval, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FastForwardClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastForwardCycleInterval === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastForwardCycleInterval() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastForwardCycleInterval, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['fastRewindCycleInterval'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['fastRewindCycleInterval'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['fastRewindCycleInterval'].push(function(property, value) {
		if (property === 'fastRewindCycleInterval') {
			X3DJSON.nodeUtil("Scene","FastRewindClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastRewindCycleInterval === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastRewindCycleInterval() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastRewindCycleInterval, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FastRewindClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastRewindCycleInterval === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastRewindCycleInterval() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastRewindCycleInterval, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['sliderClockCycleInterval'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['sliderClockCycleInterval'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['sliderClockCycleInterval'].push(function(property, value) {
		if (property === 'sliderClockCycleInterval') {
			X3DJSON.nodeUtil("Scene","SliderClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockCycleInterval === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockCycleInterval() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockCycleInterval, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SliderClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockCycleInterval === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockCycleInterval() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockCycleInterval, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['startTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['startTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['startTime'].push(function(property, value) {
		if (property === 'startTime') {
			X3DJSON.nodeUtil("Scene","ForwardClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].startTime_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].startTime_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].startTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ForwardClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].startTime_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].startTime_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].startTime, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['stopTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['stopTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['stopTime'].push(function(property, value) {
		if (property === 'stopTime') {
			X3DJSON.nodeUtil("Scene","ForwardClock","stopTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].stopTime_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].stopTime_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].stopTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ForwardClock","stopTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].stopTime_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].stopTime_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].stopTime, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['rewindStartTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['rewindStartTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['rewindStartTime'].push(function(property, value) {
		if (property === 'rewindStartTime') {
			X3DJSON.nodeUtil("Scene","RewindClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindStartTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindStartTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindStartTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RewindClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindStartTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindStartTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindStartTime, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['rewindStopTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['rewindStopTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['rewindStopTime'].push(function(property, value) {
		if (property === 'rewindStopTime') {
			X3DJSON.nodeUtil("Scene","RewindClock","stopTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindStopTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindStopTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindStopTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RewindClock","stopTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindStopTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindStopTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindStopTime, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['fastForwardStartTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['fastForwardStartTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['fastForwardStartTime'].push(function(property, value) {
		if (property === 'fastForwardStartTime') {
			X3DJSON.nodeUtil("Scene","FastForwardClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastForwardStartTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastForwardStartTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastForwardStartTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FastForwardClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastForwardStartTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastForwardStartTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastForwardStartTime, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['fastForwardStopTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['fastForwardStopTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['fastForwardStopTime'].push(function(property, value) {
		if (property === 'fastForwardStopTime') {
			X3DJSON.nodeUtil("Scene","FastForwardClock","stopTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastForwardStopTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastForwardStopTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastForwardStopTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FastForwardClock","stopTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastForwardStopTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastForwardStopTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastForwardStopTime, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['fastRewindStartTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['fastRewindStartTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['fastRewindStartTime'].push(function(property, value) {
		if (property === 'fastRewindStartTime') {
			X3DJSON.nodeUtil("Scene","FastRewindClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastRewindStartTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastRewindStartTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastRewindStartTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FastRewindClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastRewindStartTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastRewindStartTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastRewindStartTime, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['fastRewindStopTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['fastRewindStopTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['fastRewindStopTime'].push(function(property, value) {
		if (property === 'fastRewindStopTime') {
			X3DJSON.nodeUtil("Scene","FastRewindClock","stopTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastRewindStopTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastRewindStopTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastRewindStopTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FastRewindClock","stopTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastRewindStopTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastRewindStopTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastRewindStopTime, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['sliderClockStartTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['sliderClockStartTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['sliderClockStartTime'].push(function(property, value) {
		if (property === 'sliderClockStartTime') {
			X3DJSON.nodeUtil("Scene","SliderClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockStartTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockStartTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockStartTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SliderClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockStartTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockStartTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockStartTime, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['sliderClockStopTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['sliderClockStopTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['sliderClockStopTime'].push(function(property, value) {
		if (property === 'sliderClockStopTime') {
			X3DJSON.nodeUtil("Scene","SliderClock","stopTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockStopTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockStopTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockStopTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SliderClock","stopTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockStopTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockStopTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockStopTime, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['fraction'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['fraction'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['fraction'].push(function(property, value) {
		if (property === 'fraction') {
			X3DJSON.nodeUtil("Scene","Slider","setValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fraction_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fraction_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fraction, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Slider","setValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fraction_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fraction_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fraction, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateButtonColorChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateButtonColorChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateButtonColorChanged'].push(function(property, value) {
		if (property === 'deactivateButtonColorChanged') {
			X3DJSON.nodeUtil("Scene","ResetToStartButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ResetToStartButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateLabelColorChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateLabelColorChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateLabelColorChanged'].push(function(property, value) {
		if (property === 'deactivateLabelColorChanged') {
			X3DJSON.nodeUtil("Scene","ResetToStartLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ResetToStartLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateButtonColorChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateButtonColorChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateButtonColorChanged'].push(function(property, value) {
		if (property === 'deactivateButtonColorChanged') {
			X3DJSON.nodeUtil("Scene","FastRewindButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FastRewindButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateLabelColorChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateLabelColorChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateLabelColorChanged'].push(function(property, value) {
		if (property === 'deactivateLabelColorChanged') {
			X3DJSON.nodeUtil("Scene","FastRewindLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FastRewindLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateButtonColorChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateButtonColorChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateButtonColorChanged'].push(function(property, value) {
		if (property === 'deactivateButtonColorChanged') {
			X3DJSON.nodeUtil("Scene","RewindButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RewindButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateLabelColorChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateLabelColorChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateLabelColorChanged'].push(function(property, value) {
		if (property === 'deactivateLabelColorChanged') {
			X3DJSON.nodeUtil("Scene","RewindLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RewindLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateButtonColorChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateButtonColorChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateButtonColorChanged'].push(function(property, value) {
		if (property === 'deactivateButtonColorChanged') {
			X3DJSON.nodeUtil("Scene","PauseButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PauseButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateLabelColorChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateLabelColorChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateLabelColorChanged'].push(function(property, value) {
		if (property === 'deactivateLabelColorChanged') {
			X3DJSON.nodeUtil("Scene","PauseLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PauseLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateButtonColorChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateButtonColorChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateButtonColorChanged'].push(function(property, value) {
		if (property === 'deactivateButtonColorChanged') {
			X3DJSON.nodeUtil("Scene","PlayButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PlayButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateLabelColorChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateLabelColorChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateLabelColorChanged'].push(function(property, value) {
		if (property === 'deactivateLabelColorChanged') {
			X3DJSON.nodeUtil("Scene","PlayLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PlayLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateButtonColorChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateButtonColorChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateButtonColorChanged'].push(function(property, value) {
		if (property === 'deactivateButtonColorChanged') {
			X3DJSON.nodeUtil("Scene","FastForwardButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FastForwardButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateLabelColorChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateLabelColorChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateLabelColorChanged'].push(function(property, value) {
		if (property === 'deactivateLabelColorChanged') {
			X3DJSON.nodeUtil("Scene","FastForwardLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FastForwardLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateButtonColorChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateButtonColorChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateButtonColorChanged'].push(function(property, value) {
		if (property === 'deactivateButtonColorChanged') {
			X3DJSON.nodeUtil("Scene","ResetToEndButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ResetToEndButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateLabelColorChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateLabelColorChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['deactivateLabelColorChanged'].push(function(property, value) {
		if (property === 'deactivateLabelColorChanged') {
			X3DJSON.nodeUtil("Scene","ResetToEndLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ResetToEndLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['playButtonActivateColorChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['playButtonActivateColorChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['playButtonActivateColorChanged'].push(function(property, value) {
		if (property === 'playButtonActivateColorChanged') {
			X3DJSON.nodeUtil("Scene","PlayButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].playButtonActivateColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].playButtonActivateColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].playButtonActivateColorChanged, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PlayButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].playButtonActivateColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].playButtonActivateColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].playButtonActivateColorChanged, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['playLabelActivateColorChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['playLabelActivateColorChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['playLabelActivateColorChanged'].push(function(property, value) {
		if (property === 'playLabelActivateColorChanged') {
			X3DJSON.nodeUtil("Scene","PlayLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].playLabelActivateColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].playLabelActivateColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].playLabelActivateColorChanged, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","PlayLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].playLabelActivateColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].playLabelActivateColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].playLabelActivateColorChanged, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['rewindButtonActivateColorChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['rewindButtonActivateColorChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['rewindButtonActivateColorChanged'].push(function(property, value) {
		if (property === 'rewindButtonActivateColorChanged') {
			X3DJSON.nodeUtil("Scene","RewindButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindButtonActivateColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindButtonActivateColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindButtonActivateColorChanged, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RewindButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindButtonActivateColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindButtonActivateColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindButtonActivateColorChanged, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['rewindLabelActivateColorChanged'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['rewindLabelActivateColorChanged'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['rewindLabelActivateColorChanged'].push(function(property, value) {
		if (property === 'rewindLabelActivateColorChanged') {
			X3DJSON.nodeUtil("Scene","RewindLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindLabelActivateColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindLabelActivateColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindLabelActivateColorChanged, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RewindLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindLabelActivateColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindLabelActivateColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindLabelActivateColorChanged, __eventTime);
    if (X3DJSON.nodeUtil("Scene","Slider")) {
X3DJSON.nodeUtil("Scene","Slider").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setSliderDragFraction(X3DJSON.nodeUtil("Scene","Slider","valueChanged"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setSliderDragFraction(X3DJSON.nodeUtil("Scene","Slider","valueChanged"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['secondsElapsed'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['secondsElapsed'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript']['ACTION']['secondsElapsed'].push(function(property, value) {
		if (property === 'secondsElapsed') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].secondsElapsed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].secondsElapsed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].secondsElapsed) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'].setSecondsElapsed(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].secondsElapsed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].secondsElapsed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].secondsElapsed, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].secondsElapsed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].secondsElapsed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].secondsElapsed) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'].setSecondsElapsed(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].secondsElapsed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].secondsElapsed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].secondsElapsed, __eventTime);
		}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].setPlaneSensorIsActive(X3DJSON.nodeUtil("Scene","PlaneMovementSensor","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].setPlaneSensorTranslation(X3DJSON.nodeUtil("Scene","PlaneMovementSensor","translation"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].setIsVisible(X3DJSON.nodeUtil("Scene","MovementVisibilitySensor","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].displayAllToggleEnabled(X3DJSON.nodeUtil("Scene","DisplayAllSensor","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].topLayerToggleEnabled(X3DJSON.nodeUtil("Scene","DisplayTopLayerSensor","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].midLayerToggleEnabled(X3DJSON.nodeUtil("Scene","DisplayMidLayerSensor","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].bottomLayerToggleEnabled(X3DJSON.nodeUtil("Scene","DisplayBottomLayerSensor","isActive"), __eventTime);
			X3DJSON.nodeUtil("Scene","MovementControlSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].movementControlSwitchSelection === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].movementControlSwitchSelection() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].movementControlSwitchSelection, __eventTime);
			X3DJSON.nodeUtil("Scene","DisplayControlSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].displayControlSwitchSelection === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].displayControlSwitchSelection() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].displayControlSwitchSelection, __eventTime);
			X3DJSON.nodeUtil("Scene","DisplayAllMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].displayAllColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].displayAllColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].displayAllColor, __eventTime);
			X3DJSON.nodeUtil("Scene","MasterButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].masterButtonColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].masterButtonColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].masterButtonColor, __eventTime);
			X3DJSON.nodeUtil("Scene","MasterLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].masterLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].masterLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].masterLabelColor, __eventTime);
			X3DJSON.nodeUtil("Scene","RemoteLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].remoteLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].remoteLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].remoteLabelColor, __eventTime);
			X3DJSON.nodeUtil("Scene","LocalLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].localLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].localLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].localLabelColor, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].masterToggleEnabled(X3DJSON.nodeUtil("Scene","MasterSensor","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].remoteToggleEnabled(X3DJSON.nodeUtil("Scene","RemoteSensor","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].localToggleEnabled(X3DJSON.nodeUtil("Scene","LocalSensor","isActive"), __eventTime);
			X3DJSON.nodeUtil("Scene","TopLayerSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].topLayerSwitchSelection === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].topLayerSwitchSelection() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].topLayerSwitchSelection, __eventTime);
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].setIsActive(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].resetToStartEnabled === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].resetToStartEnabled() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].resetToStartEnabled) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartToggleEnabled(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].resetToStartEnabled === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].resetToStartEnabled() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].resetToStartEnabled, __eventTime);
		}
			X3DJSON.nodeUtil("Scene","ResetToStartLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor, __eventTime);
			X3DJSON.nodeUtil("Scene","FastRewindLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor, __eventTime);
			X3DJSON.nodeUtil("Scene","RewindLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor, __eventTime);
			X3DJSON.nodeUtil("Scene","PauseLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor, __eventTime);
			X3DJSON.nodeUtil("Scene","PlayLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor, __eventTime);
			X3DJSON.nodeUtil("Scene","FastForwardLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor, __eventTime);
			X3DJSON.nodeUtil("Scene","ResetToEndLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].playbackButtonLabelColor, __eventTime);
			X3DJSON.nodeUtil("Scene","ResetToStartSensor","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive, __eventTime);
			X3DJSON.nodeUtil("Scene","FastRewindSensor","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive, __eventTime);
			X3DJSON.nodeUtil("Scene","RewindSensor","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive, __eventTime);
			X3DJSON.nodeUtil("Scene","PauseSensor","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive, __eventTime);
			X3DJSON.nodeUtil("Scene","PlaySensor","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive, __eventTime);
			X3DJSON.nodeUtil("Scene","FastForwardSensor","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive, __eventTime);
			X3DJSON.nodeUtil("Scene","ResetToEndSensor","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive, __eventTime);
			X3DJSON.nodeUtil("Scene","ResetToStartButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartButtonColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartButtonColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartButtonColor, __eventTime);
			X3DJSON.nodeUtil("Scene","ResetToStartLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartLabelColor, __eventTime);
			X3DJSON.nodeUtil("Scene","FastRewindButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindButtonColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindButtonColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindButtonColor, __eventTime);
			X3DJSON.nodeUtil("Scene","FastRewindLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindLabelColor, __eventTime);
			X3DJSON.nodeUtil("Scene","RewindButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindButtonColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindButtonColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindButtonColor, __eventTime);
			X3DJSON.nodeUtil("Scene","RewindLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindLabelColor, __eventTime);
			X3DJSON.nodeUtil("Scene","PauseButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseButtonColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseButtonColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseButtonColor, __eventTime);
			X3DJSON.nodeUtil("Scene","PauseLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseLabelColor, __eventTime);
			X3DJSON.nodeUtil("Scene","PlayButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playButtonColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playButtonColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playButtonColor, __eventTime);
			X3DJSON.nodeUtil("Scene","PlayLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playLabelColor, __eventTime);
			X3DJSON.nodeUtil("Scene","FastForwardButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardButtonColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardButtonColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardButtonColor, __eventTime);
			X3DJSON.nodeUtil("Scene","FastForwardLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardLabelColor, __eventTime);
			X3DJSON.nodeUtil("Scene","ResetToEndButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndButtonColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndButtonColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndButtonColor, __eventTime);
			X3DJSON.nodeUtil("Scene","ResetToEndLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndLabelColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndLabelColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndLabelColor, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartToggleEnabled(X3DJSON.nodeUtil("Scene","ResetToStartSensor","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindToggleEnabled(X3DJSON.nodeUtil("Scene","FastRewindSensor","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindToggleEnabled(X3DJSON.nodeUtil("Scene","RewindSensor","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseToggleEnabled(X3DJSON.nodeUtil("Scene","PauseSensor","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playToggleEnabled(X3DJSON.nodeUtil("Scene","PlaySensor","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardToggleEnabled(X3DJSON.nodeUtil("Scene","FastForwardSensor","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndToggleEnabled(X3DJSON.nodeUtil("Scene","ResetToEndSensor","isActive"), __eventTime);
			X3DJSON.nodeUtil("Scene","MidLayerSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].midLayerSwitchSelection === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].midLayerSwitchSelection() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].midLayerSwitchSelection, __eventTime);
			X3DJSON.nodeUtil("Scene","DurationText","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'].durationOutput === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'].durationOutput() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'].durationOutput, __eventTime);
			X3DJSON.nodeUtil("Scene","secondsElapsedText","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'].secondsElapsedOutput === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'].secondsElapsedOutput() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'].secondsElapsedOutput, __eventTime);
			X3DJSON.nodeUtil("Scene","BottomLayerSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].bottomLayerSwitchSelection === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].bottomLayerSwitchSelection() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DisplayLayerScript'].bottomLayerSwitchSelection, __eventTime);
			X3DJSON.nodeUtil("Scene","MovableLocation","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].translationChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].translationChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].translationChanged, __eventTime);
			X3DJSON.nodeUtil("Scene","PlaneMovementSensor","offset",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].translationOffsetChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].translationOffsetChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['VisibilityControlScript'].translationOffsetChanged, __eventTime);
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setarePlaybackButtonsActive(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['DISModeScript'].arePlaybackButtonsActive, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartChanged) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setResetToStart(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToStartChanged, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindChanged) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setFastRewind(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastRewindChanged, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindChanged) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setRewind(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].rewindChanged, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseChanged) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setPaused(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].pauseChanged, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playChanged) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setPlay(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].playChanged, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardChanged) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setFastForward(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].fastForwardChanged, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndChanged) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setResetToEnd(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['PlaybackControlScript'].resetToEndChanged, __eventTime);
		}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setIsClockActive(X3DJSON.nodeUtil("Scene","ForwardClock","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setFraction(X3DJSON.nodeUtil("Scene","ForwardClock","fraction"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setTime(X3DJSON.nodeUtil("Scene","ForwardClock","time"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setIsClockActive(X3DJSON.nodeUtil("Scene","RewindClock","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setRewindFraction(X3DJSON.nodeUtil("Scene","RewindClock","fraction"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setTime(X3DJSON.nodeUtil("Scene","RewindClock","time"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setIsClockActive(X3DJSON.nodeUtil("Scene","FastForwardClock","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setFastForwardFraction(X3DJSON.nodeUtil("Scene","FastForwardClock","fraction"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setTime(X3DJSON.nodeUtil("Scene","FastForwardClock","time"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setIsClockActive(X3DJSON.nodeUtil("Scene","FastRewindClock","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setFastRewindFraction(X3DJSON.nodeUtil("Scene","FastRewindClock","fraction"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setTime(X3DJSON.nodeUtil("Scene","FastRewindClock","time"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setIsClockActive(X3DJSON.nodeUtil("Scene","SliderClock","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setSliderClockFraction(X3DJSON.nodeUtil("Scene","SliderClock","fraction"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setTime(X3DJSON.nodeUtil("Scene","SliderClock","time"), __eventTime);
			X3DJSON.nodeUtil("Scene","ForwardClock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isPlaying === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isPlaying() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isPlaying, __eventTime);
			X3DJSON.nodeUtil("Scene","RewindClock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isRewinding === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isRewinding() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isRewinding, __eventTime);
			X3DJSON.nodeUtil("Scene","FastForwardClock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isFastForward === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isFastForward() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isFastForward, __eventTime);
			X3DJSON.nodeUtil("Scene","FastRewindClock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isFastRewind === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isFastRewind() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].isFastRewind, __eventTime);
			X3DJSON.nodeUtil("Scene","SliderClock","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockEnabled === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockEnabled() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockEnabled, __eventTime);
			X3DJSON.nodeUtil("Scene","ForwardClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].forwardCycleInterval === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].forwardCycleInterval() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].forwardCycleInterval, __eventTime);
			X3DJSON.nodeUtil("Scene","RewindClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindCycleInterval === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindCycleInterval() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindCycleInterval, __eventTime);
			X3DJSON.nodeUtil("Scene","FastForwardClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastForwardCycleInterval === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastForwardCycleInterval() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastForwardCycleInterval, __eventTime);
			X3DJSON.nodeUtil("Scene","FastRewindClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastRewindCycleInterval === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastRewindCycleInterval() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastRewindCycleInterval, __eventTime);
			X3DJSON.nodeUtil("Scene","SliderClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockCycleInterval === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockCycleInterval() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockCycleInterval, __eventTime);
			X3DJSON.nodeUtil("Scene","ForwardClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].startTime_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].startTime_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].startTime, __eventTime);
			X3DJSON.nodeUtil("Scene","ForwardClock","stopTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].stopTime_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].stopTime_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].stopTime, __eventTime);
			X3DJSON.nodeUtil("Scene","RewindClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindStartTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindStartTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindStartTime, __eventTime);
			X3DJSON.nodeUtil("Scene","RewindClock","stopTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindStopTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindStopTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindStopTime, __eventTime);
			X3DJSON.nodeUtil("Scene","FastForwardClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastForwardStartTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastForwardStartTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastForwardStartTime, __eventTime);
			X3DJSON.nodeUtil("Scene","FastForwardClock","stopTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastForwardStopTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastForwardStopTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastForwardStopTime, __eventTime);
			X3DJSON.nodeUtil("Scene","FastRewindClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastRewindStartTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastRewindStartTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastRewindStartTime, __eventTime);
			X3DJSON.nodeUtil("Scene","FastRewindClock","stopTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastRewindStopTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastRewindStopTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fastRewindStopTime, __eventTime);
			X3DJSON.nodeUtil("Scene","SliderClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockStartTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockStartTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockStartTime, __eventTime);
			X3DJSON.nodeUtil("Scene","SliderClock","stopTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockStopTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockStopTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].sliderClockStopTime, __eventTime);
			X3DJSON.nodeUtil("Scene","Slider","setValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fraction_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fraction_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].fraction, __eventTime);
			X3DJSON.nodeUtil("Scene","ResetToStartButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged, __eventTime);
			X3DJSON.nodeUtil("Scene","ResetToStartLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged, __eventTime);
			X3DJSON.nodeUtil("Scene","FastRewindButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged, __eventTime);
			X3DJSON.nodeUtil("Scene","FastRewindLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged, __eventTime);
			X3DJSON.nodeUtil("Scene","RewindButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged, __eventTime);
			X3DJSON.nodeUtil("Scene","RewindLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged, __eventTime);
			X3DJSON.nodeUtil("Scene","PauseButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged, __eventTime);
			X3DJSON.nodeUtil("Scene","PauseLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged, __eventTime);
			X3DJSON.nodeUtil("Scene","PlayButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged, __eventTime);
			X3DJSON.nodeUtil("Scene","PlayLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged, __eventTime);
			X3DJSON.nodeUtil("Scene","FastForwardButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged, __eventTime);
			X3DJSON.nodeUtil("Scene","FastForwardLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged, __eventTime);
			X3DJSON.nodeUtil("Scene","ResetToEndButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateButtonColorChanged, __eventTime);
			X3DJSON.nodeUtil("Scene","ResetToEndLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].deactivateLabelColorChanged, __eventTime);
			X3DJSON.nodeUtil("Scene","PlayButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].playButtonActivateColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].playButtonActivateColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].playButtonActivateColorChanged, __eventTime);
			X3DJSON.nodeUtil("Scene","PlayLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].playLabelActivateColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].playLabelActivateColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].playLabelActivateColorChanged, __eventTime);
			X3DJSON.nodeUtil("Scene","RewindButtonMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindButtonActivateColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindButtonActivateColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindButtonActivateColorChanged, __eventTime);
			X3DJSON.nodeUtil("Scene","RewindLabelMaterial","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindLabelActivateColorChanged === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindLabelActivateColorChanged() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].rewindLabelActivateColorChanged, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].setSliderDragFraction(X3DJSON.nodeUtil("Scene","Slider","valueChanged"), __eventTime);
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].secondsElapsed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].secondsElapsed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].secondsElapsed) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['TimeScaleScript'].setSecondsElapsed(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].secondsElapsed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].secondsElapsed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerPrototype.json']['ClockScript'].secondsElapsed, __eventTime);
		}