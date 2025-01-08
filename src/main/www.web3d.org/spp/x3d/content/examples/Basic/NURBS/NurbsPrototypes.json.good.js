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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['ScriptContourPolyline2D-missingBody'] = function() {
	this.set_PointHolder = function (value) {
		try {
			this.proxy.PointHolder = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting PointHolder '+e);
			console.error('Problems setting PointHolder',e);
		}
	};
	this.PointHolder_changed = function () {
		var value = this.PointHolder;
		return value;
	};
	try {
		this.PointHolder = X3DJSON.nodeUtil("Scene","PointHolder");
	} catch (e) {
		console.log('Problems setting PointHolder '+e);
		console.error('Problems setting PointHolder',e);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['ScriptContourPolyline2D-missingBody'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['ScriptContourPolyline2D-missingBody']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['ScriptContourPolyline2D-missingBody'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['ScriptContourPolyline2D-missingBody'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['ScriptContourPolyline2D-missingBody']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['ScriptContourPolyline2D-missingBody']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['ScriptContourPolyline2D-missingBody'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['ScriptContourPolyline2D-missingBody']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['ScriptContourPolyline2D-missingBody']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['ScriptContourPolyline2D-missingBody'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['ScriptContourPolyline2D-missingBody'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'] = function() {
	this.set_controlPoint = function (value) {
		try {
			this.proxy.controlPoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting controlPoint '+e);
			console.error('Problems setting controlPoint',e);
		}
	};
	this.controlPoint_changed = function () {
		var value = this.controlPoint;
		return value;
	};
	try {
		this.controlPoint = new SFNode();
	} catch (e) {
		console.log('Problems setting controlPoint '+e);
		console.error('Problems setting controlPoint',e);
	}
	this.set_tessellation = function (value) {
		try {
			this.proxy.tessellation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting tessellation '+e);
			console.error('Problems setting tessellation',e);
		}
	};
	this.tessellation_changed = function () {
		var value = this.tessellation;
		return value;
	};
	try {
		this.tessellation = new SFInt32();
	} catch (e) {
		console.log('Problems setting tessellation '+e);
		console.error('Problems setting tessellation',e);
	}
	this.set_weight = function (value) {
		try {
			this.proxy.weight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting weight '+e);
			console.error('Problems setting weight',e);
		}
	};
	this.weight_changed = function () {
		var value = this.weight;
		return value;
	};
	try {
		this.weight = new MFDouble();
	} catch (e) {
		console.log('Problems setting weight '+e);
		console.error('Problems setting weight',e);
	}
	this.set_closed = function (value) {
		try {
			this.proxy.closed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting closed '+e);
			console.error('Problems setting closed',e);
		}
	};
	this.closed_changed = function () {
		var value = this.closed;
		return value;
	};
	try {
		this.closed = new SFBool();
	} catch (e) {
		console.log('Problems setting closed '+e);
		console.error('Problems setting closed',e);
	}
	this.set_knot = function (value) {
		try {
			this.proxy.knot = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting knot '+e);
			console.error('Problems setting knot',e);
		}
	};
	this.knot_changed = function () {
		var value = this.knot;
		return value;
	};
	try {
		this.knot = new MFDouble();
	} catch (e) {
		console.log('Problems setting knot '+e);
		console.error('Problems setting knot',e);
	}
	this.set_order = function (value) {
		try {
			this.proxy.order = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting order '+e);
			console.error('Problems setting order',e);
		}
	};
	this.order_changed = function () {
		var value = this.order;
		return value;
	};
	try {
		this.order = new SFInt32();
	} catch (e) {
		console.log('Problems setting order '+e);
		console.error('Problems setting order',e);
	}
	this.set_controlPoint = function (value) {
		try {
			this.proxy.controlPoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting controlPoint '+e);
			console.error('Problems setting controlPoint',e);
		}
	};
	this.controlPoint_changed = function () {
		var value = this.controlPoint;
		return value;
	};
	try {
		this.controlPoint = new SFNode();
	} catch (e) {
		console.log('Problems setting controlPoint '+e);
		console.error('Problems setting controlPoint',e);
	}
	this.set_controlPoint = function (value) {
		try {
			this.proxy.controlPoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting controlPoint '+e);
			console.error('Problems setting controlPoint',e);
		}
	};
	this.controlPoint_changed = function () {
		var value = this.controlPoint;
		return value;
	};
	try {
		this.controlPoint = new SFNode();
	} catch (e) {
		console.log('Problems setting controlPoint '+e);
		console.error('Problems setting controlPoint',e);
	}
	this.set_tessellation = function (value) {
		try {
			this.proxy.tessellation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting tessellation '+e);
			console.error('Problems setting tessellation',e);
		}
	};
	this.tessellation_changed = function () {
		var value = this.tessellation;
		return value;
	};
	try {
		this.tessellation = new SFInt32();
	} catch (e) {
		console.log('Problems setting tessellation '+e);
		console.error('Problems setting tessellation',e);
	}
	this.set_tessellation = function (value) {
		try {
			this.proxy.tessellation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting tessellation '+e);
			console.error('Problems setting tessellation',e);
		}
	};
	this.tessellation_changed = function () {
		var value = this.tessellation;
		return value;
	};
	try {
		this.tessellation = new SFInt32();
	} catch (e) {
		console.log('Problems setting tessellation '+e);
		console.error('Problems setting tessellation',e);
	}
	this.set_weight = function (value) {
		try {
			this.proxy.weight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting weight '+e);
			console.error('Problems setting weight',e);
		}
	};
	this.weight_changed = function () {
		var value = this.weight;
		return value;
	};
	try {
		this.weight = new MFDouble();
	} catch (e) {
		console.log('Problems setting weight '+e);
		console.error('Problems setting weight',e);
	}
	this.set_weight = function (value) {
		try {
			this.proxy.weight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting weight '+e);
			console.error('Problems setting weight',e);
		}
	};
	this.weight_changed = function () {
		var value = this.weight;
		return value;
	};
	try {
		this.weight = new MFDouble();
	} catch (e) {
		console.log('Problems setting weight '+e);
		console.error('Problems setting weight',e);
	}
	this.set_point = function (value) {
		try {
			this.proxy.point = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting point '+e);
			console.error('Problems setting point',e);
		}
	};
	this.point_changed = function () {
		var value = this.point;
		return value;
	};
	try {
		this.point = new MFVec3f();
	} catch (e) {
		console.log('Problems setting point '+e);
		console.error('Problems setting point',e);
	}
	this.set_pointIndex = function (value) {
		try {
			this.proxy.pointIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting pointIndex '+e);
			console.error('Problems setting pointIndex',e);
		}
	};
	this.pointIndex_changed = function () {
		var value = this.pointIndex;
		return value;
	};
	try {
		this.pointIndex = new MFInt32();
	} catch (e) {
		console.log('Problems setting pointIndex '+e);
		console.error('Problems setting pointIndex',e);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsOrientationInterpolatorScript'] = function() {
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
		this.fraction = undefined;
	} catch (e) {
		console.log('Problems setting fraction '+e);
		console.error('Problems setting fraction',e);
	}
	this.set_controlPoint = function (value) {
		try {
			this.proxy.controlPoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting controlPoint '+e);
			console.error('Problems setting controlPoint',e);
		}
	};
	this.controlPoint_changed = function () {
		var value = this.controlPoint;
		return value;
	};
	try {
		this.controlPoint = new SFNode();
	} catch (e) {
		console.log('Problems setting controlPoint '+e);
		console.error('Problems setting controlPoint',e);
	}
	this.set_knot = function (value) {
		try {
			this.proxy.knot = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting knot '+e);
			console.error('Problems setting knot',e);
		}
	};
	this.knot_changed = function () {
		var value = this.knot;
		return value;
	};
	try {
		this.knot = new MFDouble();
	} catch (e) {
		console.log('Problems setting knot '+e);
		console.error('Problems setting knot',e);
	}
	this.set_order = function (value) {
		try {
			this.proxy.order = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting order '+e);
			console.error('Problems setting order',e);
		}
	};
	this.order_changed = function () {
		var value = this.order;
		return value;
	};
	try {
		this.order = new SFInt32();
	} catch (e) {
		console.log('Problems setting order '+e);
		console.error('Problems setting order',e);
	}
	this.set_weight = function (value) {
		try {
			this.proxy.weight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting weight '+e);
			console.error('Problems setting weight',e);
		}
	};
	this.weight_changed = function () {
		var value = this.weight;
		return value;
	};
	try {
		this.weight = new MFDouble();
	} catch (e) {
		console.log('Problems setting weight '+e);
		console.error('Problems setting weight',e);
	}
	this.set_value = function (value) {
		try {
			this.proxy.value = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting value '+e);
			console.error('Problems setting value',e);
		}
	};
	this.value_changed = function () {
		var value = this.value;
		return value;
	};
	try {
		this.value = undefined;
	} catch (e) {
		console.log('Problems setting value '+e);
		console.error('Problems setting value',e);
	}
	this.set_controlPoint = function (value) {
		try {
			this.proxy.controlPoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting controlPoint '+e);
			console.error('Problems setting controlPoint',e);
		}
	};
	this.controlPoint_changed = function () {
		var value = this.controlPoint;
		return value;
	};
	try {
		this.controlPoint = new SFNode();
	} catch (e) {
		console.log('Problems setting controlPoint '+e);
		console.error('Problems setting controlPoint',e);
	}
	this.set_controlPoint = function (value) {
		try {
			this.proxy.controlPoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting controlPoint '+e);
			console.error('Problems setting controlPoint',e);
		}
	};
	this.controlPoint_changed = function () {
		var value = this.controlPoint;
		return value;
	};
	try {
		this.controlPoint = new SFNode();
	} catch (e) {
		console.log('Problems setting controlPoint '+e);
		console.error('Problems setting controlPoint',e);
	}
	this.set_knot = function (value) {
		try {
			this.proxy.knot = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting knot '+e);
			console.error('Problems setting knot',e);
		}
	};
	this.knot_changed = function () {
		var value = this.knot;
		return value;
	};
	try {
		this.knot = new MFDouble();
	} catch (e) {
		console.log('Problems setting knot '+e);
		console.error('Problems setting knot',e);
	}
	this.set_knot = function (value) {
		try {
			this.proxy.knot = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting knot '+e);
			console.error('Problems setting knot',e);
		}
	};
	this.knot_changed = function () {
		var value = this.knot;
		return value;
	};
	try {
		this.knot = new MFDouble();
	} catch (e) {
		console.log('Problems setting knot '+e);
		console.error('Problems setting knot',e);
	}
	this.set_order = function (value) {
		try {
			this.proxy.order = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting order '+e);
			console.error('Problems setting order',e);
		}
	};
	this.order_changed = function () {
		var value = this.order;
		return value;
	};
	try {
		this.order = new SFInt32();
	} catch (e) {
		console.log('Problems setting order '+e);
		console.error('Problems setting order',e);
	}
	this.set_order = function (value) {
		try {
			this.proxy.order = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting order '+e);
			console.error('Problems setting order',e);
		}
	};
	this.order_changed = function () {
		var value = this.order;
		return value;
	};
	try {
		this.order = new SFInt32();
	} catch (e) {
		console.log('Problems setting order '+e);
		console.error('Problems setting order',e);
	}
	this.set_weight = function (value) {
		try {
			this.proxy.weight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting weight '+e);
			console.error('Problems setting weight',e);
		}
	};
	this.weight_changed = function () {
		var value = this.weight;
		return value;
	};
	try {
		this.weight = new MFDouble();
	} catch (e) {
		console.log('Problems setting weight '+e);
		console.error('Problems setting weight',e);
	}
	this.set_weight = function (value) {
		try {
			this.proxy.weight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting weight '+e);
			console.error('Problems setting weight',e);
		}
	};
	this.weight_changed = function () {
		var value = this.weight;
		return value;
	};
	try {
		this.weight = new MFDouble();
	} catch (e) {
		console.log('Problems setting weight '+e);
		console.error('Problems setting weight',e);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsOrientationInterpolatorScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsOrientationInterpolatorScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsOrientationInterpolatorScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsOrientationInterpolatorScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsOrientationInterpolatorScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsOrientationInterpolatorScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsOrientationInterpolatorScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsOrientationInterpolatorScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsOrientationInterpolatorScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsOrientationInterpolatorScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsOrientationInterpolatorScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'] = function() {
	this.set_controlPoint = function (value) {
		try {
			this.proxy.controlPoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting controlPoint '+e);
			console.error('Problems setting controlPoint',e);
		}
	};
	this.controlPoint_changed = function () {
		var value = this.controlPoint;
		return value;
	};
	try {
		this.controlPoint = new SFNode();
	} catch (e) {
		console.log('Problems setting controlPoint '+e);
		console.error('Problems setting controlPoint',e);
	}
	this.set_texCoord = function (value) {
		try {
			this.proxy.texCoord = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting texCoord '+e);
			console.error('Problems setting texCoord',e);
		}
	};
	this.texCoord_changed = function () {
		var value = this.texCoord;
		return value;
	};
	try {
		this.texCoord = new SFNode();
	} catch (e) {
		console.log('Problems setting texCoord '+e);
		console.error('Problems setting texCoord',e);
	}
	this.set_uTessellation = function (value) {
		try {
			this.proxy.uTessellation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting uTessellation '+e);
			console.error('Problems setting uTessellation',e);
		}
	};
	this.uTessellation_changed = function () {
		var value = this.uTessellation;
		return value;
	};
	try {
		this.uTessellation = new SFInt32();
	} catch (e) {
		console.log('Problems setting uTessellation '+e);
		console.error('Problems setting uTessellation',e);
	}
	this.set_vTessellation = function (value) {
		try {
			this.proxy.vTessellation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting vTessellation '+e);
			console.error('Problems setting vTessellation',e);
		}
	};
	this.vTessellation_changed = function () {
		var value = this.vTessellation;
		return value;
	};
	try {
		this.vTessellation = new SFInt32();
	} catch (e) {
		console.log('Problems setting vTessellation '+e);
		console.error('Problems setting vTessellation',e);
	}
	this.set_weight = function (value) {
		try {
			this.proxy.weight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting weight '+e);
			console.error('Problems setting weight',e);
		}
	};
	this.weight_changed = function () {
		var value = this.weight;
		return value;
	};
	try {
		this.weight = new MFDouble();
	} catch (e) {
		console.log('Problems setting weight '+e);
		console.error('Problems setting weight',e);
	}
	this.set_solid = function (value) {
		try {
			this.proxy.solid = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting solid '+e);
			console.error('Problems setting solid',e);
		}
	};
	this.solid_changed = function () {
		var value = this.solid;
		return value;
	};
	try {
		this.solid = new SFBool();
	} catch (e) {
		console.log('Problems setting solid '+e);
		console.error('Problems setting solid',e);
	}
	this.set_uClosed = function (value) {
		try {
			this.proxy.uClosed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting uClosed '+e);
			console.error('Problems setting uClosed',e);
		}
	};
	this.uClosed_changed = function () {
		var value = this.uClosed;
		return value;
	};
	try {
		this.uClosed = new SFBool();
	} catch (e) {
		console.log('Problems setting uClosed '+e);
		console.error('Problems setting uClosed',e);
	}
	this.set_uDimension = function (value) {
		try {
			this.proxy.uDimension = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting uDimension '+e);
			console.error('Problems setting uDimension',e);
		}
	};
	this.uDimension_changed = function () {
		var value = this.uDimension;
		return value;
	};
	try {
		this.uDimension = new SFInt32();
	} catch (e) {
		console.log('Problems setting uDimension '+e);
		console.error('Problems setting uDimension',e);
	}
	this.set_uKnot = function (value) {
		try {
			this.proxy.uKnot = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting uKnot '+e);
			console.error('Problems setting uKnot',e);
		}
	};
	this.uKnot_changed = function () {
		var value = this.uKnot;
		return value;
	};
	try {
		this.uKnot = new MFDouble();
	} catch (e) {
		console.log('Problems setting uKnot '+e);
		console.error('Problems setting uKnot',e);
	}
	this.set_uOrder = function (value) {
		try {
			this.proxy.uOrder = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting uOrder '+e);
			console.error('Problems setting uOrder',e);
		}
	};
	this.uOrder_changed = function () {
		var value = this.uOrder;
		return value;
	};
	try {
		this.uOrder = new SFInt32();
	} catch (e) {
		console.log('Problems setting uOrder '+e);
		console.error('Problems setting uOrder',e);
	}
	this.set_vClosed = function (value) {
		try {
			this.proxy.vClosed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting vClosed '+e);
			console.error('Problems setting vClosed',e);
		}
	};
	this.vClosed_changed = function () {
		var value = this.vClosed;
		return value;
	};
	try {
		this.vClosed = new SFBool();
	} catch (e) {
		console.log('Problems setting vClosed '+e);
		console.error('Problems setting vClosed',e);
	}
	this.set_vDimension = function (value) {
		try {
			this.proxy.vDimension = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting vDimension '+e);
			console.error('Problems setting vDimension',e);
		}
	};
	this.vDimension_changed = function () {
		var value = this.vDimension;
		return value;
	};
	try {
		this.vDimension = new SFInt32();
	} catch (e) {
		console.log('Problems setting vDimension '+e);
		console.error('Problems setting vDimension',e);
	}
	this.set_vKnot = function (value) {
		try {
			this.proxy.vKnot = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting vKnot '+e);
			console.error('Problems setting vKnot',e);
		}
	};
	this.vKnot_changed = function () {
		var value = this.vKnot;
		return value;
	};
	try {
		this.vKnot = new MFDouble();
	} catch (e) {
		console.log('Problems setting vKnot '+e);
		console.error('Problems setting vKnot',e);
	}
	this.set_vOrder = function (value) {
		try {
			this.proxy.vOrder = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting vOrder '+e);
			console.error('Problems setting vOrder',e);
		}
	};
	this.vOrder_changed = function () {
		var value = this.vOrder;
		return value;
	};
	try {
		this.vOrder = new SFInt32();
	} catch (e) {
		console.log('Problems setting vOrder '+e);
		console.error('Problems setting vOrder',e);
	}
	this.set_coord = function (value) {
		try {
			this.proxy.coord = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting coord '+e);
			console.error('Problems setting coord',e);
		}
	};
	this.coord_changed = function () {
		var value = this.coord;
		return value;
	};
	try {
		this.coord = new MFVec3f();
	} catch (e) {
		console.log('Problems setting coord '+e);
		console.error('Problems setting coord',e);
	}
	this.set_coordIndex = function (value) {
		try {
			this.proxy.coordIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting coordIndex '+e);
			console.error('Problems setting coordIndex',e);
		}
	};
	this.coordIndex_changed = function () {
		var value = this.coordIndex;
		return value;
	};
	try {
		this.coordIndex = new MFInt32();
	} catch (e) {
		console.log('Problems setting coordIndex '+e);
		console.error('Problems setting coordIndex',e);
	}
	this.set_controlPoint = function (value) {
		try {
			this.proxy.controlPoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting controlPoint '+e);
			console.error('Problems setting controlPoint',e);
		}
	};
	this.controlPoint_changed = function () {
		var value = this.controlPoint;
		return value;
	};
	try {
		this.controlPoint = new SFNode();
	} catch (e) {
		console.log('Problems setting controlPoint '+e);
		console.error('Problems setting controlPoint',e);
	}
	this.set_controlPoint = function (value) {
		try {
			this.proxy.controlPoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting controlPoint '+e);
			console.error('Problems setting controlPoint',e);
		}
	};
	this.controlPoint_changed = function () {
		var value = this.controlPoint;
		return value;
	};
	try {
		this.controlPoint = new SFNode();
	} catch (e) {
		console.log('Problems setting controlPoint '+e);
		console.error('Problems setting controlPoint',e);
	}
	this.set_texCoord = function (value) {
		try {
			this.proxy.texCoord = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting texCoord '+e);
			console.error('Problems setting texCoord',e);
		}
	};
	this.texCoord_changed = function () {
		var value = this.texCoord;
		return value;
	};
	try {
		this.texCoord = new SFNode();
	} catch (e) {
		console.log('Problems setting texCoord '+e);
		console.error('Problems setting texCoord',e);
	}
	this.set_texCoord = function (value) {
		try {
			this.proxy.texCoord = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting texCoord '+e);
			console.error('Problems setting texCoord',e);
		}
	};
	this.texCoord_changed = function () {
		var value = this.texCoord;
		return value;
	};
	try {
		this.texCoord = new SFNode();
	} catch (e) {
		console.log('Problems setting texCoord '+e);
		console.error('Problems setting texCoord',e);
	}
	this.set_weight = function (value) {
		try {
			this.proxy.weight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting weight '+e);
			console.error('Problems setting weight',e);
		}
	};
	this.weight_changed = function () {
		var value = this.weight;
		return value;
	};
	try {
		this.weight = new MFDouble();
	} catch (e) {
		console.log('Problems setting weight '+e);
		console.error('Problems setting weight',e);
	}
	this.set_weight = function (value) {
		try {
			this.proxy.weight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting weight '+e);
			console.error('Problems setting weight',e);
		}
	};
	this.weight_changed = function () {
		var value = this.weight;
		return value;
	};
	try {
		this.weight = new MFDouble();
	} catch (e) {
		console.log('Problems setting weight '+e);
		console.error('Problems setting weight',e);
	}
	this.set_uTessellation = function (value) {
		try {
			this.proxy.uTessellation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting uTessellation '+e);
			console.error('Problems setting uTessellation',e);
		}
	};
	this.uTessellation_changed = function () {
		var value = this.uTessellation;
		return value;
	};
	try {
		this.uTessellation = new SFInt32();
	} catch (e) {
		console.log('Problems setting uTessellation '+e);
		console.error('Problems setting uTessellation',e);
	}
	this.set_uTessellation = function (value) {
		try {
			this.proxy.uTessellation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting uTessellation '+e);
			console.error('Problems setting uTessellation',e);
		}
	};
	this.uTessellation_changed = function () {
		var value = this.uTessellation;
		return value;
	};
	try {
		this.uTessellation = new SFInt32();
	} catch (e) {
		console.log('Problems setting uTessellation '+e);
		console.error('Problems setting uTessellation',e);
	}
	this.set_vTessellation = function (value) {
		try {
			this.proxy.vTessellation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting vTessellation '+e);
			console.error('Problems setting vTessellation',e);
		}
	};
	this.vTessellation_changed = function () {
		var value = this.vTessellation;
		return value;
	};
	try {
		this.vTessellation = new SFInt32();
	} catch (e) {
		console.log('Problems setting vTessellation '+e);
		console.error('Problems setting vTessellation',e);
	}
	this.set_vTessellation = function (value) {
		try {
			this.proxy.vTessellation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting vTessellation '+e);
			console.error('Problems setting vTessellation',e);
		}
	};
	this.vTessellation_changed = function () {
		var value = this.vTessellation;
		return value;
	};
	try {
		this.vTessellation = new SFInt32();
	} catch (e) {
		console.log('Problems setting vTessellation '+e);
		console.error('Problems setting vTessellation',e);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPositionInterpolatorScript'] = function() {
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
		this.fraction = undefined;
	} catch (e) {
		console.log('Problems setting fraction '+e);
		console.error('Problems setting fraction',e);
	}
	this.set_controlPoint = function (value) {
		try {
			this.proxy.controlPoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting controlPoint '+e);
			console.error('Problems setting controlPoint',e);
		}
	};
	this.controlPoint_changed = function () {
		var value = this.controlPoint;
		return value;
	};
	try {
		this.controlPoint = new SFNode();
	} catch (e) {
		console.log('Problems setting controlPoint '+e);
		console.error('Problems setting controlPoint',e);
	}
	this.set_knot = function (value) {
		try {
			this.proxy.knot = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting knot '+e);
			console.error('Problems setting knot',e);
		}
	};
	this.knot_changed = function () {
		var value = this.knot;
		return value;
	};
	try {
		this.knot = new MFDouble();
	} catch (e) {
		console.log('Problems setting knot '+e);
		console.error('Problems setting knot',e);
	}
	this.set_order = function (value) {
		try {
			this.proxy.order = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting order '+e);
			console.error('Problems setting order',e);
		}
	};
	this.order_changed = function () {
		var value = this.order;
		return value;
	};
	try {
		this.order = new SFInt32();
	} catch (e) {
		console.log('Problems setting order '+e);
		console.error('Problems setting order',e);
	}
	this.set_weight = function (value) {
		try {
			this.proxy.weight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting weight '+e);
			console.error('Problems setting weight',e);
		}
	};
	this.weight_changed = function () {
		var value = this.weight;
		return value;
	};
	try {
		this.weight = new MFDouble();
	} catch (e) {
		console.log('Problems setting weight '+e);
		console.error('Problems setting weight',e);
	}
	this.set_value = function (value) {
		try {
			this.proxy.value = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting value '+e);
			console.error('Problems setting value',e);
		}
	};
	this.value_changed = function () {
		var value = this.value;
		return value;
	};
	try {
		this.value = undefined;
	} catch (e) {
		console.log('Problems setting value '+e);
		console.error('Problems setting value',e);
	}
	this.set_controlPoint = function (value) {
		try {
			this.proxy.controlPoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting controlPoint '+e);
			console.error('Problems setting controlPoint',e);
		}
	};
	this.controlPoint_changed = function () {
		var value = this.controlPoint;
		return value;
	};
	try {
		this.controlPoint = new SFNode();
	} catch (e) {
		console.log('Problems setting controlPoint '+e);
		console.error('Problems setting controlPoint',e);
	}
	this.set_controlPoint = function (value) {
		try {
			this.proxy.controlPoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting controlPoint '+e);
			console.error('Problems setting controlPoint',e);
		}
	};
	this.controlPoint_changed = function () {
		var value = this.controlPoint;
		return value;
	};
	try {
		this.controlPoint = new SFNode();
	} catch (e) {
		console.log('Problems setting controlPoint '+e);
		console.error('Problems setting controlPoint',e);
	}
	this.set_knot = function (value) {
		try {
			this.proxy.knot = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting knot '+e);
			console.error('Problems setting knot',e);
		}
	};
	this.knot_changed = function () {
		var value = this.knot;
		return value;
	};
	try {
		this.knot = new MFDouble();
	} catch (e) {
		console.log('Problems setting knot '+e);
		console.error('Problems setting knot',e);
	}
	this.set_knot = function (value) {
		try {
			this.proxy.knot = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting knot '+e);
			console.error('Problems setting knot',e);
		}
	};
	this.knot_changed = function () {
		var value = this.knot;
		return value;
	};
	try {
		this.knot = new MFDouble();
	} catch (e) {
		console.log('Problems setting knot '+e);
		console.error('Problems setting knot',e);
	}
	this.set_order = function (value) {
		try {
			this.proxy.order = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting order '+e);
			console.error('Problems setting order',e);
		}
	};
	this.order_changed = function () {
		var value = this.order;
		return value;
	};
	try {
		this.order = new SFInt32();
	} catch (e) {
		console.log('Problems setting order '+e);
		console.error('Problems setting order',e);
	}
	this.set_order = function (value) {
		try {
			this.proxy.order = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting order '+e);
			console.error('Problems setting order',e);
		}
	};
	this.order_changed = function () {
		var value = this.order;
		return value;
	};
	try {
		this.order = new SFInt32();
	} catch (e) {
		console.log('Problems setting order '+e);
		console.error('Problems setting order',e);
	}
	this.set_weight = function (value) {
		try {
			this.proxy.weight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting weight '+e);
			console.error('Problems setting weight',e);
		}
	};
	this.weight_changed = function () {
		var value = this.weight;
		return value;
	};
	try {
		this.weight = new MFDouble();
	} catch (e) {
		console.log('Problems setting weight '+e);
		console.error('Problems setting weight',e);
	}
	this.set_weight = function (value) {
		try {
			this.proxy.weight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting weight '+e);
			console.error('Problems setting weight',e);
		}
	};
	this.weight_changed = function () {
		var value = this.weight;
		return value;
	};
	try {
		this.weight = new MFDouble();
	} catch (e) {
		console.log('Problems setting weight '+e);
		console.error('Problems setting weight',e);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPositionInterpolatorScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPositionInterpolatorScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPositionInterpolatorScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPositionInterpolatorScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPositionInterpolatorScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPositionInterpolatorScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPositionInterpolatorScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPositionInterpolatorScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPositionInterpolatorScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPositionInterpolatorScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPositionInterpolatorScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'] = function() {
	this.set_controlPoint = function (value) {
		try {
			this.proxy.controlPoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting controlPoint '+e);
			console.error('Problems setting controlPoint',e);
		}
	};
	this.controlPoint_changed = function () {
		var value = this.controlPoint;
		return value;
	};
	try {
		this.controlPoint = new SFNode();
	} catch (e) {
		console.log('Problems setting controlPoint '+e);
		console.error('Problems setting controlPoint',e);
	}
	this.set_weight = function (value) {
		try {
			this.proxy.weight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting weight '+e);
			console.error('Problems setting weight',e);
		}
	};
	this.weight_changed = function () {
		var value = this.weight;
		return value;
	};
	try {
		this.weight = new MFDouble();
	} catch (e) {
		console.log('Problems setting weight '+e);
		console.error('Problems setting weight',e);
	}
	this.set_uDimension = function (value) {
		try {
			this.proxy.uDimension = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting uDimension '+e);
			console.error('Problems setting uDimension',e);
		}
	};
	this.uDimension_changed = function () {
		var value = this.uDimension;
		return value;
	};
	try {
		this.uDimension = new SFInt32();
	} catch (e) {
		console.log('Problems setting uDimension '+e);
		console.error('Problems setting uDimension',e);
	}
	this.set_uKnot = function (value) {
		try {
			this.proxy.uKnot = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting uKnot '+e);
			console.error('Problems setting uKnot',e);
		}
	};
	this.uKnot_changed = function () {
		var value = this.uKnot;
		return value;
	};
	try {
		this.uKnot = new MFDouble();
	} catch (e) {
		console.log('Problems setting uKnot '+e);
		console.error('Problems setting uKnot',e);
	}
	this.set_uOrder = function (value) {
		try {
			this.proxy.uOrder = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting uOrder '+e);
			console.error('Problems setting uOrder',e);
		}
	};
	this.uOrder_changed = function () {
		var value = this.uOrder;
		return value;
	};
	try {
		this.uOrder = new SFInt32();
	} catch (e) {
		console.log('Problems setting uOrder '+e);
		console.error('Problems setting uOrder',e);
	}
	this.set_vDimension = function (value) {
		try {
			this.proxy.vDimension = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting vDimension '+e);
			console.error('Problems setting vDimension',e);
		}
	};
	this.vDimension_changed = function () {
		var value = this.vDimension;
		return value;
	};
	try {
		this.vDimension = new SFInt32();
	} catch (e) {
		console.log('Problems setting vDimension '+e);
		console.error('Problems setting vDimension',e);
	}
	this.set_vKnot = function (value) {
		try {
			this.proxy.vKnot = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting vKnot '+e);
			console.error('Problems setting vKnot',e);
		}
	};
	this.vKnot_changed = function () {
		var value = this.vKnot;
		return value;
	};
	try {
		this.vKnot = new MFDouble();
	} catch (e) {
		console.log('Problems setting vKnot '+e);
		console.error('Problems setting vKnot',e);
	}
	this.set_vOrder = function (value) {
		try {
			this.proxy.vOrder = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting vOrder '+e);
			console.error('Problems setting vOrder',e);
		}
	};
	this.vOrder_changed = function () {
		var value = this.vOrder;
		return value;
	};
	try {
		this.vOrder = new SFInt32();
	} catch (e) {
		console.log('Problems setting vOrder '+e);
		console.error('Problems setting vOrder',e);
	}
	this.set_coord = function (value) {
		try {
			this.proxy.coord = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting coord '+e);
			console.error('Problems setting coord',e);
		}
	};
	this.coord_changed = function () {
		var value = this.coord;
		return value;
	};
	try {
		this.coord = new MFVec3f();
	} catch (e) {
		console.log('Problems setting coord '+e);
		console.error('Problems setting coord',e);
	}
	this.set_coordIndex = function (value) {
		try {
			this.proxy.coordIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting coordIndex '+e);
			console.error('Problems setting coordIndex',e);
		}
	};
	this.coordIndex_changed = function () {
		var value = this.coordIndex;
		return value;
	};
	try {
		this.coordIndex = new MFInt32();
	} catch (e) {
		console.log('Problems setting coordIndex '+e);
		console.error('Problems setting coordIndex',e);
	}
	this.set_controlPoint = function (value) {
		try {
			this.proxy.controlPoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting controlPoint '+e);
			console.error('Problems setting controlPoint',e);
		}
	};
	this.controlPoint_changed = function () {
		var value = this.controlPoint;
		return value;
	};
	try {
		this.controlPoint = new SFNode();
	} catch (e) {
		console.log('Problems setting controlPoint '+e);
		console.error('Problems setting controlPoint',e);
	}
	this.set_controlPoint = function (value) {
		try {
			this.proxy.controlPoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting controlPoint '+e);
			console.error('Problems setting controlPoint',e);
		}
	};
	this.controlPoint_changed = function () {
		var value = this.controlPoint;
		return value;
	};
	try {
		this.controlPoint = new SFNode();
	} catch (e) {
		console.log('Problems setting controlPoint '+e);
		console.error('Problems setting controlPoint',e);
	}
	this.set_weight = function (value) {
		try {
			this.proxy.weight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting weight '+e);
			console.error('Problems setting weight',e);
		}
	};
	this.weight_changed = function () {
		var value = this.weight;
		return value;
	};
	try {
		this.weight = new MFDouble();
	} catch (e) {
		console.log('Problems setting weight '+e);
		console.error('Problems setting weight',e);
	}
	this.set_weight = function (value) {
		try {
			this.proxy.weight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting weight '+e);
			console.error('Problems setting weight',e);
		}
	};
	this.weight_changed = function () {
		var value = this.weight;
		return value;
	};
	try {
		this.weight = new MFDouble();
	} catch (e) {
		console.log('Problems setting weight '+e);
		console.error('Problems setting weight',e);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'] = function() {
	this.set_crossSectionCurve = function (value) {
		try {
			this.proxy.crossSectionCurve = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting crossSectionCurve '+e);
			console.error('Problems setting crossSectionCurve',e);
		}
	};
	this.crossSectionCurve_changed = function () {
		var value = this.crossSectionCurve;
		return value;
	};
	try {
		this.crossSectionCurve = new SFNode();
	} catch (e) {
		console.log('Problems setting crossSectionCurve '+e);
		console.error('Problems setting crossSectionCurve',e);
	}
	this.set_trajectoryCurve = function (value) {
		try {
			this.proxy.trajectoryCurve = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting trajectoryCurve '+e);
			console.error('Problems setting trajectoryCurve',e);
		}
	};
	this.trajectoryCurve_changed = function () {
		var value = this.trajectoryCurve;
		return value;
	};
	try {
		this.trajectoryCurve = new SFNode();
	} catch (e) {
		console.log('Problems setting trajectoryCurve '+e);
		console.error('Problems setting trajectoryCurve',e);
	}
	this.set_ccw = function (value) {
		try {
			this.proxy.ccw = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ccw '+e);
			console.error('Problems setting ccw',e);
		}
	};
	this.ccw_changed = function () {
		var value = this.ccw;
		return value;
	};
	try {
		this.ccw = new SFBool();
	} catch (e) {
		console.log('Problems setting ccw '+e);
		console.error('Problems setting ccw',e);
	}
	this.set_solid = function (value) {
		try {
			this.proxy.solid = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting solid '+e);
			console.error('Problems setting solid',e);
		}
	};
	this.solid_changed = function () {
		var value = this.solid;
		return value;
	};
	try {
		this.solid = new SFBool();
	} catch (e) {
		console.log('Problems setting solid '+e);
		console.error('Problems setting solid',e);
	}
	this.set_crossSectionCurve = function (value) {
		try {
			this.proxy.crossSectionCurve = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting crossSectionCurve '+e);
			console.error('Problems setting crossSectionCurve',e);
		}
	};
	this.crossSectionCurve_changed = function () {
		var value = this.crossSectionCurve;
		return value;
	};
	try {
		this.crossSectionCurve = new SFNode();
	} catch (e) {
		console.log('Problems setting crossSectionCurve '+e);
		console.error('Problems setting crossSectionCurve',e);
	}
	this.set_crossSectionCurve = function (value) {
		try {
			this.proxy.crossSectionCurve = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting crossSectionCurve '+e);
			console.error('Problems setting crossSectionCurve',e);
		}
	};
	this.crossSectionCurve_changed = function () {
		var value = this.crossSectionCurve;
		return value;
	};
	try {
		this.crossSectionCurve = new SFNode();
	} catch (e) {
		console.log('Problems setting crossSectionCurve '+e);
		console.error('Problems setting crossSectionCurve',e);
	}
	this.set_trajectoryCurve = function (value) {
		try {
			this.proxy.trajectoryCurve = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting trajectoryCurve '+e);
			console.error('Problems setting trajectoryCurve',e);
		}
	};
	this.trajectoryCurve_changed = function () {
		var value = this.trajectoryCurve;
		return value;
	};
	try {
		this.trajectoryCurve = new SFNode();
	} catch (e) {
		console.log('Problems setting trajectoryCurve '+e);
		console.error('Problems setting trajectoryCurve',e);
	}
	this.set_trajectoryCurve = function (value) {
		try {
			this.proxy.trajectoryCurve = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting trajectoryCurve '+e);
			console.error('Problems setting trajectoryCurve',e);
		}
	};
	this.trajectoryCurve_changed = function () {
		var value = this.trajectoryCurve;
		return value;
	};
	try {
		this.trajectoryCurve = new SFNode();
	} catch (e) {
		console.log('Problems setting trajectoryCurve '+e);
		console.error('Problems setting trajectoryCurve',e);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'] = function() {
	this.set_profileCurve = function (value) {
		try {
			this.proxy.profileCurve = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting profileCurve '+e);
			console.error('Problems setting profileCurve',e);
		}
	};
	this.profileCurve_changed = function () {
		var value = this.profileCurve;
		return value;
	};
	try {
		this.profileCurve = new SFNode();
	} catch (e) {
		console.log('Problems setting profileCurve '+e);
		console.error('Problems setting profileCurve',e);
	}
	this.set_trajectoryCurve = function (value) {
		try {
			this.proxy.trajectoryCurve = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting trajectoryCurve '+e);
			console.error('Problems setting trajectoryCurve',e);
		}
	};
	this.trajectoryCurve_changed = function () {
		var value = this.trajectoryCurve;
		return value;
	};
	try {
		this.trajectoryCurve = new SFNode();
	} catch (e) {
		console.log('Problems setting trajectoryCurve '+e);
		console.error('Problems setting trajectoryCurve',e);
	}
	this.set_ccw = function (value) {
		try {
			this.proxy.ccw = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ccw '+e);
			console.error('Problems setting ccw',e);
		}
	};
	this.ccw_changed = function () {
		var value = this.ccw;
		return value;
	};
	try {
		this.ccw = new SFBool();
	} catch (e) {
		console.log('Problems setting ccw '+e);
		console.error('Problems setting ccw',e);
	}
	this.set_solid = function (value) {
		try {
			this.proxy.solid = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting solid '+e);
			console.error('Problems setting solid',e);
		}
	};
	this.solid_changed = function () {
		var value = this.solid;
		return value;
	};
	try {
		this.solid = new SFBool();
	} catch (e) {
		console.log('Problems setting solid '+e);
		console.error('Problems setting solid',e);
	}
	this.set_profileCurve = function (value) {
		try {
			this.proxy.profileCurve = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting profileCurve '+e);
			console.error('Problems setting profileCurve',e);
		}
	};
	this.profileCurve_changed = function () {
		var value = this.profileCurve;
		return value;
	};
	try {
		this.profileCurve = new SFNode();
	} catch (e) {
		console.log('Problems setting profileCurve '+e);
		console.error('Problems setting profileCurve',e);
	}
	this.set_profileCurve = function (value) {
		try {
			this.proxy.profileCurve = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting profileCurve '+e);
			console.error('Problems setting profileCurve',e);
		}
	};
	this.profileCurve_changed = function () {
		var value = this.profileCurve;
		return value;
	};
	try {
		this.profileCurve = new SFNode();
	} catch (e) {
		console.log('Problems setting profileCurve '+e);
		console.error('Problems setting profileCurve',e);
	}
	this.set_trajectoryCurve = function (value) {
		try {
			this.proxy.trajectoryCurve = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting trajectoryCurve '+e);
			console.error('Problems setting trajectoryCurve',e);
		}
	};
	this.trajectoryCurve_changed = function () {
		var value = this.trajectoryCurve;
		return value;
	};
	try {
		this.trajectoryCurve = new SFNode();
	} catch (e) {
		console.log('Problems setting trajectoryCurve '+e);
		console.error('Problems setting trajectoryCurve',e);
	}
	this.set_trajectoryCurve = function (value) {
		try {
			this.proxy.trajectoryCurve = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting trajectoryCurve '+e);
			console.error('Problems setting trajectoryCurve',e);
		}
	};
	this.trajectoryCurve_changed = function () {
		var value = this.trajectoryCurve;
		return value;
	};
	try {
		this.trajectoryCurve = new SFNode();
	} catch (e) {
		console.log('Problems setting trajectoryCurve '+e);
		console.error('Problems setting trajectoryCurve',e);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsTextureCoordinateScript'] = function() {
	this.set_uDimension = function (value) {
		try {
			this.proxy.uDimension = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting uDimension '+e);
			console.error('Problems setting uDimension',e);
		}
	};
	this.uDimension_changed = function () {
		var value = this.uDimension;
		return value;
	};
	try {
		this.uDimension = new SFInt32();
	} catch (e) {
		console.log('Problems setting uDimension '+e);
		console.error('Problems setting uDimension',e);
	}
	this.set_vDimension = function (value) {
		try {
			this.proxy.vDimension = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting vDimension '+e);
			console.error('Problems setting vDimension',e);
		}
	};
	this.vDimension_changed = function () {
		var value = this.vDimension;
		return value;
	};
	try {
		this.vDimension = new SFInt32();
	} catch (e) {
		console.log('Problems setting vDimension '+e);
		console.error('Problems setting vDimension',e);
	}
	this.set_ils = function (value) {
		try {
			this.proxy.ils = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ils '+e);
			console.error('Problems setting ils',e);
		}
	};
	this.ils_changed = function () {
		var value = this.ils;
		return value;
	};
	try {
		this.ils = X3DJSON.nodeUtil("Scene","NurbsTextureCoordinateIls");
	} catch (e) {
		console.log('Problems setting ils '+e);
		console.error('Problems setting ils',e);
	}
	this.set_localCoordIndex = function (value) {
		try {
			this.proxy.localCoordIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting localCoordIndex '+e);
			console.error('Problems setting localCoordIndex',e);
		}
	};
	this.localCoordIndex_changed = function () {
		var value = this.localCoordIndex;
		return value;
	};
	try {
		this.localCoordIndex = new MFInt32();
	} catch (e) {
		console.log('Problems setting localCoordIndex '+e);
		console.error('Problems setting localCoordIndex',e);
	}


ecmascript:
	this.initialize = function () {
        //console.error ('Sorry, your browser does not support NURBS nodes');
        counter = 0;
        number = 0;
        this.proxy.localCoordIndex = new MFInt32();
        this.proxy.localCoordIndex.length = 2*this.proxy.vDimension * this.proxy.uDimension + this.proxy.uDimension + this.proxy.vDimension;

        for(v=0; v<this.proxy.vDimension;v++)
        {
                for(u=0; u<this.proxy.uDimension;u++)
                {
                        this.proxy.localCoordIndex[counter] = number;
                        counter++;
                        number++;
                }
                this.proxy.localCoordIndex[counter] = -1; counter++;
        }

        for(u=0; u<this.proxy.uDimension;u++)
        {
                for(v=0; v<this.proxy.vDimension;v++)
                {
                        this.proxy.localCoordIndex[counter] = v*this.proxy.uDimension + u;
                        counter++;
                        number++;
                }
                this.proxy.localCoordIndex[counter] = -1; counter++;
        }
        X3DJSON.nodeUtil("Scene","NurbsTextureCoordinateIls", "set_coordIndex",  this.proxy.localCoordIndex);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsTextureCoordinateScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsTextureCoordinateScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsTextureCoordinateScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsTextureCoordinateScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsTextureCoordinateScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsTextureCoordinateScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsTextureCoordinateScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsTextureCoordinateScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsTextureCoordinateScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsTextureCoordinateScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsTextureCoordinateScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsTextureSurfaceScript'] = function() {
	this.set_uDimension = function (value) {
		try {
			this.proxy.uDimension = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting uDimension '+e);
			console.error('Problems setting uDimension',e);
		}
	};
	this.uDimension_changed = function () {
		var value = this.uDimension;
		return value;
	};
	try {
		this.uDimension = new SFInt32();
	} catch (e) {
		console.log('Problems setting uDimension '+e);
		console.error('Problems setting uDimension',e);
	}
	this.set_vDimension = function (value) {
		try {
			this.proxy.vDimension = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting vDimension '+e);
			console.error('Problems setting vDimension',e);
		}
	};
	this.vDimension_changed = function () {
		var value = this.vDimension;
		return value;
	};
	try {
		this.vDimension = new SFInt32();
	} catch (e) {
		console.log('Problems setting vDimension '+e);
		console.error('Problems setting vDimension',e);
	}
	this.set_ils = function (value) {
		try {
			this.proxy.ils = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ils '+e);
			console.error('Problems setting ils',e);
		}
	};
	this.ils_changed = function () {
		var value = this.ils;
		return value;
	};
	try {
		this.ils = X3DJSON.nodeUtil("Scene","NurbsTextureSurfaceIls");
	} catch (e) {
		console.log('Problems setting ils '+e);
		console.error('Problems setting ils',e);
	}


ecmascript:
	this.initialize = function () {
    //console.error ('Sorry, your browser does not support NURBS nodes');
    counter = 0;
    number = 0;
    localCoordIndex = new MFInt32();
    localCoordIndexlength = 2*this.proxy.vDimension * this.proxy.uDimension + this.proxy.uDimension + this.proxy.vDimension;

    for(v=0; v<this.proxy.vDimension;v++)
    {
            for(u=0; u<this.proxy.uDimension;u++)
            {
                    localCoordIndex[counter] = number;
                    counter++;
                    number++;
            }
            localCoordIndex[counter] = -1; counter++;
    }
    for(u=0; u<this.proxy.uDimension;u++)
    {
            for(v=0; v<this.proxy.vDimension;v++)
            {
                    localCoordIndex[counter] = v*this.proxy.uDimension + u;
                    counter++;
                    number++;
            }
            localCoordIndex[counter] = -1; counter++;
    }
    X3DJSON.nodeUtil("Scene","NurbsTextureSurfaceIls", "set_coordIndex",  localCoordIndex);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsTextureSurfaceScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsTextureSurfaceScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsTextureSurfaceScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsTextureSurfaceScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsTextureSurfaceScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsTextureSurfaceScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsTextureSurfaceScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsTextureSurfaceScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsTextureSurfaceScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsTextureSurfaceScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsTextureSurfaceScript'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript']['ACTION']['point'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript']['ACTION']['point'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript']['ACTION']['point'].push(function(property, value) {
		if (property === 'point') {
			X3DJSON.nodeUtil("Scene","NurbsCurveCoord","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'].point === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'].point() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'].point, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","NurbsCurveCoord","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'].point === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'].point() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'].point, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript']['ACTION']['pointIndex'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript']['ACTION']['pointIndex'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript']['ACTION']['pointIndex'].push(function(property, value) {
		if (property === 'pointIndex') {
			X3DJSON.nodeUtil("Scene","NurbsCurveLineSet","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'].pointIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'].pointIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'].pointIndex, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","NurbsCurveLineSet","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'].pointIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'].pointIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'].pointIndex, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript']['ACTION']['coord'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript']['ACTION']['coord'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript']['ACTION']['coord'].push(function(property, value) {
		if (property === 'coord') {
			X3DJSON.nodeUtil("Scene","NurbsPatchSurfaceCoordinate","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'].coord === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'].coord() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'].coord, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","NurbsPatchSurfaceCoordinate","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'].coord === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'].coord() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'].coord, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript']['ACTION']['coordIndex'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript']['ACTION']['coordIndex'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript']['ACTION']['coordIndex'].push(function(property, value) {
		if (property === 'coordIndex') {
			X3DJSON.nodeUtil("Scene","NurbsPatchSurfaceFaceSet","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'].coordIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'].coordIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'].coordIndex, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","NurbsPatchSurfaceFaceSet","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'].coordIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'].coordIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'].coordIndex, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript']['ACTION']['coord'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript']['ACTION']['coord'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript']['ACTION']['coord'].push(function(property, value) {
		if (property === 'coord') {
			X3DJSON.nodeUtil("Scene","NurbsSurfaceInterpolatorCoordinate","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'].coord === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'].coord() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'].coord, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","NurbsSurfaceInterpolatorCoordinate","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'].coord === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'].coord() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'].coord, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript']['ACTION']['coordIndex'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript']['ACTION']['coordIndex'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript']['ACTION']['coordIndex'].push(function(property, value) {
		if (property === 'coordIndex') {
			X3DJSON.nodeUtil("Scene","NurbsSurfaceInterpolatorFaceSet","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'].coordIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'].coordIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'].coordIndex, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","NurbsSurfaceInterpolatorFaceSet","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'].coordIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'].coordIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'].coordIndex, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript']['ACTION']['crossSectionCurve'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript']['ACTION']['crossSectionCurve'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript']['ACTION']['crossSectionCurve'].push(function(property, value) {
		if (property === 'crossSectionCurve') {
			X3DJSON.nodeUtil("Scene","NurbsSweptSurfaceFaceSet","coord",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'].crossSectionCurve_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'].crossSectionCurve_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'].crossSectionCurve, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","NurbsSweptSurfaceFaceSet","coord",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'].crossSectionCurve_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'].crossSectionCurve_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'].crossSectionCurve, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript']['ACTION']['coordIndex'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript']['ACTION']['coordIndex'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript']['ACTION']['coordIndex'].push(function(property, value) {
		if (property === 'coordIndex') {
			X3DJSON.nodeUtil("Scene","NurbsSweptSurfaceFaceSet","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'].coordIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'].coordIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'].coordIndex, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","NurbsSweptSurfaceFaceSet","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'].coordIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'].coordIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'].coordIndex, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript']['ACTION']['coord'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript']['ACTION']['coord'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript']['ACTION']['coord'].push(function(property, value) {
		if (property === 'coord') {
			X3DJSON.nodeUtil("Scene","NurbsSwungSurfaceCoordinate","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'].coord === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'].coord() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'].coord, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","NurbsSwungSurfaceCoordinate","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'].coord === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'].coord() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'].coord, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript']['ACTION']['coordIndex'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript']['ACTION']['coordIndex'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript']['ACTION']['coordIndex'].push(function(property, value) {
		if (property === 'coordIndex') {
			X3DJSON.nodeUtil("Scene","NurbsSwungSurfaceFaceSet","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'].coordIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'].coordIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'].coordIndex, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","NurbsSwungSurfaceFaceSet","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'].coordIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'].coordIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'].coordIndex, __eventTime);
			X3DJSON.nodeUtil("Scene","NurbsCurveCoord","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'].point === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'].point() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'].point, __eventTime);
			X3DJSON.nodeUtil("Scene","NurbsCurveLineSet","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'].pointIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'].pointIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsCurveScript'].pointIndex, __eventTime);
			X3DJSON.nodeUtil("Scene","NurbsPatchSurfaceCoordinate","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'].coord === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'].coord() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'].coord, __eventTime);
			X3DJSON.nodeUtil("Scene","NurbsPatchSurfaceFaceSet","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'].coordIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'].coordIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsPatchSurfaceScript'].coordIndex, __eventTime);
			X3DJSON.nodeUtil("Scene","NurbsSurfaceInterpolatorCoordinate","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'].coord === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'].coord() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'].coord, __eventTime);
			X3DJSON.nodeUtil("Scene","NurbsSurfaceInterpolatorFaceSet","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'].coordIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'].coordIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSurfaceInterpolatorScript'].coordIndex, __eventTime);
			X3DJSON.nodeUtil("Scene","NurbsSweptSurfaceFaceSet","coord",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'].crossSectionCurve_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'].crossSectionCurve_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'].crossSectionCurve, __eventTime);
			X3DJSON.nodeUtil("Scene","NurbsSweptSurfaceFaceSet","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'].coordIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'].coordIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSweptSurfaceScript'].coordIndex, __eventTime);
			X3DJSON.nodeUtil("Scene","NurbsSwungSurfaceCoordinate","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'].coord === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'].coord() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'].coord, __eventTime);
			X3DJSON.nodeUtil("Scene","NurbsSwungSurfaceFaceSet","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'].coordIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'].coordIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/NURBS/NurbsPrototypes.json']['NurbsSwungSurfaceScript'].coordIndex, __eventTime);