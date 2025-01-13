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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'] = function() {
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
		this.description = new MFString();
	} catch (e) {
		console.log('Problems setting description '+e);
		console.error('Problems setting description',e);
	}
	this.set_size = function (value) {
		try {
			this.proxy.size = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting size '+e);
			console.error('Problems setting size',e);
		}
	};
	this.size_changed = function () {
		var value = this.size;
		return value;
	};
	try {
		this.size = new SFNode();
	} catch (e) {
		console.log('Problems setting size '+e);
		console.error('Problems setting size',e);
	}
	this.set_showSides = function (value) {
		try {
			this.proxy.showSides = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting showSides '+e);
			console.error('Problems setting showSides',e);
		}
	};
	this.showSides_changed = function () {
		var value = this.showSides;
		return value;
	};
	try {
		this.showSides = new SFBool();
	} catch (e) {
		console.log('Problems setting showSides '+e);
		console.error('Problems setting showSides',e);
	}
	this.set_wallsVisible = function (value) {
		try {
			this.proxy.wallsVisible = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting wallsVisible '+e);
			console.error('Problems setting wallsVisible',e);
		}
	};
	this.wallsVisible_changed = function () {
		var value = this.wallsVisible;
		return value;
	};
	try {
		this.wallsVisible = new SFInt32();
	} catch (e) {
		console.log('Problems setting wallsVisible '+e);
		console.error('Problems setting wallsVisible',e);
	}
	this.set_floorPoints = function (value) {
		try {
			this.proxy.floorPoints = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting floorPoints '+e);
			console.error('Problems setting floorPoints',e);
		}
	};
	this.floorPoints_changed = function () {
		var value = this.floorPoints;
		return value;
	};
	try {
		this.floorPoints = new MFVec3f();
	} catch (e) {
		console.log('Problems setting floorPoints '+e);
		console.error('Problems setting floorPoints',e);
	}
	this.set_width = function (value) {
		try {
			this.proxy.width = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting width '+e);
			console.error('Problems setting width',e);
		}
	};
	this.width_changed = function () {
		var value = this.width;
		return value;
	};
	try {
		this.width = new SFFloat();
	} catch (e) {
		console.log('Problems setting width '+e);
		console.error('Problems setting width',e);
	}
	this.set_height = function (value) {
		try {
			this.proxy.height = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting height '+e);
			console.error('Problems setting height',e);
		}
	};
	this.height_changed = function () {
		var value = this.height;
		return value;
	};
	try {
		this.height = new SFFloat();
	} catch (e) {
		console.log('Problems setting height '+e);
		console.error('Problems setting height',e);
	}
	this.set_depth = function (value) {
		try {
			this.proxy.depth = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting depth '+e);
			console.error('Problems setting depth',e);
		}
	};
	this.depth_changed = function () {
		var value = this.depth;
		return value;
	};
	try {
		this.depth = new SFFloat();
	} catch (e) {
		console.log('Problems setting depth '+e);
		console.error('Problems setting depth',e);
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
		this.traceEnabled = new SFBool(true);
	} catch (e) {
		console.log('Problems setting traceEnabled '+e);
		console.error('Problems setting traceEnabled',e);
	}
	this.set_built = function (value) {
		try {
			this.proxy.built = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting built '+e);
			console.error('Problems setting built',e);
		}
	};
	this.built_changed = function () {
		var value = this.built;
		return value;
	};
	try {
		this.built = new SFBool();
	} catch (e) {
		console.log('Problems setting built '+e);
		console.error('Problems setting built',e);
	}


ecmascript:

	this.tracePrint = function (outputString)
{
	if (this.proxy.traceEnabled) console.error ('[Floor' + this.proxy.name + ']' + outputString);
};

	this.alwaysPrint = function (outputString)
{
	console.error ('[Floor' + this.proxy.name + ']' + outputString);
};

	this.initialize = function ()
{
	this.proxy.built = false;
	this.tracePrint ('this.proxy.description=' + this.proxy.description);
	this.tracePrint ('this.proxy.showSides=' + this.proxy.showSides);
	if (this.proxy.showSides == true) this.proxy.wallsVisible = 0; // goes to Switch whichChoice
	this.tracePrint ('this.proxy.wallsVisible=' + this.proxy.wallsVisible);
	if ((this.proxy.size.point.length == 0) || (this.proxy.size.point.length > 1))
		this.alwaysPrint ('** warning, this.proxy.size.point.length =' + this.proxy.size.point.length + ' rather than 1');
	this.proxy.width  = this.proxy.size.point[0].x;
	this.proxy.height = this.proxy.size.point[0].y;
	this.proxy.depth  = this.proxy.size.point[0].z;
	this.tracePrint ('(this.proxy.width, this.proxy.height, this.proxy.depth)=(' + this.proxy.width + ',' + this.proxy.height + ',' +  this.proxy.depth + ')');
	// floor is immediately above ceiling
	this.proxy.floorPoints = new MFVec3f (
		new SFVec3f (0, 0, 0),
		new SFVec3f (this.proxy.width, 0, 0),
		new SFVec3f (this.proxy.width, 0, -this.proxy.depth),
		new SFVec3f (0, 0, -this.proxy.depth),
		new SFVec3f (0, -this.proxy.height, 0),
		new SFVec3f (this.proxy.width, -this.proxy.height, 0),
		new SFVec3f (this.proxy.width, -this.proxy.height, -this.proxy.depth),
		new SFVec3f (0, -this.proxy.height, -this.proxy.depth));
	this.tracePrint ('this.proxy.floorPoints=' + this.proxy.floorPoints);
	this.proxy.built = true;
	this.tracePrint ('this.proxy.built=' + this.proxy.built);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'] = function() {
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
		this.description = new MFString();
	} catch (e) {
		console.log('Problems setting description '+e);
		console.error('Problems setting description',e);
	}
	this.set_size = function (value) {
		try {
			this.proxy.size = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting size '+e);
			console.error('Problems setting size',e);
		}
	};
	this.size_changed = function () {
		var value = this.size;
		return value;
	};
	try {
		this.size = new SFNode();
	} catch (e) {
		console.log('Problems setting size '+e);
		console.error('Problems setting size',e);
	}
	this.set_showSides = function (value) {
		try {
			this.proxy.showSides = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting showSides '+e);
			console.error('Problems setting showSides',e);
		}
	};
	this.showSides_changed = function () {
		var value = this.showSides;
		return value;
	};
	try {
		this.showSides = new SFBool();
	} catch (e) {
		console.log('Problems setting showSides '+e);
		console.error('Problems setting showSides',e);
	}
	this.set_wallsVisible = function (value) {
		try {
			this.proxy.wallsVisible = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting wallsVisible '+e);
			console.error('Problems setting wallsVisible',e);
		}
	};
	this.wallsVisible_changed = function () {
		var value = this.wallsVisible;
		return value;
	};
	try {
		this.wallsVisible = new SFInt32();
	} catch (e) {
		console.log('Problems setting wallsVisible '+e);
		console.error('Problems setting wallsVisible',e);
	}
	this.set_coordinatePoints = function (value) {
		try {
			this.proxy.coordinatePoints = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting coordinatePoints '+e);
			console.error('Problems setting coordinatePoints',e);
		}
	};
	this.coordinatePoints_changed = function () {
		var value = this.coordinatePoints;
		return value;
	};
	try {
		this.coordinatePoints = new MFVec3f();
	} catch (e) {
		console.log('Problems setting coordinatePoints '+e);
		console.error('Problems setting coordinatePoints',e);
	}
	this.set_width = function (value) {
		try {
			this.proxy.width = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting width '+e);
			console.error('Problems setting width',e);
		}
	};
	this.width_changed = function () {
		var value = this.width;
		return value;
	};
	try {
		this.width = new SFFloat();
	} catch (e) {
		console.log('Problems setting width '+e);
		console.error('Problems setting width',e);
	}
	this.set_height = function (value) {
		try {
			this.proxy.height = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting height '+e);
			console.error('Problems setting height',e);
		}
	};
	this.height_changed = function () {
		var value = this.height;
		return value;
	};
	try {
		this.height = new SFFloat();
	} catch (e) {
		console.log('Problems setting height '+e);
		console.error('Problems setting height',e);
	}
	this.set_depth = function (value) {
		try {
			this.proxy.depth = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting depth '+e);
			console.error('Problems setting depth',e);
		}
	};
	this.depth_changed = function () {
		var value = this.depth;
		return value;
	};
	try {
		this.depth = new SFFloat();
	} catch (e) {
		console.log('Problems setting depth '+e);
		console.error('Problems setting depth',e);
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
		this.traceEnabled = new SFBool(true);
	} catch (e) {
		console.log('Problems setting traceEnabled '+e);
		console.error('Problems setting traceEnabled',e);
	}
	this.set_built = function (value) {
		try {
			this.proxy.built = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting built '+e);
			console.error('Problems setting built',e);
		}
	};
	this.built_changed = function () {
		var value = this.built;
		return value;
	};
	try {
		this.built = new SFBool();
	} catch (e) {
		console.log('Problems setting built '+e);
		console.error('Problems setting built',e);
	}


ecmascript:

	this.tracePrint = function (outputString)
{
	if (this.proxy.traceEnabled) console.error ('[Wall' + this.proxy.name + ']' + outputString);
};

	this.alwaysPrint = function (outputString)
{
	console.error ('[Wall' + this.proxy.name + ']' + outputString);
};

	this.initialize = function ()
{
	this.proxy.built = false;
	this.tracePrint ('this.proxy.description=' + this.proxy.description);
	this.tracePrint ('this.proxy.showSides=' + this.proxy.showSides);
	if (this.proxy.showSides == true) this.proxy.wallsVisible = 0; // goes to Switch whichChoice
	this.tracePrint ('this.proxy.wallsVisible=' + this.proxy.wallsVisible);
	if ((this.proxy.size.point.length == 0) || (this.proxy.size.point.length > 1))
		this.alwaysPrint ('** warning, this.proxy.size.point.length =' + this.proxy.size.point.length + ' rather than 1');
	this.proxy.width  = this.proxy.size.point[0].x;
	this.proxy.height = this.proxy.size.point[0].y;
	this.proxy.depth  = this.proxy.size.point[0].z;
	this.tracePrint ('(this.proxy.width, this.proxy.height, this.proxy.depth)=(' + this.proxy.width + ',' + this.proxy.height + ',' +  this.proxy.depth + ')');
	this.proxy.coordinatePoints = new MFVec3f (
		new SFVec3f (0, 0, 0),
		new SFVec3f (this.proxy.width, 0, 0),
		new SFVec3f (this.proxy.width, this.proxy.height, 0),
		new SFVec3f (0, this.proxy.height, 0),
		new SFVec3f (0, 0, -this.proxy.depth),
		new SFVec3f (this.proxy.width, 0, -this.proxy.depth),
		new SFVec3f (this.proxy.width, this.proxy.height, -this.proxy.depth),
		new SFVec3f (0, this.proxy.height, -this.proxy.depth));
	this.tracePrint ('this.proxy.coordinatePoints=' + this.proxy.coordinatePoints);
	this.proxy.built = true;
	this.tracePrint ('this.proxy.built=' + this.proxy.built);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'] = function() {
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
		this.description = new MFString();
	} catch (e) {
		console.log('Problems setting description '+e);
		console.error('Problems setting description',e);
	}
	this.set_floor = function (value) {
		try {
			this.proxy.floor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting floor '+e);
			console.error('Problems setting floor',e);
		}
	};
	this.floor_changed = function () {
		var value = this.floor;
		return value;
	};
	try {
		this.floor = new MFNode();
	} catch (e) {
		console.log('Problems setting floor '+e);
		console.error('Problems setting floor',e);
	}
	this.set_frontWall = function (value) {
		try {
			this.proxy.frontWall = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting frontWall '+e);
			console.error('Problems setting frontWall',e);
		}
	};
	this.frontWall_changed = function () {
		var value = this.frontWall;
		return value;
	};
	try {
		this.frontWall = new MFNode();
	} catch (e) {
		console.log('Problems setting frontWall '+e);
		console.error('Problems setting frontWall',e);
	}
	this.set_rightWall = function (value) {
		try {
			this.proxy.rightWall = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rightWall '+e);
			console.error('Problems setting rightWall',e);
		}
	};
	this.rightWall_changed = function () {
		var value = this.rightWall;
		return value;
	};
	try {
		this.rightWall = new MFNode();
	} catch (e) {
		console.log('Problems setting rightWall '+e);
		console.error('Problems setting rightWall',e);
	}
	this.set_rearWall = function (value) {
		try {
			this.proxy.rearWall = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rearWall '+e);
			console.error('Problems setting rearWall',e);
		}
	};
	this.rearWall_changed = function () {
		var value = this.rearWall;
		return value;
	};
	try {
		this.rearWall = new MFNode();
	} catch (e) {
		console.log('Problems setting rearWall '+e);
		console.error('Problems setting rearWall',e);
	}
	this.set_leftWall = function (value) {
		try {
			this.proxy.leftWall = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting leftWall '+e);
			console.error('Problems setting leftWall',e);
		}
	};
	this.leftWall_changed = function () {
		var value = this.leftWall;
		return value;
	};
	try {
		this.leftWall = new MFNode();
	} catch (e) {
		console.log('Problems setting leftWall '+e);
		console.error('Problems setting leftWall',e);
	}
	this.set_width = function (value) {
		try {
			this.proxy.width = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting width '+e);
			console.error('Problems setting width',e);
		}
	};
	this.width_changed = function () {
		var value = this.width;
		return value;
	};
	try {
		this.width = new SFFloat();
	} catch (e) {
		console.log('Problems setting width '+e);
		console.error('Problems setting width',e);
	}
	this.set_height = function (value) {
		try {
			this.proxy.height = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting height '+e);
			console.error('Problems setting height',e);
		}
	};
	this.height_changed = function () {
		var value = this.height;
		return value;
	};
	try {
		this.height = new SFFloat();
	} catch (e) {
		console.log('Problems setting height '+e);
		console.error('Problems setting height',e);
	}
	this.set_depth = function (value) {
		try {
			this.proxy.depth = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting depth '+e);
			console.error('Problems setting depth',e);
		}
	};
	this.depth_changed = function () {
		var value = this.depth;
		return value;
	};
	try {
		this.depth = new SFFloat();
	} catch (e) {
		console.log('Problems setting depth '+e);
		console.error('Problems setting depth',e);
	}
	this.set_rightTranslation = function (value) {
		try {
			this.proxy.rightTranslation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rightTranslation '+e);
			console.error('Problems setting rightTranslation',e);
		}
	};
	this.rightTranslation_changed = function () {
		var value = this.rightTranslation;
		return value;
	};
	try {
		this.rightTranslation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting rightTranslation '+e);
		console.error('Problems setting rightTranslation',e);
	}
	this.set_rearTranslation = function (value) {
		try {
			this.proxy.rearTranslation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rearTranslation '+e);
			console.error('Problems setting rearTranslation',e);
		}
	};
	this.rearTranslation_changed = function () {
		var value = this.rearTranslation;
		return value;
	};
	try {
		this.rearTranslation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting rearTranslation '+e);
		console.error('Problems setting rearTranslation',e);
	}
	this.set_leftTranslation = function (value) {
		try {
			this.proxy.leftTranslation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting leftTranslation '+e);
			console.error('Problems setting leftTranslation',e);
		}
	};
	this.leftTranslation_changed = function () {
		var value = this.leftTranslation;
		return value;
	};
	try {
		this.leftTranslation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting leftTranslation '+e);
		console.error('Problems setting leftTranslation',e);
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
		this.traceEnabled = new SFBool(true);
	} catch (e) {
		console.log('Problems setting traceEnabled '+e);
		console.error('Problems setting traceEnabled',e);
	}
	this.set_recheckUntilBuilt = function (value) {
		try {
			this.proxy.recheckUntilBuilt = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting recheckUntilBuilt '+e);
			console.error('Problems setting recheckUntilBuilt',e);
		}
	};
	this.recheckUntilBuilt_changed = function () {
		var value = this.recheckUntilBuilt;
		return value;
	};
	try {
		this.recheckUntilBuilt = new SFTime();
	} catch (e) {
		console.log('Problems setting recheckUntilBuilt '+e);
		console.error('Problems setting recheckUntilBuilt',e);
	}
	this.set_built = function (value) {
		try {
			this.proxy.built = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting built '+e);
			console.error('Problems setting built',e);
		}
	};
	this.built_changed = function () {
		var value = this.built;
		return value;
	};
	try {
		this.built = new SFBool();
	} catch (e) {
		console.log('Problems setting built '+e);
		console.error('Problems setting built',e);
	}


ecmascript:

var firstLoopWhileTrueCompleted;

	this.tracePrint = function (outputString)
{
	if (this.proxy.traceEnabled) console.error ('[Level' + this.proxy.name + ']' + outputString);
};

	this.alwaysPrint = function (outputString)
{
	console.error ('[Level' + this.proxy.name + ']' + outputString);
};

	this.initialize = function ()
{
	this.proxy.built = false;
	firstLoopWhileTrueCompleted = false;
	this.alwaysPrint ('this.initialize, this.proxy.built=' + this.proxy.built);
};

	this.recheckUntilBuilt = function (value)
{
	if      (this.proxy.built == true)
	{
		this.proxy.built = true; // resend to trigger cancellation event for TimeSensor
		if (firstLoopWhileTrueCompleted)
			this.alwaysPrint ('this.proxy.recheckUntilBuilt() continuous this.proxy.built=true indicates internal error');
		else firstLoopWhileTrueCompleted = true;
		return;  // done
	}
	this.alwaysPrint ('this.proxy.recheckUntilBuilt testing...');
	// following are single nodes, cast as MFNode type for IS/connect matchups
	if      (this.proxy.floor[0].proxy.built == false)	return;  // not yet ready
	else if (this.proxy.frontWall[0].proxy.built == false)	return;
	else if (this.proxy.rightWall[0].proxy.built == false)	return;
	else if (this.proxy.rearWall[0].proxy.built == false)	return;
	else if (this.proxy.leftWall[0].proxy.built == false)	return;
	this.alwaysPrint ('this.proxy.recheckUntilBuilt ready, initializing Level...');

	this.alwaysPrint ('this.proxy.description=' + this.proxy.description);
	if (this.proxy.floor)
	{
	//	this.tracePrint ('this.proxy.floor found');
		if (this.proxy.floor.length > 1)
			this.alwaysPrint ('** warning, more than one this.proxy.floor found (' +
				this.proxy.floor.length + ' nodes total)');
		this.tracePrint ('this.proxy.floor (this.proxy.width, this.proxy.height, this.proxy.depth)=(' +
			this.proxy.floor[0].proxy.width + ',' + this.proxy.floor[0].proxy.height + ',' +  this.proxy.floor[0].proxy.depth + ')');
	}
	else	this.tracePrint ('this.proxy.floor not found');

	if (this.proxy.frontWall)
	{
	//	this.tracePrint ('this.proxy.frontWall found');
		if (this.proxy.frontWall > 1)
			this.alwaysPrint ('** warning, more than one this.proxy.frontWall found (' +
				this.proxy.frontWall.length + ' nodes total)');
		this.tracePrint ('this.proxy.frontWall (this.proxy.width, this.proxy.height, this.proxy.depth)=(' +
			this.proxy.frontWall[0].proxy.width + ',' + this.proxy.frontWall[0].proxy.height + ',' +  this.proxy.frontWall[0].proxy.depth + ')');
	}
	else	this.tracePrint ('this.proxy.frontWall not found');

	if (this.proxy.rightWall)
	{
	//	this.tracePrint ('this.proxy.rightWall found');
		if (this.proxy.rightWall > 1)
			this.alwaysPrint ('** warning, more than one this.proxy.rightWall found (' +
				this.proxy.frontWall.length + ' nodes total)');
		this.tracePrint ('this.proxy.rightWall (this.proxy.width, this.proxy.height, this.proxy.depth)=(' +
			this.proxy.rightWall[0].proxy.width + ',' + this.proxy.rightWall[0].proxy.height + ',' +  this.proxy.rightWall[0].proxy.depth + ')');
	}

	else	this.tracePrint ('this.proxy.rightWall not found');

	if (this.proxy.rearWall)
	{
	//	this.tracePrint ('this.proxy.rearWall found');
		if (this.proxy.frontWall > 1)
			this.alwaysPrint ('** warning, more than one this.proxy.rearWall found (' +
				this.proxy.rearWall + ' nodes total)');
		this.tracePrint ('this.proxy.rearWall (this.proxy.width, this.proxy.height, this.proxy.depth)=(' +
			this.proxy.rearWall[0].proxy.width + ',' + this.proxy.rearWall[0].proxy.height + ',' +  this.proxy.rearWall[0].proxy.depth + ')');
	}
	else	this.tracePrint ('this.proxy.rearWall not found');

	if (this.proxy.leftWall)
	{
	//	this.tracePrint ('this.proxy.leftWall found');
		if (this.proxy.frontWall > 1)
			this.alwaysPrint ('** warning, more than one this.proxy.leftWall found (' +
				this.proxy.leftWall.length + ' nodes total)');
		this.tracePrint ('this.proxy.leftWall (this.proxy.width, this.proxy.height, this.proxy.depth)=(' +
			this.proxy.leftWall[0].proxy.width + ',' + this.proxy.leftWall[0].proxy.height + ',' +  this.proxy.leftWall[0].proxy.depth + ')');
	}
	else	this.tracePrint ('this.proxy.leftWall not found');

	if (this.proxy.floor && this.proxy.frontWall)
	{
		if ((this.proxy.floor[0].proxy.width != this.proxy.frontWall[0].proxy.width) && (this.proxy.floor[0].proxy.width != 0) && (this.proxy.frontWall[0].proxy.width != 0))
			this.alwaysPrint ('** warning, this.proxy.floor/this.proxy.frontWall this.proxy.width mismatch');
	}
	if (this.proxy.floor && this.proxy.rearWall)
	{
		if ((this.proxy.floor[0].proxy.width != this.proxy.rearWall[0].proxy.width) && (this.proxy.floor[0].proxy.width != 0) && (this.proxy.rearWall[0].proxy.width != 0))
			this.alwaysPrint ('** warning, this.proxy.floor/this.proxy.rearWall this.proxy.width mismatch');
	}
	if (this.proxy.floor && this.proxy.rightWall)
	{
		if ((this.proxy.floor[0].proxy.depth != this.proxy.rightWall[0].proxy.width) && (this.proxy.floor[0].proxy.depth != 0) && (this.proxy.rightWall[0].proxy.width != 0))
			this.alwaysPrint ('** warning, this.proxy.floor.proxy.depth/this.proxy.rightWall.proxy.width mismatch');
	}
	if (this.proxy.floor && this.proxy.leftWall)
	{
		if ((this.proxy.floor[0].proxy.depth != this.proxy.leftWall[0].proxy.width) && (this.proxy.floor[0].proxy.depth != 0) && (this.proxy.leftWall[0].proxy.width != 0))
			this.alwaysPrint ('** warning, this.proxy.floor.proxy.depth/this.proxy.leftWall.proxy.width mismatch');
	}
	if (this.proxy.frontWall && this.proxy.rearWall)
	{
		if ((this.proxy.frontWall[0].proxy.width != this.proxy.rearWall[0].proxy.width) && (this.proxy.frontWall[0].proxy.width != 0) && (this.proxy.rearWall[0].proxy.width != 0))
			this.alwaysPrint ('** warning, this.proxy.frontWall/this.proxy.rearWall this.proxy.width mismatch');
	}
	if (this.proxy.leftWall && this.proxy.rightWall)
	{
		if ((this.proxy.leftWall[0].proxy.width != this.proxy.rightWall[0].proxy.width) && (this.proxy.leftWall[0].proxy.width != 0) && (this.proxy.rightWall[0].proxy.width != 0))
			this.alwaysPrint ('** warning, this.proxy.leftWall/this.proxy.rightWall this.proxy.width mismatch');
	}

	// find first nonzero values
	this.proxy.width = 0;
	if (this.proxy.floor)                     this.proxy.width = this.proxy.floor[0].proxy.width;
	if (this.proxy.frontWall && (this.proxy.width == 0)) this.proxy.width = this.proxy.frontWall[0].proxy.width;
	if (this.proxy.rearWall  && (this.proxy.width == 0)) this.proxy.width = this.proxy.rearWall[0].proxy.width;

	this.proxy.height = 0;
	if      (this.proxy.frontWall)                  this.proxy.height = this.proxy.frontWall[0].proxy.height;
	if      (this.proxy.rightWall && (this.proxy.height == 0)) this.proxy.height = this.proxy.rightWall[0].proxy.height;
	else if (this.proxy.rearWall  && (this.proxy.height == 0)) this.proxy.height = this.proxy.rearWall[0].proxy.height;
	else if (this.proxy.leftWall  && (this.proxy.height == 0)) this.proxy.height = this.proxy.leftWall[0].proxy.height;

	this.proxy.depth = 0;
	if (this.proxy.floor)                     this.proxy.depth = this.proxy.floor[0].proxy.depth;
	if (this.proxy.rightWall && (this.proxy.depth == 0)) this.proxy.depth = this.proxy.rightWall[0].proxy.depth;
	if (this.proxy.leftWall  && (this.proxy.depth == 0)) this.proxy.depth = this.proxy.leftWall[0].proxy.depth;

	this.tracePrint ('(this.proxy.width, this.proxy.height, this.proxy.depth)=(' + this.proxy.width + ',' + this.proxy.height + ',' +  this.proxy.depth + ')');

	// translate wall centers (not corners)
	this.proxy.rightTranslation = new SFVec3f (this.proxy.width, 0, 0);
	this.tracePrint ('this.proxy.rightTranslation=' + this.proxy.rightTranslation);
	this.proxy.rearTranslation = new SFVec3f  (this.proxy.width, 0, -this.proxy.depth);
	this.tracePrint ('this.proxy.rearTranslation=' + this.proxy.rearTranslation);
	this.proxy.leftTranslation = new SFVec3f  (0, 0, -this.proxy.width/2);
	this.tracePrint ('this.proxy.leftTranslation=' + this.proxy.leftTranslation);
	this.proxy.built = true;
	this.tracePrint ('this.proxy.built=' + this.proxy.built);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'] = function() {
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
		this.description = new MFString();
	} catch (e) {
		console.log('Problems setting description '+e);
		console.error('Problems setting description',e);
	}
	this.set_xHeading = function (value) {
		try {
			this.proxy.xHeading = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting xHeading '+e);
			console.error('Problems setting xHeading',e);
		}
	};
	this.xHeading_changed = function () {
		var value = this.xHeading;
		return value;
	};
	try {
		this.xHeading = new SFFloat();
	} catch (e) {
		console.log('Problems setting xHeading '+e);
		console.error('Problems setting xHeading',e);
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
	this.set_latitude = function (value) {
		try {
			this.proxy.latitude = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting latitude '+e);
			console.error('Problems setting latitude',e);
		}
	};
	this.latitude_changed = function () {
		var value = this.latitude;
		return value;
	};
	try {
		this.latitude = new SFString();
	} catch (e) {
		console.log('Problems setting latitude '+e);
		console.error('Problems setting latitude',e);
	}
	this.set_longitude = function (value) {
		try {
			this.proxy.longitude = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting longitude '+e);
			console.error('Problems setting longitude',e);
		}
	};
	this.longitude_changed = function () {
		var value = this.longitude;
		return value;
	};
	try {
		this.longitude = new SFString();
	} catch (e) {
		console.log('Problems setting longitude '+e);
		console.error('Problems setting longitude',e);
	}
	this.set_authorAssist = function (value) {
		try {
			this.proxy.authorAssist = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting authorAssist '+e);
			console.error('Problems setting authorAssist',e);
		}
	};
	this.authorAssist_changed = function () {
		var value = this.authorAssist;
		return value;
	};
	try {
		this.authorAssist = new SFBool();
	} catch (e) {
		console.log('Problems setting authorAssist '+e);
		console.error('Problems setting authorAssist',e);
	}
	this.set_levels = function (value) {
		try {
			this.proxy.levels = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting levels '+e);
			console.error('Problems setting levels',e);
		}
	};
	this.levels_changed = function () {
		var value = this.levels;
		return value;
	};
	try {
		this.levels = new MFNode();
	} catch (e) {
		console.log('Problems setting levels '+e);
		console.error('Problems setting levels',e);
	}
	this.set_roof = function (value) {
		try {
			this.proxy.roof = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting roof '+e);
			console.error('Problems setting roof',e);
		}
	};
	this.roof_changed = function () {
		var value = this.roof;
		return value;
	};
	try {
		this.roof = new SFNode();
	} catch (e) {
		console.log('Problems setting roof '+e);
		console.error('Problems setting roof',e);
	}
	this.set_roofHeight = function (value) {
		try {
			this.proxy.roofHeight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting roofHeight '+e);
			console.error('Problems setting roofHeight',e);
		}
	};
	this.roofHeight_changed = function () {
		var value = this.roofHeight;
		return value;
	};
	try {
		this.roofHeight = new SFFloat();
	} catch (e) {
		console.log('Problems setting roofHeight '+e);
		console.error('Problems setting roofHeight',e);
	}
	this.set_LevelsRoot = function (value) {
		try {
			this.proxy.LevelsRoot = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting LevelsRoot '+e);
			console.error('Problems setting LevelsRoot',e);
		}
	};
	this.LevelsRoot_changed = function () {
		var value = this.LevelsRoot;
		return value;
	};
	try {
		this.LevelsRoot = X3DJSON.nodeUtil("Scene","LevelsRoot");
	} catch (e) {
		console.log('Problems setting LevelsRoot '+e);
		console.error('Problems setting LevelsRoot',e);
	}
	this.set_width = function (value) {
		try {
			this.proxy.width = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting width '+e);
			console.error('Problems setting width',e);
		}
	};
	this.width_changed = function () {
		var value = this.width;
		return value;
	};
	try {
		this.width = new SFFloat();
	} catch (e) {
		console.log('Problems setting width '+e);
		console.error('Problems setting width',e);
	}
	this.set_height = function (value) {
		try {
			this.proxy.height = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting height '+e);
			console.error('Problems setting height',e);
		}
	};
	this.height_changed = function () {
		var value = this.height;
		return value;
	};
	try {
		this.height = new SFFloat();
	} catch (e) {
		console.log('Problems setting height '+e);
		console.error('Problems setting height',e);
	}
	this.set_depth = function (value) {
		try {
			this.proxy.depth = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting depth '+e);
			console.error('Problems setting depth',e);
		}
	};
	this.depth_changed = function () {
		var value = this.depth;
		return value;
	};
	try {
		this.depth = new SFFloat();
	} catch (e) {
		console.log('Problems setting depth '+e);
		console.error('Problems setting depth',e);
	}
	this.set_scale = function (value) {
		try {
			this.proxy.scale = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting scale '+e);
			console.error('Problems setting scale',e);
		}
	};
	this.scale_changed = function () {
		var value = this.scale;
		return value;
	};
	try {
		this.scale = new SFVec3f();
	} catch (e) {
		console.log('Problems setting scale '+e);
		console.error('Problems setting scale',e);
	}
	this.set_authorAssistChoice = function (value) {
		try {
			this.proxy.authorAssistChoice = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting authorAssistChoice '+e);
			console.error('Problems setting authorAssistChoice',e);
		}
	};
	this.authorAssistChoice_changed = function () {
		var value = this.authorAssistChoice;
		return value;
	};
	try {
		this.authorAssistChoice = new SFInt32();
	} catch (e) {
		console.log('Problems setting authorAssistChoice '+e);
		console.error('Problems setting authorAssistChoice',e);
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
		this.traceEnabled = new SFBool(true);
	} catch (e) {
		console.log('Problems setting traceEnabled '+e);
		console.error('Problems setting traceEnabled',e);
	}
	this.set_recheckUntilBuilt = function (value) {
		try {
			this.proxy.recheckUntilBuilt = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting recheckUntilBuilt '+e);
			console.error('Problems setting recheckUntilBuilt',e);
		}
	};
	this.recheckUntilBuilt_changed = function () {
		var value = this.recheckUntilBuilt;
		return value;
	};
	try {
		this.recheckUntilBuilt = new SFTime();
	} catch (e) {
		console.log('Problems setting recheckUntilBuilt '+e);
		console.error('Problems setting recheckUntilBuilt',e);
	}
	this.set_built = function (value) {
		try {
			this.proxy.built = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting built '+e);
			console.error('Problems setting built',e);
		}
	};
	this.built_changed = function () {
		var value = this.built;
		return value;
	};
	try {
		this.built = new SFBool();
	} catch (e) {
		console.log('Problems setting built '+e);
		console.error('Problems setting built',e);
	}


ecmascript:

var firstLoopWhileTrueCompleted;

	this.tracePrint = function (outputString)
{
	if (this.proxy.traceEnabled) console.error ('[Building' + this.proxy.name + ']' + outputString);
};

	this.alwaysPrint = function (outputString)
{
	console.error ('[Building' + this.proxy.name + ']' + outputString);
};

	this.initialize = function ()
{
	this.proxy.built = false;
	firstLoopWhileTrueCompleted = false;
	this.alwaysPrint ('this.initialize, this.proxy.built=' + this.proxy.built);
};

	this.recheckUntilBuilt = function (value)
{
	if      (this.proxy.built == true)
	{
		this.proxy.built = true; // resend to trigger cancellation event for TimeSensor
		if (firstLoopWhileTrueCompleted)
			this.alwaysPrint ('this.proxy.recheckUntilBuilt() continuous this.proxy.built=true indicates internal error');
		else firstLoopWhileTrueCompleted = true;
		return;  // done
	}
	this.tracePrint ('this.proxy.recheckUntilBuilt testing...');
	if      (this.proxy.built == true)			return;  // done
	for (i=0; i < this.proxy.levels.length; i++)
	{
		if (this.proxy.levels[i].proxy.built == false)	return;  // not yet ready
	}
	this.tracePrint ('this.proxy.recheckUntilBuilt ready!');

	this.alwaysPrint ('this.proxy.description=' + this.proxy.description);
	if (this.proxy.levels.length == 0)
	{
		this.alwaysPrint ('** warning, no this.proxy.levels found');
		return;
	}
	this.proxy.orientation = new SFRotation (0, 1, 0, -this.proxy.xHeading * 3.14159 / 180.0);
	X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","LevelsRoot", "")", "rotation",  this.proxy.orientation);
	this.tracePrint ('this.proxy.xHeading=' + this.proxy.xHeading + ' degrees,' + 'this.proxy.orientation=' + this.proxy.orientation);

	this.proxy.width  = 0;
	this.proxy.depth  = 0;
	incrementalHeight = 0;
	// first child of X3DJSON.nodeUtil("Scene","LevelsRoot", "s") oriented AuthorAssist2 Switch
	for (i=0; i < this.proxy.levels.length; i++)
	{
		this.tracePrint ('level[' + i + ']');
		// compute max values for this.proxy.width, this.proxy.height, this.proxy.depth
		if (this.proxy.width  < this.proxy.levels[i].proxy.width)  this.proxy.width   = this.proxy.levels[i].proxy.width;
		if (this.proxy.depth  < this.proxy.levels[i].proxy.depth)  this.proxy.depth   = this.proxy.levels[i].proxy.depth;

		newTransform ='Transform {' +
		'translation 0' + incrementalHeight + ' 0' +
		'}';
		this.tracePrint ('newTransform=' + newTransform);
		newTransformNode = new MFNode(); // returns MFNode
		// append newTransformNode to X3DJSON.nodeUtil("Scene","LevelsRoot", "children")
		X3DJSON.nodeUtil("Scene","LevelsRoot", "children")[i+1] = newTransformNode[0];
		// append current Level to current newTransformNode
		newTransformNode[0].children[0] = this.proxy.levels[i];

		incrementalHeight += this.proxy.levels[i].proxy.height;
		this.tracePrint ('incrementalHeight=' + incrementalHeight);
	}
	childCount = this.proxy.levels.length + 1;
	if (this.proxy.roof)
	{
		this.tracePrint ('this.proxy.roof');
		newTransform ='Transform {' +
		'translation 0' + incrementalHeight + ' 0' +
		'}';
		this.tracePrint ('newTransform=' + newTransform);
		newTransformNode = new MFNode(); // returns MFNode
		// append newTransformNode to X3DJSON.nodeUtil("Scene","LevelsRoot", "children")
		X3DJSON.nodeUtil("Scene","LevelsRoot", "children")[childCount] = newTransformNode[0];
		childCount++;
		// append this.proxy.roof to current newTransformNode
		newTransformNode[0].children[0] = this.proxy.roof;
		incrementalHeight += this.proxy.roofHeight;
	}
	else this.alwaysPrint ('** warning, no this.proxy.roof found');

	this.proxy.height = incrementalHeight;
	this.tracePrint ('(this.proxy.width, this.proxy.height, this.proxy.depth)=(' + this.proxy.width + ',' + this.proxy.height + ',' +  this.proxy.depth + ')');
	maxDimension = this.proxy.width;
	if (maxDimension < this.proxy.height) maxDimension = this.proxy.height;
	if (maxDimension < this.proxy.depth)  maxDimension = this.proxy.depth;
	this.proxy.scale = new SFVec3f (maxDimension * 1.1, maxDimension * 1.1, maxDimension * 1.1);

	newView ='Viewpoint {' +
	'this.proxy.description "' + this.proxy.name + ' (' + this.proxy.latitude + ',' + this.proxy.longitude + ')"' +
	'position' + (this.proxy.width/2) + ' ' + (this.proxy.height*2.0/3.0) + ' ' + (this.proxy.depth*3) + ' ' +
	'}';
	this.tracePrint ('newView=' + newView);
	newViewNode = new MFNode(); // returns MFNode
	// append newViewNode to X3DJSON.nodeUtil("Scene","LevelsRoot", "children")
	X3DJSON.nodeUtil("Scene","LevelsRoot", "children")[childCount] = newViewNode[0];
	childCount++;

	newView ='Viewpoint {' +
	'this.proxy.description "' + this.proxy.name + ' (above)"' +
	'position' + (this.proxy.width/2) + ' ' + (this.proxy.height*3.0) + ' ' + (-this.proxy.depth/2) + ' ' +
	'this.proxy.orientation 1 0 0 -1.57' +
	'}';
	this.tracePrint ('newView=' + newView);
	newViewNode = new MFNode(); // returns MFNode
	// append newViewNode to X3DJSON.nodeUtil("Scene","LevelsRoot", "children")
	X3DJSON.nodeUtil("Scene","LevelsRoot", "children")[childCount] = newViewNode[0];
	childCount++;

	if (this.proxy.authorAssist)
	{
		this.tracePrint ('this.proxy.authorAssist');
		this.proxy.authorAssistChoice = 0;
	}
	else	this.proxy.authorAssistChoice = -1;

	this.tracePrint ('X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","LevelsRoot", "")", "hildCount", ' + childCount + ' (Switch + # this.proxy.levels + [this.proxy.roof] + Viewpoint*2)'));
	this.proxy.built = true;
	this.tracePrint ('this.proxy.built=' + this.proxy.built);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript']['ACTION']['floorPoints'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript']['ACTION']['floorPoints'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript']['ACTION']['floorPoints'].push(function(property, value) {
		if (property === 'floorPoints') {
			X3DJSON.nodeUtil("Scene","FloorCoordinate","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'].floorPoints === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'].floorPoints() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'].floorPoints, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FloorCoordinate","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'].floorPoints === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'].floorPoints() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'].floorPoints, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript']['ACTION']['wallsVisible'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript']['ACTION']['wallsVisible'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript']['ACTION']['wallsVisible'].push(function(property, value) {
		if (property === 'wallsVisible') {
			X3DJSON.nodeUtil("Scene","FloorSidesSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'].wallsVisible === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'].wallsVisible() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'].wallsVisible, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FloorSidesSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'].wallsVisible === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'].wallsVisible() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'].wallsVisible, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript']['ACTION']['coordinatePoints'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript']['ACTION']['coordinatePoints'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript']['ACTION']['coordinatePoints'].push(function(property, value) {
		if (property === 'coordinatePoints') {
			X3DJSON.nodeUtil("Scene","WallCoordinate","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'].coordinatePoints === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'].coordinatePoints() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'].coordinatePoints, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","WallCoordinate","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'].coordinatePoints === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'].coordinatePoints() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'].coordinatePoints, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript']['ACTION']['wallsVisible'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript']['ACTION']['wallsVisible'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript']['ACTION']['wallsVisible'].push(function(property, value) {
		if (property === 'wallsVisible') {
			X3DJSON.nodeUtil("Scene","WallSidesSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'].wallsVisible === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'].wallsVisible() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'].wallsVisible, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","WallSidesSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'].wallsVisible === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'].wallsVisible() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'].wallsVisible, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript']['ACTION']['rightTranslation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript']['ACTION']['rightTranslation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript']['ACTION']['rightTranslation'].push(function(property, value) {
		if (property === 'rightTranslation') {
			X3DJSON.nodeUtil("Scene","RightWallTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].rightTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].rightTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].rightTranslation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RightWallTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].rightTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].rightTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].rightTranslation, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript']['ACTION']['rearTranslation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript']['ACTION']['rearTranslation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript']['ACTION']['rearTranslation'].push(function(property, value) {
		if (property === 'rearTranslation') {
			X3DJSON.nodeUtil("Scene","RearWallTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].rearTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].rearTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].rearTranslation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RearWallTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].rearTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].rearTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].rearTranslation, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript']['ACTION']['leftTranslation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript']['ACTION']['leftTranslation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript']['ACTION']['leftTranslation'].push(function(property, value) {
		if (property === 'leftTranslation') {
			X3DJSON.nodeUtil("Scene","LeftWallTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].leftTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].leftTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].leftTranslation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","LeftWallTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].leftTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].leftTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].leftTranslation, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript']['ACTION']['built'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript']['ACTION']['built'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript']['ACTION']['built'].push(function(property, value) {
		if (property === 'built') {
			X3DJSON.nodeUtil("Scene","LevelBuiltFilter","boolean",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].built === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].built() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].built, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","LevelBuiltFilter","boolean",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].built === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].built() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].built, __eventTime);
    if (X3DJSON.nodeUtil("Scene","LevelBuiltFilter")) {
X3DJSON.nodeUtil("Scene","LevelBuiltFilter").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","LevelBuiltNegation")) {
X3DJSON.nodeUtil("Scene","LevelBuiltNegation").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","LevelRecalculateUntilBuilt")) {
X3DJSON.nodeUtil("Scene","LevelRecalculateUntilBuilt").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].recheckUntilBuilt(X3DJSON.nodeUtil("Scene","LevelRecalculateUntilBuilt","cycleTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].recheckUntilBuilt(X3DJSON.nodeUtil("Scene","LevelRecalculateUntilBuilt","cycleTime"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript']['ACTION']['authorAssistChoice'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript']['ACTION']['authorAssistChoice'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript']['ACTION']['authorAssistChoice'].push(function(property, value) {
		if (property === 'authorAssistChoice') {
			X3DJSON.nodeUtil("Scene","AuthorAssist1","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].authorAssistChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].authorAssistChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].authorAssistChoice, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AuthorAssist1","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].authorAssistChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].authorAssistChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].authorAssistChoice, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript']['ACTION']['authorAssistChoice'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript']['ACTION']['authorAssistChoice'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript']['ACTION']['authorAssistChoice'].push(function(property, value) {
		if (property === 'authorAssistChoice') {
			X3DJSON.nodeUtil("Scene","AuthorAssist2","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].authorAssistChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].authorAssistChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].authorAssistChoice, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AuthorAssist2","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].authorAssistChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].authorAssistChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].authorAssistChoice, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript']['ACTION']['scale'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript']['ACTION']['scale'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript']['ACTION']['scale'].push(function(property, value) {
		if (property === 'scale') {
			X3DJSON.nodeUtil("Scene","CoordinateAxesTransform","scale",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].scale === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].scale() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].scale, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","CoordinateAxesTransform","scale",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].scale === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].scale() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].scale, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript']['ACTION']['built'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript']['ACTION']['built'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript']['ACTION']['built'].push(function(property, value) {
		if (property === 'built') {
			X3DJSON.nodeUtil("Scene","BuildingBuiltFilter","boolean",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].built === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].built() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].built, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BuildingBuiltFilter","boolean",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].built === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].built() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].built, __eventTime);
    if (X3DJSON.nodeUtil("Scene","BuildingBuiltFilter")) {
X3DJSON.nodeUtil("Scene","BuildingBuiltFilter").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BuildingBuiltNegation")) {
X3DJSON.nodeUtil("Scene","BuildingBuiltNegation").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BuildingRecalculateUntilBuilt")) {
X3DJSON.nodeUtil("Scene","BuildingRecalculateUntilBuilt").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].recheckUntilBuilt(X3DJSON.nodeUtil("Scene","BuildingRecalculateUntilBuilt","cycleTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].recheckUntilBuilt(X3DJSON.nodeUtil("Scene","BuildingRecalculateUntilBuilt","cycleTime"), __eventTime);
			X3DJSON.nodeUtil("Scene","FloorCoordinate","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'].floorPoints === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'].floorPoints() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'].floorPoints, __eventTime);
			X3DJSON.nodeUtil("Scene","FloorSidesSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'].wallsVisible === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'].wallsVisible() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['FloorConstructionScript'].wallsVisible, __eventTime);
			X3DJSON.nodeUtil("Scene","WallCoordinate","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'].coordinatePoints === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'].coordinatePoints() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'].coordinatePoints, __eventTime);
			X3DJSON.nodeUtil("Scene","WallSidesSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'].wallsVisible === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'].wallsVisible() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['WallConstructionScript'].wallsVisible, __eventTime);
			X3DJSON.nodeUtil("Scene","RightWallTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].rightTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].rightTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].rightTranslation, __eventTime);
			X3DJSON.nodeUtil("Scene","RearWallTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].rearTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].rearTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].rearTranslation, __eventTime);
			X3DJSON.nodeUtil("Scene","LeftWallTransform","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].leftTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].leftTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].leftTranslation, __eventTime);
			X3DJSON.nodeUtil("Scene","LevelBuiltFilter","boolean",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].built === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].built() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].built, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['LevelConstructionScript'].recheckUntilBuilt(X3DJSON.nodeUtil("Scene","LevelRecalculateUntilBuilt","cycleTime"), __eventTime);
			X3DJSON.nodeUtil("Scene","AuthorAssist1","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].authorAssistChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].authorAssistChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].authorAssistChoice, __eventTime);
			X3DJSON.nodeUtil("Scene","AuthorAssist2","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].authorAssistChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].authorAssistChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].authorAssistChoice, __eventTime);
			X3DJSON.nodeUtil("Scene","CoordinateAxesTransform","scale",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].scale === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].scale() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].scale, __eventTime);
			X3DJSON.nodeUtil("Scene","BuildingBuiltFilter","boolean",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].built === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].built() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].built, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Buildings/UHRB/SimpleBuildingConstructionPrototypes.json']['BuildingConstructionScript'].recheckUntilBuilt(X3DJSON.nodeUtil("Scene","BuildingRecalculateUntilBuilt","cycleTime"), __eventTime);