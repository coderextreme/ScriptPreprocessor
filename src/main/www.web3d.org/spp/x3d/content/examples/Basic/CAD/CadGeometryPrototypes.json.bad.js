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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['IndexedQuadSetToIndexedFaceSet'] = function() {
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
	this.set_renderedIQS = function (value) {
		try {
			this.proxy.renderedIQS = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting renderedIQS '+e);
			console.error('Problems setting renderedIQS',e);
		}
	};
	this.renderedIQS_changed = function () {
		var value = this.renderedIQS;
		return value;
	};
	try {
		this.renderedIQS = X3DJSON.nodeUtil("Scene","RenderedIQS");
	} catch (e) {
		console.log('Problems setting renderedIQS '+e);
		console.error('Problems setting renderedIQS',e);
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
	//colorPerVertex ignored in IndexedQuadSet, and always treated as "true"
	RenderedIQS.colorPerVertex = true;

	// this.proxy.index is an array of quad indices. The ordering of
	// the vertices is ccw (counter-clockwise).

	// ensure legal this.proxy.index values
	for (ii=0; ii <= this.proxy.index.length-1; ii++)
	{
	  if (this.proxy.index[ii] < -1)
	  {
		this.alwaysPrint ('error, this.proxy.index[' + ii + ']=' + this.proxy.index[ii] + ' is illegal value');
		return;
	  }
	}
	this.tracePrint ('this.proxy.index.length=' + this.proxy.index.length);
	this.tracePrint ('this.proxy.index=' + this.proxy.index);

	if (this.proxy.index.length < 4)
	{
		this.alwaysPrint ('warning, this.proxy.index.length=' + this.proxy.index.length + ' insufficient to construct a quad, IQS ignored');
		return;
	}

	this.proxy.coordIndexNew = new MFInt32 ();

	// ii walks through this.proxy.index array,
	// goal is to this.initialize this.proxy.coordIndexNew list to match quads
	for (ii=0; ii <= this.proxy.index.length-1; ii+=4)
	{
		if ((this.proxy.index[ii]   == this.proxy.index[ii+1]) || (this.proxy.index[ii]   == this.proxy.index[ii+2]) || (this.proxy.index[ii] == this.proxy.index[ii+3]) ||
		    (this.proxy.index[ii+1] == this.proxy.index[ii+2]) || (this.proxy.index[ii+1] == this.proxy.index[ii+3]) ||
		    (this.proxy.index[ii+2] == this.proxy.index[ii+3]))
		{
			this.alwaysPrint ('this.proxy.index=' + this.proxy.index);
			this.alwaysPrint ('error, pair of equal indices in quad');
			return;
		}

		if (this.proxy.index[ii] >= 0)
		{
			// add another quad from latest 4 points of fan set to IQS
			// order is ccw, i.e. in correct halfplane direction
			// note: there is an implicit "malloc" here for the'length' element of the array
			this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = this.proxy.index[ii];
			this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = this.proxy.index[ii+1];
			this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = this.proxy.index[ii+2];
			this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = this.proxy.index[ii+3];
			this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = -1;
		}

		if (this.proxy.index.length % 4 != 0) {
			this.alwaysPrint ('error, this.proxy.index field does not contain a multiple of four coordinate values.');
			this.alwaysPrint ('The remaining vertices shall be ignored');
			return;
		}

	  // incremental trace of array being built
	  this.tracePrint ('this.proxy.coordIndexNew=' + this.proxy.coordIndexNew);
	}
	X3DJSON.nodeUtil("Scene","RenderedIQS", "set_coordIndex",  this.proxy.coordIndexNew);
	this.tracePrint ('X3DJSON.nodeUtil("Scene","RenderedIQS", "coordIndex", ' + X3DJSON.nodeUtil("Scene","RenderedIQS", "coordIndex")));
	// match colorIndex if any Color node exists
//	if (nodesHolder.color)
//	{
//	  if (nodesHolder.color.color.length > 0)
//	  {
		//  Could implement color count check here
//	  }
//	}

	// no need to set colorIndex since indexedFaceSet semantics handles this
};

	this.set_index = function (value, timestamp)
{
	this.proxy.index = value;
	this.initialize ();
};

	this.tracePrint = function (outputString)
{
    if (this.proxy.localTraceEnabled)
	  console.error ('[IndexedQuadSet]' + outputString);
};

	this.alwaysPrint = function (outputString)
{
	console.error ('[IndexedQuadSet]' + outputString);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['IndexedQuadSetToIndexedFaceSet'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['IndexedQuadSetToIndexedFaceSet']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['IndexedQuadSetToIndexedFaceSet'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['IndexedQuadSetToIndexedFaceSet'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['IndexedQuadSetToIndexedFaceSet']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['IndexedQuadSetToIndexedFaceSet']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['IndexedQuadSetToIndexedFaceSet'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['IndexedQuadSetToIndexedFaceSet']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['IndexedQuadSetToIndexedFaceSet']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['IndexedQuadSetToIndexedFaceSet'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['IndexedQuadSetToIndexedFaceSet'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['QuadSetToIndexedFaceSet'] = function() {
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
	this.set_renderedQS = function (value) {
		try {
			this.proxy.renderedQS = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting renderedQS '+e);
			console.error('Problems setting renderedQS',e);
		}
	};
	this.renderedQS_changed = function () {
		var value = this.renderedQS;
		return value;
	};
	try {
		this.renderedQS = X3DJSON.nodeUtil("Scene","RenderedQS");
	} catch (e) {
		console.log('Problems setting renderedQS '+e);
		console.error('Problems setting renderedQS',e);
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
	//colorPerVertex ignored in QuadSet, and always treated as "true"
	RenderedQS.colorPerVertex = true;

	// calculate this.proxy.index value from QuadSet coord values
	if (X3DJSON.nodeUtil("Scene","RenderedQS", "coord"))
	{
		numberOfCoordinatePoints = X3DJSON.nodeUtil("Scene","RenderedQS", "coord").point.length;
	}
	else
	{
		this.tracePrint ('no Coordinate node found');
		return;
	}
	if (numberOfCoordinatePoints < 4)
	{
		this.alwaysPrint ('warning, numberOfCoordinatePoints=' + numberOfCoordinatePoints + ' insufficient to construct a quad, QuadSet ignored');
		return;
	}

	this.proxy.coordIndexNew = new MFInt32 ();

	// ii walks through this.proxy.index array,
	// goal is to this.initialize this.proxy.coordIndexNew list to match quads
	for (ii=0; ii <= numberOfCoordinatePoints-1; ii+=4)
	{
		// check if at least 4 vertices remaining to build a quad
		if ((numberOfCoordinatePoints - ii) < 4)
		{
			this.alwaysPrint ('error, this.proxy.index field does not contain a multiple' +
' of four coordinate values.');
			this.alwaysPrint ('The remaining vertices shall be ignored');
			return;
		}

		if ((this.proxy.index[ii]   == this.proxy.index[ii+1]) || (this.proxy.index[ii]   == this.proxy.index[ii+2]) || (this.proxy.index[ii] == this.proxy.index[ii+3]) ||
		    (this.proxy.index[ii+1] == this.proxy.index[ii+2]) || (this.proxy.index[ii+1] == this.proxy.index[ii+3]) ||
		    (this.proxy.index[ii+2] == this.proxy.index[ii+3]))
		{
			this.alwaysPrint ('this.proxy.index=' + this.proxy.index);
			this.alwaysPrint ('error, pair of equal indices in quad');
			return;
		}

		if (this.proxy.index[ii] >= 0)
		{
			// add another quad from latest 4 points of fan set to QS
			// order is ccw, i.e. in correct halfplane direction
			// note: there is an implicit "malloc" here for the'length' element of the array
			this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = this.proxy.index[ii];
			this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = this.proxy.index[ii+1];
			this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = this.proxy.index[ii+2];
			this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = this.proxy.index[ii+3];
			this.proxy.coordIndexNew [this.proxy.coordIndexNew.length] = -1;
		}

	  // incremental trace of array being built
	  this.tracePrint ('this.proxy.coordIndexNew=' + this.proxy.coordIndexNew);
	}
	X3DJSON.nodeUtil("Scene","RenderedQS", "set_coordIndex",  this.proxy.coordIndexNew);
	this.tracePrint ('X3DJSON.nodeUtil("Scene","RenderedQS", "coordIndex", ' + X3DJSON.nodeUtil("Scene","RenderedQS", "coordIndex")));
	// match colorIndex if any Color node exists
//	if (nodesHolder.color)
//	{
//	  if (nodesHolder.color.color.length > 0)
//	  {
		//  Could implement color count check here
//	  }
//	}

	// no need to set colorIndex since indexedFaceSet semantics handles this
};

	this.set_index = function (value, timestamp)
{
	this.proxy.index = value;
	this.initialize ();
};

	this.tracePrint = function (outputString)
{
    if (this.proxy.localTraceEnabled)
	  console.error ('[IndexedQuadSet]' + outputString);
};

	this.alwaysPrint = function (outputString)
{
	console.error ('[IndexedQuadSet]' + outputString);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['QuadSetToIndexedFaceSet'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['QuadSetToIndexedFaceSet']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['QuadSetToIndexedFaceSet'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['QuadSetToIndexedFaceSet'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['QuadSetToIndexedFaceSet']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['QuadSetToIndexedFaceSet']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['QuadSetToIndexedFaceSet'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['QuadSetToIndexedFaceSet']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['QuadSetToIndexedFaceSet']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['QuadSetToIndexedFaceSet'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['QuadSetToIndexedFaceSet'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['HoldShapeNodeScript'] = function() {
	this.set_shape = function (value) {
		try {
			this.proxy.shape = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting shape '+e);
			console.error('Problems setting shape',e);
		}
	};
	this.shape_changed = function () {
		var value = this.shape;
		return value;
	};
	try {
		this.shape = X3DJSON.nodeUtil("Scene","undefined");
	} catch (e) {
		console.log('Problems setting shape '+e);
		console.error('Problems setting shape',e);
	}


ecmascript:
// no script code, this node is simply a container

// silence warning: no functino provided that includes shape = something;


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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['HoldShapeNodeScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['HoldShapeNodeScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['HoldShapeNodeScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['HoldShapeNodeScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['HoldShapeNodeScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['HoldShapeNodeScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['HoldShapeNodeScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['HoldShapeNodeScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['HoldShapeNodeScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['HoldShapeNodeScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['HoldShapeNodeScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['HoldMFBoolFieldScript'] = function() {
	this.set_visible = function (value) {
		try {
			this.proxy.visible = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting visible '+e);
			console.error('Problems setting visible',e);
		}
	};
	this.visible_changed = function () {
		var value = this.visible;
		return value;
	};
	try {
		this.visible = new MFBool();
	} catch (e) {
		console.log('Problems setting visible '+e);
		console.error('Problems setting visible',e);
	}


ecmascript:
// no script code, this node is simply a container


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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['HoldMFBoolFieldScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['HoldMFBoolFieldScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['HoldMFBoolFieldScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['HoldMFBoolFieldScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['HoldMFBoolFieldScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['HoldMFBoolFieldScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['HoldMFBoolFieldScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['HoldMFBoolFieldScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['HoldMFBoolFieldScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['HoldMFBoolFieldScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/CAD/CadGeometryPrototypes.json']['HoldMFBoolFieldScript'].initialize();

