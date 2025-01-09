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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'] = function() {
	this.set_pointPositionsArray = function (value) {
		try {
			this.proxy.pointPositionsArray = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting pointPositionsArray '+e);
			console.error('Problems setting pointPositionsArray',e);
		}
	};
	this.pointPositionsArray_changed = function () {
		var value = this.pointPositionsArray;
		return value;
	};
	try {
		this.pointPositionsArray = new MFVec3f();
	} catch (e) {
		console.log('Problems setting pointPositionsArray '+e);
		console.error('Problems setting pointPositionsArray',e);
	}
	this.set_pointTimesArray = function (value) {
		try {
			this.proxy.pointTimesArray = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting pointTimesArray '+e);
			console.error('Problems setting pointTimesArray',e);
		}
	};
	this.pointTimesArray_changed = function () {
		var value = this.pointTimesArray;
		return value;
	};
	try {
		this.pointTimesArray = new MFTime();
	} catch (e) {
		console.log('Problems setting pointTimesArray '+e);
		console.error('Problems setting pointTimesArray',e);
	}
	this.set_newPointPositionsArray = function (value) {
		try {
			this.proxy.newPointPositionsArray = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting newPointPositionsArray '+e);
			console.error('Problems setting newPointPositionsArray',e);
		}
	};
	this.newPointPositionsArray_changed = function () {
		var value = this.newPointPositionsArray;
		return value;
	};
	try {
		this.newPointPositionsArray = new MFVec3f();
	} catch (e) {
		console.log('Problems setting newPointPositionsArray '+e);
		console.error('Problems setting newPointPositionsArray',e);
	}
	this.set_newPointTimesArray = function (value) {
		try {
			this.proxy.newPointTimesArray = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting newPointTimesArray '+e);
			console.error('Problems setting newPointTimesArray',e);
		}
	};
	this.newPointTimesArray_changed = function () {
		var value = this.newPointTimesArray;
		return value;
	};
	try {
		this.newPointTimesArray = new MFTime();
	} catch (e) {
		console.log('Problems setting newPointTimesArray '+e);
		console.error('Problems setting newPointTimesArray',e);
	}
	this.set_lineIndex = function (value) {
		try {
			this.proxy.lineIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting lineIndex '+e);
			console.error('Problems setting lineIndex',e);
		}
	};
	this.lineIndex_changed = function () {
		var value = this.lineIndex;
		return value;
	};
	try {
		this.lineIndex = new SFInt32(1);
	} catch (e) {
		console.log('Problems setting lineIndex '+e);
		console.error('Problems setting lineIndex',e);
	}
	this.set_mappedColorPointCreator = function (value) {
		try {
			this.proxy.mappedColorPointCreator = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting mappedColorPointCreator '+e);
			console.error('Problems setting mappedColorPointCreator',e);
		}
	};
	this.mappedColorPointCreator_changed = function () {
		var value = this.mappedColorPointCreator;
		return value;
	};
	try {
		this.mappedColorPointCreator = new SFTime();
	} catch (e) {
		console.log('Problems setting mappedColorPointCreator '+e);
		console.error('Problems setting mappedColorPointCreator',e);
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
		this.index = new SFInt32(0);
	} catch (e) {
		console.log('Problems setting index '+e);
		console.error('Problems setting index',e);
	}
	this.set_completeIndex = function (value) {
		try {
			this.proxy.completeIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting completeIndex '+e);
			console.error('Problems setting completeIndex',e);
		}
	};
	this.completeIndex_changed = function () {
		var value = this.completeIndex;
		return value;
	};
	try {
		this.completeIndex = new SFInt32(0);
	} catch (e) {
		console.log('Problems setting completeIndex '+e);
		console.error('Problems setting completeIndex',e);
	}
	this.set_ConditionComplete = function (value) {
		try {
			this.proxy.ConditionComplete = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ConditionComplete '+e);
			console.error('Problems setting ConditionComplete',e);
		}
	};
	this.ConditionComplete_changed = function () {
		var value = this.ConditionComplete;
		return value;
	};
	try {
		this.ConditionComplete = new SFBool();
	} catch (e) {
		console.log('Problems setting ConditionComplete '+e);
		console.error('Problems setting ConditionComplete',e);
	}
	this.set_ActivePointSetCoordinateNode = function (value) {
		try {
			this.proxy.ActivePointSetCoordinateNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ActivePointSetCoordinateNode '+e);
			console.error('Problems setting ActivePointSetCoordinateNode',e);
		}
	};
	this.ActivePointSetCoordinateNode_changed = function () {
		var value = this.ActivePointSetCoordinateNode;
		return value;
	};
	try {
		this.ActivePointSetCoordinateNode = X3DJSON.nodeUtil("Scene","ActivePointSetCoordinateNode");
	} catch (e) {
		console.log('Problems setting ActivePointSetCoordinateNode '+e);
		console.error('Problems setting ActivePointSetCoordinateNode',e);
	}
	this.set_ActivePointSetColorNode = function (value) {
		try {
			this.proxy.ActivePointSetColorNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ActivePointSetColorNode '+e);
			console.error('Problems setting ActivePointSetColorNode',e);
		}
	};
	this.ActivePointSetColorNode_changed = function () {
		var value = this.ActivePointSetColorNode;
		return value;
	};
	try {
		this.ActivePointSetColorNode = X3DJSON.nodeUtil("Scene","ActivePointSetColorNode");
	} catch (e) {
		console.log('Problems setting ActivePointSetColorNode '+e);
		console.error('Problems setting ActivePointSetColorNode',e);
	}
	this.set_CompletePointSetCoordinateNode = function (value) {
		try {
			this.proxy.CompletePointSetCoordinateNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting CompletePointSetCoordinateNode '+e);
			console.error('Problems setting CompletePointSetCoordinateNode',e);
		}
	};
	this.CompletePointSetCoordinateNode_changed = function () {
		var value = this.CompletePointSetCoordinateNode;
		return value;
	};
	try {
		this.CompletePointSetCoordinateNode = X3DJSON.nodeUtil("Scene","CompletePointSetCoordinateNode");
	} catch (e) {
		console.log('Problems setting CompletePointSetCoordinateNode '+e);
		console.error('Problems setting CompletePointSetCoordinateNode',e);
	}
	this.set_CompletePointSetColorNode = function (value) {
		try {
			this.proxy.CompletePointSetColorNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting CompletePointSetColorNode '+e);
			console.error('Problems setting CompletePointSetColorNode',e);
		}
	};
	this.CompletePointSetColorNode_changed = function () {
		var value = this.CompletePointSetColorNode;
		return value;
	};
	try {
		this.CompletePointSetColorNode = X3DJSON.nodeUtil("Scene","CompletePointSetColorNode");
	} catch (e) {
		console.log('Problems setting CompletePointSetColorNode '+e);
		console.error('Problems setting CompletePointSetColorNode',e);
	}
	this.set_ColorMapInterpolator = function (value) {
		try {
			this.proxy.ColorMapInterpolator = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ColorMapInterpolator '+e);
			console.error('Problems setting ColorMapInterpolator',e);
		}
	};
	this.ColorMapInterpolator_changed = function () {
		var value = this.ColorMapInterpolator;
		return value;
	};
	try {
		this.ColorMapInterpolator = X3DJSON.nodeUtil("Scene","ColorMapInterpolator");
	} catch (e) {
		console.log('Problems setting ColorMapInterpolator '+e);
		console.error('Problems setting ColorMapInterpolator',e);
	}
	this.set_ColorMapInterpolatorForCompletePointsSet = function (value) {
		try {
			this.proxy.ColorMapInterpolatorForCompletePointsSet = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ColorMapInterpolatorForCompletePointsSet '+e);
			console.error('Problems setting ColorMapInterpolatorForCompletePointsSet',e);
		}
	};
	this.ColorMapInterpolatorForCompletePointsSet_changed = function () {
		var value = this.ColorMapInterpolatorForCompletePointsSet;
		return value;
	};
	try {
		this.ColorMapInterpolatorForCompletePointsSet = X3DJSON.nodeUtil("Scene","ColorMapInterpolatorForCompletePointsSet");
	} catch (e) {
		console.log('Problems setting ColorMapInterpolatorForCompletePointsSet '+e);
		console.error('Problems setting ColorMapInterpolatorForCompletePointsSet',e);
	}
	this.set_ActiveLineSetCoordinateNode = function (value) {
		try {
			this.proxy.ActiveLineSetCoordinateNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ActiveLineSetCoordinateNode '+e);
			console.error('Problems setting ActiveLineSetCoordinateNode',e);
		}
	};
	this.ActiveLineSetCoordinateNode_changed = function () {
		var value = this.ActiveLineSetCoordinateNode;
		return value;
	};
	try {
		this.ActiveLineSetCoordinateNode = X3DJSON.nodeUtil("Scene","ActiveLineSetCoordinateNode");
	} catch (e) {
		console.log('Problems setting ActiveLineSetCoordinateNode '+e);
		console.error('Problems setting ActiveLineSetCoordinateNode',e);
	}
	this.set_ActiveLineSetColorNode = function (value) {
		try {
			this.proxy.ActiveLineSetColorNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ActiveLineSetColorNode '+e);
			console.error('Problems setting ActiveLineSetColorNode',e);
		}
	};
	this.ActiveLineSetColorNode_changed = function () {
		var value = this.ActiveLineSetColorNode;
		return value;
	};
	try {
		this.ActiveLineSetColorNode = X3DJSON.nodeUtil("Scene","ActiveLineSetColorNode");
	} catch (e) {
		console.log('Problems setting ActiveLineSetColorNode '+e);
		console.error('Problems setting ActiveLineSetColorNode',e);
	}
	this.set_auvTransform = function (value) {
		try {
			this.proxy.auvTransform = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting auvTransform '+e);
			console.error('Problems setting auvTransform',e);
		}
	};
	this.auvTransform_changed = function () {
		var value = this.auvTransform;
		return value;
	};
	try {
		this.auvTransform = X3DJSON.nodeUtil("Scene","auvTransform");
	} catch (e) {
		console.log('Problems setting auvTransform '+e);
		console.error('Problems setting auvTransform',e);
	}
	this.set_totalDuration = function (value) {
		try {
			this.proxy.totalDuration = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting totalDuration '+e);
			console.error('Problems setting totalDuration',e);
		}
	};
	this.totalDuration_changed = function () {
		var value = this.totalDuration;
		return value;
	};
	try {
		this.totalDuration = new SFTime();
	} catch (e) {
		console.log('Problems setting totalDuration '+e);
		console.error('Problems setting totalDuration',e);
	}
	this.set_getStartTime = function (value) {
		try {
			this.proxy.getStartTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting getStartTime '+e);
			console.error('Problems setting getStartTime',e);
		}
	};
	this.getStartTime_changed = function () {
		var value = this.getStartTime;
		return value;
	};
	try {
		this.getStartTime = new SFTime();
	} catch (e) {
		console.log('Problems setting getStartTime '+e);
		console.error('Problems setting getStartTime',e);
	}
	this.set_getStopTime = function (value) {
		try {
			this.proxy.getStopTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting getStopTime '+e);
			console.error('Problems setting getStopTime',e);
		}
	};
	this.getStopTime_changed = function () {
		var value = this.getStopTime;
		return value;
	};
	try {
		this.getStopTime = new SFTime();
	} catch (e) {
		console.log('Problems setting getStopTime '+e);
		console.error('Problems setting getStopTime',e);
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
		this.coordIndex = undefined;
	} catch (e) {
		console.log('Problems setting coordIndex '+e);
		console.error('Problems setting coordIndex',e);
	}
	this.set_durationActivePoints = function (value) {
		try {
			this.proxy.durationActivePoints = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting durationActivePoints '+e);
			console.error('Problems setting durationActivePoints',e);
		}
	};
	this.durationActivePoints_changed = function () {
		var value = this.durationActivePoints;
		return value;
	};
	try {
		this.durationActivePoints = new SFTime();
	} catch (e) {
		console.log('Problems setting durationActivePoints '+e);
		console.error('Problems setting durationActivePoints',e);
	}
	this.set_timeLatestActivePoint = function (value) {
		try {
			this.proxy.timeLatestActivePoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting timeLatestActivePoint '+e);
			console.error('Problems setting timeLatestActivePoint',e);
		}
	};
	this.timeLatestActivePoint_changed = function () {
		var value = this.timeLatestActivePoint;
		return value;
	};
	try {
		this.timeLatestActivePoint = new SFTime();
	} catch (e) {
		console.log('Problems setting timeLatestActivePoint '+e);
		console.error('Problems setting timeLatestActivePoint',e);
	}
	this.set_completePointSetValue = function (value) {
		try {
			this.proxy.completePointSetValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting completePointSetValue '+e);
			console.error('Problems setting completePointSetValue',e);
		}
	};
	this.completePointSetValue_changed = function () {
		var value = this.completePointSetValue;
		return value;
	};
	try {
		this.completePointSetValue = undefined;
	} catch (e) {
		console.log('Problems setting completePointSetValue '+e);
		console.error('Problems setting completePointSetValue',e);
	}
	this.set_completePointSetColorArray = function (value) {
		try {
			this.proxy.completePointSetColorArray = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting completePointSetColorArray '+e);
			console.error('Problems setting completePointSetColorArray',e);
		}
	};
	this.completePointSetColorArray_changed = function () {
		var value = this.completePointSetColorArray;
		return value;
	};
	try {
		this.completePointSetColorArray = undefined;
	} catch (e) {
		console.log('Problems setting completePointSetColorArray '+e);
		console.error('Problems setting completePointSetColorArray',e);
	}


ecmascript:

	this.initialize = function () {
 this.proxy.totalDuration = this.proxy.pointTimesArray[this.proxy.pointTimesArray.length-1];
 var today = new Date();
 this.proxy.getStartTime = Math.round(today.getTime() / 1000);
 this.proxy.getStopTime = this.proxy.getStartTime + this.proxy.totalDuration;
 var m = 1;

 //default values for durationActivePoint and this.proxy.timeLatestActivePoint
 durationActivePoint = this.proxy.totalDuration;
 this.proxy.timeLatestActivePoint = this.proxy.pointTimesArray[this.proxy.pointTimesArray.length-1];

 if(this.proxy.timeLatestActivePoint == durationActivePoint) {
  this.proxy.newPointTimesArray = this.proxy.pointTimesArray;
  this.proxy.newPointPositionsArray = this.proxy.pointPositionsArray;
  console.error ('this.proxy.newPointTimesArray = ' + this.proxy.newPointTimesArray);
 }
 if(this.proxy.timeLatestActivePoint > durationActivePoint) {
  var firstTime = latestTime = k = 0;
  while((this.proxy.timeLatestActivePoint - durationActivePoint) != this.proxy.pointTimesArray[firstTime]) {
   firstTime++;
  }
  while(this.proxy.timeLatestActivePoint != this.proxy.pointTimesArray[latestTime]) {
   latestTime++;
  }
  for(var j = firstTime ; j <= latestTime ; j++) {
   this.proxy.newPointTimesArray[k] = this.proxy.pointTimesArray[j] - this.proxy.pointTimesArray[firstTime] + 1;
   this.proxy.newPointPositionsArray[k] = this.proxy.pointPositionsArray[j];
   k++;
  }
  console.error ('this.proxy.newPointTimesArray = ' + this.proxy.newPointTimesArray);
 }
 if(this.proxy.timeLatestActivePoint < durationActivePoint) {
  console.error ('Fatal error : this.proxy.timeLatestActivePoint < durationActivePoint !');
 }
 this.proxy.ConditionComplete = false;
}

;

	this.completePointSetValue_changed = function () {
 if(this.proxy.ConditionComplete == false && this.proxy.completeIndex <= (this.proxy.pointPositionsArray.length-1)) {
  X3DJSON.nodeUtil("Scene","ColorMapInterpolator", "orCompletePointsSet").set_fraction = - this.proxy.pointPositionsArray[this.proxy.completeIndex][1] / 100;
  console.error ('X3DJSON.nodeUtil("Scene","ColorMapInterpolator", "orCompletePointsSet").set_fraction['+this.proxy.completeIndex+ '] = ' + X3DJSON.nodeUtil("Scene","ColorMapInterpolator", "orCompletePointsSet").set_fraction);
  //need to this.initialize X3DJSON.nodeUtil("Scene","ColorMapInterpolator", "set_fraction") with the first point color otherwise the value is shifted
  this.proxy.ConditionComplete = true;
 }
}
;

	this.set_completePointSetColorArray = function (Value) {
  X3DJSON.nodeUtil("Scene","CompletePointSetColorNode", "color")[this.proxy.completeIndex] = Value;
  X3DJSON.nodeUtil("Scene","CompletePointSetCoordinateNode", "point")[this.proxy.completeIndex] = this.proxy.pointPositionsArray[this.proxy.completeIndex];
  this.proxy.completeIndex++;
  this.proxy.ConditionComplete = false;
}

;

	this.mappedColorPointCreator = function (fractionValue) {

  X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","ColorMapInterpolator", "")", "set_fraction",  - this.proxy.newPointPositionsArray[this.proxy.index][1] / 100);
  //need to this.initialize X3DJSON.nodeUtil("Scene","ColorMapInterpolator", "set_fraction") with the first point color otherwise the value is shifted

  if(Math.floor(fractionValue) == (this.proxy.newPointTimesArray[this.proxy.index] + this.proxy.getStartTime)) {
   X3DJSON.nodeUtil("Scene","ActivePointSetColorNode", "color")[this.proxy.index] = X3DJSON.nodeUtil("Scene","ColorMapInterpolator", "value_changed");
   X3DJSON.nodeUtil("Scene","ActivePointSetCoordinateNode", "point")[this.proxy.index] = this.proxy.newPointPositionsArray[this.proxy.index];
   X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","auvTransform", "")", "translation",  this.proxy.newPointPositionsArray[this.proxy.index]);
   if(this.proxy.index <= 1) {
	   X3DJSON.nodeUtil("Scene","ActiveLineSetCoordinateNode", "point")[this.proxy.index] =  this.proxy.newPointPositionsArray[this.proxy.index];
       this.proxy.coordIndex_changed[this.proxy.index] = this.proxy.index;
	   X3DJSON.nodeUtil("Scene","ActiveLineSetColorNode", "color")[this.proxy.index][0] = 1;
	   X3DJSON.nodeUtil("Scene","ActiveLineSetColorNode", "color")[this.proxy.index][1] = 1;
	   X3DJSON.nodeUtil("Scene","ActiveLineSetColorNode", "color")[this.proxy.index][2] = 1;
	   X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","auvTransform", "")", "translation",  this.proxy.newPointPositionsArray[this.proxy.index]);
	   if(this.proxy.index == 1) {
		   	 X3DJSON.nodeUtil("Scene","ActiveLineSetCoordinateNode", "point")[this.proxy.index] =  this.proxy.newPointPositionsArray[this.proxy.index];
             this.proxy.coordIndex_changed[this.proxy.index] = this.proxy.index;
             this.proxy.coordIndex_changed[this.proxy.index+1] = -1;
	         X3DJSON.nodeUtil("Scene","ActiveLineSetColorNode", "color")[this.proxy.index-1][0] = 1;
	         X3DJSON.nodeUtil("Scene","ActiveLineSetColorNode", "color")[this.proxy.index-1][1] = 0;
	         X3DJSON.nodeUtil("Scene","ActiveLineSetColorNode", "color")[this.proxy.index-1][2] = 0;
	         X3DJSON.nodeUtil("Scene","ActiveLineSetColorNode", "color")[this.proxy.index][0] = 1;
	         X3DJSON.nodeUtil("Scene","ActiveLineSetColorNode", "color")[this.proxy.index][1] = 1;
	         X3DJSON.nodeUtil("Scene","ActiveLineSetColorNode", "color")[this.proxy.index][2] = 1;
	   }
   }
   else {
	   X3DJSON.nodeUtil("Scene","ActiveLineSetCoordinateNode", "point")[this.proxy.index] =  this.proxy.newPointPositionsArray[this.proxy.index];
	   this.proxy.coordIndex_changed[this.proxy.index+this.proxy.lineIndex] = this.proxy.coordIndex_changed[this.proxy.index+this.proxy.lineIndex-2];
	   this.proxy.coordIndex_changed[this.proxy.index+this.proxy.lineIndex+1] = this.proxy.index;
	   this.proxy.coordIndex_changed[this.proxy.index+this.proxy.lineIndex+2] = -1;
	   X3DJSON.nodeUtil("Scene","ActiveLineSetColorNode", "color")[this.proxy.index-1][0] = 1;
	   X3DJSON.nodeUtil("Scene","ActiveLineSetColorNode", "color")[this.proxy.index-1][1] = 0;
	   X3DJSON.nodeUtil("Scene","ActiveLineSetColorNode", "color")[this.proxy.index-1][2] = 0;
	   X3DJSON.nodeUtil("Scene","ActiveLineSetColorNode", "color")[this.proxy.index][0] = 1;
	   X3DJSON.nodeUtil("Scene","ActiveLineSetColorNode", "color")[this.proxy.index][1] = 1;
	   X3DJSON.nodeUtil("Scene","ActiveLineSetColorNode", "color")[this.proxy.index][2] = 1;
	   this.proxy.lineIndex += 2;

   }
   //print ('X3DJSON.nodeUtil("Scene","ActivePointSetCoordinateNode", "point")[' +this.proxy.index + '][0]=' + X3DJSON.nodeUtil("Scene","ActivePointSetCoordinateNode", "point")[this.proxy.index][0]);
   //print ('X3DJSON.nodeUtil("Scene","ActivePointSetCoordinateNode", "point")[' +this.proxy.index + '][1]=' + X3DJSON.nodeUtil("Scene","ActivePointSetCoordinateNode", "point")[this.proxy.index][1]);
   //print ('X3DJSON.nodeUtil("Scene","ActivePointSetCoordinateNode", "point")[' +this.proxy.index + '][2]=' + X3DJSON.nodeUtil("Scene","ActivePointSetCoordinateNode", "point")[this.proxy.index][2]);
   this.proxy.index ++;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger'] = function() {
	this.set_debugcoordinate = function (value) {
		try {
			this.proxy.debugcoordinate = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting debugcoordinate '+e);
			console.error('Problems setting debugcoordinate',e);
		}
	};
	this.debugcoordinate_changed = function () {
		var value = this.debugcoordinate;
		return value;
	};
	try {
		this.debugcoordinate = undefined;
	} catch (e) {
		console.log('Problems setting debugcoordinate '+e);
		console.error('Problems setting debugcoordinate',e);
	}
	this.set_debugcolor = function (value) {
		try {
			this.proxy.debugcolor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting debugcolor '+e);
			console.error('Problems setting debugcolor',e);
		}
	};
	this.debugcolor_changed = function () {
		var value = this.debugcolor;
		return value;
	};
	try {
		this.debugcolor = undefined;
	} catch (e) {
		console.log('Problems setting debugcolor '+e);
		console.error('Problems setting debugcolor',e);
	}
	this.set_debugcoordinateC = function (value) {
		try {
			this.proxy.debugcoordinateC = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting debugcoordinateC '+e);
			console.error('Problems setting debugcoordinateC',e);
		}
	};
	this.debugcoordinateC_changed = function () {
		var value = this.debugcoordinateC;
		return value;
	};
	try {
		this.debugcoordinateC = undefined;
	} catch (e) {
		console.log('Problems setting debugcoordinateC '+e);
		console.error('Problems setting debugcoordinateC',e);
	}
	this.set_debugcolorC = function (value) {
		try {
			this.proxy.debugcolorC = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting debugcolorC '+e);
			console.error('Problems setting debugcolorC',e);
		}
	};
	this.debugcolorC_changed = function () {
		var value = this.debugcolorC;
		return value;
	};
	try {
		this.debugcolorC = undefined;
	} catch (e) {
		console.log('Problems setting debugcolorC '+e);
		console.error('Problems setting debugcolorC',e);
	}
	this.set_debugcoord = function (value) {
		try {
			this.proxy.debugcoord = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting debugcoord '+e);
			console.error('Problems setting debugcoord',e);
		}
	};
	this.debugcoord_changed = function () {
		var value = this.debugcoord;
		return value;
	};
	try {
		this.debugcoord = undefined;
	} catch (e) {
		console.log('Problems setting debugcoord '+e);
		console.error('Problems setting debugcoord',e);
	}
	this.set_set_debugcoordIndex = function (value) {
		try {
			this.proxy.set_debugcoordIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting set_debugcoordIndex '+e);
			console.error('Problems setting set_debugcoordIndex',e);
		}
	};
	this.set_debugcoordIndex_changed = function () {
		var value = this.set_debugcoordIndex;
		return value;
	};
	try {
		this.set_debugcoordIndex = undefined;
	} catch (e) {
		console.log('Problems setting set_debugcoordIndex '+e);
		console.error('Problems setting set_debugcoordIndex',e);
	}


ecmascript:

	this.set_debugcoordinate = function (Value) {
 console.error ('ActivePointSet : CoordinatePointArrray = ' + Value);
}
;

	this.set_debugcolor = function (Valeur) {
 console.error ('ActivePointSet : ColorPointArray = ' + Valeur);
}
;

	this.set_debugcoordinateC = function (Value) {
 console.error ('CompletePointSet : CoordinatePointArrray = ' + Value);
 console.error (' ');
}
;

	this.set_debugcolorC = function (Valeur) {
 console.error ('CompletePointSet : ColorPointArray = ' + Valeur);
}
;

	this.set_debugcoord = function (Valeur) {
 console.error ('ActiveLineSet : Coordinate.point = ' + Valeur);
 console.error (' ');
}
;

	this.set_debugcoordIndex_changed = function (Valeur) {
 console.error ('DrawPointScript : coordIndex_changed = ' + Valeur);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger'].initialize();
    if (X3DJSON.nodeUtil("Scene","CompletePointSetTimeSensor")) {
X3DJSON.nodeUtil("Scene","CompletePointSetTimeSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].completePointSetValue_changed(X3DJSON.nodeUtil("Scene","CompletePointSetTimeSensor","cycleTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].completePointSetValue_changed(X3DJSON.nodeUtil("Scene","CompletePointSetTimeSensor","cycleTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","ColorMapInterpolatorForCompletePointsSet")) {
X3DJSON.nodeUtil("Scene","ColorMapInterpolatorForCompletePointsSet").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].set_completePointSetColorArray(X3DJSON.nodeUtil("Scene","ColorMapInterpolatorForCompletePointsSet","value"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].set_completePointSetColorArray(X3DJSON.nodeUtil("Scene","ColorMapInterpolatorForCompletePointsSet","value"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript']['ACTION']['coordIndex'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript']['ACTION']['coordIndex'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript']['ACTION']['coordIndex'].push(function(property, value) {
		if (property === 'coordIndex') {
			X3DJSON.nodeUtil("Scene","ActiveLineSet","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].coordIndex_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].coordIndex_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].coordIndex, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ActiveLineSet","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].coordIndex_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].coordIndex_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].coordIndex, __eventTime);
    if (X3DJSON.nodeUtil("Scene","ActivePointSetCoordinateNode")) {
X3DJSON.nodeUtil("Scene","ActivePointSetCoordinateNode").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger'].set_debugcoordinate(X3DJSON.nodeUtil("Scene","ActivePointSetCoordinateNode","point"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger'].set_debugcoordinate(X3DJSON.nodeUtil("Scene","ActivePointSetCoordinateNode","point"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","ActivePointSetColorNode")) {
X3DJSON.nodeUtil("Scene","ActivePointSetColorNode").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger'].set_debugcolor(X3DJSON.nodeUtil("Scene","ActivePointSetColorNode","color"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger'].set_debugcolor(X3DJSON.nodeUtil("Scene","ActivePointSetColorNode","color"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","ActiveLineSetCoordinateNode")) {
X3DJSON.nodeUtil("Scene","ActiveLineSetCoordinateNode").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger'].set_debugcoord(X3DJSON.nodeUtil("Scene","ActiveLineSetCoordinateNode","point"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger'].set_debugcoord(X3DJSON.nodeUtil("Scene","ActiveLineSetCoordinateNode","point"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript']['ACTION']['coordIndex'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript']['ACTION']['coordIndex'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript']['ACTION']['coordIndex'].push(function(property, value) {
		if (property === 'coordIndex') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].coordIndex_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].coordIndex_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].coordIndex) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger'].set_debugcoordIndex_changed(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].coordIndex_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].coordIndex_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].coordIndex, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].coordIndex_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].coordIndex_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].coordIndex) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger'].set_debugcoordIndex_changed(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].coordIndex_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].coordIndex_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].coordIndex, __eventTime);
		}
    if (X3DJSON.nodeUtil("Scene","CompletePointSetCoordinateNode")) {
X3DJSON.nodeUtil("Scene","CompletePointSetCoordinateNode").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger'].set_debugcoordinateC(X3DJSON.nodeUtil("Scene","CompletePointSetCoordinateNode","point"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger'].set_debugcoordinateC(X3DJSON.nodeUtil("Scene","CompletePointSetCoordinateNode","point"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","CompletePointSetColorNode")) {
X3DJSON.nodeUtil("Scene","CompletePointSetColorNode").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger'].set_debugcolorC(X3DJSON.nodeUtil("Scene","CompletePointSetColorNode","color"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger'].set_debugcolorC(X3DJSON.nodeUtil("Scene","CompletePointSetColorNode","color"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TrackGeneratorInstance")) {
X3DJSON.nodeUtil("Scene","TrackGeneratorInstance").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TrackGeneratorInstance")) {
X3DJSON.nodeUtil("Scene","TrackGeneratorInstance").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TrackGeneratorInstance")) {
X3DJSON.nodeUtil("Scene","TrackGeneratorInstance").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","DisplayingTimer")) {
X3DJSON.nodeUtil("Scene","DisplayingTimer").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].completePointSetValue_changed(X3DJSON.nodeUtil("Scene","CompletePointSetTimeSensor","cycleTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].set_completePointSetColorArray(X3DJSON.nodeUtil("Scene","ColorMapInterpolatorForCompletePointsSet","value"), __eventTime);
			X3DJSON.nodeUtil("Scene","ActiveLineSet","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].coordIndex_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].coordIndex_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].coordIndex, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger'].set_debugcoordinate(X3DJSON.nodeUtil("Scene","ActivePointSetCoordinateNode","point"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger'].set_debugcolor(X3DJSON.nodeUtil("Scene","ActivePointSetColorNode","color"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger'].set_debugcoord(X3DJSON.nodeUtil("Scene","ActiveLineSetCoordinateNode","point"), __eventTime);
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].coordIndex_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].coordIndex_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].coordIndex) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger'].set_debugcoordIndex_changed(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].coordIndex_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].coordIndex_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['DrawPointScript'].coordIndex, __eventTime);
		}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger'].set_debugcoordinateC(X3DJSON.nodeUtil("Scene","CompletePointSetCoordinateNode","point"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/PointTrackGeneratorPrototype5.json']['Debugger'].set_debugcolorC(X3DJSON.nodeUtil("Scene","CompletePointSetColorNode","color"), __eventTime);