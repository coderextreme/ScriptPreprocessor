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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerExternalScript'] = function() {
	this.set_spineRadius = function (value) {
		try {
			this.proxy.spineRadius = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting spineRadius '+e);
			console.error('Problems setting spineRadius',e);
		}
	};
	this.spineRadius_changed = function () {
		var value = this.spineRadius;
		return value;
	};
	try {
		this.spineRadius = new SFFloat(2);
	} catch (e) {
		console.log('Problems setting spineRadius '+e);
		console.error('Problems setting spineRadius',e);
	}
	this.set_crossSectionRadius = function (value) {
		try {
			this.proxy.crossSectionRadius = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting crossSectionRadius '+e);
			console.error('Problems setting crossSectionRadius',e);
		}
	};
	this.crossSectionRadius_changed = function () {
		var value = this.crossSectionRadius;
		return value;
	};
	try {
		this.crossSectionRadius = new SFFloat(1);
	} catch (e) {
		console.log('Problems setting crossSectionRadius '+e);
		console.error('Problems setting crossSectionRadius',e);
	}
	this.set_spineResolution = function (value) {
		try {
			this.proxy.spineResolution = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting spineResolution '+e);
			console.error('Problems setting spineResolution',e);
		}
	};
	this.spineResolution_changed = function () {
		var value = this.spineResolution;
		return value;
	};
	try {
		this.spineResolution = new SFInt32(16);
	} catch (e) {
		console.log('Problems setting spineResolution '+e);
		console.error('Problems setting spineResolution',e);
	}
	this.set_crossSectionResolution = function (value) {
		try {
			this.proxy.crossSectionResolution = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting crossSectionResolution '+e);
			console.error('Problems setting crossSectionResolution',e);
		}
	};
	this.crossSectionResolution_changed = function () {
		var value = this.crossSectionResolution;
		return value;
	};
	try {
		this.crossSectionResolution = new SFInt32(16);
	} catch (e) {
		console.log('Problems setting crossSectionResolution '+e);
		console.error('Problems setting crossSectionResolution',e);
	}
	this.set_spineRadius = function (value) {
		try {
			this.proxy.spineRadius = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting spineRadius '+e);
			console.error('Problems setting spineRadius',e);
		}
	};
	this.spineRadius_changed = function () {
		var value = this.spineRadius;
		return value;
	};
	try {
		this.spineRadius = new SFFloat(2);
	} catch (e) {
		console.log('Problems setting spineRadius '+e);
		console.error('Problems setting spineRadius',e);
	}
	this.set_crossSectionRadius = function (value) {
		try {
			this.proxy.crossSectionRadius = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting crossSectionRadius '+e);
			console.error('Problems setting crossSectionRadius',e);
		}
	};
	this.crossSectionRadius_changed = function () {
		var value = this.crossSectionRadius;
		return value;
	};
	try {
		this.crossSectionRadius = new SFFloat(1);
	} catch (e) {
		console.log('Problems setting crossSectionRadius '+e);
		console.error('Problems setting crossSectionRadius',e);
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
		this.spine = undefined;
	} catch (e) {
		console.log('Problems setting spine '+e);
		console.error('Problems setting spine',e);
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
		this.crossSection = undefined;
	} catch (e) {
		console.log('Problems setting crossSection '+e);
		console.error('Problems setting crossSection',e);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerExternalScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerExternalScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerExternalScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerExternalScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerExternalScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerExternalScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerExternalScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerExternalScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerExternalScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerExternalScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerExternalScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'] = function() {
	this.set_spineRadius = function (value) {
		try {
			this.proxy.spineRadius = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting spineRadius '+e);
			console.error('Problems setting spineRadius',e);
		}
	};
	this.spineRadius_changed = function () {
		var value = this.spineRadius;
		return value;
	};
	try {
		this.spineRadius = new SFFloat(2);
	} catch (e) {
		console.log('Problems setting spineRadius '+e);
		console.error('Problems setting spineRadius',e);
	}
	this.set_crossSectionRadius = function (value) {
		try {
			this.proxy.crossSectionRadius = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting crossSectionRadius '+e);
			console.error('Problems setting crossSectionRadius',e);
		}
	};
	this.crossSectionRadius_changed = function () {
		var value = this.crossSectionRadius;
		return value;
	};
	try {
		this.crossSectionRadius = new SFFloat(1);
	} catch (e) {
		console.log('Problems setting crossSectionRadius '+e);
		console.error('Problems setting crossSectionRadius',e);
	}
	this.set_spineResolution = function (value) {
		try {
			this.proxy.spineResolution = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting spineResolution '+e);
			console.error('Problems setting spineResolution',e);
		}
	};
	this.spineResolution_changed = function () {
		var value = this.spineResolution;
		return value;
	};
	try {
		this.spineResolution = new SFInt32(16);
	} catch (e) {
		console.log('Problems setting spineResolution '+e);
		console.error('Problems setting spineResolution',e);
	}
	this.set_crossSectionResolution = function (value) {
		try {
			this.proxy.crossSectionResolution = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting crossSectionResolution '+e);
			console.error('Problems setting crossSectionResolution',e);
		}
	};
	this.crossSectionResolution_changed = function () {
		var value = this.crossSectionResolution;
		return value;
	};
	try {
		this.crossSectionResolution = new SFInt32(16);
	} catch (e) {
		console.log('Problems setting crossSectionResolution '+e);
		console.error('Problems setting crossSectionResolution',e);
	}
	this.set_spineRadius = function (value) {
		try {
			this.proxy.spineRadius = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting spineRadius '+e);
			console.error('Problems setting spineRadius',e);
		}
	};
	this.spineRadius_changed = function () {
		var value = this.spineRadius;
		return value;
	};
	try {
		this.spineRadius = new SFFloat(2);
	} catch (e) {
		console.log('Problems setting spineRadius '+e);
		console.error('Problems setting spineRadius',e);
	}
	this.set_crossSectionRadius = function (value) {
		try {
			this.proxy.crossSectionRadius = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting crossSectionRadius '+e);
			console.error('Problems setting crossSectionRadius',e);
		}
	};
	this.crossSectionRadius_changed = function () {
		var value = this.crossSectionRadius;
		return value;
	};
	try {
		this.crossSectionRadius = new SFFloat(1);
	} catch (e) {
		console.log('Problems setting crossSectionRadius '+e);
		console.error('Problems setting crossSectionRadius',e);
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
		this.spine = undefined;
	} catch (e) {
		console.log('Problems setting spine '+e);
		console.error('Problems setting spine',e);
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
		this.crossSection = undefined;
	} catch (e) {
		console.log('Problems setting crossSection '+e);
		console.error('Problems setting crossSection',e);
	}


ecmascript:

	this.initialize = function ( ) {
    this.generateCrossSection( );
    this.generateSpine( );
}
;

	this.set_crossSectionRadius = function ( csr, ts ) {
    this.proxy.crossSectionRadius = csr;
    this.generateCrossSection( );
//  console.error ('this.proxy.crossSectionRadius = ' + csr);
}
;

	this.set_spineRadius = function ( sr, ts ) {
    this.proxy.spineRadius = sr;
    this.generateSpine( );
//  console.error ('this.proxy.spineRadius = ' + sr);
}
;

	this.generateCrossSection = function ( ) {
    angle = 0.0;
    delta = (2 * 3.141592653) / this.proxy.crossSectionResolution;
    for ( i = 0; i <= this.proxy.crossSectionResolution; i++ ) {
        this.proxy.crossSection_changed[i][0] =  this.proxy.crossSectionRadius * Math.cos( angle );
        this.proxy.crossSection_changed[i][1] = -this.proxy.crossSectionRadius * Math.sin( angle );
        angle += delta;
    }
    // added code to make ends meet
    this.proxy.crossSection_changed[this.proxy.crossSectionResolution + 1][0] = this.proxy.crossSection_changed[0][0];
    this.proxy.crossSection_changed[this.proxy.crossSectionResolution + 1][1] = this.proxy.crossSection_changed[0][1];
}
;

	this.generateSpine = function ( ) {
    angle = 0.0;
    delta = (2 * 3.141592653) / this.proxy.spineResolution;
    for ( i = 0; i <= this.proxy.spineResolution; i++ ) {
        this.proxy.spine_changed[i][0] =  this.proxy.spineRadius * Math.cos( angle );
        this.proxy.spine_changed[i][1] =  0.0;
        this.proxy.spine_changed[i][2] = -this.proxy.spineRadius * Math.sin( angle );
        angle += delta;
    }
    // added code to make ends meet
    this.proxy.spine_changed[this.proxy.spineResolution + 1][0] = this.proxy.spine_changed[0][0];
    this.proxy.spine_changed[this.proxy.spineResolution + 1][1] = 0.0;
    this.proxy.spine_changed[this.proxy.spineResolution + 1][2] = this.proxy.spine_changed[0][2];
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript']['ACTION']['spine'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript']['ACTION']['spine'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript']['ACTION']['spine'].push(function(property, value) {
		if (property === 'spine') {
			X3DJSON.nodeUtil("Scene","Donut","spine",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'].spine_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'].spine_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'].spine, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Donut","spine",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'].spine_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'].spine_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'].spine, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript']['ACTION']['crossSection'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript']['ACTION']['crossSection'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript']['ACTION']['crossSection'].push(function(property, value) {
		if (property === 'crossSection') {
			X3DJSON.nodeUtil("Scene","Donut","crossSection",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'].crossSection_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'].crossSection_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'].crossSection, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Donut","crossSection",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'].crossSection_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'].crossSection_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'].crossSection, __eventTime);
			X3DJSON.nodeUtil("Scene","Donut","spine",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'].spine_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'].spine_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'].spine, __eventTime);
			X3DJSON.nodeUtil("Scene","Donut","crossSection",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'].crossSection_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'].crossSection_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_5ScriptTorusBuilder.json']['DonutMakerInternalScript'].crossSection, __eventTime);