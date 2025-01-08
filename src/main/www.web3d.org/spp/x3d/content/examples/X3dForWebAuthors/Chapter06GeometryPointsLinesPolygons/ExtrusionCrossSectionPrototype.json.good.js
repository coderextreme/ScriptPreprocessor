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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'] = function() {
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
	this.set_crossSection = function (value) {
		try {
			this.proxy.crossSection = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting crossSection '+e);
			console.error('Problems setting crossSection',e);
		}
	};
	this.crossSection_changed = function () {
		var value = this.crossSection;
		return value;
	};
	try {
		this.crossSection = new MFVec2f();
	} catch (e) {
		console.log('Problems setting crossSection '+e);
		console.error('Problems setting crossSection',e);
	}
	this.set_spine = function (value) {
		try {
			this.proxy.spine = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting spine '+e);
			console.error('Problems setting spine',e);
		}
	};
	this.spine_changed = function () {
		var value = this.spine;
		return value;
	};
	try {
		this.spine = new MFVec3f();
	} catch (e) {
		console.log('Problems setting spine '+e);
		console.error('Problems setting spine',e);
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
		this.scale = new MFVec2f();
	} catch (e) {
		console.log('Problems setting scale '+e);
		console.error('Problems setting scale',e);
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
		this.orientation = new MFRotation();
	} catch (e) {
		console.log('Problems setting orientation '+e);
		console.error('Problems setting orientation',e);
	}
	this.set_spineColor = function (value) {
		try {
			this.proxy.spineColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting spineColor '+e);
			console.error('Problems setting spineColor',e);
		}
	};
	this.spineColor_changed = function () {
		var value = this.spineColor;
		return value;
	};
	try {
		this.spineColor = new SFColor();
	} catch (e) {
		console.log('Problems setting spineColor '+e);
		console.error('Problems setting spineColor',e);
	}
	this.set_crossSectionColor = function (value) {
		try {
			this.proxy.crossSectionColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting crossSectionColor '+e);
			console.error('Problems setting crossSectionColor',e);
		}
	};
	this.crossSectionColor_changed = function () {
		var value = this.crossSectionColor;
		return value;
	};
	try {
		this.crossSectionColor = new SFColor();
	} catch (e) {
		console.log('Problems setting crossSectionColor '+e);
		console.error('Problems setting crossSectionColor',e);
	}
	this.set_crossSectionTransparency = function (value) {
		try {
			this.proxy.crossSectionTransparency = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting crossSectionTransparency '+e);
			console.error('Problems setting crossSectionTransparency',e);
		}
	};
	this.crossSectionTransparency_changed = function () {
		var value = this.crossSectionTransparency;
		return value;
	};
	try {
		this.crossSectionTransparency = new SFFloat();
	} catch (e) {
		console.log('Problems setting crossSectionTransparency '+e);
		console.error('Problems setting crossSectionTransparency',e);
	}
	this.set_extrusionColor = function (value) {
		try {
			this.proxy.extrusionColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting extrusionColor '+e);
			console.error('Problems setting extrusionColor',e);
		}
	};
	this.extrusionColor_changed = function () {
		var value = this.extrusionColor;
		return value;
	};
	try {
		this.extrusionColor = new SFColor();
	} catch (e) {
		console.log('Problems setting extrusionColor '+e);
		console.error('Problems setting extrusionColor',e);
	}
	this.set_extrusionTransparency = function (value) {
		try {
			this.proxy.extrusionTransparency = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting extrusionTransparency '+e);
			console.error('Problems setting extrusionTransparency',e);
		}
	};
	this.extrusionTransparency_changed = function () {
		var value = this.extrusionTransparency;
		return value;
	};
	try {
		this.extrusionTransparency = new SFFloat();
	} catch (e) {
		console.log('Problems setting extrusionTransparency '+e);
		console.error('Problems setting extrusionTransparency',e);
	}
	this.set_crossSection = function (value) {
		try {
			this.proxy.crossSection = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting crossSection '+e);
			console.error('Problems setting crossSection',e);
		}
	};
	this.crossSection_changed = function () {
		var value = this.crossSection;
		return value;
	};
	try {
		this.crossSection = new MFVec2f();
	} catch (e) {
		console.log('Problems setting crossSection '+e);
		console.error('Problems setting crossSection',e);
	}
	this.set_spine = function (value) {
		try {
			this.proxy.spine = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting spine '+e);
			console.error('Problems setting spine',e);
		}
	};
	this.spine_changed = function () {
		var value = this.spine;
		return value;
	};
	try {
		this.spine = new MFVec3f();
	} catch (e) {
		console.log('Problems setting spine '+e);
		console.error('Problems setting spine',e);
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
		this.scale = new MFVec2f();
	} catch (e) {
		console.log('Problems setting scale '+e);
		console.error('Problems setting scale',e);
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
		this.orientation = new MFRotation();
	} catch (e) {
		console.log('Problems setting orientation '+e);
		console.error('Problems setting orientation',e);
	}
	this.set_spineIndex = function (value) {
		try {
			this.proxy.spineIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting spineIndex '+e);
			console.error('Problems setting spineIndex',e);
		}
	};
	this.spineIndex_changed = function () {
		var value = this.spineIndex;
		return value;
	};
	try {
		this.spineIndex = new MFInt32();
	} catch (e) {
		console.log('Problems setting spineIndex '+e);
		console.error('Problems setting spineIndex',e);
	}
	this.set_facesIndex = function (value) {
		try {
			this.proxy.facesIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting facesIndex '+e);
			console.error('Problems setting facesIndex',e);
		}
	};
	this.facesIndex_changed = function () {
		var value = this.facesIndex;
		return value;
	};
	try {
		this.facesIndex = new MFInt32();
	} catch (e) {
		console.log('Problems setting facesIndex '+e);
		console.error('Problems setting facesIndex',e);
	}
	this.set_facePoints = function (value) {
		try {
			this.proxy.facePoints = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting facePoints '+e);
			console.error('Problems setting facePoints',e);
		}
	};
	this.facePoints_changed = function () {
		var value = this.facePoints;
		return value;
	};
	try {
		this.facePoints = new MFVec3f();
	} catch (e) {
		console.log('Problems setting facePoints '+e);
		console.error('Problems setting facePoints',e);
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
	this.set_computedFacesIndex = function (value) {
		try {
			this.proxy.computedFacesIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting computedFacesIndex '+e);
			console.error('Problems setting computedFacesIndex',e);
		}
	};
	this.computedFacesIndex_changed = function () {
		var value = this.computedFacesIndex;
		return value;
	};
	try {
		this.computedFacesIndex = new MFInt32();
	} catch (e) {
		console.log('Problems setting computedFacesIndex '+e);
		console.error('Problems setting computedFacesIndex',e);
	}
	this.set_computedFacePoints = function (value) {
		try {
			this.proxy.computedFacePoints = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting computedFacePoints '+e);
			console.error('Problems setting computedFacePoints',e);
		}
	};
	this.computedFacePoints_changed = function () {
		var value = this.computedFacePoints;
		return value;
	};
	try {
		this.computedFacePoints = new MFVec3f();
	} catch (e) {
		console.log('Problems setting computedFacePoints '+e);
		console.error('Problems setting computedFacePoints',e);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript']['ACTION']['spineIndex'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript']['ACTION']['spineIndex'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript']['ACTION']['spineIndex'].push(function(property, value) {
		if (property === 'spineIndex') {
			X3DJSON.nodeUtil("Scene","SpineLine","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].spineIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].spineIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].spineIndex, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SpineLine","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].spineIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].spineIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].spineIndex, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript']['ACTION']['facesIndex'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript']['ACTION']['facesIndex'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript']['ACTION']['facesIndex'].push(function(property, value) {
		if (property === 'facesIndex') {
			X3DJSON.nodeUtil("Scene","CrossSectionFaces","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].facesIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].facesIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].facesIndex, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","CrossSectionFaces","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].facesIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].facesIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].facesIndex, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript']['ACTION']['facePoints'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript']['ACTION']['facePoints'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript']['ACTION']['facePoints'].push(function(property, value) {
		if (property === 'facePoints') {
			X3DJSON.nodeUtil("Scene","CrossSectionFacesCoordinates","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].facePoints === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].facePoints() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].facePoints, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","CrossSectionFacesCoordinates","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].facePoints === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].facePoints() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].facePoints, __eventTime);
			X3DJSON.nodeUtil("Scene","SpineLine","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].spineIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].spineIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].spineIndex, __eventTime);
			X3DJSON.nodeUtil("Scene","CrossSectionFaces","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].facesIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].facesIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].facesIndex, __eventTime);
			X3DJSON.nodeUtil("Scene","CrossSectionFacesCoordinates","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].facePoints === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].facePoints() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter06GeometryPointsLinesPolygons/ExtrusionCrossSectionPrototype.json']['CrossSectionScript'].facePoints, __eventTime);