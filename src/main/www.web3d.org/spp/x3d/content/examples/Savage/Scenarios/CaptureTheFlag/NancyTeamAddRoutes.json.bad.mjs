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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible'] = function() {
	this.set_Visible = function (value) {
		try {
			this.proxy.Visible = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Visible '+e);
			console.error('Problems setting Visible',e);
		}
	};
	this.Visible_changed = function () {
		var value = this.Visible;
		return value;
	};
	try {
		this.Visible = undefined;
	} catch (e) {
		console.log('Problems setting Visible '+e);
		console.error('Problems setting Visible',e);
	}
	this.set_Visible = function (value) {
		try {
			this.proxy.Visible = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Visible '+e);
			console.error('Problems setting Visible',e);
		}
	};
	this.Visible_changed = function () {
		var value = this.Visible;
		return value;
	};
	try {
		this.Visible = undefined;
	} catch (e) {
		console.log('Problems setting Visible '+e);
		console.error('Problems setting Visible',e);
	}


ecmascript:
	this.set_Visible = function ( Visible, timeStamp )
{
	console.error ('Visible = ' + Visible);
	if ( Visible == -1 )
		this.proxy.Visible_changed = -1;
	else	this.proxy.Visible_changed = 0;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountLeader'] = function() {
	this.set_mountedState = function (value) {
		try {
			this.proxy.mountedState = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting mountedState '+e);
			console.error('Problems setting mountedState',e);
		}
	};
	this.mountedState_changed = function () {
		var value = this.mountedState;
		return value;
	};
	try {
		this.mountedState = new SFFloat();
	} catch (e) {
		console.log('Problems setting mountedState '+e);
		console.error('Problems setting mountedState',e);
	}
	this.set_translation = function (value) {
		try {
			this.proxy.translation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting translation '+e);
			console.error('Problems setting translation',e);
		}
	};
	this.translation_changed = function () {
		var value = this.translation;
		return value;
	};
	try {
		this.translation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting translation '+e);
		console.error('Problems setting translation',e);
	}
	this.set_zeroTranslation = function (value) {
		try {
			this.proxy.zeroTranslation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting zeroTranslation '+e);
			console.error('Problems setting zeroTranslation',e);
		}
	};
	this.zeroTranslation_changed = function () {
		var value = this.zeroTranslation;
		return value;
	};
	try {
		this.zeroTranslation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting zeroTranslation '+e);
		console.error('Problems setting zeroTranslation',e);
	}
	this.set_routeLoaded = function (value) {
		try {
			this.proxy.routeLoaded = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting routeLoaded '+e);
			console.error('Problems setting routeLoaded',e);
		}
	};
	this.routeLoaded_changed = function () {
		var value = this.routeLoaded;
		return value;
	};
	try {
		this.routeLoaded = new SFBool(true);
	} catch (e) {
		console.log('Problems setting routeLoaded '+e);
		console.error('Problems setting routeLoaded',e);
	}
	this.set_routeUnloaded = function (value) {
		try {
			this.proxy.routeUnloaded = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting routeUnloaded '+e);
			console.error('Problems setting routeUnloaded',e);
		}
	};
	this.routeUnloaded_changed = function () {
		var value = this.routeUnloaded;
		return value;
	};
	try {
		this.routeUnloaded = new SFBool(true);
	} catch (e) {
		console.log('Problems setting routeUnloaded '+e);
		console.error('Problems setting routeUnloaded',e);
	}
	this.set_thisNode = function (value) {
		try {
			this.proxy.thisNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting thisNode '+e);
			console.error('Problems setting thisNode',e);
		}
	};
	this.thisNode_changed = function () {
		var value = this.thisNode;
		return value;
	};
	try {
		this.thisNode = X3DJSON.nodeUtil("Scene","MountLeader");
	} catch (e) {
		console.log('Problems setting thisNode '+e);
		console.error('Problems setting thisNode',e);
	}
	this.set_fromNode = function (value) {
		try {
			this.proxy.fromNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fromNode '+e);
			console.error('Problems setting fromNode',e);
		}
	};
	this.fromNode_changed = function () {
		var value = this.fromNode;
		return value;
	};
	try {
		this.fromNode = X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform");
	} catch (e) {
		console.log('Problems setting fromNode '+e);
		console.error('Problems setting fromNode',e);
	}
	this.set_toNode = function (value) {
		try {
			this.proxy.toNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toNode '+e);
			console.error('Problems setting toNode',e);
		}
	};
	this.toNode_changed = function () {
		var value = this.toNode;
		return value;
	};
	try {
		this.toNode = X3DJSON.nodeUtil("Scene","LeaderTransform");
	} catch (e) {
		console.log('Problems setting toNode '+e);
		console.error('Problems setting toNode',e);
	}


ecmascript:

	this.mountedState = function (mState, timeStamp)
{
	// 0=unmounted, 1=mounted
	if (mState == 0)
	{
		if (!this.proxy.routeUnloaded)
		{
			Browser.deleteRoute (X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform", ""), 'translation_changed', X3DJSON.nodeUtil("Scene","MountLeader", ""), 'this.proxy.translation');
			Browser.deleteRoute (X3DJSON.nodeUtil("Scene","MountLeader", ""), 'this.proxy.zeroTranslation',     X3DJSON.nodeUtil("Scene","LeaderTransform", ""), 'set_translation');
			this.proxy.routeUnloaded = true;
			console.error ('Just deleted Local Translation Routes. this.proxy.routeUnloaded = ' + this.proxy.routeUnloaded);
		}
		if (!this.proxy.routeLoaded)
		{
			Browser.addRoute ( X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform", ""), 'translation_changed', X3DJSON.nodeUtil("Scene","LeaderTransform", ""), 'set_translation');
			this.proxy.routeLoaded = true;
			console.error ('Just added Espdu Translation Routes. this.proxy.routeLoaded =' + this.proxy.routeLoaded);
		}
	}
	else
	{
		if (this.proxy.routeLoaded)
		{
			Browser.deleteRoute (X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform", ""), 'translation_changed', X3DJSON.nodeUtil("Scene","LeaderTransform", ""), 'set_translation');
			this.proxy.routeLoaded = false;
			console.error ('Just deleted Espdu Translation Routes. this.proxy.routeLoaded = ' + this.proxy.routeLoaded);
		}
		if (this.proxy.routeUnloaded)
		{
			Browser.addRoute (X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform", ""), 'translation_changed', X3DJSON.nodeUtil("Scene","MountLeader", ""), 'this.proxy.translation');
			Browser.addRoute (X3DJSON.nodeUtil("Scene","MountLeader", ""), 'this.proxy.zeroTranslation', X3DJSON.nodeUtil("Scene","LeaderTransform", ""), 'set_translation');
			this.proxy.routeUnloaded = false;
			console.error ('Just added Local Translation Routes. this.proxy.routeUnloaded = ' + this.proxy.routeUnloaded);
		}
	}
}
;

	this.translation = function (trans, timeStamp)
{
	 this.proxy.zeroTranslation.x = 0.0;
	 this.proxy.zeroTranslation.y = 0.0;
	 this.proxy.zeroTranslation.z = 0.0;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountLeader'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountLeader']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountLeader'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountLeader'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountLeader']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountLeader']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountLeader'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountLeader']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountLeader']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountLeader'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountLeader'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountLeader'] = function() {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountLeader'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountLeader']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountLeader'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountLeader'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountLeader']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountLeader']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountLeader'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountLeader']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountLeader']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountLeader'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountLeader'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1'] = function() {
	this.set_mountedState = function (value) {
		try {
			this.proxy.mountedState = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting mountedState '+e);
			console.error('Problems setting mountedState',e);
		}
	};
	this.mountedState_changed = function () {
		var value = this.mountedState;
		return value;
	};
	try {
		this.mountedState = new SFFloat();
	} catch (e) {
		console.log('Problems setting mountedState '+e);
		console.error('Problems setting mountedState',e);
	}
	this.set_translation = function (value) {
		try {
			this.proxy.translation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting translation '+e);
			console.error('Problems setting translation',e);
		}
	};
	this.translation_changed = function () {
		var value = this.translation;
		return value;
	};
	try {
		this.translation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting translation '+e);
		console.error('Problems setting translation',e);
	}
	this.set_zeroTranslation = function (value) {
		try {
			this.proxy.zeroTranslation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting zeroTranslation '+e);
			console.error('Problems setting zeroTranslation',e);
		}
	};
	this.zeroTranslation_changed = function () {
		var value = this.zeroTranslation;
		return value;
	};
	try {
		this.zeroTranslation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting zeroTranslation '+e);
		console.error('Problems setting zeroTranslation',e);
	}
	this.set_routeLoaded = function (value) {
		try {
			this.proxy.routeLoaded = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting routeLoaded '+e);
			console.error('Problems setting routeLoaded',e);
		}
	};
	this.routeLoaded_changed = function () {
		var value = this.routeLoaded;
		return value;
	};
	try {
		this.routeLoaded = new SFBool(true);
	} catch (e) {
		console.log('Problems setting routeLoaded '+e);
		console.error('Problems setting routeLoaded',e);
	}
	this.set_routeUnloaded = function (value) {
		try {
			this.proxy.routeUnloaded = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting routeUnloaded '+e);
			console.error('Problems setting routeUnloaded',e);
		}
	};
	this.routeUnloaded_changed = function () {
		var value = this.routeUnloaded;
		return value;
	};
	try {
		this.routeUnloaded = new SFBool(true);
	} catch (e) {
		console.log('Problems setting routeUnloaded '+e);
		console.error('Problems setting routeUnloaded',e);
	}
	this.set_thisNode = function (value) {
		try {
			this.proxy.thisNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting thisNode '+e);
			console.error('Problems setting thisNode',e);
		}
	};
	this.thisNode_changed = function () {
		var value = this.thisNode;
		return value;
	};
	try {
		this.thisNode = X3DJSON.nodeUtil("Scene","MountRifle1");
	} catch (e) {
		console.log('Problems setting thisNode '+e);
		console.error('Problems setting thisNode',e);
	}
	this.set_fromNode = function (value) {
		try {
			this.proxy.fromNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fromNode '+e);
			console.error('Problems setting fromNode',e);
		}
	};
	this.fromNode_changed = function () {
		var value = this.fromNode;
		return value;
	};
	try {
		this.fromNode = X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform");
	} catch (e) {
		console.log('Problems setting fromNode '+e);
		console.error('Problems setting fromNode',e);
	}
	this.set_toNode = function (value) {
		try {
			this.proxy.toNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toNode '+e);
			console.error('Problems setting toNode',e);
		}
	};
	this.toNode_changed = function () {
		var value = this.toNode;
		return value;
	};
	try {
		this.toNode = X3DJSON.nodeUtil("Scene","MountRifle1");
	} catch (e) {
		console.log('Problems setting toNode '+e);
		console.error('Problems setting toNode',e);
	}


ecmascript:

	this.mountedState = function ( mState, timeStamp )
{
	// 0=unmounted, 1=mounted
	if (mState == 0)
	{
		if (!this.proxy.routeUnloaded)
		{
			Browser.deleteRoute ( X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform", ""), 'translation_changed', X3DJSON.nodeUtil("Scene","MountRifle1", ""), 'this.proxy.translation' );
			Browser.deleteRoute ( X3DJSON.nodeUtil("Scene","MountRifle1", ""), 'this.proxy.zeroTranslation', X3DJSON.nodeUtil("Scene","MountRifle1", ""), 'set_translation' );
			this.proxy.routeUnloaded = true;
			console.error ('Just deleted Local Translation Routes. this.proxy.routeUnloaded = ' + this.proxy.routeUnloaded);
		}
		if (!this.proxy.routeLoaded)
		{
			Browser.addRoute ( X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform", ""), 'translation_changed', X3DJSON.nodeUtil("Scene","MountRifle1", ""), 'set_translation' );
			this.proxy.routeLoaded = true;
			console.error ('Just added Espdu Translation Routes. this.proxy.routeLoaded =' + this.proxy.routeLoaded);
		}
	}
	else
	{
		if (this.proxy.routeLoaded)
		{
			Browser.deleteRoute ( X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform", ""), 'translation_changed', X3DJSON.nodeUtil("Scene","MountRifle1", ""), 'set_translation' );
			this.proxy.routeLoaded = false;
			console.error ('Just deleted Espdu Translation Routes. this.proxy.routeLoaded = ' + this.proxy.routeLoaded);
		}
		if (this.proxy.routeUnloaded)
		{
			Browser.addRoute ( X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform", ""), 'translation_changed', X3DJSON.nodeUtil("Scene","MountRifle1", ""), 'this.proxy.translation' );
			Browser.addRoute ( X3DJSON.nodeUtil("Scene","MountRifle1", ""), 'this.proxy.zeroTranslation', X3DJSON.nodeUtil("Scene","MountRifle1", ""), 'set_translation' );
			this.proxy.routeUnloaded = false;
			console.error ('Just added Local Translation Routes. this.proxy.routeUnloaded = ' + this.proxy.routeUnloaded);
		}
	}
};

	this.translation = function (trans, timeStamp)
{
	this.proxy.zeroTranslation.x = 0.0;
	this.proxy.zeroTranslation.y = 0.0;
	this.proxy.zeroTranslation.z = 0.0;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1'] = function() {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1'] = function() {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle2'] = function() {
	this.set_mountedState = function (value) {
		try {
			this.proxy.mountedState = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting mountedState '+e);
			console.error('Problems setting mountedState',e);
		}
	};
	this.mountedState_changed = function () {
		var value = this.mountedState;
		return value;
	};
	try {
		this.mountedState = new SFFloat();
	} catch (e) {
		console.log('Problems setting mountedState '+e);
		console.error('Problems setting mountedState',e);
	}
	this.set_translation = function (value) {
		try {
			this.proxy.translation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting translation '+e);
			console.error('Problems setting translation',e);
		}
	};
	this.translation_changed = function () {
		var value = this.translation;
		return value;
	};
	try {
		this.translation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting translation '+e);
		console.error('Problems setting translation',e);
	}
	this.set_zeroTranslation = function (value) {
		try {
			this.proxy.zeroTranslation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting zeroTranslation '+e);
			console.error('Problems setting zeroTranslation',e);
		}
	};
	this.zeroTranslation_changed = function () {
		var value = this.zeroTranslation;
		return value;
	};
	try {
		this.zeroTranslation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting zeroTranslation '+e);
		console.error('Problems setting zeroTranslation',e);
	}
	this.set_routeLoaded = function (value) {
		try {
			this.proxy.routeLoaded = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting routeLoaded '+e);
			console.error('Problems setting routeLoaded',e);
		}
	};
	this.routeLoaded_changed = function () {
		var value = this.routeLoaded;
		return value;
	};
	try {
		this.routeLoaded = new SFBool(true);
	} catch (e) {
		console.log('Problems setting routeLoaded '+e);
		console.error('Problems setting routeLoaded',e);
	}
	this.set_routeUnloaded = function (value) {
		try {
			this.proxy.routeUnloaded = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting routeUnloaded '+e);
			console.error('Problems setting routeUnloaded',e);
		}
	};
	this.routeUnloaded_changed = function () {
		var value = this.routeUnloaded;
		return value;
	};
	try {
		this.routeUnloaded = new SFBool(true);
	} catch (e) {
		console.log('Problems setting routeUnloaded '+e);
		console.error('Problems setting routeUnloaded',e);
	}
	this.set_thisNode = function (value) {
		try {
			this.proxy.thisNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting thisNode '+e);
			console.error('Problems setting thisNode',e);
		}
	};
	this.thisNode_changed = function () {
		var value = this.thisNode;
		return value;
	};
	try {
		this.thisNode = X3DJSON.nodeUtil("Scene","MountRifle2");
	} catch (e) {
		console.log('Problems setting thisNode '+e);
		console.error('Problems setting thisNode',e);
	}
	this.set_fromNode = function (value) {
		try {
			this.proxy.fromNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fromNode '+e);
			console.error('Problems setting fromNode',e);
		}
	};
	this.fromNode_changed = function () {
		var value = this.fromNode;
		return value;
	};
	try {
		this.fromNode = X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform");
	} catch (e) {
		console.log('Problems setting fromNode '+e);
		console.error('Problems setting fromNode',e);
	}
	this.set_toNode = function (value) {
		try {
			this.proxy.toNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toNode '+e);
			console.error('Problems setting toNode',e);
		}
	};
	this.toNode_changed = function () {
		var value = this.toNode;
		return value;
	};
	try {
		this.toNode = X3DJSON.nodeUtil("Scene","Rifle2Transform");
	} catch (e) {
		console.log('Problems setting toNode '+e);
		console.error('Problems setting toNode',e);
	}


ecmascript:

	this.mountedState = function ( mState, timeStamp )
{
	// 0=unmounted, 1=mounted
	if (mState == 0)
	{
		if (!this.proxy.routeUnloaded)
		{
			Browser.deleteRoute ( X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform", ""), 'translation_changed', X3DJSON.nodeUtil("Scene","MountRifle2", ""), 'this.proxy.translation' );
			Browser.deleteRoute ( X3DJSON.nodeUtil("Scene","MountRifle2", ""), 'this.proxy.zeroTranslation', X3DJSON.nodeUtil("Scene","Rifle2Transform", ""), 'set_translation' );
			this.proxy.routeUnloaded = true;
			console.error ('Just deleted Local Translation Routes. this.proxy.routeUnloaded = ' + this.proxy.routeUnloaded);
		}
		if (!this.proxy.routeLoaded)
		{
			Browser.addRoute ( X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform", ""), 'translation_changed', X3DJSON.nodeUtil("Scene","Rifle2Transform", ""), 'set_translation' );
			this.proxy.routeLoaded = true;
			console.error ('Just added Espdu Translation Routes. this.proxy.routeLoaded =' + this.proxy.routeLoaded);
		}
	}
	else
	{
		if (this.proxy.routeLoaded)
		{
			Browser.deleteRoute ( X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform", ""), 'translation_changed', X3DJSON.nodeUtil("Scene","Rifle2Transform", ""), 'set_translation' );
			this.proxy.routeLoaded = false;
			console.error ('Just deleted Espdu Translation Routes. this.proxy.routeLoaded = ' + this.proxy.routeLoaded);
		}
		if (this.proxy.routeUnloaded)
		{
			Browser.addRoute ( X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform", ""), 'translation_changed', X3DJSON.nodeUtil("Scene","MountRifle2", ""), 'this.proxy.translation' );
			Browser.addRoute ( X3DJSON.nodeUtil("Scene","MountRifle2", ""), 'this.proxy.zeroTranslation', X3DJSON.nodeUtil("Scene","Rifle2Transform", ""), 'set_translation' );
			this.proxy.routeUnloaded = false;
			console.error ('Just added Local Translation Routes. this.proxy.routeUnloaded = ' + this.proxy.routeUnloaded);
		}
	}
};

	this.translation = function (trans, timeStamp)
{
	this.proxy.zeroTranslation.x = 0.0;
	this.proxy.zeroTranslation.y = 0.0;
	this.proxy.zeroTranslation.z = 0.0;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle2'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle2']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle2'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle2']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle2']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle2'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle2']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle2']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle2'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle2'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle2'] = function() {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle2'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle2']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle2'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle2'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle2']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle2']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle2'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle2']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle2']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle2'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle2'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountAutogun'] = function() {
	this.set_mountedState = function (value) {
		try {
			this.proxy.mountedState = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting mountedState '+e);
			console.error('Problems setting mountedState',e);
		}
	};
	this.mountedState_changed = function () {
		var value = this.mountedState;
		return value;
	};
	try {
		this.mountedState = new SFFloat();
	} catch (e) {
		console.log('Problems setting mountedState '+e);
		console.error('Problems setting mountedState',e);
	}
	this.set_translation = function (value) {
		try {
			this.proxy.translation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting translation '+e);
			console.error('Problems setting translation',e);
		}
	};
	this.translation_changed = function () {
		var value = this.translation;
		return value;
	};
	try {
		this.translation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting translation '+e);
		console.error('Problems setting translation',e);
	}
	this.set_zeroTranslation = function (value) {
		try {
			this.proxy.zeroTranslation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting zeroTranslation '+e);
			console.error('Problems setting zeroTranslation',e);
		}
	};
	this.zeroTranslation_changed = function () {
		var value = this.zeroTranslation;
		return value;
	};
	try {
		this.zeroTranslation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting zeroTranslation '+e);
		console.error('Problems setting zeroTranslation',e);
	}
	this.set_routeLoaded = function (value) {
		try {
			this.proxy.routeLoaded = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting routeLoaded '+e);
			console.error('Problems setting routeLoaded',e);
		}
	};
	this.routeLoaded_changed = function () {
		var value = this.routeLoaded;
		return value;
	};
	try {
		this.routeLoaded = new SFBool(true);
	} catch (e) {
		console.log('Problems setting routeLoaded '+e);
		console.error('Problems setting routeLoaded',e);
	}
	this.set_routeUnloaded = function (value) {
		try {
			this.proxy.routeUnloaded = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting routeUnloaded '+e);
			console.error('Problems setting routeUnloaded',e);
		}
	};
	this.routeUnloaded_changed = function () {
		var value = this.routeUnloaded;
		return value;
	};
	try {
		this.routeUnloaded = new SFBool(true);
	} catch (e) {
		console.log('Problems setting routeUnloaded '+e);
		console.error('Problems setting routeUnloaded',e);
	}
	this.set_thisNode = function (value) {
		try {
			this.proxy.thisNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting thisNode '+e);
			console.error('Problems setting thisNode',e);
		}
	};
	this.thisNode_changed = function () {
		var value = this.thisNode;
		return value;
	};
	try {
		this.thisNode = X3DJSON.nodeUtil("Scene","MountAutogun");
	} catch (e) {
		console.log('Problems setting thisNode '+e);
		console.error('Problems setting thisNode',e);
	}
	this.set_fromNode = function (value) {
		try {
			this.proxy.fromNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fromNode '+e);
			console.error('Problems setting fromNode',e);
		}
	};
	this.fromNode_changed = function () {
		var value = this.fromNode;
		return value;
	};
	try {
		this.fromNode = X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform");
	} catch (e) {
		console.log('Problems setting fromNode '+e);
		console.error('Problems setting fromNode',e);
	}
	this.set_toNode = function (value) {
		try {
			this.proxy.toNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toNode '+e);
			console.error('Problems setting toNode',e);
		}
	};
	this.toNode_changed = function () {
		var value = this.toNode;
		return value;
	};
	try {
		this.toNode = X3DJSON.nodeUtil("Scene","AutogunTransform");
	} catch (e) {
		console.log('Problems setting toNode '+e);
		console.error('Problems setting toNode',e);
	}


ecmascript:

	this.mountedState = function ( mState, timeStamp )
{
	// 0=unmounted, 1=mounted
	if (mState == 0)
	{
		if (!this.proxy.routeUnloaded)
		{
			Browser.deleteRoute ( X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform", ""), 'translation_changed', X3DJSON.nodeUtil("Scene","MountAutogun", ""), 'this.proxy.translation' );
			Browser.deleteRoute ( X3DJSON.nodeUtil("Scene","MountAutogun", ""), 'this.proxy.zeroTranslation', X3DJSON.nodeUtil("Scene","AutogunTransform", ""), 'set_translation' );
			this.proxy.routeUnloaded = true;
			console.error ('Just deleted Local Translation Routes. this.proxy.routeUnloaded = ' + this.proxy.routeUnloaded);
		}
		if (!this.proxy.routeLoaded)
		{
			Browser.addRoute ( X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform", ""), 'translation_changed', X3DJSON.nodeUtil("Scene","AutogunTransform", ""), 'set_translation' );
			this.proxy.routeLoaded = true;
			console.error ('Just added Espdu Translation Routes. this.proxy.routeLoaded =' + this.proxy.routeLoaded);
		}
	}
	else
	{
		if (this.proxy.routeLoaded)
		{
			Browser.deleteRoute ( X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform", ""), 'translation_changed', X3DJSON.nodeUtil("Scene","AutogunTransform", ""), 'set_translation' );
			this.proxy.routeLoaded = false;
			console.error ('Just deleted Espdu Translation Routes. this.proxy.routeLoaded = ' + this.proxy.routeLoaded);
		}
		if (this.proxy.routeUnloaded)
		{
			Browser.addRoute ( X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform", ""), 'translation_changed', X3DJSON.nodeUtil("Scene","MountAutogun", ""), 'this.proxy.translation' );
			Browser.addRoute ( X3DJSON.nodeUtil("Scene","MountAutogun", ""), 'this.proxy.zeroTranslation', X3DJSON.nodeUtil("Scene","AutogunTransform", ""), 'set_translation' );
			this.proxy.routeUnloaded = false;
			console.error ('Just added Local Translation Routes. this.proxy.routeUnloaded = ' + this.proxy.routeUnloaded);
		}
	}
};

	this.translation = function (trans, timeStamp)
{
	this.proxy.zeroTranslation.x = 0.0;
	this.proxy.zeroTranslation.y = 0.0;
	this.proxy.zeroTranslation.z = 0.0;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountAutogun'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountAutogun']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountAutogun'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountAutogun'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountAutogun']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountAutogun']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountAutogun'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountAutogun']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountAutogun']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountAutogun'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountAutogun'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountAutogun'] = function() {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountAutogun'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountAutogun']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountAutogun'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountAutogun'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountAutogun']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountAutogun']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountAutogun'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountAutogun']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountAutogun']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountAutogun'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountAutogun'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountGrenadier'] = function() {
	this.set_mountedState = function (value) {
		try {
			this.proxy.mountedState = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting mountedState '+e);
			console.error('Problems setting mountedState',e);
		}
	};
	this.mountedState_changed = function () {
		var value = this.mountedState;
		return value;
	};
	try {
		this.mountedState = new SFFloat();
	} catch (e) {
		console.log('Problems setting mountedState '+e);
		console.error('Problems setting mountedState',e);
	}
	this.set_translation = function (value) {
		try {
			this.proxy.translation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting translation '+e);
			console.error('Problems setting translation',e);
		}
	};
	this.translation_changed = function () {
		var value = this.translation;
		return value;
	};
	try {
		this.translation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting translation '+e);
		console.error('Problems setting translation',e);
	}
	this.set_zeroTranslation = function (value) {
		try {
			this.proxy.zeroTranslation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting zeroTranslation '+e);
			console.error('Problems setting zeroTranslation',e);
		}
	};
	this.zeroTranslation_changed = function () {
		var value = this.zeroTranslation;
		return value;
	};
	try {
		this.zeroTranslation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting zeroTranslation '+e);
		console.error('Problems setting zeroTranslation',e);
	}
	this.set_routeLoaded = function (value) {
		try {
			this.proxy.routeLoaded = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting routeLoaded '+e);
			console.error('Problems setting routeLoaded',e);
		}
	};
	this.routeLoaded_changed = function () {
		var value = this.routeLoaded;
		return value;
	};
	try {
		this.routeLoaded = new SFBool(true);
	} catch (e) {
		console.log('Problems setting routeLoaded '+e);
		console.error('Problems setting routeLoaded',e);
	}
	this.set_routeUnloaded = function (value) {
		try {
			this.proxy.routeUnloaded = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting routeUnloaded '+e);
			console.error('Problems setting routeUnloaded',e);
		}
	};
	this.routeUnloaded_changed = function () {
		var value = this.routeUnloaded;
		return value;
	};
	try {
		this.routeUnloaded = new SFBool(true);
	} catch (e) {
		console.log('Problems setting routeUnloaded '+e);
		console.error('Problems setting routeUnloaded',e);
	}
	this.set_thisNode = function (value) {
		try {
			this.proxy.thisNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting thisNode '+e);
			console.error('Problems setting thisNode',e);
		}
	};
	this.thisNode_changed = function () {
		var value = this.thisNode;
		return value;
	};
	try {
		this.thisNode = X3DJSON.nodeUtil("Scene","MountGrenadier");
	} catch (e) {
		console.log('Problems setting thisNode '+e);
		console.error('Problems setting thisNode',e);
	}
	this.set_fromNode = function (value) {
		try {
			this.proxy.fromNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fromNode '+e);
			console.error('Problems setting fromNode',e);
		}
	};
	this.fromNode_changed = function () {
		var value = this.fromNode;
		return value;
	};
	try {
		this.fromNode = X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform");
	} catch (e) {
		console.log('Problems setting fromNode '+e);
		console.error('Problems setting fromNode',e);
	}
	this.set_toNode = function (value) {
		try {
			this.proxy.toNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toNode '+e);
			console.error('Problems setting toNode',e);
		}
	};
	this.toNode_changed = function () {
		var value = this.toNode;
		return value;
	};
	try {
		this.toNode = X3DJSON.nodeUtil("Scene","GrenadierTransform");
	} catch (e) {
		console.log('Problems setting toNode '+e);
		console.error('Problems setting toNode',e);
	}


ecmascript:

	this.mountedState = function ( mState, timeStamp )
{
	// 0=unmounted, 1=mounted
	if (mState == 0)
	{
		if (!this.proxy.routeUnloaded)
		{
			Browser.deleteRoute ( X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform", ""), 'translation_changed', X3DJSON.nodeUtil("Scene","MountGrenadier", ""), 'this.proxy.translation' );
			Browser.deleteRoute ( X3DJSON.nodeUtil("Scene","MountGrenadier", ""), 'this.proxy.zeroTranslation', X3DJSON.nodeUtil("Scene","GrenadierTransform", ""), 'set_translation' );
			this.proxy.routeUnloaded = true;
			console.error ('Just deleted Local Translation Routes. this.proxy.routeUnloaded = ' + this.proxy.routeUnloaded);
		}
		if (!this.proxy.routeLoaded)
		{
			Browser.addRoute ( X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform", ""), 'translation_changed', X3DJSON.nodeUtil("Scene","GrenadierTransform", ""), 'set_translation' );
			this.proxy.routeLoaded = true;
			console.error ('Just added Espdu Translation Routes. this.proxy.routeLoaded =' + this.proxy.routeLoaded);
		}
	}
	else
	{
		if (this.proxy.routeLoaded)
		{
			Browser.deleteRoute ( X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform", ""), 'translation_changed', X3DJSON.nodeUtil("Scene","GrenadierTransform", ""), 'set_translation' );
			this.proxy.routeLoaded = false;
			console.error ('Just deleted Espdu Translation Routes. this.proxy.routeLoaded = ' + this.proxy.routeLoaded);
		}
		if (this.proxy.routeUnloaded)
		{
			Browser.addRoute ( X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform", ""), 'translation_changed', X3DJSON.nodeUtil("Scene","MountGrenadier", ""), 'this.proxy.translation' );
			Browser.addRoute ( X3DJSON.nodeUtil("Scene","MountGrenadier", ""), 'this.proxy.zeroTranslation', X3DJSON.nodeUtil("Scene","GrenadierTransform", ""), 'set_translation' );
			this.proxy.routeUnloaded = false;
			console.error ('Just added Local Translation Routes. this.proxy.routeUnloaded = ' + this.proxy.routeUnloaded);
		}
	}
};

	this.translation = function (trans, timeStamp)
{
	this.proxy.zeroTranslation.x = 0.0;
	this.proxy.zeroTranslation.y = 0.0;
	this.proxy.zeroTranslation.z = 0.0;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountGrenadier'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountGrenadier']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountGrenadier'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountGrenadier'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountGrenadier']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountGrenadier']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountGrenadier'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountGrenadier']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountGrenadier']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountGrenadier'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountGrenadier'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountGrenadier'] = function() {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountGrenadier'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountGrenadier']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountGrenadier'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountGrenadier'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountGrenadier']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountGrenadier']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountGrenadier'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountGrenadier']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountGrenadier']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountGrenadier'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountGrenadier'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountHuey'] = function() {
	this.set_mountedState = function (value) {
		try {
			this.proxy.mountedState = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting mountedState '+e);
			console.error('Problems setting mountedState',e);
		}
	};
	this.mountedState_changed = function () {
		var value = this.mountedState;
		return value;
	};
	try {
		this.mountedState = new SFFloat();
	} catch (e) {
		console.log('Problems setting mountedState '+e);
		console.error('Problems setting mountedState',e);
	}
	this.set_translation = function (value) {
		try {
			this.proxy.translation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting translation '+e);
			console.error('Problems setting translation',e);
		}
	};
	this.translation_changed = function () {
		var value = this.translation;
		return value;
	};
	try {
		this.translation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting translation '+e);
		console.error('Problems setting translation',e);
	}
	this.set_zeroTranslation = function (value) {
		try {
			this.proxy.zeroTranslation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting zeroTranslation '+e);
			console.error('Problems setting zeroTranslation',e);
		}
	};
	this.zeroTranslation_changed = function () {
		var value = this.zeroTranslation;
		return value;
	};
	try {
		this.zeroTranslation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting zeroTranslation '+e);
		console.error('Problems setting zeroTranslation',e);
	}
	this.set_routeLoaded = function (value) {
		try {
			this.proxy.routeLoaded = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting routeLoaded '+e);
			console.error('Problems setting routeLoaded',e);
		}
	};
	this.routeLoaded_changed = function () {
		var value = this.routeLoaded;
		return value;
	};
	try {
		this.routeLoaded = new SFBool(true);
	} catch (e) {
		console.log('Problems setting routeLoaded '+e);
		console.error('Problems setting routeLoaded',e);
	}
	this.set_routeUnloaded = function (value) {
		try {
			this.proxy.routeUnloaded = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting routeUnloaded '+e);
			console.error('Problems setting routeUnloaded',e);
		}
	};
	this.routeUnloaded_changed = function () {
		var value = this.routeUnloaded;
		return value;
	};
	try {
		this.routeUnloaded = new SFBool(true);
	} catch (e) {
		console.log('Problems setting routeUnloaded '+e);
		console.error('Problems setting routeUnloaded',e);
	}
	this.set_thisNode = function (value) {
		try {
			this.proxy.thisNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting thisNode '+e);
			console.error('Problems setting thisNode',e);
		}
	};
	this.thisNode_changed = function () {
		var value = this.thisNode;
		return value;
	};
	try {
		this.thisNode = X3DJSON.nodeUtil("Scene","MountHuey");
	} catch (e) {
		console.log('Problems setting thisNode '+e);
		console.error('Problems setting thisNode',e);
	}
	this.set_fromNode = function (value) {
		try {
			this.proxy.fromNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting fromNode '+e);
			console.error('Problems setting fromNode',e);
		}
	};
	this.fromNode_changed = function () {
		var value = this.fromNode;
		return value;
	};
	try {
		this.fromNode = X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform");
	} catch (e) {
		console.log('Problems setting fromNode '+e);
		console.error('Problems setting fromNode',e);
	}
	this.set_toNode = function (value) {
		try {
			this.proxy.toNode = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting toNode '+e);
			console.error('Problems setting toNode',e);
		}
	};
	this.toNode_changed = function () {
		var value = this.toNode;
		return value;
	};
	try {
		this.toNode = X3DJSON.nodeUtil("Scene","HueyTransform");
	} catch (e) {
		console.log('Problems setting toNode '+e);
		console.error('Problems setting toNode',e);
	}


ecmascript:

	this.mountedState = function ( mState, timeStamp )
{
	// 0=unmounted, 1=mounted
	if (mState == 0)
	{
		if (!this.proxy.routeUnloaded)
		{
			Browser.deleteRoute ( X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform", ""), 'translation_changed', X3DJSON.nodeUtil("Scene","MountHuey", ""), 'this.proxy.translation' );
			Browser.deleteRoute ( X3DJSON.nodeUtil("Scene","MountHuey", ""), 'this.proxy.zeroTranslation', X3DJSON.nodeUtil("Scene","HueyTransform", ""), 'set_translation' );
			this.proxy.routeUnloaded = true;
			console.error ('Just deleted Local Translation Routes. this.proxy.routeUnloaded = ' + this.proxy.routeUnloaded);
		}
		if (!this.proxy.routeLoaded)
		{
			Browser.addRoute ( X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform", ""), 'translation_changed', X3DJSON.nodeUtil("Scene","HueyTransform", ""), 'set_translation' );
			this.proxy.routeLoaded = true;
			console.error ('Just added Espdu Translation Routes. this.proxy.routeLoaded =' + this.proxy.routeLoaded);
		}
	}
	else
	{
		if (this.proxy.routeLoaded)
		{
			Browser.deleteRoute ( X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform", ""), 'translation_changed', X3DJSON.nodeUtil("Scene","HueyTransform", ""), 'set_translation' );
			this.proxy.routeLoaded = false;
			console.error ('Just deleted Espdu Translation Routes. this.proxy.routeLoaded = ' + this.proxy.routeLoaded);
		}
		if (this.proxy.routeUnloaded)
		{
			Browser.addRoute ( X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform", ""), 'translation_changed', X3DJSON.nodeUtil("Scene","MountHuey", ""), 'this.proxy.translation' );
			Browser.addRoute ( X3DJSON.nodeUtil("Scene","MountHuey", ""), 'this.proxy.zeroTranslation', X3DJSON.nodeUtil("Scene","HueyTransform", ""), 'set_translation' );
			this.proxy.routeUnloaded = false;
			console.error ('Just added Local Translation Routes. this.proxy.routeUnloaded = ' + this.proxy.routeUnloaded);
		}
	}
};

	this.translation = function (trans, timeStamp)
{
	this.proxy.zeroTranslation.x = 0.0;
	this.proxy.zeroTranslation.y = 0.0;
	this.proxy.zeroTranslation.z = 0.0;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountHuey'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountHuey']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountHuey'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountHuey'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountHuey']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountHuey']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountHuey'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountHuey']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountHuey']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountHuey'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountHuey'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountHuey'] = function() {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountHuey'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountHuey']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountHuey'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountHuey'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountHuey']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountHuey']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountHuey'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountHuey']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountHuey']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountHuey'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountHuey'].initialize();
    if (X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform")) {
X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible'].set_Visible(X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform","articulationParameterValue0"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible'].set_Visible(X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform","articulationParameterValue0"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible']['ACTION']['Visible'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible']['ACTION']['Visible'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible']['ACTION']['Visible'].push(function(property, value) {
		if (property === 'Visible') {
			X3DJSON.nodeUtil("Scene","NancyTeamSwap","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible'].Visible_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible'].Visible_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible'].Visible, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","NancyTeamSwap","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible'].Visible_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible'].Visible_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible'].Visible, __eventTime);
    if (X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform")) {
X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountLeader'].mountedState(X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform","articulationParameterValue1"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountLeader'].mountedState(X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform","articulationParameterValue1"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform")) {
X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform")) {
X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1'].mountedState(X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform","articulationParameterValue2"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1'].mountedState(X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform","articulationParameterValue2"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform")) {
X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform")) {
X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle2'].mountedState(X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform","articulationParameterValue3"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle2'].mountedState(X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform","articulationParameterValue3"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform")) {
X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform")) {
X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountAutogun'].mountedState(X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform","articulationParameterValue4"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountAutogun'].mountedState(X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform","articulationParameterValue4"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform")) {
X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform")) {
X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountGrenadier'].mountedState(X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform","articulationParameterValue5"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountGrenadier'].mountedState(X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform","articulationParameterValue5"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform")) {
X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform")) {
X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountHuey'].mountedState(X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform","articulationParameterValue6"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountHuey'].mountedState(X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform","articulationParameterValue6"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform")) {
X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible'].set_Visible(X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform","articulationParameterValue0"), __eventTime);
			X3DJSON.nodeUtil("Scene","NancyTeamSwap","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible'].Visible_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible'].Visible_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['NancyTeamVisible'].Visible, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountLeader'].mountedState(X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform","articulationParameterValue1"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle1'].mountedState(X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform","articulationParameterValue2"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountRifle2'].mountedState(X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform","articulationParameterValue3"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountAutogun'].mountedState(X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform","articulationParameterValue4"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountGrenadier'].mountedState(X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform","articulationParameterValue5"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Scenarios/CaptureTheFlag/NancyTeamAddRoutes.json']['MountHuey'].mountedState(X3DJSON.nodeUtil("Scene","NancyTeamAddRoutes_EspduTransform","articulationParameterValue6"), __eventTime);