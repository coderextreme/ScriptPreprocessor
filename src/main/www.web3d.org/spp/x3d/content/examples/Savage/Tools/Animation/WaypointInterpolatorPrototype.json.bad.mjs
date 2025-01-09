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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'] = function() {
	this.set_description = function (value) {
		try {
			this.proxy.description = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting description '+e);
			console.error('Problems setting description',e);
		}
	};
	this.description_changed = function () {
		var value = this.description;
		return value;
	};
	try {
		this.description = new SFString();
	} catch (e) {
		console.log('Problems setting description '+e);
		console.error('Problems setting description',e);
	}
	this.set_waypoints = function (value) {
		try {
			this.proxy.waypoints = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting waypoints '+e);
			console.error('Problems setting waypoints',e);
		}
	};
	this.waypoints_changed = function () {
		var value = this.waypoints;
		return value;
	};
	try {
		this.waypoints = new MFVec3f();
	} catch (e) {
		console.log('Problems setting waypoints '+e);
		console.error('Problems setting waypoints',e);
	}
	this.set_add_waypoint = function (value) {
		try {
			this.proxy.add_waypoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting add_waypoint '+e);
			console.error('Problems setting add_waypoint',e);
		}
	};
	this.add_waypoint_changed = function () {
		var value = this.add_waypoint;
		return value;
	};
	try {
		this.add_waypoint = new SFVec3f();
	} catch (e) {
		console.log('Problems setting add_waypoint '+e);
		console.error('Problems setting add_waypoint',e);
	}
	this.set_waypoints = function (value) {
		try {
			this.proxy.waypoints = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting waypoints '+e);
			console.error('Problems setting waypoints',e);
		}
	};
	this.waypoints_changed = function () {
		var value = this.waypoints;
		return value;
	};
	try {
		this.waypoints = new MFVec3f();
	} catch (e) {
		console.log('Problems setting waypoints '+e);
		console.error('Problems setting waypoints',e);
	}
	this.set_pitchUpDownForVerticalWaypoints = function (value) {
		try {
			this.proxy.pitchUpDownForVerticalWaypoints = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting pitchUpDownForVerticalWaypoints '+e);
			console.error('Problems setting pitchUpDownForVerticalWaypoints',e);
		}
	};
	this.pitchUpDownForVerticalWaypoints_changed = function () {
		var value = this.pitchUpDownForVerticalWaypoints;
		return value;
	};
	try {
		this.pitchUpDownForVerticalWaypoints = new SFBool();
	} catch (e) {
		console.log('Problems setting pitchUpDownForVerticalWaypoints '+e);
		console.error('Problems setting pitchUpDownForVerticalWaypoints',e);
	}
	this.set_legSpeeds = function (value) {
		try {
			this.proxy.legSpeeds = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting legSpeeds '+e);
			console.error('Problems setting legSpeeds',e);
		}
	};
	this.legSpeeds_changed = function () {
		var value = this.legSpeeds;
		return value;
	};
	try {
		this.legSpeeds = new MFFloat();
	} catch (e) {
		console.log('Problems setting legSpeeds '+e);
		console.error('Problems setting legSpeeds',e);
	}
	this.set_legDurations = function (value) {
		try {
			this.proxy.legDurations = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting legDurations '+e);
			console.error('Problems setting legDurations',e);
		}
	};
	this.legDurations_changed = function () {
		var value = this.legDurations;
		return value;
	};
	try {
		this.legDurations = new MFFloat();
	} catch (e) {
		console.log('Problems setting legDurations '+e);
		console.error('Problems setting legDurations',e);
	}
	this.set_defaultSpeed = function (value) {
		try {
			this.proxy.defaultSpeed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting defaultSpeed '+e);
			console.error('Problems setting defaultSpeed',e);
		}
	};
	this.defaultSpeed_changed = function () {
		var value = this.defaultSpeed;
		return value;
	};
	try {
		this.defaultSpeed = new SFFloat();
	} catch (e) {
		console.log('Problems setting defaultSpeed '+e);
		console.error('Problems setting defaultSpeed',e);
	}
	this.set_turningRate = function (value) {
		try {
			this.proxy.turningRate = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting turningRate '+e);
			console.error('Problems setting turningRate',e);
		}
	};
	this.turningRate_changed = function () {
		var value = this.turningRate;
		return value;
	};
	try {
		this.turningRate = new SFFloat();
	} catch (e) {
		console.log('Problems setting turningRate '+e);
		console.error('Problems setting turningRate',e);
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
	this.set_WaypointPI = function (value) {
		try {
			this.proxy.WaypointPI = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting WaypointPI '+e);
			console.error('Problems setting WaypointPI',e);
		}
	};
	this.WaypointPI_changed = function () {
		var value = this.WaypointPI;
		return value;
	};
	try {
		this.WaypointPI = X3DJSON.nodeUtil("Scene","WaypointPI.instance");
	} catch (e) {
		console.log('Problems setting WaypointPI '+e);
		console.error('Problems setting WaypointPI',e);
	}
	this.set_WaypointOI = function (value) {
		try {
			this.proxy.WaypointOI = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting WaypointOI '+e);
			console.error('Problems setting WaypointOI',e);
		}
	};
	this.WaypointOI_changed = function () {
		var value = this.WaypointOI;
		return value;
	};
	try {
		this.WaypointOI = X3DJSON.nodeUtil("Scene","WaypointOI.instance");
	} catch (e) {
		console.log('Problems setting WaypointOI '+e);
		console.error('Problems setting WaypointOI',e);
	}
	this.set_pointIndices = function (value) {
		try {
			this.proxy.pointIndices = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting pointIndices '+e);
			console.error('Problems setting pointIndices',e);
		}
	};
	this.pointIndices_changed = function () {
		var value = this.pointIndices;
		return value;
	};
	try {
		this.pointIndices = new MFInt32();
	} catch (e) {
		console.log('Problems setting pointIndices '+e);
		console.error('Problems setting pointIndices',e);
	}
	this.set_OutputLabelsGroup = function (value) {
		try {
			this.proxy.OutputLabelsGroup = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting OutputLabelsGroup '+e);
			console.error('Problems setting OutputLabelsGroup',e);
		}
	};
	this.OutputLabelsGroup_changed = function () {
		var value = this.OutputLabelsGroup;
		return value;
	};
	try {
		this.OutputLabelsGroup = X3DJSON.nodeUtil("Scene","CoordinateLabelsAndViewpointsGroup");
	} catch (e) {
		console.log('Problems setting OutputLabelsGroup '+e);
		console.error('Problems setting OutputLabelsGroup',e);
	}
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
	this.set_highlightCoordinates = function (value) {
		try {
			this.proxy.highlightCoordinates = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting highlightCoordinates '+e);
			console.error('Problems setting highlightCoordinates',e);
		}
	};
	this.highlightCoordinates_changed = function () {
		var value = this.highlightCoordinates;
		return value;
	};
	try {
		this.highlightCoordinates = new MFVec3f();
	} catch (e) {
		console.log('Problems setting highlightCoordinates '+e);
		console.error('Problems setting highlightCoordinates',e);
	}
	this.set_heightLabel = function (value) {
		try {
			this.proxy.heightLabel = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting heightLabel '+e);
			console.error('Problems setting heightLabel',e);
		}
	};
	this.heightLabel_changed = function () {
		var value = this.heightLabel;
		return value;
	};
	try {
		this.heightLabel = new SFString();
	} catch (e) {
		console.log('Problems setting heightLabel '+e);
		console.error('Problems setting heightLabel',e);
	}
	this.set_labelDisplayMode = function (value) {
		try {
			this.proxy.labelDisplayMode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting labelDisplayMode '+e);
			console.error('Problems setting labelDisplayMode',e);
		}
	};
	this.labelDisplayMode_changed = function () {
		var value = this.labelDisplayMode;
		return value;
	};
	try {
		this.labelDisplayMode = new SFString();
	} catch (e) {
		console.log('Problems setting labelDisplayMode '+e);
		console.error('Problems setting labelDisplayMode',e);
	}
	this.set_labelOffset = function (value) {
		try {
			this.proxy.labelOffset = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting labelOffset '+e);
			console.error('Problems setting labelOffset',e);
		}
	};
	this.labelOffset_changed = function () {
		var value = this.labelOffset;
		return value;
	};
	try {
		this.labelOffset = new SFVec3f();
	} catch (e) {
		console.log('Problems setting labelOffset '+e);
		console.error('Problems setting labelOffset',e);
	}
	this.set_labelFontSize = function (value) {
		try {
			this.proxy.labelFontSize = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting labelFontSize '+e);
			console.error('Problems setting labelFontSize',e);
		}
	};
	this.labelFontSize_changed = function () {
		var value = this.labelFontSize;
		return value;
	};
	try {
		this.labelFontSize = new SFFloat();
	} catch (e) {
		console.log('Problems setting labelFontSize '+e);
		console.error('Problems setting labelFontSize',e);
	}
	this.set_labelColor = function (value) {
		try {
			this.proxy.labelColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting labelColor '+e);
			console.error('Problems setting labelColor',e);
		}
	};
	this.labelColor_changed = function () {
		var value = this.labelColor;
		return value;
	};
	try {
		this.labelColor = new SFColor();
	} catch (e) {
		console.log('Problems setting labelColor '+e);
		console.error('Problems setting labelColor',e);
	}
	this.set_labelInterpolation = function (value) {
		try {
			this.proxy.labelInterpolation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting labelInterpolation '+e);
			console.error('Problems setting labelInterpolation',e);
		}
	};
	this.labelInterpolation_changed = function () {
		var value = this.labelInterpolation;
		return value;
	};
	try {
		this.labelInterpolation = new MFString();
	} catch (e) {
		console.log('Problems setting labelInterpolation '+e);
		console.error('Problems setting labelInterpolation',e);
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
	this.set_outputInitializationComputations = function (value) {
		try {
			this.proxy.outputInitializationComputations = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting outputInitializationComputations '+e);
			console.error('Problems setting outputInitializationComputations',e);
		}
	};
	this.outputInitializationComputations_changed = function () {
		var value = this.outputInitializationComputations;
		return value;
	};
	try {
		this.outputInitializationComputations = new SFBool();
	} catch (e) {
		console.log('Problems setting outputInitializationComputations '+e);
		console.error('Problems setting outputInitializationComputations',e);
	}
	this.set_scriptError = function (value) {
		try {
			this.proxy.scriptError = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting scriptError '+e);
			console.error('Problems setting scriptError',e);
		}
	};
	this.scriptError_changed = function () {
		var value = this.scriptError;
		return value;
	};
	try {
		this.scriptError = new SFBool(false);
	} catch (e) {
		console.log('Problems setting scriptError '+e);
		console.error('Problems setting scriptError',e);
	}
	this.set_previousFractionIndex = function (value) {
		try {
			this.proxy.previousFractionIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting previousFractionIndex '+e);
			console.error('Problems setting previousFractionIndex',e);
		}
	};
	this.previousFractionIndex_changed = function () {
		var value = this.previousFractionIndex;
		return value;
	};
	try {
		this.previousFractionIndex = new SFInt32(0);
	} catch (e) {
		console.log('Problems setting previousFractionIndex '+e);
		console.error('Problems setting previousFractionIndex',e);
	}
	this.set_depthString = function (value) {
		try {
			this.proxy.depthString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting depthString '+e);
			console.error('Problems setting depthString',e);
		}
	};
	this.depthString_changed = function () {
		var value = this.depthString;
		return value;
	};
	try {
		this.depthString = new SFString();
	} catch (e) {
		console.log('Problems setting depthString '+e);
		console.error('Problems setting depthString',e);
	}
	this.set_whichRotationVersion = function (value) {
		try {
			this.proxy.whichRotationVersion = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting whichRotationVersion '+e);
			console.error('Problems setting whichRotationVersion',e);
		}
	};
	this.whichRotationVersion_changed = function () {
		var value = this.whichRotationVersion;
		return value;
	};
	try {
		this.whichRotationVersion = new SFString();
	} catch (e) {
		console.log('Problems setting whichRotationVersion '+e);
		console.error('Problems setting whichRotationVersion',e);
	}
	this.set_verticalDropLineIndices = function (value) {
		try {
			this.proxy.verticalDropLineIndices = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting verticalDropLineIndices '+e);
			console.error('Problems setting verticalDropLineIndices',e);
		}
	};
	this.verticalDropLineIndices_changed = function () {
		var value = this.verticalDropLineIndices;
		return value;
	};
	try {
		this.verticalDropLineIndices = new MFInt32();
	} catch (e) {
		console.log('Problems setting verticalDropLineIndices '+e);
		console.error('Problems setting verticalDropLineIndices',e);
	}
	this.set_verticalDropLinePoints = function (value) {
		try {
			this.proxy.verticalDropLinePoints = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting verticalDropLinePoints '+e);
			console.error('Problems setting verticalDropLinePoints',e);
		}
	};
	this.verticalDropLinePoints_changed = function () {
		var value = this.verticalDropLinePoints;
		return value;
	};
	try {
		this.verticalDropLinePoints = new MFVec3f();
	} catch (e) {
		console.log('Problems setting verticalDropLinePoints '+e);
		console.error('Problems setting verticalDropLinePoints',e);
	}
	this.set_positionKey = function (value) {
		try {
			this.proxy.positionKey = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting positionKey '+e);
			console.error('Problems setting positionKey',e);
		}
	};
	this.positionKey_changed = function () {
		var value = this.positionKey;
		return value;
	};
	try {
		this.positionKey = new MFFloat([new SFFloat ( 0 )]);
	} catch (e) {
		console.log('Problems setting positionKey '+e);
		console.error('Problems setting positionKey',e);
	}
	this.set_positionKeyValueArray = function (value) {
		try {
			this.proxy.positionKeyValueArray = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting positionKeyValueArray '+e);
			console.error('Problems setting positionKeyValueArray',e);
		}
	};
	this.positionKeyValueArray_changed = function () {
		var value = this.positionKeyValueArray;
		return value;
	};
	try {
		this.positionKeyValueArray = new MFVec3f();
	} catch (e) {
		console.log('Problems setting positionKeyValueArray '+e);
		console.error('Problems setting positionKeyValueArray',e);
	}
	this.set_finalPositionKey = function (value) {
		try {
			this.proxy.finalPositionKey = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting finalPositionKey '+e);
			console.error('Problems setting finalPositionKey',e);
		}
	};
	this.finalPositionKey_changed = function () {
		var value = this.finalPositionKey;
		return value;
	};
	try {
		this.finalPositionKey = new MFFloat();
	} catch (e) {
		console.log('Problems setting finalPositionKey '+e);
		console.error('Problems setting finalPositionKey',e);
	}
	this.set_finalPositionKeyValueArray = function (value) {
		try {
			this.proxy.finalPositionKeyValueArray = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting finalPositionKeyValueArray '+e);
			console.error('Problems setting finalPositionKeyValueArray',e);
		}
	};
	this.finalPositionKeyValueArray_changed = function () {
		var value = this.finalPositionKeyValueArray;
		return value;
	};
	try {
		this.finalPositionKeyValueArray = new MFVec3f();
	} catch (e) {
		console.log('Problems setting finalPositionKeyValueArray '+e);
		console.error('Problems setting finalPositionKeyValueArray',e);
	}
	this.set_distances = function (value) {
		try {
			this.proxy.distances = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting distances '+e);
			console.error('Problems setting distances',e);
		}
	};
	this.distances_changed = function () {
		var value = this.distances;
		return value;
	};
	try {
		this.distances = new MFFloat();
	} catch (e) {
		console.log('Problems setting distances '+e);
		console.error('Problems setting distances',e);
	}
	this.set_pointIndicesAccumulator = function (value) {
		try {
			this.proxy.pointIndicesAccumulator = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting pointIndicesAccumulator '+e);
			console.error('Problems setting pointIndicesAccumulator',e);
		}
	};
	this.pointIndicesAccumulator_changed = function () {
		var value = this.pointIndicesAccumulator;
		return value;
	};
	try {
		this.pointIndicesAccumulator = new MFInt32();
	} catch (e) {
		console.log('Problems setting pointIndicesAccumulator '+e);
		console.error('Problems setting pointIndicesAccumulator',e);
	}
	this.set_verticalDropLineIndicesAccumulator = function (value) {
		try {
			this.proxy.verticalDropLineIndicesAccumulator = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting verticalDropLineIndicesAccumulator '+e);
			console.error('Problems setting verticalDropLineIndicesAccumulator',e);
		}
	};
	this.verticalDropLineIndicesAccumulator_changed = function () {
		var value = this.verticalDropLineIndicesAccumulator;
		return value;
	};
	try {
		this.verticalDropLineIndicesAccumulator = new MFInt32();
	} catch (e) {
		console.log('Problems setting verticalDropLineIndicesAccumulator '+e);
		console.error('Problems setting verticalDropLineIndicesAccumulator',e);
	}
	this.set_verticalDropLinePointsAccumulator = function (value) {
		try {
			this.proxy.verticalDropLinePointsAccumulator = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting verticalDropLinePointsAccumulator '+e);
			console.error('Problems setting verticalDropLinePointsAccumulator',e);
		}
	};
	this.verticalDropLinePointsAccumulator_changed = function () {
		var value = this.verticalDropLinePointsAccumulator;
		return value;
	};
	try {
		this.verticalDropLinePointsAccumulator = new MFVec3f();
	} catch (e) {
		console.log('Problems setting verticalDropLinePointsAccumulator '+e);
		console.error('Problems setting verticalDropLinePointsAccumulator',e);
	}
	this.set_totalDistance = function (value) {
		try {
			this.proxy.totalDistance = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting totalDistance '+e);
			console.error('Problems setting totalDistance',e);
		}
	};
	this.totalDistance_changed = function () {
		var value = this.totalDistance;
		return value;
	};
	try {
		this.totalDistance = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting totalDistance '+e);
		console.error('Problems setting totalDistance',e);
	}
	this.set_orientations = function (value) {
		try {
			this.proxy.orientations = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting orientations '+e);
			console.error('Problems setting orientations',e);
		}
	};
	this.orientations_changed = function () {
		var value = this.orientations;
		return value;
	};
	try {
		this.orientations = new MFRotation();
	} catch (e) {
		console.log('Problems setting orientations '+e);
		console.error('Problems setting orientations',e);
	}
	this.set_dx = function (value) {
		try {
			this.proxy.dx = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting dx '+e);
			console.error('Problems setting dx',e);
		}
	};
	this.dx_changed = function () {
		var value = this.dx;
		return value;
	};
	try {
		this.dx = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting dx '+e);
		console.error('Problems setting dx',e);
	}
	this.set_dy = function (value) {
		try {
			this.proxy.dy = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting dy '+e);
			console.error('Problems setting dy',e);
		}
	};
	this.dy_changed = function () {
		var value = this.dy;
		return value;
	};
	try {
		this.dy = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting dy '+e);
		console.error('Problems setting dy',e);
	}
	this.set_dz = function (value) {
		try {
			this.proxy.dz = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting dz '+e);
			console.error('Problems setting dz',e);
		}
	};
	this.dz_changed = function () {
		var value = this.dz;
		return value;
	};
	try {
		this.dz = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting dz '+e);
		console.error('Problems setting dz',e);
	}
	this.set_legDistance = function (value) {
		try {
			this.proxy.legDistance = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting legDistance '+e);
			console.error('Problems setting legDistance',e);
		}
	};
	this.legDistance_changed = function () {
		var value = this.legDistance;
		return value;
	};
	try {
		this.legDistance = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting legDistance '+e);
		console.error('Problems setting legDistance',e);
	}
	this.set_heading = function (value) {
		try {
			this.proxy.heading = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting heading '+e);
			console.error('Problems setting heading',e);
		}
	};
	this.heading_changed = function () {
		var value = this.heading;
		return value;
	};
	try {
		this.heading = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting heading '+e);
		console.error('Problems setting heading',e);
	}
	this.set_pitchAngle = function (value) {
		try {
			this.proxy.pitchAngle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting pitchAngle '+e);
			console.error('Problems setting pitchAngle',e);
		}
	};
	this.pitchAngle_changed = function () {
		var value = this.pitchAngle;
		return value;
	};
	try {
		this.pitchAngle = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting pitchAngle '+e);
		console.error('Problems setting pitchAngle',e);
	}
	this.set_orientationKey = function (value) {
		try {
			this.proxy.orientationKey = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting orientationKey '+e);
			console.error('Problems setting orientationKey',e);
		}
	};
	this.orientationKey_changed = function () {
		var value = this.orientationKey;
		return value;
	};
	try {
		this.orientationKey = new MFFloat();
	} catch (e) {
		console.log('Problems setting orientationKey '+e);
		console.error('Problems setting orientationKey',e);
	}
	this.set_newKey = function (value) {
		try {
			this.proxy.newKey = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting newKey '+e);
			console.error('Problems setting newKey',e);
		}
	};
	this.newKey_changed = function () {
		var value = this.newKey;
		return value;
	};
	try {
		this.newKey = new MFFloat();
	} catch (e) {
		console.log('Problems setting newKey '+e);
		console.error('Problems setting newKey',e);
	}
	this.set_newKeyValue = function (value) {
		try {
			this.proxy.newKeyValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting newKeyValue '+e);
			console.error('Problems setting newKeyValue',e);
		}
	};
	this.newKeyValue_changed = function () {
		var value = this.newKeyValue;
		return value;
	};
	try {
		this.newKeyValue = new MFRotation();
	} catch (e) {
		console.log('Problems setting newKeyValue '+e);
		console.error('Problems setting newKeyValue',e);
	}
	this.set_outputChild = function (value) {
		try {
			this.proxy.outputChild = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting outputChild '+e);
			console.error('Problems setting outputChild',e);
		}
	};
	this.outputChild_changed = function () {
		var value = this.outputChild;
		return value;
	};
	try {
		this.outputChild = new MFNode();
	} catch (e) {
		console.log('Problems setting outputChild '+e);
		console.error('Problems setting outputChild',e);
	}
	this.set_rotatedVector = function (value) {
		try {
			this.proxy.rotatedVector = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rotatedVector '+e);
			console.error('Problems setting rotatedVector',e);
		}
	};
	this.rotatedVector_changed = function () {
		var value = this.rotatedVector;
		return value;
	};
	try {
		this.rotatedVector = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting rotatedVector '+e);
		console.error('Problems setting rotatedVector',e);
	}


ecmascript:

	this.tracePrint = function (outputValue)
{
	if (this.proxy.traceEnabled) this.forcePrint (outputValue);
};

	this.forcePrint = function (outputValue)
{
	// try to ensure outputValue is converted to string despite browser idiosyncracies
    outputString = outputValue.toString(); // utility functino according to spec
    if (outputString == null) outputString = outputValue; // direct cast

    console.error ('[WaypointInterpolator ' + this.proxy.description + '] ' + outputString + '');
}
;

	this.distance = function (p1, p2)
{
	return Math.sqrt (
		(p2.x - p1.x) * (p2.x - p1.x) +
		(p2.y - p1.y) * (p2.y - p1.y) +
		(p2.z - p1.z) * (p2.z - p1.z));
}
;

	this.normalize2Pi = function (angle)
{
	twoPi = 2 * Math.PI;
	x = angle;
	while (x >= twoPi) x = x - twoPi;
	while (x <  0)     x = x + twoPi;
	return x;
}
;

	this.normalizePi = function (angle)
{
	twoPi = 2 * Math.PI;
	x = angle;
	while (x >=  Math.PI) x = x - twoPi;
	while (x <  -Math.PI) x = x + twoPi;
	return x;
}
;

	this.degrees = function (angle)
{
	return angle * 180.0 / Math.PI;
}
;

	this.radians = function (theta)
{
	return theta * Math.PI / 180.0;
}
;

	this.initialize = function ()
{
	saveTrace   = this.proxy.traceEnabled;
        this.proxy.traceEnabled = true;                     // debug use
        this.proxy.outputInitializationComputations = true; // debug use

	this.proxy.scriptError = false;
	this.proxy.traceEnabled= false; // set this.proxy.traceEnabled=true for selective debug during initialization only

	this.forcePrint ('initializing new ' + this.proxy.waypoints.length + '-point WaypointInterpolator ' + this.proxy.description);
	this.tracePrint ('Browser.name       =' + Browser.name);
	this.tracePrint ('X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","WaypointPI.instance", "instance")", "key", ' + X3DJSON.nodeUtil("Scene","WaypointPI.instance", "key").toString()));
	this.tracePrint ('X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","WaypointPI.instance", "instance")", "keyValue", ' + X3DJSON.nodeUtil("Scene","WaypointPI.instance", "keyValue").toString()));

// TODO this.forcePrint ('Returning, initialization trace complete.');
// TODO return;

	this.proxy.previousFractionIndex = -1;
	this.tracePrint ('this.proxy.waypoints       =' + this.proxy.waypoints.toString());
	if ((this.proxy.waypoints.length == 2) &&
	    (this.proxy.waypoints[0].x == 0) && (this.proxy.waypoints[0].y == 0) && (this.proxy.waypoints[0].z == 0) &&
	    (this.proxy.waypoints[1].x == 0) && (this.proxy.waypoints[1].y == 0) && (this.proxy.waypoints[1].z == 0))
	{
		this.tracePrint ('[default this.proxy.waypoints, no action needed]');
		return;
	}
	if (this.proxy.waypoints.length < 2)
	{
		this.forcePrint ('*** error: insufficient this.proxy.waypoints, WaypointInterpolator ignored ***');
		this.proxy.scriptError=true;
		return;
	}
	if (	this.proxy.heightLabel.toLowerCase()!='altitude' &&
		this.proxy.heightLabel.toLowerCase()!='depth' &&
		this.proxy.heightLabel.toLowerCase()!='none')
	{
		this.forcePrint ('*** error, this.proxy.heightLabel =' + this.proxy.heightLabel + ', allowed values (none, altitude, depth) ***');
		this.proxy.heightLabel ='none';
	}

	useDefaultSpeed = false; // this.initialize booleans
	useLegSpeeds    = false;
	useLegDurations = false;

	if ((this.proxy.legSpeeds.length == 0) && (this.proxy.legDurations.length == 0)) // use this.proxy.defaultSpeed
	{
		this.tracePrint ('this.proxy.defaultSpeed    =' + this.proxy.defaultSpeed.toString() + ' meters/second');
		if (this.proxy.defaultSpeed <= 0)
		{
			this.forcePrint ('*** error, this.proxy.defaultSpeed <= 0 ***');
			this.proxy.scriptError=true;
			return;
		}
		else
		{
			useDefaultSpeed = true;
			this.tracePrint ('useDefaultSpeed = true');
		}
	}
	else if (this.proxy.legSpeeds.length > 0)
	{
		this.tracePrint ('this.proxy.legSpeeds       =' + this.proxy.legSpeeds.toString() + ' meters/second');
		if (this.proxy.legSpeeds.length != this.proxy.waypoints.length - 1)
		{
			this.forcePrint ('*** error, this.proxy.legSpeeds.length (' + this.proxy.legSpeeds.length + ' must be one less than this.proxy.waypoints.length (' + this.proxy.waypoints.length + ') ***');
			this.proxy.scriptError=true;
			return;
		}
		for (i = 0; i < this.proxy.legSpeeds.length; i++)
		{
			if (this.proxy.legSpeeds[i] <= 0)
			{
				this.forcePrint ('*** error, this.proxy.legSpeeds[' + i + '] zero or negative ***');
				this.proxy.scriptError=true;
				return;
			}
		}
		if (this.proxy.legDurations.length > 0)
			this.tracePrint ('warning: this.proxy.legDurations ignored, useLegSpeeds=true');
		else	this.tracePrint ('useLegSpeeds=true');
		useLegSpeeds=true;
	}
	else // this.proxy.legDurations.length > 0
	{
                // Xj3D X3DFieldreader.java line 1920: parse error fails to read MFTime values; PositionInterpolator.key destination uses MFFloat anyway
		this.forcePrint ('this.proxy.legDurations    =' + this.proxy.legDurations.toString() + ' seconds');
		if ((this.proxy.legDurations.length != 1) && (this.proxy.legDurations.length != this.proxy.waypoints.length - 1))
		{
			this.forcePrint ('*** error, this.proxy.legDurations.length must be one less than this.proxy.waypoints.length ***');
			this.proxy.scriptError=true;
			return;
		}
		for (i = 0; i < this.proxy.legDurations.length; i++)
		{
			if (this.proxy.legDurations[i] < 0)
			{
				this.proxy.legDurations[i] = Math.abs(this.proxy.legDurations[i]);
				this.forcePrint ('*** error, this.proxy.legDurations[' + i + ']= -' + this.proxy.legDurations[i]
					+ ' is less than zero ***');
				this.proxy.scriptError=true;
				return;
			}
			else if (this.proxy.legDurations[i] == 0)
			{
				this.forcePrint ('*** Warning, zero value encountered/ignored: ' +
				'this.proxy.legDurations[' + i + '] =' + this.proxy.legDurations[i]);
			}
		}
		this.tracePrint ('useLegDurations=true');
		useLegDurations=true;
	}
	this.proxy.positionKeyValueArray = this.proxy.waypoints;

	for (i = 0; i < (this.proxy.waypoints.length - 1); i++)
	{
		this.proxy.distances[i] = Math.sqrt (
			(this.proxy.waypoints[i+1].x - this.proxy.waypoints[i].x) * (this.proxy.waypoints[i+1].x - this.proxy.waypoints[i].x) +
			(this.proxy.waypoints[i+1].y - this.proxy.waypoints[i].y) * (this.proxy.waypoints[i+1].y - this.proxy.waypoints[i].y) +
			(this.proxy.waypoints[i+1].z - this.proxy.waypoints[i].z) * (this.proxy.waypoints[i+1].z - this.proxy.waypoints[i].z));
		this.proxy.totalDistance += this.proxy.distances[i];
		this.proxy.pointIndicesAccumulator[i]= i;
	}
	this.forcePrint ('this.proxy.distances       =' + this.proxy.distances.toString() + ' meters');
	this.forcePrint ('this.proxy.totalDistance   =' + Math.round (this.proxy.totalDistance * 10)/10 + ' meters');
	this.proxy.pointIndicesAccumulator[this.proxy.waypoints.length - 1]= this.proxy.waypoints.length - 1;
	this.proxy.pointIndicesAccumulator[this.proxy.waypoints.length]    = -1;

	for (i = 0; i < (this.proxy.waypoints.length ); i++)
	{
		this.proxy.verticalDropLineIndicesAccumulator[3*i]    = 2*i;
		this.proxy.verticalDropLineIndicesAccumulator[3*i+ 1] = 2*i + 1;
		this.proxy.verticalDropLineIndicesAccumulator[3*i+ 2] = -1;
		this.proxy.verticalDropLinePointsAccumulator[2*i]     = this.proxy.waypoints[i];
		this.proxy.verticalDropLinePointsAccumulator[2*i+1]   = new SFVec3f(this.proxy.waypoints[i].x, 0.0, this.proxy.waypoints[i].z);
	}
	this.proxy.pointIndices = this.proxy.pointIndicesAccumulator;
	this.tracePrint ('this.proxy.pointIndices    =' + this.proxy.pointIndices.toString());
	this.proxy.verticalDropLineIndices = this.proxy.verticalDropLineIndicesAccumulator;
	this.tracePrint ('this.proxy.verticalDropLineIndices  =' + this.proxy.verticalDropLineIndices.toString());
	this.proxy.verticalDropLinePoints = this.proxy.verticalDropLinePointsAccumulator;
	this.tracePrint ('this.proxy.verticalDropLinePoints =' + this.proxy.verticalDropLinePoints.toString());

	totalDurationAccumulator = 0.0;
	for (i = 0; i < (this.proxy.waypoints.length - 1); i++)
	{
		if      (useDefaultSpeed)
		{
			totalDurationAccumulator += this.proxy.distances[i] / this.proxy.defaultSpeed;
		}
		else if (useLegSpeeds)
		{
			totalDurationAccumulator += this.proxy.distances[i] / this.proxy.legSpeeds[i];
		}
		else //  useLegDurations
		{
			totalDurationAccumulator += this.proxy.legDurations[i];
		//	this.forcePrint ('this.proxy.legDurations[' + i + ']=' + this.proxy.legDurations[i]);
		//	this.forcePrint ('totalDurationAccumulator=' + totalDurationAccumulator + ' seconds');
		}
	}
	this.proxy.totalDuration = totalDurationAccumulator; // send SFTime eventOut
	hours   = Math.floor  (this.proxy.totalDuration / 3600.0); // % is modulo operator, provides remainder
	minutes = Math.floor ((this.proxy.totalDuration - hours * 3600) / 60.0);
	seconds = Math.round ((this.proxy.totalDuration - hours * 3600 - minutes * 60) * 10) / 10; // 0.1 sec resolution
	if (this.proxy.totalDuration <= 0)
	{
		this.forcePrint ('*** error:  this.proxy.totalDuration=' + this.proxy.totalDuration + ' seconds (' +
	  	  hours + ' hours,' + minutes + ' minutes,' + seconds + ' seconds)');
		this.proxy.scriptError=true;
		return;
	}
	else if (this.proxy.outputInitializationComputations)
	    	 this.forcePrint ('this.proxy.totalDuration   =' + Math.round (this.proxy.totalDuration * 10)/10 + ' seconds (' +
	  	 		hours + ' hours,' + minutes + ' minutes,' + seconds + ' seconds)');

	this.proxy.positionKey[0] = 0;
	for (i = 1; i < this.proxy.waypoints.length; i++)
	{
		if      (useDefaultSpeed)
		{
			this.proxy.positionKey[i] = i / (this.proxy.waypoints.length - 1); // simple fraction
		}
		else if (useLegSpeeds)
		{
			this.proxy.positionKey[i] = ((this.proxy.distances[i-1] / this.proxy.legSpeeds[i-1]) / this.proxy.totalDuration) + this.proxy.positionKey[i-1];
		}
		else //  useLegDurations
		{
			this.proxy.positionKey[i] = (this.proxy.legDurations[i-1] / this.proxy.totalDuration) + this.proxy.positionKey[i-1];
		}
	}
	this.proxy.positionKey[this.proxy.waypoints.length-1] = 1.0; // avoid roundup greater than 1.0

	this.tracePrint ('this.proxy.positionKey.length           =' + this.proxy.positionKey.length);
	this.tracePrint ('this.proxy.positionKey                  =' + this.proxy.positionKey.toString());
	this.tracePrint ('this.proxy.positionKeyValueArray.length =' + this.proxy.positionKeyValueArray.length);
	this.tracePrint ('this.proxy.positionKeyValueArray        =' + this.proxy.positionKeyValueArray.toString());

	// directly set event
	X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","WaypointPI.instance", "instance")", "key",  this.proxy.positionKey);
	X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","WaypointPI.instance", "instance")", "keyValue",  this.proxy.positionKeyValueArray);
	this.tracePrint ('X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","WaypointPI.instance", "instance")", "key", ' + X3DJSON.nodeUtil("Scene","WaypointPI.instance", "key").toString()));
	this.tracePrint ('X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","WaypointPI.instance", "instance")", "keyValue", ' + X3DJSON.nodeUtil("Scene","WaypointPI.instance", "keyValue").toString()));

	// ROUTE outputOnly event
 	this.proxy.finalPositionKey           = this.proxy.positionKey;
	this.proxy.finalPositionKeyValueArray = this.proxy.positionKeyValueArray;
	this.tracePrint ('this.proxy.finalPositionKey             =' + this.proxy.finalPositionKey.toString());
	this.tracePrint ('this.proxy.finalPositionKeyValueArray   =' + this.proxy.finalPositionKeyValueArray.toString());
	this.tracePrint ('X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","WaypointPI.instance", "instance")", "key", ' + X3DJSON.nodeUtil("Scene","WaypointPI.instance", "key").toString()));
	this.tracePrint ('X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","WaypointPI.instance", "instance")", "keyValue", ' + X3DJSON.nodeUtil("Scene","WaypointPI.instance", "keyValue").toString()));

	this.tracePrint ('this.proxy.pitchUpDownForVerticalWaypoints=' + this.proxy.pitchUpDownForVerticalWaypoints);

	// different approaches to orientation calculations
	this.proxy.whichRotationVersion ='FirstHeadingThenPitchStayVertical';
				//'IndependentLegOrientations';
				//'RelativeLegOrientations';
				//'FirstHeadingThenPitchStayVertical';
	this.tracePrint ('this.proxy.whichRotationVersion=' + this.proxy.whichRotationVersion);
	// SFRotation constructor for two Vector3Arrays returns rotation from first to second
	// default body axis is along X axis
        // TODO avoid changing value if normalized vector has length 0 (meaning no direction change)
        this.proxy.orientations = new MFRotation();
	this.proxy.orientations[0] = new SFRotation (new SFVec3f (1, 0, 0),
		this.proxy.waypoints[1].subtract(this.proxy.waypoints[0]).normalize()); // first leg
	this.proxy.dx = this.proxy.waypoints[1].x - this.proxy.waypoints[0].x;
	this.proxy.dy = this.proxy.waypoints[1].y - this.proxy.waypoints[0].y;
	this.proxy.dz = this.proxy.waypoints[1].z - this.proxy.waypoints[0].z;
	this.proxy.legDistance   = Math.sqrt (this.proxy.dx*this.proxy.dx + this.proxy.dy*this.proxy.dy + this.proxy.dz*this.proxy.dz);
	levelDistance = Math.sqrt (this.proxy.dx*this.proxy.dx + this.proxy.dz*this.proxy.dz);
	this.tracePrint ('this.proxy.dx=' + this.proxy.dx + ', this.proxy.dy=' + this.proxy.dy + ', this.proxy.dz=' + this.proxy.dz + ', this.proxy.legDistance=' + this.proxy.legDistance + ', levelDistance=' + levelDistance);
	this.tracePrint ('this.proxy.orientations[0] =' + this.proxy.orientations[0].toString());

	for (i = 1; i < (this.proxy.waypoints.length - 1); i++) // compute this.proxy.orientations array
	{
		this.proxy.dx = this.proxy.waypoints[i+1].x - this.proxy.waypoints[i].x;
		this.proxy.dy = this.proxy.waypoints[i+1].y - this.proxy.waypoints[i].y;
		this.proxy.dz = this.proxy.waypoints[i+1].z - this.proxy.waypoints[i].z;
		this.proxy.legDistance   = Math.sqrt (this.proxy.dx*this.proxy.dx + this.proxy.dy*this.proxy.dy + this.proxy.dz*this.proxy.dz);
		levelDistance = Math.sqrt (this.proxy.dx*this.proxy.dx + this.proxy.dz*this.proxy.dz);
		this.tracePrint ('this.proxy.dx=' + this.proxy.dx + ', this.proxy.dy=' + this.proxy.dy + ', this.proxy.dz=' + this.proxy.dz +
		', this.proxy.legDistance='   + Math.round (  this.proxy.legDistance*10)/10 +
		', levelDistance=' + Math.round (levelDistance*10)/10);

//		this.tracePrint ('this.proxy.waypoints[i  ].subtract(this.proxy.waypoints[i-1]) =' + this.proxy.waypoints[i  ].subtract(this.proxy.waypoints[i-1]).toString());
//		this.tracePrint ('this.proxy.waypoints[i+1].subtract(this.proxy.waypoints[i])   =' + this.proxy.waypoints[i+1].subtract(this.proxy.waypoints[i]).toString());
//		this.tracePrint ('dot product=' + this.proxy.waypoints[i+1].subtract(this.proxy.waypoints[i]).normalize().
//					 dot(this.proxy.waypoints[i].subtract(this.proxy.waypoints[i-1]).normalize()).toString());

		if (this.proxy.whichRotationVersion=='IndependentLegOrientations')
                {
                    this.tracePrint ('this.proxy.whichRotationVersion==IndependentLegOrientations');
                    // using constructor SFRotation (SFVec3f fromVector, SFVec3f toVector)
                    // see X3D ECMAScript binding Table 7.18 — SFRotation instance creation functinos
                    // buggy: can twist/roll unpredictably about relative-x axis
                    // apparently a CosmoPlayer bug in SFRotation constructor when pointing (-1, 0, 0)
                    // TODO test if difference vector is zero, if so maintain previous rotation
                    this.proxy.orientations[i] = new SFRotation (
                            new SFVec3f (1, 0, 0),
                            this.proxy.waypoints[i+1].subtract(this.proxy.waypoints[i]).normalize());
                }
                else if (this.proxy.whichRotationVersion=='RelativeLegOrientations')
                {
                    this.tracePrint ('this.proxy.whichRotationVersion==IndependentLegOrientations');
                    this.proxy.orientations[i] = new SFRotation (
                            this.proxy.waypoints[i  ].subtract(this.proxy.waypoints[i-1]).normalize(),
                            this.proxy.waypoints[i+1].subtract(this.proxy.waypoints[i]).normalize());
                    // orientation multiplication (i.e. composition) is order dependent
                    this.proxy.orientations[i] = this.proxy.orientations[i-1].multiply (this.proxy.orientations[i]); // relative to previous leg
                }
                else if (this.proxy.whichRotationVersion=='FirstHeadingThenPitchStayVertical')
                {
                    if ( (Math.abs(this.proxy.legDistance)   <= 0.00001) ||
                        ((Math.abs(levelDistance) <= 0.00001) && (this.proxy.pitchUpDownForVerticalWaypoints == false)))
                    {
                            this.tracePrint ('this.proxy.whichRotationVersion==FirstHeadingThenPitchStayVertical, coincident');
                            if (this.proxy.legDistance <= 0.00001)
                                    this.tracePrint ('...staying in one place');
                            else
                                    this.tracePrint ('...maintaining orientation during vertical motion');
                            this.proxy.orientations[i] = this.proxy.orientations[i-1];
                    }
                    else if (levelDistance <= 0.00001)  // pitch up/down along vertical axis
                    {
                            this.tracePrint ('this.proxy.whichRotationVersion==FirstHeadingThenPitchStayVertical, pitch up/down along vertical axis');
                            // still twisting about roll axis, unfortunately...
                            if (this.proxy.waypoints[i+1].y > this.proxy.waypoints[i].y)  // or test this.proxy.dy
                            {
                                    this.tracePrint ('...pitching up vertical axis');
                                    this.proxy.orientations[i] = new SFRotation (
                                            this.proxy.waypoints[i].subtract(this.proxy.waypoints[i-1]).normalize(),
                                            new SFVec3f (0, 1, 0));  // relative
                            }
                            else
                            {
                                    this.tracePrint ('...pitching down vertical axis');
                                    this.proxy.orientations[i] = new SFRotation (
                                            this.proxy.waypoints[i].subtract(this.proxy.waypoints[i-1]).normalize(),
                                            new SFVec3f (0, -1, 0));  // relative
                            }
                            this.proxy.orientations[i] = this.proxy.orientations[i-1].multiply (this.proxy.orientations[i]); // relative to previous leg
                    }
                    else // carefully rotate about Y axis then pitch up/down to avoid unpredictable twists/rolls
                    {
                            this.tracePrint ('this.proxy.whichRotationVersion==FirstHeadingThenPitchStayVertical, carefully rotate about Y axis etc.');
                            this.proxy.heading = Math.atan2 (this.proxy.dz, this.proxy.dx); // atan2 returns arctangent in any of 4 quadrants
                            this.proxy.orientations[i] = new SFRotation (0, 1, 0, -this.proxy.heading); // note negation
                            // can go vertical if preferred, levelDistance == 0 cases handled above
                            this.proxy.pitchAngle  = Math.atan (this.proxy.dy / levelDistance); // negative angle should pitch down, note no negation
                            // orientation multiplication (i.e. composition) is order dependent
                            // !! this is the step that causes a Cosmo/Cortona sign error !!
                            // it is due to opposite responses to multiplication order.
                            tempHold = this.proxy.orientations[i];  // not assuming that browser self-multiplication is safe
                            if (Browser.name=='CosmoPlayer') // reverse multiplication order for old browser
                                    this.proxy.orientations[i] = (new SFRotation (0, 0, 1, this.proxy.pitchAngle)).multiply (tempHold); // mod this.proxy.heading
                            else	this.proxy.orientations[i] = tempHold.multiply (new SFRotation (0, 0, 1, this.proxy.pitchAngle));   // mod this.proxy.heading
                            this.tracePrint ('this.proxy.heading='    + Math.round (this.degrees (this.proxy.heading)   *10)/10 + ' this.degrees,' +
                                       ' this.proxy.pitchAngle=' + Math.round (this.degrees (this.proxy.pitchAngle)*10)/10 + ' this.degrees');
                    }
		}
                else if      (Math.abs(this.proxy.legDistance)   <= 0.00001)
                {
                    this.tracePrint ('coincident this.proxy.waypoints, set this.proxy.orientations[' + i + '] = this.proxy.orientations[' + i-1 + ']');
                    this.proxy.orientations[i] = this.proxy.orientations[i-1];
                }
		else 
                {
                        this.forcePrint ('*** unexpected case trapped, set this.proxy.orientations[' + i + '] = this.proxy.orientations[' + i-1 + ']');
                        this.proxy.orientations[i] = this.proxy.orientations[i-1];
                }
		this.tracePrint ('this.proxy.orientations[' + i + '] =' + this.proxy.orientations[i].toString());
	}
//	this.proxy.traceEnabled = true; // debug

	// full array trace
	this.tracePrint ('this.proxy.orientations   =' + this.proxy.orientations.toString());

	if (this.proxy.orientations.length != (this.proxy.waypoints.length - 1))
	{
		this.forcePrint ('** computation error: this.proxy.orientations.length=' + this.proxy.orientations.length + ' mismatch with this.proxy.waypoints.length=' + this.proxy.waypoints.length);
	}

	if (this.proxy.turningRate < 0)
	{
		this.forcePrint ('** error:  negative value for this.proxy.turningRate illegal, making this.proxy.turningRate positive');
		this.proxy.turningRate = -this.proxy.turningRate;
	}
	this.tracePrint ('this.proxy.turningRate     =' + this.proxy.turningRate + ' this.degrees/second');

	this.proxy.orientationKey = new MFFloat ();
	this.proxy.orientationKey[0] = 0;
	for (i = 1; i < (this.proxy.waypoints.length-1); i++)
	{
		deltaAngle = this.proxy.orientations[i].multiply(this.proxy.orientations[i-1].inverse()).angle;
		deltaAngle = this.normalizePi (deltaAngle);
		turnTime = Math.abs (deltaAngle) / this.radians (this.proxy.turningRate);
		this.tracePrint ('deltaAngle[' + i + ']=' + this.degrees (deltaAngle) + ' this.degrees, turnTime=' + turnTime);

		precedingLegDuration = (this.proxy.positionKey[i]   - this.proxy.positionKey[i-1]) * this.proxy.totalDuration;
		followingLegDuration = (this.proxy.positionKey[i+1] - this.proxy.positionKey[i]  ) * this.proxy.totalDuration;
		// turn for no more than 1/3 of preceding or following leg durations, respectively
		precedingTurnKeyOffset = Math.min (turnTime/2, precedingLegDuration/3) / this.proxy.totalDuration;
		followingTurnKeyOffset = Math.min (turnTime/2, followingLegDuration/3) / this.proxy.totalDuration;
		this.tracePrint ('precedingTurnKeyOffset=' + (precedingTurnKeyOffset * this.proxy.totalDuration) + ' seconds');
		this.tracePrint ('followingTurnKeyOffset=' + (followingTurnKeyOffset * this.proxy.totalDuration) + ' seconds');

		this.proxy.orientationKey[3*i - 2] = this.proxy.positionKey[i] - precedingTurnKeyOffset;
		this.proxy.orientationKey[3*i - 1] = this.proxy.positionKey[i];
		this.proxy.orientationKey[3*i]     = this.proxy.positionKey[i] + followingTurnKeyOffset;
		if (this.proxy.orientationKey[3*i - 2] <= this.proxy.positionKey[i-1]) // interpolate preceding key if needed
		{
			this.proxy.orientationKey[3*i - 2] = this.proxy.positionKey[i-1] + ((this.proxy.positionKey[i] - this.proxy.positionKey[i-1]) * 2 / 3);
		}
		if (this.proxy.orientationKey[3*i] >= this.proxy.positionKey[i+1]) // interpolate following key if needed
		{
			this.proxy.orientationKey[3*i]     = this.proxy.positionKey[i] + ((this.proxy.positionKey[i+1] - this.proxy.positionKey[i])   * 1 / 3);
		}
		if ((this.proxy.orientationKey[3*i - 2] > this.proxy.orientationKey[3*i - 1]) || (this.proxy.orientationKey[3*i - 1] > this.proxy.orientationKey[3*i]))
		{
			this.forcePrint ('** error computing this.proxy.orientationKey [' + (3*i - 2) + '..' + (3*i) + ']');
		}
	}
	this.proxy.orientationKey[3*(this.proxy.waypoints.length-1)-2] = 1.0; // avoid roundup greater than 1
	this.tracePrint ('this.proxy.orientationKey.length =' + this.proxy.orientationKey.length);
	this.tracePrint ('this.proxy.orientationKey        =' + this.proxy.orientationKey.toString());

	//
	for (i = 2; i < (this.proxy.orientationKey.length-1); i++)
	{
	   if (this.proxy.orientationKey [i-1] > this.proxy.orientationKey [i])
		this.forcePrint ('*** error,' +
		'this.proxy.orientationKey [' + (i-1) + ']=' + this.proxy.orientationKey [i-1].toString() + ',' +
		'this.proxy.orientationKey [' + (i) + ']='   + this.proxy.orientationKey [i].toString() +
		' values are not monotonically increasing ***');
	   if ((this.proxy.orientationKey [i] < 0) || (this.proxy.orientationKey [i] > 1))
		this.forcePrint ('*** error, this.proxy.orientationKey [' + i + ']=' + this.proxy.orientationKey [i].toString() +
		' value is out of range [0..1] ***');
	}
	this.tracePrint ('check this.proxy.orientationKey complete, dynamically building orientationKeyValueArray next');
	orientationKeyValueArray = new MFRotation ();
	orientationKeyValueArray[0] = this.proxy.orientations[0];
	orientationKeyValueArray[1] = this.proxy.orientations[0];
	for (i = 1; i < (this.proxy.waypoints.length - 1); i++)
	{
	//	spherical linear interpolation (slerp) 0.5 interpolates halfway between adjacent this.proxy.orientations
		orientationKeyValueArray[3*i - 1] = this.proxy.orientations[i-1].slerp(this.proxy.orientations[i], 0.5);
		orientationKeyValueArray[3*i]     = this.proxy.orientations[i];
		orientationKeyValueArray[3*i + 1] = this.proxy.orientations[i]; // straight-line track, same orientation
	}
	this.tracePrint ('orientationKeyValueArray.length =' + orientationKeyValueArray.length);
	this.tracePrint ('orientationKeyValueArray        =' + orientationKeyValueArray.toString());

	// eliminate this.proxy.orientationKey triplicates (smaller arrays overcome CosmoPlayer overflow bug)
	this.proxy.newKey      = new MFFloat ();
	this.proxy.newKey      [0] = this.proxy.orientationKey [0];
	this.proxy.newKey      [1] = this.proxy.orientationKey [1];
	this.proxy.newKeyValue = new MFRotation ();
	this.proxy.newKeyValue [0] = orientationKeyValueArray [0];
	this.proxy.newKeyValue [1] = orientationKeyValueArray [1];
	index = 2; // keep first two this.proxy.orientations identical, index is for next value
        for (i = 2; i < (orientationKeyValueArray.length-3) ; i++)
	{
	   dotProductBA      =  orientationKeyValueArray [i-1].getAxis().dot(orientationKeyValueArray [i-2].getAxis());
	   dotProductCB      =  orientationKeyValueArray [i].getAxis().dot(orientationKeyValueArray [i-1].getAxis());
	   angleDifferenceBA = this.normalizePi(
	   	this.normalize2Pi (orientationKeyValueArray [i-1].angle) -
	   	this.normalize2Pi (orientationKeyValueArray [i-2].angle)) * 180 / Math.PI;
	   angleDifferenceCB = this.normalizePi(
	   	this.normalize2Pi (orientationKeyValueArray [i].angle) -
	   	this.normalize2Pi (orientationKeyValueArray [i-1].angle)) * 180 / Math.PI;

	   if (i < 10) // too many outputs clobbers the trace console
	   {
 	     this.tracePrint ('orientationKeyValueArray [' + (i-2) + ']=' + orientationKeyValueArray [i-2].toString());
 	     this.tracePrint ('orientationKeyValueArray [' + (i-1) + ']=' + orientationKeyValueArray [i-1].toString());
 	     this.tracePrint ('orientationKeyValueArray [' + (i  ) + ']=' + orientationKeyValueArray [i  ].toString());
	     this.tracePrint ('dotProductBA     =' + dotProductBA +     ', dotProductCB     =' + dotProductCB);
	     this.tracePrint ('angleDifferenceBA=' + angleDifferenceBA + ', angleDifferenceBC=' + angleDifferenceCB + ' this.degrees');
	   }

//         // depth check also needed!  but this.proxy.positionKey is already optimized/compressed, so how to check?
//	   if ((Math.abs (dotProductCB - 1)  < 0.01) &&
//	       (Math.abs (dotProductBA - 1)  < 0.01) &&
//	       (Math.abs (angleDifferenceCB) < 1.0 ) &&
//	       (Math.abs (angleDifferenceBA) < 1.0 ))  // this.degrees
//	   {
//		// replace key time with later value
//		this.tracePrint ('... matching this this.proxy.orientationKey time,' +
//		'updating key' + this.proxy.newKey [index-1] + ' to' + this.proxy.orientationKey [i]);
//		this.proxy.newKey      [index-1] = this.proxy.orientationKey [i];
//		// don't update orientation in order to avoid creeping matches
//	   }
//	   else
//	   {
		this.proxy.newKey      [index] = this.proxy.orientationKey [i];
		this.proxy.newKeyValue [index] = orientationKeyValueArray [i];
		index ++;
		this.tracePrint ('...  keeping this orientationKeyValue');
//	   }
	   if (this.proxy.newKey [index-2] > this.proxy.newKey [index-1])
		this.forcePrint ('*** error,' +
		'this.proxy.newKey [' + (index-2) + ']=' + this.proxy.newKey [index-2].toString() + ',' +
		'this.proxy.newKey [' + (index-1) + ']=' + this.proxy.newKey [index-1].toString() +
		' values are not monotonically increasing ***');
	   if ((this.proxy.newKey [index-1] < 0) || (this.proxy.newKey [index-1] > 1))
		this.forcePrint ('*** error, this.proxy.newKey [' + (index-1) + ']=' + this.proxy.newKey [index-1].toString() +
		' value is out of range [0..1] ***');
	}
	this.proxy.newKey      [index] = this.proxy.orientationKey [orientationKeyValueArray.length-2]; // match finals values
	this.proxy.newKeyValue [index] = orientationKeyValueArray [orientationKeyValueArray.length-2];
	index++;
	this.proxy.newKey      [index] = this.proxy.orientationKey [orientationKeyValueArray.length-1]; // match finals values
	this.proxy.newKeyValue [index] = orientationKeyValueArray [orientationKeyValueArray.length-1];
	this.tracePrint ('orientation this.proxy.newKey.length      =' + this.proxy.newKey.length);
	this.tracePrint ('orientation this.proxy.newKey             =' + this.proxy.newKey.toString());
	this.tracePrint ('orientation this.proxy.newKeyValue.length =' + this.proxy.newKeyValue.length);
	this.tracePrint ('orientation this.proxy.newKeyValue        =' + this.proxy.newKeyValue.toString());

	X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","WaypointOI.instance", "instance")", "key",  this.proxy.newKey);
	X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","WaypointOI.instance", "instance")", "keyValue",  this.proxy.newKeyValue);
	this.tracePrint ('X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","WaypointOI.instance", "instance")", "key", ' + X3DJSON.nodeUtil("Scene","WaypointOI.instance", "key").toString()));
	this.tracePrint ('X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","WaypointOI.instance", "instance")", "keyValue", ' + X3DJSON.nodeUtil("Scene","WaypointOI.instance", "keyValue").toString()));

	this.tracePrint ('this.proxy.labelDisplayMode=' + this.proxy.labelDisplayMode);
	if (this.proxy.labelDisplayMode.toLowerCase() =='this.proxy.waypoints')
	{
	  // create text labels for each waypoint
	  this.proxy.outputChild = new MFNode ();
	  outputVrmlString ='';
	  for (i = 0; i < this.proxy.waypoints.length; i++)
	  {
		textOffset = this.proxy.waypoints[i].add(this.proxy.labelOffset);
		if ((i == this.proxy.waypoints.length-1) && (this.proxy.waypoints[i].x == this.proxy.waypoints[0].x) &&
			(this.proxy.waypoints[i].y == this.proxy.waypoints[0].y) && (this.proxy.waypoints[i].z == this.proxy.waypoints[0].z))
		    // double offset for endpoint when this.proxy.waypoints are a loop
		    textOffset = textOffset.subtract(new SFVec3f (0, 3 * this.proxy.labelFontSize, 0));
		hours   = Math.floor  (this.proxy.totalDuration * this.proxy.positionKey[i] / 3600.0); // % is modulo operator, provides remainder
		minutes = Math.floor ((this.proxy.totalDuration * this.proxy.positionKey[i] - hours * 3600.0) / 60.0);
		seconds = Math.round  (this.proxy.totalDuration * this.proxy.positionKey[i] - hours * 3600.0 - minutes * 60.0);
		while (minutes >= 60)
		{
			minutes -= 60;
			hours   += 1;
		}
		while (seconds >= 60)
		{
			seconds -= 60;
			minutes += 1;
		}
		if (hours   < 10) hours   ='0' + hours;
		if (minutes < 10) minutes ='0' + minutes;
		if (seconds < 10) seconds ='0' + seconds;
		locationX =  Math.round (this.proxy.waypoints[i].x);
		depth     = -Math.round (this.proxy.waypoints[i].y * 10) / 10;
		locationZ =  Math.round (this.proxy.waypoints[i].z);
		if      (this.proxy.heightLabel.toLowerCase()=='altitude')
			this.proxy.depthString = (-depth) + ' ';
		else if (this.proxy.heightLabel.toLowerCase()=='depth')
			this.proxy.depthString = depth + ' ';
		else if (this.proxy.heightLabel.toLowerCase()=='none')
			this.proxy.depthString =' ';
		else	this.proxy.depthString =' ';
		outputVrmlString +=
			 'Transform { translation' + textOffset + ''
			+ ' children LOD { range [' + 150 * this.proxy.labelFontSize + ' ]'
			+ '  level ['
			+ '   Billboard { axisOfRotation 0 1 0 '
			+ '    children Shape {'
			+ '	geometry Text {'
			+ '	   string [ "' + hours + ':' + minutes + ':' + seconds + '"'
			+ '	            "' + locationX + ' ' + this.proxy.depthString +  locationZ + ' ' + '" ]'
			+ '	   fontStyle DEF WPIFontStyle FontStyle {'
			+ '		size' + this.proxy.labelFontSize + ''
			+ '		justify [ "MIDDLE" "MIDDLE" ]'
			+ '	   }'
			+ '	}'
			+ '	appearance DEF WPIAppearance Appearance {'
			+ '	   material Material { diffuseColor' + this.proxy.labelColor + ' }'
			+ '	}'
			+ '    }'
			+ '   }'
			+ '  WorldInfo { } ]'
			+ ' }'
			+ '}';
	  }
	  this.tracePrint ('outputVrmlString=' + outputVrmlString);

	  this.proxy.outputChild = new MFNode();
	  X3DJSON.nodeUtil("Scene","CoordinateLabelsAndViewpointsGroup", "addChildren",  this.proxy.outputChild);

//	  this.tracePrint ('X3DJSON.nodeUtil("Scene","CoordinateLabelsAndViewpointsGroup", "children", '));
//	  this.tracePrint (this.proxy.outputChild + '  ' + X3DJSON.nodeUtil("Scene","CoordinateLabelsAndViewpointsGroup", "children").toString());
	}
	else if (this.proxy.labelDisplayMode.toLowerCase() =='interpolation')
	{
		// updates occur when fraction changes
	}
	else if ((this.proxy.labelDisplayMode.toLowerCase() !='none') && (this.proxy.labelDisplayMode !=''))
	{
	  this.forcePrint ('*** illegal value this.proxy.labelDisplayMode=' + this.proxy.labelDisplayMode + ', ignored');
	}

	if (this.proxy.outputInitializationComputations)
        {
	     this.tracePrint ('initialization complete');
	     this.forcePrint ('=======================================');
        }
        this.proxy.traceEnabled = saveTrace;

} // end of ;

	this.set_fraction = function (fractionValue, timeStamp)
{
	this.tracePrint ('fractionValue=' + fractionValue);
	this.tracePrint ('this.proxy.previousFractionIndex=' + this.proxy.previousFractionIndex);
	this.tracePrint ('X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","WaypointPI.instance", "instance")", "value_changed", ' + X3DJSON.nodeUtil("Scene","WaypointPI.instance", "value_changed").toString()));
	this.tracePrint ('X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","WaypointOI.instance", "instance")", "value_changed", ' + X3DJSON.nodeUtil("Scene","WaypointOI.instance", "value_changed").toString()));

	if (this.proxy.scriptError==true)
    {
        this.tracePrint ('this.proxy.scriptError==true, no response by this.proxy.set_fraction()');
        return;
    }
	//	this.tracePrint ('X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","WaypointPI.instance", "instance")", "key", ' + X3DJSON.nodeUtil("Scene","WaypointPI.instance", "key").toString()));
	//	this.tracePrint ('X3DJSON.nodeUtil("Scene","X3DJSON.nodeUtil("Scene","WaypointPI.instance", "instance")", "keyValue", ' + X3DJSON.nodeUtil("Scene","WaypointPI.instance", "keyValue").toString()));

//	wide input range supported by interpolators,
//	usually no range check on fractionValue.
//	however WaypointInterpolator input range is [0..1], so check
	if ((fractionValue < 0) || (fractionValue > 1))
	{
		this.forcePrint ('*** error:  this.proxy.set_fraction=' + fractionValue + ' out of range [0..1], ignored');
		return;
	}

	if (this.proxy.previousFractionIndex == -1)
	{
		this.proxy.previousFractionIndex = 0; // start
		while (fractionValue >= this.proxy.positionKey[this.proxy.previousFractionIndex+1])
		{
			this.proxy.previousFractionIndex ++;
			if (this.proxy.previousFractionIndex >= this.proxy.waypoints.length - 2) break;
		}
		this.proxy.highlightCoordinates = new MFVec3f (this.proxy.waypoints[this.proxy.previousFractionIndex],
			this.proxy.waypoints[this.proxy.previousFractionIndex +1]);
		this.tracePrint ('this.proxy.highlightCoordinates=' + this.proxy.highlightCoordinates.toString());
	}
	else if (this.proxy.waypoints.length == 2)
	{
		// only one segment, no action required
	}
	else if (this.proxy.previousFractionIndex == this.proxy.waypoints.length - 2) // last leg
	{
	  if (fractionValue < this.proxy.positionKey[this.proxy.previousFractionIndex]) // looped
	  {
		this.proxy.previousFractionIndex = 0; // start
		while (fractionValue >= this.proxy.positionKey[this.proxy.previousFractionIndex+1])
		{
			this.proxy.previousFractionIndex ++;
			if (this.proxy.previousFractionIndex >= this.proxy.waypoints.length - 2) break;
		}
		this.proxy.highlightCoordinates = new MFVec3f (this.proxy.waypoints[this.proxy.previousFractionIndex],
			this.proxy.waypoints[this.proxy.previousFractionIndex +1]);
		this.tracePrint ('this.proxy.highlightCoordinates=' + this.proxy.highlightCoordinates.toString());
	  }
	}
	else if (fractionValue >= this.proxy.positionKey[this.proxy.previousFractionIndex+1])
	{
		this.proxy.previousFractionIndex++;
		while (fractionValue >= this.proxy.positionKey[this.proxy.previousFractionIndex+1])
		{
			this.proxy.previousFractionIndex ++;
			if (this.proxy.previousFractionIndex >= this.proxy.waypoints.length - 2) break;
		}
		if (this.proxy.previousFractionIndex > this.proxy.waypoints.length - 2) this.proxy.previousFractionIndex = 0;
		this.proxy.highlightCoordinates = new MFVec3f (
			this.proxy.waypoints[this.proxy.previousFractionIndex],
			this.proxy.waypoints[this.proxy.previousFractionIndex+1]);
		this.tracePrint ('this.proxy.highlightCoordinates=' + this.proxy.highlightCoordinates.toString());
	}
	// else this.proxy.previousFractionIndex ought to be OK

	if (this.proxy.labelDisplayMode =='interpolation')
	{
		hours   = Math.floor  (this.proxy.totalDuration * fractionValue / 3600.0); // % is modulo operator, provides remainder
		minutes = Math.floor ((this.proxy.totalDuration * fractionValue - hours * 3600) / 60.0);
		seconds = Math.round  (this.proxy.totalDuration * fractionValue - hours * 3600 - minutes * 60);
		while (minutes > 60)
		{
			minutes -= 60;
			hours   += 1;
		}
		while (seconds > 60)
		{
			seconds -= 60;
			minutes += 1;
		}
		if (hours   < 10) hours   ='0' + hours;
		if (minutes < 10) minutes ='0' + minutes;
		if (seconds < 10) seconds ='0' + seconds;

		// compute course and pitch
		currentAxis     = X3DJSON.nodeUtil("Scene","WaypointOI.instance", "value_changed").getAxis().normalize();
		currentRotation = X3DJSON.nodeUtil("Scene","WaypointOI.instance", "value_changed");
   //   this.forcePrint ('=====currentRotation=' + currentRotation.toString() + ', currentAxis=' + currentAxis.toString());

		this.proxy.rotatedVector = currentRotation.multVec (new SFVec3f (1, 0, 0)); // rotate x-centered body
		this.proxy.dx = this.proxy.rotatedVector.x;
		this.proxy.dy = this.proxy.rotatedVector.y;
		this.proxy.dz = this.proxy.rotatedVector.z;
		levelDistance = Math.sqrt (this.proxy.dx*this.proxy.dx + this.proxy.dz*this.proxy.dz);
		this.proxy.heading = Math.atan2 (this.proxy.dz, this.proxy.dx); // atan2 returns arctangent in any of 4 quadrants
		if (levelDistance > 0)
			this.proxy.pitchAngle =  Math.atan (this.proxy.dy / levelDistance); // negative angle should pitch down, note no negation
		else if (this.proxy.dy > 0)
			this.proxy.pitchAngle =  1.57;
		else    this.proxy.pitchAngle = -1.57;

	//	this.forcePrint ('this.proxy.rotatedVector=' + this.proxy.rotatedVector.toString());
	//	this.forcePrint ('this.proxy.heading=' + this.degrees(this.proxy.heading) + ', this.proxy.pitchAngle=' + this.degrees(this.proxy.pitchAngle));

		course = Math.round (this.normalize2Pi ( this.proxy.heading)    * 180 / Math.PI);
		pitch  = Math.round (this.normalizePi  ( this.proxy.pitchAngle) * 180 / Math.PI);
		// format angles in this.degrees
		if      (course <  10) course = '0' + '0' + course;
		else if (course < 100) course = '0' + course;

	//	this.tracePrint ('course=' + course + ', pitch=' + pitch);

		locationX =  Math.round (X3DJSON.nodeUtil("Scene","WaypointPI.instance", "value_changed").x);
		depth     = -Math.round (X3DJSON.nodeUtil("Scene","WaypointPI.instance", "value_changed").y * 10) / 10;
		locationZ =  Math.round (X3DJSON.nodeUtil("Scene","WaypointPI.instance", "value_changed").z);
		if      (this.proxy.heightLabel.toLowerCase()=='altitude')
			this.proxy.depthString =', altitude ' + (-depth) + 'm';
		else if (this.proxy.heightLabel.toLowerCase()=='depth')
			this.proxy.depthString =', depth '    + depth + 'm';
		else if (this.proxy.heightLabel.toLowerCase()=='none')
			this.proxy.depthString ='';
		else	this.proxy.depthString ='';
	  	this.proxy.labelInterpolation  = new MFString (
			this.proxy.description,
			(hours + ':' + minutes + ':' + seconds + ', course=' + course + ', pitch=' + pitch),
			('location=(' + locationX + ' ' + locationZ + this.proxy.depthString + ')'));
	//	this.tracePrint ('this.proxy.labelInterpolation=' + this.proxy.labelInterpolation);
	}
        this.tracePrint ('=====');
	return;
}
;

	this.add_waypoint = function (newWaypointsArray, timeStamp)
{
	// EcmaScript automatically increases array size
	// when setting an element one past final element
	this.proxy.waypoints[this.proxy.waypoints.length] = newWaypointsArray;

	// initialization code is complicated! so we won't try to shortcut/optimize it, instead just rerun it
	this.initialize ();
}
;

	this.set_waypoints = function (newWaypointsArray, timeStamp)
{
	this.proxy.waypoints = newWaypointsArray;
	this.initialize ();
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript']['ACTION']['finalPositionKey'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript']['ACTION']['finalPositionKey'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript']['ACTION']['finalPositionKey'].push(function(property, value) {
		if (property === 'finalPositionKey') {
			X3DJSON.nodeUtil("Scene","WaypointPI.instance","key",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].finalPositionKey === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].finalPositionKey() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].finalPositionKey, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","WaypointPI.instance","key",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].finalPositionKey === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].finalPositionKey() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].finalPositionKey, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript']['ACTION']['finalPositionKeyValueArray'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript']['ACTION']['finalPositionKeyValueArray'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript']['ACTION']['finalPositionKeyValueArray'].push(function(property, value) {
		if (property === 'finalPositionKeyValueArray') {
			X3DJSON.nodeUtil("Scene","WaypointPI.instance","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].finalPositionKeyValueArray === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].finalPositionKeyValueArray() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].finalPositionKeyValueArray, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","WaypointPI.instance","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].finalPositionKeyValueArray === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].finalPositionKeyValueArray() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].finalPositionKeyValueArray, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript']['ACTION']['verticalDropLineIndices'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript']['ACTION']['verticalDropLineIndices'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript']['ACTION']['verticalDropLineIndices'].push(function(property, value) {
		if (property === 'verticalDropLineIndices') {
			X3DJSON.nodeUtil("Scene","VerticalDropLine","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].verticalDropLineIndices === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].verticalDropLineIndices() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].verticalDropLineIndices, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","VerticalDropLine","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].verticalDropLineIndices === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].verticalDropLineIndices() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].verticalDropLineIndices, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript']['ACTION']['verticalDropLinePoints'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript']['ACTION']['verticalDropLinePoints'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript']['ACTION']['verticalDropLinePoints'].push(function(property, value) {
		if (property === 'verticalDropLinePoints') {
			X3DJSON.nodeUtil("Scene","VerticalDropLineCoordinates","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].verticalDropLinePoints === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].verticalDropLinePoints() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].verticalDropLinePoints, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","VerticalDropLineCoordinates","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].verticalDropLinePoints === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].verticalDropLinePoints() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].verticalDropLinePoints, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript']['ACTION']['highlightCoordinates'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript']['ACTION']['highlightCoordinates'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript']['ACTION']['highlightCoordinates'].push(function(property, value) {
		if (property === 'highlightCoordinates') {
			X3DJSON.nodeUtil("Scene","HighlightSegmentCoordinates","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].highlightCoordinates === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].highlightCoordinates() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].highlightCoordinates, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","HighlightSegmentCoordinates","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].highlightCoordinates === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].highlightCoordinates() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].highlightCoordinates, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript']['ACTION']['pointIndices'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript']['ACTION']['pointIndices'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript']['ACTION']['pointIndices'].push(function(property, value) {
		if (property === 'pointIndices') {
			X3DJSON.nodeUtil("Scene","WaypointLine","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].pointIndices === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].pointIndices() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].pointIndices, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","WaypointLine","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].pointIndices === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].pointIndices() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].pointIndices, __eventTime);
    if (X3DJSON.nodeUtil("Scene","WaypointPI.instance")) {
X3DJSON.nodeUtil("Scene","WaypointPI.instance").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","WaypointOI.instance")) {
X3DJSON.nodeUtil("Scene","WaypointOI.instance").addEventListener('outputchange', function(event) {
}, false);
}
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript']['ACTION']['labelInterpolation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript']['ACTION']['labelInterpolation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript']['ACTION']['labelInterpolation'].push(function(property, value) {
		if (property === 'labelInterpolation') {
			X3DJSON.nodeUtil("Scene","MovingVehicleLabelText","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].labelInterpolation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].labelInterpolation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].labelInterpolation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","MovingVehicleLabelText","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].labelInterpolation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].labelInterpolation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].labelInterpolation, __eventTime);
			X3DJSON.nodeUtil("Scene","WaypointPI.instance","key",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].finalPositionKey === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].finalPositionKey() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].finalPositionKey, __eventTime);
			X3DJSON.nodeUtil("Scene","WaypointPI.instance","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].finalPositionKeyValueArray === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].finalPositionKeyValueArray() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].finalPositionKeyValueArray, __eventTime);
			X3DJSON.nodeUtil("Scene","VerticalDropLine","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].verticalDropLineIndices === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].verticalDropLineIndices() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].verticalDropLineIndices, __eventTime);
			X3DJSON.nodeUtil("Scene","VerticalDropLineCoordinates","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].verticalDropLinePoints === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].verticalDropLinePoints() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].verticalDropLinePoints, __eventTime);
			X3DJSON.nodeUtil("Scene","HighlightSegmentCoordinates","point",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].highlightCoordinates === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].highlightCoordinates() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].highlightCoordinates, __eventTime);
			X3DJSON.nodeUtil("Scene","WaypointLine","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].pointIndices === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].pointIndices() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].pointIndices, __eventTime);
			X3DJSON.nodeUtil("Scene","MovingVehicleLabelText","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].labelInterpolation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].labelInterpolation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Animation/WaypointInterpolatorPrototype.json']['WaypointTrackScript'].labelInterpolation, __eventTime);