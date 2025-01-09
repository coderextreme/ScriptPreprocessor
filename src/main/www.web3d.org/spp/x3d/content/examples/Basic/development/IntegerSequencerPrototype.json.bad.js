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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/IntegerSequencerPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/IntegerSequencerPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/IntegerSequencerPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/IntegerSequencerPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/IntegerSequencerPrototype.json']['SequencerScript'] = function() {
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
		this.keyValue = new MFInt32();
	} catch (e) {
		console.log('Problems setting keyValue '+e);
		console.error('Problems setting keyValue',e);
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
		this.keyValue = new MFInt32();
	} catch (e) {
		console.log('Problems setting keyValue '+e);
		console.error('Problems setting keyValue',e);
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
		this.keyValue = new MFInt32();
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
	this.set_previous = function (value) {
		try {
			this.proxy.previous = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting previous '+e);
			console.error('Problems setting previous',e);
		}
	};
	this.previous_changed = function () {
		var value = this.previous;
		return value;
	};
	try {
		this.previous = new SFBool();
	} catch (e) {
		console.log('Problems setting previous '+e);
		console.error('Problems setting previous',e);
	}
	this.set_next = function (value) {
		try {
			this.proxy.next = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting next '+e);
			console.error('Problems setting next',e);
		}
	};
	this.next_changed = function () {
		var value = this.next;
		return value;
	};
	try {
		this.next = new SFBool();
	} catch (e) {
		console.log('Problems setting next '+e);
		console.error('Problems setting next',e);
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
		this.traceEnabled = new SFBool(true);
	} catch (e) {
		console.log('Problems setting traceEnabled '+e);
		console.error('Problems setting traceEnabled',e);
	}
	this.set_previousFraction = function (value) {
		try {
			this.proxy.previousFraction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting previousFraction '+e);
			console.error('Problems setting previousFraction',e);
		}
	};
	this.previousFraction_changed = function () {
		var value = this.previousFraction;
		return value;
	};
	try {
		this.previousFraction = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting previousFraction '+e);
		console.error('Problems setting previousFraction',e);
	}
	this.set_nextIndex = function (value) {
		try {
			this.proxy.nextIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting nextIndex '+e);
			console.error('Problems setting nextIndex',e);
		}
	};
	this.nextIndex_changed = function () {
		var value = this.nextIndex;
		return value;
	};
	try {
		this.nextIndex = new SFInt32(0);
	} catch (e) {
		console.log('Problems setting nextIndex '+e);
		console.error('Problems setting nextIndex',e);
	}
	this.set_isValid = function (value) {
		try {
			this.proxy.isValid = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isValid '+e);
			console.error('Problems setting isValid',e);
		}
	};
	this.isValid_changed = function () {
		var value = this.isValid;
		return value;
	};
	try {
		this.isValid = new SFBool(true);
	} catch (e) {
		console.log('Problems setting isValid '+e);
		console.error('Problems setting isValid',e);
	}
	this.set_recheckValidity = function (value) {
		try {
			this.proxy.recheckValidity = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting recheckValidity '+e);
			console.error('Problems setting recheckValidity',e);
		}
	};
	this.recheckValidity_changed = function () {
		var value = this.recheckValidity;
		return value;
	};
	try {
		this.recheckValidity = new SFBool(false);
	} catch (e) {
		console.log('Problems setting recheckValidity '+e);
		console.error('Problems setting recheckValidity',e);
	}


ecmascript:

var leftToRight;

	this.initialize = function ()
{
	key      = X3DJSON.nodeUtil("Scene","KeyHolder", "key");
	this.tracePrint('Initializing a new IntegerSequencer.  key.length=' + key.length + '; this.proxy.keyValue.length=' + this.proxy.keyValue.length);
	this.tracePrint('key =' + key);
	this.tracePrint('this.proxy.keyValue =' + this.proxy.keyValue);

	this.validityCheck();
	this.setHalfKeyRange();

	// assume we start at first key, going left to right
	leftToRight = true;
	this.proxy.previousFraction = key[0];
	this.proxy.nextIndex = 1;  //this.validityCheck ensures minimum of 2 keys exist
}
;

	this.set_fraction = function (newFraction, timeStamp)
{
	if (this.proxy.recheckValidity) this.validityCheck();

	if (!this.proxy.isValid) return; //IntegerSequencer ignored

	//Bounds checking
	if (newFraction < key[0])
	{
		this.tracePrint('*** warning: fraction is less than first key.  fraction set to first key ***');
		newFraction = key[0];
	}
	else if (newFraction > key[key.length-1])
	{
		this.tracePrint('*** warning: fraction is greater than last key.  fraction set to last key ***');
		newFraction = key[key.length -1];
	}

	//Check animation direction
	if (newFraction < this.proxy.previousFraction && leftToRight == true)
	{
		if ((this.proxy.previousFraction - newFraction) > halfKeyRange) //looped around
		{
			this.proxy.nextIndex = 1;
		}
		else //just changed direction
		{
			leftToRight = false;
			this.proxy.nextIndex = this.proxy.nextIndex - 1;
            }
	}
	else if (newFraction > this.proxy.previousFraction && leftToRight == false)
	{
		if ((newFraction - this.proxy.previousFraction) < halfKeyRange) //looped around
		{
			this.proxy.nextIndex = key.length - 2;
		}
		else //just changed direction
		{
			leftToRight = true;
			this.proxy.nextIndex = this.proxy.nextIndex + 1;
            }
	}
	else if (newFraction == this.proxy.previousFraction)
	{ //no change, so no processing required
		return;
	}
	this.proxy.previousFraction = newFraction;

	if (leftToRight) // moving left to right
	{
		while (newFraction > key[this.proxy.nextIndex]) this.proxy.nextIndex++;

		if (newFraction == key[this.proxy.nextIndex])
			this.proxy.value_changed = this.proxy.keyValue[this.proxy.nextIndex];
		else	this.proxy.value_changed = this.proxy.keyValue[this.proxy.nextIndex -1];

		this.tracePrint('forward animation, fraction =' + newFraction);
		this.tracePrint('this.proxy.value_changed eventOut is:' + this.proxy.value_changed);
	}
	else // moving right to left
	{
		while (newFraction < key[this.proxy.nextIndex]) this.proxy.nextIndex--;

		if (newFraction == key[this.proxy.nextIndex])
			this.proxy.value_changed = this.proxy.keyValue[this.proxy.nextIndex];
		else	this.proxy.value_changed = this.proxy.keyValue[this.proxy.nextIndex + 1];

		this.tracePrint('backward animation, fraction =' + newFraction);
		this.tracePrint('this.proxy.value_changed eventOut is:' + this.proxy.value_changed);
	}
}
;

	this.set_key = function (newKey, timeStamp)
{
	key = newKey;
	X3DJSON.nodeUtil("Scene","KeyHolder", "key",  newKey);
	setHalfKeyWidth();
	this.proxy.recheckValidity = true;
}
;

	this.set_keyValue = function (newKeyValue, timeStamp)
{
	this.proxy.keyValue = newKeyValue;
	this.proxy.recheckValidity = true;
}
;

	this.setHalfKeyRange = function ()
{
	halfKeyRange = (key[key.length - 1] - key[0])/2.0;
}
;

	this.previous = function (value, timeStamp)
{
  if (value==true) // trigger on true events only
  {
	leftToRight = true;
	this.proxy.nextIndex = this.proxy.nextIndex - 2; // reset to this.proxy.previous
	if (this.proxy.nextIndex < 0) this.proxy.nextIndex = this.proxy.nextIndex + key.length;
	this.proxy.value_changed = this.proxy.keyValue[this.proxy.nextIndex];
	this.proxy.previousFraction = key[this.proxy.nextIndex];
	this.proxy.nextIndex++; // setup for this.proxy.next time, leftToRight
	if (this.proxy.nextIndex > key.length - 1) this.proxy.nextIndex = 0;
  }
};

	this.next = function (value, timeStamp)
{
  if (value==true) // trigger on true events only
  {
	leftToRight = true;
	this.proxy.value_changed = this.proxy.keyValue[this.proxy.nextIndex];
	this.proxy.previousFraction = key[this.proxy.nextIndex];
	this.proxy.nextIndex++; // setup for this.proxy.next time,leftToRight
	if (this.proxy.nextIndex > key.length - 1) this.proxy.nextIndex = 0;
  }
}
;

	this.validityCheck = function ()
{
	//Check if lengths of key & this.proxy.keyValue arrays match
	if (key.length != this.proxy.keyValue.length)
	{
		this.alwaysPrint('*** error: key and this.proxy.keyValue arrays must be of the same length.  IntegerSequencer ignored ***');
		this.proxy.isValid = false;
		return;
	}
	//check to ensure minimum of 2 keys have been specified
	if (key.length < 2)
	{
		this.alwaysPrint('*** error: must contain at least 2 keys.  IntegerSequencer ignored ***');
		this.proxy.isValid = false;
		return;
	}

	//Check if key array has values in an non-decreasing order
	for (i = 1; i < key.length; i++)
	{
		this.tracePrint('i=' + i);

		if (key[i] < key [i-1])
		{
			this.alwaysPrint('*** error: key array values must be listed in a non-decreasing order.  IntegerSequencer ignored ***');
			this.proxy.isValid = false;
			return;
		}
	}
	this.proxy.isValid = true
	this.proxy.recheckValidity = false;
	this.proxy.key_changed = key;
	this.proxy.keyValue_changed = this.proxy.keyValue;
	return;
}
;

	this.tracePrint = function (outputString)
{
	if (this.proxy.traceEnabled) console.error ('[IntegerSequencer]' + outputString);
}
;

	this.alwaysPrint = function (outputString)
{
	console.error ('[IntegerSequencer]' + outputString);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/IntegerSequencerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/IntegerSequencerPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/IntegerSequencerPrototype.json']['SequencerScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/IntegerSequencerPrototype.json']['SequencerScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/IntegerSequencerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/IntegerSequencerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/IntegerSequencerPrototype.json']['SequencerScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/IntegerSequencerPrototype.json']['SequencerScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/IntegerSequencerPrototype.json']['SequencerScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/IntegerSequencerPrototype.json']['SequencerScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/IntegerSequencerPrototype.json']['SequencerScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/IntegerSequencerPrototype.json']['SequencerScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/IntegerSequencerPrototype.json']['SequencerScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/IntegerSequencerPrototype.json']['SequencerScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/IntegerSequencerPrototype.json']['SequencerScript'].initialize();

