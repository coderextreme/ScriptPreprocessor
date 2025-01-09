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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'] = function() {
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
	this.set_groundColorSunrise = function (value) {
		try {
			this.proxy.groundColorSunrise = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting groundColorSunrise '+e);
			console.error('Problems setting groundColorSunrise',e);
		}
	};
	this.groundColorSunrise_changed = function () {
		var value = this.groundColorSunrise;
		return value;
	};
	try {
		this.groundColorSunrise = new MFColor([new SFColor ( 0.133 , 0.419 , 0 ),new SFColor ( 0.36 , 0.1 , 0 ),new SFColor ( 1 , 0.74 , 0.4 ),new SFColor ( 1 , 0.74 , 0.4 ),new SFColor ( 0 , 0.2 , 0.75 ),new SFColor ( 0 , 0.1 , 0.5 )]);
	} catch (e) {
		console.log('Problems setting groundColorSunrise '+e);
		console.error('Problems setting groundColorSunrise',e);
	}
	this.set_groundColorNoon = function (value) {
		try {
			this.proxy.groundColorNoon = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting groundColorNoon '+e);
			console.error('Problems setting groundColorNoon',e);
		}
	};
	this.groundColorNoon_changed = function () {
		var value = this.groundColorNoon;
		return value;
	};
	try {
		this.groundColorNoon = new MFColor([new SFColor ( 0.133 , 0.419 , 0 ),new SFColor ( 0.36 , 0.1 , 0 ),new SFColor ( 1 , 0.74 , 0.4 ),new SFColor ( 1 , 0.74 , 0.4 ),new SFColor ( 0 , 0 , 0.5 ),new SFColor ( 0 , 0 , 0.2 )]);
	} catch (e) {
		console.log('Problems setting groundColorNoon '+e);
		console.error('Problems setting groundColorNoon',e);
	}
	this.set_groundColorSunset = function (value) {
		try {
			this.proxy.groundColorSunset = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting groundColorSunset '+e);
			console.error('Problems setting groundColorSunset',e);
		}
	};
	this.groundColorSunset_changed = function () {
		var value = this.groundColorSunset;
		return value;
	};
	try {
		this.groundColorSunset = new MFColor([new SFColor ( 0.133 , 0.419 , 0 ),new SFColor ( 0.36 , 0.1 , 0 ),new SFColor ( 1 , 0.74 , 0.4 ),new SFColor ( 1 , 0.74 , 0.4 ),new SFColor ( 0 , 0 , 0.5 ),new SFColor ( 0 , 0 , 0.2 )]);
	} catch (e) {
		console.log('Problems setting groundColorSunset '+e);
		console.error('Problems setting groundColorSunset',e);
	}
	this.set_groundColorNight = function (value) {
		try {
			this.proxy.groundColorNight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting groundColorNight '+e);
			console.error('Problems setting groundColorNight',e);
		}
	};
	this.groundColorNight_changed = function () {
		var value = this.groundColorNight;
		return value;
	};
	try {
		this.groundColorNight = new MFColor([new SFColor ( 0.133 , 0.419 , 0 ),new SFColor ( 0.36 , 0.1 , 0 ),new SFColor ( 1 , 0.74 , 0.4 ),new SFColor ( 1 , 0.74 , 0.4 ),new SFColor ( 0 , 0 , 0.5 ),new SFColor ( 0 , 0 , 0.2 )]);
	} catch (e) {
		console.log('Problems setting groundColorNight '+e);
		console.error('Problems setting groundColorNight',e);
	}
	this.set_skyColorSunrise = function (value) {
		try {
			this.proxy.skyColorSunrise = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting skyColorSunrise '+e);
			console.error('Problems setting skyColorSunrise',e);
		}
	};
	this.skyColorSunrise_changed = function () {
		var value = this.skyColorSunrise;
		return value;
	};
	try {
		this.skyColorSunrise = new MFColor([new SFColor ( 1 , 1 , 0.2 ),new SFColor ( 1 , 1 , 0 ),new SFColor ( 0.36 , 0.63 , 1 ),new SFColor ( 0 , 0.4 , 1 ),new SFColor ( 0 , 0.4 , 1 )]);
	} catch (e) {
		console.log('Problems setting skyColorSunrise '+e);
		console.error('Problems setting skyColorSunrise',e);
	}
	this.set_skyColorNoon = function (value) {
		try {
			this.proxy.skyColorNoon = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting skyColorNoon '+e);
			console.error('Problems setting skyColorNoon',e);
		}
	};
	this.skyColorNoon_changed = function () {
		var value = this.skyColorNoon;
		return value;
	};
	try {
		this.skyColorNoon = new MFColor([new SFColor ( 0 , 0.035 , 0.34 ),new SFColor ( 0 , 0.015 , 0.44 ),new SFColor ( 0 , 0.05 , 0.5 ),new SFColor ( 0 , 0.1 , 0.6 ),new SFColor ( 0.44 , 0.8 , 1 ),new SFColor ( 1 , 1 , 0.7 )]);
	} catch (e) {
		console.log('Problems setting skyColorNoon '+e);
		console.error('Problems setting skyColorNoon',e);
	}
	this.set_skyColorSunset = function (value) {
		try {
			this.proxy.skyColorSunset = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting skyColorSunset '+e);
			console.error('Problems setting skyColorSunset',e);
		}
	};
	this.skyColorSunset_changed = function () {
		var value = this.skyColorSunset;
		return value;
	};
	try {
		this.skyColorSunset = new MFColor([new SFColor ( 0 , 0 , 0.38 ),new SFColor ( 0 , 0 , 0.68 ),new SFColor ( 0.5 , 0.2 , 1 ),new SFColor ( 0.5 , 0.2 , 1 ),new SFColor ( 1 , 0.3 , 0 ),new SFColor ( 1 , 0.2 , 0.8 )]);
	} catch (e) {
		console.log('Problems setting skyColorSunset '+e);
		console.error('Problems setting skyColorSunset',e);
	}
	this.set_skyColorNight = function (value) {
		try {
			this.proxy.skyColorNight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting skyColorNight '+e);
			console.error('Problems setting skyColorNight',e);
		}
	};
	this.skyColorNight_changed = function () {
		var value = this.skyColorNight;
		return value;
	};
	try {
		this.skyColorNight = new MFColor([new SFColor ( 1 , 1 , 1 ),new SFColor ( 0.8 , 0.8 , 0.8 ),new SFColor ( 0.1 , 0.1 , 0.1 ),new SFColor ( 0 , 0 , 0 ),new SFColor ( 0 , 0 , 0 )]);
	} catch (e) {
		console.log('Problems setting skyColorNight '+e);
		console.error('Problems setting skyColorNight',e);
	}
	this.set_groundColor = function (value) {
		try {
			this.proxy.groundColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting groundColor '+e);
			console.error('Problems setting groundColor',e);
		}
	};
	this.groundColor_changed = function () {
		var value = this.groundColor;
		return value;
	};
	try {
		this.groundColor = undefined;
	} catch (e) {
		console.log('Problems setting groundColor '+e);
		console.error('Problems setting groundColor',e);
	}
	this.set_skyColor = function (value) {
		try {
			this.proxy.skyColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting skyColor '+e);
			console.error('Problems setting skyColor',e);
		}
	};
	this.skyColor_changed = function () {
		var value = this.skyColor;
		return value;
	};
	try {
		this.skyColor = undefined;
	} catch (e) {
		console.log('Problems setting skyColor '+e);
		console.error('Problems setting skyColor',e);
	}


ecmascript:

	this.initialize = function ()
{
    console.error ('this.proxy.groundColorSunrise length=' + this.proxy.groundColorSunrise.length + ' '  + this.proxy.groundColorSunrise.toString() + '');
    console.error ('this.proxy.groundColorNoon    length=' +    this.proxy.groundColorNoon.length +    ' '  + this.proxy.groundColorNoon.toString() + '');
    console.error ('this.proxy.groundColorSunset  length=' +  this.proxy.groundColorSunset.length +  ' '  + this.proxy.groundColorSunset.toString() + '');
    console.error ('this.proxy.groundColorNight   length=' +   this.proxy.groundColorNight.length +   ' '  + this.proxy.groundColorNight.toString() + '');
    console.error ('this.proxy.skyColorSunrise    length=' +    this.proxy.skyColorSunrise.length +    ' '  + this.proxy.skyColorSunrise.toString() + '');
    console.error ('this.proxy.skyColorNoon       length=' +       this.proxy.skyColorNoon.length +       ' '  + this.proxy.skyColorNoon.toString() + '');
    console.error ('this.proxy.skyColorSunset     length=' +     this.proxy.skyColorSunset.length +     ' '  + this.proxy.skyColorSunset.toString() + '');
    console.error ('this.proxy.skyColorNight      length=' +      this.proxy.skyColorNight.length +      ' '  + this.proxy.skyColorNight.toString() + '');
};

	this.set_fraction = function (fraction) // fraction is input value sent by TimeSensor clock
{
    // Sunrise to Noon, fraction 0.0 to 0.25, interval=0.25
    if      (fraction < 0.25)
    {
        this.proxy.groundColor_changed = this.interpolate (this.proxy.groundColorSunrise, this.proxy.groundColorNoon, fraction, 0.00, 0.25);
           this.proxy.skyColor_changed = this.interpolate (   this.proxy.skyColorSunrise,    this.proxy.skyColorNoon, fraction, 0.00, 0.25);
    }
    // Noon to Evening, fraction 0.25 to 0.5, interval=0.25
    else if (fraction < 0.5)
    {
        this.proxy.groundColor_changed = this.interpolate (this.proxy.groundColorNoon, this.proxy.groundColorSunset, fraction, 0.25, 0.25);
           this.proxy.skyColor_changed = this.interpolate (   this.proxy.skyColorNoon,    this.proxy.skyColorSunset, fraction, 0.25, 0.25);
    }
    // Evening to Night, fraction 0.5 to 0.6, interval=0.1
    else if (fraction < 0.6)
    {
        this.proxy.groundColor_changed = this.interpolate (this.proxy.groundColorSunset, this.proxy.groundColorNight, fraction, 0.5, 0.1);
           this.proxy.skyColor_changed = this.interpolate (   this.proxy.skyColorSunset,    this.proxy.skyColorNight, fraction, 0.5, 0.1);
    }
    // Night (unchanging), fraction 0.6 to 0.95, interval=0.35
    else if (fraction < 0.95)
    {
        this.proxy.groundColor_changed = this.proxy.groundColorNight;
           this.proxy.skyColor_changed = this.proxy.skyColorNight;
    }
    // Night to Sunrise, fraction 0.95 to 1.0, interval=0.05
    else // (fraction < 1.0)
    {
        this.proxy.groundColor_changed = this.interpolate (this.proxy.groundColorNight, this.proxy.groundColorSunrise, fraction, 0.95, 0.05);
           this.proxy.skyColor_changed = this.interpolate (   this.proxy.skyColorNight,    this.proxy.skyColorSunrise, fraction, 0.95, 0.05);
    }
//    console.error ('this.proxy.groundColor_changed=' + this.proxy.groundColor_changed.toString() + '');
//    console.error ('   this.proxy.skyColor_changed=' +    this.proxy.skyColor_changed.toString() + '');
};

	this.interpolate = function (firstColorArray, secondColorArray, fraction, initialFraction, interval)
{
    f = (fraction - initialFraction) / interval; // f should range from 0 to 1
//  console.error ('initialFraction=' + initialFraction + ', fraction=' + fraction + ', f=' + f + '');

    color0 = firstColorArray[0] + (secondColorArray[0] - firstColorArray[0]) * f;
    color1 = firstColorArray[1] + (secondColorArray[1] - firstColorArray[1]) * f;
    color2 = firstColorArray[2] + (secondColorArray[2] - firstColorArray[2]) * f;
    color3 = firstColorArray[3] + (secondColorArray[3] - firstColorArray[3]) * f;
    color4 = firstColorArray[4] + (secondColorArray[4] - firstColorArray[4]) * f;
    return new MFColor (color0, color1, color2, color3, color4);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'].initialize();
    if (X3DJSON.nodeUtil("Scene","TimeOfDayClock")) {
X3DJSON.nodeUtil("Scene","TimeOfDayClock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'].set_fraction(X3DJSON.nodeUtil("Scene","TimeOfDayClock","fraction"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'].set_fraction(X3DJSON.nodeUtil("Scene","TimeOfDayClock","fraction"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator']['ACTION']['groundColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator']['ACTION']['groundColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator']['ACTION']['groundColor'].push(function(property, value) {
		if (property === 'groundColor') {
			X3DJSON.nodeUtil("Scene","AnimatedBackground","groundColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'].groundColor_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'].groundColor_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'].groundColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AnimatedBackground","groundColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'].groundColor_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'].groundColor_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'].groundColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator']['ACTION']['skyColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator']['ACTION']['skyColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator']['ACTION']['skyColor'].push(function(property, value) {
		if (property === 'skyColor') {
			X3DJSON.nodeUtil("Scene","AnimatedBackground","skyColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'].skyColor_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'].skyColor_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'].skyColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AnimatedBackground","skyColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'].skyColor_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'].skyColor_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'].skyColor, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'].set_fraction(X3DJSON.nodeUtil("Scene","TimeOfDayClock","fraction"), __eventTime);
			X3DJSON.nodeUtil("Scene","AnimatedBackground","groundColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'].groundColor_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'].groundColor_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'].groundColor, __eventTime);
			X3DJSON.nodeUtil("Scene","AnimatedBackground","skyColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'].skyColor_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'].skyColor_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/Chapter11LightingEnvironmentalEffects/BackgroundTimeOfDay.json']['BackgroundColorInterpolator'].skyColor, __eventTime);