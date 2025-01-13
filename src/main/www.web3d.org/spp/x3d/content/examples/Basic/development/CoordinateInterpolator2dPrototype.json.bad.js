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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/CoordinateInterpolator2dPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/CoordinateInterpolator2dPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/CoordinateInterpolator2dPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/CoordinateInterpolator2dPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/CoordinateInterpolator2dPrototype.json']['InterpolationScript'] = function() {
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
		this.fraction = new SFFloat(0);
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
		this.fraction = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting fraction '+e);
		console.error('Problems setting fraction',e);
	}
	this.set_key = function (value) {
		try {
			this.proxy.key = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting key '+e);
			console.error('Problems setting key',e);
		}
	};
	this.key_changed = function () {
		var value = this.key;
		return value;
	};
	try {
		this.key = undefined;
	} catch (e) {
		console.log('Problems setting key '+e);
		console.error('Problems setting key',e);
	}
	this.set_keyHolderNode = function (value) {
		try {
			this.proxy.keyHolderNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting keyHolderNode '+e);
			console.error('Problems setting keyHolderNode',e);
		}
	};
	this.keyHolderNode_changed = function () {
		var value = this.keyHolderNode;
		return value;
	};
	try {
		this.keyHolderNode = X3DJSON.nodeUtil("Scene","KeyHolder");
	} catch (e) {
		console.log('Problems setting keyHolderNode '+e);
		console.error('Problems setting keyHolderNode',e);
	}
	this.set_key = function (value) {
		try {
			this.proxy.key = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting key '+e);
			console.error('Problems setting key',e);
		}
	};
	this.key_changed = function () {
		var value = this.key;
		return value;
	};
	try {
		this.key = undefined;
	} catch (e) {
		console.log('Problems setting key '+e);
		console.error('Problems setting key',e);
	}
	this.set_keyValue = function (value) {
		try {
			this.proxy.keyValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting keyValue '+e);
			console.error('Problems setting keyValue',e);
		}
	};
	this.keyValue_changed = function () {
		var value = this.keyValue;
		return value;
	};
	try {
		this.keyValue = undefined;
	} catch (e) {
		console.log('Problems setting keyValue '+e);
		console.error('Problems setting keyValue',e);
	}
	this.set_keyValueHolderNode = function (value) {
		try {
			this.proxy.keyValueHolderNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting keyValueHolderNode '+e);
			console.error('Problems setting keyValueHolderNode',e);
		}
	};
	this.keyValueHolderNode_changed = function () {
		var value = this.keyValueHolderNode;
		return value;
	};
	try {
		this.keyValueHolderNode = X3DJSON.nodeUtil("Scene","KeyValueHolder");
	} catch (e) {
		console.log('Problems setting keyValueHolderNode '+e);
		console.error('Problems setting keyValueHolderNode',e);
	}
	this.set_keyValue = function (value) {
		try {
			this.proxy.keyValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting keyValue '+e);
			console.error('Problems setting keyValue',e);
		}
	};
	this.keyValue_changed = function () {
		var value = this.keyValue;
		return value;
	};
	try {
		this.keyValue = undefined;
	} catch (e) {
		console.log('Problems setting keyValue '+e);
		console.error('Problems setting keyValue',e);
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

// internal global persistent variables
var previousFraction;
var previousFractionIndex;
var blockSize;
var outputArray;

	this.tracePrint = function (outputString)
{
	var traceEnabled = false;
	if (traceEnabled) console.error ('[CoordinateInterpolator2D]' + outputString);
};

	this.alwaysPrint = function (outputString)
{
	console.error ('[CoordinateInterpolator2D]' + outputString);
};

	this.initialize = function ()
{
	key      = X3DJSON.nodeUtil("Scene","KeyHolder", "key");
	keyValue = X3DJSON.nodeUtil("Scene","KeyValueHolder", "point");
	previousFractionIndex = -1;
	previousFraction = 0;
	// check key array ranges [0..1] and is monotonically increasing
	// check that size of keyValue array is integer multiple of size of key array
	this.tracePrint ('key            =' + key);
	this.tracePrint ('key.length= ' + key.length);
	this.tracePrint ('keyValue=   ' + keyValue);
	this.tracePrint ('keyValue.length=' + keyValue.length);
	blockSize =  keyValue.length/key.length;
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
	outputArray = new MFVec2f ();
	for (index = 0; index < blockSize; index++)
	{
		// dynamically grow outputArray to match initial block
		outputArray[index] = keyValue[index];
	}
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
		for (index = 0; index < blockSize; index++)
		{
			// update outputArray with final four keyValues
			outputArray[4 - index] = keyValue[keyValue.length - index];
		}
		previousFractionIndex = -1; // setup for restart
		this.tracePrint ('finished final this.proxy.fraction==1 block');
	}
	// when this.proxy.fraction matches index, calculate this.proxy.value_changed from corresponding keyValue array
	else if (this.proxy.fraction == key[previousFractionIndex])
	{
		this.tracePrint ('(this.proxy.fraction == key[previousFractionIndex])');
		for (index = 0; index < blockSize; index++)
		{
			// update outputArray - need to interpolate next
			outputArray[index] = keyValue[blockSize * (previousFractionIndex) + index];
		}
	}
	else // calculate this.proxy.value_changed by interpolating between adjacent keyValue arrays
	{
		partialFraction = this.proxy.fraction                     - key[previousFractionIndex];
		deltaFraction   = key[previousFractionIndex+1] - key[previousFractionIndex];
		percentFraction = partialFraction / deltaFraction;
	//	this.tracePrint ('deltaFraction   =' + deltaFraction);
	//	this.tracePrint ('partialFraction =' + partialFraction);
		this.tracePrint ('percentFraction =' + percentFraction);
		for (index = 0; index < blockSize; index++)
		{
			// no arithmetic operators provided for SFVec2f, treat element by element
			nextKeyValue  = keyValue[blockSize * (previousFractionIndex + 1) + index];
			priorKeyValue = keyValue[blockSize * (previousFractionIndex)     + index];
			deltaKeyValue = new SFVec2f (
						nextKeyValue[0] - priorKeyValue[0],
						nextKeyValue[1] - priorKeyValue[1]);
		//	this.tracePrint ('deltaKeyValue =' + deltaKeyValue);
			// update outputArray
			outputArray[index][0] = keyValue[blockSize * (previousFractionIndex) + index][0]
			   + percentFraction * deltaKeyValue[0];
			outputArray[index][1] = keyValue[blockSize * (previousFractionIndex) + index][1]
			   + percentFraction * deltaKeyValue[1];
		}
	}
	this.proxy.value_changed = outputArray;
	previousFraction = this.proxy.fraction;
	this.tracePrint ('this.proxy.value_changed=' + this.proxy.value_changed);
}
;

	this.set_key = function (inputArray, timestamp) {
	key = inputArray;       // update key Vector2FloatArray
	X3DJSON.nodeUtil("Scene","KeyHolder", "key",  key); // update holder
	this.initialize (timestamp); // reverify key, keyValue sizes
	this.proxy.key_changed = key;	// eventOut
}
;

	this.set_keyValue = function (inputArray, timestamp) {
	keyValue = inputArray;  	// update keyValue Vector2FloatArray
	X3DJSON.nodeUtil("Scene","KeyValueHolder", "point",  keyValue); // update holder
	this.initialize (timestamp); 	// reverify key, keyValue sizes
	this.proxy.keyValue_changed = keyValue;	// eventOut
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/CoordinateInterpolator2dPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/CoordinateInterpolator2dPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/CoordinateInterpolator2dPrototype.json']['InterpolationScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/CoordinateInterpolator2dPrototype.json']['InterpolationScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/CoordinateInterpolator2dPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/CoordinateInterpolator2dPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/CoordinateInterpolator2dPrototype.json']['InterpolationScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/CoordinateInterpolator2dPrototype.json']['InterpolationScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/CoordinateInterpolator2dPrototype.json']['InterpolationScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/CoordinateInterpolator2dPrototype.json']['InterpolationScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/CoordinateInterpolator2dPrototype.json']['InterpolationScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/CoordinateInterpolator2dPrototype.json']['InterpolationScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/CoordinateInterpolator2dPrototype.json']['InterpolationScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/CoordinateInterpolator2dPrototype.json']['InterpolationScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/CoordinateInterpolator2dPrototype.json']['InterpolationScript'].initialize();

