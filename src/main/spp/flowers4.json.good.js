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
if (typeof X3DJSON['SceneC:/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'] = function() {
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
	this.set_coordinates = function (value) {
		try {
			this.proxy.coordinates = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting coordinates '+e);
			console.error('Problems setting coordinates',e);
		}
	};
	this.coordinates_changed = function () {
		var value = this.coordinates;
		return value;
	};
	try {
		this.coordinates = new MFVec3f();
	} catch (e) {
		console.log('Problems setting coordinates '+e);
		console.error('Problems setting coordinates',e);
	}
	this.set_coordIndexes = function (value) {
		try {
			this.proxy.coordIndexes = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting coordIndexes '+e);
			console.error('Problems setting coordIndexes',e);
		}
	};
	this.coordIndexes_changed = function () {
		var value = this.coordIndexes;
		return value;
	};
	try {
		this.coordIndexes = new MFInt32();
	} catch (e) {
		console.log('Problems setting coordIndexes '+e);
		console.error('Problems setting coordIndexes',e);
	}
	this.set_e = function (value) {
		try {
			this.proxy.e = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting e '+e);
			console.error('Problems setting e',e);
		}
	};
	this.e_changed = function () {
		var value = this.e;
		return value;
	};
	try {
		this.e = new SFFloat(5);
	} catch (e) {
		console.log('Problems setting e '+e);
		console.error('Problems setting e',e);
	}
	this.set_f = function (value) {
		try {
			this.proxy.f = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting f '+e);
			console.error('Problems setting f',e);
		}
	};
	this.f_changed = function () {
		var value = this.f;
		return value;
	};
	try {
		this.f = new SFFloat(5);
	} catch (e) {
		console.log('Problems setting f '+e);
		console.error('Problems setting f',e);
	}
	this.set_g = function (value) {
		try {
			this.proxy.g = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting g '+e);
			console.error('Problems setting g',e);
		}
	};
	this.g_changed = function () {
		var value = this.g;
		return value;
	};
	try {
		this.g = new SFFloat(5);
	} catch (e) {
		console.log('Problems setting g '+e);
		console.error('Problems setting g',e);
	}
	this.set_h = function (value) {
		try {
			this.proxy.h = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting h '+e);
			console.error('Problems setting h',e);
		}
	};
	this.h_changed = function () {
		var value = this.h;
		return value;
	};
	try {
		this.h = new SFFloat(5);
	} catch (e) {
		console.log('Problems setting h '+e);
		console.error('Problems setting h',e);
	}

ecmascript:
	this.initialize = function () {
     var resolution = 100;
     this.updateCoordinates(resolution);
     var cis = [];
     for (var i = 0; i < resolution-1; i++) {
     	for (var j = 0; j < resolution-1; j++) {
	     cis.push(i*resolution+j);
	     cis.push(i*resolution+j+1);
	     cis.push((i+1)*resolution+j+1);
	     cis.push((i+1)*resolution+j);
	     cis.push(-1);
	}
    }
    this.proxy.coordIndexes = new MFInt32(...cis);
}
;

	this.updateCoordinates = function (resolution) {
     var theta = 0.0;
     var phi = 0.0;
     var delta = (2 * 3.141592653) / (resolution-1);
     var crds = [];
     for (var i = 0; i < resolution; i++) {
     	for (var j = 0; j < resolution; j++) {
		var rho = this.proxy.e + this.proxy.f * Math.cos(this.proxy.g * theta) * Math.cos(this.proxy.h * phi);
		crds.push(new SFVec3f(
			rho * Math.cos(phi) * Math.cos(theta),
			rho * Math.cos(phi) * Math.sin(theta),
			rho * Math.sin(phi)
		));
		theta += delta;
	}
	phi += delta;
     }
     this.proxy.coordinates = new MFVec3f(...crds);
}
;

	this.set_fraction = function (fraction, eventTime) {
	var choice = Math.floor(Math.random() * 4);
	switch (choice) {
	case 0:
		this.proxy.e += Math.floor(Math.random() * 2) * 2 - 1;
		break;
	case 1:
		this.proxy.f += Math.floor(Math.random() * 2) * 2 - 1;
		break;
	case 2:
		this.proxy.g += Math.floor(Math.random() * 2) * 2 - 1;
		break;
	case 3:
		this.proxy.h += Math.floor(Math.random() * 2) * 2 - 1;
		break;
	}
	if (this.proxy.e < 1) {
		this.proxy.e = 10;
	}
	if (this.proxy.f < 1) {
		this.proxy.f = 10;
	}
	if (this.proxy.g < 1) {
		this.proxy.g = 4;
	}
	if (this.proxy.h < 1) {
		this.proxy.h = 4;
	}
	var resolution = 100;
	this.updateCoordinates(resolution);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript']['ACTION']['coordIndexes'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript']['ACTION']['coordIndexes'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript']['ACTION']['coordIndexes'].push(function(property, value) {
		if (property === 'coordIndexes') {
			X3DJSON.nodeUtil("Scene","Orbit","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'].coordIndexes === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'].coordIndexes() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'].coordIndexes, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Orbit","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'].coordIndexes === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'].coordIndexes() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'].coordIndexes, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript']['ACTION']['coordinates'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript']['ACTION']['coordinates'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript']['ACTION']['coordinates'].push(function(property, value) {
		if (property === 'coordinates') {
			X3DJSON.nodeUtil("Scene","OrbitCoordinates","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'].coordinates === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'].coordinates() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'].coordinates, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","OrbitCoordinates","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'].coordinates === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'].coordinates() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'].coordinates, __eventTime);
    if (X3DJSON.nodeUtil("Scene","Clock")) {
X3DJSON.nodeUtil("Scene","Clock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'].set_fraction(X3DJSON.nodeUtil("Scene","Clock","fraction"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'].set_fraction(X3DJSON.nodeUtil("Scene","Clock","fraction"), __eventTime);
			X3DJSON.nodeUtil("Scene","Orbit","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'].coordIndexes === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'].coordIndexes() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'].coordIndexes, __eventTime);
			X3DJSON.nodeUtil("Scene","OrbitCoordinates","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'].coordinates === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'].coordinates() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'].coordinates, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/ScriptPreprocessor/src/main/data/flowers4.json']['OrbitScript'].set_fraction(X3DJSON.nodeUtil("Scene","Clock","fraction"), __eventTime);