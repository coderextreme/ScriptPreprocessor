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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript'] = function() {
	this.set_time = function (value) {
		try {
			this.proxy.time = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting time '+e);
			console.error('Problems setting time',e);
		}
	};
	this.time_changed = function () {
		var value = this.time;
		return value;
	};
	try {
		this.time = new SFTime(-1);
	} catch (e) {
		console.log('Problems setting time '+e);
		console.error('Problems setting time',e);
	}
	this.set_setCurrentTime = function (value) {
		try {
			this.proxy.setCurrentTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setCurrentTime '+e);
			console.error('Problems setting setCurrentTime',e);
		}
	};
	this.setCurrentTime_changed = function () {
		var value = this.setCurrentTime;
		return value;
	};
	try {
		this.setCurrentTime = new SFTime();
	} catch (e) {
		console.log('Problems setting setCurrentTime '+e);
		console.error('Problems setting setCurrentTime',e);
	}
	this.set_timeText = function (value) {
		try {
			this.proxy.timeText = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting timeText '+e);
			console.error('Problems setting timeText',e);
		}
	};
	this.timeText_changed = function () {
		var value = this.timeText;
		return value;
	};
	try {
		this.timeText = new MFString();
	} catch (e) {
		console.log('Problems setting timeText '+e);
		console.error('Problems setting timeText',e);
	}


ecmascript:

	this.initialize = function ()
{
	this.tracePrint('this.initialize () complete');
};

	this.setCurrentTime = function (value, timeStamp)
{
	this.tracePrint('this.proxy.setCurrentTime(' + value + ')');
	myDate = new Date(); // value unused, causes BS Contact fatal error
        if (myDate == null)
        {
            console.error ('[DvdControllerExample TimeTextScript] this.proxy.setCurrentTime() error: class Date not supported');
            return;
        }
	numHour   = myDate.getHours();
	numMinute = myDate.getMinutes();
	numSecond = myDate.getSeconds();

	date = myDate.getDate();
	monthNumber = myDate.getMonth();
	year = myDate.getYear() + 1900;

	// javascript switch statement is convenient but not consistently supported, so test the old-fashioned way:

        if (monthNumber==0)
	{
            monthText ='January';
	}
        else if (monthNumber==1)
	{
            monthText ='February';
	}
        else if (monthNumber==2)
	{
            monthText ='March';
	}
        else if (monthNumber==3)
	{
            monthText ='April';
	}
        else if (monthNumber==4)
	{
            monthText ='May';
	}
        else if (monthNumber==5)
	{
            monthText ='June';
	}
        else if (monthNumber==6)
	{
            monthText ='July';
	}
        else if (monthNumber==7)
	{
            monthText ='August';
	}
        else if (monthNumber==8)
	{
            monthText ='September';
	}
        else if (monthNumber==9)
	{
            monthText ='October';
	}
        else if (monthNumber==10)
	{
            monthText ='November';
	}
        else if (monthNumber==11)
	{
            monthText ='December';
	}
        else
	{
            monthText ='(illegal month index)';
        }

	if (numHour < 10)
		hour ='0' + numHour;
	else
		hour = numHour;

	if (numMinute < 10)
		minute ='0' + numMinute;
	else
		minute = numMinute;

	numSecond = Math.round(numSecond * 1000.0) / 1000.0;
	if (numSecond < 10)
		second ='0' + numSecond;
	else
		second = numSecond;
	text = hour + ':' + minute + ':' + second + ', ' + date + ' ' + monthText + ' ' + year;
	this.proxy.timeText = new MFString(text);
        //deprecated	this.proxy.timeText = new MFString(myDate.toGMTString());

        this.tracePrint ('this.proxy.timeText=' + this.proxy.timeText.toString());
};

	this.tracePrint = function (text)
{
	if (true) console.error ('[DvdControllerExample TimeTextScript] ' + text + '');
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript'].initialize();
    if (X3DJSON.nodeUtil("Scene","DvdControllerInterface")) {
X3DJSON.nodeUtil("Scene","DvdControllerInterface").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript'].setCurrentTime(X3DJSON.nodeUtil("Scene","DvdControllerInterface","time"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript'].setCurrentTime(X3DJSON.nodeUtil("Scene","DvdControllerInterface","time"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript']['ACTION']['timeText'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript']['ACTION']['timeText'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript']['ACTION']['timeText'].push(function(property, value) {
		if (property === 'timeText') {
			X3DJSON.nodeUtil("Scene","TimeText","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript'].timeText === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript'].timeText() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript'].timeText, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TimeText","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript'].timeText === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript'].timeText() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript'].timeText, __eventTime);
    if (X3DJSON.nodeUtil("Scene","DvdControllerInterface")) {
X3DJSON.nodeUtil("Scene","DvdControllerInterface").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FractionConverter")) {
X3DJSON.nodeUtil("Scene","FractionConverter").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","DvdControllerInterface")) {
X3DJSON.nodeUtil("Scene","DvdControllerInterface").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","SecondsConverter")) {
X3DJSON.nodeUtil("Scene","SecondsConverter").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript'].setCurrentTime(X3DJSON.nodeUtil("Scene","DvdControllerInterface","time"), __eventTime);
			X3DJSON.nodeUtil("Scene","TimeText","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript'].timeText === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript'].timeText() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Tools/HeadsUpDisplays/DvdControllerExample.json']['TimeTextScript'].timeText, __eventTime);