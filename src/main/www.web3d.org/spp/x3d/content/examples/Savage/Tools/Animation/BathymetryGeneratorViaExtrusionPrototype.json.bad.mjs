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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json']['BathymetryScript'] = function() {
	this.set_positionArray = function (value) {
		try {
			this.proxy.positionArray = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting positionArray '+e);
			console.error('Problems setting positionArray',e);
		}
	};
	this.positionArray_changed = function () {
		var value = this.positionArray;
		return value;
	};
	try {
		this.positionArray = new MFVec3f();
	} catch (e) {
		console.log('Problems setting positionArray '+e);
		console.error('Problems setting positionArray',e);
	}
	this.set_timeArray = function (value) {
		try {
			this.proxy.timeArray = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting timeArray '+e);
			console.error('Problems setting timeArray',e);
		}
	};
	this.timeArray_changed = function () {
		var value = this.timeArray;
		return value;
	};
	try {
		this.timeArray = new MFTime();
	} catch (e) {
		console.log('Problems setting timeArray '+e);
		console.error('Problems setting timeArray',e);
	}
	this.set_colorSchemeDepthRangeArray = function (value) {
		try {
			this.proxy.colorSchemeDepthRangeArray = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting colorSchemeDepthRangeArray '+e);
			console.error('Problems setting colorSchemeDepthRangeArray',e);
		}
	};
	this.colorSchemeDepthRangeArray_changed = function () {
		var value = this.colorSchemeDepthRangeArray;
		return value;
	};
	try {
		this.colorSchemeDepthRangeArray = new MFVec2f();
	} catch (e) {
		console.log('Problems setting colorSchemeDepthRangeArray '+e);
		console.error('Problems setting colorSchemeDepthRangeArray',e);
	}
	this.set_colorSchemeColorArray = function (value) {
		try {
			this.proxy.colorSchemeColorArray = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting colorSchemeColorArray '+e);
			console.error('Problems setting colorSchemeColorArray',e);
		}
	};
	this.colorSchemeColorArray_changed = function () {
		var value = this.colorSchemeColorArray;
		return value;
	};
	try {
		this.colorSchemeColorArray = new MFColor();
	} catch (e) {
		console.log('Problems setting colorSchemeColorArray '+e);
		console.error('Problems setting colorSchemeColorArray',e);
	}
	this.set_beamWidth = function (value) {
		try {
			this.proxy.beamWidth = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting beamWidth '+e);
			console.error('Problems setting beamWidth',e);
		}
	};
	this.beamWidth_changed = function () {
		var value = this.beamWidth;
		return value;
	};
	try {
		this.beamWidth = new SFFloat();
	} catch (e) {
		console.log('Problems setting beamWidth '+e);
		console.error('Problems setting beamWidth',e);
	}
	this.set_transparency = function (value) {
		try {
			this.proxy.transparency = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transparency '+e);
			console.error('Problems setting transparency',e);
		}
	};
	this.transparency_changed = function () {
		var value = this.transparency;
		return value;
	};
	try {
		this.transparency = new SFFloat();
	} catch (e) {
		console.log('Problems setting transparency '+e);
		console.error('Problems setting transparency',e);
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
		this.spine = new MFVec3f([new SFVec3f ( 0 , 0 , 0 ),new SFVec3f ( 0 , 1 , 0 )]);
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
		this.scale = new MFVec2f([new SFVec2f ( 1 , 1 )]);
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
		this.orientation = new MFRotation([new SFRotation ( 0 , 0 , 1 , 0 )]);
	} catch (e) {
		console.log('Problems setting orientation '+e);
		console.error('Problems setting orientation',e);
	}
	this.set_bathyColor = function (value) {
		try {
			this.proxy.bathyColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting bathyColor '+e);
			console.error('Problems setting bathyColor',e);
		}
	};
	this.bathyColor_changed = function () {
		var value = this.bathyColor;
		return value;
	};
	try {
		this.bathyColor = new SFColor(1,1,1);
	} catch (e) {
		console.log('Problems setting bathyColor '+e);
		console.error('Problems setting bathyColor',e);
	}
	this.set_bathyNodes = function (value) {
		try {
			this.proxy.bathyNodes = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting bathyNodes '+e);
			console.error('Problems setting bathyNodes',e);
		}
	};
	this.bathyNodes_changed = function () {
		var value = this.bathyNodes;
		return value;
	};
	try {
		this.bathyNodes = new MFNode();
	} catch (e) {
		console.log('Problems setting bathyNodes '+e);
		console.error('Problems setting bathyNodes',e);
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
	this.set_coordinate = function (value) {
		try {
			this.proxy.coordinate = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting coordinate '+e);
			console.error('Problems setting coordinate',e);
		}
	};
	this.coordinate_changed = function () {
		var value = this.coordinate;
		return value;
	};
	try {
		this.coordinate = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting coordinate '+e);
		console.error('Problems setting coordinate',e);
	}
	this.set_previousPosition = function (value) {
		try {
			this.proxy.previousPosition = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting previousPosition '+e);
			console.error('Problems setting previousPosition',e);
		}
	};
	this.previousPosition_changed = function () {
		var value = this.previousPosition;
		return value;
	};
	try {
		this.previousPosition = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting previousPosition '+e);
		console.error('Problems setting previousPosition',e);
	}
	this.set_position = function (value) {
		try {
			this.proxy.position = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting position '+e);
			console.error('Problems setting position',e);
		}
	};
	this.position_changed = function () {
		var value = this.position;
		return value;
	};
	try {
		this.position = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting position '+e);
		console.error('Problems setting position',e);
	}
	this.set_bathyNodeIndex = function (value) {
		try {
			this.proxy.bathyNodeIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting bathyNodeIndex '+e);
			console.error('Problems setting bathyNodeIndex',e);
		}
	};
	this.bathyNodeIndex_changed = function () {
		var value = this.bathyNodeIndex;
		return value;
	};
	try {
		this.bathyNodeIndex = new SFInt32(0);
	} catch (e) {
		console.log('Problems setting bathyNodeIndex '+e);
		console.error('Problems setting bathyNodeIndex',e);
	}


ecmascript:

	this.initialize = function ()
{
	this.proxy.bathyNodeIndex = 0;

	spineIndex = 0;
	this.proxy.position = this.proxy.positionArray[0];
	this.proxy.spine[spineIndex] = new SFVec3f(this.proxy.position.x, 0, this.proxy.position.z);
	this.proxy.scale[spineIndex] = new SFVec2f(1, Math.abs(this.proxy.position.y));
	spineIndex++;

	this.proxy.previousPosition = new SFVec3f(this.proxy.position.x, this.proxy.position.y, this.proxy.position.z);
	//Determine the initial depth range
	for (j = 0; j < this.proxy.colorSchemeDepthRangeArray.length; j++)
	{
		if (this.proxy.position.y >= this.proxy.colorSchemeDepthRangeArray[j].y)
			break;
	}
	currentDepthRangeIndex = j;

	for (i = 1; i < this.proxy.positionArray.length; i++)
	{			
		if (this.proxy.previousPosition.y == this.proxy.colorSchemeDepthRangeArray[currentDepthRangeIndex].y &&
		    this.proxy.positionArray[i].y != this.proxy.colorSchemeDepthRangeArray[currentDepthRangeIndex].y)
			this.terminateExtrusionSegmentWithCurrentPosition(currentDepthRangeIndex);

		//Update new this.proxy.position
		this.proxy.position = this.proxy.positionArray[i];

		//Determine the correct depth range
		if (this.proxy.position.y <= this.proxy.previousPosition.y)
		{
			for (j = currentDepthRangeIndex; j < this.proxy.colorSchemeDepthRangeArray.length; j++)
			{
				if (this.proxy.position.y >= this.proxy.colorSchemeDepthRangeArray[j].y)
					break;

				if (this.proxy.previousPosition.y != this.proxy.colorSchemeDepthRangeArray[currentDepthRangeIndex].y)
					this.terminateExtrusionSegmentWithDepthRangeBoundary(currentDepthRangeIndex);
			}
			currentDepthRangeIndex = j;
		}
		else
		{
			for (j = currentDepthRangeIndex; j > -1; j--)
			{
				if (this.proxy.position.y < this.proxy.colorSchemeDepthRangeArray[j-1].y)
					break;

				if (this.proxy.position.y > this.proxy.colorSchemeDepthRangeArray[j-1].y)
					this.terminateExtrusionSegmentWithDepthRangeBoundary(j-1);
			}
			currentDepthRangeIndex = j;
		}

		this.proxy.spine[spineIndex] = new SFVec3f(this.proxy.position.x, 0, this.proxy.position.z);
		this.proxy.scale[spineIndex] = new SFVec2f(1, Math.abs(this.proxy.position.y));
		spineIndex++;

		this.proxy.previousPosition = new SFVec3f(this.proxy.position.x, this.proxy.position.y, this.proxy.position.z);
	}
	this.terminateExtrusionSegmentWithCurrentPosition(currentDepthRangeIndex);
}
;

	this.terminateExtrusionSegmentWithDepthRangeBoundary = function (index)
{
	depthRange = this.proxy.colorSchemeDepthRangeArray[index];

	this.findCoordinate(this.proxy.previousPosition.x, this.proxy.position.x, this.proxy.previousPosition.y, this.proxy.position.y, depthRange.y);
	xPrime = this.proxy.coordinate;
	this.findCoordinate(this.proxy.previousPosition.z, this.proxy.position.z, this.proxy.previousPosition.y, this.proxy.position.y, depthRange.y);
	zPrime = this.proxy.coordinate;
	this.proxy.spine[spineIndex] = new SFVec3f(xPrime, 0, zPrime);
	this.proxy.scale[spineIndex] = new SFVec2f(1, Math.abs(depthRange.y));

	if (this.proxy.scale[this.proxy.scale.length-2].y > this.proxy.scale[this.proxy.scale.length-1].y)
		color = this.proxy.colorSchemeColorArray[index+1];
	else
		color = this.proxy.colorSchemeColorArray[index];

	this.createExtrusionShape(this.proxy.spine, this.proxy.scale, color);

	//Reset values to start the next extrustion segment
	spineIndex = 0;
	this.resetSpine();
	this.resetScale();

	//Update the current segment end as the start of the next segment
	this.proxy.spine[spineIndex] = new SFVec3f(xPrime, 0, zPrime);
	this.proxy.scale[spineIndex] = new SFVec2f(1, Math.abs(depthRange.y));
	spineIndex++;	
}
;

	this.terminateExtrusionSegmentWithCurrentPosition = function (index)
{
	if (this.proxy.scale[this.proxy.scale.length-1].y != Math.abs(this.proxy.colorSchemeDepthRangeArray[index].y))
		index--;

	if (this.proxy.scale[this.proxy.scale.length-2].y > this.proxy.scale[this.proxy.scale.length-1].y)
		color = this.proxy.colorSchemeColorArray[index+1];
	else
		color = this.proxy.colorSchemeColorArray[index];

	this.createExtrusionShape(this.proxy.spine, this.proxy.scale, color);

	//Reset values to start the next extrustion segment
	spineIndex = 0;
	this.resetSpine();
	this.resetScale();

	//Update the current segment end as the start of the next segment
	this.proxy.spine[spineIndex] = new SFVec3f(this.proxy.position.x, 0, this.proxy.position.z);
	this.proxy.scale[spineIndex] = new SFVec2f(1, Math.abs(this.proxy.position.y));
	spineIndex++;

	//Update the this.proxy.previousPosition
	this.proxy.previousPosition = new SFVec3f(this.proxy.position.x, this.proxy.position.y, this.proxy.position.z);
}
;

	this.findCoordinate = function (x1, x2, y1, y2, yPrime)
{
	this.proxy.coordinate = ((x1 - x2) / (y1 - y2)) * yPrime + ((x2*y1 - x1*y2) / (y1 - y2));
}
;

	this.createExtrusionShape = function (this.proxy.spine, this.proxy.scale, color)
{
	this.determineOrientation(this.proxy.spine);
	this.tracePrint('An extrusion is created whose this.proxy.spine is: ' + this.proxy.spine);
	this.tracePrint('and this.proxy.scale is: ' + this.proxy.scale);
	this.tracePrint('this.proxy.orientation is: ' + this.proxy.orientation);
	this.tracePrint('color is: ' + color);
	this.alwaysPrint('number of this.proxy.spine points is: ' + this.proxy.spine.length);
	this.alwaysPrint('this.proxy.orientation is: ' + this.proxy.orientation);

	//Build the VRML string
	extrusionSyntax  = 'Shape {';
	extrusionSyntax += '   appearance Appearance {' + '';
	extrusionSyntax += '      material Material {' + '';
	extrusionSyntax += '         diffuseColor ' + color + '';
	extrusionSyntax += '         this.proxy.transparency ' + this.proxy.transparency + '';
	extrusionSyntax += '      }' + '';
	extrusionSyntax += '   }' + '';
	extrusionSyntax += '   geometry Extrusion {' + '';
	extrusionSyntax += '      crossSection [' + (this.proxy.beamWidth/(-2)) + ', 1, ' + (this.proxy.beamWidth/2) + ', 1, ' + (this.proxy.beamWidth/(-2)) + ', 1]' + '';
	extrusionSyntax += '      this.proxy.scale ' + this.proxy.scale + '';
	extrusionSyntax += '      this.proxy.spine ' + this.proxy.spine + '';
	extrusionSyntax += '      this.proxy.orientation ' + this.proxy.orientation + '';
	extrusionSyntax += '      creaseAngle 1.57' + '';
	extrusionSyntax += '   }' + '';
	extrusionSyntax += '}';

	//Create Extrusion shape
	this.tracePrint (extrusionSyntax);
	bathySegment = new SFNode(extrusionSyntax);

	this.proxy.bathyNodes[this.proxy.bathyNodeIndex] = bathySegment;
	this.proxy.bathyNodeIndex++;
}
;

	this.determineOrientation = function (this.proxy.spine)
{
   previousZAxis = null;
   this.proxy.orientation = new MFRotation();
   //Special cases
   if (this.proxy.spine.length == 2)
   {
      if (this.proxy.spine[0].z == this.proxy.spine[1].z)
      {
         if (this.proxy.spine[0].x <= this.proxy.spine[1].x) //positive x direction
            this.proxy.orientation[0] = this.proxy.orientation[1] = new SFRotation(0, 1, 0, 1.57);
         else //negative x direction
            this.proxy.orientation[0] = this.proxy.orientation[1] = new SFRotation(0, 1, 0, -1.57);
      }
      else
      {
         if (this.proxy.spine[0].x == this.proxy.spine[1].x) //parallet to the z axis
            this.proxy.orientation[0] = this.proxy.orientation[1] = new SFRotation(0, 1, 0, 0);
         else
         {
            angleRadian = Math.atan((this.proxy.spine[0].x- this.proxy.spine[1].x) / (this.proxy.spine[0].z - this.proxy.spine[1].z));
//          angleRadian = Math.atan2((this.proxy.spine[0].x- this.proxy.spine[1].x), (this.proxy.spine[0].z - this.proxy.spine[1].z));

            this.proxy.orientation[0] = this.proxy.orientation[1] = new SFRotation(0, 1, 0, angleRadian);
         }
      }
      return;
   }

   for (n = 0; n < this.proxy.spine.length; n++)
   {
      //If this.proxy.spine is not closed, the Z axis used for the first this.proxy.spine point is the same as the Z axis for this.proxy.spine[1].
      //The Z axis used for the last this.proxy.spine point is the same as the Z axis for this.proxy.spine[this.proxy.spine.length - 2].   
      if (n == 0)
         si = 1;
      else if (n == (this.proxy.spine.length - 1))
         si = this.proxy.spine.length - 2;
      else
         si = n;

      zAxis = (this.proxy.spine[si+1].subtract(this.proxy.spine[si])).cross((this.proxy.spine[si-1].subtract(this.proxy.spine[si])));

      while (zAxis.x == 0 && zAxis.y == 0 && zAxis.z == 0)
      {
         if (previousZAxis == null)
         {
            ++si;
            if (si == (this.proxy.spine.length - 1)) //The entire this.proxy.spine is collinear
            {
               zAxis = new SFVec3f(1, 0, 0);
               break;
            }

            zAxis = (this.proxy.spine[si+1].subtract(this.proxy.spine[si])).cross((this.proxy.spine[si-1].subtract(this.proxy.spine[si])));
         }
         else
            zAxis = new SFVec3f(previousZAxis.x, previousZAxis.y, previousZAxis.z);
      }

      adjustedZAxis = zAxis;
      if (n == 0)
         previousZAxis = zAxis;
      else
      {
         dotProduct = zAxis.dot(previousZAxis);
         if (dotProduct < 0)
            adjustedZAxis = new SFVec3f(zAxis.multiply(-1).x, zAxis.multiply(-1).y, zAxis.multiply(-1).z);

         previousZAxis = adjustedZAxis;
      }

      zAxisNormalized = adjustedZAxis.normalize();
      theta = Math.acos(zAxisNormalized.dot(new SFVec3f(0, -1, 0)));
      if (this.proxy.spine[1].x < this.proxy.spine[0].x)
         this.proxy.orientation[n] = new SFRotation(0, -1, 0, theta);
      else
         this.proxy.orientation[n] = new SFRotation(0, 1, 0, theta);
   }
if (theta == 0)
   console.error ('rotation angle = ' + theta);
else if (theta > 1.57 && theta < 3.14)
   console.error ('rotation angle = ' + theta);
else if (theta > 3.14)
   console.error ('rotation angle = ' + theta);
}
;

	this.resetSpine = function ()
{
	this.proxy.spine = new MFVec3f();
}
;

	this.resetScale = function ()
{
	this.proxy.scale = new MFVec2f();
}
;

	this.tracePrint = function (string)
{
	if (this.proxy.traceEnabled)
		console.error ('[BathymetryGenerator] ' + string);
}
;

	this.alwaysPrint = function (string)
{
	console.error ('[BathymetryGenerator] ' + string);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json']['BathymetryScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json']['BathymetryScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json']['BathymetryScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json']['BathymetryScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json']['BathymetryScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json']['BathymetryScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json']['BathymetryScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json']['BathymetryScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json']['BathymetryScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json']['BathymetryScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json']['BathymetryScript'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json']['BathymetryScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json']['BathymetryScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json']['BathymetryScript']['ACTION']['bathyNodes'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json']['BathymetryScript']['ACTION']['bathyNodes'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json']['BathymetryScript']['ACTION']['bathyNodes'].push(function(property, value) {
		if (property === 'bathyNodes') {
			X3DJSON.nodeUtil("Scene","Bathymetry","addChildren",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json']['BathymetryScript'].bathyNodes === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json']['BathymetryScript'].bathyNodes() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json']['BathymetryScript'].bathyNodes, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Bathymetry","addChildren",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json']['BathymetryScript'].bathyNodes === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json']['BathymetryScript'].bathyNodes() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json']['BathymetryScript'].bathyNodes, __eventTime);
			X3DJSON.nodeUtil("Scene","Bathymetry","addChildren",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json']['BathymetryScript'].bathyNodes === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json']['BathymetryScript'].bathyNodes() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorViaExtrusionPrototype.json']['BathymetryScript'].bathyNodes, __eventTime);