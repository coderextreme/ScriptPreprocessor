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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'] = function() {
	this.set_visibility = function (value) {
		try {
			this.proxy.visibility = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting visibility '+e);
			console.error('Problems setting visibility',e);
		}
	};
	this.visibility_changed = function () {
		var value = this.visibility;
		return value;
	};
	try {
		this.visibility = new SFBool();
	} catch (e) {
		console.log('Problems setting visibility '+e);
		console.error('Problems setting visibility',e);
	}
	this.set_visibility = function (value) {
		try {
			this.proxy.visibility = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting visibility '+e);
			console.error('Problems setting visibility',e);
		}
	};
	this.visibility_changed = function () {
		var value = this.visibility;
		return value;
	};
	try {
		this.visibility = new SFBool();
	} catch (e) {
		console.log('Problems setting visibility '+e);
		console.error('Problems setting visibility',e);
	}
	this.set_visibility = function (value) {
		try {
			this.proxy.visibility = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting visibility '+e);
			console.error('Problems setting visibility',e);
		}
	};
	this.visibility_changed = function () {
		var value = this.visibility;
		return value;
	};
	try {
		this.visibility = new SFBool();
	} catch (e) {
		console.log('Problems setting visibility '+e);
		console.error('Problems setting visibility',e);
	}
	this.set_visibilityChoice = function (value) {
		try {
			this.proxy.visibilityChoice = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting visibilityChoice '+e);
			console.error('Problems setting visibilityChoice',e);
		}
	};
	this.visibilityChoice_changed = function () {
		var value = this.visibilityChoice;
		return value;
	};
	try {
		this.visibilityChoice = new SFInt32();
	} catch (e) {
		console.log('Problems setting visibilityChoice '+e);
		console.error('Problems setting visibilityChoice',e);
	}
	this.set_open = function (value) {
		try {
			this.proxy.open = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting open '+e);
			console.error('Problems setting open',e);
		}
	};
	this.open_changed = function () {
		var value = this.open;
		return value;
	};
	try {
		this.open = new SFBool();
	} catch (e) {
		console.log('Problems setting open '+e);
		console.error('Problems setting open',e);
	}
	this.set_snippet = function (value) {
		try {
			this.proxy.snippet = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting snippet '+e);
			console.error('Problems setting snippet',e);
		}
	};
	this.snippet_changed = function () {
		var value = this.snippet;
		return value;
	};
	try {
		this.snippet = new MFString();
	} catch (e) {
		console.log('Problems setting snippet '+e);
		console.error('Problems setting snippet',e);
	}
	this.set_snippet = function (value) {
		try {
			this.proxy.snippet = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting snippet '+e);
			console.error('Problems setting snippet',e);
		}
	};
	this.snippet_changed = function () {
		var value = this.snippet;
		return value;
	};
	try {
		this.snippet = new MFString();
	} catch (e) {
		console.log('Problems setting snippet '+e);
		console.error('Problems setting snippet',e);
	}
	this.set_snippet = function (value) {
		try {
			this.proxy.snippet = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting snippet '+e);
			console.error('Problems setting snippet',e);
		}
	};
	this.snippet_changed = function () {
		var value = this.snippet;
		return value;
	};
	try {
		this.snippet = new MFString();
	} catch (e) {
		console.log('Problems setting snippet '+e);
		console.error('Problems setting snippet',e);
	}
	this.set_snippetOffset = function (value) {
		try {
			this.proxy.snippetOffset = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting snippetOffset '+e);
			console.error('Problems setting snippetOffset',e);
		}
	};
	this.snippetOffset_changed = function () {
		var value = this.snippetOffset;
		return value;
	};
	try {
		this.snippetOffset = new SFVec3f();
	} catch (e) {
		console.log('Problems setting snippetOffset '+e);
		console.error('Problems setting snippetOffset',e);
	}


ecmascript:

	this.initialize = function ()
{
	console.error ('this.proxy.visibility=' + this.proxy.visibility);
	if (this.proxy.visibility == false) this.proxy.visibilityChoice = -1;

	// TODO:  if (this.proxy.open == false) open_changed = -1;

	this.adjustSnippetOffset ();
}
;

	this.set_visibility = function (value, timestamp)
{
	this.proxy.visibility = value;         // remember change
	this.proxy.visibility_changed = value; // send eventOut
	if (this.proxy.visibility == false) this.proxy.visibilityChoice = -1;
	else                     this.proxy.visibilityChoice =  0;
}
;

	this.set_snippet = function (value, timestamp)
{
	this.proxy.snippet = value;         // remember change
	this.proxy.snippet_changed = value; // send eventOut
	this.adjustSnippetOffset ();
}
;

	this.adjustSnippetOffset = function () // TODO
{
//	this.proxy.snippetOffset = new SFVec3f (0.0, (this.proxy.snippet.length * 0.3), 0.0);
//	console.error ('this.proxy.snippet.length=' + this.proxy.snippet.length + ', this.proxy.snippetOffset=' + this.proxy.snippetOffset);
}
;

	this.set_open = function (value, timestamp) // TODO
{

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['PointScript'] = function() {
	this.set_altitudeMode = function (value) {
		try {
			this.proxy.altitudeMode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting altitudeMode '+e);
			console.error('Problems setting altitudeMode',e);
		}
	};
	this.altitudeMode_changed = function () {
		var value = this.altitudeMode;
		return value;
	};
	try {
		this.altitudeMode = new SFString();
	} catch (e) {
		console.log('Problems setting altitudeMode '+e);
		console.error('Problems setting altitudeMode',e);
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
		this.coordinates = new SFVec3d();
	} catch (e) {
		console.log('Problems setting coordinates '+e);
		console.error('Problems setting coordinates',e);
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
		this.coordinates = new SFVec3d();
	} catch (e) {
		console.log('Problems setting coordinates '+e);
		console.error('Problems setting coordinates',e);
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
		this.coordinates = new SFVec3d();
	} catch (e) {
		console.log('Problems setting coordinates '+e);
		console.error('Problems setting coordinates',e);
	}
	this.set_extrude = function (value) {
		try {
			this.proxy.extrude = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting extrude '+e);
			console.error('Problems setting extrude',e);
		}
	};
	this.extrude_changed = function () {
		var value = this.extrude;
		return value;
	};
	try {
		this.extrude = new SFBool();
	} catch (e) {
		console.log('Problems setting extrude '+e);
		console.error('Problems setting extrude',e);
	}
	this.set_tessellate = function (value) {
		try {
			this.proxy.tessellate = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting tessellate '+e);
			console.error('Problems setting tessellate',e);
		}
	};
	this.tessellate_changed = function () {
		var value = this.tessellate;
		return value;
	};
	try {
		this.tessellate = new SFBool();
	} catch (e) {
		console.log('Problems setting tessellate '+e);
		console.error('Problems setting tessellate',e);
	}


ecmascript:

	this.initialize = function ()
{
	if  (this.proxy.altitudeMode == '') this.proxy.altitudeMode = 'clampToGround';
	if ((this.proxy.altitudeMode != 'clampToGround') &&
	    (this.proxy.altitudeMode != 'relativeToGround') &&
	    (this.proxy.altitudeMode != 'absolute'))
	{
		warningString = '[Point';
		if (id != '') warningString += ' ' + id;
		warningString += '] illegal value ';
		warningString += 'this.proxy.altitudeMode=' + this.proxy.altitudeMode;
		console.error (warningString);
	}
}
;

	this.set_coordinates = function (value)
{
	this.proxy.coordinates = value;
	this.proxy.coordinates_changed = value;
}

// TODO: how t;

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['PointScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['PointScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['PointScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['PointScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['PointScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['PointScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['PointScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['PointScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['PointScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['PointScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['PointScript'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript']['ACTION']['visibilityChoice'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript']['ACTION']['visibilityChoice'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript']['ACTION']['visibilityChoice'].push(function(property, value) {
		if (property === 'visibilityChoice') {
			X3DJSON.nodeUtil("Scene","SwitchVisible","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'].visibilityChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'].visibilityChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'].visibilityChoice, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SwitchVisible","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'].visibilityChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'].visibilityChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'].visibilityChoice, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript']['ACTION']['snippetOffset'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript']['ACTION']['snippetOffset'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript']['ACTION']['snippetOffset'].push(function(property, value) {
		if (property === 'snippetOffset') {
			X3DJSON.nodeUtil("Scene","SnippetTranslation","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'].snippetOffset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'].snippetOffset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'].snippetOffset, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SnippetTranslation","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'].snippetOffset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'].snippetOffset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'].snippetOffset, __eventTime);
			X3DJSON.nodeUtil("Scene","SwitchVisible","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'].visibilityChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'].visibilityChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'].visibilityChoice, __eventTime);
			X3DJSON.nodeUtil("Scene","SnippetTranslation","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'].snippetOffset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'].snippetOffset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Geospatial/KmlPrototypes.json']['BehaviorScript'].snippetOffset, __eventTime);