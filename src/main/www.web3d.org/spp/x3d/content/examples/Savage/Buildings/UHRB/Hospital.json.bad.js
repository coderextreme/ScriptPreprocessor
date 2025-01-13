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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['GenScript'] = function() {
	this.set_name = function (value) {
		try {
			this.proxy.name = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting name '+e);
			console.error('Problems setting name',e);
		}
	};
	this.name_changed = function () {
		var value = this.name;
		return value;
	};
	try {
		this.name = new SFString();
	} catch (e) {
		console.log('Problems setting name '+e);
		console.error('Problems setting name',e);
	}
	this.set_componentLabel = function (value) {
		try {
			this.proxy.componentLabel = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting componentLabel '+e);
			console.error('Problems setting componentLabel',e);
		}
	};
	this.componentLabel_changed = function () {
		var value = this.componentLabel;
		return value;
	};
	try {
		this.componentLabel = new SFString();
	} catch (e) {
		console.log('Problems setting componentLabel '+e);
		console.error('Problems setting componentLabel',e);
	}
	this.set_polygon = function (value) {
		try {
			this.proxy.polygon = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting polygon '+e);
			console.error('Problems setting polygon',e);
		}
	};
	this.polygon_changed = function () {
		var value = this.polygon;
		return value;
	};
	try {
		this.polygon = new SFNode();
	} catch (e) {
		console.log('Problems setting polygon '+e);
		console.error('Problems setting polygon',e);
	}
	this.set_apertures = function (value) {
		try {
			this.proxy.apertures = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting apertures '+e);
			console.error('Problems setting apertures',e);
		}
	};
	this.apertures_changed = function () {
		var value = this.apertures;
		return value;
	};
	try {
		this.apertures = new MFNode();
	} catch (e) {
		console.log('Problems setting apertures '+e);
		console.error('Problems setting apertures',e);
	}
	this.set_attributes = function (value) {
		try {
			this.proxy.attributes = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting attributes '+e);
			console.error('Problems setting attributes',e);
		}
	};
	this.attributes_changed = function () {
		var value = this.attributes;
		return value;
	};
	try {
		this.attributes = new MFNode();
	} catch (e) {
		console.log('Problems setting attributes '+e);
		console.error('Problems setting attributes',e);
	}
	this.set_children = function (value) {
		try {
			this.proxy.children = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting children '+e);
			console.error('Problems setting children',e);
		}
	};
	this.children_changed = function () {
		var value = this.children;
		return value;
	};
	try {
		this.children = new MFNode();
	} catch (e) {
		console.log('Problems setting children '+e);
		console.error('Problems setting children',e);
	}
	this.set_zOffset = function (value) {
		try {
			this.proxy.zOffset = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting zOffset '+e);
			console.error('Problems setting zOffset',e);
		}
	};
	this.zOffset_changed = function () {
		var value = this.zOffset;
		return value;
	};
	try {
		this.zOffset = new SFFloat();
	} catch (e) {
		console.log('Problems setting zOffset '+e);
		console.error('Problems setting zOffset',e);
	}
	this.set_resolveHit = function (value) {
		try {
			this.proxy.resolveHit = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting resolveHit '+e);
			console.error('Problems setting resolveHit',e);
		}
	};
	this.resolveHit_changed = function () {
		var value = this.resolveHit;
		return value;
	};
	try {
		this.resolveHit = new SFNode();
	} catch (e) {
		console.log('Problems setting resolveHit '+e);
		console.error('Problems setting resolveHit',e);
	}
	this.set_recreate = function (value) {
		try {
			this.proxy.recreate = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting recreate '+e);
			console.error('Problems setting recreate',e);
		}
	};
	this.recreate_changed = function () {
		var value = this.recreate;
		return value;
	};
	try {
		this.recreate = new SFBool(true);
	} catch (e) {
		console.log('Problems setting recreate '+e);
		console.error('Problems setting recreate',e);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['GenScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['GenScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['GenScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['GenScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['GenScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['GenScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['GenScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['GenScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['GenScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['GenScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['GenScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'] = function() {
	this.set_walls = function (value) {
		try {
			this.proxy.walls = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting walls '+e);
			console.error('Problems setting walls',e);
		}
	};
	this.walls_changed = function () {
		var value = this.walls;
		return value;
	};
	try {
		this.walls = new MFNode();
	} catch (e) {
		console.log('Problems setting walls '+e);
		console.error('Problems setting walls',e);
	}
	this.set_edges = function (value) {
		try {
			this.proxy.edges = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting edges '+e);
			console.error('Problems setting edges',e);
		}
	};
	this.edges_changed = function () {
		var value = this.edges;
		return value;
	};
	try {
		this.edges = new MFNode();
	} catch (e) {
		console.log('Problems setting edges '+e);
		console.error('Problems setting edges',e);
	}
	this.set_rooms = function (value) {
		try {
			this.proxy.rooms = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rooms '+e);
			console.error('Problems setting rooms',e);
		}
	};
	this.rooms_changed = function () {
		var value = this.rooms;
		return value;
	};
	try {
		this.rooms = new MFNode();
	} catch (e) {
		console.log('Problems setting rooms '+e);
		console.error('Problems setting rooms',e);
	}
	this.set_zOffset = function (value) {
		try {
			this.proxy.zOffset = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting zOffset '+e);
			console.error('Problems setting zOffset',e);
		}
	};
	this.zOffset_changed = function () {
		var value = this.zOffset;
		return value;
	};
	try {
		this.zOffset = new SFFloat();
	} catch (e) {
		console.log('Problems setting zOffset '+e);
		console.error('Problems setting zOffset',e);
	}
	this.set_translation = function (value) {
		try {
			this.proxy.translation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting translation '+e);
			console.error('Problems setting translation',e);
		}
	};
	this.translation_changed = function () {
		var value = this.translation;
		return value;
	};
	try {
		this.translation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting translation '+e);
		console.error('Problems setting translation',e);
	}
	this.set_children = function (value) {
		try {
			this.proxy.children = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting children '+e);
			console.error('Problems setting children',e);
		}
	};
	this.children_changed = function () {
		var value = this.children;
		return value;
	};
	try {
		this.children = new MFNode();
	} catch (e) {
		console.log('Problems setting children '+e);
		console.error('Problems setting children',e);
	}
	this.set_initDone = function (value) {
		try {
			this.proxy.initDone = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting initDone '+e);
			console.error('Problems setting initDone',e);
		}
	};
	this.initDone_changed = function () {
		var value = this.initDone;
		return value;
	};
	try {
		this.initDone = new SFBool();
	} catch (e) {
		console.log('Problems setting initDone '+e);
		console.error('Problems setting initDone',e);
	}
	this.set_recreate = function (value) {
		try {
			this.proxy.recreate = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting recreate '+e);
			console.error('Problems setting recreate',e);
		}
	};
	this.recreate_changed = function () {
		var value = this.recreate;
		return value;
	};
	try {
		this.recreate = new SFBool();
	} catch (e) {
		console.log('Problems setting recreate '+e);
		console.error('Problems setting recreate',e);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptUhrb'] = function() {
	this.set_rooflines = function (value) {
		try {
			this.proxy.rooflines = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rooflines '+e);
			console.error('Problems setting rooflines',e);
		}
	};
	this.rooflines_changed = function () {
		var value = this.rooflines;
		return value;
	};
	try {
		this.rooflines = new MFNode();
	} catch (e) {
		console.log('Problems setting rooflines '+e);
		console.error('Problems setting rooflines',e);
	}
	this.set_children = function (value) {
		try {
			this.proxy.children = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting children '+e);
			console.error('Problems setting children',e);
		}
	};
	this.children_changed = function () {
		var value = this.children;
		return value;
	};
	try {
		this.children = new MFNode();
	} catch (e) {
		console.log('Problems setting children '+e);
		console.error('Problems setting children',e);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptUhrb'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptUhrb']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptUhrb'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptUhrb'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptUhrb']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptUhrb']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptUhrb'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptUhrb']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptUhrb']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptUhrb'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptUhrb'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['GenScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['GenScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['GenScript']['ACTION']['children'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['GenScript']['ACTION']['children'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['GenScript']['ACTION']['children'].push(function(property, value) {
		if (property === 'children') {
			X3DJSON.nodeUtil("Scene","WallGrp","children",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['GenScript'].children === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['GenScript'].children() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['GenScript'].children, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","WallGrp","children",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['GenScript'].children === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['GenScript'].children() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['GenScript'].children, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel']['ACTION']['translation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel']['ACTION']['translation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel']['ACTION']['translation'].push(function(property, value) {
		if (property === 'translation') {
			X3DJSON.nodeUtil("Scene","TRANS","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].translation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].translation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].translation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TRANS","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].translation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].translation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].translation, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel']['ACTION']['children'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel']['ACTION']['children'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel']['ACTION']['children'].push(function(property, value) {
		if (property === 'children') {
			X3DJSON.nodeUtil("Scene","Geometry","children",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].children === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].children() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].children, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Geometry","children",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].children === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].children() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].children, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel']['ACTION']['initDone'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel']['ACTION']['initDone'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel']['ACTION']['initDone'].push(function(property, value) {
		if (property === 'initDone') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].initDone === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].initDone() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].initDone) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].recreate(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].initDone === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].initDone() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].initDone, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].initDone === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].initDone() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].initDone) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].recreate(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].initDone === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].initDone() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].initDone, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptUhrb'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptUhrb'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptUhrb']['ACTION']['children'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptUhrb']['ACTION']['children'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptUhrb']['ACTION']['children'].push(function(property, value) {
		if (property === 'children') {
			X3DJSON.nodeUtil("Scene","Rooflines","children",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptUhrb'].children === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptUhrb'].children() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptUhrb'].children, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Rooflines","children",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptUhrb'].children === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptUhrb'].children() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptUhrb'].children, __eventTime);
			X3DJSON.nodeUtil("Scene","WallGrp","children",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['GenScript'].children === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['GenScript'].children() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['GenScript'].children, __eventTime);
			X3DJSON.nodeUtil("Scene","TRANS","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].translation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].translation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].translation, __eventTime);
			X3DJSON.nodeUtil("Scene","Geometry","children",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].children === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].children() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].children, __eventTime);
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].initDone === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].initDone() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].initDone) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].recreate(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].initDone === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].initDone() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptFloorLevel'].initDone, __eventTime);
		}
			X3DJSON.nodeUtil("Scene","Rooflines","children",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptUhrb'].children === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptUhrb'].children() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/Hospital.json']['ScriptUhrb'].children, __eventTime);