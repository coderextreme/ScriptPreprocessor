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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorPrototype.json']['ProjectileMotionTrackerScript'] = function() {
	this.set_Vi = function (value) {
		try {
			this.proxy.Vi = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Vi '+e);
			console.error('Problems setting Vi',e);
		}
	};
	this.Vi_changed = function () {
		var value = this.Vi;
		return value;
	};
	try {
		this.Vi = new SFFloat();
	} catch (e) {
		console.log('Problems setting Vi '+e);
		console.error('Problems setting Vi',e);
	}
	this.set_theta = function (value) {
		try {
			this.proxy.theta = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting theta '+e);
			console.error('Problems setting theta',e);
		}
	};
	this.theta_changed = function () {
		var value = this.theta;
		return value;
	};
	try {
		this.theta = new SFFloat();
	} catch (e) {
		console.log('Problems setting theta '+e);
		console.error('Problems setting theta',e);
	}
	this.set_B_m = function (value) {
		try {
			this.proxy.B_m = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting B_m '+e);
			console.error('Problems setting B_m',e);
		}
	};
	this.B_m_changed = function () {
		var value = this.B_m;
		return value;
	};
	try {
		this.B_m = new SFFloat();
	} catch (e) {
		console.log('Problems setting B_m '+e);
		console.error('Problems setting B_m',e);
	}
	this.set_dt = function (value) {
		try {
			this.proxy.dt = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting dt '+e);
			console.error('Problems setting dt',e);
		}
	};
	this.dt_changed = function () {
		var value = this.dt;
		return value;
	};
	try {
		this.dt = new SFFloat();
	} catch (e) {
		console.log('Problems setting dt '+e);
		console.error('Problems setting dt',e);
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
		this.fraction = new SFFloat();
	} catch (e) {
		console.log('Problems setting fraction '+e);
		console.error('Problems setting fraction',e);
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
		this.fraction = new SFFloat();
	} catch (e) {
		console.log('Problems setting fraction '+e);
		console.error('Problems setting fraction',e);
	}
	this.set_theta = function (value) {
		try {
			this.proxy.theta = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting theta '+e);
			console.error('Problems setting theta',e);
		}
	};
	this.theta_changed = function () {
		var value = this.theta;
		return value;
	};
	try {
		this.theta = new SFFloat();
	} catch (e) {
		console.log('Problems setting theta '+e);
		console.error('Problems setting theta',e);
	}
	this.set_Vi = function (value) {
		try {
			this.proxy.Vi = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Vi '+e);
			console.error('Problems setting Vi',e);
		}
	};
	this.Vi_changed = function () {
		var value = this.Vi;
		return value;
	};
	try {
		this.Vi = new SFFloat();
	} catch (e) {
		console.log('Problems setting Vi '+e);
		console.error('Problems setting Vi',e);
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


ecmascript:
var x;
var y;
var Vx;
var Vy;
var B_m;
var dt;
var blocksize;
var Vi;
var theta;

var key;
var keyValue;
var previousFraction;
var previousFractionIndex;
var blockSize;
var outputArray;

	this.tracePrint = function (outputString)
{
	var traceEnabled = true;
	if (traceEnabled) console.error ('[WaypointInterpolator]' + outputString);
};

	this.alwaysPrint = function (outputString)
{
	console.error ('[WaypointInterpolator]' + outputString);
}


;

	this.initialize = function () {
   key = new Array();
   keyValue = new MFVec3f();
   x = new Array();
   y = new Array();
   this.calculateTrajectory();

   previousFractionIndex = -1;
	previousFraction = 0;
	// check key array ranges [0..1] and is monotonically increasing
	// check that size of keyValue array is integer multiple of size of key array
	this.tracePrint ('key            =' + key);
	this.tracePrint ('key.length= ' + key.length);
	this.tracePrint ('keyValue=   ' + keyValue);
	this.tracePrint ('keyValue.length=' + keyValue.length);
	blockSize =  3; //keyValue.length/key.length;
	this.tracePrint ('blockSize=' + blockSize);
	if (blockSize != Math.round(blockSize))
	{
	  this.alwaysPrint ('*** warning:  blockSize not an integer multiple. check sizes of key and keyValue');
	}
	if (key[0] != 0)
	{
	  this.alwaysPrint ('*** warning:  key[0] != 0');
	}
	if (key[key.length-1] != 1)
	{
	  this.alwaysPrint ('*** warning:  key[' + (key.length - 1) + '] != 1, reset from' + key[key.length-1] + ' to 1');
	  key[key.length-1] = 1;
	}
	for (index = 0; index < blockSize; index++)
	{
		if ((key[index] < 0) || (key[index] > 1))
		{
		   this.alwaysPrint ('*** warning:  key[' + index + '] =' + key[index] + ', out of range [0..1]');
		}
	}
	// instantiate default array, later computations just update it
	outputArray = new SFVec3f();
	outputArray = keyValue[0];
	this.tracePrint ('initial outputArray=' + outputArray);

}
;

	this.set_fraction = function (inputFloat, timestamp) {
	this.proxy.fraction = inputFloat;
	this.tracePrint ('previousFractionIndex=' + previousFractionIndex
		 + ', this.proxy.fraction=' + this.proxy.fraction + ', previousFraction=' + previousFraction);

	if (this.proxy.fraction < 0)
	{
		this.tracePrint ('*** illegal this.proxy.fraction' + this.proxy.fraction + ' set to 0');
		this.proxy.fraction = 0;
		previousFractionIndex = 0; // first
	}
	else if (this.proxy.fraction > 1)
	{
		this.alwaysPrint ('*** illegal this.proxy.fraction' + this.proxy.fraction + ' set to 1');
		this.proxy.fraction = 1;
		previousFractionIndex = blockSize - 1; // last
	}
	else if (previousFractionIndex == -1)
	{
		previousFractionIndex = 0; // first
		this.tracePrint ('previousFractionIndex initialized for first event');
	}
	else if ((this.proxy.fraction >= previousFraction) && (this.proxy.fraction >= key[previousFractionIndex+1]))
	{
		previousFractionIndex++;
	}
	else if (this.proxy.fraction < previousFraction) // regress, or loop repeat without reaching one
	{

		previousFractionIndex = 0;
		while ((this.proxy.fraction >= key[previousFractionIndex+1]) && (previousFractionIndex < blockSize))
		{
			previousFractionIndex++;
		}
		this.tracePrint ('reset/reincrement previousFractionIndex to' + previousFractionIndex);
	}

	if (this.proxy.fraction == 1) // use final block
	{
		this.tracePrint ('(this.proxy.fraction == 1)');


        	outputArray = keyValue[(keyValue.length -1)];

		previousFractionIndex = -1; // setup for restart
		this.tracePrint ('finished final this.proxy.fraction==1 block');
	}
	// when this.proxy.fraction matches index, calculate this.proxy.value_changed from corresponding keyValue array
	else if (this.proxy.fraction == key[previousFractionIndex])
	{
		this.tracePrint ('(this.proxy.fraction == key[previousFractionIndex])');


		// update outputArray - need to interpolate next
		outputArray = keyValue[previousFractionIndex];

	}
        else {

              delta = key[previousFractionIndex + 1] -  key[previousFractionIndex];
              differ = this.proxy.fraction - key[previousFractionIndex];
              percentDiffer = differ / delta;

              valueDelta = new SFVec3f();
              for(index = 0; index < blockSize; index++) {
                 valueDelta[index] =  keyValue[(previousFractionIndex + 1)][index] - keyValue[previousFractionIndex][index];
                 outputArray[index]  = keyValue[previousFractionIndex][index] + valueDelta[index] * percentDiffer;
		 console.error ('valueDelta' + valueDelta[index]);
                 console.error ('perDiffer' + percentDiffer);
              }

        }

	this.proxy.value_changed = outputArray;
	previousFraction = this.proxy.fraction;
	this.tracePrint ('this.proxy.value_changed=' + this.proxy.value_changed);

}

;

	this.set_Vi = function (initialVelocity, timeStamp) {
   this.proxy.Vi = initialVelocity;
   this.initialize(timeStamp);
}

;

	this.set_theta = function (angle, timeStamp) {
   this.proxy.theta = angle;
   this.initialize(timeStamp);
}

;

	this.calculateTrajectory = function () {

   x[0] = 0;
   y[0] = 0;

   var timeKeys = new Array();
   timeKeys[0] = 0.0;

   //convert degree to radian
   angle = Math.PI * this.proxy.theta / 180;

   Vx = this.proxy.Vi * Math.cos(angle);
   Vy = this.proxy.Vi * Math.sin(angle);

   var i = 0;

   do {
      i = i + 1;
      timeKeys[i] = timeKeys[i - 1] + this.proxy.dt;
      console.error ('timeKeys' + timeKeys[i]);
      x[i] = x[i - 1] + Vx * this.proxy.dt;
      y[i] = y[i - 1] + Vy * this.proxy.dt;


      f = this.proxy.B_m * Math.sqrt(Vx * Vx + Vy * Vy) * Math.exp(-y[i] / 0.0001);

      Vy = Vy - 9.8 * this.proxy.dt - f * Vy * this.proxy.dt;
      Vx = Vx - f * Vx * this.proxy.dt;
      console.error ('Vy' + Vy);
   }while(y[i] > 0);
   console.error ('Im here' + x.length);

   //interpolate to find landing point
   var a = -y[i] / y[i-1];
   x[i] = (x[i] + a * x[i-1]) / (1+a);
   y[i] = 0;

   //copy x, y values to keyValues
   this.copyToKeyValues();
   //finding keys
   for(j = 0; j < timeKeys.length; j++) {
      key[j] = timeKeys[j] / timeKeys[timeKeys.length - 1];
      console.error (' ' + key[j]);

   }

}
;

	this.copyToKeyValues = function () {
   for(i = 0; i < x.length; i++) {
     console.error ('x' + x[i]);
      keyValue[i][0] = x[i];
      keyValue[i][1] = y[i];
      keyValue[i][2] = 0;
   console.error ('keyValue' + i + ' ' + keyValue[i][0]);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorPrototype.json']['ProjectileMotionTrackerScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorPrototype.json']['ProjectileMotionTrackerScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorPrototype.json']['ProjectileMotionTrackerScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorPrototype.json']['ProjectileMotionTrackerScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorPrototype.json']['ProjectileMotionTrackerScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorPrototype.json']['ProjectileMotionTrackerScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorPrototype.json']['ProjectileMotionTrackerScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorPrototype.json']['ProjectileMotionTrackerScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorPrototype.json']['ProjectileMotionTrackerScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorPrototype.json']['ProjectileMotionTrackerScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/ProjectileInterpolatorPrototype.json']['ProjectileMotionTrackerScript'].initialize();

