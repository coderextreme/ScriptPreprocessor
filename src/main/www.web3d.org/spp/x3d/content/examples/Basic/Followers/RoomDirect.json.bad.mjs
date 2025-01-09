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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'] = function() {
	this.set_hitPoint = function (value) {
		try {
			this.proxy.hitPoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting hitPoint '+e);
			console.error('Problems setting hitPoint',e);
		}
	};
	this.hitPoint_changed = function () {
		var value = this.hitPoint;
		return value;
	};
	try {
		this.hitPoint = undefined;
	} catch (e) {
		console.log('Problems setting hitPoint '+e);
		console.error('Problems setting hitPoint',e);
	}
	this.set_touchedWallLeft = function (value) {
		try {
			this.proxy.touchedWallLeft = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting touchedWallLeft '+e);
			console.error('Problems setting touchedWallLeft',e);
		}
	};
	this.touchedWallLeft_changed = function () {
		var value = this.touchedWallLeft;
		return value;
	};
	try {
		this.touchedWallLeft = new SFTime();
	} catch (e) {
		console.log('Problems setting touchedWallLeft '+e);
		console.error('Problems setting touchedWallLeft',e);
	}
	this.set_indPos = function (value) {
		try {
			this.proxy.indPos = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting indPos '+e);
			console.error('Problems setting indPos',e);
		}
	};
	this.indPos_changed = function () {
		var value = this.indPos;
		return value;
	};
	try {
		this.indPos = new SFVec3f();
	} catch (e) {
		console.log('Problems setting indPos '+e);
		console.error('Problems setting indPos',e);
	}
	this.set_touchedWallRight = function (value) {
		try {
			this.proxy.touchedWallRight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting touchedWallRight '+e);
			console.error('Problems setting touchedWallRight',e);
		}
	};
	this.touchedWallRight_changed = function () {
		var value = this.touchedWallRight;
		return value;
	};
	try {
		this.touchedWallRight = new SFTime();
	} catch (e) {
		console.log('Problems setting touchedWallRight '+e);
		console.error('Problems setting touchedWallRight',e);
	}
	this.set_cRoomDepth = function (value) {
		try {
			this.proxy.cRoomDepth = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cRoomDepth '+e);
			console.error('Problems setting cRoomDepth',e);
		}
	};
	this.cRoomDepth_changed = function () {
		var value = this.cRoomDepth;
		return value;
	};
	try {
		this.cRoomDepth = new SFFloat(9.9);
	} catch (e) {
		console.log('Problems setting cRoomDepth '+e);
		console.error('Problems setting cRoomDepth',e);
	}
	this.set_cPaintingWidth = function (value) {
		try {
			this.proxy.cPaintingWidth = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cPaintingWidth '+e);
			console.error('Problems setting cPaintingWidth',e);
		}
	};
	this.cPaintingWidth_changed = function () {
		var value = this.cPaintingWidth;
		return value;
	};
	try {
		this.cPaintingWidth = new SFFloat(1.561);
	} catch (e) {
		console.log('Problems setting cPaintingWidth '+e);
		console.error('Problems setting cPaintingWidth',e);
	}
	this.set_cFloorY = function (value) {
		try {
			this.proxy.cFloorY = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cFloorY '+e);
			console.error('Problems setting cFloorY',e);
		}
	};
	this.cFloorY_changed = function () {
		var value = this.cFloorY;
		return value;
	};
	try {
		this.cFloorY = new SFFloat(0.05);
	} catch (e) {
		console.log('Problems setting cFloorY '+e);
		console.error('Problems setting cFloorY',e);
	}
	this.set_cPaintingHeight = function (value) {
		try {
			this.proxy.cPaintingHeight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cPaintingHeight '+e);
			console.error('Problems setting cPaintingHeight',e);
		}
	};
	this.cPaintingHeight_changed = function () {
		var value = this.cPaintingHeight;
		return value;
	};
	try {
		this.cPaintingHeight = new SFFloat(2.046);
	} catch (e) {
		console.log('Problems setting cPaintingHeight '+e);
		console.error('Problems setting cPaintingHeight',e);
	}
	this.set_touchedWallFront = function (value) {
		try {
			this.proxy.touchedWallFront = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting touchedWallFront '+e);
			console.error('Problems setting touchedWallFront',e);
		}
	};
	this.touchedWallFront_changed = function () {
		var value = this.touchedWallFront;
		return value;
	};
	try {
		this.touchedWallFront = new SFTime();
	} catch (e) {
		console.log('Problems setting touchedWallFront '+e);
		console.error('Problems setting touchedWallFront',e);
	}
	this.set_touchedFloor = function (value) {
		try {
			this.proxy.touchedFloor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting touchedFloor '+e);
			console.error('Problems setting touchedFloor',e);
		}
	};
	this.touchedFloor_changed = function () {
		var value = this.touchedFloor;
		return value;
	};
	try {
		this.touchedFloor = new SFTime();
	} catch (e) {
		console.log('Problems setting touchedFloor '+e);
		console.error('Problems setting touchedFloor',e);
	}
	this.set_touchedRoof = function (value) {
		try {
			this.proxy.touchedRoof = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting touchedRoof '+e);
			console.error('Problems setting touchedRoof',e);
		}
	};
	this.touchedRoof_changed = function () {
		var value = this.touchedRoof;
		return value;
	};
	try {
		this.touchedRoof = new SFTime();
	} catch (e) {
		console.log('Problems setting touchedRoof '+e);
		console.error('Problems setting touchedRoof',e);
	}
	this.set_indOri = function (value) {
		try {
			this.proxy.indOri = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting indOri '+e);
			console.error('Problems setting indOri',e);
		}
	};
	this.indOri_changed = function () {
		var value = this.indOri;
		return value;
	};
	try {
		this.indOri = new SFRotation();
	} catch (e) {
		console.log('Problems setting indOri '+e);
		console.error('Problems setting indOri',e);
	}
	this.set_cRoomHeight = function (value) {
		try {
			this.proxy.cRoomHeight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cRoomHeight '+e);
			console.error('Problems setting cRoomHeight',e);
		}
	};
	this.cRoomHeight_changed = function () {
		var value = this.cRoomHeight;
		return value;
	};
	try {
		this.cRoomHeight = new SFFloat(2.9);
	} catch (e) {
		console.log('Problems setting cRoomHeight '+e);
		console.error('Problems setting cRoomHeight',e);
	}
	this.set_cRoomWidth = function (value) {
		try {
			this.proxy.cRoomWidth = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cRoomWidth '+e);
			console.error('Problems setting cRoomWidth',e);
		}
	};
	this.cRoomWidth_changed = function () {
		var value = this.cRoomWidth;
		return value;
	};
	try {
		this.cRoomWidth = new SFFloat(9.9);
	} catch (e) {
		console.log('Problems setting cRoomWidth '+e);
		console.error('Problems setting cRoomWidth',e);
	}
	this.set_lastHitPoint = function (value) {
		try {
			this.proxy.lastHitPoint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting lastHitPoint '+e);
			console.error('Problems setting lastHitPoint',e);
		}
	};
	this.lastHitPoint_changed = function () {
		var value = this.lastHitPoint;
		return value;
	};
	try {
		this.lastHitPoint = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting lastHitPoint '+e);
		console.error('Problems setting lastHitPoint',e);
	}


ecmascript:

	this.set_hitPoint = function (hp)
{
    this.proxy.lastHitPoint= hp;
}
;

	this.touchedFloor = function (t)
{
    this.proxy.indPos= this.CheckGroundRoof(this.proxy.lastHitPoint);
    this.proxy.indOri= new SFRotation(-1, 0, 0, 1.571);
}
;

	this.touchedWallLeft = function (t)
{
    this.proxy.indPos= this.CheckLeftRightWall(this.CheckHeight(this.proxy.lastHitPoint));
    this.proxy.indOri= new SFRotation(0, 1, 0, 1.5705);
}
;

	this.touchedWallRight = function (t)
{
    this.proxy.indPos= this.CheckLeftRightWall(this.CheckHeight(this.proxy.lastHitPoint));
    this.proxy.indOri= new SFRotation(0, -1, 0, 1.5705);
}
;

	this.touchedWallFront = function (t)
{
    this.proxy.indPos= this.CheckFrontWall(this.CheckHeight(this.proxy.lastHitPoint));
    this.proxy.indOri= new SFRotation(0, 1, 0, 0);
}
;

	this.touchedRoof = function (t)
{
    this.proxy.indPos= this.CheckGroundRoof(this.proxy.lastHitPoint);
    this.proxy.indOri= (new SFRotation(1, 0, 0, 1.57));//.multiply(new SFRotation(0, 1, 0, 3.14159));
}
;

	this.CheckGroundRoof = function (pos)
{
return new SFVec3f( this.Limit(pos.x, -this.proxy.cRoomWidth/2 + this.proxy.cPaintingWidth/2, this.proxy.cRoomWidth/2 - this.proxy.cPaintingWidth/2)
                  , pos.y
                  , this.Limit(pos.z, -this.proxy.cRoomDepth/2 + this.proxy.cPaintingHeight/2, this.proxy.cRoomDepth/2 - this.proxy.cPaintingHeight/2)
                  );
}
;

	this.CheckHeight = function (pos)
{
return new SFVec3f( pos.x
                  , this.Limit(pos.y, this.proxy.cFloorY + this.proxy.cPaintingHeight/2, this.proxy.cFloorY + this.proxy.cRoomHeight - this.proxy.cPaintingHeight/2)
                  , pos.z
                  );
}
;

	this.CheckLeftRightWall = function (pos)
{
    return new SFVec3f( pos.x
                      , pos.y
                      , this.Limit(pos.z, -this.proxy.cRoomDepth/2 + this.proxy.cPaintingWidth/2, this.proxy.cRoomDepth/2 - this.proxy.cPaintingWidth/2)
                      );
}
;

	this.CheckFrontWall = function (pos)
{
    return new SFVec3f( this.Limit(pos.x, -this.proxy.cRoomWidth/2 + this.proxy.cPaintingWidth/2, this.proxy.cRoomWidth/2 - this.proxy.cPaintingWidth/2)
                      , pos.y
                      , pos.z
                      );
};

	this.Limit = function (x, min, max)
{
    return this.Min(this.Max(x, min), max);
}
;

	this.Max = function (a, b)
{
    return a > b? a:b;
}
;

	this.Min = function (a, b)
{
    return a > b? b:a;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].initialize();
    if (X3DJSON.nodeUtil("Scene","TouchFloor")) {
X3DJSON.nodeUtil("Scene","TouchFloor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].set_hitPoint(X3DJSON.nodeUtil("Scene","TouchFloor","hitPoint"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].set_hitPoint(X3DJSON.nodeUtil("Scene","TouchFloor","hitPoint"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TouchWallLeft")) {
X3DJSON.nodeUtil("Scene","TouchWallLeft").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].set_hitPoint(X3DJSON.nodeUtil("Scene","TouchWallLeft","hitPoint"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].set_hitPoint(X3DJSON.nodeUtil("Scene","TouchWallLeft","hitPoint"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TouchWallRight")) {
X3DJSON.nodeUtil("Scene","TouchWallRight").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].set_hitPoint(X3DJSON.nodeUtil("Scene","TouchWallRight","hitPoint"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].set_hitPoint(X3DJSON.nodeUtil("Scene","TouchWallRight","hitPoint"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TouchWallFront")) {
X3DJSON.nodeUtil("Scene","TouchWallFront").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].set_hitPoint(X3DJSON.nodeUtil("Scene","TouchWallFront","hitPoint"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].set_hitPoint(X3DJSON.nodeUtil("Scene","TouchWallFront","hitPoint"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TouchRoof")) {
X3DJSON.nodeUtil("Scene","TouchRoof").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].set_hitPoint(X3DJSON.nodeUtil("Scene","TouchRoof","hitPoint"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].set_hitPoint(X3DJSON.nodeUtil("Scene","TouchRoof","hitPoint"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TouchFloor")) {
X3DJSON.nodeUtil("Scene","TouchFloor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].touchedFloor(X3DJSON.nodeUtil("Scene","TouchFloor","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].touchedFloor(X3DJSON.nodeUtil("Scene","TouchFloor","touchTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TouchWallLeft")) {
X3DJSON.nodeUtil("Scene","TouchWallLeft").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].touchedWallLeft(X3DJSON.nodeUtil("Scene","TouchWallLeft","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].touchedWallLeft(X3DJSON.nodeUtil("Scene","TouchWallLeft","touchTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TouchWallRight")) {
X3DJSON.nodeUtil("Scene","TouchWallRight").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].touchedWallRight(X3DJSON.nodeUtil("Scene","TouchWallRight","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].touchedWallRight(X3DJSON.nodeUtil("Scene","TouchWallRight","touchTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TouchWallFront")) {
X3DJSON.nodeUtil("Scene","TouchWallFront").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].touchedWallFront(X3DJSON.nodeUtil("Scene","TouchWallFront","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].touchedWallFront(X3DJSON.nodeUtil("Scene","TouchWallFront","touchTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TouchRoof")) {
X3DJSON.nodeUtil("Scene","TouchRoof").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].touchedRoof(X3DJSON.nodeUtil("Scene","TouchRoof","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].touchedRoof(X3DJSON.nodeUtil("Scene","TouchRoof","touchTime"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker']['ACTION']['indPos'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker']['ACTION']['indPos'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker']['ACTION']['indPos'].push(function(property, value) {
		if (property === 'indPos') {
			X3DJSON.nodeUtil("Scene","TransInd","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].indPos === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].indPos() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].indPos, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TransInd","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].indPos === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].indPos() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].indPos, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker']['ACTION']['indOri'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker']['ACTION']['indOri'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker']['ACTION']['indOri'].push(function(property, value) {
		if (property === 'indOri') {
			X3DJSON.nodeUtil("Scene","TransInd","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].indOri === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].indOri() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].indOri, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TransInd","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].indOri === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].indOri() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].indOri, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].set_hitPoint(X3DJSON.nodeUtil("Scene","TouchFloor","hitPoint"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].set_hitPoint(X3DJSON.nodeUtil("Scene","TouchWallLeft","hitPoint"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].set_hitPoint(X3DJSON.nodeUtil("Scene","TouchWallRight","hitPoint"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].set_hitPoint(X3DJSON.nodeUtil("Scene","TouchWallFront","hitPoint"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].set_hitPoint(X3DJSON.nodeUtil("Scene","TouchRoof","hitPoint"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].touchedFloor(X3DJSON.nodeUtil("Scene","TouchFloor","touchTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].touchedWallLeft(X3DJSON.nodeUtil("Scene","TouchWallLeft","touchTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].touchedWallRight(X3DJSON.nodeUtil("Scene","TouchWallRight","touchTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].touchedWallFront(X3DJSON.nodeUtil("Scene","TouchWallFront","touchTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].touchedRoof(X3DJSON.nodeUtil("Scene","TouchRoof","touchTime"), __eventTime);
			X3DJSON.nodeUtil("Scene","TransInd","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].indPos === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].indPos() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].indPos, __eventTime);
			X3DJSON.nodeUtil("Scene","TransInd","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].indOri === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].indOri() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/RoomDirect.json']['Worker'].indOri, __eventTime);