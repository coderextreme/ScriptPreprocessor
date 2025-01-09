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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['WhereDump'] = function() {
	this.set_position = function (value) {
		try {
			this.proxy.position = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting position '+e);
			console.error('Problems setting position',e);
		}
	};
	this.position_changed = function () {
		var value = this.position;
		return value;
	};
	try {
		this.position = new SFVec3f();
	} catch (e) {
		console.log('Problems setting position '+e);
		console.error('Problems setting position',e);
	}
	this.set_orientation = function (value) {
		try {
			this.proxy.orientation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting orientation '+e);
			console.error('Problems setting orientation',e);
		}
	};
	this.orientation_changed = function () {
		var value = this.orientation;
		return value;
	};
	try {
		this.orientation = new SFRotation();
	} catch (e) {
		console.log('Problems setting orientation '+e);
		console.error('Problems setting orientation',e);
	}


ecmascript:

	this.position = function (value)
{
  console.error ('Position (X,Y,Z) = ' + value[0] +
	  ', ' + value[1] + ', ' + value[2]);
};

	this.orientation = function (value)
{
   console.error ('Orientation (X,Y,Z,R) = ' + value[0] +
	', ' + value[1] + ', ' + value[2] +
	', ' + value[3]);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['WhereDump'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['WhereDump']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['WhereDump'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['WhereDump'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['WhereDump']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['WhereDump']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['WhereDump'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['WhereDump']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['WhereDump']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['WhereDump'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['WhereDump'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'] = function() {
	this.set_touched80m = function (value) {
		try {
			this.proxy.touched80m = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting touched80m '+e);
			console.error('Problems setting touched80m',e);
		}
	};
	this.touched80m_changed = function () {
		var value = this.touched80m;
		return value;
	};
	try {
		this.touched80m = new SFBool();
	} catch (e) {
		console.log('Problems setting touched80m '+e);
		console.error('Problems setting touched80m',e);
	}
	this.set_touched40m = function (value) {
		try {
			this.proxy.touched40m = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting touched40m '+e);
			console.error('Problems setting touched40m',e);
		}
	};
	this.touched40m_changed = function () {
		var value = this.touched40m;
		return value;
	};
	try {
		this.touched40m = new SFBool();
	} catch (e) {
		console.log('Problems setting touched40m '+e);
		console.error('Problems setting touched40m',e);
	}
	this.set_touched20m = function (value) {
		try {
			this.proxy.touched20m = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting touched20m '+e);
			console.error('Problems setting touched20m',e);
		}
	};
	this.touched20m_changed = function () {
		var value = this.touched20m;
		return value;
	};
	try {
		this.touched20m = new SFBool();
	} catch (e) {
		console.log('Problems setting touched20m '+e);
		console.error('Problems setting touched20m',e);
	}
	this.set_touched10m = function (value) {
		try {
			this.proxy.touched10m = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting touched10m '+e);
			console.error('Problems setting touched10m',e);
		}
	};
	this.touched10m_changed = function () {
		var value = this.touched10m;
		return value;
	};
	try {
		this.touched10m = new SFBool();
	} catch (e) {
		console.log('Problems setting touched10m '+e);
		console.error('Problems setting touched10m',e);
	}
	this.set_selection = function (value) {
		try {
			this.proxy.selection = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting selection '+e);
			console.error('Problems setting selection',e);
		}
	};
	this.selection_changed = function () {
		var value = this.selection;
		return value;
	};
	try {
		this.selection = new SFInt32();
	} catch (e) {
		console.log('Problems setting selection '+e);
		console.error('Problems setting selection',e);
	}
	this.set_color80m = function (value) {
		try {
			this.proxy.color80m = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting color80m '+e);
			console.error('Problems setting color80m',e);
		}
	};
	this.color80m_changed = function () {
		var value = this.color80m;
		return value;
	};
	try {
		this.color80m = new SFColor();
	} catch (e) {
		console.log('Problems setting color80m '+e);
		console.error('Problems setting color80m',e);
	}
	this.set_color40m = function (value) {
		try {
			this.proxy.color40m = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting color40m '+e);
			console.error('Problems setting color40m',e);
		}
	};
	this.color40m_changed = function () {
		var value = this.color40m;
		return value;
	};
	try {
		this.color40m = new SFColor();
	} catch (e) {
		console.log('Problems setting color40m '+e);
		console.error('Problems setting color40m',e);
	}
	this.set_color20m = function (value) {
		try {
			this.proxy.color20m = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting color20m '+e);
			console.error('Problems setting color20m',e);
		}
	};
	this.color20m_changed = function () {
		var value = this.color20m;
		return value;
	};
	try {
		this.color20m = new SFColor();
	} catch (e) {
		console.log('Problems setting color20m '+e);
		console.error('Problems setting color20m',e);
	}
	this.set_color10m = function (value) {
		try {
			this.proxy.color10m = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting color10m '+e);
			console.error('Problems setting color10m',e);
		}
	};
	this.color10m_changed = function () {
		var value = this.color10m;
		return value;
	};
	try {
		this.color10m = new SFColor();
	} catch (e) {
		console.log('Problems setting color10m '+e);
		console.error('Problems setting color10m',e);
	}
	this.set_color05m = function (value) {
		try {
			this.proxy.color05m = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting color05m '+e);
			console.error('Problems setting color05m',e);
		}
	};
	this.color05m_changed = function () {
		var value = this.color05m;
		return value;
	};
	try {
		this.color05m = new SFColor();
	} catch (e) {
		console.log('Problems setting color05m '+e);
		console.error('Problems setting color05m',e);
	}
	this.set_touched05m = function (value) {
		try {
			this.proxy.touched05m = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting touched05m '+e);
			console.error('Problems setting touched05m',e);
		}
	};
	this.touched05m_changed = function () {
		var value = this.touched05m;
		return value;
	};
	try {
		this.touched05m = new SFBool();
	} catch (e) {
		console.log('Problems setting touched05m '+e);
		console.error('Problems setting touched05m',e);
	}


ecmascript:

// only react to 'true' TouchSensor events, cut computation of normals etc. in half

	this.touched80m = function (value, ts)
{
  if (value == true)
  {
	this.proxy.selection = 0;
	this.proxy.color80m  = new SFColor (0, .8, 0);
	this.proxy.color40m  = new SFColor (.8, 0, 0);
	this.proxy.color20m  = new SFColor (.8, 0, 0);
	this.proxy.color10m  = new SFColor (.8, 0, 0);
	this.proxy.color05m  = new SFColor (.8, 0, 0);
  }
};

	this.touched40m = function (value, ts)
{
  if (value == true)
  {
	this.proxy.selection = 1;
	this.proxy.color80m  = new SFColor (.8, 0, 0);
	this.proxy.color40m  = new SFColor (0, .8, 0);
	this.proxy.color20m  = new SFColor (.8, 0, 0);
	this.proxy.color10m  = new SFColor (.8, 0, 0);
	this.proxy.color05m  = new SFColor (.8, 0, 0);
  }
};

	this.touched20m = function (value, ts)
{
  if (value == true)
  {
	this.proxy.selection = 2;
	this.proxy.color80m  = new SFColor (.8, 0, 0);
	this.proxy.color40m  = new SFColor (.8, 0, 0);
	this.proxy.color20m  = new SFColor (0, .8, 0);
	this.proxy.color10m  = new SFColor (.8, 0, 0);
	this.proxy.color05m  = new SFColor (.8, 0, 0);
  }
};

	this.touched10m = function (value, ts)
{
  if (value == true)
  {
	this.proxy.selection = 3;
	this.proxy.color80m  = new SFColor (.8, 0, 0);
	this.proxy.color40m  = new SFColor (.8, 0, 0);
	this.proxy.color20m  = new SFColor (.8, 0, 0);
	this.proxy.color10m  = new SFColor (0, .8, 0);
	this.proxy.color05m  = new SFColor (.8, 0, 0);
  }
};

	this.touched05m = function (value, ts)
{
  console.error ('05m dataset not available...'); // goes to VRML console only, not scene
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].initialize();
    if (X3DJSON.nodeUtil("Scene","Where")) {
X3DJSON.nodeUtil("Scene","Where").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['WhereDump'].position(X3DJSON.nodeUtil("Scene","Where","position"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['WhereDump'].position(X3DJSON.nodeUtil("Scene","Where","position"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","Where")) {
X3DJSON.nodeUtil("Scene","Where").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['WhereDump'].orientation(X3DJSON.nodeUtil("Scene","Where","orientation"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['WhereDump'].orientation(X3DJSON.nodeUtil("Scene","Where","orientation"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCH_80m")) {
X3DJSON.nodeUtil("Scene","TOUCH_80m").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].touched80m(X3DJSON.nodeUtil("Scene","TOUCH_80m","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].touched80m(X3DJSON.nodeUtil("Scene","TOUCH_80m","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCH_40m")) {
X3DJSON.nodeUtil("Scene","TOUCH_40m").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].touched40m(X3DJSON.nodeUtil("Scene","TOUCH_40m","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].touched40m(X3DJSON.nodeUtil("Scene","TOUCH_40m","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCH_20m")) {
X3DJSON.nodeUtil("Scene","TOUCH_20m").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].touched20m(X3DJSON.nodeUtil("Scene","TOUCH_20m","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].touched20m(X3DJSON.nodeUtil("Scene","TOUCH_20m","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCH_10m")) {
X3DJSON.nodeUtil("Scene","TOUCH_10m").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].touched10m(X3DJSON.nodeUtil("Scene","TOUCH_10m","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].touched10m(X3DJSON.nodeUtil("Scene","TOUCH_10m","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCH_05m")) {
X3DJSON.nodeUtil("Scene","TOUCH_05m").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].touched05m(X3DJSON.nodeUtil("Scene","TOUCH_05m","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].touched05m(X3DJSON.nodeUtil("Scene","TOUCH_05m","isActive"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION']['ACTION']['selection'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION']['ACTION']['selection'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION']['ACTION']['selection'].push(function(property, value) {
		if (property === 'selection') {
			X3DJSON.nodeUtil("Scene","BATHYMETRY_SWITCH","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].selection === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].selection() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].selection, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BATHYMETRY_SWITCH","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].selection === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].selection() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].selection, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION']['ACTION']['color80m'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION']['ACTION']['color80m'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION']['ACTION']['color80m'].push(function(property, value) {
		if (property === 'color80m') {
			X3DJSON.nodeUtil("Scene","MATERIAL_80m","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color80m === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color80m() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color80m, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","MATERIAL_80m","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color80m === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color80m() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color80m, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION']['ACTION']['color40m'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION']['ACTION']['color40m'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION']['ACTION']['color40m'].push(function(property, value) {
		if (property === 'color40m') {
			X3DJSON.nodeUtil("Scene","MATERIAL_40m","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color40m === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color40m() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color40m, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","MATERIAL_40m","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color40m === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color40m() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color40m, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION']['ACTION']['color20m'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION']['ACTION']['color20m'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION']['ACTION']['color20m'].push(function(property, value) {
		if (property === 'color20m') {
			X3DJSON.nodeUtil("Scene","MATERIAL_20m","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color20m === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color20m() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color20m, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","MATERIAL_20m","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color20m === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color20m() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color20m, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION']['ACTION']['color10m'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION']['ACTION']['color10m'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION']['ACTION']['color10m'].push(function(property, value) {
		if (property === 'color10m') {
			X3DJSON.nodeUtil("Scene","MATERIAL_10m","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color10m === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color10m() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color10m, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","MATERIAL_10m","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color10m === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color10m() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color10m, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION']['ACTION']['color05m'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION']['ACTION']['color05m'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION']['ACTION']['color05m'].push(function(property, value) {
		if (property === 'color05m') {
			X3DJSON.nodeUtil("Scene","MATERIAL_05m","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color05m === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color05m() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color05m, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","MATERIAL_05m","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color05m === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color05m() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color05m, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['WhereDump'].position(X3DJSON.nodeUtil("Scene","Where","position"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['WhereDump'].orientation(X3DJSON.nodeUtil("Scene","Where","orientation"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].touched80m(X3DJSON.nodeUtil("Scene","TOUCH_80m","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].touched40m(X3DJSON.nodeUtil("Scene","TOUCH_40m","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].touched20m(X3DJSON.nodeUtil("Scene","TOUCH_20m","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].touched10m(X3DJSON.nodeUtil("Scene","TOUCH_10m","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].touched05m(X3DJSON.nodeUtil("Scene","TOUCH_05m","isActive"), __eventTime);
			X3DJSON.nodeUtil("Scene","BATHYMETRY_SWITCH","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].selection === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].selection() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].selection, __eventTime);
			X3DJSON.nodeUtil("Scene","MATERIAL_80m","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color80m === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color80m() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color80m, __eventTime);
			X3DJSON.nodeUtil("Scene","MATERIAL_40m","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color40m === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color40m() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color40m, __eventTime);
			X3DJSON.nodeUtil("Scene","MATERIAL_20m","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color20m === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color20m() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color20m, __eventTime);
			X3DJSON.nodeUtil("Scene","MATERIAL_10m","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color10m === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color10m() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color10m, __eventTime);
			X3DJSON.nodeUtil("Scene","MATERIAL_05m","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color05m === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color05m() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Locations/FortLauderdaleFlorida/FortLauderdaleDepthSelection.json']['BATHYMETRY_RESOLUTION'].color05m, __eventTime);