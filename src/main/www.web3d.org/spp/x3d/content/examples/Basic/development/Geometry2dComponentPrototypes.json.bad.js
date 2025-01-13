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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'] = function() {
	this.set_startAngle = function (value) {
		try {
			this.proxy.startAngle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startAngle '+e);
			console.error('Problems setting startAngle',e);
		}
	};
	this.startAngle_changed = function () {
		var value = this.startAngle;
		return value;
	};
	try {
		this.startAngle = new SFFloat();
	} catch (e) {
		console.log('Problems setting startAngle '+e);
		console.error('Problems setting startAngle',e);
	}
	this.set_endAngle = function (value) {
		try {
			this.proxy.endAngle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting endAngle '+e);
			console.error('Problems setting endAngle',e);
		}
	};
	this.endAngle_changed = function () {
		var value = this.endAngle;
		return value;
	};
	try {
		this.endAngle = new SFFloat();
	} catch (e) {
		console.log('Problems setting endAngle '+e);
		console.error('Problems setting endAngle',e);
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
		this.radius = new SFFloat();
	} catch (e) {
		console.log('Problems setting radius '+e);
		console.error('Problems setting radius',e);
	}
	this.set_arcSet3d = function (value) {
		try {
			this.proxy.arcSet3d = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting arcSet3d '+e);
			console.error('Problems setting arcSet3d',e);
		}
	};
	this.arcSet3d_changed = function () {
		var value = this.arcSet3d;
		return value;
	};
	try {
		this.arcSet3d = new MFVec3f();
	} catch (e) {
		console.log('Problems setting arcSet3d '+e);
		console.error('Problems setting arcSet3d',e);
	}
	this.set_arcIndexSet3d = function (value) {
		try {
			this.proxy.arcIndexSet3d = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting arcIndexSet3d '+e);
			console.error('Problems setting arcIndexSet3d',e);
		}
	};
	this.arcIndexSet3d_changed = function () {
		var value = this.arcIndexSet3d;
		return value;
	};
	try {
		this.arcIndexSet3d = new MFInt32();
	} catch (e) {
		console.log('Problems setting arcIndexSet3d '+e);
		console.error('Problems setting arcIndexSet3d',e);
	}


ecmascript:

	this.initialize = function ()
{
   numOfPoints = 100;

   if (this.proxy.radius < 0)
   {
      console.error ('[Arc2D] Warning:  invalid value, this.proxy.radius=' + value + ' must instead be >= 0');
   }

   if ((this.proxy.startAngle < 0) || (this.proxy.startAngle >= 2 * Math.PI))
   {
	console.error ('[Arc2D] Warning: this.proxy.startAngle=' + this.proxy.startAngle + ' must be within range [0..2pi)'); // (]
   }

   if ((this.proxy.endAngle < 0) || (this.proxy.endAngle >= 2 * Math.PI))
   {
	console.error ('[Arc2D] Warning: this.proxy.endAngle=' + this.proxy.endAngle + ' must be within range [0..2pi)'); // (]
   }

   // equal this.proxy.startAngle, this.proxy.endAngle means draw full circle.
   // high out-of-range this.proxy.endAngle is OK for local computation.
   if (this.proxy.startAngle >= this.proxy.endAngle)
      this.proxy.endAngle = this.proxy.endAngle + 2 * Math.PI;

   differAng = Math.abs((this.proxy.endAngle - this.proxy.startAngle)) / numOfPoints;

   for (i = 0; i <= numOfPoints; i++)
   {
	this.proxy.arcSet3d[i] = new SFVec3f (this.proxy.radius * Math.cos(this.proxy.startAngle + i * differAng), this.proxy.radius * Math.sin(this.proxy.startAngle + i * differAng), 0.0);
        this.proxy.arcIndexSet3d[i] = i;
   }

} // initia;

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'] = function() {
	this.set_closureType = function (value) {
		try {
			this.proxy.closureType = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting closureType '+e);
			console.error('Problems setting closureType',e);
		}
	};
	this.closureType_changed = function () {
		var value = this.closureType;
		return value;
	};
	try {
		this.closureType = new SFString();
	} catch (e) {
		console.log('Problems setting closureType '+e);
		console.error('Problems setting closureType',e);
	}
	this.set_startAngle = function (value) {
		try {
			this.proxy.startAngle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startAngle '+e);
			console.error('Problems setting startAngle',e);
		}
	};
	this.startAngle_changed = function () {
		var value = this.startAngle;
		return value;
	};
	try {
		this.startAngle = new SFFloat();
	} catch (e) {
		console.log('Problems setting startAngle '+e);
		console.error('Problems setting startAngle',e);
	}
	this.set_endAngle = function (value) {
		try {
			this.proxy.endAngle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting endAngle '+e);
			console.error('Problems setting endAngle',e);
		}
	};
	this.endAngle_changed = function () {
		var value = this.endAngle;
		return value;
	};
	try {
		this.endAngle = new SFFloat();
	} catch (e) {
		console.log('Problems setting endAngle '+e);
		console.error('Problems setting endAngle',e);
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
		this.radius = new SFFloat();
	} catch (e) {
		console.log('Problems setting radius '+e);
		console.error('Problems setting radius',e);
	}
	this.set_arcSet3d = function (value) {
		try {
			this.proxy.arcSet3d = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting arcSet3d '+e);
			console.error('Problems setting arcSet3d',e);
		}
	};
	this.arcSet3d_changed = function () {
		var value = this.arcSet3d;
		return value;
	};
	try {
		this.arcSet3d = new MFVec3f();
	} catch (e) {
		console.log('Problems setting arcSet3d '+e);
		console.error('Problems setting arcSet3d',e);
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


ecmascript:

	this.initialize = function ()
{
   if (this.proxy.radius < 0)
   {
      console.error ('[ArcClose2D] Warning:  invalid value, this.proxy.radius=' + value + ' must instead be >= 0');
   }

   if ((this.proxy.startAngle < 0) || (this.proxy.startAngle >= 2 * Math.PI))
   {
	console.error ('[ArcClose2D] Warning: this.proxy.startAngle=' + this.proxy.startAngle + ' must be within range [0..2pi)'); //(]
   }

   if ((this.proxy.endAngle< 0) || (this.proxy.endAngle>= 2 * Math.PI))
   {
	console.error ('[ArcClose2D] Warning: this.proxy.endAngle=' + this.proxy.endAngle+ ' must be within range [0..2pi)'); // (]
    }

    // equal this.proxy.startAngle, this.proxy.endAngle means draw full circle.
    // high out-of-range this.proxy.endAngle is OK for local computation.
   if (this.proxy.startAngle >= this.proxy.endAngle)
      this.proxy.endAngle = this.proxy.endAngle + 2*Math.PI;

   numOfPoints = 100;
   differAng = Math.abs((this.proxy.endAngle - this.proxy.startAngle))/numOfPoints;

   for ( i=0 ; i<=numOfPoints ; i++)
   {
	if ( i == numOfPoints)
             this.proxy.arcSet3d[i] = new SFVec3f (0.0, 0.0, 0.0);
        else
             this.proxy.arcSet3d[i] = new SFVec3f ( this.proxy.radius*Math.cos(this.proxy.startAngle + i*differAng), this.proxy.radius*Math.sin(this.proxy.startAngle + i*differAng), 0.0 );
   }

   k=0;
   if (this.proxy.closureType =='PIE')
       for ( i=0 ; i<numOfPoints ; i++)
       {
        	this.proxy.pointIndex[k]   = numOfPoints;
        	this.proxy.pointIndex[k+1] = i;
        	this.proxy.pointIndex[k+2] = i + 1;
        	this.proxy.pointIndex[k+3]   = numOfPoints;
        	this.proxy.pointIndex[k+4] = -1;
        k=k+5;
	}
   else
       for ( i=0 ; i<numOfPoints-1 ; i++)
       {
              this.proxy.pointIndex[k]   = 0;
              this.proxy.pointIndex[k+1] = i;
              this.proxy.pointIndex[k+2] = i + 1;
              this.proxy.pointIndex[k+3]   = 0;
              this.proxy.pointIndex[k+4] = -1;
        k=k+5;
	}

} // initia;

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'] = function() {
	this.set_closureType = function (value) {
		try {
			this.proxy.closureType = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting closureType '+e);
			console.error('Problems setting closureType',e);
		}
	};
	this.closureType_changed = function () {
		var value = this.closureType;
		return value;
	};
	try {
		this.closureType = new SFString();
	} catch (e) {
		console.log('Problems setting closureType '+e);
		console.error('Problems setting closureType',e);
	}
	this.set_startAngle = function (value) {
		try {
			this.proxy.startAngle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startAngle '+e);
			console.error('Problems setting startAngle',e);
		}
	};
	this.startAngle_changed = function () {
		var value = this.startAngle;
		return value;
	};
	try {
		this.startAngle = new SFFloat();
	} catch (e) {
		console.log('Problems setting startAngle '+e);
		console.error('Problems setting startAngle',e);
	}
	this.set_endAngle = function (value) {
		try {
			this.proxy.endAngle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting endAngle '+e);
			console.error('Problems setting endAngle',e);
		}
	};
	this.endAngle_changed = function () {
		var value = this.endAngle;
		return value;
	};
	try {
		this.endAngle = new SFFloat();
	} catch (e) {
		console.log('Problems setting endAngle '+e);
		console.error('Problems setting endAngle',e);
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
		this.radius = new SFFloat();
	} catch (e) {
		console.log('Problems setting radius '+e);
		console.error('Problems setting radius',e);
	}
	this.set_arcSet3d = function (value) {
		try {
			this.proxy.arcSet3d = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting arcSet3d '+e);
			console.error('Problems setting arcSet3d',e);
		}
	};
	this.arcSet3d_changed = function () {
		var value = this.arcSet3d;
		return value;
	};
	try {
		this.arcSet3d = new MFVec3f();
	} catch (e) {
		console.log('Problems setting arcSet3d '+e);
		console.error('Problems setting arcSet3d',e);
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


ecmascript:

	this.initialize = function ()
{

   if (this.proxy.radius < 0)
   {
      console.error ('[ArcCloseUnfilled2D] Warning:  invalid value, this.proxy.radius=' + value + ' must instead be >= 0');
   }

   if ((this.proxy.startAngle < 0) || (this.proxy.startAngle >= 2 * Math.PI))
   {
	console.error ('[ArcCloseUnfilled2D] Warning: this.proxy.startAngle=' + this.proxy.startAngle + ' must be within range [0..2pi)'); //(]
   }

   if ((this.proxy.endAngle< 0) || (this.proxy.endAngle>= 2 * Math.PI))
   {
	console.error ('[ArcCloseUnfilled2D] Warning: this.proxy.endAngle=' + this.proxy.endAngle+ ' must be within range [0..2pi)'); //(]
    }

    // equal this.proxy.startAngle, this.proxy.endAngle means draw full circle.
    // high out-of-range this.proxy.endAngle is OK for local computation.
   if (this.proxy.startAngle >= this.proxy.endAngle)
      this.proxy.endAngle = this.proxy.endAngle + 2*Math.PI;

   numOfPoints = 100;
   differAng = Math.abs((this.proxy.endAngle - this.proxy.startAngle))/numOfPoints;

   for ( i=0 ; i<=numOfPoints +1 ; i++)
   {
	if ( i == numOfPoints +1)
             this.proxy.arcSet3d[i] = new SFVec3f (0.0, 0.0, 0.0);
        else
             this.proxy.arcSet3d[i] = new SFVec3f ( this.proxy.radius*Math.cos(this.proxy.startAngle + i*differAng), this.proxy.radius*Math.sin(this.proxy.startAngle + i*differAng), 0.0 );
   }

   if (this.proxy.closureType =='CHORD')
   {
	for ( i=0 ; i<=numOfPoints +1 ; i++)
	{
        	if ( i == numOfPoints +1)
             		this.proxy.pointIndex[i] = 0.0;
        	else
             		this.proxy.pointIndex[i] = i;
	}
   }
   else
   {
	for ( i=0 ; i<=numOfPoints +1 ; i++)
	{
         this.proxy.pointIndex[i] = i;
	}
         this.proxy.pointIndex[i] = 0.0;
   }

} // initia;

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'] = function() {
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
		this.radius = new SFFloat();
	} catch (e) {
		console.log('Problems setting radius '+e);
		console.error('Problems setting radius',e);
	}
	this.set_circSet3d = function (value) {
		try {
			this.proxy.circSet3d = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting circSet3d '+e);
			console.error('Problems setting circSet3d',e);
		}
	};
	this.circSet3d_changed = function () {
		var value = this.circSet3d;
		return value;
	};
	try {
		this.circSet3d = new MFVec3f();
	} catch (e) {
		console.log('Problems setting circSet3d '+e);
		console.error('Problems setting circSet3d',e);
	}
	this.set_circIndexSet3d = function (value) {
		try {
			this.proxy.circIndexSet3d = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting circIndexSet3d '+e);
			console.error('Problems setting circIndexSet3d',e);
		}
	};
	this.circIndexSet3d_changed = function () {
		var value = this.circIndexSet3d;
		return value;
	};
	try {
		this.circIndexSet3d = new MFInt32();
	} catch (e) {
		console.log('Problems setting circIndexSet3d '+e);
		console.error('Problems setting circIndexSet3d',e);
	}


ecmascript:

	this.initialize = function ()
{
    if (this.proxy.radius < 0)
   {
      console.error ('[Circle2D] Warning:  invalid value, this.proxy.radius=' + value + ' must instead be >= 0');
   }


   numOfPoints = 100;
   differAng = 2*Math.PI/numOfPoints;

   for ( i=0 ; i<=numOfPoints ; i++)
   {
	this.proxy.circSet3d[i] = new SFVec3f ( this.proxy.radius*Math.cos(i*differAng), this.proxy.radius*Math.sin(i*differAng), 0.0 );
        this.proxy.circIndexSet3d[i] = i;
   }

} // initia;

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'] = function() {
	this.set_innerRadius = function (value) {
		try {
			this.proxy.innerRadius = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting innerRadius '+e);
			console.error('Problems setting innerRadius',e);
		}
	};
	this.innerRadius_changed = function () {
		var value = this.innerRadius;
		return value;
	};
	try {
		this.innerRadius = new SFFloat();
	} catch (e) {
		console.log('Problems setting innerRadius '+e);
		console.error('Problems setting innerRadius',e);
	}
	this.set_outerRadius = function (value) {
		try {
			this.proxy.outerRadius = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting outerRadius '+e);
			console.error('Problems setting outerRadius',e);
		}
	};
	this.outerRadius_changed = function () {
		var value = this.outerRadius;
		return value;
	};
	try {
		this.outerRadius = new SFFloat();
	} catch (e) {
		console.log('Problems setting outerRadius '+e);
		console.error('Problems setting outerRadius',e);
	}
	this.set_diskSet3d = function (value) {
		try {
			this.proxy.diskSet3d = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting diskSet3d '+e);
			console.error('Problems setting diskSet3d',e);
		}
	};
	this.diskSet3d_changed = function () {
		var value = this.diskSet3d;
		return value;
	};
	try {
		this.diskSet3d = new MFVec3f();
	} catch (e) {
		console.log('Problems setting diskSet3d '+e);
		console.error('Problems setting diskSet3d',e);
	}
	this.set_diskIndexSet3d = function (value) {
		try {
			this.proxy.diskIndexSet3d = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting diskIndexSet3d '+e);
			console.error('Problems setting diskIndexSet3d',e);
		}
	};
	this.diskIndexSet3d_changed = function () {
		var value = this.diskIndexSet3d;
		return value;
	};
	try {
		this.diskIndexSet3d = new MFInt32();
	} catch (e) {
		console.log('Problems setting diskIndexSet3d '+e);
		console.error('Problems setting diskIndexSet3d',e);
	}


ecmascript:

	this.initialize = function ()
{
   if (this.proxy.innerRadius < 0)
   {
      console.error ('[Disk2D] Warning:  invalid value, this.proxy.innerRadius=' + value + ' must instead be >= 0');
   }

   if (this.proxy.outerRadius < 0)
   {
      console.error ('[Disk2D] Warning:  invalid value, this.proxy.outerRadius=' + value + ' must instead be >= 0');
   }



   numOfPoints    = 100.0;
   this.proxy.diskSet3d      = new MFVec3f();
   this.proxy.diskIndexSet3d = new MFInt32();
   differAng = 2 * Math.PI/numOfPoints;


   for ( i=0 ; i<2*numOfPoints ; i++)
   {
        if ( i<numOfPoints)
	     this.proxy.diskSet3d[i] = new SFVec3f ( this.proxy.innerRadius*Math.cos(i*differAng), this.proxy.innerRadius*Math.sin(i*differAng), 0.0 );
        else
             this.proxy.diskSet3d[i] = new SFVec3f ( this.proxy.outerRadius*Math.cos((i-numOfPoints-1.0)*differAng), this.proxy.outerRadius*Math.sin((i-numOfPoints-1.0)*differAng), 0.0 );
   }


   k=0;
   for (i=0 ; i<numOfPoints ; i++)
   {
        this.proxy.diskIndexSet3d[k]   = i;
        this.proxy.diskIndexSet3d[k+1] = i + numOfPoints;
        this.proxy.diskIndexSet3d[k+2] = i + numOfPoints + 1;
        this.proxy.diskIndexSet3d[k+3]   = i;
        this.proxy.diskIndexSet3d[k+4] = -1;
        this.proxy.diskIndexSet3d[k+5] = i+1;
        this.proxy.diskIndexSet3d[k+6] = i ;
        this.proxy.diskIndexSet3d[k+7] = i + numOfPoints +1;
        this.proxy.diskIndexSet3d[k+8] = i +1;
        this.proxy.diskIndexSet3d[k+9] = -1;

        if (i == numOfPoints-1)
        {
        this.proxy.diskIndexSet3d[k]   = i;
        this.proxy.diskIndexSet3d[k+1] = i + numOfPoints;
        this.proxy.diskIndexSet3d[k+2] = numOfPoints;
        this.proxy.diskIndexSet3d[k+3]   = i;
        this.proxy.diskIndexSet3d[k+4] = -1;
        this.proxy.diskIndexSet3d[k+5] = 0;
        this.proxy.diskIndexSet3d[k+6] = i;
        this.proxy.diskIndexSet3d[k+7] = numOfPoints;
        this.proxy.diskIndexSet3d[k+8] = 0;
        this.proxy.diskIndexSet3d[k+9] = -1;
        }
   k=k+10;
   }

} // initia;

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'] = function() {
	this.set_lineSegments = function (value) {
		try {
			this.proxy.lineSegments = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting lineSegments '+e);
			console.error('Problems setting lineSegments',e);
		}
	};
	this.lineSegments_changed = function () {
		var value = this.lineSegments;
		return value;
	};
	try {
		this.lineSegments = new MFVec2f();
	} catch (e) {
		console.log('Problems setting lineSegments '+e);
		console.error('Problems setting lineSegments',e);
	}
	this.set_lineSegments3D = function (value) {
		try {
			this.proxy.lineSegments3D = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting lineSegments3D '+e);
			console.error('Problems setting lineSegments3D',e);
		}
	};
	this.lineSegments3D_changed = function () {
		var value = this.lineSegments3D;
		return value;
	};
	try {
		this.lineSegments3D = new MFVec3f();
	} catch (e) {
		console.log('Problems setting lineSegments3D '+e);
		console.error('Problems setting lineSegments3D',e);
	}
	this.set_lineSegmentsIndex = function (value) {
		try {
			this.proxy.lineSegmentsIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting lineSegmentsIndex '+e);
			console.error('Problems setting lineSegmentsIndex',e);
		}
	};
	this.lineSegmentsIndex_changed = function () {
		var value = this.lineSegmentsIndex;
		return value;
	};
	try {
		this.lineSegmentsIndex = new MFInt32();
	} catch (e) {
		console.log('Problems setting lineSegmentsIndex '+e);
		console.error('Problems setting lineSegmentsIndex',e);
	}


ecmascript:

	this.initialize = function ()
{
   for ( i=0 ; i<this.proxy.lineSegments.length ; i++)
   {
          this.proxy.lineSegments3D[i] = new SFVec3f ( this.proxy.lineSegments[i].x, this.proxy.lineSegments[i].y, 0.0 );
          this.proxy.lineSegmentsIndex[i] = i;
   }

     this.proxy.lineSegmentsIndex[i] = -1;

} // initia;

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Points2dToLineSet3d'] = function() {
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
		this.point = new MFVec2f();
	} catch (e) {
		console.log('Problems setting point '+e);
		console.error('Problems setting point',e);
	}
	this.set_points3D = function (value) {
		try {
			this.proxy.points3D = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting points3D '+e);
			console.error('Problems setting points3D',e);
		}
	};
	this.points3D_changed = function () {
		var value = this.points3D;
		return value;
	};
	try {
		this.points3D = new MFVec3f();
	} catch (e) {
		console.log('Problems setting points3D '+e);
		console.error('Problems setting points3D',e);
	}


ecmascript:

	this.initialize = function ()
{

   for ( i=0 ; i<this.proxy.point.length ; i++)
   {
          this.proxy.points3D[i] = new SFVec3f ( this.proxy.point[i].x, this.proxy.point[i].y, 0.0 );
   }

} // initia;

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Points2dToLineSet3d'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Points2dToLineSet3d']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Points2dToLineSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Points2dToLineSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Points2dToLineSet3d']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Points2dToLineSet3d']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Points2dToLineSet3d'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Points2dToLineSet3d']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Points2dToLineSet3d']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Points2dToLineSet3d'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Points2dToLineSet3d'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToFaceSet3d'] = function() {
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
		this.size = new SFVec2f();
	} catch (e) {
		console.log('Problems setting size '+e);
		console.error('Problems setting size',e);
	}
	this.set_pointSet3d = function (value) {
		try {
			this.proxy.pointSet3d = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting pointSet3d '+e);
			console.error('Problems setting pointSet3d',e);
		}
	};
	this.pointSet3d_changed = function () {
		var value = this.pointSet3d;
		return value;
	};
	try {
		this.pointSet3d = new MFVec3f();
	} catch (e) {
		console.log('Problems setting pointSet3d '+e);
		console.error('Problems setting pointSet3d',e);
	}
	this.set_fillNoFillSelection = function (value) {
		try {
			this.proxy.fillNoFillSelection = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fillNoFillSelection '+e);
			console.error('Problems setting fillNoFillSelection',e);
		}
	};
	this.fillNoFillSelection_changed = function () {
		var value = this.fillNoFillSelection;
		return value;
	};
	try {
		this.fillNoFillSelection = new SFInt32();
	} catch (e) {
		console.log('Problems setting fillNoFillSelection '+e);
		console.error('Problems setting fillNoFillSelection',e);
	}


ecmascript:

	this.initialize = function ()
{
   xDim = this.proxy.size[0];
   yDim = this.proxy.size[1];

   this.proxy.pointSet3d[0] = new SFVec3f ( (-xDim / 2.0), (yDim / 2.0), 0.0 );
   this.proxy.pointSet3d[1] = new SFVec3f ( (-xDim / 2.0), (-yDim / 2.0), 0.0 );
   this.proxy.pointSet3d[2] = new SFVec3f ( (xDim / 2.0), (-yDim / 2.0), 0.0 );
   this.proxy.pointSet3d[3] = new SFVec3f ( (xDim / 2.0), (yDim / 2.0), 0.0 );

} // initia;

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToFaceSet3d'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToFaceSet3d']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToFaceSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToFaceSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToFaceSet3d']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToFaceSet3d']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToFaceSet3d'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToFaceSet3d']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToFaceSet3d']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToFaceSet3d'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToFaceSet3d'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToLineSet3d'] = function() {
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
		this.size = new SFVec2f();
	} catch (e) {
		console.log('Problems setting size '+e);
		console.error('Problems setting size',e);
	}
	this.set_pointSet3d = function (value) {
		try {
			this.proxy.pointSet3d = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting pointSet3d '+e);
			console.error('Problems setting pointSet3d',e);
		}
	};
	this.pointSet3d_changed = function () {
		var value = this.pointSet3d;
		return value;
	};
	try {
		this.pointSet3d = new MFVec3f();
	} catch (e) {
		console.log('Problems setting pointSet3d '+e);
		console.error('Problems setting pointSet3d',e);
	}
	this.set_fillNoFillSelection = function (value) {
		try {
			this.proxy.fillNoFillSelection = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fillNoFillSelection '+e);
			console.error('Problems setting fillNoFillSelection',e);
		}
	};
	this.fillNoFillSelection_changed = function () {
		var value = this.fillNoFillSelection;
		return value;
	};
	try {
		this.fillNoFillSelection = new SFInt32();
	} catch (e) {
		console.log('Problems setting fillNoFillSelection '+e);
		console.error('Problems setting fillNoFillSelection',e);
	}


ecmascript:

	this.initialize = function ()
{
   xDim = this.proxy.size[0];
   yDim = this.proxy.size[1];

   this.proxy.pointSet3d[0] = new SFVec3f ( (-xDim / 2.0), (yDim / 2.0), 0.0 );
   this.proxy.pointSet3d[1] = new SFVec3f ( (-xDim / 2.0), (-yDim / 2.0), 0.0 );
   this.proxy.pointSet3d[2] = new SFVec3f ( (xDim / 2.0), (-yDim / 2.0), 0.0 );
   this.proxy.pointSet3d[3] = new SFVec3f ( (xDim / 2.0), (yDim / 2.0), 0.0 );

} // initia;

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToLineSet3d'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToLineSet3d']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToLineSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToLineSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToLineSet3d']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToLineSet3d']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToLineSet3d'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToLineSet3d']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToLineSet3d']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToLineSet3d'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToLineSet3d'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'] = function() {
	this.set_vertices = function (value) {
		try {
			this.proxy.vertices = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting vertices '+e);
			console.error('Problems setting vertices',e);
		}
	};
	this.vertices_changed = function () {
		var value = this.vertices;
		return value;
	};
	try {
		this.vertices = new MFVec2f();
	} catch (e) {
		console.log('Problems setting vertices '+e);
		console.error('Problems setting vertices',e);
	}
	this.set_triangleSet3D = function (value) {
		try {
			this.proxy.triangleSet3D = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting triangleSet3D '+e);
			console.error('Problems setting triangleSet3D',e);
		}
	};
	this.triangleSet3D_changed = function () {
		var value = this.triangleSet3D;
		return value;
	};
	try {
		this.triangleSet3D = new MFVec3f();
	} catch (e) {
		console.log('Problems setting triangleSet3D '+e);
		console.error('Problems setting triangleSet3D',e);
	}
	this.set_triangleSetIndex = function (value) {
		try {
			this.proxy.triangleSetIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting triangleSetIndex '+e);
			console.error('Problems setting triangleSetIndex',e);
		}
	};
	this.triangleSetIndex_changed = function () {
		var value = this.triangleSetIndex;
		return value;
	};
	try {
		this.triangleSetIndex = new MFInt32();
	} catch (e) {
		console.log('Problems setting triangleSetIndex '+e);
		console.error('Problems setting triangleSetIndex',e);
	}


ecmascript:

	this.initialize = function ()
{
   numbOfTriangles = Math.floor(this.proxy.vertices.length/3);

   for ( i=0 ; i<3*numbOfTriangles ; i++)
   {
          this.proxy.triangleSet3D[i] = new SFVec3f ( this.proxy.vertices[i].x, this.proxy.vertices[i].y, 0.0 );
   }

   k=0;
   for (i=0; i<numbOfTriangles; i++)
   {
        this.proxy.triangleSetIndex[k] = k - i ;
        this.proxy.triangleSetIndex[k+1] = k - i + 1 ;
        this.proxy.triangleSetIndex[k+2] = k - i + 2 ;
        this.proxy.triangleSetIndex[k+3] = -1 ;

        k=k+4;
    }

} // initia;

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d']['ACTION']['arcSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d']['ACTION']['arcSet3d'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d']['ACTION']['arcSet3d'].push(function(property, value) {
		if (property === 'arcSet3d') {
			X3DJSON.nodeUtil("Scene","Arc3DPoints","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'].arcSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'].arcSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'].arcSet3d, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Arc3DPoints","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'].arcSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'].arcSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'].arcSet3d, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d']['ACTION']['arcIndexSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d']['ACTION']['arcIndexSet3d'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d']['ACTION']['arcIndexSet3d'].push(function(property, value) {
		if (property === 'arcIndexSet3d') {
			X3DJSON.nodeUtil("Scene","ArcIndexPoints","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'].arcIndexSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'].arcIndexSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'].arcIndexSet3d, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ArcIndexPoints","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'].arcIndexSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'].arcIndexSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'].arcIndexSet3d, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d']['ACTION']['arcSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d']['ACTION']['arcSet3d'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d']['ACTION']['arcSet3d'].push(function(property, value) {
		if (property === 'arcSet3d') {
			X3DJSON.nodeUtil("Scene","ArcClose2DFaceCoordinate","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'].arcSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'].arcSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'].arcSet3d, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ArcClose2DFaceCoordinate","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'].arcSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'].arcSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'].arcSet3d, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d']['ACTION']['pointIndex'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d']['ACTION']['pointIndex'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d']['ACTION']['pointIndex'].push(function(property, value) {
		if (property === 'pointIndex') {
			X3DJSON.nodeUtil("Scene","ArcPointFaceIndex","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'].pointIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'].pointIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'].pointIndex, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ArcPointFaceIndex","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'].pointIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'].pointIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'].pointIndex, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d']['ACTION']['arcSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d']['ACTION']['arcSet3d'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d']['ACTION']['arcSet3d'].push(function(property, value) {
		if (property === 'arcSet3d') {
			X3DJSON.nodeUtil("Scene","ArcClose2DLineCoordinate","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'].arcSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'].arcSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'].arcSet3d, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ArcClose2DLineCoordinate","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'].arcSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'].arcSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'].arcSet3d, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d']['ACTION']['pointIndex'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d']['ACTION']['pointIndex'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d']['ACTION']['pointIndex'].push(function(property, value) {
		if (property === 'pointIndex') {
			X3DJSON.nodeUtil("Scene","ArcPointLineIndex","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'].pointIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'].pointIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'].pointIndex, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ArcPointLineIndex","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'].pointIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'].pointIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'].pointIndex, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d']['ACTION']['circSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d']['ACTION']['circSet3d'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d']['ACTION']['circSet3d'].push(function(property, value) {
		if (property === 'circSet3d') {
			X3DJSON.nodeUtil("Scene","Circ3DPoints","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'].circSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'].circSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'].circSet3d, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Circ3DPoints","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'].circSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'].circSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'].circSet3d, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d']['ACTION']['circIndexSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d']['ACTION']['circIndexSet3d'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d']['ACTION']['circIndexSet3d'].push(function(property, value) {
		if (property === 'circIndexSet3d') {
			X3DJSON.nodeUtil("Scene","Circ3DPointsIndex","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'].circIndexSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'].circIndexSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'].circIndexSet3d, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Circ3DPointsIndex","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'].circIndexSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'].circIndexSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'].circIndexSet3d, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d']['ACTION']['diskSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d']['ACTION']['diskSet3d'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d']['ACTION']['diskSet3d'].push(function(property, value) {
		if (property === 'diskSet3d') {
			X3DJSON.nodeUtil("Scene","Disk3DPoints","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'].diskSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'].diskSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'].diskSet3d, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Disk3DPoints","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'].diskSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'].diskSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'].diskSet3d, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d']['ACTION']['diskIndexSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d']['ACTION']['diskIndexSet3d'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d']['ACTION']['diskIndexSet3d'].push(function(property, value) {
		if (property === 'diskIndexSet3d') {
			X3DJSON.nodeUtil("Scene","DiskPointsIndex","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'].diskIndexSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'].diskIndexSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'].diskIndexSet3d, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","DiskPointsIndex","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'].diskIndexSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'].diskIndexSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'].diskIndexSet3d, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d']['ACTION']['lineSegments3D'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d']['ACTION']['lineSegments3D'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d']['ACTION']['lineSegments3D'].push(function(property, value) {
		if (property === 'lineSegments3D') {
			X3DJSON.nodeUtil("Scene","LineSegments3DPoints","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'].lineSegments3D === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'].lineSegments3D() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'].lineSegments3D, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","LineSegments3DPoints","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'].lineSegments3D === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'].lineSegments3D() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'].lineSegments3D, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d']['ACTION']['lineSegmentsIndex'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d']['ACTION']['lineSegmentsIndex'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d']['ACTION']['lineSegmentsIndex'].push(function(property, value) {
		if (property === 'lineSegmentsIndex') {
			X3DJSON.nodeUtil("Scene","LinesSegmentsIndexPoints","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'].lineSegmentsIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'].lineSegmentsIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'].lineSegmentsIndex, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","LinesSegmentsIndexPoints","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'].lineSegmentsIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'].lineSegmentsIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'].lineSegmentsIndex, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Points2dToLineSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Points2dToLineSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Points2dToLineSet3d']['ACTION']['points3D'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Points2dToLineSet3d']['ACTION']['points3D'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Points2dToLineSet3d']['ACTION']['points3D'].push(function(property, value) {
		if (property === 'points3D') {
			X3DJSON.nodeUtil("Scene","Points3D","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Points2dToLineSet3d'].points3D === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Points2dToLineSet3d'].points3D() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Points2dToLineSet3d'].points3D, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Points3D","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Points2dToLineSet3d'].points3D === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Points2dToLineSet3d'].points3D() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Points2dToLineSet3d'].points3D, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToFaceSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToFaceSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToFaceSet3d']['ACTION']['pointSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToFaceSet3d']['ACTION']['pointSet3d'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToFaceSet3d']['ACTION']['pointSet3d'].push(function(property, value) {
		if (property === 'pointSet3d') {
			X3DJSON.nodeUtil("Scene","RectanglePoints","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToFaceSet3d'].pointSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToFaceSet3d'].pointSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToFaceSet3d'].pointSet3d, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RectanglePoints","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToFaceSet3d'].pointSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToFaceSet3d'].pointSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToFaceSet3d'].pointSet3d, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToLineSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToLineSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToLineSet3d']['ACTION']['pointSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToLineSet3d']['ACTION']['pointSet3d'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToLineSet3d']['ACTION']['pointSet3d'].push(function(property, value) {
		if (property === 'pointSet3d') {
			X3DJSON.nodeUtil("Scene","RectanglePointsLine","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToLineSet3d'].pointSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToLineSet3d'].pointSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToLineSet3d'].pointSet3d, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RectanglePointsLine","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToLineSet3d'].pointSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToLineSet3d'].pointSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToLineSet3d'].pointSet3d, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d']['ACTION']['triangleSet3D'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d']['ACTION']['triangleSet3D'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d']['ACTION']['triangleSet3D'].push(function(property, value) {
		if (property === 'triangleSet3D') {
			X3DJSON.nodeUtil("Scene","TriangleSet3DPoints","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'].triangleSet3D === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'].triangleSet3D() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'].triangleSet3D, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TriangleSet3DPoints","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'].triangleSet3D === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'].triangleSet3D() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'].triangleSet3D, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d']['ACTION']['triangleSetIndex'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d']['ACTION']['triangleSetIndex'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d']['ACTION']['triangleSetIndex'].push(function(property, value) {
		if (property === 'triangleSetIndex') {
			X3DJSON.nodeUtil("Scene","TriangleSetIndexPoints","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'].triangleSetIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'].triangleSetIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'].triangleSetIndex, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TriangleSetIndexPoints","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'].triangleSetIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'].triangleSetIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'].triangleSetIndex, __eventTime);
			X3DJSON.nodeUtil("Scene","Arc3DPoints","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'].arcSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'].arcSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'].arcSet3d, __eventTime);
			X3DJSON.nodeUtil("Scene","ArcIndexPoints","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'].arcIndexSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'].arcIndexSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Arc2dToFaceSet3d'].arcIndexSet3d, __eventTime);
			X3DJSON.nodeUtil("Scene","ArcClose2DFaceCoordinate","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'].arcSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'].arcSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'].arcSet3d, __eventTime);
			X3DJSON.nodeUtil("Scene","ArcPointFaceIndex","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'].pointIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'].pointIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToFaceSet3d'].pointIndex, __eventTime);
			X3DJSON.nodeUtil("Scene","ArcClose2DLineCoordinate","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'].arcSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'].arcSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'].arcSet3d, __eventTime);
			X3DJSON.nodeUtil("Scene","ArcPointLineIndex","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'].pointIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'].pointIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['ArcClose2dToLineSet3d'].pointIndex, __eventTime);
			X3DJSON.nodeUtil("Scene","Circ3DPoints","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'].circSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'].circSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'].circSet3d, __eventTime);
			X3DJSON.nodeUtil("Scene","Circ3DPointsIndex","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'].circIndexSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'].circIndexSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Circ2dToLineSet3d'].circIndexSet3d, __eventTime);
			X3DJSON.nodeUtil("Scene","Disk3DPoints","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'].diskSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'].diskSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'].diskSet3d, __eventTime);
			X3DJSON.nodeUtil("Scene","DiskPointsIndex","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'].diskIndexSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'].diskIndexSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Disk2dToFaceSet3d'].diskIndexSet3d, __eventTime);
			X3DJSON.nodeUtil("Scene","LineSegments3DPoints","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'].lineSegments3D === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'].lineSegments3D() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'].lineSegments3D, __eventTime);
			X3DJSON.nodeUtil("Scene","LinesSegmentsIndexPoints","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'].lineSegmentsIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'].lineSegmentsIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['LineSegments2dToLineSet3d'].lineSegmentsIndex, __eventTime);
			X3DJSON.nodeUtil("Scene","Points3D","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Points2dToLineSet3d'].points3D === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Points2dToLineSet3d'].points3D() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Points2dToLineSet3d'].points3D, __eventTime);
			X3DJSON.nodeUtil("Scene","RectanglePoints","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToFaceSet3d'].pointSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToFaceSet3d'].pointSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToFaceSet3d'].pointSet3d, __eventTime);
			X3DJSON.nodeUtil("Scene","RectanglePointsLine","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToLineSet3d'].pointSet3d === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToLineSet3d'].pointSet3d() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['Rect2dToLineSet3d'].pointSet3d, __eventTime);
			X3DJSON.nodeUtil("Scene","TriangleSet3DPoints","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'].triangleSet3D === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'].triangleSet3D() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'].triangleSet3D, __eventTime);
			X3DJSON.nodeUtil("Scene","TriangleSetIndexPoints","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'].triangleSetIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'].triangleSetIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/Geometry2dComponentPrototypes.json']['TriangleSet2dToLineSet3d'].triangleSetIndex, __eventTime);