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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'] = function() {
	this.set_startTransmission = function (value) {
		try {
			this.proxy.startTransmission = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startTransmission '+e);
			console.error('Problems setting startTransmission',e);
		}
	};
	this.startTransmission_changed = function () {
		var value = this.startTransmission;
		return value;
	};
	try {
		this.startTransmission = new SFBool();
	} catch (e) {
		console.log('Problems setting startTransmission '+e);
		console.error('Problems setting startTransmission',e);
	}
	this.set_startContinuousTransmissions = function (value) {
		try {
			this.proxy.startContinuousTransmissions = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startContinuousTransmissions '+e);
			console.error('Problems setting startContinuousTransmissions',e);
		}
	};
	this.startContinuousTransmissions_changed = function () {
		var value = this.startContinuousTransmissions;
		return value;
	};
	try {
		this.startContinuousTransmissions = new SFBool();
	} catch (e) {
		console.log('Problems setting startContinuousTransmissions '+e);
		console.error('Problems setting startContinuousTransmissions',e);
	}
	this.set_range = function (value) {
		try {
			this.proxy.range = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting range '+e);
			console.error('Problems setting range',e);
		}
	};
	this.range_changed = function () {
		var value = this.range;
		return value;
	};
	try {
		this.range = undefined;
	} catch (e) {
		console.log('Problems setting range '+e);
		console.error('Problems setting range',e);
	}
	this.set_defaultRange = function (value) {
		try {
			this.proxy.defaultRange = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting defaultRange '+e);
			console.error('Problems setting defaultRange',e);
		}
	};
	this.defaultRange_changed = function () {
		var value = this.defaultRange;
		return value;
	};
	try {
		this.defaultRange = new SFFloat();
	} catch (e) {
		console.log('Problems setting defaultRange '+e);
		console.error('Problems setting defaultRange',e);
	}
	this.set_transmissionPropagationSpeed = function (value) {
		try {
			this.proxy.transmissionPropagationSpeed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transmissionPropagationSpeed '+e);
			console.error('Problems setting transmissionPropagationSpeed',e);
		}
	};
	this.transmissionPropagationSpeed_changed = function () {
		var value = this.transmissionPropagationSpeed;
		return value;
	};
	try {
		this.transmissionPropagationSpeed = new SFFloat();
	} catch (e) {
		console.log('Problems setting transmissionPropagationSpeed '+e);
		console.error('Problems setting transmissionPropagationSpeed',e);
	}
	this.set_transmissionDuration = function (value) {
		try {
			this.proxy.transmissionDuration = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transmissionDuration '+e);
			console.error('Problems setting transmissionDuration',e);
		}
	};
	this.transmissionDuration_changed = function () {
		var value = this.transmissionDuration;
		return value;
	};
	try {
		this.transmissionDuration = new SFFloat();
	} catch (e) {
		console.log('Problems setting transmissionDuration '+e);
		console.error('Problems setting transmissionDuration',e);
	}
	this.set_transmissionDuration = function (value) {
		try {
			this.proxy.transmissionDuration = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting transmissionDuration '+e);
			console.error('Problems setting transmissionDuration',e);
		}
	};
	this.transmissionDuration_changed = function () {
		var value = this.transmissionDuration;
		return value;
	};
	try {
		this.transmissionDuration = new SFFloat();
	} catch (e) {
		console.log('Problems setting transmissionDuration '+e);
		console.error('Problems setting transmissionDuration',e);
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
		this.outerRadius = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting outerRadius '+e);
		console.error('Problems setting outerRadius',e);
	}
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
		this.innerRadius = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting innerRadius '+e);
		console.error('Problems setting innerRadius',e);
	}
	this.set_height = function (value) {
		try {
			this.proxy.height = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting height '+e);
			console.error('Problems setting height',e);
		}
	};
	this.height_changed = function () {
		var value = this.height;
		return value;
	};
	try {
		this.height = new SFFloat();
	} catch (e) {
		console.log('Problems setting height '+e);
		console.error('Problems setting height',e);
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
	this.set_animationDuration = function (value) {
		try {
			this.proxy.animationDuration = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting animationDuration '+e);
			console.error('Problems setting animationDuration',e);
		}
	};
	this.animationDuration_changed = function () {
		var value = this.animationDuration;
		return value;
	};
	try {
		this.animationDuration = new SFTime();
	} catch (e) {
		console.log('Problems setting animationDuration '+e);
		console.error('Problems setting animationDuration',e);
	}
	this.set_restartClockDuration = function (value) {
		try {
			this.proxy.restartClockDuration = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting restartClockDuration '+e);
			console.error('Problems setting restartClockDuration',e);
		}
	};
	this.restartClockDuration_changed = function () {
		var value = this.restartClockDuration;
		return value;
	};
	try {
		this.restartClockDuration = new SFTime();
	} catch (e) {
		console.log('Problems setting restartClockDuration '+e);
		console.error('Problems setting restartClockDuration',e);
	}
	this.set_loopAnimation = function (value) {
		try {
			this.proxy.loopAnimation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting loopAnimation '+e);
			console.error('Problems setting loopAnimation',e);
		}
	};
	this.loopAnimation_changed = function () {
		var value = this.loopAnimation;
		return value;
	};
	try {
		this.loopAnimation = new SFBool();
	} catch (e) {
		console.log('Problems setting loopAnimation '+e);
		console.error('Problems setting loopAnimation',e);
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
		this.position = new MFVec2f();
	} catch (e) {
		console.log('Problems setting position '+e);
		console.error('Problems setting position',e);
	}
	this.set_beamCount = function (value) {
		try {
			this.proxy.beamCount = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting beamCount '+e);
			console.error('Problems setting beamCount',e);
		}
	};
	this.beamCount_changed = function () {
		var value = this.beamCount;
		return value;
	};
	try {
		this.beamCount = new SFInt32();
	} catch (e) {
		console.log('Problems setting beamCount '+e);
		console.error('Problems setting beamCount',e);
	}
	this.set_beamCount = function (value) {
		try {
			this.proxy.beamCount = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting beamCount '+e);
			console.error('Problems setting beamCount',e);
		}
	};
	this.beamCount_changed = function () {
		var value = this.beamCount;
		return value;
	};
	try {
		this.beamCount = new SFInt32();
	} catch (e) {
		console.log('Problems setting beamCount '+e);
		console.error('Problems setting beamCount',e);
	}
	this.set_newSpine = function (value) {
		try {
			this.proxy.newSpine = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting newSpine '+e);
			console.error('Problems setting newSpine',e);
		}
	};
	this.newSpine_changed = function () {
		var value = this.newSpine;
		return value;
	};
	try {
		this.newSpine = new MFVec3f();
	} catch (e) {
		console.log('Problems setting newSpine '+e);
		console.error('Problems setting newSpine',e);
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
		this.spine = new MFVec3f([new SFVec3f ( 1 , 0 , 0 ),new SFVec3f ( 0.92 , 0 , -0.38 ),new SFVec3f ( 0.71 , 0 , -0.71 ),new SFVec3f ( 0.38 , 0 , -0.92 ),new SFVec3f ( 0 , 0 , -1 ),new SFVec3f ( -0.38 , 0 , -0.92 ),new SFVec3f ( -0.71 , 0 , -0.71 ),new SFVec3f ( -0.92 , 0 , -0.38 ),new SFVec3f ( -1 , 0 , 0 ),new SFVec3f ( -0.92 , 0 , 0.38 ),new SFVec3f ( -0.71 , 0 , 0.71 ),new SFVec3f ( -0.38 , 0 , 0.92 ),new SFVec3f ( 0 , 0 , 1 ),new SFVec3f ( 0.38 , 0 , 0.92 ),new SFVec3f ( 0.71 , 0 , 0.71 ),new SFVec3f ( 0.92 , 0 , 0.38 ),new SFVec3f ( 1 , 0 , 0 )]);
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
		this.crossSection = new MFVec2f();
	} catch (e) {
		console.log('Problems setting crossSection '+e);
		console.error('Problems setting crossSection',e);
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
		this.color = new SFColor();
	} catch (e) {
		console.log('Problems setting color '+e);
		console.error('Problems setting color',e);
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
		this.color = new SFColor();
	} catch (e) {
		console.log('Problems setting color '+e);
		console.error('Problems setting color',e);
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
		this.transparency = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting transparency '+e);
		console.error('Problems setting transparency',e);
	}
	this.set_animationStartTime = function (value) {
		try {
			this.proxy.animationStartTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting animationStartTime '+e);
			console.error('Problems setting animationStartTime',e);
		}
	};
	this.animationStartTime_changed = function () {
		var value = this.animationStartTime;
		return value;
	};
	try {
		this.animationStartTime = new SFTime();
	} catch (e) {
		console.log('Problems setting animationStartTime '+e);
		console.error('Problems setting animationStartTime',e);
	}
	this.set_loopStartTime = function (value) {
		try {
			this.proxy.loopStartTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting loopStartTime '+e);
			console.error('Problems setting loopStartTime',e);
		}
	};
	this.loopStartTime_changed = function () {
		var value = this.loopStartTime;
		return value;
	};
	try {
		this.loopStartTime = new SFTime();
	} catch (e) {
		console.log('Problems setting loopStartTime '+e);
		console.error('Problems setting loopStartTime',e);
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
		this.crossSection = new MFVec2f();
	} catch (e) {
		console.log('Problems setting crossSection '+e);
		console.error('Problems setting crossSection',e);
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
		this.spine = new MFVec3f([new SFVec3f ( 1 , 0 , 0 ),new SFVec3f ( 0.92 , 0 , -0.38 ),new SFVec3f ( 0.71 , 0 , -0.71 ),new SFVec3f ( 0.38 , 0 , -0.92 ),new SFVec3f ( 0 , 0 , -1 ),new SFVec3f ( -0.38 , 0 , -0.92 ),new SFVec3f ( -0.71 , 0 , -0.71 ),new SFVec3f ( -0.92 , 0 , -0.38 ),new SFVec3f ( -1 , 0 , 0 ),new SFVec3f ( -0.92 , 0 , 0.38 ),new SFVec3f ( -0.71 , 0 , 0.71 ),new SFVec3f ( -0.38 , 0 , 0.92 ),new SFVec3f ( 0 , 0 , 1 ),new SFVec3f ( 0.38 , 0 , 0.92 ),new SFVec3f ( 0.71 , 0 , 0.71 ),new SFVec3f ( 0.92 , 0 , 0.38 ),new SFVec3f ( 1 , 0 , 0 )]);
	} catch (e) {
		console.log('Problems setting spine '+e);
		console.error('Problems setting spine',e);
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
		this.transparency = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting transparency '+e);
		console.error('Problems setting transparency',e);
	}
	this.set_signalProfileMaterial = function (value) {
		try {
			this.proxy.signalProfileMaterial = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting signalProfileMaterial '+e);
			console.error('Problems setting signalProfileMaterial',e);
		}
	};
	this.signalProfileMaterial_changed = function () {
		var value = this.signalProfileMaterial;
		return value;
	};
	try {
		this.signalProfileMaterial = X3DJSON.nodeUtil("Scene","TransmissionProfileMaterial");
	} catch (e) {
		console.log('Problems setting signalProfileMaterial '+e);
		console.error('Problems setting signalProfileMaterial',e);
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


ecmascript:

	this.initialize = function ()
{
	this.proxy.outerRadius = -1.0;
	this.proxy.innerRadius = -1.0;

	this.proxy.animationDuration = this.proxy.defaultRange / this.proxy.transmissionPropagationSpeed + this.proxy.transmissionDuration;

	this.tracePrint('this.proxy.beamCount = ' + this.proxy.beamCount);
	this.tracePrint('this.proxy.defaultRange = ' + this.proxy.defaultRange);
	this.tracePrint('this.proxy.animationDuration=' + this.proxy.animationDuration);
	this.tracePrint('this.proxy.transmissionPropagationSpeed=' + this.proxy.transmissionPropagationSpeed);

	this.computeSpine(this.proxy.beamCount);

    this.updateCrossSection(0);

	this.updateExtrusionShape(this.proxy.crossSection, this.proxy.spine, this.proxy.color);
};

	this.updateRadii = function (fraction)
{
	_transmissionPropagationDuration = this.proxy.defaultRange / this.proxy.transmissionPropagationSpeed;
	_animationDuration = _transmissionPropagationDuration + this.proxy.transmissionDuration;
	_spineRadius = 1;
	
	this.proxy.outerRadius = fraction * _animationDuration * this.proxy.transmissionPropagationSpeed - _spineRadius;

	if (this.proxy.outerRadius > (this.proxy.defaultRange - _spineRadius)) {
		this.proxy.outerRadius = this.proxy.defaultRange - _spineRadius;
	}

	if ((fraction * _animationDuration) > (_transmissionPropagationDuration + this.proxy.transmissionDuration * 7/8)) 
	{
		this.proxy.transparency_changed = ( (fraction * _animationDuration) - (_transmissionPropagationDuration + this.proxy.transmissionDuration * 7/8) ) / (this.proxy.transmissionDuration * 1/8);
	}

	if ((fraction * _animationDuration) <= this.proxy.transmissionDuration)
	{
		this.proxy.innerRadius = -_spineRadius;
	} else {
		this.proxy.innerRadius = ((fraction * _animationDuration) - this.proxy.transmissionDuration) * this.proxy.transmissionPropagationSpeed - _spineRadius;
		if (this.proxy.innerRadius > this.proxy.defaultRange) {
			this.proxy.innerRadius = this.proxy.defaultRange;
		}
	}

	this.tracePrint('fraction = ' + fraction);
	this.tracePrint('this.proxy.outerRadius = ' + this.proxy.outerRadius);
	this.tracePrint('this.proxy.innerRadius = ' + this.proxy.innerRadius);
};

	this.set_beamCount = function (this.proxy.beamCount)
{
    this.alwaysPrint('this.proxy.set_beamCount(' + this.proxy.beamCount + '), beam spacing=' + (360/this.proxy.beamCount) + ' degrees');
    this.computeSpine(this.proxy.beamCount);
};

	this.computeSpine = function (this.proxy.beamCount)
{
	if (this.proxy.beamCount < 3)
    {
        this.alwaysPrint('** insufficient this.proxy.beamCount=' + this.proxy.beamCount + ', ignored, this.proxy.spine not recomputed');
        return;
    }
    this.proxy.newSpine = new MFVec3f ();
    for (index = 0; index <= this.proxy.beamCount; index++)
	{
		angle = 2.0 * Math.PI * index / this.proxy.beamCount;
        this.proxy.newSpine[index] = new SFVec3f (Math.sin(angle), 0.0, Math.cos(angle));
	}
    this.proxy.newSpine[this.proxy.beamCount] = this.proxy.newSpine[0]; // ensure beginning point matches end point
    this.proxy.spine = this.proxy.newSpine;
	this.tracePrint('this.proxy.spine.length=' + this.proxy.spine.length + ', this.proxy.spine=' + this.proxy.spine);
};

	this.updateCrossSection = function (fraction)
{
	this.updateRadii(fraction);

	_spineRadius = 1;
	_outerHeight = Math.abs((this.proxy.outerRadius + _spineRadius) * Math.tan(Math.PI/6));

	if (_outerHeight > this.proxy.height)
	{
		_outerHeight = this.proxy.height;
	}

	_innerHeight = Math.abs((this.proxy.innerRadius + _spineRadius) * Math.tan(Math.PI/6));

	if (_innerHeight > this.proxy.height)
	{
		_innerHeight = this.proxy.height;
	}

	index = 0;
	this.proxy.position[index]     = new SFVec2f(this.proxy.outerRadius, _outerHeight/2);
	this.proxy.crossSection[index] = new SFVec2f(this.proxy.position[index].x, this.proxy.position[index].y);
	index++;
	
	this.proxy.position[index]     = new SFVec2f(this.proxy.innerRadius, _innerHeight/2);
	this.proxy.crossSection[index] = new SFVec2f(this.proxy.position[index].x, this.proxy.position[index].y);
	index++;

	this.proxy.position[index]     = new SFVec2f(this.proxy.innerRadius, -_innerHeight/2);
	this.proxy.crossSection[index] = new SFVec2f(this.proxy.position[index].x, this.proxy.position[index].y);
	index++;

	this.proxy.position[index]     = new SFVec2f(this.proxy.outerRadius, -_outerHeight/2);
	this.proxy.crossSection[index] = new SFVec2f(this.proxy.position[index].x, this.proxy.position[index].y);
	index++;

	this.proxy.position[index]     = new SFVec2f(this.proxy.outerRadius, _outerHeight/2);
	this.proxy.crossSection[index] = new SFVec2f(this.proxy.position[index].x, this.proxy.position[index].y);
	
	this.tracePrint('this.proxy.position     = ' + this.proxy.position);
	this.tracePrint('this.proxy.crossSection = ' + this.proxy.crossSection);
};

	this.startTransmission = function (value, timeStamp)
{
	if (value == true)
	{
		this.proxy.loopAnimation = false;
		this.proxy.loopStartTime = -1;
		this.proxy.animationStartTime = timeStamp;
		this.tracePrint('this.proxy.startTransmission ()');
	}
};

	this.startContinuousTransmissions = function (value, timeStamp)
{
	if (value == true)
	{
		this.proxy.loopAnimation = true;
		this.proxy.loopStartTime = timeStamp;
		this.proxy.animationStartTime = timeStamp;
		this.tracePrint('this.proxy.startContinuousTransmissions ()');
	}
};

	this.set_range = function (value, timeStamp)
{
	if (value >= 0)
	{
		this.proxy.defaultRange = value;
		this.tracePrint('this.proxy.defaultRange = ' + this.proxy.defaultRange);
	}
	else this.tracePrint('this.proxy.set_range (' + value + '); // no response, negative');
};

	this.set_color = function (value, timeStamp)
{
	this.proxy.color = value;
	this.tracePrint('this.proxy.color = ' + this.proxy.color);
};

	this.set_transmissionDuration = function (value, timeStamp)
{
	if (value >= 0) 
	{
		this.proxy.transmissionDuration = value;
		this.proxy.animationDuration = this.proxy.defaultRange / this.proxy.transmissionPropagationSpeed + this.proxy.transmissionDuration;
		this.proxy.restartClockDuration = 2 * this.proxy.animationDuration;
		this.tracePrint('this.proxy.transmissionDuration = ' + this.proxy.transmissionDuration);
		this.tracePrint('this.proxy.animationDuration    = ' + this.proxy.animationDuration);
		this.tracePrint('this.proxy.restartClockDuration = ' + this.proxy.restartClockDuration);
	}
	else this.tracePrint('this.proxy.set_transmissionDuration (' + value + '); // no response, negative');
};

	this.set_fraction = function (value, timeStamp)
{
	this.updateCrossSection(value);

	this.updateExtrusionShape(this.proxy.crossSection, this.proxy.spine, this.proxy.color);
};

	this.updateExtrusionShape = function (this.proxy.crossSection, this.proxy.spine, this.proxy.color)
{
	// emissiveColor appears unaffected by this.proxy.transparency, unfortunately
	X3DJSON.nodeUtil("Scene","TransmissionProfileMaterial", "diffuseColor",  this.proxy.color);
	X3DJSON.nodeUtil("Scene","TransmissionProfileMaterial", "this").proxy.transparency = this.proxy.transparency;

	this.tracePrint('Updating this.proxy.crossSection:');
	this.tracePrint('  this.proxy.crossSection = ' + this.proxy.crossSection);
	this.tracePrint('  this.proxy.spine = ' + this.proxy.spine);
	this.tracePrint('  this.proxy.transparency = ' + this.proxy.transparency);

	this.proxy.crossSection_changed = this.proxy.crossSection;
	this.proxy.spine_changed = this.proxy.spine;
};

	this.tracePrint = function (value)
{
  if (this.proxy.traceEnabled) this.alwaysPrint (value);
};

	this.alwaysPrint = function (value)
{
	console.error ('[AcousticTransmissionCylinderPrototype] ' + value + '');
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].initialize();
    if (X3DJSON.nodeUtil("Scene","RestartClock")) {
X3DJSON.nodeUtil("Scene","RestartClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","AnimationClock")) {
X3DJSON.nodeUtil("Scene","AnimationClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].set_fraction(X3DJSON.nodeUtil("Scene","AnimationClock","fraction"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].set_fraction(X3DJSON.nodeUtil("Scene","AnimationClock","fraction"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']['ACTION']['crossSection'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']['ACTION']['crossSection'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']['ACTION']['crossSection'].push(function(property, value) {
		if (property === 'crossSection') {
			X3DJSON.nodeUtil("Scene","TransmissionProfile","crossSection",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].crossSection_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].crossSection_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].crossSection, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TransmissionProfile","crossSection",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].crossSection_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].crossSection_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].crossSection, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']['ACTION']['spine'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']['ACTION']['spine'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']['ACTION']['spine'].push(function(property, value) {
		if (property === 'spine') {
			X3DJSON.nodeUtil("Scene","TransmissionProfile","spine",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].spine_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].spine_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].spine, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TransmissionProfile","spine",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].spine_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].spine_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].spine, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']['ACTION']['transparency'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']['ACTION']['transparency'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']['ACTION']['transparency'].push(function(property, value) {
		if (property === 'transparency') {
			X3DJSON.nodeUtil("Scene","TransmissionProfileMaterial","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].transparency_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].transparency_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].transparency, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TransmissionProfileMaterial","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].transparency_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].transparency_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].transparency, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']['ACTION']['animationDuration'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']['ACTION']['animationDuration'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']['ACTION']['animationDuration'].push(function(property, value) {
		if (property === 'animationDuration') {
			X3DJSON.nodeUtil("Scene","AnimationClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].animationDuration === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].animationDuration() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].animationDuration, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AnimationClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].animationDuration === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].animationDuration() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].animationDuration, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']['ACTION']['restartClockDuration'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']['ACTION']['restartClockDuration'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']['ACTION']['restartClockDuration'].push(function(property, value) {
		if (property === 'restartClockDuration') {
			X3DJSON.nodeUtil("Scene","RestartClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].restartClockDuration === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].restartClockDuration() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].restartClockDuration, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RestartClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].restartClockDuration === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].restartClockDuration() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].restartClockDuration, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']['ACTION']['loopAnimation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']['ACTION']['loopAnimation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']['ACTION']['loopAnimation'].push(function(property, value) {
		if (property === 'loopAnimation') {
			X3DJSON.nodeUtil("Scene","RestartClock","loop",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].loopAnimation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].loopAnimation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].loopAnimation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RestartClock","loop",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].loopAnimation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].loopAnimation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].loopAnimation, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']['ACTION']['animationStartTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']['ACTION']['animationStartTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']['ACTION']['animationStartTime'].push(function(property, value) {
		if (property === 'animationStartTime') {
			X3DJSON.nodeUtil("Scene","AnimationClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].animationStartTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].animationStartTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].animationStartTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AnimationClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].animationStartTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].animationStartTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].animationStartTime, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']['ACTION']['loopStartTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']['ACTION']['loopStartTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript']['ACTION']['loopStartTime'].push(function(property, value) {
		if (property === 'loopStartTime') {
			X3DJSON.nodeUtil("Scene","RestartClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].loopStartTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].loopStartTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].loopStartTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","RestartClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].loopStartTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].loopStartTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].loopStartTime, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].set_fraction(X3DJSON.nodeUtil("Scene","AnimationClock","fraction"), __eventTime);
			X3DJSON.nodeUtil("Scene","TransmissionProfile","crossSection",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].crossSection_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].crossSection_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].crossSection, __eventTime);
			X3DJSON.nodeUtil("Scene","TransmissionProfile","spine",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].spine_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].spine_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].spine, __eventTime);
			X3DJSON.nodeUtil("Scene","TransmissionProfileMaterial","transparency",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].transparency_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].transparency_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].transparency, __eventTime);
			X3DJSON.nodeUtil("Scene","AnimationClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].animationDuration === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].animationDuration() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].animationDuration, __eventTime);
			X3DJSON.nodeUtil("Scene","RestartClock","cycleInterval",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].restartClockDuration === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].restartClockDuration() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].restartClockDuration, __eventTime);
			X3DJSON.nodeUtil("Scene","RestartClock","loop",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].loopAnimation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].loopAnimation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].loopAnimation, __eventTime);
			X3DJSON.nodeUtil("Scene","AnimationClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].animationStartTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].animationStartTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].animationStartTime, __eventTime);
			X3DJSON.nodeUtil("Scene","RestartClock","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].loopStartTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].loopStartTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/AcousticTransmissionCylinderPrototype.json']['TransmissionPropagationScript'].loopStartTime, __eventTime);