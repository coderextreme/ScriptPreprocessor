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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'] = function() {
	this.set_toggle = function (value) {
		try {
			this.proxy.toggle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toggle '+e);
			console.error('Problems setting toggle',e);
		}
	};
	this.toggle_changed = function () {
		var value = this.toggle;
		return value;
	};
	try {
		this.toggle = new SFBool();
	} catch (e) {
		console.log('Problems setting toggle '+e);
		console.error('Problems setting toggle',e);
	}
	this.set_state = function (value) {
		try {
			this.proxy.state = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting state '+e);
			console.error('Problems setting state',e);
		}
	};
	this.state_changed = function () {
		var value = this.state;
		return value;
	};
	try {
		this.state = new SFBool(true);
	} catch (e) {
		console.log('Problems setting state '+e);
		console.error('Problems setting state',e);
	}
	this.set_stateTurnedTrue = function (value) {
		try {
			this.proxy.stateTurnedTrue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting stateTurnedTrue '+e);
			console.error('Problems setting stateTurnedTrue',e);
		}
	};
	this.stateTurnedTrue_changed = function () {
		var value = this.stateTurnedTrue;
		return value;
	};
	try {
		this.stateTurnedTrue = new SFBool();
	} catch (e) {
		console.log('Problems setting stateTurnedTrue '+e);
		console.error('Problems setting stateTurnedTrue',e);
	}
	this.set_stateTurnedFalse = function (value) {
		try {
			this.proxy.stateTurnedFalse = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting stateTurnedFalse '+e);
			console.error('Problems setting stateTurnedFalse',e);
		}
	};
	this.stateTurnedFalse_changed = function () {
		var value = this.stateTurnedFalse;
		return value;
	};
	try {
		this.stateTurnedFalse = new SFBool();
	} catch (e) {
		console.log('Problems setting stateTurnedFalse '+e);
		console.error('Problems setting stateTurnedFalse',e);
	}


ecmascript:

// setting the value of an eventOut variable also sends it as an event
// you can view the output of print statements in the VRML Console

	this.toggle = function ( value, ts ) {
  // only this.proxy.toggle on click (isActive true) not release (isActive false)
  if ( value == false ) return;
  if ( this.proxy.state == true )
  {
	this.proxy.state  = false;
	this.proxy.stateTurnedFalse = true;
	console.error ('ToggleScript.proxy.state = ' + this.proxy.state + ', this.proxy.stateTurnedFalse = ' + true);
  }
  else
  {
	this.proxy.state  = true;
	this.proxy.stateTurnedTrue = true;
	console.error ('ToggleScript.proxy.state = ' + this.proxy.state + ', this.proxy.stateTurnedTrue = ' + true);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'] = function() {
	this.set_setStart = function (value) {
		try {
			this.proxy.setStart = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setStart '+e);
			console.error('Problems setting setStart',e);
		}
	};
	this.setStart_changed = function () {
		var value = this.setStart;
		return value;
	};
	try {
		this.setStart = new SFBool();
	} catch (e) {
		console.log('Problems setting setStart '+e);
		console.error('Problems setting setStart',e);
	}
	this.set_setStop = function (value) {
		try {
			this.proxy.setStop = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting setStop '+e);
			console.error('Problems setting setStop',e);
		}
	};
	this.setStop_changed = function () {
		var value = this.setStop;
		return value;
	};
	try {
		this.setStop = new SFBool();
	} catch (e) {
		console.log('Problems setting setStop '+e);
		console.error('Problems setting setStop',e);
	}
	this.set_startEventTime = function (value) {
		try {
			this.proxy.startEventTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startEventTime '+e);
			console.error('Problems setting startEventTime',e);
		}
	};
	this.startEventTime_changed = function () {
		var value = this.startEventTime;
		return value;
	};
	try {
		this.startEventTime = new SFTime();
	} catch (e) {
		console.log('Problems setting startEventTime '+e);
		console.error('Problems setting startEventTime',e);
	}
	this.set_stopEventTime = function (value) {
		try {
			this.proxy.stopEventTime = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting stopEventTime '+e);
			console.error('Problems setting stopEventTime',e);
		}
	};
	this.stopEventTime_changed = function () {
		var value = this.stopEventTime;
		return value;
	};
	try {
		this.stopEventTime = new SFTime();
	} catch (e) {
		console.log('Problems setting stopEventTime '+e);
		console.error('Problems setting stopEventTime',e);
	}


ecmascript:

// setting the value of an eventOut variable also sends it as an event

	this.setStart = function ( value, timeStamp ) {
	this.proxy.startEventTime = timeStamp;
	console.error ('TimeFilter.proxy.setStart (' + value + '), this.proxy.startEventTime = ' + timeStamp);
	console.error (''); // newline
};

	this.setStop = function ( value, timeStamp ) {
	this.proxy.stopEventTime  = timeStamp;
	console.error ('TimeFilter.proxy.setStop  (' + value + '),  this.proxy.stopEventTime = ' + timeStamp);
	console.error (''); // newline
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'].initialize();
    if (X3DJSON.nodeUtil("Scene","Touch")) {
X3DJSON.nodeUtil("Scene","Touch").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].toggle(X3DJSON.nodeUtil("Scene","Touch","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].toggle(X3DJSON.nodeUtil("Scene","Touch","isActive"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript']['ACTION']['stateTurnedTrue'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript']['ACTION']['stateTurnedTrue'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript']['ACTION']['stateTurnedTrue'].push(function(property, value) {
		if (property === 'stateTurnedTrue') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedTrue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedTrue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedTrue) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'].setStart(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedTrue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedTrue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedTrue, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedTrue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedTrue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedTrue) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'].setStart(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedTrue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedTrue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedTrue, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript']['ACTION']['stateTurnedFalse'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript']['ACTION']['stateTurnedFalse'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript']['ACTION']['stateTurnedFalse'].push(function(property, value) {
		if (property === 'stateTurnedFalse') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedFalse === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedFalse() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedFalse) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'].setStop(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedFalse === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedFalse() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedFalse, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedFalse === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedFalse() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedFalse) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'].setStop(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedFalse === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedFalse() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedFalse, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter']['ACTION']['startEventTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter']['ACTION']['startEventTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter']['ACTION']['startEventTime'].push(function(property, value) {
		if (property === 'startEventTime') {
			X3DJSON.nodeUtil("Scene","Audio","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'].startEventTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'].startEventTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'].startEventTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Audio","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'].startEventTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'].startEventTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'].startEventTime, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter']['ACTION']['stopEventTime'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter']['ACTION']['stopEventTime'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter']['ACTION']['stopEventTime'].push(function(property, value) {
		if (property === 'stopEventTime') {
			X3DJSON.nodeUtil("Scene","Audio","stopTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'].stopEventTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'].stopEventTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'].stopEventTime, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Audio","stopTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'].stopEventTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'].stopEventTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'].stopEventTime, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].toggle(X3DJSON.nodeUtil("Scene","Touch","isActive"), __eventTime);
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedTrue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedTrue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedTrue) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'].setStart(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedTrue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedTrue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedTrue, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedFalse === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedFalse() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedFalse) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'].setStop(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedFalse === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedFalse() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['ToggleScript'].stateTurnedFalse, __eventTime);
		}
			X3DJSON.nodeUtil("Scene","Audio","startTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'].startEventTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'].startEventTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'].startEventTime, __eventTime);
			X3DJSON.nodeUtil("Scene","Audio","stopTime",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'].stopEventTime === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'].stopEventTime() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Vrml2Sourcebook/Chapter30Scripts/Figure30_3ScriptSoundActivate.json']['TimeFilter'].stopEventTime, __eventTime);