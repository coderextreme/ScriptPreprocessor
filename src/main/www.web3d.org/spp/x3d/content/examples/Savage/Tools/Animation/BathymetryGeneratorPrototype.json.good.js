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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'] = function() {
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
	this.set_depthRangeArray = function (value) {
		try {
			this.proxy.depthRangeArray = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting depthRangeArray '+e);
			console.error('Problems setting depthRangeArray',e);
		}
	};
	this.depthRangeArray_changed = function () {
		var value = this.depthRangeArray;
		return value;
	};
	try {
		this.depthRangeArray = new MFVec2f();
	} catch (e) {
		console.log('Problems setting depthRangeArray '+e);
		console.error('Problems setting depthRangeArray',e);
	}
	this.set_depthColorArray = function (value) {
		try {
			this.proxy.depthColorArray = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting depthColorArray '+e);
			console.error('Problems setting depthColorArray',e);
		}
	};
	this.depthColorArray_changed = function () {
		var value = this.depthColorArray;
		return value;
	};
	try {
		this.depthColorArray = new MFColor();
	} catch (e) {
		console.log('Problems setting depthColorArray '+e);
		console.error('Problems setting depthColorArray',e);
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
	this.set_bathyFaceCoordPoints = function (value) {
		try {
			this.proxy.bathyFaceCoordPoints = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting bathyFaceCoordPoints '+e);
			console.error('Problems setting bathyFaceCoordPoints',e);
		}
	};
	this.bathyFaceCoordPoints_changed = function () {
		var value = this.bathyFaceCoordPoints;
		return value;
	};
	try {
		this.bathyFaceCoordPoints = new MFVec3f();
	} catch (e) {
		console.log('Problems setting bathyFaceCoordPoints '+e);
		console.error('Problems setting bathyFaceCoordPoints',e);
	}
	this.set_bathyCoordIndex = function (value) {
		try {
			this.proxy.bathyCoordIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting bathyCoordIndex '+e);
			console.error('Problems setting bathyCoordIndex',e);
		}
	};
	this.bathyCoordIndex_changed = function () {
		var value = this.bathyCoordIndex;
		return value;
	};
	try {
		this.bathyCoordIndex = new MFInt32();
	} catch (e) {
		console.log('Problems setting bathyCoordIndex '+e);
		console.error('Problems setting bathyCoordIndex',e);
	}
	this.set_bathyFaceColorArray = function (value) {
		try {
			this.proxy.bathyFaceColorArray = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting bathyFaceColorArray '+e);
			console.error('Problems setting bathyFaceColorArray',e);
		}
	};
	this.bathyFaceColorArray_changed = function () {
		var value = this.bathyFaceColorArray;
		return value;
	};
	try {
		this.bathyFaceColorArray = new MFColor();
	} catch (e) {
		console.log('Problems setting bathyFaceColorArray '+e);
		console.error('Problems setting bathyFaceColorArray',e);
	}
	this.set_bathyColorIndex = function (value) {
		try {
			this.proxy.bathyColorIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting bathyColorIndex '+e);
			console.error('Problems setting bathyColorIndex',e);
		}
	};
	this.bathyColorIndex_changed = function () {
		var value = this.bathyColorIndex;
		return value;
	};
	try {
		this.bathyColorIndex = new MFInt32();
	} catch (e) {
		console.log('Problems setting bathyColorIndex '+e);
		console.error('Problems setting bathyColorIndex',e);
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
	this.set_dataValid = function (value) {
		try {
			this.proxy.dataValid = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting dataValid '+e);
			console.error('Problems setting dataValid',e);
		}
	};
	this.dataValid_changed = function () {
		var value = this.dataValid;
		return value;
	};
	try {
		this.dataValid = new SFBool(false);
	} catch (e) {
		console.log('Problems setting dataValid '+e);
		console.error('Problems setting dataValid',e);
	}
	this.set_color = function (value) {
		try {
			this.proxy.color = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting color '+e);
			console.error('Problems setting color',e);
		}
	};
	this.color_changed = function () {
		var value = this.color;
		return value;
	};
	try {
		this.color = new SFColor(1,1,1);
	} catch (e) {
		console.log('Problems setting color '+e);
		console.error('Problems setting color',e);
	}
	this.set_leftPoint = function (value) {
		try {
			this.proxy.leftPoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting leftPoint '+e);
			console.error('Problems setting leftPoint',e);
		}
	};
	this.leftPoint_changed = function () {
		var value = this.leftPoint;
		return value;
	};
	try {
		this.leftPoint = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting leftPoint '+e);
		console.error('Problems setting leftPoint',e);
	}
	this.set_rightPoint = function (value) {
		try {
			this.proxy.rightPoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rightPoint '+e);
			console.error('Problems setting rightPoint',e);
		}
	};
	this.rightPoint_changed = function () {
		var value = this.rightPoint;
		return value;
	};
	try {
		this.rightPoint = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting rightPoint '+e);
		console.error('Problems setting rightPoint',e);
	}


ecmascript:

	this.initialize = function ()
{
	this.proxy.dataValid = true;
	this.checkDataValidity();
	if (!this.proxy.dataValid)
		return;

	this.tracePrint('this.proxy.positionArray.length = ' + this.proxy.positionArray.length);

	coordIndex = 0;
	colorIndex = 0;
	for (i = 0; i < this.proxy.positionArray.length; i++)
	{
		//determine the this.proxy.color for every position
		this.determineFaceColor(this.proxy.positionArray[i].y)
		this.proxy.bathyFaceColorArray[colorIndex++] = this.proxy.color;

		//determine the 'this.proxy.leftPoint' for every poistion -- For the first
		//position, use the first and second position.
		if (i == 0)
		{
			this.determineLeftPoint(this.proxy.positionArray[0], this.proxy.positionArray[1]);
			this.proxy.bathyFaceCoordPoints[coordIndex++] = this.proxy.leftPoint;
			this.determineRightPoint(this.proxy.positionArray[0], this.proxy.positionArray[1]);
			this.proxy.bathyFaceCoordPoints[coordIndex++] = this.proxy.rightPoint;
		}
		else
		{
			this.determineLeftPoint(this.proxy.positionArray[i], this.proxy.positionArray[i-1]);
			this.proxy.bathyFaceCoordPoints[coordIndex++] = this.proxy.leftPoint;
			this.determineRightPoint(this.proxy.positionArray[i], this.proxy.positionArray[i-1]);
			this.proxy.bathyFaceCoordPoints[coordIndex++] = this.proxy.rightPoint;
		}
	}

	this.tracePrint('this.proxy.bathyFaceCoordPoints = ' + this.proxy.bathyFaceCoordPoints);

	j = 0;
	for (i = 0; i < (this.proxy.positionArray.length - 1); i++)
	{
		this.proxy.bathyCoordIndex[j++] = i * 2;
		this.proxy.bathyCoordIndex[j++] = i * 2 + 1;
		this.proxy.bathyCoordIndex[j++] = i * 2 + 2;
		this.proxy.bathyCoordIndex[j++] = i * 2 + 3;
		this.proxy.bathyCoordIndex[j++] = -1;

		this.proxy.bathyCoordIndex[j++] = i * 2 + 3;
		this.proxy.bathyCoordIndex[j++] = i * 2 + 2;
		this.proxy.bathyCoordIndex[j++] = i * 2 + 1;
		this.proxy.bathyCoordIndex[j++] = i * 2;
		this.proxy.bathyCoordIndex[j++] = -1;
	}

	this.tracePrint('this.proxy.bathyCoordIndex = ' + this.proxy.bathyCoordIndex);
}
;

	this.checkDataValidity = function ()
{
	if (this.proxy.depthRangeArray.length != this.proxy.depthColorArray.length)
	{
		this.alwaysPrint('<Error> colorSchemeDepthRangeArray must be the same length as colorSchemeColorArray');
		this.proxy.dataValid = false;
		return;
	}
}
;

	this.determineFaceColor = function (depth)
{
	for (j = 0; j < this.proxy.depthColorArray.length; j++)
        {
		if (depth <= this.proxy.depthRangeArray[j].x && depth >= this.proxy.depthRangeArray[j].y)
		{
			this.proxy.color = this.proxy.depthColorArray[j]
			return;
		}
        }
	this.proxy.color = null;
	return;
}
;

	this.determineLeftPoint = function (currPosition, prevPosition)
{
	deltaX = currPosition.x - prevPosition.x;
	deltaZ = currPosition.z - prevPosition.z;

	theta = Math.atan2(deltaX, deltaZ);
	this.tracePrint('theta = ' + theta);

	this.proxy.leftPoint = new SFVec3f(currPosition.x + Math.cos(theta),
	                        currPosition.y,
	                        currPosition.z - Math.sin(theta) * (this.proxy.beamWidth / 2));
}
;

	this.determineRightPoint = function (currPosition, prevPosition)
{
	deltaX = currPosition.x - prevPosition.x;
	deltaZ = currPosition.z - prevPosition.z;

	theta = Math.atan2(deltaX, deltaZ);

	this.proxy.rightPoint = new SFVec3f(currPosition.x - Math.cos(theta),
	                         currPosition.y,
	                         currPosition.z + Math.sin(theta) * (this.proxy.beamWidth / 2));
}
;

	this.alwaysPrint = function (string)
{
	console.error ('[BathymetryGeneratorPrototype] ' + string + '');
}
;

	this.tracePrint = function (string)
{
	if (this.proxy.traceEnabled)
		console.error ('[BathymetryGeneratorPrototype] ' + string + '');
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript']['ACTION']['bathyFaceCoordPoints'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript']['ACTION']['bathyFaceCoordPoints'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript']['ACTION']['bathyFaceCoordPoints'].push(function(property, value) {
		if (property === 'bathyFaceCoordPoints') {
			X3DJSON.nodeUtil("Scene","BathymetryFaceCoord","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyFaceCoordPoints === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyFaceCoordPoints() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyFaceCoordPoints, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BathymetryFaceCoord","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyFaceCoordPoints === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyFaceCoordPoints() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyFaceCoordPoints, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript']['ACTION']['bathyCoordIndex'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript']['ACTION']['bathyCoordIndex'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript']['ACTION']['bathyCoordIndex'].push(function(property, value) {
		if (property === 'bathyCoordIndex') {
			X3DJSON.nodeUtil("Scene","BathymetryFaceSet","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyCoordIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyCoordIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyCoordIndex, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BathymetryFaceSet","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyCoordIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyCoordIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyCoordIndex, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript']['ACTION']['bathyFaceColorArray'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript']['ACTION']['bathyFaceColorArray'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript']['ACTION']['bathyFaceColorArray'].push(function(property, value) {
		if (property === 'bathyFaceColorArray') {
			X3DJSON.nodeUtil("Scene","BathymetryFaceColor","color",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyFaceColorArray === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyFaceColorArray() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyFaceColorArray, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BathymetryFaceColor","color",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyFaceColorArray === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyFaceColorArray() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyFaceColorArray, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript']['ACTION']['bathyColorIndex'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript']['ACTION']['bathyColorIndex'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript']['ACTION']['bathyColorIndex'].push(function(property, value) {
		if (property === 'bathyColorIndex') {
			X3DJSON.nodeUtil("Scene","BathymetryFaceSet","colorIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyColorIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyColorIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyColorIndex, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BathymetryFaceSet","colorIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyColorIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyColorIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyColorIndex, __eventTime);
			X3DJSON.nodeUtil("Scene","BathymetryFaceCoord","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyFaceCoordPoints === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyFaceCoordPoints() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyFaceCoordPoints, __eventTime);
			X3DJSON.nodeUtil("Scene","BathymetryFaceSet","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyCoordIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyCoordIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyCoordIndex, __eventTime);
			X3DJSON.nodeUtil("Scene","BathymetryFaceColor","color",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyFaceColorArray === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyFaceColorArray() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyFaceColorArray, __eventTime);
			X3DJSON.nodeUtil("Scene","BathymetryFaceSet","colorIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyColorIndex === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyColorIndex() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/BathymetryGeneratorPrototype.json']['BathymetryScript'].bathyColorIndex, __eventTime);