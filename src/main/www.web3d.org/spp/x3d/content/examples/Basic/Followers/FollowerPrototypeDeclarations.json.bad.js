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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PositionChaser'] = function() {
	this.set_Tick = function (value) {
		try {
			this.proxy.Tick = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Tick '+e);
			console.error('Problems setting Tick',e);
		}
	};
	this.Tick_changed = function () {
		var value = this.Tick;
		return value;
	};
	try {
		this.Tick = new SFTime();
	} catch (e) {
		console.log('Problems setting Tick '+e);
		console.error('Problems setting Tick',e);
	}
	this.set_value = function (value) {
		try {
			this.proxy.value = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting value '+e);
			console.error('Problems setting value',e);
		}
	};
	this.value_changed = function () {
		var value = this.value;
		return value;
	};
	try {
		this.value = undefined;
	} catch (e) {
		console.log('Problems setting value '+e);
		console.error('Problems setting value',e);
	}
	this.set_duration = function (value) {
		try {
			this.proxy.duration = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting duration '+e);
			console.error('Problems setting duration',e);
		}
	};
	this.duration_changed = function () {
		var value = this.duration;
		return value;
	};
	try {
		this.duration = new SFTime();
	} catch (e) {
		console.log('Problems setting duration '+e);
		console.error('Problems setting duration',e);
	}
	this.set_Buffer = function (value) {
		try {
			this.proxy.Buffer = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Buffer '+e);
			console.error('Problems setting Buffer',e);
		}
	};
	this.Buffer_changed = function () {
		var value = this.Buffer;
		return value;
	};
	try {
		this.Buffer = new MFVec3f();
	} catch (e) {
		console.log('Problems setting Buffer '+e);
		console.error('Problems setting Buffer',e);
	}
	this.set_bInitialized = function (value) {
		try {
			this.proxy.bInitialized = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting bInitialized '+e);
			console.error('Problems setting bInitialized',e);
		}
	};
	this.bInitialized_changed = function () {
		var value = this.bInitialized;
		return value;
	};
	try {
		this.bInitialized = new SFBool(false);
	} catch (e) {
		console.log('Problems setting bInitialized '+e);
		console.error('Problems setting bInitialized',e);
	}
	this.set_BufferEndTime = function (value) {
		try {
			this.proxy.BufferEndTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting BufferEndTime '+e);
			console.error('Problems setting BufferEndTime',e);
		}
	};
	this.BufferEndTime_changed = function () {
		var value = this.BufferEndTime;
		return value;
	};
	try {
		this.BufferEndTime = new SFTime(0);
	} catch (e) {
		console.log('Problems setting BufferEndTime '+e);
		console.error('Problems setting BufferEndTime',e);
	}
	this.set_cNumSupports = function (value) {
		try {
			this.proxy.cNumSupports = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cNumSupports '+e);
			console.error('Problems setting cNumSupports',e);
		}
	};
	this.cNumSupports_changed = function () {
		var value = this.cNumSupports;
		return value;
	};
	try {
		this.cNumSupports = new SFInt32(10);
	} catch (e) {
		console.log('Problems setting cNumSupports '+e);
		console.error('Problems setting cNumSupports',e);
	}
	this.set_destination = function (value) {
		try {
			this.proxy.destination = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting destination '+e);
			console.error('Problems setting destination',e);
		}
	};
	this.destination_changed = function () {
		var value = this.destination;
		return value;
	};
	try {
		this.destination = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting destination '+e);
		console.error('Problems setting destination',e);
	}
	this.set_value = function (value) {
		try {
			this.proxy.value = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting value '+e);
			console.error('Problems setting value',e);
		}
	};
	this.value_changed = function () {
		var value = this.value;
		return value;
	};
	try {
		this.value = undefined;
	} catch (e) {
		console.log('Problems setting value '+e);
		console.error('Problems setting value',e);
	}
	this.set_cStepTime = function (value) {
		try {
			this.proxy.cStepTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cStepTime '+e);
			console.error('Problems setting cStepTime',e);
		}
	};
	this.cStepTime_changed = function () {
		var value = this.cStepTime;
		return value;
	};
	try {
		this.cStepTime = new SFTime(0);
	} catch (e) {
		console.log('Problems setting cStepTime '+e);
		console.error('Problems setting cStepTime',e);
	}
	this.set_previousValue = function (value) {
		try {
			this.proxy.previousValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting previousValue '+e);
			console.error('Problems setting previousValue',e);
		}
	};
	this.previousValue_changed = function () {
		var value = this.previousValue;
		return value;
	};
	try {
		this.previousValue = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting previousValue '+e);
		console.error('Problems setting previousValue',e);
	}
	this.set_initial_destination = function (value) {
		try {
			this.proxy.initial_destination = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting initial_destination '+e);
			console.error('Problems setting initial_destination',e);
		}
	};
	this.initial_destination_changed = function () {
		var value = this.initial_destination;
		return value;
	};
	try {
		this.initial_destination = new SFVec3f();
	} catch (e) {
		console.log('Problems setting initial_destination '+e);
		console.error('Problems setting initial_destination',e);
	}
	this.set_destination = function (value) {
		try {
			this.proxy.destination = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting destination '+e);
			console.error('Problems setting destination',e);
		}
	};
	this.destination_changed = function () {
		var value = this.destination;
		return value;
	};
	try {
		this.destination = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting destination '+e);
		console.error('Problems setting destination',e);
	}
	this.set_isActive = function (value) {
		try {
			this.proxy.isActive = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isActive '+e);
			console.error('Problems setting isActive',e);
		}
	};
	this.isActive_changed = function () {
		var value = this.isActive;
		return value;
	};
	try {
		this.isActive = new SFBool();
	} catch (e) {
		console.log('Problems setting isActive '+e);
		console.error('Problems setting isActive',e);
	}
	this.set_initial_value = function (value) {
		try {
			this.proxy.initial_value = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting initial_value '+e);
			console.error('Problems setting initial_value',e);
		}
	};
	this.initial_value_changed = function () {
		var value = this.initial_value;
		return value;
	};
	try {
		this.initial_value = new SFVec3f();
	} catch (e) {
		console.log('Problems setting initial_value '+e);
		console.error('Problems setting initial_value',e);
	}


ecmascript:

	this.initialize = function ()
{
    this.CheckInit();
}
;

	this.CheckInit = function ()
{
    if(!this.proxy.bInitialized)
    {
        this.proxy.bInitialized= true;  // this.Init() may call other functinos that call this.CheckInit(). In that case it's better the flag is already set, otherwise an endless loop would occur.
        this.Init();
    }
}
;

	this.Init = function ()
{
    this.proxy.destination= this.proxy.initial_destination;

    this.proxy.Buffer.length= this.proxy.cNumSupports;

    this.proxy.Buffer[0]= this.proxy.initial_destination;
    for(var C= 1; C<this.proxy.Buffer.length; C++ )
        this.proxy.Buffer[C]= this.proxy.initial_value;

    this.proxy.previousValue= this.proxy.initial_value;

    this.proxy.cStepTime= this.proxy.duration / this.proxy.cNumSupports;
}
;

	this.set_destination = function (Dest, Now)
{
    this.CheckInit();

    this.proxy.destination= Dest;
    // Somehow we assign to this.proxy.Buffer[-1] and wait untill this gets shifted into the real buffer.
    // Would we assign to this.proxy.Buffer[0] instead, we'd have no delay, but this would create a jump in the
    // output because this.proxy.Buffer[0] is associated with a value in the past.

    this.UpdateBuffer(Now);
}
;

	this.Tick = function (Now)
{
    this.CheckInit();

    if(!this.proxy.BufferEndTime)
    {
        this.proxy.BufferEndTime= Now; // first event we received, so we are in the initialization phase.

        this.proxy.value_changed= this.proxy.initial_value;
        return;
    }

    var Frac= this.UpdateBuffer(Now);
    // Frac is a value in   0 <= Frac < 1.

    // Now we can calculate the output.
    // This means we calculate the delta between each entry in this.proxy.Buffer and its previous
    // entries, calculate the step response of each such step and add it to form the output.

    // The oldest vaule this.proxy.Buffer[this.proxy.Buffer.length - 1] needs some extra thought, because it has
    // no previous value. More exactly, we haven't stored a previous value anymore.
    // However, the step response of that missing previous value has already reached its
    // this.proxy.destination, so we can - would we have that previous value - use this as a start point
    // for adding the step responses.
    // Actually this.UpdateBuffer(.) maintains this value in

    var Output= this.proxy.previousValue;

    var DeltaIn= this.proxy.Buffer[this.proxy.Buffer.length - 1].subtract(this.proxy.previousValue);

    var DeltaOut= DeltaIn.multiply(this.StepResponse((this.proxy.Buffer.length - 1 + Frac) * this.proxy.cStepTime));

    Output= Output.add(DeltaOut);

    for(var C= this.proxy.Buffer.length - 2; C>=0; C-- )
    {
        var DeltaIn= this.proxy.Buffer[C].subtract(this.proxy.Buffer[C + 1]);

        var DeltaOut= DeltaIn.multiply(this.StepResponse((C + Frac) * this.proxy.cStepTime));

        Output= Output.add(DeltaOut);
    }
    if(Output != this.proxy.value_changed)
        this.proxy.value_changed= Output;
}
;

	this.UpdateBuffer = function (Now)
{
    var Frac= (Now - this.proxy.BufferEndTime) / this.proxy.cStepTime;
    // is normally < 1. When it has grown to be larger than 1, we have to shift the array because the step response
    // of the oldest entry has already reached its this.proxy.destination, and it's time for a newer entry.
    // has already reached it
    // In the case of a very low frame rate, or a very short this.proxy.cStepTime we may need to shift by more than one entry.

    if(Frac >= 1)
    {
        var NumToShift= Math.floor(Frac);
        Frac-= NumToShift;

        if(NumToShift < this.proxy.Buffer.length)
        {   // normal case.

            this.proxy.previousValue= this.proxy.Buffer[this.proxy.Buffer.length - NumToShift];

            for(var C= this.proxy.Buffer.length - 1; C>=NumToShift; C-- )
                this.proxy.Buffer[C]= this.proxy.Buffer[C - NumToShift];

            for(var C= 0; C<NumToShift; C++ )
            {
                // Hmm, we have a this.proxy.destination value, but don't know how it has
                // reached the current state.
                // Therefore we do a linear interpolation from the latest value in the buffer to this.proxy.destination.

                var Alpha= C / NumToShift;

                this.proxy.Buffer[C]= this.proxy.Buffer[NumToShift].multiply(Alpha).add(this.proxy.destination.multiply((1 - Alpha)));
            }
        }else
        {
            // degenerated case:
            //
            // We have a _VERY_ low frame rate...
            // we can only guess how we should fill the array.
            // Maybe we could write part of a linear interpolation
            // from this.proxy.Buffer[0] to this.proxy.destination, that goes from this.proxy.BufferEndTime to Now
            // (possibly only the end of the interpolation is to be written),
            // but if we rech here we are in a very degenerate case...
            // Thus we just write this.proxy.destination to the buffer.

            this.proxy.previousValue= NumToShift == this.proxy.Buffer.length? this.proxy.Buffer[0] : this.proxy.destination;

            for(var C= 0; C<this.proxy.Buffer.length; C++ )
                this.proxy.Buffer[C]= this.proxy.destination;
        }

        this.proxy.BufferEndTime+= NumToShift * this.proxy.cStepTime;
    }
    return Frac;
}
;

	this.StepResponse = function (t)
{
    if(t < 0)
        return 0;

    if(t > this.proxy.duration)
        return 1;

    // When optimizing for speed, the above two if(.) cases can be omitted,
    // as this funciton will not be called for values outside of 0..proxy.duration.

    return this.StepResponseCore(t / this.proxy.duration);
}

// This fu;

	this.StepResponseCore = function (T)
{
    return .5 - .5 * Math.cos(T * Math.PI);
}

// The followi;

	this.StepResponseCoreF = function (T)
{
    var cTau= .3;
    var cFrequency= 2.5;
    return 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.exp(-T / cTau) * (1 - T);
//      return 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.exp(-T / cTau) * (1 - T) * (1 - T);
//      return 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.exp(-T / cTau) * (.5 + .5 * Math.cos(T * Math.PI));
//      return 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.exp(-T / cTau) * (.5 + .5 * Math.cos(T * Math.PI))* (.5 + .5 * Math.cos(T * Math.PI));
}

;

	this.StepResponseCoreE = function (T)
{
    var A= .5 - .5 * Math.cos(T * Math.PI);

    var cFrequency= 2.5;
    var B= 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.sin(Math.sqrt(1 - T) * Math.PI/2);

    return A * .8 + B * .2;
}

;

	this.StepResponseCoreD = function (T)
{
    var A= .5 - .5 * Math.cos(T * Math.PI);

    var cFrequency= 2.5;
    var B= 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.sin((1 - T) * Math.PI/2);

    return A * .8 + B * .2;
}
;

	this.StepResponseCoreC = function (T)
{
    var A= .5 - .5 * Math.cos(T * Math.PI);

    var cTau= .3;
    var cFrequency= 5;
    var B= 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.exp(-T / cTau) * (1 - T);

    return A * .8 + B * .2;
}
;

	this.StepResponseCoreB = function (T)
{
    var A= .5 - .5 * Math.cos(T * Math.PI);

    var cTau= .3;
    var cFrequency= 5;
    var B= 1 - Math.cos(T * 2 * Math.PI * cFrequency) /** Math.exp(-T / cTau)*/ * (1 - T);

    return A * .8 + B * .2;
};

	this.StepResponseCoreA = function (T)
{
    var A= .5 - .5 * Math.cos(T * Math.PI);

    var cTau= .3;
    var cFrequency= 5;
    var B= 1 - Math.cos(T * 2 * Math.PI * cFrequency) /** Math.exp(-T / cTau)*/ * (1 - T);

    var Alpha= .2 * T;
    return A * (1 - Alpha) + B * Alpha;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PositionChaser'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PositionChaser']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PositionChaser'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PositionChaser'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PositionChaser']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PositionChaser']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PositionChaser'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PositionChaser']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PositionChaser']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PositionChaser'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PositionChaser'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_OrientationChaser'] = function() {
	this.set_Tick = function (value) {
		try {
			this.proxy.Tick = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Tick '+e);
			console.error('Problems setting Tick',e);
		}
	};
	this.Tick_changed = function () {
		var value = this.Tick;
		return value;
	};
	try {
		this.Tick = new SFTime();
	} catch (e) {
		console.log('Problems setting Tick '+e);
		console.error('Problems setting Tick',e);
	}
	this.set_value = function (value) {
		try {
			this.proxy.value = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting value '+e);
			console.error('Problems setting value',e);
		}
	};
	this.value_changed = function () {
		var value = this.value;
		return value;
	};
	try {
		this.value = undefined;
	} catch (e) {
		console.log('Problems setting value '+e);
		console.error('Problems setting value',e);
	}
	this.set_duration = function (value) {
		try {
			this.proxy.duration = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting duration '+e);
			console.error('Problems setting duration',e);
		}
	};
	this.duration_changed = function () {
		var value = this.duration;
		return value;
	};
	try {
		this.duration = new SFTime();
	} catch (e) {
		console.log('Problems setting duration '+e);
		console.error('Problems setting duration',e);
	}
	this.set_Buffer = function (value) {
		try {
			this.proxy.Buffer = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Buffer '+e);
			console.error('Problems setting Buffer',e);
		}
	};
	this.Buffer_changed = function () {
		var value = this.Buffer;
		return value;
	};
	try {
		this.Buffer = new MFRotation();
	} catch (e) {
		console.log('Problems setting Buffer '+e);
		console.error('Problems setting Buffer',e);
	}
	this.set_bInitialized = function (value) {
		try {
			this.proxy.bInitialized = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting bInitialized '+e);
			console.error('Problems setting bInitialized',e);
		}
	};
	this.bInitialized_changed = function () {
		var value = this.bInitialized;
		return value;
	};
	try {
		this.bInitialized = new SFBool(false);
	} catch (e) {
		console.log('Problems setting bInitialized '+e);
		console.error('Problems setting bInitialized',e);
	}
	this.set_BufferEndTime = function (value) {
		try {
			this.proxy.BufferEndTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting BufferEndTime '+e);
			console.error('Problems setting BufferEndTime',e);
		}
	};
	this.BufferEndTime_changed = function () {
		var value = this.BufferEndTime;
		return value;
	};
	try {
		this.BufferEndTime = new SFTime(0);
	} catch (e) {
		console.log('Problems setting BufferEndTime '+e);
		console.error('Problems setting BufferEndTime',e);
	}
	this.set_cNumSupports = function (value) {
		try {
			this.proxy.cNumSupports = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cNumSupports '+e);
			console.error('Problems setting cNumSupports',e);
		}
	};
	this.cNumSupports_changed = function () {
		var value = this.cNumSupports;
		return value;
	};
	try {
		this.cNumSupports = new SFInt32(10);
	} catch (e) {
		console.log('Problems setting cNumSupports '+e);
		console.error('Problems setting cNumSupports',e);
	}
	this.set_destination = function (value) {
		try {
			this.proxy.destination = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting destination '+e);
			console.error('Problems setting destination',e);
		}
	};
	this.destination_changed = function () {
		var value = this.destination;
		return value;
	};
	try {
		this.destination = new SFRotation(0,0,1,0);
	} catch (e) {
		console.log('Problems setting destination '+e);
		console.error('Problems setting destination',e);
	}
	this.set_value = function (value) {
		try {
			this.proxy.value = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting value '+e);
			console.error('Problems setting value',e);
		}
	};
	this.value_changed = function () {
		var value = this.value;
		return value;
	};
	try {
		this.value = undefined;
	} catch (e) {
		console.log('Problems setting value '+e);
		console.error('Problems setting value',e);
	}
	this.set_cStepTime = function (value) {
		try {
			this.proxy.cStepTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cStepTime '+e);
			console.error('Problems setting cStepTime',e);
		}
	};
	this.cStepTime_changed = function () {
		var value = this.cStepTime;
		return value;
	};
	try {
		this.cStepTime = new SFTime(0);
	} catch (e) {
		console.log('Problems setting cStepTime '+e);
		console.error('Problems setting cStepTime',e);
	}
	this.set_previousValue = function (value) {
		try {
			this.proxy.previousValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting previousValue '+e);
			console.error('Problems setting previousValue',e);
		}
	};
	this.previousValue_changed = function () {
		var value = this.previousValue;
		return value;
	};
	try {
		this.previousValue = new SFRotation(0,0,1,0);
	} catch (e) {
		console.log('Problems setting previousValue '+e);
		console.error('Problems setting previousValue',e);
	}
	this.set_initial_destination = function (value) {
		try {
			this.proxy.initial_destination = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting initial_destination '+e);
			console.error('Problems setting initial_destination',e);
		}
	};
	this.initial_destination_changed = function () {
		var value = this.initial_destination;
		return value;
	};
	try {
		this.initial_destination = new SFRotation();
	} catch (e) {
		console.log('Problems setting initial_destination '+e);
		console.error('Problems setting initial_destination',e);
	}
	this.set_destination = function (value) {
		try {
			this.proxy.destination = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting destination '+e);
			console.error('Problems setting destination',e);
		}
	};
	this.destination_changed = function () {
		var value = this.destination;
		return value;
	};
	try {
		this.destination = new SFRotation(0,0,1,0);
	} catch (e) {
		console.log('Problems setting destination '+e);
		console.error('Problems setting destination',e);
	}
	this.set_isActive = function (value) {
		try {
			this.proxy.isActive = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isActive '+e);
			console.error('Problems setting isActive',e);
		}
	};
	this.isActive_changed = function () {
		var value = this.isActive;
		return value;
	};
	try {
		this.isActive = new SFBool();
	} catch (e) {
		console.log('Problems setting isActive '+e);
		console.error('Problems setting isActive',e);
	}
	this.set_initial_value = function (value) {
		try {
			this.proxy.initial_value = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting initial_value '+e);
			console.error('Problems setting initial_value',e);
		}
	};
	this.initial_value_changed = function () {
		var value = this.initial_value;
		return value;
	};
	try {
		this.initial_value = new SFRotation();
	} catch (e) {
		console.log('Problems setting initial_value '+e);
		console.error('Problems setting initial_value',e);
	}


ecmascript:

	this.initialize = function ()
{
    this.CheckInit();
}
;

	this.CheckInit = function ()
{
    if(!this.proxy.bInitialized)
    {
        this.proxy.bInitialized= true;  // this.Init() may call other functinos that call this.CheckInit(). In that case it's better the flag is already set, otherwise an endless loop would occur.
        this.Init();
    }
}
;

	this.Init = function ()
{
    this.proxy.destination= this.proxy.initial_destination;

    this.proxy.Buffer.length= this.proxy.cNumSupports;

    this.proxy.Buffer[0]= this.proxy.initial_destination;
    for(var C= 1; C<this.proxy.Buffer.length; C++ )
        this.proxy.Buffer[C]= this.proxy.initial_value;

    this.proxy.previousValue= this.proxy.initial_value;

    this.proxy.cStepTime= this.proxy.duration / this.proxy.cNumSupports;
}
;

	this.set_destination = function (Dest, Now)
{
    this.CheckInit();

    this.proxy.destination= Dest;
    // Somehow we assign to this.proxy.Buffer[-1] and wait untill this gets shifted into the real buffer.
    // Would we assign to this.proxy.Buffer[0] instead, we'd have no delay, but this would create a jump in the
    // output because this.proxy.Buffer[0] is associated with a value in the past.

    this.UpdateBuffer(Now);
}
;

	this.Tick = function (Now)
{
    this.CheckInit();

    if(!this.proxy.BufferEndTime)
    {
        this.proxy.BufferEndTime= Now; // first event we received, so we are in the initialization phase.

        this.proxy.value_changed= this.proxy.initial_value;
        return;
    }

    var Frac= this.UpdateBuffer(Now);
    // Frac is a value in   0 <= Frac < 1.

    // Now we can calculate the output.
    // This means we calculate the delta between each entry in this.proxy.Buffer and its previous
    // entries, calculate the step response of each such step and add it to form the output.

    // The oldest vaule this.proxy.Buffer[this.proxy.Buffer.length - 1] needs some extra thought, because it has
    // no previous value. More exactly, we haven't stored a previous value anymore.
    // However, the step response of that missing previous value has already reached its
    // this.proxy.destination, so we can - would we have that previous value - use this as a start point
    // for adding the step responses.
    // Actually this.UpdateBuffer(.) maintains this value in

    var Output= this.proxy.previousValue;

    var DeltaIn= this.proxy.previousValue.inverse().multiply(this.proxy.Buffer[this.proxy.Buffer.length - 1]);

    Output= Output.slerp(Output.multiply(DeltaIn), this.StepResponse((this.proxy.Buffer.length - 1 + Frac) * this.proxy.cStepTime));

    for(var C= this.proxy.Buffer.length - 2; C>=0; C-- )
    {
        var DeltaIn= this.proxy.Buffer[C + 1].inverse().multiply(this.proxy.Buffer[C]);

        Output= Output.slerp(Output.multiply(DeltaIn), this.StepResponse((C + Frac) * this.proxy.cStepTime));
    }


    if(Output != this.proxy.value_changed)
        this.proxy.value_changed= Output;
}
;

	this.UpdateBuffer = function (Now)
{
    var Frac= (Now - this.proxy.BufferEndTime) / this.proxy.cStepTime;
    // is normally < 1. When it has grown to be larger than 1, we have to shift the array because the step response
    // of the oldest entry has already reached its this.proxy.destination, and it's time for a newer entry.
    // has already reached it
    // In the case of a very low frame rate, or a very short this.proxy.cStepTime we may need to shift by more than one entry.

    if(Frac >= 1)
    {
        var NumToShift= Math.floor(Frac);
        Frac-= NumToShift;

        if(NumToShift < this.proxy.Buffer.length)
        {   // normal case.

            this.proxy.previousValue= this.proxy.Buffer[this.proxy.Buffer.length - NumToShift];

            for(var C= this.proxy.Buffer.length - 1; C>=NumToShift; C-- )
                this.proxy.Buffer[C]= this.proxy.Buffer[C - NumToShift];

            for(var C= 0; C<NumToShift; C++ )
            {
                // Hmm, we have a this.proxy.destination value, but don't know how it has
                // reached the current state.
                // Therefore we do a linear interpolation from the latest value in the buffer to this.proxy.destination.

                this.proxy.Buffer[C]= this.proxy.destination.slerp(this.proxy.Buffer[NumToShift], C / NumToShift);
            }
        }else
        {
            // degenerated case:
            //
            // We have a _VERY_ low frame rate...
            // we can only guess how we should fill the array.
            // Maybe we could write part of a linear interpolation
            // from this.proxy.Buffer[0] to this.proxy.destination, that goes from this.proxy.BufferEndTime to Now
            // (possibly only the end of the interpolation is to be written),
            // but if we rech here we are in a very degenerate case...
            // Thus we just write this.proxy.destination to the buffer.

            this.proxy.previousValue= NumToShift == this.proxy.Buffer.length? this.proxy.Buffer[0] : this.proxy.destination;

            for(var C= 0; C<this.proxy.Buffer.length; C++ )
                this.proxy.Buffer[C]= this.proxy.destination;
        }
        this.proxy.BufferEndTime+= NumToShift * this.proxy.cStepTime;
    }

return Frac;
}
;

	this.StepResponse = function (t)
{
    if(t < 0)
        return 0;

    if(t > this.proxy.duration)
        return 1;

    // When optimizing for speed, the above two if(.) cases can be omitted,
    // as this funciton will not be called for values outside of 0..proxy.duration.

     return this.StepResponseCore(t / this.proxy.duration);
}

// This fu;

	this.StepResponseCore = function (T)
{
    return .5 - .5 * Math.cos(T * Math.PI);
}

// The followi;

	this.StepResponseCoreG = function (T)
{
    var cTau= .3;
    var cFrequency= 5;
    return 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.exp(-T / cTau) * (.5 + .5 * Math.cos(T * Math.PI));
}
;

	this.StepResponseCoreF = function (T)
{
    var cTau= .3;
    var cFrequency= 2.5;
//      return 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.exp(-T / cTau) * (1 - T);
//      return 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.exp(-T / cTau) * (1 - T) * (1 - T);
//      return 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.exp(-T / cTau) * (.5 + .5 * Math.cos(T * Math.PI));
//      return 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.exp(-T / cTau) * (.5 + .5 * Math.cos(T * Math.PI))* (.5 + .5 * Math.cos(T * Math.PI));
}
;

	this.StepResponseCoreE = function (T)
{
    var A= .5 - .5 * Math.cos(T * Math.PI);

    var cFrequency= 2.5;
    var B= 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.sin(Math.sqrt(1 - T) * Math.PI/2);

    return A * .8 + B * .2;
}
;

	this.StepResponseCoreD = function (T)
{
    var A= .5 - .5 * Math.cos(T * Math.PI);

    var cFrequency= 2.5;
    var B= 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.sin((1 - T) * Math.PI/2);

    return A * .8 + B * .2;
}
;

	this.StepResponseCoreC = function (T)
{
    var A= .5 - .5 * Math.cos(T * Math.PI);

    var cTau= .3;
    var cFrequency= 5;
    var B= 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.exp(-T / cTau) * (1 - T);

    return A * .8 + B * .2;
}
;

	this.StepResponseCoreB = function (T)
{
    var A= .5 - .5 * Math.cos(T * Math.PI);

    var cTau= .3;
    var cFrequency= 5;
    var B= 1 - Math.cos(T * 2 * Math.PI * cFrequency) /** Math.exp(-T / cTau)*/ * (1 - T);

    return A * .8 + B * .2;
}
;

	this.StepResponseCoreA = function (T)
{
    var A= .5 - .5 * Math.cos(T * Math.PI);
    var cTau= .3;
    var cFrequency= 5;
    var B= 1 - Math.cos(T * 2 * Math.PI * cFrequency) /** Math.exp(-T / cTau)*/ * (1 - T);
    var Alpha= .2 * T;
    return A * (1 - Alpha) + B * Alpha;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_OrientationChaser'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_OrientationChaser']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_OrientationChaser'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_OrientationChaser'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_OrientationChaser']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_OrientationChaser']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_OrientationChaser'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_OrientationChaser']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_OrientationChaser']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_OrientationChaser'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_OrientationChaser'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_Position2fChaser'] = function() {
	this.set_Tick = function (value) {
		try {
			this.proxy.Tick = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Tick '+e);
			console.error('Problems setting Tick',e);
		}
	};
	this.Tick_changed = function () {
		var value = this.Tick;
		return value;
	};
	try {
		this.Tick = new SFTime();
	} catch (e) {
		console.log('Problems setting Tick '+e);
		console.error('Problems setting Tick',e);
	}
	this.set_value = function (value) {
		try {
			this.proxy.value = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting value '+e);
			console.error('Problems setting value',e);
		}
	};
	this.value_changed = function () {
		var value = this.value;
		return value;
	};
	try {
		this.value = undefined;
	} catch (e) {
		console.log('Problems setting value '+e);
		console.error('Problems setting value',e);
	}
	this.set_duration = function (value) {
		try {
			this.proxy.duration = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting duration '+e);
			console.error('Problems setting duration',e);
		}
	};
	this.duration_changed = function () {
		var value = this.duration;
		return value;
	};
	try {
		this.duration = new SFTime();
	} catch (e) {
		console.log('Problems setting duration '+e);
		console.error('Problems setting duration',e);
	}
	this.set_Buffer = function (value) {
		try {
			this.proxy.Buffer = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Buffer '+e);
			console.error('Problems setting Buffer',e);
		}
	};
	this.Buffer_changed = function () {
		var value = this.Buffer;
		return value;
	};
	try {
		this.Buffer = new MFVec2f();
	} catch (e) {
		console.log('Problems setting Buffer '+e);
		console.error('Problems setting Buffer',e);
	}
	this.set_bInitialized = function (value) {
		try {
			this.proxy.bInitialized = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting bInitialized '+e);
			console.error('Problems setting bInitialized',e);
		}
	};
	this.bInitialized_changed = function () {
		var value = this.bInitialized;
		return value;
	};
	try {
		this.bInitialized = new SFBool(false);
	} catch (e) {
		console.log('Problems setting bInitialized '+e);
		console.error('Problems setting bInitialized',e);
	}
	this.set_BufferEndTime = function (value) {
		try {
			this.proxy.BufferEndTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting BufferEndTime '+e);
			console.error('Problems setting BufferEndTime',e);
		}
	};
	this.BufferEndTime_changed = function () {
		var value = this.BufferEndTime;
		return value;
	};
	try {
		this.BufferEndTime = new SFTime(0);
	} catch (e) {
		console.log('Problems setting BufferEndTime '+e);
		console.error('Problems setting BufferEndTime',e);
	}
	this.set_cNumSupports = function (value) {
		try {
			this.proxy.cNumSupports = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cNumSupports '+e);
			console.error('Problems setting cNumSupports',e);
		}
	};
	this.cNumSupports_changed = function () {
		var value = this.cNumSupports;
		return value;
	};
	try {
		this.cNumSupports = new SFInt32(10);
	} catch (e) {
		console.log('Problems setting cNumSupports '+e);
		console.error('Problems setting cNumSupports',e);
	}
	this.set_destination = function (value) {
		try {
			this.proxy.destination = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting destination '+e);
			console.error('Problems setting destination',e);
		}
	};
	this.destination_changed = function () {
		var value = this.destination;
		return value;
	};
	try {
		this.destination = new SFVec2f(0,0);
	} catch (e) {
		console.log('Problems setting destination '+e);
		console.error('Problems setting destination',e);
	}
	this.set_value = function (value) {
		try {
			this.proxy.value = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting value '+e);
			console.error('Problems setting value',e);
		}
	};
	this.value_changed = function () {
		var value = this.value;
		return value;
	};
	try {
		this.value = undefined;
	} catch (e) {
		console.log('Problems setting value '+e);
		console.error('Problems setting value',e);
	}
	this.set_cStepTime = function (value) {
		try {
			this.proxy.cStepTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cStepTime '+e);
			console.error('Problems setting cStepTime',e);
		}
	};
	this.cStepTime_changed = function () {
		var value = this.cStepTime;
		return value;
	};
	try {
		this.cStepTime = new SFTime(0);
	} catch (e) {
		console.log('Problems setting cStepTime '+e);
		console.error('Problems setting cStepTime',e);
	}
	this.set_previousValue = function (value) {
		try {
			this.proxy.previousValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting previousValue '+e);
			console.error('Problems setting previousValue',e);
		}
	};
	this.previousValue_changed = function () {
		var value = this.previousValue;
		return value;
	};
	try {
		this.previousValue = new SFVec2f(0,0);
	} catch (e) {
		console.log('Problems setting previousValue '+e);
		console.error('Problems setting previousValue',e);
	}
	this.set_initial_destination = function (value) {
		try {
			this.proxy.initial_destination = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting initial_destination '+e);
			console.error('Problems setting initial_destination',e);
		}
	};
	this.initial_destination_changed = function () {
		var value = this.initial_destination;
		return value;
	};
	try {
		this.initial_destination = new SFVec2f();
	} catch (e) {
		console.log('Problems setting initial_destination '+e);
		console.error('Problems setting initial_destination',e);
	}
	this.set_destination = function (value) {
		try {
			this.proxy.destination = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting destination '+e);
			console.error('Problems setting destination',e);
		}
	};
	this.destination_changed = function () {
		var value = this.destination;
		return value;
	};
	try {
		this.destination = new SFVec2f(0,0);
	} catch (e) {
		console.log('Problems setting destination '+e);
		console.error('Problems setting destination',e);
	}
	this.set_isActive = function (value) {
		try {
			this.proxy.isActive = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isActive '+e);
			console.error('Problems setting isActive',e);
		}
	};
	this.isActive_changed = function () {
		var value = this.isActive;
		return value;
	};
	try {
		this.isActive = new SFBool();
	} catch (e) {
		console.log('Problems setting isActive '+e);
		console.error('Problems setting isActive',e);
	}
	this.set_initial_value = function (value) {
		try {
			this.proxy.initial_value = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting initial_value '+e);
			console.error('Problems setting initial_value',e);
		}
	};
	this.initial_value_changed = function () {
		var value = this.initial_value;
		return value;
	};
	try {
		this.initial_value = new SFVec2f();
	} catch (e) {
		console.log('Problems setting initial_value '+e);
		console.error('Problems setting initial_value',e);
	}


ecmascript:

	this.initialize = function ()
{
    this.CheckInit();
}
;

	this.CheckInit = function ()
{
    if(!this.proxy.bInitialized)
    {
        this.proxy.bInitialized= true;  // this.Init() may call other functinos that call this.CheckInit(). In that case it's better the flag is already set, otherwise an endless loop would occur.
        this.Init();
    }
}
;

	this.Init = function ()
{
    this.proxy.destination= this.proxy.initial_destination;

    this.proxy.Buffer.length= this.proxy.cNumSupports;

    this.proxy.Buffer[0]= this.proxy.initial_destination;
    for(var C= 1; C<this.proxy.Buffer.length; C++ )
        this.proxy.Buffer[C]= this.proxy.initial_value;

    this.proxy.previousValue= this.proxy.initial_value;

    this.proxy.cStepTime= this.proxy.duration / this.proxy.cNumSupports;
}
;

	this.set_destination = function (Dest, Now)
{
    this.CheckInit();

    this.proxy.destination= Dest;
    // Somehow we assign to this.proxy.Buffer[-1] and wait untill this gets shifted into the real buffer.
    // Would we assign to this.proxy.Buffer[0] instead, we'd have no delay, but this would create a jump in the
    // output because this.proxy.Buffer[0] is associated with a value in the past.

    this.UpdateBuffer(Now);
}
;

	this.Tick = function (Now)
{
    this.CheckInit();

    if(!this.proxy.BufferEndTime)
    {
        this.proxy.BufferEndTime= Now; // first event we received, so we are in the initialization phase.

        this.proxy.value_changed= this.proxy.initial_value;
        return;
    }

    var Frac= this.UpdateBuffer(Now);
    // Frac is a value in   0 <= Frac < 1.

    // Now we can calculate the output.
    // This means we calculate the delta between each entry in this.proxy.Buffer and its previous
    // entries, calculate the step response of each such step and add it to form the output.

    // The oldest vaule this.proxy.Buffer[this.proxy.Buffer.length - 1] needs some extra thought, because it has
    // no previous value. More exactly, we haven't stored a previous value anymore.
    // However, the step response of that missing previous value has already reached its
    // this.proxy.destination, so we can - would we have that previous value - use this as a start point
    // for adding the step responses.
    // Actually this.UpdateBuffer(.) maintains this value in

    var Output= this.proxy.previousValue;

    var DeltaIn= this.proxy.Buffer[this.proxy.Buffer.length - 1].subtract(this.proxy.previousValue);

    var DeltaOut= DeltaIn.multiply(this.StepResponse((this.proxy.Buffer.length - 1 + Frac) * this.proxy.cStepTime));

    Output= Output.add(DeltaOut);

    for(var C= this.proxy.Buffer.length - 2; C>=0; C-- )
    {
        var DeltaIn= this.proxy.Buffer[C].subtract(this.proxy.Buffer[C + 1]);

        var DeltaOut= DeltaIn.multiply(this.StepResponse((C + Frac) * this.proxy.cStepTime));

        Output= Output.add(DeltaOut);
    }


    if(Output != this.proxy.value_changed)
        this.proxy.value_changed= Output;
}
;

	this.UpdateBuffer = function (Now)
{
    var Frac= (Now - this.proxy.BufferEndTime) / this.proxy.cStepTime;
    // is normally < 1. When it has grown to be larger than 1, we have to shift the array because the step response
    // of the oldest entry has already reached its this.proxy.destination, and it's time for a newer entry.
    // has already reached it
    // In the case of a very low frame rate, or a very short this.proxy.cStepTime we may need to shift by more than one entry.

    if(Frac >= 1)
    {
        var NumToShift= Math.floor(Frac);
        Frac-= NumToShift;

        if(NumToShift < this.proxy.Buffer.length)
        {   // normal case.

            this.proxy.previousValue= this.proxy.Buffer[this.proxy.Buffer.length - NumToShift];

            for(var C= this.proxy.Buffer.length - 1; C>=NumToShift; C-- )
                this.proxy.Buffer[C]= this.proxy.Buffer[C - NumToShift];

            for(var C= 0; C<NumToShift; C++ )
            {
                // Hmm, we have a this.proxy.destination value, but don't know how it has
                // reached the current state.
                // Therefore we do a linear interpolation from the latest value in the buffer to this.proxy.destination.

                var Alpha= C / NumToShift;

                this.proxy.Buffer[C]= this.proxy.Buffer[NumToShift].multiply(Alpha).add(this.proxy.destination.multiply((1 - Alpha)));
            }
        }else
        {
            // degenerated case:
            //
            // We have a _VERY_ low frame rate...
            // we can only guess how we should fill the array.
            // Maybe we could write part of a linear interpolation
            // from this.proxy.Buffer[0] to this.proxy.destination, that goes from this.proxy.BufferEndTime to Now
            // (possibly only the end of the interpolation is to be written),
            // but if we rech here we are in a very degenerate case...
            // Thus we just write this.proxy.destination to the buffer.

            this.proxy.previousValue= NumToShift == this.proxy.Buffer.length? this.proxy.Buffer[0] : this.proxy.destination;

            for(var C= 0; C<this.proxy.Buffer.length; C++ )
                this.proxy.Buffer[C]= this.proxy.destination;
        }

        this.proxy.BufferEndTime+= NumToShift * this.proxy.cStepTime;
    }

return Frac;
}


;

	this.StepResponse = function (t)
{
    if(t < 0)
return 0;

    if(t > this.proxy.duration)
return 1;

    // When optimizing for speed, the above two if(.) cases can be omitted,
    // as this funciton will not be called for values outside of 0..proxy.duration.

return this.StepResponseCore(t / this.proxy.duration);
}


// This f;

	this.StepResponseCore = function (T)
{
return .5 - .5 * Math.cos(T * Math.PI);
}


// The follow;

	this.StepResponseCoreF = function (T)
{
    var cTau= .3;
    var cFrequency= 2.5;
return 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.exp(-T / cTau) * (1 - T);
//      return 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.exp(-T / cTau) * (1 - T) * (1 - T);
//      return 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.exp(-T / cTau) * (.5 + .5 * Math.cos(T * Math.PI));
//      return 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.exp(-T / cTau) * (.5 + .5 * Math.cos(T * Math.PI))* (.5 + .5 * Math.cos(T * Math.PI));
}
;

	this.StepResponseCoreE = function (T)
{
    var A= .5 - .5 * Math.cos(T * Math.PI);

  var cFrequency= 2.5;
    var B= 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.sin(Math.sqrt(1 - T) * Math.PI/2);

return A * .8 + B * .2;
}
;

	this.StepResponseCoreD = function (T)
{
    var A= .5 - .5 * Math.cos(T * Math.PI);

  var cFrequency= 2.5;
    var B= 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.sin((1 - T) * Math.PI/2);

return A * .8 + B * .2;
}
;

	this.StepResponseCoreC = function (T)
{
    var A= .5 - .5 * Math.cos(T * Math.PI);

  var cTau= .3;
  var cFrequency= 5;
    var B= 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.exp(-T / cTau) * (1 - T);

return A * .8 + B * .2;
}
;

	this.StepResponseCoreB = function (T)
{
    var A= .5 - .5 * Math.cos(T * Math.PI);

  var cTau= .3;
  var cFrequency= 5;
    var B= 1 - Math.cos(T * 2 * Math.PI * cFrequency) /** Math.exp(-T / cTau)*/ * (1 - T);

return A * .8 + B * .2;
}
;

	this.StepResponseCoreA = function (T)
{
    var A= .5 - .5 * Math.cos(T * Math.PI);

  var cTau= .3;
  var cFrequency= 5;
    var B= 1 - Math.cos(T * 2 * Math.PI * cFrequency) /** Math.exp(-T / cTau)*/ * (1 - T);

    var Alpha= .2 * T;
return A * (1 - Alpha) + B * Alpha;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_Position2fChaser'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_Position2fChaser']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_Position2fChaser'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_Position2fChaser'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_Position2fChaser']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_Position2fChaser']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_Position2fChaser'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_Position2fChaser']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_Position2fChaser']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_Position2fChaser'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_Position2fChaser'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PlacementChaser'] = function() {
	this.set_previousValueOri = function (value) {
		try {
			this.proxy.previousValueOri = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting previousValueOri '+e);
			console.error('Problems setting previousValueOri',e);
		}
	};
	this.previousValueOri_changed = function () {
		var value = this.previousValueOri;
		return value;
	};
	try {
		this.previousValueOri = new SFRotation(0,0,1,0);
	} catch (e) {
		console.log('Problems setting previousValueOri '+e);
		console.error('Problems setting previousValueOri',e);
	}
	this.set_Tick = function (value) {
		try {
			this.proxy.Tick = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Tick '+e);
			console.error('Problems setting Tick',e);
		}
	};
	this.Tick_changed = function () {
		var value = this.Tick;
		return value;
	};
	try {
		this.Tick = new SFTime();
	} catch (e) {
		console.log('Problems setting Tick '+e);
		console.error('Problems setting Tick',e);
	}
	this.set_duration = function (value) {
		try {
			this.proxy.duration = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting duration '+e);
			console.error('Problems setting duration',e);
		}
	};
	this.duration_changed = function () {
		var value = this.duration;
		return value;
	};
	try {
		this.duration = new SFTime();
	} catch (e) {
		console.log('Problems setting duration '+e);
		console.error('Problems setting duration',e);
	}
	this.set_destinationOri = function (value) {
		try {
			this.proxy.destinationOri = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting destinationOri '+e);
			console.error('Problems setting destinationOri',e);
		}
	};
	this.destinationOri_changed = function () {
		var value = this.destinationOri;
		return value;
	};
	try {
		this.destinationOri = new SFRotation(0,0,1,0);
	} catch (e) {
		console.log('Problems setting destinationOri '+e);
		console.error('Problems setting destinationOri',e);
	}
	this.set_bInitialized = function (value) {
		try {
			this.proxy.bInitialized = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting bInitialized '+e);
			console.error('Problems setting bInitialized',e);
		}
	};
	this.bInitialized_changed = function () {
		var value = this.bInitialized;
		return value;
	};
	try {
		this.bInitialized = new SFBool(false);
	} catch (e) {
		console.log('Problems setting bInitialized '+e);
		console.error('Problems setting bInitialized',e);
	}
	this.set_valueOri = function (value) {
		try {
			this.proxy.valueOri = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting valueOri '+e);
			console.error('Problems setting valueOri',e);
		}
	};
	this.valueOri_changed = function () {
		var value = this.valueOri;
		return value;
	};
	try {
		this.valueOri = undefined;
	} catch (e) {
		console.log('Problems setting valueOri '+e);
		console.error('Problems setting valueOri',e);
	}
	this.set_previousValuePos = function (value) {
		try {
			this.proxy.previousValuePos = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting previousValuePos '+e);
			console.error('Problems setting previousValuePos',e);
		}
	};
	this.previousValuePos_changed = function () {
		var value = this.previousValuePos;
		return value;
	};
	try {
		this.previousValuePos = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting previousValuePos '+e);
		console.error('Problems setting previousValuePos',e);
	}
	this.set_destinationOri = function (value) {
		try {
			this.proxy.destinationOri = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting destinationOri '+e);
			console.error('Problems setting destinationOri',e);
		}
	};
	this.destinationOri_changed = function () {
		var value = this.destinationOri;
		return value;
	};
	try {
		this.destinationOri = new SFRotation(0,0,1,0);
	} catch (e) {
		console.log('Problems setting destinationOri '+e);
		console.error('Problems setting destinationOri',e);
	}
	this.set_initial_valueOri = function (value) {
		try {
			this.proxy.initial_valueOri = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting initial_valueOri '+e);
			console.error('Problems setting initial_valueOri',e);
		}
	};
	this.initial_valueOri_changed = function () {
		var value = this.initial_valueOri;
		return value;
	};
	try {
		this.initial_valueOri = new SFRotation();
	} catch (e) {
		console.log('Problems setting initial_valueOri '+e);
		console.error('Problems setting initial_valueOri',e);
	}
	this.set_destinationPos = function (value) {
		try {
			this.proxy.destinationPos = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting destinationPos '+e);
			console.error('Problems setting destinationPos',e);
		}
	};
	this.destinationPos_changed = function () {
		var value = this.destinationPos;
		return value;
	};
	try {
		this.destinationPos = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting destinationPos '+e);
		console.error('Problems setting destinationPos',e);
	}
	this.set_BufferEndTime = function (value) {
		try {
			this.proxy.BufferEndTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting BufferEndTime '+e);
			console.error('Problems setting BufferEndTime',e);
		}
	};
	this.BufferEndTime_changed = function () {
		var value = this.BufferEndTime;
		return value;
	};
	try {
		this.BufferEndTime = new SFTime(0);
	} catch (e) {
		console.log('Problems setting BufferEndTime '+e);
		console.error('Problems setting BufferEndTime',e);
	}
	this.set_cNumSupports = function (value) {
		try {
			this.proxy.cNumSupports = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cNumSupports '+e);
			console.error('Problems setting cNumSupports',e);
		}
	};
	this.cNumSupports_changed = function () {
		var value = this.cNumSupports;
		return value;
	};
	try {
		this.cNumSupports = new SFInt32(10);
	} catch (e) {
		console.log('Problems setting cNumSupports '+e);
		console.error('Problems setting cNumSupports',e);
	}
	this.set_valuePos = function (value) {
		try {
			this.proxy.valuePos = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting valuePos '+e);
			console.error('Problems setting valuePos',e);
		}
	};
	this.valuePos_changed = function () {
		var value = this.valuePos;
		return value;
	};
	try {
		this.valuePos = undefined;
	} catch (e) {
		console.log('Problems setting valuePos '+e);
		console.error('Problems setting valuePos',e);
	}
	this.set_cStepTime = function (value) {
		try {
			this.proxy.cStepTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cStepTime '+e);
			console.error('Problems setting cStepTime',e);
		}
	};
	this.cStepTime_changed = function () {
		var value = this.cStepTime;
		return value;
	};
	try {
		this.cStepTime = new SFTime(0);
	} catch (e) {
		console.log('Problems setting cStepTime '+e);
		console.error('Problems setting cStepTime',e);
	}
	this.set_initial_destinationOri = function (value) {
		try {
			this.proxy.initial_destinationOri = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting initial_destinationOri '+e);
			console.error('Problems setting initial_destinationOri',e);
		}
	};
	this.initial_destinationOri_changed = function () {
		var value = this.initial_destinationOri;
		return value;
	};
	try {
		this.initial_destinationOri = new SFRotation();
	} catch (e) {
		console.log('Problems setting initial_destinationOri '+e);
		console.error('Problems setting initial_destinationOri',e);
	}
	this.set_BufferOri = function (value) {
		try {
			this.proxy.BufferOri = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting BufferOri '+e);
			console.error('Problems setting BufferOri',e);
		}
	};
	this.BufferOri_changed = function () {
		var value = this.BufferOri;
		return value;
	};
	try {
		this.BufferOri = new MFRotation();
	} catch (e) {
		console.log('Problems setting BufferOri '+e);
		console.error('Problems setting BufferOri',e);
	}
	this.set_destinationPos = function (value) {
		try {
			this.proxy.destinationPos = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting destinationPos '+e);
			console.error('Problems setting destinationPos',e);
		}
	};
	this.destinationPos_changed = function () {
		var value = this.destinationPos;
		return value;
	};
	try {
		this.destinationPos = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting destinationPos '+e);
		console.error('Problems setting destinationPos',e);
	}
	this.set_initial_valuePos = function (value) {
		try {
			this.proxy.initial_valuePos = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting initial_valuePos '+e);
			console.error('Problems setting initial_valuePos',e);
		}
	};
	this.initial_valuePos_changed = function () {
		var value = this.initial_valuePos;
		return value;
	};
	try {
		this.initial_valuePos = new SFVec3f();
	} catch (e) {
		console.log('Problems setting initial_valuePos '+e);
		console.error('Problems setting initial_valuePos',e);
	}
	this.set_valuePos = function (value) {
		try {
			this.proxy.valuePos = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting valuePos '+e);
			console.error('Problems setting valuePos',e);
		}
	};
	this.valuePos_changed = function () {
		var value = this.valuePos;
		return value;
	};
	try {
		this.valuePos = undefined;
	} catch (e) {
		console.log('Problems setting valuePos '+e);
		console.error('Problems setting valuePos',e);
	}
	this.set_isActive = function (value) {
		try {
			this.proxy.isActive = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isActive '+e);
			console.error('Problems setting isActive',e);
		}
	};
	this.isActive_changed = function () {
		var value = this.isActive;
		return value;
	};
	try {
		this.isActive = new SFBool();
	} catch (e) {
		console.log('Problems setting isActive '+e);
		console.error('Problems setting isActive',e);
	}
	this.set_initial_destinationPos = function (value) {
		try {
			this.proxy.initial_destinationPos = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting initial_destinationPos '+e);
			console.error('Problems setting initial_destinationPos',e);
		}
	};
	this.initial_destinationPos_changed = function () {
		var value = this.initial_destinationPos;
		return value;
	};
	try {
		this.initial_destinationPos = new SFVec3f();
	} catch (e) {
		console.log('Problems setting initial_destinationPos '+e);
		console.error('Problems setting initial_destinationPos',e);
	}
	this.set_valueOri = function (value) {
		try {
			this.proxy.valueOri = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting valueOri '+e);
			console.error('Problems setting valueOri',e);
		}
	};
	this.valueOri_changed = function () {
		var value = this.valueOri;
		return value;
	};
	try {
		this.valueOri = undefined;
	} catch (e) {
		console.log('Problems setting valueOri '+e);
		console.error('Problems setting valueOri',e);
	}
	this.set_BufferPos = function (value) {
		try {
			this.proxy.BufferPos = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting BufferPos '+e);
			console.error('Problems setting BufferPos',e);
		}
	};
	this.BufferPos_changed = function () {
		var value = this.BufferPos;
		return value;
	};
	try {
		this.BufferPos = new MFVec3f();
	} catch (e) {
		console.log('Problems setting BufferPos '+e);
		console.error('Problems setting BufferPos',e);
	}


ecmascript:

	this.initialize = function ()
{
    this.CheckInit();
}
;

	this.CheckInit = function ()
{
    if(!this.proxy.bInitialized)
    {
        this.proxy.bInitialized= true;  // this.Init() may call other functinos that call this.CheckInit(). In that case it's better the flag is already set, otherwise an endless loop would occur.
        this.Init();
    }
};

	this.Init = function ()
{
    this.proxy.destinationPos= this.proxy.initial_destinationPos;
    this.proxy.destinationOri= this.proxy.initial_destinationOri;

    this.proxy.BufferPos.length=
    this.proxy.BufferOri.length= this.proxy.cNumSupports;

    this.proxy.BufferPos[0]= this.proxy.initial_destinationPos;
    this.proxy.BufferOri[0]= this.proxy.initial_destinationOri;
    for(var C= 1; C<this.proxy.BufferPos.length; C++ )
    {
        this.proxy.BufferPos[C]= this.proxy.initial_valuePos;
        this.proxy.BufferOri[C]= this.proxy.initial_valueOri;
    }

    this.proxy.previousValuePos= this.proxy.initial_valuePos;
    this.proxy.previousValueOri= this.proxy.initial_valueOri;

    this.proxy.cStepTime= this.proxy.duration / this.proxy.cNumSupports;
};

	this.set_destinationPos = function (Dest, Now)
{
    this.CheckInit();

    this.proxy.destinationPos= Dest;
    // Somehow we assign to Buffer[-1] and wait untill this gets shifted into the real buffer.
    // Would we assign to Buffer[0] instead, we'd have no delay, but this would create a jump in the
    // output because Buffer[0] is associated with a value in the past.

    //this.UpdateBuffer(Now);
}
;

	this.set_destinationOri = function (Dest, Now)
{
    this.CheckInit();

    this.proxy.destinationOri= Dest;
    // Somehow we assign to Buffer[-1] and wait untill this gets shifted into the real buffer.
    // Would we assign to Buffer[0] instead, we'd have no delay, but this would create a jump in the
    // output because Buffer[0] is associated with a value in the past.

    //this.UpdateBuffer(Now);
};

	this.Tick = function (Now)
{
    this.CheckInit();

    if(!this.proxy.BufferEndTime)
    {
        this.proxy.BufferEndTime= Now; // first event we received, so we are in the initialization phase.

        this.proxy.valuePos_changed= this.proxy.initial_valuePos;
        this.proxy.valueOri_changed= this.proxy.initial_valueOri;
        return;
    }

    var Frac= this.UpdateBuffer(Now);
    // Frac is a value in   0 <= Frac < 1.

    // Now we can calculate the output.
    // This means we calculate the delta between each entry in Buffer and its previous
    // entries, calculate the step response of each such step and add it to form the output.

    // The oldest vaule Buffer[Buffer.length - 1] needs some extra thought, because it has
    // no previous value. More exactly, we haven't stored a previous value anymore.
    // However, the step response of that missing previous value has already reached its
    // destination, so we can - would we have that previous value - use this as a start point
    // for adding the step responses.
    // Actually this.UpdateBuffer(.) maintains this value in

    var OutputPos= this.proxy.previousValuePos;
    var OutputOri= this.proxy.previousValueOri;

    var DeltaInPos= this.proxy.BufferPos[this.proxy.BufferPos.length - 1].subtract(this.proxy.previousValuePos);
    var DeltaInOri= this.proxy.previousValueOri.inverse().multiply(this.proxy.BufferOri[this.proxy.BufferOri.length - 1]);

    var DeltaOutPos= DeltaInPos.multiply(this.StepResponse((this.proxy.BufferPos.length - 1 + Frac) * this.proxy.cStepTime));

    OutputPos= OutputPos.add(DeltaOutPos);
    OutputOri= OutputOri.slerp(OutputOri.multiply(DeltaInOri), this.StepResponse((this.proxy.BufferOri.length - 1 + Frac) * this.proxy.cStepTime));

    for(var C= this.proxy.BufferPos.length - 2; C>=0; C-- )
    {
        var DeltaInPos= this.proxy.BufferPos[C].subtract(this.proxy.BufferPos[C + 1]);
        var DeltaInOri= this.proxy.BufferOri[C + 1].inverse().multiply(this.proxy.BufferOri[C]);

        var DeltaOutPos= DeltaInPos.multiply(this.StepResponse((C + Frac) * this.proxy.cStepTime));

        OutputPos= OutputPos.add(DeltaOutPos);
        OutputOri= OutputOri.slerp(OutputOri.multiply(DeltaInOri), this.StepResponse((C + Frac) * this.proxy.cStepTime));
    }
    if(OutputPos != this.proxy.valuePos_changed)
        this.proxy.valuePos_changed= OutputPos;

    if(OutputOri != this.proxy.valueOri_changed)
        this.proxy.valueOri_changed= OutputOri;
};

	this.UpdateBuffer = function (Now)
{
    var Frac= (Now - this.proxy.BufferEndTime) / this.proxy.cStepTime;
    // is normally < 1. When it has grown to be larger than 1, we have to shift the array because the step response
    // of the oldest entry has already reached its destination, and it's time for a newer entry.
    // has already reached it
    // In the case of a very low frame rate, or a very short this.proxy.cStepTime we may need to shift by more than one entry.

    if(Frac >= 1)
    {
        var NumToShift= Math.floor(Frac);
        Frac-= NumToShift;

        if(NumToShift < this.proxy.BufferPos.length)
        {   // normal case.

            this.proxy.previousValuePos= this.proxy.BufferPos[this.proxy.BufferPos.length - NumToShift];
            this.proxy.previousValueOri= this.proxy.BufferOri[this.proxy.BufferOri.length - NumToShift];

            for(var C= this.proxy.BufferPos.length - 1; C>=NumToShift; C-- )
            {
                this.proxy.BufferPos[C]= this.proxy.BufferPos[C - NumToShift];
                this.proxy.BufferOri[C]= this.proxy.BufferOri[C - NumToShift];
            }

            for(var C= 0; C<NumToShift; C++ )
            {
                // Hmm, we have a destination value, but don't know how it has
                // reached the current state.
                // Therefore we do a linear interpolation from the latest value in the buffer to destination.

                var Alpha= C / NumToShift;

                this.proxy.BufferPos[C]= this.proxy.BufferPos[NumToShift].multiply(Alpha).add(this.proxy.destinationPos.multiply((1 - Alpha)));
                this.proxy.BufferOri[C]= this.proxy.destinationOri.slerp(this.proxy.BufferOri[NumToShift], Alpha);
            }
        }else
        {
            // degenerated case:
            //
            // We have a _VERY_ low frame rate...
            // we can only guess how we should fill the array.
            // Maybe we could write part of a linear interpolation
            // from Buffer[0] to destination, that goes from this.proxy.BufferEndTime to Now
            // (possibly only the end of the interpolation is to be written),
            // but if we rech here we are in a very degenerate case...
            // Thus we just write destination to the buffer.

            this.proxy.previousValuePos= NumToShift == this.proxy.BufferPos.length? this.proxy.BufferPos[0] : this.proxy.destinationPos;
            this.proxy.previousValueOri= NumToShift == this.proxy.BufferOri.length? this.proxy.BufferOri[0] : this.proxy.destinationOri;

            for(var C= 0; C<this.proxy.BufferPos.length; C++ )
            {
                this.proxy.BufferPos[C]= this.proxy.destinationPos;
                this.proxy.BufferOri[C]= this.proxy.destinationOri;
            }
        }
        this.proxy.BufferEndTime+= NumToShift * this.proxy.cStepTime;
    }
    return Frac;
};

	this.StepResponse = function (t)
{
    if(t < 0)
        return 0;

    if(t > this.proxy.duration)
        return 1;

    // When optimizing for speed, the above two if(.) cases can be omitted,
    // as this funciton will not be called for values outside of 0..proxy.duration.

    return this.StepResponseCore(t / this.proxy.duration);
}


// This f;

	this.StepResponseCore = function (T)
{
    return .5 - .5 * Math.cos(T * Math.PI);
}

// The followi;

	this.StepResponseCoreF = function (T)
{
    var cTau= .3;
    var cFrequency= 2.5;
    return 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.exp(-T / cTau) * (1 - T);
//      return 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.exp(-T / cTau) * (1 - T) * (1 - T);
//      return 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.exp(-T / cTau) * (.5 + .5 * Math.cos(T * Math.PI));
//      return 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.exp(-T / cTau) * (.5 + .5 * Math.cos(T * Math.PI))* (.5 + .5 * Math.cos(T * Math.PI));
};

	this.StepResponseCoreE = function (T)
{
    var A= .5 - .5 * Math.cos(T * Math.PI);

    var cFrequency= 2.5;
    var B= 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.sin(Math.sqrt(1 - T) * Math.PI/2);

    return A * .8 + B * .2;
};

	this.StepResponseCoreD = function (T)
{
    var A= .5 - .5 * Math.cos(T * Math.PI);

    var cFrequency= 2.5;
    var B= 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.sin((1 - T) * Math.PI/2);

    return A * .8 + B * .2;
};

	this.StepResponseCoreC = function (T)
{
    var A= .5 - .5 * Math.cos(T * Math.PI);

    var cTau= .3;
    var cFrequency= 5;
    var B= 1 - Math.cos(T * 2 * Math.PI * cFrequency) * Math.exp(-T / cTau) * (1 - T);

    return A * .8 + B * .2;
}

;

	this.StepResponseCoreB = function (T)
{
    var A= .5 - .5 * Math.cos(T * Math.PI);

    var cTau= .3;
    var cFrequency= 5;
    var B= 1 - Math.cos(T * 2 * Math.PI * cFrequency) /** Math.exp(-T / cTau)*/ * (1 - T);

    return A * .8 + B * .2;
};

	this.StepResponseCoreA = function (T)
{
    var A= .5 - .5 * Math.cos(T * Math.PI);

    var cTau= .3;
    var cFrequency= 5;
    var B= 1 - Math.cos(T * 2 * Math.PI * cFrequency) /** Math.exp(-T / cTau)*/ * (1 - T);

    var Alpha= .2 * T;
    return A * (1 - Alpha) + B * Alpha;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PlacementChaser'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PlacementChaser']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PlacementChaser'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PlacementChaser'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PlacementChaser']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PlacementChaser']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PlacementChaser'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PlacementChaser']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PlacementChaser']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PlacementChaser'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PlacementChaser'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['LastNode'] = function() {
	this.set_isLoaded = function (value) {
		try {
			this.proxy.isLoaded = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isLoaded '+e);
			console.error('Problems setting isLoaded',e);
		}
	};
	this.isLoaded_changed = function () {
		var value = this.isLoaded;
		return value;
	};
	try {
		this.isLoaded = new SFBool();
	} catch (e) {
		console.log('Problems setting isLoaded '+e);
		console.error('Problems setting isLoaded',e);
	}


ecmascript:

	this.initialize = function ()
{
    this.proxy.isLoaded= true;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['LastNode'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['LastNode']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['LastNode'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['LastNode'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['LastNode']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['LastNode']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['LastNode'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['LastNode']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['LastNode']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['LastNode'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['LastNode'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker'] = function() {
	this.set_value = function (value) {
		try {
			this.proxy.value = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting value '+e);
			console.error('Problems setting value',e);
		}
	};
	this.value_changed = function () {
		var value = this.value;
		return value;
	};
	try {
		this.value = undefined;
	} catch (e) {
		console.log('Problems setting value '+e);
		console.error('Problems setting value',e);
	}
	this.set_IsCortona = function (value) {
		try {
			this.proxy.IsCortona = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting IsCortona '+e);
			console.error('Problems setting IsCortona',e);
		}
	};
	this.IsCortona_changed = function () {
		var value = this.IsCortona;
		return value;
	};
	try {
		this.IsCortona = new SFBool(false);
	} catch (e) {
		console.log('Problems setting IsCortona '+e);
		console.error('Problems setting IsCortona',e);
	}
	this.set_bInitialized = function (value) {
		try {
			this.proxy.bInitialized = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting bInitialized '+e);
			console.error('Problems setting bInitialized',e);
		}
	};
	this.bInitialized_changed = function () {
		var value = this.bInitialized;
		return value;
	};
	try {
		this.bInitialized = new SFBool(false);
	} catch (e) {
		console.log('Problems setting bInitialized '+e);
		console.error('Problems setting bInitialized',e);
	}
	this.set_reachThreshold = function (value) {
		try {
			this.proxy.reachThreshold = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting reachThreshold '+e);
			console.error('Problems setting reachThreshold',e);
		}
	};
	this.reachThreshold_changed = function () {
		var value = this.reachThreshold;
		return value;
	};
	try {
		this.reachThreshold = new SFFloat();
	} catch (e) {
		console.log('Problems setting reachThreshold '+e);
		console.error('Problems setting reachThreshold',e);
	}
	this.set_lastTick = function (value) {
		try {
			this.proxy.lastTick = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting lastTick '+e);
			console.error('Problems setting lastTick',e);
		}
	};
	this.lastTick_changed = function () {
		var value = this.lastTick;
		return value;
	};
	try {
		this.lastTick = new SFTime(0);
	} catch (e) {
		console.log('Problems setting lastTick '+e);
		console.error('Problems setting lastTick',e);
	}
	this.set_bNeedToTakeFirstInput = function (value) {
		try {
			this.proxy.bNeedToTakeFirstInput = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting bNeedToTakeFirstInput '+e);
			console.error('Problems setting bNeedToTakeFirstInput',e);
		}
	};
	this.bNeedToTakeFirstInput_changed = function () {
		var value = this.bNeedToTakeFirstInput;
		return value;
	};
	try {
		this.bNeedToTakeFirstInput = new SFBool(true);
	} catch (e) {
		console.log('Problems setting bNeedToTakeFirstInput '+e);
		console.error('Problems setting bNeedToTakeFirstInput',e);
	}
	this.set_value5 = function (value) {
		try {
			this.proxy.value5 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting value5 '+e);
			console.error('Problems setting value5',e);
		}
	};
	this.value5_changed = function () {
		var value = this.value5;
		return value;
	};
	try {
		this.value5 = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting value5 '+e);
		console.error('Problems setting value5',e);
	}
	this.set_value4 = function (value) {
		try {
			this.proxy.value4 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting value4 '+e);
			console.error('Problems setting value4',e);
		}
	};
	this.value4_changed = function () {
		var value = this.value4;
		return value;
	};
	try {
		this.value4 = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting value4 '+e);
		console.error('Problems setting value4',e);
	}
	this.set_value3 = function (value) {
		try {
			this.proxy.value3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting value3 '+e);
			console.error('Problems setting value3',e);
		}
	};
	this.value3_changed = function () {
		var value = this.value3;
		return value;
	};
	try {
		this.value3 = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting value3 '+e);
		console.error('Problems setting value3',e);
	}
	this.set_value2 = function (value) {
		try {
			this.proxy.value2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting value2 '+e);
			console.error('Problems setting value2',e);
		}
	};
	this.value2_changed = function () {
		var value = this.value2;
		return value;
	};
	try {
		this.value2 = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting value2 '+e);
		console.error('Problems setting value2',e);
	}
	this.set_input = function (value) {
		try {
			this.proxy.input = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting input '+e);
			console.error('Problems setting input',e);
		}
	};
	this.input_changed = function () {
		var value = this.input;
		return value;
	};
	try {
		this.input = new SFVec3f();
	} catch (e) {
		console.log('Problems setting input '+e);
		console.error('Problems setting input',e);
	}
	this.set_value1 = function (value) {
		try {
			this.proxy.value1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting value1 '+e);
			console.error('Problems setting value1',e);
		}
	};
	this.value1_changed = function () {
		var value = this.value1;
		return value;
	};
	try {
		this.value1 = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting value1 '+e);
		console.error('Problems setting value1',e);
	}
	this.set_eps = function (value) {
		try {
			this.proxy.eps = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting eps '+e);
			console.error('Problems setting eps',e);
		}
	};
	this.eps_changed = function () {
		var value = this.eps;
		return value;
	};
	try {
		this.eps = new SFFloat();
	} catch (e) {
		console.log('Problems setting eps '+e);
		console.error('Problems setting eps',e);
	}
	this.set_destination = function (value) {
		try {
			this.proxy.destination = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting destination '+e);
			console.error('Problems setting destination',e);
		}
	};
	this.destination_changed = function () {
		var value = this.destination;
		return value;
	};
	try {
		this.destination = undefined;
	} catch (e) {
		console.log('Problems setting destination '+e);
		console.error('Problems setting destination',e);
	}
	this.set_value = function (value) {
		try {
			this.proxy.value = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting value '+e);
			console.error('Problems setting value',e);
		}
	};
	this.value_changed = function () {
		var value = this.value;
		return value;
	};
	try {
		this.value = undefined;
	} catch (e) {
		console.log('Problems setting value '+e);
		console.error('Problems setting value',e);
	}
	this.set_tau = function (value) {
		try {
			this.proxy.tau = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting tau '+e);
			console.error('Problems setting tau',e);
		}
	};
	this.tau_changed = function () {
		var value = this.tau;
		return value;
	};
	try {
		this.tau = new SFFloat(1);
	} catch (e) {
		console.log('Problems setting tau '+e);
		console.error('Problems setting tau',e);
	}
	this.set_effs = function (value) {
		try {
			this.proxy.effs = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting effs '+e);
			console.error('Problems setting effs',e);
		}
	};
	this.effs_changed = function () {
		var value = this.effs;
		return value;
	};
	try {
		this.effs = X3DJSON.nodeUtil("Scene","EFFS");
	} catch (e) {
		console.log('Problems setting effs '+e);
		console.error('Problems setting effs',e);
	}
	this.set_order = function (value) {
		try {
			this.proxy.order = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting order '+e);
			console.error('Problems setting order',e);
		}
	};
	this.order_changed = function () {
		var value = this.order;
		return value;
	};
	try {
		this.order = new SFInt32();
	} catch (e) {
		console.log('Problems setting order '+e);
		console.error('Problems setting order',e);
	}
	this.set_needTimer = function (value) {
		try {
			this.proxy.needTimer = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting needTimer '+e);
			console.error('Problems setting needTimer',e);
		}
	};
	this.needTimer_changed = function () {
		var value = this.needTimer;
		return value;
	};
	try {
		this.needTimer = new SFBool();
	} catch (e) {
		console.log('Problems setting needTimer '+e);
		console.error('Problems setting needTimer',e);
	}
	this.set_tick = function (value) {
		try {
			this.proxy.tick = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting tick '+e);
			console.error('Problems setting tick',e);
		}
	};
	this.tick_changed = function () {
		var value = this.tick;
		return value;
	};
	try {
		this.tick = new SFTime();
	} catch (e) {
		console.log('Problems setting tick '+e);
		console.error('Problems setting tick',e);
	}
	this.set_tau = function (value) {
		try {
			this.proxy.tau = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting tau '+e);
			console.error('Problems setting tau',e);
		}
	};
	this.tau_changed = function () {
		var value = this.tau;
		return value;
	};
	try {
		this.tau = new SFFloat(1);
	} catch (e) {
		console.log('Problems setting tau '+e);
		console.error('Problems setting tau',e);
	}
	this.set_initial_value = function (value) {
		try {
			this.proxy.initial_value = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting initial_value '+e);
			console.error('Problems setting initial_value',e);
		}
	};
	this.initial_value_changed = function () {
		var value = this.initial_value;
		return value;
	};
	try {
		this.initial_value = new SFVec3f();
	} catch (e) {
		console.log('Problems setting initial_value '+e);
		console.error('Problems setting initial_value',e);
	}
	this.set_reached = function (value) {
		try {
			this.proxy.reached = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting reached '+e);
			console.error('Problems setting reached',e);
		}
	};
	this.reached_changed = function () {
		var value = this.reached;
		return value;
	};
	try {
		this.reached = new SFBool();
	} catch (e) {
		console.log('Problems setting reached '+e);
		console.error('Problems setting reached',e);
	}
	this.set_takeFirstInput = function (value) {
		try {
			this.proxy.takeFirstInput = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting takeFirstInput '+e);
			console.error('Problems setting takeFirstInput',e);
		}
	};
	this.takeFirstInput_changed = function () {
		var value = this.takeFirstInput;
		return value;
	};
	try {
		this.takeFirstInput = new SFBool();
	} catch (e) {
		console.log('Problems setting takeFirstInput '+e);
		console.error('Problems setting takeFirstInput',e);
	}


ecmascript:

	this.StartTimer = function ()
{
    if(this.proxy.IsCortona)
        return;

    if(!this.proxy.needTimer)
    {
        this.proxy.lastTick= 0;
        this.proxy.needTimer= true;
    }
}
;

	this.StopTimer = function ()
{
    if(this.proxy.IsCortona)
        return;

    if(this.proxy.needTimer)
    {
        this.proxy.needTimer= false;
    }
}
;

	this.initialize = function ()
{
    this.CheckInit();
}
;

	this.CheckInit = function ()
{
    if(!this.proxy.bInitialized)
    {
        this.proxy.bInitialized= true;
        this.Init();
    }

}
;

	this.Init = function ()
{
    this.proxy.IsCortona= false && Browser.getName().indexOf('Cortona') != -1;

    this.proxy.bNeedToTakeFirstInput= this.proxy.takeFirstInput;

    this.proxy.tau= X3DJSON.nodeUtil("Scene","EFFS", "this").proxy.tau;
    this.proxy.set_value(this.proxy.initial_value);
    if(this.proxy.IsCortona)
        this.proxy.needTimer= true;
    else
        this.proxy.needTimer=    this.proxy.input.x != this.proxy.initial_value.x
                   || this.proxy.input.y != this.proxy.initial_value.y
                   || this.proxy.input.z != this.proxy.initial_value.z
                   ;
}
;

	this.set_tau = function (t)
{
    this.CheckInit();

    this.proxy.tau= t;
}
;

	this.set_destination = function (i)
{
    this.CheckInit();

    if(this.proxy.bNeedToTakeFirstInput)
    {
        this.proxy.bNeedToTakeFirstInput= false;
        this.proxy.set_value(i);
    }


    if(i != this.proxy.input)
    {
        this.proxy.input= i;
        this.StartTimer();
    }
}
;

	this.set_value = function (o)
{
    this.CheckInit();

    this.proxy.bNeedToTakeFirstInput= false;

    this.proxy.value1= this.proxy.value2= this.proxy.value3= this.proxy.value4= this.proxy.value5= o;
    this.proxy.value_changed= o;
    this.UpdateReached();
    this.StartTimer();
}
;

	this.tick = function (now)
{
    this.CheckInit();

    if(!this.proxy.lastTick)
    {
        this.proxy.lastTick= now;
        return;
    }

    var delta= now - this.proxy.lastTick;
    this.proxy.lastTick= now;

    var alpha= Math.exp(-delta / this.proxy.tau);


    if(this.proxy.bNeedToTakeFirstInput)  // then don't do any processing.
        return;

    this.proxy.value1= this.proxy.order > 0 && this.proxy.tau
               ? this.proxy.input  .add(this.proxy.value1.subtract(this.proxy.input  ).multiply(alpha))
               : this.proxy.input;

    this.proxy.value2= this.proxy.order > 1 && this.proxy.tau
               ? this.proxy.value1.add(this.proxy.value2.subtract(this.proxy.value1).multiply(alpha))
               : this.proxy.value1;

    this.proxy.value3= this.proxy.order > 2 && this.proxy.tau
               ? this.proxy.value2.add(this.proxy.value3.subtract(this.proxy.value2).multiply(alpha))
               : this.proxy.value2;

    this.proxy.value4= this.proxy.order > 3 && this.proxy.tau
               ? this.proxy.value3.add(this.proxy.value4.subtract(this.proxy.value3).multiply(alpha))
               : this.proxy.value3;

    this.proxy.value5= this.proxy.order > 4 && this.proxy.tau
               ? this.proxy.value4.add(this.proxy.value5.subtract(this.proxy.value4).multiply(alpha))
               : this.proxy.value4;

    var dist= this.GetDist();

    if(dist < this.proxy.eps)
    {
        this.proxy.value1= this.proxy.value2= this.proxy.value3= this.proxy.value4= this.proxy.value5= this.proxy.input;

        this.proxy.value_changed= this.proxy.input;
        this.UpdateReached2(dist);

        this.StopTimer();
        return;
    }
    this.proxy.value_changed= this.proxy.value5;
    this.UpdateReached2(dist);

}
;

	this.GetDist = function ()
{
    var dist= this.proxy.value1.subtract(this.proxy.input).length();
    if(this.proxy.order > 1)
    {
        var dist2= this.proxy.value2.subtract(this.proxy.value1).length();
        if( dist2 > dist)  dist= dist2;
    }
    if(this.proxy.order > 2)
    {
        var dist3= this.proxy.value3.subtract(this.proxy.value2).length();
        if( dist3 > dist)  dist= dist3;
    }
    if(this.proxy.order > 3)
    {
        var dist4= this.proxy.value4.subtract(this.proxy.value3).length();
        if( dist4 > dist)  dist= dist4;
    }
    if(this.proxy.order > 4)
    {
        var dist5= this.proxy.value5.subtract(this.proxy.value4).length();
        if( dist5 > dist)  dist= dist5;
    }
    return dist;
}
;

	this.UpdateReached = function ()
{
    return this.UpdateReached2(this.GetDist());
}
;

	this.UpdateReached2 = function (Dist)
{
    if(this.proxy.reached)
    {
        if(Dist > this.proxy.reachThreshold)
            this.proxy.reached= false;
    }else
    {
        if(Dist <= this.proxy.reachThreshold)
            this.proxy.reached= true;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker'].initialize();
    if (X3DJSON.nodeUtil("Scene","Tmer_PositionChaser")) {
X3DJSON.nodeUtil("Scene","Tmer_PositionChaser").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PositionChaser'].Tick(X3DJSON.nodeUtil("Scene","Tmer_PositionChaser","time"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PositionChaser'].Tick(X3DJSON.nodeUtil("Scene","Tmer_PositionChaser","time"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","Tmer_OrientationChaser")) {
X3DJSON.nodeUtil("Scene","Tmer_OrientationChaser").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_OrientationChaser'].Tick(X3DJSON.nodeUtil("Scene","Tmer_OrientationChaser","time"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_OrientationChaser'].Tick(X3DJSON.nodeUtil("Scene","Tmer_OrientationChaser","time"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","Tmer_Position2fChaser")) {
X3DJSON.nodeUtil("Scene","Tmer_Position2fChaser").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_Position2fChaser'].Tick(X3DJSON.nodeUtil("Scene","Tmer_Position2fChaser","time"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_Position2fChaser'].Tick(X3DJSON.nodeUtil("Scene","Tmer_Position2fChaser","time"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","Tmer_PlacementChaser")) {
X3DJSON.nodeUtil("Scene","Tmer_PlacementChaser").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PlacementChaser'].Tick(X3DJSON.nodeUtil("Scene","Tmer_PlacementChaser","time"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PlacementChaser'].Tick(X3DJSON.nodeUtil("Scene","Tmer_PlacementChaser","time"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker']['ACTION']['needTimer'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker']['ACTION']['needTimer'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker']['ACTION']['needTimer'].push(function(property, value) {
		if (property === 'needTimer') {
			X3DJSON.nodeUtil("Scene","Timer_PositionDamper","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker'].needTimer === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker'].needTimer() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker'].needTimer, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Timer_PositionDamper","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker'].needTimer === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker'].needTimer() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker'].needTimer, __eventTime);
    if (X3DJSON.nodeUtil("Scene","Timer_PositionDamper")) {
X3DJSON.nodeUtil("Scene","Timer_PositionDamper").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker'].tick(X3DJSON.nodeUtil("Scene","Timer_PositionDamper","time"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker'].tick(X3DJSON.nodeUtil("Scene","Timer_PositionDamper","time"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PositionChaser'].Tick(X3DJSON.nodeUtil("Scene","Tmer_PositionChaser","time"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_OrientationChaser'].Tick(X3DJSON.nodeUtil("Scene","Tmer_OrientationChaser","time"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_Position2fChaser'].Tick(X3DJSON.nodeUtil("Scene","Tmer_Position2fChaser","time"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['ScreenPositionDamper_PlacementChaser'].Tick(X3DJSON.nodeUtil("Scene","Tmer_PlacementChaser","time"), __eventTime);
			X3DJSON.nodeUtil("Scene","Timer_PositionDamper","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker'].needTimer === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker'].needTimer() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker'].needTimer, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/FollowerPrototypeDeclarations.json']['Worker'].tick(X3DJSON.nodeUtil("Scene","Timer_PositionDamper","time"), __eventTime);