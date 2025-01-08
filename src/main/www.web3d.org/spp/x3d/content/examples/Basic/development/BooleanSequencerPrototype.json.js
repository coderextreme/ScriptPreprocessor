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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerPrototype.json']['SequencerScript'] = function() {
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
		this.key = new MFFloat();
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
		this.key = new MFFloat();
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
		this.traceEnabled = new SFBool(false);
	} catch (e) {
		console.log('Problems setting traceEnabled '+e);
		console.error('Problems setting traceEnabled',e);
	}
	this.set_keyValueArray = function (value) {
		try {
			this.proxy.keyValueArray = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting keyValueArray '+e);
			console.error('Problems setting keyValueArray',e);
		}
	};
	this.keyValueArray_changed = function () {
		var value = this.keyValueArray;
		return value;
	};
	try {
		this.keyValueArray = new MFInt32();
	} catch (e) {
		console.log('Problems setting keyValueArray '+e);
		console.error('Problems setting keyValueArray',e);
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
	this.set_valid = function (value) {
		try {
			this.proxy.valid = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting valid '+e);
			console.error('Problems setting valid',e);
		}
	};
	this.valid_changed = function () {
		var value = this.valid;
		return value;
	};
	try {
		this.valid = new SFBool(true);
	} catch (e) {
		console.log('Problems setting valid '+e);
		console.error('Problems setting valid',e);
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
	this.set_forward = function (value) {
		try {
			this.proxy.forward = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting forward '+e);
			console.error('Problems setting forward',e);
		}
	};
	this.forward_changed = function () {
		var value = this.forward;
		return value;
	};
	try {
		this.forward = new SFBool(true);
	} catch (e) {
		console.log('Problems setting forward '+e);
		console.error('Problems setting forward',e);
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
		this.key = new MFFloat();
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


ecmascript:

var key, keyValue;

	this.initialize = function ()
{
	this.proxy.key      = X3DJSON.nodeUtil("Scene","KeyHolder", "this.proxy.key");
	this.proxy.keyValue = X3DJSON.nodeUtil("Scene","KeyValueHolder", "description");
	this.tracePrint('this.proxy.key =' + this.proxy.key);
	this.tracePrint('this.proxy.keyValue =' + this.proxy.keyValue);
	this.keyValueToKeyValueArray ();
	this.tracePrint('this.proxy.keyValueArray =' + this.proxy.keyValueArray);

	this.proxy.forward = true;
	this.tracePrint('Initializing a new BooleanSequencer.  this.proxy.key.length=' + this.proxy.key.length + '; this.proxy.keyValueArray.length=' + this.proxy.keyValueArray.length);
	this.validityCheck();
}
;

	this.keyValueToKeyValueArray = function ()
{
	this.tracePrint('this.keyValueToKeyValueArray starting');
	index = 0;
	complete = false;
	nextString = this.proxy.keyValue.toLowerCase();
	this.tracePrint('initial nextString=' + nextString);
	tokenCount=0;
	while ((complete != true) && (nextString.length > 0))
	{
		this.tracePrint('nextString=' + nextString);
		while ((nextString.substring(0,1) == ' ') || (nextString.substring(0,1) == ','))
		       nextString = nextString.slice(1);
		this.tracePrint('deblanked nextString=' + nextString);
		if (nextString.length == 0)
		{
			this.tracePrint ('nextString.length == 0');
			complete = true;
		}
		if (nextString.length < 4)
		{
			this.alwaysPrint ('*** illegal this.proxy.keyValue input=' + nextString);
			this.proxy.valid = false;
			complete = true;
		}
		else if (nextString.substring(0,4) =='true')
		{
			this.proxy.keyValueArray[this.proxy.keyValueArray.length] = 1; // append
			newString = nextString.slice(4);
			nextString = newString;
			tokenCount++;
			this.tracePrint('found true, nextString=' + nextString + ', tokenCount=' + tokenCount);
		}
		else if (nextString.length < 5)
		{
			this.alwaysPrint ('*** illegal this.proxy.keyValue input=' + nextString);
			this.proxy.valid = false;
			complete = true;
		}
		else if (nextString.substring(0,5) =='false')
		{
			this.proxy.keyValueArray[this.proxy.keyValueArray.length] = 0; // append
			newString = nextString.slice(5);
			nextString = newString;
			tokenCount++;
			this.tracePrint('found false, nextString=' + nextString + ', tokenCount=' + tokenCount);
		}
		this.tracePrint('  intermediate this.proxy.keyValueArray=' + this.proxy.keyValueArray);
	}
	this.tracePrint('this.keyValueToKeyValueArray complete');
}
;

	this.set_fraction = function (value, timeStamp)
{
	if (this.proxy.recheckValidity) this.validityCheck();

	if (!this.proxy.valid) return; //BooleanSequencer ignored

	this.tracePrint('fraction =' + value);
	//Bounds checking
	if (value < 0)
	{
		this.alwaysPrint('*** warning: fraction is less than 0.  fraction reset to 0 ***');
		value = 0;
	}
	else if (value > 1)
	{
		this.alwaysPrint('*** warning: fraction is greater than 1.  fraction reset to 1 ***');
		value = 1;
	}

	//Check animation direction
	if (value < this.proxy.previousFraction && this.proxy.forward == true)
	{
		this.proxy.forward = false;
		this.proxy.nextIndex = this.proxy.nextIndex - 1;
		this.tracePrint('Animate backward');
	}
	else if (value > this.proxy.previousFraction && this.proxy.forward == false)
	{
		this.proxy.forward = true;
		//this.proxy.nextIndex = 0;
		this.tracePrint('Animate this.proxy.forward');
	}

	this.proxy.previousFraction = value;

	if (this.proxy.forward == true)
	{
		for (i = this.proxy.nextIndex; i < this.proxy.key.length; i++)
		{
			if (value < this.proxy.key[i])
				return;

			this.proxy.nextIndex = i + 1;
			this.tracePrint('this.proxy.nextIndex =' + this.proxy.nextIndex);
			if (this.proxy.nextIndex < this.proxy.key.length)
			{
				if (value <= this.proxy.key[this.proxy.nextIndex])
				{
					//Fire event
					if (this.proxy.keyValueArray[this.proxy.nextIndex-1] == 0)
						this.proxy.value_changed = false;
					else
						this.proxy.value_changed = true;
					this.tracePrint('this.proxy.value_changed eventOut is:' + this.proxy.value_changed);
				}
			}
			else if (this.proxy.nextIndex == this.proxy.key.length)
			{
				//Fire event
				if (this.proxy.keyValueArray[this.proxy.nextIndex-1] == 0)
					this.proxy.value_changed = false;
				else
					this.proxy.value_changed = true;
				this.tracePrint('this.proxy.value_changed eventOut is:' + this.proxy.value_changed);
			}
			else //this.proxy.nextIndex > this.proxy.key.length
			{
				//this.proxy.nextIndex = 0;
				break;
			}
		}
	}
	else //backward
	{
		for (i = this.proxy.nextIndex; i > 0; i--)
		{
			if (value >= this.proxy.key[i])
				return;

			this.proxy.nextIndex = i - 1;
			this.tracePrint('this.proxy.nextIndex =' + this.proxy.nextIndex);
			if (this.proxy.nextIndex >= 0)
			{
				if (value >= this.proxy.key[this.proxy.nextIndex])
				{
					//Fire event
					if (this.proxy.keyValueArray[this.proxy.nextIndex] == 0)
						this.proxy.value_changed = false;
					else
						this.proxy.value_changed = true;
					this.tracePrint('this.proxy.value_changed eventOut is:' + this.proxy.value_changed);
				}
			}
			else //this.proxy.nextIndex < 0
			{
				//this.proxy.nextIndex = this.proxy.key.length;
				break;
			}
		}
	}
}
;

	this.set_key = function (value, timeStamp)
{
	this.proxy.key = value;
	X3DJSON.nodeUtil("Scene","KeyHolder", "this.proxy.key",  this.proxy.key);
	this.proxy.recheckValidity = true;
}
;

	this.set_keyValue = function (value, timeStamp)
{
	this.proxy.keyValue = value;
	X3DJSON.nodeUtil("Scene","KeyValueHolder", "description",  this.proxy.keyValue);
	this.proxy.recheckValidity = true;
	this.keyValueToKeyValueArray ();
	this.proxy.keyValue_changed = this.proxy.keyValue;
}
;

	this.validityCheck = function ()
{
	//Check if this.proxy.key & this.proxy.keyValueArray array length matches
	if (this.proxy.key.length != this.proxy.keyValueArray.length)
	{
		this.alwaysPrint('*** error: this.proxy.key and this.proxy.keyValue arrays must be of the same length.  BooleanSequencer ignored ***');
		this.proxy.valid = false;
		return;
	}

	//Check if this.proxy.key array has values in the range of [0..1] in an increasing order
	if (this.proxy.key[0] < 0 || this.proxy.key[0] > 1)
	{
		this.alwaysPrint('*** error: this.proxy.key[0] value is NOT in the range of [0..1].  BooleanSequencer ignored ***');
		this.proxy.valid = false;
		return;
	}
	for (i = 1; i < this.proxy.key.length; i++)
	{
		if (this.proxy.key[i] < 0 || this.proxy.key[i] > 1)
		{
			this.alwaysPrint('*** error: this.proxy.key[' + i + '] value is NOT in the range of [0..1].  BooleanSequencer ignored ***');
			this.proxy.valid = false;
			return;
		}

		if (this.proxy.key[i] <= this.proxy.key [i-1])
		{
			this.alwaysPrint('*** error: values for this.proxy.key[] array must be listed in an increasing order.  BooleanSequencer ignored ***');
			this.proxy.valid = false;
			return;
		}
	}
	this.proxy.recheckValidity = false;
	this.proxy.key_changed = this.proxy.key;
	return;
};

	this.previous = function (SFBoolValue, timestamp)
{
	this.proxy.nextIndex = this.proxy.nextIndex - 1;
	if (this.proxy.nextIndex == 0) this.proxy.nextIndex = this.proxy.key.length - 1;
};

	this.next = function (SFBoolValue, timestamp)
{
	this.proxy.nextIndex = this.proxy.nextIndex + 1;
	if (this.proxy.nextIndex == this.proxy.key.length) this.proxy.nextIndex = 0;
}
;

	this.tracePrint = function (outputString)
{
	if (this.proxy.traceEnabled) console.error ('[ BooleanSequencer ]' + outputString);
}
;

	this.alwaysPrint = function (outputString)
{
	console.error ('[ BooleanSequencer ]' + outputString);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerPrototype.json']['SequencerScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerPrototype.json']['SequencerScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerPrototype.json']['SequencerScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerPrototype.json']['SequencerScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerPrototype.json']['SequencerScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerPrototype.json']['SequencerScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerPrototype.json']['SequencerScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerPrototype.json']['SequencerScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerPrototype.json']['SequencerScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerPrototype.json']['SequencerScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/development/BooleanSequencerPrototype.json']['SequencerScript'].initialize();

