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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'] = function() {
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
		this.height = new SFFloat(2);
	} catch (e) {
		console.log('Problems setting height '+e);
		console.error('Problems setting height',e);
	}
	this.set_radius = function (value) {
		try {
			this.proxy.radius = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting radius '+e);
			console.error('Problems setting radius',e);
		}
	};
	this.radius_changed = function () {
		var value = this.radius;
		return value;
	};
	try {
		this.radius = new SFFloat(0.5);
	} catch (e) {
		console.log('Problems setting radius '+e);
		console.error('Problems setting radius',e);
	}
	this.set_numberOfPoints = function (value) {
		try {
			this.proxy.numberOfPoints = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting numberOfPoints '+e);
			console.error('Problems setting numberOfPoints',e);
		}
	};
	this.numberOfPoints_changed = function () {
		var value = this.numberOfPoints;
		return value;
	};
	try {
		this.numberOfPoints = new SFInt32(36);
	} catch (e) {
		console.log('Problems setting numberOfPoints '+e);
		console.error('Problems setting numberOfPoints',e);
	}
	this.set_numberOfLevels = function (value) {
		try {
			this.proxy.numberOfLevels = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting numberOfLevels '+e);
			console.error('Problems setting numberOfLevels',e);
		}
	};
	this.numberOfLevels_changed = function () {
		var value = this.numberOfLevels;
		return value;
	};
	try {
		this.numberOfLevels = new SFInt32(10);
	} catch (e) {
		console.log('Problems setting numberOfLevels '+e);
		console.error('Problems setting numberOfLevels',e);
	}
	this.set_horizontalScale = function (value) {
		try {
			this.proxy.horizontalScale = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting horizontalScale '+e);
			console.error('Problems setting horizontalScale',e);
		}
	};
	this.horizontalScale_changed = function () {
		var value = this.horizontalScale;
		return value;
	};
	try {
		this.horizontalScale = new SFFloat(1);
	} catch (e) {
		console.log('Problems setting horizontalScale '+e);
		console.error('Problems setting horizontalScale',e);
	}
	this.set_verticalScale = function (value) {
		try {
			this.proxy.verticalScale = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting verticalScale '+e);
			console.error('Problems setting verticalScale',e);
		}
	};
	this.verticalScale_changed = function () {
		var value = this.verticalScale;
		return value;
	};
	try {
		this.verticalScale = new SFFloat(1);
	} catch (e) {
		console.log('Problems setting verticalScale '+e);
		console.error('Problems setting verticalScale',e);
	}
	this.set_top = function (value) {
		try {
			this.proxy.top = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting top '+e);
			console.error('Problems setting top',e);
		}
	};
	this.top_changed = function () {
		var value = this.top;
		return value;
	};
	try {
		this.top = new SFBool(true);
	} catch (e) {
		console.log('Problems setting top '+e);
		console.error('Problems setting top',e);
	}
	this.set_side = function (value) {
		try {
			this.proxy.side = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting side '+e);
			console.error('Problems setting side',e);
		}
	};
	this.side_changed = function () {
		var value = this.side;
		return value;
	};
	try {
		this.side = new SFBool(true);
	} catch (e) {
		console.log('Problems setting side '+e);
		console.error('Problems setting side',e);
	}
	this.set_bottom = function (value) {
		try {
			this.proxy.bottom = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting bottom '+e);
			console.error('Problems setting bottom',e);
		}
	};
	this.bottom_changed = function () {
		var value = this.bottom;
		return value;
	};
	try {
		this.bottom = new SFBool(true);
	} catch (e) {
		console.log('Problems setting bottom '+e);
		console.error('Problems setting bottom',e);
	}
	this.set_pointsComputed = function (value) {
		try {
			this.proxy.pointsComputed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting pointsComputed '+e);
			console.error('Problems setting pointsComputed',e);
		}
	};
	this.pointsComputed_changed = function () {
		var value = this.pointsComputed;
		return value;
	};
	try {
		this.pointsComputed = new MFVec3f();
	} catch (e) {
		console.log('Problems setting pointsComputed '+e);
		console.error('Problems setting pointsComputed',e);
	}
	this.set_indicesComputed = function (value) {
		try {
			this.proxy.indicesComputed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting indicesComputed '+e);
			console.error('Problems setting indicesComputed',e);
		}
	};
	this.indicesComputed_changed = function () {
		var value = this.indicesComputed;
		return value;
	};
	try {
		this.indicesComputed = new MFInt32();
	} catch (e) {
		console.log('Problems setting indicesComputed '+e);
		console.error('Problems setting indicesComputed',e);
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
		this.traceEnabled = new SFBool(false);
	} catch (e) {
		console.log('Problems setting traceEnabled '+e);
		console.error('Problems setting traceEnabled',e);
	}
	this.set_geometryType = function (value) {
		try {
			this.proxy.geometryType = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting geometryType '+e);
			console.error('Problems setting geometryType',e);
		}
	};
	this.geometryType_changed = function () {
		var value = this.geometryType;
		return value;
	};
	try {
		this.geometryType = new SFString("polygons");
	} catch (e) {
		console.log('Problems setting geometryType '+e);
		console.error('Problems setting geometryType',e);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript']['ACTION']['indicesComputed'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript']['ACTION']['indicesComputed'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript']['ACTION']['indicesComputed'].push(function(property, value) {
		if (property === 'indicesComputed') {
			X3DJSON.nodeUtil("Scene","COMPUTED_IFS","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'].indicesComputed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'].indicesComputed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'].indicesComputed, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","COMPUTED_IFS","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'].indicesComputed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'].indicesComputed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'].indicesComputed, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript']['ACTION']['pointsComputed'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript']['ACTION']['pointsComputed'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript']['ACTION']['pointsComputed'].push(function(property, value) {
		if (property === 'pointsComputed') {
			X3DJSON.nodeUtil("Scene","COMPUTED_COORDINATE","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'].pointsComputed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'].pointsComputed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'].pointsComputed, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","COMPUTED_COORDINATE","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'].pointsComputed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'].pointsComputed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'].pointsComputed, __eventTime);
			X3DJSON.nodeUtil("Scene","COMPUTED_IFS","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'].indicesComputed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'].indicesComputed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'].indicesComputed, __eventTime);
			X3DJSON.nodeUtil("Scene","COMPUTED_COORDINATE","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'].pointsComputed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'].pointsComputed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForAdvancedModeling/GeometricShapes/CapsuleGenerator.json']['CapsuleGeneratorScript'].pointsComputed, __eventTime);