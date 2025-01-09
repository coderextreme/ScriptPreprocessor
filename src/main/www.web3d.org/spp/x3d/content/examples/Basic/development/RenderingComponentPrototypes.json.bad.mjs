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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['ConvertColorRGBAtoRGB'] = function() {
	this.set_colorRGBAnode = function (value) {
		try {
			this.proxy.colorRGBAnode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting colorRGBAnode '+e);
			console.error('Problems setting colorRGBAnode',e);
		}
	};
	this.colorRGBAnode_changed = function () {
		var value = this.colorRGBAnode;
		return value;
	};
	try {
		this.colorRGBAnode = X3DJSON.nodeUtil("Scene","ColorRGBAholder");
	} catch (e) {
		console.log('Problems setting colorRGBAnode '+e);
		console.error('Problems setting colorRGBAnode',e);
	}
	this.set_colorRGBnode = function (value) {
		try {
			this.proxy.colorRGBnode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting colorRGBnode '+e);
			console.error('Problems setting colorRGBnode',e);
		}
	};
	this.colorRGBnode_changed = function () {
		var value = this.colorRGBnode;
		return value;
	};
	try {
		this.colorRGBnode = X3DJSON.nodeUtil("Scene","ColorRGB");
	} catch (e) {
		console.log('Problems setting colorRGBnode '+e);
		console.error('Problems setting colorRGBnode',e);
	}


ecmascript:

	this.initialize = function () 
{
//	console.error ('X3DJSON.nodeUtil("Scene","ColorRGBAholder", "keyValue").length=' + X3DJSON.nodeUtil("Scene","ColorRGBAholder", "keyValue").length);
	for (i=0; i<=X3DJSON.nodeUtil("Scene","ColorRGBAholder", "keyValue").length-1; i++)
	{
		// type conversion of each array element
		// specifically, X3DJSON.nodeUtil("Scene","ColorRGBAholder", "keyValue")[i] is an SFRotation
		// and individual element values are then extracted from that
		nextColor = new SFColor (
			X3DJSON.nodeUtil("Scene","ColorRGBAholder", "keyValue")[i].x,
			X3DJSON.nodeUtil("Scene","ColorRGBAholder", "keyValue")[i].y,
			X3DJSON.nodeUtil("Scene","ColorRGBAholder", "keyValue")[i].z);
		// note X3DJSON.nodeUtil("Scene","ColorRGBAholder", "keyValue")[i].angle holds the alpha value; ignored 
//		console.error ('color[' + i + ']=' + nextColor);
		X3DJSON.nodeUtil("Scene","ColorRGB", "color")[i] = nextColor;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['ConvertColorRGBAtoRGB'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['ConvertColorRGBAtoRGB']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['ConvertColorRGBAtoRGB'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['ConvertColorRGBAtoRGB'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['ConvertColorRGBAtoRGB']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['ConvertColorRGBAtoRGB']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['ConvertColorRGBAtoRGB'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['ConvertColorRGBAtoRGB']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['ConvertColorRGBAtoRGB']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['ConvertColorRGBAtoRGB'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['ConvertColorRGBAtoRGB'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleFanSetToIndexedFaceSet'] = function() {
	this.set_index = function (value) {
		try {
			this.proxy.index = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting index '+e);
			console.error('Problems setting index',e);
		}
	};
	this.index_changed = function () {
		var value = this.index;
		return value;
	};
	try {
		this.index = new MFInt32();
	} catch (e) {
		console.log('Problems setting index '+e);
		console.error('Problems setting index',e);
	}
	this.set_index = function (value) {
		try {
			this.proxy.index = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting index '+e);
			console.error('Problems setting index',e);
		}
	};
	this.index_changed = function () {
		var value = this.index;
		return value;
	};
	try {
		this.index = new MFInt32();
	} catch (e) {
		console.log('Problems setting index '+e);
		console.error('Problems setting index',e);
	}
	this.set_renderedITFS = function (value) {
		try {
			this.proxy.renderedITFS = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting renderedITFS '+e);
			console.error('Problems setting renderedITFS',e);
		}
	};
	this.renderedITFS_changed = function () {
		var value = this.renderedITFS;
		return value;
	};
	try {
		this.renderedITFS = X3DJSON.nodeUtil("Scene","RenderedITFS");
	} catch (e) {
		console.log('Problems setting renderedITFS '+e);
		console.error('Problems setting renderedITFS',e);
	}
	this.set_nodesHolder = function (value) {
		try {
			this.proxy.nodesHolder = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting nodesHolder '+e);
			console.error('Problems setting nodesHolder',e);
		}
	};
	this.nodesHolder_changed = function () {
		var value = this.nodesHolder;
		return value;
	};
	try {
		this.nodesHolder = X3DJSON.nodeUtil("Scene","NodesHolderITFS");
	} catch (e) {
		console.log('Problems setting nodesHolder '+e);
		console.error('Problems setting nodesHolder',e);
	}
	this.set_localTraceEnabled = function (value) {
		try {
			this.proxy.localTraceEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting localTraceEnabled '+e);
			console.error('Problems setting localTraceEnabled',e);
		}
	};
	this.localTraceEnabled_changed = function () {
		var value = this.localTraceEnabled;
		return value;
	};
	try {
		this.localTraceEnabled = new SFBool(true);
	} catch (e) {
		console.log('Problems setting localTraceEnabled '+e);
		console.error('Problems setting localTraceEnabled',e);
	}
	this.set_coordIndexNew = function (value) {
		try {
			this.proxy.coordIndexNew = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting coordIndexNew '+e);
			console.error('Problems setting coordIndexNew',e);
		}
	};
	this.coordIndexNew_changed = function () {
		var value = this.coordIndexNew;
		return value;
	};
	try {
		this.coordIndexNew = new MFInt32();
	} catch (e) {
		console.log('Problems setting coordIndexNew '+e);
		console.error('Problems setting coordIndexNew',e);
	}


ecmascript:

	this.initialize = function ()
{
	// this.proxy.index is an array of triangle indices that form a fan shape
	// around the first vertex declared in each fan. The ordering of
	// the vertices is ccw (counter-clockwise).

	// ensure terminated by -1
	if (this.proxy.index[this.proxy.index.length-1] != -1) this.proxy.index[this.proxy.index.length] = -1;

	// ensure legal this.proxy.index values
	for (i=0; i <= this.proxy.index.length-1; i++)
	{
	  if (this.proxy.index[i] < -1)
	  {
		this.alwaysPrint ('error, this.proxy.index[' + i + ']=' + this.proxy.index[i] +
' is illegal value, treated as -1');
		this.proxy.index[i] = -1;
	  }
	}
	this.tracePrint ('this.proxy.index.length=' + this.proxy.index.length);
	this.tracePrint ('this.proxy.index=' + this.proxy.index);

	if (this.proxy.index.length < 4) 
	{
		this.alwaysPrint ('warning, this.proxy.index.length=' + this.proxy.index.length + 
' insufficient to construct a triangle, ITFS ignored');
		return;
	}
	j = 0; // this.proxy.coordIndexNew counter
	this.proxy.coordIndexNew = new MFInt32 ();

	// i walks through this.proxy.index array,
	// goal is to this.initialize this.proxy.coordIndexNew list to match triangles
	for (i=2; i <= this.proxy.index.length-1; i++)
	{
		if ((this.proxy.index[i] == this.proxy.index[i-1]) || (this.proxy.index[i] == this.proxy.index[i-2]) || (this.proxy.index[i-1] == this.proxy.index[i-2]))
		{
			this.alwaysPrint ('this.proxy.index=' + this.proxy.index);
			this.alwaysPrint ('error, pair of equal indices in triangle');
			return;
		}
	  if (this.proxy.index[i] >= 0) 
	  {
		// add another triangle from latest 3 points of fan set to IFS
		// swap order to ensure normal is ccw, i.e. in correct halfplane direction
		this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = 0;
		this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = this.proxy.index[i];
		this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = this.proxy.index[i-1];
		this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = -1; // terminate
	  }
	  else if (this.proxy.index[i] == -1) // finish current triangle, fan
	  {
		// ensure done, or sufficient points remain to build another triangle
		if (	(i!=this.proxy.index.length-1) && (this.proxy.index.length - i < 2))
		{
			this.alwaysPrint ('this.proxy.index=' + this.proxy.index);
			this.alwaysPrint ('error, insufficient this.proxy.index values after' +
	'this.proxy.index[' + i + ']=-1');
			return;
		}
		// ensure done, or enough legal this.proxy.index values remain to build another triangle
		if (	(i!=this.proxy.index.length-1) &&
			((this.proxy.index[i+1] == -1) || (this.proxy.index[i+2] == -1) || (this.proxy.index[i+3] == -1)))
		{
			this.alwaysPrint ('this.proxy.index=' + this.proxy.index);
			this.alwaysPrint ('error, insufficient non-negative-one this.proxy.index values after' +
	'this.proxy.index[' + i + ']=-1');
			return;
		}
		this.tracePrint ('encountered -1 in this.proxy.index array');
		// skip ahead to build next fan set, no effect if done
		if (i!=this.proxy.index.length-1) i = i + 2; 
	  }
	  // incremental trace of array being built
	  this.tracePrint ('this.proxy.coordIndexNew=' + this.proxy.coordIndexNew);
	}
	X3DJSON.nodeUtil("Scene","RenderedITFS", "set_coordIndex",  this.proxy.coordIndexNew);
	this.tracePrint ('X3DJSON.nodeUtil("Scene","RenderedITFS", "coordIndex", ' + X3DJSON.nodeUtil("Scene","RenderedITFS", "coordIndex")));
	// match colorIndex if any Color node exists
	if (X3DJSON.nodeUtil("Scene","NodesHolderITFS", "color"))
	{
	  if (X3DJSON.nodeUtil("Scene","NodesHolderITFS", "color").color.length > 0)
	  {
		X3DJSON.nodeUtil("Scene","RenderedITFS", "set_colorIndex",  this.proxy.coordIndexNew);
		this.tracePrint ('set_colorIndex=' + this.proxy.coordIndexNew);
	  }
	}
};

	this.set_index = function (value, timestamp)
{
	this.proxy.index = value;
	this.initialize ();
};

	this.tracePrint = function (outputString)
{
    if (this.proxy.localTraceEnabled)
	console.error ('[IndexedTriangleFanSet]' + outputString);
};

	this.alwaysPrint = function (outputString)
{
	console.error ('[IndexedTriangleFanSet]' + outputString);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleFanSetToIndexedFaceSet'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleFanSetToIndexedFaceSet']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleFanSetToIndexedFaceSet'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleFanSetToIndexedFaceSet'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleFanSetToIndexedFaceSet']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleFanSetToIndexedFaceSet']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleFanSetToIndexedFaceSet'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleFanSetToIndexedFaceSet']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleFanSetToIndexedFaceSet']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleFanSetToIndexedFaceSet'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleFanSetToIndexedFaceSet'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleSetToIndexedFaceSet'] = function() {
	this.set_index = function (value) {
		try {
			this.proxy.index = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting index '+e);
			console.error('Problems setting index',e);
		}
	};
	this.index_changed = function () {
		var value = this.index;
		return value;
	};
	try {
		this.index = new MFInt32();
	} catch (e) {
		console.log('Problems setting index '+e);
		console.error('Problems setting index',e);
	}
	this.set_index = function (value) {
		try {
			this.proxy.index = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting index '+e);
			console.error('Problems setting index',e);
		}
	};
	this.index_changed = function () {
		var value = this.index;
		return value;
	};
	try {
		this.index = new MFInt32();
	} catch (e) {
		console.log('Problems setting index '+e);
		console.error('Problems setting index',e);
	}
	this.set_renderedITS = function (value) {
		try {
			this.proxy.renderedITS = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting renderedITS '+e);
			console.error('Problems setting renderedITS',e);
		}
	};
	this.renderedITS_changed = function () {
		var value = this.renderedITS;
		return value;
	};
	try {
		this.renderedITS = X3DJSON.nodeUtil("Scene","RenderedITS");
	} catch (e) {
		console.log('Problems setting renderedITS '+e);
		console.error('Problems setting renderedITS',e);
	}
	this.set_nodesHolder = function (value) {
		try {
			this.proxy.nodesHolder = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting nodesHolder '+e);
			console.error('Problems setting nodesHolder',e);
		}
	};
	this.nodesHolder_changed = function () {
		var value = this.nodesHolder;
		return value;
	};
	try {
		this.nodesHolder = X3DJSON.nodeUtil("Scene","NodesHolderITS");
	} catch (e) {
		console.log('Problems setting nodesHolder '+e);
		console.error('Problems setting nodesHolder',e);
	}
	this.set_localTraceEnabled = function (value) {
		try {
			this.proxy.localTraceEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting localTraceEnabled '+e);
			console.error('Problems setting localTraceEnabled',e);
		}
	};
	this.localTraceEnabled_changed = function () {
		var value = this.localTraceEnabled;
		return value;
	};
	try {
		this.localTraceEnabled = new SFBool(true);
	} catch (e) {
		console.log('Problems setting localTraceEnabled '+e);
		console.error('Problems setting localTraceEnabled',e);
	}
	this.set_coordIndexNew = function (value) {
		try {
			this.proxy.coordIndexNew = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting coordIndexNew '+e);
			console.error('Problems setting coordIndexNew',e);
		}
	};
	this.coordIndexNew_changed = function () {
		var value = this.coordIndexNew;
		return value;
	};
	try {
		this.coordIndexNew = new MFInt32();
	} catch (e) {
		console.log('Problems setting coordIndexNew '+e);
		console.error('Problems setting coordIndexNew',e);
	}


ecmascript:

	this.initialize = function ()
{
	// this.proxy.index is an array of triangle indices. The ordering of
	// the vertices is ccw (counter-clockwise).

	// ensure legal this.proxy.index values
	for (ii=0; ii <= this.proxy.index.length-1; ii++)
	{
	  if (this.proxy.index[ii] < -1)
	  {
		this.alwaysPrint ('error, this.proxy.index[' + ii + ']=' + this.proxy.index[ii] +
' is illegal value');
		return;
	  }
	}
	this.tracePrint ('this.proxy.index.length=' + this.proxy.index.length);
	this.tracePrint ('this.proxy.index=' + this.proxy.index);

	if (this.proxy.index.length < 3) 
	{
		this.alwaysPrint ('warning, this.proxy.index.length=' + this.proxy.index.length + 
' insufficient to construct a triangle, ITS ignored');
		return;
	}

	this.proxy.coordIndexNew = new MFInt32 ();

	// ii walks through this.proxy.index array,
	// goal is to this.initialize this.proxy.coordIndexNew list to match triangles
	for (ii=0; ii <= this.proxy.index.length-1; ii+=3)
	{
		if ((this.proxy.index[ii] == this.proxy.index[ii+1]) || (this.proxy.index[ii] == this.proxy.index[ii+2]) || (this.proxy.index[ii+1] == this.proxy.index[ii+2]))
		{
			this.alwaysPrint ('this.proxy.index=' + this.proxy.index);
			this.alwaysPrint ('error, pair of equal indices in triangle');
			return;
		}
	  
		if (this.proxy.index[ii] >= 0) 
		{
			// add another triangle from latest 3 points of fan set to ITS
			// order is ccw, i.e. in correct halfplane direction
			this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = this.proxy.index[ii];
			this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = this.proxy.index[ii+1];
			this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = this.proxy.index[ii+2];
			this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = -1;
		}

		if (this.proxy.index.length % 3 != 0) {
			this.alwaysPrint ('error, this.proxy.index field does not contain a multiple' +
		'of three coordinate values.');
			this.alwaysPrint ('The remaining vertices shall be ignored');
			return;
		}


		// ensure done, or sufficient points remain to build another triangle
//		if (	(i!=this.proxy.index.length-1) && (this.proxy.index.length - i < 2))
//		{
//			this.alwaysPrint ('this.proxy.index=' + this.proxy.index);
//			this.alwaysPrint ('error, insufficient this.proxy.index values after' +
//	'this.proxy.index[' + i + ']=-1');
//			return;
//		}
		// ensure done, or enough legal this.proxy.index values remain to build another triangle
//		if (	(i!=this.proxy.index.length-1) &&
//			((this.proxy.index[i+1] == -1) || (this.proxy.index[i+2] == -1) || (this.proxy.index[i+3] == -1)))
//		{
//			this.alwaysPrint ('this.proxy.index=' + this.proxy.index);
//			this.alwaysPrint ('error, insufficient non-negative-one this.proxy.index values after' +
//	'this.proxy.index[' + i + ']=-1');
//			return;
//		}
	  // incremental trace of array being built
	  this.tracePrint ('this.proxy.coordIndexNew=' + this.proxy.coordIndexNew);
	}
	X3DJSON.nodeUtil("Scene","RenderedITS", "coordIndex",  this.proxy.coordIndexNew);
	this.tracePrint ('X3DJSON.nodeUtil("Scene","RenderedITS", "coordIndex", ' + X3DJSON.nodeUtil("Scene","RenderedITS", "coordIndex")));

	// match colorIndex if any Color node exists
	if (X3DJSON.nodeUtil("Scene","NodesHolderITS", "color"))
	{
	  if (X3DJSON.nodeUtil("Scene","NodesHolderITS", "color").color.length > 0)
	  {
		X3DJSON.nodeUtil("Scene","RenderedITS", "set_colorIndex",  this.proxy.coordIndexNew);
		this.tracePrint ('set_colorIndex=' + this.proxy.coordIndexNew);
	  }
	}
};

	this.set_index = function (value, timestamp)
{
	this.proxy.index = value;
	this.initialize ();
};

	this.tracePrint = function (outputString)
{
    if (this.proxy.localTraceEnabled)
	  console.error ('[IndexedTriangleSet]' + outputString);
};

	this.alwaysPrint = function (outputString)
{
	console.error ('[IndexedTriangleSet]' + outputString);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleSetToIndexedFaceSet'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleSetToIndexedFaceSet']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleSetToIndexedFaceSet'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleSetToIndexedFaceSet'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleSetToIndexedFaceSet']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleSetToIndexedFaceSet']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleSetToIndexedFaceSet'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleSetToIndexedFaceSet']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleSetToIndexedFaceSet']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleSetToIndexedFaceSet'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleSetToIndexedFaceSet'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleStripSetToIndexedFaceSet'] = function() {
	this.set_index = function (value) {
		try {
			this.proxy.index = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting index '+e);
			console.error('Problems setting index',e);
		}
	};
	this.index_changed = function () {
		var value = this.index;
		return value;
	};
	try {
		this.index = new MFInt32();
	} catch (e) {
		console.log('Problems setting index '+e);
		console.error('Problems setting index',e);
	}
	this.set_index = function (value) {
		try {
			this.proxy.index = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting index '+e);
			console.error('Problems setting index',e);
		}
	};
	this.index_changed = function () {
		var value = this.index;
		return value;
	};
	try {
		this.index = new MFInt32();
	} catch (e) {
		console.log('Problems setting index '+e);
		console.error('Problems setting index',e);
	}
	this.set_renderedTSS = function (value) {
		try {
			this.proxy.renderedTSS = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting renderedTSS '+e);
			console.error('Problems setting renderedTSS',e);
		}
	};
	this.renderedTSS_changed = function () {
		var value = this.renderedTSS;
		return value;
	};
	try {
		this.renderedTSS = X3DJSON.nodeUtil("Scene","RenderedTSS");
	} catch (e) {
		console.log('Problems setting renderedTSS '+e);
		console.error('Problems setting renderedTSS',e);
	}
	this.set_nodesHolder = function (value) {
		try {
			this.proxy.nodesHolder = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting nodesHolder '+e);
			console.error('Problems setting nodesHolder',e);
		}
	};
	this.nodesHolder_changed = function () {
		var value = this.nodesHolder;
		return value;
	};
	try {
		this.nodesHolder = X3DJSON.nodeUtil("Scene","NodesHolderTSS");
	} catch (e) {
		console.log('Problems setting nodesHolder '+e);
		console.error('Problems setting nodesHolder',e);
	}
	this.set_localTraceEnabled = function (value) {
		try {
			this.proxy.localTraceEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting localTraceEnabled '+e);
			console.error('Problems setting localTraceEnabled',e);
		}
	};
	this.localTraceEnabled_changed = function () {
		var value = this.localTraceEnabled;
		return value;
	};
	try {
		this.localTraceEnabled = new SFBool(true);
	} catch (e) {
		console.log('Problems setting localTraceEnabled '+e);
		console.error('Problems setting localTraceEnabled',e);
	}
	this.set_coordIndexNew = function (value) {
		try {
			this.proxy.coordIndexNew = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting coordIndexNew '+e);
			console.error('Problems setting coordIndexNew',e);
		}
	};
	this.coordIndexNew_changed = function () {
		var value = this.coordIndexNew;
		return value;
	};
	try {
		this.coordIndexNew = new MFInt32();
	} catch (e) {
		console.log('Problems setting coordIndexNew '+e);
		console.error('Problems setting coordIndexNew',e);
	}


ecmascript:

	this.initialize = function ()
{
	// this.proxy.index is an array of triangle indices. The ordering of
	// the vertices is ccw (counter-clockwise).

	// ensure legal this.proxy.index values
	for (ii=0; ii <= this.proxy.index.length-1; ii++)
	{
	  if (this.proxy.index[ii] < -1)
	  {
		this.alwaysPrint ('error, this.proxy.index[' + ii + ']=' + this.proxy.index[ii] +
' is illegal value');
		return;
	  }
	}
	this.tracePrint ('this.proxy.index.length=' + this.proxy.index.length);
	this.tracePrint ('this.proxy.index=' + this.proxy.index);

	if (this.proxy.index.length < 3) 
	{
		this.alwaysPrint ('warning, this.proxy.index.length=' + this.proxy.index.length + 
' insufficient to construct a triangle, ITS ignored');
		return;
	}

	this.proxy.coordIndexNew = new MFInt32 ();

	// ii walks through this.proxy.index array,
	// goal is to this.initialize this.proxy.coordIndexNew list to match triangles
	for (ii=2; ii <= this.proxy.index.length-1; ii++)
	{
		if ((this.proxy.index[ii] == this.proxy.index[ii-1]) || (this.proxy.index[ii] == this.proxy.index[ii-2]) || (this.proxy.index[ii-1] == this.proxy.index[ii-2]))
		{
			this.alwaysPrint ('this.proxy.index=' + this.proxy.index);
			this.alwaysPrint ('error, pair of equal indices in triangle');
			return;
		}
	  
		if (this.proxy.index[ii] >= 0) 
	  {
			// add another triangle from latest 3 points of fan set to ITS
			// order is ccw, i.e. in correct halfplane direction
			this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = this.proxy.index[ii-2];
			this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = this.proxy.index[ii-1];
			this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = this.proxy.index[ii];
			this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = -1;
	  }

		// ensure done, or sufficient points remain to build another triangle
//		if (	(i!=this.proxy.index.length-1) && (this.proxy.index.length - i < 2))
//		{
//			this.alwaysPrint ('this.proxy.index=' + this.proxy.index);
//			this.alwaysPrint ('error, insufficient this.proxy.index values after' +
//	'this.proxy.index[' + i + ']=-1');
//			return;
//		}
		// ensure done, or enough legal this.proxy.index values remain to build another triangle
//		if (	(i!=this.proxy.index.length-1) &&
//			((this.proxy.index[i+1] == -1) || (this.proxy.index[i+2] == -1) || (this.proxy.index[i+3] == -1)))
//		{
//			this.alwaysPrint ('this.proxy.index=' + this.proxy.index);
//			this.alwaysPrint ('error, insufficient non-negative-one this.proxy.index values after' +
//	'this.proxy.index[' + i + ']=-1');
//			return;
//		}
	  // incremental trace of array being built
	  this.tracePrint ('TSScoordIndexNew=' + this.proxy.coordIndexNew);
	}
	X3DJSON.nodeUtil("Scene","RenderedTSS", "set_coordIndex",  this.proxy.coordIndexNew);
	this.tracePrint ('X3DJSON.nodeUtil("Scene","RenderedTSS", "coordIndex", ' + X3DJSON.nodeUtil("Scene","RenderedTSS", "coordIndex")));
	// match colorIndex if any Color node exists
	if (X3DJSON.nodeUtil("Scene","NodesHolderTSS", "color"))
	{
	  if (X3DJSON.nodeUtil("Scene","NodesHolderTSS", "color").color.length > 0)
	  {
		X3DJSON.nodeUtil("Scene","RenderedTSS", "set_colorIndex",  this.proxy.coordIndexNew);
		this.tracePrint ('set_colorIndex=' + this.proxy.coordIndexNew);
	  }
	}
};

	this.set_index = function (value, timestamp)
{
	this.proxy.index = value;
	this.initialize ();
};

	this.tracePrint = function (outputString)
{
    if (this.proxy.localTraceEnabled)
	  console.error ('[IndexedTriangleStripSet]' + outputString);
};

	this.alwaysPrint = function (outputString)
{
	  console.error ('[IndexedTriangleStripSet]' + outputString);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleStripSetToIndexedFaceSet'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleStripSetToIndexedFaceSet']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleStripSetToIndexedFaceSet'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleStripSetToIndexedFaceSet'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleStripSetToIndexedFaceSet']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleStripSetToIndexedFaceSet']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleStripSetToIndexedFaceSet'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleStripSetToIndexedFaceSet']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleStripSetToIndexedFaceSet']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleStripSetToIndexedFaceSet'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['IndexedTriangleStripSetToIndexedFaceSet'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['LineSetToIndexedLineSet'] = function() {
	this.set_vertexCount = function (value) {
		try {
			this.proxy.vertexCount = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting vertexCount '+e);
			console.error('Problems setting vertexCount',e);
		}
	};
	this.vertexCount_changed = function () {
		var value = this.vertexCount;
		return value;
	};
	try {
		this.vertexCount = new MFInt32();
	} catch (e) {
		console.log('Problems setting vertexCount '+e);
		console.error('Problems setting vertexCount',e);
	}
	this.set_renderedILS = function (value) {
		try {
			this.proxy.renderedILS = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting renderedILS '+e);
			console.error('Problems setting renderedILS',e);
		}
	};
	this.renderedILS_changed = function () {
		var value = this.renderedILS;
		return value;
	};
	try {
		this.renderedILS = X3DJSON.nodeUtil("Scene","RenderedILS");
	} catch (e) {
		console.log('Problems setting renderedILS '+e);
		console.error('Problems setting renderedILS',e);
	}
	this.set_nodesHolder = function (value) {
		try {
			this.proxy.nodesHolder = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting nodesHolder '+e);
			console.error('Problems setting nodesHolder',e);
		}
	};
	this.nodesHolder_changed = function () {
		var value = this.nodesHolder;
		return value;
	};
	try {
		this.nodesHolder = X3DJSON.nodeUtil("Scene","NodesHolderILS");
	} catch (e) {
		console.log('Problems setting nodesHolder '+e);
		console.error('Problems setting nodesHolder',e);
	}
	this.set_localTraceEnabled = function (value) {
		try {
			this.proxy.localTraceEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting localTraceEnabled '+e);
			console.error('Problems setting localTraceEnabled',e);
		}
	};
	this.localTraceEnabled_changed = function () {
		var value = this.localTraceEnabled;
		return value;
	};
	try {
		this.localTraceEnabled = new SFBool(true);
	} catch (e) {
		console.log('Problems setting localTraceEnabled '+e);
		console.error('Problems setting localTraceEnabled',e);
	}
	this.set_coordIndexNew = function (value) {
		try {
			this.proxy.coordIndexNew = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting coordIndexNew '+e);
			console.error('Problems setting coordIndexNew',e);
		}
	};
	this.coordIndexNew_changed = function () {
		var value = this.coordIndexNew;
		return value;
	};
	try {
		this.coordIndexNew = new MFInt32();
	} catch (e) {
		console.log('Problems setting coordIndexNew '+e);
		console.error('Problems setting coordIndexNew',e);
	}


ecmascript:

	this.initialize = function ()
{
	vertexCountSum = 0;
	this.tracePrint ('this.proxy.vertexCount=' + this.proxy.vertexCount);
	for (i=0; i < this.proxy.vertexCount.length; i++)
	{
		if (this.proxy.vertexCount[i] < 2)
		{
			this.alwaysPrint ('error, this.proxy.vertexCount[' + i + ']=' + this.proxy.vertexCount[i] +
	' is illegal value, must be >= 2');
			return;
		}
		vertexCountSum = vertexCountSum + vertexCountSum[i];
	}
	this.tracePrint ('vertexCountSum=' + vertexCountSum);
	numberPoints = X3DJSON.nodeUtil("Scene","NodesHolderILS", "coord").point.length;

	if (numberPoints < vertexCountSum) 
	{
		this.alwaysPrint ('warning, Coordinate.point.length=' + numberPoints  + 
' is less than vertexCountSum=' + vertexCountSum + ', LS ignored');
		return;
	}
	this.proxy.coordIndexNew = new MFInt32 ();

	numberSegments = vertexCountSum.length;  // need validity check

	// i walks through array of points to build line-segment indices
	i = 0;
	for (seg=0; seg < numberSegments; seg++)
	{
	  for (j=0; j < this.proxy.vertexCount[seg]; j++)
	  {
		this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = i;
		i++;
	  }
	  this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = -1; // terminate current fan

	  // incremental trace of array being built
	  this.tracePrint ('this.proxy.coordIndexNew=' + this.proxy.coordIndexNew);
	} // repeat for all vertices

	X3DJSON.nodeUtil("Scene","RenderedILS", "coordIndex",  this.proxy.coordIndexNew);
	this.tracePrint ('X3DJSON.nodeUtil("Scene","RenderedILS", "coordIndex", ' + X3DJSON.nodeUtil("Scene","RenderedILS", "coordIndex")));

	// match colorIndex if any Color node exists
	if (X3DJSON.nodeUtil("Scene","NodesHolderILS", "color"))
	{
	  if (X3DJSON.nodeUtil("Scene","NodesHolderILS", "color").color.length > 0)
	  {
		X3DJSON.nodeUtil("Scene","RenderedILS", "colorIndex",  this.proxy.coordIndexNew);
		this.tracePrint ('set_colorIndex=' + this.proxy.coordIndexNew);
	  }
	}
};

	this.tracePrint = function (outputString)
{
    if (this.proxy.localTraceEnabled)
	console.error ('[TriangleFanSet]' + outputString);
};

	this.alwaysPrint = function (outputString)
{
	console.error ('[TriangleFanSet]' + outputString);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['LineSetToIndexedLineSet'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['LineSetToIndexedLineSet']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['LineSetToIndexedLineSet'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['LineSetToIndexedLineSet'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['LineSetToIndexedLineSet']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['LineSetToIndexedLineSet']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['LineSetToIndexedLineSet'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['LineSetToIndexedLineSet']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['LineSetToIndexedLineSet']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['LineSetToIndexedLineSet'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['LineSetToIndexedLineSet'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['TriangleFanSetToIndexedFaceSet'] = function() {
	this.set_fanCount = function (value) {
		try {
			this.proxy.fanCount = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fanCount '+e);
			console.error('Problems setting fanCount',e);
		}
	};
	this.fanCount_changed = function () {
		var value = this.fanCount;
		return value;
	};
	try {
		this.fanCount = new MFInt32();
	} catch (e) {
		console.log('Problems setting fanCount '+e);
		console.error('Problems setting fanCount',e);
	}
	this.set_renderedTFS = function (value) {
		try {
			this.proxy.renderedTFS = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting renderedTFS '+e);
			console.error('Problems setting renderedTFS',e);
		}
	};
	this.renderedTFS_changed = function () {
		var value = this.renderedTFS;
		return value;
	};
	try {
		this.renderedTFS = X3DJSON.nodeUtil("Scene","RenderedTFS");
	} catch (e) {
		console.log('Problems setting renderedTFS '+e);
		console.error('Problems setting renderedTFS',e);
	}
	this.set_nodesHolder = function (value) {
		try {
			this.proxy.nodesHolder = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting nodesHolder '+e);
			console.error('Problems setting nodesHolder',e);
		}
	};
	this.nodesHolder_changed = function () {
		var value = this.nodesHolder;
		return value;
	};
	try {
		this.nodesHolder = X3DJSON.nodeUtil("Scene","NodesHolderTFS");
	} catch (e) {
		console.log('Problems setting nodesHolder '+e);
		console.error('Problems setting nodesHolder',e);
	}
	this.set_localTraceEnabled = function (value) {
		try {
			this.proxy.localTraceEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting localTraceEnabled '+e);
			console.error('Problems setting localTraceEnabled',e);
		}
	};
	this.localTraceEnabled_changed = function () {
		var value = this.localTraceEnabled;
		return value;
	};
	try {
		this.localTraceEnabled = new SFBool(true);
	} catch (e) {
		console.log('Problems setting localTraceEnabled '+e);
		console.error('Problems setting localTraceEnabled',e);
	}
	this.set_coordIndexNew = function (value) {
		try {
			this.proxy.coordIndexNew = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting coordIndexNew '+e);
			console.error('Problems setting coordIndexNew',e);
		}
	};
	this.coordIndexNew_changed = function () {
		var value = this.coordIndexNew;
		return value;
	};
	try {
		this.coordIndexNew = new MFInt32();
	} catch (e) {
		console.log('Problems setting coordIndexNew '+e);
		console.error('Problems setting coordIndexNew',e);
	}


ecmascript:

	this.initialize = function ()
{
	fanCountSum = 0;
	this.tracePrint ('this.proxy.fanCount=' + this.proxy.fanCount);
	for (i=0; i < this.proxy.fanCount.length; i++)
	{
		if (this.proxy.fanCount[i] < 3)
		{
			this.alwaysPrint ('error, this.proxy.fanCount[' + i + ']=' + this.proxy.fanCount[i] +
	' is illegal value, must be >= 3');
			return;
		}
		fanCountSum = fanCountSum + this.proxy.fanCount[i];
	}
	this.tracePrint ('fanCountSum=' + fanCountSum);
	numberPoints = X3DJSON.nodeUtil("Scene","NodesHolderTFS", "coord").point.length;

	if (numberPoints < fanCountSum) 
	{
		this.alwaysPrint ('warning, Coordinate.point.length=' + numberPoints  + 
' is less than fanCountSum=' + fanCountSum + ', TFS ignored');
		return;
	}
	this.proxy.coordIndexNew = new MFInt32 ();

	numberFans = this.proxy.fanCount.length;  // need validity check

	// i walks through array of points to build polygon indices
	i = 0;
	for (fan=0; fan < numberFans; fan++)
	{
	  for (j=0; j < this.proxy.fanCount[fan]; j++)
	  {
		this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = i;
		i++;
	  }
	  this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = -1; // terminate current fan

	  // incremental trace of array being built
	  this.tracePrint ('this.proxy.coordIndexNew=' + this.proxy.coordIndexNew);
	} // repeat for all fans

	X3DJSON.nodeUtil("Scene","RenderedTFS", "coordIndex",  this.proxy.coordIndexNew);
	this.tracePrint ('X3DJSON.nodeUtil("Scene","RenderedTFS", "coordIndex", ' + X3DJSON.nodeUtil("Scene","RenderedTFS", "coordIndex")));

	// match colorIndex if any Color node exists
	if (X3DJSON.nodeUtil("Scene","NodesHolderTFS", "color"))
	{
	  if (X3DJSON.nodeUtil("Scene","NodesHolderTFS", "color").color.length > 0)
	  {
		X3DJSON.nodeUtil("Scene","RenderedTFS", "set_colorIndex",  this.proxy.coordIndexNew);
		this.tracePrint ('set_colorIndex=' + this.proxy.coordIndexNew);
	  }
	}
};

	this.tracePrint = function (outputString)
{
    if (this.proxy.localTraceEnabled)
	console.error ('[TriangleFanSet]' + outputString);
};

	this.alwaysPrint = function (outputString)
{
	console.error ('[TriangleFanSet]' + outputString);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['TriangleFanSetToIndexedFaceSet'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['TriangleFanSetToIndexedFaceSet']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['TriangleFanSetToIndexedFaceSet'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['TriangleFanSetToIndexedFaceSet'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['TriangleFanSetToIndexedFaceSet']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['TriangleFanSetToIndexedFaceSet']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['TriangleFanSetToIndexedFaceSet'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['TriangleFanSetToIndexedFaceSet']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['TriangleFanSetToIndexedFaceSet']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['TriangleFanSetToIndexedFaceSet'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['TriangleFanSetToIndexedFaceSet'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['TriangleSetToIndexedFaceSet'] = function() {
	this.set_index = function (value) {
		try {
			this.proxy.index = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting index '+e);
			console.error('Problems setting index',e);
		}
	};
	this.index_changed = function () {
		var value = this.index;
		return value;
	};
	try {
		this.index = new MFInt32();
	} catch (e) {
		console.log('Problems setting index '+e);
		console.error('Problems setting index',e);
	}
	this.set_index = function (value) {
		try {
			this.proxy.index = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting index '+e);
			console.error('Problems setting index',e);
		}
	};
	this.index_changed = function () {
		var value = this.index;
		return value;
	};
	try {
		this.index = new MFInt32();
	} catch (e) {
		console.log('Problems setting index '+e);
		console.error('Problems setting index',e);
	}
	this.set_renderedTS = function (value) {
		try {
			this.proxy.renderedTS = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting renderedTS '+e);
			console.error('Problems setting renderedTS',e);
		}
	};
	this.renderedTS_changed = function () {
		var value = this.renderedTS;
		return value;
	};
	try {
		this.renderedTS = X3DJSON.nodeUtil("Scene","RenderedTS");
	} catch (e) {
		console.log('Problems setting renderedTS '+e);
		console.error('Problems setting renderedTS',e);
	}
	this.set_nodesHolder = function (value) {
		try {
			this.proxy.nodesHolder = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting nodesHolder '+e);
			console.error('Problems setting nodesHolder',e);
		}
	};
	this.nodesHolder_changed = function () {
		var value = this.nodesHolder;
		return value;
	};
	try {
		this.nodesHolder = X3DJSON.nodeUtil("Scene","NodesHolderTS");
	} catch (e) {
		console.log('Problems setting nodesHolder '+e);
		console.error('Problems setting nodesHolder',e);
	}
	this.set_localTraceEnabled = function (value) {
		try {
			this.proxy.localTraceEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting localTraceEnabled '+e);
			console.error('Problems setting localTraceEnabled',e);
		}
	};
	this.localTraceEnabled_changed = function () {
		var value = this.localTraceEnabled;
		return value;
	};
	try {
		this.localTraceEnabled = new SFBool(true);
	} catch (e) {
		console.log('Problems setting localTraceEnabled '+e);
		console.error('Problems setting localTraceEnabled',e);
	}
	this.set_coordIndexNew = function (value) {
		try {
			this.proxy.coordIndexNew = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting coordIndexNew '+e);
			console.error('Problems setting coordIndexNew',e);
		}
	};
	this.coordIndexNew_changed = function () {
		var value = this.coordIndexNew;
		return value;
	};
	try {
		this.coordIndexNew = new MFInt32();
	} catch (e) {
		console.log('Problems setting coordIndexNew '+e);
		console.error('Problems setting coordIndexNew',e);
	}


ecmascript:

	this.initialize = function ()
{
	// this.proxy.index is an array of triangle indices. The ordering of
	// the vertices is ccw (counter-clockwise).

	// ensure legal this.proxy.index values
	for (ii=0; ii <= this.proxy.index.length-1; ii++)
	{
	  if (this.proxy.index[ii] < -1)
	  {
		this.alwaysPrint ('error, this.proxy.index[' + ii + ']=' + this.proxy.index[ii] +
' is illegal value');
		return;
	  }
	}
	this.tracePrint ('this.proxy.index.length=' + this.proxy.index.length);
	this.tracePrint ('this.proxy.index=' + this.proxy.index);

	if (this.proxy.index.length < 3) 
	{
		this.alwaysPrint ('warning, this.proxy.index.length=' + this.proxy.index.length + 
' insufficient to construct a triangle, ITS ignored');
		return;
	}

	this.proxy.coordIndexNew = new MFInt32 ();

	// ii walks through this.proxy.index array,
	// goal is to this.initialize this.proxy.coordIndexNew list to match triangles
	for (ii=0; ii <= this.proxy.index.length-1; ii+=3)
	{
		if ((this.proxy.index[ii] == this.proxy.index[ii+1]) || (this.proxy.index[ii] == this.proxy.index[ii+2]) || (this.proxy.index[ii+1] == this.proxy.index[ii+2]))
		{
			this.alwaysPrint ('this.proxy.index=' + this.proxy.index);
			this.alwaysPrint ('error, pair of equal indices in triangle');
			return;
		}
	  
		if (this.proxy.index[ii] >= 0) 
		{
			// add another triangle from latest 3 points of fan set to ITS
			// order is ccw, i.e. in correct halfplane direction
			this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = this.proxy.index[ii];
			this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = this.proxy.index[ii+1];
			this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = this.proxy.index[ii+2];
			this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = -1;
		}

		if (this.proxy.index.length % 3 != 0) {
			this.alwaysPrint ('error, this.proxy.index field does not contain a multiple' +
		'of three coordinate values.');
			this.alwaysPrint ('The remaining vertices shall be ignored');
			return;
		}


		// ensure done, or sufficient points remain to build another triangle
//		if (	(i!=this.proxy.index.length-1) && (this.proxy.index.length - i < 2))
//		{
//			this.alwaysPrint ('this.proxy.index=' + this.proxy.index);
//			this.alwaysPrint ('error, insufficient this.proxy.index values after' +
//	'this.proxy.index[' + i + ']=-1');
//			return;
//		}
		// ensure done, or enough legal this.proxy.index values remain to build another triangle
//		if (	(i!=this.proxy.index.length-1) &&
//			((this.proxy.index[i+1] == -1) || (this.proxy.index[i+2] == -1) || (this.proxy.index[i+3] == -1)))
//		{
//			this.alwaysPrint ('this.proxy.index=' + this.proxy.index);
//			this.alwaysPrint ('error, insufficient non-negative-one this.proxy.index values after' +
//	'this.proxy.index[' + i + ']=-1');
//			return;
//		}
	  // incremental trace of array being built
	  this.tracePrint ('this.proxy.coordIndexNew=' + this.proxy.coordIndexNew);
	}
	renderedITS.set_coordIndex = this.proxy.coordIndexNew;
	this.tracePrint ('renderedITS.coordIndex=' + renderedITS.coordIndex);
	// match colorIndex if any Color node exists
	if (X3DJSON.nodeUtil("Scene","NodesHolderTS", "color"))
	{
	  if (X3DJSON.nodeUtil("Scene","NodesHolderTS", "color").color.length > 0)
	  {
		renderedITS.set_colorIndex = this.proxy.coordIndexNew;
		this.tracePrint ('set_colorIndex=' + this.proxy.coordIndexNew);
	  }
	}
};

	this.set_index = function (value, timestamp)
{
	this.proxy.index = value;
	this.initialize ();
};

	this.tracePrint = function (outputString)
{
    if (this.proxy.localTraceEnabled)
	console.error('[IndexedTriangleSet]' + outputString);
};

	this.alwaysPrint = function (outputString)
{
	console.error('[IndexedTriangleSet]' + outputString);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['TriangleSetToIndexedFaceSet'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['TriangleSetToIndexedFaceSet']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['TriangleSetToIndexedFaceSet'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['TriangleSetToIndexedFaceSet'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['TriangleSetToIndexedFaceSet']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['TriangleSetToIndexedFaceSet']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['TriangleSetToIndexedFaceSet'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['TriangleSetToIndexedFaceSet']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['TriangleSetToIndexedFaceSet']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['TriangleSetToIndexedFaceSet'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/RenderingComponentPrototypes.json']['TriangleSetToIndexedFaceSet'].initialize();

