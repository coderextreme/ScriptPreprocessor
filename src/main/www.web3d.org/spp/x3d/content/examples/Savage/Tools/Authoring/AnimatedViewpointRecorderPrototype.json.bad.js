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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript'] = function() {
	this.set_start = function (value) {
		try {
			this.proxy.start = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting start '+e);
			console.error('Problems setting start',e);
		}
	};
	this.start_changed = function () {
		var value = this.start;
		return value;
	};
	try {
		this.start = new SFBool();
	} catch (e) {
		console.log('Problems setting start '+e);
		console.error('Problems setting start',e);
	}
	this.set_stop = function (value) {
		try {
			this.proxy.stop = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting stop '+e);
			console.error('Problems setting stop',e);
		}
	};
	this.stop_changed = function () {
		var value = this.stop;
		return value;
	};
	try {
		this.stop = new SFBool();
	} catch (e) {
		console.log('Problems setting stop '+e);
		console.error('Problems setting stop',e);
	}
	this.set_samplingInterval = function (value) {
		try {
			this.proxy.samplingInterval = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting samplingInterval '+e);
			console.error('Problems setting samplingInterval',e);
		}
	};
	this.samplingInterval_changed = function () {
		var value = this.samplingInterval;
		return value;
	};
	try {
		this.samplingInterval = new SFTime();
	} catch (e) {
		console.log('Problems setting samplingInterval '+e);
		console.error('Problems setting samplingInterval',e);
	}
	this.set_outputX3D = function (value) {
		try {
			this.proxy.outputX3D = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting outputX3D '+e);
			console.error('Problems setting outputX3D',e);
		}
	};
	this.outputX3D_changed = function () {
		var value = this.outputX3D;
		return value;
	};
	try {
		this.outputX3D = new SFBool();
	} catch (e) {
		console.log('Problems setting outputX3D '+e);
		console.error('Problems setting outputX3D',e);
	}
	this.set_outputClassicVRML = function (value) {
		try {
			this.proxy.outputClassicVRML = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting outputClassicVRML '+e);
			console.error('Problems setting outputClassicVRML',e);
		}
	};
	this.outputClassicVRML_changed = function () {
		var value = this.outputClassicVRML;
		return value;
	};
	try {
		this.outputClassicVRML = new SFBool();
	} catch (e) {
		console.log('Problems setting outputClassicVRML '+e);
		console.error('Problems setting outputClassicVRML',e);
	}
	this.set_recordingInProgress = function (value) {
		try {
			this.proxy.recordingInProgress = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting recordingInProgress '+e);
			console.error('Problems setting recordingInProgress',e);
		}
	};
	this.recordingInProgress_changed = function () {
		var value = this.recordingInProgress;
		return value;
	};
	try {
		this.recordingInProgress = new SFBool();
	} catch (e) {
		console.log('Problems setting recordingInProgress '+e);
		console.error('Problems setting recordingInProgress',e);
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
		this.position = undefined;
	} catch (e) {
		console.log('Problems setting position '+e);
		console.error('Problems setting position',e);
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
		this.orientation = undefined;
	} catch (e) {
		console.log('Problems setting orientation '+e);
		console.error('Problems setting orientation',e);
	}
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
	this.set_positionTimeArray = function (value) {
		try {
			this.proxy.positionTimeArray = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting positionTimeArray '+e);
			console.error('Problems setting positionTimeArray',e);
		}
	};
	this.positionTimeArray_changed = function () {
		var value = this.positionTimeArray;
		return value;
	};
	try {
		this.positionTimeArray = new MFTime();
	} catch (e) {
		console.log('Problems setting positionTimeArray '+e);
		console.error('Problems setting positionTimeArray',e);
	}
	this.set_orientationArray = function (value) {
		try {
			this.proxy.orientationArray = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting orientationArray '+e);
			console.error('Problems setting orientationArray',e);
		}
	};
	this.orientationArray_changed = function () {
		var value = this.orientationArray;
		return value;
	};
	try {
		this.orientationArray = new MFRotation();
	} catch (e) {
		console.log('Problems setting orientationArray '+e);
		console.error('Problems setting orientationArray',e);
	}
	this.set_orientationTimeArray = function (value) {
		try {
			this.proxy.orientationTimeArray = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting orientationTimeArray '+e);
			console.error('Problems setting orientationTimeArray',e);
		}
	};
	this.orientationTimeArray_changed = function () {
		var value = this.orientationTimeArray;
		return value;
	};
	try {
		this.orientationTimeArray = new MFTime();
	} catch (e) {
		console.log('Problems setting orientationTimeArray '+e);
		console.error('Problems setting orientationTimeArray',e);
	}
	this.set_filterDeadTime = function (value) {
		try {
			this.proxy.filterDeadTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting filterDeadTime '+e);
			console.error('Problems setting filterDeadTime',e);
		}
	};
	this.filterDeadTime_changed = function () {
		var value = this.filterDeadTime;
		return value;
	};
	try {
		this.filterDeadTime = new SFBool();
	} catch (e) {
		console.log('Problems setting filterDeadTime '+e);
		console.error('Problems setting filterDeadTime',e);
	}
	this.set_newViewpointGroup = function (value) {
		try {
			this.proxy.newViewpointGroup = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting newViewpointGroup '+e);
			console.error('Problems setting newViewpointGroup',e);
		}
	};
	this.newViewpointGroup_changed = function () {
		var value = this.newViewpointGroup;
		return value;
	};
	try {
		this.newViewpointGroup = X3DJSON.nodeUtil("Scene","NewViewpointGroup");
	} catch (e) {
		console.log('Problems setting newViewpointGroup '+e);
		console.error('Problems setting newViewpointGroup',e);
	}
	this.set_numberOfToursCreated = function (value) {
		try {
			this.proxy.numberOfToursCreated = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting numberOfToursCreated '+e);
			console.error('Problems setting numberOfToursCreated',e);
		}
	};
	this.numberOfToursCreated_changed = function () {
		var value = this.numberOfToursCreated;
		return value;
	};
	try {
		this.numberOfToursCreated = new SFInt32(0);
	} catch (e) {
		console.log('Problems setting numberOfToursCreated '+e);
		console.error('Problems setting numberOfToursCreated',e);
	}
	this.set_precedingPosition = function (value) {
		try {
			this.proxy.precedingPosition = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting precedingPosition '+e);
			console.error('Problems setting precedingPosition',e);
		}
	};
	this.precedingPosition_changed = function () {
		var value = this.precedingPosition;
		return value;
	};
	try {
		this.precedingPosition = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting precedingPosition '+e);
		console.error('Problems setting precedingPosition',e);
	}
	this.set_precedingOrientation = function (value) {
		try {
			this.proxy.precedingOrientation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting precedingOrientation '+e);
			console.error('Problems setting precedingOrientation',e);
		}
	};
	this.precedingOrientation_changed = function () {
		var value = this.precedingOrientation;
		return value;
	};
	try {
		this.precedingOrientation = new SFRotation(0,1,0,0);
	} catch (e) {
		console.log('Problems setting precedingOrientation '+e);
		console.error('Problems setting precedingOrientation',e);
	}
	this.set_precedingPositionSampleTime = function (value) {
		try {
			this.proxy.precedingPositionSampleTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting precedingPositionSampleTime '+e);
			console.error('Problems setting precedingPositionSampleTime',e);
		}
	};
	this.precedingPositionSampleTime_changed = function () {
		var value = this.precedingPositionSampleTime;
		return value;
	};
	try {
		this.precedingPositionSampleTime = new SFTime(0);
	} catch (e) {
		console.log('Problems setting precedingPositionSampleTime '+e);
		console.error('Problems setting precedingPositionSampleTime',e);
	}
	this.set_precedingOrientationSampleTime = function (value) {
		try {
			this.proxy.precedingOrientationSampleTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting precedingOrientationSampleTime '+e);
			console.error('Problems setting precedingOrientationSampleTime',e);
		}
	};
	this.precedingOrientationSampleTime_changed = function () {
		var value = this.precedingOrientationSampleTime;
		return value;
	};
	try {
		this.precedingOrientationSampleTime = new SFTime(0);
	} catch (e) {
		console.log('Problems setting precedingOrientationSampleTime '+e);
		console.error('Problems setting precedingOrientationSampleTime',e);
	}
	this.set_r = function (value) {
		try {
			this.proxy.r = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting r '+e);
			console.error('Problems setting r',e);
		}
	};
	this.r_changed = function () {
		var value = this.r;
		return value;
	};
	try {
		this.r = new SFFloat(1);
	} catch (e) {
		console.log('Problems setting r '+e);
		console.error('Problems setting r',e);
	}
	this.set_positionEventsReceived = function (value) {
		try {
			this.proxy.positionEventsReceived = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting positionEventsReceived '+e);
			console.error('Problems setting positionEventsReceived',e);
		}
	};
	this.positionEventsReceived_changed = function () {
		var value = this.positionEventsReceived;
		return value;
	};
	try {
		this.positionEventsReceived = new SFBool(false);
	} catch (e) {
		console.log('Problems setting positionEventsReceived '+e);
		console.error('Problems setting positionEventsReceived',e);
	}
	this.set_orientationEventsReceived = function (value) {
		try {
			this.proxy.orientationEventsReceived = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting orientationEventsReceived '+e);
			console.error('Problems setting orientationEventsReceived',e);
		}
	};
	this.orientationEventsReceived_changed = function () {
		var value = this.orientationEventsReceived;
		return value;
	};
	try {
		this.orientationEventsReceived = new SFBool(false);
	} catch (e) {
		console.log('Problems setting orientationEventsReceived '+e);
		console.error('Problems setting orientationEventsReceived',e);
	}


ecmascript:

	this.initialize = function ()
{
   this.proxy.positionArray        = new MFVec3f ();
   this.proxy.orientationArray     = new MFRotation ();
   this.proxy.positionTimeArray    = new MFTime ();
   this.proxy.orientationTimeArray = new MFTime ();

      this.proxy.positionEventsReceived = false;
   this.proxy.orientationEventsReceived = false;
}
;

	this.roundoff = function (value, digits)
{
	resolution = 1;
	for (i = 1; i <= digits; i++ )
	{
		resolution *= 10;
	}
	return Math.round (value*resolution) / resolution; // round to resolution
};

	this.filterPositions = function ()
{
    // TODO
}
;

	this.filterOrientations = function ()
{
    // TODO
}
;

	this.set_position = function (eventValue, timestamp)
{
// console.error ('position=' + eventValue);
   // we are counting on an initialization eventValue being sent by ProximitySensor
   this.proxy.positionEventsReceived = true;
   if ( this.proxy.positionArray.length == 0 )
   {
   	this.proxy.positionArray[0]     = eventValue; // this.initialize
   	this.proxy.positionTimeArray[0] = timestamp;  // this.initialize
   }
   this.proxy.precedingPositionSampleTime = this.proxy.positionTimeArray[ this.proxy.positionArray.length - 1 ];

   // seconds duration since last valid sample
   if ( (timestamp - this.proxy.precedingPositionSampleTime) > this.proxy.samplingInterval )
   {
	// append values to each array
	this.proxy.positionArray[this.proxy.positionArray.length] = eventValue;
	this.proxy.positionTimeArray[this.proxy.positionTimeArray.length] = timestamp;
   }
   this.proxy.precedingPosition = eventValue;
}
;

	this.set_orientation = function (eventValue, timestamp)
{
   // we are counting on an initialization eventValue being sent by ProximitySensor
   this.proxy.orientationEventsReceived = true;
   if ( this.proxy.orientationArray.length == 0 )
   {
     this.proxy.r = Math.sqrt (eventValue.x*eventValue.x + eventValue.y*eventValue.y + eventValue.z*eventValue.z);
//   console.error ('orientation=' + eventValue.toString() + ', this.proxy.r=' + this.proxy.r + ''); // trace
     if (this.proxy.r != 0)
     {
        eventValue.x = eventValue.x / this.proxy.r;
        eventValue.y = eventValue.y / this.proxy.r;
        eventValue.z = eventValue.z / this.proxy.r;
     }
   	 this.proxy.orientationArray[0]     = eventValue; // this.initialize
   	 this.proxy.orientationTimeArray[0] = timestamp;  // this.initialize
   }
   this.proxy.precedingOrientationSampleTime = this.proxy.orientationTimeArray[ this.proxy.orientationTimeArray.length - 1 ];

   // append sample values to each array
   if ( (timestamp - this.proxy.precedingOrientationSampleTime) > this.proxy.samplingInterval )
   {
     this.proxy.orientationTimeArray[this.proxy.orientationTimeArray.length] = timestamp;
	 // normalize SFRotation axis if needed
     this.proxy.r = Math.sqrt (eventValue.x*eventValue.x + eventValue.y*eventValue.y + eventValue.z*eventValue.z);
//    console.error ('orientation=' + eventValue.toString() + ', this.proxy.r=' + this.proxy.r + ''); // trace
     if (this.proxy.r != 0)
     {
        eventValue.x = eventValue.x / this.proxy.r;
        eventValue.y = eventValue.y / this.proxy.r;
        eventValue.z = eventValue.z / this.proxy.r;
        // auto append to array, no need to allocate
        this.proxy.orientationArray[this.proxy.orientationArray.length] = eventValue;
     }
     else // illegal zero-magnitude axis returned by browser, so just use previous rotation
     {
        // auto append to array, no need to allocate
        this.proxy.orientationArray[this.proxy.orientationArray.length] = this.proxy.precedingOrientation;
     }
   }
   this.proxy.precedingOrientation = eventValue;
}
;

	this.start = function (eventValue, timestamp)
{
	if (eventValue == false) return; // only accept this.proxy.start if eventValue == true
	if (this.proxy.recordingInProgress == true) return; // ignore repeated starts while already running
	this.proxy.recordingInProgress  = true;
    // arrays need to be reinitialized from previous run
	this.initialize();

    console.error ('    <!-- this.proxy.start recording ' + this.proxy.numberOfToursCreated + ' -->');
}
;

	this.stop = function (eventValue, timestamp)
{
	if (eventValue == false) return; // only accept this.proxy.stop  if eventValue == true
	if (this.proxy.recordingInProgress == false)
	{
	   console.error ('    <!-- stopped recording without first starting. -->');
       return;
	}

    // ensure legal array lengths in case some events were never sent due to not moving
    if (this.proxy.positionEventsReceived == false)
    {
       console.error ('<!-- warning:  no position values received! no action taken. -->');
       return;
    }
    if (this.proxy.orientationEventsReceived == false)
    {
       console.error ('<!-- warning:  no orientation values received! no action taken. -->');
       return;
    }
	this.proxy.recordingInProgress = false;

	// preceding last values were at last sampleInterval (either this.proxy.set_position or this.proxy.set_orientation)
	// add one more to each array since they are not sent values by sensor when not changing
       this.proxy.positionArray[   this.proxy.positionArray.length] = this.proxy.precedingPosition;
    this.proxy.orientationArray[this.proxy.orientationArray.length] = this.proxy.precedingOrientation;
       this.proxy.positionTimeArray[   this.proxy.positionTimeArray.length] = timestamp;
    this.proxy.orientationTimeArray[this.proxy.orientationTimeArray.length] = timestamp;

    if (this.proxy.positionArray.length != this.proxy.positionTimeArray.length)
    {
       console.error ('<!-- internal error:  this.proxy.positionArray.length (' + this.proxy.positionArray.length + ') != this.proxy.positionTimeArray.length (' + this.proxy.positionTimeArray.length + ') -->');
    }
    if (this.proxy.orientationArray.length != this.proxy.orientationTimeArray.length)
    {
       console.error ('<!-- internal error:  this.proxy.orientationArray.length (' + this.proxy.orientationArray.length + ') != this.proxy.orientationTimeArray.length (' + this.proxy.orientationTimeArray.length + ') -->');
    }

   this.filterPositions();
   this.filterOrientations();

   // iff events are sent simultaneously, could use either array with this.proxy.start/this.proxy.stop times synchronized
   // however that might be a bad assumption...  so reset this.proxy.start times to match
   if (this.proxy.positionTimeArray[0] > this.proxy.orientationTimeArray[0])    this.proxy.positionTimeArray[0] = this.proxy.orientationTimeArray[0];
   if (this.proxy.positionTimeArray[0] < this.proxy.orientationTimeArray[0]) this.proxy.orientationTimeArray[0] = this.proxy.positionTimeArray[0];

   startTime = this.proxy.positionTimeArray[0];
   stopTime  = this.proxy.positionTimeArray[this.proxy.positionTimeArray.length-1];
   interval  = stopTime - startTime;

   x3dString =
   '    <!-- ********** this.proxy.start recorded Animated Tour ' + this.proxy.numberOfToursCreated + ' using .x3d syntax ********** -->' +
   '    <Group>' +
   '      <Viewpoint DEF="AnimatedViewpointRecorderViewpoint' + this.proxy.numberOfToursCreated + '" description="Animated Tour ' + this.proxy.numberOfToursCreated + '"' +
   '         position="'    + this.proxy.positionArray[0].x + ' '    + this.proxy.positionArray[0].y + ' '    + this.proxy.positionArray[0].z + '" ' +
   '         orientation="' + this.proxy.orientationArray[0].x + ' ' + this.proxy.orientationArray[0].y + ' ' + this.proxy.orientationArray[0].z + ' ' + this.proxy.orientationArray[0].angle + '"/>' +
   '      <!-- this.proxy.samplingInterval=' + this.proxy.samplingInterval + ' seconds, default TimeSensor loop=true -->' +
   '      <TimeSensor DEF="AnimatedViewpointRecorderTimer' + this.proxy.numberOfToursCreated + '" cycleInterval="' + interval + '"' +
   '        enabled="true" loop="true"/>' +
   '      <PositionInterpolator DEF="AnimatedViewpointRecorderPosition' + this.proxy.numberOfToursCreated + '" key="' ;
   for (counter = 0; counter < this.proxy.positionTimeArray.length; counter++)
   {
    x3dString = x3dString +  this.roundoff(((this.proxy.positionTimeArray[counter] - this.proxy.positionTimeArray[0]) / interval),5) + ' ';
   }
   x3dString = x3dString + '"      keyValue="';
   for (counter = 0; counter < this.proxy.positionArray.length; counter++)
   {
      x3dString = x3dString +   this.proxy.positionArray[counter].x + ' ' + this.proxy.positionArray[counter].y + ' ' + this.proxy.positionArray[counter].z + ', ';
   }
   x3dString = x3dString + '         "/>' +
   '      <OrientationInterpolator DEF="AnimatedViewpointRecorderOrientation' + this.proxy.numberOfToursCreated + '" key="';
   for (counter = 0; counter < this.proxy.orientationTimeArray.length; counter++)
   {
    x3dString = x3dString +   this.roundoff(((this.proxy.orientationTimeArray[counter] - this.proxy.orientationTimeArray[0]) / interval),5) + ' ';
   }
   x3dString = x3dString +   '"      keyValue="';
   for (counter = 0; counter < this.proxy.orientationArray.length; counter++)
   {
      var proxy.r = Math.sqrt(this.proxy.orientationArray[counter].x*this.proxy.orientationArray[counter].x + this.proxy.orientationArray[counter].y*this.proxy.orientationArray[counter].y + this.proxy.orientationArray[counter].z*this.proxy.orientationArray[counter].z); // normalize
      if (this.proxy.r == 0) this.proxy.r = 1; // avoid divide by zero
      x3dString = x3dString + (this.proxy.orientationArray[counter].x / this.proxy.r) + ' ' + (this.proxy.orientationArray[counter].y / this.proxy.r) + ' ' + (this.proxy.orientationArray[counter].z / this.proxy.r) + ' ' + this.proxy.orientationArray[counter].angle + ', ';
   }
   x3dString = x3dString + '         "/>' +
   '      <Group>' +
   '        <ROUTE fromField="bindTime" fromNode="AnimatedViewpointRecorderViewpoint' + this.proxy.numberOfToursCreated + '"' +
   '          toField="startTime" toNode="AnimatedViewpointRecorderTimer' + this.proxy.numberOfToursCreated + '"/>' +
   '        <ROUTE fromField="fraction_changed" fromNode="AnimatedViewpointRecorderTimer' + this.proxy.numberOfToursCreated + '"' +
   '          toField="set_fraction" toNode="AnimatedViewpointRecorderPosition' + this.proxy.numberOfToursCreated + '"/>' +
   '        <ROUTE fromField="fraction_changed" fromNode="AnimatedViewpointRecorderTimer' + this.proxy.numberOfToursCreated + '"' +
   '          toField="set_fraction" toNode="AnimatedViewpointRecorderOrientation' + this.proxy.numberOfToursCreated + '"/>' +
   '        <ROUTE fromField="value_changed" fromNode="AnimatedViewpointRecorderPosition' + this.proxy.numberOfToursCreated + '"' +
   '          toField="position" toNode="AnimatedViewpointRecorderViewpoint' + this.proxy.numberOfToursCreated + '"/>' +
   '        <ROUTE fromField="value_changed"' +
   '          fromNode="AnimatedViewpointRecorderOrientation' + this.proxy.numberOfToursCreated + '" toField="orientation" toNode="AnimatedViewpointRecorderViewpoint' + this.proxy.numberOfToursCreated + '"/>' +
   '      </Group>' +
   '    </Group>';

   if (this.proxy.outputX3D) console.error (x3dString);

   vrmlString =
      '# ********** this.proxy.start recorded Animated Tour ' + this.proxy.numberOfToursCreated + ' using .x3dv syntax ********** ' +
      'Group {' +
      '  children [' +
      '      DEF AnimatedViewpointRecorderViewpoint' + this.proxy.numberOfToursCreated + ' Viewpoint {' +
      '        description "Animated Tour ' + this.proxy.numberOfToursCreated + '"' +
      '        orientation ' + this.proxy.orientationArray[0].x + ' ' + this.proxy.orientationArray[0].y + ' ' + this.proxy.orientationArray[0].z + ' ' + this.proxy.orientationArray[0].angle + '' +
      '        position ' + this.proxy.positionArray[0].x + ' '    + this.proxy.positionArray[0].y + ' '    + this.proxy.positionArray[0].z + '' +
      '      }' +
      '      DEF AnimatedViewpointRecorderTimer' + this.proxy.numberOfToursCreated + ' TimeSensor {' +
      '        cycleInterval ' + interval +  '' +
      '        loop TRUE' +
      '      }' +
      '      DEF AnimatedViewpointRecorderPosition' + this.proxy.numberOfToursCreated + ' PositionInterpolator {' +
      '        key [';
   for (counter = 0; counter < this.proxy.positionTimeArray.length; counter++)
   {
      vrmlString = vrmlString + this.roundoff(((this.proxy.positionTimeArray[counter] - this.proxy.positionTimeArray[0]) / interval),5) + ' ';
   }
   vrmlString = vrmlString + '         ]' +
      '        keyValue [';
   for (counter = 0; counter < this.proxy.positionArray.length; counter++)
   {
      vrmlString = vrmlString +   this.proxy.positionArray[counter].x + ' ' + this.proxy.positionArray[counter].y + ' ' + this.proxy.positionArray[counter].z + ', ';
   }
   vrmlString = vrmlString + '         ]' +
      '      }' +
      '      DEF AnimatedViewpointRecorderOrientation' + this.proxy.numberOfToursCreated + ' OrientationInterpolator {' +
      '        key [';
   for (counter = 0; counter < this.proxy.orientationTimeArray.length; counter++)
   {
    vrmlString = vrmlString +   this.roundoff(((this.proxy.orientationTimeArray[counter] - this.proxy.orientationTimeArray[0]) / interval),5) + ' ';
   }
   vrmlString = vrmlString + '         ]' +
      '        keyValue [';
   for (counter = 0; counter < this.proxy.orientationArray.length; counter++)
   {
      vrmlString = vrmlString + this.proxy.orientationArray[counter].x + ' ' + this.proxy.orientationArray[counter].y + ' ' + this.proxy.orientationArray[counter].z + ' ' + this.proxy.orientationArray[counter].angle + ', ';
   }
   vrmlString = vrmlString + '         ]' +
      '      }' +
      '      Group {' +
      '         ROUTE AnimatedViewpointRecorderViewpoint' + this.proxy.numberOfToursCreated + '.bindTime TO AnimatedViewpointRecorderTimer' + this.proxy.numberOfToursCreated + '.startTime' +
      '         ROUTE AnimatedViewpointRecorderTimer' + this.proxy.numberOfToursCreated + '.fraction_changed TO AnimatedViewpointRecorderPosition' + this.proxy.numberOfToursCreated + '.set_fraction' +
      '         ROUTE AnimatedViewpointRecorderTimer' + this.proxy.numberOfToursCreated + '.fraction_changed TO AnimatedViewpointRecorderOrientation' + this.proxy.numberOfToursCreated + '.set_fraction' +
      '         ROUTE AnimatedViewpointRecorderPosition' + this.proxy.numberOfToursCreated + '.value_changed TO AnimatedViewpointRecorderViewpoint' + this.proxy.numberOfToursCreated + '.position' +
      '         ROUTE AnimatedViewpointRecorderOrientation' + this.proxy.numberOfToursCreated + '.value_changed TO AnimatedViewpointRecorderViewpoint' + this.proxy.numberOfToursCreated + '.orientation' +
      '      }' +
      '   ]' +
      '}';

   console.error ('');
   if (this.proxy.outputClassicVRML) console.error (vrmlString);

   this.proxy.numberOfToursCreated++;
   // TODO
   // newNode = new SFNode(vrmlString);
   // X3DJSON.nodeUtil("Scene","NewViewpointGroup", "children")[this.proxy.numberOfToursCreated] = newNode;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript'].initialize();
    if (X3DJSON.nodeUtil("Scene","WhereSensor")) {
X3DJSON.nodeUtil("Scene","WhereSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript'].set_position(X3DJSON.nodeUtil("Scene","WhereSensor","position"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript'].set_position(X3DJSON.nodeUtil("Scene","WhereSensor","position"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","WhereSensor")) {
X3DJSON.nodeUtil("Scene","WhereSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript'].set_orientation(X3DJSON.nodeUtil("Scene","WhereSensor","orientation"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript'].set_orientation(X3DJSON.nodeUtil("Scene","WhereSensor","orientation"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript']['ACTION']['recordingInProgress'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript']['ACTION']['recordingInProgress'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript']['ACTION']['recordingInProgress'].push(function(property, value) {
		if (property === 'recordingInProgress') {
			X3DJSON.nodeUtil("Scene","WhereSensor","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript'].recordingInProgress === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript'].recordingInProgress() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript'].recordingInProgress, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","WhereSensor","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript'].recordingInProgress === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript'].recordingInProgress() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript'].recordingInProgress, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript'].set_position(X3DJSON.nodeUtil("Scene","WhereSensor","position"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript'].set_orientation(X3DJSON.nodeUtil("Scene","WhereSensor","orientation"), __eventTime);
			X3DJSON.nodeUtil("Scene","WhereSensor","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript'].recordingInProgress === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript'].recordingInProgress() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/Authoring/AnimatedViewpointRecorderPrototype.json']['RecordingScript'].recordingInProgress, __eventTime);